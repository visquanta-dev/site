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
}

export async function generateStaticParams() {
    // Generate static params for known routes
    const singleRoutes = Object.keys(pageImports).map(slug => ({ slug: [slug] }));
    const nestedRoutes = Object.keys(nestedPageImports).map(path => ({
        slug: path.split('/')
    }));

    return [...singleRoutes, ...nestedRoutes];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const slugPath = resolvedParams.slug.join('/');

    return {
        alternates: {
            canonical: `https://www.visquanta.com/ca/${slugPath}`,
            languages: {
                'en-US': `https://www.visquanta.com/${slugPath}`,
                'en-CA': `https://www.visquanta.com/ca/${slugPath}`,
            },
        },
    };
}

export default async function CatchAllPage({ params }: PageProps) {
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

    // Page not found
    notFound();
}
