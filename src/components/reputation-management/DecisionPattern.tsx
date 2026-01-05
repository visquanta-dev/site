'use client';

import { motion } from 'framer-motion';
import { Search, Scale, XCircle, MousePointer2 } from 'lucide-react';

export default function DecisionPattern() {
    const steps = [
        {
            icon: Search,
            label: "Search",
            desc: "Buyer searches local inventory or terms.",
            color: "from-white/20 to-white/5"
        },
        {
            icon: Scale,
            label: "Compare",
            desc: "Scores and review volume evaluated.",
            color: "from-white/20 to-white/5"
        },
        {
            icon: XCircle,
            label: "Eliminate",
            desc: "Under 4.0 or stale stores removed.",
            color: "from-red-500/20 to-red-500/5",
            isNegative: true
        },
        {
            icon: MousePointer2,
            label: "Trust Click",
            desc: "Confidence leads to the lead form.",
            color: "from-[#FF7404]/30 to-[#FF7404]/10",
            isPositive: true
        }
    ];

    return (
        <section className="py-24 bg-[#030303] relative border-y border-white/5">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Buyer Decision Pattern</h2>
                    <p className="text-white/40 max-w-xl mx-auto">The digital elimination process every car buyer follows before visiting your showroom.</p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto relative px-4">
                    {/* Connector Line - Desktop */}
                    <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent z-0" />

                    {/* Connector Line - Mobile */}
                    <div className="lg:hidden absolute top-[60px] bottom-[60px] left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-[#FF7404]/30 to-transparent z-0" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative z-10 w-full lg:w-48 group"
                        >
                            <div className={`w-28 h-28 rounded-[2rem] mx-auto mb-8 relative flex items-center justify-center transition-all duration-500 group-hover:scale-110`}>
                                {/* Visual Depth Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} border border-white/10 rounded-[2rem] backdrop-blur-md shadow-2xl group-hover:border-[#FF7404]/50 transition-colors duration-500`} />
                                <div className="absolute inset-0 bg-[#FF7404]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2rem]" />

                                <step.icon className={`w-10 h-10 relative z-10 ${step.isPositive ? 'text-[#FF7404]' : step.isNegative ? 'text-red-400' : 'text-white/60'} group-hover:drop-shadow-[0_0_15px_rgba(255,116,4,0.4)] transition-all`} />
                            </div>

                            <div className="relative">
                                <h3 className={`text-xs font-black uppercase tracking-[0.25em] mb-3 transition-colors duration-500 ${step.isPositive ? 'text-[#FF7404]' : 'text-white/80 group-hover:text-white'}`}>{step.label}</h3>
                                <p className="text-[11px] text-white/30 leading-relaxed group-hover:text-white/50 transition-colors duration-500">{step.desc}</p>
                            </div>

                            {/* Index Number */}
                            <div className="absolute -top-4 -right-2 text-[40px] font-black text-white/[0.03] select-none italic">
                                0{i + 1}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
