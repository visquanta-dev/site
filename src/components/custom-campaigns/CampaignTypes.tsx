'use client';

import { motion } from 'framer-motion';
import { ArrowRightLeft, BarChart2, Megaphone, Settings2, Target, Timer, ArrowUpRight } from 'lucide-react';

const campaigns = [
    {
        icon: Target,
        title: "Model-Specific Offer",
        desc: "Targeted incentives for specific VIN sets.",
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Timer,
        title: "Aged Inventory Push",
        desc: "Aggressive moves on 60+ day units.",
        color: "from-[#FF7404] to-[#FF9040]"
    },
    {
        icon: ArrowRightLeft,
        title: "Lease Pull-Ahead",
        desc: "Upgrade eligible lessees early.",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: BarChart2,
        title: "Equity Mining",
        desc: "Activate owners in a positive position.",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Settings2,
        title: "Service Special",
        desc: "Drive ROs during slow periods.",
        color: "from-[#FF7404] to-[#FF8A3D]"
    },
    {
        icon: Megaphone,
        title: "New Event",
        desc: "VIP sales and holiday events.",
        color: "from-yellow-500 to-orange-500"
    }
];

export default function CampaignTypes() {
    return (
        <section className="py-24 bg-[#020202] relative z-10 overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
                <div className="mb-16 md:flex md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Launch any campaign type.</h2>
                        <p className="text-lg text-white/50">We build the assets. You approve the send. Our system handles the complexity of segmentation and delivery.</p>
                    </div>
                    <div className="hidden md:block">
                        <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10 text-xs font-bold text-white/70 uppercase tracking-widest">
                            Full Service Library
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {campaigns.map((camp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 hover:border-[#FF7404]/50 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,116,4,0.15)] overflow-hidden"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${camp.color} p-[1px]`}>
                                        <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                                            <camp.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    <ArrowUpRight className="w-6 h-6 text-white/20 group-hover:text-[#FF7404] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>

                                <div className="flex flex-wrap items-center gap-3 mb-3">
                                    <h3 className="text-xl font-bold text-white group-hover:text-[#FF7404] transition-colors">{camp.title}</h3>
                                    <div className="inline-flex items-center gap-2 px-2 py-1 bg-white/5 border border-white/10 rounded-full group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/30 transition-colors">
                                        <div className="w-1 h-1 rounded-full bg-[#FF7404] animate-pulse" />
                                        <span className="text-[9px] uppercase tracking-widest text-white/50 font-bold group-hover:text-[#FF7404] transition-colors">Designed to book</span>
                                    </div>
                                </div>
                                <p className="text-base text-white/60 leading-relaxed">{camp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
