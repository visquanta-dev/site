'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
    Building2,
    Users,
    Briefcase,
    Mail,
    ArrowRight,
    Target,
    Award,
    ShieldCheck,
    Globe,
    Cpu,
    Zap,
    Activity,
    MapPin
} from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

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

const companySections = [
    {
        id: 'about',
        title: "About VisQuanta",
        icon: Building2,
        desc: "The mission, the vision, and the operational philosophy driving the automotive industry's most advanced revenue engine.",
        link: "/about-visquanta",
        stat: "Est. 2023",
        color: "from-orange-500 to-red-600",
        size: "col-span-1 md:col-span-2" // Wide card
    },
    {
        id: 'team',
        title: "Executive Team",
        icon: Users,
        desc: "Meet the veterans and technologists behind the platform.",
        link: "/team",
        stat: "50+ Yrs Exp",
        color: "from-blue-500 to-cyan-500",
        size: "col-span-1"
    },
    {
        id: 'careers',
        title: "Careers / Talent",
        icon: Briefcase,
        desc: "Help us shape the future of dealership intelligence.",
        link: "/careers",
        stat: "Hiring Now",
        color: "from-emerald-500 to-green-500",
        size: "col-span-1"
    },
    {
        id: 'contact',
        title: "Contact Support",
        icon: Mail,
        desc: "Direct lines for sales, dealer support, and PR.",
        link: "/contact",
        stat: "24/7 Active",
        color: "from-purple-500 to-pink-500",
        size: "col-span-1 md:col-span-2" // Wide card
    }
];

export default function CompanyHubPage() {
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black">
            <Navigation />

            {/* 1. HERO: Integrated Ecosystem Style */}
            <section className="relative pt-40 pb-24 overflow-hidden min-h-[60vh] flex items-center">
                {/* Visual Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#FF7404]/10 rounded-full blur-[120px]" />
                    <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-500/[0.05] rounded-full blur-[100px]" />
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] opacity-[0.2]" />
                </div>

                <div className="container px-4 mx-auto relative z-10 text-center">
                    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF7404]"></span>
                            </span>
                            Company Hub // Corporate Directory
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
                            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9E40] to-white">Engine</span> Behind<br />
                            Modern Retail.
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light mb-12">
                            We are a team of automotive veterans and technologists dedicated to solving the industry's fragmentation problem.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* 2. BENTO DIRECTORY GRID */}
            <section className="py-20 relative z-10 border-t border-white/5 bg-[#030303]">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {companySections.map((section) => (
                            <motion.div
                                key={section.id}
                                onMouseEnter={() => setHoveredSection(section.id)}
                                onMouseLeave={() => setHoveredSection(null)}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`group relative bg-[#080808] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:border-white/10 hover:shadow-2xl ${section.size}`}
                            >
                                {/* Background Glow */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none`} />

                                <div className="absolute top-8 right-8">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-zinc-500 text-[10px] font-mono uppercase tracking-widest group-hover:text-white group-hover:bg-white/10 transition-colors">
                                        {section.stat}
                                    </div>
                                </div>

                                <div className="relative z-10 flex flex-col h-full justify-between min-h-[220px]">
                                    <div>
                                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white transition-all duration-500`}>
                                            <section.icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-[#FF7404] transition-colors">{section.title}</h3>
                                        <p className="text-zinc-500 text-sm leading-relaxed max-w-sm group-hover:text-zinc-300 transition-colors">
                                            {section.desc}
                                        </p>
                                    </div>

                                    <div className="flex justify-end pt-8">
                                        <Link
                                            href={section.link}
                                            className="w-12 h-12 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white group-hover:bg-[#FF7404] group-hover:text-black transition-all duration-300"
                                        >
                                            <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CULTURE / DNA TERMINAL (Replacing Comparison Matrix) */}
            <section className="py-24 bg-[#020202] border-t border-white/5 relative overflow-hidden">
                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">

                        {/* Left: Text Content */}
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-6">
                                    <Cpu className="w-3 h-3" />
                                    Operating Principles
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight">
                                    Hardcoded <br />
                                    <span className="text-zinc-600">for</span> <span className="text-[#FF7404]">Success.</span>
                                </h2>
                                <p className="text-lg text-zinc-400 mb-10 leading-relaxed">
                                    We don't operate like a traditional software vendor. We function as a partner in your P&L. Our DNA is built on accountability, speed, and proven automotive outcomes.
                                </p>

                                <div className="space-y-6">
                                    {[
                                        { title: "Outcome Obsessed", desc: "We track our success in your ROI figures, not our feature releases.", icon: Target },
                                        { title: "Dealer Context", desc: "Built by car people. We know the difference between 'Sold' and 'Rolled'.", icon: ShieldCheck },
                                        { title: "Radical Ownership", desc: "If a lead drops, we find it. If a tool breaks, we fix it. No excuses.", icon: Award }
                                    ].map((principle, i) => (
                                        <div key={i} className="flex gap-4 group">
                                            <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-[#FF7404] shrink-0 font-bold group-hover:bg-[#FF7404] group-hover:text-black transition-colors">
                                                <principle.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1">{principle.title}</h4>
                                                <p className="text-zinc-500 text-sm leading-relaxed">{principle.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Visual Terminal */}
                        <div className="relative">
                            <div className="relative bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] p-8 aspect-square flex flex-col shadow-2xl overflow-hidden group">
                                {/* Gradient BG */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7404]/5 via-transparent to-purple-500/5 opacity-50" />
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]" />

                                {/* Header */}
                                <div className="flex items-center justify-between mb-8 relative z-10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-[10px] font-mono text-zinc-600 uppercase">visquanta_core_values_v2.json</div>
                                </div>

                                {/* Code/Metric Visual */}
                                <div className="space-y-4 font-mono text-xs relative z-10">
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-zinc-500 mb-2">// CURRENT_VELOCITY</div>
                                        <div className="flex justify-between items-end">
                                            <div className="text-white font-bold text-xl">120ms</div>
                                            <div className="text-emerald-500">OPTIMAL</div>
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-zinc-500 mb-2">// CLIENT_SATISFACTION</div>
                                        <div className="flex justify-between items-end">
                                            <div className="text-white font-bold text-xl">98.4%</div>
                                            <div className="text-emerald-500">RISING</div>
                                        </div>
                                        <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden">
                                            <div className="bg-[#FF7404] h-full w-[98%]" />
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                                        <div className="text-zinc-500 mb-2">// NETWORK_THROUGHPUT</div>
                                        <div className="flex justify-between items-end mb-1">
                                            <div className="text-white font-bold text-lg">SMS Volume</div>
                                            <div className="flex items-center gap-1 text-[#FF7404] font-bold">
                                                <Activity className="w-3 h-3" />
                                                <span>+11,852 / 24h</span>
                                            </div>
                                        </div>
                                        <div className="w-full bg-zinc-800 h-1 mt-3 rounded-full overflow-hidden relative">
                                            <div className="absolute inset-0 bg-white/10" />
                                            <motion.div
                                                animate={{ x: ['-100%', '100%'] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                                className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#FF7404] to-transparent"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Globe or Abstract Shape */}
                                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#FF7404] to-purple-600 rounded-full blur-[80px] opacity-20 group-hover:opacity-30 transition-opacity duration-700" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. GLOBAL FOOTPRINT GRID */}
            <section className="py-24 bg-[#010101] border-t border-white/5">
                <div className="container px-4 mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Global Reach, Local Focus</h2>
                        <p className="text-zinc-500">VisQuanta operates distributed nodes to ensure maximum uptime for our dealer network.</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {['North America', 'Europe', 'Asia Pacific', 'Middle East'].map((region, i) => (
                            <div key={i} className="p-6 rounded-2xl bg-[#080808] border border-white/5 text-center group hover:border-[#FF7404]/30 transition-colors">
                                <Globe className="w-8 h-8 text-zinc-600 mx-auto mb-4 group-hover:text-[#FF7404] transition-colors" />
                                <div className="text-white font-bold mb-1">{region}</div>
                                <div className="text-xs text-zinc-500 flex items-center justify-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                    Active
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
