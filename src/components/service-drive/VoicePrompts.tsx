'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Play, X } from 'lucide-react';

export default function VoicePrompts() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-36 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="pointer-events-auto cursor-pointer group relative"
                    >
                        {/* Close Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsVisible(false);
                            }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-[#1a1a1a] border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF7404] transition-all z-50 opacity-0 group-hover:opacity-100 shadow-lg"
                        >
                            <X className="w-3 h-3" />
                        </button>

                        {/* Main Container */}
                        <div className="relative flex items-center gap-4 bg-[#0a0a0a]/90 border border-white/10 p-5 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl hover:border-[#FF7404]/30 transition-all duration-300">

                            {/* Left: Icon / Visual */}
                            <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-white/[0.08] to-transparent flex items-center justify-center border border-white/5 overflow-hidden group-hover:border-[#FF7404]/20 transition-colors">
                                {/* Animated Waveform Background */}
                                <div className="absolute inset-0 flex items-center justify-center gap-0.5 opacity-30">
                                    {[1, 2, 3, 4, 3, 2].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            className="w-1 bg-[#FF7404] rounded-full"
                                            animate={{ height: [8, 16 + h * 4, 8] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: i * 0.1
                                            }}
                                        />
                                    ))}
                                </div>
                                <Mic className="w-5 h-5 text-white relative z-10" />
                            </div>

                            {/* Right: Text */}
                            <div className="">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-white font-bold text-sm tracking-wide">Test Drive Our Voice AI</span>

                                    {/* Integrated Live Badge */}
                                    <div className="flex items-center gap-1.5 px-1.5 py-0.5 rounded bg-[#FF7404]/10 border border-[#FF7404]/20">
                                        <span className="relative flex h-1.5 w-1.5">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF7404]"></span>
                                        </span>
                                        <span className="text-[9px] font-bold text-[#FF7404] uppercase tracking-wider leading-none">Live</span>
                                    </div>
                                </div>
                                <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors flex items-center gap-1">
                                    Click below to start demo
                                    <Play className="w-2.5 h-2.5 fill-current" />
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
