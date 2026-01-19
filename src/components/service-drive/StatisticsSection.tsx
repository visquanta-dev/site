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
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const onScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;

        // 4 items
        const index = Math.round((scrollLeft / maxScroll) * 3);
        setActiveIndex(Math.min(Math.max(index, 0), 3));
    };

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
                        <h3 className="text-2xl md:text-5xl font-bold text-white tracking-tight mb-2">
                            VisQuanta Service Drive Agent<span className="text-[#FF7404]">™</span>
                        </h3>
                        <p className="text-white/40 font-medium tracking-[0.2em] text-xs md:text-sm uppercase">SERVICE SCHEDULING PERFORMANCE</p>
                    </div>

                    {/* Bento Grid / Carousel */}
                    <div
                        ref={scrollRef}
                        onScroll={onScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 -mx-6 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 md:pb-0 md:px-0 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Hide scrollbar for Chrome/Safari */}
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {/* Stat 1: Main Metric */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#FF7404]/30 transition-colors duration-500 snap-center shrink-0 w-[75vw] md:w-auto lg:col-span-2 h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
                                    &lt;60s
                                </div>
                                <h4 className="text-sm font-bold text-[#FF7404] uppercase tracking-widest mb-2">AVG RESPONSE TIME</h4>
                                <p className="text-white/50 text-sm leading-relaxed">Picks up in under 60 seconds</p>
                            </div>
                        </motion.div>

                        {/* Stat 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#FF7404]/30 transition-colors duration-500 snap-center shrink-0 w-[75vw] md:w-auto h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
                                    24/7
                                </div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">ALWAYS ON COVERAGE</h4>
                                <p className="text-white/50 text-sm leading-relaxed">Zero downtime, ever</p>
                            </div>
                        </motion.div>

                        {/* Stat 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#FF7404]/30 transition-colors duration-500 snap-center shrink-0 w-[75vw] md:w-auto h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
                                    98%
                                </div>
                                <h4 className="text-sm font-bold text-[#FF7404] uppercase tracking-widest mb-2">CALLER ENGAGEMENT</h4>
                                <p className="text-white/50 text-sm leading-relaxed">After-hours conversion</p>
                            </div>
                        </motion.div>

                        {/* Stat 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#FF7404]/30 transition-colors duration-500 snap-center shrink-0 w-[75vw] md:w-auto h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="text-6xl font-bold text-white mb-4 tracking-tighter">
                                    25%
                                </div>
                                <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">CALLS BECOME APPOINTMENTS</h4>
                                <p className="text-white/50 text-sm leading-relaxed">Calls converted to appts</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Dots Mobile */}
                    <div className="flex md:hidden justify-center gap-2 mt-2 pb-4">
                        {[0, 1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                                        ? 'w-6 bg-[#FF6B35]'
                                        : 'w-1.5 bg-[#4B5563]'
                                    }`}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
