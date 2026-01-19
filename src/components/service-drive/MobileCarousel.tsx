'use client';

import React, { useRef, useState } from 'react';

interface MobileCarouselProps {
    children: React.ReactNode;
    className?: string; // Container classes
    gridClassName?: string; // Desktop grid classes (e.g. md:grid-cols-3)
    slideClassName?: string; // Mobile slide classes for width (e.g. w-[85vw])
}

export default function MobileCarousel({
    children,
    className = "",
    gridClassName = "md:grid-cols-3",
    slideClassName = "w-[85vw]"
}: MobileCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const count = React.Children.count(children);

    const onScroll = () => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;
        if (maxScroll <= 0) return;

        const index = Math.round((scrollLeft / maxScroll) * (count - 1));
        setActiveIndex(Math.min(Math.max(index, 0), count - 1));
    };

    return (
        <div className={`relative ${className}`}>
            <div
                ref={scrollRef}
                onScroll={onScroll}
                className={`flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 -mx-6 md:mx-0 md:grid md:gap-6 md:pb-0 md:px-0 scroll-smooth ${gridClassName}`}
                style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    // @ts-ignore
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {/* Hide scrollbar for Chrome/Safari */}
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {React.Children.map(children, (child, i) => (
                    <div className={`snap-center shrink-0 md:w-auto md:shrink-1 h-full ${slideClassName}`}>
                        {child}
                    </div>
                ))}
            </div>

            {/* Dots - hidden on md (desktop) */}
            <div className="flex md:hidden justify-center gap-2 mt-2 pb-4">
                {Array.from({ length: count }).map((_, i) => (
                    <div
                        key={i}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                                ? 'w-6 bg-[#FF6B35]'
                                : 'w-1.5 bg-[#4B5563]'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
