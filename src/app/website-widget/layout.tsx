import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Website Widget | Intelligent Conversational AI | VisQuanta',
    description: 'Convert more website visitors into booked appointments with our intelligent conversational AI widget.',
    alternates: {
        canonical: 'https://visquanta.com/website-widget',
    },
};

export default function WebsiteWidgetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
