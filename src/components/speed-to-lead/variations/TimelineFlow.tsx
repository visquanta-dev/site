'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { lossPoints } from './data';

export default function TimelineFlow() {
    return (
        <div className="w-full overflow-x-auto pb-12 pt-4 hide-scrollbar">
            <div className="min-w-[1200px] flex items-center justify-between relative px-10">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white/[0.06] -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#FF7404] via-transparent to-[#FF7404] opacity-20 -translate-y-1/2 z-0" />

                {/* Nodes */}
                {lossPoints.map((item, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-6 group">
                        {/* Top Indicator */}
                        <div className="px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                            {item.indicator}
                        </div>

                        {/* Node Circle */}
                        <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/[0.1] flex items-center justify-center relative transition-all duration-300 group-hover:border-[#FF7404] group-hover:bg-[#FF7404]/10 group-hover:scale-110 shadow-lg group-hover:shadow-[#FF7404]/20">
                            <item.icon className="w-6 h-6 text-white/40 group-hover:text-[#FF7404] transition-colors" />

                            {/* Pulse Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-[#FF7404] opacity-0 group-hover:animate-ping" />
                        </div>

                        {/* Content */}
                        <div className="text-center w-40">
                            <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                            <p className="text-xs text-white/40 leading-relaxed">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <p className="text-center text-white/20 text-xs mt-8 font-mono uppercase tracking-widest">
                Scroll to explore the pipeline gaps
            </p>
        </div>
    );
}
