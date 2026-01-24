'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Globe, LayoutGrid, Activity } from 'lucide-react';
import { useState, MouseEvent } from 'react';

const stores = [
    { name: 'Store #104', growth: '+84%', status: 'LIVE' },
    { name: 'Store #212', growth: '+127%', status: 'LIVE' },
    { name: 'Store #098', growth: '+63%', status: 'LIVE' },
    { name: 'Store #315', growth: '+42%', status: 'LIVE' },
];

function StoreCard({ store, index }: { store: typeof stores[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Sparkline Path Generator (simple random-looking upward trend)
    const sparklinePath = "M0,25 C10,25 10,20 20,20 C30,20 30,15 40,15 C50,15 50,5 60,5";

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            onMouseMove={handleMouseMove}
            className="group relative bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 p-4 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300"
        >
            {/* Hover Spotlight */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                        250px circle at ${mouseX}px ${mouseY}px,
                        rgba(255, 116, 4, 0.1),
                        transparent 80%
                    )
                    `
                }}
            />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <LayoutGrid className="w-3 h-3 text-zinc-500 group-hover:text-[#FF7404] transition-colors" />
                        <span className="text-[10px] text-zinc-400 font-medium uppercase tracking-wider group-hover:text-white transition-colors">{store.name}</span>
                    </div>
                    {/* Pulsing Status Dot */}
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20">
                        <motion.div
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1 rounded-full bg-green-500 shadow-[0_0_4px_rgba(34,197,94,0.8)]"
                        />
                        <span className="text-[8px] text-green-400 font-bold tracking-widest">{store.status}</span>
                    </div>
                </div>

                <div className="flex items-end justify-between">
                    <div className="text-2xl font-bold text-white tracking-tighter group-hover:scale-105 transition-transform origin-left">
                        {store.growth}
                    </div>

                    {/* Animated Sparkline */}
                    <div className="w-[60px] h-[30px] relative">
                        <svg width="60" height="30" viewBox="0 0 60 30" fill="none" className="overflow-visible">
                            <motion.path
                                d={sparklinePath}
                                stroke="#10B981"
                                strokeWidth="2"
                                strokeLinecap="round"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                            />
                            <motion.path
                                d={sparklinePath}
                                stroke="#10B981"
                                strokeWidth="6"
                                strokeLinecap="round"
                                className="blur-md opacity-40"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.4 }}
                                transition={{ duration: 1.5, delay: 1 + index * 0.2, ease: "easeOut" }}
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function HeroDashboard() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative hidden lg:block perspective-[2000px]"
        >
            {/* Ambient Background Glow layer */}
            <div className="absolute inset-0 bg-[#FF7404]/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-4 transform-style-3d rotate-y-[-5deg]">

                {/* Main HQ Card */}
                <div className="col-span-2 bg-[#0F0F0F]/80 backdrop-blur-xl border border-white/10 p-6 rounded-2xl mb-4 shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                    {/* HQ Scanline */}
                    <motion.div
                        initial={{ left: "-100%" }}
                        animate={{ left: "200%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
                        className="absolute top-0 bottom-0 w-[100px] bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
                    />

                    <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/5 relative z-10">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                <Globe className="w-4 h-4 text-[#FF7404]" />
                            </div>
                            <div className="text-white font-bold tracking-tight">Group Headquarters</div>
                        </div>
                        <div className="px-2 py-1 rounded bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                            <Activity className="w-3 h-3 animate-pulse" />
                            Centralized
                        </div>
                    </div>
                    <div className="space-y-4 relative z-10">
                        <div className="flex items-center justify-between text-xs text-zinc-500 uppercase tracking-widest font-semibold">
                            <span>Total Portfolio Revenue</span>
                            <span className="text-white font-mono text-sm">$1,240,500</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "75%" }}
                                transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                                className="h-full bg-gradient-to-r from-[#FF7404] to-[#FF9040] relative"
                            >
                                <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[2px]" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Individual Store Cards */}
                {stores.map((store, i) => (
                    <StoreCard key={i} store={store} index={i} />
                ))}
            </div>
        </motion.div>
    );
}
