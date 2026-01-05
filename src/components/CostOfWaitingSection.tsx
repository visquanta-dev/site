'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, Clock, ArrowRight } from 'lucide-react';
import ROICalculatorModal from './ROICalculatorModal';

export default function CostOfWaitingSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [monthlyLeads, setMonthlyLeads] = useState(120);

    // Quick Math for the teaser: Assumes $2400 gross and modest recovery
    const potentialLostRevenue = (monthlyLeads * 2400).toLocaleString();

    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left: Interactive Teaser Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 relative group overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7404]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#ff7404]/10 transition-colors duration-500" />

                            <div className="relative z-10 space-y-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404]">
                                        <Calculator className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg">Revenue Leakage Check</div>
                                        <div className="text-white/40 text-xs">Estimate your monthly opportunity cost</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Slider */}
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-end">
                                            <label htmlFor="cost-leads-slider" className="text-xs font-bold text-white/60 uppercase tracking-wider">Missed Leads / Month</label>
                                            <div className="text-2xl font-mono font-bold text-white">{monthlyLeads}</div>
                                        </div>
                                        <input
                                            id="cost-leads-slider"
                                            type="range"
                                            min="10"
                                            max="500"
                                            step="10"
                                            value={monthlyLeads}
                                            onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7404] hover:accent-[#ff8524] transition-all"
                                        />
                                    </div>

                                    {/* Result */}
                                    <div className="p-6 bg-white/5 border border-white/5 rounded-2xl">
                                        <div className="text-xs text-[#ff7404] font-bold uppercase tracking-widest mb-1">Potential Monthly Loss</div>
                                        <div className="text-4xl lg:text-5xl font-black text-white tracking-tight">
                                            ${potentialLostRevenue}
                                        </div>
                                        <div className="text-white/30 text-xs mt-2">*Based on avg dealership gross profit of $2,400/unit</div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    See Full Breakdown
                                    <ArrowRight className="w-4 h-4 text-white/50 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
                            <TrendingDown className="w-3 h-3" />
                            The Cost of Waiting
                        </div>

                        <h2 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                            Every day without AI is <span className="text-[#ff7404]">costing you money.</span>
                        </h2>

                        <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                            <p>
                                While you're evaluating options, your competitors are closing the deals you should be winning.
                            </p>
                            <p>
                                The math is simple: <strong className="text-white">faster response = more appointments = more sales</strong>.
                            </p>
                        </div>

                        <div className="mt-8 flex items-center gap-6">
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="inline-flex items-center justify-center gap-2 text-[#ff7404] font-bold hover:text-white transition-colors group"
                            >
                                <span className="border-b border-[#ff7404] group-hover:border-white pb-0.5">Calculate Your Exact ROI</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <ROICalculatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
