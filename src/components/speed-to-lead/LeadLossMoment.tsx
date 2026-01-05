'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Clock, MessageSquare, Phone, AlertTriangle, Zap, Trophy, X } from 'lucide-react';

export default function LeadLossMoment() {
    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.012] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

                {/* Central dramatic gradient */}
                <div className="absolute top-[30%] left-[10%] w-[500px] h-[500px] bg-[#FF7404]/[0.03] rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-red-500/[0.02] rounded-full blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                    className="text-center mb-24 max-w-3xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-white/[0.02] backdrop-blur-sm border border-white/[0.06] rounded-full mb-10">
                        <Zap className="w-4 h-4 text-[#FF7404]" />
                        <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50">The Race to Response</span>
                    </div>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-[-0.02em] leading-[0.95]">
                        Speed Wins. <br />
                        <span className="text-white/30">Delay Loses.</span>
                    </h2>
                    <p className="text-xl text-white/35 leading-relaxed max-w-2xl mx-auto">
                        The difference between closing a deal and losing it to a competitor often comes down to minutes—not hours.
                    </p>
                </motion.div>

                {/* Race Track Visualization */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Time Header Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-10 flex items-center justify-between px-8"
                    >
                        <div className="text-[11px] font-bold font-mono text-white/60 uppercase tracking-widest">Start</div>
                        <div className="flex-1 mx-8 h-px bg-gradient-to-r from-white/20 via-white/60 to-white/20 relative">
                            {/* Time markers */}
                            {['1 min', '2 min', '3 min', '5 min'].map((time, i) => (
                                <div key={i} className="absolute top-1/2 -translate-y-1/2" style={{ left: `${(i + 1) * 20}%` }}>
                                    <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] font-bold font-mono text-white/60">{time}</div>
                                </div>
                            ))}
                        </div>
                        <div className="text-[11px] font-bold font-mono text-white/60 uppercase tracking-widest">Outcome</div>
                    </motion.div>

                    {/* Two Racing Lanes */}
                    <div className="space-y-6">

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
                                            <div className="text-green-400 font-bold text-lg uppercase tracking-wider">Deal Won</div>
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
                                            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-white/30 to-red-500/60 rounded-full -translate-y-1/2"
                                        />

                                        {/* Milestones */}
                                        <div className="relative flex items-center py-4" style={{ justifyContent: 'flex-start', gap: '15%' }}>
                                            {[
                                                { time: '0:00', label: 'Lead arrives', icon: Clock, delay: 0.6 },
                                                { time: '...', label: 'Sitting in CRM', icon: Clock, delay: 1.2, faded: true },
                                                { time: '2:00+', label: 'Competitor first', icon: AlertTriangle, delay: 1.8, warning: true },
                                                { time: '—', label: 'Buyer gone', icon: XCircle, delay: 2.2, error: true }
                                            ].map((step, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: step.delay, type: 'spring', stiffness: 200 }}
                                                    className="relative"
                                                >
                                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${step.error ? 'bg-red-500/10 border-2 border-red-500/40' :
                                                        step.warning ? 'bg-yellow-500/10 border-2 border-yellow-500/40' :
                                                            'bg-white/[0.05] border-2 border-white/[0.1]'
                                                        }`}>
                                                        <step.icon className={`w-5 h-5 ${step.error ? 'text-red-500/80' :
                                                            step.warning ? 'text-yellow-500/80' :
                                                                'text-white/40'
                                                            }`} />
                                                    </div>
                                                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                                                        <div className={`text-sm font-bold ${step.error ? 'text-red-400' :
                                                            step.warning ? 'text-yellow-500' :
                                                                'text-white/40'
                                                            }`}>{step.time}</div>
                                                        <div className="text-xs text-white/50 font-medium mt-0.5">{step.label}</div>
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
                                        <div className="bg-red-500/[0.08] border border-red-500/20 rounded-xl p-4 text-center">
                                            <X className="w-8 h-8 text-red-500/70 mx-auto mb-2" />
                                            <div className="text-red-500/80 font-bold text-lg uppercase tracking-wider">Deal Lost</div>
                                            <div className="text-[10px] text-red-400/60 mt-1">Too slow</div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                    {/* Bottom stat comparison */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-20 grid grid-cols-3 gap-6 max-w-4xl mx-auto"
                    >
                        {[
                            { label: 'First Contact', left: '8 seconds', right: '30+ minutes', winner: 'left' },
                            { label: 'Engagement Rate', left: 'High', right: 'Low', winner: 'left' },
                            { label: 'Conversion', left: 'Booked Call', right: 'Lost Lead', winner: 'left' }
                        ].map((stat, i) => (
                            <div key={i} className="text-center">
                                <div className="text-[10px] text-white/30 uppercase tracking-widest mb-4">{stat.label}</div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-3 bg-[#FF7404]/10 border border-[#FF7404]/20 rounded-lg">
                                        <div className="text-sm font-bold text-[#FF7404]">{stat.left}</div>
                                    </div>
                                    <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded-lg">
                                        <div className="text-sm font-medium text-white/30">{stat.right}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
