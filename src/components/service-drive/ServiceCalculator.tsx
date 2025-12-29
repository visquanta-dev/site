'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { DollarSign, PhoneOff, ArrowRight, TrendingUp } from 'lucide-react';

// Custom Slider Component for Premium Feel
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

    const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
        if (!trackRef.current) return;
        const rect = trackRef.current.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const p = x / rect.width;
        const newValue = Math.round(min + p * (max - min));
        // Snap to step (approximate)
        const step = (max - min) > 1000 ? 50 : 10;
        const snapped = Math.round(newValue / step) * step;
        onChange(snapped);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-end">
                <label className="text-white/60 font-medium uppercase tracking-widest text-[10px] flex items-center gap-2">
                    <Icon className="w-3.5 h-3.5 text-[#FF7404]" />
                    {label}
                </label>
                <div className="text-2xl font-mono font-bold text-white tracking-tight">
                    <span className="text-[#FF7404] mr-1">{prefix}</span>
                    {value.toLocaleString()}{suffix}
                </div>
            </div>

            <div
                className="relative h-12 flex items-center cursor-pointer group select-none"
                ref={trackRef}
                onMouseDown={(e) => {
                    handleInteraction(e);
                    const onMove = (moveEvent: MouseEvent) => handleInteraction(moveEvent as any);
                    const onUp = () => {
                        window.removeEventListener('mousemove', onMove);
                        window.removeEventListener('mouseup', onUp);
                    };
                    window.addEventListener('mousemove', onMove);
                    window.addEventListener('mouseup', onUp);
                }}
                onTouchStart={(e) => {
                    handleInteraction(e);
                    const onMove = (moveEvent: TouchEvent) => handleInteraction(moveEvent as any);
                    const onUp = () => {
                        window.removeEventListener('touchmove', onMove);
                        window.removeEventListener('touchend', onUp);
                    };
                    window.addEventListener('touchmove', onMove);
                    window.addEventListener('touchend', onUp);
                }}
            >
                {/* Track Background */}
                <div className="absolute w-full h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
                    {/* Tick Marks (Visual Only) */}
                    <div className="absolute inset-0 flex justify-between px-1">
                        {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-[1px] h-full bg-white/[0.03]" />
                        ))}
                    </div>
                </div>

                {/* Active Track with Gradient */}
                <div
                    className="absolute h-1.5 bg-gradient-to-r from-[#FF7404]/40 to-[#FF7404] rounded-full shadow-[0_0_15px_rgba(255,116,4,0.3)] transition-all duration-75 ease-out"
                    style={{ width: `${percentage}%` }}
                />

                {/* Draggable Thumb */}
                <div
                    className="absolute w-6 h-6 rounded-full bg-white border border-[#FF7404] shadow-[0_0_20px_rgba(255,116,4,0.5)] transform -translate-x-1/2 transition-all duration-75 ease-out flex items-center justify-center z-10 hover:scale-110 active:scale-95"
                    style={{ left: `${percentage}%` }}
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                </div>
            </div>
        </div>
    );
};

// Animated Number Component
function Counter({ value }: { value: number }) {
    const springValue = useSpring(value, { stiffness: 60, damping: 15 });
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span>{displayValue.toLocaleString()}</span>;
}

export default function ServiceCalculator() {
    const [missedCalls, setMissedCalls] = useState(250);
    const [avgRO, setAvgRO] = useState(450);

    // Constants
    const bookingRate = 0.25;
    const monthlyRecoveredCalls = Math.floor(missedCalls * bookingRate);
    const monthlyRevenue = monthlyRecoveredCalls * avgRO;
    const annualRevenue = monthlyRevenue * 12;

    return (
        <section className="py-32 bg-[#030303] relative border-t border-white/[0.05] overflow-hidden">
            {/* Ambient Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] animate-grain pointer-events-none" />

            <div id="calculator" className="max-w-6xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Context & Inputs */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]"
                            >
                                <TrendingUp className="w-3 h-3 text-[#FF7404]" />
                                <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">ROI Calculator</span>
                            </motion.div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                                Calculate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d]">Potential</span>
                            </h2>
                            <p className="text-lg text-white/40 font-light leading-relaxed">
                                See exactly how much revenue flows through your fingers when service calls go unanswered.
                            </p>
                        </div>

                        {/* Interactive Sliders Container */}
                        <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm space-y-10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
                            <PremiumSlider
                                label="Missed Calls / Month"
                                value={missedCalls}
                                min={0}
                                max={1000}
                                onChange={setMissedCalls}
                                icon={PhoneOff}
                            />

                            <div className="h-px bg-white/[0.05]" />

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
                    </div>

                    {/* Right Column: The "Reactor" Display */}
                    <div className="lg:col-span-7">
                        <div className="relative rounded-[3rem] bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] p-10 lg:p-14 overflow-hidden group">

                            {/* Inner Glow Pulse */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FF7404]/10 rounded-full blur-[80px] animate-pulse-slow pointer-events-none" />

                            {/* Glass Reflection */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-50 pointer-events-none" />

                            <div className="relative z-10 flex flex-col items-center text-center">
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    className="mb-2"
                                >
                                    <div className="text-[#FF7404] font-bold text-xs uppercase tracking-[0.3em] mb-4 flex items-center justify-center gap-3">
                                        <span className="w-8 h-px bg-[#FF7404]/30" />
                                        Detailed Revenue Impact
                                        <span className="w-8 h-px bg-[#FF7404]/30" />
                                    </div>

                                    {/* Annual Revenue (HERO NUMBER) */}
                                    <div className="text-[12vw] lg:text-[7rem] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 drop-shadow-[0_0_50px_rgba(255,116,4,0.2)]">
                                        $<Counter value={annualRevenue} />
                                    </div>
                                    <div className="mt-2 text-white/30 text-sm font-medium uppercase tracking-widest">
                                        Annual Recovered Revenue
                                    </div>
                                </motion.div>

                                {/* Secondary Stats Grid */}
                                <div className="grid grid-cols-2 gap-8 mt-16 w-full max-w-md">
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            $<Counter value={monthlyRevenue} />
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-[#FF7404]">Monthly Impact</div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                                        <div className="text-2xl font-bold text-white mb-1">
                                            {monthlyRecoveredCalls}
                                        </div>
                                        <div className="text-[10px] uppercase tracking-widest text-[#FF7404]">Appts Recovered</div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <motion.a
                                    href="/book-demo"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-12 group relative inline-flex items-center gap-3 px-10 py-5 overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] transition-shadow duration-500"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                    <span className="relative z-10 flex items-center gap-2 text-black font-bold text-sm uppercase tracking-widest">
                                        Unlock This Revenue
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </motion.a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
