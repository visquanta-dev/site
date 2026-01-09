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
  RefreshCcw
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
    link: '/lead-loss-mitigation'
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 bg-background overflow-hidden">
      {/* Background - Technical Grid & Ambient Light */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#ff74041a,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,116,4,0.05)_0%,rgba(5,5,5,0)_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] pointer-events-none" />

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
                AI-Powered Dealership Platform
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
                {"The Revenue Operating".split(" ").map((word, wi) => (
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
                {"System for Dealers".split(" ").map((word, wi) => (
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
              AutoMaster Suite is a car dealership AI platform designed to improve sales, service, and follow-up across your dealership.
            </motion.p>


            {/* CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 lg:mt-6"
            >
              <RequestDemoButton asChild>
                <Button
                  className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)] hover:shadow-[0_0_50px_-10px_rgba(255,116,4,0.7)] text-black bg-primary hover:bg-white"
                >
                  Request a Demo
                </Button>
              </RequestDemoButton>

              <Button
                asChild
                variant="outline"
                className="w-full sm:w-auto h-auto px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm uppercase tracking-widest border-white/10 hover:bg-white/5 bg-transparent text-white hover:text-white"
              >
                <Link href="#how-it-works">
                  See How It Works
                </Link>
              </Button>
            </motion.div>

            {/* Trust Signal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className=" lg:mt-10"
            >
              {/* Desktop Stats (Hidden on Mobile) */}
              <div className="hidden lg:block pt-10 border-t border-border">
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


          {/* DESKTOP 3D CARD STACK - Only visible at lg and above */}
          {/* ⚠️ THIS ENTIRE BLOCK IS UNCHANGED FROM ORIGINAL ⚠️ */}
          <div className="hidden lg:flex lg:col-span-6 relative h-[600px] items-center justify-center -mr-20 lg:-mr-32 perspective-[2500px] pointer-events-auto z-10 scale-75 lg:scale-90 origin-center lg:origin-right">

            {/* Ambient Glow backing the cards */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff7404]/10 rounded-full blur-[120px] pointer-events-none" />

            {cardData.map((card, i) => {
              const isHovered = hoveredId === card.id;
              const isAnyHovered = hoveredId !== null;

              return (
                <motion.div
                  key={card.id}
                  onMouseEnter={() => setHoveredId(card.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  initial={{ opacity: 0, y: 80, rotateX: 25 }}
                  whileInView={{
                    opacity: 1,
                    rotateX: 0,
                    x: card.initialX,
                    y: isHovered ? card.initialY - 30 : card.initialY,
                    rotateZ: isHovered ? 0 : card.rotate,
                    z: isHovered ? 400 : (isAnyHovered ? -150 : 0),
                    scale: isHovered ? 1.08 : 1
                  }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 90,
                    damping: 22,
                    delay: 0.2 + (card.delay * 1.5)
                  }}
                  className={`absolute w-[340px] rounded-[3rem] cursor-pointer origin-center group
                    ${isHovered ? 'z-50' : 'z-10'}
                  `}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div className={`relative h-[460px] rounded-[3rem] p-px overflow-hidden transition-all duration-700
                    ${isHovered ? 'bg-gradient-to-br from-[#ff7404] to-[#ff7404]/20' : 'bg-white/10'}
                  `}>
                    {/* Inner Content Area */}
                    <div className="relative h-full w-full bg-[#0d0d0d] rounded-[2.95rem] p-8 flex flex-col overflow-hidden">

                      {/* Glossy Top Shimmer */}
                      <div className="absolute top-0 left-0 right-0 h-44 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

                      {/* THE VISUAL SURFACE */}
                      <div className="relative w-full h-48 rounded-[2rem] bg-black/40 border border-white/5 mb-8 flex items-center justify-center overflow-hidden">
                        {/* Abstract Data Texture or Custom Image */}
                        {card.image ? (
                          <img
                            src={card.image}
                            alt={card.title}
                            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500
                              ${isHovered ? 'opacity-100 mix-blend-normal saturate-100' : 'opacity-100 mix-blend-normal saturate-100'}
                              contrast-125
                            `}
                          />
                        ) : (
                          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                        )}

                        <div className={`absolute inset-0 bg-gradient-to-br from-[#ff7404]/10 via-transparent to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-20'}`} />

                        {!card.image && (
                          <>
                            {/* Inner Glow Center */}
                            <div className={`absolute w-32 h-32 bg-[#ff7404]/20 rounded-full blur-3xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                            <motion.div
                              animate={isHovered ? { scale: 1.15, rotate: [0, 8, -8, 0] } : {}}
                              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                              className="relative z-10"
                            >
                              <card.icon className={`w-20 h-20 transition-all duration-500 ${isHovered ? 'text-[#ff7404] drop-shadow-[0_0_20px_rgba(255,116,4,0.4)]' : 'text-white/20'}`} />
                            </motion.div>
                          </>
                        )}

                        {/* Performance Line Animation */}
                        <motion.div
                          animate={{ x: [-150, 350] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                          className="absolute bottom-12 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent"
                        />
                      </div>

                      {/* Text Group */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className={`text-[10px] font-black uppercase tracking-[0.25em] transition-colors duration-500 ${isHovered ? 'text-[#ff7404]' : 'text-white/30'}`}>
                            {card.label}
                          </span>
                          {isHovered && (
                            <motion.span
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-[10px] text-[#ff7404] font-black uppercase tracking-widest flex items-center gap-1"
                            >
                              Deploying <Zap className="w-3 h-3 fill-[#ff7404]" />
                            </motion.span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                          {card.title}
                        </h3>
                        <p className="text-white/40 text-[13px] leading-relaxed font-medium">
                          {card.description}
                        </p>
                      </div>

                      {/* PRODUCT BUTTONS (Card-specific) */}
                      <div className="mt-auto flex items-center gap-2">
                        <Link
                          href={card.link || '#'}
                          className={`flex-1 flex items-center justify-center text-center py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300
                                  ${isHovered ? 'bg-[#ff7404] text-white shadow-[0_10px_20px_rgba(255,116,4,0.3)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}
                                `}
                        >
                          Explore Module
                        </Link>
                        <Link
                          href={card.link || '#'}
                          className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                          aria-label="Go to module"
                        >
                          <ArrowRight className="w-4 h-4 text-white/40" />
                        </Link>
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          {/* ⚠️ END DESKTOP 3D CARD STACK ⚠️ */}

        </div>
      </div>
    </section>
  );
}
