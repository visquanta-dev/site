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
        <section className="py-20 sm:py-28 lg:py-32 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[10%] left-[30%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
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
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-5 sm:mb-6 lg:mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-[#FF7404]">Measurable Impact</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-5 lg:mb-6 tracking-tight leading-[1.1]">
                        Outcomes That <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Matter.
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/45 leading-relaxed max-w-2xl mx-auto">
                        We focus on the metrics your sales team actually cares about.
                    </p>
                </motion.div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                    {outcomes.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                            className="group relative"
                        >
                            <div className="h-full bg-gradient-to-b from-[#0a0a0a] to-[#060606] border border-white/[0.05] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-[#FF7404]/25 transition-all duration-500 relative overflow-hidden">
                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Icon */}
                                <div className="relative z-10 w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#FF7404]/15 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:bg-[#FF7404]/20 group-hover:border-[#FF7404]/30 transition-colors duration-500">
                                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#FF7404]" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-white font-bold text-lg sm:text-xl mb-2 sm:mb-3">{item.title}</h3>
                                    <p className="text-sm text-white/45 leading-relaxed">{item.description}</p>
                                </div>

                                {/* Bottom accent */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-xl sm:rounded-b-2xl" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
