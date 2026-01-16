import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pre-Owned Dealer AI | Lead Reactivation & Turn | VisQuanta',
    description: 'Maximize pre-owned inventory profitability with intelligent lead reactivation and speed-to-lead AI. Transform old CRM data into active showroom traffic.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/pre-owned',
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
