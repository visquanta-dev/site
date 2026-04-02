import { NextResponse } from 'next/server';
import { getAllPostsMeta } from '@/lib/seobot';

const BASE = 'https://www.visquanta.com';

/** US marketing & product URLs (no /ca/). Blog posts come from getAllPostsMeta(). */
const STATIC_PAGES: { path: string; lastmod: string; priority: number }[] = [
  { path: '', lastmod: '2026-02-15', priority: 1.0 },
  { path: '/auto-master-suite', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/lead-reactivation', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/speed-to-lead', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/reputation-management', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/service-drive', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/custom-campaigns', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/website-widget', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/paid-campaigns', lastmod: '2026-02-15', priority: 0.9 },
  { path: '/powersports', lastmod: '2026-02-25', priority: 0.9 },
  { path: '/book-demo', lastmod: '2026-02-01', priority: 0.85 },
  { path: '/dealer-services', lastmod: '2026-02-01', priority: 0.85 },
  { path: '/dealer-success', lastmod: '2026-02-01', priority: 0.85 },
  { path: '/dealers', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/dealers/independent', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/dealers/franchise', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/dealers/auto-groups', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/dealers/pre-owned', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/dealers/rv', lastmod: '2026-01-15', priority: 0.8 },
  { path: '/about-visquanta', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/team', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/company', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/contact', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/careers', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/faqs', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/trust', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/resources', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/ams-guides', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/integrations', lastmod: '2026-01-10', priority: 0.5 },
  { path: '/integrations/vinsolutions', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/elead', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/dealersocket', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/cdk', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/reynolds', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/drivecentric', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/dealertrack', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/integrations/automate', lastmod: '2026-01-15', priority: 0.6 },
  { path: '/privacy-policy', lastmod: '2025-12-01', priority: 0.3 },
  { path: '/terms-conditions', lastmod: '2025-12-01', priority: 0.3 },
  { path: '/cookie-policy', lastmod: '2025-12-01', priority: 0.3 },
  { path: '/case-studies', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/case-studies/metro-motors', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/case-studies/bayside-honda', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/case-studies/prestige-imports', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/case-studies/freedom-independent', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/case-studies/seth-wadley', lastmod: '2026-01-15', priority: 0.7 },
  { path: '/blog', lastmod: '2026-02-19', priority: 0.7 },
];

function lastmodFromPost(iso: string | undefined): string {
  if (!iso) return '2026-04-02';
  const d = iso.slice(0, 10);
  return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : '2026-04-02';
}

export const revalidate = 3600;

export async function GET() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const p of STATIC_PAGES) {
    const loc = `${BASE}${p.path}`;
    xml += `<url><loc>${loc}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>\n`;
  }

  let posts: Awaited<ReturnType<typeof getAllPostsMeta>> = [];
  try {
    posts = await getAllPostsMeta();
  } catch (e) {
    console.error('[sitemap-us] getAllPostsMeta failed:', e);
  }

  for (const post of posts) {
    if (!post.slug) continue;
    const lastmod = lastmodFromPost(post.updatedAt || post.createdAt);
    xml += `<url><loc>${BASE}/blog/${post.slug}</loc><lastmod>${lastmod}</lastmod><priority>0.6</priority></url>\n`;
  }

  xml += '</urlset>';

  return new NextResponse(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
