'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, MessageSquare, Phone, AlertTriangle, Zap, Trophy, X } from 'lucide-react';

export default function LeadLossMoment() {
    return (
        <section className="py-20 sm:py-28 lg:py-36 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Central dramatic gradient */}
                <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-[#FF7404]/[0.04] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[5%] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-red-500/[0.03] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-6 sm:mb-8">
                        <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FF7404]" />
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">The Race to Response</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 tracking-[-0.02em] leading-[1]">
                        Speed Wins. <br />
                        <span className="text-white/60">Delay Loses.</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/40 leading-relaxed max-w-2xl mx-auto">
                        The difference between closing a deal and losing it to a competitor often comes down to minutes, not hours.
                    </p>
                </motion.div>

                {/* Race Track Visualization */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Mobile-friendly comparison cards */}
                    <div className="lg:hidden space-y-4 mb-8">
                        {/* Speed to Lead - Winner */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-gradient-to-r from-[#0a0a0a] to-[#080808] rounded-2xl border border-[#FF7404]/30 p-5 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/10 via-transparent to-green-500/5 opacity-50" />
                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7404] to-[#FF9040] flex items-center justify-center shadow-[0_0_20px_-5px_#FF7404]">
                                            <Zap className="w-5 h-5 text-black" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Speed to Lead</div>
                                            <div className="text-[10px] text-[#FF7404] font-semibold uppercase tracking-wider">Managed</div>
                                        </div>
                                    </div>
                                    <div className="bg-green-500/10 border border-green-500/30 rounded-lg px-3 py-2 text-center">
                                        <Trophy className="w-5 h-5 text-green-400 mx-auto mb-1" />
                                        <div className="text-[10px] text-green-400 font-bold uppercase">Won</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm">
                                    <span className="text-[#FF7404] font-mono">0:08</span>
                                    <span className="text-white/30">-</span>
                                    <span className="text-white/50">Engaged</span>
                                    <span className="text-white/30">-</span>
                                    <span className="text-green-400 font-mono">3:45</span>
                                    <span className="text-white/50">Call Booked</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Typical Response - Loser */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="bg-[#080808] rounded-2xl border border-white/[0.06] p-5 opacity-70"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                                        <Clock className="w-5 h-5 text-white/40" />
                                    </div>
                                    <div>
                                        <div className="text-white/70 font-bold">Typical Response</div>
                                        <div className="text-[10px] text-white/30 uppercase tracking-wider">Industry Average</div>
                                    </div>
                                </div>
                                <div className="bg-white/[0.03] border border-white/[0.06] rounded-lg px-3 py-2 text-center">
                                    <X className="w-5 h-5 text-white/25 mx-auto mb-1" />
                                    <div className="text-[10px] text-white/30 font-bold uppercase">Lost</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-white/30 font-mono">...</span>
                                <span className="text-white/20">Waiting</span>
                                <span className="text-white/20">-</span>
                                <span className="text-white/30">Competitor First</span>
                                <span className="text-white/20">-</span>
                                <span className="text-white/30">Buyer Gone</span>
                            </div>
                        </motion.div>
                    </div>



                    {/* Two Racing Lanes - Desktop only */}
                    <div className="hidden lg:block space-y-6">

                        {/* Lane 1: Speed to Lead (Winner) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative"
                        >
                            <div className="bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] rounded-3xl border border-[#FF7404]/30 p-8 relative overflow-hidden shadow-[0_10px_40px_-10px_rgba(255,116,4,0.1)]">
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/10 via-transparent to-green-500/5 opacity-50" />

                                <div className="relative z-10 flex items-center gap-8">
                                    {/* Lane Label */}
                                    <div className="flex-shrink-0 w-48">
                                        <div className="flex items-center gap-4">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7404] to-[#FF9040] flex items-center justify-center shadow-[0_0_30px_-5px_#FF7404] ring-1 ring-white/20">
                                                <Zap className="w-7 h-7 text-black fill-black/20" />
                                            </div>
                                            <div>
                                                <div className="text-white font-bold text-lg tracking-tight">Speed to Lead</div>
                                                <div className="text-[10px] text-[#FF7404] font-bold uppercase tracking-widest bg-[#FF7404]/10 px-2 py-0.5 rounded-full w-fit mt-1">Managed</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Track */}
                                    <div className="flex-1 relative">
                                        {/* Track line */}
                                        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-white/[0.06] rounded-full -translate-y-1/2" />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 }}
                                            className="absolute top-1/2 left-0 h-1.5 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-green-500 rounded-full -translate-y-1/2 shadow-[0_0_20px_#FF7404]"
                                        />

                                        {/* Milestones */}
                                        <div className="relative flex items-center justify-between py-5">
                                            {[
                                                { time: '0:00', label: 'Lead arrives', icon: Clock, delay: 0.4 },
                                                { time: '0:08', label: 'Engaged', icon: MessageSquare, delay: 0.7 },
                                                { time: '1:30', label: 'Qualified', icon: MessageSquare, delay: 1 },
                                                { time: '3:45', label: 'Call booked', icon: Phone, delay: 1.3, success: true }
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: step.delay, type: 'spring', stiffness: 200 }}
                                                    className="relative group z-10"
                                                >
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center relative transition-all duration-300 ${step.success
                                                        ? 'bg-green-500 shadow-[0_0_30px_-5px_#22c55e] scale-110'
                                                        : 'bg-[#1a1a1a] border-2 border-[#FF7404]/50 group-hover:border-[#FF7404] group-hover:shadow-[0_0_15px_rgba(255,116,4,0.3)]'
                                                        }`}>
                                                        <step.icon className={`w-5 h-5 ${step.success ? 'text-black fill-black/10' : 'text-[#FF7404]'}`} />
                                                    </div>
                                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                                                        <div className={`text-sm font-bold ${step.success ? 'text-green-400' : 'text-[#FF7404]'}`}>{step.time}</div>
                                                        <div className="text-xs text-white/40 font-medium mt-0.5">{step.label}</div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcome */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 1.5 }}
                                        className="flex-shrink-0 w-44"
                                    >
                                        <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/30 rounded-2xl p-5 text-center shadow-[0_0_30px_-10px_rgba(34,197,94,0.2)]">
                                            <Trophy className="w-8 h-8 text-green-400 mx-auto mb-2 drop-shadow-lg" />
                                            <div className="text-green-400 font-bold text-lg uppercase tracking-wider">Call Booked</div>
                                            <div className="text-[10px] text-green-400/60 mt-1 font-medium">Under 4 min</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Lane 2: Typical Response (Loser) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                            className="relative"
                        >
                            <div className="bg-[#0a0a0a] rounded-2xl border border-white/[0.08] p-6 relative overflow-hidden">

                                <div className="relative z-10 flex items-center gap-6">
                                    {/* Lane Label */}
                                    <div className="flex-shrink-0 w-48">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center">
                                                <Clock className="w-6 h-6 text-white/50" />
                                            </div>
                                            <div>
                                                <div className="text-white/80 font-bold text-lg">Typical Response</div>
                                                <div className="text-[10px] text-white/40 uppercase tracking-widest">Industry Average</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Progress Track */}
                                    <div className="flex-1 relative">
                                        {/* Track line */}
                                        <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/[0.06] rounded-full -translate-y-1/2" />
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '45%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: 'easeOut', delay: 0.5 }}
                                            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-white/30 to-white/10 rounded-full -translate-y-1/2"
                                        />

                                        {/* Milestones */}
                                        <div className="relative flex items-center py-4" style={{ justifyContent: 'flex-start', gap: '15%' }}>
                                            {[
                                                { time: '0:00', label: 'Lead arrives', icon: Clock, delay: 0.6 },
                                                { time: 'Waiting', label: 'Sitting in CRM', icon: Clock, delay: 1.2, faded: true },
                                                { time: '2:00+', label: 'Competitor first', icon: AlertTriangle, delay: 1.8, warning: true },
                                                { time: 'Lost', label: 'Buyer gone', icon: XCircle, delay: 2.2, error: true }
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: step.delay, type: 'spring', stiffness: 200 }}
                                                    className="relative"
                                                >
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.error ? 'bg-white/5 border-2 border-white/20' :
                                                        step.warning ? 'bg-white/5 border-2 border-white/20' :
                                                            'bg-white/[0.05] border-2 border-white/[0.1]'
                                                        }`}>
                                                        <step.icon className={`w-5 h-5 ${step.error ? 'text-white/40' :
                                                            step.warning ? 'text-white/40' :
                                                                'text-white/40'
                                                            }`} />
                                                    </div>
                                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                                                        <div className="text-sm font-bold text-white/40">{step.time}</div>
                                                        <div className="text-xs text-white/20 font-medium mt-0.5">{step.label}</div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Outcome */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 2.5 }}
                                        className="flex-shrink-0 w-44"
                                    >
                                        <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4 text-center">
                                            <X className="w-8 h-8 text-white/30 mx-auto mb-2" />
                                            <div className="text-white/40 font-bold text-lg uppercase tracking-wider">Lead Lost</div>
                                            <div className="text-[10px] text-white/25 mt-1 font-mono uppercase tracking-widest">Too Slow</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                    </div>



                    {/* SEO Strengthening: Link to Orphan Page */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-10 sm:mt-14 lg:mt-16 text-center"
                    >
                        <a
                            href="/blog/speed-to-lead-slow-follow-up-sales-impact"
                            className="text-[11px] sm:text-xs font-semibold text-white/25 uppercase tracking-[0.15em] sm:tracking-[0.2em] hover:text-[#FF7404] transition-colors duration-300"
                        >
                            Read our deep dive on <span className="underline decoration-white/10 underline-offset-4 hover:decoration-[#FF7404]/30">The Sales Impact of Slow Follow-Up</span>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
