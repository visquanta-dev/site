'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Car, DollarSign, ArrowRight, Quote } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedCaseStudySection() {
    return (
        <section className="py-32 bg-[#080808] relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/30 to-transparent" />

            <div className="container-wide relative z-10">
                <div className="bg-gradient-to-br from-[#111111] to-[#050505] border border-white/[0.08] rounded-[2rem] overflow-hidden">
                    <div className="flex flex-col lg:flex-row">

                        {/* Left: Content */}
                        <div className="lg:w-[60%] p-8 lg:p-16">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8">
                                <TrendingUp className="w-3 h-3" />
                                Featured Results
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                                How Seth Wadley Auto Group <span className="text-[#ff7404]">recovered $47K</span> in 60 days.
                            </h2>

                            <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
                                Struggling with lead response times and missed opportunities on service calls, Seth Wadley implemented the full AutoMaster Suite. Within two months, the results were undeniable.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-3 text-emerald-400 mb-2">
                                        <DollarSign className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Revenue Captured</span>
                                    </div>
                                    <div className="text-3xl font-bold text-white">$47,000</div>
                                    <div className="text-xs text-white/30 uppercase tracking-tighter mt-1">First 60 Days</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-3 text-emerald-400 mb-2">
                                        <Car className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">Extra Units sold</span>
                                    </div>
                                    <div className="text-3xl font-bold text-white">12</div>
                                    <div className="text-xs text-white/30 uppercase tracking-tighter mt-1">Directly attributed</div>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                                    <div className="flex items-center gap-3 text-emerald-400 mb-2">
                                        <TrendingUp className="w-4 h-4" />
                                        <span className="text-xs font-bold uppercase tracking-wider">ROI Achieved</span>
                                    </div>
                                    <div className="text-3xl font-bold text-white">9x</div>
                                    <div className="text-xs text-white/30 uppercase tracking-tighter mt-1">Return on spend</div>
                                </div>
                            </div>

                            <div className="relative p-8 rounded-2xl bg-[#ff7404]/5 border border-[#ff7404]/10 mb-10">
                                <Quote className="absolute top-4 left-4 w-10 h-10 text-[#ff7404]/10" />
                                <p className="text-white/80 italic text-xl leading-relaxed relative z-10 pl-8">
                                    "The ROI was obvious within the first month. VisQuanta didn't just fix our lead response—it reactivated our entire CRM and stabilized our service drive. It's the only system that covers the entire store."
                                </p>
                                <div className="mt-6 pl-8 flex items-center gap-4">
                                    <div className="font-bold text-white">Michael Rodriguez</div>
                                    <div className="text-white/40 text-sm">Operations Manager, Seth Wadley Auto Group</div>
                                </div>
                            </div>

                            <Link
                                href="/case-studies/seth-wadley"
                                className="inline-flex items-center gap-2 text-[#ff7404] font-bold hover:text-white transition-colors group"
                            >
                                Read Full Case Study
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Right: Visual Section */}
                        <div className="lg:w-[40%] bg-gradient-to-br from-[#1a1a1a] to-[#080808] relative min-h-[400px]">
                            <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />

                            {/* Floating Overlay Card */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] p-8 rounded-3xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
                            >
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                        <div className="w-3 h-3 rounded-full bg-green-500" />
                                    </div>
                                    <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest">Performance Live</div>
                                </div>

                                <div className="space-y-6">
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '85%' }}
                                            transition={{ duration: 1.5 }}
                                            className="h-full bg-emerald-500"
                                        />
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '92%' }}
                                            transition={{ duration: 1.5, delay: 0.2 }}
                                            className="h-full bg-[#ff7404]"
                                        />
                                    </div>
                                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '74%' }}
                                            transition={{ duration: 1.5, delay: 0.4 }}
                                            className="h-full bg-[#ff7404]"
                                        />
                                    </div>
                                </div>

                                <div className="mt-10 pt-8 border-t border-white/5 text-center">
                                    <div className="text-4xl font-bold text-white mb-1 tracking-tighter">892</div>
                                    <div className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Appointments Booked</div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
