import type { Metadata } from "next";
import { openGraphTwitterPack } from "@/lib/metadata";

export const metadata: Metadata = {
    title: 'AutoMaster Suite Guides & Docs',
    description: 'Step-by-step guides to configure and optimize every AI module. Get the most from lead reactivation, speed-to-lead, Voice AI, and campaigns.',
    alternates: {
        canonical: 'https://www.visquanta.com/ams-guides',
        languages: {
            'en-US': 'https://www.visquanta.com/ams-guides',
            'en-CA': 'https://www.visquanta.com/ca/ams-guides',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/ams-guides',
        title: 'AutoMaster Suite Guides & Docs | VisQuanta',
        description:
            'Step-by-step guides to configure and optimize every AI module. Get the most from lead reactivation, speed-to-lead, Voice AI, and campaigns.',
    }),
};

export default function AMSGuidesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
