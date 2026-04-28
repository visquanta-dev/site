import { NextResponse } from 'next/server';
import { getAllCaseStudySlugs } from '@/lib/case-studies';
import { getAllPostsMetaFresh } from '@/lib/seobot';
import {
  STATIC_SITEMAP_PAGES,
  lastmodFromPost,
} from '@/lib/sitemap-shared';

const BASE = 'https://www.visquanta.com';

/** US marketing & product URLs (no /ca/). Shared list in sitemap-shared.ts; blog via getAllPostsMetaFresh(); case studies via getAllCaseStudySlugs(). */
/** Match blog post ISR (60s) so Google picks up new /blog/* URLs quickly after publish. */
export const revalidate = 60;

export async function GET() {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const p of STATIC_SITEMAP_PAGES) {
    const loc = `${BASE}${p.path}`;
    xml += `<url><loc>${loc}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>\n`;
  }

  const caseStudyLastmod = '2026-01-15';
  for (const slug of getAllCaseStudySlugs()) {
    xml += `<url><loc>${BASE}/case-studies/${slug}</loc><lastmod>${caseStudyLastmod}</lastmod><priority>0.7</priority></url>\n`;
  }

  let posts: Awaited<ReturnType<typeof getAllPostsMetaFresh>> = [];
  try {
    posts = await getAllPostsMetaFresh();
  } catch (e) {
    console.error('[sitemap-us] getAllPostsMetaFresh failed:', e);
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
      'Cache-Control': 'public, max-age=60, s-maxage=60, stale-while-revalidate=300',
    },
  });
}
