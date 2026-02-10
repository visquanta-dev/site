// src/app/ca/[...slug]/page.tsx
// Catch-all route for Canadian locale pages
// Re-routes to the corresponding US page component

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// Dynamic imports for each page type
const pageImports: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    'lead-reactivation': () => import('@/app/lead-reactivation/page'),
    'speed-to-lead': () => import('@/app/speed-to-lead/page'),
    'reputation-management': () => import('@/app/reputation-management/page'),
    'custom-campaigns': () => import('@/app/custom-campaigns/page'),
    'auto-master-suite': () => import('@/app/auto-master-suite/page'),
    'service-drive': () => import('@/app/service-drive/page'),
    'dealer-success': () => import('@/app/dealer-success/page'),
    'about-visquanta': () => import('@/app/about-visquanta/page'),
    'team': () => import('@/app/team/page'),
    'careers': () => import('@/app/careers/page'),
    'trust': () => import('@/app/trust/page'),
    'book-demo': () => import('@/app/book-demo/page'),
    'contact': () => import('@/app/contact/page'),
    'faqs': () => import('@/app/faqs/page'),
    'blog': () => import('@/app/blog/page'),
    'ams-guides': () => import('@/app/ams-guides/page'),
    'integrations': () => import('@/app/integrations/page'),
    'resources': () => import('@/app/resources/page'),
    'privacy-policy': () => import('@/app/privacy-policy/page'),
    'terms-conditions': () => import('@/app/terms-conditions/page'),
    'cookie-policy': () => import('@/app/cookie-policy/page'),
    'case-studies': () => import('@/app/case-studies/page'),
};

// Nested route imports (e.g., /dealers/independent)
const nestedPageImports: Record<string, () => Promise<{ default: React.ComponentType }>> = {
    'dealers/independent': () => import('@/app/dealers/independent/page'),
    'dealers/franchise': () => import('@/app/dealers/franchise/page'),
    'dealers/auto-groups': () => import('@/app/dealers/auto-groups/page'),
    'dealers/pre-owned': () => import('@/app/dealers/pre-owned/page'),
    'dealers/rv': () => import('@/app/dealers/rv/page'),
};

interface PageProps {
    params: Promise<{ slug: string[] }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateStaticParams() {
    // Generate static params for known routes
    const singleRoutes = Object.keys(pageImports).map(slug => ({ slug: [slug] }));
    const nestedRoutes = Object.keys(nestedPageImports).map(path => ({
        slug: path.split('/')
    }));

    return [...singleRoutes, ...nestedRoutes];
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slugPath = resolvedParams.slug.join('/');

    let blogMetadata: Metadata = {};

    // Handle Metadata for Blog Routes dynamically
    if (resolvedParams.slug[0] === 'blog') {
        try {
            const segments = resolvedParams.slug;
            const remainingSegments = segments.slice(1);

            // 1. Single Blog Post: /blog/[slug]
            if (remainingSegments.length === 1 && remainingSegments[0] !== 'category' && remainingSegments[0] !== 'tag') {
                const mod = await import('@/app/blog/[slug]/page');
                if (mod.generateMetadata) {
                    // @ts-ignore
                    blogMetadata = await mod.generateMetadata({
                        params: Promise.resolve({ slug: remainingSegments[0] })
                    });
                }
            }
            // 2. Blog Category: /blog/category/[slug]
            else if (remainingSegments.length === 2 && remainingSegments[0] === 'category') {
                const mod = await import('@/app/blog/category/[slug]/page');
                if (mod.generateMetadata) {
                    // @ts-ignore
                    blogMetadata = await mod.generateMetadata({
                        params: Promise.resolve({ slug: remainingSegments[1] }),
                        searchParams: searchParams as any
                    });
                }
            }
            // 3. Blog Tag: /blog/tag/[slug]
            else if (remainingSegments.length === 2 && remainingSegments[0] === 'tag') {
                const mod = await import('@/app/blog/tag/[slug]/page');
                if (mod.generateMetadata) {
                    // @ts-ignore
                    blogMetadata = await mod.generateMetadata({
                        params: Promise.resolve({ slug: remainingSegments[1] }),
                        searchParams: searchParams as any
                    });
                }
            }
            // 4. Main Blog Index: /blog
            else if (remainingSegments.length === 0) {
                const mod = await import('@/app/blog/page');
                // @ts-ignore
                if (mod.metadata) {
                    // @ts-ignore
                    blogMetadata = mod.metadata;
                }
            }
        } catch (error) {
            console.error('Error fetching blog metadata for CA:', error);
        }
    }

    // Handle Metadata for Case Study Routes dynamically
    if (resolvedParams.slug[0] === 'case-studies') {
        try {
            const segments = resolvedParams.slug;
            const remainingSegments = segments.slice(1);

            // 1. Single Case Study: /case-studies/[slug]
            if (remainingSegments.length === 1) {
                const mod = await import('@/app/case-studies/[slug]/layout');
                if (mod.generateMetadata) {
                    blogMetadata = await mod.generateMetadata({
                        params: Promise.resolve({ slug: remainingSegments[0] })
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching case study metadata for CA:', error);
        }
    }

    return {
        ...blogMetadata,
        alternates: {
            canonical: `https://www.visquanta.com/ca/${slugPath}`,
            languages: {
                'en-US': `https://www.visquanta.com/${slugPath}`,
                'en-CA': `https://www.visquanta.com/ca/${slugPath}`,
            },
        },
        openGraph: {
            ...blogMetadata.openGraph,
            url: `https://www.visquanta.com/ca/${slugPath}`,
            locale: 'en_CA',
        }
    };
}

export default async function CatchAllPage({ params, searchParams }: PageProps) {
    const resolvedParams = await params;
    const slugPath = resolvedParams.slug.join('/');

    // Check single-level routes first
    if (resolvedParams.slug.length === 1) {
        const importer = pageImports[resolvedParams.slug[0]];
        if (importer) {
            const PageComponent = (await importer()).default;
            return <PageComponent />;
        }
    }

    // Check nested routes
    const nestedImporter = nestedPageImports[slugPath];
    if (nestedImporter) {
        const PageComponent = (await nestedImporter()).default;
        return <PageComponent />;
    }

    // Handle dynamic Blog routes (Post, Category, Tag)
    if (resolvedParams.slug[0] === 'blog') {
        const segments = resolvedParams.slug;
        const remainingSegments = segments.slice(1);

        // 1. Single Blog Post: /blog/[slug]
        if (remainingSegments.length === 1 && remainingSegments[0] !== 'category' && remainingSegments[0] !== 'tag') {
            const BlogPostPage = (await import('@/app/blog/[slug]/page')).default;
            return <BlogPostPage params={Promise.resolve({ slug: remainingSegments[0] })} />;
        }

        // 2. Blog Category: /blog/category/[slug]
        if (remainingSegments.length === 2 && remainingSegments[0] === 'category') {
            const BlogCategoryPage = (await import('@/app/blog/category/[slug]/page')).default;
            return <BlogCategoryPage
                params={Promise.resolve({ slug: remainingSegments[1] })}
                searchParams={searchParams as any}
            />;
        }

        // 3. Blog Tag: /blog/tag/[slug]
        if (remainingSegments.length === 2 && remainingSegments[0] === 'tag') {
            const BlogTagPage = (await import('@/app/blog/tag/[slug]/page')).default;
            return <BlogTagPage
                params={Promise.resolve({ slug: remainingSegments[1] })}
                searchParams={searchParams as any}
            />;
        }
    }

    // Handle dynamic Case Study routes
    if (resolvedParams.slug[0] === 'case-studies') {
        const segments = resolvedParams.slug;
        const remainingSegments = segments.slice(1);

        // 1. Single Case Study: /case-studies/[slug]
        if (remainingSegments.length === 1) {
            const CaseStudyPage = (await import('@/app/case-studies/[slug]/page')).default;
            const CaseStudyLayout = (await import('@/app/case-studies/[slug]/layout')).default;

            return (
                <CaseStudyLayout params={Promise.resolve({ slug: remainingSegments[0] })}>
                    <CaseStudyPage params={Promise.resolve({ slug: remainingSegments[0] })} />
                </CaseStudyLayout>
            );
        }
    }

    // Page not found
    notFound();
}
