'use client';

import { TrendingDown, DollarSign, PhoneOff } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ value, suffix = '', prefix = '', duration = 2 }: { value: string | number, suffix?: string, prefix?: string, duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Parse number from string (e.g. "1,200" -> 1200)
    const numericValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = numericValue / (duration * 60);

            const timer = setInterval(() => {
                start += increment;
                if (start >= numericValue) {
                    setCount(numericValue);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, numericValue, duration]);

    return (
        <span ref={ref}>
            {prefix}
            {Math.floor(count).toLocaleString()}
            {suffix}
        </span>
    );
};

export default function StatisticsSection() {
    return (
        <section className="relative py-20 md:py-32 bg-[#030303] overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/10 via-[#030303] to-[#030303]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8"
                    >
                        <TrendingDown className="w-3 h-3 text-[#FF7404]" />
                        <span className="text-[#FF7404] font-bold text-[10px] tracking-[0.2em] uppercase">Service scheduling / fixed ops</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-6xl font-bold mb-6 text-white tracking-[-0.02em]"
                    >
                        The Numbers Don&apos;t Lie: <br />
                        <span className="text-[#FF7404] filter drop-shadow-[0_0_20px_rgba(255,116,4,0.3)]">Missed Calls Kill Service Retention</span>
                    </motion.h2>
                </div>

                {/* Main Problem Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-24">
                    {/* Missed Calls Stat */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FF7404]/5 to-[#0a0a0a] border border-[#FF7404]/20 hover:border-[#FF7404]/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF7404]/10 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                            <PhoneOff className="w-10 h-10 md:w-12 md:h-12 text-[#FF7404] mb-6" />
                            <div className="text-6xl md:text-[5.5rem] font-bold text-[#FF7404] mb-2 tracking-tighter leading-none">
                                <AnimatedCounter value={1200} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Missed Service Calls Per Month
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                On average, dealerships miss over 1,200 service calls monthly during peak and after hours
                            </p>
                        </div>
                    </motion.div>

                    {/* Revenue Lost Stat */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="group relative p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#FF7404]/5 to-[#0a0a0a] border border-[#FF7404]/20 hover:border-[#FF7404]/50 transition-all duration-500"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#FF7404]/10 via-transparent to-transparent rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative">
                            <DollarSign className="w-10 h-10 md:w-12 md:h-12 text-[#FF7404] mb-6" />
                            <div className="text-6xl md:text-[5.5rem] font-bold text-[#FF7404] mb-2 tracking-tighter leading-none">
                                <AnimatedCounter value={480} prefix="$" suffix="K" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Annual Service Revenue Lost
                            </h3>
                            <p className="text-white/40 font-light leading-relaxed">
                                Average annual service revenue lost because of missed calls and abandoned opportunities
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* VisQuanta Solution Stats - BENTO GRID DESIGN */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* Header */}
                    <div className="text-center mb-16 relative">
                        <div className="inline-flex items-center justify-center relative mb-6">
                            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                            <span className="relative z-10 bg-[#030303] px-6">
                                <div className="w-2 h-2 rounded-full bg-[#FF7404] shadow-[0_0_10px_#FF7404]" />
                            </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-2">
                            VisQuanta Service Drive Agent<span className="text-[#FF7404]">™</span>
                        </h3>
                        <p className="text-zinc-500 font-bold tracking-[0.2em] text-xs md:text-sm uppercase">SERVICE SCHEDULING PERFORMANCE</p>
                    </div>

                    {/* Unified Glass Dashboard */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white/[0.02] border border-white/[0.08] rounded-[32px] overflow-hidden backdrop-blur-2xl divide-y md:divide-y-0 md:divide-x divide-white/[0.08] relative z-10">
                        {/* Stat 1: <60s */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="group relative p-8 lg:p-10 flex flex-col justify-between h-[360px] md:h-[400px] hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Response</span>
                                </div>
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-4 h-4 rounded-full border border-[#FF7404]/30 flex items-center justify-center">
                                        <div className="w-1 h-1 bg-[#FF7404] rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <div className="text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    &lt;60s
                                </div>
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#FF7404] w-[85%] rounded-full shadow-[0_0_20px_#FF7404]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-white font-medium text-lg mb-2">Instant Pickup</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Calls answered immediately. No voicemails, no hold times.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stat 2: 24/7 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="group relative p-8 lg:p-10 flex flex-col justify-between h-[360px] md:h-[400px] hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex items-center justify-between relative z-10">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-green-500 transition-colors" />
                                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Uptime</span>
                                </div>
                                <span className="px-2 py-1 rounded bg-green-500/10 border border-green-500/20 text-[9px] font-bold text-green-500 uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                                    Live
                                </span>
                            </div>

                            <div className="relative z-10">
                                <div className="text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    24/7
                                </div>
                                <div className="flex gap-1 h-3">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className={`h-full w-1 rounded-sm bg-white/${i % 3 === 0 ? '20' : '5'}`} />
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-white font-medium text-lg mb-2">Always On</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Zero downtime. Service handling nights, weekends, and holidays.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stat 3: 98% */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="group relative p-8 lg:p-10 flex flex-col justify-between h-[360px] md:h-[400px] hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <div className="absolute right-0 bottom-1/2 translate-y-1/2 w-[1px] h-32 bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="flex items-center gap-2 relative z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-blue-500 transition-colors" />
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Quality</span>
                            </div>

                            <div className="relative z-10">
                                <div className="text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    98%
                                </div>
                                <div className="flex items-end gap-1 h-8">
                                    <div className="w-2 h-3 bg-zinc-800 rounded-[1px]" />
                                    <div className="w-2 h-4 bg-zinc-800 rounded-[1px]" />
                                    <div className="w-2 h-6 bg-zinc-700 rounded-[1px]" />
                                    <div className="w-2 h-full bg-white rounded-[1px]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-white font-medium text-lg mb-2">Caller Engagement</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Industry-leading retention and conversion rates after-hours.
                                </p>
                            </div>
                        </motion.div>

                        {/* Stat 4: 25% */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="group relative p-8 lg:p-10 flex flex-col justify-between h-[360px] md:h-[400px] hover:bg-white/[0.02] transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex items-center gap-2 relative z-10">
                                <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-[#FF7404] transition-colors" />
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Growth</span>
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-start gap-1 text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-4 group-hover:translate-x-2 transition-transform duration-500">
                                    25%
                                    <sup className="text-3xl text-[#FF7404] mt-4 font-light">+</sup>
                                </div>
                                <svg className="w-8 h-8 text-[#FF7404]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>

                            <div className="relative z-10">
                                <h4 className="text-white font-medium text-lg mb-2">Appt Bookings</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Significant increase in booked appointments vs. standard IVR.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
