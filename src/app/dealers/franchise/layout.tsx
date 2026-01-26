import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Franchise Dealership AI Solutions',
    description: 'Optimize franchise dealership operations with our intelligent revenue recovery and speed-to-lead modules.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/franchise',
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers/franchise',
    },
};

export default function FranchiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
