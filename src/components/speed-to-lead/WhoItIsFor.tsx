'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const bestFit = [
    "Franchised dealerships",
    "Dealer groups with multiple rooftops",
    "Stores buying third-party leads",
    "High inbound lead volume",
    "Stores running digital campaigns"
];

const notIdeal = [
    "Minimal inbound lead capture",
    "No CRM in place",
    "No follow-up discipline",
    "Very low lead volume",
    "Not ready to invest in lead response"
];

export default function WhoItIsFor() {
    return (
        <section className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">Ideal Fit</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Is This Right for <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Your Dealership?
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
                        We believe in transparency. Here's who gets the most value from Speed to Lead.
                    </p>
                </motion.div>

                {/* Two Columns */}
                {/* Two Columns */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Best Fit - The Premium Option */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative bg-[#0a0a0a] border border-green-500/20 rounded-3xl p-10 overflow-hidden"
                    >
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-500/10 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/[0.08]">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-500/5 border border-green-500/20 flex items-center justify-center shadow-[0_0_20px_-5px_#22c55e]">
                                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-2xl tracking-tight">Best Fit</h3>
                                    <p className="text-sm text-green-400/80 font-medium mt-1">Maximum Impact</p>
                                </div>
                            </div>

                            <ul className="space-y-6">
                                {bestFit.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                        className="flex items-start gap-4 group/item"
                                    >
                                        <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 border border-green-500/20 group-hover/item:border-green-500/50 transition-colors">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                                        </div>
                                        <span className="text-white/80 text-lg group-hover/item:text-white transition-colors">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Not Ideal - The Contrast */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="group relative bg-[#080808] border border-white/[0.06] rounded-3xl p-10 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="flex items-center gap-5 mb-10 pb-8 border-b border-white/[0.06]">
                                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:bg-white/[0.08] group-hover:border-white/[0.15] transition-all duration-300">
                                    <XCircle className="w-8 h-8 text-white/10 group-hover:text-white/40 transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-2xl tracking-tight">Not Ideal For</h3>
                                    <p className="text-sm text-white/40 font-medium mt-1">Better solutions exist</p>
                                </div>
                            </div>

                            <ul className="space-y-6">
                                {notIdeal.map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + i * 0.05 }}
                                        className="flex items-start gap-4 group/item"
                                    >
                                        <div className="mt-1 w-6 h-6 rounded-full bg-white/[0.03] flex items-center justify-center flex-shrink-0 border border-white/[0.05] group-hover/item:border-white/[0.2] transition-colors">
                                            <XCircle className="w-3.5 h-3.5 text-white/10 group-hover/item:text-white/40 transition-colors" />
                                        </div>
                                        <span className="text-white/40 text-lg group-hover/item:text-white/60 transition-colors">{item}</span>
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
