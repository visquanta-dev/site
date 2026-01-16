import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms & Conditions | VisQuanta',
    description: 'Read the terms and conditions governing the use of the VisQuanta platform. Understand our service agreements, user responsibilities, and legal framework.',
    alternates: {
        canonical: 'https://www.visquanta.com/terms-conditions',
    },
    openGraph: {
        url: 'https://www.visquanta.com/terms-conditions',
    },
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
