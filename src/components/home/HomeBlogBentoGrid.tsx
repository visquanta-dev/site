'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogArticle } from '@/lib/blog';

interface HomeBlogBentoGridProps {
    posts: BlogArticle[];
}

export default function HomeBlogBentoGrid({ posts }: HomeBlogBentoGridProps) {
    if (!posts || posts.length === 0) return null;

    // We take the first as featured, and the next 3 for the bottom grid
    const featured = posts[0];
    const gridPosts = posts.slice(1, 4);

    // Helper for date formatting
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <div className="max-w-[1240px] mx-auto">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight">
                    The VisQuanta <span className="text-[#ff7404]">Insight</span>
                </h2>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-12">

                {/* 1. FEATURED CARD - Hero Style */}
                {featured && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="w-full relative group"
                    >
                        {/* Animated Orange Glow */}
                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="absolute -inset-2 bg-[#ff7404] rounded-[32px] blur-3xl z-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity"
                        />

                        {/* Moving Border Light (The "Motion") - Handled by CSS class 'featured-card-border' below */}

                        <Link href={`/blog/${featured.slug}`} className="relative z-10 group block w-full bg-black rounded-[2rem] overflow-hidden border border-white/[0.05] hover:border-[#ff7404]/50 hover:bg-white/[0.04] transition-all duration-500 featured-card-border">
                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image Section - Large & Cinematic */}
                                <div className="relative aspect-video lg:aspect-auto lg:h-full overflow-hidden border-b lg:border-b-0 lg:border-r border-white/[0.06] bg-[#020202]">
                                    {featured.featuredImage && (
                                        <Image
                                            src={featured.featuredImage}
                                            alt={featured.title}
                                            fill
                                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none" />

                                    {/* Data Tab Overlay - Only visible if it's the specific CRM article or we want it on all featured */}
                                    {/* Data Tab Overlay Removed */}
                                </div>

                                {/* Content Section */}
                                <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                                    <div className="mb-6 flex items-center gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#ff7404] bg-[#ff7404]/10 px-3 py-1.5 rounded-full border border-[#ff7404]/20">
                                            {typeof featured.category === 'object' ? featured.category.title : (featured.category || 'Featured')}
                                        </span>
                                        <span className="text-zinc-500 text-sm">•</span>
                                        <span className="text-zinc-500 text-sm font-medium">
                                            {formatDate(featured.publishedAt)}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] group-hover:text-[#ff7404] transition-colors">
                                        {featured.title}
                                    </h3>

                                    <p className="text-lg text-zinc-400 leading-relaxed mb-8 line-clamp-3">
                                        {featured.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-zinc-400">
                                                VQ
                                            </div>
                                            <div className="text-xs">
                                                <span className="block text-white font-medium">VisQuanta Team</span>
                                                <span className="block text-zinc-500">{featured.readTime} min read</span>
                                            </div>
                                        </div>
                                        <span className="text-[#ff7404] text-sm font-bold tracking-wide group-hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                                            READ NOW →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* 2. BOTTOM GRID - 3 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridPosts.map((post, idx) => (
                        <StandardCard key={post.slug} post={post} delay={0.1 * (idx + 1)} />
                    ))}
                </div>

            </div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 text-center"
            >
                <Link
                    href="/blog"
                    className="inline-flex items-center px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-white text-[15px] font-medium rounded-full transition-all duration-300 group"
                >
                    Explore all articles
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </motion.div>
        </div>
    );
}

function StandardCard({ post, delay }: { post: BlogArticle, delay: number }) {
    if (!post) return null;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link href={`/blog/${post.slug}`} className="group block bg-black border border-white/[0.05] rounded-[2rem] overflow-hidden hover:border-[#ff7404]/50 hover:bg-white/[0.04] transition-all duration-500 h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#020202]">
                    {post.featuredImage && (
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                    <div className="mb-4">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[10px] font-bold text-[#ff7404] tracking-widest uppercase">
                            {typeof post.category === 'object' ? post.category.title : (post.category || 'Insight')}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 leading-tight group-hover:text-[#ff7404] transition-colors line-clamp-2">
                        {post.title}
                    </h3>

                    <div className="mt-auto pt-4 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500 border-t border-white/5">
                        <span>{formatDate(post.publishedAt)} • {post.readTime} min read</span>
                        <span className="text-white group-hover:text-[#ff7404] transition-colors">Read →</span>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
