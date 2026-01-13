'use client';

import { motion } from 'framer-motion';
import { Lock, Database, LayoutDashboard, Puzzle } from 'lucide-react';
import Image from 'next/image';

export default function UnifiedDashboard() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden border-t border-white/[0.05]">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7404]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1 lg:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-px w-8 bg-[#FF7404]/60" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em]">
                                Unified Command Center
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1]"
                        >
                            One Login.<br />
                            <span className="text-white/40">Total Control.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg text-white/60 leading-relaxed max-w-lg"
                        >
                            Stop chasing passwords across ten different tools. Access your CRM integration, AI conversations, staff training, and revenue reports from a single, secure dashboard.
                        </motion.p>

                        <div className="grid grid-cols-2 gap-6 pt-6">
                            {[
                                { icon: Lock, label: "SSO Secure Access" },
                                { icon: Database, label: "CRM Sync" },
                                { icon: LayoutDashboard, label: "Real-Time Analytics" },
                                { icon: Puzzle, label: "Full Integration" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FF7404]">
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <span className="text-sm font-bold text-white/80">{item.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Visual Content (Dashboard Hero) */}
                    <div className="order-1 lg:order-2 lg:col-span-7 relative">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF7404]/5 blur-[100px] rounded-full pointer-events-none" />

                        {/* Dashboard Container with Bleed & Shadows */}
                        <div className="relative lg:w-[140%] lg:-mr-[25vw] lg:max-w-none border border-white/10 rounded-3xl bg-[#0a0a0a]/50 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.4),0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden group">

                            {/* Dashboard Image */}
                            <div className="relative w-full bg-[#0a0a0a]">
                                <img
                                    src="/images/platform/unified-dashboard.png"
                                    alt="VisQuanta Unified Dashboard"
                                    className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                {/* Bottom Fade for smooth integration */}
                                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
