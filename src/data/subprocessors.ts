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
    /** Short badge label shown on the provider row, e.g. "DPA Executed". Only set when a DPA has been signed and the wording has been confirmed. */
    badge?: string;
    icon: LucideIcon;
    logo: string;
    website: string;
};

export const subprocessors: Subprocessor[] = [
    { name: 'Amazon Web Services (AWS)', service: 'Cloud Infrastructure', badge: 'Vendor DPA', icon: Server, logo: '/images/service_providers/aws.webp', website: 'https://aws.amazon.com/' },
    { name: 'OpenAI', service: 'LLM Processing', badge: 'DPA Executed', icon: Database, logo: '/images/service_providers/chatgpt-icon.png', website: 'https://openai.com/' },
    { name: 'Google Gemini', service: 'LLM Processing', badge: 'Vendor DPA', icon: Database, logo: '/images/service_providers/google-gemini-icon.svg', website: 'https://deepmind.google/technologies/gemini/' },
    { name: 'Vercel', service: 'Hosting & Deployment', badge: 'Vendor DPA', icon: Globe, logo: '/images/service_providers/vercel-icon.png', website: 'https://vercel.com/' },
    { name: 'Supabase', service: 'Database Provider', badge: 'Vendor DPA', icon: Database, logo: '/images/service_providers/supabase-icon.png', website: 'https://supabase.com/' },
    { name: 'Stripe', service: 'Payment Processing', badge: 'Vendor DPA', icon: Lock, logo: '/images/service_providers/stripe-payment-icon.png', website: 'https://stripe.com/' },
    { name: 'Twilio', service: 'SMS & Messaging', badge: 'Vendor DPA', icon: MessageSquare, logo: '/images/service_providers/imgi_15_www.twilio.jpeg', website: 'https://www.twilio.com/' },
    { name: 'Telnyx', service: 'SMS & Messaging', badge: 'Vendor DPA', icon: MessageSquare, logo: '/images/service_providers/telnyx_icon.png', website: 'https://telnyx.com/' },
    { name: 'Auth0', service: 'Identity Management', badge: 'Vendor DPA', icon: Lock, logo: '/images/service_providers/imgi_2_auth0.jpeg', website: 'https://auth0.com/' },
    { name: 'Google Workspace', service: 'Business Operations', badge: 'Vendor DPA', icon: Globe, logo: '/images/service_providers/imgi_16_www.google.jpeg', website: 'https://workspace.google.com/' },
    { name: 'Tekion', service: 'DMS Integration', badge: 'Customer-Controlled', icon: Database, logo: '/images/service_providers/imgi_20_tekion.jpeg', website: 'https://tekion.com/' },
    { name: 'ProMax', service: 'CRM Integration', badge: 'Customer-Controlled', icon: Database, logo: '/images/service_providers/imgi_21_www.promaxunlimited.jpeg', website: 'https://promaxunlimited.com/' },
    { name: 'Authenticom', service: 'Data Integration', badge: 'Vendor DPA', icon: Database, logo: '/images/service_providers/imgi_3_www.authenticom.jpeg', website: 'https://www.authenticom.com/' },
    { name: 'n8n', service: 'Workflow Automation', badge: 'Self-Hosted', icon: Server, logo: '/images/service_providers/n8n-icon.png', website: 'https://n8n.io/' },
    { name: 'Zapier', service: 'Workflow Automation', badge: 'Vendor DPA', icon: Server, logo: '/images/service_providers/zapier-icon.svg', website: 'https://zapier.com/' },
];
