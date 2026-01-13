'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, MessageCircle, Lock, Users, Repeat } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

const features = [
    {
        icon: Smartphone,
        title: 'Text-to-Phone Handoff',
        description: 'The widget prioritizes getting the mobile number immediately, moving the chat from a temporary browser window to a permanent SMS thread.'
    },
    {
        icon: Zap,
        title: '98% Open Rates',
        description: 'Emails get ignored. Browser tabs get closed. SMS gets read within 90 seconds, almost every single time.'
    },
    {
        icon: Repeat,
        title: 'Persistent Connection',
        description: 'Unlike web chat, you can re-engage the customer tomorrow, next week, or next month. The channel stays open forever.'
    },
    {
        icon: MessageCircle,
        title: 'Unified Inbox',
        description: 'Your team manages all SMS conversations from a single dashboard, or directly from their own mobile devices.'
    },
    {
        icon: Users,
        title: 'AI Appointment Setter',
        description: 'Our AI stays in the text thread, nurturing the lead and booking appointments while your team sleeps.'
    },
    {
        icon: Lock,
        title: 'TCPA Compliant',
        description: 'Built-in compliance checks ensure you have the proper opt-ins before messaging any customer.'
    }
];

export default function KeyFeatures() {
    return (
        <section className="py-24 bg-[#020202] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-[#000000] to-[#000000] opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
                        <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Why SMS Wins</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
                        Stop Losing Leads to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">Closed Browser Tabs</span>
                    </h2>
                    <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        Web chat is fragile. One click and the lead is gone. SMS is permanent. Own the device, not just the session.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <SpotlightCard className="h-full bg-black border border-zinc-800 rounded-3xl p-8 hover:border-[#FF7404]/30 transition-all duration-500 group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6 group-hover:bg-[#FF7404] group-hover:border-[#FF7404] transition-all duration-300">
                                    <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors">{feature.title}</h3>
                                <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-400 transition-colors">
                                    {feature.description}
                                </p>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
