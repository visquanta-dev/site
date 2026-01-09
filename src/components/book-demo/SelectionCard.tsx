'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React from 'react';

interface SelectionCardProps {
    title: string;
    description?: string;
    icon?: React.ElementType;
    selected: boolean;
    onClick: () => void;
    className?: string;
}

export default function SelectionCard({
    title,
    description,
    icon: Icon,
    selected,
    onClick,
    className
}: SelectionCardProps) {
    return (
        <motion.div
            whileHover={{ y: -6, backgroundColor: 'rgba(255, 255, 255, 0.05)', borderColor: 'rgba(255, 116, 4, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onClick}
            className={cn(
                "relative p-8 rounded-[2rem] border cursor-pointer transition-all duration-500 flex flex-col items-center text-center gap-4 group overflow-hidden",
                selected
                    ? "bg-[#FF7404]/[0.08] border-[#FF7404] shadow-[0_0_40px_rgba(255,116,4,0.15)]"
                    : "bg-white/[0.02] border-white/10 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]",
                className
            )}
        >
            {/* Selection Indicator - More Premium */}
            <div className={cn(
                "absolute top-5 right-5 w-6 h-6 rounded-full transition-all duration-500 flex items-center justify-center border",
                selected
                    ? "bg-[#FF7404] border-[#FF7404] scale-100 shadow-[0_0_15px_rgba(255,116,4,0.6)]"
                    : "bg-transparent border-white/10 scale-75 opacity-0 group-hover:opacity-100"
            )}>
                <Check className={cn("w-3.5 h-3.5 stroke-[3px] transition-colors", selected ? "text-black" : "text-white/20")} />
            </div>

            {/* Inner Glow / Gradient */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 pointer-events-none",
                selected ? "opacity-100" : "group-hover:opacity-40"
            )} />

            {Icon && (
                <div className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border relative",
                    selected
                        ? "bg-[#FF7404]/20 text-[#FF7404] border-[#FF7404]/30 scale-110"
                        : "bg-white/5 text-white/40 border-white/10 group-hover:text-white group-hover:bg-white/10 group-hover:scale-110"
                )}>
                    <Icon className="w-8 h-8 relative z-10" />
                    {selected && (
                        <motion.div
                            layoutId="icon-glow"
                            className="absolute inset-0 bg-[#FF7404]/20 blur-xl rounded-full"
                        />
                    )}
                </div>
            )}

            <div className="relative z-10 w-full">
                <h3 className={cn(
                    "text-xl font-black tracking-tight transition-all duration-300",
                    selected ? "text-white scale-105" : "text-white/60 group-hover:text-white"
                )}>
                    {title}
                </h3>
                {description && (
                    <p className="text-sm text-white/40 mt-2 leading-relaxed group-hover:text-white/60 transition-colors line-clamp-2">
                        {description}
                    </p>
                )}
            </div>

            {/* Bottom Accent Line */}
            <div className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-[#FF7404] transition-all duration-500 rounded-t-full shadow-[0_0_15px_rgba(255,116,4,0.8)]",
                selected ? "w-1/3 opacity-100" : "w-0 opacity-0"
            )} />
        </motion.div>
    );
}
