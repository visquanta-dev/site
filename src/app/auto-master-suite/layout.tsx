import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AutoMaster Suite | AI Revenue Platform',
    description: 'AutoMaster Suite is a unified AI platform designed to automate dealership operations, reactivate CRM leads, and maximize your store\'s total gross profit.',
    alternates: {
        canonical: 'https://www.visquanta.com/auto-master-suite',
    },
    openGraph: {
        url: 'https://www.visquanta.com/auto-master-suite',
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
