import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI for Independent Dealerships',
    description: 'Compete with franchise stores using AI-powered lead management and automated customer engagement. Scale without scaling headcount.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/independent',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/independent',
            'en-CA': 'https://www.visquanta.com/ca/dealers/independent',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealers/independent',
        title: 'AI for Independent Dealerships | VisQuanta',
        description:
            'Compete with franchise stores using AI-powered lead management and automated customer engagement. Scale without scaling headcount.',
    }),
};

export default function IndependentDealerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
