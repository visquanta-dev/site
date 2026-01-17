import { getAllPostsMeta } from './seobot';

export interface BlogArticle {
    slug: string;
    title: string;
    heroImage: string;        // ALWAYS include
    category: string;
    readTime: number;
    publishedAt: string;
    excerpt?: string;
    author?: string;
}

// Single source of truth for fetching articles
export async function getArticles(options?: {
    limit?: number;
    category?: string;
    excludeSlug?: string;
    featured?: boolean;
}): Promise<BlogArticle[]> {

    const posts = await getAllPostsMeta();

    let filtered = posts;

    if (options?.category) {
        // Match by slug or title
        const cat = options.category.toLowerCase();
        filtered = filtered.filter(p =>
            p.category.slug.toLowerCase() === cat ||
            p.category.title.toLowerCase() === cat
        );
    }

    if (options?.excludeSlug) {
        filtered = filtered.filter(p => p.slug !== options.excludeSlug);
    }

    // Handling 'featured' flag - currently defaulting to latest as we lack a specific field in BasePost
    // If we had a tag 'featured', we could filter by that:
    if (options?.featured) {
        // filtered = filtered.filter(p => p.tags.some(t => t.slug === 'featured'));
        // For now, just taking the top ones (latest) is the safest bet without knowing tag taxonomy
    }

    // Sort by date desc (already sorted in getAllPostsMeta but good to be safe)
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Limit
    if (options?.limit) {
        filtered = filtered.slice(0, options.limit);
    }

    return filtered.map(post => {
        // Manual override for specific wireframes (matching logic in [slug]/page.tsx)
        let heroImage = post.image;
        const headline = post.headline || '';

        if (headline.includes('CRM Database Reactivation')) {
            heroImage = '/images/crm-reactivation-featured.jpg';
        } else if (headline.includes('Third-Party Lead Providers')) {
            heroImage = '/images/wireframes/7_lead_providers.jpeg';
        } else if (headline.includes('First Contact Rates')) {
            heroImage = '/images/wireframes/6.jpeg';
        } else if (headline.includes('AI in Auto Sales')) {
            heroImage = '/images/wireframes/6.jpeg';
        } else if (headline.includes('Lead Response Time')) {
            heroImage = '/images/wireframes/6.jpeg';
        }

        return {
            slug: post.slug,
            title: post.headline,
            heroImage: heroImage,
            category: post.category.title,
            readTime: post.readingTime,
            publishedAt: post.createdAt,
            excerpt: post.metaDescription,
            author: 'VisQuanta Team'
        };
    });
}

// Convenience functions that use the main function
export async function getRelatedArticles(category: string, excludeSlug: string, limit = 2) {
    return getArticles({ category, excludeSlug, limit });
}

export async function getFeaturedArticles(limit = 4) {
    return getArticles({ featured: true, limit });
}

export async function getLatestArticles(limit = 6, category?: string) {
    return getArticles({ limit, category });
}
