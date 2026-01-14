'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface BlogPost {
    slug: string;
    headline: string;
    metaDescription: string;
    image?: string;
    category?: { title: string };
    readingTime?: number;
    createdAt: string;
}

interface HomeBlogBentoGridProps {
    posts: BlogPost[];
}

export default function HomeBlogBentoGrid({ posts }: HomeBlogBentoGridProps) {
    if (!posts || posts.length === 0) return null;

    // We need 3 posts to fill the grid effectively.
    const featured = posts[0];
    const compact1 = posts[1];
    const compact2 = posts[2];

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

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">

                {/* 1. FEATURED CARD (Spans 2 cols, 2 rows on Desktop) */}
                {featured && (
                    <motion.div
                        className="md:col-span-2 lg:col-span-2 lg:row-span-2 group relative rounded-[20px] bg-[#111] border border-white/[0.06] hover:border-[#ff7404]/25 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_40px_rgba(255,116,4,0.1)] cursor-pointer h-[450px] md:h-auto featured-card-border"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link href={`/blog/${featured.slug}`} className="block h-full w-full relative overflow-hidden rounded-[20px]">
                            {/* Image */}
                            <div className="absolute inset-0 w-full h-full">
                                {featured.image && (
                                    <Image
                                        src={featured.image}
                                        alt={featured.headline}
                                        fill
                                        className="object-cover transition-transform duration-[10s] ease-linear scale-100 group-hover:scale-105 group-hover:duration-[0.5s]"
                                        onLoadingComplete={(img) => {
                                            img.style.transform = "scale(1.03)";
                                        }}
                                    />
                                )}
                                {/* Bottom gradient only for text readability - removed top/full overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90" />
                            </div>




                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end z-10">
                                <div className="mb-4">
                                    <span className="text-[11px] font-semibold uppercase tracking-[0.05em] text-[#ff7404]">
                                        {featured.category?.title || 'Insight'}
                                    </span>
                                </div>
                                <h3 className="text-2xl md:text-4xl font-semibold text-white mb-3 leading-tight max-w-lg">
                                    {featured.headline}
                                </h3>
                                <p className="text-[15px] text-white/70 line-clamp-2 md:line-clamp-2 mb-4 max-w-lg">
                                    {featured.metaDescription}
                                </p>
                                <div className="text-[12px] text-white/50 font-medium">
                                    {formatDate(featured.createdAt)} • {featured.readingTime} min read
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* 2. COMPACT CARD (Top Right) */}
                {compact1 && (
                    <CompactCard post={compact1} delay={0.1} />
                )}

                {/* 3. COMPACT CARD (Middle Right - or Bottom Right in grid flow) */}
                {compact2 && (
                    <CompactCard post={compact2} delay={0.2} />
                )}
            </div>

            {/* View All CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
            >
                <Link
                    href="/blog"
                    className="inline-flex items-center px-7 py-3.5 bg-gradient-to-br from-[#ff7404] to-[#e66000] text-[#0a0a0a] text-[15px] font-bold rounded-lg shadow-[0_4px_20px_rgba(255,116,4,0.3)] hover:shadow-[0_6px_25px_rgba(255,116,4,0.45)] hover:-translate-y-[2px] hover:brightness-110 transition-all duration-300 group"
                >
                    View All Articles
                    <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
            </motion.div>
        </div>
    );
}

// Sub-component for Compact Cards to ensure consistency
function CompactCard({ post, delay, className = "" }: { post: BlogPost, delay: number, className?: string }) {
    if (!post) return null;

    // Date formatter
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    };

    return (
        <motion.div
            className={`group relative rounded-[16px] overflow-hidden bg-[#111] border border-white/[0.06] hover:border-[#ff7404]/25 transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),0_0_30px_rgba(255,116,4,0.08)] cursor-pointer flex flex-col h-[213px] ${className}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Link href={`/blog/${post.slug}`} className="flex flex-row h-full">
                {/* Image - reduced width for compact horizontal feel or keep vertical? 
                   Request says: "Compact Cards: Height ~150px each, Image aspect ratio 16:9". 
                   Wait, 16:9 image in a 150px high card means the image drives the width or it's a vertical stack?
                   Original CompactCard was a vertical stack (Image Top, Content Bottom). 
                   If height is fixed ~150px, vertical stack is tight. 
                   Let's check layout: "1+2 layout ... Compact cards stacked vertically".
                   If compact cards are stacked vertically on the right, and the *total* height matches the Featured card (320px), then each compact card should be ~150-160px high.
                   Layout:
                   [ Featured (320px) ] [ Compact 1 (150px) ]
                                        [ Compact 2 (150px) ]
                   With 16px gap. 150+150+16 = 316px. Matches featured perfectly.
                   So Compact 1 is a horizontal card? Or vertical?
                   "Image aspect ratio: 16:9". 
                   If vertical: Image height ~84px (150 width?), Content height ~66px. Very tight.
                   If horizontal: Image Left, Content Right. But user specs don't explicitly say "horizontal" for compact.
                   Wait, "Wide Card" logic from before was horizontal.
                   But "Compact Cards" usually imply vertical stack in a grid column.
                   If I make them horizontal (Image Left 40%, Content Right 60%), they fit nicely in 150px height.
                   Let's stick to the visual: "Compact cards... stacked vertically".
                   "Image aspect ratio: 16:9". 
                   Let's try to make them horizontal flex row if possible, or vertical if constraints allow.
                   Actually, if the column width is ~350px (1/3 of 1100), 16:9 image is ~196px height. That's taller than the whole card!
                   So the image CANNOT be full width 16:9 if the card is only 150px high.
                   UNLESS the image is small.
                   OR... the user means the image *container* is 16:9.
                   Let's switch Compact cards to Horizontal layout (Image Left ~100-120px width, Content Right).
                   Wait, the user specs "Image aspect ratio: 16:9". This usually applies to the image asset itself.
                   Let's go with a horizontal card layout for the compact ones to ensure they fit the 150px height constraint comfortably.
                   Structure: Flex Row. Image Width ~35-40%. Content ~60-65%.
                */}
                <div className="relative w-[40%] h-full overflow-hidden border-r border-white/[0.06]">
                    {post.image && (
                        <Image
                            src={post.image}
                            alt={post.headline}
                            fill
                            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                        />
                    )}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-center bg-[#111]">
                    <div className="mb-2">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.05em] text-[#ff7404]">
                            {post.category?.title || 'Insight'}
                        </span>
                    </div>
                    <h3 className="text-[16px] md:text-[17px] font-semibold text-white mb-3 leading-snug line-clamp-3">
                        {post.headline}
                    </h3>
                    <div className="text-[12px] text-white/50 font-medium mt-auto">
                        {formatDate(post.createdAt)} • {post.readingTime} min
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
