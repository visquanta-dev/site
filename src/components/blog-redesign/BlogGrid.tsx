'use client';

import { motion } from 'framer-motion';
import BlogCard from './BlogCard';
import { BlogPost } from '@/lib/seobot';

interface BlogGridProps {
    posts: BlogPost[];
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
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-8 xl:gap-y-10"
        >
            {posts.map((post) => (
                <motion.div key={post.id} variants={itemVariants}>
                    <BlogCard post={post} />
                </motion.div>
            ))}
        </motion.div>
    );
}
