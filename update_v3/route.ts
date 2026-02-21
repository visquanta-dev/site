// src/app/sitemap.xml/route.ts
// VisQuanta Sitemap — US pages only. No CA. No API calls. No hreflang.
//
// Why no /ca/ URLs? Google discovers CA pages via the hreflang <link> tags
// already in the <head> of every page. The sitemap doesn't need them.
// Removing CA from the sitemap eliminates the duplicate content signals
// that were causing indexing issues.
//
// Why no hreflang in sitemap? On-page hreflang tags are the primary signal.
// Sitemap hreflang is a secondary/redundant signal. Your pages already have
// correct <link rel="alternate" hreflang="en-CA"> tags in <head>.
//
// To add a new blog post: add a line to the blogPosts array.
// To add a new page: add it to the pages array.

import { NextResponse } from 'next/server';

const BASE = 'https://www.visquanta.com';

const pages: { loc: string; lastmod: string; priority: number }[] = [
  // ── Homepage ──
  { loc: BASE, lastmod: '2026-02-15', priority: 1.0 },

  // ── Core product pages ──
  { loc: `${BASE}/auto-master-suite`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/lead-reactivation`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/lead-loss-mitigation`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/speed-to-lead`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/reputation-management`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/service-drive`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/custom-campaigns`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/website-widget`, lastmod: '2026-02-15', priority: 0.9 },
  { loc: `${BASE}/iwav`, lastmod: '2026-02-15', priority: 0.9 },

  // ── Conversion pages ──
  { loc: `${BASE}/book-demo`, lastmod: '2026-02-01', priority: 0.85 },
  { loc: `${BASE}/dealer-services`, lastmod: '2026-02-01', priority: 0.85 },
  { loc: `${BASE}/dealer-success`, lastmod: '2026-02-01', priority: 0.85 },
  { loc: `${BASE}/dealer-success-solutions`, lastmod: '2026-02-01', priority: 0.85 },

  // ── Dealer segment pages ──
  { loc: `${BASE}/dealers`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/independent-dealerships`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/franchise-dealerships`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/auto-group`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/pre-owned-dealerships`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/rv-dealerships`, lastmod: '2026-01-15', priority: 0.8 },
  { loc: `${BASE}/enterprise`, lastmod: '2026-01-15', priority: 0.8 },

  // ── Company & info pages ──
  { loc: `${BASE}/about-visquanta`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/visquanta-team`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/company`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/contact`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/careers`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/faq`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/partnerships`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/trust`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/resources`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/ams-guides`, lastmod: '2026-01-10', priority: 0.5 },
  { loc: `${BASE}/integrations`, lastmod: '2026-01-10', priority: 0.5 },

  // ── Legal ──
  { loc: `${BASE}/privacy-policy`, lastmod: '2025-12-01', priority: 0.3 },
  { loc: `${BASE}/terms-conditions`, lastmod: '2025-12-01', priority: 0.3 },
  { loc: `${BASE}/cookie-policy`, lastmod: '2025-12-01', priority: 0.3 },

  // ── Case studies ──
  { loc: `${BASE}/case-studies/metro-motors`, lastmod: '2026-01-15', priority: 0.7 },
  { loc: `${BASE}/case-studies/bayside-honda`, lastmod: '2026-01-15', priority: 0.7 },
  { loc: `${BASE}/case-studies/prestige-imports`, lastmod: '2026-01-15', priority: 0.7 },
  { loc: `${BASE}/case-studies/freedom-independent`, lastmod: '2026-01-15', priority: 0.7 },
  { loc: `${BASE}/case-studies/seth-wadley`, lastmod: '2026-01-15', priority: 0.7 },

  // ── Integrations ──
  { loc: `${BASE}/integrations/vinsolutions`, lastmod: '2026-01-15', priority: 0.6 },

  // ── Blog index ──
  { loc: `${BASE}/blog`, lastmod: '2026-02-19', priority: 0.7 },
];

const blogPosts: { slug: string; lastmod: string }[] = [
  { slug: 'why-ai-lead-handoffs-fail-modern-car-dealerships', lastmod: '2026-02-06' },
  { slug: 'nada-show-2026-dealership-leaders-need-to-know-ai', lastmod: '2026-01-28' },
  { slug: 'ai-bdc-guide-for-car-dealerships', lastmod: '2026-01-26' },
  { slug: 'lead-generation-car-sales-dealership-playbook', lastmod: '2026-01-24' },
  { slug: 'dealerships-review-response-time-as-much-as-lead-response-time', lastmod: '2026-01-22' },
  { slug: 'automotive-ai-complete-guide-car-dealerships', lastmod: '2026-01-15' },
  { slug: '5-ai-tools-that-will-increase-car-dealership-sales-in-q4-2025', lastmod: '2026-01-22' },
  { slug: 'crm-database-reactivation-guide', lastmod: '2025-12-02' },
  { slug: 'third-party-lead-providers-dealerships', lastmod: '2025-12-01' },
  { slug: 'ai-revives-dormant-crm-data', lastmod: '2025-11-14' },
  { slug: 'the-9pm-problem-dealership-revenue-leak', lastmod: '2025-10-24' },
  { slug: 'lead-loss-mitigation-what-dealers-get-wrong-and-how-to-fix-it', lastmod: '2025-10-09' },
  { slug: 'how-to-reduce-lead-response-time-in-auto-sales', lastmod: '2025-10-31' },
  { slug: 'automotive-bdc-best-practices', lastmod: '2025-10-09' },
  { slug: 'dealership-lead-management-best-practices', lastmod: '2025-10-09' },
  { slug: 'how-dealerships-can-maximize-crm-roi', lastmod: '2025-10-09' },
  { slug: 'internet-lead-management-for-car-dealerships', lastmod: '2025-10-09' },
  { slug: 'smart-dealership-follow-up-strategies', lastmod: '2025-10-09' },
  { slug: 'ai-powered-service-department-solutions', lastmod: '2025-10-09' },
  { slug: 'speed-to-lead-why-response-time-matters', lastmod: '2025-10-09' },
  { slug: 'dealership-reputation-management-best-practices', lastmod: '2025-10-09' },
  { slug: 'how-ai-is-reshaping-auto-dealership-customer-engagement', lastmod: '2025-10-23' },
  { slug: 'ai-transforming-car-dealership-operations', lastmod: '2024-03-15' },
  { slug: 'dealership-lead-response-time-statistics', lastmod: '2024-03-10' },
  { slug: 'future-of-automotive-retail-technology', lastmod: '2024-03-05' },
  { slug: 'automotive-crm-best-practices-2024', lastmod: '2024-02-28' },
  { slug: 'boost-dealership-sales-with-automation', lastmod: '2025-11-14' },
  { slug: 'dealership-customer-retention-strategies', lastmod: '2025-11-14' },
  { slug: 'automotive-digital-retailing-trends', lastmod: '2025-11-14' },
  { slug: 'car-dealership-marketing-strategies', lastmod: '2025-11-14' },
  { slug: 'electric-vehicle-sales-strategies', lastmod: '2025-11-14' },
  { slug: 'fixed-operations-improvement-guide', lastmod: '2025-11-14' },
  { slug: 'used-car-market-analysis-2024', lastmod: '2025-11-14' },
  { slug: 'dealership-employee-training-best-practices', lastmod: '2025-11-14' },
  { slug: 'automotive-f-and-i-best-practices', lastmod: '2025-11-14' },
  { slug: 'dealership-inventory-management-strategies', lastmod: '2025-11-14' },
  { slug: 'conquesting-automotive-strategies', lastmod: '2025-11-14' },
  { slug: 'auto-dealer-group-management-guide', lastmod: '2025-11-14' },
  { slug: 'certified-pre-owned-marketing-strategies', lastmod: '2025-11-14' },
  { slug: 'dealership-bdc-performance-metrics', lastmod: '2025-11-14' },
  { slug: 'subprime-auto-lending-guide', lastmod: '2025-11-14' },
  { slug: 'vehicle-trade-in-optimization-guide', lastmod: '2025-11-14' },
  { slug: 'dealership-parts-department-optimization', lastmod: '2025-11-14' },
  { slug: 'automotive-lease-retention-strategies', lastmod: '2025-11-14' },
  { slug: 'service-lane-to-showroom-strategies', lastmod: '2025-11-14' },
  { slug: 'car-dealership-social-media-strategy', lastmod: '2025-11-14' },
  { slug: 'auto-dealer-compliance-guide', lastmod: '2025-11-14' },
  { slug: 'virtual-car-buying-experience', lastmod: '2025-11-14' },
  { slug: 'dealership-customer-data-platform-guide', lastmod: '2025-11-14' },
  { slug: 'seasonal-car-sales-strategies', lastmod: '2025-11-14' },
  { slug: 'fleet-sales-strategies-for-dealerships', lastmod: '2025-11-14' },
  { slug: 'the-car-buyers-journey-in-2025', lastmod: '2025-11-25' },
  { slug: 'how-ai-chatbots-are-revolutionizing-car-dealerships', lastmod: '2025-11-25' },
];

// ─── XML Builder ─────────────────────────────────────────────────────────────

function buildSitemap(): string {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  for (const p of pages) {
    xml += `<url><loc>${p.loc}</loc><lastmod>${p.lastmod}</lastmod><priority>${p.priority}</priority></url>\n`;
  }

  for (const post of blogPosts) {
    xml += `<url><loc>${BASE}/blog/${post.slug}</loc><lastmod>${post.lastmod}</lastmod><priority>0.6</priority></url>\n`;
  }

  xml += `</urlset>`;
  return xml;
}

// ─── Handler ─────────────────────────────────────────────────────────────────

export function GET() {
  return new NextResponse(buildSitemap(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800',
    },
  });
}
