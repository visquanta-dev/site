'use client';

import { motion } from 'framer-motion';

export default function BlogHero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col justify-end pb-32 px-6 overflow-hidden bg-[#020202]">
            {/* Grid Background */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

            {/* Aurora / Bloom */}
            <motion.div
                animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#FF7404]/[0.15] rounded-full blur-[200px] pointer-events-none mix-blend-screen"
            />

            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-[#020202] to-transparent z-10" />

            <div className="relative z-20 w-full max-w-[1700px] mx-auto">
                <div className="grid grid-cols-12 gap-8 items-end border-b border-white/[0.08] pb-12 mb-12">

                    {/* Badge / Meta */}
                    <div className="col-span-12 lg:col-span-3 lg:mb-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 mb-8 lg:mb-0"
                        >
                            <div className="h-[1px] w-8 bg-[#FF7404]" />
                            <span className="text-xs font-bold tracking-[0.3em] text-[#FF7404] uppercase font-mono">
                                The Journal // Est. 2024
                            </span>
                        </motion.div>
                    </div>

                    {/* MASSIVE Typography */}
                    <div className="col-span-12 lg:col-span-9">
                        <h1 className="text-[14vw] lg:text-[180px] font-black text-white leading-[0.85] tracking-[-0.06em] uppercase mix-blend-overlay opacity-90 select-none">
                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                    className="block relative"
                                >
                                    Automotive
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden relative">
                                <motion.span
                                    initial={{ y: "110%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                                >
                                    Intelligence
                                </motion.span>

                                {/* Outline Overlay for Style */}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 1 }}
                                    className="absolute inset-0 text-transparent bg-clip-text stroke-white/20 stroke-[2px] pointer-events-none"
                                    style={{ WebkitTextStroke: "1px rgba(255,255,255,0.1)" }}
                                >
                                    Intelligence
                                </motion.span>
                            </span>
                        </h1>
                    </div>
                </div>

                {/* Footer Data / Description */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">Active Readers</span>
                        <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-light text-white">42,891</span>
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col gap-2"
                    >
                        <span className="text-[10px] font-mono uppercase text-white/30 tracking-widest">Latest Insight</span>
                        <span className="text-white/80 font-medium">Why Speed-to-Lead is Broken &rarr;</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                        className="md:text-right"
                    >
                        <p className="text-lg text-white/50 leading-relaxed font-light">
                            Unfiltered strategies for forward-thinking <span className="text-white font-normal">General Managers</span> and <span className="text-white font-normal">Dealer Principals</span>.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
