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
            "name": "AI for Dealerships | Lead Reactivation & Speed to Lead | VisQuanta",
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



        // FAQPage - Homepage specific
        {
            "@type": "FAQPage",
            "@id": "https://www.visquanta.com/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long does implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most dealerships are fully operational within 14 days. Our white-glove onboarding process handles all integrations, training, and AI configuration so your team can focus on selling cars."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I need to change my existing systems?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "No. The AutoMaster Suite integrates seamlessly with all major DMS platforms, CRMs, and lead sources. We work alongside your existing tools, not against them."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What happens if I receive a call while the AI is responding?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Our intelligent routing system ensures live calls always take priority. The AI seamlessly hands off to your team when a customer is ready to talk, with full conversation context."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Is the AI customized for my dealership?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. During onboarding, we train the AI on your inventory, pricing, processes, and brand voice. It learns your dealership's unique personality and selling style."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What's your typical ROI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Dealers typically see 3-5x ROI within the first 90 days through recovered leads, faster response times, and increased service appointments. We provide transparent reporting so you can track every dollar."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I cancel anytime?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We offer month-to-month agreements with no long-term contracts. We're confident you'll stay because of results, not obligations."
                    }
                }
            ]
        }]
};

// Export individual schemas if needed separately
export const webPageSchema = homepageSchema["@graph"][0];
export const softwareApplicationSchema = homepageSchema["@graph"][1];
