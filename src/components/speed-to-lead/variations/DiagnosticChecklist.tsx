'use client';

import { motion } from 'framer-motion';
import { CheckSquare, AlertCircle } from 'lucide-react';
import { lossPoints } from './data';

export default function DiagnosticChecklist() {
    return (
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-white/[0.08] rounded-3xl overflow-hidden">
            <div className="p-8 border-b border-white/[0.08] flex items-center justify-between bg-white/[0.02]">
                <h3 className="text-white font-bold text-xl">Loss Point Diagnostic</h3>
                <span className="text-xs font-mono text-white/30 uppercase">System Scan: Active</span>
            </div>

            <div className="divide-y divide-white/[0.04]">
                {lossPoints.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="group flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8 hover:bg-white/[0.02] transition-colors cursor-default relative overflow-hidden"
                    >
                        {/* Hover accent */}
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#FF7404] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

                        {/* Icon */}
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center group-hover:border-[#FF7404]/30 group-hover:bg-[#FF7404]/10 transition-colors">
                            <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#FF7404] transition-colors" />
                        </div>

                        {/* Text */}
                        <div className="flex-grow">
                            <h4 className="text-white font-bold text-lg mb-1 flex items-center gap-3">
                                {item.title}
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-500 border border-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <AlertCircle className="w-3 h-3 mr-1" />
                                    Risk Detected
                                </span>
                            </h4>
                            <p className="text-white/40 text-sm">{item.description}</p>
                        </div>

                        {/* Gap Badge */}
                        <div className="flex-shrink-0">
                            <div className="px-4 py-2 rounded-lg bg-[#050505] border border-white/[0.08] text-white/60 font-mono text-xs text-center group-hover:border-[#FF7404]/30 group-hover:text-[#FF7404] transition-colors">
                                <div className="text-[10px] uppercase text-white/20 mb-1">Impact</div>
                                {item.indicator}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
