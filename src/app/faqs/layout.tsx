import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions',
    description: 'Find answers to FAQs about the VisQuanta platform, CRM integrations, onboarding, and pricing. Get the information your dealership needs to get started today.',
    alternates: {
        canonical: 'https://www.visquanta.com/faqs',
        languages: {
            'en-US': 'https://www.visquanta.com/faqs',
            'en-CA': 'https://www.visquanta.com/ca/faqs',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/faqs',
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
