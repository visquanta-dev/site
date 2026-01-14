import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Solutions for Franchise Dealers | VisQuanta',
    description: 'Optimize franchise dealership operations with our intelligent revenue recovery and speed-to-lead modules.',
    alternates: {
        canonical: 'https://visquanta.com/dealers/franchise',
    },
};

export default function FranchiseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
