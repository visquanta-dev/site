'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { RequestDemoButton } from './CalendlyModal';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Zap,
  Wrench,
  MessageSquare,
  Star, // Added
  ArrowRight,
  RefreshCcw
} from 'lucide-react';

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
    image: '/platform/widget-sms-final.jpg'
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
    image: '/platform/reputation-icons.png'
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
    image: '/platform/service-ai-customer.jpg'
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
    image: '/platform/speed-to-lead.jpg'
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
    image: '/platform/lead-reactivation.png'
  }
];

export default function Hero() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative min-h-screen flex flex-col pt-20 bg-background overflow-hidden">
      {/* Background - Technical Grid & Ambient Light */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,#ff74041a,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,116,4,0.05)_0%,rgba(5,5,5,0)_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] pointer-events-none" />

      <div className="container-wide w-full flex-1 flex flex-col justify-center relative z-10 pt-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-left z-20">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="h-px w-8 bg-primary/60" />
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                AI-Powered Dealership Platform
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] tracking-tighter animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              The Revenue Operating <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7404] to-[#ff9040]">System for Dealers</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-medium">
              AutoMaster Suite is a car dealership AI platform designed to improve sales, service, and follow-up across your dealership.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap items-center gap-4 mt-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <RequestDemoButton
                className="bg-primary text-black hover:bg-white px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_40px_-10px_rgba(255,116,4,0.5)] hover:shadow-[0_0_50px_-10px_rgba(255,116,4,0.7)]"
              >
                Request a Demo
              </RequestDemoButton>
              <Link
                href="#how-it-works"
                className="px-10 py-5 rounded-xl font-black text-sm uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust Signal */}
            <div className="mt-10 pt-10 border-t border-border flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-medium">System Online</span>
              </div>
              <div>
                <span className="font-medium text-foreground">30%</span> avg. revenue increase
              </div>
              <div>
                <span className="font-medium text-foreground">24/7</span> automated coverage
              </div>
            </div>
          </div>

          {/* Right Visual - Interactive Cards (Layer 1) */}
          <div className="lg:col-span-6 relative h-[600px] flex items-center justify-center -mr-20 lg:-mr-32 perspective-[2500px] pointer-events-auto z-10 scale-75 lg:scale-90 origin-center lg:origin-right">

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
                    delay: 0.2 + (card.delay * 1.5) // Added base delay to sync with text
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
                        <button className={`flex-1 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300
                                 ${isHovered ? 'bg-[#ff7404] text-white shadow-[0_10px_20px_rgba(255,116,4,0.3)]' : 'bg-white/5 text-white/40 hover:bg-white/10'}
                               `}>
                          Find Out More
                        </button>
                        <button className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label="Go to next">
                          <ArrowRight className="w-4 h-4 text-white/40" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
