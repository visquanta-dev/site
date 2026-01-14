import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Share2, Tag, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getBlogPosts } from '@/lib/seobot';
import BlogPostClient, { ReadingProgress, TableOfContents, ExecutiveSummary } from './BlogPostClient';

export const revalidate = 60;

// Generate static params for SSG
export async function generateStaticParams() {
    try {
        const { posts } = await getBlogPosts(0, 100);
        return posts.map((post) => ({
            slug: post.slug,
        }));
    } catch (error) {
        console.error('Error generating static params:', error);
        return [];
    }
}

// Generate metadata dynamically
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return {
            title: 'Post Not Found | VisQuanta',
        };
    }

    return {
        title: `${post.headline} | VisQuanta`,
        description: post.metaDescription,
        alternates: {
            canonical: `https://visquanta.com/blog/${slug}`,
        },
        openGraph: {
            title: post.headline,
            description: post.metaDescription,
            images: post.image ? [post.image] : [],
        },
    };
}

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

import BlogExitModal from '@/components/blog/BlogExitModal';

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
        return notFound();
    }

    // Manual override for the Featured image as requested
    if (post.headline.includes('CRM Database Reactivation')) {
        post.image = '/images/wireframes/ultimate-guide-crm-reactivation.jpeg';
    }
    if (post.headline.includes('Third-Party Lead Providers')) {
        post.image = '/images/wireframes/7_lead_providers.jpeg';
    }

    // Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': post.headline,
        'description': post.metaDescription,
        'image': post.image,
        'author': {
            '@type': 'Organization',
            'name': 'VisQuanta',
            'url': 'https://visquanta.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'VisQuanta',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://visquanta.com/logo-white.png'
            }
        },
        'datePublished': post.createdAt,
        'dateModified': post.updatedAt || post.createdAt,
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://visquanta.com/blog/${slug}`
        }
    };

    // Breadcrumb Schema
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
                'name': post.headline,
                'item': `https://visquanta.com/blog/${slug}`
            }
        ]
    };

    return (
        <main className="bg-[#050505] min-h-screen selection:bg-[#ff7404] selection:text-black font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Navigation />
            <ReadingProgress />
            <BlogExitModal />

            {/* Hero Section with Premium Background */}
            <section className="relative pt-32 pb-16 lg:pb-24 overflow-hidden">
                {/* Background Layers - matching VisQuanta style */}
                <div className="absolute inset-0 bg-[#050505]" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#080808] to-[#030303]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,116,4,0.08),transparent)]" />

                {/* Technical Grid */}
                <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <BlogPostClient delay={0}>
                            {/* Breadcrumb with premium styling */}
                            <div className="flex items-center gap-3 mb-10">
                                <Link
                                    href="/blog"
                                    className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] text-zinc-400 hover:text-white hover:border-white/20 transition-all text-sm"
                                >
                                    <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                                    <span>Back to Journal</span>
                                </Link>
                                {post.category && (
                                    <>
                                        <div className="h-px w-8 bg-white/10" />
                                        <Link
                                            href={`/blog/category/${post.category.slug}`}
                                            className="px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest hover:bg-[#FF7404]/20 transition-all"
                                        >
                                            {post.category.title}
                                        </Link>
                                    </>
                                )}
                            </div>

                            {/* Headline with premium typography */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[1.05] tracking-tighter">
                                {post.headline}
                            </h1>

                            {/* Meta Info Bar - Premium glass styling */}
                            <div className="flex flex-wrap items-center gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center">
                                        <Calendar className="w-4 h-4 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500">Published</span>
                                        <span className="text-white text-sm font-medium">{formatDate(post.createdAt)}</span>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-white/10 hidden sm:block" />

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                                        <Clock className="w-4 h-4 text-zinc-400" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500">Read Time</span>
                                        <span className="text-white text-sm font-medium">{post.readingTime} minutes</span>
                                    </div>
                                </div>

                                <div className="h-8 w-px bg-white/10 hidden sm:block" />

                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                                        <BookOpen className="w-4 h-4 text-zinc-400" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] uppercase tracking-widest text-zinc-500">Type</span>
                                        <span className="text-white text-sm font-medium">Industry Report</span>
                                    </div>
                                </div>

                                <button className="ml-auto flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.08] text-zinc-400 hover:text-white hover:bg-white/[0.08] hover:border-white/20 transition-all text-sm font-medium">
                                    <Share2 className="w-4 h-4" />
                                    Share
                                </button>
                            </div>
                        </BlogPostClient>
                    </div>
                </div>
            </section>

            {/* Hero Image Section */}
            {post.image && (
                <section className="relative pb-16 lg:pb-24">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-6xl mx-auto">
                            <BlogPostClient delay={0.1}>
                                <div className="relative rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 group">
                                    {/* Top shine effect */}
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                                    <div className="relative aspect-[21/9] w-full">
                                        <Image
                                            src={post.image}
                                            alt={post.headline}
                                            fill
                                            className="object-contain"
                                            priority
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />
                                </div>
                            </BlogPostClient>
                        </div>
                    </div>
                </section>
            )}

            {/* Main Content Section */}
            <article className="relative pb-20">
                {/* Subtle ambient glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FF7404]/[0.02] rounded-[100%] blur-[120px] pointer-events-none" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-16">
                        {/* Main Content Column */}
                        <div className="max-w-4xl">
                            {/* Executive Summary */}
                            <ExecutiveSummary summary={post.metaDescription} />

                            {/* Article Body */}
                            <BlogPostClient delay={0.2}>
                                <div
                                    suppressHydrationWarning
                                    className="blog-content"
                                    dangerouslySetInnerHTML={{ __html: post.html }}
                                />
                            </BlogPostClient>

                            {/* Tags Section */}
                            {post.tags && post.tags.length > 0 && (
                                <BlogPostClient delay={0.3}>
                                    <div className="mt-20 pt-10 border-t border-white/[0.06]">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                                                <Tag className="w-4 h-4 text-zinc-500" />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Related Topics</span>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {post.tags.map((tag) => (
                                                <Link
                                                    key={tag.slug}
                                                    href={`/blog/tag/${tag.slug}`}
                                                    className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-sm font-medium hover:bg-white/[0.06] hover:text-white hover:border-white/20 transition-all"
                                                >
                                                    {tag.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </BlogPostClient>
                            )}

                            {/* Premium CTA Section */}
                            <BlogPostClient delay={0.4}>
                                <div className="mt-24 relative overflow-hidden rounded-[2rem] border border-[#FF7404]/20">
                                    {/* Background layers */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/15 via-[#FF7404]/5 to-transparent" />
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,116,4,0.15),transparent)]" />

                                    {/* Top shine */}
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />

                                    <div className="relative p-10 md:p-16 text-center">
                                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 mb-8">
                                            <TrendingUp className="w-4 h-4 text-[#FF7404]" />
                                            <span className="text-[#FF7404] text-xs font-bold uppercase tracking-widest">Transform Your Dealership</span>
                                        </div>

                                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
                                            Ready to see it in action?
                                        </h2>
                                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                                            Join hundreds of high-performance dealerships using VisQuanta to automate their growth and maximize revenue.
                                        </p>
                                        <Link href="/book-demo">
                                            <button className="group px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_60px_-15px_rgba(255,116,4,0.5)] hover:shadow-[0_0_80px_-10px_rgba(255,116,4,0.6)]">
                                                <span className="flex items-center gap-3">
                                                    Request a Strategy Call
                                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                </span>
                                            </button>
                                        </Link>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />
                                </div>
                            </BlogPostClient>

                            {/* Related Posts */}
                            {post.relatedPosts && post.relatedPosts.length > 0 && (
                                <BlogPostClient delay={0.5}>
                                    <div className="mt-24">
                                        <div className="flex items-center gap-3 mb-10">
                                            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                                            <span className="text-sm font-bold uppercase tracking-widest text-zinc-500">Continue Reading</span>
                                            <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {post.relatedPosts.slice(0, 2).map((related) => (
                                                <Link
                                                    key={related.id}
                                                    href={`/blog/${related.slug}`}
                                                    className="group relative p-8 bg-white/[0.02] border border-white/[0.06] rounded-2xl hover:bg-white/[0.04] hover:border-[#FF7404]/30 transition-all overflow-hidden"
                                                >
                                                    {/* Top shine */}
                                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                                    <span className="inline-block px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[10px] text-[#FF7404] font-bold uppercase tracking-widest mb-4">
                                                        {related.category?.title}
                                                    </span>
                                                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors line-clamp-2 tracking-tight">
                                                        {related.headline}
                                                    </h4>
                                                    <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                                        {related.metaDescription}
                                                    </p>

                                                    <div className="flex items-center gap-2 text-sm font-bold text-zinc-400 group-hover:text-[#FF7404] transition-colors">
                                                        <span>Read Article</span>
                                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                    </div>

                                                    {/* Bottom accent */}
                                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </BlogPostClient>
                            )}
                        </div>

                        {/* Sidebar with Table of Contents */}
                        <aside className="hidden xl:block">
                            <div className="sticky top-32">
                                <TableOfContents />

                                {/* Additional sidebar CTA */}
                                <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">System Online</span>
                                    </div>
                                    <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                        Ready to transform your dealership operations?
                                    </p>
                                    <Link
                                        href="/book-demo"
                                        className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-sm font-bold hover:bg-[#FF7404]/20 transition-all"
                                    >
                                        <span>Book a Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
