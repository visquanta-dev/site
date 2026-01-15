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

        // FAQPage - Comprehensive coverage of all products
        {
            "@type": "FAQPage",
            "@id": "https://www.visquanta.com/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is AI for car dealerships?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "AI for car dealerships refers to artificial intelligence software designed specifically for automotive retail operations. This includes lead reactivation systems that re-engage dormant CRM contacts via SMS, speed-to-lead automation that responds to inbound inquiries in under 60 seconds, Voice AI that answers service department calls 24/7, SMS-first chat widgets that capture real phone numbers from website visitors, and reputation management tools that automate review collection. VisQuanta's AutoMaster Suite combines all five capabilities in one platform built exclusively for car dealerships."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does lead reactivation work for dealerships?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Lead reactivation uses conversational AI to re-engage dormant leads sitting in your dealership's CRM. The AI identifies prospects who showed interest but never purchased — typically 84% of CRM leads are never re-contacted after 30 days. VisQuanta's AI initiates personalized SMS conversations with these cold leads, restarting the sales process automatically. Dealerships typically see 30%+ re-engagement rates and 11% sales uplift from leads that were previously marked as lost or inactive."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is speed to lead and why does it matter?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Speed to lead measures how quickly a dealership responds to a new sales inquiry. Research shows 78% of customers buy from the first responder, and responding within 5 minutes makes you 21x more likely to qualify the lead. The average dealership takes 22+ minutes to respond on weekends. VisQuanta's AI responds to every inbound lead in under 60 seconds via SMS, 24/7/365, engaging the customer in conversation until they're ready to book an appointment with your sales team."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does Voice AI help dealership service departments?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "VisQuanta's Voice AI answers inbound service calls 24/7, including after-hours and weekends when 80% of service calls typically go unanswered. The AI can schedule service appointments directly into your DMS, capture vehicle information and customer concerns, handle emergency diagnostic inquiries, provide service status updates, and route complex calls to advisors with full context. This ensures dealerships never miss a service call or RO opportunity — the average dealership loses $8,500+ weekly from missed service calls."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is an SMS-first website widget?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Traditional webchat loses leads when visitors leave the page — the conversation dies. VisQuanta's SMS-first widget instantly transitions website conversations to SMS text messaging, capturing the visitor's real cell phone number. This keeps the conversation alive after they leave your site. SMS achieves 98% open rates compared to email's 20%, ensuring your message gets seen. The widget captures 100% engaged leads with verified contact information."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How does VisQuanta handle reputation management?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "VisQuanta automates your CSI and review collection process. The system detects satisfied customers after purchase or service and automatically texts them a direct review link to Google, Facebook, or other platforms. Negative feedback is intercepted before it goes public, alerting your team to resolve issues proactively. Dealerships using VisQuanta average 4.8-star ratings with 100% review response rates."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What DMS and CRM systems does VisQuanta integrate with?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "VisQuanta integrates with all major automotive DMS platforms including CDK Global, Reynolds & Reynolds, Tekion, Dealertrack, and Frazer. For CRM, we support VinSolutions, DriveCentric, eLead, DealerSocket, and others. We offer 50+ integrations total, connecting to your existing tech stack without requiring you to change systems or workflows. All data syncs in real-time."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does VisQuanta implementation take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Most dealerships are fully operational with VisQuanta within 14 days. The process includes: Days 1-2 for white-glove onboarding with a dedicated success manager, Days 3-5 for CRM and DMS integration, Days 6-8 for AI configuration to match your dealership's voice and processes, Days 9-11 for going live with faster response and lead engagement, and Days 12-14 for optimization as volume increases. Zero code changes required on your end."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What results can dealerships expect from VisQuanta?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "VisQuanta partner dealerships have generated $37.8 million in additional revenue, sold 7,192+ vehicles from reactivated leads, and seen an average 11.6% increase in vehicles sold. Lead reactivation achieves 30%+ re-engagement rates from dormant CRM leads. Speed-to-lead responds to 100% of inbound leads in under 60 seconds. Voice AI answers 100% of service calls with zero missed opportunities. Most dealerships see positive ROI within 30 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is BDC in a car dealership?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "BDC stands for Business Development Center — the team responsible for handling inbound leads, making outbound calls, setting appointments, and following up with prospects. BDCs struggle with 45% average annual turnover, inconsistent follow-up, and limited hours. VisQuanta's AI provides 24/7 BDC coverage without adding headcount, ensuring consistent lead handling at a fraction of traditional BDC costs. The AI works alongside your existing team, not as a replacement."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does VisQuanta cost?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "VisQuanta pricing is customized based on dealership size and which AutoMaster Suite modules you need. We offer flexible packages for independent dealers, franchise dealerships, and auto groups. Contact our team for a quote. Most dealerships see positive ROI within 30 days of implementation, with cost per appointment significantly lower than traditional BDC operations."
                    }
                }
            ]
        }
    ]
};

// Export individual schemas if needed separately
export const webPageSchema = homepageSchema["@graph"][0];
export const softwareApplicationSchema = homepageSchema["@graph"][1];
export const faqPageSchema = homepageSchema["@graph"][2];
