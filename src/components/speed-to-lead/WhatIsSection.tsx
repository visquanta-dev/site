'use client';

import { motion } from 'framer-motion';
import { Clock, TrendingUp, Users, Zap, X, ShieldCheck, MessageSquare, CheckCircle2 } from 'lucide-react';

function AnimatedBorder({ color = '#FF7404' }: { color?: string }) {
    return (
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                    backgroundSize: '200% 100%',
                }}
                animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <div className="absolute inset-[1px] bg-[#0A0A0A] rounded-2xl" />
        </div>
    );
}

export default function WhatIsSection() {
    return (
        <section className="relative py-12 md:py-32 bg-[#020202] overflow-hidden">

            {/* Ambient Background Effects */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/[0.02] rounded-full blur-[120px]" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#FF7404]/[0.01] rounded-full blur-[100px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,116,4,0.015)_0%,rgba(0,0,0,0)_60%)]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                    {/* Left Column: Definition & Authority */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Accent Line */}
                            <div className="w-12 h-1 bg-[#FF7404] mb-8" />

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-8">
                                How Fast Should You <br className="hidden lg:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9E4D]">Respond to a Lead?</span>
                            </h2>

                            <div className="prose prose-invert max-w-2xl">
                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-6">
                                    <strong className="text-white font-semibold">Speed to lead</strong> (or inbound lead response time) is the critical window between a customer inquiry and your first contact. Respond in <span className="text-white border-b border-[#FF7404]/30">under 5 minutes</span>, and you're 100x more likely to convert.
                                </p>
                                <p className="text-lg text-white/50 leading-relaxed">
                                    Wait just 30 minutes, and your chances of closing the deal drop by 21x. While the industry average inbound lead response time drags at 1 hour and 38 minutes, VisQuanta's AI ensures you're always first, responding in seconds, 24/7/365.
                                </p>
                            </div>
                        </motion.div>

                        {/* Capability Chips */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 flex flex-wrap gap-3"
                        >
                            {[
                                { icon: Clock, text: "Sub-60 Second Response" },
                                { icon: TrendingUp, text: "100x Conversion Lift" },
                                { icon: Users, text: "40%+ After-Hours Capture" },
                                { icon: Zap, text: "24/7 Lead Response" },
                                { icon: MessageSquare, text: "AI-Powered SMS" },
                                { icon: CheckCircle2, text: "No Missed Leads" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white/70 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all duration-300 cursor-default">
                                    <item.icon className="w-4 h-4 text-[#FF7404]" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Problem/Solution Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

                        {/* The Reality (Problem) Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group rounded-2xl"
                        >
                            <AnimatedBorder color="#333" />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                            <div className="relative p-8 md:p-10 z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-500 uppercase tracking-widest">
                                        <X className="w-3 h-3" /> The Reality
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <span className="block text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                        78%
                                    </span>
                                    <p className="text-white/60 font-medium text-lg">
                                        of buyers go with the <span className="text-white border-b border-red-500/30">first responder</span>.
                                    </p>
                                </div>

                                <p className="text-white/40 text-sm leading-relaxed">
                                    Yet the average dealership takes <span className="text-white font-semibold">1 hour 38 mins</span> to respond. By then, the lead is cold and the buyer is gone.
                                </p>
                            </div>
                        </motion.div>

                        {/* The Solution (VisQuanta) Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative group rounded-2xl"
                        >
                            <AnimatedBorder color="#FF7404" />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.08] to-transparent opacity-100 rounded-2xl pointer-events-none" />

                            <div className="relative p-8 md:p-10 z-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-xs font-bold text-[#FF7404] uppercase tracking-widest">
                                        <ShieldCheck className="w-3 h-3" /> The Solution
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <span className="block text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                        &lt; 60s
                                    </span>
                                    <p className="text-white/60 font-medium text-lg">
                                        automated response time with <span className="text-white">VisQuanta™</span>.
                                    </p>
                                </div>

                                <p className="text-white/40 text-sm leading-relaxed">
                                    First contact wins. Our AI hits the lead instantly with a personalized text, stopping the clock and starting the conversation.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
