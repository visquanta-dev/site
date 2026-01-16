import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Privacy Policy | VisQuanta',
    description: 'Our commitment to protecting your data and privacy.',
    alternates: {
        canonical: 'https://www.visquanta.com/privacy-policy',
    },
};

export default function PrivacyPolicyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
