import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy | VisQuanta',
    description: 'Read our Privacy Policy to understand how VisQuanta handles and protects your dealership\'s data. We are committed to absolute transparency and data security.',
    alternates: {
        canonical: 'https://www.visquanta.com/privacy-policy',
    },
    openGraph: {
        url: 'https://www.visquanta.com/privacy-policy',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
