import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Lead Reactivation for Car Dealerships',
    description: 'Recover revenue from dead CRM leads. AI-powered SMS re-engages old prospects with 39%+ response rates. TCPA compliant. No new ad spend required.',
    keywords: 'dead dealership leads, revive old car leads, CRM lead recovery, automotive lead reactivation, sell cars from old leads, dealership database mining, AI BDC alternative',
    alternates: {
        canonical: 'https://www.visquanta.com/lead-reactivation',
        languages: {
            'en-US': 'https://www.visquanta.com/lead-reactivation',
            'en-CA': 'https://www.visquanta.com/ca/lead-reactivation',
        },
    },
    openGraph: {
        title: 'Lead Reactivation for Car Dealerships | VisQuanta',
        description: 'Recover revenue from dead CRM leads. AI-powered SMS re-engages old prospects with 39%+ response rates.',
        url: 'https://www.visquanta.com/lead-reactivation',
        type: 'website',
        images: [
            {
                url: 'https://www.visquanta.com/og/lead-reactivation.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta - Lead Reactivation for Car Dealerships'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Lead Reactivation for Car Dealerships | VisQuanta',
        description: 'Recover revenue from dead CRM leads. AI re-engages old prospects. No new ad spend required.',
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
