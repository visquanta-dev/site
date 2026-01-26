import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | Dealer Support & Sales',
    description: 'Contact the VisQuanta team for sales inquiries, expert dealer support, or general questions. We are here to help your dealership succeed with automotive AI.',
    alternates: {
        canonical: 'https://www.visquanta.com/contact',
    },
    openGraph: {
        url: 'https://www.visquanta.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
