'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Lightbulb } from 'lucide-react';

const articles = [
    {
        title: "ProMax x VisQuanta: A Game-Changing Partnership",
        excerpt: "How our deep integration with ProMax's stack enables independent dealers to unlock enterprise-grade lead engagement without changing their workflow.",
        link: "/blog/promax-partnership",
        category: "Integration",
        color: "from-[#FF7404] to-[#FF9040]",
        bgGlow: "bg-[#FF7404]/20",
        date: "Dec 18, 2024"
    },
    {
        title: "The Ultimate Guide to CRM Reactivation",
        excerpt: "Stop buying new leads until you've mined your gold. Learn the data-driven strategies to wake up dormant prospects and turn old leads into fresh opportunities.",
        link: "/blog/crm-reactivation-guide",
        category: "Strategy",
        color: "from-[#FF7404] to-yellow-500",
        bgGlow: "bg-[#FF7404]/20",
        date: "Dec 12, 2024"
    },
    {
        title: "Top 7 Third-Party Lead Providers for 2026",
        excerpt: "Comparing Cars.com, AutoTrader, CarGurus, and more—ranked by cost-per-lead, close rate, and compatibility with AI engagement tools.",
        link: "/blog/third-party-leads-2026",
        category: "Research",
        color: "from-purple-500 to-pink-500",
        bgGlow: "bg-purple-500/20",
        date: "Dec 5, 2024"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function IndependentInsights() {
    return (
        <section className="py-24 bg-[#020202] relative overflow-hidden">
            {/* Background Grid */}
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
                            <Lightbulb className="w-6 h-6 text-[#FF7404]" />
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            VisQuanta <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Insight</span>
                        </h2>
                        <p className="text-zinc-400 text-lg max-w-xl">
                            Strategies and insights for independents who refuse to be outpaced.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="group flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                    >
                        <motion.span whileHover={{ x: -5 }}>View all articles</motion.span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {articles.map((article, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <Link
                                href={article.link}
                                className="group block h-full rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(255,116,4,0.15)]"
                            >
                                {/* Gradient Header */}
                                <div className={`h-2 bg-gradient-to-r ${article.color}`} />

                                <div className="relative">
                                    {/* Hover Glow */}
                                    <motion.div
                                        className={`absolute top-0 right-0 w-32 h-32 ${article.bgGlow} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                    />

                                    <div className="p-8 relative">
                                        <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                {article.date}
                                            </span>
                                            <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${article.color} text-white font-bold`}>
                                                {article.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors duration-300 line-clamp-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed mb-6 line-clamp-3">
                                            {article.excerpt}
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
                </motion.div>
            </div>
        </section>
    );
}
