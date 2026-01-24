'use client';

import { motion } from 'framer-motion';
import { lossPoints } from './data';

export default function StatBarMeter() {
    return (
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            {lossPoints.map((item, i) => {
                // Simulate a severity percentage for the bar
                const severity = Math.min(100, 40 + (i * 10) + Math.random() * 20);

                return (
                    <div key={i} className="group">
                        <div className="flex items-end justify-between mb-2">
                            <div className="flex items-center gap-3">
                                <item.icon className="w-5 h-5 text-white/40 group-hover:text-[#FF7404] transition-colors" />
                                <h4 className="text-white font-bold">{item.title}</h4>
                            </div>
                            <span className="text-xs font-mono text-white/30 uppercase tracking-wider group-hover:text-[#FF7404] transition-colors">
                                {item.indicator}
                            </span>
                        </div>

                        {/* Bar Container */}
                        <div className="h-4 bg-[#111] border border-white/[0.08] rounded-full overflow-hidden relative">
                            {/* Grid lines */}
                            <div className="absolute inset-0 flex">
                                <div className="w-1/4 h-full border-r border-white-[0.02]" />
                                <div className="w-1/4 h-full border-r border-white-[0.02]" />
                                <div className="w-1/4 h-full border-r border-white-[0.02]" />
                            </div>

                            {/* Fill Bar */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${severity}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-[#FF7404]/40 to-[#FF7404] relative"
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-px bg-white/50 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            </motion.div>
                        </div>

                        <p className="mt-3 text-xs text-white/40 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-2 group-hover:translate-y-0">
                            {item.description}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
