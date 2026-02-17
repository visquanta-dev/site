import type { Metadata } from "next";

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
    openGraph: {
        title: 'Speed to Lead Automation for Dealerships | VisQuanta',
        description: '78% of buyers choose the first dealer to respond. Get there in seconds, not hours.',
        url: 'https://www.visquanta.com/speed-to-lead',
        type: 'website',
        images: [
            {
                url: 'https://www.visquanta.com/og/speed-to-lead.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta - Speed to Lead Automation'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Speed to Lead Automation for Dealerships | VisQuanta',
        description: 'Respond to every lead in under 60 seconds, 24/7. Book appointments before competitors answer.',
    }
};


export default function SpeedToLeadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
