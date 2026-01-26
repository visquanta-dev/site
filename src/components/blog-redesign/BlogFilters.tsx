'use client';

import { motion } from 'framer-motion';

interface Category {
    slug: string;
    title: string;
    count: number;
}

interface BlogFiltersProps {
    categories: Category[];
    activeSlug: string;
    onChange: (slug: string) => void;
    totalPosts?: number;
}

export default function BlogFilters({ categories, activeSlug, onChange, totalPosts = 42 }: BlogFiltersProps) {
    const allCategories = [
        { slug: 'all', title: 'All Stories', count: totalPosts },
        ...categories
    ];

    return (
        <div className="sticky top-20 z-30 bg-[#020202]/80 backdrop-blur-md -mx-4 px-4 sm:mx-0 sm:px-0 flex items-center gap-3 overflow-x-auto py-4 no-scrollbar border-b border-white/[0.08] mb-12">
            {allCategories.map((category) => {
                const isActive = activeSlug === category.slug;
                return (
                    <button
                        key={category.slug}
                        onClick={() => onChange(category.slug)}
                        className={`
                            relative px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 group flex-shrink-0
                            ${isActive ? 'text-black' : 'text-white/80 hover:text-white'}
                        `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-[#FF7404] rounded-full shadow-[0_4px_15px_rgba(255,116,4,0.3)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        {/* Hover effect for non-active */}
                        {!isActive && (
                            <div className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1] opacity-100 transition-opacity duration-300" />
                        )}

                        <span className="relative z-10 flex items-center gap-2">
                            <span className="tracking-wide font-sans uppercase font-bold">{category.title}</span>
                            <span className={`text-[9px] min-w-[18px] h-[16px] px-1 flex items-center justify-center rounded-full leading-none transition-colors border ${isActive ? 'bg-black/20 border-black/10 text-black' : 'bg-white/5 border-white/5 text-zinc-500'}`}>
                                {category.count}
                            </span>
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
