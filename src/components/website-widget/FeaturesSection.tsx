'use client';

import { motion } from 'framer-motion';
import { Timer, Smartphone, Lock, Bot, Settings, Users } from 'lucide-react';
import Image from 'next/image';

export default function FeaturesSection() {
    const features = [
        { icon: <Bot className="w-6 h-6" />, title: "AI Appointment Setter", desc: "Our AI handles the initial conversation, answering inventory questions and booking test drives 24/7.", color: "purple" },
        { icon: <Smartphone className="w-6 h-6" />, title: "Instant Call Handoff", desc: "If a customer wants to talk, the AI instantly connects them to your sales team via a voice call.", color: "blue" },
        { icon: <Lock className="w-6 h-6" />, title: "Compliance Built-In", desc: "We handle the TCPA opt-ins and disclaimers automatically, so you're always protected.", color: "emerald" },
        { icon: <Settings className="w-6 h-6" />, title: "Customizable Design", desc: "Match your dealership's branding. Change colors, avatar, position, and greeting messages.", color: "orange" },
        { icon: <Users className="w-6 h-6" />, title: "CRM Integration", desc: "Leads push directly to your CRM (DealerSocket, VinSolutions, etc.) with full transcripts.", color: "pink" },
        { icon: <Timer className="w-6 h-6" />, title: "Zero Latency", desc: "Fastest load times in the industry. We don't slow down your website.", color: "yellow" },
    ];

    const colorClasses: Record<string, { text: string, bg: string, border: string }> = {
        purple: { text: 'text-purple-400', bg: 'bg-purple-500/10', border: 'border-purple-500/20' },
        blue: { text: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20' },
        emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20' },
        orange: { text: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20' },
        pink: { text: 'text-pink-400', bg: 'bg-pink-500/10', border: 'border-pink-500/20' },
        yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/20' },
    };

    return (
        <section className="py-32 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Section Header */}
                <div className="mb-20">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10">
                        <div className="max-w-2xl">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight"
                            >
                                Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">Dealerships</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-xl text-zinc-400 font-light leading-relaxed"
                            >
                                Everything you need to capture, qualify, and convert more web traffic into showroom visits.
                            </motion.p>
                        </div>
                        {/* Setup Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-5 p-5 rounded-2xl bg-zinc-900/50 border border-white/10 backdrop-blur-sm"
                        >
                            <div className="p-4 bg-green-500/10 rounded-xl border border-green-500/20">
                                <Timer className="w-7 h-7 text-green-500" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-xl tracking-tight">5 Minute Setup</div>
                                <div className="text-zinc-500 text-sm">Works with Dealer.com, DealerOn, & more</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative p-7 rounded-2xl bg-zinc-900/50 border border-white/5 group overflow-hidden"
                        >
                            {/* Gradient Border on Hover */}
                            <div className="absolute -inset-[1px] bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-transparent group-hover:to-transparent rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                            <div className="relative z-10">
                                <div className={`w-14 h-14 rounded-xl ${colorClasses[feature.color].bg} border ${colorClasses[feature.color].border} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className={colorClasses[feature.color].text}>{feature.icon}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-3 tracking-tight group-hover:text-orange-500 transition-colors duration-300">{feature.title}</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social Proof / Testimonial Block */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-zinc-900/30 border border-white/5 rounded-3xl p-10 md:p-14 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500/5 blur-[120px] rounded-full pointer-events-none" />

                    <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                        <div className="w-full md:w-1/3 text-center md:text-left">
                            <div className="text-7xl font-black text-white mb-3 tracking-tighter">340+</div>
                            <div className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">Leads Captured / Mo</div>
                            <div className="h-1 w-20 bg-zinc-800 rounded-full mx-auto md:mx-0" />
                        </div>
                        <div className="w-full md:w-2/3 md:border-l border-white/5 md:pl-12">
                            <div className="text-xl md:text-2xl text-zinc-300 font-medium leading-relaxed mb-8">
                                "We replaced our managed chat service with the VisQuanta SMS widget and saw a <span className="text-orange-500 font-bold">40% increase</span> in lead volume overnight. Customers just prefer texting."
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-zinc-800 border-2 border-white/10 flex items-center justify-center overflow-hidden relative ring-2 ring-orange-500/20">
                                    <Image src="/images/mark_headshot.webp" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-500" alt="Mark Stevenson" />
                                </div>
                                <div>
                                    <div className="text-white font-bold text-lg">Mark Stevenson</div>
                                    <div className="text-zinc-500 text-sm uppercase tracking-wider font-medium">General Manager, Titan Automotive Group</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
