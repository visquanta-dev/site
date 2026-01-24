'use client';

import { motion } from 'framer-motion';
import { PhoneOff, ArrowRight, TrendingDown, Scissors } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

interface OpportunityCheckProps {
    onOpenCalculator?: () => void;
}

export default function OpportunityCheck({ onOpenCalculator }: OpportunityCheckProps) {
    const [dailyMissedCalls, setDailyMissedCalls] = useState(15);

    // Logic: 
    // - 25% of missed calls would have booked if answered
    // - $450 average RO
    const monthlyMissedDeals = Math.floor(dailyMissedCalls * 30 * 0.25);
    const monthlyLostRevenue = monthlyMissedDeals * 450;

    return (
        <section className="relative py-24 bg-[#050505] overflow-hidden border-y border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">

                        {/* Left: Diagnostic Content */}
                        <div className="lg:col-span-7 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest"
                            >
                                Service Drive Diagnostic
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase"
                            >
                                How many service calls <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d]">
                                    did you miss yesterday?
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-zinc-400 max-w-xl leading-relaxed font-medium"
                            >
                                The average service department misses <span className="text-white font-bold">20% to 40% of inbound calls.</span> Every ring that goes to voicemail is a customer calling your competitor for an oil change or brake job.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid sm:grid-cols-2 gap-6"
                            >
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                                    <div className="flex items-center gap-2 text-[#FF7404]">
                                        <PhoneOff className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Fixed Ops Leak</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                                        &quot;80% of callers won&apos;t leave a voicemail. They just hang up and call the next store.&quot;
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                                    <div className="flex items-center gap-2 text-[#FF7404]">
                                        <Scissors className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Hold Time Decay</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                                        &quot;Customer satisfaction drops by 50% for every 30 seconds spent on hold.&quot;
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: The Check Tool */}
                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
                            >
                                {/* Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF7404]/[0.05] rounded-full blur-[60px] pointer-events-none" />

                                <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-3 uppercase tracking-tighter">
                                    <span className="w-8 h-8 rounded-lg bg-[#FF7404]/10 flex items-center justify-center">
                                        <TrendingDown className="w-4 h-4 text-[#FF7404]" />
                                    </span>
                                    Missed Call Audit
                                </h3>

                                <div className="space-y-8">
                                    {/* Slider */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Est. Missed Calls / Day</label>
                                            <span className="text-2xl font-black text-white font-mono">{dailyMissedCalls}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="5"
                                            max="50"
                                            step="1"
                                            value={dailyMissedCalls}
                                            onChange={(e) => setDailyMissedCalls(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#FF7404]"
                                        />
                                    </div>

                                    {/* Projection Block */}
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                                        <div>
                                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Lost Repair Orders / Mo</div>
                                            <div className="text-3xl font-black text-white">{monthlyMissedDeals} ROs</div>
                                        </div>
                                        <div className="pt-4 border-t border-white/5">
                                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-1">Monthly Revenue Leakage</div>
                                            <div className="text-4xl font-black text-white tracking-tighter">${monthlyLostRevenue.toLocaleString()}</div>
                                        </div>
                                    </div>

                                    <Link
                                        href="/book-demo"
                                        className="w-full py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_-5px_rgba(255,116,4,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(255,116,4,0.5)] flex items-center justify-center gap-2"
                                    >
                                        Run Free Diagnostic
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
