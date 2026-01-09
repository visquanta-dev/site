'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X, Sparkles } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';

type CallExample = {
    id: string;
    title: string;
    situation: string;
    action: string;
    result: string;
    videoId: string;
    issue: string;
};

interface MobileVideoCarouselProps {
    callExamples: CallExample[];
    activeVideoId: string;
    onClose: () => void;
}

export default function MobileVideoCarousel({
    callExamples,
    activeVideoId,
    onClose,
}: MobileVideoCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

    // Set initial slide based on which video was clicked
    useEffect(() => {
        if (!api) return;
        const initialIndex = callExamples.findIndex((c) => c.id === activeVideoId);
        if (initialIndex >= 0) {
            api.scrollTo(initialIndex, true);
        }
    }, [api, activeVideoId, callExamples]);

    // Track current slide
    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
            setHasInteracted(true);
        };

        api.on('select', onSelect);
        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    return (
        <div className="fixed inset-0 z-[100] bg-black flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 shrink-0">
                <div>
                    <div className="text-[10px] font-bold tracking-[0.2em] text-[#ff7404] uppercase">
                        Library
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                        Real Recordings
                    </h3>
                </div>
                <button
                    onClick={onClose}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all border border-white/10"
                >
                    <X className="w-5 h-5" />
                </button>
            </div>

            {/* Carousel */}
            <div className="flex-1 overflow-hidden relative">
                <Carousel
                    setApi={setApi}
                    className="h-full"
                    opts={{
                        align: 'start',
                        loop: false,
                    }}
                >
                    <CarouselContent className="-ml-0 h-full">
                        {callExamples.map((call, index) => (
                            <CarouselItem
                                key={call.id}
                                className="pl-0 basis-full h-full"
                            >
                                <div className="h-full flex flex-col overflow-y-auto">
                                    {/* Video Player */}
                                    <div className="relative w-full aspect-video bg-black shrink-0">
                                        <iframe
                                            src={`https://player.vimeo.com/video/${call.videoId}?autoplay=${index === current ? 1 : 0
                                                }&title=0&byline=0&portrait=0`}
                                            className="absolute inset-0 w-full h-full"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                        />
                                        {/* Gradient fade */}
                                        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 p-5 space-y-5">
                                        {/* Title & Badge */}
                                        <div className="flex items-start gap-3">
                                            <div className="w-1 h-10 bg-gradient-to-b from-[#ff7404] to-transparent rounded-full shrink-0" />
                                            <div>
                                                <span className="inline-block text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded-md bg-[#ff7404] text-white mb-2">
                                                    {call.issue}
                                                </span>
                                                <h2 className="text-xl font-bold text-white tracking-tight">
                                                    {call.title}
                                                </h2>
                                            </div>
                                        </div>

                                        {/* Timeline - Situation/Action/Result */}
                                        <div className="space-y-4 relative pl-3">
                                            {/* Vertical Line */}
                                            <div className="absolute left-[7px] top-3 bottom-3 w-[2px] bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

                                            {/* Situation */}
                                            <div className="relative pl-6">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-black border border-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                                                </div>
                                                <div className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.15em] mb-1">
                                                    Situation
                                                </div>
                                                <p className="text-sm text-white/80 leading-relaxed">
                                                    {call.situation}
                                                </p>
                                            </div>

                                            {/* Action */}
                                            <div className="relative pl-6">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-black border border-[#ff7404] shadow-[0_0_8px_rgba(255,116,4,0.4)]" />
                                                </div>
                                                <div className="text-[9px] font-bold text-[#ff7404] uppercase tracking-[0.15em] mb-1">
                                                    AI Agent Action
                                                </div>
                                                <p className="text-sm text-white/80 leading-relaxed">
                                                    {call.action}
                                                </p>
                                            </div>

                                            {/* Result */}
                                            <div className="relative pl-6">
                                                <div className="absolute left-0 top-1.5 w-4 h-4 flex items-center justify-center">
                                                    <div className="w-2 h-2 rounded-full bg-black border border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                                                </div>
                                                <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.15em] mb-1">
                                                    Result
                                                </div>
                                                <p className="text-sm text-white/80 leading-relaxed">
                                                    {call.result}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Did You Know - Only on first card */}
                                        {index === 0 && (
                                            <div className="bg-[#1a1a1a] rounded-xl p-4 border border-white/5 relative overflow-hidden">
                                                <div className="absolute top-0 right-0 p-2 opacity-10">
                                                    <Sparkles className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-[9px] font-bold text-white/40 uppercase tracking-widest mb-1.5">
                                                    Did You Know?
                                                </div>
                                                <p className="text-xs text-white/70 leading-relaxed">
                                                    Dealerships using VisQuanta see an average{' '}
                                                    <span className="text-white font-bold">30% increase</span> in
                                                    appointment set rates within the first 60 days.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

                {/* Swipe Hint Overlay - Shows on first card before interaction */}
                <AnimatePresence>
                    {!hasInteracted && current === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute bottom-24 left-0 right-0 flex justify-center pointer-events-none"
                        >
                            <motion.div
                                animate={{ x: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                                className="flex items-center gap-2 px-4 py-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20 shadow-xl"
                            >
                                <span className="text-xs text-white/70 font-medium">
                                    Swipe for more
                                </span>
                                <ChevronRight className="w-4 h-4 text-[#ff7404]" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Peek effect - Show edge of next card */}
                {current < callExamples.length - 1 && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
                )}
            </div>

            {/* Bottom Bar - Dots + CTA */}
            <div className="shrink-0 px-4 py-4 border-t border-white/10 bg-black/80 backdrop-blur-md">
                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mb-4">
                    {callExamples.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                    ? 'bg-[#ff7404] w-6 shadow-[0_0_8px_rgba(255,116,4,0.5)]'
                                    : 'bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>

                {/* CTA Button */}
                <button className="w-full py-3.5 bg-[#ff7404] hover:bg-[#ff8a2b] text-black font-bold text-base rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,116,4,0.2)] active:scale-[0.98]">
                    Book a Live Demo <ArrowRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
