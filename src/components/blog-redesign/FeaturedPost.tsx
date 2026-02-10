'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BlogArticle } from '@/lib/blog';
import { ArrowUpRight } from 'lucide-react';
import { useLocale } from '@/lib/i18n/LocaleProvider';
import { localeLink } from '@/lib/locale-link';

export default function FeaturedPost({ post }: { post: BlogArticle }) {
    const { locale } = useLocale();
    if (!post) return null;

    return (
        <Link href={localeLink(`/blog/${post.slug}`, locale)} className="group relative block w-full mb-32 h-[85vh] min-h-[600px] max-h-[900px] overflow-hidden rounded-[2.5rem] bg-[#020202] border border-white/[0.08]">
            {/* Image Background with Parallax scale */}
            <motion.div
                className="absolute inset-0 z-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    priority
                    sizes="100vw"
                />
            </motion.div>

            {/* Subtle Gradient Overlays - Lightened */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#020202] via-transparent to-transparent group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#020202]/50 via-transparent to-transparent group-hover:opacity-50 transition-opacity duration-700" />
            <div className="absolute inset-0 z-5 bg-[#020202]/20 group-hover:opacity-0 transition-opacity duration-700" />

            {/* Noise Texture */}
            <div className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Content Container */}
            <div className="relative z-20 h-full flex flex-col justify-end p-8 md:p-16 max-w-[1400px] mx-auto">
                <div className="max-w-4xl">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <span className="px-4 py-2 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Featured Story
                        </span>
                        <span className="text-white/60 text-sm font-medium tracking-wide">
                            {post.readTime} min read
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-8 group-hover:text-[#FF7404] transition-colors duration-500">
                        {post.title}
                    </h2>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/20 pt-8">
                        <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
                            {post.excerpt}
                        </p>

                        <div className="flex items-center gap-3">
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-white group-hover:text-[#FF7404] transition-colors">Read Article</span>
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FF7404] group-hover:border-[#FF7404] group-hover:text-black transition-all duration-300">
                                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
