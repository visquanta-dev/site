'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { RequestDemoButton } from '@/components/CalendlyModal';

interface FeatureBullet {
    title: string;
    desc: string;
}

interface CapabilityFeature {
    title: string;
    highlight: string;
    description: string;
    bullets: FeatureBullet[];
}

interface CapabilityFeatureDisplayProps {
    feature: CapabilityFeature;
}

const CapabilityFeatureDisplay = ({ feature }: CapabilityFeatureDisplayProps) => {
    return (
        <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full justify-center"
        >
            <div className="space-y-10">
                {/* HEADLINE TYPOGRAPHY */}
                <div>
                    <h2 className="text-3xl md:text-5xl lg:text-[48px] leading-[1.1] mb-6 tracking-tight">
                        <span className="font-normal text-white block mb-2">{feature.title}</span>
                        <span
                            className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F97316] to-[#FBBF24]"
                            style={{ textShadow: '0 4px 30px rgba(249,115,22,0.3)' }}
                        >
                            {feature.highlight}
                        </span>
                    </h2>
                    <p className="text-[16px] md:text-[17px] text-gray-300 leading-[1.75] max-w-[540px] font-normal">
                        {feature.description}
                    </p>
                </div>

                {/* FEATURE LIST */}
                <div className="space-y-7">
                    {feature.bullets.map((bullet, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10, y: 10 }}
                            animate={{ opacity: 1, x: 0, y: 0 }}
                            transition={{ delay: 0.1 + (i * 0.1), duration: 0.4, ease: "easeOut" }}
                            className="flex gap-5 group cursor-default"
                        >
                            {/* Icon Circle */}
                            <div className="flex-shrink-0 w-7 h-7 rounded-full border-[2px] border-[#F97316] flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.2)] group-hover:shadow-[0_0_30px_rgba(249,115,22,0.4)] transition-all duration-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
                            </div>

                            <div className="group-hover:translate-x-1 transition-transform duration-250 ease-out">
                                <h4 className="text-white text-[18px] font-semibold mb-1">{bullet.title}</h4>
                                <p className="text-gray-400 text-[15px] leading-[1.6]">{bullet.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA BUTTON */}
                <div className="pt-4">
                    <RequestDemoButton
                        className="px-7 py-3.5 bg-white text-black text-[15px] font-semibold rounded-full shadow-[0_4px_24px_rgba(255,255,255,0.1)] hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)] transition-all duration-200 flex items-center gap-2 group"
                    >
                        Book a Demo
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="group-hover:translate-x-1 transition-transform duration-200"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </RequestDemoButton>
                </div>
            </div>
        </motion.div>
    );
};

export default CapabilityFeatureDisplay;
