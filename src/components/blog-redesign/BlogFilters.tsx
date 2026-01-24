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
        <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar border-b border-white/[0.08] mb-16 mask-image-gradient">
            {allCategories.map((category) => {
                const isActive = activeSlug === category.slug;
                return (
                    <button
                        key={category.slug}
                        onClick={() => onChange(category.slug)}
                        className={`
                            relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group flex-shrink-0
                            ${isActive ? 'text-black' : 'text-white/60 hover:text-white'}
                        `}
                    >
                        {isActive && (
                            <motion.div
                                layoutId="activeFilter"
                                className="absolute inset-0 bg-[#FF7404] rounded-full shadow-[0_0_20px_rgba(255,116,4,0.4)]"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}

                        {/* Hover effect for non-active */}
                        {!isActive && (
                            <div className="absolute inset-0 rounded-full bg-white/[0.05] border border-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}

                        <span className="relative z-10 flex items-center gap-2.5">
                            <span className="tracking-[0.02em] font-sans text-[13px] uppercase font-bold">{category.title}</span>
                            <span className={`text-[10px] min-w-[20px] h-[18px] px-1.5 flex items-center justify-center rounded-full leading-none transition-colors border ${isActive ? 'bg-black/20 border-black/10 text-black' : 'bg-white/5 border-white/5 text-zinc-500 group-hover:text-zinc-400'}`}>
                                {category.count}
                            </span>
                        </span>
                    </button>
                )
            })}
        </div>
    )
}
