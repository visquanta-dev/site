'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
    Zap,
    RefreshCcw,
    Star,
    HeartHandshake,
    Wrench,
    Target,
    ArrowRight,
    CheckCircle2,
    Layers,
    Cpu,
    Database,
    ShieldCheck,
    BarChart3,
    ChevronRight,
    Gauge,
    MessageSquare,
    PlayCircle,
    Play,
    Activity,
    Shield,
    FileText,
    Workflow,
    Building2,
    Users,
    History,
    Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MinimalQuote from '@/components/ui/MinimalQuote';
import { useState } from 'react';
import Image from 'next/image';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
    }
};

const suiteProducts = [
    {
        id: 'llm',
        title: "Lead Loss Mitigation",
        icon: RefreshCcw,
        desc: "Turn your 'dead' CRM leads into fresh appointments with AI-driven database reactivation.",
        link: "/lead-reactivation",
        stats: "8-12% Recovery Rate",
        color: "from-orange-500 to-red-500",
        image: "/images/suite-bg/llm-bg.png"
    },
    {
        id: 's2l',
        title: "Speed to Lead Services",
        icon: Zap,
        desc: "Engage every website inquiry in under 60 seconds. 24/7/365 coverage for your digital lot.",
        link: "/speed-to-lead",
        stats: "<60s Response Time",
        color: "from-yellow-400 to-orange-500",
        image: "/images/suite-bg/s2l-bg.png"
    },
    {
        id: 'rm',
        title: "Reputation Management",
        icon: Star,
        desc: "Automate Google reviews and flag negative sentiment before it hits factory CSI surveys.",
        link: "/reputation-management",
        stats: "4.8+ Avg Rating",
        color: "from-[#FF7404] to-[#FF9040]",
        image: "/images/suite-bg/rm-bg.png"
    },
    {
        id: 'sdp',
        title: "Service Drive Pro",
        icon: Wrench,
        desc: "Automated service desk booking and inbound call routing for fixed-ops mastery.",
        link: "/service-drive",
        stats: "+15% RO Volume",
        color: "from-green-400 to-emerald-600",
        image: ""
    },
    {
        id: 'cc',
        title: "Custom Campaigns",
        icon: Target,
        desc: "Tailored SMS and email blitzes for seasonal sales and dealership events.",
        link: "/custom-campaigns",
        stats: "20x+ Typical ROI",
        color: "from-purple-500 to-pink-500",
        image: "/images/suite-bg/cc-bg.png"
    },
    {
        id: 'ds',
        title: "Dealer Success",
        icon: HeartHandshake,
        desc: "Dedicated performance managers ensuring every suite tool delivers maximum ROI.",
        link: "/dealer-success",
        stats: "White-Glove Support",
        color: "from-zinc-400 to-zinc-600",
        image: "/images/suite-bg/ds-bg.png"
    }
];

// Beating Heart Background Effect
const HeartLine = () => (
    <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <svg className="w-full h-[400px] opacity-[0.3]" viewBox="0 0 1000 200" preserveAspectRatio="none">
            <motion.path
                d="M -100 100 L 350 100 L 370 100 L 380 70 L 400 130 L 415 20 L 435 180 L 450 100 L 470 110 L 480 100 L 1100 100"
                stroke="#FF7404"
                strokeWidth="2"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                    pathLength: [0, 1, 1],
                    opacity: [0, 1, 0]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1]
                }}
            />
        </svg>
    </div>
);

export default function AutoMasterSuiteHub() {
    const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            {/* JSON-LD for AEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "SoftwareApplication",
                        "name": "The AutoMaster Suite",
                        "applicationCategory": "BusinessApplication",
                        "operatingSystem": "Web-based",
                        "description": "The definitive automotive revenue ecosystem. An integrated suite of AI-driven tools for lead reactivation, response velocity, and reputation mastery.",
                        "offers": {
                            "@type": "AggregateOffer",
                            "offerCount": "6",
                            "itemOffered": suiteProducts.map(p => ({
                                "@type": "SoftwareApplication",
                                "name": p.title,
                                "description": p.desc
                            }))
                        },
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is The AutoMaster Suite for car dealerships?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The AutoMaster Suite is an integrated automotive revenue ecosystem that combines AI lead reactivation, instant response velocity, and reputation management into a single platform designed to increase dealership turnover and ROI."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "Does The AutoMaster Suite integrate with CDK and Reynolds & Reynolds?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "Yes, The AutoMaster Suite features deep integration with major DMS providers like CDK Global, Reynolds & Reynolds, and Dealertrack, allowing for automated note entry and real-time scheduling direct to your system."
                                }
                            }
                        ]
                    })
                }}
            />

            <Navigation />

            {/* 1. HERO: The Unified Ecosystem */}
            <section className="relative pt-32 pb-24 overflow-hidden min-h-[80vh] flex items-center">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <HeartLine />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#FF7404]/15 rounded-full blur-[150px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:80px_80px] opacity-[0.15]" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/10 text-[#FF7404] text-[11px] font-bold uppercase tracking-widest mb-10"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                                </span>
                                System Live // Car Dealership AI
                            </motion.div>

                            <motion.h1
                                variants={itemVariants}
                                className="text-5xl lg:text-8xl font-bold text-white mb-8 tracking-tighter leading-[0.95]"
                            >
                                One Suite. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-white">
                                    Infinite Growth.
                                </span>
                            </motion.h1>

                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
                            >
                                Stop reactive management. Install the <strong className="text-white font-bold italic">beating heart</strong> of high-volume retail. The AutoMaster Suite unifies your store into a single high-velocity revenue engine.
                            </motion.p>

                            <motion.div
                                variants={itemVariants}
                                className="flex flex-col sm:flex-row gap-5 justify-center"
                            >
                                <button className="px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-lg rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)] flex items-center gap-3 group">
                                    Activate Your Revenue Engine
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold text-lg rounded-2xl border border-white/10 transition-all backdrop-blur-md flex items-center gap-2 group">
                                    <PlayCircle className="w-5 h-5 text-[#FF7404] group-hover:scale-110 transition-transform" />
                                    Watch Vision Briefing
                                </button>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-24 relative z-10 flex justify-center">
                <MinimalQuote
                    quote="Consolidated five vendors into one unified platform. One dashboard, one invoice, zero friction."
                    author="Robert Kim"
                    role="Operations Director, Capital City Auto"
                    className="max-w-2xl text-center"
                />
            </div>

            {/* 1.5 VIDEO VISION BRIEFING - KNOWLEDGE HEAVY ENTRY */}
            <section className="pb-24 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative max-w-5xl mx-auto group"
                    >
                        {/* Main Vision Video */}
                        <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                            <iframe
                                src="https://www.youtube.com/embed/lgylKQNXM84?modestbranding=1&rel=0"
                                className="absolute inset-0 w-full h-full"
                                title="VisQuanta Vision Briefing"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />

                            {/* Visual Polish Overlay - Subtle */}
                            <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[2.5rem] ring-1 ring-inset ring-white/10" />
                        </div>

                        {/* Knowledge Callouts around Video */}
                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            {[
                                { title: "24/7 coverage", desc: "No lead left behind. AI handles the 'night shift' while your team sleeps.", icon: Activity },
                                { title: "CRM-First Protocol", desc: "Every interaction is logged. Zero manual entry for your BDC teams.", icon: Database },
                                { title: "ROI Guarantee", desc: "We track every RO and Sale directly to our conversations.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                                        <item.icon className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm mb-1">{item.title}</h4>
                                        <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 1.7 THE THREE PILLARS - KNOWLEDGE HEAVY 'WHO WE ARE' */}
            <section className="py-24 bg-[#050505] border-y border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            {
                                title: "Operational Velocity",
                                color: "text-[#FF7404]",
                                desc: "At VisQuanta, we believe speed is the ultimate competitive advantage. Our suite is engineered to eliminate the friction between a customer's inquiry and your team's response. By automating the 'Speed-to-Lead' phase, we ensure your dealership is always first to the table."
                            },
                            {
                                title: "Integrated Intelligence",
                                color: "text-[#FF7404]",
                                desc: "We are not an 'app store.' We are a unified intelligence layer. Our software doesn't just send messages; it reads your DMS, understands your inventory velocity, and makes real-time decisions that protect your margins and your CSI scores."
                            },
                            {
                                title: "Human Success",
                                color: "text-green-400",
                                desc: "Automation should empower people, not replace them. We build our tools to handle the repetitive, soul-crushing tasks of lead chasing, so your BDC and Sales teams can focus on what they do best: building relationships and closing deals."
                            }
                        ].map((pillar, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-1 h-8 rounded-full bg-current ${pillar.color}`} />
                                    <h3 className="text-2xl font-bold text-white">{pillar.title}</h3>
                                </div>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    {pillar.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. THE HUB VISUAL: Product Grid */}
            <section className="py-24 border-y border-white/5 bg-[#010101]">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {suiteProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`relative group flex flex-col h-full bg-[#050505] border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-white/10`}
                            >
                                {/* Cinematic Background Glow & Image */}
                                <div className="absolute inset-0 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                                    {product.image && (
                                        <Image
                                            src={product.image}
                                            alt=""
                                            fill
                                            className="object-cover opacity-50 mix-blend-overlay"
                                        />
                                    )}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${product.color.replace('from-', 'from-').replace('to-', 'to-').replace('500', '500/10').replace('400', '400/10').replace('600', '600/10')} to-black/90`} />
                                </div>
                                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${product.color.replace('from-', 'from-').replace('to-', 'to-').replace('500', '500/10').replace('400', '400/10').replace('600', '600/10')} to-transparent pointer-events-none`} />
                                <div className="absolute -right-20 -top-20 w-48 h-48 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />

                                <div className="relative z-10 p-8 flex flex-col h-full">
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500 shadow-lg group-hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]`}>
                                        <product.icon className="w-7 h-7 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                                        {product.title}
                                    </h3>

                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow border-b border-white/5 pb-8 group-hover:border-white/10 transition-colors">
                                        {product.desc}
                                    </p>

                                    <div className="flex items-center justify-between pt-2">
                                        <div className="flex flex-col">
                                            <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-widest mb-1">Impact</span>
                                            <span className={`text-base font-black text-transparent bg-clip-text bg-gradient-to-r ${product.color}`}>
                                                {product.stats}
                                            </span>
                                        </div>
                                        <Link
                                            href={product.link}
                                            className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all duration-300"
                                        >
                                            <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.5 THE OPERATIONAL BLUEPRINT - KNOWLEDGE HEAVY */}
            <section className="py-24 bg-[#020202] border-t border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Operational <br /><span className="text-[#FF7404]">Blueprint.</span></h2>
                        <p className="text-zinc-400 text-lg">A unified suite doesn't just change your tech; it changes how your dealership breathes. Here is the lifecycle of a customer inside The AutoMaster Suite ecosystem.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-white/5 -translate-y-1/2 z-0" />

                        {[
                            { step: "01", title: "Arrival", desc: "Speed-to-Lead catches the inquiry <60s.", sub: "Any source: SMS, Web, 3rd Party." },
                            { step: "02", title: "Nurture", desc: "LLM re-engages aged leads in the CRM.", sub: "AI-driven database reactivation." },
                            { step: "03", title: "Conversion", desc: "AI books the appointment via DMS.", sub: "Seamless calendar write-back." },
                            { step: "04", title: "Loyalty", rounded: true, title2: "Retention", desc: "Reputation Management & Service Pro.", sub: "Fixed ops growth & CSI protection." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative z-10 bg-[#080808] border border-white/5 p-6 rounded-2xl hover:border-[#FF7404]/30 transition-colors"
                            >
                                <div className="text-[#FF7404] font-black text-2xl mb-4 font-mono">{item.step}</div>
                                <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                <p className="text-zinc-300 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                <div className="pt-4 border-t border-white/5 text-[10px] text-zinc-500 uppercase tracking-widest font-bold font-mono">
                                    {item.sub}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2.7 COMPARISON MATRIX - KNOWLEDGE HEAVY */}
            <section className="py-24 bg-[#010101] border-t border-white/5">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-4"
                        >
                            <BarChart3 className="w-3 h-3" />
                            Efficiency Comparison
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Legacy vs. <span className="text-[#FF7404]">The AutoMaster Suite.</span></h2>
                        <p className="text-zinc-500 text-lg">Why top-tier dealerships are ditching disjointed legacy software for a unified revenue platform.</p>
                    </div>

                    <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-white/5 bg-[#080808] shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="px-8 py-6 text-sm font-bold text-white uppercase tracking-widest">Capabilities</th>
                                    <th className="px-8 py-6 text-sm font-bold text-zinc-500 uppercase tracking-widest">Legacy Tools</th>
                                    <th className="px-8 py-6 text-sm font-bold text-[#FF7404] uppercase tracking-widest bg-[#FF7404]/5 text-center">The AutoMaster Suite</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {[
                                    { cap: "Multi-Source Lead Engagement", legacy: "Manual / Delayed", master: "Instant (<60s)", icon: Zap },
                                    { cap: "CRM/DMS Write-Back", legacy: "API Read Only", master: "Full Bi-Directional Write", icon: Database },
                                    { cap: "Lead Reactivation", legacy: "Marketing Blasts", master: "1-to-1 AI Conversation", icon: RefreshCcw },
                                    { cap: "Service Drive Routing", legacy: "Basic IVR", master: "AI Voice Appointment Booking", icon: Wrench },
                                    { cap: "Support Model", legacy: "Ticket System", master: "Dedicated Success Manager", icon: HeartHandshake }
                                ].map((row, i) => (
                                    <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-8 py-6">
                                            <div className="flex items-center gap-3">
                                                <row.icon className="w-4 h-4 text-zinc-600 group-hover:text-[#FF7404]" />
                                                <span className="text-white font-medium text-sm">{row.cap}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-6 text-zinc-500 text-sm italic">{row.legacy}</td>
                                        <td className="px-8 py-6 text-white font-bold text-sm bg-[#FF7404]/5 border-x border-[#FF7404]/10 text-center">{row.master}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* 2.8 SEGMENT SOLUTIONS - DEFINING THE AUDIENCE */}
            <section className="py-24 bg-[#050505] relative overflow-hidden transition-all duration-500 border-t border-white/5">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Built for Your <br /><span className="text-[#FF7404]">Specific Operation.</span></h2>
                        <p className="text-zinc-500 text-lg">The AutoMaster Suite is modular and customizable, engineered to solve the unique pain points of every dealership model.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Franchise Dealers",
                                icon: Building2,
                                desc: "Achieve 100% OEM compliance, protect CSI scores, and secure manufacturer bonuses through relentless response velocity.",
                                link: "/dealers/franchise",
                                tag: "Scale & Compliance",
                                color: "from-blue-500/20 to-cyan-500/20"
                            },
                            {
                                title: "Independent Dealers",
                                icon: Target,
                                desc: "Maximize capital efficiency and inventory turn with lean, AI-powered operations that act like a 24/7 BDC.",
                                link: "/dealers/independent",
                                tag: "Margin Protection",
                                color: "from-[#FF7404]/20 to-orange-500/20"
                            },
                            {
                                title: "Pre-Owned Specialists",
                                icon: History,
                                desc: "Reactivate aged CRM leads and dominate the local market with aggressive database mining and lead recovery.",
                                link: "/dealers/pre-owned",
                                tag: "Inventory Velocity",
                                color: "from-emerald-500/20 to-green-500/20"
                            },
                            {
                                title: "Auto Groups",
                                icon: Layers,
                                desc: "Centralize lead management across multiple rooftops with group-wide visibility and local-store execution.",
                                link: "/dealers/auto-groups",
                                tag: "Enterprise Control",
                                color: "from-purple-500/20 to-pink-500/20"
                            }
                        ].map((segment, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#0a0a0a] border border-white/5 rounded-[2.5rem] p-10 overflow-hidden hover:border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${segment.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] pointer-events-none group-hover:bg-white/10 transition-colors" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-8">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-400 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md group-hover:text-white group-hover:border-white/20 transition-all">
                                            {segment.tag}
                                        </div>
                                        <segment.icon className="w-8 h-8 text-zinc-600 group-hover:text-white transition-colors duration-500" />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-shadow-sm">{segment.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors flex-grow">
                                        {segment.desc}
                                    </p>

                                    <Link
                                        href={segment.link}
                                        className="inline-flex items-center gap-3 text-xs font-bold text-white group/link px-6 py-3 rounded-full bg-white/5 border border-white/5 hover:bg-white hover:text-black transition-all duration-300 w-fit"
                                    >
                                        View Solution
                                        <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))
                        }
                    </div>
                </div>
            </section>

            {/* 3. INTEROPERABILITY SECTION: Technical Deep Dive */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-tight">
                                    Built for the <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Modern DMS.</span>
                                </h2>
                                <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                    The AutoMaster Suite isn't just a collection of apps: it's a deep-integration platform. We speak the language of your CRM and DMS, ensuring every conversation, appointment, and RO is synced in real-time.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Universal CRM Sync", desc: "Bi-directional sync with VinSolutions, eLeads, DealerSocket, and more. We read notes and write statuses in real-time.", icon: RefreshCcw },
                                        { title: "DMS Write-Back", desc: "Secure write-back into CDK, Reynolds, and Dealertrack. From appointments to customer record updates: zero manual effort.", icon: Database },
                                        { title: "OEM Compliance", desc: "100% brand-approved messaging. We verify every template against current manufacturer standards and legal guidelines.", icon: ShieldCheck },
                                        { title: "Enterprise Security", desc: "SOC-2 Type II Compliant. Your dealership data is encrypted at rest and in transit. We prioritize dealer privacy.", icon: Shield }
                                    ].map((feat, i) => (
                                        <div key={i} className="flex gap-4 p-5 rounded-xl bg-white/[0.01] hover:bg-white/[0.03] transition-all border border-white/5 hover:border-[#FF7404]/20 group">
                                            <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-[#FF7404] shrink-0 font-bold border border-white/5 group-hover:bg-[#FF7404]/10 transition-colors">
                                                <feat.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">{feat.title}</h4>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{feat.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        <div className="relative">
                            {/* Live Sync Terminal Visual */}
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[3rem] p-4 aspect-square overflow-hidden shadow-2xl flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 to-transparent" />

                                <div className="h-full w-full rounded-[2.5rem] bg-[#020202] border border-white/5 p-8 flex flex-col">
                                    {/* Terminal Header */}
                                    <div className="flex items-center justify-between mb-8">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                                <RefreshCcw className="w-6 h-6 text-orange-500 animate-spin-slow" />
                                            </div>
                                            <div>
                                                <div className="h-2 w-24 bg-white/20 rounded-full mb-2" />
                                                <div className="text-[10px] text-green-500 font-mono animate-pulse uppercase tracking-widest">Active Integration Tunnel</div>
                                            </div>
                                        </div>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/10" />)}
                                        </div>
                                    </div>

                                    {/* Integration Grid */}
                                    <div className="grid grid-cols-2 gap-4 mb-8">
                                        {[
                                            { name: "VinSolutions", type: "CRM" },
                                            { name: "CDK Global", type: "DMS" },
                                            { name: "eLeads", type: "CRM" },
                                            { name: "Dealertrack", type: "DMS" }
                                        ].map((sys, i) => (
                                            <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-center justify-center group hover:bg-white/[0.04] transition-colors">
                                                <div className="text-white font-black text-xs mb-1 tracking-tighter">{sys.name}</div>
                                                <div className="text-[10px] text-zinc-600 font-bold uppercase tracking-widest">{sys.type} Sync</div>
                                                <div className="mt-3 w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                                                    <motion.div
                                                        animate={{ x: [-40, 40] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                                        className="w-1/2 h-full bg-[#FF7404]/40"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Live Activity Log */}
                                    <div className="flex-grow bg-black/40 rounded-2xl border border-white/5 p-5 font-mono text-[10px] overflow-hidden relative">
                                        <div className="space-y-3 opacity-60">
                                            <div className="flex justify-between text-zinc-500">
                                                <span>{'>'} WRITE_BACK_INITIATED</span>
                                                <span className="text-[#FF7404]">DONE</span>
                                            </div>
                                            <div className="flex justify-between text-zinc-500">
                                                <span>{'>'} CRM_POST: VINSOLUTIONS</span>
                                                <span className="text-[#FF7404]">SUCCESS</span>
                                            </div>
                                            <div className="flex justify-between text-zinc-400">
                                                <span>{'>'} DMS_APPOINTMENT_PUSH</span>
                                                <span className="animate-pulse">PENDING</span>
                                            </div>
                                            <div className="flex justify-between text-zinc-500">
                                                <span>{'>'} ENCRYPT_DATA_TUNNEL_V2</span>
                                                <span className="text-[#FF7404]">ACTIVE</span>
                                            </div>
                                            <div className="flex justify-between text-zinc-500">
                                                <span>{'>'} RO_TOTAL_WRITE: $412.50</span>
                                                <span className="text-[#FF7404]">SYNCED</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#020202] to-transparent" />
                                    </div>
                                </div>

                                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,black_70%)] pointer-events-none" />
                            </div>

                            {/* Floating Stats */}
                            <motion.div
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-4 bg-zinc-900 border border-white/10 p-6 rounded-2xl shadow-3xl"
                            >
                                <BarChart3 className="w-8 h-8 text-[#FF7404] mb-3" />
                                <div className="text-2xl font-black text-white">4.2M</div>
                                <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">API Calls/Mo</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. AEO CONTENT HUB: Why Integrated Apps Matter */}
            <section className="py-24 bg-[#020202]">
                <div className="container px-4 mx-auto">
                    <div className="max-w-4xl mx-auto space-y-16">
                        <div className="text-center">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                The Case for <br />
                                <span className="text-[#FF7404]">Unified Intelligence.</span>
                            </h2>
                            <p className="text-zinc-500 text-lg">
                                Why automotive GMs are moving away from "app-fatigue" toward unified revenue platforms. <Link href="/dealer-services" className="text-[#FF7404] hover:underline font-bold">Explore our catalog of services.</Link>
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">Eliminating Data Silos</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    Most dealerships run 15+ different tools. Your BDC doesn't know what the Service drive is doing, and your marketing team is blind to your real-time inventory velocity. The AutoMaster Suite <strong>bridges the gap</strong>. By centralizing all automated customer touchpoints, we ensure a single, coherent customer journey from first inquiry to service loyalty.
                                </p>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white">Compound Efficiency</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm">
                                    When your Lead Reactivation engine (LLM) books a trade-in appraisal, our Reputation Management system pre-scans the customer's sentiment, and our Speed-to-Lead tech ensures the floor team is ready the moment they arrive. This <strong>inter-connected logic</strong> generates results that independent apps simply cannot match.
                                </p>
                            </div>
                        </div>

                        {/* Search Engine Optimization / AEO Deep Content */}
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-8">
                            <div className="flex items-center gap-2 text-zinc-400 font-bold text-xs uppercase tracking-[0.2em]">
                                <Gauge className="w-4 h-4 text-[#FF7404]" />
                                Technical Performance Index
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-white font-bold text-xl">How does AI-driven revenue automation impact dealership valuation?</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Strategic GMs use AutoMaster to build <strong>predictable, recurring revenue streams</strong> from their existing first-party data. By reducing dependency on high-cost third-party leads and increasing asset turnover (Total Turn Rate), the dealership increases its net operating income (NOI) without increasing overhead, leading to higher enterprise valuation during acquisitions or internal assessments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SEO Strengthening: Link to Orphan Page */}
            <div className="py-12 bg-[#020202] border-y border-white/5">
                <div className="container px-4 mx-auto text-center">
                    <a
                        href="/blog/boost-dealership-sales-with-automaster-suite"
                        className="text-[10px] font-bold text-white/20 uppercase tracking-[0.4em] hover:text-[#FF7404] transition-colors duration-300 inline-flex items-center gap-4"
                    >
                        <Zap className="w-3 h-3" />
                        Intelligence Report: Boosting Sales with The AutoMaster Suite
                        <Zap className="w-3 h-3" />
                    </a>
                </div>
            </div>



            {/* 5. FINAL CTA */}
            <section className="py-24 bg-[#050505] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">
                            The Future of <br />
                            <span className="text-[#FF7404]">Retail Automotive.</span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                            Don't just buy a tool. Install a revenue ecosystem that grows with your dealership.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-5 justify-center">
                            <Link
                                href="/book-demo"
                                className="px-12 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black text-xl rounded-2xl transition-all shadow-[0_20px_40px_-5px_rgba(255,116,4,0.3)]"
                            >
                                Request Suite Demo
                            </Link>
                        </div>
                        <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale">
                            <CheckCircle2 className="w-5 h-5 text-white" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">Full API Access Included</span>
                            <CheckCircle2 className="w-5 h-5 text-white" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white">SOC-2 Type II Compliant</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
