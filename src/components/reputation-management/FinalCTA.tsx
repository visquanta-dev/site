'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck } from 'lucide-react';
import { GoogleLogo, FacebookLogo, DealerRaterLogo } from '@/components/brand-assets/PlatformLogos';

export default function FinalCTA() {
    return (
        <section className="py-40 bg-[#020202] relative overflow-hidden">
            {/* Premium Atmospheric Depth */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-[radial-gradient(circle_at_50%_100%,#FF740415,transparent_70%)]" />
                <div className="absolute top-1/4 -left-[10%] w-[60%] h-[60%] bg-[#FF7404]/[0.03] rounded-full blur-[140px]" />
                <div className="absolute top-1/4 -right-[10%] w-[60%] h-[60%] bg-[#FF7404]/[0.02] rounded-full blur-[140px]" />

                {/* Animated Particles or Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="container-wide relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex justify-center gap-1.5 mb-10">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 + (i * 0.1) }}
                            >
                                <Star className="w-6 h-6 text-[#FF7404] fill-[#FF7404] drop-shadow-[0_0_10px_rgba(255,116,4,0.5)]" />
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.95] italic">
                        Command Your <br />
                        <span className="bg-gradient-to-r from-[#FF7404] via-[#FF8A3D] to-[#FF7404] bg-clip-text text-transparent">Digital Showroom.</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-white/40 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
                        Stop letting stale reviews dictate your conversion rates. Implement the industry's most consistent 72-hour growth system.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <button className="w-full sm:w-auto px-12 py-6 bg-white text-black font-black rounded-2xl text-lg hover:bg-[#FF7404] hover:text-white transition-all duration-500 transform hover:-translate-y-2 shadow-[0_30px_60px_-15px_rgba(255,255,255,0.1)] flex items-center justify-center gap-4 group">
                            Get Started Now
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                        <button className="w-full sm:w-auto px-12 py-6 bg-white/[0.03] text-white/60 font-black rounded-2xl text-lg border border-white/10 hover:bg-white/5 hover:text-white transition-all duration-500">
                            Explore Enterprise
                        </button>
                    </div>

                    <div className="mt-32 pt-16 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-20 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        <GoogleLogo className="h-8 w-auto text-white" />
                        <DealerRaterLogo className="h-8 w-auto text-white" />
                        <FacebookLogo className="h-8 w-auto text-white" />

                        <div className="flex items-center gap-2 group/oem">
                            <ShieldCheck className="w-8 h-8 text-white" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">OEM Approved</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
