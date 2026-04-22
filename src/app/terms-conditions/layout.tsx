import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms & Conditions — Visquanta',
    description: 'Service agreements, user responsibilities, and legal framework governing use of the Visquanta AI platform and services.',
    alternates: {
        canonical: 'https://www.visquanta.com/terms-conditions',
        languages: {
            'en-US': 'https://www.visquanta.com/terms-conditions',
            'en-CA': 'https://www.visquanta.com/ca/terms-conditions',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/terms-conditions',
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
