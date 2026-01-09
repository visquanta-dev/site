'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Users, PhoneOff, Database, TrendingDown, AlertCircle, ShieldAlert, ArrowRight } from 'lucide-react';
import ROICalculatorModal from './ROICalculatorModal';
import MobilePainPointCarousel from './mobile/MobilePainPointCarousel';

const dealerPainPoints = [
    {
        icon: Database,
        stat: '84%',
        label: 'of CRM leads',
        detail: 'are never re-engaged after 30 days',
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
    const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yBlob = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const yWireframe = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <section ref={sectionRef} className="py-32 bg-[#050505] relative overflow-hidden max-w-[100vw] overflow-x-hidden box-border">
            {/* Background elements moved for clarity */}
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
            <motion.div
                style={{ y: yBlob }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none"
            />

            {/* Schematic Background Element */}
            <motion.div
                style={{ y: yWireframe }}
                className="absolute -right-20 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.03] pointer-events-none select-none mix-blend-screen invert hidden lg:block"
            >
                <img
                    src="/assets/suv-wireframe.png"
                    alt=""
                    className="w-full h-full object-contain"
                />
            </motion.div>

            <div className="container-wide relative z-10 px-5 sm:px-6 md:px-0 w-full max-w-[100vw]">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center w-full">

                    {/* Left: The "GM headache" Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full min-w-0 break-words"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6 select-none max-w-full">
                            <ShieldAlert className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">The Operations Reality</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-[1.2] break-words w-full">
                            Most dealerships don’t realise how much <span className="text-[#ff7404] inline-block">revenue is being left behind</span> day-to-day.
                        </h2>

                        <div className="space-y-6 text-white/70 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 w-full break-words">
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

                        <div className="mt-8 sm:mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#ff7404]/10 to-transparent border border-[#ff7404]/20 relative group overflow-hidden w-full">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <AlertCircle className="w-12 h-12 text-[#ff7404]" />
                            </div>
                            <p className="text-[#ff7404] font-bold text-lg sm:text-xl mb-3 pr-8 break-words">
                                "The cost of doing nothing is your highest expense."
                            </p>
                            <p className="text-white/50 text-sm sm:text-base leading-relaxed break-words">
                                If your system isn't capturing every call, mining every CRM lead, and responding in seconds—you're paying for it every single day in lost units and service ROs.
                            </p>
                        </div>


                    </motion.div>

                    {/* Right: The 4 Horsemen of Dealer Inefficiency */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-6 w-full min-w-0"
                    >
                        {/* Desktop Grid (hidden on mobile) */}
                        <div className="hidden sm:grid grid-cols-2 gap-4 lg:gap-6">
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
                        </div>

                        {/* Mobile Carousel (visible only on mobile) */}
                        <div className="sm:hidden">
                            <MobilePainPointCarousel painPoints={dealerPainPoints} />
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => setIsCalculatorOpen(true)}
                                className="w-full py-5 rounded-xl bg-[#ff7404] hover:bg-[#ff8524] text-black font-black text-sm uppercase tracking-widest transition-all hover:scale-[1.02] shadow-[0_0_30px_-10px_rgba(255,116,4,0.4)] flex items-center justify-center gap-3 group"
                            >
                                See What This Looks Like in Your Dealership
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>

            <ROICalculatorModal
                isOpen={isCalculatorOpen}
                onClose={() => setIsCalculatorOpen(false)}
            />
        </section>
    );
}
