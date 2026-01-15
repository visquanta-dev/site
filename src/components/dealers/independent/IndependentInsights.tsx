'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { useState, useEffect } from 'react';
import { BlogCard } from '@/components/blog/BlogCard';

export default function IndependentInsights() {
    const [realArticles, setRealArticles] = useState<any[]>([]);

    useEffect(() => {
        fetch('/api/blog/latest?limit=3')
            .then(res => res.json())
            .then(data => {
                if (data.posts && data.posts.length > 0) {
                    setRealArticles(data.posts);
                }
            });
    }, []);

    if (realArticles.length === 0) return null;

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
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
        }
    };

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
                    {realArticles.map((article, i) => (
                        <motion.div key={i} variants={cardVariants} className="h-full">
                            <BlogCard article={article} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
