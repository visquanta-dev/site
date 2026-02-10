// src/app/ca/layout.tsx
// Canadian English locale layout wrapper with hreflang tags

import type { Metadata } from "next";

export const metadata: Metadata = {
    // Canadian-specific metadata defaults
    icons: {
        icon: [
            { url: "/favicon-ca.png", sizes: "32x32", type: "image/png" },
        ],
    },
    openGraph: {
        locale: "en_CA",
    },
    alternates: {
        canonical: "https://www.visquanta.com/ca/",
    },
};

export default function CanadianLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* hreflang tags are handled by page-level metadata */}
            {children}
        </>
    );
}
