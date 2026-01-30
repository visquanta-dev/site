// src/lib/schema/base.ts
// Site-wide schema: Organization + WebSite
// These appear on EVERY page via layout.tsx

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.visquanta.com/#organization",
    "name": "VisQuanta",
    "legalName": "VisQuanta LLC",
    "alternateName": ["VisQuanta AI", "VisQuanta AutoMaster"],
    "url": "https://www.visquanta.com",
    "logo": {
        "@type": "ImageObject",
        "@id": "https://www.visquanta.com/#logo",
        "url": "https://www.visquanta.com/images/visquanta-logo-transparent.png",
        "contentUrl": "https://www.visquanta.com/images/visquanta-logo-transparent.png",
        "width": 400,
        "height": 100,
        "caption": "VisQuanta Logo"
    },
    "image": {
        "@type": "ImageObject",
        "url": "https://www.visquanta.com/images/og-image.png",
        "width": 1200,
        "height": 630
    },
    "description": "VisQuanta is an AI platform for car dealerships, providing lead reactivation, speed-to-lead automation, Voice AI for service departments, SMS-first website chat, and reputation management. Purpose-built for automotive retail.",
    "foundingDate": "2023",
    "founder": {
        "@type": "Organization",
        "name": "VisQuanta LLC"
    },
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "2222 Ponce de Leon Blvd, 3rd Floor",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "postalCode": "33134",
        "addressCountry": "US"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+1-786-686-6554",
            "contactType": "sales",
            "email": "info@visquanta.com",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"]
        },
        {
            "@type": "ContactPoint",
            "telephone": "+1-786-686-6554",
            "contactType": "customer support",
            "email": "support@visquanta.com",
            "areaServed": "US",
            "availableLanguage": ["English", "Spanish"]
        }
    ],
    "sameAs": [
        "https://www.linkedin.com/company/visquanta",
        "https://www.youtube.com/@visquanta",
        "https://www.facebook.com/people/VisQuanta/61567841541110/",
        "https://x.com/VisQuanta",
        "https://www.instagram.com/visquanta/",
        "https://www.tiktok.com/@visquanta"
    ],
    "areaServed": {
        "@type": "Country",
        "name": "United States"
    },
    "knowsAbout": [
        "AI for car dealerships",
        "Automotive AI",
        "Lead reactivation",
        "Speed to lead",
        "Voice AI for dealerships",
        "SMS marketing for dealerships",
        "Reputation management",
        "BDC automation",
        "CRM integration",
        "DMS integration",
        "Dealership operations software",
        "Automotive sales automation",
        "Service department AI"
    ],
    "slogan": "AI for Car Dealerships"
};

export const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.visquanta.com/#website",
    "url": "https://www.visquanta.com/",
    "name": "VisQuanta",
    "description": "AI for Car Dealerships: Lead Reactivation, Speed to Lead, Voice AI, SMS Chat, and Reputation Management",
    "publisher": {
        "@id": "https://www.visquanta.com/#organization"
    },
    "inLanguage": "en-US",
    "potentialAction": {
        "@type": "SearchAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.visquanta.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
    }
};

// Combined base schema for layout.tsx
export const baseSchema = {
    "@context": "https://schema.org",
    "@graph": [
        // Organization (without @context, it's in the wrapper)
        {
            "@type": "Organization",
            "@id": "https://www.visquanta.com/#organization",
            "name": "VisQuanta",
            "legalName": "VisQuanta LLC",
            "alternateName": ["VisQuanta AI", "VisQuanta AutoMaster"],
            "url": "https://www.visquanta.com",
            "logo": {
                "@type": "ImageObject",
                "@id": "https://www.visquanta.com/#logo",
                "url": "https://www.visquanta.com/images/visquanta-logo-transparent.png",
                "contentUrl": "https://www.visquanta.com/images/visquanta-logo-transparent.png",
                "width": 400,
                "height": 100,
                "caption": "VisQuanta Logo"
            },
            "image": {
                "@type": "ImageObject",
                "url": "https://www.visquanta.com/images/og-image.png",
                "width": 1200,
                "height": 630
            },
            "description": "VisQuanta is an AI platform for car dealerships, providing lead reactivation, speed-to-lead automation, Voice AI for service departments, SMS-first website chat, and reputation management.",
            "foundingDate": "2023",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "2222 Ponce de Leon Blvd, 3rd Floor",
                "addressLocality": "Miami",
                "addressRegion": "FL",
                "postalCode": "33134",
                "addressCountry": "US"
            },
            "contactPoint": [
                {
                    "@type": "ContactPoint",
                    "telephone": "+1-786-686-6554",
                    "contactType": "sales",
                    "email": "info@visquanta.com",
                    "areaServed": "US",
                    "availableLanguage": ["English", "Spanish"]
                }
            ],
            "sameAs": [
                "https://www.linkedin.com/company/visquanta",
                "https://www.youtube.com/@visquanta",
                "https://www.facebook.com/people/VisQuanta/61567841541110/",
                "https://x.com/VisQuanta",
                "https://www.instagram.com/visquanta/",
                "https://www.tiktok.com/@visquanta"
            ],
            "areaServed": {
                "@type": "Country",
                "name": "United States"
            },
            "knowsAbout": [
                "AI for car dealerships",
                "Automotive AI",
                "Lead reactivation",
                "Speed to lead",
                "Voice AI for dealerships",
                "SMS marketing for dealerships",
                "Reputation management",
                "BDC automation",
                "CRM integration",
                "Dealership operations software"
            ]
        },
        // WebSite
        {
            "@type": "WebSite",
            "@id": "https://www.visquanta.com/#website",
            "url": "https://www.visquanta.com/",
            "name": "VisQuanta",
            "description": "AI for Car Dealerships: Lead Reactivation, Speed to Lead, Voice AI, SMS Chat, and Reputation Management",
            "publisher": {
                "@id": "https://www.visquanta.com/#organization"
            },
            "inLanguage": "en-US",
            "potentialAction": {
                "@type": "SearchAction",
                "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.visquanta.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
            }
        }
    ]
};
