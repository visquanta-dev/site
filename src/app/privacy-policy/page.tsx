'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    Shield, Lock, Mail, Phone, MapPin, Globe, Database,
    Eye, ShieldCheck, UserCheck, RefreshCcw, Key,
    ShieldAlert, Binary, Server, Cpu
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function PrivacyPolicyPage() {
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
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-40" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-emerald-500/5 blur-[160px] rounded-full opacity-20" />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-64 pb-32 border-b border-white/5 overflow-hidden z-10">
                <div className="container px-4 mx-auto relative">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative mb-12"
                        >
                            <div className="absolute inset-0 bg-[#FF7404]/20 blur-3xl rounded-full" />
                            <div className="relative w-24 h-24 rounded-3xl bg-black border border-white/10 flex items-center justify-center">
                                <ShieldAlert className="w-12 h-12 text-[#FF7404]" />
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-dashed border-[#FF7404]/30 rounded-3xl scale-125"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8 border-l-[#FF7404] border-l-2"
                        >
                            Data Protection Protocol
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                        >
                            Privacy <br />
                            <span className="text-transparent border-text">Policy</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-6 text-xs font-mono text-zinc-500"
                        >
                            <span className="flex items-center gap-2">
                                <Binary className="w-3 h-3 text-[#FF7404]" />
                                DOC_ID: VQ-PRV-2025
                            </span>
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                            <span className="flex items-center gap-2">
                                <Cpu className="w-3 h-3 text-[#FF7404]" />
                                REV: 19.MAY.2025
                            </span>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CONTENT GRID */}
            <section className="py-32 relative z-10">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-[300px_1fr] gap-20">

                        {/* SIDEBAR NAV (Desktop) */}
                        <aside className="hidden lg:block sticky top-32 h-fit">
                            <div className="space-y-2 border-l border-white/5 pl-6">
                                {[
                                    { id: '1', label: 'Who We Are' },
                                    { id: '2', label: 'Data Collection' },
                                    { id: '3', label: 'Usage Policy' },
                                    { id: '5', label: 'Cookies & Tags' },
                                    { id: '8', label: 'User Rights' },
                                    { id: '12', label: 'Contact' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        className="block text-[11px] uppercase tracking-[0.2em] font-bold text-zinc-500 hover:text-[#FF7404] transition-colors py-2 text-left w-full group"
                                    >
                                        <span className="text-[9px] text-zinc-700 mr-3 group-hover:text-[#FF7404]/50">0{item.id}</span>
                                        {item.label}
                                    </button>
                                ))}
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="max-w-4xl space-y-32">

                            {/* Section 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative profile-section"
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_01</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Who We Are
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <p className="text-zinc-400 text-xl leading-relaxed font-light">
                                        VisQuanta (“we”, “us”, or “our”) operates <span className="text-white font-medium underline decoration-[#FF7404]/30 decoration-2 underline-offset-8">www.visquanta.com</span>. We are a US-based business architecting neural infrastructure to help automotive enterprises connect with products and services.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="space-y-12"
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_02</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Data Acquisition
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="grid gap-6">
                                    {[
                                        { icon: UserCheck, title: "Contact Identification", desc: "Name, business entity, encrypted mail, and communications metadata." },
                                        { icon: Server, title: "Technical Telemetry", desc: "IP routing, browser fingerprinting, node-level interaction metrics." },
                                        { icon: Binary, title: "Algorithmic Tags", desc: "Processing via GTM and high-fidelity analytics modules (Analytics-v4)." },
                                        { icon: Globe, title: "Voluntary Inputs", desc: "Information explicitly provisioned via secure endpoint forms." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="group p-8 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:border-[#FF7404]/20 hover:bg-white/[0.03] transition-all duration-500 flex gap-8 items-center">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-[#FF7404] group-hover:scale-110 transition-transform">
                                                <item.icon className="w-6 h-6" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-2">{item.title}</h3>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 p-6 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/10">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    <p className="text-[11px] font-mono uppercase tracking-widest text-emerald-500/80">
                                        Zero-Collection Policy: Sensitive identity data, biometrics, and government IDs are never processed.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Section 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_03</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Processing Logic
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="relative p-12 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8">
                                        <Cpu className="w-32 h-32 text-white/[0.02] rotate-12" />
                                    </div>
                                    <div className="grid gap-10 relative z-10">
                                        {[
                                            "Inquiry response and structural demo provisioning",
                                            "Operational follow-up relative to service engagement",
                                            "Infrastructural optimization and security hardening",
                                            "Regulatory and legal compliance adherence"
                                        ].map((text, i) => (
                                            <div key={i} className="flex gap-6 items-start">
                                                <div className="w-8 h-8 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center text-[10px] font-bold text-[#FF7404] shrink-0">
                                                    0{i + 1}
                                                </div>
                                                <p className="text-zinc-400 text-lg font-light leading-relaxed">{text}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-12 pt-10 border-t border-white/5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            <p className="text-white font-black uppercase tracking-[0.2em] text-xs">
                                                Zero-Sell Guarantee: Your telemetry is never liquidated for marketing arbitrage.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 8 - Rights */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="text-[10px] font-mono text-[#FF7404] mb-4 tracking-[0.3em] font-bold">SECTION_08</div>
                                <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-8 flex items-end gap-4">
                                    Entity Rights
                                    <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent mb-2" />
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { id: "ACC", label: "Access Protocol" },
                                        { id: "COR", label: "Data Correction" },
                                        { id: "DEL", label: "Erasure Request" },
                                        { id: "RES", label: "Object/Restrict" },
                                        { id: "COM", label: "Lodge Complaint" }
                                    ].map((right, idx) => (
                                        <div key={idx} className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 flex items-center justify-between group hover:bg-[#FF7404]/5 hover:border-[#FF7404]/30 transition-all duration-300">
                                            <div className="flex items-center gap-4">
                                                <div className="text-[9px] font-mono text-[#FF7404] font-black">{right.id}</div>
                                                <span className="text-zinc-300 font-bold uppercase tracking-widest text-[11px] group-hover:text-white transition-colors">{right.label}</span>
                                            </div>
                                            <ShieldCheck className="w-4 h-4 text-zinc-700 group-hover:text-[#FF7404] transition-colors" />
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 p-10 rounded-[2.5rem] bg-[#FF7404] flex flex-col md:flex-row items-center justify-between gap-8 group">
                                    <div className="space-y-2 text-center md:text-left">
                                        <h3 className="text-black font-black text-2xl uppercase tracking-tighter">Exercise Rights</h3>
                                        <p className="text-black/60 text-sm font-medium">Initiate data request protocol via encrypted secure mail.</p>
                                    </div>
                                    <Link
                                        href="mailto:info@visquanta.com"
                                        className="px-8 py-4 bg-black text-[#FF7404] rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shadow-xl"
                                    >
                                        info@visquanta.com
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Contact Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="pt-32 border-t border-white/5"
                            >
                                <div className="grid md:grid-cols-3 gap-12">
                                    <div className="space-y-6 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7404] group-hover:bg-[#FF7404] group-hover:text-black transition-all duration-500">
                                            <Mail className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">Endpoint</div>
                                            <div className="text-zinc-500 text-sm font-light">info@visquanta.com</div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 group text-center md:text-left">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7404] mx-auto md:mx-0 group-hover:bg-[#FF7404] group-hover:text-black transition-all duration-500">
                                            <Phone className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">Direct Link</div>
                                            <div className="text-zinc-500 text-sm font-light">+1 786-686-6554</div>
                                        </div>
                                    </div>
                                    <div className="space-y-6 group text-right md:text-left">
                                        <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#FF7404] ml-auto md:ml-0 group-hover:bg-[#FF7404] group-hover:text-black transition-all duration-500">
                                            <MapPin className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <div className="text-white font-black uppercase tracking-[0.2em] text-[10px] mb-2">Geo-Location</div>
                                            <div className="text-zinc-500 text-sm font-light leading-relaxed">
                                                2222 Ponce de Leon Blvd, 3rd Floor, <br />
                                                Miami, FL 33134
                                            </div>
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
