'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Central glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF7404]/[0.04] rounded-full blur-[150px] pointer-events-none" />

                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center"
                >
                    {/* Headline */}
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-[-0.03em] mb-8 leading-[0.95]">
                        <span className="block">Every Minute Costs</span>
                        <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            You a Deal.
                        </span>
                    </h2>

                    <p className="text-xl text-white/40 mb-16 max-w-2xl mx-auto leading-[1.8]">
                        The first dealership to respond wins 78% of the time. Make sure it's always you.
                    </p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mb-12"
                    >
                        <Link
                            href="/book-demo"
                            className="group relative inline-flex items-center gap-3 px-12 py-6 overflow-hidden rounded-xl"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl" />
                            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[11px] opacity-50" />
                            <span className="relative z-10 flex items-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                                Request a Demo
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </motion.div>

                    {/* Trust Line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-wrap items-center justify-center gap-8 text-white/30 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-[#FF7404]/50" />
                            <span>Dedicated Support Team</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-[#FF7404]/50" />
                            <span>30-Day Onboarding</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#FF7404]/50" />
                            <span>Live Within 48 Hours</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
