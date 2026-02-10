import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Auto Group AI | Enterprise Lead Management',
    description: 'Empower your auto group with enterprise-grade AI lead management and centralized performance tracking. Orchestrate revenue growth across all your rooftops.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/auto-groups',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/auto-groups',
            'en-CA': 'https://www.visquanta.com/ca/dealers/auto-groups',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/auto-groups',
    },
};

export default function AutoGroupsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
