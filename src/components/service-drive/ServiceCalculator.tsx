'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { DollarSign, PhoneOff, ArrowRight, TrendingUp, Sparkles } from 'lucide-react';

// Custom Premium Slider with glassmorphism styling
const PremiumSlider = ({
    value,
    min,
    max,
    onChange,
    label,
    icon: Icon,
    prefix = '',
    suffix = ''
}: {
    value: number,
    min: number,
    max: number,
    onChange: (val: number) => void,
    label: string,
    icon: any,
    prefix?: string,
    suffix?: string
}) => {
    const percentage = ((value - min) / (max - min)) * 100;
    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);

    const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const p = x / rect.width;
        const newValue = Math.round(min + p * (max - min));
        const step = (max - min) > 1000 ? 50 : 10;
        const snapped = Math.round(newValue / step) * step;
        onChange(snapped);
    };

    return (
        <div className="space-y-5">
            <div className="flex justify-between items-end">
                <label className="text-white/50 font-medium uppercase tracking-[0.15em] text-[11px] flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-[#FF6B35]/10 flex items-center justify-center">
                        <Icon className="w-3.5 h-3.5 text-[#FF6B35]" />
                    </div>
                    {label}
                </label>
                <motion.div
                    className="text-2xl font-mono font-bold text-white tracking-tight"
                    key={value}
                    initial={{ scale: 1.05, opacity: 0.8 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                    <span className="text-[#FF6B35] mr-0.5">{prefix}</span>
                    {value.toLocaleString()}{suffix}
                </motion.div>
            </div>

            <div
                className="relative h-14 flex items-center cursor-pointer group select-none"
                ref={trackRef}
                onMouseDown={(e) => {
                    setIsDragging(true);
                    handleInteraction(e);
                    const onMove = (moveEvent: MouseEvent) => handleInteraction(moveEvent as any);
                    const onUp = () => {
                        setIsDragging(false);
                        window.removeEventListener('mousemove', onMove);
                        window.removeEventListener('mouseup', onUp);
                    };
                    window.addEventListener('mousemove', onMove);
                    window.addEventListener('mouseup', onUp);
                }}
                onTouchStart={(e) => {
                    setIsDragging(true);
                    handleInteraction(e);
                    const onMove = (moveEvent: TouchEvent) => handleInteraction(moveEvent as any);
                    const onUp = () => {
                        setIsDragging(false);
                        window.removeEventListener('touchmove', onMove);
                        window.removeEventListener('touchend', onUp);
                    };
                    window.addEventListener('touchmove', onMove);
                    window.addEventListener('touchend', onUp);
                }}
            >
                {/* Track Background - Unfilled */}
                <div className="absolute w-full h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
                    {/* Subtle tick marks */}
                    <div className="absolute inset-0 flex justify-between px-0.5">
                        {[...Array(25)].map((_, i) => (
                            <div key={i} className="w-px h-full bg-white/[0.03]" />
                        ))}
                    </div>
                </div>

                {/* Active Track with Premium Gradient */}
                <motion.div
                    className="absolute h-2 rounded-full"
                    style={{
                        width: `${percentage}%`,
                        background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 100%)',
                        boxShadow: isDragging
                            ? '0 0 20px rgba(255,107,53,0.5)'
                            : '0 0 12px rgba(255,107,53,0.3)'
                    }}
                    transition={{ duration: 0.05 }}
                />

                {/* Premium Thumb with Glow */}
                <motion.div
                    className="absolute rounded-full bg-white flex items-center justify-center z-10 cursor-grab active:cursor-grabbing"
                    style={{
                        left: `${percentage}%`,
                        width: '22px',
                        height: '22px',
                        transform: 'translateX(-50%)',
                        boxShadow: isDragging
                            ? '0 0 16px 4px rgba(255,107,53,0.5), 0 2px 8px rgba(0,0,0,0.3)'
                            : '0 0 12px 2px rgba(255,107,53,0.4), 0 2px 6px rgba(0,0,0,0.25)'
                    }}
                    animate={{
                        scale: isDragging ? 1.15 : 1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.15, ease: 'easeOut' }}
                >
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8C5A]" />
                </motion.div>
            </div>
        </div>
    );
};

// Animated Counter Component with smooth spring animation
function Counter({ value, prefix = '' }: { value: number; prefix?: string }) {
    const springValue = useSpring(value, {
        stiffness: 80,
        damping: 20,
        mass: 0.5
    });
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span>{prefix}{displayValue.toLocaleString()}</span>;
}

// Animated stat card for secondary metrics
function AnimatedStatCard({
    value,
    label,
    prefix = '',
    isNumber = true
}: {
    value: number;
    label: string;
    prefix?: string;
    isNumber?: boolean;
}) {
    return (
        <motion.div
            className="relative p-5 rounded-2xl overflow-hidden group"
            style={{
                background: 'rgba(17,17,17,0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.08)',
            }}
            whileHover={{
                y: -2,
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
        >
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10">
                <div className="text-2xl font-bold text-white mb-1.5">
                    {isNumber ? <Counter value={value} prefix={prefix} /> : `${prefix}${value}`}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#FF6B35] font-medium">{label}</div>
            </div>
        </motion.div>
    );
}

export default function ServiceCalculator() {
    const [missedCalls, setMissedCalls] = useState(250);
    const [avgRO, setAvgRO] = useState(450);
    const [hasUpdated, setHasUpdated] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Constants
    const bookingRate = 0.25;
    const monthlyRecoveredCalls = Math.floor(missedCalls * bookingRate);
    const monthlyRevenue = monthlyRecoveredCalls * avgRO;
    const annualRevenue = monthlyRevenue * 12;

    // Track value changes for glow pulse effect
    useEffect(() => {
        setHasUpdated(true);
        const timer = setTimeout(() => setHasUpdated(false), 300);
        return () => clearTimeout(timer);
    }, [annualRevenue]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section
            ref={sectionRef}
            className="py-12 md:py-32 bg-[#0A0A0A] relative border-t border-white/[0.05] overflow-hidden"
        >
            {/* Ambient Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#FF6B35]/[0.03] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />

            <motion.div
                id="calculator"
                className="max-w-6xl mx-auto px-6 relative z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {/* Unified Calculator Container with Connecting Background */}
                <div className="relative">
                    {/* Shared background element spanning both cards */}
                    <div
                        className="absolute inset-0 -m-4 rounded-[3rem] pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 40% 50%, rgba(255,107,53,0.04) 0%, transparent 60%)',
                        }}
                    />

                    {/* Animated connecting line between cards */}
                    <motion.div
                        className="hidden lg:block absolute top-1/2 left-[42%] w-[16%] z-0"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        style={{ transformOrigin: 'left center' }}
                    >
                        <div className="relative flex items-center">
                            {/* Dotted line */}
                            <div className="flex-1 border-t-2 border-dashed border-[#FF6B35]/20" />
                            {/* Arrow */}
                            <motion.div
                                className="ml-2"
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            >
                                <ArrowRight className="w-5 h-5 text-[#FF6B35]/40" />
                            </motion.div>
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">

                        {/* Left Column: Context & Inputs */}
                        <motion.div
                            className="lg:col-span-5 space-y-10"
                            variants={cardVariants}
                        >
                            <div className="space-y-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full"
                                    style={{
                                        background: 'rgba(255,107,53,0.08)',
                                        border: '1px solid rgba(255,107,53,0.2)',
                                    }}
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-[#FF6B35]" />
                                    <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.2em]">ROI Calculator</span>
                                </motion.div>

                                <h2 className="text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-[1.15]">
                                    How Much Is Voice AI Worth to Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]">Service Department?</span>
                                </h2>
                                <p className="text-lg text-white/40 font-light leading-relaxed">
                                    Adjust the sliders to match your dealership. See what Voice AI recovers.
                                </p>
                            </div>

                            {/* Premium Glassmorphism Input Card */}
                            <motion.div
                                className="relative rounded-[20px] p-8 space-y-8 group"
                                style={{
                                    background: 'rgba(17,17,17,0.8)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    boxShadow: '0 24px 48px -12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)',
                                }}
                                whileHover={{
                                    y: -2,
                                    boxShadow: '0 32px 64px -16px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.05)',
                                }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                {/* Inner highlight for depth */}
                                <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none" />

                                <div className="relative z-10 space-y-8">
                                    <PremiumSlider
                                        label="Missed Calls / Month"
                                        value={missedCalls}
                                        min={0}
                                        max={1000}
                                        onChange={setMissedCalls}
                                        icon={PhoneOff}
                                    />

                                    <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    <PremiumSlider
                                        label="Avg. Repair Order (RO)"
                                        value={avgRO}
                                        min={100}
                                        max={1000}
                                        prefix="$"
                                        onChange={setAvgRO}
                                        icon={DollarSign}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right Column: The "Reactor" Display */}
                        <motion.div
                            className="lg:col-span-7"
                            variants={cardVariants}
                        >
                            <motion.div
                                className="relative rounded-[2.5rem] p-10 lg:p-14 overflow-hidden group"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.7) 100%)',
                                    backdropFilter: 'blur(24px)',
                                    WebkitBackdropFilter: 'blur(24px)',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    boxShadow: hasUpdated
                                        ? '0 0 60px rgba(255,107,53,0.25), 0 32px 64px -16px rgba(0,0,0,0.5)'
                                        : '0 32px 64px -16px rgba(0,0,0,0.5)',
                                }}
                                whileHover={{
                                    y: -2,
                                    boxShadow: '0 0 50px rgba(255,107,53,0.2), 0 40px 80px -20px rgba(0,0,0,0.6)',
                                }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                            >
                                {/* Inner Glow Pulse */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[100px] pointer-events-none"
                                    animate={{
                                        background: hasUpdated
                                            ? 'rgba(255,107,53,0.15)'
                                            : 'rgba(255,107,53,0.08)',
                                        scale: hasUpdated ? 1.1 : 1,
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                />

                                {/* Glass Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        className="mb-2"
                                    >
                                        <div className="text-[#FF6B35] font-semibold text-xs uppercase tracking-[0.25em] mb-5 flex items-center justify-center gap-3">
                                            <span className="w-10 h-px bg-gradient-to-r from-transparent to-[#FF6B35]/50" />
                                            Projected Revenue Impact
                                            <span className="w-10 h-px bg-gradient-to-l from-transparent to-[#FF6B35]/50" />
                                        </div>

                                        {/* Annual Revenue (HERO NUMBER) */}
                                        <motion.div
                                            className="text-[13vw] lg:text-[7.5rem] font-bold leading-none tracking-tighter"
                                            style={{
                                                background: 'linear-gradient(180deg, #FFFFFF 20%, rgba(255,255,255,0.65) 100%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                backgroundClip: 'text',
                                                filter: 'drop-shadow(0 0 60px rgba(255,107,53,0.2))',
                                            }}
                                            animate={{
                                                filter: hasUpdated
                                                    ? 'drop-shadow(0 0 80px rgba(255,107,53,0.35))'
                                                    : 'drop-shadow(0 0 60px rgba(255,107,53,0.2))',
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Counter value={annualRevenue} prefix="$" />
                                        </motion.div>
                                        <div className="mt-3 text-white/30 text-sm font-medium uppercase tracking-[0.2em]">
                                            Annual Recovered Revenue
                                        </div>
                                    </motion.div>

                                    {/* Secondary Stats Grid */}
                                    <div className="grid grid-cols-2 gap-5 mt-14 w-full max-w-sm">
                                        <AnimatedStatCard
                                            value={monthlyRevenue}
                                            label="Monthly Impact"
                                            prefix="$"
                                        />
                                        <AnimatedStatCard
                                            value={monthlyRecoveredCalls}
                                            label="Appts Recovered"
                                        />
                                    </div>

                                    {/* CTA */}
                                    <motion.a
                                        href="/book-demo"
                                        className="mt-14 group relative inline-flex items-center gap-3 px-12 py-5 overflow-hidden rounded-2xl"
                                        style={{
                                            boxShadow: '0 0 40px -8px rgba(255,107,53,0.4)',
                                        }}
                                        whileHover={{
                                            scale: 1.02,
                                            boxShadow: '0 0 50px -5px rgba(255,107,53,0.5)',
                                        }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] via-[#FF8C5A] to-[#FF6B35] rounded-2xl" />
                                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.25)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                                        <span className="relative z-10 flex items-center gap-2.5 text-black font-bold text-sm uppercase tracking-[0.15em]">
                                            Unlock This Revenue
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </span>
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
}
