'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '@/lib/seobot';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { localeLink } from '@/lib/locale-link';

interface BlogPageClientProps {
    posts: BlogPost[];
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

export default function BlogPageClient({ posts }: BlogPageClientProps) {
    const { locale } = useLocale();

    if (posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-zinc-400 text-lg">No articles found.</p>
            </div>
        );
    }

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {posts.map((post, i) => (
                <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-[#FF7404]/30 transition-all duration-500 flex flex-col h-full"
                >
                    <Link href={localeLink(`/blog/${post.slug}`, locale)} className="block">
                        <div className="h-56 bg-zinc-950 relative overflow-hidden">
                            {/* Cinematic Overlay - Service Drive Style */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10" />
                            <div className="absolute inset-0 bg-black/20 z-1" />

                            {post.image ? (
                                <Image
                                    src={post.image}
                                    alt={post.headline}
                                    fill
                                    style={{
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%) contrast(1.1) brightness(0.6)'
                                    }}
                                    className="opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                                    <span className="font-mono text-xs uppercase tracking-widest text-zinc-700">
                                        VisQuanta
                                    </span>
                                </div>
                            )}
                            <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    {post.category?.title || 'Article'}
                                </span>
                            </div>
                        </div>
                    </Link>

                    <div className="p-8 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {formatDate(post.createdAt)}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-700" />
                            <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {post.readingTime} min read
                            </span>
                        </div>

                        <Link href={localeLink(`/blog/${post.slug}`, locale)} className="block group/title">
                            <h2 className="text-xl font-bold text-white mb-3 group-hover/title:text-[#FF7404] transition-colors line-clamp-2">
                                {post.headline}
                            </h2>
                        </Link>

                        <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                            {post.metaDescription}
                        </p>

                        <Link
                            href={localeLink(`/blog/${post.slug}`, locale)}
                            className="inline-flex items-center gap-2 text-sm font-bold text-white mt-auto group-hover:gap-3 transition-all"
                        >
                            Read Article <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
