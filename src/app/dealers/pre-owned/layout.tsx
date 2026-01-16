import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Solutions for Pre-Owned Dealers | VisQuanta',
    description: 'Maximize profitability of your pre-owned inventory with intelligent lead reactivation.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/pre-owned',
    },
};

export default function PreOwnedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
