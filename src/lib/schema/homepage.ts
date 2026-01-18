// src/lib/schema/homepage.ts
// Homepage-specific schema: WebPage + SoftwareApplication + FAQPage
// Import this in src/app/page.tsx

export const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        // WebPage - Homepage specific
        {
            "@type": "WebPage",
            "@id": "https://www.visquanta.com/#webpage",
            "url": "https://www.visquanta.com/",
            "name": "AI for Car Dealerships | Lead Reactivation & Speed to Lead | VisQuanta",
            "description": "VisQuanta's AI platform helps car dealerships reactivate dormant CRM leads, respond to inbound leads in under 60 seconds, and capture every service call with Voice AI.",
            "isPartOf": {
                "@id": "https://www.visquanta.com/#website"
            },
            "about": {
                "@id": "https://www.visquanta.com/#organization"
            },
            "primaryImageOfPage": {
                "@type": "ImageObject",
                "url": "https://www.visquanta.com/images/og-image.png",
                "width": 1200,
                "height": 630
            },
            "datePublished": "2023-01-01",
            "dateModified": "2026-01-15",
            "inLanguage": "en-US",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.visquanta.com/"
                    }
                ]
            },
            "potentialAction": {
                "@type": "ReadAction",
                "target": "https://www.visquanta.com/"
            },
            "speakable": {
                "@type": "SpeakableSpecification",
                "cssSelector": ["h1", ".hero-description", ".product-summary"]
            }
        },

        // SoftwareApplication - AutoMaster Suite
        {
            "@type": "SoftwareApplication",
            "@id": "https://www.visquanta.com/#software",
            "name": "VisQuanta AutoMaster Suite",
            "alternateName": ["AutoMaster Suite", "VisQuanta AMS"],
            "applicationCategory": "BusinessApplication",
            "applicationSubCategory": "Automotive Dealership Management",
            "operatingSystem": "Web-based",
            "description": "The complete AI platform for car dealerships. AutoMaster Suite combines lead reactivation, speed-to-lead automation, Voice AI for service departments, SMS-first website chat, and reputation management in one integrated system.",
            "url": "https://www.visquanta.com/auto-master-suite",
            "downloadUrl": "https://www.visquanta.com/book-demo",
            "installUrl": "https://www.visquanta.com/book-demo",
            "provider": {
                "@id": "https://www.visquanta.com/#organization"
            },
            "author": {
                "@id": "https://www.visquanta.com/#organization"
            },
            "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "description": "Custom pricing based on dealership size and modules selected. Contact for quote.",
                "availability": "https://schema.org/InStock",
                "seller": {
                    "@id": "https://www.visquanta.com/#organization"
                }
            },
            "featureList": [
                "Lead Reactivation — Re-engage dormant CRM leads via conversational SMS AI with 30%+ re-engagement rates",
                "Speed to Lead — Respond to every inbound lead in under 60 seconds, 24/7/365",
                "Voice AI for Service — Answer 100% of service calls, book appointments, handle after-hours inquiries",
                "SMS-First Website Widget — Convert website visitors to SMS conversations, capture real phone numbers",
                "Reputation Management — Automate review requests, intercept negative feedback, maintain 4.8+ star ratings",
                "DMS Integration — CDK Global, Reynolds & Reynolds, Tekion, Dealertrack, Frazer",
                "CRM Integration — VinSolutions, DriveCentric, eLead, DealerSocket",
                "24/7 Automated Coverage — Never miss a lead or call regardless of business hours"
            ],
            "screenshot": [
                {
                    "@type": "ImageObject",
                    "url": "https://www.visquanta.com/images/dashboard-preview.png",
                    "caption": "AutoMaster Suite Dashboard"
                }
            ],
            "softwareVersion": "2.0",
            "releaseNotes": "https://www.visquanta.com/changelog",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "47",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
            },
            "review": [
                {
                    "@type": "Review",
                    "reviewRating": {
                        "@type": "Rating",
                        "ratingValue": "5",
                        "bestRating": "5"
                    },
                    "author": {
                        "@type": "Person",
                        "name": "Dealership GM"
                    },
                    "reviewBody": "ROI in 30 days. The difference is night and day."
                }
            ]
        },

    ]
};

// Export individual schemas if needed separately
export const webPageSchema = homepageSchema["@graph"][0];
export const softwareApplicationSchema = homepageSchema["@graph"][1];
