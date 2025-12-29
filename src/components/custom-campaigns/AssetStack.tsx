'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Layers } from 'lucide-react';

const checklist = [
    "Manager Special Structuring",
    "High-Converting Word-tracks",
    "DMS List Cleaning & Mining",
    "AI BDC Coverage",
    "Direct-to-CRM Booking",
    "TCPA & DNC Protection"
];

export default function AssetStack() {
    return (
        <section className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-6 max-w-[1200px]">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Visual Stack */}
                    <div className="relative h-[400px] flex items-center justify-center">
                        {[
                            { color: 'bg-[#FF7404]', rotate: '-6deg', z: 10, offset: '0px' },
                            { color: 'bg-white', rotate: '-3deg', z: 5, offset: '10px' },
                            { color: 'bg-[#333]', rotate: '0deg', z: 0, offset: '20px' },
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className={`absolute w-64 h-80 rounded-2xl shadow-2xl border border-white/10 flex flex-col p-6 ${card.color}`}
                                style={{
                                    zIndex: card.z,
                                    transform: `rotate(${card.rotate}) translate(${card.offset}, ${card.offset})`
                                }}
                            >
                                <div className={`w-12 h-12 rounded-full mb-4 opacity-20 ${card.color === 'bg-[#333]' ? 'bg-white' : 'bg-black'}`} />
                                <div className={`h-4 w-3/4 rounded mb-2 opacity-20 ${card.color === 'bg-[#333]' ? 'bg-white' : 'bg-black'}`} />
                                <div className={`h-4 w-1/2 rounded mb-auto opacity-20 ${card.color === 'bg-[#333]' ? 'bg-white' : 'bg-black'}`} />

                                <div className={`mt-auto text-sm font-bold uppercase tracking-widest opacity-40 ${card.color === 'bg-[#333]' ? 'text-white' : 'text-black'}`}>
                                    Asset Kit 0{i + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right Checklist */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6">
                            <Layers className="w-4 h-4 text-white" />
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Done-For-You Build</span>
                        </div>
                        <h2 className="text-4xl font-bold text-white mb-6">Everything you need to launch.</h2>
                        <p className="text-lg text-white/60 mb-10">
                            We don't just give you a tool. We build the entire machine for every single campaign you run.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-4">
                            {checklist.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 bg-white/[0.02] p-3 rounded-lg border border-white/5"
                                >
                                    <CheckCircle className="w-5 h-5 text-[#FF7404]" />
                                    <span className="text-sm font-medium text-white/80">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
