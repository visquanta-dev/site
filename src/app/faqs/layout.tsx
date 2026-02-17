import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealership AI FAQ',
    description: 'Answers to common questions about VisQuanta, CRM integrations, onboarding timelines, and pricing. Everything your dealership needs to get started.',
    alternates: {
        canonical: 'https://www.visquanta.com/faqs',
        languages: {
            'en-US': 'https://www.visquanta.com/faqs',
            'en-CA': 'https://www.visquanta.com/ca/faqs',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/faqs',
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

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
