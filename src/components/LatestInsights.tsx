'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const articles = [
    {
        category: "Strategy",
        title: "The Math of the 5-Minute Rule: Why Speed Is Non-Negotiable",
        date: "Dec 20, 2025",
        readTime: "8 min read",
        author: "VisQuanta Team",
        image: "https://images.unsplash.com/photo-1626243615417-64b18c545305",
        href: "/blog/math-5-minute-rule"
    },
    {
        category: "CRM Mining",
        title: "Why Sunday Leads Are Your Most Ignored Assets",
        date: "Dec 12, 2024",
        readTime: "6 min read",
        author: "VisQuanta Team",
        image: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
        href: "/blog/sunday-leads-opportunity"
    },
    {
        category: "Technology",
        title: "AI vs. Human BDC: Finding the Perfect Balance",
        date: "Nov 18, 2024",
        readTime: "10 min read",
        author: "VisQuanta Team",
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
        href: "/blog/ai-vs-human-bdc"
    },
    {
        category: "Integration",
        title: "ProMax x VisQuanta: A Game-Changing Partnership",
        date: "Dec 18, 2024",
        readTime: "5 min read",
        author: "VisQuanta Team",
        image: "https://images.unsplash.com/photo-1550355291-bbee04a92027",
        href: "/blog/promax-partnership"
    }
];

export default function LatestInsights() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-enterprise-grid opacity-5 pointer-events-none" />
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent shadow-[0_0_20px_rgba(255,255,255,0.05)]" />

            <div className="container-wide relative z-10 px-4 md:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                            <BookOpen className="w-3 h-3" />
                            Intelligence
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95] mb-4">
                            LATEST <span className="text-white/40">INSIGHTS</span>
                        </h2>
                        <p className="text-white/50 text-lg font-medium leading-relaxed">
                            Strategies and technical breakdowns for the high-performance dealership.
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
                            href="/blog"
                            className="hidden md:flex ml-4 h-12 px-8 items-center gap-2 rounded-full bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all group"
                        >
                            All Articles
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative w-full mask-linear-fade">
                    <div className="flex gap-6 animate-infinite-scroll-slow w-max hover:[animation-play-state:paused] cursor-pointer py-4">
                        {[...articles, ...articles].map((article, i) => (
                            <motion.div
                                key={i}
                                className="flex-shrink-0 w-[300px] md:w-[450px] snap-start"
                            >
                                <Link href={article.href} className="group block">
                                    <div className="relative h-[250px] rounded-t-[2.5rem] overflow-hidden border-x border-t border-white/5 shadow-2xl">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black text-[#ff7404] uppercase tracking-widest">
                                                {article.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="bg-[#0A0A0A] border-x border-b border-white/5 rounded-b-[2.5rem] p-10 transition-all duration-500 group-hover:border-[#ff7404]/30">
                                        <div className="flex items-center gap-4 mb-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                                            <span>{article.date}</span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span>{article.readTime}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-white mb-8 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/50 transition-all duration-500 leading-tight tracking-tight">
                                            {article.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-auto">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-white border border-white/10 flex items-center justify-center overflow-hidden">
                                                    <img
                                                        src="/images/logo-black.jpg"
                                                        alt="VisQuanta Logo"
                                                        className="w-[80%] h-[80%] object-contain scale-150"
                                                    />
                                                </div>
                                                <span className="text-xs font-bold text-white/50">{article.author}</span>
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

            {/* Styles for animation */}
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
