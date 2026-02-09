'use client';

import { motion } from 'framer-motion';
import { BadgeDollarSign } from 'lucide-react';
import Image from 'next/image';
import { useLocale } from '@/lib/i18n/LocaleProvider';

export default function WhatIsAIDealerships() {
    const { t } = useLocale();
    return (
        <section className="py-24 sm:py-32 bg-[#050505] relative overflow-hidden">
            {/* Premium Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#ff74041a,transparent)] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#ff7404]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />

            {/* Subtle Grid Overlay */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left: Definition/Narrative */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-8 shadow-inner shadow-white/5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7404] animate-pulse" />
                            {t('what_is_ai.badge')}
                        </div>

                        <h2
                            className="text-4xl sm:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]"
                            dangerouslySetInnerHTML={{ __html: t('what_is_ai.headline') }}
                        />


                        <div className="space-y-6 text-white/70 text-lg leading-relaxed font-light mb-8">
                            <p dangerouslySetInnerHTML={{ __html: t('what_is_ai.paragraph_1') }} />

                            <div>
                                <p className="text-white/70 text-lg leading-relaxed font-light" dangerouslySetInnerHTML={{ __html: t('what_is_ai.paragraph_2') }} />
                            </div>

                            <p className="pt-4 border-t border-white/10 italic text-white/60" dangerouslySetInnerHTML={{ __html: t('what_is_ai.paragraph_3') }} />
                        </div>
                    </motion.div>

                    {/* Right: The Financial Comparison Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="relative lg:sticky lg:top-24"
                    >
                        {/* Main Card with Depth */}
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl relative group">

                            {/* Header Badge */}
                            <div className="absolute top-8 right-8 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_-5px_rgba(16,185,129,0.3)]">
                                Audited Results
                            </div>

                            <div className="p-8 sm:p-12 pb-0">
                                <h3 className="text-white font-black text-3xl mb-2 tracking-tight">Operational Efficiency</h3>
                                <p className="text-white/40 text-sm font-medium mb-10">Monthly Output vs. Cost Analysis</p>

                                {/* Comparison Grid */}
                                <div className="grid grid-cols-2 gap-5 mb-10">
                                    {/* Human BDC - Refined Avatar */}
                                    <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col items-center text-center transition-colors hover:bg-white/[0.04]">
                                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-white/10 relative shadow-inner">
                                            <Image
                                                src="/testimonials/nick.png"
                                                alt="Human Agent"
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300 pointer-events-none"
                                            />
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-2">Human Agent</div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white/50 mb-2 font-mono">40<span className="text-sm font-sans font-medium text-white/20 ml-1">hrs/wk</span></div>
                                        <div className="px-3 py-1 rounded-full bg-white/5 text-[10px] text-white/30 font-bold uppercase tracking-wide">Limited Capacity</div>
                                    </div>

                                    {/* VisQuanta - Android Chrome Icon */}
                                    <div className="p-6 rounded-3xl bg-[#ff7404]/5 border border-[#ff7404]/20 flex flex-col items-center text-center relative overflow-hidden group/card shadow-[0_0_30px_-10px_rgba(255,116,4,0.15)]">
                                        {/* Glow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-[#ff7404]/10 to-transparent pointer-events-none opacity-50" />
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,116,4,0.2),transparent_70%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />

                                        {/* Adjusted Padding for Icon Look */}
                                        <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-4 border border-[#ff7404]/30 relative shadow-lg shadow-[#ff7404]/30 overflow-hidden">
                                            <Image
                                                src="/android-chrome-192x192.png"
                                                alt="VisQuanta AI"
                                                fill
                                                className="object-cover p-1"
                                            />
                                        </div>
                                        <div className="text-[10px] font-bold uppercase tracking-widest text-[#ff7404] mb-2 z-10">VisQuanta AI</div>
                                        <div className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono z-10">168<span className="text-sm font-sans font-medium text-white/40 ml-1">hrs/wk</span></div>
                                        <div className="px-3 py-1 rounded-full bg-[#ff7404]/20 border border-[#ff7404]/30 text-[10px] text-[#ff7404] font-bold uppercase tracking-wide z-10 shadow-[0_0_10px_-2px_rgba(255,116,4,0.3)]">Unlimited Scale</div>
                                    </div>
                                </div>
                            </div>

                            {/* The "Money Shot" Footer - Darker & Cleaner */}
                            <div className="bg-[#0f0f0f] border-t border-white/5 p-8 sm:p-12 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent pointer-events-none" />

                                <div className="relative flex items-center gap-6">
                                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_20px_-5px_rgba(16,185,129,0.2)]">
                                        <BadgeDollarSign className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-500/60 mb-2">Average Monthly Impact</div>
                                        <div className="text-4xl sm:text-5xl font-black text-white tracking-tighter leading-none mb-1">
                                            +$42,500 <span className="text-lg sm:text-xl font-medium text-white/30 tracking-normal">/ mo gross</span>
                                        </div>
                                        <p className="text-white/30 text-[10px] font-medium tracking-wide">
                                            *REVENUE RECOVERY + SERVICE ROs
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Cinematic Backlight */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-br from-[#ff7404]/10 to-emerald-500/10 rounded-[3rem] blur-3xl -z-10 opacity-60" />

                    </motion.div>

                </div>
            </div>
        </section>
    );
}
