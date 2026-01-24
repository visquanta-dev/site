import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';
import { getBlogPostsByTag, getAllTags } from '@/lib/seobot';
import BlogPageClient from '../../BlogPageClient';
import type { Metadata } from 'next';

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const resolvedSearchParams = await searchParams;
    const page = parseInt(resolvedSearchParams.page || '0', 10);
    const { tag } = await getBlogPostsByTag(slug, 0, 1);

    const titleSuffix = page > 0 ? ` (Page ${page + 1})` : '';

    return {
        title: tag ? `${tag.title}${titleSuffix} | VisQuanta Blog` : 'Tag | VisQuanta Blog',
        description: `Browse articles tagged with ${tag?.title || 'this tag'}.${titleSuffix}`,
        alternates: {
            canonical: `https://visquanta.com/blog/tag/${slug}`,
        },
    };
}

export async function generateStaticParams() {
    const tags = await getAllTags();
    return tags.map((tag) => ({
        slug: tag.slug,
    }));
}

export default async function TagPage({ params, searchParams }: PageProps) {
    const { slug } = await params;
    const resolvedSearchParams = await searchParams;
    const page = parseInt(resolvedSearchParams.page || '0', 10);
    const { posts, total, totalPages, tag } = await getBlogPostsByTag(slug, page, 12);
    const allTags = await getAllTags();

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': 'https://visquanta.com/blog'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': tag?.title || 'Tag',
                'item': `https://visquanta.com/blog/tag/${slug}`
            }
        ]
    };

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navigation />

            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 right-1/2 translate-x-1/2 w-[1000px] h-[500px] bg-[#FF7404]/5 rounded-[100%] blur-[120px] pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm mb-8"
                        >
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to all articles
                        </Link>

                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8 backdrop-blur-sm">
                            <Tag className="w-4 h-4 text-[#FF7404]" />
                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-wider">Tag</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
                            {tag?.title || 'Tag'}
                        </h1>

                        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                            {total} article{total !== 1 ? 's' : ''} with this tag
                        </p>
                    </div>

                    {/* Tags */}
                    {allTags.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {allTags.slice(0, 10).map((t) => (
                                <Link
                                    key={t.slug}
                                    href={`/blog/tag/${t.slug}`}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${t.slug === slug
                                        ? 'bg-[#FF7404]/20 border border-[#FF7404]/40 text-[#FF7404]'
                                        : 'bg-zinc-900/50 border border-white/10 text-zinc-400 hover:bg-zinc-900 hover:text-white hover:border-white/20'
                                        }`}
                                >
                                    #{t.title}
                                </Link>
                            ))}
                        </div>
                    )}

                    <BlogPageClient posts={posts} />

                    {totalPages > 1 && (
                        <div className="flex justify-center items-center gap-4 mt-16">
                            {page > 0 && (
                                <Link
                                    href={`/blog/tag/${slug}?page=${page - 1}`}
                                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 hover:border-white/20 transition-colors flex items-center gap-2"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-180" />
                                    Previous
                                </Link>
                            )}

                            <span className="text-zinc-500 text-sm font-mono">
                                Page {page + 1} of {totalPages}
                            </span>

                            {page < totalPages - 1 && (
                                <Link
                                    href={`/blog/tag/${slug}?page=${page + 1}`}
                                    className="px-6 py-3 rounded-xl bg-zinc-900 border border-white/10 text-white font-medium hover:bg-zinc-800 hover:border-white/20 transition-colors flex items-center gap-2"
                                >
                                    Next
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
