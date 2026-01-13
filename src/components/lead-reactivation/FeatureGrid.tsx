'use client';

import { motion } from 'framer-motion';
import { Calendar, Eye, MessageSquare, Moon, Target, Users } from 'lucide-react';

const agents = [
    {
        id: 1,
        name: "The Night Watchman",
        role: "After-Hours Capture",
        desc: "While your showroom is locked, this agent patrols your CRM. It instantly engages 100% of leads that come in between 8 PM and 8 AM, ensuring no opportunity wakes up cold.",
        icon: Moon,
        color: "#4f46e5" // Indigo for night
    },
    {
        id: 2,
        name: "The SMS Sniper",
        role: "Speed-to-Lead",
        desc: "Responds in < 2 seconds. Cuts through the noise with hyper-personalized texts that feel human. It qualifies intent before your sales team even opens the lead card.",
        icon: Target,
        color: "#FF7404" // Orange for action
    },
    {
        id: 3,
        name: "The Appointment Setter",
        role: "Conversion Bot",
        desc: "It doesn't just chat; it closes. Integrated directly with your calendar, it negotiates times, confirms slots, and locks in showroom visits automatically.",
        icon: Calendar,
        color: "#10b981" // Green for go
    }
];

export default function FeatureGrid() {
    return (
        <section className="py-32 bg-black relative">
            <div className="container-wide">

                <div className="mb-20 max-w-2xl">
                    <h2 className="text-4xl font-bold text-white mb-6">Specialized Intelligence.</h2>
                    <p className="text-white/60 text-lg">
                        We don't sell "features." We deploy specialized autonomous agents that handle specific revenue-critical tasks better than any human can.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {agents.map((agent, i) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            {/* Holographic Border Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />

                            <div className="relative h-full bg-[#080808] border border-white/10 rounded-2xl p-8 hover:border-[#FF7404]/50 transition-colors duration-500 overflow-hidden">

                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,116,4,0.05),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Header */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404] transition-all duration-300">
                                        <agent.icon className="w-6 h-6 text-white/50 group-hover:text-[#FF7404] transition-colors" />
                                    </div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/30 border border-white/10 px-2 py-1 rounded">
                                        Agent 0{agent.id}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF7404] transition-colors">{agent.name}</h3>
                                <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-6">{agent.role}</div>

                                <p className="text-white/60 leading-relaxed text-sm">
                                    {agent.desc}
                                </p>

                                {/* Active Status */}
                                <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                    <span className="text-xs font-mono text-emerald-500/80">Online & Listening</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
