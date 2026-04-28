import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AI for RV Dealerships',
    description: 'Optimize RV sales cycles with AI-powered lead reactivation and automated service scheduling. Built for the unique demands of RV retail.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/rv',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/rv',
            'en-CA': 'https://www.visquanta.com/ca/dealers/rv',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/dealers/rv',
        title: 'AI for RV Dealerships | VisQuanta',
        description:
            'Optimize RV sales cycles with AI-powered lead reactivation and automated service scheduling. Built for the unique demands of RV retail.',
    }),
};

export default function RVLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
