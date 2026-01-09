'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated counter hook
function useAnimatedCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const hasStarted = useRef(false);

    useEffect(() => {
        if (startOnView && !isInView) return;
        if (hasStarted.current) return;
        hasStarted.current = true;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView, startOnView]);

    return { count, ref };
}

// Circular progress component
function CircularProgress({
    percentage,
    size = 40,
    strokeWidth = 3,
    color = '#ff7404'
}: {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    color?: string;
}) {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={size} height={size} className="transform -rotate-90">
            {/* Background circle */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth={strokeWidth}
            />
            {/* Progress circle */}
            <motion.circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={color}
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset: offset }}
                transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                style={{
                    strokeDasharray: circumference,
                }}
            />
        </svg>
    );
}

export default function HeroDashboardPreview() {
    const contacted = useAnimatedCounter(3842, 2000);
    const replied = useAnimatedCounter(1614, 2000);
    const opportunities = useAnimatedCounter(842, 1500);
    const closed = useAnimatedCounter(128, 1200);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full"
        >
            {/* Dashboard Card Container */}
            <div className="relative bg-[#0a0a0a]/90 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                {/* Top shine */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Header */}
                <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Live Dashboard - Lead Reactivation</span>
                    </div>
                    <span className="text-[10px] text-white/20">This Month</span>
                </div>

                {/* Stats Grid */}
                <div className="p-4">
                    <div className="grid grid-cols-4 gap-3" ref={contacted.ref}>
                        {/* Contacted */}
                        <div className="text-center">
                            <div className="flex flex-col items-center gap-1">
                                <div className="relative">
                                    <CircularProgress percentage={100} size={36} strokeWidth={3} color="#3b82f6" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white/60">100%</span>
                                </div>
                                <div className="text-lg font-black text-white tabular-nums">
                                    {contacted.count.toLocaleString()}
                                </div>
                                <div className="text-[8px] font-bold uppercase tracking-wider text-white/30">Contacted</div>
                            </div>
                        </div>

                        {/* Replied */}
                        <div className="text-center" ref={replied.ref}>
                            <div className="flex flex-col items-center gap-1">
                                <div className="relative">
                                    <CircularProgress percentage={42} size={36} strokeWidth={3} color="#10b981" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white/60">42%</span>
                                </div>
                                <div className="text-lg font-black text-white tabular-nums">
                                    {replied.count.toLocaleString()}
                                </div>
                                <div className="text-[8px] font-bold uppercase tracking-wider text-white/30">Replied</div>
                            </div>
                        </div>

                        {/* Opportunities */}
                        <div className="text-center" ref={opportunities.ref}>
                            <div className="flex flex-col items-center gap-1">
                                <div className="w-9 h-9 rounded-lg bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center">
                                    <svg className="w-4 h-4 text-[#ff7404]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="text-lg font-black text-white tabular-nums">
                                    {opportunities.count}
                                </div>
                                <div className="text-[8px] font-bold uppercase tracking-wider text-white/30">Opps</div>
                            </div>
                        </div>

                        {/* Closed */}
                        <div className="text-center" ref={closed.ref}>
                            <div className="flex flex-col items-center gap-1">
                                <div className="relative">
                                    <CircularProgress percentage={15} size={36} strokeWidth={3} color="#a855f7" />
                                    <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white/60">15%</span>
                                </div>
                                <div className="text-lg font-black text-white tabular-nums">
                                    {closed.count}
                                </div>
                                <div className="text-[8px] font-bold uppercase tracking-wider text-white/30">Sold</div>
                            </div>
                        </div>
                    </div>

                    {/* Pipeline Preview Bar */}
                    <div className="mt-4 pt-4 border-t border-white/5">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-white/40">Active Pipeline</span>
                            <span className="text-[10px] font-bold text-[#ff7404]">842 total</span>
                        </div>
                        <div className="flex gap-1 h-2 rounded-full overflow-hidden bg-white/5">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '15%' }}
                                transition={{ duration: 1, delay: 0.8 }}
                                className="bg-[#a855f7] rounded-l-full"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '25%' }}
                                transition={{ duration: 1, delay: 0.9 }}
                                className="bg-[#10b981]"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '30%' }}
                                transition={{ duration: 1, delay: 1 }}
                                className="bg-[#ff7404]"
                            />
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: '30%' }}
                                transition={{ duration: 1, delay: 1.1 }}
                                className="bg-white/10 rounded-r-full"
                            />
                        </div>
                        <div className="flex justify-between mt-1">
                            <span className="text-[8px] text-[#a855f7]">Sold 128</span>
                            <span className="text-[8px] text-[#10b981]">Hot 210</span>
                            <span className="text-[8px] text-[#ff7404]">Warm 252</span>
                            <span className="text-[8px] text-white/30">Nurture 252</span>
                        </div>
                    </div>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent" />
            </div>
        </motion.div>
    );
}
