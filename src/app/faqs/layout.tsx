import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

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
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/faqs',
        title: 'Dealership AI FAQ | VisQuanta',
        description:
            'Answers to common questions about VisQuanta, CRM integrations, onboarding timelines, and pricing. Everything your dealership needs to get started.',
    }),
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
