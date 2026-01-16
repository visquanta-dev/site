import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealer Solutions | VisQuanta Automotive Growth Platform',
    description: 'Explore tailored AI solutions for franchise groups, independent dealers, and auto groups.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers',
    },
};

export default function DealersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
