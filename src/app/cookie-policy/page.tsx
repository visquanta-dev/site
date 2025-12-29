'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Database, Shield, Zap, Mail, Phone, MapPin,
    Globe, ExternalLink, Settings2, Info, Lock,
    Binary, Eye, MousePointer2, ShieldCheck, Cpu
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function CookiePolicyPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main ref={containerRef} className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* Reading Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-[#FF7404] origin-left z-[110]"
                style={{ scaleX }}
            />

            {/* RADICON BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.03]" />
                <div className="absolute top-0 left-0 w-[1000px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-30" />
                <div className="absolute bottom-0 left-1/2 w-[800px] h-[800px] bg-emerald-500/5 blur-[160px] rounded-full opacity-10" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-64 pb-32 border-b border-white/5 overflow-hidden z-10">
                <div className="container px-4 mx-auto relative text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative mb-12 inline-block mx-auto"
                    >
                        <div className="absolute inset-0 bg-[#FF7404]/20 blur-3xl rounded-full" />
                        <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center">
                            <Database className="w-12 h-12 text-[#FF7404]" />
                            <motion.div
                                animate={{ scale: [1, 1.15, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute inset-0 border-2 border-[#FF7404]/30 rounded-3xl scale-125 opacity-50"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8 border-l-[#FF7404] border-l-2"
                    >
                        Preference Protocol
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                    >
                        Cookie <br />
                        <span className="text-transparent border-text">Management</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-zinc-500"
                    >
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Binary className="w-3 h-3 text-[#FF7404]" />
                            TRACK_ID: VQ-CKI-001
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Cpu className="w-3 h-3 text-[#FF7404]" />
                            REV: 19.MAY.2025
                        </span>
                    </motion.div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 relative z-10">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-20">

                        {/* SIDEBAR NAV (Desktop) */}
                        <aside className="hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-4">
                                <div className="text-[10px] font-mono text-zinc-700 uppercase tracking-widest mb-6">Preference Center</div>
                                {[
                                    { id: '1', label: 'Definition' },
                                    { id: '2', label: 'Usage Logic' },
                                    { id: '3', label: 'Cookie Types' },
                                    { id: '4', label: 'End-User Control' },
                                    { id: '6', label: 'Compliance' },
                                    { id: '7', label: 'Support' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        className="flex items-center gap-4 py-2 text-left w-full group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-zinc-800 group-hover:bg-[#FF7404] transition-colors" />
                                        <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="max-w-4xl space-y-32">

                            {/* Section 1 & 2 */}
                            <div className="space-y-32">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">PROTOCOL_01</div>
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                        Foundational Definition
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                    </h2>
                                    <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm relative group overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#FF7404] to-transparent opacity-50" />
                                        <p className="text-zinc-400 text-xl leading-relaxed font-light">
                                            Cookies are small text files placed on your device by websites you visit. They help sites remember your actions and preferences, so things work properly and your experience is smoother.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">PROTOCOL_02</div>
                                    <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                        Operational Logic
                                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                    </h2>
                                    <div className="grid gap-6">
                                        {[
                                            "Make the website work (e.g., security, session management)",
                                            "Analyse how visitors use our site (via GTM & Analytics-v4)",
                                            "Improve performance and user experience interface"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-6 items-center p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition-all">
                                                <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404]">
                                                    <Zap className="w-5 h-5" />
                                                </div>
                                                <p className="text-zinc-400 font-light">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 p-10 rounded-[2rem] bg-emerald-500/[0.03] border border-emerald-500/10 flex items-center gap-6">
                                        <ShieldCheck className="w-10 h-10 text-emerald-500 shrink-0" />
                                        <p className="text-zinc-300 font-bold text-sm tracking-tight leading-relaxed">
                                            Integrity Guarantee: We do not use cookies for direct advertising or to market your personal telemetry to third-party brokers.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Section 3 - Types */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">PROTOCOL_03</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Cookie Architecture
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    {[
                                        { icon: Lock, title: "Essential", desc: "Mandatory for core security and navigation. Persistence required." },
                                        { icon: Binary, title: "Analytics", desc: "Modules (GTM/GA4) used to analyze user flow and site velocity." },
                                        { icon: Settings2, title: "Functional", desc: "Stores UI preferences and regional personalization state." },
                                        { icon: Globe, title: "Third-Party", desc: "External modules linked to service integration partners." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group relative p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 overflow-hidden hover:border-[#FF7404]/30 transition-all duration-500">
                                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                                                <item.icon className="w-24 h-24" />
                                            </div>
                                            <div className="relative z-10 space-y-4">
                                                <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404]">
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <h3 className="text-white font-black uppercase tracking-widest text-sm">{item.title}</h3>
                                                <p className="text-zinc-500 text-xs leading-relaxed font-light">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Section 4 & 5 - Control */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">PROTOCOL_04_05</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    End-User Control
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="relative p-12 rounded-[3rem] bg-white/[0.02] border border-white/5 overflow-hidden">
                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div className="space-y-6">
                                            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Preference Suite</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                                You can accept or reject non-essential cookies. Modify state via the <span className="text-[#FF7404] font-bold cursor-pointer hover:underline">[Preference Center]</span> in the footer.
                                            </p>
                                            <div className="pt-6">
                                                <Link
                                                    href="https://www.allaboutcookies.org"
                                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/5 rounded-xl text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/10 transition-all group"
                                                >
                                                    External Documentation
                                                    <ExternalLink className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="space-y-6 md:pl-12 md:border-l border-white/5">
                                            <h3 className="text-xl font-bold text-white uppercase tracking-tighter">Hard-Lock Control</h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed font-light">
                                                Most browsers provide binary overrides to block cookies at the system level. Note: Disabling essential modules may degrade UI performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 7 - Contact */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="pt-32 border-t border-white/5"
                            >
                                <div className="p-12 rounded-[3.5rem] bg-white/[0.01] border border-white/10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:rotate-12 transition-transform duration-1000">
                                        <Mail className="w-64 h-64 text-[#FF7404]" />
                                    </div>
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-10">Protocol Support</h2>
                                        <div className="flex flex-col md:flex-row gap-12 md:items-center">
                                            <div className="flex items-center gap-6">
                                                <div className="w-14 h-14 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404]">
                                                    <Mail className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">Email</div>
                                                    <div className="text-white font-bold text-lg">info@visquanta.com</div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="w-14 h-14 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center text-[#FF7404]">
                                                    <Phone className="w-6 h-6" />
                                                </div>
                                                <div>
                                                    <div className="text-[10px] uppercase font-black tracking-widest text-zinc-600 mb-1">Direct</div>
                                                    <div className="text-white font-bold text-lg">+1 786-686-6554</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-12 pt-10 border-t border-white/5 text-center">
                                            <p className="text-zinc-600 text-xs italic">
                                                By continuing session activity, you acknowledge the cookie processing protocol unless local preferences are adjusted.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .border-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
            `}</style>
        </main>
    );
}
