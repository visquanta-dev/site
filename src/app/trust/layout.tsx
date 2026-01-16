import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Trust Center | Security, Privacy, and Reliability | VisQuanta',
    description: 'Discover how VisQuanta protects your dealership\'s data. Learn about our SOC 2 Type II compliance, security protocols, and commitment to system reliability.',
    alternates: {
        canonical: 'https://www.visquanta.com/trust',
    },
    openGraph: {
        url: 'https://www.visquanta.com/trust',
    },
};

export default function TrustLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
