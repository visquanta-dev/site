'use client';

import { motion } from 'framer-motion';
import { PhoneIncoming, Database, CalendarCheck, MessageSquare, Wrench } from 'lucide-react';

const steps = [
    {
        icon: PhoneIncoming,
        title: "Intelligent Intake",
        description: "AI answers instantly, identifying intent (Appointment, Status, Emergency) via natural language processing.",
        number: "01"
    },
    {
        icon: Database,
        title: "DMS Sync",
        description: "Deep integration with CDK, Reynolds, or Tekion to pull real-time vehicle data and warranty status.",
        number: "02"
    },
    {
        icon: CalendarCheck,
        title: "Smart Scheduling",
        description: "Checks shop capacity in Xtime/myKaarma and books directly into the advisor's active calendar.",
        number: "03"
    },
    {
        icon: MessageSquare,
        title: "Confirmation",
        description: "Customer gets an SMS confirmation. Advisor receives a full transcript and drafted Repair Order.",
        number: "04"
    }
];

export default function WorkflowSection() {
    return (
        <section className="py-32 bg-[#030303] relative border-t border-white/[0.05] overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#FF7404]/[0.02] rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6 backdrop-blur-md"
                    >
                        <Wrench className="w-3 h-3 text-[#FF7404]" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">System Architecture</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#ff9e4d]">Automation</span>
                    </h2>
                    <p className="text-white/40 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        A fully autonomous logistics chain that operates without human intervention.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6 relative">
                    {/* Connecting Data Line */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-[#FF7404] to-transparent opacity-50 animate-shimmer-fast" />
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="relative group pt-10"
                        >
                            {/* Connector Node */}
                            <div className="absolute top-[54px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#030303] border border-[#FF7404] rounded-full z-20 group-hover:scale-150 transition-transform duration-500 shadow-[0_0_10px_rgba(255,116,4,0.5)]" />

                            <div className="relative h-full text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] group-hover:bg-white/[0.04] group-hover:border-[#FF7404]/30 transition-all duration-500 backdrop-blur-sm overflow-hidden">
                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 group-hover:border-[#FF7404]/50 flex items-center justify-center transition-colors duration-500 mb-6 shadow-xl">
                                        <step.icon className="w-7 h-7 text-white/50 group-hover:text-[#FF7404] transition-colors duration-500" />
                                    </div>

                                    <div className="text-[#FF7404] font-mono text-xs font-bold mb-3 opacity-50">
                                        STEP {step.number}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>
                                    <p className="text-sm text-white/40 leading-relaxed font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
