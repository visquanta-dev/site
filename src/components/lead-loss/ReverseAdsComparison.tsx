'use client';

import { motion } from 'framer-motion';
import { Clock, AlertTriangle, MessageSquare, PhoneOff, Mail, ArrowRight } from 'lucide-react';

export default function WhyItWorks() {
    return (
        <section className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 lg:gap-28 items-start">

                    {/* Left: The Logic (Why This Works) */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-10">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">Operational Strategy</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Why Conversational SMS <br />
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                Outperforms Everything.
                            </span>
                        </h2>

                        <p className="text-lg text-white/40 leading-[1.9] mb-12 max-w-xl font-normal">
                            Calls are ignored. Emails are buried. SMS is read within minutes. But a blast campaign is seen as spam. Our system uses <span className="text-white/70 font-medium italic">conversations</span> to re-engage, achieving a 39%+ engagement rate on leads you thought were dead.
                        </p>

                        <div className="space-y-5">
                            {[
                                {
                                    icon: MessageSquare,
                                    title: "98% Open Rates",
                                    desc: "Unlike email which sits at 20%, SMS ensures your message is seen. When monitored by a human-in-the-loop team, it feels like a personal follow-up, not a bot."
                                },
                                {
                                    icon: Clock,
                                    title: "Real-Time Intent",
                                    desc: "We identify leads from 1 week to 5 years old who are re-entering the market. Our speed-to-lead response captures them while intent is highest."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    className="flex gap-5 p-6 rounded-2xl bg-white/[0.015] border border-white/[0.05] hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-500 group"
                                >
                                    <div className="w-14 h-14 rounded-xl bg-[#FF7404]/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF7404]/20 transition-colors duration-500">
                                        <item.icon className="w-7 h-7 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold mb-2 text-lg">{item.title}</h4>
                                        <p className="text-sm text-white/35 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12"
                        >
                            <button className="flex items-center gap-3 text-[#FF7404] font-semibold text-sm tracking-wide group">
                                Request a Demo to See the Tech
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right: Performance Comparison */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Ambient glow */}
                        <div className="absolute -inset-10 bg-[#FF7404]/[0.03] rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative bg-[#080808] rounded-3xl border border-white/[0.06] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                            {/* Header */}
                            <div className="p-8 border-b border-white/[0.04]">
                                <h3 className="text-xl font-bold text-white mb-2">The Outreach Performance Gap</h3>
                                <p className="text-[11px] text-white/30 uppercase tracking-[0.25em] font-medium">Industry Average vs. VisQuanta Managed System</p>
                            </div>

                            {/* Stats */}
                            <div className="p-8 space-y-10">
                                {/* Channel Comparison */}
                                <div className="space-y-8">
                                    {[
                                        { icon: PhoneOff, label: "Cold Calls", value: "3-5%", color: "red", width: "5%", colorClass: "bg-red-500/40" },
                                        { icon: Mail, label: "Marketing Email", value: "1-2%", color: "red", width: "2%", colorClass: "bg-red-500/40" },
                                        { icon: MessageSquare, label: "Conversational SMS", value: "39%+", color: "orange", width: "39%", colorClass: "bg-gradient-to-r from-[#FF7404] to-[#FF9040]", highlight: true }
                                    ].map((item, i) => (
                                        <div key={i} className="space-y-3">
                                            <div className="flex justify-between items-center">
                                                <div className={`flex items-center gap-3 text-sm font-medium ${item.highlight ? 'text-[#FF7404]' : 'text-white/50'}`}>
                                                    <item.icon className="w-4 h-4" />
                                                    {item.label}
                                                </div>
                                                <div className={`text-xs font-bold tracking-widest ${item.highlight ? 'text-green-400' : 'text-red-400/70'}`}>
                                                    {item.value} ENGAGEMENT
                                                </div>
                                            </div>
                                            <div className="h-2 bg-white/[0.04] rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: item.width }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: 0.2 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                    className={`h-full rounded-full ${item.colorClass}`}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Insight Box */}
                                <div className="bg-gradient-to-br from-[#FF7404]/[0.08] to-[#FF7404]/[0.02] rounded-2xl p-6 border border-[#FF7404]/10">
                                    <div className="flex gap-4 items-start">
                                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/20 flex items-center justify-center flex-shrink-0">
                                            <AlertTriangle className="w-5 h-5 text-[#FF7404]" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="text-white font-semibold text-sm">Operational Reality</div>
                                            <p className="text-xs text-white/50 leading-relaxed">
                                                Most dealerships lose money they've already paid for. By the time a lead is 30 days old, most BDCs stop calling. We monetize the 95% of your database that is currently being ignored.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
