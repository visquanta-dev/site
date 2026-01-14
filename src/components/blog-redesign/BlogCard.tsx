'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogPost } from '@/lib/seobot';

export default function BlogCard({ post }: { post: BlogPost }) {
    if (!post) return null;

    return (
        <Link href={`/blog/${post.slug}`} className="group relative block h-full w-full">
            <motion.div
                className="h-full w-full flex flex-col overflow-hidden rounded-2xl bg-[#111111] border border-white/[0.06] transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:border-[#D4A853]/25 group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.3),_0_0_30px_rgba(212,168,83,0.08)] group-hover:-translate-y-1.5"
            >
                {/* Image Area */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#151515]">
                    <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.04 }}
                        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <Image
                            src={post.image || '/images/blog/default.jpg'}
                            alt={post.headline}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </motion.div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Badge */}
                    <span className="absolute top-3 left-3 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-[0.05em] text-white/90">
                        {post.category?.title}
                    </span>
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-2 text-[13px] text-white/50 font-normal tracking-[0.02em] mb-3">
                        <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/30" />
                        <span>{post.readingTime} min read</span>
                    </div>

                    {/* Headline */}
                    <h3 className="text-[18px] font-semibold text-white leading-[1.4] mb-2 line-clamp-2 group-hover:text-[#D4A853] transition-colors">
                        {post.headline}
                    </h3>

                    {/* Description */}
                    <p className="text-[15px] text-white/65 leading-[1.6] line-clamp-2 mb-4 flex-1">
                        {post.metaDescription}
                    </p>

                    {/* CTA - Text Only with animated underline */}
                    <div className="mt-auto pt-4 flex items-center text-[#D4A853] text-[14px] font-medium">
                        <span className="relative inline-block pb-0.5">
                            Read Article
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#D4A853] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
