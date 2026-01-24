export const MOCK_BLOG_POSTS = [
    {
        id: 'mock-1',
        slug: 'crm-database-reactivation-guide',
        headline: 'The Ultimate Guide to CRM Database Reactivation for Dealerships',
        metaDescription: 'Complete guide to turning your dead leads into revenue without spending a dollar on ad spend. Learn the 3-step reactivation framework.',
        image: '/images/wireframes/ultimate-guide-crm-reactivation.jpeg',
        readingTime: 8,
        createdAt: '2024-03-15T10:00:00Z',
        category: {
            slug: 'strategy',
            title: 'Strategy'
        },
        tags: [
            { slug: 'lead-generation', title: 'Lead Generation' },
            { slug: 'crm', title: 'CRM' }
        ]
    },
    {
        id: 'mock-2',
        slug: 'stop-losing-leads-response-time',
        headline: 'Stop Losing Leads: Why Response Time is Your Biggest Revenue Leaker',
        metaDescription: '78% of customers buy from the first responder. We analyze 10,000 dealership calls to see where the money is really going.',
        image: '/images/wireframes/6.jpeg',
        readingTime: 5,
        createdAt: '2024-03-10T14:30:00Z',
        category: {
            slug: 'operations',
            title: 'Operations'
        },
        tags: [
            { slug: 'speed-to-lead', title: 'Speed to Lead' }
        ]
    },
    {
        id: 'mock-3',
        slug: 'ai-dealership-implementation',
        headline: 'Implementing AI in Your Dealership: A Practical Roadmap',
        metaDescription: 'Move beyond the hype. Here is exactly how to deploy AI agents in your BDC to handle 24/7 inbound traffic.',
        image: '/images/wireframes/ai-implementation.jpeg',
        readingTime: 6,
        createdAt: '2024-03-05T09:15:00Z',
        category: {
            slug: 'technology',
            title: 'Technology'
        },
        tags: [
            { slug: 'ai', title: 'AI' },
            { slug: 'automation', title: 'Automation' }
        ]
    },
    {
        id: 'mock-4',
        slug: 'third-party-lead-providers',
        headline: 'Ranking the Top Third-Party Lead Providers for 2024',
        metaDescription: 'We analyzed lead quality, conversion rates, and cost-per-sale from the major providers. The results might surprise you.',
        image: '/images/wireframes/7_lead_providers.jpeg',
        readingTime: 7,
        createdAt: '2024-02-28T16:45:00Z',
        category: {
            slug: 'marketing',
            title: 'Marketing'
        },
        tags: [
            { slug: 'leads', title: 'Leads' }
        ]
    },
    {
        id: 'mock-5',
        slug: 'the-9pm-problem-dealership-revenue-leak',
        headline: 'The 9 PM Problem: How Much Revenue Do You Lose After Hours?',
        metaDescription: 'Your marketing runs 24/7. Your lead handling stops at 8 PM. New data reveals that 34% of digital leads submit outside showroom hours—and most dealers are ignoring them.',
        image: '/images/wireframes/6.jpeg',
        readingTime: 6,
        createdAt: '2025-10-24T09:00:00Z',
        category: {
            slug: 'operations',
            title: 'Operations'
        },
        tags: [
            { slug: 'lead-handling', title: 'Lead Handling' },
            { slug: 'roi', title: 'ROI' }
        ],
        // @ts-ignore
        html: `
            <h2>The "Dark Hours" Revenue Leak</h2>
            <p><strong>Here is a terrifying statistic for any Dealer Principal:</strong> In a recent analysis of 50,000 automotive leads, we found that <strong>34% of all digital inquiries are submitted between 8:00 PM and 7:00 AM.</strong></p>
            <p>For most dealerships, these leads enter a "black hole." They sit in the CRM, untouched, for an average of 10.5 hours until the BDC opens the next morning. By then, the customer has likely:</p>
            <ul>
                <li>Lost interest.</li>
                <li>Submitted a lead to a competitor who <em>did</em> respond.</li>
                <li>Or simply moved on with their day.</li>
            </ul>
            
            <h3>The Cost of "Morning Response"</h3>
            <p>Response time is not just a vanity metric; it is the single biggest predictor of conversion. Leads responded to within 5 minutes are <strong>21x more likely</strong> to enter the sales process than those responded to after 30 minutes. responding 10 hours later? That lead is effectively dead.</p>
            
            <h3>The Solution: 24/7 AI Coverage</h3>
            <p>This is where <a href="/speed-to-lead">Speed to Lead</a> technology shifts from a "nice-to-have" to a critical operational asset. An AI agent doesn't sleep, doesn't take breaks, and doesn't care if a lead comes in at 2:00 AM on a Sunday.</p>
            <p>VisQuanta's AI agents engage these "after-hours" leads instantly—answering questions, confirming availability, and even scheduling appointments for when your team arrives in the morning.</p>
            
            <div style="background: rgba(255, 116, 4, 0.1); border-left: 4px solid #FF7404; padding: 20px; margin: 30px 0; border-radius: 8px;">
                <h4 style="margin-top: 0; color: #fff;">Case Study Snippet: Metro Auto Group</h4>
                <p style="margin-bottom: 0; color: #ccc;">After implementing 24/7 AI coverage, Metro Auto Group saw a <strong>12% increase in set appointments</strong> purely from leads that came in after 9 PM. That translated to an additional 18 units sold in the first month.</p>
            </div>

            <h3>Stop Offering 9-to-5 Service in a 24/7 World</h3>
            <p>Your customers are shopping on Amazon at midnight. They expect instant gratification. If your dealership is "closed" while your website is "open," you are paying for traffic you refuse to service.</p>
            <p>It's time to close the gap.</p>
        `
    }
];
