'use client';

import { motion, useInView } from 'framer-motion';
import { Globe, Car, Users, MessageCircle, DollarSign, Phone, CalendarCheck, UserCheck, Zap, Activity } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const leadSources = [
    { label: "AutoTrader", icon: Car, desc: "Vehicle marketplace", image: "/images/Autotrader.png" },
    { label: "Cars.com", icon: Globe, desc: "Listing platform", image: "/images/CarsComCard.png" },
    { label: "CarGurus", icon: Users, desc: "Shopping site", image: "/images/CarGurus.png" },
    { label: "Facebook Ads", icon: DollarSign, desc: "Social campaigns", image: "/images/FacebookAds.svg" },
    { label: "Google", icon: Globe, desc: "Search & Maps", image: "/images/Google.svg" },
    { label: "CARFAX", icon: Zap, desc: "Vehicle history", image: "/images/Carfax.svg" }
];

const systemActions = [
    { label: "Instant First Contact", desc: "Response in seconds", metric: "<60s" },
    { label: "Two-Way Conversation", desc: "Real engagement", metric: "24/7" },
    { label: "Qualification Capture", desc: "Intent confirmed", metric: "100%" },
    { label: "Call Booking", desc: "Synced to CRM", metric: "Auto" }
];

const outcomes = [
    { label: "Booked Calls", icon: Phone, stat: "+340%" },
    { label: "Scheduled Appointments", icon: CalendarCheck, stat: "+127%" },
    { label: "Sales Team Handoff", icon: UserCheck, stat: "Instant" }
];

// Animated flow path with arrowhead particles
function FlowPath({ x1, y1, x2, y2, color, type }: {
    x1: number; y1: number; x2: number; y2: number; color: 'orange' | 'green'; type: 'left' | 'right'
}) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    if (isMobile) return null;

    // Calculate Bezier Control Points for smooth S-curve
    const distX = x2 - x1;
    const cp1x = x1 + (distX * 0.5);
    const cp1y = y1;
    const cp2x = x2 - (distX * 0.5);
    const cp2y = y2;

    const pathData = `M ${x1} ${y1} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x2} ${y2}`;
    const uniqueId = `flow-${Math.floor(x1)}-${Math.floor(y1)}-${type}`;
    const mainColor = color === 'orange' ? '#FF7404' : '#22c55e';

    // Particle Configuration
    const particleCount = 1;
    const duration = type === 'left' ? 3 : 2;

    return (
        <g className="pointer-events-none">
            <defs>
                <filter id={`glow-${uniqueId}`}>
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Visible guide path */}
            <path
                d={pathData}
                stroke={mainColor}
                strokeWidth="1.5"
                fill="none"
                opacity="0.25"
                strokeDasharray="6 8"
            />

            {/* Moving Arrowhead Particles */}
            {Array.from({ length: particleCount }).map((_, i) => (
                <g key={i} opacity="0" filter={`url(#glow-${uniqueId})`}>
                    {/* Arrowhead shape pointing right (direction of travel) */}
                    <polygon
                        points="0,-4 8,0 0,4"
                        fill={mainColor}
                    />
                    <animateMotion
                        dur={`${duration}s`}
                        repeatCount="indefinite"
                        path={pathData}
                        begin={`-${(i * duration) / particleCount}s`}
                        rotate="auto"
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                    />
                    <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.08;0.92;1"
                        dur={`${duration}s`}
                        repeatCount="indefinite"
                        begin={`-${(i * duration) / particleCount}s`}
                    />
                </g>
            ))}
        </g>
    );
}

// Animated border component for center box
function AnimatedBorder() {
    return (
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <motion.div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(90deg, transparent, #FF7404, transparent)',
                    backgroundSize: '200% 100%',
                }}
                animate={{
                    backgroundPosition: ['200% 0', '-200% 0'],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <div className="absolute inset-[1px] bg-[#0a0a0a]/95 rounded-3xl" />
        </div>
    );
}

export default function InterceptionLayer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerLeftDotRef = useRef<HTMLDivElement>(null);
    const centerRightDotRef = useRef<HTMLDivElement>(null);
    const sourceDotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const outcomeDotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [paths, setPaths] = useState<{ x1: number; y1: number; x2: number; y2: number; type: 'left' | 'right' }[]>([]);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const calculatePaths = () => {
            if (!containerRef.current || !centerLeftDotRef.current || !centerRightDotRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const centerLeftDot = centerLeftDotRef.current.getBoundingClientRect();
            const centerRightDot = centerRightDotRef.current.getBoundingClientRect();

            // Center points relative to container
            const cL = {
                x: centerLeftDot.left + centerLeftDot.width / 2 - containerRect.left,
                y: centerLeftDot.top + centerLeftDot.height / 2 - containerRect.top
            };
            const cR = {
                x: centerRightDot.left + centerRightDot.width / 2 - containerRect.left,
                y: centerRightDot.top + centerRightDot.height / 2 - containerRect.top
            };

            const newPaths: typeof paths = [];

            // Left connections (Lead Sources -> Center Input)
            sourceDotRefs.current.forEach((dotRef) => {
                if (dotRef) {
                    const dotRect = dotRef.getBoundingClientRect();
                    newPaths.push({
                        x1: dotRect.left + dotRect.width / 2 - containerRect.left,
                        y1: dotRect.top + dotRect.height / 2 - containerRect.top,
                        x2: cL.x,
                        y2: cL.y,
                        type: 'left'
                    });
                }
            });

            // Right connections (Center Output -> Outcomes)
            outcomeDotRefs.current.forEach((dotRef) => {
                if (dotRef) {
                    const dotRect = dotRef.getBoundingClientRect();
                    newPaths.push({
                        x1: cR.x,
                        y1: cR.y,
                        x2: dotRect.left + dotRect.width / 2 - containerRect.left,
                        y2: dotRect.top + dotRect.height / 2 - containerRect.top,
                        type: 'right'
                    });
                }
            });

            setPaths(newPaths);
        };

        const timer = setTimeout(calculatePaths, 200);
        window.addEventListener('resize', calculatePaths);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculatePaths);
        };
    }, [isInView]);

    return (
        <section className="py-28 sm:py-32 lg:py-40 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Noise texture */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient glows */}
                <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#FF7404]/[0.025] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-green-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.015] rounded-full blur-[200px] pointer-events-none" />

                {/* Top accent line */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-16 sm:mb-20 lg:mb-24 max-w-3xl mx-auto"
                >
                    {/* Premium badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-full mb-8 shadow-[0_0_30px_-10px_rgba(255,116,4,0.3)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                        </span>
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">System Architecture</span>
                    </motion.div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-[-0.02em] leading-[1.1]">
                        The Interception{' '}
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Layer.
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
                        Every inbound lead, from any source, flows through a single managed response layer before reaching your sales team.
                    </p>
                </motion.div>

                {/* System Flow Map - Desktop */}
                <div ref={containerRef} className="hidden lg:block relative">

                    {/* SVG Lines Layer */}
                    {isInView && paths.length > 0 && (
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ zIndex: 5 }}
                        >
                            {paths.map((path, i) => (
                                <FlowPath
                                    key={i}
                                    x1={path.x1}
                                    y1={path.y1}
                                    x2={path.x2}
                                    y2={path.y2}
                                    color={path.type === 'left' ? 'orange' : 'green'}
                                    type={path.type}
                                />
                            ))}
                        </svg>
                    )}

                    <div className="grid grid-cols-[1fr_2fr_1fr] gap-12 xl:gap-20 items-center relative z-10">

                        {/* Left: Lead Sources */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Lead Sources</span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                            </div>
                            {leadSources.map((source, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    whileHover={{ x: 4 }}
                                    className="group relative w-full h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 flex items-center justify-start overflow-hidden transition-colors hover:border-zinc-700"
                                >
                                    {source.image ? (
                                        <div className="relative h-full w-full flex items-center justify-center p-2">
                                            <Image
                                                src={source.image}
                                                alt={source.label}
                                                width={180}
                                                height={56}
                                                className={`h-full w-auto object-contain ${source.label === 'CARFAX' ? 'brightness-0 invert' : ''}`}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex items-center gap-3">
                                            <source.icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
                                            <span className="text-sm text-zinc-400 group-hover:text-white transition-colors">{source.label}</span>
                                        </div>
                                    )}

                                    {/* Connection dot - hidden ref only, positioned at right edge vertically centered */}
                                    <div
                                        ref={el => { sourceDotRefs.current[i] = el; }}
                                        className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none opacity-0"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Middle: Speed to Lead Layer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Outer glow ring */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#FF7404]/20 via-[#FF7404]/10 to-green-500/20 rounded-[28px] blur-xl opacity-60" />

                            {/* Main container with animated border */}
                            <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl rounded-3xl border border-white/[0.08] overflow-hidden shadow-[0_0_100px_-30px_rgba(255,116,4,0.3)]">
                                {/* Animated top border */}
                                <div className="absolute top-0 inset-x-0 h-[2px] overflow-hidden">
                                    <motion.div
                                        className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent"
                                        animate={{ x: ['-100%', '400%'] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                    />
                                </div>

                                {/* Inner glow effects */}
                                <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#FF7404]/20 rounded-full blur-[100px] pointer-events-none" />
                                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-500/15 rounded-full blur-[100px] pointer-events-none" />

                                {/* Hidden refs for path calculation - no visible nodes */}
                                <div
                                    ref={centerLeftDotRef}
                                    className="absolute left-0 top-[68%] -translate-y-1/2 w-1 h-1 pointer-events-none"
                                />
                                <div
                                    ref={centerRightDotRef}
                                    className="absolute right-0 top-[68%] -translate-y-1/2 w-1 h-1 pointer-events-none"
                                />

                                <div className="relative z-10 p-8 xl:p-10">
                                    {/* Header */}
                                    <div className="text-center mb-8">
                                        <motion.div
                                            className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-gradient-to-r from-[#FF7404] to-[#FF9040] rounded-full mb-5"
                                            animate={{
                                                boxShadow: [
                                                    '0 0 20px rgba(255,116,4,0.3), 0 0 40px rgba(255,116,4,0.1)',
                                                    '0 0 30px rgba(255,116,4,0.5), 0 0 60px rgba(255,116,4,0.2)',
                                                    '0 0 20px rgba(255,116,4,0.3), 0 0 40px rgba(255,116,4,0.1)'
                                                ]
                                            }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Zap className="w-4 h-4 text-black fill-black" />
                                            <span className="text-sm font-black text-black uppercase tracking-wider">Speed to Lead</span>
                                        </motion.div>
                                        <h3 className="text-white font-bold text-2xl xl:text-3xl tracking-tight">Managed Response Layer</h3>

                                        {/* Live status indicator */}
                                        <div className="flex items-center justify-center gap-2 mt-3">
                                            <Activity className="w-3.5 h-3.5 text-green-400" />
                                            <span className="text-xs text-green-400 font-medium">Processing leads in real-time</span>
                                        </div>
                                    </div>

                                    {/* Action cards with sequential highlight */}
                                    <div className="grid grid-cols-2 gap-3">
                                        {systemActions.map((action, i) => {
                                            // Sequential timing: each card highlights for 1.5s in a 6s cycle
                                            const cycleLength = 6; // Total cycle duration
                                            const highlightDuration = 1.2;
                                            const delay = i * 1.5;

                                            return (
                                                <motion.div
                                                    key={i}
                                                    className="group relative p-5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.05] rounded-xl hover:border-[#FF7404]/30 transition-all duration-300 overflow-hidden"
                                                    whileHover={{ scale: 1.02, y: -2 }}
                                                    animate={{
                                                        borderColor: [
                                                            'rgba(255,255,255,0.05)',
                                                            'rgba(255,116,4,0.5)',
                                                            'rgba(255,255,255,0.05)'
                                                        ],
                                                        boxShadow: [
                                                            '0 0 0px rgba(255,116,4,0)',
                                                            '0 0 20px rgba(255,116,4,0.15)',
                                                            '0 0 0px rgba(255,116,4,0)'
                                                        ]
                                                    }}
                                                    transition={{
                                                        duration: highlightDuration,
                                                        delay: delay,
                                                        repeat: Infinity,
                                                        repeatDelay: cycleLength - highlightDuration,
                                                        ease: 'easeInOut'
                                                    }}
                                                >
                                                    {/* Hover gradient */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/0 to-[#FF7404]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                                    <div className="relative">
                                                        <div className="flex items-start justify-between mb-2">
                                                            <div className="text-white font-semibold text-sm leading-tight">{action.label}</div>
                                                            {/* Pulsing metric badge */}
                                                            <motion.div
                                                                className="text-[10px] font-bold text-[#FF7404] bg-[#FF7404]/10 px-2 py-0.5 rounded-full"
                                                                animate={{
                                                                    boxShadow: [
                                                                        '0 0 0px rgba(255,116,4,0.3)',
                                                                        '0 0 8px rgba(255,116,4,0.6)',
                                                                        '0 0 0px rgba(255,116,4,0.3)'
                                                                    ]
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    repeat: Infinity,
                                                                    ease: 'easeInOut'
                                                                }}
                                                            >
                                                                {action.metric}
                                                            </motion.div>
                                                        </div>
                                                        <div className="text-[11px] text-white/40">{action.desc}</div>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Outcomes */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-3"
                        >
                            <div className="flex items-center justify-center gap-2 mb-6">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                                <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-medium">Outcomes</span>
                                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                            </div>
                            {outcomes.map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.08 }}
                                    whileHover={{ x: -4 }}
                                    className="group flex items-center gap-4 p-4 bg-gradient-to-l from-green-500/[0.04] to-transparent border border-green-500/[0.12] rounded-2xl hover:border-green-500/30 hover:bg-green-500/[0.06] transition-all duration-300 cursor-default relative overflow-hidden"
                                >
                                    {/* Hover glow */}
                                    <div className="absolute inset-0 bg-gradient-to-l from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Connection dot - hidden ref only */}
                                    <div
                                        ref={el => { outcomeDotRefs.current[i] = el; }}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 pointer-events-none opacity-0"
                                    />
                                    <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-green-500/25 to-green-500/10 border border-green-500/25 flex items-center justify-center group-hover:border-green-500/40 group-hover:shadow-[0_0_20px_-5px_rgba(34,197,94,0.4)] transition-all duration-300">
                                        <outcome.icon className="w-5 h-5 text-green-400" />
                                    </div>
                                    <div className="flex-1 relative">
                                        <span className="text-sm text-green-400/90 font-semibold block group-hover:text-green-300 transition-colors">{outcome.label}</span>
                                        <span className="text-[10px] text-green-500/50 font-medium">{outcome.stat}</span>


                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                {/* Mobile Flow (Stacked) */}
                <div className="lg:hidden space-y-6">
                    {/* Sources */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                            <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Lead Sources</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                        </div>
                        <div className="grid grid-cols-2 gap-2.5">
                            {leadSources.map((source, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 p-3 bg-white/[0.02] border border-white/[0.04] rounded-xl"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center">
                                        <source.icon className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <span className="text-xs text-white/60 font-medium">{source.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Arrow */}
                    <div className="flex flex-col items-center py-3">
                        <motion.div
                            className="w-1 h-14 rounded-full relative overflow-hidden bg-[#FF7404]/20"
                        >
                            <motion.div
                                className="absolute w-full h-5 bg-gradient-to-b from-transparent via-[#FF7404] to-transparent rounded-full"
                                animate={{ y: ['-100%', '250%'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#FF7404] mt-1" />
                    </div>

                    {/* Middle */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF7404]/30 to-green-500/20 rounded-2xl blur-lg opacity-50" />
                        <div className="relative bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-5 overflow-hidden">
                            {/* Inner glows */}
                            <div className="absolute -top-16 -left-16 w-32 h-32 bg-[#FF7404]/20 rounded-full blur-[60px]" />
                            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-green-500/15 rounded-full blur-[60px]" />

                            <div className="relative z-10">
                                <div className="text-center mb-5">
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FF7404] to-[#FF9040] rounded-full mb-3 shadow-[0_0_20px_rgba(255,116,4,0.3)]">
                                        <Zap className="w-3.5 h-3.5 text-black fill-black" />
                                        <span className="text-xs font-bold text-black uppercase tracking-wider">Speed to Lead</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg">Managed Response Layer</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-2.5">
                                    {systemActions.map((action, i) => (
                                        <div key={i} className="p-3 bg-white/[0.02] border border-white/[0.05] rounded-lg">
                                            <div className="flex items-center justify-between mb-1">
                                                <div className="text-white font-medium text-xs">{action.label}</div>
                                                <div className="text-[9px] font-bold text-[#FF7404]">{action.metric}</div>
                                            </div>
                                            <div className="text-[10px] text-white/40">{action.desc}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Animated Arrow */}
                    <div className="flex flex-col items-center py-3">
                        <motion.div
                            className="w-1 h-14 rounded-full relative overflow-hidden bg-gradient-to-b from-[#FF7404]/20 to-green-500/20"
                        >
                            <motion.div
                                className="absolute w-full h-5 bg-gradient-to-b from-transparent via-green-400 to-transparent rounded-full"
                                animate={{ y: ['-100%', '250%'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                            />
                        </motion.div>
                        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-green-500 mt-1" />
                    </div>

                    {/* Outcomes */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                            <span className="text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">Outcomes</span>
                            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                        </div>
                        <div className="space-y-2.5">
                            {outcomes.map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex items-center gap-3 p-3 bg-green-500/[0.04] border border-green-500/[0.12] rounded-xl"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-green-500/25 to-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <outcome.icon className="w-4 h-4 text-green-400" />
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-sm text-green-400 font-medium block">{outcome.label}</span>
                                        <span className="text-[10px] text-green-500/50">{outcome.stat}</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
