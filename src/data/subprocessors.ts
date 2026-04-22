import {
    Database,
    Globe,
    Lock,
    MessageSquare,
    Server,
    type LucideIcon,
} from 'lucide-react';

export type Subprocessor = {
    name: string;
    service: string;
    agreement: string;
    icon: LucideIcon;
    logo: string;
    website: string;
};

export const subprocessors: Subprocessor[] = [
    { name: 'Amazon Web Services (AWS)', service: 'Cloud Infrastructure', agreement: 'DPA on file', icon: Server, logo: '/images/service_providers/aws.webp', website: 'https://aws.amazon.com/' },
    { name: 'OpenAI', service: 'LLM Processing', agreement: 'DPA executed Apr 2026 • ZDR in review', icon: Database, logo: '/images/service_providers/chatgpt-icon.png', website: 'https://openai.com/' },
    { name: 'Google Gemini', service: 'LLM Processing', agreement: 'DPA on file', icon: Database, logo: '/images/service_providers/google-gemini-icon.svg', website: 'https://deepmind.google/technologies/gemini/' },
    { name: 'Vercel', service: 'Hosting & Deployment', agreement: 'DPA on file', icon: Globe, logo: '/images/service_providers/vercel-icon.png', website: 'https://vercel.com/' },
    { name: 'Supabase', service: 'Database Provider', agreement: 'DPA on file', icon: Database, logo: '/images/service_providers/supabase-icon.png', website: 'https://supabase.com/' },
    { name: 'Stripe', service: 'Payment Processing', agreement: 'DPA on file', icon: Lock, logo: '/images/service_providers/stripe-payment-icon.png', website: 'https://stripe.com/' },
    { name: 'Twilio', service: 'SMS & Messaging', agreement: 'DPA on file', icon: MessageSquare, logo: '/images/service_providers/imgi_15_www.twilio.jpeg', website: 'https://www.twilio.com/' },
    { name: 'Telnyx', service: 'SMS & Messaging', agreement: 'DPA on file', icon: MessageSquare, logo: '/images/service_providers/telnyx_icon.png', website: 'https://telnyx.com/' },
    { name: 'Auth0', service: 'Identity Management', agreement: 'DPA on file', icon: Lock, logo: '/images/service_providers/imgi_2_auth0.jpeg', website: 'https://auth0.com/' },
    { name: 'Google Workspace', service: 'Business Operations', agreement: 'DPA on file', icon: Globe, logo: '/images/service_providers/imgi_16_www.google.jpeg', website: 'https://workspace.google.com/' },
    { name: 'Tekion', service: 'DMS Integration', agreement: 'Customer-controlled', icon: Database, logo: '/images/service_providers/imgi_20_tekion.jpeg', website: 'https://tekion.com/' },
    { name: 'ProMax', service: 'CRM Integration', agreement: 'Customer-controlled', icon: Database, logo: '/images/service_providers/imgi_21_www.promaxunlimited.jpeg', website: 'https://promaxunlimited.com/' },
    { name: 'Authenticom', service: 'Data Integration', agreement: 'DPA on file', icon: Database, logo: '/images/service_providers/imgi_3_www.authenticom.jpeg', website: 'https://www.authenticom.com/' },
    { name: 'n8n', service: 'Workflow Automation', agreement: 'Self-hosted on Visquanta infrastructure', icon: Server, logo: '/images/service_providers/n8n-icon.png', website: 'https://n8n.io/' },
    { name: 'Zapier', service: 'Workflow Automation', agreement: 'DPA on file', icon: Server, logo: '/images/service_providers/zapier-icon.svg', website: 'https://zapier.com/' },
];
