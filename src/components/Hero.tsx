'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { RequestDemoButton } from './CalendlyModal';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Zap,
  Wrench,
  MessageSquare,
  Star,
  ArrowRight,
  RefreshCcw,
  PlayCircle
} from 'lucide-react';
import HeroDashboardPreview from './mobile/HeroDashboardPreview';
import MobileHeroTrust from './mobile/MobileHeroTrust';

const cardData = [
  {
    id: 'widget',
    title: 'Website Widget',
    label: 'Conversion',
    icon: MessageSquare,
    description: 'Convert website visitors into qualified buyers with real-time engagement.',
    color: '#ff7404',
    initialX: -280,
    initialY: -40,
    rotate: -4,
    delay: 0,
    image: '/platform/widget-sms-final.jpg',
    link: '/speed-to-lead'
  },
  {
    id: 'reputation',
    title: 'Reputation Management',
    label: 'Brand Health',
    icon: Star,
    description: 'Monitor and respond to reviews across all platforms instantly.',
    color: '#ff7404',
    initialX: -140,
    initialY: 40,
    rotate: -2,
    delay: 0.1,
    image: '/platform/reputation-icons.png',
    link: '/reputation-management'
  },
  {
    id: 'service',
    title: 'Service AI',
    label: 'Fixed Ops',
    icon: Wrench,
    description: 'Handle service appointments and inquiries 24/7 with specialized Voice AI.',
    color: '#ff7404',
    initialX: 0,
    initialY: 0,
    rotate: 0,
    delay: 0.2,
    image: '/platform/service-ai-customer.jpg',
    link: '/service-drive'
  },
  {
    id: 'speed',
    title: 'Speed to Lead',
    label: 'Inbound Response',
    icon: Zap,
    description: 'Instant, human-quality engagement for every inbound lead, 24/7/365.',
    color: '#ff7404',
    initialX: 140,
    initialY: 40,
    rotate: 2,
    delay: 0.3,
    image: '/platform/speed-to-lead.jpg',
    link: '/speed-to-lead'
  },
  {
    id: 'reactivation',
    title: 'Lead Reactivation',
    label: 'Revenue Recovery',
    icon: RefreshCcw,
    description: 'Conversational AI digs into your CRM to reactivate stalled prospects.',
    color: '#ff7404',
    initialX: 280,
    initialY: -40,
    rotate: 4,
    delay: 0.4,
    image: '/platform/lead-reactivation.png',
    link: '/lead-reactivation'
  }
];

/* ==========================================================================
   MOBILE CARD CAROUSEL - Premium horizontal scroll
   ========================================================================== */
function MobileCardCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = 280 + 16; // card width + gap
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(newIndex, 0), cardData.length - 1));
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCard = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 280 + 16;
    container.scrollTo({ left: cardWidth * index, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4 scrollbar-hide"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {cardData.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="flex-shrink-0 w-[280px] snap-center"
            >
              <Link href={card.link} className="block">
                <div className="relative bg-[#0a0a0a] border border-white/[0.08] rounded-2xl overflow-hidden h-[360px] flex flex-col group active:scale-[0.98] transition-transform duration-200">
                  {/* Top shine */}
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Image area */}
                  <div className="relative h-36 w-full overflow-hidden bg-black/50">
                    {card.image ? (
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover opacity-80"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Icon className="w-12 h-12 text-white/20" />
                      </div>
                    )}
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />

                    {/* Label badge */}
                    <div className="absolute bottom-3 left-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff7404]">
                        {card.label}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 flex flex-col">
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed flex-1">
                      {card.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/[0.06]">
                      <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-[#ff7404] transition-colors">
                        Explore
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.08] flex items-center justify-center group-hover:bg-[#ff7404]/10 group-hover:border-[#ff7404]/30 transition-all">
                        <ArrowRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#ff7404] transition-colors" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#ff7404]/30 to-transparent" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-2">
        {cardData.map((card, index) => (
          <button
            key={card.id}
            onClick={() => scrollToCard(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === index
              ? 'bg-[#ff7404] w-6'
              : 'bg-white/20 w-1.5 hover:bg-white/40'
              }`}
            aria-label={`Go to ${card.title}`}
          />
        ))}
      </div>
    </div>
  );
}

/* ==========================================================================
   MAIN HERO COMPONENT
   ========================================================================== */
export default function Hero() {

  return (
    <section className="relative min-h-screen flex flex-col pt-20 bg-[#050505] overflow-hidden">
      {/* Layer 1: Solid base background color */}
      <div className="absolute inset-0 bg-[#050505]" />

      {/* Layer 2: CSS gradient applied behind the wireframe */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#080808] to-[#030303]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_50%,rgba(20,20,25,1),transparent)]" />

      {/* Layer 3: Wireframe image - scaled up to fill space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/wireframes/6.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-50 scale-125 origin-center translate-x-[10%]"
          style={{ objectPosition: '60% center' }}
        />
      </div>

      {/* Layer 4: Full page dark overlay at 40% */}
      <div className="absolute inset-0 bg-[#050505]/40 pointer-events-none" />

      {/* Layer 5: Gradient overlays for text readability (left side darker) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/50 via-[#050505]/30 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60 pointer-events-none" />

      {/* Background - Technical Grid & Ambient Light */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-15 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#ff74041a,transparent)] pointer-events-none" />

      <div className="container-wide w-full flex-1 flex flex-col justify-center relative z-10 pt-8 pb-12 lg:pt-12 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-5 sm:gap-6 lg:gap-8 text-left z-20">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="h-px w-6 sm:w-8 bg-primary/60" />
              <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
                VISQUANTA PRESENTS: THE AUTOMASTER SUITE
              </span>
            </motion.div>

            {/* Headline with Reveal Animation */}
            <motion.h1
              className="text-4xl leading-[1.1] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white tracking-tighter"
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.02
                  }
                }
              }}
            >
              <span className="inline-block">
                {"AI for Car Dealerships".split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em]">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 40 },
                          visible: { opacity: 1, y: 0, rotateX: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                        className="inline-block whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7404] to-[#ff9040] inline-block">
                {"That Drives Revenue".split(" ").map((word, wi) => (
                  <span key={wi} className="inline-block whitespace-nowrap mr-[0.2em]">
                    {word.split("").map((char, ci) => (
                      <motion.span
                        key={ci}
                        variants={{
                          hidden: { opacity: 0, y: 20, rotateX: 40 },
                          visible: { opacity: 1, y: 0, rotateX: 0 }
                        }}
                        transition={{ duration: 0.5, ease: [0.215, 0.61, 0.355, 1] }}
                        className="inline-block whitespace-pre"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </motion.h1>

            {/* MOBILE DASHBOARD PREVIEW - Right after headline */}
            <div className="lg:hidden w-full mt-6">
              <HeroDashboardPreview />
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg md:text-xl lg:text-2xl text-muted-foreground/80 max-w-2xl leading-relaxed font-medium mt-4 lg:mt-0"
            >
              VisQuanta <strong className="text-white">automates lead reactivation</strong>, responds to new leads in <strong className="text-white">under 60 seconds</strong>, protects your reputation, & ensures your service department <strong className="text-white">never misses a call</strong>.
            </motion.p>


            {/* CTA Group */}
            <div className="flex flex-col gap-4 mt-2 sm:mt-4 lg:mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <RequestDemoButton asChild>
                  <Button
                    className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest bg-[#FF7404] hover:bg-[#ff8a2b] text-black transition-all shadow-[0_20px_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_80px_-10px_rgba(255,116,4,0.6)] animate-pulse-subtle"
                  >
                    Schedule Your Walkthrough
                  </Button>
                </RequestDemoButton>

                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest border-white/50 hover:bg-white/5 bg-transparent text-white hover:text-white group"
                >
                  <Link href="#see-it-in-action">
                    <span>See How It Works</span>
                  </Link>
                </Button>
              </motion.div>

              {/* CRO Microcopy */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[10px] sm:text-xs text-white/40 uppercase tracking-[0.15em] font-bold"
              >
                30-min 1:1 • Get an exact revenue-lift projection for your dealership
              </motion.p>
            </div>

            {/* Micro-Trust Signal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 flex items-center gap-4"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-4 h-4 text-[#FF7404] fill-[#FF7404]" />
                ))}
              </div>
              <span className="text-sm text-white/60 font-medium">Trusted by <span className="text-white">500+</span> Dealerships</span>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:mt-6"
            >
              {/* Desktop Stats (Hidden on Mobile) */}
              <div className="hidden lg:block pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-x-8 sm:gap-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="font-medium">System Online</span>
                  </div>
                  <div className="flex items-center gap-4 sm:gap-8">
                    <div>
                      <span className="font-bold text-white">30%</span>
                      <span className="text-muted-foreground/60 ml-1.5">avg. revenue increase</span>
                    </div>
                    <div>
                      <span className="font-bold text-white">24/7</span>
                      <span className="text-muted-foreground/60 ml-1.5">automated coverage</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Trust Marquee (Removed to avoid duplication with main SocialProofBar) */}
            </motion.div>
          </div>

          {/* ================================================================
              RIGHT SIDE - CARDS
              Mobile: Dashboard preview is now in the left column after headline
              Desktop: 3D interactive stack (UNCHANGED)
              ================================================================ */}


          {/* Right side spacer for layout balance on desktop */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>
    </section >
  );
}
