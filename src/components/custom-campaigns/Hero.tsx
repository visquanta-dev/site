'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { RequestDemoButton } from '../CalendlyModal';

// Campaign data for each audience tier
const campaignData: Record<string, { title: string, stats: { label: string, value: string, trend: string }[] }> = {
    '1k': {
        title: "Presidents' Day Flash Sale",
        stats: [
            { label: 'Replies', value: '28%', trend: 'High Intent' },
            { label: 'Apps', value: '14', trend: 'Confirmed' },
            { label: 'Rev', value: '$12k', trend: 'Est. Gross' }
        ]
    },
    '10k': {
        title: "Memorial Day Blockbuster",
        stats: [
            { label: 'Replies', value: '24%', trend: 'Above Avg' },
            { label: 'Apps', value: '85', trend: 'Confirmed' },
            { label: 'Rev', value: '$58k', trend: 'Est. Gross' }
        ]
    },
    '50k': {
        title: "Labor Day Pull-ahead",
        stats: [
            { label: 'Replies', value: '19%', trend: 'Volume Play' },
            { label: 'Apps', value: '342', trend: 'Confirmed' },
            { label: 'Rev', value: '$210k', trend: 'Est. Gross' }
        ]
    },
    '100k+': {
        title: "Black Friday Doorbusters",
        stats: [
            { label: 'Replies', value: '15%', trend: 'Mass Scale' },
            { label: 'Apps', value: '620+', trend: 'Confirmed' },
            { label: 'Rev', value: '$480k+', trend: 'Est. Gross' }
        ]
    }
};

const segments = ['1k', '10k', '50k', '100k+'];
const statuses = ['QUEUED', 'SENDING', 'REPLIES', 'BOOKING', 'COMPLETE'];

// Generate random ID in XXX-XXX format
const generateId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const part1 = Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    const part2 = Array(3).fill(0).map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
    return `${part1}-${part2}`;
};

export default function Hero() {
    const [segmentIndex, setSegmentIndex] = useState(0);
    const [stageIndex, setStageIndex] = useState(0);
    const [campaignId, setCampaignId] = useState(generateId());
    const [isResetting, setIsResetting] = useState(false);

    const activeSegment = segments[segmentIndex];

    // Main animation loop
    useEffect(() => {
        const stageDuration = 1200; // 1.2s per stage
        const pauseDuration = 500; // 0.5s pause before reset

        const timer = setInterval(() => {
            setStageIndex((prev) => {
                const nextStage = prev + 1;

                // If completed all stages
                if (nextStage >= statuses.length) {
                    // Brief pause, then reset
                    setIsResetting(true);
                    setTimeout(() => {
                        setIsResetting(false);
                        // Move to next segment
                        setSegmentIndex((prevSeg) => {
                            const nextSeg = (prevSeg + 1) % segments.length;
                            // Generate new ID when segment changes
                            setCampaignId(generateId());
                            return nextSeg;
                        });
                    }, pauseDuration);
                    return 0; // Reset stage
                }

                return nextStage;
            });
        }, stageDuration);

        return () => clearInterval(timer);
    }, []);

    // Calculate progress percentage (0-100)
    const progressPercentage = ((stageIndex + 1) / statuses.length) * 100;

    return (
        <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 lg:pt-44 overflow-hidden bg-[#020202]">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-r from-[#FF7404]/10 to-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
                    {/* Left Column: Copy & CTA */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                            <span className="text-xs font-medium text-white/80 tracking-wide">Enterprise Campaign Engine</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[1.05] uppercase"
                        >
                            Car Dealership Campaigns <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#ff9040] to-[#FF7404]">That Drive Real Appointments</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-md font-medium"
                        >
                            The done-for-you car dealership campaign infrastructure that creates custom offers, cleans your list, sends SMS at scale, and delivers confirmed appointments, not raw leads.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 mb-12"
                        >
                            <div className="flex flex-col gap-3">
                                <RequestDemoButton asChild>
                                    <button className="h-[56px] px-8 bg-gradient-to-r from-[#FF7404] to-[#ff8a3d] hover:to-[#ff9e5e] text-black font-black uppercase text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)]">
                                        <span className="relative z-10">Schedule Your Walkthrough</span>
                                        <Sparkles className="w-5 h-5 relative z-10" />
                                    </button>
                                </RequestDemoButton>
                                <span className="text-[10px] text-white/30 font-bold pl-1 tracking-widest uppercase text-center sm:text-left">Ready for 1k to 1M+ volume</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Visual Demo */}
                    <div className="lg:hidden mt-8 sm:mt-12 flex justify-center">
                        <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                            <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#0a0a0a]">
                                <img
                                    src="/images/suite-bg/cc-bg.png"
                                    alt="Custom Campaigns Demo"
                                    className="w-full h-auto"
                                />
                            </div>
                            <div className="absolute inset-0 -z-10 bg-[#FF7404]/10 blur-3xl rounded-full scale-150 opacity-50" />
                        </div>
                    </div>

                    {/* Right Column: Campaign Launch Console - ANIMATED */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        {/* Glass Console Card */}
                        <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden group">
                            {/* Inner Highlight */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none" />
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />

                            {/* Glow from active status */}
                            <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7404]/10 rounded-full blur-[40px] pointer-events-none" />

                            <div className="space-y-8 relative z-10">
                                {/* Top Row: Campaign Status */}
                                <div className="flex items-center justify-between pb-6 border-b border-white/5">
                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF7404] font-bold mb-2">Active Production</div>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeSegment}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-2xl font-bold text-white tracking-tight min-w-[300px]"
                                            >
                                                {campaignData[activeSegment].title}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                    {/* LIVE Badge with Pulse */}
                                    <div className="px-4 py-1.5 bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 rounded-full flex items-center gap-2 shadow-[0_0_20px_-5px_rgba(34,197,94,0.2)]">
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"
                                        />
                                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Live</span>
                                    </div>
                                </div>

                                {/* Middle: Audience Selector - Auto-cycling */}
                                <div>
                                    <div className="text-[10px] text-white/40 font-bold mb-4 uppercase tracking-widest">Audience Segment Size</div>
                                    <div className="relative bg-[#050505] p-1.5 rounded-2xl border border-white/5 shadow-inner">
                                        {/* Sliding Pill - Using CSS transform */}
                                        <div
                                            className="absolute top-1.5 bottom-1.5 w-[calc(25%-3px)] bg-[#FF7404] rounded-xl shadow-[0_4px_12px_rgba(255,116,4,0.3)] transition-transform duration-500 ease-out"
                                            style={{
                                                transform: `translateX(calc(${segmentIndex * 100}% + ${segmentIndex * 6}px))`,
                                                left: '6px'
                                            }}
                                        />
                                        {/* Segment Labels */}
                                        <div className="grid grid-cols-4 relative z-10">
                                            {segments.map((size, i) => (
                                                <div
                                                    key={size}
                                                    className={`py-2.5 rounded-xl text-xs font-bold transition-colors duration-300 text-center ${i === segmentIndex ? 'text-black' : 'text-white/30'
                                                        }`}
                                                >
                                                    {size}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Tiles - Animated */}
                                <div className="grid grid-cols-3 gap-3">
                                    <AnimatePresence mode="wait">
                                        {campaignData[activeSegment].stats.map((stat, i) => (
                                            <motion.div
                                                key={`${activeSegment}-${i}`}
                                                initial={{ opacity: 0, scale: 0.95 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.95 }}
                                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                                className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl p-4 hover:border-[#FF7404]/30 transition-all duration-300 group/tile"
                                            >
                                                <div className="text-[9px] text-white/40 uppercase tracking-widest mb-1 group-hover/tile:text-white/60 transition-colors">{stat.label}</div>
                                                <div className="text-2xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                                                <div className="text-[9px] text-[#FF7404] font-bold">{stat.trend}</div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>

                                {/* Footer: Animated Progress Bar */}
                                <div className="pt-6 border-t border-white/5">
                                    {/* Progress Bar Container */}
                                    <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
                                        {/* Segmented Progress Markers */}
                                        <div className="absolute inset-0 flex justify-between px-0">
                                            {[1, 2, 3, 4].map((_, i) => (
                                                <div key={i} className="w-px h-full bg-white/5" style={{ left: `${(i + 1) * 20}%` }} />
                                            ))}
                                        </div>
                                        {/* Animated Fill */}
                                        <motion.div
                                            animate={{ width: isResetting ? '0%' : `${progressPercentage}%` }}
                                            transition={{
                                                duration: isResetting ? 0.3 : 0.8,
                                                ease: "easeOut"
                                            }}
                                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF7404] to-[#ff9040] rounded-full shadow-[0_0_15px_rgba(255,116,4,0.5)]"
                                        />
                                    </div>

                                    {/* Status & ID Row */}
                                    <div className="flex justify-between mt-3">
                                        {/* Status Label */}
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={stageIndex}
                                                initial={{ opacity: 0, y: 5 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -5 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-[10px] text-white/50 uppercase tracking-widest font-medium flex items-center gap-2"
                                            >
                                                <span className={stageIndex === statuses.length - 1 ? 'text-green-400' : 'text-white/50'}>
                                                    {statuses[stageIndex]}...
                                                </span>
                                                {stageIndex < statuses.length - 1 && (
                                                    <motion.span
                                                        animate={{ opacity: [0.3, 1, 0.3] }}
                                                        transition={{ duration: 1, repeat: Infinity }}
                                                        className="text-[#FF7404]"
                                                    >
                                                        ●
                                                    </motion.span>
                                                )}
                                            </motion.span>
                                        </AnimatePresence>

                                        {/* Campaign ID */}
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={campaignId}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="text-[10px] text-white/30 uppercase tracking-widest font-mono"
                                            >
                                                ID: {campaignId}
                                            </motion.span>
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Glow effect behind console */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7404]/20 to-transparent blur-2xl -z-10 opacity-30" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
