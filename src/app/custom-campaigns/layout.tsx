import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Car Dealership Campaigns | AI SMS Marketing & Outreach | VisQuanta',
    description: 'Run high-converting car dealership campaigns at scale. Custom SMS marketing for lease pull-aheads, aged inventory, service specials & more. AI-powered outreach that books appointments, not raw leads.',
    alternates: {
        canonical: 'https://www.visquanta.com/custom-campaigns',
    },
    openGraph: {
        title: 'Car Dealership Campaigns | AI SMS Marketing & Outreach | VisQuanta',
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
