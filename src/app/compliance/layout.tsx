import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: "Compliance Controls",
    description: "VisQuanta's public compliance controls for opt-outs, suppression, consent records, PII redaction, audit trails, electronic signature, carrier readiness, and platform security.",
    alternates: {
        canonical: "https://www.visquanta.com/compliance",
        languages: {
            "en-US": "https://www.visquanta.com/compliance",
            "en-CA": "https://www.visquanta.com/compliance",
            "x-default": "https://www.visquanta.com/compliance",
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: "https://www.visquanta.com/compliance",
        title: "Compliance Controls | VisQuanta",
        description:
            "Concrete compliance controls for dealership messaging, consent capture, PII redaction, audit trails, electronic signatures, and carrier readiness.",
    }),
};

export default function ComplianceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
