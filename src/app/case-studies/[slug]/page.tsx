'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import {
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Users,
    Target,
    BarChart3,
    Clock,
    Quote,
    Building2,
    Zap,
    DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';
import { caseStudies } from '@/lib/case-studies';


export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params using React.use()
    const { slug } = use(params);
    const data = caseStudies[slug as keyof typeof caseStudies];

    // Fallback if slug not found in our mock data
    if (!data) return notFound();

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,116,4,0.1),transparent_50%)]" />

                <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8 text-zinc-400 text-sm font-medium"
                    >
                        <Link href="/case-studies" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to Case Studies
                        </Link>
                        <span className="hidden md:inline">•</span>
                        <span className="text-[#FF7404] uppercase tracking-wider">{data.type}</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed border-l-4 border-[#FF7404] pl-6">
                                {data.summary}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm">
                                    <Clock className="w-4 h-4 text-[#FF7404]" />
                                    Implementation: 5 Days
                                </span>
                                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm">
                                    <Building2 className="w-4 h-4 text-[#FF7404]" />
                                    Region: {data.location}
                                </span>
                            </div>
                        </motion.div>

                        {/* Hero Key Metrics Grid */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {data.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <metric.icon className="w-8 h-8 text-[#FF7404] mb-4" />
                                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 border-t border-white/5 bg-zinc-900/20">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Challenge Side */}
                        <div className="md:col-span-5">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-red-500" />
                                </div>
                                The Challenge
                            </h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                {data.challenge.content.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex md:col-span-2 justify-center relative">
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#FF7404]/30 to-transparent" />
                            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#020202] border border-[#FF7404] flex items-center justify-center z-10">
                                <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                            </div>
                        </div>

                        {/* Solution Side */}
                        <div className="md:col-span-5">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-emerald-500" />
                                </div>
                                The Solution
                            </h2>
                            <div className="space-y-8">
                                {data.solution.steps.map((step, i) => (
                                    <div key={i} className="relative pl-8 border-l border-white/10">
                                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#FF7404]" />
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Block */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF7404]/5 skew-y-3 transform origin-bottom-right" />

                <div className="container px-4 mx-auto relative z-10 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-6">Record-Breaking ROI</h2>
                        <p className="text-xl text-zinc-400">{data.results.title}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {data.results.stats.map((stat, i) => (
                            <div key={i} className="bg-[#020202] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#FF7404] shrink-0 mt-1" />
                                <span className="text-zinc-300 font-medium">{stat}</span>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-3xl border border-white/10 relative">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-[#FF7404]/20" />
                        <blockquote className="relative z-10 text-center">
                            <p className="text-2xl text-white font-medium italic mb-8 leading-relaxed">
                                "{data.testimonial.quote}"
                            </p>
                            <footer>
                                <div className="font-bold text-[#FF7404]">{data.testimonial.author}</div>
                                <div className="text-zinc-500 text-sm">{data.testimonial.role}</div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/10">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to replicate these results?</h2>
                    <p className="text-zinc-400 mb-8">
                        AutoMaster Suite is plug-and-play for franchise and independent dealers.
                        See what your database is worth today.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl inline-flex items-center gap-2 transition-all hover:scale-105">
                                Book a Strategy Call
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
