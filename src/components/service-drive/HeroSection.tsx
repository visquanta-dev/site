'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { RequestDemoButton } from '../CalendlyModal';


export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-24 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-36 lg:pb-28">

            {/* Premium Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" role="img" aria-label="Voice AI for car dealership service department" />
                <motion.div className="absolute inset-0">
                    <div className="absolute top-[-30%] left-[10%] w-[600px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[150px]" />
                    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-white/[0.015] rounded-full blur-[200px]" />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FF7404]/[0.03] to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Status Badge */}
                <div className="flex justify-center mb-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_30px_-12px_rgba(255,116,4,0.3)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
                        </span>
                        <span className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase">
                            80% OF SERVICE CALLS GO UNANSWERED
                        </span>
                    </motion.div>
                </div>

                {/* Main Headline */}
                <div className="text-center mb-6 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white tracking-[-0.03em] leading-[0.95] uppercase"
                    >
                        <span className="block">The #1 Voice AI for</span>
                        <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF5500] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(255,116,4,0.3)] uppercase">
                            Car Dealership Service Departments
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/45 text-center max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed font-medium"
                    >
                        Answer 100% of inbound service calls: 24/7, 365. <br className="hidden md:block" />
                        Turn missed calls into <span className="text-white/80 font-medium">booked jobs</span>.
                    </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center mb-8 md:mb-16"
                >
                    <RequestDemoButton asChild>
                        <button
                            className="group relative px-8 sm:px-10 py-5 overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,116,4,0.6)] transition-shadow duration-500 text-center uppercase border-none"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                            <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black text-sm uppercase tracking-widest">
                                <Sparkles className="w-4 h-4" />
                                Schedule Your Walkthrough
                            </span>
                        </button>
                    </RequestDemoButton>

                    <a href="#calculator" className="group px-8 sm:px-10 py-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:bg-white/[0.06] transition-all duration-300 text-center">
                        <span className="flex items-center justify-center gap-3 text-white font-black text-sm uppercase tracking-widest">
                            Calculate ROI
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF7404]" />
                        </span>
                    </a>
                </motion.div>

                {/* CRO Microcopy */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center gap-2 mb-12 sm:mb-16"
                >
                    <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold">
                        30-min 1:1 • Get an exact revenue-lift projection for your dealership
                    </p>
                </motion.div>

                {/* Trust Anchor - CRO Finding H */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center"
                >
                    <p className="text-xs sm:text-sm text-white/40 font-medium mb-4">
                        Trusted by <span className="text-white/60">50+ service departments</span> recovering leaked revenue
                    </p>
                    <div className="flex items-center justify-center gap-4 sm:gap-6">
                        {[
                            { src: '/images/logos/ford-direct.jpg', alt: 'Ford Direct' },
                            { src: '/images/logos/toyota.jpg', alt: 'Toyota' },
                            { src: '/images/logos/honda.jpg', alt: 'Honda' },
                            { src: '/images/logos/gm.jpg', alt: 'GM' }
                        ].map((logo, i) => (
                            <div
                                key={i}
                                className="h-6 sm:h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
                            >
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-full w-auto object-contain grayscale brightness-150"
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section >
    );
}
