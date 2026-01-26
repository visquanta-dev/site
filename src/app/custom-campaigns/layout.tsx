import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Car Dealership AI SMS Marketing',
    description: 'Run high-converting dealership campaigns at scale. AI-powered SMS marketing for lease pull-aheads, service specials, and aged inventory that books appointments.',
    alternates: {
        canonical: 'https://www.visquanta.com/custom-campaigns',
    },
    openGraph: {
        title: 'Car Dealership AI SMS Marketing',
        description: 'Run high-converting car dealership campaigns at scale. Custom SMS marketing for lease pull-aheads, aged inventory, service specials & more.',
        url: 'https://www.visquanta.com/custom-campaigns',
        type: 'website',
    },
};


export default function CustomCampaignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
