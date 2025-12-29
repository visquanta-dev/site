'use client';

import { motion } from 'framer-motion';
import { PhoneCall, CalendarCheck, ShieldCheck, TrendingUp } from 'lucide-react';

const outcomes = [
    {
        icon: PhoneCall,
        title: "Higher Contact Rate",
        description: "More leads engaged within the critical first minutes."
    },
    {
        icon: CalendarCheck,
        title: "More Booked Calls",
        description: "Qualified appointments handed directly to your sales team."
    },
    {
        icon: ShieldCheck,
        title: "Fewer Lost to Competitors",
        description: "First response advantage secured on every inbound lead."
    },
    {
        icon: TrendingUp,
        title: "Better Lead Spend ROI",
        description: "Maximize return on every dollar spent acquiring leads."
    }
];

export default function OutcomesThatMatter() {
    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[10%] left-[30%] w-[600px] h-[600px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">Measurable Impact</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Outcomes That <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Matter.
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
                        We focus on the metrics your sales team actually cares about.
                    </p>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className="h-full bg-[#080808] border border-white/[0.04] rounded-2xl p-8 hover:border-[#FF7404]/20 transition-all duration-500 relative overflow-hidden">
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center mb-6 group-hover:bg-[#FF7404]/20 transition-colors duration-500">
                                    <item.icon className="w-7 h-7 text-[#FF7404]" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-white font-bold text-xl mb-3">{item.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF7404] to-[#FF9040] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
