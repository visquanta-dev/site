import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://visquanta.com';

    const mainPages = [
        '',
        '/about-visquanta',
        '/auto-master-suite',
        '/blog',
        '/book-demo',
        '/careers',
        '/case-studies',
        '/company',
        '/contact',
        '/custom-campaigns',
        '/dealer-success',
        '/faqs',
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

    const dealerPages = [
        '/dealers',
        '/dealers/independent',
        '/dealers/franchise',
        '/dealers/auto-groups',
        '/dealers/pre-owned',
    ];

    const blogSlugs = [
        'math-5-minute-rule',
        'sunday-leads-opportunity',
        'ai-vs-human-bdc',
        'promax-partnership',
    ];

    const caseStudySlugs = [
        'seth-wadley',
        'metro-motors',
        'bayside-honda',
        'prestige-imports',
        'freedom-independent'
    ];

    const routes = [
        ...mainPages.map(page => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: page === '' ? 1 : 0.8,
        })),
        ...dealerPages.map(page => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        ...blogSlugs.map(slug => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
        ...caseStudySlugs.map(slug => ({
            url: `${baseUrl}/case-studies/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    return routes;
}
