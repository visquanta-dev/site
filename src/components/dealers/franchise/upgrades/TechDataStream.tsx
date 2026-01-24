'use client';

import { motion } from 'framer-motion';
import { Zap, RefreshCw, Phone, Star, MessageSquare, Terminal, Cpu, Activity, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const solutions = [
    {
        id: '01',
        title: "Speed-to-Lead",
        status: "ACTIVE",
        ping: "14ms",
        desc: "Engagement <60s",
        icon: Zap,
        link: "/solutions/speed-to-lead",
    },
    {
        id: '02',
        title: "Lead Reactivation",
        status: "MINING",
        ping: "24ms",
        desc: "CRM Recovery Protocol",
        icon: RefreshCw,
        link: "/solutions/lead-reactivation",
    },
    {
        id: '03',
        title: "Service Voice AI",
        status: "LISTENING",
        ping: "12ms",
        desc: "Inbound Call Routing",
        icon: Phone,
        link: "/solutions/voice-ai",
    },
    {
        id: '04',
        title: "Reputation Guard",
        status: "MONITORING",
        ping: "45ms",
        desc: "CSI Protection Layer",
        icon: Star,
        link: "/solutions/reputation",
    },
    {
        id: '05',
        title: "Web Concierge",
        status: "ONLINE",
        ping: "08ms",
        desc: "Traffic Conversion",
        icon: MessageSquare,
        link: "/solutions/web-concierge",
    }
];

export default function TechDataStream() {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <section className="py-24 bg-[#020202] font-mono">
            <div className="container px-4 mx-auto max-w-5xl">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#FF7404]/10 border border-[#FF7404]/30 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest">
                        <Terminal className="w-3 h-3" />
                        Option 3 :: System Modules
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
                        SYSTEM <span className="text-[#FF7404]">ARCHI_TECTURE</span>
                    </h2>
                    <p className="text-zinc-500 text-sm tracking-wide max-w-md mx-auto">
                        // INITIALIZING ENTERPRISE MODULES...
                        <br />
                        // SELECT MODULE TO EXPAND DETAILS
                    </p>
                </div>

                <div className="grid lg:grid-cols-1 border-t border-white/10">
                    {solutions.map((sol) => (
                        <Link href={sol.link} key={sol.id}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                onHoverStart={() => setHovered(sol.id)}
                                onHoverEnd={() => setHovered(null)}
                                className="group relative border-b border-white/10 bg-black hover:bg-[#FF7404]/5 transition-colors duration-200 overflow-hidden"
                            >
                                <div className="relative z-10 flex flex-col md:flex-row items-center py-6 px-4 md:px-8 gap-6 md:gap-12">
                                    {/* ID & Status */}
                                    <div className="flex items-center gap-6 w-full md:w-auto">
                                        <div className="text-[#FF7404] text-xs opacity-50">[{sol.id}]</div>
                                        <div className={`text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 ${hovered === sol.id ? 'text-[#FF7404] border-[#FF7404]/30' : 'text-zinc-500'
                                            }`}>
                                            {sol.status}
                                        </div>
                                    </div>

                                    {/* Main Title */}
                                    <div className="flex-1 w-full md:w-auto flex items-center gap-4">
                                        <div className={`p-2 rounded bg-white/5 border border-white/10 transition-colors ${hovered === sol.id ? 'bg-[#FF7404] text-black border-[#FF7404]' : 'text-zinc-400'
                                            }`}>
                                            <sol.icon className="w-5 h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF7404] transition-colors">{sol.title}</h3>
                                            <div className="text-xs text-zinc-600 hidden md:block">Process:: {sol.desc}</div>
                                        </div>
                                    </div>

                                    {/* Metrics / Tech Details */}
                                    <div className="hidden md:flex items-center gap-12 text-zinc-600 text-xs">
                                        <div className="flex items-center gap-2">
                                            <Activity className="w-3 h-3" />
                                            <span>LATENCY: {sol.ping}</span>
                                        </div>
                                        <div className="flex items-center gap-2 w-24">
                                            <Cpu className="w-3 h-3" />
                                            <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                                                <div className="h-full bg-[#FF7404] w-[60%] animate-pulse" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="md:pl-8">
                                        <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${hovered === sol.id ? 'text-[#FF7404] translate-x-1' : 'text-zinc-700'
                                            }`} />
                                    </div>
                                </div>

                                {/* Scanline Effect */}
                                {hovered === sol.id && (
                                    <motion.div
                                        layoutId="scanline"
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF7404]/5 to-transparent skew-x-12 pointer-events-none"
                                        initial={{ x: '-100%' }}
                                        animate={{ x: '200%' }}
                                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                    />
                                )}
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
