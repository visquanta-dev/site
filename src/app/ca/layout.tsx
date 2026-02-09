// src/app/ca/layout.tsx
// Canadian English locale layout wrapper with hreflang tags

import type { Metadata } from "next";

export const metadata: Metadata = {
    // Canadian-specific metadata defaults
    openGraph: {
        locale: "en_CA",
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
