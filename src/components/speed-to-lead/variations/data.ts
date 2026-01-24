import { Moon, Calendar, Users, BellOff, TrendingUp, GitBranch } from 'lucide-react';

export const lossPoints = [
    {
        icon: Moon,
        title: "After Hours",
        description: "Leads arrive at 9pm. Nobody responds until 9am.",
        indicator: "12hr gap",
        solution: "VisQuanta's AI is active 24/7, engaging late-night leads instantly while your team sleeps."
    },
    {
        icon: Calendar,
        title: "Weekends",
        description: "Saturday leads wait until Monday morning.",
        indicator: "48hr gap",
        solution: "Weekend leads are qualified and appointed automatically, filling your Monday calendar."
    },
    {
        icon: Users,
        title: "BDC Overload",
        description: "Peak volume overwhelms available staff capacity.",
        indicator: "Backlog",
        solution: "Infinite scaling capacity means every lead gets a human-like response, no matter the volume."
    },
    {
        icon: BellOff,
        title: "Missed Notifications",
        description: "Lead alerts buried in email or CRM queues.",
        indicator: "Delayed",
        solution: "Direct CRM integration ensures immediate action, bypassing manual notification delays."
    },
    {
        icon: TrendingUp,
        title: "Vendor Lead Spikes",
        description: "Sudden volume from paid sources exceeds bandwidth.",
        indicator: "Overflow",
        solution: "Handle hundreds of concurrent leads from paid campaigns without dropping a single one."
    },
    {
        icon: GitBranch,
        title: "Routing Delays",
        description: "Leads stuck in assignment logic before human contact.",
        indicator: "Queued",
        solution: "Instant engagement happens parallel to routing, so the customer isn't waiting on your internal logic."
    }
];
