'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Globe, Lock, Bell, MessageSquare, ShieldAlert } from 'lucide-react';

export default function RecoveryWorkflow() {
    return (
        <section className="py-24 bg-[#020202]">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Negative Review Recovery</h2>
                    <p className="text-white/40 max-w-2xl mx-auto">Dual-channel processing protects your store's public image while resolving buyer frustration in private.</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto relative">
                    {/* Decorative Center Line */}
                    <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2" />

                    {/* Public Workflow */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-white/[0.01] border border-white/5 rounded-[3rem] transition-all duration-500 group-hover:bg-white/[0.03] group-hover:border-white/10" />

                        <div className="relative z-10 p-10 lg:p-14">
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center shadow-xl">
                                    <Globe className="w-6 h-6 text-white/40 group-hover:text-white transition-colors duration-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white italic tracking-tight italic">Public</h3>
                                    <div className="text-[10px] font-black text-[#FF7404] uppercase tracking-[0.3em]">Channel Preservation</div>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { step: "Brand-Safe Reply", desc: "Templed response that shows potential buyers you care about every customer." },
                                    { step: "Acknowledge Speed", desc: "Commitment to public transparency and speed-to-resolution." },
                                    { step: "Bridge to Private", desc: "Invite buyer into a non-public channel to protect specific purchase data." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group/item">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-black text-white/20 group-hover/item:text-white group-hover/item:border-white/30 transition-all duration-500">
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <div className="text-sm font-black text-white/80 mb-2 uppercase tracking-[0.15em]">{item.step}</div>
                                            <p className="text-xs text-white/30 leading-relaxed max-w-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em] mb-2">Primary Outcome</div>
                                    <div className="text-sm text-[#FF7404] font-black italic tracking-wide group-hover:translate-x-2 transition-transform duration-500">Public Trust Reinforced.</div>
                                </div>
                                <ArrowRight className="w-5 h-5 text-white/10 group-hover:text-[#FF7404] transition-colors" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Private Workflow */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="group relative"
                    >
                        <div className="absolute inset-0 bg-[#FF7404]/5 backdrop-blur-xl border border-[#FF7404]/30 rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(255,116,4,0.15)] transition-all duration-500 group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/50" />

                        <div className="relative z-10 p-10 lg:p-14">
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FF7404] flex items-center justify-center shadow-[0_10px_20px_-5px_#FF7404]">
                                        <Lock className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white italic tracking-tight italic">Private</h3>
                                        <div className="text-[10px] font-black text-[#FF7404] uppercase tracking-[0.3em]">Resolution Logic</div>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full">
                                    <span className="text-[9px] font-black text-red-500 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                                        Priority Alert
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-8">
                                {[
                                    { step: "Immediate Escalation", desc: "Owner or GM is notified via SMS/Email within 60 seconds of review posting.", active: true },
                                    { step: "Contextual Brief", desc: "Internal system matches review to purchase history and service advisor notes." },
                                    { step: "1-on-1 Dialogue", desc: "Direct conversational SMS resolution to convert detractors into lifelong customers." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group/item">
                                        <div className={`flex-shrink-0 w-8 h-8 rounded-xl ${item.active ? 'bg-[#FF7404] text-black' : 'bg-white/10 text-white/50 border border-white/20'} flex items-center justify-center text-[10px] font-black transition-all duration-500`}>
                                            0{i + 1}
                                        </div>
                                        <div>
                                            <div className={`text-sm font-black ${item.active ? 'text-[#FF7404]' : 'text-white/80'} mb-2 uppercase tracking-[0.15em]`}>{item.step}</div>
                                            <p className="text-xs text-white/40 leading-relaxed max-w-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between">
                                <div>
                                    <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em] mb-2">Strategic Benefit</div>
                                    <div className="text-sm text-white font-black italic tracking-wide group-hover:translate-x-2 transition-transform duration-500">Protects CSI & OEM Score.</div>
                                </div>
                                <ShieldAlert className="w-6 h-6 text-[#FF7404] animate-bounce" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 flex items-center justify-center gap-12 text-white/20 select-none opacity-50 grayscale">
                    <Globe className="w-12 h-12" />
                    <MessageSquare className="w-12 h-12" />
                    <ShieldAlert className="w-12 h-12 text-[#FF7404]" />
                    <Bell className="w-12 h-12" />
                </div>
            </div>
        </section>
    );
}
