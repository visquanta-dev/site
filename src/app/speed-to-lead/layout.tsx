import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Speed to Lead Automation for Dealerships',
    description: 'Respond to every lead in under 60 seconds, 24/7. AI-powered instant engagement books appointments before competitors pick up the phone.',
    keywords: 'inbound lead response time, automotive bdc software, dealership lead response, speed to lead automation, automotive crm integration, ai lead management',
    alternates: {
        canonical: 'https://www.visquanta.com/speed-to-lead',
        languages: {
            'en-US': 'https://www.visquanta.com/speed-to-lead',
            'en-CA': 'https://www.visquanta.com/ca/speed-to-lead',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/speed-to-lead',
        title: 'Speed to Lead Automation for Dealerships | VisQuanta',
        description:
            '78% of buyers choose the first dealer to respond. Get there in seconds, not hours.',
        imagePath: '/og/speed-to-lead.png',
    }),
};


export default function SpeedToLeadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
