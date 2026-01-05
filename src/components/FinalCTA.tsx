'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { RequestDemoButton } from './CalendlyModal';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#ff7404]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Dynamic Radar Pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#ff7404]/10 rounded-full pointer-events-none animate-[ping_10s_linear_infinite]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#ff7404]/5 rounded-full pointer-events-none animate-[ping_15s_linear_infinite]" />

      {/* Gradient Line Top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-white/50 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Sparkles className="w-3 h-3 text-[#ff7404]" />
            Enterprise Deployment Ready
          </div>

          {/* Headline */}
          <h2 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            <span className="text-white/40">READY TO</span><br />
            DOMINATE <span className="text-[#ff7404]">YOUR MARKET?</span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
            Join the elite dealerships using AutoMaster to automate operations and maximize revenue. Your competition is already here.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center mb-20">
            <RequestDemoButton
              className="group relative px-12 py-6 rounded-full bg-white transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 rounded-full bg-[#ff7404] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative text-black font-black text-sm uppercase tracking-[0.2em] flex items-center gap-3">
                Request A Demo <Zap className="w-4 h-4 fill-black" />
              </span>
            </RequestDemoButton>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            {[
              { label: "DMS SECURE SYNC", desc: "Automated real-time data integration" },
              { label: "CUSTOM DEPLOYMENT", desc: "Tailored to your store's specific workflow" },
              { label: "PERFORMANCE FIRST", desc: "Built for high-volume automotive results" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-[#ff7404]/30 transition-all duration-500 group-hover:bg-[#ff7404]/5">
                  <CheckCircle className="w-5 h-5 text-[#ff7404]/50 group-hover:text-[#ff7404]" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">
                    {item.label}
                  </span>
                  <span className="text-[10px] font-medium text-white/30 uppercase tracking-widest">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#ff7404]/40 to-transparent" />
    </section>
  );
}
