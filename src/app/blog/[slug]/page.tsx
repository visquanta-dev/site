import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Share2, Tag, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getBlogPosts } from '@/lib/seobot';
import { getArticles, getPostFeaturedImage, getRelatedArticles } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import BlogPostClient, { ReadingProgress, TableOfContents, ExecutiveSummary } from './BlogPostClient';
import { BlogArticleHeader } from '@/components/blog/BlogArticleHeader';
import { BLOG_ENHANCEMENTS } from '@/data/blog-enhancements';
import { BLOG_RELATED_PRODUCTS } from '@/data/blog-products';
import RelatedProducts from '@/components/blog/RelatedProducts';
import { ExpertInsight, KnowledgeCards, ProofPoint, MidArticleCTA, BottomConsultingCTA, BlogFAQAccordion } from '@/components/blog/BlogEnhancements'; import InlineNewsletter from '@/components/blog/InlineNewsletter';
import { getServerLocalePrefix } from '@/lib/server-locale';
import { normalizeLinks } from '@/lib/link-normalization';

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
            title: 'Post Not Found',
        };
    }

    // Use standardized featured image mapping to avoid visual drift in social previews
    const featuredImage = getPostFeaturedImage(post.headline, post.image);

    // Ensure image URL is absolute
    const imageUrl = featuredImage?.startsWith('http')
        ? featuredImage
        : featuredImage
            ? `https://www.visquanta.com${featuredImage}`
            : 'https://www.visquanta.com/images/og-image.png';

    // Sanitize and expand meta description if too short (for SEO)
    let description = post.metaDescription || '';
    if (description.length > 0 && description.length < 120) {
        const filler = ' Explore how VisQuanta is transforming automotive retail with advanced AI lead reactivation and voice automation.';
        description = `${description}${filler}`.substring(0, 158).trim();
    }

    // Clean up title for SEO (max 60 chars total is ideal)
    // Root layout appends "| VisQuanta" (13 chars), so we need to keep this under 47 chars
    let seoTitle = post.headline || '';
    if (seoTitle.length > 45) {
        seoTitle = seoTitle.substring(0, 45).trim() + '...';
    }
    // const finalTitle = `${seoTitle} | VisQuanta`; // REMOVED: Avoid double suffix
    const finalTitle = seoTitle;

    return {
        title: finalTitle,
        description: description,
        authors: [{ name: 'VisQuanta', url: 'https://www.visquanta.com' }],
        alternates: {
            canonical: `https://www.visquanta.com/blog/${slug}`,
            languages: {
                'en-US': `https://www.visquanta.com/blog/${slug}`,
                'en-CA': `https://www.visquanta.com/ca/blog/${slug}`,
                'x-default': `https://www.visquanta.com/blog/${slug}`,
            },
        },
        // Complete Open Graph for articles (10/10 compliance)
        openGraph: {
            type: 'article',
            url: `https://www.visquanta.com/blog/${slug}`,
            siteName: 'VisQuanta',
            locale: 'en_US',
            title: `${finalTitle} | VisQuanta`,
            description: description,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.headline,
                    type: 'image/jpeg',
                }
            ],
            // Article-specific OG properties
            publishedTime: post.createdAt,
            modifiedTime: post.updatedAt || post.createdAt,
            authors: ['VisQuanta'],
            section: post.category?.title || 'Automotive AI',
            tags: post.tags?.map(t => t.title) || [],
        },
        // Twitter Card
        twitter: {
            card: 'summary_large_image',
            site: '@VisQuanta',
            creator: '@VisQuanta',
            title: finalTitle,
            description: description,
            images: [imageUrl],
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

    const enhancement = BLOG_ENHANCEMENTS[slug];
    const localePrefix = await getServerLocalePrefix();

    // PHASE 2: Implement Render-Time Link Normalisation
    // Eliminate internal redirect reliance by rewriting legacy links in the HTML
    post.html = normalizeLinks(post.html);

    // Standardized current post image mapping
    post.image = getPostFeaturedImage(post.headline, post.image);

    // Standardized Related Articles fetching
    const relatedArticles = await getRelatedArticles(post.category?.slug || 'industry-insights', slug, 2);

    // Article Schema
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        '@id': `https://www.visquanta.com${localePrefix}/blog/${slug}#article`,
        'isPartOf': {
            '@id': `https://www.visquanta.com${localePrefix}/blog/${slug}#webpage`
        },
        'headline': post.headline,
        'description': post.metaDescription,
        'image': post.image,
        'author': {
            '@type': 'Organization',
            'name': 'VisQuanta',
            'url': 'https://www.visquanta.com'
        },
        'publisher': {
            '@type': 'Organization',
            'name': 'VisQuanta',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.visquanta.com/images/visquanta-logo-white.png'
            }
        },
        'datePublished': post.createdAt,
        'dateModified': post.updatedAt || post.createdAt,
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': `https://www.visquanta.com/blog/${slug}`
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
                'item': `https://www.visquanta.com${localePrefix || '/'}`
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Blog',
                'item': `https://www.visquanta.com/blog`
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': post.headline,
                'item': `https://www.visquanta.com/blog/${slug}`
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
                            <BlogArticleHeader article={{
                                title: post.headline,
                                publishedAt: post.createdAt,
                                readTime: Number(post.readingTime || 5)
                            }} />
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
                                <div className="relative rounded-[20px] overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 group featured-card-border">
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
                                {enhancement?.executivePoV && (
                                    <ExpertInsight
                                        {...enhancement.executivePoV}
                                    />
                                )}

                                {(() => {
                                    const faqMatch = post.html.match(/<h2 id="faqs"[^>]*>.*?<\/h2>([\s\S]*)/i);

                                    // FIX ISSUE 2: Strip duplicate H1 from content (since template has one)
                                    let mainContentHtml = post.html.replace(/<h1[^>]*>.*?<\/h1>/i, '');

                                    let faqHtml = '';

                                    if (faqMatch) {
                                        mainContentHtml = mainContentHtml.substring(0, faqMatch.index);
                                        faqHtml = faqMatch[1];
                                    }

                                    const paragraphs = mainContentHtml.split('</p>');

                                    // If text is short, just show it
                                    if (paragraphs.length < 8) {
                                        return (
                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: mainContentHtml }}
                                            />
                                        );
                                    }

                                    // Injection Logic
                                    // 1. Newsletter after paragraph 6
                                    // 2. MidPageCTA at roughly 60% mark

                                    const newsletterIndex = 6;
                                    const midPointIndex = Math.floor(paragraphs.length * 0.6);

                                    // Create chunks
                                    // 1. Start to Newsletter
                                    const chunk1 = paragraphs.slice(0, newsletterIndex).join('</p>') + '</p>';

                                    // 2. Newsletter to Midpoint
                                    const chunk2 = paragraphs.slice(newsletterIndex, midPointIndex).join('</p>') + '</p>';

                                    // 3. Midpoint to End
                                    const chunk3 = paragraphs.slice(midPointIndex).join('</p>');

                                    return (
                                        <>
                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: chunk1 }}
                                            />

                                            {/* INLINE NEWSLETTER */}
                                            <InlineNewsletter />

                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: chunk2 }}
                                            />

                                            <MidArticleCTA />

                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: chunk3 }}
                                            />

                                            {/* CONTEXTUAL PRODUCT CROSS-LINKING */}
                                            {BLOG_RELATED_PRODUCTS[slug] && (
                                                <RelatedProducts productSlugs={BLOG_RELATED_PRODUCTS[slug]} />
                                            )}
                                        </>
                                    );
                                })()}

                                {enhancement?.glossaryTerms && (
                                    <KnowledgeCards terms={enhancement.glossaryTerms} />
                                )}

                                {enhancement?.caseStudyProof && (
                                    <ProofPoint {...enhancement.caseStudyProof} />
                                )}

                                {(() => {
                                    const faqMatch = post.html.match(/<h2 id="faqs"[^>]*>.*?<\/h2>([\s\S]*)/i);
                                    if (!faqMatch) return null;

                                    const faqHtml = faqMatch[1];
                                    const faqItems: { question: string; answer: string }[] = [];

                                    // Match h3 tags as questions
                                    const qMatches = Array.from(faqHtml.matchAll(/<h3[^>]*>(.*?)<\/h3>([\s\S]*?)(?=<h3|$)/gi));

                                    qMatches.forEach(match => {
                                        faqItems.push({
                                            question: match[1].replace(/<[^>]*>/g, '').trim(),
                                            answer: match[2].trim()
                                        });
                                    });

                                    if (faqItems.length === 0) return null;

                                    return <BlogFAQAccordion faqs={faqItems} />;
                                })()}

                                <BottomConsultingCTA />
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
                                                    href={`${localePrefix}/blog/tag/${tag.slug}`}
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
                                        <Link href={`${localePrefix}/book-demo`}>
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
                            {/* Related Posts */}
                            {post.relatedPosts && post.relatedPosts.length > 0 && (
                                <BlogPostClient delay={0.5}>
                                    <div className="mt-24">
                                        {/* Refined Section Header */}
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="h-px flex-1 bg-zinc-800" />
                                            <span className="text-sm uppercase tracking-widest text-zinc-500">
                                                Continue Reading
                                            </span>
                                            <div className="h-px flex-1 bg-zinc-800" />
                                        </div>

                                        {relatedArticles && relatedArticles.length > 0 && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {relatedArticles.map((article) => (
                                                    <BlogCard
                                                        key={article.slug}
                                                        article={article}
                                                        className="hover:-translate-y-2 transition-transform duration-300"
                                                    />
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </BlogPostClient>
                            )}
                        </div>

                        {/* Sidebar with Table of Contents */}
                        <aside className="hidden xl:block">
                            <div className="sticky top-32">
                                <TableOfContents />


                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
