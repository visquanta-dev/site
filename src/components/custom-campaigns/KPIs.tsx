'use client';

import { motion } from 'framer-motion';

const kpis = [
    { label: "Reply Rate", value: "24%", sub: "Avg. across campaigns" },
    { label: "Booking Rate", value: "11%", sub: "Of engaged replies" },
    { label: "Response Time", value: "<2m", sub: "For booking intent" },
    { label: "Throughput", value: "10k", sub: "Messages per hour" },
];

export default function KPIs() {
    return (
        <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
                <div className="mb-16 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7404]/10 border border-[#FF7404]/20 rounded-full mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                        <span className="text-xs font-bold text-[#FF7404] uppercase tracking-widest">System Benchmarks</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Real Results. <span className="text-[#FF7404]">Real Revenue.</span></h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">
                        Don't guess. We track every interaction. These are the average performance metrics from over 500 active dealership campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {kpis.map((kpi, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#0f0f0f] border-l-2 border-[#FF7404] pl-6 py-2"
                        >
                            <div className="text-xs font-bold text-white/40 uppercase tracking-widest mb-2">{kpi.label}</div>
                            <div className="text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">{kpi.value}</div>
                            <div className="text-xs text-white/30">{kpi.sub}</div>

                            {/* Sparkline Placeholder */}
                            <svg className="w-full h-8 mt-4 opacity-20" viewBox="0 0 100 20" preserveAspectRatio="none">
                                <path d="M0,10 Q25,18 50,5 T100,10" fill="none" stroke="white" strokeWidth="2" />
                            </svg>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
