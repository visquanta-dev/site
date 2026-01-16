'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import {
    Sparkles,
    History,
    Target,
    ShieldCheck,
    Zap,
    Building2,
    Users,
    ChevronRight,
    Search,
    Cpu,
    Workflow,
    Activity,
    Code2,
    CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const as any }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const as any }
    }
};

export default function AboutPageClient() {
    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* 1. CINEMATIC HERO */}
            <section className="relative pt-64 pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
                {/* Background Text Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.03, scale: 1 }}
                        transition={{ duration: 2 }}
                        className="text-[19vw] font-black text-white leading-none tracking-[-0.05em] whitespace-nowrap"
                    >
                        VISQUANTA
                    </motion.div>
                </div>

                {/* Background Auras */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[700px] bg-gradient-to-b from-[#FF7404]/10 to-transparent rounded-full blur-[160px] opacity-30" />
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.15] mix-blend-overlay" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 text-[#FF7404] text-[11px] font-bold uppercase tracking-[0.3em] mb-12 bg-white/[0.03] backdrop-blur-md"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                Established on the showroom floor
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-10 tracking-[-0.06em] leading-[0.85] uppercase"
                            >
                                BUILT ON THE <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-white drop-shadow-[0_10px_40px_rgba(255,116,4,0.3)]">
                                    SHOWROOM FLOOR.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-3xl text-zinc-400 mb-16 max-w-4xl mx-auto leading-relaxed font-light"
                            >
                                We spent 25 years in the trenches of automotive operations. Now, we're building the <strong className="text-white font-bold italic underline decoration-[#FF7404]">intelligent layer</strong> that empowers the next generation of retailers.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
                >
                    <div className="w-px h-24 bg-gradient-to-b from-[#FF7404] to-transparent" />
                    <div className="text-[10px] uppercase tracking-[0.5em] font-mono text-white vertical-text">Scroll_Archive</div>
                </motion.div>
            </section>

            {/* 2. THE MANIFESTO: FROM FLOOR TO CODE */}
            <section className="py-32 bg-[#050505] border-y border-white/5 relative">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="relative"
                        >
                            <div className="inline-flex items-center gap-2 text-[#FF7404] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-8">
                                <History className="w-4 h-4" />
                                Operational Legacy
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter leading-tight">
                                Not insiders. <br />
                                <span className="text-zinc-600 italic font-light">Engineers of </span>
                                <span className="text-[#FF7404]">Efficiency.</span>
                            </h2>
                            <div className="space-y-8 text-zinc-400 text-lg leading-relaxed font-light">
                                <p>
                                    VisQuanta wasn't born in a generic incubator. It was born in the heat of monthly close-outs, during late-night service desk shifts, and in the frustration of watching $100,000 in ad spend turn into "dead leads" in a dusty CRM.
                                </p>
                                <p>
                                    Our founders aren't just technologists; they are operators who lived the struggle of scaling a BDC, managing OEM compliance, and trying to keep up with a consumer who expects a response in 60 seconds.
                                </p>
                                <div className="p-8 bg-white/[0.02] border-l-4 border-[#FF7404] rounded-r-2xl italic font-mono text-sm">
                                    "We realized that the problem wasn't a lack of tools—it was a lack of automation that actually understood the emotional weight of a car purchase."
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative group"
                        >
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                                {/* Technical Label */}
                                <div className="absolute top-8 left-8 z-20 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404] animate-pulse" />
                                    <span className="text-[10px] font-black text-white uppercase tracking-[0.3em] font-mono opacity-60">Showroom Floor Vision</span>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                                <div className="absolute inset-0 flex items-center justify-center p-12 z-10">
                                    <img
                                        src="/images/visquanta-logo-transparent.png"
                                        alt="VisQuanta Logo"
                                        className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-all duration-1000 group-hover:scale-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                                    />
                                </div>

                                {/* Overlay Stats */}
                                <div className="absolute bottom-12 left-12 right-12 grid grid-cols-2 gap-8 z-20">
                                    <div>
                                        <div className="text-4xl font-black text-white mb-1">76Y</div>
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Combined Tenure</div>
                                    </div>
                                    <div>
                                        <div className="text-4xl font-black text-[#FF7404] mb-1">01</div>
                                        <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Unified Platform</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. THE DNA: THE CORE PILLARS */}
            <section className="py-32 bg-[#020202] relative">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
                                Our <span className="text-[#FF7404]">DNA.</span>
                            </h2>
                            <p className="text-zinc-500 text-lg font-light leading-relaxed">
                                Three principles that dictate every line of code we write and every feature we deploy.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Performance First",
                                icon: Activity,
                                desc: "We don't build features for 'fun.' We build for ROI. If a tool doesn't directly impact your bottom line, it doesn't leave our lab.",
                                color: "border-orange-500/20"
                            },
                            {
                                title: "DMS Integration",
                                icon: Cpu,
                                desc: "Software that sits outside your workflow is useless. We build for deep, bi-directional integration with CDK, Reynolds, and VinSolutions.",
                                color: "border-[#FF7404]/40"
                            },
                            {
                                title: "Relentless Support",
                                icon: ShieldCheck,
                                desc: "No tickets. No robots. Every partner has a dedicated Dealer Success Manager who knows your store as well as you do.",
                                color: "border-emerald-500/20"
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`p-10 rounded-[2.5rem] bg-white/[0.01] border ${pillar.color} hover:bg-white/[0.03] transition-all duration-500 group`}
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7404] mb-8 group-hover:scale-110 transition-transform">
                                    <pillar.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-tighter">{pillar.title}</h3>
                                <p className="text-zinc-500 leading-relaxed font-light">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE TECH LEADERSHIP / VISIONARY MISSION */}
            <section className="py-32 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 opacity-5 pointer-events-none select-none">
                    <Workflow className="w-[500px] h-[500px] text-white" />
                </div>

                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <div>
                                    <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
                                        The Standard for <br />
                                        <span className="text-[#FF7404]">Automotive AI.</span>
                                    </h2>
                                    <p className="text-xl text-zinc-400 font-light leading-relaxed max-w-2xl">
                                        We are not building another "app." We are building the infrastructure for the autonomous dealership. Our vision is a store that captures every dollar, answers every question, and books every appointment without human friction.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-8 pt-12 border-t border-white/5">
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Code2 className="w-5 h-5 text-[#FF7404]" />
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Proprietary NLP</h4>
                                        </div>
                                        <p className="text-zinc-500 text-sm font-light">Custom language models trained on millions of car dealership conversations.</p>
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-4">
                                            <Workflow className="w-5 h-5 text-[#FF7404]" />
                                            <h4 className="text-white font-bold uppercase tracking-widest text-sm">Active Automation</h4>
                                        </div>
                                        <p className="text-zinc-500 text-sm font-light">Real-time DMS write-back capability that eliminates BDC manual entry.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-5 relative">
                            <div className="relative p-12 lg:p-16 bg-[#0a0a0a] border border-white/10 rounded-[3rem] shadow-2xl overflow-hidden group">
                                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.05] pointer-events-none" />
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-30 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 text-center space-y-8">
                                    <Target className="w-16 h-16 text-[#FF7404] mx-auto opacity-80" />
                                    <h3 className="text-3xl font-black text-white tracking-tighter uppercase">Our Mission</h3>
                                    <p className="text-zinc-400 text-lg leading-relaxed font-light italic">
                                        "To empower retailers with an unbreakable revenue engine, turning every lead into a lasting relationship through the power of intelligent automation."
                                    </p>
                                    <div className="h-px w-24 bg-[#FF7404]/30 mx-auto" />
                                    <div className="text-[10px] text-zinc-600 uppercase tracking-[0.5em] font-mono">Vision_Statement // 2024</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FINAL CTA SECTION */}
            <section className="py-40 bg-[#020202] relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,116,4,0.08),transparent_70%)]" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.85] uppercase">
                            Modernize Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-white drop-shadow-[0_10px_30px_rgba(255,116,4,0.3)]">
                                Operations.
                            </span>
                        </h2>

                        <p className="text-2xl text-zinc-400 mb-16 font-light leading-relaxed">
                            Join the hundreds of forward-thinking dealerships that have replaced generic tools with the VisQuanta standard.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link
                                href="/auto-master-suite"
                                className="w-full sm:w-auto px-12 py-6 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-xl rounded-2xl transition-all shadow-[0_0_50px_-10px_rgba(255,116,4,0.4)] flex items-center justify-center gap-3 overflow-hidden group relative"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    Explore the Suite
                                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>

                            <Link
                                href="/team"
                                className="w-full sm:w-auto px-12 py-6 bg-white/5 hover:bg-white/10 text-white font-bold text-xl rounded-2xl border border-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-3"
                            >
                                Meet the Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    );
}
