'use client';

import { motion } from 'framer-motion';
import { Check, X, Sparkles, Bot, Users, Building2, Zap, Target, ShieldCheck } from 'lucide-react';

const comparisons = [
    { feature: 'Response Time', visquanta: 'Under 60 seconds', traditional: '24+ hours', generic: '2-5 minutes', detail: 'Instant engagement vs. waiting for a call back.' },
    { feature: 'Personalization', visquanta: 'Inventory-aware, context-rich', traditional: 'Generic scripts', generic: 'Template responses', detail: 'Actual conversation vs. robotic templates.' },
    { feature: 'Lead Qualification', visquanta: 'AI-powered scoring', traditional: 'Manual review', generic: 'Basic forms', detail: 'Strategic prioritization vs. manual sorting.' },
    { feature: 'Multi-Channel', visquanta: 'SMS, Email, Voice, Chat', traditional: 'Phone only', generic: 'Chat only', detail: 'Meeting the customer where they are.' },
    { feature: 'CRM Integration', visquanta: 'Deep, bi-directional sync', traditional: 'Manual entry', generic: 'Limited', detail: 'No more data silos or manual entry errors.' },
    { feature: 'After-Hours Coverage', visquanta: '24/7/365 AI + Human', traditional: 'None', generic: 'Bot only', detail: 'Never miss a weekend or night lead again.' },
    { feature: 'Service Department', visquanta: 'Full Voice AI support', traditional: 'Separate system', generic: 'Not supported', detail: 'Handle ROs and appointments automatically.' },
    { feature: 'Cost per Appointment', visquanta: 'Fraction of BDC', traditional: '$150-300', generic: 'Variable', detail: 'Scale without adding payroll overhead.' },
];

const differentiators = [
    {
        icon: Bot,
        title: 'AI That Actually Sells',
        description: 'Not a chatbot. Not a script reader. Our AI understands automotive sales, speaks your language, and closes appointments like your best BDC rep.',
    },
    {
        icon: Users,
        title: 'Human When It Matters',
        description: 'AI handles the volume. Humans handle the complexity. Seamless handoffs mean no lead ever feels like they\'re talking to a robot.',
    },
    {
        icon: Building2,
        title: 'Built for Dealerships',
        description: 'We\'re not a generic AI company that decided to try automotive. Every feature is purpose-built for how dealerships actually operate.',
    },
];

export default function WhyVisquantaSection() {
    return (
        <section className="py-32 bg-[#080808] relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/20 to-transparent" />
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Schematic Background Element */}
            <div className="absolute -right-40 top-0 w-3/4 h-full opacity-[0.05] pointer-events-none select-none hidden lg:block">
                <img
                    src="/assets/dark-car-schematic.jpg"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="container-wide relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-8">
                        <ShieldCheck className="w-3 h-3" />
                        The Competitive Edge
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        Not another chatbot. <span className="text-[#ff7404]">A complete AI sales engine.</span>
                    </h2>
                    <p className="text-white/60 text-xl leading-relaxed">
                        There's a reason the top-performing dealerships choose VisQuanta over generic AI solutions and traditional BDC teams.
                    </p>
                </motion.div>

                {/* Differentiators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-6 mb-24"
                >
                    {differentiators.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="group">
                                <div className="h-full bg-gradient-to-b from-[#111111] to-[#080808] border border-white/[0.08] rounded-3xl p-8 transition-all duration-500 hover:border-[#ff7404]/30">
                                    <div className="w-14 h-14 rounded-2xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404] mb-6 group-hover:bg-[#ff7404] group-hover:text-black transition-all duration-300">
                                        <Icon className="w-7 h-7" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-white/60 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>

                {/* Comparison Table - Premium Redesign */}
                <div className="relative group/table">
                    {/* Glowing background behind the table */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff7404]/5 to-transparent blur-3xl opacity-0 group-hover/table:opacity-50 transition-opacity duration-1000 -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/40 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 p-10 border-b border-white/[0.08] bg-white/[0.02]">
                            <div className="text-sm font-bold text-white/30 uppercase tracking-[0.2em]">Capability</div>
                            <div className="relative flex flex-col items-center justify-center">
                                <div className="absolute -top-6 px-4 py-1 rounded-full bg-[#ff7404] text-[11px] text-black font-black uppercase tracking-widest mb-2 shadow-lg shadow-[#ff7404]/30">
                                    Recommended
                                </div>
                                <div className="text-lg font-black text-[#ff7404] uppercase tracking-[0.15em] pt-4">VisQuanta</div>
                            </div>
                            <div className="text-sm font-bold text-white/30 uppercase tracking-[0.2em] text-center flex items-center justify-center">Traditional BDC</div>
                            <div className="text-sm font-bold text-white/30 uppercase tracking-[0.2em] text-center flex items-center justify-center">Generic AI</div>
                        </div>

                        {/* Table Content */}
                        <div className="divide-y divide-white/[0.04]">
                            {comparisons.map((row, i) => (
                                <div
                                    key={i}
                                    className="grid grid-cols-4 gap-4 px-10 py-9 hover:bg-white/[0.02] transition-colors relative group/row"
                                >
                                    {/* VisQuanta Column Highlight Effect */}
                                    <div className="absolute top-0 bottom-0 left-[25%] right-[50%] bg-[#ff7404]/[0.02] border-x border-[#ff7404]/10 pointer-events-none group-hover/row:bg-[#ff7404]/[0.04] transition-colors" />

                                    {/* Feature Name */}
                                    <div className="flex flex-col gap-2">
                                        <div className="text-base lg:text-lg font-bold text-white group-hover/row:text-[#ff7404] transition-colors">{row.feature}</div>
                                        <div className="text-xs lg:text-sm text-white/30 font-medium leading-relaxed max-w-[220px]">{row.detail}</div>
                                    </div>

                                    {/* VisQuanta Value */}
                                    <div className="relative flex items-center justify-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center group-hover:bg-[#ff7404] transition-all">
                                            <Check className="w-4 h-4 text-[#ff7404] group-hover:text-black" />
                                        </div>
                                        <div className="text-base lg:text-lg text-[#ff7404] font-black tracking-tight text-center leading-tight">{row.visquanta}</div>
                                    </div>

                                    {/* Traditional Value */}
                                    <div className="text-base text-white/40 text-center flex items-center justify-center font-medium">
                                        {row.traditional}
                                    </div>

                                    {/* Generic AI Value */}
                                    <div className="text-base text-white/40 text-center flex items-center justify-center font-medium">
                                        {row.generic}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Table Footer / Summary */}
                        <div className="p-10 bg-white/[0.02] border-t border-white/[0.06] text-center">
                            <div className="inline-flex items-center gap-8 text-white/30 text-sm font-bold uppercase tracking-widest whitespace-nowrap">
                                <span>Certified Integrations</span>
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <span>SOC2 Type II</span>
                                <div className="w-2 h-2 rounded-full bg-white/10" />
                                <span>99.9% Uptime</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center max-w-2xl mx-auto"
                >
                    <p className="text-white/60 text-lg leading-relaxed">
                        The best dealerships don't choose between AI and humans. They use <strong className="text-white">both</strong>—with VisQuanta as the intelligent layer that makes everything work together.
                    </p>
                </motion.div>

            </div>

            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/20 to-transparent" />
        </section>
    );
}
