import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowRight, Share2, Tag, BookOpen, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getAllPostsMeta } from '@/lib/seobot';
import { getArticles, getPostFeaturedImage, getRelatedArticles } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import BlogPostClient, { ReadingProgress, TableOfContents, ExecutiveSummary } from './BlogPostClient';
import { BlogArticleHeader } from '@/components/blog/BlogArticleHeader';
import { BLOG_ENHANCEMENTS } from '@/data/blog-enhancements';
import { BLOG_RELATED_PRODUCTS } from '@/data/blog-products';
import RelatedProducts from '@/components/blog/RelatedProducts';
import { ExpertInsight, KnowledgeCards, ProofPoint, MidArticleCTA, BottomConsultingCTA, BlogFAQAccordion } from '@/components/blog/BlogEnhancements';
import InlineNewsletter from '@/components/blog/InlineNewsletter';
import BlogCalculatorEmbed, { parseCalculatorMarkers } from '@/components/blog/BlogCalculatorEmbed';
import { getServerLocalePrefix } from '@/lib/server-locale';
import { normalizeLinks } from '@/lib/link-normalization';
import { getAuthor } from '@/lib/authors';
import AuthorByline from '@/components/AuthorByline';

export const revalidate = 60;

// Generate static params for SSG
export async function generateStaticParams() {
    try {
        const meta = await getAllPostsMeta();
        return meta.slice(0, 1000).map((post) => ({
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

    // Tag speakable sections so SpeakableSpecification CSS selectors can target
    // them. Google's Speakable schema expects selectors that resolve to the
    // DOM element whose text is safe to read aloud — adding dedicated classes
    // avoids relying on fragile positional selectors like `blockquote:first-of-type`.
    post.html = post.html
      .replace(
        /<blockquote>/,
        '<blockquote class="speakable-takeaway" data-speakable="true">',
      )
      .replace(
        /<h3([^>]*)>\s*Key Takeaways\s*<\/h3>\s*<ul/i,
        '<h3$1 id="key-takeaways">Key Takeaways</h3><ul class="speakable-bullets"',
      )
      .replace(
        /<h2([^>]*)>\s*The Bottom Line\s*<\/h2>/i,
        '<h2$1 id="the-bottom-line" class="speakable-bottom-line">The Bottom Line</h2>',
      );

    // Track which speakable sections are actually present in the rendered
    // HTML. Emitting a cssSelector that matches nothing is a Rich Results
    // validation error (".speakable-bullets — No matches found"), so only
    // include selectors for sections that exist in this specific post.
    // Legacy posts pre-Batch 1 don't have Key Takeaways bullets or a
    // Bottom Line synthesis section, so those selectors are gated.
    const speakableSelectors: string[] = [];
    if (post.html.includes('class="speakable-takeaway"')) {
      speakableSelectors.push('.speakable-takeaway');
    }
    if (post.html.includes('class="speakable-bullets"')) {
      speakableSelectors.push('.speakable-bullets');
    }
    if (post.html.includes('class="speakable-bottom-line"')) {
      speakableSelectors.push('.speakable-bottom-line');
    }

    // Resolve the named author for byline + Person schema. Returns null for
    // legacy posts whose author field is unset or still the free-text
    // "VisQuanta Team" string — those posts retain the pre-existing
    // Organization-authored schema and render without a byline. Only posts
    // that were generated with an explicit author slug (e.g. "william-voyles")
    // get upgraded to Person schema + visible byline.
    const author = getAuthor(post.author);

    // Standardized current post image mapping
    post.image = getPostFeaturedImage(post.headline, post.image);

    // Standardized Related Articles fetching
    const relatedArticles = await getRelatedArticles(post.category?.slug || 'industry-insights', slug, 2);

    // Entity linking — maps the post's category and tags onto canonical
    // Wikipedia/Wikidata entities so LLMs can resolve "what is this post
    // actually about?" to known entities in their knowledge graph. This
    // measurably improves citation in AI answer surfaces.
    const ENTITY_MAP: Record<string, { name: string; sameAs: string }> = {
        'industry-insights': { name: 'Car dealership', sameAs: 'https://en.wikipedia.org/wiki/Car_dealership' },
        'strategy': { name: 'Business strategy', sameAs: 'https://en.wikipedia.org/wiki/Strategic_management' },
        'leadership': { name: 'Leadership', sameAs: 'https://en.wikipedia.org/wiki/Leadership' },
        'case-studies': { name: 'Case study', sameAs: 'https://en.wikipedia.org/wiki/Case_study' },
        'ai': { name: 'Artificial intelligence', sameAs: 'https://en.wikipedia.org/wiki/Artificial_intelligence' },
        'automation': { name: 'Automation', sameAs: 'https://en.wikipedia.org/wiki/Automation' },
        'roi': { name: 'Return on investment', sameAs: 'https://en.wikipedia.org/wiki/Return_on_investment' },
        'dealership-operations': { name: 'Car dealership', sameAs: 'https://en.wikipedia.org/wiki/Car_dealership' },
        'service-drive': { name: 'Automobile repair shop', sameAs: 'https://en.wikipedia.org/wiki/Automobile_repair_shop' },
    };
    // Prefer the explicit entities[] array from the post's frontmatter when
    // present — UltraPlan's enrich stage picks these per-post from a curated
    // allow-list, so they reflect what the post is actually about. Legacy
    // posts without the field fall back to the category/tag lookup against
    // ENTITY_MAP below.
    const buildEntities = (): Array<{ '@type': 'Thing'; name: string; sameAs: string }> => {
        if (post.entities && post.entities.length > 0) {
            return post.entities.map((e) => ({
                '@type': 'Thing',
                name: e.name,
                sameAs: e.sameAs,
            }));
        }
        const seen = new Set<string>();
        const results: Array<{ '@type': 'Thing'; name: string; sameAs: string }> = [];
        const tryAdd = (slug: string) => {
            const entity = ENTITY_MAP[slug];
            if (!entity || seen.has(entity.sameAs)) return;
            seen.add(entity.sameAs);
            results.push({ '@type': 'Thing', name: entity.name, sameAs: entity.sameAs });
        };
        if (post.category?.slug) tryAdd(post.category.slug);
        for (const tag of post.tags ?? []) tryAdd(tag.slug);
        // Always include the dealership base entity as the subject anchor.
        tryAdd('dealership-operations');
        return results;
    };
    const entityLinks = buildEntities();

    // Article Schema
    // Enhanced with E-E-A-T signals (Experience, Expertise, Authoritativeness,
    // Trust) to improve both traditional SEO ranking and LLM citation rates.
    // Author is a named Person with sameAs to LinkedIn + team page anchor so
    // Google and LLM crawlers can resolve the author as a real entity, not
    // an anonymous "Organization" byline. This is the single highest-impact
    // EEAT change we can make — generic Organization authorship is what
    // quality raters downgrade content for.
    // Structured data requires absolute URLs — post.image may be a relative
    // path from frontmatter. Wrap in absolute URL + ImageObject so Google's
    // Rich Results validator sees proper Article-image signal instead of
    // rejecting a relative string.
    const absoluteImageUrl = post.image.startsWith('http')
        ? post.image
        : `https://www.visquanta.com${post.image.startsWith('/') ? '' : '/'}${post.image}`;
    const canonicalBlogUrl = `https://www.visquanta.com${localePrefix}/blog/${slug}`;

    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${canonicalBlogUrl}#article`,
        // isPartOf was a dangling reference to a #webpage @id that no other
        // graph entity declared — removed; mainEntityOfPage below is the
        // canonical WebPage link.
        'headline': post.headline,
        'description': post.metaDescription,
        'image': {
            '@type': 'ImageObject',
            'url': absoluteImageUrl,
            'width': 1920,
            'height': 823,
        },
        'author': author
            ? {
                '@type': 'Person',
                'name': author.name,
                'url': author.profile_url,
                'image': author.photo,
                'jobTitle': author.title,
                'description': author.credential_line,
                'knowsAbout': author.expertise,
                'worksFor': {
                    '@type': 'Organization',
                    'name': author.company,
                    'url': 'https://www.visquanta.com',
                },
                'sameAs': [
                    author.linkedin,
                    author.profile_url,
                ].filter(Boolean),
            }
            : {
                '@type': 'Organization',
                'name': 'VisQuanta',
                'url': 'https://www.visquanta.com',
                'description': 'VisQuanta provides AI infrastructure for automotive dealerships, specializing in voice agents, lead reactivation, service-drive automation, and speed-to-lead response systems.',
                'sameAs': [
                    'https://www.linkedin.com/company/visquanta',
                    'https://www.visquanta.com/about-visquanta',
                ],
                'knowsAbout': [
                    'Automotive dealership operations',
                    'AI voice agents',
                    'Fixed operations revenue',
                    'Service drive automation',
                    'Lead response time',
                    'Dealership reputation management',
                ],
            },
        'publisher': {
            '@type': 'Organization',
            'name': 'VisQuanta',
            'url': 'https://www.visquanta.com',
            'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.visquanta.com/images/visquanta-logo-white.png',
                'width': 600,
                'height': 60,
            },
            'sameAs': [
                'https://www.linkedin.com/company/visquanta',
            ],
        },
        'datePublished': post.createdAt,
        'dateModified': post.updatedAt || post.createdAt,
        'mainEntityOfPage': {
            '@type': 'WebPage',
            '@id': canonicalBlogUrl,
        },
        'url': canonicalBlogUrl,
        'inLanguage': 'en-US',
        // SpeakableSpecification — flags the sections voice assistants and
        // AI audio surfaces can safely read aloud. Selectors conditional
        // on section presence so validator doesn't error on missing matches.
        ...(speakableSelectors.length > 0 && {
            'speakable': {
                '@type': 'SpeakableSpecification',
                'cssSelector': speakableSelectors,
            },
        }),
        // Entity linking — tells LLMs exactly which Wikipedia/Wikidata
        // entities this post is about, rather than forcing them to infer
        // from keywords.
        ...(entityLinks.length > 0 && {
            'about': entityLinks,
            'mentions': entityLinks,
        }),
    };

    // FAQPage Schema — extracted from post body HTML
    //
    // Parses any H2 section whose heading contains "Frequently Asked" or
    // "FAQ", then walks its H3 siblings as questions and the following
    // paragraph(s) as answers. The resulting FAQPage JSON-LD gives Google
    // AI Overviews, ChatGPT, Perplexity, and Claude a structured handle
    // on the Q&A content — without this, the FAQ prose is parseable but
    // not authoritatively structured, which measurably lowers citation
    // rates in AI answer surfaces. Silently skipped if no FAQ section
    // is detected.
    const faqSchema = ((): Record<string, unknown> | null => {
        const html = post.html || '';
        // Locate the "Frequently Asked" H2 and everything up to the next H2
        const faqH2Match = html.match(/<h2[^>]*>[^<]*(?:Frequently Asked|FAQ)[^<]*<\/h2>([\s\S]*?)(?=<h2|$)/i);
        if (!faqH2Match) return null;
        const faqSection = faqH2Match[1];
        // Pair up H3 questions with their first following paragraph
        const qaPattern = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
        const qaPairs: Array<{ q: string; a: string }> = [];
        let m: RegExpExecArray | null;
        while ((m = qaPattern.exec(faqSection)) !== null) {
            const q = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            const a = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            if (q && a) qaPairs.push({ q, a });
        }
        if (qaPairs.length === 0) return null;
        return {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            'mainEntity': qaPairs.map(({ q, a }) => ({
                '@type': 'Question',
                'name': q,
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': a,
                },
            })),
        };
    })();

    // HowTo Schema — extracted from post body HTML
    //
    // Parses any H2 section whose heading begins with "How to", then walks the
    // following ordered list (<ol><li>...</li></ol>) and emits each <li> as
    // a HowToStep. AI Overviews, Perplexity, and ChatGPT cite HowTo schema
    // disproportionately when answering procedural queries — making numbered
    // step content machine-readable directly improves citation surface.
    // Silently skipped if no "How to" section + ordered list pair is present.
    const howToSchema = ((): Record<string, unknown> | null => {
        const html = post.html || '';
        const howToMatch = html.match(/<h2[^>]*>([^<]*How to[^<]*)<\/h2>([\s\S]*?)(?=<h2|$)/i);
        if (!howToMatch) return null;
        const howToName = howToMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        const howToSection = howToMatch[2];
        const olMatch = howToSection.match(/<ol[^>]*>([\s\S]*?)<\/ol>/i);
        if (!olMatch) return null;
        const liPattern = /<li[^>]*>([\s\S]*?)<\/li>/gi;
        const steps: Array<{ name: string; text: string }> = [];
        let m: RegExpExecArray | null;
        let idx = 0;
        while ((m = liPattern.exec(olMatch[1])) !== null) {
            idx += 1;
            const raw = m[1].trim();
            // Use the first <strong> (or sentence) as the step name; full text as the body.
            const strongMatch = raw.match(/<strong[^>]*>([\s\S]*?)<\/strong>/i);
            const stepName = strongMatch
                ? strongMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()
                : raw.replace(/<[^>]+>/g, '').split(/[.!?]/)[0].trim().slice(0, 110) || `Step ${idx}`;
            const stepText = raw.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
            if (stepText) steps.push({ name: stepName, text: stepText });
        }
        if (steps.length === 0) return null;
        return {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            'name': howToName,
            'step': steps.map((s, i) => ({
                '@type': 'HowToStep',
                'position': i + 1,
                'name': s.name,
                'text': s.text,
            })),
        };
    })();

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
            {faqSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}
            {howToSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
                />
            )}
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
                    <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-16">
                        <div className="max-w-4xl">
                            <BlogPostClient delay={0}>
                                <BlogArticleHeader article={{
                                    title: post.headline,
                                    publishedAt: post.createdAt,
                                    readTime: Number(post.readingTime || 5)
                                }} />
                                {author && (
                                    <AuthorByline
                                        author={author}
                                        publishedAt={post.createdAt}
                                        updatedAt={post.updatedAt || post.createdAt}
                                        readingTime={Number(post.readingTime || 5)}
                                    />
                                )}
                            </BlogPostClient>
                        </div>
                        <div className="hidden xl:block" aria-hidden="true" />
                    </div>
                </div>
            </section>

            {/* Hero Image Section — hideHero frontmatter flag lets a post opt out entirely */}
            {post.image && !post.hideHero && (
                <section className="relative pb-16 lg:pb-24">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-6xl mx-auto">
                            <BlogPostClient delay={0.1}>
                                <div className="relative rounded-[20px] overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50 group">
                                    {/* Top shine effect */}
                                    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

                                    <div className="relative aspect-[21/9] w-full">
                                        <Image
                                            src={post.image}
                                            alt={post.headline}
                                            fill
                                            className="object-cover"
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

                                    // Strip duplicate H1 from content (template has one)
                                    let mainContentHtml = post.html.replace(/<h1[^>]*>.*?<\/h1>/i, '');

                                    let faqHtml = '';
                                    if (faqMatch) {
                                        mainContentHtml = mainContentHtml.substring(0, faqMatch.index);
                                        faqHtml = faqMatch[1];
                                    }

                                    // Inline parser: split at {{calculator:*}} / {{cta:*}} markers.
                                    // Inlined here (not imported from BlogCalculatorEmbed) because that
                                    // module is 'use client' — calling its exported util from a server
                                    // component crosses the client boundary and throws at runtime.
                                    const markerPattern = /(?:<p>)?\{\{(?:calculator|cta):([a-z-]+)\}\}(?:<\/p>)?/g;
                                    type Segment = { type: 'html'; content: string } | { type: 'calculator'; calcType: string };
                                    const segments: Segment[] = [];
                                    let lastIndex = 0;
                                    let match: RegExpExecArray | null;
                                    while ((match = markerPattern.exec(mainContentHtml)) !== null) {
                                        if (match.index > lastIndex) {
                                            segments.push({ type: 'html', content: mainContentHtml.slice(lastIndex, match.index) });
                                        }
                                        segments.push({ type: 'calculator', calcType: match[1] });
                                        lastIndex = match.index + match[0].length;
                                    }
                                    if (lastIndex < mainContentHtml.length) {
                                        segments.push({ type: 'html', content: mainContentHtml.slice(lastIndex) });
                                    }
                                    if (segments.length === 0) {
                                        segments.push({ type: 'html', content: mainContentHtml });
                                    }
                                    const hasInlineMarkers = segments.some(s => s.type === 'calculator');

                                    if (hasInlineMarkers) {
                                        // Per-section inline placement. Newsletter injects at paragraph 6
                                        // of the first html segment if long enough. RelatedProducts at end.
                                        // MidArticleCTA omitted — calculators are the mid-article hooks.
                                        const rendered = segments.flatMap((seg, i) => {
                                            if (seg.type === 'calculator') {
                                                return [
                                                    <BlogCalculatorEmbed key={`calc-${i}`} type={seg.calcType} />
                                                ];
                                            }
                                            const segContent = seg.content;
                                            if (i === 0) {
                                                const segParagraphs = segContent.split('</p>');
                                                if (segParagraphs.length > 7) {
                                                    const before = segParagraphs.slice(0, 6).join('</p>') + '</p>';
                                                    const after = segParagraphs.slice(6).join('</p>');
                                                    return [
                                                        <div
                                                            key={`html-${i}-a`}
                                                            suppressHydrationWarning
                                                            className="blog-content"
                                                            dangerouslySetInnerHTML={{ __html: before }}
                                                        />,
                                                        <InlineNewsletter key={`newsletter-${i}`} />,
                                                        <div
                                                            key={`html-${i}-b`}
                                                            suppressHydrationWarning
                                                            className="blog-content"
                                                            dangerouslySetInnerHTML={{ __html: after }}
                                                        />,
                                                    ];
                                                }
                                            }
                                            return [
                                                <div
                                                    key={`html-${i}`}
                                                    suppressHydrationWarning
                                                    className="blog-content"
                                                    dangerouslySetInnerHTML={{ __html: segContent }}
                                                />
                                            ];
                                        });

                                        return (
                                            <>
                                                {rendered}
                                                {BLOG_RELATED_PRODUCTS[slug] && (
                                                    <RelatedProducts productSlugs={BLOG_RELATED_PRODUCTS[slug]} />
                                                )}
                                            </>
                                        );
                                    }

                                    // No markers — existing chunk logic (unchanged behavior)
                                    const paragraphs = mainContentHtml.split('</p>');

                                    if (paragraphs.length < 8) {
                                        return (
                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: mainContentHtml }}
                                            />
                                        );
                                    }

                                    const newsletterIndex = 6;
                                    const midPointIndex = Math.floor(paragraphs.length * 0.6);
                                    const chunk1 = paragraphs.slice(0, newsletterIndex).join('</p>') + '</p>';
                                    const chunk2 = paragraphs.slice(newsletterIndex, midPointIndex).join('</p>') + '</p>';
                                    const chunk3 = paragraphs.slice(midPointIndex).join('</p>');

                                    return (
                                        <>
                                            <div
                                                suppressHydrationWarning
                                                className="blog-content"
                                                dangerouslySetInnerHTML={{ __html: chunk1 }}
                                            />
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
