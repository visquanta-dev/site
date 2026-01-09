'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

interface CardData {
    id: string;
    title: string;
    label: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    image?: string;
    link: string;
    color?: string;
}

interface MobileCardCarouselProps {
    cards: CardData[];
}

export default function MobileCardCarousel({ cards }: MobileCardCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollLeft = container.scrollLeft;
            const cardWidth = container.offsetWidth * 0.85; // Approximate card width
            const newIndex = Math.round(scrollLeft / (cardWidth + 16)); // width + gap
            setActiveIndex(Math.min(newIndex, cards.length - 1));
        };

        container.addEventListener('scroll', handleScroll, { passive: true });
        return () => container.removeEventListener('scroll', handleScroll);
    }, [cards.length]);

    return (
        <div className="relative w-full">
            {/* Carousel Container */}
            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 -mx-4 px-4"
                style={{ scrollBehavior: 'smooth' }}
            >
                {cards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                        <Link
                            key={card.id}
                            href={card.link}
                            className="flex-shrink-0 w-[85vw] max-w-[300px] snap-center"
                        >
                            <div className="relative h-full bg-[#0d0d0d] border border-white/10 rounded-3xl p-6 flex flex-col overflow-hidden group active:scale-[0.98] transition-all duration-200">
                                {/* Top Shine */}
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                {/* Card Image/Icon Area */}
                                <div className="relative w-full h-40 rounded-2xl bg-black/40 border border-white/5 mb-6 overflow-hidden">
                                    {card.image ? (
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            className="w-full h-full object-cover grayscale opacity-80"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <Icon className="w-12 h-12 text-white/20" />
                                        </div>
                                    )}
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

                                    {/* Performance Line Animation */}
                                    <motion.div
                                        animate={{ x: [-150, 350] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                        className="absolute bottom-4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#ff7404]">
                                            {card.label}
                                        </span>
                                        <Zap className="w-3 h-3 text-[#ff7404] fill-[#ff7404]" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/40 text-sm leading-relaxed mb-6 flex-grow line-clamp-3 font-medium">
                                        {card.description}
                                    </p>

                                    {/* CTA */}
                                    <div className="flex items-center justify-between pt-5 border-t border-white/5">
                                        <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/60">
                                            Explore Module
                                        </span>
                                        <div className="w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                                            <ArrowRight className="w-4 h-4 text-white/40" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-2">
                {cards.map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-[#ff7404]' : 'w-1.5 bg-white/10'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
