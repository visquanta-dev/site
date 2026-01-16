import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Reputation Management | Visquanta Automotive Growth',
    description: 'Build an elite dealership reputation with Visquanta. Our 72-hour review growth engine and conversational SMS resolution protect your store and OEM scores.',
    alternates: {
        canonical: 'https://www.visquanta.com/reputation-management',
    },
    openGraph: {
        url: 'https://www.visquanta.com/reputation-management',
    },
};

export default function ReputationManagementLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
