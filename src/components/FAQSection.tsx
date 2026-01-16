'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is AI for car dealerships?",
    answer: "AI for car dealerships refers to artificial intelligence software designed specifically for automotive retail operations. This includes lead reactivation systems that re-engage dormant CRM contacts via SMS, speed-to-lead automation that responds to inquiries in under 60 seconds, Voice AI that answers service calls 24/7, SMS-first chat widgets, and reputation management tools. VisQuanta's AutoMaster Suite combines all five capabilities in one platform."
  },
  {
    question: "How does lead reactivation work?",
    answer: "Lead reactivation uses conversational AI to re-engage dormant leads sitting in your CRM. The AI identifies prospects who showed interest but never purchased — typically 84% of CRM leads are never re-contacted after 30 days. VisQuanta's AI initiates personalized SMS conversations with these cold leads, restarting the sales process automatically. Dealerships typically see 30%+ re-engagement rates and 11% sales uplift."
  },
  {
    question: "What is speed to lead and why does it matter?",
    answer: "Speed to lead measures how quickly a dealership responds to a new sales inquiry. Research shows 78% of customers buy from the first responder. The average dealership takes 22+ minutes to respond on weekends. VisQuanta's AI responds to every inbound lead in under 60 seconds via SMS, 24/7/365."
  },
  {
    question: "How does Voice AI help service departments?",
    answer: "VisQuanta's Voice AI answers inbound service calls 24/7, including after-hours and weekends when 80% of calls typically go unanswered. The AI schedules appointments, captures vehicle information, handles diagnostic inquiries, and routes complex calls to advisors. The average dealership loses $8,500+ weekly from missed service calls."
  },
  {
    question: "What is an SMS-first website widget?",
    answer: "Traditional webchat loses leads when visitors leave the page. VisQuanta's SMS-first widget instantly transitions website conversations to text messaging, capturing the visitor's real phone number. SMS achieves 98% open rates compared to email's 20%, keeping conversations alive after visitors leave your site."
  },
  {
    question: "How does VisQuanta handle reputation management?",
    answer: "VisQuanta automates review collection by detecting satisfied customers after purchase or service and texting them a direct review link. Negative feedback is intercepted before going public, alerting your team to resolve issues. Dealerships using VisQuanta average 4.8-star ratings."
  },
  {
    question: "What DMS and CRM systems does VisQuanta integrate with?",
    answer: "VisQuanta integrates with major DMS platforms including CDK Global, Reynolds & Reynolds, Tekion, Dealertrack, and Frazer. For CRM, we support VinSolutions, DriveCentric, eLead, and DealerSocket. We offer 50+ integrations total."
  },
  {
    question: "How long does implementation take?",
    answer: "Most dealerships are fully operational within 14 days. This includes CRM and DMS integration, AI configuration for your specific processes, and team training. A dedicated success manager handles the entire onboarding — zero code changes required on your end."
  },
  {
    question: "What results can dealerships expect from VisQuanta?",
    answer: "VisQuanta partner dealerships have generated $37.8 million in additional revenue, sold 7,192+ vehicles from reactivated leads, and seen an average 11.6% increase in vehicles sold. Most dealerships see positive ROI within 30 days."
  },
  {
    question: "What is BDC in a car dealership?",
    answer: "BDC stands for Business Development Center — the team responsible for handling inbound leads, making outbound calls, and setting appointments. BDCs struggle with 45% annual turnover and limited hours. VisQuanta provides 24/7 AI coverage alongside your existing team, not as a replacement."
  },
  {
    question: "How much does VisQuanta cost?",
    answer: "VisQuanta pricing is customized based on dealership size and which AutoMaster Suite modules you need. Contact our team for a quote. Most dealerships see positive ROI within 30 days, with cost per appointment significantly lower than traditional BDC operations."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden">
      {/* FAQ Schema for AEO */}

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
              Questions? <span className="text-[#ff7404]">Answers.</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Everything you need to know about getting started with AutoMaster Suite.
            </p>

            {/* Contact CTA */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <p className="text-sm text-white/70 mb-4">Still have questions?</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-[#ff7404] font-bold hover:text-white transition-colors"
              >
                Talk to our team
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </a>
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
