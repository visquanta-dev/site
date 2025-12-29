'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Users, DollarSign, TrendingUp, Zap, ArrowRight, Check } from 'lucide-react';

export default function IndependentCalculator() {
    const [leads, setLeads] = useState(150);
    const [staff, setStaff] = useState(3);

    // Independent Dealer Metrics (Conservative)
    const AVG_GROSS = 2200;
    const RECOVERY_RATE = 0.08; // 8% of missed leads recovered
    const HUMAN_CAPACITY = 100; // Leads per person effective max
    const STAFF_COST = 3500; // Monthly cost per BDC/Sales assistant

    // Calculations
    const recoveredDeals = Math.floor(leads * RECOVERY_RATE);
    const revenueLift = recoveredDeals * AVG_GROSS;

    // Efficiency: How many staff would you need to handle these leads 24/7 vs Human capacity?
    // 24/7 coverage usually requires 3 shifts. AutoMaster covers the "After Hours" gap.
    // We'll quantify "Time Saved" as 2 hours per day per rep.
    const hoursSavedPerMonth = staff * 2 * 22; // 2 hrs * 22 days
    const overheadEquivalent = Math.round(hoursSavedPerMonth * 25); // $25/hr value

    const totalImpact = revenueLift + overheadEquivalent;

    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="calculator">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Input Section */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest"
                            >
                                <Calculator className="w-3 h-3" />
                                Efficiency Engine
                            </motion.div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1]">
                                Calculate Your <br />
                                <span className="text-[#FF7404]">True Potential.</span>
                            </h2>
                            <p className="text-white/40 text-lg max-w-md">
                                See how much revenue and time you're leaving on the table. Independent dealers win on efficiency.
                            </p>
                        </div>

                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm space-y-10">
                            {/* Slider 1: Monthly Leads */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-white/70 font-medium flex items-center gap-2">
                                        <Users className="w-4 h-4 text-[#FF7404]" />
                                        Monthly Leads
                                    </label>
                                    <div className="text-2xl font-bold text-white font-mono">{leads}</div>
                                </div>
                                <input
                                    type="range"
                                    min="50"
                                    max="500"
                                    step="10"
                                    value={leads}
                                    onChange={(e) => setLeads(Number(e.target.value))}
                                    className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#FF7404]"
                                />
                                <div className="flex justify-between text-xs text-white/20 font-medium uppercase tracking-wider">
                                    <span>50</span>
                                    <span>500+</span>
                                </div>
                            </div>

                            {/* Slider 2: Sales Staff */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-white/70 font-medium flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-[#FF7404]" />
                                        Sales Staff
                                    </label>
                                    <div className="text-2xl font-bold text-white font-mono">{staff}</div>
                                </div>
                                <input
                                    type="range"
                                    min="1"
                                    max="15"
                                    step="1"
                                    value={staff}
                                    onChange={(e) => setStaff(Number(e.target.value))}
                                    className="w-full h-2 bg-black/50 rounded-lg appearance-none cursor-pointer accent-[#FF7404]"
                                />
                                <div className="flex justify-between text-xs text-white/20 font-medium uppercase tracking-wider">
                                    <span>1 Rep</span>
                                    <span>15 Reps</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/20 to-transparent blur-3xl opacity-20" />

                        <div className="relative bg-[#0F0F0F] border border-white/10 rounded-[2rem] p-10 lg:p-12 shadow-2xl overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-[#FF7404]/10 transition-colors duration-700" />

                            <div className="relative z-10 space-y-12">
                                <div className="space-y-2">
                                    <div className="text-white/40 font-medium uppercase tracking-widest text-sm">Projected Monthly Impact</div>
                                    <motion.div
                                        key={totalImpact}
                                        initial={{ filter: "blur(10px)", opacity: 0 }}
                                        animate={{ filter: "blur(0px)", opacity: 1 }}
                                        className="text-6xl lg:text-7xl font-bold text-white tracking-tighter"
                                    >
                                        ${totalImpact.toLocaleString()}
                                    </motion.div>
                                    <div className="flex items-center gap-2 text-[#FF7404] text-sm font-bold bg-[#FF7404]/10 w-fit px-3 py-1 rounded-lg">
                                        <TrendingUp className="w-4 h-4" />
                                        +34% Efficiency Boost
                                    </div>
                                </div>

                                <div className="space-y-4 pt-8 border-t border-white/10">
                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                                                <DollarSign className="w-5 h-5 text-green-500" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Revenue Recovered</div>
                                                <div className="text-xs text-white/40">From lost lead reactivation</div>
                                            </div>
                                        </div>
                                        <div className="text-xl font-bold text-white font-mono">+${revenueLift.toLocaleString()}</div>
                                    </div>

                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-[#ff7404]/10 flex items-center justify-center border border-[#ff7404]/20">
                                                <Zap className="w-5 h-5 text-[#ff7404]" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold">Overhead Saved</div>
                                                <div className="text-xs text-white/40">Equivalent staff hours saved</div>
                                            </div>
                                        </div>
                                        <div className="text-xl font-bold text-white font-mono">+${overheadEquivalent.toLocaleString()}</div>
                                    </div>
                                </div>

                                <button className="w-full py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold text-lg rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)]">
                                    Unlock These Results
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>

                                <p className="text-center text-xs text-white/30">
                                    Estimates based on average independent dealer performance metrics (8% recapture rate, $2.2k gross).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
