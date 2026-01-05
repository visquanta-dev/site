'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
    Network,
    Database,
    MessageSquare,
    Wrench,
    TrendingUp,
    Clock,
    CheckCircle2,
    Zap,
    Activity,
    Cpu,
    BarChart3,
    CircleDollarSign,
    ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- PROTOTYPE 5: PRODUCT FAN (MATTE BLACK) ---
export function ProductFanPrototype() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const products = [
        { id: 1, name: 'Nexus CRM', icon: Database, rotation: -22, delay: 0 },
        { id: 2, name: 'Responder AI', icon: Zap, rotation: -11, delay: 0.1 },
        { id: 3, name: 'Service Drive', icon: Wrench, rotation: 0, delay: 0.2 },
        { id: 4, name: 'BDC Intel', icon: MessageSquare, rotation: 11, delay: 0.3 },
        { id: 5, name: 'Insights Engine', icon: BarChart3, rotation: 22, delay: 0.4 },
    ];

    return (
        <div className="relative w-full h-[700px] flex items-center justify-center overflow-hidden bg-[#080808]">
            {/* Background Holographic Rings (Orange) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[400, 600, 850].map((size, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: [0.1, 0.2, 0.1], scale: 1 }}
                        transition={{ duration: 8, repeat: Infinity, delay: i * 2 }}
                        className="absolute border border-[#ff7404]/30 rounded-full"
                        style={{
                            width: size,
                            height: size,
                            borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
                        }}
                    />
                ))}
                <div className="absolute w-[500px] h-[500px] bg-[#ff7404]/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative w-full max-w-2xl h-full flex items-center justify-center perspective-[1500px]">
                {products.map((product, i) => {
                    const isHovered = hoveredIndex === i;
                    const spread = (i - 2) * 110; // Wider spread for visibility

                    return (
                        <motion.div
                            key={product.id}
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: 100, rotateZ: 0 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                rotateZ: isHovered ? 0 : product.rotation,
                                x: spread,
                                z: isHovered ? 200 : Math.abs(i - 2) * -100,
                            }}
                            viewport={{ once: true }}
                            animate={{
                                y: isHovered ? -50 : [0, -20, 0],
                            }}
                            // @ts-ignore
                            transition={{
                                y: isHovered
                                    ? { type: "spring", stiffness: 300, damping: 20 }
                                    : { duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }
                            }}
                            className={`absolute w-72 h-72 rounded-[3.5rem] cursor-pointer transition-all duration-500
                                ${isHovered ? 'z-50' : 'z-10'}
                            `}
                            style={{
                                transformStyle: 'preserve-3d',
                                zIndex: isHovered ? 100 : 10 + Math.abs(i - 2)
                            }}
                        >
                            {/* Card Body */}
                            <div className={`relative w-full h-full rounded-[3.5rem] border transition-all duration-500 overflow-hidden
                                ${isHovered
                                    ? 'bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border-[#ff7404] shadow-[0_0_50px_rgba(255,116,4,0.3)]'
                                    : 'bg-[#111111]/80 backdrop-blur-xl border-white/10 shadow-2xl'
                                }`}
                            >
                                {/* Inner Neural Pattern (Creative Touch) */}
                                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/microchip.png')]" />

                                {/* Orange Glow Corner */}
                                <div className={`absolute -top-10 -left-10 w-32 h-32 bg-[#ff7404] rounded-full blur-[40px] transition-opacity duration-500 
                                    ${isHovered ? 'opacity-20' : 'opacity-0'}`}
                                />

                                <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                                    {/* Icon with Dynamic Reflection */}
                                    <div className="relative mb-6">
                                        <motion.div
                                            animate={isHovered ? { rotateY: 360 } : {}}
                                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                            className="relative z-10"
                                        >
                                            <product.icon className={`w-20 h-20 transition-colors duration-500
                                                ${isHovered ? 'text-[#ff7404]' : 'text-white/20'}
                                            `} />
                                        </motion.div>
                                        <div className={`absolute inset-0 blur-2xl bg-[#ff7404]/40 transition-opacity duration-500 
                                            ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                                        />
                                    </div>

                                    <div className={`font-black text-xl tracking-tighter uppercase transition-colors duration-500
                                        ${isHovered ? 'text-white' : 'text-white/30'}
                                    `}>
                                        {product.name}
                                    </div>

                                    {/* Subtext purely for premium feel */}
                                    <div className={`text-[10px] mt-2 font-bold tracking-[0.2em] uppercase transition-opacity duration-500
                                        ${isHovered ? 'opacity-60 text-[#ff7404]' : 'opacity-0'}
                                    `}>
                                        Operational Intelligence
                                    </div>
                                </div>

                                {/* Base Shimmer */}
                                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                                {/* Bottom Activity Bar */}
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                                    <div className={`w-2 h-2 rounded-full transition-colors duration-500 ${isHovered ? 'bg-[#ff7404] shadow-[0_0_8px_#ff7404]' : 'bg-white/10'}`} />
                                    <span className={`text-[10px] whitespace-nowrap uppercase font-black tracking-widest transition-colors duration-500 ${isHovered ? 'text-white/60' : 'text-white/10'}`}>
                                        System Online
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}

// --- PROTOTYPE 1: NEURAL MAP ---
export function NeuralMapPrototype() {
    return (
        <div className="relative w-full h-[500px] bg-[#0c0c0c] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-enterprise-grid opacity-20" />

            {/* Central Hub */}
            <div className="relative z-10 w-32 h-32 rounded-full bg-black border-2 border-[#ff7404]/50 flex items-center justify-center shadow-[0_0_50px_rgba(255,116,4,0.2)]">
                <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#ff7404]/10 blur-xl"
                />
                <Cpu className="w-12 h-12 text-[#ff7404]" />
                <div className="absolute -bottom-8 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#ff7404]">
                    VisQuanta Engine
                </div>
            </div>

            {/* Orbiting Nodes */}
            {[
                { icon: MessageSquare, label: 'BDC Intel', angle: 0 },
                { icon: Database, label: 'CRM Mining', angle: 90 },
                { icon: Wrench, label: 'Service Drive', angle: 180 },
                { icon: TrendingUp, label: 'Sales Floor', angle: 270 },
            ].map((node, i) => (
                <motion.div
                    key={i}
                    className="absolute flex flex-col items-center"
                    initial={false}
                    animate={{
                        x: Math.cos((node.angle * Math.PI) / 180) * 160,
                        y: Math.sin((node.angle * Math.PI) / 180) * 160,
                    }}
                >
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md relative group hover:border-[#ff7404]/50 transition-colors">
                        <node.icon className="w-6 h-6 text-white/60 group-hover:text-[#ff7404] transition-colors" />

                        {/* Connection Line */}
                        <svg className="absolute top-1/2 left-1/2 -z-10 w-[200px] h-[2px] overflow-visible pointer-events-none"
                            style={{ transform: `rotate(${node.angle + 180}deg) translateX(28px)`, transformOrigin: '0 0' }}>
                            <motion.line
                                x1="0" y1="0" x2="160" y2="0"
                                stroke="url(#grad1)"
                                strokeWidth="1"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            <defs>
                                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ff7404" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#ff7404" stopOpacity="0" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <span className="mt-3 text-[10px] font-bold uppercase tracking-tighter text-white/40">{node.label}</span>
                </motion.div>
            ))}

            {/* Ambient data particles */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#ff7404] rounded-full"
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{
                        opacity: [0, 1, 0],
                        x: (Math.random() - 0.5) * 400,
                        y: (Math.random() - 0.5) * 400
                    }}
                    transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
            ))}
        </div>
    );
}

// --- PROTOTYPE 2: PROFIT PULSE (BENTO) ---
export function ProfitPulsePrototype() {
    return (
        <div className="grid grid-cols-2 gap-4 h-[500px]">
            {/* Major Metric */}
            <div className="col-span-2 bg-[#111] rounded-3xl border border-white/10 p-6 flex flex-col justify-between overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Activity className="w-24 h-24 text-[#ff7404]" />
                </div>
                <div>
                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Live Store Performance</div>
                    <div className="text-4xl font-bold text-white tracking-tighter flex items-center gap-3">
                        $242,500
                        <span className="text-xs bg-emerald-500/10 text-emerald-500 px-2 py-1 rounded-full">+12.4%</span>
                    </div>
                </div>
                <div className="h-24 w-full flex items-end gap-1">
                    {[40, 60, 45, 70, 85, 60, 90, 100, 80, 95].map((h, i) => (
                        <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-[#ff7404] to-[#ff7404]/40 rounded-t-sm"
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: i * 0.05, duration: 1 }}
                        />
                    ))}
                </div>
            </div>

            {/* Mini Cards */}
            <div className="bg-[#111] rounded-3xl border border-white/10 p-6 relative overflow-hidden">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">Response Speed</div>
                <div className="text-2xl font-bold text-[#ff7404]">28s</div>
                <div className="mt-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-white/30 uppercase">Instant AI active</span>
                </div>
            </div>

            <div className="bg-[#111] rounded-3xl border border-white/10 p-6 relative overflow-hidden">
                <div className="text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">Lead Quality</div>
                <div className="text-2xl font-bold text-white">94%</div>
                <div className="mt-4 flex gap-1">
                    {[1, 1, 1, 1, 1, 0].map((v, i) => (
                        <div key={i} className={`h-1 flex-1 rounded-full ${v ? 'bg-[#ff7404]' : 'bg-white/10'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}

// --- PROTOTYPE 3: AUTOMOTIVE SCHEMATIC ---
export function SchematicPrototype() {
    const [activePoint, setActivePoint] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActivePoint((prev) => (prev + 1) % 3);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[500px] bg-[#0c0c0c] rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
            {/* Background Image - Using the SUV Front Wireframe */}
            <img
                src="/assets/suv-front.png"
                alt="Car Schematic"
                className="absolute w-[80%] opacity-20 invert mix-blend-screen object-contain grayscale"
            />

            {/* Scanning Line */}
            <motion.div
                animate={{ y: [-200, 200] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff7404]/50 to-transparent z-10"
            />

            {/* Interactive Data Points */}
            <div className="absolute inset-0 z-20">
                {[
                    { x: '35%', y: '40%', label: 'Engine Health AI', detail: 'Real-time service drive diagnostic' },
                    { x: '65%', y: '55%', label: 'Equity Identification', detail: 'Instant trade-in valuation' },
                    { x: '50%', y: '75%', label: 'Customer Profiling', detail: 'Behavioral purchase intent' },
                ].map((pt, i) => (
                    <div
                        key={i}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ left: pt.x, top: pt.y }}
                    >
                        <div className={`w-3 h-3 rounded-full bg-[#ff7404] transition-all duration-500 ${activePoint === i ? 'scale-150 shadow-[0_0_20px_#ff7404]' : 'scale-100 opacity-50'}`} />

                        <AnimatePresence>
                            {activePoint === i && (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 10 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="absolute left-full top-0 ml-4 pointer-events-none whitespace-nowrap"
                                >
                                    <div className="bg-black/80 backdrop-blur-md border border-[#ff7404]/30 p-3 rounded-xl">
                                        <div className="text-white font-bold text-xs">{pt.label}</div>
                                        <div className="text-white/50 text-[10px]">{pt.detail}</div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#ff7404]/60">Scanning Vehicle Intelligence</div>
            </div>
        </div>
    );
}

// --- PROTOTYPE 4: ACTIVITY FEED ---
export function ActivityFeedPrototype() {
    const [activities, setActivities] = useState([
        { id: 1, type: 'lead', text: 'New lead "Toyota Camry" engaged via SMS', time: 'Just now' },
        { id: 2, type: 'service', text: 'Service RO scheduled for 2023 BMW X5', time: '2m ago' },
        { id: 3, type: 'equity', text: 'Equity alert: Customer #4928 eligible for upgrade', time: '5m ago' },
        { id: 4, type: 'compliance', text: 'OEM Response requirement met (28s avg)', time: '12m ago' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newActivity = {
                id: Date.now(),
                type: ['lead', 'service', 'equity'][Math.floor(Math.random() * 3)],
                text: 'Automated intelligence action complete.',
                time: 'Just now'
            };
            setActivities(prev => [newActivity, ...prev.slice(0, 3)]);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[500px] bg-[#111] rounded-3xl border border-white/10 p-8 flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h4 className="text-white font-bold text-lg">System Nexus</h4>
                    <p className="text-white/40 text-xs">Real-time automation log</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-[10px] text-orange-500 font-bold uppercase tracking-wider">Live</span>
                </div>
            </div>

            <div className="space-y-4 flex-1">
                <AnimatePresence initial={false}>
                    {activities.map((act) => (
                        <motion.div
                            key={act.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-[#ff7404]/10 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-5 h-5 text-[#ff7404]" />
                            </div>
                            <div className="flex-1">
                                <div className="text-white/80 text-sm leading-tight mb-1">{act.text}</div>
                                <div className="text-white/30 text-[10px] uppercase font-bold">{act.time}</div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="pt-6 border-t border-white/5 mt-auto text-center">
                <span className="text-xs text-white/20">Showing 4 of 1,284 automated actions today</span>
            </div>
        </div>
    );
}

// --- WRAPPER SECTION ---
export default function VisualShowcase() {
    return (
        <section className="py-24 bg-[#080808]">
            <div className="container-wide">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-bold text-white mb-4">Engineering Showcase</h2>
                    <p className="text-white/60">Exploring four distinct visual strategies for the "Unified Command Center" identity.</p>
                </div>

                <div className="space-y-24">
                    {/* OPTION 1 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-[#ff7404] font-bold text-xs uppercase tracking-widest mb-4">Option 1</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Neural Map: Total Connectivity</h3>
                            <p className="text-white/70 mb-8 max-w-lg">
                                Shows the VisQuanta Engine as the central "brain" of the dealership, with glowing synaptic connections to every department.
                            </p>
                            <ul className="space-y-3">
                                {['Interactive topology', 'Glow energy physics', 'Departmental labeling'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#ff7404]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <NeuralMapPrototype />
                    </div>

                    {/* OPTION 2 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ProfitPulsePrototype />
                        <div>
                            <div className="text-[#ff7404] font-bold text-xs uppercase tracking-widest mb-4">Option 2</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Profit Pulse: Real-time Bento</h3>
                            <p className="text-white/70 mb-8 max-w-lg">
                                A data-first approach that uses interactive mini-charts and pulsing metrics to show tangible financial impact.
                            </p>
                            <ul className="space-y-3">
                                {['Live metric simulation', 'Glassmorphic dashboarding', 'Responsive bento layout'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#ff7404]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* OPTION 3 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-[#ff7404] font-bold text-xs uppercase tracking-widest mb-4">Option 3</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Automotive Schematic: Technical Depth</h3>
                            <p className="text-white/70 mb-8 max-w-lg">
                                Directly uses vehicle assets to show how AI "scans" and understands the inventory and customer behavior at a technical level.
                            </p>
                            <ul className="space-y-3">
                                {['Laser scan animation', 'Hotspot data callouts', 'Wireframe aesthetic integration'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#ff7404]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <SchematicPrototype />
                    </div>

                    {/* OPTION 4 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <ActivityFeedPrototype />
                        <div>
                            <div className="text-[#ff7404] font-bold text-xs uppercase tracking-widest mb-4">Option 4</div>
                            <h3 className="text-3xl font-bold text-white mb-6">Activity Feed: Perpetual Motion</h3>
                            <p className="text-white/70 mb-8 max-w-lg">
                                Focuses on the "always-on" nature of VisQuanta. Showing a constant stream of automated "wins" makes the software feel alive.
                            </p>
                            <ul className="space-y-3">
                                {['Real-time update cycle', 'Categorized event types', 'High-speed BDC emulation'].map((item) => (
                                    <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-[#ff7404]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* OPTION 5 */}
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="text-[#ff7404] font-bold text-xs uppercase tracking-widest mb-4">Option 5</div>
                            <h2 className="text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                                One Platform.<br />
                                <span className="text-white/30">Total Control.</span>
                            </h2>
                            <ul className="space-y-5 mb-10">
                                {[
                                    'Unified 3D product ecosystem',
                                    'Zero-friction department syncing',
                                    'Enterprise-grade matte aesthetics'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-white/70 text-lg font-medium">
                                        <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-black" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex gap-4">
                                <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#ff7404] hover:text-white transition-all duration-300">
                                    Join the Program
                                </button>
                                <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all duration-300">
                                    See all benefits
                                </button>
                            </div>
                        </div>
                        <ProductFanPrototype />
                    </div>
                </div>
            </div>
        </section>
    );
}
