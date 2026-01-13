'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Smartphone, MessageCircle, Info } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#020202]">
            {/* Premium Background Atmosphere */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />
            <div className="absolute -top-[20%] right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl group cursor-default hover:bg-white/[0.05] transition-colors">
                            <div className="flex items-center gap-2 relative">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                <span className="text-zinc-300 text-xs font-bold uppercase tracking-[0.2em]">SMS-First Technology</span>
                            </div>
                        </div>

                        <div className="relative">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-6">
                                Don't just chat. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FFB070]">
                                    Text Them.
                                </span>
                            </h1>
                            <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed font-light">
                                Web chats die when the tab closes. Our widget moves the conversation to
                                <span className="text-white font-medium"> SMS instantly</span>,
                                capturing real mobile numbers and keeping the deal alive forever.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="/book-demo" className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#FF7404] text-black font-bold text-lg rounded-2xl overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_50px_-15px_rgba(255,116,4,0.5)]">
                                <span className="relative z-10">Switch to SMS First</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/5">
                            {[
                                { label: "Open Rate", value: "98%" },
                                { label: "Valid Phones", value: "100%" },
                                { label: "Response Time", value: "< 90s" }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 mb-1 group-hover:to-white transition-all">{stat.value}</div>
                                    <div className="text-zinc-600 text-xs font-bold uppercase tracking-widest group-hover:text-[#FF7404] transition-colors">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual - Desktop to Mobile Transformation */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ y, opacity }}
                        className="relative h-[600px] w-full hidden lg:block"
                    >
                        {/* Connection Line */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0" viewBox="0 0 600 400">
                            <motion.path
                                d="M 150 200 C 250 200, 350 200, 450 200"
                                stroke="url(#gradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="10 10"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 0.3 }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#333" />
                                    <stop offset="50%" stopColor="#FF7404" />
                                    <stop offset="100%" stopColor="#333" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Desktop Widget Card (Left) */}
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl p-4 z-10"
                        >
                            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                                <div className="w-8 h-8 rounded-full bg-[#FF7404] flex items-center justify-center">
                                    <MessageCircle className="w-4 h-4 text-black" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-white">Dealer Chat</div>
                                    <div className="text-[10px] text-zinc-500">Online</div>
                                </div>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 mb-4">
                                <div className="text-[10px] text-zinc-400 mb-1">VisQuanta AI</div>
                                <div className="text-xs text-zinc-200">Hi! I can text you our inventory list. What's your mobile number?</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="flex-1 h-8 bg-black border border-white/10 rounded-lg flex items-center px-3 text-[10px] text-zinc-500">
                                    555-0123
                                </div>
                                <div className="h-8 w-8 bg-[#FF7404] rounded-lg flex items-center justify-center">
                                    <ArrowRight className="w-3 h-3 text-black" />
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="absolute -top-3 -right-3 px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-[9px] text-zinc-400 font-mono">
                                WEB
                            </div>
                        </motion.div>

                        {/* Mobile Phone (Right) */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="absolute top-1/2 right-0 -translate-y-1/2 w-[260px] h-[500px] bg-black border-[6px] border-[#1a1a1a] rounded-[3rem] shadow-[0_0_100px_-20px_rgba(255,116,4,0.3)] z-20 overflow-hidden"
                        >
                            {/* Dynamic Island */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-xl z-30" />

                            {/* Screen Content */}
                            <div className="w-full h-full bg-zinc-950 p-4 pt-12 flex flex-col">
                                <div className="text-center mb-6">
                                    <div className="w-12 h-12 rounded-full bg-zinc-800 mx-auto mb-2 flex items-center justify-center">
                                        <Smartphone className="w-5 h-5 text-zinc-400" />
                                    </div>
                                    <div className="text-[10px] text-zinc-500 font-medium">Messages • Now</div>
                                </div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.5, type: "spring" }}
                                    className="bg-[#222] rounded-2xl p-3 rounded-tl-none mb-2 max-w-[85%]"
                                >
                                    <div className="text-xs text-zinc-200 leading-relaxed">
                                        Here is the link to our SUV inventory! 🚙
                                        <span className="block text-[#FF7404] underline mt-1">visquanta.com/suvs</span>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.2, type: "spring" }}
                                    className="bg-[#FF7404] rounded-2xl p-3 rounded-tr-none self-end max-w-[85%] text-black"
                                >
                                    <div className="text-xs font-medium leading-relaxed">
                                        Thanks! Do you have that black Tahoe I saw online?
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ y: 20, opacity: 0, scale: 0.9 }}
                                    animate={{ y: 0, opacity: 1, scale: 1 }}
                                    transition={{ delay: 3.5, type: "spring" }}
                                    className="bg-[#222] rounded-2xl p-3 rounded-tl-none mt-2 max-w-[85%]"
                                >
                                    <div className="text-xs text-zinc-200 leading-relaxed">
                                        Yes, we do! It's on the lot now. Want me to send a walkaround video? 🎥
                                    </div>
                                </motion.div>

                                {/* Keyboard */}
                                <div className="mt-auto bg-[#1a1a1a] rounded-t-xl -mx-4 -mb-4 p-4 h-48 opacity-50">
                                    <div className="w-full h-8 bg-zinc-800 rounded mb-2" />
                                    <div className="grid grid-cols-10 gap-1">
                                        {[...Array(10)].map((_, i) => <div key={i} className="h-8 bg-zinc-800 rounded" />)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Glowing Connection Dot */}
                        <motion.div
                            animate={{
                                offsetDistance: "100%",
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "linear",
                                delay: 1
                            }}
                            style={{ offsetPath: "path('M 150 200 C 250 200, 350 200, 450 200')" }}
                            className="absolute w-3 h-3 bg-[#FF7404] rounded-full shadow-[0_0_10px_#FF7404] z-50"
                        />

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
