'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { lossPoints } from './data';
import { ChevronRight } from 'lucide-react';

export default function SplitLayout() {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto">
            {/* Left: Interactive Grid */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">
                {lossPoints.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveId(i)}
                        className={`p-5 sm:p-6 rounded-2xl border text-left transition-all duration-300 group relative min-h-[100px] sm:min-h-0 ${activeId === i
                            ? 'bg-[#FF7404] border-[#FF7404] shadow-[0_0_30px_-5px_rgba(255,116,4,0.4)]'
                            : 'bg-[#0a0a0a] border-white/[0.08] hover:border-white/[0.2]'
                            }`}
                    >
                        {/* Discovery indicator for inactive tabs */}
                        {activeId !== i && (
                            <span className="absolute top-3 right-3 flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404]/40 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]/60"></span>
                            </span>
                        )}
                        <item.icon className={`w-8 h-8 mb-4 ${activeId === i ? 'text-white' : 'text-white/40 group-hover:text-white transition-colors'
                            }`} />
                        <h4 className={`font-bold text-sm ${activeId === i ? 'text-white' : 'text-white/60 group-hover:text-white transition-colors'
                            }`}>
                            {item.title}
                        </h4>
                    </button>
                ))}
            </div>

            {/* Right: Detail View */}
            <div className="lg:col-span-7 bg-[#050505] rounded-3xl border border-white/[0.08] p-8 sm:p-10 lg:p-14 relative overflow-hidden flex flex-col justify-center min-h-[500px] shadow-2xl">
                <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noise%29%22 opacity=%221%22/%3E%3C/svg%3E')] mix-blend-overlay" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeId}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="relative z-10"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] rounded-full border border-white/[0.08] mb-6">
                            <span className="w-2 h-2 rounded-full bg-[#FF7404] animate-pulse" />
                            <span className="text-xs font-mono text-white/50 uppercase tracking-wider">{lossPoints[activeId].indicator}</span>
                        </div>

                        <h3 className="text-4xl font-bold text-white mb-6">
                            {lossPoints[activeId].title}
                        </h3>

                        <p className="text-xl text-white/60 leading-relaxed mb-10">
                            {lossPoints[activeId].description}
                        </p>

                        <div className="relative group overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] rounded-2xl border border-white/[0.08] p-6">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10 flex gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                    <svg className="w-5 h-5 text-[#FF7404]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-white mb-1.5 flex items-center gap-2">
                                        The VisQuanta Fix
                                        <ChevronRight className="w-3 h-3 text-white/30" />
                                    </h5>
                                    <p className="text-sm text-white/50 leading-relaxed">
                                        {lossPoints[activeId].solution}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
