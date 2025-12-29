'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Database, MessageSquare, CalendarCheck, Send, PenTool, Target } from 'lucide-react';

const steps = [
    { icon: Target, label: "Goal", title: "Goal Selected" },
    { icon: PenTool, label: "Build", title: "Asset Kit Built" },
    { icon: Database, label: "Data", title: "Contacts Loaded" },
    { icon: Send, label: "Deploy", title: "SMS Scale Send" },
    { icon: MessageSquare, label: "Engage", title: "Conversation AI" },
    { icon: CalendarCheck, label: "Convert", title: "Appt Booked" },
];

export default function SystemMap() {
    return (
        <section className="py-32 bg-[#020202] relative z-10 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Done-for-you execution.</h2>
                    <p className="text-lg text-white/50 max-w-2xl mx-auto">From raw data to confirmed appointment in one automated flow.</p>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 relative">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative z-10 flex flex-col items-center text-center group"
                            >
                                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                                <div className={`w-20 h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-8 relative z-10 transition-all duration-500 group-hover:bg-[#FF7404] group-hover:border-[#FF7404] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,116,4,0.4)]`}>
                                    <step.icon className="w-8 h-8 text-white/40 group-hover:text-black transition-colors duration-300" />
                                </div>

                                <div className="space-y-2">
                                    <span className="text-xs uppercase font-bold text-white/20 tracking-[0.2em] block group-hover:text-[#FF7404] transition-colors">Step 0{i + 1}</span>
                                    <h3 className="text-base font-bold text-white leading-tight group-hover:text-white transition-colors">{step.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
