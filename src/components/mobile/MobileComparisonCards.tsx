'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
    feature: string;
    visquanta: string;
    traditional: string;
    generic: string;
    detail?: string;
}

interface MobileComparisonCardsProps {
    comparisons: ComparisonRow[];
}

export default function MobileComparisonCards({ comparisons }: MobileComparisonCardsProps) {
    return (
        <div className="space-y-4">
            {comparisons.map((row, i) => {
                const isWeakTraditional = ['None', 'Not supported', 'Bot only'].includes(row.traditional);
                const isWeakGeneric = ['None', 'Not supported', 'Bot only', 'Basic forms', ''].includes(row.generic);

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                        className="bg-black/60 backdrop-blur-xl border border-white/[0.08] rounded-2xl overflow-hidden"
                    >
                        {/* Card Header - Feature Name */}
                        <div className="px-5 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                            <h4 className="text-base font-bold text-white">{row.feature}</h4>
                            {row.detail && (
                                <p className="text-xs text-white/40 mt-1">{row.detail}</p>
                            )}
                        </div>

                        {/* Comparison Rows */}
                        <div className="divide-y divide-white/[0.04]">
                            {/* VisQuanta - Highlighted */}
                            <div className="px-5 py-4 bg-gradient-to-r from-[#ff7404]/[0.08] to-transparent relative">
                                {/* Left accent bar */}
                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ff7404]" />

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-[#ff7404] flex items-center justify-center shadow-lg shadow-[#ff7404]/30">
                                            <Check className="w-3.5 h-3.5 text-black" strokeWidth={3} />
                                        </div>
                                        <span className="text-sm font-bold text-[#ff7404] uppercase tracking-wide">VisQuanta</span>
                                    </div>
                                    <span className="text-sm font-bold text-white">{row.visquanta}</span>
                                </div>
                            </div>

                            {/* Traditional BDC */}
                            <div className="px-5 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {isWeakTraditional ? (
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-white/40 uppercase tracking-wide">Traditional BDC</span>
                                    </div>
                                    <span className={`text-sm font-medium ${isWeakTraditional ? 'text-white/20' : 'text-white/40'}`}>
                                        {row.traditional || '—'}
                                    </span>
                                </div>
                            </div>

                            {/* Generic AI */}
                            <div className="px-5 py-3">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {isWeakGeneric ? (
                                            <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                                                <X className="w-3.5 h-3.5 text-red-500" strokeWidth={2.5} />
                                            </div>
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                                                <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                                            </div>
                                        )}
                                        <span className="text-xs font-medium text-white/40 uppercase tracking-wide">Generic AI</span>
                                    </div>
                                    <span className={`text-sm font-medium ${isWeakGeneric ? 'text-white/20' : 'text-white/40'}`}>
                                        {row.generic || '—'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}

            {/* Bottom Summary Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: comparisons.length * 0.08 }}
                className="mt-6 px-5 py-4 bg-white/[0.02] border border-white/[0.06] rounded-2xl"
            >
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                    <span>Certified Integrations</span>
                    <div className="w-1 h-1 rounded-full bg-[#ff7404]/50" />
                    <span>99.9% Uptime</span>
                    <div className="w-1 h-1 rounded-full bg-[#ff7404]/50" />
                    <span>Privacy & Data Handling</span>
                </div>
            </motion.div>
        </div>
    );
}
