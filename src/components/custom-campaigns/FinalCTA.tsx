'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { RequestDemoButton } from '../CalendlyModal';

export default function FinalCTA() {
    return (
        <section className="py-24 bg-[#020202] relative z-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-[1200px] mx-auto bg-[#050505] border border-white/10 rounded-[32px] p-12 md:p-20 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Ready to put AI to work <br className="hidden md:block" />
                            in your dealership?
                        </h2>
                        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
                            No staff burnout. Just booked appointments delivered to your showroom.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
                            <RequestDemoButton asChild>
                                <button className="h-[56px] px-10 bg-[#FF7404] hover:bg-[#ff8a3d] text-black text-lg font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 shadow-[0_20px_40px_-10px_rgba(255,116,4,0.3)] flex items-center gap-3">
                                    <Sparkles className="w-5 h-5" />
                                    Schedule Your Walkthrough
                                </button>
                            </RequestDemoButton>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-medium text-white/40">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                Done-for-you build
                            </div>
                            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/10" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#FF7404]" />
                                Appointments booked for you
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
