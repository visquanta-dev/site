'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const bestFit = [
    "Franchised dealerships",
    "Dealer groups with multiple rooftops",
    "Stores buying third-party leads",
    "High inbound lead volume",
    "Stores running digital campaigns"
];

const notIdeal = [
    "Still building lead flow",
    "No CRM in place",
    "Looking for full BDC replacement",
    "Very low lead volume",
    "Not ready to invest in lead response"
];

export default function WhoItIsFor() {
    return (
        <section className="py-20 sm:py-28 lg:py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-10 sm:mb-14 lg:mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-5 sm:mb-6 lg:mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">Ideal Fit</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 tracking-tight leading-[1.1]">
                        Is This Right for <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Your Dealership?
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/45 leading-relaxed max-w-2xl mx-auto">
                        We believe in transparency. Here's who gets the most value from Speed to Lead.
                    </p>
                </motion.div>

                {/* Two Columns */}
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto">

                    {/* Best Fit - The Premium Option */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="group relative bg-gradient-to-b from-[#0a0a0a] to-[#060606] border border-green-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden shadow-[0_0_50px_-20px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_-10px_rgba(34,197,94,0.25)] transition-all duration-500"
                    >
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -right-16 -top-16 w-48 h-48 sm:w-64 sm:h-64 bg-green-500/10 rounded-full blur-[60px] sm:blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 lg:mb-10 pb-5 sm:pb-6 lg:pb-8 border-b border-white/[0.08]">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_#22c55e]">
                                    <CheckCircle2 className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight">Best Fit</h3>
                                    <p className="text-xs sm:text-sm text-green-400/80 font-medium mt-0.5 sm:mt-1">Maximum Impact</p>
                                </div>
                            </div>

                            <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
                                {bestFit.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.08 + i * 0.04 }}
                                        className="flex items-start gap-3 sm:gap-4 group/item"
                                    >
                                        <div className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover/item:border-green-500/40 transition-colors">
                                            <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-green-400" />
                                        </div>
                                        <span className="text-white/80 text-sm sm:text-base lg:text-lg group-hover/item:text-white transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-white/[0.08] flex justify-center sm:justify-start">
                                <a href="#calculator" className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-green-400 hover:text-green-300 transition-colors group/cta">
                                    <span>Sound like you?</span>
                                    <span className="underline underline-offset-4 decoration-green-400/50 group-hover/cta:decoration-green-300">Get Started</span>
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Not Ideal - The Contrast */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="group relative bg-[#111111] border border-white/[0.1] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 lg:mb-10 pb-5 sm:pb-6 lg:pb-8 border-b border-white/[0.1]">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300">
                                    <XCircle className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white/40 group-hover:text-white/60 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl sm:text-2xl tracking-tight">Not Ideal For</h3>
                                    <p className="text-xs sm:text-sm text-white/50 font-medium mt-0.5 sm:mt-1">Better solutions exist</p>
                                </div>
                            </div>

                            <ul className="space-y-4 sm:space-y-5 lg:space-y-6">
                                {notIdeal.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.15 + i * 0.04 }}
                                        className="flex items-start gap-3 sm:gap-4 group/item"
                                    >
                                        <div className="mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/[0.05] flex items-center justify-center flex-shrink-0 border border-white/[0.08] group-hover/item:border-white/[0.2] transition-colors">
                                            <XCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/40 group-hover/item:text-white/60 transition-colors" />
                                        </div>
                                        <span className="text-white/70 text-sm sm:text-base lg:text-lg group-hover/item:text-white transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
