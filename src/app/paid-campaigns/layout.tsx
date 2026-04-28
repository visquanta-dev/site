import { Metadata } from 'next';
import { openGraphTwitterPack } from '@/lib/metadata';

export const metadata: Metadata = {
    title: 'Paid Campaigns | VisQuanta',
    description: "VisQuanta manages your dealership's Meta ad campaigns with AI-powered follow-up built directly in. Every single lead engaged in under 60 seconds.",
    alternates: {
        canonical: 'https://www.visquanta.com/paid-campaigns',
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/paid-campaigns',
        title: 'Paid Campaigns | VisQuanta',
        description:
            "VisQuanta manages your dealership's Meta ad campaigns with AI-powered follow-up built directly in. Every single lead engaged in under 60 seconds.",
    }),
};

export default function PaidCampaignsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
