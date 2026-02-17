import type { Metadata } from "next";

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
    openGraph: {
        url: 'https://www.visquanta.com/dealers/independent',
    },
};

export default function IndependentDealerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
