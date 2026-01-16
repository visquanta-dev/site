import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Custom Campaigns | Targeted Dealership Marketing | VisQuanta',
    description: 'Precision-engineered outreach sequences that convert prospects into scheduled appointments.',
    alternates: {
        canonical: 'https://www.visquanta.com/custom-campaigns',
    },
};

export default function CustomCampaignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
