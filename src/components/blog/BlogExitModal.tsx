'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Zap, PhoneCall, ShieldCheck, MessageSquare, ArrowRight, Play, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function BlogExitModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        // 1. Session Check (Show once per session)
        const hasSeenModal = sessionStorage.getItem('visquanta_blog_modal_seen');
        if (hasSeenModal) return;

        // Triggers Logic
        let scrollTimeout: NodeJS.Timeout;
        let timeTimeout: NodeJS.Timeout;

        const triggerModal = () => {
            if (hasTriggered) return;
            // Double check session in case it fired rapidly
            if (sessionStorage.getItem('visquanta_blog_modal_seen')) return;

            setIsOpen(true);
            setHasTriggered(true);
            sessionStorage.setItem('visquanta_blog_modal_seen', 'true');
        };

        // A. Time Delay (15 seconds)
        timeTimeout = setTimeout(() => {
            triggerModal();
        }, 15000);

        // B. Scroll Depth (50%)
        const handleScroll = () => {
            const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
            if (scrollPercent > 0.5) {
                triggerModal();
            }
        };

        // C. Exit Intent (Desktop only)
        const handleExitIntent = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                triggerModal();
            }
        };

        window.addEventListener('scroll', handleScroll);
        document.addEventListener('mouseleave', handleExitIntent);

        return () => {
            clearTimeout(timeTimeout);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('mouseleave', handleExitIntent);
        };
    }, [hasTriggered]);

    const handleClose = () => {
        setIsOpen(false);
        // Ensure it doesn't show again this session
        sessionStorage.setItem('visquanta_blog_modal_seen', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="blog-exit-modal hidden md:block">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-md z-[9999] transition-opacity duration-300"
                        onClick={handleClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 0, x: "-50%" }}
                        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
                        exit={{ opacity: 0, scale: 0.95, y: 0, x: "-50%" }}
                        className="fixed left-1/2 top-1/2 w-[90vw] max-w-[600px] bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.9)] overflow-hidden z-[10000]"
                    >
                        {/* Top Shine */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-20" />

                        {/* Grid Background */}
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors z-50"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative p-8 md:p-10 flex flex-col items-center text-center z-10">

                            {/* Header Group */}
                            <div className="mb-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">
                                    <Zap size={10} fill="currentColor" />
                                    <span>Revenue Intelligence</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2">
                                    There's <span className="text-amber-500">$50k+</span> Hiding in Your CRM
                                </h2>
                                <p className="text-zinc-400 text-sm">
                                    Stop losing leads. Start automating revenue.
                                </p>
                            </div>

                            {/* Video Placeholder (or Embed) */}
                            <div className="w-full aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl mb-8 relative group cursor-pointer bg-zinc-900">
                                {/* Use actual YouTube Embed if available, else placeholder */}
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/FOlaUITzCkc?controls=0&rel=0&modestbranding=1"
                                    title="VisQuanta Automation"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    className="object-cover"
                                />
                                {/* Overlay to ensure clicks don't just play video immediately if we want CTA focus, 
                                    but standard behavior is to let them play. We'll leave it interactive. */}
                            </div>

                            {/* Value Props Grid */}
                            <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-full mb-8 text-left">
                                <ValueProp
                                    icon={<CheckCircle2 className="text-amber-500" size={18} />}
                                    title="Zero Lost Leads"
                                    desc="Every inquiry answered, automatically"
                                />
                                <ValueProp
                                    icon={<Zap className="text-amber-500" size={18} />}
                                    title="Sub-60s Response"
                                    desc="Beat competitors to the customer"
                                />
                                <ValueProp
                                    icon={<PhoneCall className="text-amber-500" size={18} />}
                                    title="Every Call Answered"
                                    desc="24/7 AI Receptionist coverage"
                                />
                                <ValueProp
                                    icon={<MessageSquare className="text-amber-500" size={18} />}
                                    title="SMS-First"
                                    desc="Text where customers actually reply"
                                />
                                <div className="col-span-2 flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                    <ShieldCheck className="text-amber-500 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <h4 className="text-white text-sm font-semibold leading-none mb-1">CSI Score Protection</h4>
                                        <p className="text-xs text-zinc-400">Reviews handled before they hurt</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <Link href="/book-demo" className="w-full">
                                <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-black font-bold text-lg rounded-xl shadow-[0_0_30px_-5px_rgba(245,158,11,0.4)] transition-all hover:shadow-[0_0_50px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
                                    See How It Works
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <div className="mt-4 flex items-center justify-center gap-2 text-zinc-500">
                                <span className="text-[10px] uppercase tracking-widest">Trusted by 50+ Dealerships</span>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function ValueProp({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 mb-1">
                {icon}
                <span className="text-white text-sm font-semibold">{title}</span>
            </div>
            <p className="text-xs text-zinc-500 leading-snug pl-7">{desc}</p>
        </div>
    );
}
