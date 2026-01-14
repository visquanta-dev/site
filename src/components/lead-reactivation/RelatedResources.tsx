'use client';

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function RelatedResources() {
    const [realArticles, setRealArticles] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/blog/latest?limit=6')
            .then(res => res.json())
            .then(data => {
                if (data.posts && data.posts.length > 0) {
                    const mapped = data.posts.map((post: any) => ({
                        category: post.category?.title || 'Digital Drive',
                        title: post.headline,
                        date: new Date(post.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                        readTime: `${post.readingTime} min read`,
                        author: { name: "VisQuanta Team", avatar: null },
                        image: post.image,
                        href: `/blog/${post.slug}`
                    }));
                    setRealArticles(mapped);
                }
            });
    }, []);

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (realArticles.length === 0) return null;

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 420;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-40 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient glows */}
                <div className="absolute top-[-20%] left-[30%] w-[800px] h-[800px] bg-[#FF7404]/[0.02] rounded-full blur-[200px] pointer-events-none" />
                <div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />

                {/* Top accent */}
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
                            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-black">Latest Articles</span>
                        </div>

                        <h2 className="text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em]">
                            The VisQuanta <br />
                            <span className="text-white/90">Insight</span>
                        </h2>
                    </div>

                    <Link
                        href="/blog"
                        className="group inline-flex items-center gap-3 px-8 py-4 border border-[#FF7404] rounded-full text-[#FF7404] font-semibold text-sm hover:bg-[#FF7404] hover:text-black transition-all duration-300 shadow-[0_0_30px_-10px_rgba(255,116,4,0.3)] hover:shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]"
                    >
                        View all
                    </Link>
                </motion.div>

                {/* Scrolling Cards Container */}
                <div className="relative">
                    {/* Scroll Buttons */}
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

                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] via-[#030303]/80 to-transparent z-10 pointer-events-none" />

                    {/* Cards Carousel */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide px-8 lg:px-20 pb-4 snap-x snap-mandatory"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {realArticles.map((article, index) => (
                            <motion.article
                                key={index}
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.08, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                                className="flex-shrink-0 w-[340px] lg:w-[400px] h-[520px] snap-start group"
                            >
                                <Link href={article.href} className="block h-full">
                                    <div className="h-full rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 flex flex-col relative shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">

                                        {/* Hover glow */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                        {/* Image */}
                                        <div className="relative h-60 overflow-hidden">
                                            <img
                                                src={article.image}
                                                alt={article.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            {/* Read time badge */}
                                            <div className="absolute top-5 right-5 px-4 py-2 bg-black/70 backdrop-blur-xl rounded-full border border-white/10">
                                                <span className="text-[11px] font-medium text-white/90">{article.readTime}</span>
                                            </div>
                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
                                        </div>

                                        {/* Content */}
                                        <div className="p-8 relative flex-1 flex flex-col">
                                            {/* Category */}
                                            <div className="text-[#FF7404] text-xs font-semibold tracking-widest uppercase mb-4">
                                                {article.category}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-bold text-white mb-4 leading-snug group-hover:text-[#FF7404] transition-colors duration-300 line-clamp-2">
                                                {article.title}
                                            </h3>

                                            {/* Date */}
                                            <p className="text-sm text-white/35 mb-auto">
                                                {article.date}
                                            </p>

                                            {/* Footer: Author + CTA */}
                                            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/[0.04]">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7404]/30 to-[#FF7404]/10 flex items-center justify-center overflow-hidden ring-2 ring-white/[0.05]">
                                                        {article.author.avatar ? (
                                                            <img src={article.author.avatar} alt={article.author.name} className="w-full h-full object-cover" />
                                                        ) : (
                                                            <span className="text-sm font-bold text-[#FF7404]">{article.author.name.charAt(0)}</span>
                                                        )}
                                                    </div>
                                                    <div className="text-xs text-white/40">
                                                        <span className="block text-[10px] uppercase tracking-widest text-white/25 mb-0.5">Article by</span>
                                                        <span className="text-white/60 font-medium">{article.author.name}</span>
                                                    </div>
                                                </div>

                                                <button className="px-5 py-2.5 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] text-black text-xs font-bold rounded-full hover:shadow-[0_0_20px_-5px_#FF7404] transition-shadow duration-300">
                                                    Read more
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

            {/* Hide scrollbar CSS */}
            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
