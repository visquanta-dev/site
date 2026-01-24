'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Eye, ShieldCheck, MessageSquare, BellRing } from 'lucide-react';
import React from 'react';

const steps = [
    {
        icon: MessageSquare,
        title: "AI Engagement",
        description: "Our AI handles 95% of routine inquiries instantly: vetting leads, answering questions, and booking appointments."
    },
    {
        icon: Eye,
        title: "Real-Time Monitoring",
        description: "Our dedicated team monitors conversations as they happen. We don't just 'set it and forget it.' We watch for nuance."
    },
    {
        icon: ShieldCheck,
        title: "Quality Assurance",
        description: "If the AI misses a beat, our humans step in to correct course, ensuring no opportunity is lost to a misunderstanding."
    },
    {
        icon: BellRing,
        title: "High-Value Handoff",
        description: "When a conversation turns into a serious sales opportunity, we flag it immediately for your sales team to close."
    }
];

export default function HumanInLoop() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - rect.left - rect.width / 2);
        y.set(e.clientY - rect.top - rect.height / 2);
    };

    return (
        <section className="py-32 bg-[#050505] relative border-t border-white/[0.05] overflow-hidden">
            {/* Background Car Wireframe */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center opacity-[0.04]">
                <motion.img
                    src="/images/car-wireframe-complete.png"
                    alt=""
                    initial={{ scale: 1.1, opacity: 0, rotate: -2 }}
                    whileInView={{ scale: 1.3, opacity: 1, rotate: 0 }}
                    transition={{ duration: 2.5, ease: "easeOut" }}
                    className="w-full h-full object-contain max-w-none grayscale"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Visual Side - Interactive Tilt */}
                    <div className="relative order-2 lg:order-1 perspective-1000" onMouseMove={handleMouseMove} onMouseLeave={() => { x.set(0); y.set(0); }}>
                        <div className="absolute inset-0 bg-[#FF7404]/5 blur-[100px] rounded-full" />
                        <motion.div
                            style={{ rotateX, rotateY }}
                            className="relative z-10 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-[#FF7404]/10"
                        >
                            {/* Chat Simulation UI */}
                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={{
                                    visible: { transition: { staggerChildren: 0.8 } }
                                }}
                            >
                                {/* AI Message */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                                    className="flex gap-4"
                                >
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none max-w-[80%] border border-white/5">
                                        <p className="text-white/80 text-sm typing-cursor">Hi! Are you still interested in the 2024 F-150 Lariat?</p>
                                    </div>
                                </motion.div>

                                {/* User Message */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}
                                    className="flex gap-4 flex-row-reverse"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#FF7404] flex-shrink-0" />
                                    <div className="bg-[#FF7404]/20 p-4 rounded-2xl rounded-tr-none max-w-[80%] border border-[#FF7404]/20">
                                        <p className="text-white text-sm">Yeah, but I'm worried about the financing terms.</p>
                                    </div>
                                </motion.div>

                                {/* Intervention Alert - Enhanced Pulse */}
                                <motion.div
                                    variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                                    className="my-6 flex justify-center"
                                >
                                    <motion.div
                                        animate={{ boxShadow: ["0 0 0 0px rgba(255, 116, 4, 0.2)", "0 0 0 10px rgba(255, 116, 4, 0)"] }}
                                        transition={{ repeat: Infinity, duration: 2 }}
                                        className="bg-[#FF7404]/10 border border-[#FF7404]/50 px-4 py-2 rounded-full flex items-center gap-2"
                                    >
                                        <Eye className="w-4 h-4 text-[#FF7404] animate-pulse" />
                                        <span className="text-xs font-bold text-[#FF7404] uppercase tracking-wider">Human Reviewing Context...</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <div className="text-[#FF7404] font-bold text-sm uppercase tracking-widest mb-4">Human-in-the-Loop Protocol</div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Never Miss a <br />Single Opportunity.</h2>
                            <p className="text-white/60 text-lg leading-relaxed">
                                AI is fast, but humans are empathetic. We combine both. Unlike competitors who hand you a login and walk away, we actively manage your conversations to maximize conversion.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-4 group p-4 rounded-xl hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7404]/50 transition-colors shadow-lg group-hover:shadow-[#FF7404]/10">
                                        <step.icon className="w-5 h-5 text-white/50 group-hover:text-[#FF7404] transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-lg mb-1">{step.title}</h3>
                                        <p className="text-white/40 text-sm leading-relaxed">{step.description}</p>
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
