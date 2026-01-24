'use client';

import { motion } from 'framer-motion';
import { Zap, RefreshCw, Phone, Star, MessageSquare, ArrowUpRight, BarChart2 } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        id: 'speed',
        title: "Speed-to-Lead",
        metric: "<60s Response",
        desc: "24/7/365 engagement via SMS. Beat the competition to every customer.",
        icon: Zap,
        link: "/solutions/speed-to-lead",
        color: "from-orange-500/20 to-orange-900/5",
        colSpan: "lg:col-span-2"
    },
    {
        id: 'react',
        title: "Lead Reactivation",
        metric: "+15% Recovery",
        desc: "Mine your dormant CRM data for active buyers.",
        icon: RefreshCw,
        link: "/solutions/lead-reactivation",
        color: "from-blue-500/20 to-blue-900/5",
        colSpan: "lg:col-span-2"
    },
    {
        id: 'voice',
        title: "Service AI",
        metric: "100% Answer Rate",
        desc: "Never miss a service call.",
        icon: Phone,
        link: "/solutions/voice-ai",
        color: "from-purple-500/20 to-purple-900/5",
        colSpan: "lg:col-span-1"
    },
    {
        id: 'rep',
        title: "Reputation",
        metric: "4.8 Star Avg",
        desc: "Smart review management.",
        icon: Star,
        link: "/solutions/reputation",
        color: "from-green-500/20 to-green-900/5",
        colSpan: "lg:col-span-1"
    },
    {
        id: 'web',
        title: "Web Concierge",
        metric: "2x Conversion",
        desc: "Capture organic traffic.",
        icon: MessageSquare,
        link: "/solutions/web-concierge",
        color: "from-pink-500/20 to-pink-900/5",
        colSpan: "lg:col-span-2"
    }
];

export default function CinematicBento() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] font-medium uppercase tracking-widest mb-6">
                        Option 2
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">
                        Cinematic <span className="text-[#FF7404]">Bento Grid.</span>
                    </h2>
                    <p className="text-zinc-500 text-lg">
                        High-impact, magazine-style layout with rich gradients and bold typography.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${sol.colSpan} group relative min-h-[300px] rounded-3xl overflow-hidden bg-[#0A0A0A] border border-white/10 hover:border-white/20 transition-all duration-500`}
                        >
                            <Link href={sol.link} className="block h-full p-8 flex flex-col justify-between relative z-10">
                                <div className="flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/5 group-hover:scale-110 transition-transform">
                                        <sol.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-full bg-white/10">
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>

                                <div>
                                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <BarChart2 className="w-3 h-3" />
                                        {sol.metric}
                                    </div>
                                    <h3 className="text-3xl font-black text-white mb-3 tracking-tighter leading-[0.9] text-balance">
                                        {sol.title}
                                    </h3>
                                    <p className="text-white/60 text-sm font-medium loading-snug max-w-[90%]">
                                        {sol.desc}
                                    </p>
                                </div>
                            </Link>

                            {/* Background Gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${sol.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            {/* Noise Texture Overlay */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 pointer-events-none" />

                            {/* Inner Shadow/Gradient constantly visible */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
