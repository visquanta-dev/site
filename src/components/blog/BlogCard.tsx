import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface BlogCardProps {
    article: {
        slug: string;
        title: string;
        heroImage: string;
        category?: string;
        readTime?: number;
        publishedAt?: string;
        author?: string;
        excerpt?: string;
    };
    variant?: 'default' | 'compact' | 'featured' | 'horizontal';
    className?: string;
}

export function BlogCard({ article, variant = 'default', className }: BlogCardProps) {
    return (
        <Link href={`/blog/${article.slug}`} className={cn("group block h-full", className)}>
            <article className={cn(
                "flex flex-col h-full bg-[#080808] border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-[#FF7404]/30 hover:shadow-[0_20px_40px_-20px_rgba(255,116,4,0.15)] group-hover:-translate-y-1",
                variant === 'featured' && "md:flex-col",
                variant === 'horizontal' && "flex-row"
            )}>

                {/* Image */}
                <div className={cn(
                    "relative overflow-hidden bg-[#151515]",
                    variant === 'default' && "aspect-video w-full",
                    variant === 'compact' && "aspect-[3/2] w-full",
                    variant === 'featured' && "w-full aspect-video md:aspect-[21/9] border-b border-white/5",
                    variant === 'horizontal' && "w-[40%] h-full border-r border-white/5"
                )}>
                    {article.heroImage ? (
                        <Image
                            src={article.heroImage}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    ) : (
                        <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                            <span className="text-zinc-700 text-sm">No image</span>
                        </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-60 pointer-events-none" />

                    {/* Category Badge - Over Image for default/compact */}
                    {article.category && variant !== 'featured' && variant !== 'horizontal' && (
                        <span className="absolute top-4 left-4 px-3 py-1.5 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-white/90">
                            {article.category}
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className={cn(
                    "flex flex-col flex-1",
                    (variant === 'default' || variant === 'compact') && "p-6",
                    variant === 'featured' && "p-8",
                    variant === 'horizontal' && "p-6 bg-[#111] justify-center"
                )}>
                    {/* Meta */}
                    <div className="flex items-center gap-2 text-[13px] text-zinc-500 font-medium tracking-wide mb-3">
                        {article.publishedAt && (
                            <>
                                <time dateTime={article.publishedAt}>
                                    {new Date(article.publishedAt).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    })}
                                </time>
                                <span className="w-0.5 h-0.5 rounded-full bg-zinc-700" />
                            </>
                        )}
                        {article.readTime && (
                            <span>{article.readTime} min read</span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                        "font-semibold text-white group-hover:text-[#FF7404] transition-colors leading-tight mb-3 line-clamp-2",
                        variant === 'featured' ? "text-2xl md:text-4xl" : "text-lg"
                    )}>
                        {article.title}
                    </h3>

                    {/* Excerpt (Optional based on design, but good for featured) */}
                    {variant === 'featured' && article.excerpt && (
                        <p className="text-zinc-400 leading-relaxed line-clamp-3 mb-6">
                            {article.excerpt}
                        </p>
                    )}

                    {/* CTA */}
                    <div className={cn(
                        "pt-2 flex items-center text-[#FF7404] text-sm font-bold uppercase tracking-wider",
                        variant === 'featured' ? "mt-8" : "mt-auto"
                    )}>
                        <span className="relative inline-block pb-1">
                            Read Article
                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#FF7404] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                        </span>
                    </div>
                </div>

            </article>
        </Link>
    );
}
