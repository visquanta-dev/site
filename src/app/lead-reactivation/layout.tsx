import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Lead Reactivation AI | Recover Lost CRM Revenue | VisQuanta',
    description: 'Transform dormant CRM leads into active showroom appointments. VisQuanta AI re-engages cold prospects with conversion-optimized SMS campaigns.',
    alternates: {
        canonical: 'https://visquanta.com/lead-reactivation',
    },
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
                'item': 'https://visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Lead Reactivation',
                'item': 'https://visquanta.com/lead-reactivation'
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
