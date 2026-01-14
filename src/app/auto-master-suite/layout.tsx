import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AutoMaster Suite | AI Revenue Platform | VisQuanta',
    description: 'A unified platform of AI-powered modules designed to automate dealership operations and maximize gross profit.',
    alternates: {
        canonical: 'https://visquanta.com/auto-master-suite',
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
                'item': 'https://visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'AutoMaster Suite',
                'item': 'https://visquanta.com/auto-master-suite'
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
