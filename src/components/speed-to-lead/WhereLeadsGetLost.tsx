'use client';

import { motion } from 'framer-motion';
import { Moon, Calendar, Users, BellOff, TrendingUp, GitBranch } from 'lucide-react';

const lossPoints = [
    {
        icon: Moon,
        title: "After Hours",
        description: "Leads arrive at 9pm. Nobody responds until 9am.",
        indicator: "12hr gap"
    },
    {
        icon: Calendar,
        title: "Weekends",
        description: "Saturday leads wait until Monday morning.",
        indicator: "48hr gap"
    },
    {
        icon: Users,
        title: "BDC Overload",
        description: "Peak volume overwhelms available staff capacity.",
        indicator: "Backlog"
    },
    {
        icon: BellOff,
        title: "Missed Notifications",
        description: "Lead alerts buried in email or CRM queues.",
        indicator: "Delayed"
    },
    {
        icon: TrendingUp,
        title: "Vendor Lead Spikes",
        description: "Sudden volume from paid sources exceeds bandwidth.",
        indicator: "Overflow"
    },
    {
        icon: GitBranch,
        title: "Routing Delays",
        description: "Leads stuck in assignment logic before human contact.",
        indicator: "Queued"
    }
];

export default function WhereLeadsGetLost() {
    return (
        <section className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-red-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="max-w-3xl mb-16"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">Operational Reality</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        Where Inbound Leads <br />
                        <span className="text-red-400">Get Lost.</span>
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed max-w-2xl">
                        These aren't staff failures. They're operational gaps that exist in every dealership. The question is whether you have a system to close them.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lossPoints.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                            className="group relative bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-white/[0.06] rounded-2xl p-8 hover:border-red-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(239,68,68,0.15)]"
                        >
                            {/* Hover glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                            <div className="relative z-10">
                                {/* Icon + Indicator */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] flex items-center justify-center group-hover:bg-red-500/[0.08] group-hover:border-red-500/20 transition-all duration-500 shadow-inner">
                                        <item.icon className="w-6 h-6 text-white/50 group-hover:text-red-400 transition-colors duration-500" />
                                    </div>
                                    <div className="px-3 py-1.5 bg-red-500/[0.06] border border-red-500/10 rounded-full group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors duration-500">
                                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-widest">{item.indicator}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-red-100 transition-colors duration-300">{item.title}</h3>
                                <p className="text-[15px] text-white/40 leading-[1.8] group-hover:text-white/50 transition-colors duration-300">{item.description}</p>
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
