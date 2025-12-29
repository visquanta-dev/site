'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { MessageSquare, Star, User, ExternalLink, ShieldCheck } from 'lucide-react';

import { GoogleLogo, FacebookLogo, DealerRaterLogo } from '@/components/brand-assets/PlatformLogos';

const platforms = [
    { id: 'google', label: 'Google', icon: GoogleLogo },
    { id: 'dealerrater', label: 'DealerRater', icon: DealerRaterLogo },
    { id: 'facebook', label: 'Facebook', icon: FacebookLogo }
];

const mockReviews = {
    google: [
        { name: "John Miller", text: "Great experience buying my new truck. The service was top-notch.", rating: 5, date: "2 hours ago" },
        { name: "Sarah Jenkins", text: "Process was fast and easy. Response from the team was immediate.", rating: 5, date: "Yesterday" }
    ],
    dealerrater: [
        { name: "Mike Ross", text: "The team here really understands dealership service. Highly recommend.", rating: 5, date: "3 days ago" }
    ],
    facebook: [
        { name: "Amanda Lee", text: "Super friendly staff and transparent pricing. Couldn't be happier.", rating: 5, date: "5 hours ago" }
    ]
};

export default function UnifiedWorkbench() {
    const [activePlatform, setActivePlatform] = useState('google');

    return (
        <section className="py-24 bg-[#020202] relative overflow-hidden">
            <div className="container-wide">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-lg mb-6">
                            <ShieldCheck className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Unified Workbench</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                            One Place. <br />
                            <span className="text-[#FF7404]">Every Review.</span>
                        </h2>
                        <p className="text-white/40 text-lg leading-relaxed mb-8">
                            No more jumping between tabs. Monitor, request, and respond to every buyer review from a single industrial workbench designed for speed and consistency.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Unified inbox for Google, Facebook, and DealerRater",
                                "Internal escalation for low-score reviews",
                                "Consistency in brand voice across all responses",
                                "CSI protection via private resolution workflows"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#FF7404]/10 flex items-center justify-center border border-[#FF7404]/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                                    </div>
                                    <span className="text-sm text-white/70 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Workbench Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        {/* Main Workbench Frame */}
                        <div className="bg-[#0a0a0a]/90 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,1)] overflow-hidden flex flex-col h-[600px]">

                            {/* Top Navigation Bar */}
                            <div className="bg-white/[0.03] p-6 flex items-center justify-between border-b border-white/5">
                                <div className="flex items-center gap-6">
                                    <div className="text-[10px] font-black text-[#FF7404] uppercase tracking-[0.3em]">Workbench.v2</div>
                                    <div className="h-4 w-px bg-white/10" />
                                    <div className="flex items-center gap-2">
                                        {platforms.map((p) => (
                                            <button
                                                key={p.id}
                                                onClick={() => setActivePlatform(p.id)}
                                                className={`flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-xl transition-all duration-300 ${activePlatform === p.id ? 'bg-white text-black' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
                                            >
                                                <p.icon className={`w-3 h-3 ${activePlatform === p.id ? 'text-black' : 'text-white/50'}`} />
                                                {p.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-1.5 opacity-40">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-5 h-5 rounded-full border border-[#0a0a0a] bg-white/10" />
                                        ))}
                                    </div>
                                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse" />
                                </div>
                            </div>

                            <div className="flex-1 flex overflow-hidden">
                                {/* Minimal Sidebar */}
                                <div className="w-16 border-r border-white/5 bg-black/20 flex flex-col items-center py-8 gap-8">
                                    <MessageSquare className="w-5 h-5 text-[#FF7404]" />
                                    <Star className="w-5 h-5 text-white/10" />
                                    <User className="w-5 h-5 text-white/10" />
                                    <div className="mt-auto">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF7404] to-[#FF8A3D]" />
                                    </div>
                                </div>

                                {/* Inbox Scroll Area */}
                                <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative">
                                    <div className="space-y-4">
                                        {(mockReviews as any)[activePlatform].map((review: any, i: number) => (
                                            <motion.div
                                                key={`${activePlatform}-${i}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.1 }}
                                                className="p-6 rounded-[1.5rem] bg-white/[0.02] border border-white/5 group hover:border-[#FF7404]/30 hover:bg-white/[0.04] transition-all duration-500 cursor-default relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                                <div className="flex items-center justify-between mb-4 relative z-10">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10">
                                                            <User className="w-5 h-5 text-white/40" />
                                                        </div>
                                                        <div>
                                                            <div className="text-xs font-black text-white uppercase tracking-wider">{review.name}</div>
                                                            <div className="text-[9px] text-[#FF7404] font-bold uppercase tracking-[0.1em] mt-0.5">{review.date}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-0.5">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star key={i} className={`w-3 h-3 ${i < review.rating ? 'text-[#FF7404] fill-[#FF7404]' : 'text-white/10'}`} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <p className="text-sm text-white/50 leading-relaxed mb-6 group-hover:text-white/70 transition-colors duration-500 italic relative z-10">"{review.text}"</p>

                                                <div className="flex items-center justify-between relative z-10">
                                                    <div className="flex gap-3">
                                                        <button className="px-5 py-2.5 bg-white text-black rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transform active:scale-95 transition-all">Reply</button>
                                                        <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white hover:bg-white/10 transition-all">Escalate</button>
                                                    </div>
                                                    <div className="flex items-center gap-1.5 opacity-20 group-hover:opacity-60 transition-opacity">
                                                        <ExternalLink className="w-3 h-3 text-white" />
                                                        <span className="text-[9px] font-bold text-white uppercase tracking-widest">Source</span>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Status Bar */}
                            <div className="bg-black p-4 flex items-center justify-between px-10 border-t border-white/5">
                                <div className="flex gap-10">
                                    <div className="flex flex-col">
                                        <span className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Global Rating</span>
                                        <span className="text-sm font-black text-white italic">4.82</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[8px] text-white/20 font-black uppercase tracking-[0.3em] mb-1">Pending Responses</span>
                                        <span className="text-sm font-black text-[#FF7404] italic">12</span>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                                    <span className="text-[8px] text-white/40 font-black uppercase tracking-[0.2em]">Verified Sync</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
