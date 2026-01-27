'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Play, ShieldCheck, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PhoneDemo from './PhoneDemo';
import { useRef } from 'react';
import { RequestDemoButton } from '../CalendlyModal';

const logos = [
    { name: 'Seth Wadley Auto Group', src: '/images/logos/sw-group.jpg' },
    { name: 'Patriot Group', src: '/images/logos/patriot.jpg' },
    { name: 'Common Wealth Motors', src: '/images/logos/common-wealth.jpg' },
    { name: 'Automax', src: '/images/logos/automax.jpg' },
];

interface HeroSectionProps {
    onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenCalculator }: HeroSectionProps) {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-center bg-[#030303] pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32">

            {/* 1. Premium Multi-Layer Background */}
            <div className="absolute inset-0 z-0">
                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Premium gradient mesh */}
                <motion.div
                    style={{ y: backgroundY }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-[-30%] left-[10%] w-[600px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[150px]" />
                    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-white/[0.015] rounded-full blur-[200px]" />
                    <div className="absolute bottom-[-20%] left-[30%] w-[500px] h-[500px] bg-[#FF7404]/[0.02] rounded-full blur-[180px]" />
                </motion.div>

                {/* Ultra fine grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]" />

                {/* Top accent line with glow */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FF7404]/[0.03] to-transparent" />
            </div>

            {/* 2. Floating Orbs (Premium Light Effects) */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] left-[5%] w-2 h-2 rounded-full bg-[#FF7404] blur-sm"
            />
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[30%] right-[15%] w-1 h-1 rounded-full bg-white blur-[2px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.35, 0.2],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="absolute bottom-[20%] left-[20%] w-1.5 h-1.5 rounded-full bg-[#FF7404] blur-[3px]"
            />

            <motion.div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">

                    {/* Left: Authority & Messaging */}
                    <div className="text-left space-y-8 sm:space-y-10 lg:space-y-12">

                        {/* Status Badge - Premium Glass */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_30px_-12px_rgba(255,116,4,0.3)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                            </span>
                            <span className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase">
                                AI That Works Your Old Leads
                            </span>
                        </motion.div>

                        {/* Headline - Premium Typography */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] font-black text-white tracking-[-0.04em] leading-[0.9] uppercase"
                            >
                                <span className="block">Sell Cars From</span>
                                <span className="block">Leads Everyone</span>
                                <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                    Gave Up On
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-base sm:text-lg md:text-xl text-white/45 max-w-lg leading-[1.8] font-medium"
                            >
                                Other AI tools chase new leads. We work your old ones. VisQuanta re-engages dead CRM contacts from 1 week to 5 years old: turning leads your BDC stopped calling into booked appointments.
                            </motion.p>

                            {/* Mobile Visual Demo - Right below subheading */}
                            <div className="lg:hidden mt-8 mb-4 flex justify-center">
                                <div className="relative scale-[0.7] sm:scale-[0.85] origin-top h-[560px] sm:h-[680px]">
                                    {/* Ambient glow behind phone */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF7404]/[0.1] rounded-full blur-[80px] pointer-events-none" />

                                    <PhoneDemo
                                        title="Amy (Visquanta)"
                                        subtitle="REACTIVATING: JOHN"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* CTAs - Premium Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                            className="space-y-6 pt-4"
                        >
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
                                <button
                                    onClick={onOpenCalculator}
                                    className="group relative px-8 sm:px-12 py-5 overflow-hidden text-center rounded-xl shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(255,116,4,0.4)] transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404]" />
                                    <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black text-sm uppercase tracking-widest whitespace-nowrap">
                                        Start Revenue Audit
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </button>

                                <RequestDemoButton asChild>
                                    <button className="group flex items-center justify-center gap-3 text-white/50 hover:text-white transition-colors py-4 px-2">
                                        <Sparkles className="w-4 h-4 text-[#FF7404]" />
                                        <span className="text-xs font-black uppercase tracking-widest">
                                            Schedule Your Walkthrough
                                        </span>
                                    </button>
                                </RequestDemoButton>
                            </div>

                            <div className="flex flex-col gap-1">
                                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold">
                                    30-min 1:1 • Get an exact revenue-lift projection for your dealership
                                </p>
                            </div>
                        </motion.div>

                        {/* Authority Proof - Integrated Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                            className="pt-10 border-t border-white/[0.04] grid grid-cols-2 sm:grid-cols-3 gap-8"
                        >
                            {[
                                { value: "$35M+", label: "Total Revenue" },
                                { value: "6,724", label: "Vehicles Sold" },
                                { value: "39%+", label: "Engagement Rate", className: "hidden sm:block" },
                            ].map((stat, i) => (
                                <div key={i} className={stat.className}>
                                    <div className="text-xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-[9px] text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Trusted By - Minimal Inline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="pt-6 flex flex-wrap items-center gap-x-8 gap-y-4"
                        >
                            <span className="text-[9px] font-bold text-white/20 uppercase tracking-[0.3em]">Trusted By:</span>
                            <div className="flex flex-wrap items-center gap-6">
                                {logos.map((logo, i) => (
                                    <span
                                        key={logo.name}
                                        className="text-[11px] font-bold text-zinc-500 hover:text-zinc-300 transition-colors cursor-default whitespace-nowrap"
                                    >
                                        {logo.name}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Visual Demonstration */}
                    <div className="relative perspective-[2000px] hidden lg:flex items-center justify-center -mt-12">

                        {/* Ambient glow behind phone */}
                        <div className="absolute w-[500px] h-[500px] bg-[#FF7404]/[0.08] rounded-full blur-[120px] pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative z-10"
                        >
                            <PhoneDemo
                                title="Amy (Visquanta)"
                                subtitle="REACTIVATING: JOHN"
                            />
                        </motion.div>

                        {/* Floating Performance Card - Glass Morphism */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="absolute -right-4 top-1/4 bg-[#0a0a0a]/80 backdrop-blur-2xl p-7 rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] z-20"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center">
                                    <BarChart3 className="w-5 h-5 text-[#FF7404]" />
                                </div>
                                <div className="text-[9px] text-white/30 font-bold uppercase tracking-[0.2em]">Week 1 Results</div>
                            </div>
                            <div className="text-3xl font-bold text-white tracking-tight">+$47,200</div>
                            <div className="text-[10px] text-white/40 font-medium mt-1">Seth Wadley Auto Group</div>
                        </motion.div>

                        {/* Secondary floating indicator */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="absolute -left-8 bottom-1/4 bg-[#0a0a0a]/80 backdrop-blur-2xl px-5 py-4 rounded-xl border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] z-20 flex items-center gap-3"
                        >
                            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Sparkles className="w-4 h-4 text-green-400" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">17 Deals</div>
                                <div className="text-[9px] text-white/40 uppercase tracking-wide">This Month</div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </motion.div>

            {/* Bottom fade for section transition */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
