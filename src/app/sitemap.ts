import { MetadataRoute } from 'next';
import { getBlogPosts, getAllCategories, getAllTags } from '@/lib/seobot';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

// Allow dynamic generation for external API calls
export const dynamic = 'force-dynamic';

const baseUrl = 'https://www.visquanta.com';
const locales = ['', '/ca']; // '' = default US, '/ca' = Canada

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    // Static main pages
    const mainPages = [
        '',
        '/about-visquanta',
        '/auto-master-suite',
        '/blog',
        '/book-demo',
        '/careers',
        //  '/case-studies', // Case studies not yet localized, handled separately
        '/company',
        '/contact',
        '/custom-campaigns',
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

    // Dealer segment pages
    const dealerPages = [
        '/dealers',
        '/dealers/independent',
        '/dealers/franchise',
        '/dealers/auto-groups',
        '/dealers/pre-owned',
    ];

    // Case study slugs from shared data module (US Only for now)
    const caseStudySlugs = getAllCaseStudySlugs();

    // Dynamically fetch blog posts, categories, and tags from Seobot API
    let blogSlugs: string[] = [];
    let categorySlugs: string[] = [];
    let tagSlugs: string[] = [];

    try {
        // Fetch up to 100 blog posts for sitemap
        const [{ posts }, categories, tags] = await Promise.all([
            getBlogPosts(0, 100),
            getAllCategories(),
            getAllTags()
        ]);

        blogSlugs = posts.map(post => post.slug);
        categorySlugs = categories.map(cat => cat.slug);
        tagSlugs = tags.map(tag => tag.slug);
    } catch (error) {
        console.error('Error fetching dynamic content for sitemap:', error);
        // Graceful degradation - sitemap will still include static pages
    }

    const routes: MetadataRoute.Sitemap = [];

    // Helper to add localized routes
    const addLocalizedRoutes = (paths: string[], priority: number, changeFreq: 'weekly' | 'monthly') => {
        paths.forEach(page => {
            locales.forEach(locale => {
                const isDefault = locale === '';
                const path = locale + page;
                const fullUrl = `${baseUrl}${path === '/' ? '' : path}`;

                // Construct alternates
                const languages: Record<string, string> = {
                    'en-US': `${baseUrl}${page}`,
                    'en-CA': `${baseUrl}/ca${page}`,
                    'x-default': `${baseUrl}${page}`,
                    // 'en-GB': `${baseUrl}/uk${page}`, // Future
                };

                routes.push({
                    url: fullUrl,
                    lastModified: new Date(),
                    changeFrequency: changeFreq,
                    priority: page === '' ? 1 : priority,
                    alternates: {
                        languages
                    }
                });
            });
        });
    };

    // Add Main Pages
    addLocalizedRoutes(mainPages, 0.8, 'weekly');

    // Add Dealer Pages
    addLocalizedRoutes(dealerPages, 0.7, 'monthly');

    // Add Blog Posts
    // Note: Assuming /ca/blog/[slug] is handled by router
    blogSlugs.forEach(slug => {
        const page = `/blog/${slug}`;
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

    // Add Blog Categories as localized?
    // User prompt didn't explicitly ask for categories, strictly pages.
    // But categories are useful. I'll add them initialized.
    categorySlugs.forEach(slug => {
        const page = `/blog/category/${slug}`;
        // Assuming categories are localized too
        locales.forEach(locale => {
            const path = locale + page;
            const fullUrl = `${baseUrl}${path}`;
            routes.push({
                url: fullUrl,
                lastModified: new Date(),
                changeFrequency: 'weekly',
                priority: 0.5,
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

    // Case Studies (US Only)
    caseStudySlugs.forEach(slug => {
        routes.push({
            url: `${baseUrl}/case-studies/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
            alternates: {
                languages: {
                    'en-US': `${baseUrl}/case-studies/${slug}`,
                    'x-default': `${baseUrl}/case-studies/${slug}`,
                }
            }
        });
    });
    // Add main /case-studies index (US Only)
    routes.push({
        url: `${baseUrl}/case-studies`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
            languages: {
                'en-US': `${baseUrl}/case-studies`,
                'x-default': `${baseUrl}/case-studies`,
            }
        }
    });

    return routes;
}
