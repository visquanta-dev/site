'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
    Building2,
    Target,
    History,
    Layers,
    ArrowRight,
    CheckCircle2,
    ShieldCheck,
    BarChart3,
    Users,
    Zap,
    Scale,
    Trophy
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { RequestDemoButton } from '@/components/CalendlyModal';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const dealerSegments = [
    {
        id: 'franchise',
        title: "Franchise Dealers",
        icon: Building2,
        desc: "Protect your CSI scores and secure OEM bonuses with AI that adheres to strict brand compliance.",
        link: "/dealers/franchise",
        stat: "100% OEM Compliant",
        color: "from-blue-500 to-indigo-600"
    },
    {
        id: 'independent',
        title: "Independent Dealers",
        icon: Target,
        desc: "Operate like a major retailer with lean teams. Maximize every lead and turn inventory faster.",
        link: "/dealers/independent",
        stat: "24/7 Virtual BDC",
        color: "from-emerald-400 to-green-600"
    },
    {
        id: 'pre-owned',
        title: "Pre-Owned Specialists",
        icon: History,
        desc: "Dominate the local used market by mining your CRM for trade-ins and reactivating dormant leads.",
        link: "/dealers/pre-owned",
        stat: "High-Volume Mining",
        color: "from-purple-500 to-pink-500"
    },
    {
        id: 'groups',
        title: "Auto Groups",
        icon: Layers,
        desc: "Centralized control for multi-rooftop operations. Unified reporting and scalable AI workflows.",
        link: "/dealers/auto-groups",
        stat: "Enterprise Scale",
        status: "ESTABLISHED",
        color: "from-orange-500 to-orange-700"
    }
];



// Performance Ticker
const LiveTicker = () => (
    <div className="w-full bg-white/[0.02] backdrop-blur-md border-y border-white/5 h-14 overflow-hidden flex relative z-20 items-center">
        <div className="h-full px-8 flex items-center bg-[#FF7404] text-black text-xs font-black uppercase tracking-widest shrink-0 z-20 shadow-[10px_0_30px_rgba(255,116,4,0.2)]">
            Live Performance
        </div>
        <div className="absolute left-[180px] inset-y-0 w-32 bg-gradient-to-r from-[#020202] to-transparent z-10" />

        <motion.div
            className="flex gap-16 whitespace-nowrap pl-8"
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
            {[...Array(8)].map((_, i) => (
                <div key={i} className="flex gap-16 text-sm items-center font-medium">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-white">Lead Reactivated:</span> <span className="text-zinc-400">2021 Ford F-150</span>
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-white">Appointment Set:</span> <span className="text-zinc-400">Service Drive</span>
                    </span>
                    <span className="text-zinc-500">•</span>
                    <span className="flex items-center gap-2">
                        <span className="text-white">Equity Found:</span> <span className="text-zinc-400">Trade-in Opportunity</span>
                    </span>
                </div>
            ))}
        </motion.div>
    </div>
);

// Beating Heart Background Effect
const HeartLine = () => (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <svg className="w-full h-[400px] opacity-10" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <motion.path
                d="M -100 100 L 350 100 L 370 100 L 380 70 L 400 130 L 415 20 L 435 180 L 450 100 L 470 110 L 480 100 L 1100 100"
                stroke="#FF7404"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1]
                }}
            />
        </svg>
    </div>
);

export default function DealerHub() {
    const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black relative overflow-x-hidden">
            <Navigation />

            {/* Cinematic Background Auras */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#FF7404]/5 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[160px] opacity-20" />
            </div>

            {/* 1. HERO: COMMAND CENTER */}
            <section className="relative pt-40 pb-0 overflow-hidden min-h-[90vh] flex flex-col justify-center">
                <div className="absolute inset-0 pointer-events-none">
                    <HeartLine />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gradient-to-b from-[#FF7404]/10 to-transparent rounded-full blur-[150px] opacity-20" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
                    <div className="absolute bottom-0 inset-x-0 h-96 bg-gradient-to-t from-[#020202] via-[#020202]/80 to-transparent" />
                </div>

                <div className="container px-4 mx-auto relative z-10 flex-grow flex items-center">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 text-[#FF7404] text-[11px] font-bold uppercase tracking-widest mb-10"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                System Live // Car Dealership AI
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-[11rem] font-black text-white mb-10 tracking-[-0.08em] leading-[0.85] uppercase"
                            >
                                TOTAL. <br />
                                MARKET. <br />
                                <span className="text-transparent bg-clip-text bg-[linear-gradient(135deg,#FF7404_0%,#FF9040_50%,#FFF_100%)] drop-shadow-[0_10px_30px_rgba(255,116,4,0.3)]">
                                    CONTROL.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
                            >
                                Stop reactive management. Install the <strong className="text-white font-bold">beating heart</strong> of high-volume retail. Our car dealership AI empowers your sales team to earn more, eliminates BDC friction, and maximizes inventory turnover.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                <LiveTicker />
            </section>

            {/* 2. THE HUB VISUAL: Segment Grid */}
            <section className="py-24 border-y border-white/5 bg-[#010101]">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
                        {dealerSegments.map((segment) => (
                            <motion.div
                                key={segment.id}
                                onMouseEnter={() => setHoveredSegment(segment.id)}
                                onMouseLeave={() => setHoveredSegment(null)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative group p-10 rounded-sm border transition-all duration-700 overflow-hidden ${hoveredSegment === segment.id
                                    ? 'bg-white/[0.05] border-[#FF7404]/50 shadow-[0_30px_100px_-20px_rgba(255,116,4,0.2)] scale-[1.02]'
                                    : 'bg-white/[0.01] border-white/5'
                                    }`}
                            >
                                {/* Scanner Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF7404]/10 to-transparent opacity-0 group-hover:animate-scanner pointer-events-none" />

                                {/* Technical Corner Markers */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-white/10 group-hover:border-[#FF7404] transition-all duration-500" />
                                <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-white/10 group-hover:border-[#FF7404] transition-all duration-500" />
                                <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-white/10 group-hover:border-[#FF7404] transition-all duration-500" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-white/10 group-hover:border-[#FF7404] transition-all duration-500" />

                                {/* Status Label Overlay */}
                                <div className={`absolute top-6 right-8 text-[10px] font-bold text-[#FF7404] uppercase tracking-widest transition-all duration-500 ${hoveredSegment === segment.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                                    Strategic Solution
                                </div>

                                {/* Gradient Hover Background */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-5 blur-[80px] transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-8">
                                        <div className="relative">
                                            <motion.div
                                                className={`w-16 h-16 rounded-none bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden`}
                                                whileHover={{ scale: 1.1 }}
                                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                            >
                                                <motion.div
                                                    animate={{
                                                        y: [0, -4, 0],
                                                    }}
                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }}
                                                >
                                                    <segment.icon className="w-8 h-8 text-white" />
                                                </motion.div>

                                                {/* Sparkle/Glow effect */}
                                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7404]/0 via-[#FF7404]/5 to-[#FF7404]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            </motion.div>

                                            {/* Shadcn-style Status Badge */}
                                            {segment.status && (
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10, scale: 0.8 }}
                                                    animate={hoveredSegment === segment.id ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -10, scale: 0.8 }}
                                                    className="absolute -top-3 -left-3 z-20"
                                                >
                                                    <div className="bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md px-2 py-0.5 rounded-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                                        <span className="text-[9px] font-black text-emerald-400 uppercase tracking-widest flex items-center gap-1">
                                                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                                                            {segment.status}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </div>

                                        <div className="px-3 py-1 bg-white/5 border-l-2 border-[#FF7404] text-[10px] font-black text-white uppercase tracking-widest">
                                            {segment.stat}
                                        </div>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-[#FF7404] transition-colors tracking-tight">
                                        {segment.title}
                                    </h3>

                                    <p className="text-zinc-500 text-lg leading-relaxed mb-10 flex-grow font-light">
                                        {segment.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                        <Link
                                            href={segment.link}
                                            className="flex items-center gap-3 text-sm font-bold text-white group-hover:text-[#FF7404] transition-colors uppercase tracking-widest text-xs"
                                        >
                                            View Solution
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. INTEGRATION ARCHITECTURE */}
            <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent" />

                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 text-[#FF7404] font-mono text-xs font-bold uppercase tracking-widest mb-6">
                                    <div className="w-2 h-2 bg-[#FF7404] rounded-full animate-pulse" />
                                    DMS INTEGRATION
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1.1]">
                                    We don't just "software." <br />
                                    <span className="text-zinc-500">We become the </span>
                                    <span className="text-white">beating heart of your store.</span>
                                </h2>
                                <p className="text-lg text-zinc-400 mb-10 leading-relaxed font-light">
                                    Generic tools sit on top of your data. VisQuanta works from the inside out. We plug directly into your DMS to move inventory and book service appointments while you sleep—no new dashboards, no learning curves.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="p-5 border border-white/10 bg-white/[0.02] rounded-xl flex flex-col gap-3">
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-black">WHAT WE SEE</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-medium text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]/40" />
                                                Live Inventory
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-medium text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]/40" />
                                                Customer History
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-medium text-sm">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]/40" />
                                                Service Drive Status
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-5 border border-[#FF7404]/30 bg-[#FF7404]/5 rounded-xl flex flex-col gap-3">
                                        <div className="text-[10px] text-[#FF7404] uppercase tracking-[0.2em] font-black">WHAT WE DO</div>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                                Book Appointments
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                                Update Your CRM
                                            </div>
                                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                                Log Every Interaction
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-purple-500/5 rounded-3xl blur-2xl" />
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-20">
                                    <Layers className="w-24 h-24 text-white" />
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-white/5 pb-4">
                                        <span className="text-sm text-zinc-500 font-mono">CONNECTION_STATUS</span>
                                        <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded border border-green-500/20 font-bold">ESTABLISHED</span>
                                    </div>

                                    <div className="space-y-3">
                                        {[
                                            { name: "CDK Global", id: "DMS_01", status: "SYNCED" },
                                            { name: "Reynolds & Reynolds", id: "DMS_02", status: "SYNCED" },
                                            { name: "VinSolutions", id: "CRM_01", status: "SYNCED" },
                                            { name: "Dealertrack", id: "DMS_03", status: "SYNCED" },
                                            { name: "Tekion", id: "DMS_04", status: "PENDING" },
                                            { name: "ProMax", id: "CRM_02", status: "SYNCED" },
                                        ].map((dms, i) => (
                                            <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-2 h-2 rounded-full ${dms.status === 'SYNCED' ? 'bg-[#FF7404]' : 'bg-zinc-700'}`} />
                                                    <span className="text-sm font-bold text-white">{dms.name}</span>
                                                </div>
                                                <div className="flex items-center gap-4">
                                                    <span className="text-[10px] font-mono text-zinc-600">{dms.id}</span>
                                                    <code className="text-[10px] text-zinc-500 group-hover:text-white transition-colors">
                                                        {dms.status}
                                                    </code>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4 mt-2 grid grid-cols-3 gap-2 text-center">
                                        <div className="py-2 bg-white/[0.02] rounded border border-white/5">
                                            <div className="text-lg font-bold text-white">40ms</div>
                                            <div className="text-[10px] text-zinc-600 uppercase">Latency</div>
                                        </div>
                                        <div className="py-2 bg-white/[0.02] rounded border border-white/5">
                                            <div className="text-lg font-bold text-white">256-bit</div>
                                            <div className="text-[10px] text-zinc-600 uppercase">Encrypt</div>
                                        </div>
                                        <div className="py-2 bg-white/[0.02] rounded border border-white/5">
                                            <div className="text-lg font-bold text-white">99.9%</div>
                                            <div className="text-[10px] text-zinc-600 uppercase">Uptime</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. RESULTS & FIELD REPORTS */}
            <section className="py-32 bg-[#020202] border-t border-white/5 relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    {/* Section Header */}
                    <div className="text-center max-w-4xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 text-[#FF7404] font-mono text-xs font-bold uppercase tracking-widest mb-6">
                                <div className="w-2 h-2 bg-[#FF7404] rounded-full animate-pulse" />
                                Impact Telemetry
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                                Results that speak for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">themselves.</span>
                            </h2>
                            <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
                                From lead reactivation to Service Drive missed calls, we provide the absolute data-driven performance needed to maximize every profit center.
                            </p>
                        </motion.div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24">
                        {[
                            { label: "Extra Revenue Generated", value: "$37.8M", icon: Zap, sub: "For partner dealerships" },
                            { label: "Vehicles Sold", value: "7,192+", icon: Building2, sub: "From reactivated leads" },
                            { label: "Conversion Lift", value: "11.6%", icon: BarChart3, sub: "Average sales increase" },
                            { label: "Dealer Retention", value: "98%", icon: Users, sub: "Partner satisfaction rate" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-20 group-hover:opacity-100 transition-opacity" />
                                <stat.icon className="w-8 h-8 text-[#FF7404] mb-6 opacity-80" />
                                <div className="text-4xl font-black text-white mb-2 tracking-tight group-hover:scale-105 transition-transform origin-left">
                                    {stat.value}
                                </div>
                                <div className="text-sm font-bold text-white mb-1">{stat.label}</div>
                                <div className="text-xs text-zinc-500 font-mono">{stat.sub}</div>
                            </motion.div>
                        ))}
                    </div>


                </div>
            </section>

            {/* 5. FINAL CTA: EVOLUTIONARY ULTIMATUM */}
            <section className="py-24 bg-[#020202] relative overflow-hidden text-center border-t border-white/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,116,4,0.08),transparent_70%)]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                            <ShieldCheck className="w-3 h-3" />
                            Market Critical Warning
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            ADAPT OR <span className="text-zinc-700">DECAY.</span>
                        </h2>

                        <div className="space-y-8 mb-12 max-w-3xl mx-auto">
                            <div className="text-[#FF7404] font-mono text-[10px] tracking-[0.4em] uppercase opacity-80">
                                Status Check // Market Evolution 2024
                            </div>

                            <h3 className="text-2xl md:text-4xl font-light text-zinc-400 leading-tight tracking-tight">
                                The gap between stores using <span className="text-white font-bold italic">car dealership AI</span> and traditional lots is widening every hour.
                            </h3>

                            <div className="flex items-center justify-center gap-4">
                                <div className="h-px flex-grow bg-white/5" />
                                <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]/50" />
                                <div className="h-px flex-grow bg-white/5" />
                            </div>

                            <div className="space-y-4">
                                <p className="text-xl md:text-3xl text-white font-black tracking-tighter uppercase">
                                    Manual operations are no longer a viable business model.
                                </p>
                                <p className="text-lg md:text-xl text-zinc-500 font-light italic">
                                    Will you capture the market, or let your CRM become a graveyard?
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                            <RequestDemoButton
                                className="w-full sm:w-auto px-12 py-6 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-xl rounded-2xl transition-all shadow-[0_0_50px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,116,4,0.6)] hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
                            >
                                Secure Your Territory
                                <ArrowRight className="w-6 h-6" />
                            </RequestDemoButton>
                        </div>
                        <p className="mt-6 text-xs text-zinc-600 font-mono">
                            LIMITED ONBOARDING SLOTS AVAILABLE FOR Q1
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
