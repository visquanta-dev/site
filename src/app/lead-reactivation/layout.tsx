import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Revive Dead Dealership Leads | AI Reactivation',
    description: 'Sell more cars from leads your BDC gave up on. VisQuanta works your old CRM leads with AI-powered conversational SMS. 39%+ engagement rate. TCPA compliant.',
    keywords: 'dead dealership leads, revive old car leads, CRM lead recovery, automotive lead reactivation, sell cars from old leads, dealership database mining, AI BDC alternative',
    alternates: {
        canonical: 'https://www.visquanta.com/lead-reactivation',
        languages: {
            'en-US': 'https://www.visquanta.com/lead-reactivation',
            'en-CA': 'https://www.visquanta.com/ca/lead-reactivation',
        },
    },
    openGraph: {
        title: 'Revive Dead Dealership Leads',
        description: 'Other AI tools chase new leads. We revive the ones already in your CRM. Sell cars from leads everyone gave up on.',
        url: 'https://www.visquanta.com/lead-reactivation',
        type: 'website',
        images: [
            {
                url: 'https://www.visquanta.com/og/lead-reactivation.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta - Revive Dead Dealership Leads'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Revive Dead Dealership Leads',
        description: 'Sell cars from leads your BDC gave up on. AI that works your OLD database.',
    }
};


export default function LeadReactivationLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Lead Reactivation',
                'item': 'https://www.visquanta.com/lead-reactivation'
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
