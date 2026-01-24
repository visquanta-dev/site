'use client';

import { motion } from 'framer-motion';
import { lossPoints } from './data';

export default function BentoGridDelay() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {lossPoints.map((item, i) => {
                // First two items are large (col-span-2), others are small (col-span-1)
                const isLarge = i < 2;

                return (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`
                            relative group overflow-hidden rounded-3xl p-8 border border-white/[0.08] bg-[#0a0a0a] hover:border-[#FF7404]/30 transition-colors
                            ${isLarge ? 'md:col-span-2 md:row-span-2 min-h-[300px]' : 'md:col-span-1 min-h-[240px]'}
                        `}
                    >
                        {/* Hover Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex justify-between items-start mb-auto">
                                <div className={`rounded-xl bg-white/[0.05] flex items-center justify-center ${isLarge ? 'w-14 h-14' : 'w-10 h-10'}`}>
                                    <item.icon className="text-white/60 w-1/2 h-1/2" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.05] text-[10px] uppercase font-bold text-white/40">
                                    {item.indicator}
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className={`font-bold text-white mb-2 ${isLarge ? 'text-3xl' : 'text-lg'}`}>
                                    {item.title}
                                </h3>
                                <p className={`text-white/40 ${isLarge ? 'text-lg max-w-sm' : 'text-sm'}`}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
