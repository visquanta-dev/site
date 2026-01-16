import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Solutions for Independent Dealers | VisQuanta',
    description: 'Grow your independent dealership with AI-powered lead management and inventory turn optimization.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers/independent',
    },
};

export default function IndependentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
