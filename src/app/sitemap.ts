import { MetadataRoute } from 'next';
import { getBlogPosts, getAllCategories, getAllTags, getAllPostsMeta } from '@/lib/seobot';
import { getAllCaseStudySlugs } from '@/lib/case-studies';
import { integrations } from '@/lib/integrations';

// Allow dynamic generation for external API calls
export const dynamic = 'force-dynamic';

const baseUrl = 'https://www.visquanta.com';
const locales = ['', '/ca']; // '' = default US, '/ca' = Canada

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // Static main pages (Localized)
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

    // Dealer segment pages (Localized)
    const localizedDealerPages = [
        '/dealers',
        '/dealers/independent',
        '/dealers/franchise',
        '/dealers/auto-groups',
        '/dealers/pre-owned',
        '/dealers/rv',
    ];

    // Global Pages (Blog is exclusively global)
    const globalPages = [
        '/blog',
    ];

    // Case study slugs from shared data module (Localized)
    const caseStudySlugs = getAllCaseStudySlugs();

    // Dynamically fetch ALL blog posts, categories, and tags from Seobot metadata base
    let blogPosts: { slug: string; updatedAt: string }[] = [];
    let categorySlugs: string[] = [];
    let tagData: { slug: string; count: number }[] = [];

    try {
        const [posts, categories, tags] = await Promise.all([
            getAllPostsMeta(),
            getAllCategories(),
            getAllTags()
        ]);

        blogPosts = posts.map(post => ({ slug: post.slug, updatedAt: post.updatedAt }));
        categorySlugs = categories.map(cat => cat.slug);

        // CRAWL BUDGET OPTIMIZATION: Only include tags with ≥ 2 posts to avoid thin content traps
        tagData = tags.filter(tag => tag.count >= 2).map(tag => ({ slug: tag.slug, count: tag.count }));
    } catch (error) {
        console.error('Error fetching dynamic content for sitemap:', error);
    }

    const routes: MetadataRoute.Sitemap = [];

    // Helper to add localized routes
    const addLocalizedRoutes = (paths: string[], priority: number, changeFreq: 'weekly' | 'monthly') => {
        paths.forEach(page => {
            locales.forEach(locale => {
                const path = locale + page;
                const fullUrl = `${baseUrl}${path === '/' ? '' : path}`;

                routes.push({
                    url: fullUrl,
                    lastModified: new Date(),
                    changeFrequency: changeFreq,
                    priority: page === '' ? 1 : priority,
                    alternates: {
                        languages: {
                            'en-US': `${baseUrl}${page}`,
                            'en-CA': `${baseUrl}/ca${page}`,
                            'x-default': `${baseUrl}${page}`,
                        }
                    }
                });
            });
        });
    };

    // Helper to add global routes (No locale prefix, no CA hreflang)
    const addGlobalRoutes = (paths: string[], priority: number, changeFreq: 'weekly' | 'monthly') => {
        paths.forEach(page => {
            const fullUrl = `${baseUrl}${page}`;
            routes.push({
                url: fullUrl,
                lastModified: new Date(),
                changeFrequency: changeFreq,
                priority: priority,
                alternates: {
                    languages: {
                        'en-US': `${baseUrl}${page}`,
                        'x-default': `${baseUrl}${page}`,
                    }
                }
            });
        });
    };

    // 1. Add Localized Main Pages
    addLocalizedRoutes(localizedMainPages, 0.8, 'weekly');

    // 2. Add Localized Dealer Pages
    addLocalizedRoutes(localizedDealerPages, 0.7, 'monthly');

    // 3. Add Global Pages (Blog Hub)
    addGlobalRoutes(globalPages, 0.8, 'weekly');

    // 4. Add Global Blog Posts (UNLIMITED)
    blogPosts.forEach(post => {
        const page = `/blog/${post.slug}`;
        const fullUrl = `${baseUrl}${page}`;
        routes.push({
            url: fullUrl,
            lastModified: new Date(post.updatedAt),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
                languages: {
                    'en-US': `${baseUrl}${page}`,
                    'x-default': `${baseUrl}${page}`,
                }
            }
        });
    });

    // 5. Add Global Blog Categories
    categorySlugs.forEach(slug => {
        const page = `/blog/category/${slug}`;
        const fullUrl = `${baseUrl}${page}`;
        routes.push({
            url: fullUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
            alternates: {
                languages: {
                    'en-US': `${baseUrl}${page}`,
                    'x-default': `${baseUrl}${page}`,
                }
            }
        });
    });

    // 6. Add Global Blog Tags (FILTERED)
    tagData.forEach(tag => {
        const page = `/blog/tag/${tag.slug}`;
        const fullUrl = `${baseUrl}${page}`;
        routes.push({
            url: fullUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.4,
            alternates: {
                languages: {
                    'en-US': `${baseUrl}${page}`,
                    'x-default': `${baseUrl}${page}`,
                }
            }
        });
    });

    // 7. Add Localized Case Studies
    caseStudySlugs.forEach(slug => {
        const page = `/case-studies/${slug}`;
        locales.forEach(locale => {
            const path = locale + page;
            const fullUrl = `${baseUrl}${path}`;
            routes.push({
                url: fullUrl,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: {
                    languages: {
                        'en-US': `${baseUrl}${page}`,
                        'en-CA': `${baseUrl}/ca${page}`,
                        'x-default': `${baseUrl}${page}`,
                    }
                }
            });
        });
    });

    // 8. Add Localized Individual Integrations
    integrations.forEach(integration => {
        const page = `/integrations/${integration.slug}`;
        locales.forEach(locale => {
            const path = locale + page;
            const fullUrl = `${baseUrl}${path}`;
            routes.push({
                url: fullUrl,
                lastModified: new Date(),
                changeFrequency: 'monthly',
                priority: 0.6,
                alternates: {
                    languages: {
                        'en-US': `${baseUrl}${page}`,
                        'en-CA': `${baseUrl}/ca${page}`,
                        'x-default': `${baseUrl}${page}`,
                    }
                }
            });
        });
    });

    return routes;
}
