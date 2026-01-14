import { getBlogPosts, BlogPost } from '@/lib/seobot';
import BlogCarouselClient from './BlogCarouselClient';

interface LatestBlogCarouselProps {
    title?: string;
    subtitle?: string;
    limit?: number;
    badgeText?: string;
    viewAllLink?: string;
    viewAllText?: string;
    theme?: 'default' | 'premium' | 'independent';
}

export default async function LatestBlogCarousel({
    title = "Latest Insights",
    subtitle = "Strategies and technical breakdowns for the high-performance dealership.",
    limit = 6,
    badgeText = "Intelligence",
    viewAllLink = "/blog",
    viewAllText = "All Articles",
    theme = 'default'
}: LatestBlogCarouselProps) {
    const { posts } = await getBlogPosts(0, limit);

    if (!posts || posts.length === 0) return null;

    return (
        <BlogCarouselClient
            posts={posts}
            title={title}
            subtitle={subtitle}
            badgeText={badgeText}
            viewAllLink={viewAllLink}
            viewAllText={viewAllText}
            theme={theme}
        />
    );
}
