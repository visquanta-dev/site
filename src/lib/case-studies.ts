// Case Study Data Types and Content
// Shared data file for use in hub page, detail pages, and metadata generation

import { TrendingUp, BarChart3, Target, Users, DollarSign } from 'lucide-react';

export interface CaseStudyMetric {
    value: string;
    label: string;
    icon: typeof TrendingUp;
}

export interface CaseStudyTableData {
    revenue: string;
    revenueNum: number;
    sales: number;
    conversations: number;
    avgDeal: string;
    rooftops: number;
    brands: string;
}

export interface CaseStudyData {
    client: string;
    location: string;
    state: string;
    type: string;
    category: 'franchise' | 'independent';
    accentColor: string;
    tagline: string;
    logo: string;
    heroImage: string;
    title: string;
    summary: string;
    metrics: CaseStudyMetric[];
    tableData: CaseStudyTableData;
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
    'seth-wadley': {
        client: 'Multi-Rooftop Auto Group in Central Oklahoma',
        location: 'Central Oklahoma',
        state: 'OK',
        type: '5 Rooftops · Chevrolet & Ford',
        category: 'franchise',
        accentColor: '#FF7404',
        tagline: 'Five rooftops. One playbook. $1.29M in 60 days.',
        logo: '/images/brands/ford-direct.jpg',
        heroImage: '/images/seth-wadley-hero.jpg',
        title: 'Five Rooftops. One Playbook. $1.29M in 60 Days.',
        summary: 'A family-owned auto group operating five Chevrolet and Ford rooftops across central Oklahoma deployed always-on AI across every store simultaneously — handling 2,059 customer conversations and closing $1.29M in attributed revenue over a 60-day window.',
        metrics: [
            { value: '$1.29M', label: 'Attributed Revenue', icon: DollarSign },
            { value: '37', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '2,059', label: 'AI-Handled Contacts', icon: Users },
            { value: '5', label: 'Rooftops Covered', icon: Target },
        ],
        tableData: {
            revenue: '$1.29M',
            revenueNum: 1295924,
            sales: 37,
            conversations: 2059,
            avgDeal: '$35.0k',
            rooftops: 5,
            brands: 'Chevrolet & Ford',
        },
        challenge: {
            title: 'The Challenge: Five Rooftops, One BDC, Every Lead Under Pressure',
            content: [
                "Running five rooftops across central Oklahoma means five phones ringing, five inbox streams, five chat widgets, and five sets of after-hours leads piling up overnight. The group's BDC team couldn't physically be everywhere at once.",
                "Every minute a web lead sat untouched was another minute a competing dealer could reach the customer first. Across Chevrolet and Ford franchises, the group needed every rooftop to respond to every lead with the same speed and consistency — regardless of brand, city, or time of day.",
                "And with multiple lead aggregators feeding each store — manufacturer websites, Cars.com, AutoTrader, CARFAX, Edmunds, Facebook lead ads, and the dealerships' own chat widgets — no human BDC could realistically answer every channel in seconds, 24/7, across five different stores."
            ]
        },
        solution: {
            title: 'The Solution: Coordinated AI Across Every Rooftop',
            steps: [
                {
                    title: 'Instant Speed-to-Lead — Every Channel, Every Store',
                    description: 'Every inbound lead from every source — manufacturer sites, Cars.com, AutoTrader, CARFAX, Edmunds, Facebook lead ads, and the dealerships\' own chat widgets — gets answered within seconds by a named AI agent matched to the right rooftop. No form-fill sits in a queue.'
                },
                {
                    title: 'Database Reactivation Across All 5 Stores',
                    description: 'Dormant CRM contacts across every rooftop are systematically re-engaged with personalized outbound SMS campaigns — turning cold records into live conversations without adding a single BDC hire.'
                },
                {
                    title: 'Multi-Agent Persona Pool',
                    description: 'Each rooftop has its own named AI agent, so customers get a consistent store-level experience — but the back-end logic, training, and continuous improvement are shared across the whole group. One playbook, five front doors.'
                }
            ]
        },
        results: {
            title: 'The Impact: $1.29M in 60 Days Across Five Rooftops',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI system handled more than 2,000 customer conversations across all five locations — and the revenue followed.",
            stats: [
                "$1,295,924 in attributed vehicle sales revenue across five rooftops in 60 days.",
                "37 confirmed sales at an average transaction value of $35,025 per deal.",
                "2,059 AI-handled customer contacts — leads, callbacks, and follow-ups — across Chevrolet and Ford franchises simultaneously."
            ]
        },
        testimonial: {
            quote: "It's great! So happy we found the Robin Egg Blue. We definitely get some looks driving it around town. I love it!",
            author: "Customer SMS reply",
            role: "Central Oklahoma — February 2026"
        }
    },
    'kansas-city-hyundai': {
        client: 'Hyundai Dealership in Kansas City',
        location: 'Kansas City, Missouri',
        state: 'MO',
        type: 'Single Point · Hyundai',
        category: 'franchise',
        accentColor: '#FF7404',
        tagline: 'Winning the most competitive Hyundai market in the Midwest.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'A Kansas City Hyundai Dealer: $271k in 60 Days',
        summary: 'A Hyundai franchise serving the Kansas City metropolitan market deployed always-on AI to handle inbound leads across every channel — closing $271k in attributed revenue from 722 AI-handled conversations over a 60-day window.',
        metrics: [
            { value: '$271k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '11', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '722', label: 'AI-Handled Contacts', icon: Users },
            { value: '$24.7k', label: 'Avg Deal Value', icon: Target },
        ],
        tableData: {
            revenue: '$271k',
            revenueNum: 271485,
            sales: 11,
            conversations: 722,
            avgDeal: '$24.7k',
            rooftops: 1,
            brands: 'Hyundai',
        },
        challenge: {
            title: 'The Challenge: Winning in a Crowded Metro',
            content: [
                "The Kansas City metro is one of the most competitive Hyundai markets in the Midwest — with multiple franchises within a short drive and a heavy aggregator presence feeding leads to everyone at once.",
                "The store was missing leads simply because it couldn't respond fast enough. First dealer to reply usually wins the deal, and a 20-minute response time was losing customers to faster competitors.",
                "The BDC needed to behave like it had triple the headcount, 24/7, without the payroll."
            ]
        },
        solution: {
            title: 'The Solution: Always-On AI Across Every Channel',
            steps: [
                {
                    title: 'Instant Speed-to-Lead Across All Channels',
                    description: "Every inbound lead — from manufacturer site, Cars.com, AutoTrader, CARFAX, Edmunds, Facebook lead ads, and the dealership's chat widget — is answered within seconds by the store's named AI agent."
                },
                {
                    title: '24/7 After-Hours Engagement',
                    description: "Night-time and weekend leads are picked up instantly by the AI, qualified, and booked into the sales calendar before the store opens."
                },
                {
                    title: 'CRM Reactivation Campaigns',
                    description: "Dormant contacts are re-engaged with tailored outbound SMS flows — recovering deals the store had effectively written off."
                }
            ]
        },
        results: {
            title: 'The Impact: $271k in 60 Days',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled 722 customer conversations for a single Hyundai rooftop in one of the most competitive metros in the Midwest.",
            stats: [
                "$271,485 in attributed vehicle sales revenue over 60 days.",
                "11 confirmed sales at an average transaction value of $24,680 per deal.",
                "722 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Thank you so much for your time, have an amazing weekend!",
            author: "Customer SMS reply",
            role: "Kansas City, MO — February 2026"
        }
    },
    'brookshire-hyundai': {
        client: 'Hyundai Dealership in the Brookshire Area',
        location: 'Brookshire Area, Texas',
        state: 'TX',
        type: 'Single Point · Hyundai',
        category: 'franchise',
        accentColor: '#FF7404',
        tagline: '$238k from a single Texas rooftop in 60 days.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'A Texas Hyundai Store: $238k in 60 Days from AI-Handled Leads',
        summary: 'Facing overwhelming inbound lead volume and after-hours gaps, this Texas Hyundai franchise deployed always-on AI to answer every inbound lead in seconds — closing $238k in attributed revenue from 665 AI-handled customer conversations over 60 days.',
        metrics: [
            { value: '$238k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '9', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '665', label: 'AI-Handled Contacts', icon: Users },
            { value: '$26.5k', label: 'Avg Deal Value', icon: Target },
        ],
        tableData: {
            revenue: '$238k',
            revenueNum: 238788,
            sales: 9,
            conversations: 665,
            avgDeal: '$26.5k',
            rooftops: 1,
            brands: 'Hyundai',
        },
        challenge: {
            title: 'The Challenge: Every Lead, Every Channel, Every Hour',
            content: [
                "As a single-point Hyundai franchise in Texas, the store was fielding leads from every major aggregator — manufacturer site, Cars.com, AutoTrader, CARFAX — plus web chat and walk-in. The BDC couldn't keep up with the volume, and after-hours leads were piling up.",
                "Every minute a lead sat in a queue was another minute a competitor could get there first. In a metro-adjacent market with plenty of Hyundai alternatives within driving distance, speed wasn't a nice-to-have — it was the whole game.",
                "The store needed to answer every lead, from every source, instantly — 24/7 — without hiring a three-shift BDC team."
            ]
        },
        solution: {
            title: 'The Solution: Always-On AI Across Every Channel',
            steps: [
                {
                    title: 'Instant Speed-to-Lead',
                    description: "Every inbound lead from the manufacturer site, Cars.com, AutoTrader, CARFAX, Edmunds, and the dealership's own chat widget is answered within seconds by the store's named AI agent — no delay, no queue."
                },
                {
                    title: 'After-Hours Coverage',
                    description: "The AI handles every lead from evening through early morning, booking appointments directly into the CRM for the sales team's first coffee of the day."
                },
                {
                    title: 'Database Reactivation',
                    description: "Dormant CRM contacts are systematically re-engaged with personalized outbound SMS campaigns — turning cold records into live conversations."
                }
            ]
        },
        results: {
            title: 'The Impact: $238k in 60 Days',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled 665 customer conversations for a single Hyundai rooftop — and the revenue followed.",
            stats: [
                "$238,788 in attributed vehicle sales revenue over 60 days.",
                "9 confirmed sales at an average transaction value of $26,532 per deal.",
                "665 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Thank you so much!! I really appreciate the help.",
            author: "Customer SMS reply",
            role: "Texas — March 2026"
        }
    },
    'drive-n-motion-colorado': {
        client: 'Independent Auto Group on the Colorado Front Range',
        location: 'Colorado Front Range',
        state: 'CO',
        type: '3 Rooftops · Pre-Owned',
        category: 'independent',
        accentColor: '#FF7404',
        tagline: 'Proof the playbook works off-franchise.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'An Independent Colorado Used-Car Group: $228k Across 3 Rooftops',
        summary: "An independent pre-owned auto group operating 3 rooftops along Colorado's Front Range deployed always-on AI across every store — proving the Speed-to-Lead playbook works off-franchise. $228k in attributed revenue from 1,887 AI-handled conversations over 60 days.",
        metrics: [
            { value: '$228k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '13', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '1,887', label: 'AI-Handled Contacts', icon: Users },
            { value: '3', label: 'Rooftops Covered', icon: BarChart3 },
        ],
        tableData: {
            revenue: '$228k',
            revenueNum: 228150,
            sales: 13,
            conversations: 1887,
            avgDeal: '$17.6k',
            rooftops: 3,
            brands: 'Pre-Owned',
        },
        challenge: {
            title: 'The Challenge: Independent Dealers vs. Franchise Scale',
            content: [
                "Independent used-car dealers compete against franchise stores with bigger ad budgets, bigger BDC teams, and manufacturer-backed lead aggregation. Every single lead matters because there aren't many to waste.",
                "Running 3 rooftops along the Colorado Front Range means 3 phones, 3 inbox streams, and 3 chat widgets — far more surface area than a small independent team can cover manually.",
                "The group needed franchise-level coverage across all 3 stores without franchise-level headcount, or it was going to keep losing leads to the bigger dealers down the road."
            ]
        },
        solution: {
            title: 'The Solution: Always-On AI Across Every Rooftop',
            steps: [
                {
                    title: 'Always-On AI Across All Locations',
                    description: "Every inbound lead at every rooftop — from CarGurus, AutoTrader, Cars.com, Facebook Marketplace, and the dealerships' own chat widgets — is answered instantly by a named AI agent matched to the right store."
                },
                {
                    title: 'Shared Playbook, Local Presence',
                    description: "Each rooftop runs its own AI persona, so customers always get the right store name and location — but the back-end logic, training, and optimizations are shared across the whole group."
                },
                {
                    title: 'Inventory-Matched Follow-Up',
                    description: "When a customer asks about a vehicle that's not in stock, the AI remembers — and reaches back out the moment a match arrives, turning one-shot searches into closed deals."
                }
            ]
        },
        results: {
            title: 'The Impact: $228k Across 3 Rooftops',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled nearly 1,900 customer conversations across three independent rooftops — proving the playbook works off-franchise.",
            stats: [
                "$228,150 in attributed vehicle sales revenue across 3 rooftops.",
                "13 confirmed sales at an average transaction value of $17,550 per deal.",
                "1,887 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Thank you so much, I really appreciate it. I am in desperate need of a car right now.",
            author: "Customer SMS reply",
            role: "Colorado — March 2026"
        }
    },
    'patriot-chevrolet': {
        client: 'Chevrolet Dealership in Northeast Oklahoma',
        location: 'Northeast Oklahoma',
        state: 'OK',
        type: 'Single Point · Chevrolet',
        category: 'franchise',
        accentColor: '#FF7404',
        tagline: 'Small-town staffing. Franchise-level speed.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'A Single Oklahoma Chevrolet Store: $153k in 60 Days',
        summary: 'A Chevrolet franchise in northeast Oklahoma deployed always-on AI to answer every lead across every channel instantly — closing $153k in attributed vehicle revenue from 355 AI-handled customer contacts over a 60-day window.',
        metrics: [
            { value: '$153k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '5', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '355', label: 'AI-Handled Contacts', icon: Users },
            { value: '$30.6k', label: 'Avg Deal Value', icon: Target },
        ],
        tableData: {
            revenue: '$153k',
            revenueNum: 153229,
            sales: 5,
            conversations: 355,
            avgDeal: '$30.6k',
            rooftops: 1,
            brands: 'Chevrolet',
        },
        challenge: {
            title: 'The Challenge: Franchise-Level Pressure, Small-Town Staffing',
            content: [
                "A single Chevrolet rooftop in a smaller northeast Oklahoma market doesn't have the BDC headcount of a big-city franchise — but it has the same lead volume from aggregator sites and the same competitive pressure from nearby dealers.",
                "Every lead mattered. Losing even one to a slow response meant losing real revenue to the next-closest dealer down the road.",
                "The store needed franchise-level response speed without franchise-level staffing."
            ]
        },
        solution: {
            title: 'The Solution: Always-On AI Across Every Channel',
            steps: [
                {
                    title: 'Instant Response to Every Lead',
                    description: "Manufacturer site leads, Cars.com, AutoTrader, CARFAX, and chat widget conversations are all picked up within seconds by the store's named AI agent."
                },
                {
                    title: 'Truck Buyer Prioritization',
                    description: "The AI is tuned for truck-heavy inventory — recognizing buyer signals quickly and routing high-intent truck shoppers to the sales team with pre-qualified information in hand."
                },
                {
                    title: 'Database Reactivation',
                    description: "Dormant CRM contacts — especially past truck buyers who might be ready to upgrade — are re-engaged with personalized outbound campaigns."
                }
            ]
        },
        results: {
            title: 'The Impact: $153k in 60 Days',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled 355 customer conversations for a single Chevrolet rooftop in a smaller Oklahoma market.",
            stats: [
                "$153,229 in attributed vehicle sales revenue over 60 days.",
                "5 confirmed sales at an average transaction value of $30,646 per deal.",
                "355 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Oh definitely 5! The car is amazing, the staff are friendly, helpful, very knowledgeable! The whole process was quicker than expected!",
            author: "Customer SMS reply",
            role: "Northeast Oklahoma — February 2026"
        }
    },
    'corwin-ford-nampa': {
        client: 'Ford Dealership in Idaho\'s Treasure Valley',
        location: 'Treasure Valley, Idaho',
        state: 'ID',
        type: 'Single Point · Ford',
        category: 'franchise',
        accentColor: '#FF7404',
        tagline: '$41k average deal. Every lead answered instantly.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'An Idaho Ford Store: $125k in 60 Days at $41k Average Deal',
        summary: "A Ford franchise serving Idaho's Treasure Valley deployed always-on AI to handle inbound leads across every aggregator and channel — closing $125k in attributed revenue at over $41k average deal value, from 261 AI-handled customer contacts.",
        metrics: [
            { value: '$125k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '3', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '261', label: 'AI-Handled Contacts', icon: Users },
            { value: '$41.8k', label: 'Avg Deal Value', icon: Target },
        ],
        tableData: {
            revenue: '$125k',
            revenueNum: 125494,
            sales: 3,
            conversations: 261,
            avgDeal: '$41.8k',
            rooftops: 1,
            brands: 'Ford',
        },
        challenge: {
            title: 'The Challenge: Holding Ground in a Growing Market',
            content: [
                "Idaho's Treasure Valley is growing fast, and so is the competition. A single Ford franchise has to hold its ground against multiple nearby stores, all bidding on the same aggregator leads.",
                "With a small-town dealer BDC and a high-ticket, truck-heavy inventory, every lead lost to slow response was a deal worth tens of thousands of dollars.",
                "The store needed to answer every lead instantly — no matter the time of day — without hiring a big-city-sized BDC."
            ]
        },
        solution: {
            title: 'The Solution: Always-On AI, Tuned for High-Ticket Sales',
            steps: [
                {
                    title: 'Instant Speed-to-Lead',
                    description: "Every inbound lead — from the Ford manufacturer site, Cars.com, AutoTrader, CARFAX, and the dealership's chat widget — is answered within seconds by the store's named AI agent."
                },
                {
                    title: 'High-Value Deal Focus',
                    description: "The AI is tuned for the store's truck-and-SUV-heavy inventory mix, recognizing serious buyer signals and escalating high-intent customers to the sales team with a full context handoff."
                },
                {
                    title: 'Database Reactivation',
                    description: "Dormant Ford and F-Series owners in the CRM are re-engaged with personalized upgrade offers, turning cold records into trade-in opportunities."
                }
            ]
        },
        results: {
            title: 'The Impact: $125k at $41k Average Deal Value',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled 261 customer conversations for a single Idaho Ford rooftop — closing three high-ticket deals at over $41,000 each.",
            stats: [
                "$125,494 in attributed vehicle sales revenue over 60 days.",
                "3 confirmed sales at an average transaction value of $41,831 per deal.",
                "261 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Thank you so much. Very comfortable. I love it.",
            author: "Customer SMS reply",
            role: "Treasure Valley, Idaho — March 2026"
        }
    },
    'grand-valley-auto': {
        client: 'Independent Dealer in Western Colorado',
        location: 'Western Colorado',
        state: 'CO',
        type: 'Independent · Pre-Owned',
        category: 'independent',
        accentColor: '#FF7404',
        tagline: 'Rural independent. Franchise-grade results.',
        logo: '/images/brands/generic.png',
        heroImage: '/images/dealership-hero.jpg',
        title: 'A Western Colorado Independent Dealer: $110k in 60 Days',
        summary: 'An independent auto dealer in the Grand Valley region of western Colorado deployed always-on AI to compete with franchise stores on speed and consistency — closing $110k in attributed revenue from 189 AI-handled customer conversations over 60 days.',
        metrics: [
            { value: '$110k', label: 'Attributed Revenue', icon: DollarSign },
            { value: '4', label: 'Confirmed Sales', icon: TrendingUp },
            { value: '189', label: 'AI-Handled Contacts', icon: Users },
            { value: '$27.7k', label: 'Avg Deal Value', icon: Target },
        ],
        tableData: {
            revenue: '$110k',
            revenueNum: 110799,
            sales: 4,
            conversations: 189,
            avgDeal: '$27.7k',
            rooftops: 1,
            brands: 'Pre-Owned',
        },
        challenge: {
            title: 'The Challenge: Independent Store, Franchise-Level Competition',
            content: [
                "Independent dealers in rural western Colorado compete against larger franchise stores along the Front Range that have bigger ad budgets and full-time BDC teams. Losing a single lead to slow response can mean losing a customer for years.",
                "With a small team and a big service area, the store couldn't realistically answer every lead within a minute — let alone 24/7.",
                "The dealer needed a way to match franchise-level response speed without franchise-level headcount."
            ]
        },
        solution: {
            title: 'The Solution: Franchise-Level Coverage, Independent-Level Cost',
            steps: [
                {
                    title: 'Franchise-Level Response Speed',
                    description: "Every inbound lead — from CarGurus, AutoTrader, Cars.com, Facebook Marketplace, and the dealership's own chat — is answered within seconds by the store's named AI agent, matching anything the franchise stores could do."
                },
                {
                    title: 'Always-On Coverage',
                    description: "Nights and weekends are no longer dead time. The AI handles every lead 24/7, making sure the independent store is first-to-contact even when the sales team is home."
                },
                {
                    title: 'Inventory-Led Reactivation',
                    description: "When fresh inventory arrives, the AI reaches back out to past shoppers whose wish-lists match — turning one-off browsers into closed sales."
                }
            ]
        },
        results: {
            title: 'The Impact: $110k in 60 Days',
            content: "Over a 60-day window (February 10 to April 10, 2026), the AI handled 189 customer conversations for an independent dealer in western Colorado — closing four deals at an average of $27,699.",
            stats: [
                "$110,799 in attributed vehicle sales revenue over 60 days.",
                "4 confirmed sales at an average transaction value of $27,699 per deal.",
                "189 AI-handled customer contacts across every lead source, 24/7."
            ]
        },
        testimonial: {
            quote: "Everything. I LOVE IT.",
            author: "Customer SMS reply",
            role: "Western Colorado — March 2026"
        }
    }
};

// Helper: get case study by slug
export function getCaseStudy(slug: string): CaseStudyData | null {
    return caseStudies[slug] || null;
}

// Helper: get all slugs (for sitemap / static params)
export function getAllCaseStudySlugs(): string[] {
    return Object.keys(caseStudies);
}

// Helper: get related studies (same category first, then others)
export function getRelatedStudies(currentSlug: string, count: number = 3): Array<{ slug: string } & CaseStudyData> {
    const current = caseStudies[currentSlug];
    if (!current) return [];
    const allSlugs = Object.keys(caseStudies).filter(s => s !== currentSlug);
    const sameCategory = allSlugs.filter(s => caseStudies[s].category === current.category);
    const diffCategory = allSlugs.filter(s => caseStudies[s].category !== current.category);
    return [...sameCategory, ...diffCategory]
        .slice(0, count)
        .map(slug => ({ slug, ...caseStudies[slug] }));
}

// Helper: compute aggregate stats across all studies
export function getAggregateStats() {
    const entries = Object.values(caseStudies);
    const totalRevenue = entries.reduce((sum, s) => sum + s.tableData.revenueNum, 0);
    const totalSales = entries.reduce((sum, s) => sum + s.tableData.sales, 0);
    const totalConversations = entries.reduce((sum, s) => sum + s.tableData.conversations, 0);
    const totalRooftops = entries.reduce((sum, s) => sum + s.tableData.rooftops, 0);
    const avgDeal = Math.round(totalRevenue / totalSales);
    const states = new Set(entries.map(s => s.state));
    return {
        totalRevenue: `$${(totalRevenue / 1_000_000).toFixed(2)}M`,
        totalRevenueNum: totalRevenue,
        totalSales,
        totalConversations: totalConversations.toLocaleString(),
        totalRooftops,
        avgDeal: `$${(avgDeal / 1000).toFixed(1)}k`,
        dealerCount: entries.length,
        stateCount: states.size,
    };
}
