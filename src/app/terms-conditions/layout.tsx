import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms & Conditions',
    description: 'Service agreements, user responsibilities, and legal framework governing the use of the VisQuanta AI platform for dealerships.',
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
