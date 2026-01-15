import { Zap, Database, Globe, Calendar, RefreshCcw, MessageSquare, BarChart, Lock } from 'lucide-react';

export type IntegrationStatus = 'Native Integration' | 'API Connected' | 'Coming Soon';

export interface IntegrationFeature {
    title: string;
    description: string;
}

export interface IntegrationSpec {
    label: string;
    value: string;
}

export interface Integration {
    id: string;
    slug: string;
    name: string;
    logo: string; // Path to logo image
    description: string;
    shortDescription: string;
    status: IntegrationStatus;
    category: 'CRM' | 'DMS' | 'Communication' | 'Marketing';
    features: IntegrationFeature[];
    specs: IntegrationSpec[];
    benefits: {
        before: string;
        after: string;
    }[];
    testimonial?: {
        quote: string;
        author: string;
        role: string;
        dealership: string;
    };
    setupSteps?: {
        title: string;
        description: string;
    }[];
}

export const integrations: Integration[] = [
    {
        id: 'vinsolutions',
        slug: 'vinsolutions',
        name: 'VinSolutions',
        logo: '/images/integrations/vinsolutions.svg',
        description: 'Your CRM stays current without lifting a finger. Every conversation, every lead update, every appointment — synced to VinSolutions in real-time. No double entry. No missed updates.',
        shortDescription: 'Supercharge VinSolutions with AI voice automation',
        status: 'Native Integration',
        category: 'CRM',
        features: [
            { title: 'Lead Status Updates', description: 'When a lead books an appointment, declines, or goes cold — VinSolutions updates automatically.' },
            { title: 'Appointment Booking', description: 'Appointments flow directly into VinSolutions calendar. Sales gets notified instantly.' },
            { title: 'Conversation History', description: 'Every SMS, call summary, and AI interaction attached to the customer record.' },
            { title: 'Activity Logging', description: 'Inbound and outbound touches logged with timestamps for manager reporting.' },
            { title: 'Custom Field Mapping', description: 'Your dealership\'s custom fields respected. Trade-in interest, preferences, all synced.' },
            { title: 'Follow-Up Tasks', description: 'When AI identifies next steps, tasks auto-create assigned to the right rep.' },
        ],
        specs: [
            { label: 'Connection Type', value: 'Native API (not middleware)' },
            { label: 'Data Sync', value: 'Real-time, bi-directional' },
            { label: 'Authentication', value: 'OAuth 2.0 (secure)' },
            { label: 'Required Plan', value: 'VinSolutions Connect' },
            { label: 'It Required', value: 'No — self-service' },
            { label: 'Data Residency', value: 'US-based (SOC 2)' },
        ],
        benefits: [
            { before: 'BDC manually enters every lead after each call', after: 'Leads auto-created from conversations' },
            { before: 'After-hours leads sit until morning', after: 'Every lead engaged within 60 seconds, 24/7' },
            { before: 'Sales checks CRM, sees outdated status', after: 'Real-time status: "Appointment booked for Tuesday 2pm"' },
            { before: 'Manager asks "did you call?" — no record', after: 'Full activity log: 4 touches, appt set, confirmed via SMS' },
            { before: 'Data entry errors ("wrong number")', after: 'AI logs exactly what was said — no typos' },
            { before: '30+ minutes/day on CRM updates', after: 'Zero manual entry — time back to selling' },
        ],
        setupSteps: [
            { title: 'Secure API Handshake', description: 'One-click OAuth authentication establishes a secure, encrypted tunnel between VisQuanta and VinSolutions.' },
            { title: 'Intelligent Field Mapping', description: 'Our system automatically detects your custom fields and lead statuses, ensuring 1:1 data parity.' },
            { title: 'Live Sync Activation', description: 'Enable bi-directional syncing. Watch as AI activities populate your CRM in real-time.' }
        ],
        testimonial: {
            quote: "We went from manually logging every call to having everything appear in VinSolutions automatically. My BDC manager almost cried.",
            author: "Sarah Jenkins",
            role: "Internet Director",
            dealership: "Westside Automotive Group"
        }
    },
    {
        id: 'elead',
        slug: 'elead',
        name: 'eLead CRM',
        logo: '/images/integrations/elead.svg',
        description: 'A powerful native integration for CDK eLead that automates data entry and ensures no lead is ever left behind.',
        shortDescription: 'AI agents that sync directly with CDK eLead',
        status: 'Native Integration',
        category: 'CRM',
        features: [
            { title: 'Fresh & Upsheet Sync', description: 'Automatically creates and updates ups in eLead without human intervention.' },
            { title: 'Activity Logging', description: 'Logs calls, texts, and emails as completed activities with full context.' },
            { title: 'Note Insertion', description: 'Adds detailed notes from AI conversations directly to the customer record.' },
            { title: 'Task Completion', description: 'Automatically completes follow-up tasks and sets next steps.' },
        ],
        specs: [
            { label: 'Connection Type', value: 'Certified Interface' },
            { label: 'Data Sync', value: 'Real-time' },
            { label: 'Authentication', value: 'Secure Token' },
            { label: 'Requirements', value: 'eLead CRM Access' },
        ],
        benefits: [
            { before: 'Missed ups during busy times', after: '100% Capture rate, zero leakage' },
            { before: 'Incomplete notes ("customer interested")', after: 'Detailed AI summaries with specific vehicle interests' },
            { before: 'Manual task completion clicking', after: 'Automated workflows and status changes' },
            { before: 'Delayed follow-up on leads', after: 'Instant response < 1 min' },
        ]
    },
    {
        id: 'dealersocket',
        slug: 'dealersocket',
        name: 'DealerSocket',
        logo: '/images/integrations/dealersocket.svg',
        description: 'Enhance your DealerSocket workflow with intelligent automation that handles the busy work.',
        shortDescription: 'Seamless integration with DealerSocket workflows',
        status: 'API Connected',
        category: 'CRM',
        features: [
            { title: 'Opportunity Management', description: 'Creates and updates sales opportunities automatically based on intent.' },
            { title: 'Event Logging', description: 'Logs phone and floor events with correct result codes.' },
            { title: 'Customer Profile Sync', description: 'Keeps customer contact info and preferences up to date.' },
        ],
        specs: [
            { label: 'API Type', value: 'Rest API' },
            { label: 'Data Sync', value: 'Near Real-time' },
            { label: 'Authentication', value: 'API Key' },
        ],
        benefits: [
            { before: 'Stale opportunities clogging pipeline', after: 'Active pipeline with real-time intent signals' },
            { before: 'Lost context between calls', after: 'Full interaction history available to any rep' },
            { before: 'Manual entry of customer info', after: 'Automated event logging and updates' },
        ]
    },
    {
        id: 'cdk',
        slug: 'cdk',
        name: 'CDK Global',
        logo: '/images/integrations/cdk.svg',
        description: 'Deep integration with CDK Drive to bridge the gap between your DMS and sales communications.',
        shortDescription: 'Native CDK DMS connectivity',
        status: 'Native Integration',
        category: 'DMS',
        features: [
            { title: 'RO Status Checks', description: 'AI can check and communicate vehicle service status to customers.' },
            { title: 'Inventory Sync', description: 'Real-time access to vehicle inventory, pricing, and status.' },
            { title: 'Customer History', description: 'Access to service and sales history for personalized AI conversations.' },
        ],
        specs: [
            { label: 'API Type', value: 'Fortellis Integration' },
            { label: 'Data Sync', value: 'Real-time' },
        ],
        benefits: [
            { before: 'Checking disparate systems', after: 'Unified data access for AI agents' },
            { before: 'Outdated inventory info', after: 'Live stock updates in conversations' },
            { before: 'Generic scripts', after: 'Personalized context based on history' },
        ]
    },
    {
        id: 'reynolds',
        slug: 'reynolds',
        name: 'Reynolds & Reynolds',
        logo: '/images/integrations/reynolds.svg',
        description: 'Enterprise-grade connectivity for R&R ERA-IGNITE users.',
        shortDescription: 'Enterprise DMS integration',
        status: 'API Connected',
        category: 'DMS',
        features: [
            { title: 'Service Appt Scheduling', description: 'Direct write-back for service appointments into R&R.' },
            { title: 'Customer Lookups', description: 'Fast identification of existing customers via DMS ID.' },
        ],
        specs: [
            { label: 'API Type', value: 'RCI' },
            { label: 'Data Sync', value: 'Batch/Real-time' },
        ],
        benefits: [
            { before: 'Double booking service slots', after: 'Accurate, real-time scheduling' },
            { before: 'Duplicate records created', after: 'Clean data matched to existing profiles' },
        ]
    },
    {
        id: 'drivecentric',
        slug: 'drivecentric',
        name: 'DriveCentric',
        logo: '/images/integrations/drivecentric.svg',
        description: 'Combine the best modern CRM with the most advanced AI voice capabilities.',
        shortDescription: 'Modern CRM meets modern AI',
        status: 'API Connected',
        category: 'CRM',
        features: [
            { title: 'Video/AI Handoff', description: 'Seamlessly transition from AI call to DriveCentric video messages.' },
            { title: 'Live Stream Activity', description: 'Push AI activities to the live stream in real-time.' },
        ],
        specs: [
            { label: 'API Type', value: 'GraphQL' },
            { label: 'Data Sync', value: 'Real-time' },
        ],
        benefits: [
            { before: 'Platform switching friction', after: 'Integrated flow into DriveCentric' },
            { before: 'Missed signals', after: 'High-intent alerts directly in the stream' },
        ]
    },
    {
        id: 'dealertrack',
        slug: 'dealertrack',
        name: 'DealerTrack',
        logo: '/images/integrations/dealertrack.svg',
        description: 'Comprehensive integration for DealerTrack DMS and CRM solutions.',
        shortDescription: 'Connected dealership ecosystem',
        status: 'API Connected',
        category: 'DMS',
        features: [{ title: 'Deal Sync', description: 'Sync deal structures and finance statuses.' }],
        specs: [{ label: 'API Type', value: 'OpenTrack' }],
        benefits: [{ before: 'Siloed Finance Data', after: 'Connected Desk Capabilities' }]
    },
    {
        id: 'automate',
        slug: 'automate',
        name: 'Auto/Mate',
        logo: '/images/integrations/automate.svg',
        description: 'Simple, effective integration for Auto/Mate (DealerSocket) DMS.',
        shortDescription: 'Flexible DMS connections',
        status: 'Coming Soon',
        category: 'DMS',
        features: [],
        specs: [],
        benefits: []
    }
];

export function getIntegrationBySlug(slug: string): Integration | undefined {
    return integrations.find(i => i.slug === slug);
}
