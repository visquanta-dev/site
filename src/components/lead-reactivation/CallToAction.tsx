'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RequestDemoButton } from '../CalendlyModal';

interface CallToActionProps {
    onOpenCalculator?: () => void;
}

export default function CallToAction({ onOpenCalculator }: CallToActionProps) {
    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden">

            {/* Premium Background Architecture */}
            <div className="absolute inset-0">
                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Central radial glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#FF7404]/[0.04] rounded-full blur-[150px] pointer-events-none" />

                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Premium grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center"
                >
                    {/* Headline */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] mb-8 leading-[0.95]">
                        <span className="block">Stop Losing Deals to the</span>
                        <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Dealer Down the Street.
                        </span>
                    </h2>

                    <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto leading-[1.8]">
                        Your database is leaking revenue every single hour. See exactly how much actionable inventory is sitting in your CRM right now with a zero-disruption audit.
                    </p>

                    {/* Trust Indicators */}
                    <div className="grid sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
                        {[
                            { icon: ShieldCheck, label: "Fully Compliant" },
                            { icon: Zap, label: "No Workflow Changes" },
                            { icon: Clock, label: "Fully Managed" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + i * 0.1 }}
                                className="flex items-center justify-center gap-3 px-6 py-5 bg-white/[0.02] backdrop-blur-sm rounded-xl border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/[0.08] transition-all duration-300"
                            >
                                <item.icon className="w-5 h-5 text-[#FF7404]" />
                                <span className="text-xs font-semibold text-white/50 uppercase tracking-widest">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col items-center gap-10"
                    >
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex flex-wrap items-center justify-center gap-5">
                                {/* Primary CTA */}
                                <button
                                    onClick={onOpenCalculator}
                                    className="group relative px-12 py-6 overflow-hidden rounded-xl"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl" />
                                    <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[11px] opacity-50" />
                                    <span className="relative z-10 flex items-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                                        Start Revenue Audit
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                {/* Secondary CTA */}
                                <RequestDemoButton asChild>
                                    <button className="group relative px-10 py-6 rounded-xl overflow-hidden">
                                        <div className="absolute inset-0 border border-white/[0.15] rounded-xl group-hover:border-[#FF7404]/40 transition-colors duration-300" />
                                        <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-[#FF7404]/[0.05] transition-colors duration-300 rounded-xl" />
                                        <span className="relative z-10 flex items-center gap-3 text-white/70 group-hover:text-white font-semibold text-sm uppercase tracking-widest transition-colors">
                                            <Sparkles className="w-4 h-4 text-[#FF7404]" />
                                            Schedule Your Walkthrough
                                        </span>
                                    </button>
                                </RequestDemoButton>
                            </div>

                            {/* CRO Microcopy */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
                            >
                                15-min 1:1 • Get an exact revenue-lift projection for your dealership
                            </motion.p>
                        </div>

                        {/* Tertiary Link */}
                        <button
                            onClick={onOpenCalculator}
                            className="text-[11px] font-semibold text-white/25 uppercase tracking-[0.4em] hover:text-[#FF7404] transition-colors duration-300 flex items-center gap-2 group"
                        >
                            <span>See What's Sitting in Your Database</span>
                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                    {/* Bottom Social Proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                        className="mt-20 pt-12 border-t border-white/[0.04]"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-12 text-white/30 text-sm">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400/50" />
                                <span>500+ Dealerships Served</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400/50" />
                                <span>$35M+ in Recovered Revenue</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-400/50" />
                                <span>TCPA Compliant</span>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
