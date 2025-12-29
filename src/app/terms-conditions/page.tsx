'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
    FileText, Shield, Gavel, Mail, Phone, MapPin,
    Scale, AlertTriangle, ScrollText, CheckCircle2,
    Bookmark, Lock, Globe, Zap, Cpu, RefreshCcw
} from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function TermsConditionsPage() {
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
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1200px] h-[600px] bg-[#FF7404]/5 blur-[160px] rounded-full opacity-30" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full opacity-20" />
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
                            <Scale className="w-12 h-12 text-[#FF7404]" />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-[#FF7404]/30 rounded-3xl scale-110"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] uppercase tracking-[0.4em] font-black mb-8"
                    >
                        Master Service Framework
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-6xl md:text-8xl font-black text-white mb-8 uppercase tracking-tighter leading-[0.85]"
                    >
                        Terms & <br />
                        <span className="text-transparent border-text">Conditions</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-xs font-mono text-zinc-500"
                    >
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Bookmark className="w-3 h-3 text-[#FF7404]" />
                            CONTRACT: VQ-MSF-25
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Zap className="w-3 h-3 text-[#FF7404]" />
                            STATUS: ACTIVE
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                            <Cpu className="w-3 h-3 text-[#FF7404]" />
                            EFFECTIVE: 19.05.2025
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
                            <div className="space-y-1">
                                {[
                                    { id: '1', label: 'Introduction' },
                                    { id: '2', label: 'Modifications' },
                                    { id: '3', label: 'User Eligibility' },
                                    { id: '5', label: 'Intellectual Property' },
                                    { id: '7', label: 'Demo Protocol' },
                                    { id: '9', label: 'Liability Disclaimer' },
                                    { id: '11', label: 'Jurisdiction' }
                                ].map((item) => (
                                    <button
                                        key={item.id}
                                        className="group flex flex-col gap-1 py-4 text-left border-b border-white/5 w-full hover:bg-white/[0.02] px-4 transition-all"
                                    >
                                        <span className="text-[9px] font-mono text-[#FF7404] opacity-50">SECTION 0{item.id}</span>
                                        <span className="text-[11px] uppercase tracking-widest font-black text-zinc-500 group-hover:text-white transition-colors">{item.label}</span>
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
                                    className="relative"
                                >
                                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                            <ScrollText className="w-6 h-6 text-[#FF7404]" />
                                        </div>
                                        Introduction
                                    </h2>
                                    <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#FF7404]/20 transition-all duration-500">
                                        <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF7404]/5 blur-[100px] rounded-full" />
                                        <p className="text-zinc-400 text-xl leading-relaxed font-light relative z-10">
                                            Welcome to <span className="text-white font-bold">www.visquanta.com</span> (the “Website”), operated by VisQuanta (“we”, “us”, or “our”), a company registered in the United States. By accessing or using this Website, you agree to be bound by these Terms and Conditions (“Terms”). If you do not agree, please do not use our Website.
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                            <RefreshCcw className="w-6 h-6 text-[#FF7404]" />
                                        </div>
                                        Modifications
                                    </h2>
                                    <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 backdrop-blur-md relative overflow-hidden group hover:border-[#FF7404]/20 transition-all duration-500">
                                        <p className="text-zinc-400 text-lg leading-relaxed font-light">
                                            We may update or modify these Terms from time to time. If we make significant changes, we will post a notice on the Website. Your continued use of the Website after any changes means you accept the new Terms.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Section 5 - IP */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-12 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                        <Lock className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Intellectual Property
                                </h2>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                                        <div className="text-[#FF7404] font-mono text-[10px] uppercase tracking-widest mb-4">Ownership</div>
                                        <p className="text-zinc-500 text-sm leading-relaxed">
                                            All content on this Website, including text, graphics, logos, and images, is owned or licensed by VisQuanta and is protected by US and international copyright and intellectual property laws.
                                        </p>
                                    </div>
                                    <div className="p-10 rounded-[2rem] bg-white/[0.01] border border-white/5 hover:bg-white/[0.02] transition-all">
                                        <div className="text-[#FF7404] font-mono text-[10px] uppercase tracking-widest mb-4">Restrictions</div>
                                        <p className="text-zinc-500 text-sm leading-relaxed">
                                            You may not copy, reproduce, distribute, or create derivative works from any part of the Website without our express written consent.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 9 - Liability */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative p-12 rounded-[3.5rem] bg-gradient-to-br from-[#FF7404] to-orange-600 overflow-hidden shadow-[0_0_80px_rgba(255,116,4,0.1)]"
                            >
                                <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-black/10 blur-[60px] rounded-full" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-8">
                                        <AlertTriangle className="w-10 h-10 text-black" />
                                        <h2 className="text-3xl font-black text-black uppercase tracking-tighter">Limitation of Liability</h2>
                                    </div>
                                    <div className="space-y-6">
                                        <p className="text-black font-bold text-2xl leading-tight tracking-tight">
                                            "Our Website and its content are provided 'as is' and without warranty of any kind."
                                        </p>
                                        <p className="text-black/70 text-lg font-medium leading-relaxed max-w-2xl">
                                            To the fullest extent permitted by law, VisQuanta is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Website.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Section 11 - Jurisdiction */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-8 flex items-center gap-6">
                                    <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <Globe className="w-6 h-6 text-[#FF7404]" />
                                    </div>
                                    Legal Jurisdiction
                                </h2>
                                <div className="p-12 rounded-[2.5rem] bg-white/[0.01] border border-white/5 relative overflow-hidden">
                                    <div className="grid md:grid-cols-2 gap-12 relative z-10">
                                        <div className="space-y-4">
                                            <div className="text-[10px] font-mono text-[#FF7404] font-black uppercase tracking-widest">Global Protocol</div>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                These Terms are governed by the laws of the State of Florida, USA. Any dispute shall be resolved exclusively in the state or federal courts located in Miami, Florida.
                                            </p>
                                        </div>
                                        <div className="space-y-4 pt-12 md:pt-0 border-t md:border-t-0 md:border-l border-white/5 md:pl-12">
                                            <div className="text-[10px] font-mono text-[#FF7404] font-black uppercase tracking-widest">EU & UK Provision</div>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                For users in the European Union and United Kingdom: You may also have additional rights under your local laws.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Contact Footer */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="pt-32 border-t border-white/5"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                                    <div className="max-w-xs">
                                        <h3 className="text-2xl font-black text-white uppercase tracking-tighter mb-4">Questions?</h3>
                                        <p className="text-zinc-500 text-sm font-light">Contact our legal compliance team for any inquiries regarding this protocol.</p>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
                                        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all">
                                            <Mail className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Email Endpoint</div>
                                            <div className="text-zinc-500 text-xs font-mono">info@visquanta.com</div>
                                        </div>
                                        <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 group hover:border-[#FF7404]/30 transition-all">
                                            <Phone className="w-5 h-5 text-[#FF7404] mb-4" />
                                            <div className="text-white font-bold text-sm mb-1 uppercase tracking-widest">Direct Line</div>
                                            <div className="text-zinc-500 text-xs font-mono">+1 786-686-6554</div>
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
