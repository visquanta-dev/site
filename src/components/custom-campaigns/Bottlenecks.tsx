'use client';

import { motion } from 'framer-motion';
import { AlertCircle, XCircle } from 'lucide-react';

const bottlenecks = [
    { title: "Creative Bottlenecks", desc: "Manual segmentation delays campaign launch by days." },
    { title: "Data Latency", desc: "Cleaning CRM lists requires significant human capital." },
    { title: "Response Overload", desc: "Inbound volume exceeds available BDC bandwidth." },
    { title: "Coverage Gaps", desc: "High-intent replies outside business hours are lost." },
    { title: "Process Fatigue", desc: "Repetitive manual outreach degrades agent performance." },
    { title: "Conversion Friction", desc: "Reliance on phone tag instead of direct booking." },
];

export default function Bottlenecks() {
    return (
        <section className="py-24 bg-[#050505] relative z-10 border-y border-white/5 overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-[1200px] relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Panel: Context */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full mb-8">
                            <AlertCircle className="w-4 h-4 text-red-500" />
                            <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Operational Constraints</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why legacy processes <br /><span className="text-red-500">fail at scale.</span></h2>
                        <p className="text-lg text-white/60 mb-8 leading-relaxed">
                            Traditional dealership workflows are not architected for high-volume activation. As outreach scales, operational friction compounds exponentially.
                        </p>

                        <div className="p-6 bg-red-500/5 border border-red-500/10 rounded-2xl">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-red-400 uppercase tracking-widest">Capacity Utilization</span>
                                <span className="text-xs font-bold text-red-500 uppercase tracking-widest">Overloaded</span>
                            </div>
                            <div className="h-2 bg-red-500/10 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    whileInView={{ width: "95%" }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    className="h-full bg-red-500"
                                />
                            </div>
                            <div className="mt-2 text-xs text-red-400/60 font-mono">Manual workflows break past 500 leads/month.</div>
                        </div>
                    </div>

                    {/* Right Panel: Friction List */}
                    <div className="bg-[#050505] border border-white/10 rounded-3xl p-2">
                        {bottlenecks.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-start gap-4 p-4 hover:bg-white/5 rounded-2xl transition-colors cursor-default"
                            >
                                <div className="mt-1 w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center border border-red-500/20 group-hover:bg-red-500 group-hover:text-black transition-colors shrink-0">
                                    <XCircle className="w-4 h-4 text-red-500 group-hover:text-black transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-base font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{item.title}</h3>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
