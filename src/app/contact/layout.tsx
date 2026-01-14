import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | VisQuanta Support & Inquiries',
    description: 'Get in touch with the VisQuanta team for sales inquiries, dealer support, or general questions.',
    alternates: {
        canonical: 'https://visquanta.com/contact',
    },
};

export default function ContactLayout({
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
                'name': 'Contact',
                'item': 'https://visquanta.com/contact'
            }
        ]
    };

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        'name': 'VisQuanta',
        'image': 'https://visquanta.com/logo-white.png',
        '@id': 'https://visquanta.com/#organization',
        'url': 'https://visquanta.com',
        'telephone': '',
        'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'USA',
            'addressCountry': 'US'
        },
        'contactPoint': {
            '@type': 'ContactPoint',
            'contactType': 'customer support',
            'email': 'support@visquanta.com'
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            {children}
        </>
    );
}
