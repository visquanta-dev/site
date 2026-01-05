'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ShieldCheck, UserCheck, MapPin, LayoutGrid } from 'lucide-react';

export default function SystemOutcomes() {
    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left: The Managed Service Difference */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="space-y-12"
                    >
                        <div>
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">The Managed Advantage</span>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                                A Managed Service, <br />
                                <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                    Not Another Software Tool.
                                </span>
                            </h3>
                            <p className="text-lg text-white/40 leading-[1.8] max-w-xl">
                                We don't just hand you a login and hope for the best. We take full responsibility for the performance of your database reactivation.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: ShieldCheck, title: "Human-in-the-Loop", desc: "Our team monitors every single conversation to ensure 100% accuracy and professional brand representation." },
                                { icon: UserCheck, title: "Dedicated Manager", desc: "You have a direct line to a specialist who manages your performance and optimizes your playbooks." },
                                { icon: MapPin, title: "On-Site Engagement", desc: "We visit your rooftops for staff training and operational alignment to ensure appointments close at high rates." },
                                { icon: LayoutGrid, title: "Zero Setup Friction", desc: "We handle the technical heavy lifting, CRM mapping, and compliance, leaving your team to focus on sales." }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className="group p-6 rounded-2xl bg-white/[0.015] border border-white/[0.04] hover:bg-white/[0.025] hover:border-white/[0.08] transition-all duration-500"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-[#FF7404]/[0.08] flex items-center justify-center mb-5 group-hover:bg-[#FF7404]/20 transition-colors duration-500">
                                        <item.icon className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                                    <p className="text-sm text-white/35 leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <button className="px-8 py-4 rounded-xl border border-[#FF7404]/30 text-white font-semibold text-sm uppercase tracking-widest hover:bg-[#FF7404]/[0.08] hover:border-[#FF7404]/50 transition-all duration-300">
                                Request a Demo
                            </button>
                        </motion.div>
                    </motion.div>

                    {/* Right: What This Is NOT (Risk Reduction) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="relative"
                    >
                        {/* Ambient glow */}
                        <div className="absolute -inset-10 bg-white/[0.01] rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative bg-[#080808] border border-white/[0.06] rounded-3xl p-10 lg:p-12 overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                            {/* Static Watermark */}
                            <div className="absolute top-0 right-0 p-8 opacity-[0.015]">
                                <ShieldCheck className="w-64 h-64 text-white" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-white mb-3">
                                    Clear Boundaries
                                </h3>
                                <p className="text-sm text-white/35 mb-10">Understanding how we fit into your enterprise stack.</p>

                                <div className="space-y-4">
                                    {[
                                        { title: "Not a CRM replacement", desc: "We work with your existing tools, not against them." },
                                        { title: "Not a blast campaign", desc: "No mass-spamming your sensitive database." },
                                        { title: "Not a robotic chatbot", desc: "Every flow is human-monitored for quality control." },
                                        { title: "Not BDC replacement", desc: "We deliver BDC-ready appointments, not raw leads." },
                                        { title: "Not a self-managed tool", desc: "Visquanta manages the performance end-to-end." }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + i * 0.08 }}
                                            className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/[0.03] rounded-xl group hover:bg-red-500/[0.03] hover:border-red-500/10 transition-all duration-300"
                                        >
                                            <XCircle className="w-5 h-5 text-red-500/30 group-hover:text-red-400 transition-colors flex-shrink-0 mt-0.5" />
                                            <div>
                                                <div className="text-white font-medium text-sm mb-1">{item.title}</div>
                                                <p className="text-xs text-white/25">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom compliance badge */}
                            <div className="mt-12 pt-8 border-t border-white/[0.05]">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                                        <CheckCircle2 className="w-6 h-6 text-green-400" />
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-sm">Enterprise Compliant</div>
                                        <p className="text-[10px] text-white/35 uppercase tracking-widest font-medium">TCPA & Regulator Ready</p>
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
