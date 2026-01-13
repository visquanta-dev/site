'use client';

import { motion } from 'framer-motion';
import { Activity, Clock, Database, Globe, Layers, ShieldCheck, Zap } from 'lucide-react';

const stats = [
    { label: "Active Revenue Capture", value: "LIVE", icon: Zap },
    { label: "Online Systems", value: "100%", icon: Globe },
    { label: "< 2 Min Response", value: "<120s", icon: Clock },
    { label: "24/7 Coverage", value: "24/7", icon: ShieldCheck },
    { label: "CRM Sync", value: "SYNC", icon: Database },
    { label: "Ad Spend", value: "$0", icon: Activity },
];

export default function StatsTicker() {
    return (
        <div className="w-full bg-[#050505] border-y border-white/5 overflow-hidden py-6 relative z-20">

            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

            <div className="flex select-none gap-10">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0 gap-16 items-center"
                >
                    {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                            <stat.icon className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-sm font-mono tracking-widest text-[#FF7404] uppercase">
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0 gap-16 items-center"
                >
                    {[...stats, ...stats, ...stats, ...stats].map((stat, i) => (
                        <div key={i} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity">
                            <stat.icon className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-sm font-mono tracking-widest text-[#FF7404] uppercase">
                                {stat.value}
                            </span>
                            <span className="text-xs font-bold text-white uppercase tracking-widest">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
