import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | VisQuanta Support & Inquiries',
    description: 'Get in touch with the VisQuanta team for sales inquiries, dealer support, or general questions.',
    alternates: {
        canonical: 'https://visquanta.com/contact',
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
