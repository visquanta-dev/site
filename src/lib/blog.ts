import { getAllPostsMeta } from './seobot';

export interface BlogArticle {
    id: string;
    slug: string;
    title: string;
    featuredImage: string;        // ALWAYS include
    category: {
        slug: string;
        title: string;
    };
    readTime: number;
    publishedAt: string;
    excerpt?: string;
    author?: string;
}

// Single source of truth for post images to avoid visual drift
export function getPostFeaturedImage(headline: string, defaultImage: string): string {
    const h = headline || '';
    if (h.includes('CRM Database Reactivation')) {
        return '/images/wireframes/ultimate-guide-crm-reactivation.jpeg';
    }
    if (h.includes('Third-Party Lead Providers')) {
        return '/images/wireframes/7_lead_providers.jpeg';
    }
    if (h.includes('First Contact Rates') ||
        h.includes('AI in Auto Sales') ||
        h.includes('Lead Response Time')) {
        return '/images/wireframes/6.jpeg';
    }
    return defaultImage || '/images/blog/default.jpg';
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

    // Sort by date desc
    filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

    // Limit
    if (options?.limit) {
        filtered = filtered.slice(0, options.limit);
    }

    return filtered.map(post => ({
        id: post.id,
        slug: post.slug,
        title: post.headline,
        featuredImage: getPostFeaturedImage(post.headline, post.image),
        category: {
            slug: post.category.slug,
            title: post.category.title
        },
        readTime: post.readingTime,
        publishedAt: post.createdAt,
        excerpt: post.metaDescription,
        author: 'VisQuanta Team'
    }));
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
