'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Users, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-[#030303] overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 lg:pt-44">
            {/* Dynamic Background Effects */}
            <motion.div style={{ y: y1, opacity }} className="absolute text-[20vw] font-bold text-white/[0.02] left-0 top-20 select-none pointer-events-none">
                RESULTS
            </motion.div>
            <motion.div style={{ y: y2, opacity }} className="absolute text-[20vw] font-bold text-white/[0.02] right-0 bottom-20 select-none pointer-events-none text-right">
                DELIVERED
            </motion.div>

            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7404]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

            <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 sm:space-y-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md hover:border-[#FF7404]/50 transition-colors cursor-default"
                    >
                        <ShieldCheck className="w-4 h-4 text-[#FF7404]" />
                        <span className="text-xs font-bold text-white uppercase tracking-widest">The VisQuanta Difference</span>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] uppercase"
                        >
                            We Don't Just<br />
                            Give You a Login.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d] relative inline-block">
                                We deliver results.
                                <motion.span
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                                    className="absolute -bottom-2 left-0 w-full h-2 bg-[#FF7404]/20 -skew-x-12"
                                />
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-white/60 leading-relaxed max-w-lg font-medium"
                    >
                        The only AI platform backed by a dedicated team of automotive experts. Every conversation overseen by humans, every lead verified, every opportunity maximized.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6"
                    >
                        <button className="group relative px-8 py-5 bg-[#FF7404] text-black font-black uppercase text-sm tracking-widest rounded-xl overflow-hidden text-center">
                            <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-4 transition-all">
                                Meet Your Team
                                <ArrowRight className="w-4 h-4" />
                            </span>
                            <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        </button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-12 mt-8 sm:mt-12 pb-4 border-t border-white/10">
                        {[{ label: "Monitored Interactions", value: "100%" }, { label: "Account Support", value: "24/7" }].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                            >
                                <div className="text-2xl sm:text-3xl font-black text-white mb-1 uppercase tracking-tight">{item.value}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Visual Demo (NEW) */}
                <div className="lg:hidden mt-8 sm:mt-12 flex justify-center">
                    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                        <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#0a0a0a]">
                            <img
                                src="/images/suite-bg/ds-bg.png"
                                alt="Dealer Success Demo"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute inset-0 -z-10 bg-[#FF7404]/10 blur-3xl rounded-full scale-150 opacity-50" />
                    </div>
                </div>

                {/* Right Visual - Animated & Interactive */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="relative perspective-1000 hidden lg:block"
                >
                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group"
                    >
                        {/* Placeholder for High-End Team Image */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#050505] transition-transform duration-700 group-hover:scale-105">
                            {/* Grid Overlay */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50" />

                            {/* Center Visual */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-64 h-64">
                                    <div className="absolute inset-0 bg-[#FF7404] rounded-full opacity-20 blur-3xl animate-pulse-slow" />
                                    <div className="relative z-10 w-full h-full bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center shadow-2xl group-hover:border-[#FF7404]/50 transition-colors duration-500">
                                        <Users className="w-24 h-24 text-white/20 group-hover:text-white/40 transition-colors duration-500" />
                                    </div>

                                    {/* Orbiting Elements - Fixed Positioning */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="absolute -bottom-6 -right-6 z-20 bg-[#0a0a0a] border border-[#FF7404]/30 px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_10px_30px_-5px_rgba(255,116,4,0.3)] backdrop-blur-md cursor-help"
                                    >
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                        </span>
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">Human Verified</span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}
