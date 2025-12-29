'use client';

import { motion } from 'framer-motion';
import { Presentation, CheckCircle2, TrendingUp, PhoneCall } from 'lucide-react';

export default function TrainingSection() {
    return (
        <section className="py-32 bg-[#050505] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Execution is Everything</h2>
                    <p className="text-white/50 max-w-2xl mx-auto text-lg">
                        Technology is only as good as the people using it. Our implementation process is designed to ensure adoption and results from Day 1.
                    </p>
                </div>

                <div className="relative">
                    {/* Timeline Line - Animated */}
                    <div className="absolute top-[60px] left-0 w-full h-px bg-white/10 hidden lg:block">
                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-full bg-gradient-to-r from-[#FF7404] via-[#ff9e4d] to-[#FF7404]"
                        />
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        {[
                            {
                                icon: Presentation,
                                title: "White-Glove Setup",
                                description: "We don't send you a manual. We configure the entire system to your specific routing rules, hours, and scripts before we launch."
                            },
                            {
                                icon: PhoneCall,
                                title: "GM-Level Coaching",
                                description: "We visit your store and actually train your staff to ensure they know exactly how to handle the leads. Real, in-person accountability from experts who have sat in your seat."
                            },
                            {
                                icon: TrendingUp,
                                title: "Monthly Strategy",
                                description: "Your account manager reviews performance metrics monthly, suggesting tweaks to scripts and settings to squeeze out more appointments."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ delay: i * 0.4 }} // Staggered to match line progress
                                className="relative bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl z-10 hover:border-[#FF7404]/50 transition-all duration-500 group hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#FF7404]/10"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-[#111] border border-white/10 flex items-center justify-center mb-8 mx-auto group-hover:bg-[#FF7404] group-hover:border-[#FF7404] transition-all duration-300 shadow-lg group-hover:shadow-[#FF7404]/50 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <item.icon className="w-8 h-8 text-white group-hover:text-black transition-colors relative z-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-[#FF7404] transition-colors">{item.title}</h3>
                                <p className="text-white/50 text-center leading-relaxed group-hover:text-white/70 transition-colors">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
