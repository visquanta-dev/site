'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, ArrowRight, Linkedin, Mail, Calendar } from 'lucide-react';
import { useRef } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { RequestDemoButton } from '@/components/CalendlyModal';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    badge: string;
    link?: string;
    email?: string;
    calendly?: string;
}

export default function HeroSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center bg-[#050505] overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 lg:pt-44">

            {/* ====================
                BACKGROUND LAYERS (North Star Compliant)
               ==================== */}
            <div className="absolute inset-0 bg-[#050505]" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#080808] to-[#030303]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(20,20,25,1),transparent)]" />

            {/* Dynamic Text Background */}
            <motion.div style={{ y: y1, opacity }} className="absolute text-[20vw] font-bold text-white/[0.02] left-0 top-20 select-none pointer-events-none">
                RESULTS
            </motion.div>

            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none" />

            {/* Ambient Light */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FF7404]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

            <div className="container-wide relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-8 sm:space-y-10">

                    {/* Eyebrow - North Star Style (Line + Text) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3"
                    >
                        <div className="h-px w-6 sm:w-8 bg-[#FF7404]/60" />
                        <span className="text-[#FF7404] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                            The VisQuanta Difference
                        </span>
                    </motion.div>

                    <div className="overflow-hidden">
                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: { transition: { staggerChildren: 0.02 } }
                            }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[1.1]"
                        >
                            We Don't Just<br />
                            Give You a Login.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d] relative inline-block">
                                We Deliver Results.
                            </span>
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-base sm:text-lg md:text-xl text-muted-foreground/80 leading-relaxed max-w-lg font-medium"
                    >
                        The only car dealership AI backed by a dedicated team of automotive experts. Every conversation verified. Every lead maximized.
                    </motion.p>

                    {/* CTA Group (NEW) */}
                    <div className="flex flex-col gap-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                        >
                            <RequestDemoButton asChild>
                                <Button
                                    className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest border border-[#FF7404]/30 bg-[#FF7404]/10 hover:bg-[#FF7404]/20 hover:border-[#FF7404]/50 text-[#FF7404] hover:text-white transition-all shadow-[0_0_40px_-10px_rgba(255,116,4,0.1)] hover:shadow-[0_0_50px_-10px_rgba(255,116,4,0.3)]"
                                >
                                    Schedule Your Walkthrough
                                </Button>
                            </RequestDemoButton>

                            <Button
                                asChild
                                variant="outline"
                                className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest border-white/10 hover:bg-white/5 bg-transparent text-white hover:text-white"
                            >
                                <Link href="#how-it-works">
                                    See How It Works
                                </Link>
                            </Button>
                        </motion.div>

                        {/* CRO Microcopy */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                            className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
                        >
                            15-min 1:1 • Get an exact revenue-lift projection for your dealership
                        </motion.p>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 sm:pt-12 mt-8 sm:mt-12 pb-4 border-t border-white/10">
                        {[{ label: "Monitored Interactions", value: "100%" }, { label: "Account Support", value: "24/7" }].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.1) }}
                            >
                                <div className="text-2xl sm:text-3xl font-black text-white mb-1 uppercase tracking-tight">{item.value}</div>
                                <div className="text-[10px] text-white/40 uppercase tracking-widest font-bold">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Visual Demo */}
                <div className="lg:hidden mt-8 sm:mt-12 flex justify-center">
                    <div className="relative w-full max-w-[280px] sm:max-w-[320px]">
                        <div className="relative rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#0a0a0a]">
                            <img
                                src="/images/suite-bg/ds-bg.png"
                                alt="Dealer Success Demo"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="absolute inset-0 -z-10 bg-[#FF7404]/10 blur-3xl rounded-full scale-150 opacity-50" />
                    </div>
                </div>

                {/* Right Visual - Team Hierarchy */}
                <div className="relative w-full hidden lg:flex items-center justify-center py-10">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
                        <span className="text-[12rem] font-black text-white/[0.02] tracking-tighter transform -rotate-12 whitespace-nowrap">
                            VISQUANTA
                        </span>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-6 -translate-y-[15%]">
                        {[
                            // Row 1: Leadership
                            [{
                                name: "Charles Snodgrass",
                                role: "Director of Client Success",
                                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp",
                                badge: "Leadership",
                                link: "https://www.linkedin.com/in/charles-snodgrass-a99b947b/",
                                email: "csnodgrass@visquanta.com",
                                calendly: "https://calendly.com/csnodgrass-visquanta/visquanta-discovery-call"
                            }],
                            // Row 2: Management & Ops
                            [
                                {
                                    name: "Clint Annis",
                                    role: "Integrations Lead",
                                    image: "/team/clint-annis.png",
                                    badge: "Tech Ops"
                                },
                                {
                                    name: "Chloe Johncock",
                                    role: "Account Ops Manager",
                                    image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6850417609bb855d13026da3_Chloe_JohnCock_Visquanta.avif",
                                    badge: "Dealer Ops"
                                },
                                {
                                    name: "Marion Ueland",
                                    role: "Account Operations",
                                    image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4d024bdd582aff727d7f8_Screenshot_2025-08-28_180752-removebg-preview.avif",
                                    badge: "Dealer Ops"
                                }
                            ],
                            // Row 3: Execution
                            [
                                {
                                    name: "Ellison Riviera",
                                    role: "Client Account Lead",
                                    image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6850416b0314723f40a489d0_Ellison_Riviera-removebg-preview-modified.avif",
                                    badge: "Client Success"
                                },
                                {
                                    name: "John Cabatingan",
                                    role: "Client Account Specialist",
                                    image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4d1ae44a7d738f878e7c6_20250806_173050-removebg-preview-modified.avif",
                                    badge: "Client Success"
                                },

                                {
                                    name: "Jonas Saycon",
                                    role: "Client Account Specialist",
                                    image: "/team/jonas-saycon.png",
                                    badge: "Client Success"
                                }
                            ]
                        ].map((row, rowIdx) => (
                            <div key={rowIdx} className="flex items-center justify-center gap-4">
                                {row.map((member: TeamMember, i) => (
                                    <motion.div
                                        key={member.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: (rowIdx * 0.2) + (i * 0.1),
                                            duration: 0.5,
                                            ease: "easeOut"
                                        }}
                                        whileHover={{ y: -5, zIndex: 50 }}
                                        className={`relative ${member.name === "Charles Snodgrass" ? 'w-[264px]' : 'w-[240px]'} bg-[#1a1a1a]/80 border border-white/10 rounded-2xl p-4 shadow-xl backdrop-blur-md group hover:border-[#FF7404]/30 hover:shadow-[#FF7404]/10 transition-all duration-300`}
                                    >
                                        {/* Top Badge */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="inline-flex items-center px-2 py-0.5 rounded bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[8px] font-black uppercase tracking-wider">
                                                {member.badge}
                                            </div>
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" />
                                        </div>

                                        <div className="flex items-center gap-3">
                                            {/* Avatar */}
                                            <div className="relative w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-zinc-800 shrink-0 group-hover:border-[#FF7404]/50 transition-colors">
                                                <img
                                                    src={member.image}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                                />
                                            </div>

                                            {/* Info */}
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-sm font-bold text-white truncate group-hover:text-[#FF7404] transition-colors">{member.name}</h3>
                                                <p className="text-[10px] text-zinc-500 uppercase tracking-wide truncate mb-2">{member.role}</p>

                                                {(member.link || member.email || member.calendly) && (
                                                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        {member.link && (
                                                            <a href={member.link} target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/5 hover:bg-[#FF7404]/20 text-zinc-500 hover:text-[#FF7404] transition-colors">
                                                                <Linkedin className="w-3 h-3" />
                                                            </a>
                                                        )}
                                                        {member.email && (
                                                            <a href={`mailto:${member.email}`} className="p-1 rounded bg-white/5 hover:bg-[#FF7404]/20 text-zinc-500 hover:text-[#FF7404] transition-colors">
                                                                <Mail className="w-3 h-3" />
                                                            </a>
                                                        )}
                                                        {member.calendly && (
                                                            <a href={member.calendly} target="_blank" rel="noopener noreferrer" className="p-1 rounded bg-white/5 hover:bg-[#FF7404]/20 text-zinc-500 hover:text-[#FF7404] transition-colors">
                                                                <Calendar className="w-3 h-3" />
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bottom Status */}
                                        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                                            <span className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest group-hover:text-zinc-400 transition-colors">Active Now</span>
                                            <ArrowRight className="w-3 h-3 text-zinc-700 group-hover:text-[#FF7404] transition-colors -rotate-45" />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
