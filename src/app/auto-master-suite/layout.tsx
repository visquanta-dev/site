import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'The AutoMaster Suite for Dealerships',
    description: 'The complete AI revenue ecosystem for car dealerships. Lead reactivation, speed-to-lead, service drive Voice AI, and reputation management in one platform.',
    keywords: [
        'car dealership ai',
        'automotive ai platform',
        'dealership revenue automation',
        'ai for car dealers',
        'automaster suite',
        'dealership growth platform'
    ],
    alternates: {
        canonical: 'https://www.visquanta.com/auto-master-suite',
        languages: {
            'en-US': 'https://www.visquanta.com/auto-master-suite',
            'en-CA': 'https://www.visquanta.com/ca/auto-master-suite',
        },
    },
    openGraph: {
        title: 'The AutoMaster Suite for Dealerships | VisQuanta',
        description: 'The complete AI revenue ecosystem. Lead reactivation, speed-to-lead, Voice AI, and reputation management in one platform.',
        url: 'https://www.visquanta.com/auto-master-suite',
        type: 'website',
    },
};

export default function AMSLayout({
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
                'name': 'AutoMaster Suite',
                'item': 'https://www.visquanta.com/auto-master-suite'
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
