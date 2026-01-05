'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Clock, ShieldAlert } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
};

export default function IndependentChallenges() {
    return (
        <section className="py-24 bg-[#020202] relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            The gap between <br />
                            <motion.span
                                className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"
                                animate={{ opacity: [0.8, 1, 0.8] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                profit and survival
                            </motion.span> <br />
                            is getting smaller.
                        </h2>

                        <motion.div
                            className="space-y-6 text-lg text-zinc-400 leading-relaxed"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.p variants={itemVariants}>
                                The automotive landscape has shifted. For decades, independent dealers thrived on hustle and personal relationships. But in 2025, hustle isn't enough to compete with the algorithmic efficiency of franchise giants and national retailers like CarMax.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                Every minute a lead waits costs you money. Every call that goes to voicemail is a customer driving to your competitor. Every evening and weekend your store is "closed" is revenue walking away.
                            </motion.p>
                            <motion.p variants={itemVariants}>
                                <strong className="text-white">The reality:</strong> Your customers expect instant, personalized responses. They don't care that you're a small team. They care about getting answers <span className="text-[#FF7404] font-semibold">now</span>.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {/* Challenge Card 1 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
                        >
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            />
                            <TrendingDown className="w-8 h-8 text-red-500 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Lead Decay Rate</h3>
                            <p className="text-zinc-500 text-sm mb-4">
                                The odds of qualifying a lead drop by <strong className="text-white">80%</strong> after just 5 minutes of waiting. Speed isn't a bonus; it's a requirement.
                            </p>
                            <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-red-500 to-orange-500"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "80%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                                />
                            </div>
                        </motion.div>

                        {/* Challenge Card 2 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
                        >
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                            />
                            <Clock className="w-8 h-8 text-[#FF7404] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">The "After Hours" Leak</h3>
                            <p className="text-zinc-500 text-sm">
                                <strong className="text-white">35-40%</strong> of web leads submit inquiries after 6:00 PM or on weekends. If you reply the next morning, 70% have already bought elsewhere or lost interest.
                            </p>
                        </motion.div>

                        {/* Challenge Card 3 */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden group"
                        >
                            <motion.div
                                className="absolute top-0 right-0 w-32 h-32 bg-[#FF7404]/10 rounded-full blur-2xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                            />
                            <ShieldAlert className="w-8 h-8 text-[#FF7404] mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">Staff Burnout</h3>
                            <p className="text-zinc-500 text-sm">
                                Expecting your top sales producers to also be BDC agents leads to burnout and turnover. Let salespeople close. Let AI chase.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
