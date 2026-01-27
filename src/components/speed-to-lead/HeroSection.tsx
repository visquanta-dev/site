'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, Phone, Zap, BarChart3, Play } from 'lucide-react';
import PhoneDemo from '@/components/lead-reactivation/PhoneDemo';
import Link from 'next/link';

interface HeroSectionProps {
    onOpenCalculator?: () => void;
}

export default function HeroSection({ onOpenCalculator }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-28">

            {/* Premium Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="absolute top-[-20%] left-[5%] w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-[#FF7404]/[0.04] rounded-full blur-[120px] md:blur-[180px]"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 0.3 }}
                        className="absolute top-[30%] right-[-15%] w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-white/[0.02] rounded-full blur-[150px] md:blur-[220px]"
                    />
                </div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_50%,transparent_100%)]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#FF7404]/[0.04] to-transparent" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-20 items-center">

                    {/* Left: Copy */}
                    <div className="text-left space-y-6 sm:space-y-8 lg:space-y-10">
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
                            className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_40px_-15px_rgba(255,116,4,0.4)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_12px_#22c55e]"></span>
                            </span>
                            <span className="text-white/70 text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase">
                                Speed to Lead
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[5rem] font-black text-white tracking-[-0.02em] leading-[1.05] uppercase"
                            >
                                <span className="block">The Dealer Who</span>
                                <span className="block">Responds First</span>
                                <motion.span
                                    initial={{ backgroundPosition: '0% 50%' }}
                                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                    className="block mt-1 sm:mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF9A4D] to-[#FF7404] bg-[length:200%_100%] bg-clip-text text-transparent"
                                >
                                    Wins the Deal
                                </motion.span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                                className="text-[15px] sm:text-lg md:text-xl lg:text-[22px] text-white/50 max-w-lg leading-[1.7] font-medium"
                            >
                                <span className="text-[#FF7404] font-semibold">78% of buyers choose the first dealer to respond.</span>{' '}
                                Your BDC goes home at 6pm. We don't. Every lead answered in under 60 seconds. 24/7.
                            </motion.p>
                        </div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                            className="flex flex-col items-start gap-4 mb-8 md:mb-16"
                        >
                            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                                <Link
                                    href="/book-demo"
                                    className="group relative px-7 sm:px-9 py-4 sm:py-5 overflow-hidden rounded-xl shadow-[0_0_50px_-12px_rgba(255,116,4,0.5)] hover:shadow-[0_0_70px_-12px_rgba(255,116,4,0.7)] transition-all duration-500 text-center"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                                    <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_100%] group-hover:animate-shimmer rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <span className="relative z-10 flex items-center justify-center gap-3 text-black font-bold text-sm uppercase tracking-wider">
                                        Schedule Your Walkthrough →
                                    </span>
                                </Link>
                                <button
                                    onClick={onOpenCalculator}
                                    className="group flex items-center justify-center gap-3 px-6 sm:px-7 py-4 sm:py-5 bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] hover:border-white/[0.15] rounded-xl transition-all duration-300 text-center"
                                >
                                    <BarChart3 className="w-4 h-4 text-[#FF7404]" />
                                    <span className="text-white/80 font-semibold text-sm">Run the Numbers</span>
                                </button>
                            </div>
                            {/* CRO Finding D: Explicit value prop below CTA */}
                            <p className="text-[11px] sm:text-xs text-white/40 font-medium tracking-wide ml-0 sm:ml-2">
                                30-min 1:1 • Get an exact revenue-lift projection for your dealership
                            </p>
                        </motion.div>

                        {/* Trust Anchor - CRO Finding A */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                            className="pt-6 sm:pt-8"
                        >
                            <p className="text-xs sm:text-sm text-white/40 font-medium mb-4">
                                Trusted by <span className="text-white/60">500+ dealerships</span> across North America
                            </p>
                            <div className="flex items-center gap-4 sm:gap-6">
                                {[
                                    { src: '/images/logos/ford-direct.jpg', alt: 'Ford Direct' },
                                    { src: '/images/logos/toyota.jpg', alt: 'Toyota' },
                                    { src: '/images/logos/honda.jpg', alt: 'Honda' },
                                    { src: '/images/logos/gm.jpg', alt: 'GM' }
                                ].map((logo, i) => (
                                    <div
                                        key={i}
                                        className="h-6 sm:h-7 w-auto opacity-40 hover:opacity-70 transition-opacity duration-300"
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            className="h-full w-auto object-contain grayscale brightness-150"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Mobile Visual Demo */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="lg:hidden mt-6 sm:mt-10 flex justify-center"
                    >
                        <div className="relative w-full max-w-[260px] sm:max-w-[300px]">
                            <div className="relative rounded-[2rem] border border-white/10 overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] bg-[#0a0a0a]">
                                <img
                                    src="/images/suite-bg/s2l-bg.png"
                                    alt="Speed to Lead Demo"
                                    className="w-full h-auto"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                            <div className="absolute inset-0 -z-10 bg-[#FF7404]/15 blur-[60px] rounded-full scale-125" />

                            {/* Mobile stat badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -bottom-4 -right-2 bg-[#0a0a0a]/95 backdrop-blur-xl px-4 py-3 rounded-xl border border-[#FF7404]/30 shadow-lg"
                            >
                                <div className="flex items-center gap-2">
                                    <Zap className="w-4 h-4 text-[#FF7404]" />
                                    <span className="text-white font-bold text-sm">Under 60s</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right: Phone Demo */}
                    <div className="relative perspective-[2000px] hidden lg:flex items-center justify-center">
                        {/* Ambient glow */}
                        <div className="absolute w-[500px] h-[500px] bg-[#FF7404]/[0.08] rounded-full blur-[120px] pointer-events-none" />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, rotateY: -8 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as const }}
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
                            initial={{ opacity: 0, x: 40, y: 20 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                            className="absolute -right-2 xl:right-0 top-[22%] z-20"
                        >
                            <motion.div
                                animate={{ y: [0, -6, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="bg-[#0a0a0a]/90 backdrop-blur-2xl p-5 xl:p-6 rounded-2xl border border-white/[0.08] shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)]"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-9 h-9 xl:w-10 xl:h-10 rounded-xl bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center">
                                        <Zap className="w-4 h-4 xl:w-5 xl:h-5 text-[#FF7404]" />
                                    </div>
                                    <div className="text-[9px] text-white/40 font-semibold uppercase tracking-[0.15em]">Response Time</div>
                                </div>
                                <div className="text-2xl xl:text-3xl font-bold text-white tracking-tight">Under 60s</div>
                                <div className="text-[10px] text-white/35 font-medium mt-1">Average First Contact</div>
                            </motion.div>
                        </motion.div>
                    </div>

                </div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </section>
    );
}
