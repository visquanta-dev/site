'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Sliders } from 'lucide-react';

export default function ProfitCalculator() {
    const [leadVolume, setLeadVolume] = useState(750);
    const [profitPerCar, setProfitPerCar] = useState(2500);

    // Constants
    const leakRate = 0.78; // 78% of leads are typically ignored/lost
    const recoveryRate = 0.12; // Conservative AI recovery rate
    const closingRate = 0.20; // Closing rate on recovered leads

    const potentialLostRevenue = (leadVolume * leakRate * recoveryRate * closingRate * profitPerCar);

    return (
        <section className="py-24 bg-black relative">
            <div className="container-wide max-w-5xl mx-auto">

                {/* Header: The Confrontation */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
                        Quantify Your <span className="text-[#FF7404] underline decoration-[#FF7404]/30 underline-offset-8">Leakage</span>
                    </h2>
                    <p className="text-white/50 text-lg max-w-2xl mx-auto">
                        Every month, unsold leads vanish into your CRM "graveyard."
                        Calculate the exact monthly revenue you are forfeiting right now.
                    </p>
                </div>

                {/* The Control Panel Container */}
                <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] overflow-hidden relative shadow-[0_0_100px_-30px_rgba(255,116,4,0.15)]">
                    {/* Top Bar Decor */}
                    <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-50" />

                    <div className="grid lg:grid-cols-2">

                        {/* Left: Inputs (The Controls) */}
                        <div className="p-10 lg:p-12 space-y-12 bg-white/[0.02]">

                            {/* Input 1 */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        <Sliders className="w-4 h-4 text-[#FF7404]" />
                                        Monthly Lead Volume
                                    </label>
                                    <span className="text-2xl font-mono text-[#FF7404]">{leadVolume}</span>
                                </div>
                                <input
                                    type="range"
                                    min="100" max="5000" step="50"
                                    value={leadVolume}
                                    onChange={(e) => setLeadVolume(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF7404] hover:bg-white/20 transition-colors"
                                />
                                <div className="flex justify-between text-[10px] text-white/30 uppercase font-mono">
                                    <span>Low Volume</span>
                                    <span>High Volume</span>
                                </div>
                            </div>

                            {/* Input 2 */}
                            <div className="space-y-6">
                                <div className="flex justify-between items-end">
                                    <label className="text-white font-bold uppercase tracking-wider text-sm flex items-center gap-2">
                                        <DollarSign className="w-4 h-4 text-[#FF7404]" />
                                        Avg. Profit Per Unit
                                    </label>
                                    <span className="text-2xl font-mono text-[#FF7404]">${profitPerCar.toLocaleString()}</span>
                                </div>
                                <input
                                    type="range"
                                    min="1000" max="10000" step="100"
                                    value={profitPerCar}
                                    onChange={(e) => setProfitPerCar(Number(e.target.value))}
                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#FF7404] hover:bg-white/20 transition-colors"
                                />
                            </div>

                        </div>

                        {/* Right: Output (The Reality) */}
                        <div className="relative p-10 lg:p-12 bg-[#050505] flex flex-col justify-center items-center text-center border-t lg:border-t-0 lg:border-l border-white/5">
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                            <p className="text-[#FF7404] font-mono text-xs uppercase tracking-[0.2em] mb-4 animate-pulse">
                                ⚠️ Revenue At Risk Detected
                            </p>

                            <div className="relative mb-2">
                                <span className="text-5xl lg:text-7xl font-black text-white tracking-tighter">
                                    ${Math.floor(potentialLostRevenue).toLocaleString()}
                                </span>
                            </div>

                            <p className="text-white/40 text-sm font-medium">
                                Recoverable Monthly Gross Profit
                            </p>

                            <div className="mt-8 pt-8 border-t border-white/10 w-full grid grid-cols-2 gap-4">
                                <div>
                                    <div className="text-xl font-bold text-white">{(leadVolume * leakRate * recoveryRate * closingRate).toFixed(1)}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-[#FF7404]">Missed Deals</div>
                                </div>
                                <div>
                                    <div className="text-xl font-bold text-white">{(leadVolume * leakRate).toFixed(0)}</div>
                                    <div className="text-[10px] uppercase tracking-widest text-white/40">Leads Ignored</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
