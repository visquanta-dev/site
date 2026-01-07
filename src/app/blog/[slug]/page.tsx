'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import {
    Calendar,
    User,
    Clock,
    ArrowRight,
    Share2,
    BookOpen,
    Quote
} from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

const blogPosts = {
    // Slugs from LatestInsights
    'math-5-minute-rule': {
        title: "The Math of the 5-Minute Rule: Why Speed Is Non-Negotiable",
        date: "Dec 20, 2025",
        author: "VisQuanta Team",
        readTime: "8 min read",
        category: "Strategy",
        content: [
            "In automotive retail, the difference between a 'hot lead' and a 'cold record' is often measured in minutes. Our data across 500,000+ interactions shows that response rates drop by 400% after the first 5 minutes.",
            "Why? Because customers are shopping multiple stores simultaneously. The first dealership to engage isn't just winning the race—they're setting the terms of the conversation.",
            "AutoMaster Suite's Speed-to-Lead module ensures that every inbound lead receives a human-quality response in under 60 seconds, 24/7/365."
        ]
    },
    'sunday-leads-opportunity': {
        title: "Why Sunday Leads Are Your Most Ignored Assets",
        date: "Dec 12, 2024",
        author: "VisQuanta Team",
        readTime: "6 min read",
        category: "CRM Mining",
        content: [
            "Your sales floor might be closed on Sundays, but your customers are actively shopping. Sunday leads are some of the highest intent prospects in the funnel.",
            "By the time your team opens on Monday morning, these prospects have often already moved on. AI allows you to bridge that gap with instant weekend engagement.",
            "We've seen dealers increase their Monday showroom traffic by 25% simply by activating automated Sunday responses."
        ]
    },
    'ai-vs-human-bdc': {
        title: "AI vs. Human BDC: Finding the Perfect Balance",
        date: "Nov 18, 2024",
        author: "VisQuanta Team",
        readTime: "10 min read",
        category: "Technology",
        content: [
            "The goal of AI in dealerships isn't to replace humans—it's to remove the friction that prevents humans from being effective.",
            "AI handles the repetitive, high-volume tasks like initial outreach and qualification, allowing your BDC team to focus on high-value closing conversations.",
            "This partnership model results in higher team morale and significantly lower cost per appointment."
        ]
    },
    'promax-partnership': {
        title: "ProMax x VisQuanta: A Game-Changing Partnership",
        date: "Dec 18, 2024",
        author: "VisQuanta Team",
        readTime: "5 min read",
        category: "Integration",
        content: [
            "We're excited to announce our certified integration with ProMax, allowing dealers to leverage AutoMaster Suite's AI directly within their existing CRM workflow.",
            "This partnership enables seamless data flow, ensuring that every AI-driven interaction is recorded and attributed correctly within your primary system of record.",
            "Dealers using the integrated solution have seen a 15% improvement in data accuracy and 20% faster follow-up cycles."
        ]
    },
    // IDs from BlogPage
    '1': {
        title: "The Death of the Phone Call: Why Dealers Are Switching to AI",
        date: "May 12, 2025",
        author: "VisQuanta Team",
        readTime: "7 min read",
        category: "Industry Trends",
        content: [
            "Inbound call volume is dropping. Answer rates for unknown numbers are plummeting. The phone is no longer the primary bridge to your customer.",
            "Modern buyers prefer SMS. It's asynchronous, low-pressure, and fits into their lives. AI-driven conversational SMS allows you to meet them where they are.",
            "Switching to an AI-first engagement strategy reduces turnover and ensures no lead is left behind due to a missed call."
        ]
    },
    '2': {
        title: "Reactivating Cold Leads: The Hidden Revenue in Your CRM",
        date: "April 28, 2025",
        author: "VisQuanta Team",
        readTime: "9 min read",
        category: "Strategy",
        content: [
            "Your CRM is a goldmine of previous shoppers who didn't buy. Most dealers ignore these records after 90 days. We call this 'Data Decay'.",
            "AutoMaster Suite's Lead Reactivation module uses intent-based mining to identify prospects who are ready to shop again, even if they haven't contacted you in months.",
            "Identifying just 1% of your 'dead' database as in-market can result in dozens of incremental unit sales every month."
        ]
    },
    '3': {
        title: "Service Drive AI: The Next Frontier for Fixed Ops",
        date: "April 15, 2025",
        author: "VisQuanta Team",
        readTime: "8 min read",
        category: "Technology",
        content: [
            "Fixed ops is the backbone of dealership profitability. Yet, many service drives are still managed with manual status calls and inefficient scheduling.",
            "Voice AI is transforming the service experience by handling status checks, appointment booking, and even recall notifications automatically.",
            "This not only improves the customer experience but allows your service advisors to spend more time with the customers on the drive."
        ]
    }
};

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const post = blogPosts[slug as keyof typeof blogPosts];

    if (!post) return notFound();

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            <article className="pt-40 pb-20">
                <div className="container px-4 mx-auto max-w-4xl">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <Link href="/blog" className="text-zinc-500 hover:text-white transition-colors text-sm flex items-center gap-2">
                                <ArrowRight className="w-4 h-4 rotate-180" />
                                Back to Blog
                            </Link>
                            <span className="text-zinc-800">•</span>
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-widest">{post.category}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-zinc-500 text-sm border-y border-white/5 py-6">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
                                <Share2 className="w-4 h-4" />
                                Share
                            </button>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="prose prose-invert prose-orange max-w-none"
                    >
                        {post.content.map((p, i) => (
                            <p key={i} className="text-xl text-zinc-400 leading-relaxed mb-8">
                                {p}
                            </p>
                        ))}

                        <div className="my-16 p-10 bg-zinc-900/50 border border-white/5 rounded-[2rem] relative overflow-hidden">
                            <Quote className="absolute top-6 left-6 w-12 h-12 text-[#FF7404]/10" />
                            <p className="text-2xl text-white font-medium italic relative z-10">
                                "The speed of the dealership is determined by the speed of its follow-up. AI guarantees that speed is absolute."
                            </p>
                        </div>

                        <p className="text-xl text-zinc-400 leading-relaxed">
                            Interested in learning more about how AutoMaster Suite can transform your dealership? From lead reactivation to service drive automation, we provide the intelligence layer your team needs to win.
                        </p>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 p-12 bg-gradient-to-br from-[#FF7404]/20 to-transparent border border-[#FF7404]/20 rounded-[3rem] text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Ready to see it in action?</h2>
                        <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
                            Join hundreds of high-performance dealerships using VisQuanta to automate their growth.
                        </p>
                        <Link href="/contact">
                            <button className="px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)]">
                                Request a Strategy Call
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
