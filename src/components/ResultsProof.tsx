'use client';

import { motion } from 'framer-motion';
import { DollarSign, Car, TrendingUp, Users, Star } from 'lucide-react';
import Image from 'next/image';

const stats = [
  {
    value: "$37.8M",
    label: "Extra Revenue",
    sublabel: "Generated for partners",
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
    sublabel: "Average vehicle sold increase",
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
  },
  {
    quote: "Absolutely amazing. Our team thought it was one of the managers talking, not AI. That's how real it feels. We've closed deals we thought were long gone.",
    name: "Cody Rutledge",
    role: "GM",
    store: "Street Smart Auto Brokers",
    rating: 5.0,
    image: "/testimonials/cody-rutledge.png",
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

          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Results that <span className="text-[#ff7404]">speak for themselves.</span>
          </h2>
          <p className="text-white/60 text-xl leading-relaxed">
            From CRM mining to Service Drive missed calls, we provide the absolute data-driven performance needed to maximize every profit center in your dealership.
          </p>
        </motion.div>

        {/* Featured Stats - Premium Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative bg-gradient-to-b from-[#0f0f0f] to-[#080808] border border-white/[0.08] rounded-2xl p-8 h-full transition-all duration-500 group-hover:border-[#ff7404]/30 group-hover:shadow-[0_0_60px_rgba(255,116,4,0.1)]">
                {/* Top Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#ff7404]/10 border border-[#ff7404]/20 flex items-center justify-center text-[#ff7404] mb-6 group-hover:bg-[#ff7404] group-hover:text-black transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>

                {/* Value */}
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight group-hover:text-[#ff7404] transition-colors duration-300">
                  {stat.value}
                </div>

                {/* Labels */}
                <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                <div className="text-xs text-white/50">{stat.sublabel}</div>

                {/* Corner accent on hover */}
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[#ff7404]/0 group-hover:border-[#ff7404]/40 rounded-br-2xl transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Expert Endorsements Videos */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { id: "epbB8eNUCfw", title: "It Makes Us Better at Being Humans" },
            { id: "1jCd0Whojh4", title: "Cody Rutledge Recommendation" },
            { id: "E1o2JTHlR7o", title: "Jo DaBrowski Recommendation" },
            { id: "UssAxtB8DG4", title: "Jone McWhirter Recommendation" }
          ].map((video, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?modestbranding=1&rel=0`}
                  className="absolute inset-0 w-full h-full"
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
