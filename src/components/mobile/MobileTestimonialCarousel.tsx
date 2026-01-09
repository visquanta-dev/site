'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';

type VideoTestimonial = {
    id: string;
    title: string;
};

interface MobileTestimonialCarouselProps {
    videos: VideoTestimonial[];
}

export default function MobileTestimonialCarousel({
    videos,
}: MobileTestimonialCarouselProps) {
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
                    align: 'center',
                    loop: false,
                }}
            >
                <CarouselContent className="-ml-3">
                    {videos.map((video, index) => (
                        <CarouselItem
                            key={video.id}
                            className="pl-3 basis-[85%]"
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl"
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                                    className="absolute inset-0 w-full h-full"
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Swipe Hint - Shows before first interaction */}
            <AnimatePresence>
                {!hasInteracted && current === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex justify-center mt-4"
                    >
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                            className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                        >
                            <span className="text-xs text-white/60 font-medium">
                                Swipe for more
                            </span>
                            <ChevronRight className="w-4 h-4 text-[#ff7404]" />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {videos.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${index === current
                                ? 'bg-[#ff7404] w-6 shadow-[0_0_8px_rgba(255,116,4,0.5)]'
                                : 'bg-white/20 w-2 hover:bg-white/40'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
