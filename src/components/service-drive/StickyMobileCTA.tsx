'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RequestDemoButton } from '../CalendlyModal';
import { Sparkles } from 'lucide-react';

export default function StickyMobileCTA() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.querySelector('footer');
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                // Hide if footer is in view
                if (footerRect.top < window.innerHeight) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="mobile-cta"
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    exit={{ y: 100 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-50 p-4 pt-4 pb-8 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 md:hidden shadow-[0_-10px_40px_-5px_rgba(0,0,0,0.8)]"
                >
                    <RequestDemoButton asChild>
                        <button
                            className="w-full py-4 bg-[#FF7404] hover:bg-[#ff8a2b] active:bg-[#e06500] text-black text-lg font-bold rounded-xl flex items-center justify-center gap-3 transition-colors shadow-[0_4px_20px_rgba(255,116,4,0.3)]"
                        >
                            <Sparkles className="w-5 h-5 fill-current" />
                            Schedule Your Walkthrough
                        </button>
                    </RequestDemoButton>
                    {/* Safe Area Shim for iPhone Home Bar */}
                    <div className="h-1" />
                </motion.div>
            )}


        </AnimatePresence>
    );
}
