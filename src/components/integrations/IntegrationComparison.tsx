'use client';

import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

interface ComparisonItem {
    before: string;
    after: string;
}

interface IntegrationComparisonProps {
    items: ComparisonItem[];
    crmName: string;
}

export default function IntegrationComparison({ items, crmName }: IntegrationComparisonProps) {
    return (
        <div className="bg-[#050505] rounded-3xl overflow-hidden border border-white/[0.08] relative">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Before Column */}
                <div className="p-8 md:p-12 relative overflow-hidden bg-[#0c0c0c]">
                    <div className="absolute inset-0 bg-red-900/[0.05]" />
                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/[0.05]">
                            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                                <X className="w-5 h-5 text-red-500" />
                            </div>
                            <h3 className="text-xl font-bold text-white/90">Without VisQuanta</h3>
                        </div>
                        <div className="space-y-8">
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4"
                                >
                                    <X className="w-5 h-5 text-red-500/40 shrink-0 mt-0.5" />
                                    <span className="text-base text-white/40 leading-relaxed font-medium line-through decoration-red-500/30">{item.before}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* After Column */}
                <div className="p-8 md:p-12 relative overflow-hidden border-l border-white/[0.08]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f97316]/[0.08] to-transparent" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#f97316]/10 blur-[80px] rounded-full pointer-events-none" />

                    <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-10 pb-6 border-b border-white/[0.1]">
                            <div className="w-10 h-10 rounded-xl bg-[#f97316]/20 flex items-center justify-center border border-[#f97316]/30 shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                                <Check className="w-5 h-5 text-[#f97316]" />
                            </div>
                            <h3 className="text-xl font-bold text-white">With VisQuanta</h3>
                        </div>

                        <div className="space-y-8">
                            {items.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-start gap-4 relative"
                                >
                                    <div className="w-5 h-5 rounded-full bg-[#f97316]/20 flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                                        <Check className="w-3 h-3 text-[#f97316]" />
                                    </div>
                                    <span className="text-base text-white font-medium leading-relaxed">{item.after}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
