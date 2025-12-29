'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import {
    ArrowRight,
    CheckCircle2,
    TrendingUp,
    Users,
    Target,
    BarChart3,
    Clock,
    Quote,
    Building2,
    Zap,
    DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { use } from 'react';

// Mock Data Store (In a real app, this would be a separate file/database)
const caseStudies = {
    'metro-motors': {
        client: 'Metro Auto Group',
        location: 'California, USA',
        type: 'Franchise Dealership Group',
        logo: '/images/brands/toyota.png', // Placeholder
        heroImage: '/images/dealership-hero.jpg', // Placeholder
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
                    title: 'Equity Mining & Trigger Identification',
                    description: 'Our system identified 2,400 leads with high probability scores—based on vehicle equity positions, service history, and contract expiration dates.'
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
    }
};


export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    // Unwrap params using React.use()
    const { slug } = use(params);
    const data = caseStudies[slug as keyof typeof caseStudies];

    // Fallback if slug not found in our mock data
    if (!data) return notFound();

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF7404]/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,116,4,0.1),transparent_50%)]" />

                <div className="container px-4 mx-auto relative z-10 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-8 text-zinc-400 text-sm font-medium"
                    >
                        <Link href="/case-studies" className="hover:text-white transition-colors flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 rotate-180" />
                            Back to Case Studies
                        </Link>
                        <span className="hidden md:inline">•</span>
                        <span className="text-[#FF7404] uppercase tracking-wider">{data.type}</span>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                                {data.title}
                            </h1>
                            <p className="text-xl text-zinc-400 mb-8 leading-relaxed border-l-4 border-[#FF7404] pl-6">
                                {data.summary}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm">
                                    <Clock className="w-4 h-4 text-[#FF7404]" />
                                    Implementation: 5 Days
                                </span>
                                <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 text-sm">
                                    <Building2 className="w-4 h-4 text-[#FF7404]" />
                                    Region: {data.location}
                                </span>
                            </div>
                        </motion.div>

                        {/* Hero Key Metrics Grid */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {data.metrics.map((metric, idx) => (
                                <div key={idx} className="bg-zinc-900/50 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                                    <metric.icon className="w-8 h-8 text-[#FF7404] mb-4" />
                                    <div className="text-3xl md:text-4xl font-black text-white mb-1">
                                        {metric.value}
                                    </div>
                                    <div className="text-sm text-zinc-500 font-bold uppercase tracking-wider">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Challenge & Solution */}
            <section className="py-24 border-t border-white/5 bg-zinc-900/20">
                <div className="container px-4 mx-auto max-w-5xl">
                    <div className="grid md:grid-cols-12 gap-12">
                        {/* Challenge Side */}
                        <div className="md:col-span-5">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                                    <Target className="w-5 h-5 text-red-500" />
                                </div>
                                The Challenge
                            </h2>
                            <div className="space-y-4 text-zinc-400 leading-relaxed">
                                {data.challenge.content.map((paragraph, i) => (
                                    <p key={i}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="hidden md:flex md:col-span-2 justify-center relative">
                            <div className="w-px h-full bg-gradient-to-b from-transparent via-[#FF7404]/30 to-transparent" />
                            <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#020202] border border-[#FF7404] flex items-center justify-center z-10">
                                <ArrowRight className="w-4 h-4 text-[#FF7404]" />
                            </div>
                        </div>

                        {/* Solution Side */}
                        <div className="md:col-span-5">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-emerald-500" />
                                </div>
                                The Solution
                            </h2>
                            <div className="space-y-8">
                                {data.solution.steps.map((step, i) => (
                                    <div key={i} className="relative pl-8 border-l border-white/10">
                                        <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 rounded-full bg-[#FF7404]" />
                                        <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                                        <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Results Block */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF7404]/5 skew-y-3 transform origin-bottom-right" />

                <div className="container px-4 mx-auto relative z-10 max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-white mb-6">Record-Breaking ROI</h2>
                        <p className="text-xl text-zinc-400">{data.results.title}</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mb-16">
                        {data.results.stats.map((stat, i) => (
                            <div key={i} className="bg-[#020202] border border-white/10 p-6 rounded-2xl flex items-start gap-4">
                                <CheckCircle2 className="w-6 h-6 text-[#FF7404] shrink-0 mt-1" />
                                <span className="text-zinc-300 font-medium">{stat}</span>
                            </div>
                        ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-br from-zinc-900 to-black p-10 rounded-3xl border border-white/10 relative">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-[#FF7404]/20" />
                        <blockquote className="relative z-10 text-center">
                            <p className="text-2xl text-white font-medium italic mb-8 leading-relaxed">
                                "{data.testimonial.quote}"
                            </p>
                            <footer>
                                <div className="font-bold text-[#FF7404]">{data.testimonial.author}</div>
                                <div className="text-zinc-500 text-sm">{data.testimonial.role}</div>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="py-20 border-t border-white/10">
                <div className="container px-4 mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Ready to replicate these results?</h2>
                    <p className="text-zinc-400 mb-8">
                        AutoMaster Suite is plug-and-play for franchise and independent dealers.
                        See what your database is worth today.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <button className="px-8 py-4 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold rounded-xl inline-flex items-center gap-2 transition-all hover:scale-105">
                                Book a Strategy Call
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
