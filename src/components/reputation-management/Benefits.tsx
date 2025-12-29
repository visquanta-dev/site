'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Benefits() {
    const bullets = [
        { title: "Trust Before Contact", desc: "Buyers arrive at your site with high confidence, leading to easier sales calls." },
        { title: "Map Pack Dominance", desc: "Google rewards review recency and frequency with higher local search positioning." },
        { title: "Appointment Confidence", desc: "Reduce no-show rates by reinforcing your showroom's elite reputation in the follow-up." },
        { title: "CSI & OEM Protection", desc: "Intercept negative sentiment before it reaches corporate surveys or public eyes." },
        { title: "Review Velocity", desc: "A constant stream of new reviews solves the 'stale content' problem for prospective buyers." }
    ];

    return (
        <section className="py-24 bg-[#030303] border-y border-white/5 overflow-hidden">
            <div className="container-wide">
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/20 to-transparent blur-3xl opacity-30" />
                        <div className="relative border border-white/10 rounded-3xl p-1 lg:p-4 bg-white/[0.02]">
                            <div className="bg-[#0a0a0a] rounded-2xl p-8 lg:p-12 relative overflow-hidden">
                                <div className="text-[120px] font-bold text-white/[0.02] absolute -top-10 -right-10 leading-none select-none">TRUST</div>
                                <h2 className="text-4xl font-bold text-white mb-6 relative z-10 leading-tight">Reviews Into <br /><span className="text-[#FF7404]">Revenue.</span></h2>
                                <p className="text-white/40 mb-0 relative z-10 italic font-medium">Reputation isn't just a score; it's a lead generation engine.</p>
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1">
                        <div className="space-y-8">
                            {bullets.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 group"
                                >
                                    <div className="flex-shrink-0 mt-1">
                                        <CheckCircle2 className="w-5 h-5 text-[#FF7404] group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                                        <p className="text-sm text-white/40 leading-relaxed max-w-md">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
