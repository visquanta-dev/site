import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI SMS Campaigns for Car Dealerships',
    description: 'Run high-converting lease pull-aheads, service specials, and aged inventory campaigns. AI-powered SMS that books appointments at scale.',
    alternates: {
        canonical: 'https://www.visquanta.com/custom-campaigns',
        languages: {
            'en-US': 'https://www.visquanta.com/custom-campaigns',
            'en-CA': 'https://www.visquanta.com/ca/custom-campaigns',
        },
    },
    openGraph: {
        title: 'AI SMS Campaigns for Car Dealerships | VisQuanta',
        description: 'Run high-converting dealership SMS campaigns at scale. Lease pull-aheads, aged inventory, and service specials that book.',
        url: 'https://www.visquanta.com/custom-campaigns',
        type: 'website',
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};


export default function CustomCampaignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
