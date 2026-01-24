'use client';

import { motion } from 'framer-motion';
import { Check, X, MessageSquare, Zap, Clock, Lock, Smartphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function ComparisonSection() {
    const comparisonData = [
        {
            feature: 'Lead Capture',
            traditional: 'Email (Low Quality)',
            visquanta: 'Mobile Number (Verified)',
            icon: <Smartphone className="w-4 h-4" />
        },
        {
            feature: 'Open Rate',
            traditional: '~20% (Email)',
            visquanta: '98% (SMS)',
            icon: <Zap className="w-4 h-4" />
        },
        {
            feature: 'Response Time',
            traditional: 'Hours / Next Day',
            visquanta: '< 90 Seconds',
            icon: <Clock className="w-4 h-4" />
        },
        {
            feature: 'After Tab Close',
            traditional: 'Conversation Lost',
            visquanta: 'Conversation Continues',
            icon: <MessageSquare className="w-4 h-4" />
        },
        {
            feature: 'TCPA Compliance',
            traditional: 'Often Missed',
            visquanta: 'Built-in & Automatic',
            icon: <Lock className="w-4 h-4" />
        }
    ];

    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 blur-[150px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
                    >
                        Stop Using <span className="text-zinc-600 line-through decoration-2">Outdated Tech</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-xl text-zinc-400 font-light leading-relaxed"
                    >
                        Compare the difference between traditional chat widgets and the VisQuanta SMS-First approach.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">

                    {/* Traditional Chat Card (The "Loser") */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="relative p-10 rounded-3xl border border-white/5 bg-zinc-900/30 backdrop-blur-sm opacity-70 hover:opacity-100 transition-opacity duration-500"
                    >
                        <div className="mb-10 text-center">
                            <div className="inline-block p-4 rounded-2xl bg-zinc-800/50 mb-5 border border-white/5">
                                <MessageSquare className="w-7 h-7 text-zinc-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-zinc-400 tracking-tight">Traditional Chat</h3>
                            <p className="text-zinc-600 text-sm mt-2 font-medium uppercase tracking-wider">The Old Way</p>
                        </div>

                        <div className="space-y-5">
                            {comparisonData.map((item, i) => (
                                <div key={i} className="flex items-center justify-between border-b border-white/5 pb-5 last:border-0 last:pb-0">
                                    <span className="text-zinc-500 text-sm font-medium">{item.feature}</span>
                                    <span className="text-zinc-500 text-sm flex items-center gap-2">
                                        {item.traditional}
                                        <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center">
                                            <X className="w-3 h-3 text-red-500/70" />
                                        </div>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* VisQuanta Card (The "Winner") */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        className="relative p-10 rounded-3xl bg-gradient-to-b from-zinc-900/80 to-zinc-950 shadow-[0_0_60px_-15px_rgba(249,115,22,0.3)] group"
                    >
                        {/* Animated Border Glow */}
                        <div className="absolute -inset-[1px] bg-gradient-to-br from-orange-500/40 via-orange-500/10 to-transparent rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[1px] bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-[22px]" />

                        {/* Recommended Badge */}
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg z-20">
                            Recommended
                        </div>

                        <div className="relative z-10">
                            <div className="mb-10 text-center">
                                <div className="inline-block p-4 rounded-2xl bg-orange-500/10 mb-5 border border-orange-500/20">
                                    <Smartphone className="w-7 h-7 text-orange-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">SMS-First Widget</h3>
                                <p className="text-orange-500/70 text-sm mt-2 font-bold uppercase tracking-wider">The VisQuanta Way</p>
                            </div>

                            <div className="space-y-5">
                                {comparisonData.map((item, i) => (
                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-5 last:border-0 last:pb-0">
                                        <span className="text-zinc-400 text-sm font-medium flex items-center gap-3">
                                            <span className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-zinc-500">
                                                {item.icon}
                                            </span>
                                            {item.feature}
                                        </span>
                                        <span className="text-white text-sm font-bold flex items-center gap-2">
                                            {item.visquanta}
                                            <div className="w-5 h-5 rounded-full bg-orange-500/20 flex items-center justify-center">
                                                <Check className="w-3 h-3 text-orange-500" />
                                            </div>
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA in Card */}
                            <div className="mt-10 pt-8 border-t border-white/10">
                                <Link
                                    href="/book-demo"
                                    className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2 group/btn"
                                >
                                    Make the Switch
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
