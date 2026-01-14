'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 overflow-hidden bg-[#0a0a0a]">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[#0a0a0a] z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#151515] via-[#0a0a0a] to-[#0a0a0a] opacity-80" />

            {/* Animated Light Trails / Gradient Orbs */}
            <motion.div
                animate={{
                    opacity: [0.15, 0.25, 0.15],
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[-10%] right-[10%] w-[800px] h-[800px] bg-[#D4A853]/[0.03] rounded-full blur-[120px] pointer-events-none"
            />
            <motion.div
                animate={{
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1.1, 1, 1.1],
                    x: [0, -30, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none"
            />

            <div className="relative z-10 max-w-[1280px] mx-auto">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md mb-8"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4A853] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4A853]"></span>
                    </span>
                    <span className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase font-sans">The Journal</span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-[64px] font-bold text-white tracking-[-0.03em] mb-6 leading-[1.1]"
                >
                    Industry Insights.
                </motion.h1>

                {/* Subhead */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-xl md:text-[22px] text-white/60 font-normal max-w-2xl leading-[1.6] tracking-[0.01em]"
                >
                    Strategies, data, and trends for modern automotive retail.
                </motion.p>
            </div>
        </section>
    )
}
