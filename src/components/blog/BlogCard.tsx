import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BlogCardProps {
    article: {
        slug: string;
        title: string;
        featuredImage?: string;
        category?: string | {
            slug: string;
            title: string;
        };
        readTime?: number;
        publishedAt?: string;
        author?: string;
        excerpt?: string;
    };
    variant?: 'default' | 'compact' | 'featured' | 'horizontal';
    className?: string;
}

const FALLBACK_IMAGE = '/images/wireframes/6.jpeg'; // High-quality automotive wireframe as default

const CATEGORY_MAPPING: Record<string, string> = {
    'Strategy': 'Strategy',
    'Group Strategy': 'Strategy',
    'Used Strategy': 'Strategy',
    'BDC Optimization': 'BDC Strategy',
    'Lead Reactivation': 'Lead Strategy',
};

const normalizeCategory = (cat?: string) => {
    if (!cat) return 'Strategy';
    return CATEGORY_MAPPING[cat] || cat;
};


export function BlogCard({ article, variant = 'default', className }: BlogCardProps) {
    return (
        <Link href={`/blog/${article.slug}`} className={cn("group block h-full", className)}>
            <article className={cn(
                "flex flex-col h-full bg-black border border-white/[0.05] rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-[#FF7404]/50 hover:bg-white/[0.04]",
                variant === 'featured' && "md:flex-col",
                variant === 'horizontal' && "flex-row"
            )}>

                {/* Image */}
                <div className={cn(
                    "relative overflow-hidden bg-[#020202]",
                    variant === 'default' && "aspect-[4/3] w-full",
                    variant === 'compact' && "aspect-[3/2] w-full",
                    variant === 'featured' && "w-full aspect-video md:aspect-[21/9] border-b border-white/5",
                    variant === 'horizontal' && "w-[40%] h-full border-r border-white/5"
                )}>
                    <Image
                        src={article.featuredImage || FALLBACK_IMAGE}
                        alt={article.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Subtle Overlay - Lightened */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent z-10 group-hover:opacity-60 transition-opacity duration-700" />
                    <div className="absolute inset-0 bg-[#020202]/10 group-hover:opacity-0 transition-opacity duration-700 z-5" />

                    {/* Category Badge - Keep absolute only for horizontal/featured/compact if needed, or unify. 
                        Moving to body for default to match ServiceInsights */}
                    {variant !== 'default' && (
                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold uppercase tracking-wider text-[#FF7404]">
                            {normalizeCategory(typeof article.category === 'object' ? article.category.title : article.category)}
                        </span>
                    )}
                </div>


                {/* Content */}
                <div className={cn(
                    "flex flex-col flex-1",
                    (variant === 'default' || variant === 'compact') && "p-8",
                    variant === 'featured' && "p-10",
                    variant === 'horizontal' && "p-8 bg-transparent justify-center"
                )}>

                    {/* Category Pill (Default Variant) */}
                    {variant === 'default' && (
                        <div className="mb-4">
                            <span className="inline-block text-[10px] font-bold text-[#FF7404] tracking-widest uppercase px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20">
                                {normalizeCategory(typeof article.category === 'object' ? article.category.title : article.category)}
                            </span>
                        </div>
                    )}

                    {/* Meta for non-default or just keep it? ServiceInsights doesn't show date/time, but Blog probably should. 
                        I'll keep it but style it subtly. */}
                    <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-bold uppercase tracking-wider mb-3">
                        {(() => {
                            const date = article.publishedAt ? new Date(article.publishedAt) : null;
                            const isValidDate = date && !isNaN(date.getTime());

                            if (isValidDate) {
                                return (
                                    <>
                                        <time dateTime={article.publishedAt}>
                                            {date.toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </time>
                                        <span className="w-0.5 h-0.5 rounded-full bg-zinc-700" />
                                    </>
                                );
                            }
                            return null;
                        })()}
                        {article.readTime ? (
                            <span>{article.readTime} min read</span>
                        ) : (
                            <span>5 min read</span>
                        )}
                    </div>


                    {/* Title */}
                    <h3 className={cn(
                        "font-bold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-3 line-clamp-2",
                        variant === 'featured' ? "text-2xl md:text-4xl" : "text-2xl"
                    )}>
                        {article.title}
                    </h3>

                    {/* Excerpt */}
                    {article.excerpt && (
                        <p className="text-white/50 text-sm font-light leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                            {article.excerpt}
                        </p>
                    )}

                    {/* CTA */}
                    <div className={cn(
                        "pt-2 flex items-center text-[#FF7404] text-xs font-bold uppercase tracking-widest gap-2",
                        variant === 'featured' ? "mt-8" : "mt-auto"
                    )}>
                        READ ARTICLE
                        {/* Arrow Right if I had the icon, but I can use CSS or just text. 
                            The import might not be available if I don't import standard lucide-react.
                            Actually, BlogCard didn't have lucide icons imported. I'll stick to text styling or simple arrow.
                        */}
                        <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </div>
                </div>

            </article>
        </Link>
    );
}
