'use client';

import { motion, useInView } from 'framer-motion';
import { Globe, Car, Users, MessageCircle, DollarSign, Phone, CalendarCheck, UserCheck, Zap } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const leadSources = [
    { label: "OEM Leads", icon: Car },
    { label: "Website", icon: Globe },
    { label: "Third Party", icon: Users },
    { label: "Chat", icon: MessageCircle },
    { label: "Paid Leads", icon: DollarSign }
];

const systemActions = [
    { label: "Instant First Contact", desc: "Response in seconds" },
    { label: "Two-Way Conversation", desc: "Real engagement" },
    { label: "Qualification Capture", desc: "Intent confirmed" },
    { label: "Call Booking", desc: "Synced to CRM" }
];

const outcomes = [
    { label: "Booked Calls", icon: Phone },
    { label: "Scheduled Appointments", icon: CalendarCheck },
    { label: "Sales Team Handoff", icon: UserCheck }
];

// Animated line component
function AnimatedLine({ x1, y1, x2, y2, color, delay = 0 }: {
    x1: number; y1: number; x2: number; y2: number; color: 'orange' | 'green'; delay?: number
}) {
    const gradientId = `grad-${Math.round(x1)}-${Math.round(y1)}-${color}`;
    const strokeColor = color === 'orange' ? '#FF7404' : '#22c55e';

    return (
        <g>
            <defs>
                <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor={strokeColor} stopOpacity="0.2" />
                    <stop offset="100%" stopColor={strokeColor} stopOpacity="1" />
                </linearGradient>
            </defs>
            {/* Static base line */}
            <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={strokeColor}
                strokeWidth="2"
                strokeOpacity="0.1"
            />
            {/* Animated flowing line */}
            <motion.line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={`url(#${gradientId})`}
                strokeWidth="2"
                strokeDasharray="6 10"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -32 }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    delay: delay
                }}
                style={{
                    filter: `drop-shadow(0 0 4px ${strokeColor})`
                }}
            />
        </g>
    );
}

export default function InterceptionLayer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerLeftDotRef = useRef<HTMLDivElement>(null);
    const centerRightDotRef = useRef<HTMLDivElement>(null);
    const sourceDotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const outcomeDotRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [lines, setLines] = useState<{ x1: number; y1: number; x2: number; y2: number; type: 'left' | 'right' }[]>([]);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    useEffect(() => {
        const calculateLines = () => {
            if (!containerRef.current || !centerLeftDotRef.current || !centerRightDotRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const centerLeftDot = centerLeftDotRef.current.getBoundingClientRect();
            const centerRightDot = centerRightDotRef.current.getBoundingClientRect();

            const newLines: typeof lines = [];

            // Left lines: from each source dot to center left dot
            sourceDotRefs.current.forEach((dotRef) => {
                if (dotRef) {
                    const dotRect = dotRef.getBoundingClientRect();
                    newLines.push({
                        x1: dotRect.left + dotRect.width / 2 - containerRect.left,
                        y1: dotRect.top + dotRect.height / 2 - containerRect.top,
                        x2: centerLeftDot.left + centerLeftDot.width / 2 - containerRect.left,
                        y2: centerLeftDot.top + centerLeftDot.height / 2 - containerRect.top,
                        type: 'left'
                    });
                }
            });

            // Right lines: from center right dot to each outcome dot
            outcomeDotRefs.current.forEach((dotRef) => {
                if (dotRef) {
                    const dotRect = dotRef.getBoundingClientRect();
                    newLines.push({
                        x1: centerRightDot.left + centerRightDot.width / 2 - containerRect.left,
                        y1: centerRightDot.top + centerRightDot.height / 2 - containerRect.top,
                        x2: dotRect.left + dotRect.width / 2 - containerRect.left,
                        y2: dotRect.top + dotRect.height / 2 - containerRect.top,
                        type: 'right'
                    });
                }
            });

            setLines(newLines);
        };

        // Calculate after a short delay to ensure DOM is ready
        const timer = setTimeout(calculateLines, 200);
        window.addEventListener('resize', calculateLines);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', calculateLines);
        };
    }, [isInView]);

    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[30%] left-[20%] w-[600px] h-[600px] bg-[#FF7404]/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">System Architecture</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
                        The Interception <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent">
                            Layer.
                        </span>
                    </h2>
                    <p className="text-lg text-white/40 leading-relaxed max-w-2xl mx-auto">
                        Every inbound lead, from any source, flows through a single managed response layer before reaching your sales team.
                    </p>
                </motion.div>

                {/* System Flow Map - Desktop */}
                <div ref={containerRef} className="hidden lg:block relative">

                    {/* SVG Lines Layer */}
                    {isInView && lines.length > 0 && (
                        <svg
                            className="absolute inset-0 w-full h-full pointer-events-none"
                            style={{ zIndex: 5 }}
                        >
                            {lines.map((line, i) => (
                                <AnimatedLine
                                    key={i}
                                    x1={line.x1}
                                    y1={line.y1}
                                    x2={line.x2}
                                    y2={line.y2}
                                    color={line.type === 'left' ? 'orange' : 'green'}
                                    delay={line.type === 'left' ? i * 0.1 : (i - 5) * 0.1 + 0.5}
                                />
                            ))}
                        </svg>
                    )}

                    <div className="grid grid-cols-[1fr_2fr_1fr] gap-16 items-center relative z-10">

                        {/* Left: Lead Sources */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-6 text-center">Lead Sources</div>
                            {leadSources.map((source, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 + i * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-[#0a0a0a] border border-white/[0.06] rounded-xl hover:border-[#FF7404]/30 transition-all relative group"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center group-hover:bg-[#FF7404]/20 transition-colors">
                                        <source.icon className="w-5 h-5 text-[#FF7404]" />
                                    </div>
                                    <span className="text-sm text-white/70 font-medium flex-1">{source.label}</span>
                                    {/* Glowing connection dot - REF IS ON THIS DOT */}
                                    <div
                                        ref={el => { sourceDotRefs.current[i] = el; }}
                                        className="w-4 h-4 rounded-full bg-[#FF7404] shadow-[0_0_10px_#FF7404,0_0_20px_#FF7404] relative flex-shrink-0"
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-[#FF7404]"
                                            animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Middle: Speed to Lead Layer */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="bg-[#0a0a0a]/60 backdrop-blur-xl border-2 border-[#FF7404]/30 rounded-3xl p-10 relative overflow-hidden shadow-[0_0_80px_-20px_rgba(255,116,4,0.3)]">
                                {/* Corner glows */}
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF7404]/30 rounded-full blur-[80px]" />
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-green-500/20 rounded-full blur-[80px]" />

                                {/* Input node (left) - REF IS ON THIS DOT */}
                                <div
                                    ref={centerLeftDotRef}
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#111] border-4 border-[#FF7404] shadow-[0_0_20px_#FF7404] z-20"
                                />

                                {/* Output node (right) - REF IS ON THIS DOT */}
                                <div
                                    ref={centerRightDotRef}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-8 h-8 rounded-full bg-[#111] border-4 border-green-500 shadow-[0_0_20px_#22c55e] z-20"
                                />

                                <div className="relative z-10">
                                    <div className="text-center mb-8">
                                        <motion.div
                                            className="inline-flex items-center gap-2 px-6 py-2 bg-[#FF7404] rounded-full mb-4 shadow-[0_0_30px_-5px_#FF7404]"
                                            animate={{ boxShadow: ['0 0 30px -5px #FF7404', '0 0 50px -5px #FF7404', '0 0 30px -5px #FF7404'] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <Zap className="w-4 h-4 text-black fill-black" />
                                            <span className="text-sm font-black text-black uppercase tracking-widest">Speed to Lead</span>
                                        </motion.div>
                                        <h3 className="text-white font-bold text-2xl tracking-tight">Managed Response Layer</h3>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {systemActions.map((action, i) => (
                                            <motion.div
                                                key={i}
                                                className="p-5 bg-white/[0.03] border border-white/[0.06] rounded-xl hover:border-[#FF7404]/40 transition-all hover:bg-[#FF7404]/[0.05]"
                                                whileHover={{ scale: 1.02, y: -2 }}
                                            >
                                                <div className="text-white font-semibold text-sm mb-1">{action.label}</div>
                                                <div className="text-[10px] text-white/50">{action.desc}</div>
                                            </motion.div>
                                        ))}
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
                            className="space-y-4"
                        >
                            <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-6 text-center">Outcomes</div>
                            {outcomes.map((outcome, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.05 }}
                                    className="flex items-center gap-3 p-4 bg-green-500/[0.05] border border-green-500/20 rounded-xl hover:border-green-500/40 transition-all relative group"
                                >
                                    {/* Glowing connection dot - REF IS ON THIS DOT */}
                                    <div
                                        ref={el => { outcomeDotRefs.current[i] = el; }}
                                        className="w-4 h-4 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e,0_0_20px_#22c55e] relative flex-shrink-0"
                                    >
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-green-500"
                                            animate={{ scale: [1, 1.8, 1], opacity: [1, 0, 1] }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                                        />
                                    </div>
                                    <div className="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center">
                                        <outcome.icon className="w-5 h-5 text-green-400" />
                                    </div>
                                    <span className="text-sm text-green-400 font-semibold">{outcome.label}</span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>
                </div>

                {/* Mobile Flow (Stacked) */}
                <div className="lg:hidden space-y-6">
                    {/* Sources */}
                    <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-4">Lead Sources</div>
                        <div className="grid grid-cols-2 gap-3">
                            {leadSources.map((source, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-[#0a0a0a] border border-white/[0.06] rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-[#FF7404]/10 flex items-center justify-center">
                                        <source.icon className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <span className="text-xs text-white/60">{source.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Arrow */}
                    <div className="flex flex-col items-center py-4">
                        <motion.div
                            className="w-1 h-16 rounded-full relative overflow-hidden bg-[#FF7404]/20"
                        >
                            <motion.div
                                className="absolute w-full h-6 bg-gradient-to-b from-transparent via-[#FF7404] to-transparent rounded-full"
                                animate={{ y: ['-100%', '200%'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            />
                        </motion.div>
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#FF7404] mt-1" />
                    </div>

                    {/* Middle */}
                    <div className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] border-2 border-[#FF7404]/40 rounded-2xl p-6 shadow-[0_0_50px_-15px_rgba(255,116,4,0.4)]">
                        <div className="text-center mb-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF7404] rounded-full mb-3 shadow-[0_0_20px_-5px_#FF7404]">
                                <span className="text-xs font-bold text-black uppercase tracking-widest">Speed to Lead</span>
                            </div>
                            <h3 className="text-white font-bold text-lg">Managed Response Layer</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {systemActions.map((action, i) => (
                                <div key={i} className="p-3 bg-black/40 border border-[#FF7404]/20 rounded-lg">
                                    <div className="text-white font-medium text-sm">{action.label}</div>
                                    <div className="text-[10px] text-[#FF7404]/60 mt-1">{action.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animated Arrow */}
                    <div className="flex flex-col items-center py-4">
                        <motion.div
                            className="w-1 h-16 rounded-full relative overflow-hidden bg-gradient-to-b from-[#FF7404]/20 to-green-500/20"
                        >
                            <motion.div
                                className="absolute w-full h-6 bg-gradient-to-b from-transparent via-green-400 to-transparent rounded-full"
                                animate={{ y: ['-100%', '200%'] }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 0.3 }}
                            />
                        </motion.div>
                        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-green-500 mt-1" />
                    </div>

                    {/* Outcomes */}
                    <div>
                        <div className="text-[10px] text-white/30 uppercase tracking-widest font-semibold mb-4">Outcomes</div>
                        <div className="space-y-3">
                            {outcomes.map((outcome, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-green-500/[0.05] border border-green-500/20 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                                        <outcome.icon className="w-4 h-4 text-green-400" />
                                    </div>
                                    <span className="text-sm text-green-400">{outcome.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
