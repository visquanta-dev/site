'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
    Download,
    ArrowRight,
    Search,
    Layers,
    Zap,
    Shield,
    Cpu,
    Database,
    Gauge,
    Binary,
    Activity,
    Lock,
    Eye,
    ChevronRight,
    QrCode,
    FileCode,
    Command
} from 'lucide-react';
import Link from 'next/link';
import { useState, useRef } from 'react';

const guides = [
    {
        title: "Lead Loss Mitigation",
        subtitle: "Revenue Recovery Blueprint",
        description: "A comprehensive analysis of database reactivation protocols. This technical blueprint details the conversion of dormant CRM records into active showroom appointments using neural-link scheduling.",
        category: "Growth",
        icon: Zap,
        stats: { rev: "v2.5.0", security: "Level 4", type: "Core Module" },
        id: "AMS-LLM-001",
        accent: "#FF7404"
    },
    {
        title: "Speed to Lead Services",
        subtitle: "Response Velocity Analysis",
        description: "Examining the mathematical correlation between response latency and close rates. Includes the Sub-60 protocol for industrial-scale lead handling.",
        category: "Operations",
        icon: Gauge,
        stats: { rev: "v1.9.2", security: "Level 3", type: "Telemetry" },
        id: "AMS-STL-002",
        accent: "#10B981"
    },
    {
        title: "Reputation Management",
        subtitle: "Review Authority Framework",
        description: "Strategic defense and acquisition protocols for dealership sentiment. Automating the feedback loop to maintain a 4.8+ star rating across all Tier-1 directories.",
        category: "Authority",
        icon: Shield,
        stats: { rev: "v3.1.0", security: "Level 4", type: "Guard" },
        id: "AMS-RM-003",
        accent: "#3B82F6"
    },
    {
        title: "Service Drive Pro",
        subtitle: "Fixed Ops Autopilot Guide",
        description: "Visualizing the automated service lifecycle. From smart-scheduling to automated upsell triggers, maximize the profitability of every repair order.",
        category: "Retention",
        icon: Cpu,
        stats: { rev: "v2.2.4", security: "Level 3", type: "Optimization" },
        id: "AMS-SDP-004",
        accent: "#A855F7"
    },
    {
        title: "DMS Terminal",
        subtitle: "Universal Data Architecture",
        description: "Deep-layer integration guide for secure DMS connectivity. Details the encryption standards and neural mapping of dealership data streams.",
        category: "Infrastructure",
        icon: Database,
        stats: { rev: "v4.0.1", security: "Level 5", type: "Neural Link" },
        id: "AMS-DMS-005",
        accent: "#F43F5E"
    },
    {
        title: "The AutoMaster Ecosystem",
        subtitle: "Full Suite Overview",
        description: "The holistic architecture of the VisQuanta platform. How individual modules synchronize to create the industry's most powerful revenue engine.",
        category: "Master",
        icon: Layers,
        stats: { rev: "v5.0.0", security: "Level 5", type: "Full Stack" },
        id: "AMS-ALL-006",
        accent: "#EAB308"
    }
];

function CardTilt({ children }: { children: React.ReactNode }) {
    const x = useSpring(0);
    const y = useSpring(0);

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = (mouseX / width - 0.5) * 20;
        const yPct = (mouseY / height - 0.5) * -20;
        x.set(xPct);
        y.set(yPct);
    }

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ rotateY: x, rotateX: y, transformStyle: "preserve-3d" }}
            className="h-full"
        >
            {children}
        </motion.div>
    );
}

export default function AMSGuidesPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const categories = ['All', 'Growth', 'Operations', 'Infrastructure', 'Retention'];

    const filteredGuides = guides.filter(guide => {
        const matchesSearch = guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            guide.description.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main ref={containerRef} className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden font-sans">
            <Navigation />

            {/* CINEMATIC BACKGROUND */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-enterprise-grid opacity-[0.05]" />
                <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-[#FF7404]/5 blur-[200px] rounded-full opacity-30" />
                <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-blue-600/5 blur-[200px] rounded-full opacity-20" />

                {/* Rolling Scan Line Effect */}
                <motion.div
                    animate={{ y: ["0%", "100%", "0%"] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FF7404]/10 to-transparent opacity-20 blur-sm z-1"
                />
            </div>

            {/* PROGRESS TRACKER */}
            <motion.div
                style={{ scaleX: scrollYProgress }}
                className="fixed top-0 left-0 right-0 h-1 bg-[#FF7404] origin-left z-[110]"
            />

            {/* HERO SECTION - CINEMATIC TYPE */}
            <section className="relative pt-48 pb-40 overflow-hidden z-10 border-b border-white/5">
                <div className="container-wide px-4 mx-auto">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                        <div className="max-w-4xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4 mb-8"
                            >
                                <div className="h-px w-12 bg-[#FF7404]" />
                                <span className="text-[#FF7404] text-[10px] font-black uppercase tracking-[0.5em]">Central Asset Repository</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-7xl md:text-[10rem] font-black text-white leading-[0.8] tracking-tighter uppercase mb-12"
                            >
                                Technical <br />
                                <span className="text-transparent border-text">Blueprints</span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 backdrop-blur-xl mb-12 lg:mb-4 w-full lg:w-80"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-[#FF7404]/20 text-[#FF7404]">
                                    <Activity size={16} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Library Status</span>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-zinc-600">Sync Capacity</span>
                                    <span className="text-xs font-mono text-zinc-400">100%</span>
                                </div>
                                <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-[#FF7404] to-orange-400"
                                    />
                                </div>
                                <div className="flex items-center gap-2 pt-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                    <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Active Database</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ADVANCED FILTERING INTERFACE */}
            <section className="sticky top-[80px] z-50 py-6">
                <div className="container-wide px-4 mx-auto">
                    <div className="bg-[#0A0A0A]/80 backdrop-blur-2xl border border-white/5 rounded-3xl p-3 flex flex-col lg:flex-row items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-2 bg-white/5 rounded-2xl p-1.5 w-full lg:w-auto overflow-x-auto no-scrollbar">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${selectedCategory === cat
                                        ? 'bg-[#FF7404] text-black shadow-[0_0_20px_rgba(255,116,4,0.3)]'
                                        : 'text-zinc-500 hover:text-white hover:bg-white/5'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative flex-1 group w-full">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none group-focus-within:text-[#FF7404] transition-colors">
                                <Search className="w-4 h-4 text-zinc-600 group-focus-within:text-[#FF7404]" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by Module, Tech, or Feature..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-14 pr-6 text-sm text-white focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.08] transition-all font-mono placeholder:text-zinc-700"
                            />
                            <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                <kbd className="hidden md:flex items-center gap-1 text-[10px] font-bold text-zinc-700 bg-black/40 px-2 py-1 rounded-md border border-white/10 uppercase tracking-tighter">
                                    <Command size={10} /> K
                                </kbd>
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            {/* THE ASSET GRID - ELITE PRESENTATION */}
            <section className="py-24 relative z-10">
                <div className="container-wide px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {filteredGuides.map((guide, idx) => (
                            <motion.div
                                key={guide.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                            >
                                <CardTilt>
                                    <div className="group relative h-full bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-[3rem] p-1 shadow-2xl transition-all duration-700 hover:border-[#FF7404]/40 hover:shadow-[#FF7404]/10" style={{ transformStyle: "preserve-3d" }}>

                                        {/* Inner Content */}
                                        <div className="bg-[#050505] rounded-[2.8rem] p-10 h-full flex flex-col relative overflow-hidden" style={{ transform: "translateZ(20px)" }}>

                                            {/* Technical Watermark */}
                                            <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 rotate-12 group-hover:scale-110">
                                                <guide.icon size={280} />
                                            </div>

                                            {/* Card Header */}
                                            <div className="flex items-start justify-between mb-12 relative z-10">
                                                <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FF7404] group-hover:bg-[#FF7404] group-hover:text-black transition-all duration-500 shadow-inner">
                                                    <guide.icon size={28} />
                                                </div>
                                                <div className="flex flex-col items-end">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Verified</span>
                                                    </div>
                                                    <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">{guide.stats.rev}</span>
                                                </div>
                                            </div>

                                            {/* Main Info */}
                                            <div className="relative z-10 mb-auto">
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    <span className="px-3 py-1 bg-white/5 rounded-full text-[9px] font-black text-zinc-500 uppercase tracking-widest border border-white/5 group-hover:border-[#FF7404]/30 group-hover:text-[#FF7404] transition-all">
                                                        {guide.category}
                                                    </span>
                                                </div>

                                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-tight group-hover:text-[#FF7404] transition-colors mb-2">
                                                    {guide.title}
                                                </h3>
                                                <div className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] mb-6">
                                                    {guide.subtitle}
                                                </div>

                                                <p className="text-zinc-600 text-[13px] leading-relaxed font-light mb-8 group-hover:text-zinc-400 transition-colors">
                                                    {guide.description}
                                                </p>
                                            </div>

                                            {/* Footing / Download */}
                                            <div className="relative z-10 pt-8 mt-4 border-t border-white/5">
                                                <button className="w-full relative group/btn overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-[#FF7404] translate-y-[101%] group-hover/btn:translate-y-0 transition-transform duration-500" />
                                                    <div className="relative w-full border border-white/10 rounded-2xl py-5 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.25em] text-white group-hover/btn:text-black group-hover/btn:border-[#FF7404] transition-all">
                                                        <Download className="w-4 h-4" />
                                                        Initialize Download
                                                    </div>
                                                </button>
                                            </div>

                                            {/* Decorative Background Elements */}
                                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                                            <div className="absolute top-4 right-4 flex gap-1 opacity-20">
                                                {[1, 2, 3].map(i => <div key={i} className="w-1 h-3 bg-zinc-700 rounded-full" />)}
                                            </div>
                                        </div>
                                    </div>
                                </CardTilt>
                            </motion.div>
                        ))}
                    </div>

                    {filteredGuides.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-40 text-center"
                        >
                            <div className="relative inline-block mb-10">
                                <Binary className="w-24 h-24 text-zinc-900 mx-auto" />
                                <div className="absolute inset-0 bg-[#FF7404]/10 blur-3xl rounded-full" />
                            </div>
                            <h3 className="text-3xl font-black text-white uppercase tracking-widest mb-4">No Matching Protocols Found</h3>
                            <p className="text-zinc-600 font-light mb-10">Search query returned zero validated assets within the current directory.</p>
                            <button
                                onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                                className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[#FF7404] hover:bg-[#FF7404] hover:text-black transition-all uppercase text-[10px] font-black tracking-widest"
                            >
                                Reset Terminal Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* THE ARCHITECT SECTION - HIGH IMPACT CTA */}
            <section className="py-40 relative z-10 overflow-hidden">
                <div className="container-wide px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-1 md:p-1.5 rounded-[5rem] bg-gradient-to-br from-white/10 via-transparent to-white/5 backdrop-blur-3xl group"
                    >
                        <div className="bg-[#030303] rounded-[4.8rem] p-16 md:p-32 overflow-hidden relative">
                            {/* Visual Noise/Grid */}
                            <div className="absolute inset-0 bg-enterprise-grid opacity-10" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF7404] opacity-[0.03] blur-[160px] rounded-full pointer-events-none" />

                            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                                <div className="text-center md:text-left">
                                    <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                                        <div className="px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-[0.4em]">
                                            Custom Protocol
                                        </div>
                                        <div className="h-px w-12 bg-zinc-800" />
                                    </div>
                                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
                                        Architect a <br />
                                        <span className="text-transparent border-text">Specific Analysis</span>
                                    </h2>
                                    <p className="text-zinc-500 text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                                        Can't find the specific operational blueprint for your dealer group? Our technical architects can model a custom analysis of your current CRM topology.
                                    </p>
                                </div>

                                <div className="flex flex-col items-center md:items-end justify-center">
                                    <Link
                                        href="/contact"
                                        className="group relative inline-flex items-center gap-6 px-14 py-8 bg-[#FF7404] text-black rounded-3xl font-black uppercase tracking-[0.25em] text-sm hover:bg-white transition-all shadow-2xl hover:shadow-[#FF7404]/40"
                                    >
                                        Request Asset <br /> Architecture
                                        <div className="w-12 h-12 rounded-2xl bg-black/10 flex items-center justify-center group-hover:bg-black transition-colors">
                                            <ArrowRight className="w-6 h-6 group-hover:text-white transition-colors group-hover:translate-x-1" />
                                        </div>
                                    </Link>

                                    <div className="mt-12 flex items-center gap-8 opacity-40">
                                        <div className="flex flex-col items-center">
                                            <FileCode className="text-zinc-500 mb-2" size={20} />
                                            <span className="text-[10px] font-mono text-zinc-600">Schema.v4</span>
                                        </div>
                                        <div className="w-px h-8 bg-zinc-800" />
                                        <div className="flex flex-col items-center">
                                            <Eye className="text-zinc-500 mb-2" size={20} />
                                            <span className="text-[10px] font-mono text-zinc-600">Neural.viz</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* RESOURCE FOOTER */}
            <section className="py-24 border-t border-white/5 bg-white/[0.01]">
                <div className="container-wide px-4 mx-auto">
                    <div className="flex flex-wrap items-center justify-between gap-8 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                        <span className="text-sm font-black text-zinc-500 uppercase tracking-[0.4em]">AMS Technology Partners</span>
                        <div className="flex gap-12">
                            {['ORACLE', 'AWS', 'GOOGLE CLOUD', 'NVIDIA'].map(p => (
                                <span key={p} className="text-xs font-black text-white italic tracking-tighter">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

            <style jsx global>{`
                .border-text {
                    -webkit-text-stroke: 1px rgba(255,255,255,0.2);
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </main>
    );
}
