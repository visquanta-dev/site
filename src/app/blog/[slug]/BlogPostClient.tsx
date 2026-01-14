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
                    className="object-cover"
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
interface ExecutiveSummaryProps {
    summary: string;
}

export function ExecutiveSummary({ summary }: ExecutiveSummaryProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-16 relative overflow-hidden rounded-2xl bg-zinc-900/40 border-l-4 border-[#FF7404] p-8 md:p-10 backdrop-blur-sm"
        >
            <div className="absolute top-0 right-0 p-4 opacity-5">
                <BarChart3 className="w-32 h-32" />
            </div>

            <div className="relative z-10">
                <h3 className="text-lg font-serif font-bold text-white mb-6 flex items-center gap-3">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#FF7404]/10 text-[#FF7404]">
                        <CheckCircle2 className="w-5 h-5" />
                    </span>
                    Executive Brief: Key Strategic Takeaways
                </h3>

                <div className="space-y-4">
                    {/* Transforming the meta description into bullet points if it's long, or just displaying key sentences */}
                    <p className="text-xl text-zinc-200 leading-relaxed font-light">
                        {summary}
                    </p>

                    <div className="pt-6 mt-6 border-t border-white/5 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Impact Area</span>
                            <span className="text-sm font-medium text-white">Revenue Operations</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">Implementation</span>
                            <span className="text-sm font-medium text-white">Standard (2-4 Weeks)</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase tracking-widest text-zinc-500 mb-1">ROI Timeline</span>
                            <span className="text-sm font-medium text-[#FF7404]">Immediate (30 Days)</span>
                        </div>
                    </div>
                </div>
            </div>
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
