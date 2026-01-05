'use client';

import { motion } from 'framer-motion';

const metrics = [
    {
        value: "+0.6",
        label: "Avg CSI Score Increase",
        sub: "90-day framing",
        prefix: "",
        suffix: ""
    },
    {
        value: "75",
        label: "Review Growth",
        sub: "Consistent velocity",
        prefix: "",
        suffix: "%"
    },
    {
        value: "60",
        label: "Conversations Per Event",
        sub: "Response speed",
        prefix: "",
        suffix: "s"
    },
    {
        value: "95",
        label: "Event Engagement",
        sub: "Private resolution",
        prefix: "",
        suffix: "%"
    }
];

export default function MetricsBand() {
    return (
        <section className="py-20 bg-[#050505] border-y border-white/5 relative overflow-hidden group">
            {/* Dynamic Background Polish */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-1/4 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent" />
                <div className="absolute bottom-0 right-1/4 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-[#FF7404]/50 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#FF740405,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                            className="text-center group/item"
                        >
                            <div className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter italic flex items-center justify-center gap-1 group-hover/item:text-[#FF7404] transition-colors duration-500">
                                <span className="opacity-40 text-xl md:text-2xl not-italic mb-auto mt-2">{metric.prefix}</span>
                                {metric.value}
                                <span className="opacity-40 text-xl md:text-2xl not-italic mb-auto mt-2">{metric.suffix}</span>
                            </div>
                            <div className="space-y-2">
                                <div className="text-[10px] font-black text-[#FF7404] uppercase tracking-[0.4em] leading-tight">
                                    {metric.label}
                                </div>
                                <div className="text-[9px] text-white/20 font-black uppercase tracking-[0.25em] italic">
                                    — {metric.sub} —
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
