import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compliance Controls",
    description: "VisQuanta's public compliance controls for opt-outs, suppression, consent records, PII redaction, audit trails, electronic signature, carrier readiness, and platform security.",
    alternates: {
        canonical: "https://www.visquanta.com/compliance",
        languages: {
            "en-US": "https://www.visquanta.com/compliance",
            "en-CA": "https://www.visquanta.com/ca/compliance",
        },
    },
    openGraph: {
        title: "Compliance Controls | VisQuanta",
        description: "Concrete compliance controls for dealership messaging, consent capture, PII redaction, audit trails, electronic signatures, and carrier readiness.",
        url: "https://www.visquanta.com/compliance",
        images: [
            {
                url: "https://www.visquanta.com/images/og-image.png",
                width: 1200,
                height: 630,
                alt: "VisQuanta Compliance Controls",
            },
        ],
    },
};

export default function ComplianceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
