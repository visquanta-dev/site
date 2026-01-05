'use client';

import { motion } from 'framer-motion';
import { Share2, Database, MessageSquare, Zap, Globe, ArrowRight } from 'lucide-react';

const integrationCategories = [
  {
    title: "DMS Integrations",
    icon: Database,
    description: "Deep, bi-directional sync with all major Dealer Management Systems.",
    logos: [
      { name: "CDK Global", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683035c47ec0959e855dc829_CDK_Global%20white.avif" },
      { name: "Dealertrack", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303785972641d9b50fab37_dealertrack%20white.avif" },
      { name: "Titan DMS", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303b117151572b502b806b_titan%20DMS%20(1)%20(1).webp" },
      { name: "Frazer", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303167b87c5f19ec16c69f_frazer-white%20(2).webp" },
    ]
  },
  {
    title: "CRM Platforms",
    icon: Share2,
    description: "Real-time lead push and activity logging in your existing CRM workflow.",
    logos: [
      { name: "VINSOLUTIONS", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683031f386647aef7335d0ba_vinsolutions%20white%20(1).png" },
      { name: "DealerSocket", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683035efe444102587fe1083_dealersocket%20white.avif" },
      { name: "eLead", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683036fd7f6a3d1d58acd0d7_elead%20(1).png" },
      { name: "DriveCentric", url: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6830b1419b23bac70ff2bfe5_DriveCentric_white.svg" },
    ]
  }
];

const allLogos = [
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683035c47ec0959e855dc829_CDK_Global%20white.avif",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303785972641d9b50fab37_dealertrack%20white.avif",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303b117151572b502b806b_titan%20DMS%20(1)%20(1).webp",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68303167b87c5f19ec16c69f_frazer-white%20(2).webp",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683031f386647aef7335d0ba_vinsolutions%20white%20(1).png",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683035efe444102587fe1083_dealersocket%20white.avif",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/683036fd7f6a3d1d58acd0d7_elead%20(1).png",
  "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6830b1419b23bac70ff2bfe5_DriveCentric_white.svg",
];

const duplicatedLogos = [...allLogos, ...allLogos, ...allLogos];

export default function IntegrationsSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-[#ff7404]/30 shadow-[0_0_15px_-3px_rgba(255,116,4,0.3)] backdrop-blur-md text-xs font-bold uppercase tracking-widest mb-8">
              <Zap className="w-3 h-3 text-[#ff7404] fill-[#ff7404]" />
              <span className="bg-gradient-to-r from-[#ff7404] to-[#ff9b50] bg-clip-text text-transparent">Ecosystem</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Connects to <span className="text-[#ff7404]">Everything.</span>
            </h2>
            <p className="text-white/60 text-xl leading-relaxed">
              AutoMaster Suite isn't another silo. We integrate with 50+ platforms out of the box to unify your DMS, CRM, and lead sources into one intelligence layer.
            </p>
          </motion.div>
        </div>

        {/* Feature Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-24">
          {integrationCategories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative bg-gradient-to-br from-[#0f0f0f] to-[#080808] border border-white/[0.08] rounded-3xl p-8 lg:p-12 overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404] mb-8 group-hover:bg-[#ff7404] group-hover:text-black transition-all duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{cat.title}</h3>
                  <p className="text-white/50 text-lg leading-relaxed mb-10">{cat.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {cat.logos.map((logo, j) => (
                      <div key={j} className="h-16 rounded-xl bg-white/[0.02] border border-white/[0.05] p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 group/logo">
                        <img src={logo.url} alt={logo.name} className="max-w-full max-h-full object-contain opacity-40 group-hover/logo:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background glow for cards */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7404]/5 blur-[80px] -mr-32 -mt-32 pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative pt-10 border-t border-white/[0.08]">
          <div className="flex items-center justify-between mb-10">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/30">Certified Partners</h4>
            <div className="flex items-center gap-2 text-[#ff7404] text-sm font-bold">
              <Globe className="w-4 h-4" />
              50+ Integrations
            </div>
          </div>

          <div className="relative w-full mask-linear-fade overflow-hidden py-4">
            <div className="flex gap-12 animate-infinite-scroll w-max hover:[animation-play-state:paused] cursor-pointer">
              {duplicatedLogos.map((logo, i) => (
                <div key={i} className="w-40 h-16 flex items-center justify-center">
                  <img src={logo} alt="Partner Logo" className="max-w-[120px] max-h-full object-contain grayscale opacity-30 hover:opacity-100 hover:grayscale-0 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center gap-3 text-white/50 hover:text-[#ff7404] font-bold transition-all duration-300 group">
            Don't see your system?
            <span className="text-[#ff7404] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              Check compatibility <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </motion.div>

      </div>

      <style jsx>{`
        .animate-infinite-scroll {
          animation: scroll 60s linear infinite;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .mask-linear-fade {
          mask-image: linear-gradient(90deg, transparent, white 15%, white 85%, transparent);
        }
      `}</style>
    </section>
  );
}
