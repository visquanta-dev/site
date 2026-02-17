// src/app/ca/[...slug]/page.tsx
// Catch-all route for Canadian locale pages
// Re-routes to the corresponding US page component

import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { integrations } from '@/lib/integrations';
import { getAllCaseStudySlugs } from '@/lib/case-studies';

// Dynamic imports for each single-segment page type
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
    'ams-guides': () => import('@/app/ams-guides/page'),
    'integrations': () => import('@/app/integrations/page'),
    'resources': () => import('@/app/resources/page'),
    'privacy-policy': () => import('@/app/privacy-policy/page'),
    'terms-conditions': () => import('@/app/terms-conditions/page'),
    'cookie-policy': () => import('@/app/cookie-policy/page'),
    'case-studies': () => import('@/app/case-studies/page'),
    // Previously missing routes — now added
    'company': () => import('@/app/company/page'),
    'dealer-services': () => import('@/app/dealer-services/page'),
    'dealers': () => import('@/app/dealers/page'),
    'website-widget': () => import('@/app/website-widget/page'),
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
    // Generate static params for known single-segment routes
    const singleRoutes = Object.keys(pageImports).map(slug => ({ slug: [slug] }));

    // Generate static params for nested routes
    const nestedRoutes = Object.keys(nestedPageImports).map(path => ({
        slug: path.split('/')
    }));

    // Generate static params for individual integration pages
    const integrationRoutes = integrations.map(i => ({
        slug: ['integrations', i.slug]
    }));

    // Generate static params for individual case study pages
    const caseStudySlugs = getAllCaseStudySlugs();
    const caseStudyRoutes = caseStudySlugs.map(s => ({
        slug: ['case-studies', s]
    }));

    return [...singleRoutes, ...nestedRoutes, ...integrationRoutes, ...caseStudyRoutes];
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slugPath = resolvedParams.slug.join('/');

    let pageMetadata: Metadata = {};

    // Handle Metadata for Case Study Routes dynamically
    if (resolvedParams.slug[0] === 'case-studies') {
        try {
            const segments = resolvedParams.slug;
            const remainingSegments = segments.slice(1);

            // 1. Single Case Study: /case-studies/[slug]
            if (remainingSegments.length === 1) {
                const mod = await import('@/app/case-studies/[slug]/layout');
                if (mod.generateMetadata) {
                    pageMetadata = await mod.generateMetadata({
                        params: Promise.resolve({ slug: remainingSegments[0] })
                    });
                }
            }
        } catch (error) {
            console.error('Error fetching case study metadata for CA:', error);
        }
    }

    // Handle Metadata for Individual Integration pages
    if (resolvedParams.slug[0] === 'integrations' && resolvedParams.slug.length === 2) {
        try {
            const mod = await import('@/app/integrations/[slug]/page');
            if (mod.generateMetadata) {
                pageMetadata = await mod.generateMetadata({
                    params: Promise.resolve({ slug: resolvedParams.slug[1] })
                });
            }
        } catch (error) {
            console.error('Error fetching integration metadata for CA:', error);
        }
    }

    // Handle Metadata for static pages with layout-defined metadata
    const layoutMetadataRoutes: Record<string, () => Promise<any>> = {
        'company': () => import('@/app/company/layout'),
        'dealers': () => import('@/app/dealers/layout'),
        'dealers/independent': () => import('@/app/dealers/independent/layout'),
        'dealers/franchise': () => import('@/app/dealers/franchise/layout'),
        'dealers/auto-groups': () => import('@/app/dealers/auto-groups/layout'),
        'dealers/pre-owned': () => import('@/app/dealers/pre-owned/layout'),
        'dealers/rv': () => import('@/app/dealers/rv/layout'),
        'website-widget': () => import('@/app/website-widget/layout'),
        'lead-reactivation': () => import('@/app/lead-reactivation/layout'),
        'speed-to-lead': () => import('@/app/speed-to-lead/layout'),
        'reputation-management': () => import('@/app/reputation-management/layout'),
        'custom-campaigns': () => import('@/app/custom-campaigns/layout'),
        'auto-master-suite': () => import('@/app/auto-master-suite/layout'),
        'about-visquanta': () => import('@/app/about-visquanta/layout'),
        'contact': () => import('@/app/contact/layout'),
        'faqs': () => import('@/app/faqs/layout'),
        'trust': () => import('@/app/trust/layout'),
        'careers': () => import('@/app/careers/layout'),
        'team': () => import('@/app/team/layout'),
        'resources': () => import('@/app/resources/layout'),
        'ams-guides': () => import('@/app/ams-guides/layout'),
        'privacy-policy': () => import('@/app/privacy-policy/layout'),
        'terms-conditions': () => import('@/app/terms-conditions/layout'),
        'cookie-policy': () => import('@/app/cookie-policy/layout'),
        'case-studies': () => import('@/app/case-studies/layout'),
    };

    // If we haven't populated metadata yet (not case-study/integration), try layout metadata
    if (Object.keys(pageMetadata).length === 0 && layoutMetadataRoutes[slugPath]) {
        try {
            const layoutMod = await layoutMetadataRoutes[slugPath]();
            if (layoutMod.metadata) {
                pageMetadata = layoutMod.metadata;
            }
        } catch (error) {
            // Silent fallback — metadata will use defaults
        }
    }

    return {
        ...pageMetadata,
        alternates: {
            canonical: `https://www.visquanta.com/ca/${slugPath}`,
            languages: {
                'en-US': `https://www.visquanta.com/${slugPath}`,
                'en-CA': `https://www.visquanta.com/ca/${slugPath}`,
            },
        },
        openGraph: {
            ...(pageMetadata.openGraph as Record<string, unknown> || {        images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    }),
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

    // Check nested routes (e.g. dealers/independent)
    const nestedImporter = nestedPageImports[slugPath];
    if (nestedImporter) {
        const PageComponent = (await nestedImporter()).default;
        return <PageComponent />;
    }

    // Handle dynamic Integration routes: /integrations/[slug]
    if (resolvedParams.slug[0] === 'integrations' && resolvedParams.slug.length === 2) {
        const integrationSlug = resolvedParams.slug[1];
        const integration = integrations.find(i => i.slug === integrationSlug);
        if (integration) {
            const IntegrationPage = (await import('@/app/integrations/[slug]/page')).default;
            return <IntegrationPage params={Promise.resolve({ slug: integrationSlug })} />;
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
