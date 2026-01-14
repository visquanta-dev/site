// Case Study Data Types and Content
// Shared data file for use in both metadata generation and page rendering

import { TrendingUp, BarChart3, Target, Users, Zap, DollarSign, Clock } from 'lucide-react';

export interface CaseStudyMetric {
    value: string;
    label: string;
    icon: typeof TrendingUp;
}

export interface CaseStudyData {
    client: string;
    location: string;
    type: string;
    logo: string;
    heroImage: string;
    title: string;
    summary: string;
    metrics: CaseStudyMetric[];
    challenge: {
        title: string;
        content: string[];
    };
    solution: {
        title: string;
        steps: Array<{
            title: string;
            description: string;
        }>;
    };
    results: {
        title: string;
        content: string;
        stats: string[];
    };
    testimonial: {
        quote: string;
        author: string;
        role: string;
    };
}

export const caseStudies: Record<string, CaseStudyData> = {
    'metro-motors': {
        client: 'Metro Auto Group',
        location: 'California, USA',
        type: 'Franchise Dealership Group',
        logo: '/images/brands/toyota.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'How Metro Auto Group Generated $68k in Gross Profit from "Dead" Leads in 30 Days',
        summary: 'Facing a stagnating database of 45,000 leads and an overwhelmed BDC, Metro Auto Group deployed AutoMaster Suite to identify and engage in-market buyers, resulting in 32 incremental unit sales in month one.',
        metrics: [
            { value: '+32', label: 'Incremental Units', icon: TrendingUp },
            { value: '$68k', label: 'Addt. Front Gross', icon: BarChart3 },
            { value: '14x', label: 'ROI First Month', icon: Target },
            { value: '15%', label: 'Show Rate Lift', icon: Users },
        ],
        challenge: {
            title: 'The Challenge: CRM Bloat & Missed Opportunities',
            content: [
                "Metro Auto Group, a high-volume franchise spanning 3 rooftops, had accumulated over 45,000 leads in their CRM over the past 5 years.",
                "Their BDC team was consistently maxed out handling fresh inbound traffic, leaving thousands of older leads to collect dust.",
                "Marketing costs were rising (averaging $650 per sold unit), yet they were sitting on a goldmine of previous customers and prospects that they simply didn't have the manpower to work effectively."
            ]
        },
        solution: {
            title: 'The Solution: Intelligent Automation',
            steps: [
                {
                    title: 'Database Hygiene & Analysis',
                    description: 'We ingested their 45k records into AutoMaster Suite, scrubbing for invalid contact info and cross-referencing with DMS data to remove customers who had recently purchased elsewhere.'
                },
                {
                    title: 'AI-Powered Cold Lead Outreach',
                    description: 'Our conversational AI reached out to 2,400 high-probability leads via SMS, qualifying their buying intent and identifying those actively in-market.'
                },
                {
                    title: 'Omnichannel Activation Campaign',
                    description: 'We launched a "Vehicle Exchange Program" campaign using 2-way AI SMS and personalized email sequences, focusing on upgrading customers into newer models with similar payments.'
                }
            ]
        },
        results: {
            title: 'The Impact: Immediate Revenue',
            content: "The results were felt within 48 hours. The BDC woke up to 150+ warm responses from customers asking for upgrade options.",
            stats: [
                "32 Incremental Cars Sold directly attributed to the campaign.",
                "$2,125 Average Front End Gross per unit on these deals.",
                "Zero additional ad spend required—purely monetizing owned data."
            ]
        },
        testimonial: {
            quote: "I was skeptical that software could outperform my BDC on phone calls. But AutoMaster Suite pulled deals out of thin air. These were customers we had given up on. It brought them back into the showroom ready to buy.",
            author: "James Corwin",
            role: "General Manager, Metro Auto Group"
        }
    },
    'bayside-honda': {
        client: 'Bayside Honda',
        location: 'Florida, USA',
        type: 'Single Point Franchise',
        logo: '/images/brands/honda.png',
        heroImage: '/images/bayside-hero.jpg',
        title: 'Reducing Lead Response Time from 40 Mins to 30 Seconds with AI',
        summary: 'In a highly competitive metro market, Bayside Honda struggled to reach leads before competitors. By implementing AutoMaster Speed-to-Lead, they achieved instant engagement, doubling their contact rate.',
        metrics: [
            { value: '-98%', label: 'Response Time', icon: Zap },
            { value: '2x', label: 'Contact Rate', icon: Users },
            { value: '+18', label: 'Addt. Appts/Mo', icon: TrendingUp },
            { value: '92%', label: 'Engagement Rate', icon: Target },
        ],
        challenge: {
            title: 'The Challenge: The "Speed to Lead" Gap',
            content: [
                "Bayside Honda's sales floor was busy. When a web lead came in, it often sat for 40-60 minutes before a salesperson could call.",
                "Industry data shows that response rates drop by 400% after the first 5 minutes. Bayside was losing deals simply because they weren't first to the phone.",
                "They needed a solution that could guarantee instant engagement 24/7, without hiring a 24-hour BDC team."
            ]
        },
        solution: {
            title: 'The Solution: AI "First Responder"',
            steps: [
                {
                    title: 'Instant SMS Engagement',
                    description: 'We deployed our Speed-to-Lead module to text every new lead within 30 seconds of submission, confirming interest and asking qualifying questions.'
                },
                {
                    title: 'After-Hours Coverage',
                    description: 'The AI managed all leads from 9 PM to 9 AM, booking appointments directly into the CRM calendar for the morning team.'
                },
                {
                    title: 'Defection Alerting',
                    description: 'If a customer mentioned visiting a competitor, the AI instantly flagged the manager for a "TO" (Turn Over) call.'
                }
            ]
        },
        results: {
            title: 'The Impact: First to the Deal',
            content: "By being the first dealership to make contact, Bayside Honda stopped shoppers from visiting other stores.",
            stats: [
                "Average response time dropped to under 30 seconds consistently.",
                "Appointment set rate increased by 45% within 60 days.",
                "Night-time leads resulted in 12 extra sold units per month."
            ]
        },
        testimonial: {
            quote: "Our guys used to complain about 'bad leads.' Turns out the leads were fine, we were just too slow. Now the AI warms them up, and we just close them. It's a game changer.",
            author: "Sarah Jenkins",
            role: "Internet Director, Bayside Honda"
        }
    },
    'prestige-imports': {
        client: 'Prestige Imports',
        location: 'Texas, USA',
        type: 'Luxury Import Specialist',
        logo: '/images/brands/bmw.png',
        heroImage: '/images/prestige-hero.jpg',
        title: '300% ROI on Service Drive Mining Campaigns',
        summary: 'Prestige Imports wanted to turn service customers into new car buyers. Our Service Drive Pro tool automatically identified equity-positive customers, generating $120k in gross profit in Q1.',
        metrics: [
            { value: '300%', label: 'ROI', icon: BarChart3 },
            { value: '$120k', label: 'Gross Profit (Q1)', icon: DollarSign },
            { value: '15', label: 'Service-to-Sales', icon: TrendingUp },
            { value: '$4k', label: 'Avg PVR', icon: Target },
        ],
        challenge: {
            title: 'The Challenge: Silent Service Lanes',
            content: [
                "Prestige Imports saw 80+ ROs per day, but their sales team had no visibility into who was in the service lounge.",
                "Customers with high equity were paying for expensive repairs on cars they should have traded in.",
                "Manual equity mining tools were cumbersome and required a dedicated person to 'work the service drive,' which rarely happened consistently."
            ]
        },
        solution: {
            title: 'The Solution: Automated Equity Defense',
            steps: [
                {
                    title: 'Real-Time RO Scanning',
                    description: 'AutoMaster integrated with the DMS to scan every open RO against Kelley Blue Book values and current payoff amounts.'
                },
                {
                    title: 'The "Upgrade Offer"',
                    description: 'Qualifying customers received a personalized text: "Mr. Smith, your X5 requires $1,200 in service. We can waive that bill and lower your payment on a 2024 model today."'
                },
                {
                    title: 'Service Valet Introduction',
                    description: 'When a customer hit "Interested," the Service Manager was notified to walk the customer to the showroom floor personally.'
                }
            ]
        },
        results: {
            title: 'The Impact: Fixed Ops to Front End',
            content: "The service drive became the dealership's most profitable lead source.",
            stats: [
                "15 additional units sold per month directly from the service lane.",
                "Average Front End Gross of $4,000+ due to high-demand trade-ins.",
                "Acquired premium used inventory without paying auction fees."
            ]
        },
        testimonial: {
            quote: "We used to beg salespeople to work the service drive. Now they fight over the alerts. The system serves up deals on a silver platter.",
            author: "Marcus Thorne",
            role: "Dealer Principal, Prestige Imports"
        }
    },
    'freedom-independent': {
        client: 'Freedom Independent',
        location: 'Ohio, USA',
        type: 'Independent Dealership',
        logo: '/images/brands/generic.png',
        heroImage: '/images/freedom-hero.jpg',
        title: 'Reducing Inventory Turn Time to 18 Days with AutoMaster',
        summary: 'By matching incoming inventory with wish-list customers automatically, Freedom Independent reduced their average turn time from 45 days to just 18 days.',
        metrics: [
            { value: '18 Days', label: 'Arg Turn Time', icon: Clock },
            { value: '-27', label: 'Days Saved', icon: TrendingUp },
            { value: '100%', label: 'Lead Coverage', icon: Zap },
            { value: '$350', label: 'Reduced Holding Cost', icon: DollarSign },
        ],
        challenge: {
            title: 'The Challenge: Aging Inventory Risk',
            content: [
                "As an independent dealer, floorplan interest was eating into Freedom's margins.",
                "Cars were sitting on the lot for 45+ days because they relied on passive web traffic (people browsing CarGurus/Autotrader) to find them.",
                "They had no mechanism to notify past shoppers when a specific car they wanted arrived in stock."
            ]
        },
        solution: {
            title: 'The Solution: Inventory-Led Outreach',
            steps: [
                {
                    title: 'Wish-List Automation',
                    description: 'We built a "Virtual Garage" for every lead. If a customer wanted a Ford F-150 but you didn\'t have one, the system remembered.'
                },
                {
                    title: 'Arrival Alerts',
                    description: 'The moment a matching vehicle was booked into inventory, AutoMaster automatically texted every matching prospect: "The F-150 you wanted just landed."'
                },
                {
                    title: 'Pre-Selling',
                    description: 'Many cars were sold before they even finished detailing, purely from the automated waitlist activation.'
                }
            ]
        },
        results: {
            title: 'The Impact: Cash Flow Velocity',
            content: "Freedom Independent transformed from a storage lot to a logistics hub. Cars moved faster than ever before.",
            stats: [
                "Average turn time dropped to 18 days, slashing floorplan interest costs.",
                "30% of sales now occur within 48 hours of vehicle acquisition.",
                "Gross profit holds steady as customers perceive the 'Arrival Alert' as exclusive VIP service."
            ]
        },
        testimonial: {
            quote: "I don't worry about cars aging out anymore. If I buy the right inventory, AutoMaster finds the buyer instantly. It's like having a pre-sold order bank.",
            author: "Bill Henderson",
            role: "Owner, Freedom Independent"
        }
    },
    'seth-wadley': {
        client: 'Seth Wadley Auto Group',
        location: 'Oklahoma, USA',
        type: 'Auto Group',
        logo: '/images/brands/ford-direct.jpg',
        heroImage: '/images/seth-wadley-hero.jpg',
        title: 'How Seth Wadley Auto Group Recovered $47k in 60 Days',
        summary: 'Struggling with lead response times and missed opportunities on service calls, Seth Wadley implemented the full AutoMaster Suite. Within two months, the results were undeniable.',
        metrics: [
            { value: '$47k', label: 'Revenue Recovered', icon: DollarSign },
            { value: '12', label: 'Extra Units Sold', icon: TrendingUp },
            { value: '9x', label: 'ROI Achieved', icon: BarChart3 },
            { value: '24/7', label: 'Automated Coverage', icon: Zap },
        ],
        challenge: {
            title: 'The Challenge: Inefficient Lead Management',
            content: [
                "Seth Wadley Auto Group was facing significant challenges with response times for inbound leads.",
                "Their service department was missing thousands of dollars in potential revenue due to unhandled inquiries.",
                "The team was overwhelmed by the volume of interactions, leading to low conversion rates."
            ]
        },
        solution: {
            title: 'The Solution: Full Suite Deployment',
            steps: [
                {
                    title: 'Lead Reactivation',
                    description: 'Mining the CRM for dormant leads and using AI to re-engage them through personalized SMS campaigns.'
                },
                {
                    title: 'Speed-to-Lead Automation',
                    description: 'Ensuring every web lead was contacted within 60 seconds regardless of the time of day.'
                },
                {
                    title: 'Service Drive Integration',
                    description: 'Automating the appointment setting process for the service department.'
                }
            ]
        },
        results: {
            title: 'The Impact: Measurable Success',
            content: "The implementation of VisQuanta's solutions led to an immediate and significant impact on the group's bottom line.",
            stats: [
                "Recovered $47,000 in lost revenue within the first 60 days.",
                "Sold 12 additional units directly attributed to AI engagement.",
                "Achieved a 9x return on investment (ROI) within two months."
            ]
        },
        testimonial: {
            quote: "The ROI was obvious within the first month. VisQuanta didn't just fix our lead response—it reactivated our entire CRM and stabilized our service drive.",
            author: "Michael Rodriguez",
            role: "Operations Manager, Seth Wadley Auto Group"
        }
    }
};

// Helper function to get case study by slug (for use in metadata)
export function getCaseStudy(slug: string): CaseStudyData | null {
    return caseStudies[slug] || null;
}

// Get all case study slugs (for sitemap/static params)
export function getAllCaseStudySlugs(): string[] {
    return Object.keys(caseStudies);
}
