'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RequestDemoButton } from '@/components/CalendlyModal';
import { ArrowRight } from 'lucide-react';

export default function MobileStickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past 600px (past hero)
            const shouldShow = window.scrollY > 600;
            setIsVisible(shouldShow);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: 'spring', damping: 20, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-[60] bg-[#050505]/80 backdrop-blur-xl border-t border-white/10 p-4 lg:hidden pb-safe"
                >
                    <div className="flex items-center justify-between gap-4">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-[#FF7404] tracking-wider">
                                Ready to scale?
                            </span>
                            <span className="text-sm font-bold text-white">
                                Get your custom revenue analysis
                            </span>
                        </div>

                        <RequestDemoButton asChild>
                            <Button
                                size="sm"
                                className="bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold h-10 px-4 rounded-lg shadow-[0_0_20px_rgba(255,116,4,0.3)] shrink-0 border-none"
                            >
                                Schedule Your Walkthrough
                                <ArrowRight className="w-4 h-4 ml-1.5" />
                            </Button>
                        </RequestDemoButton>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
