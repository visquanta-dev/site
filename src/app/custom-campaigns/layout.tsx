import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Custom AI Outreach | Targeted Conversion | VisQuanta',
    description: 'Deploy precision-engineered outreach sequences that convert cold prospects into booked appointments. Tailor your dealership\'s message for maximum conversion.',
    alternates: {
        canonical: 'https://www.visquanta.com/custom-campaigns',
    },
    openGraph: {
        url: 'https://www.visquanta.com/custom-campaigns',
    },
};

export default function CustomCampaignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
