import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, Calendar, Linkedin, Twitter, Copy } from 'lucide-react';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/lib/seobot';
import BlogPostClient, { ParallaxHero, ReadingProgress, TableOfContents, ExecutiveSummary } from './BlogPostClient';
import type { Metadata } from 'next';
import Image from 'next/image';

export const revalidate = 60;

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found | VisQuanta',
        };
    }

    return {
        title: `${post.headline} | VisQuanta Strategic Insights`,
        description: post.metaDescription,
        openGraph: {
            title: post.headline,
            description: post.metaDescription,
            images: post.image ? [post.image] : [],
            type: 'article',
            publishedTime: post.createdAt,
            modifiedTime: post.updatedAt,
            authors: ['VisQuanta Editorial'],
            siteName: 'VisQuanta',
        },
        twitter: {
            card: 'summary_large_image',
            title: post.headline,
            description: post.metaDescription,
            images: post.image ? [post.image] : [],
        },
    };
}

export async function generateStaticParams() {
    const { posts } = await getBlogPosts(0, 100);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) return notFound();

    return (
        <main className="bg-[#050505] min-h-screen selection:bg-[#FF7404]/30 selection:text-white font-sans text-zinc-300">
            <ReadingProgress />
            <Navigation />

            <article className="pt-32 pb-24 relative overflow-hidden">
                {/* Background Ambience */}
                <div className="absolute top-0 left-0 w-full h-[800px] bg-[radial-gradient(circle_at_50%_0%,rgba(255,116,4,0.08),transparent_70%)] pointer-events-none" />

                <div className="container px-4 mx-auto max-w-screen-xl relative z-10">
                    <BlogPostClient>
                        {/* Header Section */}
                        <div className="max-w-4xl mx-auto mb-16 text-center">
                            {/* Breadcrumb / Category */}
                            <div className="flex items-center justify-center gap-4 mb-8">
                                <Link
                                    href="/blog"
                                    className="group flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-all duration-300"
                                >
                                    <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                                    <span>Insights Hub</span>
                                </Link>
                                <span className="text-zinc-800">/</span>
                                <Link
                                    href={`/blog/category/${post.category?.slug}`}
                                    className="text-[#FF7404] text-xs font-bold uppercase tracking-[0.2em] hover:text-[#ff9248] transition-colors"
                                >
                                    {post.category?.title || 'Strategic Insight'}
                                </Link>
                            </div>

                            {/* Headline */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-8 leading-[1.1] tracking-tight">
                                {post.headline}
                            </h1>

                            {/* Meta Data */}
                            <div className="flex items-center justify-center gap-8 text-sm text-zinc-500 border-t border-b border-white/5 py-6 w-full max-w-xl mx-auto">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-white/10 flex items-center justify-center text-xs font-bold text-white">
                                        V
                                    </div>
                                    <span className="text-zinc-300">VisQuanta Editorial</span>
                                </div>
                                <div className="w-px h-4 bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {formatDate(post.createdAt)}
                                </div>
                                <div className="w-px h-4 bg-white/10" />
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {post.readingTime} min read
                                </div>
                            </div>
                        </div>

                        {/* Parallax Hero Image */}
                        {post.image && (
                            <ParallaxHero src={post.image} alt={post.headline} />
                        )}
                    </BlogPostClient>

                    {/* Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
                        {/* Left Sidebar (Share) */}
                        <div className="hidden lg:block col-span-1 relative">
                            <div className="sticky top-32 flex flex-col gap-6 items-center">
                                <span className="text-xs uppercase tracking-widest text-zinc-600 rotate-180 writing-vertical-lr mb-4">
                                    Share
                                </span>
                                <button className="p-3 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-white hover:bg-[#0077b5] hover:border-transparent transition-all group">
                                    <Linkedin className="w-5 h-5" />
                                </button>
                                <button className="p-3 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-white hover:bg-black hover:border-transparent transition-all group">
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <div className="w-px h-12 bg-zinc-800 my-2" />
                                <button className="p-3 rounded-full bg-zinc-900/50 border border-white/5 text-zinc-400 hover:text-[#FF7404] transition-all">
                                    <Copy className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Main Content Column */}
                        <div className="col-span-1 lg:col-span-8">
                            <BlogPostClient delay={0.2}>
                                {/* Executive Summary Card */}
                                <ExecutiveSummary summary={post.metaDescription} />

                                <div
                                    className="
                                        prose prose-lg prose-invert max-w-none
                                        
                                        /* 
                                         * SPACING REPAIR & HIERARCHY
                                         * The goal: Radical separation of distinct ideas.
                                         */

                                        /* Body Text - Breathing Room */
                                        prose-p:text-zinc-300 prose-p:leading-[2] prose-p:font-light prose-p:text-[1.125rem] prose-p:mb-10 prose-p:mt-0
                                        prose-strong:text-white prose-strong:font-semibold
                                        
                                        /* Headings - Visual Anchors */
                                        prose-headings:font-serif prose-headings:font-medium prose-headings:tracking-tight prose-headings:text-white prose-headings:scroll-mt-32
                                        
                                        /* H2 - Chapter Breaks (Massive Spacing) */
                                        prose-h2:text-3xl md:prose-h2:text-4xl 
                                        prose-h2:mt-32 prose-h2:mb-12 prose-h2:pb-8
                                        prose-h2:border-b prose-h2:border-white/10
                                        prose-h2:leading-tight
                                        
                                        /* H3 - Sub-sections */
                                        prose-h3:text-xl md:prose-h3:text-2xl 
                                        prose-h3:mt-20 prose-h3:mb-8
                                        prose-h3:text-zinc-50
                                        prose-h3:font-sans prose-h3:font-normal
                                        
                                        /* H4 - Labels */
                                        prose-h4:text-lg prose-h4:mt-12 prose-h4:mb-6
                                        prose-h4:uppercase prose-h4:tracking-widest prose-h4:font-bold prose-h4:text-[#FF7404]
                                        
                                        /* Links */
                                        prose-a:text-[#FF7404] prose-a:no-underline prose-a:border-b prose-a:border-[#FF7404]/30 
                                        hover:prose-a:border-[#FF7404] hover:prose-a:text-[#ff8a2b] prose-a:transition-all
                                        
                                        /* Lists */
                                        prose-ul:text-zinc-300 prose-ul:my-10 prose-ul:list-none prose-ul:pl-0
                                        prose-li:my-4 prose-li:leading-loose prose-li:relative prose-li:pl-8
                                        prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.7em] prose-li:before:w-1.5 prose-li:before:h-1.5 prose-li:before:bg-[#FF7404] prose-li:before:rounded-full
                                        
                                        /* Images */
                                        prose-img:rounded-2xl prose-img:shadow-2xl prose-img:shadow-black/50 prose-img:border prose-img:border-white/5 prose-img:my-20
                                        
                                        /* Blockquotes */
                                        prose-blockquote:border-l-[4px] prose-blockquote:border-[#FF7404] 
                                        prose-blockquote:bg-zinc-900/40 prose-blockquote:py-10 prose-blockquote:px-12 
                                        prose-blockquote:text-2xl prose-blockquote:font-serif 
                                        prose-blockquote:text-white prose-blockquote:leading-relaxed
                                        prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:my-24
                                        
                                        /* Dividers */
                                        prose-hr:border-white/10 prose-hr:my-24
                                    "
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />
                            </BlogPostClient>

                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                                <div className="mt-16 pt-8 border-t border-white/5">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-zinc-500 text-sm mr-2">Topics:</span>
                                        {post.tags.map((tag) => (
                                            <Link
                                                key={tag.slug}
                                                href={`/blog/tag/${tag.slug}`}
                                                className="px-4 py-1.5 rounded-full bg-zinc-900 border border-white/5 text-zinc-400 text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                                            >
                                                {tag.title}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Sidebar (Table of Contents) */}
                        <div className="hidden lg:block col-span-3 h-full relative">
                            <TableOfContents />
                        </div>
                    </div>

                    {/* Strategic CTA Section */}
                    <div className="max-w-4xl mx-auto mt-24 mb-12">
                        <div className="relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-white/5 p-12 text-center md:text-left md:flex items-center justify-between gap-12 group">
                            {/* CTA Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10 max-w-lg">
                                <h3 className="text-2xl font-serif text-white mb-4">
                                    From Insight to Implementation
                                </h3>
                                <p className="text-zinc-400 text-lg">
                                    See how VisQuanta's Revenue OS transforms these concepts into automated execution for your dealership.
                                </p>
                            </div>

                            <div className="relative z-10 mt-8 md:mt-0 flex-shrink-0">
                                <Link href="/book-demo">
                                    <button className="px-8 py-4 bg-white hover:bg-zinc-200 text-black font-semibold rounded-lg transition-all flex items-center gap-3 group/btn">
                                        Schedule Executive Briefing
                                        <ArrowLeft className="w-4 h-4 rotate-180 transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Related Wisdom */}
                    {post.relatedPosts && post.relatedPosts.length > 0 && (
                        <div className="mt-32 max-w-6xl mx-auto">
                            <div className="flex items-center justify-between mb-12">
                                <h3 className="text-2xl font-serif text-white">More Strategic Insights</h3>
                                <Link href="/blog" className="text-[#FF7404] hover:text-white transition-colors flex items-center gap-2 text-sm font-medium">
                                    View All Articles <ArrowLeft className="w-4 h-4 rotate-180" />
                                </Link>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {post.relatedPosts.slice(0, 3).map((related) => (
                                    <Link
                                        key={related.id}
                                        href={`/blog/${related.slug}`}
                                        className="group flex flex-col h-full"
                                    >
                                        <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-zinc-900">
                                            {related.image && (
                                                <Image
                                                    src={related.image}
                                                    alt={related.headline}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            )}
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-[10px] text-[#FF7404] font-bold uppercase tracking-widest mb-3 block">
                                                {related.category?.title}
                                            </span>
                                            <h4 className="text-xl font-serif font-medium text-zinc-100 group-hover:text-[#FF7404] transition-colors mb-3 leading-snug">
                                                {related.headline}
                                            </h4>
                                            <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2">
                                                {related.metaDescription}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </article>

            <Footer />
        </main>
    );
}
