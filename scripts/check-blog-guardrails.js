#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const config = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'blog-guardrails.config.json'), 'utf8')
);

const args = process.argv.slice(2);
const publishMode = args.includes('--publish');
const allMode = args.includes('--all');

function readArg(name) {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeHost(url) {
  try {
    return new URL(url).hostname.toLowerCase().replace(/^www\./, '');
  } catch {
    return '';
  }
}

function isInternalHost(host) {
  return config.internalHosts.some((internalHost) => {
    const normalized = internalHost.toLowerCase().replace(/^www\./, '');
    return host === normalized || host.endsWith(`.${normalized}`);
  });
}

function uniqueBy(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function extractLinks(markdown) {
  const links = [];
  const markdownLinkPattern = /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/gi;
  const htmlLinkPattern = /<a\s+[^>]*href=["'](https?:\/\/[^"']+)["'][^>]*>(.*?)<\/a>/gi;

  let match;
  while ((match = markdownLinkPattern.exec(markdown)) !== null) {
    links.push({
      anchor: match[1].replace(/\s+/g, ' ').trim(),
      url: match[2].trim()
    });
  }

  while ((match = htmlLinkPattern.exec(markdown)) !== null) {
    links.push({
      anchor: match[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
      url: match[1].trim()
    });
  }

  return links.map((link) => ({
    ...link,
    host: normalizeHost(link.url)
  })).filter((link) => link.host);
}

function stripQuotes(value) {
  const trimmed = String(value || '').trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw };
  }

  const endIndex = raw.indexOf('\n---', 3);
  if (endIndex === -1) {
    return { data: {}, content: raw };
  }

  const frontmatterText = raw.slice(3, endIndex).replace(/^\r?\n/, '');
  const content = raw.slice(endIndex).replace(/^\r?\n---\r?\n?/, '');
  const data = {};
  const lines = frontmatterText.split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index].replace(/\r$/, '');
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;

    const key = match[1];
    let value = match[2].trim();

    if (value === '>' || value === '>-' || value === '|' || value === '|-') {
      const block = [];
      while (index + 1 < lines.length) {
        const nextLine = lines[index + 1].replace(/\r$/, '');
        if (/^[A-Za-z0-9_]+:\s*/.test(nextLine)) break;
        block.push(nextLine.trim());
        index += 1;
      }
      data[key] = block.filter(Boolean).join(' ');
      continue;
    }

    if (!value) {
      data[key] = true;
      continue;
    }

    if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else {
      data[key] = stripQuotes(value);
    }
  }

  return { data, content };
}

function loadAudit(slug) {
  const auditPath = path.join(root, 'content', 'blog-audits', `${slug}.audit.json`);
  if (!fs.existsSync(auditPath)) return null;

  try {
    return {
      path: auditPath,
      data: JSON.parse(fs.readFileSync(auditPath, 'utf8'))
    };
  } catch (error) {
    return {
      path: auditPath,
      parseError: error.message,
      data: null
    };
  }
}

function hasOverride(audit, guardrail) {
  if (!audit?.data?.overrides) return false;
  return audit.data.overrides.some((override) => {
    const value = String(override.guardrail || '').toLowerCase();
    return value === guardrail || value === guardrail.split(':')[0];
  });
}

function addIssue(issues, severity, guardrail, message) {
  issues.push({ severity, guardrail, message });
}

function checkCompetitors({ content, frontmatter, links, audit, issues }) {
  const visibleText = [
    frontmatter.title,
    frontmatter.slug,
    frontmatter.metaDescription,
    frontmatter.image,
    content
  ].filter(Boolean).join('\n');

  for (const competitor of config.competitors) {
    for (const name of competitor.names || []) {
      const pattern = new RegExp(`\\b${escapeRegExp(name)}\\b`, 'i');
      if (pattern.test(visibleText) && !hasOverride(audit, 'competitor')) {
        addIssue(
          issues,
          'hard',
          'competitor:name',
          `Publish output contains competitor name: ${competitor.label}`
        );
      }
    }

    const competitorHosts = (competitor.domains || []).map((domain) =>
      domain.toLowerCase().replace(/^www\./, '')
    );

    for (const link of links) {
      if (competitorHosts.includes(link.host) && !hasOverride(audit, 'competitor')) {
        addIssue(
          issues,
          'hard',
          'competitor:link',
          `Publish output links to competitor domain: ${link.url}`
        );
      }
    }
  }
}

function checkFrontmatter({ frontmatter, issues }) {
  const required = ['title', 'slug', 'metaDescription', 'publishedAt', 'category', 'tags', 'author'];
  for (const field of required) {
    if (!frontmatter[field]) {
      addIssue(issues, 'hard', 'frontmatter', `Missing required frontmatter field: ${field}`);
    }
  }

  if (!frontmatter.image) {
    addIssue(issues, 'hard', 'visual:image', 'Missing featured image');
  } else {
    const image = String(frontmatter.image).toLowerCase();
    for (const hint of config.disallowedImageHints) {
      if (image.includes(hint)) {
        addIssue(
          issues,
          'warn',
          'visual:image',
          `Featured image looks like a disallowed chart/text-only asset: ${frontmatter.image}`
        );
      }
    }
  }

  const meta = String(frontmatter.metaDescription || '');
  if (meta && (meta.length < 100 || meta.length > 170)) {
    addIssue(
      issues,
      'warn',
      'seo:meta',
      `Meta description length is ${meta.length}; target roughly 100-170 characters`
    );
  }
}

function checkContent({ content, links, issues }) {
  if (/^#\s+/m.test(content)) {
    addIssue(
      issues,
      'warn',
      'seo:h1',
      'Body contains a markdown H1; the article template already renders the post title'
    );
  }

  const internalLinks = links.filter((link) => isInternalHost(link.host));
  const sourceLinks = uniqueBy(
    links.filter((link) => !isInternalHost(link.host)),
    (link) => link.url
  );

  if (internalLinks.length < config.minimums.internalLinks) {
    addIssue(
      issues,
      'hard',
      'links:internal',
      `Only ${internalLinks.length} internal links found; minimum is ${config.minimums.internalLinks}`
    );
  }

  if (sourceLinks.length < config.minimums.usableSources) {
    addIssue(
      issues,
      'hard',
      'sources:count',
      `Only ${sourceLinks.length} external source links found; minimum usable source count is ${config.minimums.usableSources}`
    );
  }

  if (sourceLinks.length < config.minimums.externalSourceLinks) {
    addIssue(
      issues,
      'hard',
      'links:external',
      `Only ${sourceLinks.length} external source links found; minimum is ${config.minimums.externalSourceLinks}`
    );
  }

  for (const link of links) {
    if (config.genericAnchors.includes(link.anchor.toLowerCase())) {
      addIssue(
        issues,
        'warn',
        'links:anchor',
        `Generic anchor text should be rewritten: "${link.anchor}" -> ${link.url}`
      );
    }
  }

  const faqSection = content.match(/##\s+Frequently Asked Questions([\s\S]*)$/i);
  if (!faqSection) {
    addIssue(issues, 'hard', 'content:faq', 'Missing FAQ section');
  } else {
    const questionCount = (faqSection[1].match(/^###\s+/gm) || []).length;
    if (questionCount < config.minimums.faqQuestions) {
      addIssue(
        issues,
        'hard',
        'content:faq',
        `FAQ has ${questionCount} questions; minimum is ${config.minimums.faqQuestions}`
      );
    }
  }
}

function checkAudit({ frontmatter, audit, issues }) {
  if (!audit) {
    if (publishMode) {
      addIssue(issues, 'hard', 'audit-record', 'Missing audit record in publish mode');
    } else {
      addIssue(issues, 'warn', 'audit-record', 'Missing audit record; required before publish');
    }
    return;
  }

  if (audit.parseError) {
    addIssue(issues, 'hard', 'audit-record', `Audit JSON could not be parsed: ${audit.parseError}`);
    return;
  }

  if (audit.data.slug !== frontmatter.slug) {
    addIssue(
      issues,
      'hard',
      'audit-record',
      `Audit slug "${audit.data.slug}" does not match post slug "${frontmatter.slug}"`
    );
  }

  const sources = Array.isArray(audit.data.sources) ? audit.data.sources : [];
  if (sources.length < config.minimums.usableSources) {
    addIssue(
      issues,
      'hard',
      'sources:audit-count',
      `Audit lists ${sources.length} sources; minimum is ${config.minimums.usableSources}`
    );
  }

  const freshnessCutoff = new Date();
  freshnessCutoff.setMonth(freshnessCutoff.getMonth() - config.minimums.freshnessMonths);

  for (const source of sources) {
    if (!source.published_at) {
      addIssue(
        issues,
        'warn',
        'sources:freshness',
        `Source is missing published_at date: ${source.url || source.title}`
      );
      continue;
    }

    const sourceDate = new Date(`${source.published_at}T00:00:00Z`);
    if (!Number.isNaN(sourceDate.getTime()) && sourceDate < freshnessCutoff && !source.freshness_override) {
      addIssue(
        issues,
        'hard',
        'sources:freshness',
        `Source is older than ${config.minimums.freshnessMonths} months without override: ${source.url || source.title}`
      );
    }
  }

  if (publishMode && !audit.data.approvals?.final_publish?.approved) {
    addIssue(issues, 'hard', 'approval:final_publish', 'Final publish approval is missing');
  }
}

function checkPost(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const parsed = parseFrontmatter(raw);
  const frontmatter = parsed.data;
  const content = parsed.content;
  const slug = frontmatter.slug || path.basename(filePath, '.md');
  const audit = loadAudit(slug);
  const links = extractLinks(content);
  const issues = [];

  checkFrontmatter({ frontmatter, issues });
  checkCompetitors({ content, frontmatter, links, audit, issues });
  checkContent({ content, links, issues });
  checkAudit({ frontmatter, audit, issues });

  return {
    filePath,
    slug,
    issues,
    hardFailures: issues.filter((issue) => issue.severity === 'hard'),
    warnings: issues.filter((issue) => issue.severity === 'warn')
  };
}

function listPostFiles() {
  const blogDir = path.join(root, 'content', 'blog');
  return fs.readdirSync(blogDir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => path.join(blogDir, file));
}

function resolvePostFiles() {
  if (allMode) return listPostFiles();

  const postArg = readArg('--post') || args.find((arg) => arg.endsWith('.md'));
  if (!postArg) {
    console.error('Usage: node scripts/check-blog-guardrails.js --post content/blog/example.md [--publish]');
    console.error('       node scripts/check-blog-guardrails.js --all [--publish]');
    process.exit(2);
  }

  const filePath = path.isAbsolute(postArg) ? postArg : path.join(root, postArg);
  if (!fs.existsSync(filePath)) {
    console.error(`Post file not found: ${filePath}`);
    process.exit(2);
  }
  return [filePath];
}

const results = resolvePostFiles().map(checkPost);
let totalHardFailures = 0;
let totalWarnings = 0;

for (const result of results) {
  totalHardFailures += result.hardFailures.length;
  totalWarnings += result.warnings.length;

  const relativePath = path.relative(root, result.filePath);
  const status = result.hardFailures.length ? 'FAIL' : 'PASS';
  console.log(`\n${status} ${relativePath}`);

  for (const issue of result.issues) {
    const prefix = issue.severity === 'hard' ? '  HARD' : '  WARN';
    console.log(`${prefix} [${issue.guardrail}] ${issue.message}`);
  }

  if (!result.issues.length) {
    console.log('  No guardrail issues found.');
  }
}

console.log(`\nChecked ${results.length} post(s): ${totalHardFailures} hard failure(s), ${totalWarnings} warning(s).`);

if (totalHardFailures > 0) {
  process.exit(1);
}
