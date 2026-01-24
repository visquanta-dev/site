'use client';

import { motion } from 'framer-motion';
import { Sparkles, History, Target, ShieldCheck } from 'lucide-react';

export default function AboutStorySection() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />

            {/* Schematic Background Element */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.02] pointer-events-none select-none mix-blend-screen invert hidden lg:block">
                <img
                    src="/assets/sports-car-wheel.png"
                    alt=""
                    className="w-full h-full object-contain object-right-bottom scale-125"
                />
            </div>

            <div className="container-wide relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Right-aligned content (actually left on desktop) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative group"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            {/* Decorative backgrounds */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-[#ff7404]/20 to-transparent blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="absolute inset-0 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                                {/* This would be a high-end photo of the team or office, using a placeholder gradient for now */}
                                <div className="w-full h-full bg-gradient-to-br from-[#1a1a1a] to-[#080808] flex items-center justify-center">
                                    <History className="w-20 h-20 text-white/5 opacity-20" />
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale opacity-40 mix-blend-overlay" />
                                </div>
                            </div>

                            {/* Floating Stat */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-[#ff7404] text-black shadow-2xl z-20"
                            >
                                <div className="text-3xl font-bold tracking-tighter">25+ Years</div>
                                <div className="text-xs font-bold uppercase tracking-wider opacity-70">Automotive Expertise</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
                            <Sparkles className="w-3 h-3" />
                            Our Story
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 tracking-tight">
                            Built by dealers <span className="text-[#ff7404]">for dealers.</span>
                        </h2>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
                            <p>
                                VisQuanta wasn't born in a generic Silicon Valley incubator. It was born on the showroom floor. We spent over a decade in the trenches of dealership operations, feeling the frustration of missed leads, inconsistent BDC performance, and the constant struggle to manage high-volume CRM data.
                            </p>
                            <p>
                                We realized that the problem wasn't a lack of tools: it was a lack of <strong className="text-white">intelligent automation</strong> that actually understood the automotive sales cycle.
                            </p>
                            <p>
                                Today, AutoMaster Suite is the culmination of that experience. We've combined deep industry knowledge with cutting-edge AI to create a system that doesn't just "chat": it sells. We're on a mission to help every dealership maximize their existing traffic and build an unbreakable sales engine.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                    <Target className="w-3 h-3 text-emerald-500" />
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1">Our Mission</div>
                                    <div className="text-sm text-white/40 leading-snug">To automate the repetitive so you can focus on the closing.</div>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 w-5 h-5 rounded-full bg-[#ff7404]/20 flex items-center justify-center flex-shrink-0">
                                    <ShieldCheck className="w-3 h-3 text-[#ff7404]" />
                                </div>
                                <div>
                                    <div className="text-white font-bold mb-1">Our Values</div>
                                    <div className="text-sm text-white/40 leading-snug">Data-driven performance, built with integrity and speed.</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
