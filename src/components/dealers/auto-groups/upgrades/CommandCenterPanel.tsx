'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Building2, Terminal, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

const storeData = [
    { name: "Westside Toyota", color: "bg-[#FF8524]", roi: "4.8x", progress: 85 },
    { name: "Downtown Ford", color: "bg-[#FF7404]", roi: "5.2x", progress: 92 },
    { name: "Northside Honda", color: "bg-green-500", roi: "4.1x", progress: 78 },
    { name: "Eastside Chevy", color: "bg-white", roi: "4.9x", progress: 88 }
];

const logMessages = [
    "> INITIATING_GROUP_SYNC...",
    "> AGGREGATING_LEAD_DATA [100%]",
    "> OPTIMIZING_ROUTE_LOGIC...",
    "> CHECKING_INVENTORY_LEVELS...",
    "> SYNC_COMPLETE: ALL SYSTEMS GO"
];

export default function CommandCenterPanel() {
    const [activeLog, setActiveLog] = useState(0);

    // Terminal Log Animation
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveLog((prev) => (prev + 1) % logMessages.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative">
            {/* Background glow behind dashboard */}
            <div className="absolute inset-0 bg-[#FF7404]/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="aspect-square bg-[#050505] border border-white/10 rounded-[3rem] p-8 shadow-3xl overflow-hidden relative group hover:border-white/20 transition-all duration-500">

                {/* Top Gradient Overlay */}
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FF7404]/5 to-transparent pointer-events-none" />

                {/* 1. Header Section */}
                <div className="relative z-10 mb-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FF7404]/30 transition-colors">
                            <Building2 className="w-5 h-5 text-[#FF7404]" />
                        </div>
                        <div>
                            <span className="block text-white font-black text-xl tracking-tighter">Group Portfolio</span>
                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Real-Time Performance</span>
                        </div>
                    </div>
                    {/* Live Pulse Indicator */}
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <Activity className="w-3.5 h-3.5 text-green-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-green-500 uppercase">System Active</span>
                    </div>
                </div>

                {/* 2. Live Store Grid */}
                <div className="relative z-10 grid grid-cols-2 gap-4 mb-8">
                    {storeData.map((store, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all cursor-crosshair group/card"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="text-[9px] text-zinc-500 uppercase font-black tracking-widest">{store.name}</div>
                                <div className="text-[9px] text-zinc-600 font-mono group-hover/card:text-white transition-colors">ID: {100 + i}</div>
                            </div>

                            <div className="flex items-end justify-between mb-3">
                                <div className="text-2xl font-black text-white">{store.roi}</div>
                                <div className="text-[9px] text-green-500 font-bold bg-green-500/10 px-1.5 py-0.5 rounded border border-green-500/20">ROI</div>
                            </div>

                            {/* Animated Progress Bar */}
                            <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${store.progress}%` }}
                                    transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeOut" }}
                                    className={`h-full ${store.color} shadow-[0_0_8px_rgba(255,116,4,0.4)]`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* 3. Live Terminal Log */}
                <div className="relative z-10 p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-[10px] h-[100px] flex flex-col justify-end overflow-hidden shadow-inner">
                    <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-black to-transparent z-10" />
                    <div className="flex items-center gap-2 text-zinc-600 mb-2 border-b border-white/5 pb-2">
                        <Terminal className="w-3 h-3" />
                        <span>SYSTEM_LOG_OUTPUT</span>
                    </div>
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={activeLog}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-[#FF7404]"
                        >
                            {logMessages[activeLog]}
                            <span className="animate-pulse">_</span>
                        </motion.div>
                    </AnimatePresence>
                    <div className="text-zinc-600 opacity-50 mt-1">{logMessages[(activeLog + 4) % logMessages.length]}</div>
                </div>

                {/* Bottom Verified Badge */}
                <div className="relative z-10 mt-8 flex justify-center">
                    <div className="px-5 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Group Network
                    </div>
                </div>
            </div>
        </div>
    );
}
