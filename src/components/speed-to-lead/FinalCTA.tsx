'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Clock } from 'lucide-react';
import Link from 'next/link';

export default function FinalCTA() {
    return (
        <section className="py-20 sm:py-28 lg:py-36 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Central glow - responsive sizing */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] md:w-[900px] md:h-[500px] lg:w-[1000px] lg:h-[600px] bg-[#FF7404]/[0.05] rounded-full blur-[100px] md:blur-[130px] lg:blur-[150px] pointer-events-none"
                />

                {/* Top accent */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] sm:bg-[size:5rem_5rem] lg:bg-[size:6rem_6rem] opacity-25 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center"
                >
                    {/* Headline */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-[-0.02em] sm:tracking-[-0.03em] mb-5 sm:mb-6 lg:mb-8 leading-[1]">
                        <span className="block">Every Minute Costs</span>
                        <motion.span
                            initial={{ backgroundPosition: '0% 50%' }}
                            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9A4D] to-[#FF7404] bg-[length:200%_100%] bg-clip-text text-transparent"
                        >
                            You a Deal.
                        </motion.span>
                    </h2>

                    <p className="text-base sm:text-lg lg:text-xl text-white/45 mb-10 sm:mb-12 lg:mb-14 max-w-2xl mx-auto leading-[1.7] sm:leading-[1.8]">
                        The first dealership to respond wins 78% of the time. Make sure it's always you.
                    </p>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mb-10 sm:mb-12 flex flex-col items-center gap-4"
                    >
                        <Link
                            href="/book-demo"
                            className="group relative inline-flex items-center gap-3 px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 overflow-hidden rounded-xl shadow-[0_0_50px_-15px_rgba(255,116,4,0.5)] hover:shadow-[0_0_70px_-15px_rgba(255,116,4,0.7)] transition-shadow duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                            <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] opacity-0 group-hover:opacity-100 group-hover:animate-shimmer rounded-xl transition-opacity" />
                            <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[11px] opacity-40" />
                            <span className="relative z-10 flex items-center gap-2.5 sm:gap-3 text-black font-bold text-sm uppercase tracking-wider sm:tracking-widest">
                                Schedule Your Walkthrough
                                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                        </Link>

                        {/* CRO Microcopy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
                        >
                            15-min 1:1 • Get an exact revenue-lift projection for your dealership
                        </motion.p>
                    </motion.div>

                    {/* Trust Line */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8 text-white/35 text-xs sm:text-sm"
                    >
                        {[
                            { icon: Users, label: "Dedicated Support Team" },
                            { icon: ShieldCheck, label: "30-Day Onboarding" },
                            { icon: Clock, label: "Live Within 48 Hours" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + i * 0.1 }}
                                className="flex items-center gap-2"
                            >
                                <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7404]/60" />
                                <span>{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-20 sm:h-24 lg:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
