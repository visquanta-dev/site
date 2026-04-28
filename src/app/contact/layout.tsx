import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Contact VisQuanta — Sales & Support',
    description: 'Talk to our team about AI for your dealership. Get a custom revenue projection, onboarding details, or answers to technical questions.',
    alternates: {
        canonical: 'https://www.visquanta.com/contact',
        languages: {
            'en-US': 'https://www.visquanta.com/contact',
            'en-CA': 'https://www.visquanta.com/ca/contact',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/contact',
        title: 'Contact VisQuanta — Sales & Support',
        description:
            'Talk to our team about AI for your dealership. Get a custom revenue projection, onboarding details, or answers to technical questions.',
    }),
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
