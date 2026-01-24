'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/custom-campaigns/Hero';
import CampaignTypes from '@/components/custom-campaigns/CampaignTypes';
import Bottlenecks from '@/components/custom-campaigns/Bottlenecks';
import SystemMap from '@/components/custom-campaigns/SystemMap';
import ConversationDemo from '@/components/custom-campaigns/ConversationDemo';
import AssetStack from '@/components/custom-campaigns/AssetStack';
import KPIs from '@/components/custom-campaigns/KPIs';
import FAQ from '@/components/custom-campaigns/FAQ';
import FinalCTA from '@/components/custom-campaigns/FinalCTA';

export default function CustomCampaignsPage() {
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What type of promotions can we run?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Almost anything. Aged inventory pushes, model-specific incentives, lease pull-aheads, equity mining offers, service specials, and holiday events are the most common. If you have an offer, we can build a campaign around it."
                }
            },
            {
                "@type": "Question",
                "name": "Where do the contact lists come from?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You provide them. We can ingest data from your CRM (eLeads, VinSolutions, etc.), DMS, or any other list source as long as you have the legal right to contact them. We handle the cleaning and segmentation."
                }
            },
            {
                "@type": "Question",
                "name": "How are the replies handled?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our conversational system handles the initial engagement, qualification, and appointment booking. If a customer asks a complex question that requires human intervention, we can route it to your team, but the goal is to hand you a booked appointment, not a raw lead."
                }
            },
            {
                "@type": "Question",
                "name": "How fast can we launch a campaign?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Once we have your offer details and list, we can usually have the assets built and ready for review within 24-48 hours."
                }
            },
            {
                "@type": "Question",
                "name": "How do you handle opt-outs?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our system automatically processes STOP replies and manages the suppression list globally for your dealership to ensure full compliance."
                }
            },
            {
                "@type": "Question",
                "name": "Can you handle volumes over 100k?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Our infrastructure is built for enterprise scale. We manage the pacing (messages per second) to ensure deliverability and to prevent flooding your team with too many appointments at once."
                }
            }
        ]
    };

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "VisQuanta Custom Campaigns",
        "applicationCategory": "Marketing Automation Software",
        "operatingSystem": "Web",
        "description": "AI-powered car dealership campaign platform that creates custom SMS marketing campaigns for automotive dealerships. Handles campaign creation, list management, SMS delivery, and appointment booking.",
        "offers": {
            "@type": "Offer",
            "category": "Enterprise Software",
            "availability": "https://schema.org/InStock"
        },
        "featureList": [
            "AI-Powered SMS Outreach",
            "Campaign Asset Creation",
            "Automated Appointment Booking",
            "CRM Integration (VinSolutions, eLeads)",
            "DMS Integration",
            "Scale from 1K to 1M+ contacts",
            "Lease Pull-Ahead Campaigns",
            "Aged Inventory Marketing",
            "Service Drive Campaigns",
            "Lead Reactivation",
            "Conversational AI",
            "TCPA Compliance Management"
        ],
        "provider": {
            "@type": "Organization",
            "name": "VisQuanta",
            "url": "https://www.visquanta.com"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.visquanta.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Custom Campaigns",
                "item": "https://www.visquanta.com/custom-campaigns"
            }
        ]
    };

    return (
        <main className="bg-[#020202] min-h-screen relative overflow-hidden selection:bg-[#FF7404]/30">
            {/* JSON-LD Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Global Premium Skin Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                {/* Grainy Texture */}
                <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.6%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url%28%23noiseFilter%29%22/%3E%3C/svg%3E')]" />

                {/* Ambient Glows */}
                <div className="absolute top-0 -left-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -right-[10%] w-[40%] h-[40%] bg-[#FF7404]/[0.05] rounded-full blur-[120px]" />

                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10">
                <Navigation />

                <Hero />
                <CampaignTypes />
                <Bottlenecks />
                <SystemMap />
                <ConversationDemo />
                <AssetStack />
                <KPIs />
                <FAQ />
                <FinalCTA />

                <Footer />
            </div>
        </main>
    );
}
