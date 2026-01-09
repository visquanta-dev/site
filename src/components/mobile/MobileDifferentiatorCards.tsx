'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, type LucideIcon } from 'lucide-react';

type Differentiator = {
    icon: LucideIcon;
    title: string;
    description: string;
};

interface MobileDifferentiatorCardsProps {
    differentiators: Differentiator[];
}

export default function MobileDifferentiatorCards({
    differentiators,
}: MobileDifferentiatorCardsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleCard = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-3">
            {differentiators.map((item, index) => {
                const Icon = item.icon;
                const isOpen = openIndex === index;

                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        {/* Glassmorphism Card */}
                        <div
                            className={`
                relative overflow-hidden rounded-2xl
                bg-white/[0.03] backdrop-blur-xl
                border border-white/10
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                transition-all duration-300
                ${isOpen ? 'border-[#ff7404]/30 shadow-[0_8px_32px_rgba(255,116,4,0.1)]' : ''}
              `}
                        >
                            {/* Subtle gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

                            {/* Header - Always Visible */}
                            <button
                                onClick={() => toggleCard(index)}
                                className="relative w-full flex items-center gap-4 p-5 text-left"
                            >
                                {/* Icon */}
                                <div
                                    className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0
                    transition-all duration-300
                    ${isOpen
                                            ? 'bg-[#ff7404] text-black shadow-lg shadow-[#ff7404]/30'
                                            : 'bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404]'
                                        }
                  `}
                                >
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Title */}
                                <h3
                                    className={`
                    flex-1 text-lg font-bold transition-colors duration-300
                    ${isOpen ? 'text-white' : 'text-white/80'}
                  `}
                                >
                                    {item.title}
                                </h3>

                                {/* Expand/Collapse Icon */}
                                <div
                                    className={`
                    w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    transition-all duration-300
                    ${isOpen
                                            ? 'bg-[#ff7404] text-black rotate-0'
                                            : 'bg-white/5 text-white/40 border border-white/10'
                                        }
                  `}
                                >
                                    {isOpen ? (
                                        <Minus className="w-4 h-4" />
                                    ) : (
                                        <Plus className="w-4 h-4" />
                                    )}
                                </div>
                            </button>

                            {/* Expandable Content */}
                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-5 pb-5 pt-0">
                                            {/* Divider */}
                                            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4" />

                                            {/* Description */}
                                            <p className="text-white/60 leading-relaxed text-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                );
            })}

            {/* Tap Hint - Shows briefly */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-center text-xs text-white/30 mt-4"
            >
                Tap to expand
            </motion.p>
        </div>
    );
}
