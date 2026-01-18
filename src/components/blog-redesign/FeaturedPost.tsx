'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogArticle } from '@/lib/blog';

export default function FeaturedPost({ post }: { post: BlogArticle }) {
    if (!post) return null;

    return (
        <Link href={`/blog/${post.slug}`} className="group relative block w-full mb-24 cursor-none-custom">
            <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl bg-[#111111] border border-white/[0.06] group-hover:border-[#ff7404]/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_30px_rgba(255,116,4,0.08)] grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] min-h-[500px] lg:min-h-[560px] "
            >
                {/* Image Section */}
                <div className="relative h-full w-full overflow-hidden">
                    {/* Gradient Overlay for seamless blending */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10 lg:hidden" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111111] z-10 hidden lg:block w-full h-full pointer-events-none" />

                    <motion.div
                        className="relative w-full h-full"
                        initial={{ scale: 1.0 }}
                        animate={{ scale: 1.02 }}
                        transition={{ duration: 10, ease: "linear", repeat: 0 }}
                        whileHover={{ scale: 1.05, transition: { duration: 0.6 } }}
                    >
                        <Image
                            src={post.featuredImage}
                            alt={post.title}
                            fill
                            className="object-contain"
                            priority
                            sizes="(max-width: 768px) 100vw, 65vw"
                        />
                    </motion.div>

                    {/* Category Badge on Image (Mobile) */}
                    <div className="absolute top-6 left-6 z-20 lg:hidden">
                        <span className="px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-[0.05em] text-white">
                            {post.category?.title}
                        </span>
                    </div>
                </div>

                {/* Content Section */}
                <div className="relative z-20 flex flex-col justify-center p-8 md:p-12 lg:pr-16 bg-[#111111]">
                    {/* Category Badge (Desktop) */}
                    <span className="hidden lg:inline-block text-[11px] font-bold uppercase tracking-[0.05em] text-[#ff7404] mb-6">
                        {post.category?.title || 'Featured'}
                    </span>

                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-white leading-[1.15] tracking-[-0.02em] mb-6 group-hover:text-[#ff7404] transition-colors duration-300">
                        {post.title}
                    </h2>

                    <p className="text-lg text-white/60 mb-8 line-clamp-3 leading-relaxed lg:max-w-md">
                        {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 text-[13px] text-white/50 font-medium tracking-[0.02em] mt-auto lg:mt-0">
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="w-1 h-1 rounded-full bg-white/30" />
                        <span>{post.readTime} min read</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
