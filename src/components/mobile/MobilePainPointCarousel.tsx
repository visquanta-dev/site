'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, type LucideIcon } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';

type PainPoint = {
    icon: LucideIcon;
    stat: string;
    label: string;
    detail: string;
    impact: string;
    color: string;
};

interface MobilePainPointCarouselProps {
    painPoints: PainPoint[];
}

export default function MobilePainPointCarousel({
    painPoints,
}: MobilePainPointCarouselProps) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [hasInteracted, setHasInteracted] = useState(false);

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
        <div className="w-full">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    align: 'start',
                    loop: false,
                }}
            >
                <CarouselContent className="-ml-4">
                    {painPoints.map((point, index) => {
                        const Icon = point.icon;
                        return (
                            <CarouselItem key={index} className="pl-4 basis-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="h-full"
                                >
                                    <div className="h-full bg-gradient-to-b from-[#111111] to-[#080808] border border-white/[0.08] rounded-2xl p-6 transition-all duration-500">
                                        {/* Icon */}
                                        <div
                                            className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center ${point.color} mb-6 border border-white/10`}
                                        >
                                            <Icon className="w-7 h-7" />
                                        </div>

                                        {/* Stat */}
                                        <div className="text-5xl font-bold text-white mb-2 tracking-tighter">
                                            {point.stat}
                                        </div>

                                        {/* Label */}
                                        <div className="text-base font-bold text-white/90 mb-3 uppercase tracking-wider">
                                            {point.label}
                                        </div>

                                        {/* Detail */}
                                        <div className="text-sm text-white/40 mb-5 font-medium italic">
                                            "{point.detail}"
                                        </div>

                                        {/* Impact */}
                                        <div className="pt-4 border-t border-white/5 text-xs font-bold text-[#ff7404]/80 uppercase tracking-widest">
                                            {point.impact}
                                        </div>
                                    </div>
                                </motion.div>
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>

            {/* Progress Indicator + Swipe Hint */}
            <div className="flex items-center justify-between mt-5 px-1">
                {/* Counter */}
                <div className="text-sm font-bold text-white/40">
                    <span className="text-[#ff7404]">{current + 1}</span>
                    <span className="text-white/20"> / {painPoints.length}</span>
                </div>

                {/* Swipe Hint - Shows before first interaction */}
                <AnimatePresence>
                    {!hasInteracted && (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-1.5"
                        >
                            <motion.div
                                animate={{ x: [0, 6, 0] }}
                                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                                className="flex items-center gap-1 text-xs text-white/40 font-medium"
                            >
                                <span>Swipe</span>
                                <ChevronRight className="w-3.5 h-3.5 text-[#ff7404]" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Dot Indicators */}
                <div className="flex gap-1.5">
                    {painPoints.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === current
                                    ? 'bg-[#ff7404] w-4 shadow-[0_0_6px_rgba(255,116,4,0.5)]'
                                    : 'bg-white/20 w-1.5 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
