'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lossPoints } from './data';
import { Plus, Minus } from 'lucide-react';

export default function AccordionView() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="max-w-3xl mx-auto space-y-4">
            {lossPoints.map((item, i) => {
                const isOpen = openIndex === i;
                return (
                    <motion.div
                        key={i}
                        initial={false}
                        className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${isOpen
                                ? 'bg-[#111] border-[#FF7404]/30'
                                : 'bg-[#0a0a0a] border-white/[0.06] hover:border-white/[0.15]'
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(isOpen ? null : i)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`p-2 rounded-lg ${isOpen ? 'bg-[#FF7404]/10 text-[#FF7404]' : 'bg-white/[0.05] text-white/40'
                                    }`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <span className={`text-lg font-bold ${isOpen ? 'text-white' : 'text-white/70'}`}>
                                    {item.title}
                                </span>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className={`text-xs font-mono uppercase px-3 py-1 rounded bg-white/[0.03] border border-white/[0.05] ${isOpen ? 'text-[#FF7404] border-[#FF7404]/20' : 'text-white/30'
                                    }`}>
                                    {item.indicator}
                                </span>
                                {isOpen ? <Minus className="w-5 h-5 text-white/40" /> : <Plus className="w-5 h-5 text-white/40" />}
                            </div>
                        </button>

                        <AnimatePresence initial={false}>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-6 pb-6 pl-[4.5rem] pr-12">
                                        <p className="text-white/50 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                );
            })}
        </div>
    );
}
