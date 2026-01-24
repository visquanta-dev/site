'use client';

import { motion } from 'framer-motion';
import SplitLayout from './variations/SplitLayout';

export default function WhereLeadsGetLost() {
    return (
        <section className="py-20 sm:py-28 lg:py-32 bg-[#030303] relative overflow-hidden">
            {/* Premium Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF7404]/[0.03] rounded-full blur-[120px] md:blur-[150px] pointer-events-none" />
            </div>

            <div className="container-wide relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Where Your <span className="text-[#FF7404]">Leads Get Stuck.</span>
                    </h2>
                    <p className="text-lg text-white/45 max-w-2xl">
                        These are the gaps in your process where leads go cold and competitors step in.
                    </p>
                </motion.div>

                <SplitLayout />
            </div>
        </section>
    );
}
