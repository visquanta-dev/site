import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/service-drive/HeroSection';
import OpportunityCheck from '@/components/service-drive/OpportunityCheck';

import EnterpriseBenefits from '@/components/service-drive/EnterpriseBenefits';
import VoiceAIDefinitionSection from '@/components/service-drive/VoiceAIDefinitionSection';
import CallExamples from '@/components/service-drive/CallExamples';
import StatisticsSection from '@/components/service-drive/StatisticsSection';
import ServiceCalculator from '@/components/service-drive/ServiceCalculator';
import VoiceAgent from '@/components/service-drive/VoiceAgent';
import WorkflowSection from '@/components/service-drive/WorkflowSection';
import ServiceFAQ from '@/components/service-drive/ServiceFAQ';
import MoreSolutions from '@/components/service-drive/MoreSolutions';

import ServiceInsights from '@/components/service-drive/ServiceInsights';
import MidPageCTA from '@/components/MidPageCTA';
import RelatedSolutions from '@/components/shared/RelatedSolutions';
import RelatedCaseStudies from '@/components/shared/RelatedCaseStudies';



export const metadata = {
    title: 'Service BDC Voice AI | 100% Call Answer Rate',
    description: 'Voice AI for car dealership service departments. Answer 100% of inbound calls 24/7. Book appointments directly into your DMS. No missed calls. No voicemail.',
    alternates: {
        canonical: 'https://www.visquanta.com/service-drive',
    },
    openGraph: {
        url: 'https://www.visquanta.com/service-drive',
    },
};

export default function ServiceDrivePage() {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
            {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://www.visquanta.com'
            },
            {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Service Drive',
                'item': 'https://www.visquanta.com/service-drive'
            }
        ]
    };

    const definitionSchema = {
        '@context': 'https://schema.org',
        '@type': 'DefinedTerm',
        'name': 'Voice AI for car dealerships',
        'description': 'Voice AI for car dealerships is an intelligent automation technology that answers inbound calls, understands automotive intent, and executes service workflows without human intervention. It leverages natural language processing to converse fluently with customers, integrating directly with dealership systems (DMS) to resolve appointment scheduling and status requests instantly.'
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'What is voice AI for car dealerships?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Voice AI for car dealerships is artificial intelligence that answers inbound phone calls, understands what customers need, and takes action, like booking service appointments, without human intervention. Unlike voicemail or IVR menus, voice AI speaks naturally and integrates with your dealership systems to resolve calls instantly.' }
            },
            {
                '@type': 'Question',
                'name': 'How does voice AI work for service departments?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'When a customer calls your service department, voice AI answers immediately: no hold music, no voicemail. It understands natural language ("my check engine light is on"), pulls vehicle data from your DMS, checks technician availability, and books appointments directly into your scheduler. The customer gets an SMS confirmation. Your advisor gets a full transcript.' }
            },
            {
                '@type': 'Question',
                'name': 'What is automotive service scheduling?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Automotive service scheduling is the process of booking customer appointments for vehicle maintenance and repairs. With voice AI, this happens automatically: customers call, voice AI checks availability, and the appointment is booked in real-time. No staff required. No callbacks needed.' }
            },
            {
                '@type': 'Question',
                'name': 'Can voice AI book appointments directly into my DMS?',
                'acceptedAnswer': {
                    '@type': 'Answer', 'text': 'Yes. Voice AI integrates with your existing DMS and scheduling tools to book appointments in real-time while the customer is still on the call. No manual entry. No double-booking. The appointment appears instantly in your advisor\'s calendar.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What happens when voice AI can\'t answer a question?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Voice AI is trained to handle 90%+ of common service calls. For complex issues requiring human judgment (like dispute resolution or unusual requests) it captures all details, creates a transcript, and routes to the appropriate advisor for callback. No call is ever lost.' }
            },
            {
                '@type': 'Question',
                'name': 'How much does dealership voice AI cost?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Voice AI pricing varies based on call volume and dealership size. Most service departments see ROI within 30 days: the revenue recovered from missed calls typically exceeds the cost by 5-10x. Contact us for a custom quote based on your call volume.' }
            },
            {
                '@type': 'Question',
                'name': 'Is voice AI better than a call center for dealerships?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Call centers have hold times, staffing issues, and can\'t access your DMS. Voice AI answers instantly, 24/7, integrates with your systems, and books appointments in real-time. No hold music. No transfers. No "let me check and call you back."' }
            },
            {
                '@type': 'Question',
                'name': 'How do dealerships handle missed service calls?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Most don\'t: 80% of service calls go unanswered during peak hours and after 5pm. Those customers call competitors. Voice AI solves this by answering 100% of calls, 24/7/365. Every missed call becomes a booked appointment instead of lost revenue.' }
            },
            {
                '@type': 'Question',
                'name': 'What is fixed ops automation?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Fixed ops automation uses AI to streamline service department operations (answering calls, scheduling appointments, sending status updates, and reducing manual workload). Voice AI is the front door of fixed ops automation, capturing every customer call without adding staff.' }
            },
            {
                '@type': 'Question',
                'name': 'Does voice AI work after hours and on weekends?',
                'acceptedAnswer': { '@type': 'Answer', 'text': 'Yes. Voice AI works 24/7/365: nights, weekends, holidays. This is when 80% of calls typically go unanswered. Voice AI captures every after-hours call and books appointments while your competitors send customers to voicemail.' }
            }
        ]
    };

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'VisQuanta',
        'url': 'https://www.visquanta.com',
        'logo': 'https://www.visquanta.com/images/logo.png',
        'contactPoint': {
            '@type': 'ContactPoint',
            'telephone': '+1-786-686-6554',
            'contactType': 'customer service',
            'areaServed': 'US',
            'availableLanguage': 'en'
        },
        'sameAs': [
            'https://www.linkedin.com/company/visquanta'
        ]
    };

    const productSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Service Drive Agent',
        'description': 'AI Service Agent for Car Dealerships. Answers 100% of inbound calls and books appointments directly in your DMS. 24/7 autonomous service scheduling.',
        'brand': {
            '@type': 'Brand',
            'name': 'VisQuanta'
        },
        'offers': {
            '@type': 'Offer',
            'url': 'https://www.visquanta.com/service-drive',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'price': '0',
            'priceValidUntil': '2025-12-31'
        },
        'audience': {
            '@type': 'BusinessAudience',
            'audienceType': 'Car Dealerships'
        }
    };

    return (
        <div className="min-h-screen bg-[#030303]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(definitionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
            />
            <Navigation />
            <main>
                <HeroSection />
                <OpportunityCheck />

                <VoiceAIDefinitionSection />
                <EnterpriseBenefits />

                <MidPageCTA
                    title="Never miss a service appointment again."
                    subtitle="80% of service calls happen when your advisors are busiest. Our AI answers them all."
                />
                <CallExamples />
                <StatisticsSection />
                <ServiceCalculator />
                <WorkflowSection />

                <MidPageCTA
                    title="Fixed Ops Automation is Here."
                    subtitle="Book directly into your DMS 24/7. No hold music. No voicemail. Just revenue."
                    buttonText="Get Your Free AI Audit"
                />

                <ServiceFAQ />

                <RelatedSolutions
                    title="Scale Your Fixed Ops"
                    solutions={[
                        { title: "Lead Reactivation", href: "/lead-reactivation", description: "Re-engage lost service customers automatically.", icon: "refresh" },
                        { title: "Reputation Management", href: "/reputation-management", description: "Capture a 5-star review after every service visit.", icon: "star" },
                        { title: "Dealer Success", href: "/dealer-success", description: "White-glove implementation for your service team.", icon: "heart" }
                    ]}
                />

                <RelatedCaseStudies
                    caseStudySlugs={['prestige-imports', 'seth-wadley']}
                />

                <VoiceAgent />

                <ServiceInsights />


            </main>
            <Footer />
        </div>
    );
}
