'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Calendar, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] bg-[#ff7404]/10 rounded-full blur-[200px] pointer-events-none" />

      {/* Gradient Line Top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404]/50 to-transparent" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/30 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-8">
            <Sparkles className="w-3 h-3" />
            Start Your Transformation
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]">
            Ready to <span className="text-[#ff7404]">dominate</span>
            <br />your market?
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join the elite dealerships using AutoMaster to automate operations and maximize revenue. Your competition is already here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/book-demo"
              className="group relative px-10 py-5 rounded-full font-bold text-lg overflow-hidden"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-[#ff7404] rounded-full" />
              <div className="absolute inset-0 bg-[#ff7404] rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />

              <span className="relative z-10 flex items-center gap-3 text-black">
                <Calendar className="w-5 h-5" />
                Book Your Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            <Link
              href="/pricing"
              className="px-10 py-5 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 flex items-center gap-3"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-white/30">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ff7404]" />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ff7404]" />
              <span>14-Day Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#ff7404]" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </motion.div>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#ff7404]/30 to-transparent" />
      </div>
    </section>
  );
}
