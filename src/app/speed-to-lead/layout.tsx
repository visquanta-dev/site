import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Speed to Lead | Instant AI Response | VisQuanta',
    description: 'Contact every inbound lead instantly. VisQuanta Speed to Lead AI handles inquiries in under 60 seconds, capturing the buyer before the competition does.',
    alternates: {
        canonical: 'https://www.visquanta.com/speed-to-lead',
    },
    openGraph: {
        url: 'https://www.visquanta.com/speed-to-lead',
    },
};

export default function SpeedToLeadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
