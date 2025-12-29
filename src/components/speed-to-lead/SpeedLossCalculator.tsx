'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, TrendingUp, Zap, DollarSign, Calculator, ArrowRight, Clock } from 'lucide-react';

interface SpeedLossCalculatorProps {
    onOpenCalculator: () => void;
}

export default function SpeedLossCalculator({ onOpenCalculator }: SpeedLossCalculatorProps) {
    // Inline Mini Calculator State
    const [monthlyLeads, setMonthlyLeads] = useState(400);
    // Formula: Monthly Leads * 5% (net closing lift) * $2400 (avg gross)
    const potentialRevenue = Math.round(monthlyLeads * 0.05 * 2400);

    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden text-left">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-[10%] left-[-5%] w-[500px] h-[500px] bg-[#FF7404]/[0.03] rounded-full blur-[150px] pointer-events-none" />
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
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Ambient glow */}
                        <div className="absolute -inset-1 bg-gradient-to-b from-[#FF7404]/20 to-transparent rounded-[2rem] blur-xl opacity-20" />

                        <div className="relative bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/[0.08] rounded-3xl p-10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] z-10">
                            {/* Header */}
                            <div className="flex items-center gap-5 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center shadow-[inset_0_0_20px_rgba(255,116,4,0.1)]">
                                    <Calculator className="w-8 h-8 text-[#FF7404]" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-white font-bold text-xl tracking-wide">Speed Opportunity Check</h3>
                                    <p className="text-sm text-white/40">Estimate your monthly revenue lift</p>
                                </div>
                            </div>

                            {/* Slider Input */}
                            <div className="space-y-5 mb-12">
                                <div className="flex justify-between items-end">
                                    <label className="text-xs font-bold text-white/50 uppercase tracking-widest">Monthly Leads</label>
                                    <div className="text-3xl font-bold text-white font-mono tracking-tight">{monthlyLeads}</div>
                                </div>
                                <div className="relative h-6 flex items-center">
                                    <input
                                        type="range"
                                        min="50"
                                        max="1000"
                                        step="10"
                                        value={monthlyLeads}
                                        onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                                        className="w-full h-1.5 bg-white/[0.06] rounded-full appearance-none cursor-pointer focus:outline-none focus:ring-0 z-20 absolute inset-x-0"
                                        style={{
                                            background: `linear-gradient(to right, #FF7404 0%, #FF7404 ${((monthlyLeads - 50) / (1000 - 50)) * 100}%, rgba(255,255,255,0.06) ${((monthlyLeads - 50) / (1000 - 50)) * 100}%, rgba(255,255,255,0.06) 100%)`
                                        }}
                                    />
                                    {/* Custom thumb styling via CSS-in-JS */}
                                    <style jsx>{`
                                        input[type="range"]::-webkit-slider-thumb {
                                            appearance: none;
                                            width: 24px;
                                            height: 24px;
                                            border-radius: 50%;
                                            background: #FF7404;
                                            cursor: pointer;
                                            box-shadow: 0 0 20px rgba(255, 116, 4, 0.5), 0 0 0 4px rgba(255, 116, 4, 0.1);
                                            border: 2px solid white;
                                            transition: all 0.2s ease;
                                        }
                                        input[type="range"]::-webkit-slider-thumb:hover {
                                            transform: scale(1.1);
                                            box-shadow: 0 0 30px rgba(255, 116, 4, 0.6), 0 0 0 6px rgba(255, 116, 4, 0.1);
                                        }
                                        input[type="range"]::-moz-range-thumb {
                                            width: 24px;
                                            height: 24px;
                                            border-radius: 50%;
                                            background: #FF7404;
                                            cursor: pointer;
                                            box-shadow: 0 0 20px rgba(255, 116, 4, 0.5), 0 0 0 4px rgba(255, 116, 4, 0.1);
                                            border: 2px solid white;
                                            transition: all 0.2s ease;
                                        }
                                    `}</style>
                                </div>
                            </div>

                            {/* Output */}
                            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#000] border border-white/[0.08] rounded-2xl p-8 mb-8 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#FF7404]/[0.05] rounded-full blur-[60px] pointer-events-none group-hover:bg-[#FF7404]/[0.1] transition-colors duration-500" />
                                <div className="relative z-10">
                                    <div className="text-[10px] font-bold text-[#FF7404] uppercase tracking-[0.25em] mb-2">Potential Monthly Gain</div>
                                    <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
                                        +${potentialRevenue.toLocaleString()}
                                    </div>
                                    <p className="text-[11px] text-white/30 mt-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        Estimated lift from sub-60s response times
                                    </p>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                onClick={onOpenCalculator}
                                className="w-full flex items-center justify-center gap-3 py-5 bg-white/[0.03] border border-white/[0.06] rounded-xl text-white font-bold text-sm hover:bg-[#FF7404] hover:border-[#FF7404] hover:text-black hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)] transition-all duration-300 group"
                            >
                                Open Full Calculator
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right: The Cost of Waiting */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="space-y-10 lg:pt-10"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full">
                            <Zap className="w-3.5 h-3.5 text-[#FF7404]" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">The Speed Advantage</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                            Slow responses are{' '}
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                deal killers.
                            </span>
                        </h2>

                        <p className="text-xl text-white/40 leading-[1.8]">
                            There is a direct correlation between response time and closing ratio. When you wait, interest fades and competitors step in.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Response under 1 min", value: "391% Increase in Conversion", color: "text-green-500" },
                                { label: "Response after 30 mins", value: "21x Decrease in Qualification", color: "text-red-500" },
                            ].map((stat, i) => (
                                <div key={i} className="flex flex-col gap-1">
                                    <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">{stat.label}</span>
                                    <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                                </div>
                            ))}
                        </div>

                        <button
                            onClick={onOpenCalculator}
                            className="flex items-center gap-3 text-[#FF7404] font-semibold text-sm tracking-wide group mt-4"
                        >
                            Calculate Your Speed ROI
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
                        <Clock className="w-3.5 h-3.5 text-[#FF7404]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">Time is Money</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        Calculate the Cost of <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">Inaction.</span>
                    </h2>

                    <p className="text-xl text-white/40 leading-[1.8] max-w-2xl">
                        Most dealerships don't realize how much revenue slips through the cracks simply because a lead wasn't worked fast enough or persistent enough.
                    </p>
                </motion.div>

                {/* Risk Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        {
                            title: "The 5-Minute Rule",
                            desc: "Odds of Qualifying a lead drop by 80% if you wait just 5 minutes. Speed isn't a bonus, it's a requirement.",
                            icon: Timer,
                            color: "text-red-400/60",
                            borderHover: "hover:border-red-500/20"
                        },
                        {
                            title: "First to Call Wins",
                            desc: "78% of customers buy from the company that responds to their inquiry first. Being second is being last.",
                            icon: TrendingUp,
                            color: "text-[#FF7404]",
                            borderHover: "hover:border-[#FF7404]/20"
                        },
                        {
                            title: "The Weekend Gap",
                            desc: "Leads that come in on Saturday night often sit until Monday morning. By then, they've bought elsewhere.",
                            icon: Clock,
                            color: "text-[#FF7404]",
                            borderHover: "hover:border-[#FF7404]/20"
                        },
                        {
                            title: "Revenue Lift",
                            desc: "Improving response time to under 1 minute can increase lead conversion per sales rep by up to 50%.",
                            icon: DollarSign,
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
                            className={`group p-8 bg-gradient-to-b from-[#0a0a0a] to-[#0d0d0d] border border-white/[0.06] rounded-3xl hover:border-white/[0.1] ${item.borderHover} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden`}
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

                            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center mb-6 group-hover:bg-white/[0.06] transition-colors duration-500 shadow-inner border border-white/[0.04]">
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-3 tracking-tight">{item.title}</h4>
                            <p className="text-sm text-white/40 leading-relaxed font-medium">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
