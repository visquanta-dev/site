import { getBlogPosts } from '@/lib/seobot';
import HomeBlogBentoGrid from './HomeBlogBentoGrid';

export default async function HomeBlogSection() {
    // Fetch 3 posts for the bento grid
    // The layout requires exactly 3 items for the perfect grid:
    // 1. Featured (Large)
    // 2. Compact
    // 3. Compact
    const { posts } = await getBlogPosts(0, 3);

    // Manual override for the Featured image as requested
    const processedPosts = posts?.map(post => {
        if (post.headline.includes('CRM Database Reactivation')) {
            return {
                ...post,
                image: '/images/wireframes/ultimate-guide-crm-reactivation.jpeg'
            };
        }
        if (post.headline.includes('Third-Party Lead Providers')) {
            return {
                ...post,
                image: '/images/wireframes/7_lead_providers.jpeg'
            };
        }
        return post;
    });

    if (!processedPosts || processedPosts.length === 0) return null;

    return (
        <section className="relative py-20 lg:py-24 overflow-hidden">
            {/* Base Gradient Layer */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#0a0a0a_0%,#14120f_30%,#19160f_50%,#14120f_70%,#0a0a0a_100%)]" />

            {/* Radial Glow Layer */}
            <div
                className="absolute inset-0 opacity-60 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse at 35% 50%, rgba(255,116,4,0.06) 0%, transparent 60%)',
                    filter: 'blur(80px)'
                }}
            />

            {/* Grid Overlay Layer */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none bg-[size:60px_60px]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`
                }}
            />

            <div className="container px-4 mx-auto relative z-10">
                <HomeBlogBentoGrid posts={processedPosts} />
            </div>
        </section>
    );
}
