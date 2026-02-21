// src/app/ca/blog/[slug]/page.tsx
// Canadian blog post page — same article content, localized metadata + CTAs

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, Tag, BookOpen, TrendingUp } from 'lucide-react';
import { getBlogPost, getBlogPosts } from '@/lib/seobot';
import { getArticles, getPostFeaturedImage, getRelatedArticles } from '@/lib/blog';
import { locales, getAlternateUrls } from '@/lib/locale-config';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { BlogCard } from '@/components/blog/BlogCard';
import BlogPostClient, { ReadingProgress, TableOfContents, ExecutiveSummary } from '@/app/blog/[slug]/BlogPostClient';
import { BlogArticleHeader } from '@/components/blog/BlogArticleHeader';
import { BLOG_ENHANCEMENTS } from '@/data/blog-enhancements';
import { BLOG_RELATED_PRODUCTS } from '@/data/blog-products';
import RelatedProducts from '@/components/blog/RelatedProducts';
import { ExpertInsight, KnowledgeCards, ProofPoint, MidArticleCTA, BottomConsultingCTA, BlogFAQAccordion } from '@/components/blog/BlogEnhancements';
import InlineNewsletter from '@/components/blog/InlineNewsletter';
import { normalizeLinks } from '@/lib/link-normalization';
import BlogExitModal from '@/components/blog/BlogExitModal';

const locale = locales.ca;
const baseUrl = 'https://www.visquanta.com';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    try {
        const { posts } = await getBlogPosts(0, 100);
        return posts.map((post) => ({ slug: post.slug }));
    } catch {
        return [];
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;

    try {
        const post = await getBlogPost(slug);
        if (!post) return {};

        const featuredImage = getPostFeaturedImage(post.headline, post.image);
        const imageUrl = featuredImage?.startsWith('http')
            ? featuredImage
            : featuredImage
                ? `${baseUrl}${featuredImage}`
                : `${baseUrl}/images/og-image.png`;

        const seoTitle = post.headline?.length > 45
            ? post.headline.substring(0, 45).trim() + '...'
            : post.headline;

        const title = `${seoTitle}${locale.blogMeta.titleSuffix}`;
        const description = post.metaDescription || locale.blogMeta.indexDescription;
        const url = `${baseUrl}/ca/blog/${slug}`;

        const alternateUrls = getAlternateUrls(`/blog/${slug}`);

        return {
            title,
            description,
            alternates: {
                canonical: url,
                languages: Object.fromEntries(
                    alternateUrls.map(alt => [alt.hreflang, alt.href])
                ),
            },
            openGraph: {
                title,
                description,
                url,
                siteName: 'VisQuanta',
                locale: 'en_CA',
                type: 'article',
                images: [{ url: imageUrl, width: 1200, height: 630 }],
                publishedTime: post.createdAt,
                modifiedTime: post.updatedAt || post.createdAt,
                authors: ['VisQuanta'],
                section: post.category?.title || 'Automotive AI',
                tags: post.tags?.map(t => t.title) || [],
            },
            twitter: {
                card: 'summary_large_image',
                title,
                description,
                images: [imageUrl],
            },
        };
    } catch {
        return {};
    }
}

export default async function CABlogPostPage({ params }: PageProps) {
    const { slug } = await params;

    const post = await getBlogPost(slug);
    if (!post) notFound();

    const enhancement = BLOG_ENHANCEMENTS[slug];

    // Normalize links in HTML
    post.html = normalizeLinks(post.html);

    // Standardized current post image mapping
    post.image = getPostFeaturedImage(post.headline, post.image);

    // Standardized Related Articles fetching
    const relatedArticles = await getRelatedArticles(post.category?.slug || 'industry-insights', slug, 2);

    return (
        <main className="bg-[#050505] min-h-screen selection:bg-[#ff7404] selection:text-black font-sans">
            <Navigation />
            <ReadingProgress />
            <BlogExitModal />

            {/* Canadian Context Banner — subtle top bar */}
            <div className="bg-red-600/10 border-b border-red-500/20 pt-20">
                <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-lg">{locale.flag}</span>
                        <span className="text-sm text-red-300 font-medium">
                            You&apos;re viewing the Canadian edition
                        </span>
                    </div>
                    <Link
                        href={`/blog/${slug}`}
                        className="text-xs text-slate-400 hover:text-white transition-colors font-medium border-b border-white/10"
                    >
                        Switch to US Edition →
                    </Link>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative pt-16 pb-16 lg:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,116,4,0.08),transparent)]" />
                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
                            <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                                Canada Localized
                            </span>
                            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
                                {post.category?.title}
                            </span>
                        </div>
                        <BlogPostClient delay={0}>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-8">
                                {post.headline}
                            </h1>
                            <div className="flex items-center justify-center md:justify-start gap-6 text-zinc-500 text-sm font-medium">
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    {new Date(post.createdAt).toLocaleDateString('en-CA', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock size={16} />
                                    {post.readingTime} min read
                                </span>
                            </div>
                        </BlogPostClient>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            {post.image && (
                <section className="relative pb-16 lg:pb-24 px-4">
                    <div className="max-w-6xl mx-auto">
                        <BlogPostClient delay={0.1}>
                            <div className="relative rounded-[2rem] overflow-hidden border border-white/[0.08] shadow-2xl">
                                <div className="relative aspect-[21/9] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.headline}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                                </div>
                            </div>
                        </BlogPostClient>
                    </div>
                </section>
            )}

            {/* Main Content */}
            <article className="relative pb-24 px-4">
                <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-16">
                    <div className="max-w-4xl">
                        <ExecutiveSummary summary={post.metaDescription} />

                        <BlogPostClient delay={0.2}>
                            {enhancement?.executivePoV && (
                                <ExpertInsight {...enhancement.executivePoV} />
                            )}

                            {(() => {
                                let mainContentHtml = post.html.replace(/<h1[^>]*>.*?<\/h1>/i, '');
                                const faqMatch = mainContentHtml.match(/<h2 id="faqs"[^>]*>.*?<\/h2>([\s\S]*)/i);

                                if (faqMatch) {
                                    mainContentHtml = mainContentHtml.substring(0, faqMatch.index);
                                }

                                const paragraphs = mainContentHtml.split('</p>');

                                if (paragraphs.length < 8) {
                                    return <div className="blog-content" dangerouslySetInnerHTML={{ __html: mainContentHtml }} />;
                                }

                                const newsletterIndex = 6;
                                const midPointIndex = Math.floor(paragraphs.length * 0.6);

                                return (
                                    <>
                                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: paragraphs.slice(0, newsletterIndex).join('</p>') + '</p>' }} />
                                        <InlineNewsletter />
                                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: paragraphs.slice(newsletterIndex, midPointIndex).join('</p>') + '</p>' }} />
                                        <MidArticleCTA />
                                        <div className="blog-content" dangerouslySetInnerHTML={{ __html: paragraphs.slice(midPointIndex).join('</p>') }} />

                                        {BLOG_RELATED_PRODUCTS[slug] && (
                                            <RelatedProducts productSlugs={BLOG_RELATED_PRODUCTS[slug]} />
                                        )}
                                    </>
                                );
                            })()}

                            {enhancement?.glossaryTerms && <KnowledgeCards terms={enhancement.glossaryTerms} />}
                            {enhancement?.caseStudyProof && <ProofPoint {...enhancement.caseStudyProof} />}

                            {/* FAQ Section */}
                            {(() => {
                                const faqMatch = post.html.match(/<h2 id="faqs"[^>]*>.*?<\/h2>([\s\S]*)/i);
                                if (!faqMatch) return null;
                                const qMatches = Array.from(faqMatch[1].matchAll(/<h3[^>]*>(.*?)<\/h3>([\s\S]*?)(?=<h3|$)/gi));
                                const faqItems = qMatches.map(m => ({
                                    question: m[1].replace(/<[^>]*>/g, '').trim(),
                                    answer: m[2].trim()
                                }));
                                return faqItems.length > 0 ? <BlogFAQAccordion faqs={faqItems} /> : null;
                            })()}

                            <BottomConsultingCTA />
                        </BlogPostClient>

                        {/* Tags */}
                        {post.tags && post.tags.length > 0 && (
                            <div className="mt-20 pt-10 border-t border-white/[0.06] flex flex-wrap gap-3">
                                {post.tags.map((tag) => (
                                    <Link
                                        key={tag.slug}
                                        href={`/blog/tag/${tag.slug}`}
                                        className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] text-zinc-400 text-xs font-bold uppercase tracking-widest hover:bg-white/[0.06] hover:text-white transition-all"
                                    >
                                        {tag.title}
                                    </Link>
                                ))}
                            </div>
                        )}

                        {/* Canadian Featured CTA Section */}
                        <div className="mt-24 relative overflow-hidden rounded-[2.5rem] border border-red-500/20 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-slate-900 to-slate-900" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.1),transparent_50%)]" />

                            <div className="relative p-10 md:p-16 text-center lg:text-left flex flex-col lg:flex-row items-center gap-12">
                                <div className="flex-1">
                                    <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                                        <span className="text-2xl">{locale.flag}</span>
                                        <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-[10px] font-black uppercase tracking-[0.2em] text-red-500">
                                            For Canadian Dealerships
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                                        {locale.blogCta.headline}
                                    </h2>
                                    <p className="text-slate-400 text-lg mb-10 max-w-xl hidden md:block leading-relaxed">
                                        {locale.blogCta.subheadline}
                                    </p>
                                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                        <Link href={locale.blogCta.buttonHref}>
                                            <button className="px-10 py-5 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-black uppercase tracking-widest rounded-2xl transition-all hover:scale-105 shadow-xl">
                                                Book CA Demo
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden lg:block w-px h-64 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                <div className="hidden lg:flex flex-col gap-8 flex-shrink-0">
                                    {[
                                        { label: 'AMVIC/OMVIC', sub: 'Compliance Ready' },
                                        { label: 'Bilingual Support', sub: 'Available' },
                                        { label: 'Local Scaling', sub: 'Across Provinces' }
                                    ].map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-white font-black text-xl uppercase tracking-widest">{stat.label}</div>
                                            <div className="text-zinc-500 text-xs font-bold uppercase tracking-widest">{stat.sub}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Related Posts */}
                        {relatedArticles && relatedArticles.length > 0 && (
                            <div className="mt-32">
                                <h3 className="text-xl font-black text-white uppercase tracking-[0.3em] mb-12 text-center md:text-left">
                                    Continue Researching
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {relatedArticles.map((article) => (
                                        <BlogCard key={article.slug} article={article} />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <aside className="hidden xl:block">
                        <div className="sticky top-32">
                            <TableOfContents />
                        </div>
                    </aside>
                </div>
            </article>

            <Footer />
        </main>
    );
}
