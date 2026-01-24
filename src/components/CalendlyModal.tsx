'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Loader2 } from 'lucide-react';

// Context for managing modal state
interface CalendlyModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const CalendlyModalContext = createContext<CalendlyModalContextType | undefined>(undefined);

export function useCalendlyModal() {
    const context = useContext(CalendlyModalContext);
    if (!context) {
        throw new Error('useCalendlyModal must be used within a CalendlyModalProvider');
    }
    return context;
}

interface CalendlyModalProviderProps {
    children: ReactNode;
    calendlyUrl?: string;
}

export function CalendlyModalProvider({
    children,
    calendlyUrl = 'https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo'
}: CalendlyModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <CalendlyModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
            <CalendlyModal isOpen={isOpen} onClose={closeModal} calendlyUrl={calendlyUrl} />
        </CalendlyModalContext.Provider>
    );
}

interface CalendlyModalProps {
    isOpen: boolean;
    onClose: () => void;
    calendlyUrl: string;
}

function CalendlyModal({ isOpen, onClose, calendlyUrl }: CalendlyModalProps) {
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state when modal opens
    useEffect(() => {
        if (isOpen) {
            setIsLoading(true);
            // Give it a moment to load
            const timer = setTimeout(() => setIsLoading(false), 2000);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Build the Calendly URL with customization parameters
    const embedUrl = `${calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=ff7404`;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100]"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-8"
                    >
                        <div className="relative w-full max-w-3xl h-[90vh] max-h-[700px] bg-[#0A0A0A] rounded-2xl border border-white/10 shadow-2xl shadow-[#ff7404]/10 overflow-hidden flex flex-col">

                            {/* Header */}
                            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0A0A0A]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#ff7404]/20 flex items-center justify-center">
                                        <Calendar className="w-5 h-5 text-[#ff7404]" />
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-white">Schedule Your Walkthrough</h2>
                                        <p className="text-xs text-white/50">Choose a 15-minute slot that works for you</p>
                                    </div>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="w-10 h-10 rounded-xl bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group"
                                >
                                    <X className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" />
                                </button>
                            </div>

                            {/* Calendly Embed Container */}
                            <div className="flex-1 relative bg-[#0a0a0a] overflow-hidden">
                                {/* Loading State */}
                                {isLoading && (
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0a0a0a] z-10">
                                        <Loader2 className="w-8 h-8 text-[#ff7404] animate-spin mb-4" />
                                        <p className="text-white/50 text-sm">Loading scheduler...</p>
                                    </div>
                                )}

                                {/* Calendly iFrame */}
                                <iframe
                                    src={embedUrl}
                                    width="100%"
                                    height="100%"
                                    frameBorder="0"
                                    title="Schedule a Demo"
                                    className="w-full h-full"
                                    onLoad={() => setIsLoading(false)}
                                    style={{
                                        minHeight: '500px',
                                        background: '#0a0a0a'
                                    }}
                                />
                            </div>

                            {/* Footer */}
                            <div className="px-6 py-3 border-t border-white/10 bg-[#0A0A0A] text-center">
                                <p className="text-xs text-white/40">
                                    By scheduling, you agree to our{' '}
                                    <Link href="/trust" className="text-[#ff7404] hover:underline">Privacy & data handling</Link>
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

import { Slot } from '@radix-ui/react-slot';

// ... (existing imports)

// Simple button component that opens the modal
interface RequestDemoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

export function RequestDemoButton({ asChild, onClick, ...props }: RequestDemoButtonProps) {
    const { openModal } = useCalendlyModal();
    const Comp = asChild ? Slot : "button";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        openModal();
        onClick?.(e);
    };

    return (
        <Comp onClick={handleClick} {...props} />
    );
}
