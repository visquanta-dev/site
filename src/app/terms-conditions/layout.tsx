import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Terms & Conditions | VisQuanta',
    description: 'The terms and conditions governing the use of the VisQuanta platform.',
    alternates: {
        canonical: 'https://www.visquanta.com/terms-conditions',
    },
};

export default function TermsConditionsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
