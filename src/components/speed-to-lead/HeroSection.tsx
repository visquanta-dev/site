'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Phone, Zap, BarChart3 } from 'lucide-react';
import PhoneDemo from '@/components/lead-loss/PhoneDemo';

interface HeroSectionProps {
    onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenCalculator }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-44 pb-32">

            {/* Premium Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <motion.div className="absolute inset-0">
                    <div className="absolute top-[-30%] left-[10%] w-[600px] h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[150px]" />
                    <div className="absolute top-[20%] right-[-10%] w-[800px] h-[800px] bg-white/[0.015] rounded-full blur-[200px]" />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#FF7404]/[0.03] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left: Copy */}
                    <div className="text-left space-y-12">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_30px_-12px_rgba(255,116,4,0.3)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                            </span>
                            <span className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase">
                                Inbound Lead Response System
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-6xl lg:text-[5.5rem] font-bold text-white tracking-[-0.03em] leading-[0.95]"
                            >
                                <span className="block">The First <span className="font-mono text-[#FF7404]">60</span> Seconds</span>
                                <motion.span
                                    animate={{
                                        textShadow: ["0 0 20px rgba(255,116,4,0.1)", "0 0 40px rgba(255,116,4,0.4)", "0 0 20px rgba(255,116,4,0.1)"],
                                        scale: [1, 1.02, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF5500] bg-clip-text text-transparent inline-block"
                                >
                                    Win the Deal.
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl lg:text-2xl text-white/45 max-w-lg leading-[1.6] font-normal"
                            >
                                <span className="text-[#FF7404]">Respond instantly.</span> Capture every opportunity. Book calls before your competitors even know the lead exists.
                            </motion.p>
                        </div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-wrap items-center gap-5"
                        >
                            <button className="group relative px-10 py-5 overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,116,4,0.6)] transition-shadow duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                                <span className="relative z-10 flex items-center gap-3 text-black font-bold text-sm uppercase tracking-widest">
                                    Request a Demo
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                        </motion.div>

                        {/* Micro Proof Row */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/[0.06]"
                        >
                            {[
                                { icon: Clock, label: "24/7/365 Coverage" },
                                { icon: Zap, label: "< 60s Response Time" }, // Updated label for impact
                                { icon: Phone, label: "Books Calls with Sales" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 text-white/40 text-sm">
                                    <item.icon className="w-4 h-4 text-[#FF7404]" />
                                    <span>{item.label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right: Phone Demo */}
                    <div className="relative perspective-[2000px] hidden lg:flex items-center justify-center">
                        {/* Ambient glow */}
                        <div className="absolute w-[500px] h-[500px] bg-[#FF7404]/[0.08] rounded-full blur-[120px] pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-10"
                        >
                            <PhoneDemo
                                title="David Brooks"
                                subtitle="Inbound Lead"
                                avatarImage="/images/nick.png"
                                messages={[
                                    {
                                        id: '0',
                                        sender: 'system',
                                        type: 'notification',
                                        content: (
                                            <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg mb-2">
                                                <div className="h-8 w-20 bg-white/90 rounded-md flex items-center justify-center border border-white/10 px-1">
                                                    <img
                                                        src="/images/autotrader.png"
                                                        alt="AutoTrader"
                                                        className="object-contain h-6 w-auto block"
                                                    />
                                                </div>
                                                <div className="text-left">
                                                    <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider leading-none">New Lead</div>
                                                    <div className="text-[10px] text-gray-500 leading-none mt-1">Arrived: Just now</div>
                                                </div>
                                            </div>
                                        )
                                    },
                                    {
                                        id: '1',
                                        sender: 'agent',
                                        content: "Hi David, this is Westline Motors. I'm following up on your AutoTrader enquiry about the 2024 Silverado. Just confirming it's available.\n\nWould you like a bit more information before coming in for a test drive?"
                                    },
                                    {
                                        id: '2',
                                        sender: 'user',
                                        content: "Yes, that would help."
                                    },
                                    {
                                        id: '3',
                                        sender: 'agent',
                                        content: "No problem. I'll have one of our sales team give you a quick call to go through the details."
                                    },
                                    {
                                        id: '4',
                                        sender: 'user',
                                        content: "Perfect, thanks."
                                    },
                                    {
                                        id: '5',
                                        sender: 'agent',
                                        content: "You're very welcome. Speak shortly."
                                    },
                                    {
                                        id: '6',
                                        sender: 'system',
                                        type: 'notification',
                                        content: (
                                            <div className="mt-3 p-5 rounded-2xl bg-gradient-to-r from-green-500/10 to-green-500/5 border border-green-500/20 flex items-center gap-4 backdrop-blur-sm">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-[0_0_30px_-5px_rgba(34,197,94,0.4)]">
                                                    <BarChart3 className="w-6 h-6 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold text-sm uppercase tracking-wide">Call Scheduled</div>
                                                    <div className="text-[11px] text-green-400/80 font-mono tracking-wide">SYNCED TO CRM</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                ]}
                            />
                        </motion.div>

                        {/* Floating Performance Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 60, scale: 0.9 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute -right-4 top-1/4 bg-[#0a0a0a]/80 backdrop-blur-2xl p-7 rounded-2xl border border-white/[0.08] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] z-20"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-[#FF7404]" />
                                </div>
                                <div className="text-[9px] text-white/30 font-bold uppercase tracking-[0.2em]">Response Time</div>
                            </div>
                            <div className="text-3xl font-bold text-white tracking-tight">Under 60s</div>
                            <div className="text-[10px] text-white/40 font-medium mt-1">Average First Contact</div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
