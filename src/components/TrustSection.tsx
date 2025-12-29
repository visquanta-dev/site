'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Server, FileCheck } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: "SOC 2 Type II Compliant",
    description: "Enterprise-grade security controls and annual third-party audits ensure your data is always protected.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "All sensitive customer data is encrypted in transit and at rest using banking-grade AES-256 standards.",
  },
  {
    icon: Server,
    title: "99.99% Uptime SLA",
    description: "Redundant infrastructure across multiple availability zones ensures your AI is always online.",
  },
  {
    icon: FileCheck,
    title: "OEM Certified",
    description: "Officially certified integrations with major OEMs and DMS providers for seamless data sync.",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function TrustSection() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-15 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
            <ShieldCheck className="w-3 h-3" />
            Enterprise Security
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Enterprise-Grade <span className="text-[#ff7404]">Security</span> & Reliability
          </h2>
          <p className="text-white/70 text-lg leading-relaxed">
            Built for dealer groups that demand the highest standards of data protection and compliance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative"
              >
                {/* Hover Glow */}
                <div className="absolute -inset-0.5 bg-[#ff7404] rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />

                <div className="relative h-full bg-gradient-to-br from-[#111111] to-[#080808] border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center group-hover:border-[#ff7404]/30 transition-all duration-500">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[#ff7404] flex items-center justify-center text-black mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{f.description}</p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[#ff7404] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
