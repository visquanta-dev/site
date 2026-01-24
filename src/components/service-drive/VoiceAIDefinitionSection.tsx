'use client';

import { motion } from 'framer-motion';
import { Phone, Server, Calendar, MessageSquare, ShieldCheck, Zap, X } from 'lucide-react';

export default function VoiceAIDefinitionSection() {
    return (
        <section className="relative py-12 md:py-32 bg-[#030303] overflow-hidden">

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
                                What is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9E4D]">Voice AI</span> for <br className="hidden lg:block" /> Car Dealerships?
                            </h2>

                            <div className="prose prose-invert max-w-2xl">
                                <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light mb-6">
                                    <strong className="text-white font-semibold">Voice AI for car dealerships</strong> answers 100% of your service calls, understanding what customers need and booking appointments directly into your DMS. No hold music. No voicemail. No missed revenue.
                                </p>
                                <p className="text-lg text-white/50 leading-relaxed">
                                    Unlike IVR menus that lose customers or offshore call centers that can't access your systems, <strong className="text-white/80 font-medium">Voice AI for service departments</strong> speaks naturally, integrates with your existing software, and books appointments in under 60 seconds, even at 2am.
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
                                { icon: Phone, text: "24/7/365 Answering" },
                                { icon: Server, text: "Direct DMS Integration" },
                                { icon: Calendar, text: "Real-time Booking" },
                                { icon: Zap, text: "Zero Hold Times" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-sm text-white/70 hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all duration-300 cursor-default">
                                    <item.icon className="w-4 h-4 text-[#FF7404]" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Column: Problem/Solution Card */}
                    <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8">

                        {/* The Problem Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-white/[0.06]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative p-8 md:p-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-bold text-red-500 uppercase tracking-widest">
                                        <X className="w-3 h-3" /> The Reality
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <span className="block text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                        80%
                                    </span>
                                    <p className="text-white/60 font-medium text-lg">
                                        of service calls go <span className="text-white border-b border-red-500/30">unanswered</span>.
                                    </p>
                                </div>

                                <p className="text-white/40 text-sm leading-relaxed">
                                    This inefficiency costs the average dealership over <span className="text-white font-semibold">$8,500/week</span> in leaked revenue and creates a friction-filled experience.
                                </p>
                                <p className="text-white/20 text-[10px] mt-2 italic">
                                    Based on avg. missed RO value of $450 × 19 missed calls/day
                                </p>
                            </div>
                        </motion.div>

                        {/* The Solution Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative group overflow-hidden rounded-2xl bg-[#0A0A0A] border border-[#FF7404]/20 ring-1 ring-[#FF7404]/10 shadow-[0_0_40px_-20px_rgba(255,116,4,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.08] to-transparent opacity-100" />

                            <div className="relative p-8 md:p-10">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-xs font-bold text-[#FF7404] uppercase tracking-widest">
                                        <ShieldCheck className="w-3 h-3" /> The Solution
                                    </div>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <span className="block text-5xl md:text-6xl font-bold text-white tracking-tighter">
                                        100%
                                    </span>
                                    <p className="text-white/60 font-medium text-lg">
                                        answer rate with <span className="text-white">Service Drive Agent™</span>.
                                    </p>
                                </div>

                                <p className="text-white/40 text-sm leading-relaxed">
                                    Purpose-built for automotive fixed ops. It doesn't just route calls: it resolves them.
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
}
