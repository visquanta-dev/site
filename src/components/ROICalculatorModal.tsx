'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Database, Zap, RefreshCcw } from 'lucide-react';
import Link from 'next/link';

interface ROICalculatorModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: CalculatorMode;
}

type CalculatorMode = 'reactivation' | 'speedToLead';

export default function ROICalculatorModal({ isOpen, onClose, initialMode = 'reactivation' }: ROICalculatorModalProps) {
    const [mode, setMode] = useState<CalculatorMode>(initialMode);

    // Update mode when initialMode changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
        }
    }, [isOpen, initialMode]);

    // Reactivation State
    const [coldLeads, setColdLeads] = useState(1650);
    const [reactivationGross, setReactivationGross] = useState(4800);

    // Speed to Lead State
    const [monthlyLeads, setMonthlyLeads] = useState(3500);
    const [speedGross, setSpeedGross] = useState(4800);

    // Calculations
    const reactivationRecovery = Math.round(coldLeads * 0.07 * reactivationGross); // 7% rate

    // Speed to Lead: 0.35% conversion lift * 12 months
    const speedRecovery = Math.round(monthlyLeads * 0.0035 * speedGross * 12);

    // Prevent scrolling
    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const modalRef = useRef<HTMLDivElement>(null);

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4"
                    >
                        <motion.div
                            ref={modalRef}
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row max-h-[90vh] md:max-h-none md:h-[600px]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors z-50 bg-white/5 rounded-full hover:bg-white/10 md:hidden"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Sidebar / Mode Switcher */}
                            <div className="w-full md:w-1/3 bg-[#111] p-4 md:p-8 flex flex-col gap-4 md:gap-6 border-b md:border-b-0 md:border-r border-white/5 relative">
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent md:hidden" />

                                {/* Header - Compact on mobile */}
                                <div className="flex items-center justify-between md:block">
                                    <div>
                                        <h3 className="text-lg md:text-xl font-bold text-white mb-0.5 md:mb-1">Profit Calculator</h3>
                                        <p className="text-white/40 text-[11px] md:text-xs hidden md:block">Uncover your dealership's hidden revenue potential.</p>
                                    </div>
                                </div>

                                {/* Mobile: Compact Pill Tabs */}
                                <div className="flex gap-2 md:hidden">
                                    <button
                                        onClick={() => setMode('reactivation')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${mode === 'reactivation'
                                            ? 'bg-[#ff7404] text-black shadow-lg shadow-[#ff7404]/20'
                                            : 'bg-white/5 text-white/60 border border-white/10'
                                            }`}
                                    >
                                        <RefreshCcw className="w-4 h-4" />
                                        <span>Reactivation</span>
                                    </button>
                                    <button
                                        onClick={() => setMode('speedToLead')}
                                        className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 ${mode === 'speedToLead'
                                            ? 'bg-[#ff7404] text-black shadow-lg shadow-[#ff7404]/20'
                                            : 'bg-white/5 text-white/60 border border-white/10'
                                            }`}
                                    >
                                        <Zap className="w-4 h-4" />
                                        <span>Speed to Lead</span>
                                    </button>
                                </div>

                                {/* Desktop: Full Card Tabs */}
                                <div className="hidden md:flex flex-col gap-3">
                                    <button
                                        onClick={() => setMode('reactivation')}
                                        className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${mode === 'reactivation'
                                            ? 'bg-gradient-to-br from-[#ff7404]/20 to-[#ff7404]/5 border-[#ff7404]/50 shadow-[0_0_20px_rgba(255,116,4,0.1)]'
                                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2 relative z-10">
                                            <RefreshCcw className={`w-5 h-5 ${mode === 'reactivation' ? 'text-[#ff7404]' : 'text-white/40'}`} />
                                            <span className={`font-bold ${mode === 'reactivation' ? 'text-white' : 'text-white/70'}`}>Lead Reactivation</span>
                                        </div>
                                        <p className="text-[11px] text-white/40 leading-relaxed relative z-10">
                                            Calculate revenue from waking up dead leads.
                                        </p>
                                        {mode === 'reactivation' && <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#ff7404]/20 blur-2xl rounded-full" />}
                                    </button>

                                    <button
                                        onClick={() => setMode('speedToLead')}
                                        className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${mode === 'speedToLead'
                                            ? 'bg-gradient-to-br from-[#ff7404]/20 to-[#ff7404]/5 border-[#ff7404]/50 shadow-[0_0_20px_rgba(255,116,4,0.1)]'
                                            : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-2 relative z-10">
                                            <Zap className={`w-5 h-5 ${mode === 'speedToLead' ? 'text-[#ff7404]' : 'text-white/40'}`} />
                                            <span className={`font-bold ${mode === 'speedToLead' ? 'text-white' : 'text-white/70'}`}>Speed to Lead</span>
                                        </div>
                                        <p className="text-[11px] text-white/40 leading-relaxed relative z-10">
                                            See the impact of sub-60 second response times.
                                        </p>
                                        {mode === 'speedToLead' && <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-[#ff7404]/20 blur-2xl rounded-full" />}
                                    </button>
                                </div>

                                <div className="mt-auto hidden md:block">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-2">Did you know?</div>
                                        <p className="text-xs text-white/50 leading-relaxed">
                                            Dealerships using VisQuanta see an average
                                            <span className="text-white font-bold"> 30% increase </span>
                                            in appointment set rates within the first 60 days.
                                        </p>
                                    </div>
                                </div>
                            </div>


                            {/* Main Content Area */}
                            <div className="flex-1 p-4 md:p-10 relative flex flex-col justify-center overflow-y-auto">
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-2 text-white/20 hover:text-white transition-colors z-50 hover:bg-white/10 rounded-full hidden md:block"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none" />

                                <AnimatePresence mode="wait">
                                    {mode === 'reactivation' ? (
                                        <motion.div
                                            key="reactivation-panel"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-8 relative z-10"
                                        >
                                            <div className="space-y-1 md:space-y-2">
                                                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                                    <span className="w-1.5 md:w-2 h-6 md:h-8 rounded-full bg-[#ff7404]" />
                                                    Re-engage Lost Leads
                                                </h2>
                                                <p className="text-white/50 text-xs md:text-sm pl-4 md:pl-5">Recover revenue from leads marked as 'Lost' or 'Dead'.</p>
                                            </div>

                                            <div className="space-y-4 md:space-y-6">
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-end">
                                                        <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-wider">Cold Leads <span className="text-white/20 ml-1">(Last 12 Mo)</span></label>
                                                        <div className="text-lg md:text-xl font-bold text-white font-mono">{coldLeads.toLocaleString()}</div>
                                                    </div>
                                                    <input type="range" min="0" max="5000" step="50" value={coldLeads} onChange={(e) => setColdLeads(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7404]" />
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-end">
                                                        <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-wider">Avg Profit <span className="text-white/20 ml-1">(Front + Back)</span></label>
                                                        <div className="text-lg md:text-xl font-bold text-white font-mono">${reactivationGross.toLocaleString()}</div>
                                                    </div>
                                                    <input type="range" min="0" max="10000" step="100" value={reactivationGross} onChange={(e) => setReactivationGross(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7404]" />
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff7404]/10 rounded-full blur-[60px]" />
                                                <div className="relative z-10 flex flex-col gap-0.5">
                                                    <div className="text-[10px] md:text-xs font-bold text-[#ff7404] uppercase tracking-widest mb-0.5">Estimated Annual Recovery</div>
                                                    <div className="text-3xl md:text-5xl font-black text-white tracking-tight">{formatCurrency(reactivationRecovery)}</div>
                                                    <div className="text-white/40 text-[10px] md:text-xs mt-0.5">Based on a conservative 7% win-back calculation.</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="speed-panel"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            className="space-y-5 md:space-y-8 relative z-10"
                                        >
                                            <div className="space-y-1 md:space-y-2">
                                                <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                                                    <span className="w-1.5 md:w-2 h-6 md:h-8 rounded-full bg-[#ff7404]" />
                                                    Speed to Lead Impact
                                                </h2>
                                                <p className="text-white/50 text-xs md:text-sm pl-4 md:pl-5">Revenue gained by consistently responding in under 60 seconds.</p>
                                            </div>

                                            <div className="space-y-4 md:space-y-6">
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-end">
                                                        <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-wider">Monthly Internet Leads</label>
                                                        <div className="text-lg md:text-xl font-bold text-white font-mono">{monthlyLeads.toLocaleString()}</div>
                                                    </div>
                                                    <input type="range" min="0" max="10000" step="100" value={monthlyLeads} onChange={(e) => setMonthlyLeads(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7404]" />
                                                </div>
                                                <div className="space-y-3">
                                                    <div className="flex justify-between items-end">
                                                        <label className="text-[10px] md:text-xs font-bold text-white/60 uppercase tracking-wider">Avg Profit / Vehicle</label>
                                                        <div className="text-lg md:text-xl font-bold text-white font-mono">${speedGross.toLocaleString()}</div>
                                                    </div>
                                                    <input type="range" min="0" max="10000" step="100" value={speedGross} onChange={(e) => setSpeedGross(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#ff7404]" />
                                                </div>
                                            </div>

                                            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 relative overflow-hidden group">
                                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff7404]/10 rounded-full blur-[60px]" />
                                                <div className="relative z-10 flex flex-col gap-0.5">
                                                    <div className="text-[10px] md:text-xs font-bold text-[#ff7404] uppercase tracking-widest mb-0.5">Additional Annual Revenue</div>
                                                    <div className="text-3xl md:text-5xl font-black text-white tracking-tight">{formatCurrency(speedRecovery)}</div>
                                                    <div className="text-white/40 text-[10px] md:text-xs mt-0.5">Calculated from a 0.35% conversion lift on total volume.</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Link
                                    href="/book-demo"
                                    onClick={onClose}
                                    className={`mt-5 md:mt-8 w-full flex items-center justify-center gap-2 font-bold py-3 md:py-4 rounded-xl transition-all shadow-lg group hover:scale-[1.01] ${mode === 'reactivation'
                                        ? 'bg-[#ff7404] text-black hover:bg-[#ff8524] shadow-[#ff7404]/20'
                                        : 'bg-[#ff7404] text-black hover:bg-[#ff8524] shadow-[#ff7404]/20'
                                        }`}
                                >
                                    Claim This Revenue
                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
