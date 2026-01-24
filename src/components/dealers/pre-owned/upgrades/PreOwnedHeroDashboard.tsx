'use client';

import { motion } from 'framer-motion';
import { Database, Zap, Clock, TrendingUp, Search, UserCheck, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

const opportunities = [
    { type: 'reactivation', title: 'CRM Match Found', desc: '2019 F-150 → Customer #8821', time: 'Just now', icon: Database, color: 'text-[#FF7404]' },
    { type: 'speed', title: 'Portal Lead Captured', desc: 'Autotrader: 2023 Civic', time: '12s ago', icon: Zap, color: 'text-blue-500' },
    { type: 'service', title: 'High Equity Alert', desc: 'Service Lane 3: 2018 Camry', time: '45s ago', icon: TrendingUp, color: 'text-green-500' },
];

export default function PreOwnedHeroDashboard() {
    const [scannedCount, setScannedCount] = useState(12430);

    // Simulate increasing scan count
    useEffect(() => {
        const interval = setInterval(() => {
            setScannedCount(prev => prev + Math.floor(Math.random() * 3));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
        >
            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[#FF7404]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                {/* Scanner Line */}
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-50 blur-sm animate-[scan_3s_ease-in-out_infinite]" />

                {/* Header */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20 ring-1 ring-[#FF7404]/20 ring-offset-2 ring-offset-black">
                            <Search className="w-5 h-5 text-[#FF7404]" />
                        </div>
                        <div>
                            <div className="text-white font-bold tracking-tight">Intelligence Scanner</div>
                            <div className="text-[10px] text-zinc-500 font-mono flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                LIVE_FEED
                            </div>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Database Scanned</div>
                        <div className="text-xl font-mono text-white tracking-widest">{scannedCount.toLocaleString()}</div>
                    </div>
                </div>

                {/* Live Output Feed */}
                <div className="space-y-4">
                    {opportunities.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + i * 0.2 }}
                            className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors group/card relative overflow-hidden"
                        >
                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${item.color} group-hover/card:scale-110 transition-transform`}>
                                        <item.icon className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-sm mb-0.5 group-hover/card:text-[#FF7404] transition-colors">{item.title}</div>
                                        <div className="text-xs text-zinc-500 font-mono">{item.desc}</div>
                                    </div>
                                </div>
                                <div className="text-[10px] text-zinc-600 font-bold bg-white/5 px-2 py-1 rounded border border-white/5">
                                    {item.time}
                                </div>
                            </div>
                            {/* Hover Highlight */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover/card:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Footer Status */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                        <AlertCircle className="w-3 h-3" />
                        3 High-Priority Actions
                    </div>
                    <div className="text-[#FF7404]">System Optimized</div>
                </div>
            </div>
        </motion.div>
    );
}
