import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Speed to Lead | Instant AI Response | VisQuanta',
    description: 'Contact every lead instantly. VisQuanta Speed to Lead AI handles inbound inquiries in under 60 seconds.',
    alternates: {
        canonical: 'https://www.visquanta.com/speed-to-lead',
    },
};

export default function SpeedToLeadLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
