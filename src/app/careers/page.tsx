'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import ApplicationModal from '@/components/careers/ApplicationModal';
import {
    Activity,
    ArrowRight,
    Globe,
    Sparkles,
    Briefcase,
    TrendingUp,
    Zap,
    Users,
    BadgeCheck,
    CheckCircle
} from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: "spring" as const, stiffness: 50 }
    }
};

const perks = [
    { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world." },
    { icon: Zap, title: "Top 1% Compensation", desc: "We pay for performance, not tenure." },
    { icon: Users, title: "Zero Bureaucracy", desc: "Flat hierarchy. Ship fast." },
    { icon: TrendingUp, title: "Profit Sharing", desc: "When we win, you win." }
];

export default function CareersPage() {
    const [isAppModalOpen, setIsAppModalOpen] = useState(false);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* Application Modal */}
            <ApplicationModal
                isOpen={isAppModalOpen}
                onClose={() => setIsAppModalOpen(false)}
            />

            {/* 1. CINEMATIC HERO */}
            <section className="relative pt-48 pb-32 overflow-hidden min-h-[95vh] flex items-center">
                {/* Animated Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-[#030303]" />

                    {/* Animated Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,116,4,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,116,4,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

                    {/* Floating Orbs - UNIFIED ORANGE/WHITE */}
                    <motion.div
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.15, 0.25, 0.15],
                            x: [0, 100, 0],
                            y: [0, -50, 0]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/4 w-[900px] h-[900px] bg-[#FF7404] rounded-full blur-[200px] pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-white rounded-full blur-[150px] pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.08, 0.15, 0.08]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
                        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-[#FF7404] rounded-full blur-[120px] pointer-events-none"
                    />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            {/* Badge */}
                            <motion.div variants={itemVariants}>
                                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] border border-white/10 mb-12">
                                    <Sparkles className="w-4 h-4 text-[#FF7404]" />
                                    <span className="text-zinc-400 text-sm font-bold uppercase tracking-[0.2em]">
                                        Join Our Talent Network
                                    </span>
                                </div>
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white mb-10 tracking-[-0.04em] leading-[0.85]"
                            >
                                BUILD THE <br />
                                <span className="relative inline-block">
                                    <motion.span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FFB070]"
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                                        style={{ backgroundSize: "200% 200%" }}
                                    >
                                        FUTURE.
                                    </motion.span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-transparent rounded-full"
                                        initial={{ scaleX: 0, originX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 1.2, delay: 0.8 }}
                                    />
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-zinc-300 mb-16 max-w-4xl mx-auto leading-relaxed"
                            >
                                We're not just building software, we're building the
                                <span className="text-[#FF7404] font-bold"> intelligent infrastructure </span>
                                of automotive commerce. Join the elite team behind
                                <span className="text-white font-semibold"> The AutoMaster Suite.</span>
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div variants={itemVariants}>
                                <Link href="#apply">
                                    <motion.div
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 50px -10px rgba(255,116,4,0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-4 px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold text-xl rounded-2xl cursor-pointer shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] transition-all"
                                    >
                                        Submit Your Application
                                        <ArrowRight className="w-6 h-6" />
                                    </motion.div>
                                </Link>
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap justify-center gap-12 mt-20"
                            >
                                {[
                                    { value: "3", label: "Global Offices" },
                                    { value: "76+", label: "Years Combined Experience" },
                                    { value: "24/7", label: "Innovation" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <div className="w-6 h-10 rounded-full border-2 border-[#FF7404]/30 flex items-start justify-center p-2">
                        <motion.div
                            className="w-1 h-2 bg-[#FF7404] rounded-full"
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </div>
                </motion.div>
            </section>

            {/* 2. PERKS BAR */}
            <section className="py-12 bg-gradient-to-r from-[#FF7404]/5 via-[#FF7404]/10 to-[#FF7404]/5 border-y border-[#FF7404]/20">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {perks.map((perk, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#FF7404]/20 border border-[#FF7404]/30 flex items-center justify-center group-hover:bg-[#FF7404] transition-all">
                                    <perk.icon className="w-6 h-6 text-[#FF7404] group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <div className="text-white font-bold">{perk.title}</div>
                                    <div className="text-zinc-500 text-sm">{perk.desc}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. WHY VISQUANTA - UNIFIED COLORS */}
            <section className="py-32 relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#FF7404]/5 to-transparent pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 text-[#FF7404] font-mono text-xs font-bold uppercase tracking-[0.3em] mb-6">
                                <Activity className="w-4 h-4" />
                                Our Culture
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                                High Stakes. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                    High Autonomy.
                                </span>
                            </h2>
                            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                                <p>
                                    At VisQuanta, we don't do "busy work." Every engineer, marketer, and success manager owns a
                                    <span className="text-white font-medium"> critical piece of the revenue engine.</span> We operate on a model of radical autonomy and extreme accountability.
                                </p>
                                <p>
                                    We're looking for individuals who thrive in high-stakes environments, who can
                                    <span className="text-[#FF7404] font-medium"> think like an owner,</span> and who are obsessed with building tools that solve real problems.
                                </p>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-6 mt-10">
                                <div className="p-6 bg-gradient-to-br from-[#FF7404]/10 to-transparent border border-[#FF7404]/20 rounded-2xl">
                                    <div className="text-3xl font-black text-[#FF7404] mb-1">Remote-First</div>
                                    <div className="text-zinc-500 text-sm">Work from anywhere</div>
                                </div>
                                <div className="p-6 bg-gradient-to-br from-[#FF7404]/10 to-transparent border border-[#FF7404]/20 rounded-2xl">
                                    <div className="text-3xl font-black text-[#FF7404] mb-1">Equity Focus</div>
                                    <div className="text-zinc-500 text-sm">Own your impact</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            {/* Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 to-[#FF7404]/5 rounded-[3rem] blur-3xl" />

                            <div className="relative bg-gradient-to-b from-white/[0.05] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 overflow-hidden">
                                {/* Decorative */}
                                <div className="absolute top-0 right-0 p-8 opacity-10">
                                    <Sparkles className="w-32 h-32 text-[#FF7404]" />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-8 uppercase tracking-wider flex items-center gap-3">
                                    <span className="w-2 h-2 rounded-full bg-[#FF7404]" />
                                    The Command Set
                                </h3>

                                <div className="space-y-4">
                                    {[
                                        { title: "Obsessive Innovation", desc: "If there's a better way to solve a problem, we find it." },
                                        { title: "Technical Integrity", desc: "No hacks. No shortcuts. Quality is our baseline." },
                                        { title: "Dealer-Centric Design", desc: "We build for the showroom floor, not the ivory tower." },
                                        { title: "Radical Transparency", desc: "Feedback is a gift. We speak the truth, always." }
                                    ].map((value, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="flex gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#FF7404]/10 to-transparent border border-white/5 hover:border-white/10 transition-all"
                                        >
                                            <BadgeCheck className="w-6 h-6 shrink-0 text-[#FF7404]" />
                                            <div>
                                                <div className="text-white font-bold">{value.title}</div>
                                                <div className="text-zinc-500 text-sm mt-1">{value.desc}</div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. OPEN POSITIONS - UNIFIED COLORS */}
            <section id="apply" className="py-32 bg-[#030303] relative">
                {/* Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,116,4,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,116,4,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="max-w-6xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="text-center mb-20">
                            {/* Status Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-sm mb-8 font-bold tracking-wide uppercase">
                                <div className="w-2 h-2 rounded-full bg-[#FF7404] animate-pulse" />
                                We are Hiring
                            </div>

                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Positions.</span>
                            </h2>

                            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                                Join the team redefining automotive intelligence.
                            </p>
                        </div>

                        {/* Job Listing Card */}
                        <motion.div
                            className="bg-zinc-900/50 border border-white/10 rounded-3xl overflow-hidden hover:border-[#FF7404]/50 transition-all duration-300 group relative"
                            whileHover={{ y: -5 }}
                        >
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-8 md:items-center justify-between">
                                <div className="space-y-4 flex-1">
                                    <div className="flex flex-wrap gap-3 mb-4">
                                        <span className="px-3 py-1 rounded-full bg-[#FF7404]/10 text-[#FF7404] text-xs font-bold uppercase tracking-wider border border-[#FF7404]/20">
                                            Sales
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/20">
                                            Commission Only
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-[#FF7404]/10 text-[#FF7404] text-xs font-bold uppercase tracking-wider border border-[#FF7404]/20">
                                            Remote (USA)
                                        </span>
                                    </div>

                                    <h3 className="text-3xl font-bold text-white group-hover:text-[#FF7404] transition-colors">
                                        Strategic Sales Partner
                                    </h3>

                                    <p className="text-zinc-400 text-lg max-w-2xl leading-relaxed">
                                        We are looking for hungry sales professionals with deep connections in the car dealership industry.
                                        Positioned across the USA (excluding Colorado & Carolina).
                                    </p>

                                    <div className="flex flex-col gap-2 text-zinc-500 text-sm mt-4">
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#FF7404]" />
                                            <span>Deep experience in automotive dealership sales ecosystems</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#FF7404]" />
                                            <span>Existing network of dealer principals and GMs</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-[#FF7404]" />
                                            <span>Hungry to capitalize on a rapidly growing industry</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 min-w-[200px]">
                                    <motion.button
                                        onClick={() => setIsAppModalOpen(true)}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 px-6 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-[0_0_20px_-5px_rgba(255,116,4,0.3)]"
                                    >
                                        Apply Now
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                    <div className="text-center text-xs text-zinc-600 font-mono">
                                        REF: SALES-US-REMOTE
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* 5. FINAL CTA */}
            <section className="py-40 relative overflow-hidden">
                {/* Animated Background */}
                <motion.div
                    animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 12, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#FF7404] rounded-full blur-[250px] pointer-events-none"
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,116,4,0.1),transparent_70%)]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tight leading-[0.95]">
                                No Open Role <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 via-zinc-500 to-zinc-600">
                                    Matching Your{' '}
                                </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                    Genius?
                                </span>
                            </h2>

                            <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                                We're always looking for <span className="text-white font-medium">non-obvious talent.</span> If you believe you can accelerate our mission, send us your manual.
                            </p>

                            <Link href="mailto:careers@visquanta.com">
                                <motion.div
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 80px -15px rgba(255,116,4,0.6)" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-4 px-14 py-7 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-2xl rounded-2xl cursor-pointer shadow-[0_0_60px_-10px_rgba(255,116,4,0.5)] transition-all"
                                >
                                    Submit Open Application
                                    <ArrowRight className="w-7 h-7" />
                                </motion.div>
                            </Link>

                            <p className="mt-8 text-zinc-600 text-sm">
                                careers@visquanta.com
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
