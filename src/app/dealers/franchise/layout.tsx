import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI for Franchise Dealerships',
    description: 'Hit OEM targets and grow fixed ops with AI-powered lead recovery and sub-60s response times. Built for high-volume franchise operations.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/franchise',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/franchise',
            'en-CA': 'https://www.visquanta.com/ca/dealers/franchise',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealers/franchise',
        title: 'AI for Franchise Dealerships | VisQuanta',
        description:
            'Hit OEM targets and grow fixed ops with AI-powered lead recovery and sub-60s response times. Built for high-volume franchise operations.',
    }),
};

export default function FranchiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
