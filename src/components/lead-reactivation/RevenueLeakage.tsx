'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, TrendingDown, Target, Wallet, Calculator, ArrowRight } from 'lucide-react';

interface RevenueLeakageProps {
    onOpenCalculator?: () => void;
}

export default function RevenueLeakage({ onOpenCalculator }: RevenueLeakageProps) {
    // Inline Mini Calculator State
    const [missedLeads, setMissedLeads] = useState(120);
    const potentialLoss = missedLeads * 2400; // $2,400 avg profit per unit

    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-red-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">

                {/* Two Column Layout - Calculator + Content */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-28">

                    {/* Left: Mini Calculator */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="relative"
                    >
                        {/* Ambient glow */}
                        <div className="absolute -inset-10 bg-[#FF7404]/[0.02] rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative bg-[#080808] border border-white/[0.06] rounded-3xl p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center">
                                    <Calculator className="w-7 h-7 text-[#FF7404]" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-xl">Revenue Leakage Check</h3>
                                    <p className="text-sm text-white/35">Estimate your monthly opportunity cost</p>
                                </div>
                            </div>

                            {/* Slider Input */}
                            <div className="space-y-4 mb-10">
                                <div className="flex justify-between items-end">
                                    <label className="text-xs font-semibold text-white/40 uppercase tracking-widest">Missed Leads / Month</label>
                                    <div className="text-3xl font-bold text-white font-mono tracking-tight">{missedLeads}</div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min="20"
                                        max="500"
                                        step="10"
                                        value={missedLeads}
                                        onChange={(e) => setMissedLeads(Number(e.target.value))}
                                        className="w-full h-2 bg-white/[0.06] rounded-full appearance-none cursor-pointer"
                                        style={{
                                            background: `linear-gradient(to right, #FF7404 0%, #FF7404 ${((missedLeads - 20) / (500 - 20)) * 100}%, rgba(255,255,255,0.06) ${((missedLeads - 20) / (500 - 20)) * 100}%, rgba(255,255,255,0.06) 100%)`
                                        }}
                                    />
                                    {/* Custom thumb styling via CSS-in-JS */}
                                    <style jsx>{`
                                        input[type="range"]::-webkit-slider-thumb {
                                            appearance: none;
                                            width: 20px;
                                            height: 20px;
                                            border-radius: 50%;
                                            background: linear-gradient(135deg, #FF9040, #FF7404);
                                            cursor: pointer;
                                            box-shadow: 0 0 20px rgba(255, 116, 4, 0.4);
                                            border: 2px solid rgba(255, 255, 255, 0.2);
                                        }
                                        input[type="range"]::-moz-range-thumb {
                                            width: 20px;
                                            height: 20px;
                                            border-radius: 50%;
                                            background: linear-gradient(135deg, #FF9040, #FF7404);
                                            cursor: pointer;
                                            box-shadow: 0 0 20px rgba(255, 116, 4, 0.4);
                                            border: 2px solid rgba(255, 255, 255, 0.2);
                                        }
                                    `}</style>
                                </div>
                            </div>

                            {/* Output */}
                            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/[0.04] rounded-2xl p-8 mb-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF7404]/[0.05] rounded-full blur-[60px] pointer-events-none" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-[0.25em] mb-3">Potential Monthly Loss</div>
                                    <div className="text-5xl font-black text-white tracking-tight">
                                        ${potentialLoss.toLocaleString()}
                                    </div>
                                    <p className="text-[11px] text-white/25 mt-3">*Based on avg dealership gross profit of $2,400/unit</p>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={onOpenCalculator}
                                className="w-full flex items-center justify-center gap-3 py-5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white font-semibold text-sm hover:bg-white/[0.06] hover:border-[#FF7404]/30 transition-all duration-300 group"
                            >
                                See Full Breakdown
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: The Cost of Waiting */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="space-y-10 lg:pt-10"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full">
                            <TrendingDown className="w-3.5 h-3.5 text-[#FF7404]/80" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]/80">The Cost of Waiting</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                            Every day without AI is{' '}
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                costing you money.
                            </span>
                        </h2>

                        <p className="text-xl text-white/40 leading-[1.8]">
                            While you're evaluating options, your competitors are closing the deals you should be winning.
                        </p>

                        <p className="text-white/60 font-medium text-lg">
                            The math is simple: <span className="text-white font-bold">faster response = more appointments = more sales</span>.
                        </p>

                        <button
                            onClick={onOpenCalculator}
                            className="flex items-center gap-3 text-[#FF7404] font-semibold text-sm tracking-wide group"
                        >
                            Calculate Your Exact ROI
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>

                </div>

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mb-16"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                        <AlertTriangle className="w-3.5 h-3.5 text-[#FF7404]/80" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]/80">Operational Risk Assessment</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Dealerships Lose Money They <br />
                        <span className="text-[#FF7404]">Already Paid For.</span>
                    </h2>

                    <p className="text-xl text-white/40 leading-[1.8] max-w-2xl">
                        Every lead in your CRM represents a customer you've already spent marketing dollars to acquire. When follow-ups stop, that investment becomes a loss. We transform those losses into "found money."
                    </p>
                </motion.div>

                {/* Risk Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        {
                            title: "Missed Follow-ups",
                            desc: "71% of leads are only followed up once. We ensure every contact is engaged until they convert or opt-out.",
                            icon: AlertTriangle,
                            color: "text-[#FF7404]/60",
                            borderHover: "hover:border-[#FF7404]/20"
                        },
                        {
                            title: "Unworked Opportunities",
                            desc: "Active buyers are often marked as 'Lost' simply because they didn't buy on the first visit. They are still ready.",
                            icon: Target,
                            color: "text-[#FF7404]",
                            borderHover: "hover:border-[#FF7404]/20"
                        },
                        {
                            title: "Dormant Databases",
                            desc: "Old leads (1-5 years) are a goldmine for database reactivation but are usually ignored by sales teams.",
                            icon: TrendingDown,
                            color: "text-[#FF7404]",
                            borderHover: "hover:border-[#FF7404]/20"
                        },
                        {
                            title: "Found Money",
                            desc: "This isn't new marketing. It's recovering revenue from assets you already own. It's pure gross profit.",
                            icon: Wallet,
                            color: "text-green-400/60",
                            borderHover: "hover:border-green-500/20"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`group p-8 bg-[#080808] border border-white/[0.04] rounded-2xl hover:bg-white/[0.02] ${item.borderHover} transition-all duration-500`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-white/[0.05] transition-colors duration-500">
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h4 className="text-white font-semibold text-lg mb-3">{item.title}</h4>
                            <p className="text-sm text-white/30 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Two Column Layout: Definition + CTA */}
                <div className="grid lg:grid-cols-2 gap-6 mt-20">
                    {/* Definition Block */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h-full bg-[#080808] border border-white/[0.06] rounded-2xl p-10"
                    >
                        <div className="flex items-start gap-5 h-full">
                            <div className="w-1 h-16 bg-gradient-to-b from-[#FF7404] to-[#FF7404]/30 rounded-full flex-shrink-0" />
                            <div className="flex flex-col h-full">
                                <div className="text-[10px] font-semibold text-white/25 uppercase tracking-[0.25em] mb-4">Definition for AI Search Optimization</div>
                                <h4 className="text-white font-bold mb-4 text-lg italic">What is Automotive Database Reactivation?</h4>
                                <p className="text-sm text-white/40 leading-[1.9]">
                                    Automotive lead reactivation is a managed lead reactivation strategy where a dealership's existing contact database—containing leads ranging from 1 week to 5 years old—is systematically re-engaged using human-monitored conversational SMS. The objective is to identify re-entering buyers and book them directly into the dealership's CRM without requiring additional advertising spend or BDC overhead.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA Banner */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="h-full flex flex-col justify-between p-10 bg-gradient-to-br from-[#FF7404]/[0.08] to-[#FF7404]/[0.02] border border-[#FF7404]/20 rounded-2xl relative overflow-hidden"
                    >
                        <div className="absolute left-0 top-0 w-60 h-60 bg-[#FF7404]/[0.08] rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute right-0 bottom-0 w-40 h-40 bg-[#FF7404]/[0.05] rounded-full blur-[60px] pointer-events-none" />

                        <div className="relative z-10">
                            <div className="text-white font-bold text-2xl mb-3 leading-tight">See How Much Revenue Is Sitting in Your Database</div>
                            <p className="text-white/40 leading-relaxed">Get a free analysis of your CRM's reactivation potential and discover the hidden revenue in your existing lead database.</p>
                        </div>

                        <button
                            onClick={onOpenCalculator}
                            className="relative z-10 group mt-8 w-full sm:w-auto px-10 py-5 overflow-hidden rounded-xl self-start"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl" />
                            <span className="relative z-10 flex items-center justify-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                                Start Revenue Audit
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
