import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Automotive Speed to Lead | Respond in <60s | VisQuanta',
    description: "Stop losing leads to slow response times. VisQuanta's AI BDC software automates lead response in under 60 seconds, 24/7. Books appointments instantly.",
    keywords: 'inbound lead response time, automotive bdc software, dealership lead response, speed to lead automation, automotive crm integration, ai lead management, car dealership bdc tools, internet lead response time, automotive sales automation',
    alternates: {
        canonical: 'https://www.visquanta.com/speed-to-lead',
    },
    openGraph: {
        title: 'Automotive Speed to Lead | Respond in <60 Seconds',
        description: "78% of buyers choose the first dealer to respond. VisQuanta's AI BDC gets you there in seconds, not hours.",
        url: 'https://www.visquanta.com/speed-to-lead',
        type: 'website',
        images: [
            {
                url: 'https://www.visquanta.com/og/speed-to-lead.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta AI - Automated Dealership Lead Response'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Automotive Speed to Lead Software | VisQuanta',
        description: "Stop losing leads. Automate your dealership's response time to under 60 seconds with AI.",
    }
};


export default function SpeedToLeadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
