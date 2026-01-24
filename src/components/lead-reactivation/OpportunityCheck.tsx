'use client';

import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, Database, TrendingDown, DollarSign } from 'lucide-react';
import { useState } from 'react';

interface OpportunityCheckProps {
    onOpenCalculator?: () => void;
}

export default function OpportunityCheck({ onOpenCalculator }: OpportunityCheckProps) {
    const [crmSize, setCrmSize] = useState(5000);

    // Logic: 
    // - 40% are usually 'dead' but reachable
    // - 2% conversion rate on reactivation
    // - $2,400 avg profit
    const missedDeals = Math.floor(crmSize * 0.4 * 0.02);
    const lostRevenue = missedDeals * 2400;

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
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-bold uppercase tracking-widest"
                            >
                                <AlertCircle className="w-3 h-3" />
                                Critical Revenue Diagnosis
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase"
                            >
                                Your CRM isn&apos;t a database. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-[#FF7404]">
                                    It&apos;s a Graveyard.
                                </span>
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-lg text-zinc-400 max-w-xl leading-relaxed font-medium"
                            >
                                Every lead marked &quot;Lost&quot; or &quot;Unresponsive&quot; is marketing dollars you already spent and never recovered. The average dealership is sitting on <span className="text-white font-bold">tens of thousands in unmined gross profit.</span>
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
                                        <TrendingDown className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Industry Reality</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                                        &quot;71% of leads are dropped after just one follow-up attempt by sales teams.&quot;
                                    </p>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                                    <div className="flex items-center gap-2 text-green-500">
                                        <Database className="w-4 h-4" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Conversion Gap</span>
                                    </div>
                                    <p className="text-xs text-zinc-500 leading-relaxed italic">
                                        &quot;40% of &apos;dead&apos; leads are still in the market and will buy within the next 90 days.&quot;
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
                                        <DollarSign className="w-4 h-4 text-[#FF7404]" />
                                    </span>
                                    Run The Revenue Check
                                </h3>

                                <div className="space-y-8">
                                    {/* Slider */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">Total &quot;Dead&quot; Leads in CRM</label>
                                            <span className="text-2xl font-black text-white font-mono">{crmSize.toLocaleString()}</span>
                                        </div>
                                        <input
                                            type="range"
                                            min="1000"
                                            max="50000"
                                            step="500"
                                            value={crmSize}
                                            onChange={(e) => setCrmSize(parseInt(e.target.value))}
                                            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#FF7404]"
                                        />
                                    </div>

                                    {/* Projection Block */}
                                    <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 space-y-4">
                                        <div>
                                            <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Estimated Found Deals</div>
                                            <div className="text-3xl font-black text-white">{missedDeals} Units</div>
                                        </div>
                                        <div className="pt-4 border-t border-white/5">
                                            <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-widest mb-1">Projected Gross Profit Recovery</div>
                                            <div className="text-4xl font-black text-white tracking-tighter">${lostRevenue.toLocaleString()}</div>
                                        </div>
                                    </div>

                                    <button
                                        onClick={onOpenCalculator}
                                        className="w-full py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-sm uppercase tracking-widest rounded-xl transition-all shadow-[0_10px_30px_-5px_rgba(255,116,4,0.3)] hover:shadow-[0_15px_40px_-5px_rgba(255,116,4,0.5)] flex items-center justify-center gap-2"
                                    >
                                        Audit My Database
                                        <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
