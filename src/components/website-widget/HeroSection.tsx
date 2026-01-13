'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MessageCircle, Info, Send, Phone } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';
import MobilePhoneMockup from '../mobile/MobilePhoneMockup';

// Exact scenario from the request
const DEMO_SCENARIO = {
    id: 'sms-first-hero',
    contactName: 'VisQuanta Motors',
    contactRole: 'SALES',
    avatarInitials: 'VM',
    messages: [
        { id: '1', sender: 'agent' as const, content: "Here is the link to our SUV inventory! 🚗", type: 'text' as const },
        { id: '2', sender: 'user' as const, content: "Thanks! Do you have that black Tahoe I saw online?", type: 'text' as const },
        { id: '3', sender: 'agent' as const, content: "Yes we do! It's on the lot now. Want me to send a walkaround video? 📹", type: 'text' as const }
    ]
};

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#050505]">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,116,4,0.08),transparent_40%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,116,4,0.03),transparent_40%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-10"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                            </span>
                            <span className="text-zinc-300 text-[11px] font-bold uppercase tracking-[0.2em]">SMS-First Technology</span>
                        </div>

                        {/* Headline */}
                        <div>
                            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[0.9] tracking-tighter mb-8">
                                Don't just chat. <br />
                                <span className="text-[#FF7404]">
                                    Text Them.
                                </span>
                            </h1>
                            <p className="text-xl text-zinc-400 max-w-lg leading-relaxed font-light">
                                Web chats die when the tab closes. Our widget moves the conversation to <span className="text-white font-medium">SMS instantly</span>, capturing real mobile numbers and keeping the deal alive forever.
                            </p>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-5">
                            <Link href="/book-demo" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FF7404] text-black font-bold text-lg rounded-xl transition-all hover:bg-[#FF8524] hover:shadow-[0_0_30px_-10px_rgba(255,116,4,0.4)]">
                                Switch to SMS First
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        {/* Stats Row */}
                        <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/5">
                            {[
                                { label: "Open Rate", value: "98%" },
                                { label: "Valid Phones", value: "100%" },
                                { label: "Response Time", value: "< 90s" }
                            ].map((stat, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-[#FF7404] transition-colors">{stat.value}</div>
                                    <div className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right Column: Visual Mockups */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ y, opacity }}
                        className="relative h-[650px] w-full hidden lg:block"
                    >
                        {/* Desktop Widget Card (Left, Floating) */}
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute top-[50%] left-0 -translate-y-1/2 w-[340px] bg-[#111111] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 font-sans"
                        >
                            {/* Header */}
                            <div className="bg-[#1a1a2e] p-4 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10">
                                        <img src="/images/team/member-placeholder.jpg" alt="Agent" className="w-full h-full object-cover" />
                                        {/* Fallback if image missing is handled by standard img behavior or we can use a colored div */}
                                    </div>
                                    <div className="text-white font-medium text-[15px]">Have a question?</div>
                                </div>
                                <div className="text-white/50">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                </div>
                            </div>

                            <div className="p-5 space-y-4">
                                {/* Welcome Message */}
                                <div className="flex gap-3">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden border border-white/10 mt-1">
                                        <div className="w-full h-full bg-[#FF7404] flex items-center justify-center text-black font-bold text-xs">AI</div>
                                    </div>
                                    <div className="bg-[#1a1a2e] text-zinc-300 text-sm p-3 rounded-lg rounded-tl-none border-l-2 border-[#FF7404] leading-relaxed shadow-sm">
                                        Enter your question below and a representative will get right back to you.
                                    </div>
                                </div>

                                {/* Form Fields */}
                                <div className="space-y-3 pt-2">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full h-10 bg-[#1a1a1a] border border-white/10 rounded-md px-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 transition-colors"
                                    />

                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 border-r border-white/10 pr-2 mr-2">
                                            <span className="text-lg">🇺🇸</span>
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                        <input
                                            type="tel"
                                            placeholder="Phone"
                                            className="w-full h-10 bg-[#1a1a1a] border border-white/10 rounded-md pl-16 px-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 transition-colors"
                                        />
                                    </div>

                                    <textarea
                                        placeholder="I want to know more"
                                        rows={3}
                                        className="w-full bg-[#1a1a1a] border border-white/10 rounded-md px-3 py-2 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 transition-colors resize-none"
                                    />
                                </div>

                                {/* Consent */}
                                <div className="flex gap-2 items-start py-1">
                                    <div className="mt-0.5 w-4 h-4 rounded border border-[#FF7404] bg-[#FF7404] flex items-center justify-center flex-shrink-0">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <p className="text-[10px] text-zinc-500 leading-tight">
                                        By submitting you agree to receive SMS or e-mails for the provided channel. Rates may be applied.
                                    </p>
                                </div>

                                {/* Submit Button */}
                                <button className="w-full h-10 bg-[#1a1a2e] hover:bg-[#232340] text-white rounded-md flex items-center justify-center gap-2 transition-colors font-medium border border-white/5">
                                    <span>Send</span>
                                    <Send className="w-3.5 h-3.5" />
                                </button>

                                {/* Footer */}
                                <div className="text-center pt-1">
                                    <span className="text-[10px] text-zinc-600">Powered by <span className="text-[#FF7404] font-semibold">VisQuanta</span></span>
                                </div>
                            </div>
                        </motion.div>


                        {/* Connection Visual */}
                        <svg className="absolute top-[45%] left-[280px] w-[150px] h-[100px] z-10 pointer-events-none" viewBox="0 0 150 100">
                            <motion.path
                                d="M 0 50 C 50 50, 70 50, 150 50"
                                stroke="#FF7404"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="4 4"
                                strokeOpacity="0.5"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                            <motion.circle
                                cx="0" cy="50" r="3" fill="#FF7404"
                                animate={{ cx: [0, 150], opacity: [1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                        </svg>


                        {/* Mobile Phone (Right) - Using Mockup Component */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="absolute top-1/2 right-10 -translate-y-1/2 z-30"
                        >
                            {/* 
                  Wrapper to scale and position the phone mockup exactly as requested. 
                  We pass 'isActive={true}' to trigger message animations.
               */}
                            <div className="transform scale-110">
                                <MobilePhoneMockup scenario={DEMO_SCENARIO} isActive={true} />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
