import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Dealer Solutions | Automotive Growth Platform',
    description: 'Explore tailored AI solutions for franchise groups, independent dealers, and auto groups. See how VisQuanta scales to meet the unique needs of your operations.',
    alternates: {
        canonical: 'https://www.visquanta.com/dealers',
        languages: {
            'en-US': 'https://www.visquanta.com/dealers',
            'en-CA': 'https://www.visquanta.com/ca/dealers',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/dealers',
    },
};

export default function DealersLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
