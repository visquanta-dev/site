'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BadgeCheck, Users, Building2, Store, ArrowRight, Sparkles } from 'lucide-react';

const dealerTypes = [
  {
    id: 'independent',
    label: 'Independent Dealers',
    icon: Store,
    tagline: 'Enterprise power. Independent spirit.',
    description: 'You built your dealership from the ground up. AutoMaster Suite gives you the same AI firepower as the big groups—without the overhead or complexity.',
    link: '/dealers/independent',
    stat: '3x',
    statLabel: 'Leads Converted',
    quote: "ROI in 30 days. The difference is night and day.",
    author: "Michael R."
  },
  {
    id: 'pre-owned',
    label: 'Pre-Owned Dealers',
    icon: BadgeCheck,
    tagline: 'Move metal faster.',
    description: 'In pre-owned, speed is everything. Our AI engages buyers instantly, qualifies their needs, and gets them on your lot before the competition knows they exist.',
    link: '/dealers/pre-owned',
    stat: '<60s',
    statLabel: 'Response Time',
    quote: "We've closed deals we thought were long gone.",
    author: "Cody R."
  },
  {
    id: 'franchise',
    label: 'Franchise Dealers',
    icon: Building2,
    tagline: 'OEM-compliant. Performance-optimized.',
    description: 'Meet manufacturer response requirements effortlessly. AutoMaster integrates with certified systems and maintains brand standards across every touchpoint.',
    link: '/dealers/franchise',
    stat: '100%',
    statLabel: 'OEM Compliance',
    quote: "VisQuanta gets to leads before anyone else.",
    author: "Jo D."
  },
  {
    id: 'auto-groups',
    label: 'Auto Groups',
    icon: Users,
    tagline: 'One platform. Every rooftop.',
    description: 'Unified AI across all locations with centralized reporting and per-store customization. Scale your winning playbook instantly across your entire portfolio.',
    link: '/dealers/auto-groups',
    stat: '89%',
    statLabel: 'Process Consistency',
    quote: "Integrated logic for fixed-ops mastery.",
    author: "Dealer Principal"
  },
];

export default function DealerServicesSection() {
  const [activeDealer, setActiveDealer] = useState(dealerTypes[0]);

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-3 h-3" />
            Dealer Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for how <span className="text-[#ff7404]">you</span> sell cars.
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Every dealership operates differently. AutoMaster Suite adapts to your unique workflow—not the other way around.
          </p>
        </motion.div>

        {/* Two Column Layout - Cards Aligned */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">

          {/* Left: Dealer Type Buttons */}
          <div className="lg:w-[45%] space-y-3">
            {dealerTypes.map((dealer, index) => {
              const isActive = activeDealer.id === dealer.id;
              const Icon = dealer.icon;
              return (
                <motion.button
                  key={dealer.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setActiveDealer(dealer)}
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl transition-all duration-500 text-left group relative overflow-hidden
                    ${isActive
                      ? 'bg-[#ff7404]/10 border border-[#ff7404]/30 shadow-[0_0_40px_rgba(255,116,4,0.15)]'
                      : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                    }`}
                >
                  {/* Active Indicator Bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-[#ff7404] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300
                    ${isActive
                      ? 'bg-[#ff7404] text-black shadow-lg'
                      : 'bg-white/5 text-white/60 group-hover:text-white/80 group-hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className={`font-bold text-lg mb-0.5 transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'}`}>
                      {dealer.label}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${isActive ? 'text-white/80' : 'text-white/50 group-hover:text-white/70'}`}>
                      {dealer.tagline}
                    </div>
                  </div>

                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${isActive ? 'text-[#ff7404] opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 text-white/30'}`} />
                </motion.button>
              );
            })}
          </div>

          {/* Right: Content Card - Same height as buttons */}
          <div className="lg:w-[55%]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              {/* Outer Glow */}
              <div className="absolute -inset-1 bg-[#ff7404]/20 rounded-3xl blur-xl transition-all duration-500" />

              <div className="relative bg-gradient-to-br from-[#111111] to-[#080808] rounded-3xl p-10 lg:p-12 border border-white/10 overflow-hidden h-full flex flex-col">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#ff7404]/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#ff7404]/30 rounded-br-3xl" />

                {/* Ambient Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff7404]/10 blur-[100px] pointer-events-none transition-all duration-700" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeDealer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-8">
                        <div className="w-10 h-10 rounded-lg bg-[#ff7404] flex items-center justify-center">
                          <activeDealer.icon className="w-5 h-5 text-black" />
                        </div>
                        <span className="text-sm font-bold uppercase tracking-widest text-white/60">
                          {activeDealer.label}
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 leading-tight tracking-tight">
                        {activeDealer.description}
                      </h3>

                      {activeDealer.quote && (
                        <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 mb-8">
                          <p className="text-sm italic text-white/80 mb-2">"{activeDealer.quote}"</p>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#ff7404]">— {activeDealer.author}</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 mt-auto">
                      <div>
                        <div className="text-5xl font-bold text-[#ff7404] mb-2 tracking-tighter">
                          {activeDealer.stat}
                        </div>
                        <div className="text-xs font-bold text-white/60 uppercase tracking-widest">
                          {activeDealer.statLabel}
                        </div>
                      </div>
                      <div className="flex items-end justify-end">
                        <Link
                          href={activeDealer.link}
                          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#ff7404] text-black font-bold text-sm hover:bg-white transition-all duration-300 shadow-lg hover:shadow-[#ff7404]/25 group/link"
                        >
                          Explore Solutions
                          <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
