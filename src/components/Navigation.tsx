'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  RefreshCcw,
  Zap,
  Star,
  HeartHandshake,
  Wrench,
  Target,
  Gauge,
  Layers,
  Lock,
  Building2,
  Shield,
  MonitorPlay,
  MessageSquare
} from 'lucide-react';
import { RequestDemoButton } from './CalendlyModal';
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

// Portal helper to ensure client-side rendering
const Portal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return createPortal(children, document.body);
};

interface NavItem {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    icon?: any;
    isCore?: boolean;
  }[];
}

const navItems: NavItem[] = [
  {
    label: 'AutoMaster Suite',
    href: '/auto-master-suite',
    children: [
      {
        label: 'Lead Reactivation',
        href: '/lead-reactivation',
        description: 'Database Reactivation - Reengage and convert',
        icon: RefreshCcw,
        isCore: true
      },
      {
        label: 'Speed to Lead Services',
        href: '/speed-to-lead',
        description: 'Including Website SMS Widget & Social Media Agent',
        icon: Zap
      },
      {
        label: 'Reputation Management',
        href: '/reputation-management',
        description: 'Stay ahead of online reviews',
        icon: Star
      },
      {
        label: 'Custom Campaigns',
        href: '/custom-campaigns',
        description: 'Done-for-you SMS campaigns',
        icon: Target
      },
    ]
  },
  {
    label: 'Dealer Services',
    children: [
      { label: 'Independent Dealerships', href: '/dealers/independent', description: 'Maximize capital & time efficiency', icon: Target },
      { label: 'Franchise Dealerships', href: '/dealers/franchise', description: 'Consistent performance across locations', icon: Star, isCore: true },
      { label: 'Auto Groups', href: '/dealers/auto-groups', description: 'Group-wide control, local execution', icon: Zap },
      { label: 'Pre-Owned', href: '/dealers/pre-owned', description: 'Lead reactivation & inventory velocity', icon: RefreshCcw },
      {
        label: 'Dealer Success',
        href: '/dealer-success',
        description: 'Personalized dealer support',
        icon: HeartHandshake
      },
    ]
  },
  {
    label: 'Company',
    children: [
      { label: 'About VisQuanta', href: '/about-visquanta', description: 'Our mission to modernize ops', icon: Star },
      { label: 'Our Team', href: '/team', description: 'The people behind the platform', icon: HeartHandshake },
      { label: 'Careers', href: '/careers', description: 'Help shape the future', icon: Target },
      { label: 'Trust Center', href: '/trust', description: 'Privacy & data handling', icon: Shield },
      { label: 'Chat with VisQuanta', href: '/book-demo', description: 'Schedule a discovery session', icon: MessageSquare },
      { label: 'Contact Us', href: '/contact', description: 'Get in touch directly', icon: Zap },
    ]
  },
  {
    label: 'Resources',
    children: [
      { label: 'FAQs', href: '/faqs', description: 'Everything you need to know', icon: RefreshCcw },
      { label: 'Our Blog', href: '/blog', description: 'Insights for forward-thinkers', icon: Layers },
      { label: 'AMS Info Sheets', href: '/ams-guides', description: 'One-page solution overviews', icon: Layers },
    ]
  },
];

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);

  }, []);

  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Handle Escape key and Resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  // Lock body scroll and Focus Trap
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Lock body
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Focus trap
      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
      );
      const firstElement = focusableElements?.[0] as HTMLElement;
      // Focus the close button (which is effectively the trigger button in the fixed header or the first element inside)
      // Actually, standard pattern is to focus the first interactive element IN the modal or the close button.
      // In this design, the toggle button remains visible. 
      // But let's try to focus the mobile menu container or the first link?
      // Better: Focus the close button if it's inside? The close button is part of the header, which is technically outside the "mobile menu content" div but visible.
      // Let's simply focus the container for screen readers to announce it.

      mobileMenuRef.current?.focus();

    } else {
      // Unlock body
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 border-b ${(isScrolled || isMobileMenuOpen)
        ? 'bg-background/95 backdrop-blur-md border-border py-4'
        : 'bg-transparent border-transparent py-5'
        }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50 relative group px-2 py-1">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/0 via-[#FF7404]/5 to-[#FF7404]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg" />
          <Image
            src="/images/visquanta-logo-white.png"
            alt="VisQuanta"
            width={200}
            height={53}
            className="h-10 w-auto brightness-100 group-hover:brightness-125 transition-all duration-500 relative z-10"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 relative ml-12">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={item.href || '#'}
                className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors ${activeDropdown === item.label ? 'text-white' : 'text-muted-foreground hover:text-white'
                  }`}
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                ) : null}

              </Link>

              <AnimatePresence>
                {activeDropdown === item.label && item.children ? (
                  <motion.div

                    className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-[700px]"
                    initial={{ opacity: 0, y: 15, scale: 0.98, rotateX: -10 }}
                    animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95, rotateX: -5 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] as const }}
                  >
                    <div className="bg-[#030303]/95 border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden backdrop-blur-2xl ring-1 ring-white/5 relative">
                      {/* Top Accent Gradient */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7404]/40 to-transparent" />

                      <div className="flex">
                        {/* Side Context (Optional/Visual) */}
                        <div className="w-[180px] bg-white/[0.02] border-r border-white/5 p-8 hidden md:flex flex-col justify-between">
                          <div>
                            <div className="text-[10px] font-black uppercase tracking-[0.25em] text-[#FF7404] mb-4">Module</div>
                            <h3 className="text-white font-bold text-lg tracking-tighter leading-tight uppercase">
                              {item.label}
                            </h3>
                          </div>
                          <div className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest leading-relaxed">
                            AVG. DEALER IMPACT <br />
                            <span className="text-[#FF7404]">Revenue Lift: +24%</span>
                          </div>
                        </div>

                        {/* Main Grid Content */}
                        <div className="flex-1 p-6">
                          <div className="grid grid-cols-2 gap-2">
                            {item.children.map((child, idx) => {
                              const Icon = child.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.05 }}
                                >
                                  <Link
                                    href={child.href}
                                    className="group relative flex items-start gap-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/5"
                                  >
                                    {Icon && (
                                      <div className="relative z-10 w-11 h-11 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:bg-[#FF7404]/10 group-hover:border-[#FF7404]/30 group-hover:text-[#FF7404] transition-all duration-500 shadow-inner">
                                        <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-[#FF7404]/20 opacity-0 group-hover:opacity-40 blur-xl transition-opacity rounded-xl" />
                                      </div>
                                    )}
                                    <div className="relative z-10 flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <div className="text-sm font-bold text-white group-hover:text-[#FF7404] transition-colors uppercase tracking-tight">
                                          {child.label}
                                        </div>
                                        {child.isCore && (
                                          <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-[#FF7404]/20 text-[#FF7404] uppercase tracking-widest border border-[#FF7404]/20">Core</span>
                                        )}
                                      </div>
                                      <div className="text-[11px] text-zinc-500 line-clamp-2 leading-snug font-light group-hover:text-zinc-400 transition-colors">
                                        {child.description}
                                      </div>
                                    </div>
                                    {/* Subtle hover reveal line */}
                                    <div className="absolute bottom-2 left-4 right-8 h-px bg-gradient-to-r from-[#FF7404] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-30" />
                                  </Link>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </div>

                      {/* Footer / Status Bar Upgrade */}
                      <div className="bg-black/40 border-t border-white/5 p-4 flex items-center justify-between px-10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-enterprise-grid opacity-[0.02] pointer-events-none" />

                        <div className="flex items-center gap-8 relative z-10">
                          <div className="flex items-center gap-3">
                            <div className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-40"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
                            </div>
                            <span className="text-[10px] uppercase font-black tracking-[0.2em] text-zinc-500">System Online</span>
                          </div>

                          <div className="hidden sm:flex items-center gap-4 border-l border-white/10 pl-8">
                            <div className="flex flex-col">
                              <span className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold mb-0.5">Efficiency</span>
                              <span className="text-[10px] font-mono text-zinc-400">MAXIMIZED</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-[8px] uppercase tracking-widest text-zinc-600 font-bold mb-0.5">Conversion</span>
                              <span className="text-[10px] font-mono text-emerald-500 font-bold">+18%</span>
                            </div>
                          </div>
                        </div>

                        {item.href && (
                          <Link
                            href={item.href}
                            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#FF7404] hover:text-white transition-all group relative z-10"
                          >
                            Access {item.label} Hub
                            <div className="w-6 h-6 rounded-full border border-[#FF7404]/30 flex items-center justify-center group-hover:bg-[#FF7404] group-hover:text-black transition-all">
                              <Gauge className="w-3 h-3" />
                            </div>
                          </Link>
                        )}
                      </div>

                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>

            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <RequestDemoButton asChild>
            <Button className="relative h-9 px-6 rounded-lg bg-[#FF7404] hover:bg-[#ff8a2b] text-black transition-all uppercase tracking-widest text-[10px] font-black shadow-[0_0_20px_rgba(255,116,4,0.4)] hover:shadow-[0_0_30px_rgba(255,116,4,0.6)] border-none">
              Schedule Your Walkthrough
            </Button>
          </RequestDemoButton>

          <Button asChild variant="outline" className="h-9 px-5 rounded-lg border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 text-white transition-all uppercase tracking-widest text-[10px] font-black">
            <Link href="https://portal.visquanta.com">
              <Lock className="w-3 h-3 mr-2 text-[#FF7404]" />
              VQonsole Access
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-white hover:bg-white/10 h-11 w-11 relative z-[1001]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </Button>
      </div>

      {/* Mobile Menu - Rendered via Portal to avoid header clipping */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <Portal>
            <motion.div
              id="mobile-menu"
              ref={mobileMenuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation"
              tabIndex={-1}
              className="fixed inset-0 z-[2000] bg-black/95 backdrop-blur-xl overflow-y-auto lg:hidden flex flex-col focus:outline-none"
              style={{
                WebkitOverflowScrolling: 'touch',
                touchAction: 'pan-y'
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "circOut" }}
              onKeyDown={(e) => {
                if (e.key === 'Tab') {
                  const focusableElements = mobileMenuRef.current?.querySelectorAll(
                    'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select'
                  );
                  if (!focusableElements || focusableElements.length === 0) return;

                  const firstElement = focusableElements[0] as HTMLElement;
                  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                  if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                      lastElement.focus();
                      e.preventDefault();
                    }
                  } else {
                    if (document.activeElement === lastElement) {
                      firstElement.focus();
                      e.preventDefault();
                    }
                  }
                }
              }}
            >
              {/* Ambient Background Effects - MUST be first and isolated */}
              <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#FF7404]/10 rounded-full blur-[100px]" />
              </div>

              {/* Header inside Portal to maintain visual consistency and provide "X" button */}
              <div
                className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-black/80 backdrop-blur-md border-b border-white/5"
                style={{ WebkitTapHighlightColor: 'transparent' }}
              >
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center"
                  style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                >
                  <Image
                    src="/images/visquanta-logo-white.png"
                    alt="VisQuanta"
                    width={150}
                    height={40}
                    className="h-8 w-auto"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 h-11 w-11"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <div
                className="flex flex-col flex-1 px-6 pb-12 relative z-10 mt-8"
                style={{ touchAction: 'pan-y' }}
              >
                <nav className="space-y-6">
                  {navItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      {item.children ? (
                        <div className="space-y-4">
                          <button
                            onClick={() => setMobileActiveMenu(mobileActiveMenu === item.label ? null : item.label)}
                            className="w-full flex items-center justify-between text-2xl font-bold text-white uppercase tracking-wider text-left"
                            style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                          >
                            {item.label}
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${mobileActiveMenu === item.label ? 'rotate-180 text-[#FF7404]' : 'text-white/40'}`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileActiveMenu === item.label ? (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden border-l border-white/10 ml-1"
                              >
                                <div className="py-2 pl-6 space-y-4">
                                  {item.children.map((child, childIdx) => {
                                    const Icon = child.icon;
                                    return (
                                      <Link
                                        key={childIdx}
                                        href={child.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="flex items-center gap-4 group/child py-2 -mx-2 px-2 rounded-lg active:bg-white/5"
                                        style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                                      >
                                        {Icon && (
                                          <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#FF7404]">
                                            <Icon className="w-4 h-4" />
                                          </div>
                                        )}
                                        <div>
                                          <div className="flex items-center gap-2">
                                            <div className="text-base text-zinc-300 group-hover/child:text-white transition-colors font-semibold">
                                              {child.label}
                                            </div>
                                            {child.isCore && (
                                              <span className="text-[8px] font-black px-1.5 py-0.5 rounded bg-[#FF7404]/20 text-[#FF7404] uppercase tracking-widest border border-[#FF7404]/20">Core</span>
                                            )}
                                          </div>
                                          <div className="text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                                            {child.description}
                                          </div>
                                        </div>
                                      </Link>
                                    );
                                  })}
                                </div>
                              </motion.div>
                            ) : null}
                          </AnimatePresence>

                        </div>
                      ) : (
                        <Link
                          href={item.href || '#'}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-2xl font-bold text-white uppercase tracking-wider py-1 -mx-2 px-2 rounded-lg active:bg-white/5"
                          style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-12 flex flex-col gap-4 mb-8"
                >
                  <Link
                    href="https://portal.visquanta.com"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between w-full p-5 rounded-2xl border border-white/10 bg-white/[0.03] active:bg-white/10"
                    style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-[#FF7404]">
                      VQonsole Access
                    </span>
                    <Lock className="w-4 h-4 text-white" />
                  </Link>

                  <RequestDemoButton asChild>
                    <button
                      className="w-full py-5 rounded-2xl bg-[#FF7404] text-black font-black uppercase tracking-widest text-sm active:bg-[#FF8C5A]"
                      style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Schedule Your Walkthrough
                    </button>
                  </RequestDemoButton>
                </motion.div>
              </div>
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </header >
  );
}
