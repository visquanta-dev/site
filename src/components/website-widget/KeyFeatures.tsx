'use client';

import { motion } from 'framer-motion';
import { Zap, BrainCircuit, CalendarCheck, Database, MessagesSquare, BarChart3 } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';

const features = [
    {
        icon: Zap,
        title: 'Instant Response',
        description: 'Engage visitors within 2 seconds. No more waiting for "the next available agent".'
    },
    {
        icon: BrainCircuit,
        title: 'Smart Qualification',
        description: 'Our AI asks the right questions to qualify leads before they ever reach your team.'
    },
    {
        icon: CalendarCheck,
        title: 'Direct Booking',
        description: 'Qualified leads can book test drives and service appointments directly into your calendar.'
    },
    {
        icon: Database,
        title: 'CRM Integration',
        description: 'Seamlessly syncs every conversation, contact detail, and appointment to your CRM.'
    },
    {
        icon: MessagesSquare,
        title: 'Natural Conversation',
        description: 'Uses advanced LLMs to have human-like conversations, not rigid decision trees.'
    },
    {
        icon: BarChart3,
        title: 'Actionable Insights',
        description: 'Dashboard analytics show you exactly which pages and sources are driving the most engaged leads.'
    }
];

export default function KeyFeatures() {
    return (
        <section className="py-24 bg-[#020202] relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FF7404]/5 via-transparent to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-md mb-6">
                        <span className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Why It Works</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        More Than Just a <span className="text-[#FF7404]">Chatbot</span>
                    </h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        A complete lead capture system that works 24/7/365 to fill your pipeline.
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
                            <SpotlightCard className="h-full bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-colors">
                                <div className="w-12 h-12 rounded-2xl bg-[#FF7404]/10 flex items-center justify-center mb-6">
                                    <feature.icon className="w-6 h-6 text-[#FF7404]" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">
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
