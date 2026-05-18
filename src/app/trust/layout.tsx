import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

const description =
    "VisQuanta Trust Centre — enterprise AI data controls, US & Canadian messaging compliance support, PII redaction, consent and audit trail, subprocessors, security posture, and DPA requests for dealership groups, service businesses, and vendor review teams.";

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
