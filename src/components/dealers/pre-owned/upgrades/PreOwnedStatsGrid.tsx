'use client';

import { motion } from 'framer-motion';
import { DollarSign, Zap, Clock } from 'lucide-react';

const stats = [
    { label: 'Avg Found Money', value: '$42k+', desc: 'Recovered monthly from CRM', icon: DollarSign, color: '#10B981' },
    { label: 'Appt Set Rate', value: '3.5x', desc: 'Increase vs manual follow-up', icon: Zap, color: '#FF7404' },
    { label: 'Market Capture', value: '24/7', desc: 'Engaging buyers while you sleep', icon: Clock, color: '#3B82F6' },
];

export default function PreOwnedStatsGrid() {
    return (
        <section className="py-20 border-y border-white/5 bg-[#030303] relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-full bg-white/[0.02] blur-[100px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                        >
                            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                                <div
                                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-2 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                                    style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
                                >
                                    <stat.icon className="w-6 h-6" style={{ color: stat.color }} />
                                </div>

                                <div className="space-y-1">
                                    <div className="text-5xl font-black text-white tracking-tighter">{stat.value}</div>
                                    <div className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: stat.color }}>{stat.label}</div>
                                </div>

                                <p className="text-zinc-500 text-sm font-medium">{stat.desc}</p>
                            </div>

                            {/* Hover Gradient */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl pointer-events-none"
                                style={{ background: `radial-gradient(circle at center, ${stat.color}, transparent 70%)` }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
