'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React from 'react';

interface FlagCardProps {
    countryCode: string;
    countryName: string;
    FlagComponent: React.ComponentType<any>;
    selected: boolean;
    onClick: () => void;
}

export default function FlagCard({
    countryCode,
    countryName,
    FlagComponent,
    selected,
    onClick
}: FlagCardProps) {
    return (
        <motion.button
            type="button"
            whileHover={{ y: -4, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={cn(
                "relative w-full p-8 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center gap-6 group overflow-hidden h-[240px]",
                selected
                    ? "bg-[#FF7404]/10 border-[#FF7404] shadow-[0_0_40px_-10px_rgba(255,116,4,0.3)]"
                    : "bg-white/[0.02] border-white/5 hover:border-[#FF7404]/50 hover:shadow-[0_0_30px_-10px_rgba(255,116,4,0.1)]"
            )}
        >
            {/* Background Glow */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 transition-opacity duration-500",
                selected ? "opacity-100" : "group-hover:opacity-100"
            )} />

            {/* Flag */}
            <div className="relative z-10 pointer-events-none">
                <div className={cn(
                    "relative rounded-lg overflow-hidden shadow-2xl transition-transform duration-500",
                    selected ? "scale-105" : "group-hover:scale-105"
                )}>
                    {/* Flag Component Size */}
                    <div className="w-24 h-16 sm:w-28 sm:h-20">
                        <FlagComponent className="w-full h-full object-cover" />
                    </div>

                    {/* Gloss/Reflect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/10 to-transparent pointer-events-none mix-blend-overlay" />
                </div>
            </div>

            {/* Label */}
            <div className="relative z-10 flex flex-col items-center gap-2 pointer-events-none">
                <span className={cn(
                    "text-xl font-bold transition-colors tracking-tight",
                    selected ? "text-white" : "text-white/60 group-hover:text-white"
                )}>
                    {countryName}
                </span>
                {selected && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7404] text-black text-[10px] font-bold uppercase tracking-widest"
                    >
                        <Check className="w-3 h-3 stroke-[3px]" />
                        Selected
                    </motion.div>
                )}
            </div>

            {/* Checkmark Overlay (Corner) */}
            {selected && (
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#FF7404] flex items-center justify-center text-black z-20 shadow-lg shadow-[#FF7404]/20 pointer-events-none">
                    <Check className="w-4 h-4 stroke-[3px]" />
                </div>
            )}
        </motion.button>
    );
}
