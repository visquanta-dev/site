'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  RefreshCw, 
  Zap, 
  Star, 
  Wrench, 
  Send, 
  HeartHandshake,
  ArrowRight,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const services = [
  {
    icon: RefreshCw,
    title: 'Lead Reactivation',
    description: "Turn your 'dead' CRM leads into fresh appointments with AI-driven database reactivation.",
    impact: '8-12% Recovery Rate',
    href: '/lead-reactivation',
    gradient: 'from-orange-500/20 to-red-500/10'
  },
  {
    icon: Zap,
    title: 'Speed to Lead',
    description: 'Engage every website inquiry in under 90 seconds. 24/7/365 coverage for your digital lot.',
    impact: '<90s Response Time',
    href: '/speed-to-lead',
    gradient: 'from-yellow-500/20 to-orange-500/10'
  },
  {
    icon: Star,
    title: 'Reputation Management',
    description: 'Automate Google reviews and flag negative sentiment before it hits factory CSI surveys.',
    impact: '4.8+ Avg Rating',
    href: '/reputation-management',
    gradient: 'from-amber-500/20 to-yellow-500/10'
  },
  {
    icon: Wrench,
    title: 'Service Drive Pro',
    description: 'Automated service desk booking and inbound call routing for fixed-ops mastery.',
    impact: '+15% RO Volume',
    href: '/service-drive',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    badge: 'New'
  },
  {
    icon: Send,
    title: 'Custom Campaigns',
    description: 'Tailored SMS and email blitzes for seasonal sales and dealership events.',
    impact: '20x+ Typical ROI',
    href: '/custom-campaigns',
    gradient: 'from-purple-500/20 to-pink-500/10'
  },
  {
    icon: HeartHandshake,
    title: 'Dealer Success',
    description: 'Dedicated performance managers ensuring every suite tool delivers maximum ROI.',
    impact: 'White-Glove Support',
    href: '/dealer-success',
    gradient: 'from-blue-500/20 to-indigo-500/10'
  }
];

const differentiators = [
  {
    icon: Clock,
    title: 'Always-On Coverage',
    description: 'Your dealership never sleeps. AI handles nights, weekends, and holidays—capturing every opportunity.'
  },
  {
    icon: Target,
    title: 'Dealership-First Design',
    description: 'Built by automotive professionals, not generic SaaS. Every feature solves real dealer pain points.'
  },
  {
    icon: TrendingUp,
    title: 'Measurable ROI',
    description: 'Track every RO, appointment, and sale directly to our conversations. No vanity metrics.'
  }
];

export default function DealerServicesPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.p 
              variants={fadeInUp}
              className="text-orange-500 text-sm font-medium tracking-widest uppercase mb-4"
            >
              Dealer Services
            </motion.p>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              AI Services Built
              <br />
              <span className="text-orange-500">for Dealerships</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
            >
              From lead recovery to reputation protection, our suite of AI-powered 
              services transforms how your dealership engages customers and drives revenue.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/auto-master-suite"
                className="inline-flex items-center justify-center gap-2 border border-neutral-700 hover:border-neutral-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                View Full Suite
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl text-neutral-300 italic mb-6"
          >
            "VisQuanta's services paid for themselves in the first month. Our response 
            time went from hours to seconds, and we're booking appointments we never 
            would have caught before."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-white font-semibold">Marcus Chen</p>
            <p className="text-orange-500 text-sm">General Manager, Premier Honda</p>
          </motion.div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-16 px-6 border-y border-neutral-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {differentiators.map((item, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-orange-500">Services</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Each service is engineered to solve specific dealership challenges, 
              with measurable impact and seamless CRM/DMS integration.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <Link href={service.href} className="block group">
                  <div className={`relative h-full p-6 rounded-2xl bg-gradient-to-br ${service.gradient} border border-neutral-800 hover:border-orange-500/50 transition-all duration-300`}>
                    {service.badge && (
                      <span className="absolute top-4 right-4 text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded-full">
                        {service.badge}
                      </span>
                    )}
                    
                    <div className="w-12 h-12 rounded-xl bg-neutral-800/50 border border-neutral-700 flex items-center justify-center mb-4 group-hover:border-orange-500/50 transition-colors">
                      <service.icon className="w-6 h-6 text-neutral-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
                      <div>
                        <p className="text-xs text-neutral-500 uppercase tracking-wide">Impact</p>
                        <p className="text-orange-500 font-semibold">{service.impact}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                        <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-black transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dealer Types Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-neutral-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for Your <span className="text-orange-500">Operation</span>
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Whether you're an independent lot, franchise dealer, or multi-rooftop group, 
              our services adapt to your specific challenges.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { title: 'Independent Dealers', desc: 'Maximize efficiency with lean, AI-powered operations.', href: '/dealers/independent' },
              { title: 'Franchise Dealers', desc: 'Achieve OEM compliance and protect CSI scores.', href: '/dealers/franchise' },
              { title: 'Auto Groups', desc: 'Centralize operations across multiple rooftops.', href: '/dealers/auto-groups' },
              { title: 'Pre-Owned Specialists', desc: 'Dominate local markets with aggressive lead recovery.', href: '/dealers/pre-owned' }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Link href={item.href} className="block group">
                  <div className="p-6 rounded-2xl border border-neutral-800 hover:border-orange-500/50 bg-neutral-900/30 transition-all duration-300">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm mb-4">{item.desc}</p>
                    <span className="text-orange-500 text-sm font-medium inline-flex items-center gap-1">
                      View Solution
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your <span className="text-orange-500">Dealership?</span>
            </h2>
            <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join hundreds of dealerships using VisQuanta to capture more leads, 
              close more deals, and build lasting customer relationships.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300"
              >
                Schedule a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-neutral-500">
              <span>✓ Full API Access</span>
              <span>✓ SOC-2 Compliant</span>
              <span>✓ DMS Integration</span>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
