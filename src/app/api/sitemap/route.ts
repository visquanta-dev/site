import { NextResponse } from 'next/server';
import { getAllCategories, getAllTags, getAllPostsMeta } from '@/lib/seobot';
import { getAllCaseStudySlugs } from '@/lib/case-studies';
import { integrations } from '@/lib/integrations';

export const dynamic = 'force-dynamic';

const baseUrl = 'https://www.visquanta.com';
const locales = ['', '/ca']; // '' = default US, '/ca' = Canada

interface SitemapEntry {
    url: string;
    lastModified: string;
    changeFrequency: string;
    priority: number;
    alternates?: { hreflang: string; href: string }[];
}

function escapeXml(str: string): string {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function buildXml(entries: SitemapEntry[]): string {
    const urls = entries
        .map(entry => {
            const alternateLinks = entry.alternates
                ? entry.alternates
                      .map(
                          alt =>
                              `    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}" />`
                      )
                      .join('\n')
                : '';

            return `  <url>
    <loc>${escapeXml(entry.url)}</loc>
    <lastmod>${entry.lastModified}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
${alternateLinks}
  </url>`;
        })
        .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
}

export async function GET() {
    const entries: SitemapEntry[] = [];
    const now = new Date().toISOString();

    // ── Static main pages (Localized) ──
    const localizedMainPages = [
        '',
        '/about-visquanta',
        '/auto-master-suite',
        '/book-demo',
        '/careers',
        '/case-studies',
        '/company',
        '/contact',
        '/custom-campaigns',
        '/dealer-services',
        '/dealer-success',
        '/faqs',
        '/integrations',
        '/lead-reactivation',
        '/reputation-management',
        '/service-drive',
        '/speed-to-lead',
        '/team',
        '/trust',
        '/resources',
        '/website-widget',
        '/ams-guides',
        '/privacy-policy',
        '/terms-conditions',
        '/cookie-policy',
    ];

    // ── Dealer segment pages (Localized) ──
    const localizedDealerPages = [
        '/dealers',
        '/dealers/independent',
        '/dealers/franchise',
        '/dealers/auto-groups',
        '/dealers/pre-owned',
        '/dealers/rv',
    ];

    // ── Helpers ──
    const addLocalizedEntries = (pages: string[], priority: number, changeFreq: string) => {
        pages.forEach(page => {
            locales.forEach(locale => {
                const path = locale + page;
                const fullUrl = `${baseUrl}${path || '/'}`.replace(/\/$/, '') || baseUrl;

                entries.push({
                    url: fullUrl === `${baseUrl}/` ? baseUrl : fullUrl,
                    lastModified: now,
                    changeFrequency: changeFreq,
                    priority: page === '' ? 1 : priority,
                    alternates: [
                        { hreflang: 'en-US', href: `${baseUrl}${page || '/'}`.replace(/\/$/, '') || baseUrl },
                        { hreflang: 'en-CA', href: `${baseUrl}/ca${page}` },
                        { hreflang: 'x-default', href: `${baseUrl}${page || '/'}`.replace(/\/$/, '') || baseUrl },
                    ],
                });
            });
        });
    };

    const addGlobalEntries = (pages: string[], priority: number, changeFreq: string) => {
        pages.forEach(page => {
            entries.push({
                url: `${baseUrl}${page}`,
                lastModified: now,
                changeFrequency: changeFreq,
                priority,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });
    };

    // 1. Localized Main Pages
    addLocalizedEntries(localizedMainPages, 0.8, 'weekly');

    // 2. Localized Dealer Pages
    addLocalizedEntries(localizedDealerPages, 0.7, 'monthly');

    // 3. Global Pages (Blog Hub)
    addGlobalEntries(['/blog'], 0.8, 'weekly');

    // 4–6. Dynamic blog content
    try {
        const [posts, categories, tags] = await Promise.all([
            getAllPostsMeta(),
            getAllCategories(),
            getAllTags(),
        ]);

        // 4. Blog Posts
        posts.forEach(post => {
            const page = `/blog/${post.slug}`;
            entries.push({
                url: `${baseUrl}${page}`,
                lastModified: new Date(post.updatedAt).toISOString(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });

        // 5. Blog Categories
        categories.forEach(cat => {
            const page = `/blog/category/${cat.slug}`;
            entries.push({
                url: `${baseUrl}${page}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: 0.5,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });

        // 6. Blog Tags (only tags with ≥ 2 posts)
        tags.filter(tag => tag.count >= 2).forEach(tag => {
            const page = `/blog/tag/${tag.slug}`;
            entries.push({
                url: `${baseUrl}${page}`,
                lastModified: now,
                changeFrequency: 'weekly',
                priority: 0.4,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });
    } catch (error) {
        console.error('Error fetching dynamic content for sitemap:', error);
    }

    // 7. Localized Case Studies
    const caseStudySlugs = getAllCaseStudySlugs();
    caseStudySlugs.forEach(slug => {
        const page = `/case-studies/${slug}`;
        locales.forEach(locale => {
            const path = locale + page;
            entries.push({
                url: `${baseUrl}${path}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'en-CA', href: `${baseUrl}/ca${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });
    });

    // 8. Localized Integrations
    integrations.forEach(integration => {
        const page = `/integrations/${integration.slug}`;
        locales.forEach(locale => {
            const path = locale + page;
            entries.push({
                url: `${baseUrl}${path}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: [
                    { hreflang: 'en-US', href: `${baseUrl}${page}` },
                    { hreflang: 'en-CA', href: `${baseUrl}/ca${page}` },
                    { hreflang: 'x-default', href: `${baseUrl}${page}` },
                ],
            });
        });
    });

    const xml = buildXml(entries);

    return new NextResponse(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
