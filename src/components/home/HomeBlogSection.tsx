import { getLatestArticles } from '@/lib/blog';
import HomeBlogBentoGrid from './HomeBlogBentoGrid';

export default async function HomeBlogSection() {
    // Fetch a larger batch to ensure we find the featured post and others
    const posts = await getLatestArticles(10);

    const featuredSlug = 'crm-database-reactivation-guide';
    const featuredPost = posts.find(p => p.slug === featuredSlug);
    const otherPosts = posts.filter(p => p.slug !== featuredSlug);

    let displayPosts = [];

    if (featuredPost) {
        displayPosts = [featuredPost, ...otherPosts.slice(0, 3)];
    } else {
        displayPosts = posts.slice(0, 4);
    }

    if (!displayPosts || displayPosts.length === 0) return null;


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
                <HomeBlogBentoGrid posts={displayPosts} />
            </div>
        </section>
    );
}
