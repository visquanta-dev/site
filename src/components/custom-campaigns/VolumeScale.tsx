'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, MessageSquare, Activity, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const milestones = [
    { label: '1k', desc: 'Surgical Strike' },
    { label: '10k', desc: 'Weekend Event' },
    { label: '100k', desc: 'Market Domination' },
    { label: '1M+', desc: 'Group-Wide Blast' }
];

export default function VolumeScale() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#0a0a0a] relative z-10 border-t border-white/5 overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FF7404]/10 border border-[#FF7404]/20 rounded-full mb-6 backdrop-blur-sm">
                            <Activity className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-xs font-bold text-[#FF7404] uppercase tracking-widest">Enterprise Scale</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">From 1,000 to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">1,000,000+ Sends.</span></h2>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            Most systems crash at 5,000. We built ours for the enterprise. Whether it's a single store laser-shot or a group-wide database activation, our infrastructure handles the pacing, opt-outs, and delivery compliance automatically.
                        </p>

                        <div className="flex flex-col gap-4">
                            {[
                                "Send pacing automatically managed",
                                "Opt-outs handled instantly",
                                "Reply handling active at all volumes"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 group">
                                    <div className="w-6 h-6 rounded-full bg-[#FF7404]/20 flex items-center justify-center border border-[#FF7404]/30 group-hover:bg-[#FF7404] group-hover:text-black transition-colors">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7404] group-hover:text-black transition-colors" />
                                    </div>
                                    <span className="text-white/80 font-medium group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Volume Scale UI */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-[#050505]/80 border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl overflow-hidden relative backdrop-blur-md">
                            {/* Inner Highlight */}
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent opacity-50" />

                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

                            <div className="relative z-10 space-y-12">
                                <div className="text-center">
                                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em] mb-8">System Volume Capacity</div>

                                    {/* Scale Graphic */}
                                    <div className="relative h-2 bg-white/5 rounded-full w-full max-w-md mx-auto border border-white/5">
                                        <div className="absolute left-0 top-0 bottom-0 bg-[#FF7404] rounded-full w-3/4 shadow-[0_0_20px_#ff7404]" />

                                        {/* Milestones */}
                                        <div className="absolute inset-0 flex justify-between items-center -mx-2">
                                            {milestones.map((m, i) => (
                                                <div
                                                    key={i}
                                                    className="relative group cursor-pointer"
                                                    onMouseEnter={() => setHoveredIndex(i)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                >
                                                    <div className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${i <= 2 ? 'bg-[#FF7404] border-white shadow-[0_0_15px_#ff7404] scale-110' : 'bg-[#0f0f0f] border-white/30 hover:border-white/60'}`} />

                                                    <div className="absolute top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                                        <div className={`text-[10px] font-bold uppercase tracking-wider transition-colors ${i <= 2 ? 'text-white' : 'text-white/40'}`}>{m.label}</div>
                                                    </div>

                                                    {/* Tooltip */}
                                                    <motion.div
                                                        initial={{ opacity: 0, y: -10 }}
                                                        animate={{ opacity: hoveredIndex === i ? 1 : 0, y: hoveredIndex === i ? -45 : -10 }}
                                                        className="absolute bottom-full left-1/2 -translate-x-1/2 bg-[#FF7404] text-black text-[10px] font-bold uppercase tracking-wide px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl pointer-events-none z-20 border border-white/20"
                                                    >
                                                        {m.desc}
                                                        <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-[#FF7404] rotate-45 border-r border-b border-white/20" />
                                                    </motion.div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Status Cards */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-[#FF7404]/20 flex items-center justify-center border border-[#FF7404]/30">
                                            <Activity className="w-5 h-5 text-[#FF7404]" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase text-white/40 font-bold tracking-wider">Throughput</div>
                                            <div className="text-sm font-bold text-white">125 msg/sec</div>
                                        </div>
                                    </div>
                                    <div className="bg-white/[0.03] border border-white/10 p-4 rounded-xl flex items-center gap-3 backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
                                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                                            <ShieldCheck className="w-5 h-5 text-green-400" />
                                        </div>
                                        <div>
                                            <div className="text-[9px] uppercase text-white/40 font-bold tracking-wider">Compliance</div>
                                            <div className="text-sm font-bold text-white">100% Verified</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
