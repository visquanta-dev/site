'use client';

import { motion } from 'framer-motion';
import { Phone, Clock, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { RequestDemoButton } from '../CalendlyModal';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-36 md:pb-28 lg:pt-44 lg:pb-32">

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

            <div className="relative z-10 max-w-7xl mx-auto px-6">

                {/* Status Badge */}
                <div className="flex justify-center mb-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                        className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-full shadow-[0_0_30px_-12px_rgba(255,116,4,0.3)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500 shadow-[0_0_10px_#ef4444]"></span>
                        </span>
                        <span className="text-white/70 text-[11px] font-semibold tracking-[0.15em] uppercase">
                            80% of Service Calls Go Unanswered
                        </span>
                    </motion.div>
                </div>

                {/* Main Headline */}
                <div className="text-center mb-6 space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[5.5rem] font-black text-white tracking-[-0.03em] leading-[0.95] uppercase"
                    >
                        <span className="block">Turn Missed Calls into</span>
                        <span className="block mt-2 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF5500] bg-clip-text text-transparent filter drop-shadow-[0_0_30px_rgba(255,116,4,0.3)] uppercase">
                            Booked Service Jobs
                        </span>
                    </motion.h1>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/45 text-center max-w-4xl mx-auto mb-10 sm:mb-12 leading-relaxed font-medium"
                    >
                        Over 80% of dealership service calls go unanswered. <br className="hidden md:block" />
                        Every missed call results in <span className="text-white/80 font-medium">lost revenue</span>,
                        <span className="text-white/80 font-medium"> lost retention</span>, and
                        <span className="text-white/80 font-medium"> diminished trust</span>.
                    </motion.p>
                </div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center mb-16 sm:mb-20 md:mb-24"
                >
                    <RequestDemoButton className="group relative px-8 sm:px-10 py-5 overflow-hidden rounded-xl shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,116,4,0.6)] transition-shadow duration-500 text-center uppercase">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] rounded-xl" />
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                        <span className="relative z-10 flex items-center justify-center gap-3 text-black font-black text-sm uppercase tracking-widest">
                            <Phone className="w-4 h-4" />
                            Request a Demo
                        </span>
                    </RequestDemoButton>

                    <a href="#calculator" className="group px-8 sm:px-10 py-5 bg-white/[0.03] border border-white/[0.08] rounded-xl hover:bg-white/[0.06] transition-all duration-300 text-center">
                        <span className="flex items-center justify-center gap-3 text-white font-black text-sm uppercase tracking-widest">
                            Calculate Potential
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF7404]" />
                        </span>
                    </a>
                </motion.div>

                {/* Mobile Visual Demo (NEW) */}
                <div className="lg:hidden mb-16 sm:mb-20 flex justify-center">
                    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                        <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#0a0a0a]">
                            <img
                                src="/images/suite-bg/sdp-bg.png"
                                alt="Service Drive Pro Demo"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute inset-0 -z-10 bg-[#FF7404]/10 blur-3xl rounded-full scale-150 opacity-50" />
                    </div>
                </div>

                {/* Benefits Grid */}
                {/* Benefits List (Premium Enterprise Style) */}
                <div className="max-w-4xl mx-auto mt-32">
                    <div className="text-center mb-16">
                        <h3 className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] mb-4">Enterprise Grade</h3>
                        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent mx-auto" />
                    </div>

                    <div className="space-y-0 border-t border-white/[0.08]">
                        {[
                            {
                                icon: Phone,
                                title: 'No More Missed Calls',
                                subtitle: 'Capture 100% of inbound service inquiries, 24/7/365.',
                                stat: '100% Capture'
                            },
                            {
                                icon: Clock,
                                title: 'Real-Time Updates',
                                subtitle: 'Automated status updates keep customers informed without staff intervention.',
                                stat: '-40% Inbound Calls'
                            },
                            {
                                icon: TrendingUp,
                                title: 'Instant Scheduling',
                                subtitle: 'Direct integration with your DMS for real-time appointment booking.',
                                stat: '+25% Bookings'
                            },
                            {
                                icon: CheckCircle,
                                title: 'Customer Retention',
                                subtitle: 'Provide the seamless, instant experience modern customers demand.',
                                stat: '+15% Retention'
                            }
                        ].map((benefit, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (idx * 0.1), duration: 0.6 }}
                                className="group relative border-b border-white/[0.08] hover:bg-white/[0.02] transition-colors duration-500"
                            >
                                <div className="flex flex-col md:flex-row items-start md:items-center py-10 px-6 md:px-10 gap-6 md:gap-10">
                                    <div className="shrink-0">
                                        <div className="w-12 h-12 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-[#FF7404] group-hover:scale-110 transition-all duration-500">
                                            <benefit.icon className="w-5 h-5 text-white/50 group-hover:text-[#FF7404] transition-colors duration-500" />
                                        </div>
                                    </div>

                                    <div className="grow">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF7404] transition-colors duration-300">{benefit.title}</h3>
                                        <p className="text-base text-white/40 font-light max-w-xl group-hover:text-white/60 transition-colors duration-300">{benefit.subtitle}</p>
                                    </div>

                                    <div className="shrink-0 flex items-center justify-start md:justify-end min-w-[140px]">
                                        <span className="inline-block px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-[#FF7404] tracking-widest uppercase">
                                            {benefit.stat}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
