import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

const description =
    "VisQuanta Trust Centre: enterprise AI data controls, US and Canadian messaging compliance, PII redaction, consent and audit trails, and DPA requests.";

export const metadata: Metadata = {
    title: 'Trust Centre — VisQuanta',
    description,
    alternates: {
        canonical: 'https://www.visquanta.com/trust',
        languages: {
            'en-US': 'https://www.visquanta.com/trust',
            'en-CA': 'https://www.visquanta.com/ca/trust',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/trust',
        title: 'Trust Centre — VisQuanta',
        description,
    }),
};

export default function TrustLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
