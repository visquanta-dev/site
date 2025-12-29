'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, Send, MessageSquare, Check, ArrowRight } from 'lucide-react';

export default function RequestTimeline() {
    const steps = [
        {
            label: "Purchase",
            time: "T + 0:00",
            desc: "Buyer takes delivery of the vehicle.",
            icon: ShoppingBag,
            color: "bg-white/5 text-white/40"
        },
        {
            label: "The 72h Window",
            time: "3 Days Later",
            desc: "Optimal moment for post-sale reflection.",
            icon: Clock,
            color: "bg-[#FF7404]/10 text-[#FF7404]",
            highlight: true
        },
        {
            label: "Request Sent",
            time: "SMS Delivery",
            desc: "Conversational SMS system initiates contact.",
            icon: Send,
            color: "bg-white/5 text-white/40"
        },
        {
            label: "Review Posted",
            time: "Success",
            desc: "New public review strengthens your score.",
            icon: MessageSquare,
            color: "bg-green-500/10 text-green-400"
        }
    ];

    return (
        <section className="py-24 bg-[#030303] border-y border-white/5">
            <div className="container-wide text-center">
                <h2 className="text-3xl font-bold text-white mb-4">72-Hour Review Request Engine</h2>
                <p className="text-white/40 max-w-xl mx-auto mb-20 leading-relaxed">
                    Recency is as important as rating. Our engine sends requests at the physiological peak of customer satisfaction.
                </p>

                <div className="max-w-6xl mx-auto relative px-4">
                    {/* Timeline Line - Desktop */}
                    <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent hidden md:block" />

                    {/* Timeline Line - Mobile */}
                    <div className="absolute top-[40px] bottom-[40px] left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-[#FF7404]/30 to-transparent md:hidden" />

                    <div className="grid md:grid-cols-4 gap-12">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative z-10 group"
                            >
                                <div className={`w-20 h-20 rounded-[1.5rem] mx-auto mb-8 flex items-center justify-center border transition-all duration-500 group-hover:scale-110 ${step.highlight ? 'bg-[#FF7404] text-black border-transparent shadow-[0_15px_30px_-5px_#FF7404]' : 'bg-white/[0.03] text-white/40 border-white/10 backdrop-blur-md group-hover:border-white/30'}`}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                <h3 className={`text-xs font-black uppercase tracking-[0.2em] mb-2 transition-colors duration-500 ${step.highlight ? 'text-[#FF7404]' : 'text-white/80 group-hover:text-white'}`}>
                                    {step.label}
                                </h3>
                                <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.3em] mb-4 italic">
                                    {step.time}
                                </div>
                                <p className="text-[11px] text-white/30 leading-relaxed px-4 group-hover:text-white/50 transition-colors duration-500 font-medium">
                                    {step.desc}
                                </p>

                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-[36px] -right-6">
                                        <ArrowRight className="w-5 h-5 text-white/5 group-hover:text-[#FF7404] transition-colors duration-500" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 pt-16 border-t border-white/5 max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left">
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Velocity</div>
                            <p className="text-xs text-white/40 leading-relaxed">Ensures your "Most Recent" check on Google is always from this week.</p>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white mb-1">Authenticity</div>
                            <p className="text-xs text-white/40 leading-relaxed">Higher review depth with specific buyer names and purchase details.</p>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="text-2xl font-bold text-white mb-1">CSI Safety</div>
                            <p className="text-xs text-white/40 leading-relaxed">Allows time for post-sale hiccups to be handled before the public request.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
