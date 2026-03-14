// src/app/ca/layout.tsx
// Canadian English locale layout wrapper

import type { Metadata } from "next";

export const metadata: Metadata = {
    icons: {
        icon: [
            { url: "/favicon-ca.png", sizes: "32x32", type: "image/png" },
        ],
    },
    openGraph: {
        locale: "en_CA",
        images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function CanadianLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
