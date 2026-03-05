'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ChevronDown, Facebook, Search, Video, Zap, RefreshCcw, Star, Wrench, MessageSquare, Target, BarChart3, Users, LayoutDashboard, Calendar, Clock, TrendingUp, Handshake, BrainCircuit, Activity } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SocialProofBar from '@/components/SocialProofBar';
import { RequestDemoButton } from '@/components/CalendlyModal';

// --- SUBCOMPONENTS ---

const MetaSVG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const GoogleAdsSVG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 15.907 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
);

const TikTokSVG = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
);

function Hero() {
    return (
        <section className="relative pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 lg:pt-44 overflow-hidden bg-[#020202]">
            {/* Premium Ambient Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-gradient-to-r from-[#FF7404]/10 to-purple-900/10 rounded-full blur-[120px] mix-blend-screen" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
                    {/* Left Column: Copy & CTA */}
                    <div className="max-w-xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.05] border border-white/10 rounded-full mb-8 backdrop-blur-sm"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">New Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-[1.05] uppercase"
                        >
                            Done-For-You <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#ff9040] to-[#FF7404]">Paid Campaigns</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-white/60 mb-10 leading-relaxed max-w-md font-medium"
                        >
                            We manage your dealership's paid advertising campaigns from creative to follow-up. Done for you. Meta today, Google and TikTok coming next.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
                        >
                            <RequestDemoButton asChild>
                                <button className="h-[56px] px-8 bg-[#FF7404] hover:bg-[#ff8a3d] text-black font-black uppercase text-sm rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)]">
                                    <span className="relative z-10">Schedule Your Walkthrough</span>
                                    <Sparkles className="w-5 h-5 relative z-10" />
                                </button>
                            </RequestDemoButton>

                            <a href="#how-it-works" className="h-[56px] px-8 bg-transparent border border-white/20 hover:border-white/40 text-white font-bold uppercase text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                                See How It Works
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex items-center gap-3"
                        >
                            <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold mr-2">Platforms:</span>
                            <div className="flex bg-[#050505] rounded-xl border border-white/5 p-1 group/tooltip-container relative">
                                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF7404]/10 border border-[#FF7404]/20 rounded-lg text-xs font-bold text-[#FF7404]">
                                    <MetaSVG className="w-3.5 h-3.5" />
                                    Meta
                                </div>
                                <div className="group/google flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/30 cursor-help relative">
                                    <GoogleAdsSVG className="w-3.5 h-3.5" />
                                    Google
                                    <div className="opacity-0 group-hover/google:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/10 text-white text-[10px] whitespace-nowrap rounded font-bold backdrop-blur-md pointer-events-none transition-opacity">Coming Soon</div>
                                </div>
                                <div className="group/tiktok flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/30 cursor-help relative">
                                    <TikTokSVG className="w-3.5 h-3.5" />
                                    TikTok
                                    <div className="opacity-0 group-hover/tiktok:opacity-100 absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white/10 text-white text-[10px] whitespace-nowrap rounded font-bold backdrop-blur-md pointer-events-none transition-opacity">Coming Soon</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] relative overflow-hidden group">
                            {/* Inner Highlight */}
                            <div className="absolute inset-0 rounded-[32px] border border-white/5 pointer-events-none" />
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                            <div className="absolute top-10 right-10 w-32 h-32 bg-[#FF7404]/10 rounded-full blur-[40px] pointer-events-none" />

                            <div className="space-y-6 relative z-10">
                                {/* Dashboard Header */}
                                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7404]/20 to-[#FF7404]/5 border border-[#FF7404]/20 flex items-center justify-center">
                                            <LayoutDashboard className="w-5 h-5 text-[#FF7404]" />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold tracking-tight">Campaign Performance</div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-widest mt-0.5">Last 30 Days</div>
                                        </div>
                                    </div>
                                    {/* Channel Selector */}
                                    <div className="flex bg-[#050505] rounded-xl border border-white/5 p-1">
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#FF7404]/10 border border-[#FF7404]/20 rounded-lg text-xs font-bold text-[#FF7404]">
                                            <MetaSVG className="w-3.5 h-3.5" />
                                            Meta
                                        </div>
                                        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white/30 opacity-50 cursor-not-allowed">
                                            <GoogleAdsSVG className="w-3.5 h-3.5" />
                                            Google
                                        </div>
                                    </div>
                                </div>

                                {/* KPI Cards */}
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl p-4">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Total Leads</div>
                                        <div className="text-3xl font-bold text-white mb-1">342</div>
                                        <div className="text-xs text-green-400 font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3" /> +12% vs last month</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl p-4">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">Cost Per Lead</div>
                                        <div className="text-3xl font-bold text-white mb-1">$12.40</div>
                                        <div className="text-xs text-green-400 font-medium flex items-center gap-1"><TrendingUp className="w-3 h-3 className='rotate-180'" /> -8% vs last month</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-2xl p-4">
                                        <div className="text-[10px] text-white/40 uppercase tracking-widest mb-1.5">AI Engaged</div>
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-xs text-[#FF7404] font-medium">&lt; 60s response time</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-[#FF7404]/10 to-transparent border border-[#FF7404]/30 rounded-2xl p-4 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF7404]/10 rounded-full blur-[20px] pointer-events-none" />
                                        <div className="text-[10px] text-[#FF7404] uppercase tracking-widest mb-1.5 font-bold">Appointments Booked</div>
                                        <div className="text-3xl font-bold text-white mb-1">41</div>
                                        <div className="text-xs text-[#FF7404] font-medium flex items-center gap-1">24% Contact-to-Appt Rate</div>
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

function TheProblem() {
    return (
        <section className="py-24 bg-[#010101] border-t border-white/5">
            <div className="container-wide">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">The Agency Problem</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Your dealership is burning money on generic, cookie-cutter campaigns.</h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Most automotive agencies recycle the exact same templates across hundreds of accounts. Your local market is unique and your inventory is specific, but you're paying a premium retainer for set-it-and-forget-it ads that look exactly like the lot down the street. It's time for done-for-you, dealership-focused campaigns.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { stat: "89%", label: "of dealer ads use recycled stock imagery", highlight: false },
                        { stat: "62%", label: "average CPA drop with custom creative", highlight: false },
                        { stat: "$4,200/mo", label: "wasted on poorly-targeted, generic ads", highlight: true },
                        { stat: "8/10", label: "dealers overpay for underperforming retainers", highlight: false }
                    ].map((item, i) => (
                        <div key={i} className={`p-8 rounded-[24px] border ${item.highlight ? 'bg-[#FF7404]/5 border-[#FF7404]/30' : 'bg-[#050505] border-white/5'} flex flex-col justify-center items-center text-center`}>
                            <div className={`text-4xl lg:text-5xl font-black mb-3 ${item.highlight ? 'text-[#FF7404]' : 'text-white'}`}>{item.stat}</div>
                            <div className={`text-sm font-medium ${item.highlight ? 'text-[#FF7404]/80' : 'text-white/50'}`}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TheSolution() {
    return (
        <section id="how-it-works" className="py-24 md:py-32 bg-[#020202] relative overflow-hidden">
            <div className="container-wide">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">The VisQuanta Difference</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ads + AI. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">The loop, closed.</span></h2>
                    <p className="text-lg text-white/60 leading-relaxed">
                        Stop buying raw leads. We run the highly-targeted campaigns, capture the interest, and use our AI to engage, qualify, and book the appointment. You only talk to buyers who are ready.
                    </p>
                </div>

                {/* Pipeline UI */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 relative z-10">
                        {[
                            { step: "01", title: "Ad Runs", desc: "Targeted creatives hit your local market.", icon: LayoutDashboard },
                            { step: "02", title: "Lead Captured", desc: "Native forms capture high-intent info.", icon: Users },
                            { step: "03", title: "We Handle Follow-Up", desc: "Immediate engagement sent in under 60 seconds.", icon: Zap, highlight: true },
                            { step: "04", title: "Qualifies", desc: "Our system asks vetting questions & handles objections.", icon: MessageSquare },
                            { step: "05", title: "Appt Booked", desc: "Pushed directly into your CRM calendar.", icon: Calendar },
                            { step: "06", title: "Team Closes", desc: "Your team focuses entirely on selling.", icon: Handshake }
                        ].map((item, i) => (
                            <div key={i} className="relative group flex lg:flex-col items-start lg:items-center gap-6 lg:gap-0 lg:text-center text-left">
                                {/* Connecting Line (Mobile) */}
                                {i !== 5 && <div className="lg:hidden absolute left-7 top-14 bottom-0 w-px bg-white/10 -mb-6" />}

                                <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center border transition-all duration-300 relative z-10 lg:mb-6
                                    ${item.highlight
                                        ? 'bg-[#FF7404]/10 border-[#FF7404]/50 text-[#FF7404] shadow-[0_0_30px_-5px_#FF7404]'
                                        : 'bg-[#0a0a0a] border-white/10 text-white/50 group-hover:text-white/80 group-hover:bg-white/5'}`}>
                                    <item.icon className="w-6 h-6" />
                                </div>

                                <div>
                                    <div className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-1">Step {item.step}</div>
                                    <h3 className="text-white font-bold mb-2 lg:text-sm xl:text-base">{item.title}</h3>
                                    <p className="text-white/50 text-xs xl:text-sm leading-relaxed max-w-[200px] lg:mx-auto">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function MidwayCTA() {
    return (
        <section className="py-24 bg-[#010101] relative overflow-hidden border-b border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FF7404]/5 rounded-[100%] blur-[80px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="bg-gradient-to-b from-[#050505] to-[#020202] border border-white/10 rounded-[32px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_50px_-20px_rgba(0,0,0,0.5)]">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stop missing out on your own leads.</h2>
                        <p className="text-lg text-white/50 leading-relaxed">
                            It's time to close the loop between ad spend and appointments. See exactly how our managed campaigns combined with conversational AI can transform your dealership's lead flow.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <RequestDemoButton asChild>
                            <button className="h-[56px] px-8 bg-white hover:bg-gray-100 text-black font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)]">
                                See It In Action
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </RequestDemoButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ChannelCapabilities() {
    return (
        <section className="py-24 bg-[#010101] border-b border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#FF7404]/[0.02] to-transparent pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">Campaign Channels</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start with Meta. Scale everywhere.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Meta Card (Active) */}
                    <div className="bg-[#050505] rounded-[32px] border border-white/10 p-8 md:p-10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Live Now
                            </div>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1877F2]/20 to-[#1877F2]/5 border border-[#1877F2]/20 flex items-center justify-center mb-8">
                            <MetaSVG className="w-8 h-8 text-[#1877F2]" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Meta Advertising</h3>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Facebook & Instagram campaigns optimized for low-funnel intent.
                        </p>

                        <ul className="space-y-4">
                            {[
                                "Hyper-local audience targeting",
                                "Photo, Video & Carousel creatives",
                                "Continuous A/B testing",
                                "Real-time budget optimization",
                                "Native lead form integration"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF7404] shrink-0 mt-0.5" />
                                    <span className="text-sm text-white/70">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Google Deals (Coming Soon) */}
                    <div className="bg-[#050505] opacity-60 rounded-[32px] border border-white/5 p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold uppercase tracking-wider">
                                Coming Soon
                            </div>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mix-blend-luminosity">
                            <GoogleAdsSVG className="w-8 h-8 text-white/60" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">Google Ads</h3>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Capture high-intent search traffic and map-driven local awareness.
                        </p>

                        <ul className="space-y-4">
                            {["Search Campaigns", "Display Network", "Performance Max", "Local Inventory Ads"].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-white/30" /></div>
                                    <span className="text-sm text-white/50">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* TikTok (Coming Soon) */}
                    <div className="bg-[#050505] opacity-60 rounded-[32px] border border-white/5 p-8 md:p-10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8">
                            <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-xs font-bold uppercase tracking-wider">
                                Coming Soon
                            </div>
                        </div>

                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 mix-blend-luminosity">
                            <TikTokSVG className="w-8 h-8 text-white/60" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">TikTok Ads</h3>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Short-form video advertising driving local awareness and direct leads.
                        </p>

                        <ul className="space-y-4">
                            {["Short-form video production", "For You Page targeting", "Lead Generation Forms", "Trend-based creatives"].map((feature, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5"><div className="w-1.5 h-1.5 rounded-full bg-white/30" /></div>
                                    <span className="text-sm text-white/50">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

function WhatsIncluded() {
    const capabilities = [
        {
            icon: Target,
            title: "Campaign Strategy",
            desc: "Custom targeting boundaries based on your market geography, available inventory, and specific monthly goals."
        },
        {
            icon: Video,
            title: "Creative Production",
            desc: "Scroll-stopping automotive ad creatives built to convert. We handle copywriting, photo styling, and video assembly."
        },
        {
            icon: BarChart3,
            title: "Budget Optimization",
            desc: "Real-time algorithmic bid management to continually maximize your return on ad spend and lower cost-per-lead."
        },
        {
            icon: LayoutDashboard,
            title: "Native Lead Capture",
            desc: "Frictionless in-app lead forms that convert browsers into prospects without making them wait for a landing page."
        },
        {
            icon: Zap,
            title: "AI-Powered Follow-Up",
            desc: "The critical differentiator. Every single lead engaged by our conversational AI in under 60 seconds."
        },
        {
            icon: Activity,
            title: "Performance Reporting",
            desc: "Fully transparent dashboarding. Track exact spend down to the penny, cost per lead, and resulting appointments."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-[#020202]">
            <div className="container-wide">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">Service Menu</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Here's what our team does for you every month.</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {capabilities.map((item, index) => (
                        <div key={index} className="group p-8 rounded-[24px] bg-gradient-to-b from-[#050505] to-transparent border border-white/5 hover:border-[#FF7404]/30 hover:shadow-[0_10px_40px_-10px_rgba(255,116,4,0.1)] transition-all duration-500 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#FF7404]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl pointer-events-none" />
                            <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center mb-6 text-white/60 group-hover:text-[#FF7404] group-hover:border-[#FF7404]/30 transition-all duration-500 relative z-10">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 relative z-10">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed relative z-10">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CreativeShowcase() {
    return (
        <section className="py-24 md:py-32 bg-[#010101] relative overflow-hidden">
            <div className="absolute top-0 right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">Creative Portfolio</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Done-for-you, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9040]">dealership-focused</span> campaigns.</h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-8">
                            Scroll-stopping static images, highly engaging video clips, and carousel ads specifically engineered to appeal to your local automotive market and drive low-funnel intent. We handle everything from creative production to daily optimization.
                        </p>
                        <div className="space-y-4">
                            {[
                                "Custom creatives specifically tailored to your lot.",
                                "A/B tested against automotive industry benchmarks.",
                                "Continual refreshment to avoid ad fatigue."
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-[#FF7404] shrink-0" />
                                    <span className="text-sm text-white/70">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <motion.div
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                            className="relative h-[480px] lg:h-[600px] flex items-center justify-center group/container perspective-[1000px]"
                        >
                            <div className="absolute w-[400px] h-[400px] bg-[#FF7404]/5 rounded-full blur-[100px] -z-10 opacity-30 transition-all duration-1000 group-hover/container:opacity-60 group-hover/container:bg-[#FF7404]/10" />

                            <div className="relative w-full h-[400px] flex items-center justify-center">
                                {[
                                    '/images/drive-download-custom-campaigns/campaign-1.jpg',
                                    '/images/drive-download-custom-campaigns/campaign-2.jpg',
                                    '/images/drive-download-custom-campaigns/campaign-3.jpg',
                                    '/images/drive-download-custom-campaigns/campaign-4.jpg',
                                    '/images/drive-download-custom-campaigns/campaign-5.jpg'
                                ].map((imgSrc, i, arr) => {
                                    const rotation = (i - 2) * 6;
                                    const xOffset = (i - 2) * (typeof window !== 'undefined' && window.innerWidth < 1024 ? -35 : -50);

                                    return (
                                        <motion.div
                                            key={imgSrc}
                                            initial={{
                                                x: xOffset,
                                                y: i * 2,
                                                rotate: rotation,
                                                scale: 1 - (i * 0.05),
                                                zIndex: arr.length - i
                                            }}
                                            whileHover={{
                                                x: (i - 2) * (typeof window !== 'undefined' && window.innerWidth < 1024 ? 65 : 85),
                                                y: 0,
                                                rotate: 0,
                                                scale: 1,
                                                zIndex: arr.length - i,
                                                transition: {
                                                    type: "spring",
                                                    stiffness: 220,
                                                    damping: 20
                                                }
                                            }}
                                            className="absolute w-[220px] h-[300px] sm:w-[280px] sm:h-[380px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 origin-bottom cursor-pointer hover:!scale-110 hover:!z-50 hover:border-[#FF7404] hover:shadow-[0_25px_50px_-5px_rgba(255,116,4,0.4)]"
                                            style={{
                                                zIndex: arr.length - i,
                                                transformOrigin: 'center bottom'
                                            }}
                                        >
                                            <div className="relative h-full w-full bg-[#111] group/card">
                                                <Image
                                                    src={imgSrc}
                                                    alt={`Campaign Creative ${i + 1}`}
                                                    width={280}
                                                    height={380}
                                                    className="w-full h-full object-contain bg-black p-1 pointer-events-none"
                                                    priority={i < 2}
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 mix-blend-overlay group-hover/card:opacity-0 transition-opacity pointer-events-none" />
                                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover/container:bg-black/0 pointer-events-none" />
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

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
                    </div>
                </div>
            </div>
        </section>
    );
}

function ResultsMetrics() {
    return (
        <section className="py-24 bg-[#010101] border-t border-white/5">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">Campaign Performance</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white">What our managed campaigns deliver.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { label: "Avg. cost per lead", value: "$12", trend: "-18% vs industry avg" },
                        { label: "Appointments booked/mo", value: "38", trend: "Consistent delivery" },
                        { label: "Lead-to-appt rate", value: "24%", trend: "Driven by AI follow-up" },
                        { label: "Avg. monthly ROI", value: "8x", trend: "Gross profit multiplier" }
                    ].map((metric, i) => (
                        <div key={i} className="p-8 rounded-[32px] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 text-center relative overflow-hidden group hover:border-[#FF7404]/30 transition-colors duration-500">
                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
                            <div className="text-[10px] uppercase tracking-widest text-white/50 mb-4 font-bold">{metric.label}</div>
                            <div className="text-5xl md:text-6xl font-black text-white tracking-tight mb-4 group-hover:text-[#FF7404] transition-colors">{metric.value}</div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 text-xs text-white/60 font-medium">
                                {metric.trend}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Integration() {
    return (
        <section className="py-24 md:py-32 bg-[#020202]">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#FF7404] mb-4 block">Bonus Integration</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Natural fit with the AutoMaster Suite.</h2>
                        <p className="text-lg text-white/60 leading-relaxed mb-8">
                            Already using the AutoMaster Suite? Your campaign leads flow directly into your existing AI follow-up system. Not using it yet? No problem. The paid campaigns service works standalone too.
                        </p>

                        <Link href="/auto-master-suite" className="inline-flex items-center gap-2 text-[#FF7404] font-bold hover:gap-3 transition-all">
                            Explore the Full Suite <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            { title: "Paid Campaigns", active: true, icon: Target },
                            { title: "Lead Reactivation", active: false, icon: RefreshCcw, href: "/lead-reactivation" },
                            { title: "Speed to Lead", active: false, icon: Zap, href: "/speed-to-lead" },
                            { title: "Website Widget", active: false, icon: MessageSquare, href: "/website-widget" },
                            { title: "Reputation Management", active: false, icon: Star, href: "/reputation-management" },
                            { title: "Service Drive Pro", active: false, icon: Wrench, href: "/service-drive" }
                        ].map((module, i) => (
                            module.href ? (
                                <Link key={i} href={module.href} className="flex items-center gap-4 p-4 rounded-2xl bg-[#050505] border border-white/5 hover:bg-white/[0.02] hover:border-white/20 transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white/80 transition-colors">
                                        <module.icon className="w-5 h-5" />
                                    </div>
                                    <div className="font-bold text-white/60 group-hover:text-white/90 text-sm transition-colors">{module.title}</div>
                                </Link>
                            ) : (
                                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-[#FF7404]/10 border border-[#FF7404]/30 relative overflow-hidden">
                                    <div className="absolute top-0 -right-4 w-12 h-12 bg-[#FF7404]/20 rounded-full blur-xl pointer-events-none" />
                                    <div className="w-10 h-10 rounded-xl bg-[#FF7404]/20 flex items-center justify-center text-[#FF7404]">
                                        <module.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-[9px] font-bold uppercase tracking-widest text-[#FF7404] mb-0.5">New Addition</div>
                                        <div className="font-bold text-white text-sm">{module.title}</div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function FAQSection() {
    const faqs = [
        {
            q: "How much ad spend do I need to get started?",
            a: "We recommend a minimum starting budget of $1,500/month specifically for channel ad spend to generate enough data for optimization, though many of our dealers scale rapidly from there once ROI is proven."
        },
        {
            q: "Do you create the ad creatives or do I?",
            a: "We handle the entire creative pipeline. We write the copy, design the graphics, and cut the video clips for maximum engagement in the automotive niche. You just approve."
        },
        {
            q: "How quickly will I see results?",
            a: "Campaigns typically launch within 5 business days of onboarding. Because we utilize tight local targeting and high-intent offers, you will begin seeing leads and AI-booked appointments in week one."
        },
        {
            q: "Can I run this alongside my existing agency?",
            a: "Absolutely. Many dealers run VisQuanta specific campaigns (like aged inventory or buy-back campaigns) alongside their primary brand agency to drive incremental, closed-loop sales."
        },
        {
            q: "How does AI follow-up work with ad leads?",
            a: "As soon as a prospect submits a lead form on Facebook or Instagram, it hits our system. Within 60 seconds, our AI texts the prospect, qualifies their interest, answers vehicle questions, and suggests appointment times."
        },
        {
            q: "What reporting do I get?",
            a: "You receive access to a live dashboard showing exact ad spend, cost per lead, total AI engagements, and confirmed appointments. We strip away the marketing fluff and focus only on bottom-line dealership metrics."
        }
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 bg-[#010101] border-y border-white/5 relative z-10">
            <div className="container mx-auto px-4 md:px-6 max-w-[800px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg font-medium transition-colors pr-6 ${openIndex === i ? 'text-white' : 'text-white/70 group-hover:text-white'}`}>
                                    {faq.q}
                                </span>
                                <ChevronDown className={`w-5 h-5 shrink-0 text-white/40 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-[#FF7404]' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-6 text-white/50 leading-relaxed text-sm md:text-base pr-8">
                                            {faq.a}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ClosingCTA() {
    return (
        <section className="py-24 bg-[#020202] relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-[1200px] mx-auto bg-[#050505] border border-white/10 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to make your <br className="hidden md:block" />
                            ad spend actually work?
                        </h2>
                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                            15-min walkthrough. See exactly how it works for your store.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <RequestDemoButton asChild>
                                <button className="h-[56px] px-10 bg-[#FF7404] hover:bg-[#ff8a3d] text-black text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)] flex items-center gap-3">
                                    <Sparkles className="w-5 h-5" />
                                    Schedule Your Walkthrough
                                </button>
                            </RequestDemoButton>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-sm font-medium text-white/40">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                Done-for-you build
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                AI follow-up included
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                No long-term contract
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// --- MAIN PAGE ---

export default function PaidCampaignsPage() {
    const pageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Paid Campaigns | VisQuanta",
        "description": "VisQuanta manages your dealership's Meta ad campaigns with AI-powered follow-up built in. Every lead engaged in under 60 seconds.",
        "url": "https://www.visquanta.com/paid-campaigns"
    };

    return (
        <main className="bg-[#020202] min-h-screen relative overflow-hidden selection:bg-[#FF7404]/30">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
            />

            <div className="relative z-10">
                <Navigation />
                <Hero />
                <SocialProofBar />
                <TheProblem />
                <CreativeShowcase />
                <ChannelCapabilities />
                <TheSolution />
                <MidwayCTA />
                <WhatsIncluded />
                <ResultsMetrics />
                <Integration />
                <FAQSection />
                <ClosingCTA />
                <Footer />
            </div>
        </main>
    );
}
