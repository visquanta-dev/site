import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Car Dealership AI Platform | The AutoMaster Suite by VisQuanta',
    description: 'The definitive Car Dealership AI revenue ecosystem. Automate lead reactivation, speed-to-lead, and service drive appointments for maximum dealership profit.',
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
        title: 'Car Dealership AI Platform | The AutoMaster Suite',
        description: 'The definitive automotive revenue ecosystem. An integrated suite of AI-driven tools for high-volume dealerships.',
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
