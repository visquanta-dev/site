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
const INTERNAL_DRAFT_ARTIFACTS = [
  { pattern: /^###\s+Evidence Map\b/im, label: 'Evidence Map section' },
  { pattern: /^\|\s*Dealer question\s*\|\s*Evidence anchor\s*\|\s*Source\s*\|/im, label: 'Evidence Map table' }
];

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

function isHttpUrl(value) {
  return /^https?:\/\//i.test(String(value || ''));
}

function resolvePublicImagePath(image) {
  const value = String(image || '').trim();
  if (!value || isHttpUrl(value)) return null;

  const normalized = value.replace(/\\/g, '/');
  if (normalized.startsWith('/')) {
    return path.join(root, 'public', normalized.slice(1));
  }
  if (normalized.startsWith('public/')) {
    return path.join(root, normalized);
  }
  return path.join(root, 'public', normalized);
}

function readUInt24LE(buffer, offset) {
  return buffer[offset] + (buffer[offset + 1] << 8) + (buffer[offset + 2] << 16);
}

function readPngDimensions(buffer) {
  if (
    buffer.length >= 24 &&
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  ) {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20)
    };
  }
  return null;
}

function readJpegDimensions(buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return null;

  let offset = 2;
  while (offset < buffer.length) {
    while (offset < buffer.length && buffer[offset] !== 0xff) offset += 1;
    while (offset < buffer.length && buffer[offset] === 0xff) offset += 1;
    if (offset >= buffer.length) break;

    const marker = buffer[offset];
    offset += 1;

    if (marker === 0xd9 || marker === 0xda) break;
    if (offset + 2 > buffer.length) break;

    const length = buffer.readUInt16BE(offset);
    if (length < 2 || offset + length > buffer.length) break;

    const isSof =
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker);

    if (isSof && length >= 7) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5)
      };
    }

    offset += length;
  }

  return null;
}

function readWebpDimensions(buffer) {
  if (
    buffer.length < 20 ||
    buffer.toString('ascii', 0, 4) !== 'RIFF' ||
    buffer.toString('ascii', 8, 12) !== 'WEBP'
  ) {
    return null;
  }

  let offset = 12;
  while (offset + 8 <= buffer.length) {
    const chunk = buffer.toString('ascii', offset, offset + 4);
    const size = buffer.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;

    if (dataOffset + size > buffer.length) break;

    if (chunk === 'VP8X' && size >= 10) {
      return {
        width: readUInt24LE(buffer, dataOffset + 4) + 1,
        height: readUInt24LE(buffer, dataOffset + 7) + 1
      };
    }

    if (chunk === 'VP8 ' && size >= 10) {
      return {
        width: buffer.readUInt16LE(dataOffset + 6) & 0x3fff,
        height: buffer.readUInt16LE(dataOffset + 8) & 0x3fff
      };
    }

    if (chunk === 'VP8L' && size >= 5 && buffer[dataOffset] === 0x2f) {
      const bits = buffer.readUInt32LE(dataOffset + 1);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1
      };
    }

    offset = dataOffset + size + (size % 2);
  }

  return null;
}

function readImageDimensions(filePath) {
  const buffer = fs.readFileSync(filePath);
  return readPngDimensions(buffer) || readJpegDimensions(buffer) || readWebpDimensions(buffer);
}

function parseAspectRatio(value) {
  const raw = String(value || '').trim();
  const match = raw.match(/^(\d+(?:\.\d+)?)\s*:\s*(\d+(?:\.\d+)?)$/);
  if (!match) return null;

  const width = Number(match[1]);
  const height = Number(match[2]);
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) return null;
  return width / height;
}

function checkFeaturedImageContract({ frontmatter, issues }) {
  const imageMode = String(frontmatter.imageMode || frontmatter.image_mode || '').trim();
  const imageAspect = String(frontmatter.imageAspect || frontmatter.image_aspect || '').trim();
  const imageFocalPoint = String(frontmatter.imageFocalPoint || frontmatter.image_focal_point || '').trim();
  const hideImageOverlay =
    frontmatter.hideImageOverlay === true ||
    frontmatter.hide_image_overlay === true;

  const validModes = new Set(['editorial_photo', 'text_graphic', 'data_visual']);
  const validFocalPoints = new Set([
    'center',
    'left',
    'right',
    'top',
    'bottom',
    'left center',
    'right center',
    'center top',
    'center bottom'
  ]);

  if (!imageMode) {
    addIssue(
      issues,
      'warn',
      'visual:image-contract',
      'Missing imageMode frontmatter; use editorial_photo, text_graphic, or data_visual'
    );
  } else if (!validModes.has(imageMode)) {
    addIssue(
      issues,
      'hard',
      'visual:image-contract',
      `Invalid imageMode "${imageMode}"; expected editorial_photo, text_graphic, or data_visual`
    );
  }

  if (!imageAspect) {
    addIssue(
      issues,
      'warn',
      'visual:image-contract',
      'Missing imageAspect frontmatter; set the generated hero ratio such as 16:9 or 21:9'
    );
  } else if (!parseAspectRatio(imageAspect)) {
    addIssue(
      issues,
      'hard',
      'visual:image-contract',
      `Invalid imageAspect "${imageAspect}"; expected a ratio like 16:9 or 21:9`
    );
  }

  if (!imageFocalPoint) {
    addIssue(
      issues,
      'warn',
      'visual:image-contract',
      'Missing imageFocalPoint frontmatter; use center unless the hero needs a deliberate crop anchor'
    );
  } else if (!validFocalPoints.has(imageFocalPoint.toLowerCase())) {
    addIssue(
      issues,
      'hard',
      'visual:image-contract',
      `Invalid imageFocalPoint "${imageFocalPoint}"`
    );
  }

  if (imageMode === 'text_graphic' && !hideImageOverlay) {
    addIssue(
      issues,
      'hard',
      'visual:image-overlay',
      'text_graphic images must set hideImageOverlay: true so article text is not placed over text baked into the image'
    );
  }

  if (imageMode !== 'text_graphic' && hideImageOverlay) {
    addIssue(
      issues,
      'warn',
      'visual:image-overlay',
      'hideImageOverlay is true on a non-text graphic image; confirm the card still has a readable article CTA'
    );
  }
}

function checkFeaturedImageFile({ frontmatter, issues }) {
  const image = String(frontmatter.image || '').trim();
  if (!image) return;

  if (isHttpUrl(image)) {
    addIssue(
      issues,
      'warn',
      'visual:image-file',
      `Featured image is remote and cannot be dimension-checked by guardrails: ${image}`
    );
    return;
  }

  const imagePath = resolvePublicImagePath(image);
  if (!imagePath || !fs.existsSync(imagePath)) {
    addIssue(issues, 'hard', 'visual:image-file', `Featured image file does not exist: ${image}`);
    return;
  }

  const extension = path.extname(imagePath).toLowerCase();
  if (extension === '.svg') {
    const imageMode = String(frontmatter.imageMode || frontmatter.image_mode || '').trim();
    addIssue(
      issues,
      imageMode === 'text_graphic' ? 'hard' : 'warn',
      'visual:image-file',
      `Featured image is SVG; use a real raster hero image for generated blog cards: ${image}`
    );
    return;
  }

  let dimensions = null;
  try {
    dimensions = readImageDimensions(imagePath);
  } catch (error) {
    addIssue(issues, 'hard', 'visual:image-file', `Could not read featured image dimensions: ${error.message}`);
    return;
  }

  if (!dimensions) {
    addIssue(issues, 'hard', 'visual:image-file', `Unsupported or invalid featured image file: ${image}`);
    return;
  }

  if (dimensions.width < 1200 || dimensions.height < 600) {
    addIssue(
      issues,
      'warn',
      'visual:image-size',
      `Featured image is ${dimensions.width}x${dimensions.height}; target at least 1200x600 for blog cards`
    );
  }

  const expectedAspect = parseAspectRatio(frontmatter.imageAspect || frontmatter.image_aspect);
  if (expectedAspect) {
    const actualAspect = dimensions.width / dimensions.height;
    const delta = Math.abs(actualAspect - expectedAspect);
    if (delta > 0.06) {
      addIssue(
        issues,
        'hard',
        'visual:image-aspect',
        `Featured image is ${dimensions.width}x${dimensions.height} (${actualAspect.toFixed(3)}), but imageAspect is ${frontmatter.imageAspect || frontmatter.image_aspect}`
      );
    }
  }
}

function getSourcePolicy(audit) {
  const value = String(audit?.data?.source_policy || audit?.data?.sourcePolicy || '').toLowerCase();
  return value.replace(/_/g, '-').trim();
}

function isLowSourcePolicy(audit) {
  const policy = getSourcePolicy(audit);
  return config.lowSourcePolicies.includes(policy);
}

function visibleNumericClaims(content) {
  return content
    .split(/\r?\n/)
    .filter((line) => /\d/.test(line))
    .filter((line) => !/\]\(https?:\/\//.test(line))
    .filter((line) => !/^\s*[-*]\s*\[[ x]\]/i.test(line))
    .map((line) => line.trim())
    .filter(Boolean);
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

    checkFeaturedImageContract({ frontmatter, issues });
    checkFeaturedImageFile({ frontmatter, issues });
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

function checkContent({ content, links, audit, issues }) {
  for (const artifact of INTERNAL_DRAFT_ARTIFACTS) {
    if (artifact.pattern.test(content)) {
      addIssue(
        issues,
        'hard',
        'content:internal-artifact',
        `Publish output contains internal drafting artifact: ${artifact.label}`
      );
    }
  }

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

  const lowSourceAllowed = isLowSourcePolicy(audit);
  const sourceMinimum = lowSourceAllowed
    ? config.minimums.lowSourceExternalLinks
    : config.minimums.usableSources;
  const externalLinkMinimum = lowSourceAllowed
    ? config.minimums.lowSourceExternalLinks
    : config.minimums.externalSourceLinks;

  if (sourceLinks.length < sourceMinimum) {
    addIssue(
      issues,
      'hard',
      'sources:count',
      `Only ${sourceLinks.length} external source links found; minimum is ${sourceMinimum}`
    );
  } else if (lowSourceAllowed && sourceLinks.length < config.minimums.externalSourceLinks) {
    addIssue(
      issues,
      'warn',
      'sources:low-source-policy',
      `Low-source policy "${getSourcePolicy(audit)}" allows ${sourceLinks.length} external source link(s); avoid unsupported numeric claims`
    );
  }

  if (sourceLinks.length < externalLinkMinimum) {
    addIssue(
      issues,
      'hard',
      'links:external',
      `Only ${sourceLinks.length} external source links found; minimum is ${externalLinkMinimum}`
    );
  }

  if (lowSourceAllowed && sourceLinks.length < config.minimums.externalSourceLinks) {
    const numericClaims = visibleNumericClaims(content);
    if (numericClaims.length > 0 && !hasOverride(audit, 'unsupported-numeric-claims')) {
      addIssue(
        issues,
        'hard',
        'claims:numeric',
        `Low-source post contains numeric claims without visible source links or override: ${numericClaims.slice(0, 3).join(' | ')}`
      );
    }
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
  const lowSourceAllowed = isLowSourcePolicy(audit);
  const publicSources = sources.filter((source) => source.source_type !== 'competitor-research-only');
  const sourceMinimum = lowSourceAllowed ? config.minimums.lowSourceExternalLinks : config.minimums.usableSources;

  if (publicSources.length < sourceMinimum) {
    addIssue(
      issues,
      'hard',
      'sources:audit-count',
      `Audit lists ${publicSources.length} public source(s); minimum is ${sourceMinimum}`
    );
  } else if (lowSourceAllowed && publicSources.length < config.minimums.usableSources) {
    const policy = getSourcePolicy(audit);
    const competitorSignals = sources.filter((source) => source.source_type === 'competitor-research-only');
    if (policy === 'competitor-signal' && competitorSignals.length === 0) {
      addIssue(
        issues,
        'hard',
        'sources:competitor-signal',
        'Audit source_policy is competitor-signal but no source is marked competitor-research-only'
      );
    }
    addIssue(
      issues,
      'warn',
      'sources:low-source-policy',
      `Audit uses source_policy "${policy}" with ${publicSources.length} public source(s)`
    );
  }

  const freshnessCutoff = new Date();
  freshnessCutoff.setMonth(freshnessCutoff.getMonth() - config.minimums.freshnessMonths);

  for (const source of sources) {
    if (source.source_type === 'competitor-research-only') {
      continue;
    }

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
  checkContent({ content, links, audit, issues });
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
