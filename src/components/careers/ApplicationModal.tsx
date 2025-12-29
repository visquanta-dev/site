'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, ArrowRight, Loader2, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    position?: string;
}

export default function ApplicationModal({ isOpen, onClose, position = "Strategic Sales Partner" }: ApplicationModalProps) {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        experience: '',
        connections: ''
    });

    // Reset state when modal opens
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setIsSubmitting(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSubmitting(false);
        setStep(2); // Success state
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4 overflow-y-auto"
                    >
                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden shadow-[0_0_50px_-12px_rgba(255,116,4,0.3)] my-8"
                        >
                            {/* Header */}
                            <div className="relative px-8 py-6 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
                                <div>
                                    <div className="text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-1">
                                        Application
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {position}
                                    </h3>
                                </div>
                                <button
                                    onClick={onClose}
                                    className="p-2 rounded-full hover:bg-white/5 text-zinc-400 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                {/* Progress Bar (only for form step) */}
                                <div className="absolute bottom-0 left-0 h-[1px] bg-[#FF7404]" style={{ width: step === 1 ? '50%' : '100%' }} />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                {step === 1 ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-zinc-400 text-sm font-medium ml-1">Full Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="John Doe"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-zinc-400 text-sm font-medium ml-1">Email Address</label>
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="john@example.com"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-zinc-400 text-sm font-medium ml-1">Phone Number</label>
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+1 (555) 000-0000"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-zinc-400 text-sm font-medium ml-1">LinkedIn URL</label>
                                                <input
                                                    required
                                                    type="url"
                                                    name="linkedin"
                                                    value={formData.linkedin}
                                                    onChange={handleInputChange}
                                                    placeholder="linkedin.com/in/johndoe"
                                                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-zinc-400 text-sm font-medium ml-1">Dealership Connections</label>
                                            <textarea
                                                required
                                                name="connections"
                                                value={formData.connections}
                                                onChange={handleInputChange}
                                                rows={3}
                                                placeholder="Briefly describe your existing network of Dealer Principals / GMs..."
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all resize-none"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-zinc-400 text-sm font-medium ml-1">Why You?</label>
                                            <textarea
                                                required
                                                name="experience"
                                                value={formData.experience}
                                                onChange={handleInputChange}
                                                rows={4}
                                                placeholder="Tell us about your sales experience and why you'd be a killer addition to the team..."
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#FF7404]/50 focus:bg-white/[0.05] transition-all resize-none"
                                            />
                                        </div>

                                        <div className="pt-4 border-t border-white/5 flex justify-end">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] disabled:bg-[#FF7404]/50 disabled:cursor-not-allowed text-black font-bold rounded-xl flex items-center gap-2 transition-all shadow-[0_0_20px_-5px_rgba(255,116,4,0.3)]"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Submitting...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <Send className="w-5 h-5" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="py-12 text-center">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", duration: 0.6 }}
                                            className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6"
                                        >
                                            <CheckCircle className="w-12 h-12 text-green-500" />
                                        </motion.div>
                                        <h3 className="text-3xl font-bold text-white mb-4">Application Received</h3>
                                        <p className="text-zinc-400 text-lg max-w-md mx-auto mb-8">
                                            Thanks for throwing your hat in the ring, {formData.name.split(' ')[0]}.
                                            We'll review your details and get back to you within 48 hours if it looks like a match.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl transition-colors border border-white/10"
                                        >
                                            Close Window
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
