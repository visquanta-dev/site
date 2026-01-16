import { MetadataRoute } from 'next';
import { getBlogPosts, getAllCategories, getAllTags } from '@/lib/seobot';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

// Allow dynamic generation for external API calls
export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.visquanta.com';

    // Static main pages
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

    // Dealer segment pages
    const dealerPages = [
        '/dealers',
        '/dealers/independent',
        '/dealers/franchise',
        '/dealers/auto-groups',
        '/dealers/pre-owned',
    ];

    // Case study slugs from shared data module
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

    const routes: MetadataRoute.Sitemap = [
        // Main pages
        ...mainPages.map(page => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: page === '' ? 1 : 0.8,
        })),

        // Dealer pages
        ...dealerPages.map(page => ({
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),

        // Blog posts (dynamic from Seobot)
        ...blogSlugs.map(slug => ({
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),

        // Blog categories (dynamic from Seobot)
        ...categorySlugs.map(slug => ({
            url: `${baseUrl}/blog/category/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.5,
        })),

        // Blog tags (dynamic from Seobot)
        ...tagSlugs.map(slug => ({
            url: `${baseUrl}/blog/tag/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.4,
        })),

        // Case studies
        ...caseStudySlugs.map(slug => ({
            url: `${baseUrl}/case-studies/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ];

    return routes;
}
