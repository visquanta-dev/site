'use client';

import { motion } from 'framer-motion';
import { DollarSign, Car, TrendingUp, Users, Star } from 'lucide-react';
import Image from 'next/image';
import MobileTestimonialCarousel from './mobile/MobileTestimonialCarousel';

const stats = [
  {
    value: "$37.8M",
    label: "Extra Revenue",
    sublabel: "Generated for dealership partners",
    icon: DollarSign,
  },
  {
    value: "7,192+",
    label: "Vehicles Sold",
    sublabel: "From reactivated leads",
    icon: Car,
  },
  {
    value: "11.6%",
    label: "More Sales",
    sublabel: "Average lift in vehicles sold",
    icon: TrendingUp,
  },
  {
    value: "98%",
    label: "Satisfaction",
    sublabel: "Dealer rated results",
    icon: Users,
  },
];

const testimonials = [
  {
    quote: "Fantastic for our business. VisQuanta gets to leads before anyone else. If you're even thinking about it, do it, it pays for itself fast.",
    name: "Jo DaBrowski",
    role: "GM",
    store: "Seth Wadley of Pauls Valley",
    rating: 5.0,
    image: "/testimonials/jo-dabrowski.png",
  },
  {
    quote: "The only platform that actually understands the automotive sales cycle from end to end. We've replaced several disjointed tools with VisQuanta, and our store has never run smoother. Actual sales, not fluff.",
    name: "Jone McWhirter",
    role: "GM",
    store: "Seth Wadley Ford PV",
    rating: 5.0,
    image: "/testimonials/jone-mcwhirter.png",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ResultsProof() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff7404] to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-[#ff7404]/8 rounded-full blur-[200px]" />
      </div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Results that <span className="text-[#ff7404]">speak for themselves.</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed">
            From lead reactivation to Service Drive missed calls, we provide the absolute data-driven performance needed to maximize every profit center in your dealership.
          </p>
        </motion.div>

        {/* Featured Stats - Premium Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-8 overflow-hidden transition-all duration-500 group-hover:border-[#ff7404]/30 group-hover:shadow-[0_20px_40px_-15px_rgba(255,116,4,0.15)] flex flex-col">

                {/* Background Textures & Glows */}
                <div className="absolute inset-0 bg-enterprise-grid opacity-5 pointer-events-none" />
                <div className="absolute -right-20 -top-20 w-48 h-48 bg-[#ff7404]/5 rounded-full blur-[80px] group-hover:bg-[#ff7404]/15 transition-colors duration-700" />

                {/* Icon Section */}
                <div className="relative mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center relative group-hover:border-[#ff7404]/50 transition-colors duration-500 overflow-hidden">
                    {/* Animated Shine on hover */}
                    <motion.div
                      animate={{ x: ['-200%', '200%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    />
                    <stat.icon className="w-7 h-7 text-[#ff7404] transition-transform duration-500 group-hover:scale-110" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 mt-auto">
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-white/50 transition-all duration-500">
                      {stat.value}
                    </span>
                  </div>

                  <div className="flex flex-col gap-1.5 border-l border-white/10 pl-4 transition-colors duration-500 group-hover:border-[#ff7404]/30">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-[#ff7404]">
                      {stat.label}
                    </span>
                    <span className="text-[13px] font-medium text-white/70 leading-relaxed group-hover:text-white transition-colors duration-500">
                      {stat.sublabel}
                    </span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#ff7404]/40" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>



      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
