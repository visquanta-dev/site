'use client';

import { motion } from 'framer-motion';
import { Users, PhoneOff, Database, TrendingDown, AlertCircle, ShieldAlert } from 'lucide-react';

const dealerPainPoints = [
    {
        icon: Database,
        stat: '84%',
        label: 'of CRM leads',
        detail: 'are never reactivated after 30 days',
        impact: 'Millions in latent revenue wasted.',
        color: 'text-[#ff7404]'
    },
    {
        icon: PhoneOff,
        stat: '1 in 4',
        label: 'service calls',
        detail: 'are missed or go to voicemail',
        impact: 'Directly losing $340+ per missed RO.',
        color: 'text-[#ff7404]'
    },
    {
        icon: Users,
        stat: '45%',
        label: 'BDC Turnover',
        detail: 'average annual staff churn rate',
        impact: 'Constant retraining & lost consistency.',
        color: 'text-orange-400'
    },
    {
        icon: TrendingDown,
        stat: '22 min',
        label: 'Avg. Response',
        detail: 'for new web leads on weekends',
        impact: 'Leads are sold by competitors in 5.',
        color: 'text-[#ff7404]'
    },
];

export default function PainPointSection() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background elements moved for clarity */}
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

            {/* Schematic Background Element */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03] pointer-events-none select-none mix-blend-screen invert hidden lg:block">
                <img
                    src="/assets/suv-wireframe.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: The "GM headache" Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
                            <ShieldAlert className="w-3 h-3" />
                            The Operations Reality
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
                            Your dealership is leaking <span className="text-[#ff7404]">hidden revenue</span> in every department.
                        </h2>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
                            <p>
                                As a GM, you know the numbers. But the daily reality is harder to track. While your team focuses on floor traffic, your <strong className="text-white">CRM is becoming a graveyard</strong> of thousands of leads that will never be called again.
                            </p>
                            <p>
                                In Service, your advisors are overwhelmed. Every missed call is a missed RO—and for an average dealer, that's <strong className="text-white">over $8,500 in lost revenue every single week</strong>.
                            </p>
                            <p>
                                You're fighting a losing battle against BDC turnover and lead response times that your competitors are already beating. It's not just "speed to lead"—it's a <strong className="text-white">total operational breakdown</strong> that costs you the unfair advantage you deserve.
                            </p>
                        </div>

                        <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-[#ff7404]/10 to-transparent border border-[#ff7404]/20 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <AlertCircle className="w-12 h-12 text-[#ff7404]" />
                            </div>
                            <p className="text-[#ff7404] font-bold text-xl mb-3">
                                "The cost of doing nothing is your highest expense."
                            </p>
                            <p className="text-white/50 text-base leading-relaxed">
                                If your system isn't capturing every call, mining every CRM lead, and responding in seconds—you're paying for it every single day in lost units and service ROs.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: The 4 Horsemen of Dealer Inefficiency */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
                    >
                        {dealerPainPoints.map((point, i) => {
                            const Icon = point.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="group"
                                >
                                    <div className="h-full bg-gradient-to-b from-[#111111] to-[#080808] border border-white/[0.08] rounded-2xl p-6 lg:p-8 transition-all duration-500 hover:border-[#ff7404]/30 hover:-translate-y-1">
                                        <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center ${point.color} mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div className="text-4xl font-bold text-white mb-2 tracking-tighter">{point.stat}</div>
                                        <div className="text-sm font-bold text-white/90 mb-3 uppercase tracking-wider">{point.label}</div>
                                        <div className="text-sm text-white/40 mb-4 font-medium italic">"{point.detail}"</div>
                                        <div className="pt-4 border-t border-white/5 text-xs font-bold text-[#ff7404]/80 uppercase tracking-widest">
                                            {point.impact}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
