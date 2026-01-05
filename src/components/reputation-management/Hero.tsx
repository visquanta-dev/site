'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, Clock, Bell, ArrowRight, MousePointer2 } from 'lucide-react';
import { GoogleLogo, FacebookLogo, DealerRaterLogo } from '@/components/brand-assets/PlatformLogos';
import { AudiLogo, BMWLogo, VWLogo } from '@/components/brand-assets/CarLogos';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-[#020202]">
            {/* Background Polish */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FF7404]/[0.01] rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#FF7404]/[0.08] backdrop-blur-sm border border-[#FF7404]/20 rounded-full mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#FF7404]">Reputation Strategy</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05]">
                            Trust Wins <br />
                            <span className="bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FF7404] bg-clip-text text-transparent italic">
                                The Click.
                            </span>
                        </h1>

                        <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                            Turn your reputation into a revenue system. consistent review growth, automated 72-hour follow-up, and immediate escalation for negative feedback.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12">
                            <button className="w-full sm:w-auto px-8 py-5 bg-gradient-to-r from-[#FF7404] to-[#FF8A3D] text-black font-bold rounded-xl shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)] hover:shadow-[0_25px_50px_-12px_rgba(255,116,4,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                                Request a Demo
                            </button>
                            <div className="flex items-center gap-4 text-white/40 text-sm font-medium">
                                <div className="flex -space-x-3">
                                    <div className="w-10 h-10 rounded-full border-2 border-[#020202] bg-[#111] flex items-center justify-center overflow-hidden relative z-30">
                                        <AudiLogo className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-[#020202] bg-[#111] flex items-center justify-center overflow-hidden relative z-20">
                                        <BMWLogo className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-[#020202] bg-[#111] flex items-center justify-center overflow-hidden relative z-10">
                                        <VWLogo className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <span>Trusted by 500+ Dealers</span>
                            </div>
                        </div>

                        {/* Micro-proof Row */}
                        <div className="grid grid-cols-3 gap-4 py-8 border-t border-white/5">
                            {[
                                { icon: ShieldCheck, text: "Multi-platform" },
                                { icon: Clock, text: "72h Requests" },
                                { icon: Bell, text: "Escalation Alerts" },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <item.icon className="w-4 h-4 text-[#FF7404]" />
                                    <span className="text-[11px] font-bold text-white/50 uppercase tracking-wider">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Content - SERP Panel */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="relative"
                    >
                        {/* Main Interface Box */}
                        <div className="relative backdrop-blur-xl bg-[#0a0a0a]/80 border border-white/10 rounded-3xl p-8 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden">
                            {/* Animated Border Highlight */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent opacity-50" />

                            <div className="flex items-center justify-between mb-10 pb-5 border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="flex gap-1.5">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/30" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/30" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/30" />
                                    </div>
                                    <div className="h-4 w-px bg-white/10 mx-2" />
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                                        <GoogleLogo className="w-3 h-3 text-white/60" />
                                        Local Search
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {/* Store 1 - The Winner */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="p-5 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-[#FF7404]/40 relative group hover:border-[#FF7404] transition-all duration-500 cursor-default"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
                                    <div className="relative z-10 flex items-start justify-between">
                                        <div>
                                            <div className="text-white font-bold text-xl mb-1.5 flex items-center gap-2">
                                                Your Dealership
                                                <ShieldCheck className="w-4 h-4 text-[#FF7404]" />
                                            </div>
                                            <div className="flex items-center gap-3 mb-3">
                                                <div className="flex text-[#FF7404]">
                                                    {[...Array(5)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            initial={{ opacity: 0, scale: 0 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            transition={{ delay: 0.6 + (i * 0.1) }}
                                                        >
                                                            <Star className="w-3.5 h-3.5 fill-current" />
                                                        </motion.div>
                                                    ))}
                                                </div>
                                                <span className="text-white font-black text-sm tracking-tight">4.9</span>
                                                <span className="text-white/30 text-[10px] font-bold uppercase tracking-wider">(2,410 Reviews)</span>
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-green-500/10 rounded-md border border-green-500/20">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80]" />
                                                <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Most Recent: 2h ago</span>
                                            </div>
                                        </div>
                                        <div className="bg-white text-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)]">
                                            Elite
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Store 2 - Muted */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 opacity-40 grayscale-[0.8] hover:opacity-60 transition-all"
                                >
                                    <div className="text-white/60 font-bold text-lg mb-1.5">Competitor Auto Group</div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex text-white/20">
                                            {[1, 2, 3].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                            <Star className="w-3 h-3" />
                                            <Star className="w-3 h-3" />
                                        </div>
                                        <span className="text-white/40 font-bold text-sm">3.4</span>
                                    </div>
                                </motion.div>

                                {/* Store 3 - Muted */}
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="p-5 rounded-2xl bg-white/[0.01] border border-white/5 opacity-20 grayscale"
                                >
                                    <div className="text-white/60 font-bold text-lg mb-1.5">Regional Motors Ltd.</div>
                                    <div className="flex items-center gap-3">
                                        <div className="flex text-white/20">
                                            {[1, 2, 3, 4].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                            <Star className="w-3 h-3" />
                                        </div>
                                        <span className="text-white/40 font-bold text-sm">3.9</span>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Cursor Interaction Visual */}
                            <div className="absolute bottom-12 right-12 w-8 h-8 pointer-events-none z-20">
                                <motion.div
                                    animate={{
                                        x: [-30, 0, -15],
                                        y: [30, 0, 15],
                                        scale: [0.9, 1, 0.95]
                                    }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-md shadow-2xl">
                                        <MousePointer2 className="w-4 h-4 text-[#FF7404] -rotate-12 fill-[#FF7404]/20" />
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Floating Stats */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1, type: "spring" }}
                            className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/10 rounded-2xl p-6 shadow-2xl z-30"
                        >
                            <div className="text-[#FF7404] font-black text-3xl mb-1 tracking-tighter">87%</div>
                            <div className="text-[9px] text-white/50 font-black uppercase tracking-[0.2em] leading-tight max-w-[80px]">
                                Of Buyers Filter By Rating First
                            </div>
                        </motion.div>

                        {/* Platform Badges */}
                        <div className="absolute -top-6 -right-6 flex flex-col gap-3 z-30">
                            {[
                                { Icon: GoogleLogo, label: 'Google' },
                                { Icon: DealerRaterLogo, label: 'DealerRater' },
                                { Icon: FacebookLogo, label: 'Facebook' }
                            ].map((p, i) => (
                                <motion.div
                                    key={p.label}
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 1.2 + (i * 0.1) }}
                                    className="flex items-center gap-3 px-4 py-2 bg-[#020202]/80 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl hover:border-[#FF7404]/30 transition-colors group"
                                >
                                    <p.Icon className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                                    <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.2em] group-hover:text-white/60 transition-colors">{p.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
