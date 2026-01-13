'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { BadgeCheck, Users, Building2, Store, ArrowRight, Sparkles, Calculator, TrendingUp } from 'lucide-react';
import ROICalculatorModal from './ROICalculatorModal';

const dealerTypes = [
  {
    id: 'independent',
    label: 'Independent Dealers',
    icon: Store,
    tagline: 'Enterprise power. Independent spirit.',
    description: 'You built your dealership from the ground up. AutoMaster Suite gives you the same AI firepower as the big groups—without the overhead or complexity.',
    link: '/dealers/independent',
    ctaLabel: 'Scale Your Operation',
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
    ctaLabel: 'Move Metal Faster',
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
    ctaLabel: 'Dominate Your Market',
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
    ctaLabel: 'Transform Your Portfolio',
    stat: '89%',
    statLabel: 'Process Consistency',
    quote: "Integrated logic for fixed-ops mastery.",
    author: "Dealer Principal"
  },
];

export default function DealerServicesSection() {
  const [activeDealer, setActiveDealer] = useState(dealerTypes[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [monthlyLeads, setMonthlyLeads] = useState(120);

  // Quick Math: Assumes $2400 gross
  const potentialLostRevenue = (monthlyLeads * 2400).toLocaleString();

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
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for how <span className="text-[#ff7404]">your dealership</span> sells cars.
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
                          {activeDealer.ctaLabel}
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

        {/* Integrated ROI / Cost of Waiting Section */}
        <div className="mt-24 pt-24 border-t border-white/10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Calculator Card - Premium Design (order-2 on mobile, order-1 on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              {/* Outer Glow Ring */}
              <div className="absolute -inset-[1px] bg-gradient-to-br from-[#ff7404]/40 via-[#ff7404]/10 to-transparent rounded-[2rem] blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-[#0f0f0f] via-[#0a0a0a] to-[#050505] border border-white/10 rounded-[2rem] p-10 overflow-hidden group">

                {/* Animated Corner Accents */}
                <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-[#ff7404]/30 rounded-tl-[2rem]" />
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#ff7404]/30 rounded-br-[2rem]" />

                {/* Premium Ambient Glows */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff7404]/8 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#ff7404]/15 transition-all duration-700" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none" />

                {/* Subtle Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-50" />

                <div className="relative z-10 space-y-8">
                  {/* Header with Badge */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-[#ff7404]/20 rounded-2xl blur-lg" />
                        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff7404] to-[#ff8a2b] flex items-center justify-center shadow-[0_0_30px_rgba(255,116,4,0.3)]">
                          <Calculator className="w-7 h-7 text-black" />
                        </div>
                      </div>
                      <div>
                        <div className="text-white font-bold text-xl tracking-tight">Untapped Sales Opportunity</div>
                        <div className="text-white/50 text-sm">Estimate the revenue hidden in your CRM</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-400 uppercase tracking-wider">Live Estimate</span>
                    </div>

                  </div>

                  {/* Slider Section */}
                  <div className="space-y-6">
                    <div className="space-y-5">
                      <div className="flex justify-between items-end">
                        <label htmlFor="dealer-leads-slider" className="text-[11px] font-bold text-white/50 uppercase tracking-[0.15em]">Unworked & Inactive Leads / Month</label>
                        <div className="text-3xl font-mono font-black text-white tabular-nums">{monthlyLeads}</div>
                      </div>

                      {/* Custom Premium Slider Track */}
                      <div className="relative py-2">
                        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-3 bg-white/5 rounded-full border border-white/5" />
                        <div
                          className="absolute top-1/2 -translate-y-1/2 left-0 h-3 bg-gradient-to-r from-[#ff7404] to-[#ff9040] rounded-full shadow-[0_0_20px_rgba(255,116,4,0.4)]"
                          style={{ width: `${((monthlyLeads - 10) / 490) * 100}%` }}
                        />
                        <input
                          id="dealer-leads-slider"
                          type="range"
                          min="10"
                          max="500"
                          step="10"
                          value={monthlyLeads}
                          onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                          className="relative w-full h-3 appearance-none cursor-pointer bg-transparent z-10 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-[0_0_15px_rgba(255,116,4,0.6)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#ff7404] [&::-webkit-slider-thumb]:cursor-grab [&::-webkit-slider-thumb]:active:cursor-grabbing [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                        />
                      </div>

                      <div className="text-white/30 text-xs flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-white/30" />
                        Includes new leads not reached quickly and older CRM leads marked lost or inactive
                      </div>
                    </div>

                    {/* Revenue Display - Premium Card */}
                    <div className="relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#ff7404]/10 via-transparent to-transparent rounded-2xl" />
                      <div className="relative p-8 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-2 h-2 rounded-full bg-[#ff7404] shadow-[0_0_8px_rgba(255,116,4,0.8)]" />
                          <div className="text-[10px] text-[#ff7404] font-black uppercase tracking-[0.2em]">Additional Monthly Revenue Available</div>
                        </div>
                        <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-4">
                          <span className="text-white/40 text-3xl lg:text-4xl">$</span>{potentialLostRevenue}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
                          <span className="text-white/30">*Based on avg dealership gross profit of $2,400/unit</span>
                          <span className="hidden sm:block text-white/10">|</span>
                          <span className="text-[#ff7404]/80 font-semibold">No new leads. No extra ad spend.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button - Premium */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-5 rounded-xl bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 text-white font-bold hover:border-[#ff7404]/30 hover:shadow-[0_0_30px_rgba(255,116,4,0.1)] transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff7404]/0 via-[#ff7404]/5 to-[#ff7404]/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative">See Full Breakdown</span>
                    <ArrowRight className="relative w-4 h-4 text-[#ff7404] group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Urgency Copy (order-1 on mobile, order-2 on desktop) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
                <TrendingUp className="w-3 h-3" />
                Existing Lead Opportunity
              </div>

              <h2 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight">
                See how much more your dealership <span className="text-[#ff7404]">could be selling.</span>
              </h2>

              <div className="space-y-6 text-white/70 text-lg leading-relaxed">
                <p>
                  While you're evaluating options, your competitors are closing the deals you should be winning.
                </p>
                <p>
                  The math is simple: <strong className="text-white">faster response and consistent follow-up turn more leads into sold cars</strong>.
                </p>
              </div>

              <div className="mt-10 hidden lg:block">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#ff7404] hover:bg-[#ff8a2b] text-black font-bold text-lg rounded-xl shadow-[0_0_40px_rgba(255,116,4,0.4)] hover:shadow-[0_0_50px_rgba(255,116,4,0.6)] transition-all duration-300 group"
                >
                  How Much Money Is in Your CRM?
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

            </motion.div>
          </div>
        </div>


        <ROICalculatorModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
}
