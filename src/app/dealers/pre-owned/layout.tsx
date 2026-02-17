import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI for Pre-Owned Dealerships',
    description: 'Turn aged inventory and old CRM leads into showroom traffic. AI-powered reactivation and speed-to-lead built for pre-owned operations.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/pre-owned',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers/pre-owned',
            'en-CA': 'https://www.visquanta.com/ca/dealers/pre-owned',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/pre-owned',
    },
};

export default function PreOwnedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
