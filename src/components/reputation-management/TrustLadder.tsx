'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Check, Shield } from 'lucide-react';

export default function TrustLadder() {
    const ladder = [
        {
            range: "4.5 — 5.0",
            status: "Trusted",
            impact: "Higher show rates and higher appointment set efficiency.",
            color: "bg-[#FF7404]",
            icon: Shield,
            glow: "shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)]",
            active: true
        },
        {
            range: "4.0 — 4.3",
            status: "Acceptable",
            impact: "Compared vs. top-rated competitors; price becomes the deciding factor.",
            color: "bg-white/20",
            icon: Check,
            glow: "",
            active: false
        },
        {
            range: "3.9 & Under",
            status: "Avoided",
            impact: "Buyers actively filter out these results during initial search.",
            color: "bg-red-500/20",
            icon: AlertTriangle,
            glow: "",
            active: false
        }
    ];

    return (
        <section className="py-24 bg-[#020202]">
            <div className="container-wide">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">The Trust Ladder</h2>
                        <p className="text-white/40">Correlation between star rating and consumer behavior logic at the point of click.</p>
                    </div>

                    <div className="space-y-6">
                        {ladder.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className={`relative group flex flex-col md:flex-row items-center gap-10 p-10 rounded-[2.5rem] border ${step.active ? 'bg-white/[0.04] border-[#FF7404]/30 shadow-[0_20px_50px_-10px_rgba(255,116,4,0.1)]' : 'bg-white/[0.01] border-white/5 opacity-50 hover:opacity-100 transition-all duration-500'}`}
                            >
                                {/* Active Glow Accent */}
                                {step.active && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/5 to-transparent rounded-[2.5rem] pointer-events-none" />
                                )}

                                <div className={`w-32 flex flex-col items-center md:items-start ${step.active ? 'text-[#FF7404]' : 'text-white/30'} transition-colors duration-500`}>
                                    <div className="text-sm font-black uppercase tracking-[0.2em] mb-1">Score</div>
                                    <div className="text-3xl font-black italic tracking-tighter">{step.range}</div>
                                </div>

                                <div className="flex-1 flex flex-col md:flex-row items-center gap-8 relative z-10">
                                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${step.color} ${step.glow} group-hover:scale-110`}>
                                        <step.icon className={`w-8 h-8 ${step.active ? 'text-black' : 'text-white/40'}`} />
                                    </div>
                                    <div className="text-center md:text-left">
                                        <h3 className={`font-black text-2xl mb-2 tracking-tight ${step.active ? 'text-white' : 'text-white/40'}`}>{step.status}</h3>
                                        <p className="text-sm text-white/30 leading-relaxed max-w-lg group-hover:text-white/50 transition-colors duration-500">{step.impact}</p>
                                    </div>
                                </div>

                                {step.active && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="absolute -top-4 right-10 bg-white text-black px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] border border-white/20 shadow-xl"
                                    >
                                        Target Segment
                                    </motion.div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
