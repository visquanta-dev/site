#!/usr/bin/env node
/**
 * Refresh blog post frontmatter without touching the body.
 *
 * Usage:
 *   node scripts/refresh-blog-frontmatter.js <slug> \
 *     --updated 2026-04-25 \
 *     --author william-voyles \
 *     --entities entities.json
 *
 * The entities JSON file is optional and expects an array of
 * { name, sameAs } objects that will be written to the post's
 * `entities:` frontmatter field (consumed by src/app/blog/[slug]/page.tsx).
 *
 * Why gray-matter: regex-replacing YAML fields is fragile for quoted
 * strings, multi-line values, and arrays. Parse → mutate → stringify is
 * the only path that survives edge cases without silently corrupting
 * frontmatter.
 */

const fs = require('node:fs');
const path = require('node:path');
const matter = require('gray-matter');

function parseArgs(argv) {
  const args = { slug: null, updated: null, author: null, entities: null };
  const rest = [];
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--updated') args.updated = argv[++i];
    else if (a === '--author') args.author = argv[++i];
    else if (a === '--entities') args.entities = argv[++i];
    else rest.push(a);
  }
  args.slug = rest[0];
  return args;
}

function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.slug) {
    console.error('Usage: node refresh-blog-frontmatter.js <slug> [--updated YYYY-MM-DD] [--author slug] [--entities path.json]');
    process.exit(1);
  }

  const filePath = path.resolve(__dirname, '..', 'content', 'blog', `${args.slug}.md`);
  if (!fs.existsSync(filePath)) {
    console.error(`Post not found: ${filePath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = matter(raw);

  if (args.updated) parsed.data.updatedAt = args.updated;
  if (args.author) parsed.data.author = args.author;
  if (args.entities) {
    const entitiesPath = path.resolve(args.entities);
    const entities = JSON.parse(fs.readFileSync(entitiesPath, 'utf8'));
    parsed.data.entities = entities;
  }

  const out = matter.stringify(parsed.content, parsed.data);
  fs.writeFileSync(filePath, out, 'utf8');

  console.log(`Refreshed frontmatter: ${args.slug}`);
  if (args.updated) console.log(`  updatedAt → ${args.updated}`);
  if (args.author) console.log(`  author    → ${args.author}`);
  if (args.entities) console.log(`  entities  → ${parsed.data.entities.length} items`);
}

main();
