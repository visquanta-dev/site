'use client';

import { motion } from 'framer-motion';

interface StepProgressProps {
    currentStep: number;
    totalSteps: number;
    label?: string;
}

export default function StepProgress({ currentStep, totalSteps, label }: StepProgressProps) {
    const percentage = (currentStep / totalSteps) * 100;

    return (
        <div className="w-full mb-8">
            <div className="flex items-center justify-between mb-3 text-sm uppercase tracking-[0.2em] font-bold">
                <span className="text-[#FF7404]">Step {currentStep} <span className="text-white/30">/ {totalSteps}</span></span>
                {label && <span className="text-white/60">{label}</span>}
            </div>

            {/* Track */}
            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                {/* Fill */}
                <motion.div
                    className="h-full bg-[#FF7404] rounded-full shadow-[0_0_10px_rgba(255,116,4,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                />
            </div>
        </div>
    );
}
