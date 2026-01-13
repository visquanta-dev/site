'use client';

import { motion } from 'framer-motion';
import { UserCheck, Award, TrendingUp, Key } from 'lucide-react';
import Link from 'next/link';

const roles = [
    {
        title: "Sales & BDC",
        description: "We've worked the phones. We know the difference between a real lead and a tire kicker."
    },
    {
        title: "Sales Management",
        description: "We've desked deals. We know how critical speed and context are to holding gross."
    },
    {
        title: "General Managers",
        description: "We've run stores. We understand P&L, absorption, and the bottom line impact of efficiency."
    }
];

export default function TeamExpertise() {
    return (
        <section className="py-28 bg-[#030303] relative border-t border-white/[0.05]">
            <div className="max-w-7xl mx-auto px-6">

                <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-[3rem] p-10 lg:p-20 border border-white/10 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,116,4,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-16">

                        <div className="space-y-8">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
                            >
                                Built by <span className="text-[#FF7404]">Car People</span>.<br />
                                For Car People.
                            </motion.h2>
                            <p className="text-xl text-white/60 leading-relaxed font-light">
                                VisQuanta isn't run by Silicon Valley software developers who have never set foot on a showroom floor. We are automotive veterans.
                            </p>

                            <div className="pt-8 space-y-6">
                                {roles.map((role, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.15 }}
                                        whileHover={{ scale: 1.02, x: 10, borderColor: "rgba(255, 116, 4, 0.3)" }}
                                        className="group relative flex items-start gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 overflow-hidden"
                                    >
                                        {/* Hover Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out pointer-events-none" />

                                        <div className="mt-1 relative">
                                            <div className="w-2 h-2 rounded-full bg-[#FF7404] group-hover:scale-150 transition-transform duration-300" />
                                            <div className="absolute inset-0 bg-[#FF7404] blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-[#FF7404] transition-colors">{role.title}</h4>
                                            <p className="text-white/40 text-sm mt-1 leading-relaxed">{role.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="h-full min-h-[400px] rounded-3xl bg-[#0d0b0a] border border-white/10 flex flex-col items-center justify-center text-center p-8 space-y-6 relative overflow-hidden group hover:border-[#FF7404]/50 transition-colors duration-500">
                                {/* Ambient Background */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#FF7404]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10">
                                    <div className="w-32 h-32 rounded-full border-2 border-[#FF7404] p-1 mx-auto mb-6 shadow-[0_0_30px_rgba(255,116,4,0.2)]">
                                        <div className="w-full h-full rounded-full overflow-hidden bg-zinc-800 relative">
                                            <img
                                                src="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp"
                                                alt="Charles Snodgrass"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-1">Charles Snodgrass</h3>
                                    <p className="text-[#FF7404] text-sm font-bold uppercase tracking-widest mb-4">Director of Client Success</p>

                                    <p className="text-white/50 max-w-sm mx-auto mb-8 border-t border-white/10 pt-4">
                                        "I've sat in your seat. I know the grind. My job is to ensure VisQuanta delivers actual ROI, not just software."
                                    </p>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
