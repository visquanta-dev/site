// src/app/ca/blog/page.tsx
// Canadian blog index — wraps the shared blog listing with CA-specific metadata and CTAs

import { Metadata } from 'next';
import { locales, getAlternateUrls } from '@/lib/locale-config';
import { getArticles } from '@/lib/blog';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const locale = locales.ca;
const baseUrl = 'https://www.visquanta.com';

export const metadata: Metadata = {
    title: locale.blogMeta.indexTitle,
    description: locale.blogMeta.indexDescription,
    alternates: {
        canonical: `${baseUrl}/ca/blog`,
        languages: Object.fromEntries(
            getAlternateUrls('/blog').map(alt => [alt.hreflang, alt.href])
        ),
    },
    openGraph: {
        title: locale.blogMeta.indexTitle,
        description: locale.blogMeta.indexDescription,
        url: `${baseUrl}/ca/blog`,
        siteName: 'VisQuanta',
        locale: 'en_CA',
        type: 'website',
        images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta Canada',
            }
        ],
    },
};

export default async function CABlogPage() {
    // Fetch all posts using the standardized getArticles
    const posts = await getArticles({ limit: 50 });

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            {/* Canadian CTA Banner */}
            <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-white/10 pt-16">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.15),transparent_50%)]" />
                <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-24">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-2xl">{locale.flag}</span>
                        <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400 ring-1 ring-inset ring-red-500/20">
                            For Canadian Dealerships
                        </span>
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl max-w-4xl leading-[1.1]">
                        {locale.blogCta.headline}
                    </h1>
                    <p className="mt-6 max-w-2xl text-lg text-slate-300">
                        {locale.blogCta.subheadline}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href={locale.blogCta.buttonHref}
                            className="inline-flex items-center justify-center rounded-xl bg-[#FF7404] px-8 py-4 text-sm font-black uppercase tracking-widest text-black shadow-lg hover:bg-[#ff8a2b] transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            {locale.blogCta.buttonText}
                        </Link>
                        <Link
                            href="/ca/contact"
                            className="inline-flex items-center justify-center rounded-xl bg-white/5 px-8 py-4 text-sm font-bold text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 transition-all duration-200"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* Blog Post Listing */}
            <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Latest Insights for Canadian Dealerships
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-3xl">
                        AI strategies, lead management tactics, and automation insights tailored for the Canadian automotive market.
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-12 text-center">
                        <p className="text-slate-400 text-lg">No articles available at the moment. Check back soon.</p>
                    </div>
                ) : (
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
                            <article key={post.slug} className="group flex flex-col">
                                <Link href={`/ca/blog/${post.slug}`} className="flex flex-col h-full">
                                    <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-slate-800 mb-6 border border-white/5 shadow-2xl relative">
                                        <img
                                            src={post.featuredImage}
                                            alt={post.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="text-xs font-bold uppercase tracking-widest text-[#FF7404]">
                                                {post.category.title}
                                            </span>
                                            <span className="w-1 h-1 rounded-full bg-white/20" />
                                            <span className="text-xs font-medium text-slate-500">
                                                {post.readTime} min read
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white group-hover:text-[#FF7404] transition-colors duration-200 line-clamp-2 leading-tight mb-3">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-slate-400 line-clamp-3 mb-6 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                                            <time className="text-xs font-medium text-slate-500">
                                                {new Date(post.publishedAt).toLocaleDateString('en-CA', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                })}
                                            </time>
                                            <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-[#FF7404] inline-flex items-center gap-2">
                                                Full Article
                                                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                )}
            </section>

            {/* Bottom CTA */}
            <section className="mb-24 px-6">
                <div className="mx-auto max-w-5xl rounded-[2rem] overflow-hidden relative border border-[#FF7404]/20 shadow-[0_0_80px_-20px_rgba(255,116,4,0.15)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,116,4,0.05),transparent_70%)]" />

                    <div className="relative px-8 py-16 md:py-20 text-center flex flex-col items-center">
                        <h2 className="text-3xl font-black text-white sm:text-5xl tracking-tight leading-[1.1] mb-6">
                            Ready to Transform Your Dealership?
                        </h2>
                        <p className="text-lg text-slate-300 max-w-2xl mb-12">
                            Join dealerships across Canada already using AI to close more deals and recover lost revenue.
                        </p>
                        <Link
                            href={locale.blogCta.buttonHref}
                            className="inline-flex items-center justify-center rounded-xl bg-[#FF7404] px-10 py-5 text-sm font-black uppercase tracking-widest text-black shadow-lg hover:bg-[#ff8a2b] transition-all duration-200 hover:scale-105 active:scale-95"
                        >
                            {locale.blogCta.buttonText}
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
