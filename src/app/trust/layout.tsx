import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Trust Center | Security, Privacy, and Reliability | VisQuanta',
    description: 'Learn about VisQuanta\'s commitment to data security, privacy compliance, and system reliability.',
    alternates: {
        canonical: 'https://www.visquanta.com/trust',
    },
};

export default function TrustLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
