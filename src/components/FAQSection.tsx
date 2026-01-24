'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, HelpCircle } from 'lucide-react';
import { RequestDemoButton } from './CalendlyModal';

const faqs = [
  {
    question: "How long does implementation take?",
    answer: "Most dealerships are fully operational within 14 days. Our white-glove onboarding process handles all integrations, training, and AI configuration so your team can focus on selling cars."
  },
  {
    question: "Do I need to change my existing systems?",
    answer: "No. The AutoMaster Suite integrates seamlessly with all major DMS platforms, CRMs, and lead sources. We work alongside your existing tools, not against them."
  },
  {
    question: "What happens if I receive a call while the AI is responding?",
    answer: "Our intelligent routing system ensures live calls always take priority. The AI seamlessly hands off to your team when a customer is ready to talk, with full conversation context."
  },
  {
    question: "Is the AI customized for my dealership?",
    answer: "Absolutely. During onboarding, we train the AI on your inventory, pricing, processes, and brand voice. It learns your dealership's unique personality and selling style."
  },
  {
    question: "What's your typical ROI?",
    answer: "Dealers typically see 3-5x ROI within the first 90 days through recovered leads, faster response times, and increased service appointments. We provide transparent reporting so you can track every dollar."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes. We offer month-to-month agreements with no long-term contracts. We're confident you'll stay because of results, not obligations."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute inset-0 bg-enterprise-grid opacity-10 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#ff7404]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff7404]/10 border border-[#ff7404]/20 text-[#ff7404] text-xs font-bold uppercase tracking-widest mb-6">
              <HelpCircle className="w-3 h-3" />
              FAQ
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
              Frequently Asked <span className="text-[#ff7404]">Questions</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Everything you need to know about getting started with The AutoMaster Suite.
            </p>

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <p className="text-sm text-white/70 mb-4">Still have questions?</p>
              <RequestDemoButton asChild>
                <button
                  className="inline-flex items-center gap-2 text-[#ff7404] font-bold hover:text-white transition-colors"
                >
                  Schedule Your Walkthrough
                  <ChevronDown className="w-4 h-4 -rotate-90" />
                </button>
              </RequestDemoButton>
            </div>
          </motion.div>

          {/* Right: Accordion */}
          <div className="lg:w-2/3 space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border
                      ${isOpen
                        ? 'bg-[#ff7404]/5 border-[#ff7404]/30'
                        : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                      }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className={`text-lg font-bold transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                        {faq.question}
                      </h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300
                        ${isOpen ? 'bg-[#ff7404] text-black rotate-45' : 'bg-white/5 text-white/50'}`}
                      >
                        <Plus className="w-5 h-5" />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/70 leading-relaxed pt-4 pr-14">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
