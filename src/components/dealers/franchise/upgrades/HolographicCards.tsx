'use client';

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { Zap, RefreshCw, Phone, Star, MessageSquare, ArrowRight, Activity, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { MouseEvent, useState, useEffect } from 'react';

const solutions = [
    {
        title: "Speed-to-Lead",
        desc: "Every lead engaged in <60s. 24/7/365.",
        fullDesc: "Every OEM program lead, third-party inquiry, and website form is engaged via SMS in under 60 seconds. Beat the competition to every customer.",
        icon: Zap,
        link: "/speed-to-lead",
        cta: "See How It Works",
        color: "#FF7404"
    },
    {
        title: "Lead Reactivation",
        desc: "Recover 8-10% of dormant leads.",
        fullDesc: "Re-engage dormant leads from your CRM with personalized AI conversations. Recover revenue from marketing you've already paid for.",
        icon: RefreshCw,
        link: "/lead-reactivation",
        cta: "Recover Lost Revenue",
        color: "#FF7404"
    },
    {
        title: "Service Drive AI",
        desc: "Answer every call. Book more hours.",
        fullDesc: "Never miss a service call. AI answers every inbound call, routes correctly, or books appointments instantly. Protect your fixed ops revenue.",
        icon: Phone,
        link: "/service-drive",
        cta: "Automate Service Calls",
        color: "#FF7404"
    },
    {
        title: "Reputation Mgmt",
        desc: "Protect CSI scores instantly.",
        fullDesc: "Flag negative reviews before factory surveys. AI responds to all reviews instantly, protecting your CSI scores and OEM bonuses.",
        icon: Star,
        link: "/reputation-management",
        cta: "Protect Your CSI",
        color: "#FF7404"
    },
    {
        title: "Smart Widget",
        desc: "Capture organic traffic 24/7.",
        fullDesc: "Convert more organic traffic. Capture leads 24/7 with an intelligent chat interface that syncs directly to your CRM.",
        icon: MessageSquare,
        link: "/website-widget",
        cta: "Capture More Traffic",
        color: "#FF7404"
    }
];

function Card({ sol, index }: { sol: typeof solutions[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse flow effect
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // 3D Tilt Effect
    const x = useSpring(0, { stiffness: 150, damping: 20 });
    const y = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateX = useTransform(y, [-0.5, 0.5], ["5deg", "-5deg"]);
    const rotateY = useTransform(x, [-0.5, 0.5], ["-5deg", "5deg"]);

    function handleMouseMoveTilt(e: MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
        handleMouseMove(e);
    }

    function handleMouseLeave() {
        setIsHovered(false);
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
            style={{
                perspective: 1000,
            }}
            className="h-full"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                onMouseMove={handleMouseMoveTilt}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                className="group relative h-full rounded-[24px] bg-[#0A0A0A] border border-white/[0.08] overflow-hidden hover:border-white/20 transition-colors duration-500"
            >
                {/* 1. Dynamic Mesh Gradient Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />

                {/* 2. Spotlight Follow Effect */}
                <motion.div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-10"
                    style={{
                        background: useMotionTemplate`
                        radial-gradient(
                          500px circle at ${mouseX}px ${mouseY}px,
                          ${sol.color}15,
                          transparent 80%
                        )
                      `
                    }}
                />

                {/* 3. Scanline Effect (Holographic) */}
                <motion.div
                    initial={{ top: "-10%" }}
                    animate={{ top: "110%" }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: index * 0.5 }}
                    className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0 pointer-events-none opacity-20"
                />

                <div className="relative p-8 h-full flex flex-col z-20">
                    {/* Header: Icon & Status */}
                    <div className="flex items-start justify-between mb-8">
                        <div className="relative">
                            <motion.div
                                animate={isHovered ? { scale: 1.1, rotate: [0, -5, 5, 0] } : { scale: 1, rotate: 0 }}
                                transition={{ duration: 0.4 }}
                                className="w-14 h-14 rounded-2xl bg-[#1A1A1A] border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-[currentColor]/30 transition-colors duration-300"
                                style={{ color: sol.color }}
                            >
                                <sol.icon className="w-6 h-6 z-10 relative" />
                                {/* Icon Glow */}
                                <div className="absolute inset-0 bg-[currentColor] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                            </motion.div>

                            {/* Connection Dot */}
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 border-[#0A0A0A]"
                                style={{ backgroundColor: sol.color }}
                            />
                        </div>
                        <div className="flex flex-col items-end">
                            <div className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest flex items-center gap-2 group-hover:text-white transition-colors">
                                <Activity className="w-3 h-3" />
                                System_0{index + 1}
                            </div>
                            {isHovered && (
                                <motion.div
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-[9px] font-mono text-[#FF7404] mt-1"
                                >
                                    ● LIVE
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight group-hover:text-[#FF7404] transition-colors duration-300">
                            {sol.title}
                        </h3>
                        <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow group-hover:text-zinc-300 transition-colors duration-300">
                            {sol.fullDesc}
                        </p>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                        <div className="flex items-center justify-between text-xs font-bold text-white group-hover:text-[#FF7404] transition-colors">
                            <span className="uppercase tracking-widest">{sol.cta}</span>
                            <motion.div
                                animate={isHovered ? { x: 5 } : { x: 0 }}
                            >
                                <ArrowRight className="w-3.5 h-3.5" />
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-3 opacity-20">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="transition-all duration-300 group-hover:opacity-100 group-hover:scale-110">
                        <path d="M1 1H5M1 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white" />
                        <path d="M19 1H15M19 1V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-white" />
                    </svg>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function HolographicCards() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden" id="enterprise-tools">
            {/* Ambient Background Pulse */}
            <motion.div
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF7404]/5 blur-[200px] rounded-full pointer-events-none"
            />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md"
                    >
                        <Sparkles className="w-3 h-3" />
                        Next-Gen Capabilities
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter"
                    >
                        Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Intelligence.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed"
                    >
                        The AutoMaster Suite unifies your entire operation. From reactivating dormant leads to protecting your reputation, every tool communicates to drive profit.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, i) => (
                        <div key={i} className={i === 3 ? "lg:col-span-1 lg:col-start-1 lg:row-start-2" : i === 4 ? "lg:col-span-2 lg:col-start-2 lg:row-start-2" : ""}>
                            <Link href={sol.link} className="block h-full">
                                <Card sol={sol} index={i} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
