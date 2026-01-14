import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions | VisQuanta',
    description: 'Find answers to common questions about the VisQuanta platform, integration, and pricing.',
    alternates: {
        canonical: 'https://visquanta.com/faqs',
    },
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
