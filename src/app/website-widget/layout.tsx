import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AI Website Chat Widget for Dealerships',
    description: 'Convert website visitors into showroom appointments 24/7. Intelligent conversational AI with seamless CRM integration and automated lead capture.',
    alternates: {
        canonical: 'https://www.visquanta.com/website-widget',
        languages: {
            'en-US': 'https://www.visquanta.com/website-widget',
            'en-CA': 'https://www.visquanta.com/ca/website-widget',
        },
    },
    openGraph: {
        title: 'AI Website Chat Widget for Dealerships | VisQuanta',
        description: 'Convert website visitors into showroom appointments 24/7. Intelligent conversational AI with CRM integration.',
        url: 'https://www.visquanta.com/website-widget',
        type: 'website',
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

export default function WebsiteWidgetLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
