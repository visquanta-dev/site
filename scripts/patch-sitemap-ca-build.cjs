const fs = require('fs');
const dst = 'src/app/sitemap-ca.xml/route.ts';
const orig = fs.readFileSync(dst, 'utf8').replace(/\r\n/g, '\n');
const startMarker = '/** US marketing & product URLs';
const start = orig.indexOf(startMarker);
const endMarker = "\n\n  xml += '</urlset>';";
const end = orig.indexOf(endMarker);
if (start < 0 || end < 0) throw new Error('markers not found ' + start + ' ' + end);

const newMid = [
  '/** Skip /ca/compliance: compliance lives at /compliance; /ca/compliance redirects. */',
  "const CA_SKIP_PATHS = new Set<string>(['/compliance']);",
  '',
  'function caLoc(marketingPath: string): string {',
  '  return `${BASE}/ca${marketingPath}`;',
  '}',
  '',
  '/** Canadian marketing URLs under /ca/. Same ISR as US (60s). */',
  'export const revalidate = 60;',
  '',
  'export async function GET() {',
  '  let xml = \'<?xml version="1.0" encoding="UTF-8"?>\\n\';',
  '  xml += \'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\\n\';',
  '  for (const p of STATIC_SITEMAP_PAGES) {',
  '    if (CA_SKIP_PATHS.has(p.path)) continue;',
  '    xml += `<url><loc>${caLoc(p.path)}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>\\n`;',
  '  }',
  '',
  "  const caseStudyLastmod = '2026-01-15';",
  '  for (const slug of getAllCaseStudySlugs()) {',
  '    xml += `<url><loc>${caLoc(`/case-studies/${slug}`)}</loc><lastmod>${caseStudyLastmod}</lastmod><priority>0.7</priority></url>\\n`;',
  '  }',
  '',
  '  let posts: Awaited<ReturnType<typeof getAllPostsMetaFresh>> = [];',
  '  try {',
  '    posts = await getAllPostsMetaFresh();',
  '  } catch (e) {',
  '    console.error(\'[sitemap-ca] getAllPostsMetaFresh failed:\', e);',
  '  }',
  '',
  '  for (const post of posts) {',
  '    if (!post.slug) continue;',
  '    const lastmod = lastmodFromPost(post.updatedAt || post.createdAt);',
  '    xml += `<url><loc>${caLoc(`/blog/${post.slug}`)}</loc><lastmod>${lastmod}</lastmod><priority>0.6</priority></url>\\n`;',
  '  }',
].join('\n');

let out = orig.slice(0, start) + newMid + orig.slice(end);
fs.writeFileSync(dst, out.replace(/\n/g, '\r\n'), 'utf8');
console.log('written', dst);