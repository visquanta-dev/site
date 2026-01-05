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
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-44 pb-32">

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

            <motion.div style={{ opacity }} className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Authority & Messaging */}
                    <div className="text-left space-y-12">

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
                                Managed Revenue Recovery System
                            </span>
                        </motion.div>

                        {/* Headline - Premium Typography */}
                        <div className="space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-5xl lg:text-[4.5rem] font-bold text-white tracking-[-0.03em] leading-[0.95]"
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
                                className="text-xl text-white/45 max-w-lg leading-[1.8] font-normal"
                            >
                                We use managed conversational SMS to re-engage leads who went quiet—transforming dormant database entries into booked appointments and sold units.
                            </motion.p>
                        </div>

                        {/* Authority Proof - Premium Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            className="grid grid-cols-3 gap-0 py-10 border-y border-white/[0.06]"
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
                                        className="text-3xl lg:text-4xl font-bold text-white tracking-tight group-hover:text-[#FF7404] transition-colors duration-500"
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
                            className="flex flex-wrap items-center gap-5"
                        >
                            <button
                                onClick={onOpenCalculator}
                                className="group relative px-10 py-5 overflow-hidden"
                            >
                                {/* Button gradient background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-lg" />
                                {/* Shimmer effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-lg" />
                                {/* Inner shadow for depth */}
                                <div className="absolute inset-[1px] bg-gradient-to-b from-white/20 to-transparent rounded-[7px] opacity-50" />
                                <span className="relative z-10 flex items-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                                    Start Revenue Audit
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>

                            <button className="group relative px-8 py-5 rounded-lg overflow-hidden">
                                <div className="absolute inset-0 border border-white/20 rounded-lg group-hover:border-[#FF7404]/50 transition-colors duration-300" />
                                <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-[#FF7404]/[0.05] transition-colors duration-300 rounded-lg" />
                                <span className="relative z-10 flex items-center gap-3 text-white/80 group-hover:text-white font-semibold text-sm uppercase tracking-widest transition-colors">
                                    Request a Demo
                                </span>
                            </button>
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
                                title="Sarah (Specialist)"
                                messages={[
                                    { id: '1', sender: 'agent', content: "Hi Mark, it's Sarah from Westline Motors. You popped in a while back to look at a Hyundai Tucson, so I just wanted to check if you're still considering one." },
                                    { id: '2', sender: 'user', content: "Yeah, I might be, just starting to look again." },
                                    { id: '3', sender: 'agent', content: "No problem at all. We've had some updated Tucson models come in recently. Would you be open to a quick call with one of our sales team to go over options?" },
                                    { id: '4', sender: 'user', content: "Yes, that's fine." },
                                    { id: '5', sender: 'agent', content: "Perfect. I can book a call back for Friday at 3pm. Does that work for you?" },
                                    { id: '6', sender: 'user', content: "Yes." },
                                    { id: '7', sender: 'agent', content: "Great, you're all set. One of the team will give you a call Friday at 3pm. Speak then." },
                                    {
                                        id: '8',
                                        sender: 'system',
                                        type: 'notification',
                                        content: (
                                            <div className="mt-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 flex items-center gap-4 backdrop-blur-sm">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                                                    <BarChart3 className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold text-sm uppercase tracking-wide">Appointment Booked</div>
                                                    <div className="text-[11px] text-green-400/80 font-mono tracking-wide">SYNCED TO VINSOLUTIONS CRM</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                ]}
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
                                    <TrendingUp className="w-5 h-5 text-[#FF7404]" />
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
