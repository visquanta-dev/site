'use client';

import { motion, useInView } from 'framer-motion';
import { Phone, MessageSquare, Calendar, Users, ArrowUpRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Custom CountUp Component for the premium feel
function CountUpStat({ prefix = '', suffix = '', end, duration = 2 }: { prefix?: string, suffix?: string, end: number, duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(start);
                }
            }, 1000 / 60);
            return () => clearInterval(timer);
        }
    }, [isInView, end, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {prefix}{Math.floor(count)}{suffix}
        </span>
    );
}

export default function EnterpriseBenefits() {
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
        <section className="bg-[#030303] py-12 md:py-24 relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 inset-x-0 h-px bg-white/[0.08]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/[0.02] rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">

                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-[0.2em]">Voice AI for service departments</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                    >
                        Voice AI That <span className="text-[#FF7404]">Delivers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-white/40 max-w-2xl mx-auto leading-relaxed"
                    >
                        Replacing outdated IVR with intelligent conversation that drives revenue.
                    </motion.p>
                </div>

                {/* Bento Grid / Carousel */}
                <div className="relative">
                    <div
                        ref={scrollRef}
                        onScroll={onScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 -mx-6 md:mx-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:pb-0 md:px-0 scrollbar-hide"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {/* Hide scrollbar for Chrome/Safari */}
                        <style jsx>{`
                            div::-webkit-scrollbar {
                                display: none;
                            }
                        `}</style>

                        {/* Card 1: HERO (Span 2) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 overflow-hidden snap-center shrink-0 w-[85vw] md:w-auto h-full"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                                <Phone className="w-32 h-32 text-white stroke-[0.5]" />
                            </div>
                            <div className="relative z-10 flex flex-col h-full justify-between">
                                <div className="mb-8">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-[#FF7404]/20">
                                        <Phone className="w-7 h-7 text-[#FF7404]" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">No More Missed Calls</h3>
                                    <p className="text-lg text-white/50 leading-relaxed max-w-lg">
                                        Voice AI answers every call: nights, weekends, holidays. Zero voicemails. Zero hold music.
                                    </p>
                                </div>
                                <div className="flex items-end justify-between border-t border-white/[0.08] pt-8">
                                    <div>
                                        <span className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Performance</span>
                                        <div className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                            <CountUpStat end={100} suffix="%" />
                                            <span className="text-[#FF7404] text-3xl ml-1">CAPTURE</span>
                                        </div>
                                    </div>
                                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#FF7404] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Real-Time Updates */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="lg:col-span-1 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 flex flex-col justify-between snap-center shrink-0 w-[85vw] md:w-auto h-full"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <MessageSquare className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Real-Time Updates</h3>
                                <p className="text-base text-white/50 leading-relaxed">
                                    Customers get automatic SMS updates on repair status, eliminating 'is my car ready?' calls by 40%.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/[0.08]">
                                <span className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Impact</span>
                                <div className="text-3xl font-bold text-blue-400">
                                    -40% <span className="text-white/40 text-sm font-medium ml-1">INBOUND CALLS</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: Instant Scheduling */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-1 group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 flex flex-col justify-between snap-center shrink-0 w-[85vw] md:w-auto h-full"
                        >
                            <div>
                                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20 group-hover:scale-110 transition-transform duration-500">
                                    <Calendar className="w-6 h-6 text-green-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Instant Scheduling</h3>
                                <p className="text-base text-white/50 leading-relaxed">
                                    Books appointments directly into your DMS while the customer is still on the call. No callbacks needed.
                                </p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-white/[0.08]">
                                <span className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Growth</span>
                                <div className="text-3xl font-bold text-green-400">
                                    +25% <span className="text-white/40 text-sm font-medium ml-1">BOOKINGS</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 4: Customer Retention (Span 2) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="lg:col-span-2 group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-[#FF7404]/20 transition-all duration-500 overflow-hidden snap-center shrink-0 w-[85vw] md:w-auto h-full"
                        >
                            <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500 transform translate-y-1/4 translate-x-1/4">
                                <Users className="w-48 h-48 text-white stroke-[0.5]" />
                            </div>

                            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 h-full">
                                <div className="flex-1">
                                    <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-purple-500/20">
                                        <Users className="w-7 h-7 text-purple-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">Customer Retention</h3>
                                    <p className="text-lg text-white/50 leading-relaxed">
                                        Customers who get instant service stay loyal. Voice AI delivers the experience they expect, every single time.
                                    </p>
                                </div>
                                <div className="shrink-0 w-full md:w-auto p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                                    <div className="text-center md:text-right">
                                        <span className="block text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Loyalty</span>
                                        <div className="text-4xl font-bold text-purple-400 tracking-tight">
                                            +<CountUpStat end={15} suffix="%" />
                                        </div>
                                        <div className="text-white/60 text-sm font-bold mt-1">RETENTION</div>
                                    </div>
                                </div>
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
                </div>
            </div>
        </section>
    );
}
