import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'RV Dealer AI | Lifecycle & Service Automation',
    description: 'Optimize RV dealership operations with AI-powered lead reactivation and automated service scheduling. Designed for the unique RV sales cycle.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/rv',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/rv',
            'en-CA': 'https://www.visquanta.com/ca/dealers/rv',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/rv',
    },
};

export default function RVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
