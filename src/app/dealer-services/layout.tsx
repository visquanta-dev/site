import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI-Powered Dealer Services',
    description: 'From lead recovery to reputation protection. AI-powered services that transform how your dealership engages customers and drives measurable revenue.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealer-services',
        languages: {
            'en-US': 'https://www.visquanta.com/dealer-services',
            'en-CA': 'https://www.visquanta.com/ca/dealer-services',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealer-services',
        title: 'AI-Powered Dealer Services | VisQuanta',
        description:
            'From lead recovery to reputation protection. AI-powered services that transform how your dealership engages customers and drives measurable revenue.',
    }),
};

export default function DealerServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
