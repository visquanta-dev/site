import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'Trust & Compliance — Visquanta',
    description: "Visquanta's trust and compliance overview — data processing agreements, sub-processors, and AI data handling practices.",
    alternates: {
        canonical: 'https://www.visquanta.com/trust',
        languages: {
            'en-US': 'https://www.visquanta.com/trust',
            'en-CA': 'https://www.visquanta.com/ca/trust',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/trust',
        title: 'Trust & Compliance — Visquanta',
        description:
            "Visquanta's trust and compliance overview — data processing agreements, sub-processors, and AI data handling practices.",
    }),
};

export default function TrustLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
