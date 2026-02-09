'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Smartphone, Users, Building2 } from 'lucide-react';
import MobileComparisonCards from './mobile/MobileComparisonCards';
import MobileDifferentiatorCards from './mobile/MobileDifferentiatorCards';
import { useLocale } from '@/lib/i18n/LocaleProvider';


// Comparisons left hardcoded for now as they are technical specs, 
// but normally should be localized if they vary by region or language.
const comparisons = [
    { feature: 'Lead Response Time', visquanta: '<60 seconds', traditional: '24+ hours', generic: '2-5 minutes', detail: 'Speed wins deals.' },
    { feature: 'Lead Reactivation', visquanta: 'SMS Conversational AI', traditional: 'Outbound calls', generic: '', detail: 'Prioritize, don\'t guess.' },
    { feature: 'After-Hours Coverage', visquanta: '24/7/365 AI + Human', traditional: 'None', generic: 'Bot only', detail: 'Never miss a lead.' },
    { feature: 'Service Department', visquanta: 'Full Voice AI', traditional: 'Separate system', generic: 'Not supported', detail: 'ROs on autopilot.' },
    { feature: 'Cost per Appointment', visquanta: 'Fraction of BDC', traditional: '$150-300', generic: 'Variable', detail: 'Scale without payroll.' },
];

export default function WhyVisquantaSection() {
    const { t } = useLocale();

    const differentiators = [
        {
            icon: Smartphone,
            title: t('why_visquanta.point_1_title'),
            description: t('why_visquanta.point_1_description'),
        },
        {
            icon: Users,
            title: t('why_visquanta.point_2_title'),
            description: t('why_visquanta.point_2_description'),
        },
        {
            icon: Building2,
            title: t('why_visquanta.point_3_title'),
            description: t('why_visquanta.point_3_description'),
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-[#080808] relative overflow-hidden">
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

            <div className="container-wide relative z-10 px-6 md:px-0">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 lg:mb-20"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-8">
                        <ShieldCheck className="w-3 h-3" />
                        {t('why_visquanta.badge')}
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
                        {t('why_visquanta.headline')} <span className="text-[#ff7404]">{t('why_visquanta.headline_highlight')}</span>
                    </h2>
                    <p className="text-white/60 text-base sm:text-lg lg:text-xl leading-relaxed px-2 sm:px-0">
                        {t('why_visquanta.intro')}
                    </p>
                </motion.div>

                {/* Differentiators */}
                {/* Desktop Grid (hidden on mobile) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-16 sm:mb-20 lg:mb-24"
                >
                    {differentiators.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="group">
                                <div className="h-full bg-gradient-to-b from-[#111111] to-[#080808] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-[#ff7404]/30">
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

                {/* Mobile Accordion Cards */}
                <div className="sm:hidden mb-16">
                    <MobileDifferentiatorCards differentiators={differentiators} />
                </div>

                {/* Comparison Table - Premium Redesign */}
                {/* Mobile: Stacked Cards */}
                <div className="lg:hidden">
                    <MobileComparisonCards comparisons={comparisons} />
                </div>

                {/* Desktop: Full Table: PRESERVED EXACTLY */}
                <div className="relative group/table hidden lg:block">
                    {/* Glowing background behind the table */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ff7404]/10 to-transparent blur-3xl opacity-50 -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-black/60 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] overflow-hidden shadow-2xl"
                    >
                        {/* Table Header */}
                        <div className="grid grid-cols-4 gap-4 px-8 py-6 border-b border-white/[0.08] bg-white/[0.02]">
                            <div className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">Capability</div>
                            <div className="relative flex flex-col items-center justify-center">
                                <div className="text-base font-black text-[#ff7404] uppercase tracking-[0.15em]">VisQuanta</div>
                            </div>
                            <div className="text-xs font-bold text-white/20 uppercase tracking-[0.15em] text-center flex items-center justify-center">Traditional BDC</div>
                            <div className="text-xs font-bold text-white/20 uppercase tracking-[0.15em] text-center flex items-center justify-center">Generic AI</div>
                        </div>

                        {/* Table Content */}
                        <div className="divide-y divide-white/[0.04]">
                            {comparisons.map((row, i) => {
                                const isWeakTraditional = ['None', 'Not supported', 'Bot only'].includes(row.traditional);
                                const isWeakGeneric = ['None', 'Not supported', 'Bot only', 'Basic forms', ''].includes(row.generic);

                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="grid grid-cols-4 gap-4 px-8 py-5 hover:bg-white/[0.02] transition-colors relative group/row"
                                    >
                                        {/* VisQuanta Column Highlight Effect */}
                                        <div className="absolute top-0 bottom-0 left-[25%] right-[50%] bg-gradient-to-b from-[#ff7404]/[0.06] to-[#ff7404]/[0.02] border-x border-[#ff7404]/20 pointer-events-none" />

                                        {/* Feature Name */}
                                        <div className="flex items-center">
                                            <div className="text-sm lg:text-base font-bold text-white group-hover/row:text-[#ff7404] transition-colors">{row.feature}</div>
                                        </div>

                                        {/* VisQuanta Value */}
                                        <div className="relative flex items-center justify-center gap-3">
                                            <div className="w-5 h-5 rounded-full bg-[#ff7404] flex items-center justify-center shadow-lg shadow-[#ff7404]/30">
                                                <Check className="w-3 h-3 text-black" />
                                            </div>
                                            <div className="text-sm lg:text-base text-[#ff7404] font-bold tracking-tight text-center">{row.visquanta}</div>
                                        </div>

                                        {/* Traditional Value */}
                                        <div className="flex items-center justify-center gap-2">
                                            {isWeakTraditional ? (
                                                <>
                                                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                                                        <X className="w-3 h-3 text-red-500" />
                                                    </div>
                                                    <span className="text-sm text-white/20 font-medium">{row.traditional}</span>
                                                </>
                                            ) : (
                                                <span className="text-sm text-white/30 font-medium">{row.traditional}</span>
                                            )}
                                        </div>

                                        {/* Generic AI Value */}
                                        <div className="flex items-center justify-center gap-2">
                                            {isWeakGeneric ? (
                                                <>
                                                    <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center">
                                                        <X className="w-3 h-3 text-red-500" />
                                                    </div>
                                                    <span className="text-sm text-white/20 font-medium">{row.generic}</span>
                                                </>
                                            ) : (
                                                <span className="text-sm text-white/30 font-medium">{row.generic}</span>
                                            )}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Table Footer / Summary */}
                        <div className="px-8 py-5 bg-white/[0.02] border-t border-white/[0.06] text-center">
                            <div className="inline-flex items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
                                <span>Certified Integrations</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff7404]/50" />
                                <span>99.9% Uptime</span>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff7404]/50" />
                                <Link href="/trust" className="hover:text-[#ff7404] transition-colors underline-offset-4 hover:underline">Privacy & data handling</Link>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Copy */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 sm:mt-12 lg:mt-16 text-center max-w-2xl mx-auto"
                >
                    <p className="text-white/60 text-lg leading-relaxed">
                        The best dealerships don't choose between AI and humans. They use <strong className="text-white">both</strong>, with VisQuanta as the intelligent layer that makes everything work together.
                    </p>
                </motion.div>

            </div>

            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/20 to-transparent" />
        </section>
    );
}
