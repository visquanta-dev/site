'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageSquare, Zap, CheckCircle2, Bot } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                            <Bot className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">AI Sales Assistant</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            Turn Site Traffic into <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                Qualified Deals
                            </span>
                        </h1>

                        <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                            Stop letting 98% of your visitors leave without a trace. Our AI Widget engages every visitor instantly, answers questions, and books appointments directly into your CRM.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link href="/book-demo" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF7404] text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)]">
                                <span className="relative z-10">Get Your Widget</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>

                            <Link href="#demo" className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                                See Live Demo
                            </Link>
                        </div>

                        <div className="flex items-center gap-8 pt-6 border-t border-white/10">
                            {[
                                { label: "Response Time", value: "< 2s" },
                                { label: "Availability", value: "24/7/365" },
                                { label: "CRM Sync", value: "Instant" }
                            ].map((stat, i) => (
                                <div key={i}>
                                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-zinc-500 text-xs uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ y, opacity }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 bg-[#0A0A0A] border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/50">
                            {/* Fake Browser Header */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                                <div className="ml-4 h-6 w-full max-w-[300px] bg-white/5 rounded-full" />
                            </div>

                            <div className="flex gap-6">
                                {/* Mock Website Content */}
                                <div className="flex-1 space-y-4 opacity-30">
                                    <div className="h-40 bg-white/10 rounded-xl w-full" />
                                    <div className="h-4 bg-white/10 rounded w-3/4" />
                                    <div className="h-4 bg-white/10 rounded w-1/2" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-24 bg-white/10 rounded-xl" />
                                        <div className="h-24 bg-white/10 rounded-xl" />
                                    </div>
                                </div>

                                {/* The Widget Popup */}
                                <div className="w-[320px] bg-[#111] border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-[0_0_50px_-20px_rgba(255,116,4,0.3)] transform translate-y-8">
                                    {/* Chat Header */}
                                    <div className="p-4 bg-gradient-to-r from-[#FF7404] to-[#ff9040] flex items-center gap-3">
                                        <div className="relative">
                                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                                <Bot className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#FF7404] rounded-full" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold text-sm">VisQuanta AI</div>
                                            <div className="text-white/80 text-xs">Online & Ready to help</div>
                                        </div>
                                    </div>

                                    {/* Chat Body */}
                                    <div className="p-4 space-y-4 min-h-[300px] bg-[#111]">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#FF7404]/10 flex items-center justify-center shrink-0">
                                                <Bot className="w-4 h-4 text-[#FF7404]" />
                                            </div>
                                            <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none border border-white/5 text-sm text-zinc-300">
                                                Welcome to Premier Auto! Are you looking to buy, sell, or service a vehicle today?
                                            </div>
                                        </div>

                                        <div className="flex gap-3 justify-end">
                                            <div className="p-3 bg-[#FF7404] rounded-2xl rounded-tr-none text-sm text-black font-medium">
                                                I'm interested in the 2024 SUV shown on the homepage.
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#FF7404]/10 flex items-center justify-center shrink-0">
                                                <Bot className="w-4 h-4 text-[#FF7404]" />
                                            </div>
                                            <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none border border-white/5 text-sm text-zinc-300">
                                                Great choice! That model just arrived. Would you like to check availability or schedule a test drive?
                                            </div>
                                        </div>
                                    </div>

                                    {/* Input Area */}
                                    <div className="p-4 border-t border-white/10">
                                        <div className="h-10 bg-white/5 rounded-full border border-white/10 flex items-center px-4 text-xs text-zinc-500">
                                            Type your message...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -right-8 p-4 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">Lead Captured</div>
                                <div className="text-zinc-500 text-xs">Sent to CRM instantly</div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
