'use client';

import { motion } from 'framer-motion';
import { Store, Building2, BadgeCheck, Users, CornerDownRight } from 'lucide-react';

const segments = [
    {
        icon: Store,
        title: 'Independent Dealers',
        challenge: 'Limited staff, high overhead, and the struggle to compete with big budget retailers.',
        solution: 'AutoMaster levels the playing field, providing enterprise-grade automation that works 24/7 without adding a single person to your payroll.',
        keywords: ['Efficiency', 'Lead Capture', '24/7 Response']
    },
    {
        icon: Building2,
        title: 'Franchise Dealerships',
        challenge: 'Meeting strict OEM response times while managing high-volume floor traffic.',
        solution: 'Seamlessly integrate with certified DMS/CRM systems to ensure 100% OEM compliance while freeing your sales team to focus on the customers on the lot.',
        keywords: ['OEM Compliance', 'DMS Integration', 'Sales Velocity']
    },
    {
        icon: BadgeCheck,
        title: 'Pre-Owned Specialists',
        challenge: 'Inventory turns are everything. Every missed lead is a day longer a car stays on the lot.',
        solution: 'Instant engagement the moment a lead hits from third-party sites. Our AI qualifies buyers and books test drives before they browse your competitor\'s inventory.',
        keywords: ['Fast Turnaround', 'Lead Qualification', 'Third-Party Leads']
    },
    {
        icon: Users,
        title: 'Auto Groups',
        challenge: 'Inconsistent processes and fragmented data across multiple rooftops.',
        solution: 'Deploy a unified sales playbook across your entire portfolio. Centralized reporting gives you total visibility while AI ensures brand standards are met everywhere.',
        keywords: ['Scalability', 'Centralized Reporting', 'Standardization']
    }
];

export default function WhoItsForSection() {
    return (
        <section className="py-32 bg-[#080808] relative overflow-hidden">
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />

            {/* Schematic Background Element */}
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03] pointer-events-none select-none mix-blend-screen invert hidden lg:block">
                <img
                    src="/assets/sports-car-rear.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-3xl mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
                        <Users className="w-3 h-3" />
                        Audience Clarity
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Precision-engineered for <span className="text-[#ff7404]">every type of dealer.</span>
                    </h2>
                    <p className="text-white/60 text-xl leading-relaxed">
                        We don't believe in one-size-fits-all. Our platform is built to solve the specific operational hurdles faced by different segments of the automotive industry.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {segments.map((segment, i) => {
                        const Icon = segment.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative"
                            >
                                <div className="h-full bg-gradient-to-br from-[#111111] to-[#080808] border border-white/[0.08] rounded-3xl p-8 lg:p-10 transition-all duration-500 hover:border-[#ff7404]/30">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404] group-hover:bg-[#ff7404] group-hover:text-black transition-all duration-300">
                                            <Icon className="w-8 h-8" />
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-6">{segment.title}</h3>

                                    <div className="space-y-6">
                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-[#ff7404] tracking-widest mb-2">The Challenge</div>
                                            <p className="text-white/50 leading-relaxed">{segment.challenge}</p>
                                        </div>

                                        <div>
                                            <div className="text-[10px] uppercase font-bold text-emerald-500 tracking-widest mb-2">The Solution</div>
                                            <p className="text-white/80 leading-relaxed italic border-l-2 border-emerald-500/30 pl-4">
                                                "{segment.solution}"
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-10 flex flex-wrap gap-2">
                                        {segment.keywords.map((kw, j) => (
                                            <span key={j} className="text-[10px] font-bold text-white/30 uppercase tracking-tighter border border-white/10 px-2 py-1 rounded bg-white/5">
                                                {kw}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Corner Decoration */}
                                    <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <CornerDownRight className="w-6 h-6 text-[#ff7404]" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
