'use client';

import { motion } from 'framer-motion';
import { Layers, FileText, Sparkles, Database, Bot, CalendarCheck, ShieldCheck } from 'lucide-react';

const features = [
    { icon: FileText, label: "Manager Special Structuring", desc: "Offer optimization" },
    { icon: Sparkles, label: "High-Converting Word-tracks", desc: "Battle-tested scripts" },
    { icon: Database, label: "DMS List Cleaning & Mining", desc: "Data enrichment" },
    { icon: Bot, label: "AI BDC Coverage", desc: "24/7 lead handling" },
    { icon: CalendarCheck, label: "Direct-to-CRM Booking", desc: "Seamless integration" },
    { icon: ShieldCheck, label: "TCPA & DNC Protection", desc: "Full compliance" }
];

const campaigns = [
    '/images/drive-download-custom-campaigns/campaign-1.jpg',
    '/images/drive-download-custom-campaigns/campaign-2.jpg',
    '/images/drive-download-custom-campaigns/campaign-3.jpg',
    '/images/drive-download-custom-campaigns/campaign-4.jpg',
    '/images/drive-download-custom-campaigns/campaign-5.jpg',
];

export default function AssetStack() {
    return (
        <section className="py-24 bg-[#050505] relative z-10 border-t border-white/5 overflow-visible">
            <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Visual Stack - Fanning Gallery */}
                    <motion.div
                        // Feature 1: Ambient Life (Floating Animation)
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                        className="relative h-[600px] flex items-center justify-center group/container perspective-[1000px]"
                    >
                        {/* Premium Immersive Glow */}
                        <div className="absolute w-[600px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px] -z-10 opacity-30 transition-all duration-1000 group-hover/container:opacity-60 group-hover/container:bg-[#FF7404]/10" />

                        {/* Stack Container */}
                        <div className="relative w-full h-[400px] flex items-center justify-center">
                            {campaigns.map((img, i) => {
                                // Calculate stacking order (Right to Left visual)
                                const rotation = (i - 2) * 6;
                                const xOffset = (i - 2) * -50;

                                return (
                                    <motion.div
                                        key={img}
                                        // Initial stacked state
                                        initial={{
                                            x: xOffset,
                                            y: i * 2,
                                            rotate: rotation,
                                            scale: 1 - (i * 0.05),
                                            zIndex: campaigns.length - i
                                        }}
                                        // Hover state for the entire container (Fanning Effect)
                                        whileHover={{
                                            x: (i - 2) * 85, // Spread out widely
                                            y: 0,
                                            rotate: 0, // Straighten up
                                            scale: 1, // Full size
                                            zIndex: campaigns.length - i, // Maintain z-index order
                                            transition: {
                                                type: "spring",
                                                stiffness: 220,
                                                damping: 20
                                            }
                                        }}
                                        className="absolute w-[280px] h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 origin-bottom cursor-pointer hover:!scale-110 hover:!z-50 hover:border-[#FF7404] hover:shadow-[0_25px_50px_-5px_rgba(255,116,4,0.4)]"
                                        style={{
                                            zIndex: campaigns.length - i,
                                            transformOrigin: 'center bottom'
                                        }}
                                    >
                                        <div className="relative h-full w-full bg-[#111] group/card">
                                            <img
                                                src={img}
                                                alt={`Campaign Creative ${i + 1}`}
                                                className="w-full h-full object-contain bg-black p-1"
                                            />

                                            {/* Reflective Sheen */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 mix-blend-overlay group-hover/card:opacity-0 transition-opacity pointer-events-none" />

                                            {/* Feature 3: Cinematic Sheen (Periodic Shine) */}
                                            <motion.div
                                                animate={{ x: ['-100%', '200%'] }}
                                                transition={{
                                                    repeat: Infinity,
                                                    duration: 3,
                                                    delay: i * 2, // Stagger sheen on different cards
                                                    repeatDelay: 5,
                                                    ease: "easeInOut"
                                                }}
                                                className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/10 to-transparent skew-x-12 pointer-events-none"
                                            />

                                            {/* Darkening overlay for stack depth */}
                                            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover/container:bg-black/0 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>

                        {/* Interaction Hint */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-widest font-medium pointer-events-none group-hover/container:opacity-0 transition-opacity"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                            Hover to Expand Stack
                        </motion.div>
                    </motion.div>

                    {/* Right Checklist - Upgraded to Feature Grid */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6"
                        >
                            <Layers className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Done-For-You Build</span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold text-white mb-6"
                        >
                            Everything you need to launch.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-white/60 mb-10 leading-relaxed"
                        >
                            We don't just give you a tool. We build the entire machine for every single campaign you run. From creative to compliance, it's plug-and-play.
                        </motion.p>

                        {/* Feature 2: Upgraded Feature Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {features.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-start gap-4 bg-white/[0.02] p-4 rounded-xl border border-white/5 hover:bg-white/[0.05] hover:border-[#FF7404]/30 transition-all duration-300 group cursor-default"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-lg bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center group-hover:bg-[#FF7404] transition-colors duration-300 shrink-0">
                                        <item.icon className="w-4 h-4 text-[#FF7404] group-hover:text-black transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-white group-hover:text-[#FF7404] transition-colors duration-300">{item.label}</h3>
                                        <p className="text-xs text-white/40 mt-1 group-hover:text-white/60 transition-colors">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
