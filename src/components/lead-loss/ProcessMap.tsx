'use client';

import { motion } from 'framer-motion';
import { Database, Filter, MessageSquare, ShieldCheck, CalendarCheck, BarChart3, Users, ArrowRight } from 'lucide-react';

const steps = [
    {
        id: 'crm',
        title: 'Secure CRM Connection',
        subtitle: 'Step 01',
        icon: Database,
        description: 'We connect to your existing CRM (VINSOLUTIONS, Reynolds, etc.) with zero disruption to your current workflow.',
        stats: 'Zero Downtime'
    },
    {
        id: 'filter',
        title: 'Identification of Cold Leads',
        subtitle: 'Step 02',
        icon: Filter,
        description: 'We isolate contacts from 1 week to 5 years old who expressed interest but never converted to a sale.',
        stats: 'Dormant Data'
    },
    {
        id: 'outreach',
        title: 'Conversational Outreach',
        subtitle: 'Step 03',
        icon: MessageSquare,
        description: 'Personalized, human-like SMS conversations begin. This is not a blast; it is a one-to-one re-engagement.',
        stats: 'Managed Playbooks'
    },
    {
        id: 'oversight',
        title: 'Human Oversight',
        subtitle: 'Step 04',
        icon: ShieldCheck,
        description: 'Our dedicated account managers monitor every conversation to ensure professional, accurate responses.',
        stats: 'Human-in-the-Loop'
    },
    {
        id: 'booking',
        title: 'Appointments Booked',
        subtitle: 'Step 05',
        icon: CalendarCheck,
        description: 'Qualified opportunities are booked directly into your CRM. You are notified the moment it happens.',
        stats: 'Direct CRM Sync'
    },
    {
        id: 'close',
        title: 'Sales Team Closes',
        subtitle: 'Step 06',
        icon: BarChart3,
        description: 'Your floor team takes over a hot lead ready to purchase. We provided the setup; you finish the deal.',
        stats: 'Revenue Event'
    }
];

interface ProcessMapProps {
    onOpenCalculator?: () => void;
}

export default function ProcessMap({ onOpenCalculator }: ProcessMapProps) {
    return (
        <section className="py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                <div className="absolute bottom-[20%] right-[-10%] w-[700px] h-[700px] bg-[#FF7404]/[0.015] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">Operational Workflow</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        From Dormant Data to <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Booked Appointments.
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
                        A low-drama, step-by-step process designed to recover missed revenue without changing your existing sales workflow.
                    </p>
                </motion.div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="relative group"
                        >
                            <div className="h-full bg-[#080808] border border-white/[0.05] p-8 rounded-2xl hover:border-[#FF7404]/20 transition-all duration-500 relative overflow-hidden">

                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Step Number - Large Watermark */}
                                <div className="absolute top-4 right-4 text-5xl font-black text-white/[0.02] group-hover:text-[#FF7404]/[0.06] transition-colors duration-500 font-mono">
                                    0{index + 1}
                                </div>

                                {/* Icon */}
                                <div className="relative z-10 w-14 h-14 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/20 transition-all duration-500">
                                    <step.icon className="w-7 h-7 text-[#FF7404]/70 group-hover:text-[#FF7404] transition-colors duration-500" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 space-y-4">
                                    <div className="text-[10px] font-semibold text-[#FF7404]/70 tracking-[0.25em] uppercase">
                                        {step.subtitle}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-white/35 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Stats Footer */}
                                <div className="relative z-10 mt-8 pt-6 border-t border-white/[0.04] flex items-center justify-between">
                                    <span className="text-[10px] font-medium text-white/20 uppercase tracking-widest">
                                        Focus:
                                    </span>
                                    <span className="text-[10px] font-semibold text-white/50 uppercase tracking-widest group-hover:text-[#FF7404] transition-colors duration-500">
                                        {step.stats}
                                    </span>
                                </div>

                                {/* Bottom accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF7404] to-[#FF9040] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 p-10 bg-[#080808] rounded-3xl border border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
                >
                    {/* Ambient glow */}
                    <div className="absolute left-0 top-0 w-60 h-60 bg-[#FF7404]/[0.04] rounded-full blur-[80px] pointer-events-none" />

                    <div className="flex items-center gap-6 relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center flex-shrink-0">
                            <Users className="w-8 h-8 text-[#FF7404]" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-xl mb-1">Fully Managed Service</div>
                            <p className="text-white/40 text-sm">Every client has a dedicated account manager and human-in-the-loop monitoring of every conversation.</p>
                        </div>
                    </div>

                    <button
                        onClick={onOpenCalculator}
                        className="relative group px-10 py-5 overflow-hidden rounded-xl flex-shrink-0"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl" />
                        <span className="relative z-10 flex items-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                            Request a Demo
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
