'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { CheckCircle2, ChevronRight, BarChart3, Clock, ArrowDown, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { createRoot } from 'react-dom/client';
import BlogInlineCTA from '@/components/blog/BlogInlineCTA';

interface BlogPostClientProps {
    children: ReactNode;
    delay?: number;
}

// --- Parallax Hero Component ---
interface ParallaxHeroProps {
    src: string;
    alt: string;
}

export function ParallaxHero({ src, alt }: ParallaxHeroProps) {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const scale = useTransform(scrollY, [0, 1000], [1, 1.1]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0.5]);

    return (
        <div className="relative w-full aspect-[21/9] rounded-2xl md:rounded-[2rem] overflow-hidden mb-16 shadow-2xl shadow-black/50 border border-white/5 group z-0">
            <motion.div style={{ y, scale, opacity }} className="absolute inset-0 w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

            {/* Scroll Indication */}
            <motion.div
                style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">Scroll for Intelligence</span>
                <ArrowDown className="w-4 h-4 text-[#FF7404] animate-bounce" />
            </motion.div>
        </div>
    );
}

// --- Scroll Progress Bar Component ---
export function ReadingProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#FF7404] z-[2000] origin-left shadow-[0_0_10px_#FF7404]"
            style={{ scaleX }}
        />
    );
}

// --- Table of Contents Component ---
export function TableOfContents() {
    const [headings, setHeadings] = useState<{ id: string; text: string; level: number }[]>([]);
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        // Parse headings from the content
        const elements = Array.from(document.querySelectorAll('.prose h2, .prose h3'));

        // Add IDs if missing
        const headingData = elements.map((elem, index) => {
            if (!elem.id) {
                elem.id = `section-${index}`;
            }
            return {
                id: elem.id,
                text: elem.textContent || '',
                level: Number(elem.tagName.substring(1)),
                top: elem.getBoundingClientRect().top + window.scrollY
            };
        });

        setHeadings(headingData);

        // Scroll Spy Logic
        const handleScroll = () => {
            const scrollPos = window.scrollY + 200; // Offset

            // Find current active section
            for (let i = headingData.length - 1; i >= 0; i--) {
                const h = headingData[i];
                if (document.getElementById(h.id) && (document.getElementById(h.id)?.getBoundingClientRect().top ?? 0) < 200) {
                    setActiveId(h.id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (headings.length === 0) return null;

    return (
        <div className="sticky top-32 pl-8 border-l border-white/5 hidden xl:block">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF7404] mb-6 flex items-center gap-2">
                <BarChart3 className="w-3 h-3" />
                Report Structure
            </h4>
            <nav className="flex flex-col gap-3">
                {headings.map((heading) => (
                    <button
                        key={heading.id}
                        onClick={() => {
                            document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(heading.id);
                        }}
                        className={`text-left text-sm transition-all duration-300 relative pl-4 ${activeId === heading.id
                            ? 'text-white font-medium translate-x-1'
                            : 'text-zinc-600 hover:text-zinc-400'
                            }`}
                        style={{
                            marginLeft: heading.level === 3 ? '12px' : '0px',
                            fontSize: heading.level === 3 ? '13px' : '14px'
                        }}
                    >
                        {activeId === heading.id && (
                            <motion.div
                                layoutId="toc-marker"
                                className="absolute left-0 top-[0.6em] w-1.5 h-1.5 rounded-full bg-[#FF7404] shadow-[0_0_8px_#FF7404]"
                            />
                        )}
                        {heading.text}
                    </button>
                ))}
            </nav>
        </div>
    );
}

// --- Executive Summary Card ---
// --- Executive Summary Card (Rotational Logic) ---
interface ExecutiveSummaryProps {
    summary: string; // fallback in case no random match (not really used in this new logic but good for prop compatibility)
}

const BRIEF_VARIATIONS = [
    {
        id: 1,
        title: "Executive Brief: The Hidden Revenue Problem",
        body: "84% of CRM leads go untouched after 30 days—that's millions in latent revenue sitting idle. AI reactivation recovers $50K-$200K monthly from existing databases without new ad spend.",
        impactArea: "Revenue Recovery",
        implementation: "Rapid (1-2 Weeks)",
        roiTimeline: "Immediate (14 Days)"
    },
    {
        id: 2,
        title: "Executive Brief: The 60-Second Window",
        body: "22-minute average response times cost dealerships $8,500+ weekly. Sub-60-second AI response captures leads before competitors—converting at 21x the industry average.",
        impactArea: "Lead Conversion",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Immediate (7 Days)"
    },
    {
        id: 3,
        title: "Executive Brief: Missed Calls, Missed Revenue",
        body: "1 in 4 service calls go to voicemail—$340+ lost per missed RO. Voice AI captures every inquiry 24/7, books appointments automatically, and protects CSI scores.",
        impactArea: "Fixed Operations",
        implementation: "Rapid (1-2 Weeks)",
        roiTimeline: "Immediate (30 Days)"
    },
    {
        id: 4,
        title: "Executive Brief: The BDC Consistency Problem",
        body: "45% annual BDC turnover means constant retraining and lost consistency. AI handles first-touch engagement and qualification—your closers focus on selling cars.",
        impactArea: "Sales Operations",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Accelerated (60 Days)"
    },
    {
        id: 5,
        title: "Executive Brief: The Speed Gap",
        body: "While your team handles floor traffic, leads go to voicemail. Your competitors respond in under 60 seconds. Every delayed response is a customer lost to the dealer down the street.",
        impactArea: "Market Position",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Immediate (30 Days)"
    },
    {
        id: 6,
        title: "Executive Brief: Reviews Drive Revenue",
        body: "4.8★ dealerships close 23% more sales. AI monitors and responds to reviews instantly across all platforms—protecting CSI and converting satisfied customers into advocates.",
        impactArea: "Reputation & CSI",
        implementation: "Rapid (1-2 Weeks)",
        roiTimeline: "Ongoing"
    },
    {
        id: 7,
        title: "Executive Brief: The After-Hours Opportunity",
        body: "67% of leads come after 6PM. Your showroom closes—your competitors' AI doesn't. 24/7 conversational AI captures every evening and weekend inquiry automatically.",
        impactArea: "Lead Capture",
        implementation: "Rapid (1-2 Weeks)",
        roiTimeline: "Immediate (7 Days)"
    },
    {
        id: 8,
        title: "Executive Brief: One System, Five Capabilities",
        body: "Stop juggling vendors. Unify lead reactivation, speed to lead, service AI, reputation management, and website engagement in one automotive-specific platform.",
        impactArea: "Operations Efficiency",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Immediate (30 Days)"
    },
    {
        id: 9,
        title: "Executive Brief: The Cost of Inaction",
        body: "Every day without automation: 12+ missed service calls, 15+ leads going cold, $8,500 in lost weekly revenue. Your CRM is becoming a graveyard of opportunity.",
        impactArea: "Revenue Operations",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Immediate (30 Days)"
    },
    {
        id: 10,
        title: "Executive Brief: Measurable Impact",
        body: "Dealerships on AutoMaster Suite average 30% revenue increase within 30 days—higher lead conversion, zero missed service calls, and recovered database revenue.",
        impactArea: "Overall Performance",
        implementation: "Standard (2-4 Weeks)",
        roiTimeline: "Immediate (30 Days)"
    }
];

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
    const [brief, setBrief] = useState(BRIEF_VARIATIONS[0]);

    useEffect(() => {
        // Simple random rotation on mount
        const randomIndex = Math.floor(Math.random() * BRIEF_VARIATIONS.length);
        setBrief(BRIEF_VARIATIONS[randomIndex]);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 relative overflow-hidden rounded-[20px] bg-[#0F0F0F] border border-white/[0.06] p-8 md:p-10 shadow-2xl"
        >
            {/* Top glass gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

            {/* Animated graphic in top right */}
            <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
                <div className="flex items-end gap-1 h-16">
                    <motion.div
                        animate={{ height: ["40%", "80%", "40%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 bg-[#FF7404] rounded-t-sm"
                    />
                    <motion.div
                        animate={{ height: ["60%", "30%", "60%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-2 bg-[#FF7404]/50 rounded-t-sm"
                    />
                    <motion.div
                        animate={{ height: ["30%", "90%", "30%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-2 bg-[#FF7404]/30 rounded-t-sm"
                    />
                </div>
            </div>

            <div className="relative z-10 text-left">
                <div className="flex items-center gap-3 mb-6">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF7404]/10 text-[#FF7404] ring-1 ring-[#FF7404]/20">
                        <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif font-semibold text-white tracking-tight">
                        {brief.title.replace('Executive Brief: ', '')}
                    </h3>
                </div>

                <div className="space-y-6">
                    <p className="text-lg md:text-xl text-zinc-300 leading-relaxed font-light max-w-2xl">
                        {brief.body}
                    </p>

                    <div className="pt-6 border-t border-white/[0.06] grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-semibold">Impact Area</span>
                            <span className="text-sm font-medium text-white">{brief.impactArea}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-semibold">Implementation</span>
                            <span className="text-sm font-medium text-white">{brief.implementation}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] uppercase tracking-[0.1em] text-zinc-500 font-semibold">ROI Timeline</span>
                            <span className="text-sm font-bold text-[#FF7404]">{brief.roiTimeline}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom orange accent line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF7404] via-[#FF7404]/20 to-transparent opacity-80" />
        </motion.div>
    );
}


// --- Main Wrapper & Link Enhancer ---
export default function BlogPostClient({ children, delay = 0 }: BlogPostClientProps) {
    useEffect(() => {
        // ENHANCEMENT: Automated External Link Detection & Styling
        const links = document.querySelectorAll('.blog-content a');
        links.forEach(link => {
            const anchor = link as HTMLAnchorElement;
            const isExternal = anchor.hostname !== window.location.hostname;

            if (isExternal) {
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
                anchor.classList.add('external-link-enhanced'); // Hook for custom CSS if needed

                // Optional: Append icon visually
                // We verify if it already has one to avoid dupes
                if (!anchor.querySelector('.ext-icon')) {
                    const iconSpan = document.createElement('span');
                    iconSpan.className = 'ext-icon inline-flex align-top ml-0.5 opacity-70';
                    // Render icon using simple SVG innerHTML for performance
                    iconSpan.innerHTML = `<svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`;
                    anchor.appendChild(iconSpan);
                }
            }
        });

        // OPTIMIZED REPLACEMENT: MutationObserver for Async Loaded Iframes
        // We need to watch for the iframe because it's injected asynchronously by an external script
        const replaceInlineCTA = () => {
            const inlineBanners = document.querySelectorAll('iframe[src*="/banner/inline"]');
            inlineBanners.forEach((iframe) => {
                // Check if we already injected (to avoid double renders on re-runs)
                if (iframe.nextElementSibling?.classList.contains('visquanta-inline-cta-wrapper')) return;

                const container = document.createElement('div');
                container.className = 'visquanta-inline-cta-wrapper';

                if (iframe.parentNode) {
                    iframe.parentNode.insertBefore(container, iframe.nextSibling);

                    // Hide original
                    (iframe as HTMLElement).style.display = 'none';
                    (iframe as HTMLElement).style.visibility = 'hidden';

                    const root = createRoot(container);
                    root.render(<BlogInlineCTA />);
                }
            });
        };

        // 1. Initial check
        replaceInlineCTA();

        // 2. Setup Observer
        const observer = new MutationObserver((mutations) => {
            // Performance: Only run check if nodes were actually added
            const hasAddedNodes = mutations.some(m => m.addedNodes.length > 0);
            if (hasAddedNodes) {
                replaceInlineCTA();
            }
        });

        // Observe the blog content area (or body as fallback)
        const targetNode = document.querySelector('.blog-content') || document.body;
        if (targetNode) {
            observer.observe(targetNode, {
                childList: true,
                subtree: true
            });
        }

        return () => observer.disconnect();
    }, [children]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}
