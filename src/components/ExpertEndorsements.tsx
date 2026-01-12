'use client';

import { motion } from 'framer-motion';

const videos = [
    { id: "E1o2JTHlR7o", title: "Jo DaBrowski on How VisQuanta's AI Transformed Their Dealership's Sales Process" },
    { id: "UssAxtB8DG4", title: "A Seamless AI Solution for Dealerships" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export default function ExpertEndorsements() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FF7404]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Expert <span className="text-[#FF7404]">Endorsements.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        The world's leading automotive groups run on AutoMaster Suite.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {videos.map((video, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="group relative"
                        >
                            <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl transition-all duration-300 group-hover:border-[#FF7404]/30 group-hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.2)]">
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                                    className="absolute inset-0 w-full h-full"
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
