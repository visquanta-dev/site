'use client';

import { motion } from 'framer-motion';
import { Clock, Globe, MessageSquare, Bell, BarChart3, Shield } from 'lucide-react';

const features = [
    {
        title: "72-Hour Purchase Review Request",
        desc: "Automated conversational SMS prompts sent exactly 72 hours after vehicle delivery for maximum impact.",
        icon: Clock
    },
    {
        title: "Multi-Platform Monitoring",
        desc: "A unified workbench to view and manage your reputation across Google, Facebook, and DealerRater.",
        icon: Globe
    },
    {
        title: "Response Consistency",
        desc: "Ensure every buyer receives a professional, brand-aligned response within minutes of posting.",
        icon: MessageSquare
    },
    {
        title: "Negative Review Escalation",
        desc: "Immediate SMS/Email alerts to owners and managers when low scores are detected.",
        icon: Bell
    },
    {
        title: "Reporting and Visibility",
        desc: "Detailed insights into review growth, CSI trends, and resolution speed across your groups.",
        icon: BarChart3
    },
    {
        title: "Brand-Safe Controls",
        desc: "Approval workflows and role-based access to protect your public response quality and tone.",
        icon: Shield
    }
];

export default function FeaturesGrid() {
    return (
        <section className="py-24 bg-[#020202]">
            <div className="container-wide">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl font-bold text-white mb-4">Enterprise-Grade Controls</h2>
                    <p className="text-white/40">Operationally focused features designed for dealership workflows and multi-location groups.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-[#FF7404]/30 transition-all duration-500 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/20 transition-all duration-500">
                                <feature.icon className="w-5 h-5 text-white/60 group-hover:text-[#FF7404] transition-colors" />
                            </div>

                            <h3 className="text-lg font-bold text-white mb-3 leading-tight">{feature.title}</h3>
                            <p className="text-sm text-white/40 leading-relaxed">{feature.desc}</p>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FF7404] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
