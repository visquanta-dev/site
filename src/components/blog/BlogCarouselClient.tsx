'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/seobot';

interface BlogCarouselClientProps {
    posts: BlogPost[];
    title: string;
    subtitle: string;
    badgeText: string;
    viewAllLink: string;
    viewAllText: string;
    theme: 'default' | 'premium' | 'independent';
}

export default function BlogCarouselClient({
    posts,
    title,
    subtitle,
    badgeText,
    viewAllLink,
    viewAllText,
    theme
}: BlogCarouselClientProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 450;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (theme === 'premium') {
        return (
            <section className="py-40 bg-[#030303] relative overflow-hidden">
                {/* Premium Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                    <div className="absolute top-[-20%] left-[30%] w-[800px] h-[800px] bg-[#FF7404]/[0.02] rounded-full blur-[200px] pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />
                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
                </div>

                <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="container-wide flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] rounded-full mb-8 shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)]">
                                <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-black">{badgeText}</span>
                            </div>

                            <h2 className="text-5xl lg:text-px lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em]" dangerouslySetInnerHTML={{ __html: title.replace(' ', '<br />') }} />
                        </div>

                        <Link
                            href={viewAllLink}
                            className="group inline-flex items-center gap-3 px-8 py-4 border border-[#FF7404] rounded-full text-[#FF7404] font-semibold text-sm hover:bg-[#FF7404] hover:text-black transition-all duration-300 shadow-[0_0_30px_-10px_rgba(255,116,4,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]"
                        >
                            {viewAllText}
                        </Link>
                    </motion.div>

                    {/* Scrolling Cards Container */}
                    <div className="relative">
                        <button
                            onClick={() => scroll('left')}
                            className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.08] items-center justify-center text-white/60 hover:bg-[#FF7404] hover:text-black hover:border-[#FF7404] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.08] items-center justify-center text-white/60 hover:bg-[#FF7404] hover:text-black hover:border-[#FF7404] transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>

                        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />

                        <div
                            ref={scrollContainerRef}
                            className="flex gap-8 overflow-x-auto scrollbar-hide px-8 lg:px-20 pb-4 snap-x snap-mandatory no-scrollbar"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {posts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                                    className="flex-shrink-0 w-[340px] lg:w-[400px] h-[520px] snap-start group"
                                >
                                    <Link href={`/blog/${post.slug}`} className="block h-full">
                                        <div className="h-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 flex flex-col relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            <div className="relative h-60 overflow-hidden">
                                                <img
                                                    src={post.image}
                                                    alt={post.headline}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                                />
                                                <div className="absolute top-5 right-5 px-4 py-2 bg-black/70 backdrop-blur-xl rounded-full border border-white/10">
                                                    <span className="text-[11px] font-medium text-white/90">{post.readingTime} min read</span>
                                                </div>
                                                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-[#020202]/20 to-transparent" />
                                            </div>

                                            <div className="p-8 relative flex-1 flex flex-col">
                                                <div className="text-[#FF7404] text-xs font-semibold tracking-widest uppercase mb-4">
                                                    {post.category?.title || 'Insights'}
                                                </div>
                                                <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#FF7404] transition-colors duration-300 line-clamp-2">
                                                    {post.headline}
                                                </h3>
                                                <p className="text-sm text-white/35 mb-auto">
                                                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                                </p>
                                                <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.04]">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7404]/30 to-[#FF7404]/10 flex items-center justify-center overflow-hidden ring-2 ring-white/[0.05]">
                                                            <div className="relative w-full h-full bg-[#111] flex items-center justify-center">
                                                                <span className="text-sm font-bold text-[#FF7404]">VQ</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-xs text-white/40">
                                                            <span className="block text-[10px] uppercase tracking-widest text-white/25 mb-0.5">Article by</span>
                                                            <span className="text-white/60 font-medium">VisQuanta Team</span>
                                                        </div>
                                                    </div>
                                                    <button className="px-5 py-2.5 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] text-black text-xs font-bold rounded-full hover:shadow-[0_0_20px_-5px_#FF7404] transition-shadow duration-300">
                                                        Read
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (theme === 'independent') {
        return (
            <section className="py-24 bg-[#020202] relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />
                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div>
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 mb-6"
                            >
                                <BookOpen className="w-6 h-6 text-[#FF7404]" />
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                                {title.split(' ')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">{title.split(' ').slice(1).join(' ')}</span>
                            </h2>
                            <p className="text-zinc-400 text-lg max-w-xl">
                                {subtitle}
                            </p>
                        </div>
                        <Link
                            href={viewAllLink}
                            className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                        >
                            <motion.span whileHover={{ x: -5 }}>{viewAllText}</motion.span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.slice(0, 3).map((post, i) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="group block h-full rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,116,4,0.15)]"
                                >
                                    <div className={`h-2 bg-gradient-to-r from-[#FF7404] to-[#FF9040]`} />
                                    <div className="relative">
                                        <div className="p-8 relative">
                                            <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                                <span className="px-2 py-0.5 rounded-full bg-[#FF7404]/10 text-[#FF7404] font-bold">
                                                    {post.category?.title || 'Insights'}
                                                </span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors duration-300 line-clamp-2">
                                                {post.headline}
                                            </h3>
                                            <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                                {post.metaDescription}
                                            </p>
                                            <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:gap-3 transition-all">
                                                <BookOpen className="w-4 h-4 text-[#FF7404]" />
                                                Read Article
                                                <motion.div whileHover={{ x: 5 }}>
                                                    <ArrowRight className="w-4 h-4" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    // Default theme (Homepage style)
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-enterprise-grid opacity-5 pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />

            <div className="container-wide relative z-10 px-4 md:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <BookOpen className="w-3 h-3" />
                            {badgeText}
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-4 uppercase">
                            {title.split(' ')[0]} <span className="text-white/40">{title.split(' ').slice(1).join(' ')}</span>
                        </h2>
                        <p className="text-white/50 text-lg font-medium leading-relaxed">
                            {subtitle}
                        </p>
                    </motion.div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#ff7404]/50 hover:bg-[#ff7404]/5 transition-all duration-300 active:scale-90"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#ff7404]/50 hover:bg-[#ff7404]/5 transition-all duration-300 active:scale-90"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                        <Link
                            href={viewAllLink}
                            className="hidden md:flex ml-4 h-12 px-8 items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all group"
                        >
                            {viewAllText}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mask-linear-fade">
                    <div className="flex gap-6 animate-infinite-scroll-slow w-max hover:[animation-play-state:paused] cursor-pointer py-4 no-scrollbar overflow-x-auto lg:overflow-visible">
                        {[...posts, ...posts].map((post, i) => (
                            <motion.div
                                key={`${post.id}-${i}`}
                                className="flex-shrink-0 w-[300px] md:w-[450px]"
                            >
                                <Link href={`/blog/${post.slug}`} className="group block">
                                    <div className="relative h-[250px] rounded-t-[2.5rem] overflow-hidden border-x border-t border-white/5 shadow-2xl">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent pointer-events-none z-10" />
                                        <img
                                            src={post.image}
                                            alt={post.headline}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black text-[#ff7404] uppercase tracking-widest">
                                                {post.category?.title || 'Insights'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#0A0A0A] border-x border-b border-white/5 rounded-b-[2.5rem] p-10 transition-all duration-500 group-hover:border-[#ff7404]/30">
                                        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                            <span>{new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{post.readingTime} min read</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/50 transition-all duration-500 leading-tight tracking-tight line-clamp-2">
                                            {post.headline}
                                        </h3>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-[#111] border border-white flex items-center justify-center overflow-hidden">
                                                    <span className="text-xs font-bold text-[#FF7404]">VQ</span>
                                                </div>
                                                <span className="text-xs font-bold text-white/50">VisQuanta Team</span>
                                            </div>
                                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center transition-all duration-500 group-hover:bg-[#ff7404] group-hover:text-black group-hover:scale-110 shadow-lg">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .animate-infinite-scroll-slow {
                    animation: scroll-insights 80s linear infinite;
                }
                @keyframes scroll-insights {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .mask-linear-fade {
                    mask-image: linear-gradient(90deg, transparent, white 5%, white 95%, transparent);
                }
            `}</style>
        </section>
    );
}
