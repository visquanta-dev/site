import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Website Widget | Intelligent Conversational AI',
    description: 'Convert visitors into showroom appointments with our intelligent conversational AI widget. Seamless CRM integration and 24/7 automated lead engagement.',
    alternates: {
        canonical: 'https://www.visquanta.com/website-widget',
        languages: {
            'en-US': 'https://www.visquanta.com/website-widget',
            'en-CA': 'https://www.visquanta.com/ca/website-widget',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/website-widget',
    },
};

export default function WebsiteWidgetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
