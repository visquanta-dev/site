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

                {/* VisQuanta Solution Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative p-12 md:p-20 rounded-[3rem] bg-[#0a0a0a] border border-white/[0.08] overflow-hidden"
                >
                    {/* Decorative Glows */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/[0.05] rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF7404]/[0.03] rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 text-center">
                        <h3 className="text-3xl font-bold text-white mb-16 tracking-tight">
                            VisQuanta Service Drive Agent™ Guarantees
                        </h3>

                        <div className="grid md:grid-cols-4 gap-12 relative">
                            {/* Horizontal Divider Line for desktop */}
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            {/* Vertical Divider Lines would be complex, keeping it clean instead */}

                            {[
                                {
                                    icon: Clock,
                                    metric: '<60s',
                                    title: 'Avg Response Time',
                                    description: 'Ensures no waiting and no missed opportunities.',
                                    color: 'text-[#FF7404]'
                                },
                                {
                                    icon: Zap,
                                    metric: '24/7',
                                    title: 'Always On',
                                    description: 'Engage leads instantly on every platform, any time.',
                                    color: 'text-white'
                                },
                                {
                                    icon: Target,
                                    metric: '+98%',
                                    title: 'After-Hours Conversion',
                                    description: 'Convert more leads outside business hours.',
                                    color: 'text-[#FF7404]'
                                },
                                {
                                    icon: Award,
                                    metric: '1 in 4',
                                    title: 'Booking Rate',
                                    description: 'Leads book an appointment in under 15 minutes.',
                                    color: 'text-white'
                                }
                            ].map((stat, idx) => (
                                <div key={idx} className="relative group bg-[#0a0a0a] md:bg-transparent p-4 rounded-2xl md:rounded-none z-10">
                                    <div className={`text-5xl font-black ${stat.color} mb-4 tracking-tighter group-hover:scale-110 transition-transform duration-300`}>
                                        {stat.metric}
                                    </div>
                                    <h4 className="text-sm font-bold text-white/90 uppercase tracking-widest mb-3">
                                        {stat.title}
                                    </h4>
                                    <p className="text-sm text-white/40 font-light leading-relaxed">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
