'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useDragControls } from 'framer-motion';
import { X, Play, Volume2, VolumeX, ChevronDown } from 'lucide-react';

const VIDEO_ID = 'OMXbpw2kYB4';
const SESSION_KEY = 'vsq_shorts_dismissed';

export default function FloatingShortsWidget() {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [hasExpandedOnce, setHasExpandedOnce] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const [progress, setProgress] = useState(0);
    const [showTeaser, setShowTeaser] = useState(false);

    const playerRef = useRef<HTMLIFrameElement>(null);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const dragControls = useDragControls();

    // 1. Initial Visibility & Teaser Logic
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
            setTimeout(() => setShowTeaser(true), 1200);
        }, 800);
        return () => clearTimeout(timer);
    }, []);

    // 2. Scroll Detection
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    const toggleExpand = () => {
        const nextState = !isExpanded;
        setIsExpanded(nextState);
        if (nextState) {
            setShowTeaser(false);
            if (!hasExpandedOnce) {
                setHasExpandedOnce(true);
            }
        } else {
            setTimeout(() => setShowTeaser(true), 1200);
        }
    };

    // 3. YouTube API Communication (Simulated Progress)
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isExpanded) {
            interval = setInterval(() => {
                setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
            }, 300);
        }
        return () => clearInterval(interval);
    }, [isExpanded]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <style jsx global>{`
                @keyframes grain {
                    0%, 100% { transform:translate(0, 0) }
                    10% { transform:translate(-5%, -10%) }
                    20% { transform:translate(-15%, 5%) }
                    30% { transform:translate(7%, -25%) }
                    40% { transform:translate(-5%, 25%) }
                    50% { transform:translate(-15%, 10%) }
                    60% { transform:translate(15%, 0) }
                    70% { transform:translate(0, 15%) }
                    80% { transform:translate(3%, 35%) }
                    90% { transform:translate(-10%, 10%) }
                }
                .glass-grain::before {
                    content: "";
                    position: absolute;
                    top: -100%;
                    left: -100%;
                    width: 300%;
                    height: 300%;
                    background-image: url("https://grainy-gradients.vercel.app/noise.svg");
                    opacity: 0.04;
                    pointer-events: none;
                    animation: grain 8s steps(10) infinite;
                    z-index: 1;
                }
                .rotating-border-fast {
                    background: conic-gradient(from var(--angle), transparent 50%, #F97316 80%, #fbbf24 100%);
                    animation: rotate-angle 4s linear infinite;
                }
                .rotating-border-slow {
                    background: conic-gradient(from var(--angle), transparent 70%, #F97316 100%);
                    animation: rotate-angle 6s linear infinite;
                }
                @property --angle {
                    syntax: '<angle>';
                    initial-value: 0deg;
                    inherits: false;
                }
                @keyframes rotate-angle {
                    to { --angle: 360deg; }
                }
                @keyframes pulse-ring {
                    0% { transform: scale(0.33); opacity: 1; }
                    80%, 100% { transform: scale(3); opacity: 0; }
                }
                @keyframes flash-sweep {
                    0% { transform: translateX(-100%) skewX(-45deg); opacity: 0; }
                    5% { opacity: 0.3; }
                    15% { transform: translateX(200%) skewX(-45deg); opacity: 0; }
                    100% { transform: translateX(200%) skewX(-45deg); opacity: 0; }
                }
                @keyframes text-flash {
                    0%, 90%, 100% { filter: brightness(1); text-shadow: none; }
                    95% { filter: brightness(1.5); text-shadow: 0 0 12px rgba(255,255,255,0.4); }
                }
            `}</style>

            <div className="relative w-full h-full">
                {/* Ambient Glow */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isExpanded ? 0 : 0.4 }}
                    className="absolute top-1/2 left-0 -translate-y-1/2 w-[280px] h-[280px] bg-[#F97316] rounded-full blur-[140px] pointer-events-none z-0"
                />

                <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", x: -20 }}
                    animate={{
                        opacity: isScrolling ? 0.6 : 1,
                        scale: 1,
                        filter: "blur(0px)",
                        x: 0,
                        y: isExpanded ? 0 : "-50%"
                    }}
                    transition={{
                        layout: { type: "spring", stiffness: 200, damping: 25 },
                        filter: { duration: 0.8 }
                    }}
                    className={`
                        pointer-events-auto absolute z-10
                        ${isExpanded
                            ? 'top-8 left-8 sm:top-12 sm:left-12 w-[320px] h-[568px]'
                            : 'top-1/2 left-6 sm:left-8 w-[84px] h-[84px] sm:w-[94px] sm:h-[94px]'
                        }
                    `}
                >
                    {/* Chat Bubble Teaser */}
                    <AnimatePresence mode="wait">
                        {showTeaser && !isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, x: -20, filter: "blur(8px)", scale: 0.95 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    filter: "blur(0px)",
                                    scale: 1
                                }}
                                exit={{ opacity: 0, x: -10, filter: "blur(5px)", transition: { duration: 0.2 } }}
                                whileHover={{ scale: 1.02, y: -2 }}
                                transition={{
                                    type: "spring", stiffness: 300, damping: 20
                                }}
                                className="absolute top-0 left-0 -translate-y-[calc(100%+20px)] z-[20] w-[220px] pointer-events-auto group/bubble"
                            >
                                {/* shared shadow pool */}
                                <div className="absolute -bottom-10 inset-x-0 h-20 bg-[#F97316]/10 blur-[40px] rounded-full pointer-events-none" />

                                <div className="glass-grain relative bg-[#0F0F0F]/85 backdrop-blur-[16px] rounded-[16px] px-4 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.5),0_8px_40px_rgba(249,115,22,0.12)] border border-white/10 overflow-hidden">
                                    {/* Rotating Gradient Border for Bubble */}
                                    <div className="absolute -inset-[1px] rounded-[17px] p-[1.5px] rotating-border-slow opacity-30 group-hover/bubble:opacity-100 group-hover/bubble:animation-duration-[4s] transition-all" />

                                    {/* Inner Light Catch */}
                                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                                    {/* Cinematic Flash Sweep */}
                                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full"
                                            style={{ animation: 'flash-sweep 6s ease-in-out infinite' }} />
                                    </div>

                                    <div className="relative z-10">
                                        <div className="flex items-start gap-2.5 mb-1.5">
                                            {/* Pulse Dot */}
                                            <div className="relative mt-1.5 shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#F97316] relative z-20" />
                                                <div className="absolute inset-0 rounded-full bg-[#F97316] z-10"
                                                    style={{ animation: 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite' }} />
                                            </div>
                                            <p className="text-white text-[15px] font-bold leading-tight tracking-[0.01em]"
                                                style={{ animation: 'text-flash 4s ease-in-out infinite' }}>
                                                Lease Expirations<br />
                                                Are Easy Money
                                            </p>
                                        </div>

                                        <div className="flex items-center gap-2 pl-4.5">
                                            <span className="text-[#F97316] text-[11px] font-black tracking-[0.08em] uppercase">Watch 60s</span>
                                            <motion.div
                                                animate={{ y: [0, 3, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                whileHover={{ y: 3 }}
                                            >
                                                <ChevronDown className="w-4 h-4 text-[#F97316]" strokeWidth={3} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Connection Tail */}
                                    <div className="absolute bottom-[-6px] left-8 w-4 h-4 bg-[#0F0F0F]/85 backdrop-blur-[16px] border-r border-b border-white/10 rotate-45" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Thumbnail / Video Container */}
                    <motion.div
                        className="relative w-full h-full group cursor-pointer"
                        onClick={!isExpanded ? toggleExpand : undefined}
                        whileHover={!isExpanded ? { scale: 1.03, y: -2 } : {}}
                    >
                        {/* Rotating Gradient Frame */}
                        <div className={`absolute -inset-[2px] rounded-[22px] p-[2px] transition-all duration-500 ${!isExpanded ? 'rotating-border-slow opacity-40 group-hover:opacity-100' : 'rotating-border-fast opacity-100'}`} />

                        <div className={`
                            relative w-full h-full bg-black overflow-hidden
                            ${isExpanded ? 'rounded-[20px]' : 'rounded-[20px]'}
                            shadow-[0_4px_12px_rgba(0,0,0,0.4),0_12px_40px_rgba(249,115,22,0.15)]
                            group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.5),0_20px_60px_rgba(249,115,22,0.25)]
                            transition-all duration-500
                        `}>
                            <AnimatePresence>
                                {!isExpanded && (
                                    <motion.div
                                        initial={{ scale: 1 }}
                                        animate={{ scale: 1.12 }}
                                        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                            alt="Video preview"
                                            className="w-full h-full object-cover grayscale-[0.05] brightness-[0.8] group-hover:brightness-100 group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-white/10" />
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="w-full h-full relative bg-black"
                                >
                                    <iframe
                                        ref={playerRef}
                                        src={`https://www.youtube.com/embed/${VIDEO_ID}?controls=0&autoplay=1&mute=${isMuted ? 1 : 0}&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1`}
                                        className="w-full h-full"
                                        allow="autoplay; encrypted-media"
                                        frameBorder="0"
                                    />

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        whileHover={{ opacity: 1, y: 0 }}
                                        className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20"
                                    >
                                        <div className="flex flex-col gap-4">
                                            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-[#f97316] shadow-[0_0_8px_rgba(249,115,22,0.8)]"
                                                    animate={{ width: `${progress}%` }}
                                                />
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
                                                    className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                                                >
                                                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                                                </button>
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); toggleExpand(); }}
                                                    className="px-4 py-2 rounded-lg bg-white/10 hover:bg-[#f97316] hover:text-black transition-all text-white text-[10px] font-black uppercase tracking-widest"
                                                >
                                                    Minimize
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}

                            {!isExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.05, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#f97316] shadow-[0_0_20px_rgba(249,115,22,0.4)]"
                                    >
                                        <Play fill="#f97316" className="ml-0.5" size={16} />
                                    </motion.div>
                                </motion.div>
                            )}
                        </div>

                        {/* Mirror Reflection */}
                        {!isExpanded && (
                            <div className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-[90%] h-20 pointer-events-none overflow-hidden scale-y-[-1] opacity-10 blur-[3px]">
                                <img
                                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent" />
                            </div>
                        )}
                    </motion.div>

                    {/* Outer Close Button */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                onClick={(e) => { e.stopPropagation(); setIsVisible(false); }}
                                className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-[#141414]/90 backdrop-blur-md border border-white/10 text-white flex items-center justify-center hover:bg-red-500 transition-all z-[100] shadow-2xl"
                            >
                                <X size={20} />
                            </motion.button>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
