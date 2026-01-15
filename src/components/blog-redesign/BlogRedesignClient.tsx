'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import BlogHero from '@/components/blog-redesign/BlogHero';
import BlogFilters from '@/components/blog-redesign/BlogFilters';
import FeaturedPost from '@/components/blog-redesign/FeaturedPost';
import BlogGrid from '@/components/blog-redesign/BlogGrid';
import { BlogPost } from '@/lib/seobot';

const POSTS_PER_PAGE = 6;

interface Category {
    slug: string;
    title: string;
    count: number;
}

interface BlogRedesignClientProps {
    posts: BlogPost[];
    categories: Category[];
    totalPosts: number;
}

export default function BlogRedesignClient({ posts, categories, totalPosts }: BlogRedesignClientProps) {
    const [activeCategory, setActiveCategory] = useState<string>('all');
    const [currentPage, setCurrentPage] = useState<number>(1);



    // Featured post is the first one (only shown on page 1)
    const featuredPost = posts[0];
    const isFirstPage = currentPage === 1;

    // Filter posts based on category
    const filteredPosts = useMemo(() => {
        if (activeCategory === 'all') {
            return posts;
        }
        return posts.filter(post => post.category?.slug === activeCategory);
    }, [posts, activeCategory]);

    // Calculate pagination
    const paginatedPosts = useMemo(() => {
        // On page 1, we show featured post separately, so exclude it from grid
        // On other pages, show all posts in grid (no featured)
        const postsForGrid = isFirstPage && activeCategory === 'all'
            ? filteredPosts.slice(1) // Exclude featured on page 1
            : filteredPosts;

        const startIndex = isFirstPage ? 0 : (currentPage - 2) * POSTS_PER_PAGE + (activeCategory === 'all' ? POSTS_PER_PAGE : 0);
        const adjustedStart = isFirstPage ? 0 : (currentPage - 1) * POSTS_PER_PAGE - (activeCategory === 'all' ? 1 : 0);

        // Simpler logic: just slice based on page
        if (activeCategory === 'all') {
            // Page 1: show posts 1-6 (after featured which is post 0)
            // Page 2: show posts 7-12
            // etc.
            const start = (currentPage - 1) * POSTS_PER_PAGE;
            if (isFirstPage) {
                return filteredPosts.slice(1, 1 + POSTS_PER_PAGE); // Skip featured, get 6
            } else {
                return filteredPosts.slice(1 + (currentPage - 1) * POSTS_PER_PAGE, 1 + currentPage * POSTS_PER_PAGE);
            }
        } else {
            // No featured post for filtered categories
            const start = (currentPage - 1) * POSTS_PER_PAGE;
            return filteredPosts.slice(start, start + POSTS_PER_PAGE);
        }
    }, [filteredPosts, currentPage, isFirstPage, activeCategory]);

    // Total pages calculation
    const totalPages = useMemo(() => {
        if (activeCategory === 'all') {
            // Subtract 1 for featured post
            return Math.ceil((filteredPosts.length - 1) / POSTS_PER_PAGE);
        }
        return Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
    }, [filteredPosts, activeCategory]);

    // Category counts
    const categoriesWithCounts = useMemo(() => {
        return categories.map(cat => ({
            ...cat,
            count: posts.filter(p => p.category?.slug === cat.slug).length
        }));
    }, [categories, posts]);

    // Handle category change - reset to page 1
    const handleCategoryChange = (slug: string) => {
        setActiveCategory(slug);
        setCurrentPage(1);
    };

    // Generate page numbers to display
    const getPageNumbers = () => {
        const pages: (number | string)[] = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            if (currentPage <= 3) {
                pages.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pages.push(1, '...', currentPage, '...', totalPages);
            }
        }

        return pages;
    };

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            {/* Hero Section */}
            <BlogHero />

            {/* Main Content */}
            <section className="relative px-4 sm:px-6 pb-24">
                <div className="max-w-[1280px] mx-auto">
                    {/* Filters */}
                    <div className="mb-12">
                        <BlogFilters
                            categories={categoriesWithCounts}
                            activeSlug={activeCategory}
                            onChange={handleCategoryChange}
                            totalPosts={totalPosts}
                        />
                    </div>

                    {/* Featured Post - Only on page 1 and "All Posts" filter */}
                    {isFirstPage && activeCategory === 'all' && featuredPost && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <FeaturedPost post={featuredPost} />
                        </motion.div>
                    )}

                    {/* Blog Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${activeCategory}-${currentPage}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                        >
                            <BlogGrid posts={paginatedPosts} />
                        </motion.div>
                    </AnimatePresence>

                    {/* Pagination */}
                    {totalPages > 1 && (
                        <div className="mt-16 flex flex-col items-center gap-6">
                            <div className="flex items-center gap-2">
                                {/* Previous Button */}
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${currentPage === 1
                                        ? 'text-white/20 cursor-not-allowed'
                                        : 'text-white/50 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                {/* Page Numbers */}
                                {getPageNumbers().map((page, index) => (
                                    typeof page === 'number' ? (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentPage(page)}
                                            className={`w-10 h-10 rounded-lg font-medium text-sm flex items-center justify-center transition-all ${currentPage === page
                                                ? 'bg-[#ff7404] text-black font-semibold'
                                                : 'text-white/50 hover:bg-white/5 hover:text-white'
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    ) : (
                                        <span key={index} className="text-white/30 px-1">...</span>
                                    )
                                ))}

                                {/* Next Button */}
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${currentPage === totalPages
                                        ? 'text-white/20 cursor-not-allowed'
                                        : 'text-white/50 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Article Count */}
                            <p className="text-[13px] text-white/40 tracking-wide">
                                {filteredPosts.length} articles
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
