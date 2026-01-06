'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, LayoutGrid, Search } from 'lucide-react';

const mockPosts = [
    {
        id: 1,
        title: "The Death of the Phone Call: Why Dealers Are Switching to AI",
        excerpt: "Inbound call volume is dropping. Answer rates are plummeting. Here's how top dealers are pivoting to automated SMS engagement.",
        category: "Industry Trends",
        date: "May 12, 2025",
        author: "VisQuanta Team",
        image: "/blog/post-1.jpg"
    },
    {
        id: 2,
        title: "Reactating Cold Leads: The Hidden Revenue in Your CRM",
        excerpt: "You have thousands of leads sitting in your CRM. We analyzed 500,000+ interactions to find the best way to wake them up.",
        category: "strategy",
        date: "April 28, 2025",
        author: "VisQuanta Team",
        image: "/blog/post-2.jpg"
    },
    {
        id: 3,
        title: "Service Drive AI: The Next Frontier for Fixed Ops",
        excerpt: "Scheduling appointments is just the start. Learn how Voice AI is handling status checks, upsells, and recall notifications.",
        category: "Technology",
        date: "April 15, 2025",
        author: "VisQuanta Team",
        image: "/blog/post-3.jpg"
    }
];

export default function BlogPage() {
    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[500px] bg-[#FF7404]/5 rounded-[100%] blur-[120px] pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8 backdrop-blur-sm"
                        >
                            <LayoutGrid className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-wider">The Journal</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                        >
                            Industry <span className="text-[#FF7404]">Insights.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-zinc-400 max-w-2xl mx-auto"
                        >
                            Strategies, data, and trends for modern automotive retail.
                        </motion.p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {mockPosts.map((post, i) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group bg-zinc-900/40 border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 hover:border-[#FF7404]/30 transition-all duration-500 flex flex-col h-full"
                            >
                                <div className="h-48 bg-zinc-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                                    {/* Placeholder for real images */}
                                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-zinc-700">
                                        <span className="font-mono text-xs uppercase tracking-widest">Image Placeholder</span>
                                    </div>
                                    <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">{post.category}</span>
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4 font-mono">
                                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                                    </div>

                                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-sm font-bold text-white mt-auto group-hover:gap-3 transition-all">
                                        Read Article <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-zinc-500 text-sm mb-4">More articles coming soon.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
