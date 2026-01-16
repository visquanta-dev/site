import type { Metadata } from "next";
import { getCaseStudy } from "@/lib/case-studies";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const caseStudy = getCaseStudy(slug);

    if (!caseStudy) {
        return {
            title: 'Case Study Not Found | VisQuanta',
            description: 'The requested case study could not be found.',
            alternates: {
                canonical: `https://visquanta.com/case-studies/${slug}`,
            },
        };
    }

    return {
        title: `${caseStudy.client} Case Study | VisQuanta`,
        description: caseStudy.summary.length > 155
            ? caseStudy.summary.substring(0, 152) + '...'
            : caseStudy.summary,
        alternates: {
            canonical: `https://visquanta.com/case-studies/${slug}`,
        },
        openGraph: {
            title: caseStudy.title,
            description: caseStudy.summary,
            type: 'article',
            url: `https://visquanta.com/case-studies/${slug}`,
        },
    };
}

export default async function CaseStudyLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const caseStudy = getCaseStudy(slug);

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
                'name': 'Case Studies',
                'item': 'https://visquanta.com/case-studies'
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': caseStudy?.client || 'Case Study',
                'item': `https://visquanta.com/case-studies/${slug}`
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {children}
        </>
    );
}
