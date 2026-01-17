'use client';

import { TrendingDown, DollarSign, Phone, PhoneOff, Clock, Zap, Target, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StatisticsSection() {
    return (
        <section className="relative py-32 bg-[#030303] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#030303] to-[#030303]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8"
                    >
                        <TrendingDown className="w-3 h-3 text-[#FF7404]" />
                        <span className="text-[#FF7404] font-bold text-[10px] tracking-[0.2em] uppercase">The Cost of Inaction</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-[-0.02em]"
                    >
                        The Numbers Don&apos;t Lie: <br />
                        <span className="text-[#FF7404] filter drop-shadow-[0_0_20px_rgba(255,116,4,0.3)]">Missed Calls Kill Service Retention</span>
                    </motion.h2>
                </div>

                {/* Main Problem Stats */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {/* Missed Calls Stat */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FF7404]/5 to-[#0a0a0a] border border-[#FF7404]/20 hover:border-[#FF7404]/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF7404]/10 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                            <PhoneOff className="w-12 h-12 text-[#FF7404] mb-6" />
                            <div className="text-7xl md:text-[5.5rem] font-bold text-[#FF7404] mb-2 tracking-tighter leading-none">
                                1,200
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Missed Service Calls Per Month
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                On average, dealerships miss over 1,200 service calls monthly during peak and after hours
                            </p>
                        </div>
                    </motion.div>

                    {/* Revenue Lost Stat */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FF7404]/5 to-[#0a0a0a] border border-[#FF7404]/20 hover:border-[#FF7404]/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF7404]/10 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                            <DollarSign className="w-12 h-12 text-[#FF7404] mb-6" />
                            <div className="text-7xl md:text-[5.5rem] font-bold text-[#FF7404] mb-2 tracking-tighter leading-none">
                                $480K
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Annual Service Revenue Lost
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                Average annual service revenue lost because of missed calls and abandoned opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* VisQuanta Solution Stats - PREMIUM "OBSIDIAN" DESIGN */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative group rounded-[3rem] p-[1px] overflow-hidden"
                >
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-[-200%] bg-[conic-gradient(from_90deg_at_50%_50%,#00000000_50%,#FF7404_50%,#00000000_100%)] animate-[spin_4s_linear_infinite] opacity-30" />

                    {/* Inner Container */}
                    <div className="relative rounded-[3rem] bg-[#030303] overflow-hidden h-full">
                        {/* Premium Background Effects */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,255,255,0.03),_transparent_70%)]" />
                        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.15] mix-blend-overlay" />

                        {/* Content Wrapper */}
                        <div className="relative z-10 p-12 md:pt-24 md:px-24 md:pb-24">

                            {/* Header Section */}
                            <div className="text-center mb-20 relative">
                                <div className="inline-flex items-center justify-center relative mb-6">
                                    <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                                    <span className="relative z-10 bg-[#030303] px-6">
                                        <div className="w-2 h-2 rounded-full bg-[#FF7404] shadow-[0_0_10px_#FF7404]" />
                                    </span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-2">
                                    VisQuanta Service Drive Agent<span className="text-[#FF7404]">™</span>
                                </h3>
                                <p className="text-white/40 font-medium tracking-[0.2em] text-sm uppercase">Operational Standards</p>
                            </div>

                            {/* Metrics Grid with "Etched Glass" Dividers */}
                            <div className="grid md:grid-cols-4 relative">
                                {/* Desktop Vertical Dividers */}
                                <div className="hidden md:block absolute top-4 bottom-4 left-1/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <div className="hidden md:block absolute top-4 bottom-4 left-2/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <div className="hidden md:block absolute top-4 bottom-4 left-3/4 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

                                {[
                                    {
                                        metric: '<60s',
                                        title: 'Avg Response Time',
                                        subtitle: 'Answer every call instantly',
                                        gradient: 'from-[#FF7404] to-[#ff9e4f]'
                                    },
                                    {
                                        metric: '24/7',
                                        title: 'Always On Coverage',
                                        subtitle: 'Zero downtime, ever',
                                        gradient: 'from-white to-white/70'
                                    },
                                    {
                                        metric: '98%',
                                        title: 'Engagement Rate',
                                        subtitle: 'After-hours conversion',
                                        gradient: 'from-[#FF7404] to-[#ff9e4f]'
                                    },
                                    {
                                        metric: '1 in 4',
                                        title: 'Booking Rate',
                                        subtitle: 'Calls converted to appts',
                                        gradient: 'from-white to-white/70'
                                    }
                                ].map((stat, idx) => (
                                    <div key={idx} className="relative group/item p-8 text-center transition-all duration-500 hover:bg-white/[0.02] rounded-2xl md:rounded-none">
                                        {/* Hover Spotlight element could go here */}

                                        {/* Metric Number */}
                                        <div className={`text-6xl md:text-[4rem] font-bold mb-6 tracking-tighter bg-gradient-to-b ${stat.gradient} bg-clip-text text-transparent filter drop-shadow-lg transform transition-transform duration-500 group-hover/item:scale-105`}>
                                            {stat.metric}
                                        </div>

                                        {/* Label */}
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-sm font-bold text-white uppercase tracking-[0.15em]">
                                                {stat.title}
                                            </h4>
                                            <p className="text-xs text-white/30 font-medium">
                                                {stat.subtitle}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
