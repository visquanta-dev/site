'use client';

import { motion } from 'framer-motion';
import { Download, Bot, RefreshCw, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
    {
        number: "01",
        title: "One-Click Installation",
        description: "Add a single line of code to your website header. Compatible with Dealer.com, DealerOn, Wordpress, and all major platforms.",
        icon: Download
    },
    {
        number: "02",
        title: "AI Instantly Engages",
        description: "The moment a visitor lands on your site, our AI greets them, answers questions about inventory, and qualifies their intent.",
        icon: Bot
    },
    {
        number: "03",
        title: "Seamless Handoff",
        description: "Qualified leads and booked appointments are instantly pushed to your CRM. Your team takes over when the deal is hot.",
        icon: RefreshCw
    }
];

export default function HowItWorks() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[#FF7404]/5 blur-[100px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                            Up and Running in <br />
                            <span className="text-[#FF7404]">Less Than 5 Minutes</span>
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 leading-relaxed max-w-lg">
                            We've made implementation effortless. No complex integrations, no downtime, and no learning curve for your team.
                        </p>

                        <Link href="/book-demo" className="inline-flex items-center gap-3 text-[#FF7404] font-bold hover:text-white transition-colors group">
                            Start Your Free Trial
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="space-y-8">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                                viewport={{ once: true }}
                                className="flex gap-6 p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:bg-white/[0.05] transition-colors group"
                            >
                                <div className="shrink-0 relative">
                                    <div className="w-14 h-14 rounded-2xl bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center group-hover:bg-[#FF7404] group-hover:border-[#FF7404] transition-all duration-300">
                                        <step.icon className="w-6 h-6 text-[#FF7404] group-hover:text-black transition-colors" />
                                    </div>
                                    <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[10px] font-bold text-zinc-500">
                                        {step.number}
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
