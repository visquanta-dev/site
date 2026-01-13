'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Zap, Play, ShieldCheck, BarChart3, TrendingUp, Sparkles } from 'lucide-react';
import Link from 'next/link';
import PhoneDemo from './PhoneDemo';
import { useRef } from 'react';

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
                                Lead Reactivation System
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
                                <span className="block">The Easiest Cars</span>
                                <span className="block">You'll Sell</span>
                                <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                                    Are Already in Your CRM.
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-base sm:text-lg md:text-xl text-white/45 max-w-lg leading-[1.8] font-medium"
                            >
                                We use managed conversational SMS to re-engage leads who went quiet—transforming dormant database entries into booked appointments and sold units.
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

                        {/* Authority Proof - Premium Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            className="grid grid-cols-3 gap-0 py-6 sm:py-8 lg:py-10 border-y border-white/[0.06]"
                        >
                            {[
                                { value: "$35M+", label: "Total Revenue", sublabel: "Recovered" },
                                { value: "6,724", label: "Vehicles", sublabel: "Sold" },
                                { value: "39%+", label: "Engagement", sublabel: "Rate" },
                            ].map((stat, i) => (
                                <div key={i} className="text-center lg:text-left group cursor-default">
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.4 + i * 0.1 }}
                                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#FF7404] transition-colors duration-500"
                                    >
                                        {stat.value}
                                    </motion.div>
                                    <div className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium mt-2">
                                        {stat.label}
                                        <span className="block text-white/20">{stat.sublabel}</span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* CTAs - Premium Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                            className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-5"
                        >
                            <button
                                onClick={onOpenCalculator}
                                className="group relative px-8 sm:px-10 py-5 overflow-hidden text-center"
                            >
                                {/* Button gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-lg" />
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg" />
                                {/* Inner shadow for depth */}
                                <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[7px] opacity-50" />
                                <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black text-sm uppercase tracking-widest whitespace-nowrap">
                                    Start Revenue Audit
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <Link
                                href="/book-demo"
                                className="group relative px-8 py-5 rounded-lg overflow-hidden text-center border border-white/20 hover:border-[#FF7404]/50 hover:bg-[#FF7404]/[0.05] transition-all"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3 text-white/80 group-hover:text-white font-black text-sm uppercase tracking-widest transition-colors">
                                    {/* Desktop text */}
                                    <span className="hidden sm:inline">Request a Demo</span>
                                    {/* Mobile text */}
                                    <span className="inline sm:hidden">Chat With Us</span>
                                </span>
                            </Link>
                        </motion.div>

                        {/* Social Proof - Minimal Elegance */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.8 }}
                            className="pt-12"
                        >
                            <span className="text-[10px] font-medium text-white/25 uppercase tracking-[0.4em] block mb-8">
                                Trusted By Leading Dealer Groups
                            </span>
                            <div className="flex flex-wrap items-center gap-4">
                                {logos.map((logo, i) => (
                                    <motion.span
                                        key={logo.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.9 + i * 0.1 }}
                                        className="text-white/40 font-medium text-sm tracking-tight px-5 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 hover:text-white/60 transition-all duration-300 cursor-default"
                                    >
                                        {logo.name}
                                    </motion.span>
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
