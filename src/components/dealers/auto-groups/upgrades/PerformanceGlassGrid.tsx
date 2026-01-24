'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

const stats = [
    { label: 'Process Consistency', value: '100%', icon: ShieldCheck, color: '#10B981' }, // Emerald
    { label: 'Deployment Time', value: '<24h', icon: Zap, color: '#FF7404' }, // Orange
    { label: 'BDC Overhead', value: '-40%', icon: TrendingUp, color: '#3B82F6' }, // Blue
    { label: 'Unchecked Leads', value: '0', icon: CheckCircle2, color: '#8B5CF6' }, // Purple
];

export default function PerformanceGlassGrid() {
    return (
        <section className="py-24 bg-[#030303] relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF7404]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-2xl overflow-hidden"
                        >
                            <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                {/* Icon Container with dynamic glow */}
                                <div
                                    className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-500 relative"
                                    style={{ color: stat.color }}
                                >
                                    <stat.icon className="w-6 h-6 relative z-10" />
                                    <div className="absolute inset-0 bg-[currentColor] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-500 rounded-xl" />
                                </div>

                                <div>
                                    <div className="text-4xl font-black text-white mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-300">
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-[0.2em] group-hover:text-zinc-400 transition-colors">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div
                                className="absolute inset-x-0 bottom-0 h-1/2 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
                                style={{ background: `linear-gradient(to top, ${stat.color}, transparent)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
