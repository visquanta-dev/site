'use client';

import { motion } from 'framer-motion';
import { HardDrive, History, LayoutGrid, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        step: "01",
        title: "API Authorization",
        desc: "Secure, one-click connection to your Group CRM and DMS provider via encrypted tunnel.",
        icon: HardDrive,
        duration: "Hour 0-2"
    },
    {
        step: "02",
        title: "Portfolio Audit",
        desc: "AI scans dormant lead volume across all rooftops to ID 'Instant ROI' opportunities.",
        icon: History,
        duration: "Hour 2-6"
    },
    {
        step: "03",
        title: "Logic Mapping",
        desc: "We map store-level hours, specific offers, and staffing to the master group playbook.",
        icon: LayoutGrid,
        duration: "Hour 6-12"
    },
    {
        step: "04",
        title: "Live Deployment",
        desc: "BDC relief begins. Leads are captured, recovered, and scheduled 24/7 immediately.",
        icon: Zap,
        duration: "Hour 24"
    }
];

export default function ScalingTimeline() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-50" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-bold uppercase tracking-widest mb-6 backdrop-blur-md">
                        <Zap className="w-3 h-3" />
                        Rapid Deployment
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                        The <span className="text-[#FF7404]">24-Hour</span> Rollout.
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
                        We've engineered our onboarding to match the speed of retail. Go from authorization to active revenue recovery in a single day.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-[48px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block" />

                    <div className="grid lg:grid-cols-4 gap-8">
                        {steps.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="relative group"
                            >
                                {/* Step Marker */}
                                <div className="w-24 h-24 mx-auto lg:mx-0 bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col items-center justify-center relative z-10 group-hover:border-[#FF7404]/50 group-hover:shadow-[0_0_30px_-10px_rgba(255,116,4,0.3)] transition-all duration-300 mb-8">
                                    <item.icon className="w-8 h-8 text-zinc-500 group-hover:text-[#FF7404] transition-colors duration-300 mb-2" />
                                    <div className="text-[10px] font-black text-white/30 group-hover:text-white transition-colors">{item.duration}</div>
                                </div>

                                <div className="text-center lg:text-left px-4 lg:px-0">
                                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                                        <span className="text-[#FF7404] font-black text-sm uppercase tracking-widest">Step {item.step}</span>
                                        <div className="h-px w-8 bg-[#FF7404]/30" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed tracking-wide">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
