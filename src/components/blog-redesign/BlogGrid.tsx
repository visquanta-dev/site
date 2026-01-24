'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/blog/BlogCard';
import { BlogArticle } from '@/lib/blog';

interface BlogGridProps {
    posts: BlogArticle[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    if (!posts || posts.length === 0) {
        return (
            <div className="text-center py-20">
                <p className="text-white/50 text-lg">No articles found.</p>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as any
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-16"
        >
            {posts.map((post, index) => {
                // Every 7th post spans 2 columns to create visual interest (Magazine Layout)
                const isWide = (index + 1) % 7 === 0;

                return (
                    <motion.div
                        key={post.slug}
                        variants={itemVariants}
                        className={isWide ? 'md:col-span-2' : ''}
                    >
                        <BlogCard
                            article={post}
                            variant={isWide ? 'horizontal' : 'default'}
                            className="h-full"
                        />
                    </motion.div>
                );
            })}
        </motion.div>
    );
}
