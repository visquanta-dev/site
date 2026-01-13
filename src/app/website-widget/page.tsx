'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  MessageSquare,
  Smartphone,
  Zap,
  Clock,
  Shield,
  Users,
  ArrowRight,
  Check,
  X,
  ChevronDown,
  Send,
  RefreshCw,
  Bot,
  Lock
} from 'lucide-react'
import Footer from '@/components/Footer'

// ============================================================================
// SMS FIRST WIDGET PAGE - VISQUANTA
// ============================================================================

export default function WebsiteWidgetPage() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <ComparisonSection />
      <FeaturesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  )
}

// ============================================================================
// SECTION 1: HERO
// ============================================================================

function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a] to-[#1a1a1a]" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249,115,22,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
                SMS-First Technology
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Don't just chat.
              <br />
              <span className="text-orange-500">Text Them.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
              Web chats die when the tab closes. Our widget moves the conversation to
              <span className="text-white font-semibold"> SMS instantly</span>, capturing real
              mobile numbers and keeping the deal alive forever.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-orange-500 text-black font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300 group"
              >
                Speak With Our Team
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-white/5 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-8 mt-12 pt-12 border-t border-gray-800">
              <Stat value="98%" label="Open Rate" />
              <Stat value="100%" label="Valid Phones" />
              <Stat value="<90s" label="Response Time" />
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <WidgetAndPhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white">{value}</div>
      <div className="text-sm text-gray-500 uppercase tracking-wider">{label}</div>
    </div>
  )
}

// ============================================================================
// WIDGET + PHONE MOCKUP COMPONENT
// ============================================================================

function WidgetAndPhoneMockup() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Widget Mockup */}
      <motion.div
        className="relative z-10 w-[320px] bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Widget Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-100">
          <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-semibold text-gray-900 text-sm">Have a question?</div>
            <div className="text-xs text-gray-500">We typically reply instantly</div>
          </div>
        </div>

        {/* Widget Body */}
        <div className="p-4 space-y-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 text-sm text-gray-700">
              Enter your question below and a representative will get right back to you.
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500"
              readOnly
            />
            <div className="flex gap-2">
              <select className="px-3 py-3 border border-gray-200 rounded-lg text-sm text-gray-400 bg-white">
                <option>+1</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-orange-500"
                readOnly
              />
            </div>
            <textarea
              placeholder="I want to know more"
              rows={2}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-900 placeholder-gray-400 resize-none focus:outline-none focus:border-orange-500"
              readOnly
            />
          </div>

          {/* Consent */}
          <label className="flex items-start gap-2 text-xs text-gray-500">
            <input type="checkbox" className="mt-0.5 accent-orange-500" defaultChecked readOnly />
            <span>By submitting you agree to receive SMS or e-mails. Rates may be applied.</span>
          </label>

          {/* Submit */}
          <button className="w-full flex items-center justify-center gap-2 py-3 bg-[#0a0a0a] text-white font-semibold rounded-lg">
            Send <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Powered By */}
        <div className="text-center py-3 text-xs text-gray-400">
          Powered by <span className="text-orange-500 font-medium">VisQuanta</span>
        </div>
      </motion.div>

      {/* Phone Mockup */}
      <motion.div
        className="absolute -right-4 lg:right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 60 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <PhoneMockup />
      </motion.div>

      {/* Connection Arrow */}
      <motion.div
        className="absolute top-1/2 right-[100px] -translate-y-1/2 z-15"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <div className="flex items-center gap-2 px-3 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
          <Zap className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 text-xs font-medium">Instant</span>
        </div>
      </motion.div>
    </div>
  )
}

function PhoneMockup() {
  const messages = [
    { type: 'ai', text: 'Hi! Via our website, how can I help you today?', delay: 0.8 },
    { type: 'user', text: 'Do you have any white Tahoes in stock?', delay: 1.2 },
    { type: 'ai', text: 'Yes, we have 3 available! Two 2024 RSTs and one Z71. Would you like to see photos?', delay: 1.6 },
    { type: 'user', text: 'Send the Z71 please.', delay: 2.0 },
    { type: 'ai', text: 'Sent! 🚗 It just arrived yesterday. When can you stop by for a test drive?', delay: 2.4 },
  ]

  return (
    <div className="w-[220px] h-[440px] bg-[#1a1a1a] rounded-[40px] p-3 shadow-2xl border border-gray-800">
      {/* Screen */}
      <div className="w-full h-full bg-[#0a0a0a] rounded-[32px] overflow-hidden flex flex-col">
        {/* Status Bar */}
        <div className="flex items-center justify-between px-6 py-2">
          <span className="text-white text-xs font-medium">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-2 flex gap-[1px]">
              <div className="w-[3px] h-1 bg-white rounded-sm" />
              <div className="w-[3px] h-1.5 bg-white rounded-sm" />
              <div className="w-[3px] h-2 bg-white rounded-sm" />
            </div>
            <div className="w-6 h-3 border border-white rounded-sm relative">
              <div className="absolute inset-[2px] bg-white rounded-[1px]" style={{ width: '70%' }} />
            </div>
          </div>
        </div>

        {/* Message Header */}
        <div className="px-4 py-2 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-semibold">
              JA
            </div>
            <div>
              <div className="text-white text-sm font-medium">James (Web Widget)</div>
              <div className="text-gray-500 text-[10px]">SOURCE: WEBSITE WIDGET</div>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 px-3 py-4 space-y-3 overflow-hidden">
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: msg.delay }}
              className={`flex ${msg.type === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] px-3 py-2 rounded-2xl text-[11px] leading-relaxed ${msg.type === 'user'
                  ? 'bg-gray-700 text-white rounded-bl-md'
                  : 'bg-orange-500 text-white rounded-br-md'
                  }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <div className="px-3 pb-4">
          <div className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-2">
            <span className="text-gray-500 text-xs">...</span>
            <div className="ml-auto w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
              <ArrowRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 bg-white rounded-full" />
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// SECTION 2: PROBLEM / SOLUTION
// ============================================================================

function ProblemSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Label */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
              Why SMS Wins
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Stop Losing Leads to
            <br />
            <span className="text-orange-500">Closed Browser Tabs</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Web chat is fragile. One click and the lead is gone. SMS is permanent.
            Own the device, not just the session.
          </p>
        </div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProblemCard
            icon={<Smartphone className="w-6 h-6" />}
            title="Text-to-Phone Handoff"
            description="The widget prioritizes getting the mobile number immediately, moving the chat from a temporary browser window to a permanent SMS thread."
          />
          <ProblemCard
            icon={<Zap className="w-6 h-6" />}
            title="98% Open Rates"
            description="Emails get ignored. Browser tabs get closed. SMS gets read within 90 seconds, almost every single time."
          />
          <ProblemCard
            icon={<RefreshCw className="w-6 h-6" />}
            title="Persistent Connection"
            description="Unlike web chat, you can re-engage the customer tomorrow, next week, or next month. The channel stays open forever."
          />
          <ProblemCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Unified Inbox"
            description="Your team manages all SMS conversations from a single dashboard, or directly from their own mobile devices."
          />
          <ProblemCard
            icon={<Users className="w-6 h-6" />}
            title="AI Appointment Setter"
            description="Our AI stays in the text thread, nurturing the lead and booking appointments while your team sleeps."
          />
          <ProblemCard
            icon={<Shield className="w-6 h-6" />}
            title="TCPA Compliant"
            description="Built-in compliance checks ensure you have the proper opt-ins before messaging any customer."
          />
        </div>
      </div>
    </section>
  )
}

function ProblemCard({
  icon,
  title,
  description
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

// ============================================================================
// SECTION 3: HOW IT WORKS
// ============================================================================

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      icon: <Send className="w-6 h-6" />,
      title: 'One-Click Installation',
      description: 'Add a single line of code to your website header. Compatible with Dealer.com, DealerOn, WordPress, and all major platforms.'
    },
    {
      number: '02',
      icon: <Bot className="w-6 h-6" />,
      title: 'AI Instantly Engages',
      description: 'The moment a visitor lands on your site, our AI greets them, answers questions about inventory, and qualifies their intent.'
    },
    {
      number: '03',
      icon: <RefreshCw className="w-6 h-6" />,
      title: 'Seamless SMS Handoff',
      description: 'Qualified leads and booked appointments are instantly pushed to your CRM. Your team takes over when the deal is hot.'
    }
  ]

  return (
    <section id="how-it-works" className="py-24 lg:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Up and Running in
              <br />
              <span className="text-orange-500">Less Than 5 Minutes</span>
            </h2>
            <p className="text-xl text-gray-400 mb-10">
              We've made implementation effortless. No complex integrations, no downtime,
              and no learning curve for your team.
            </p>
            <Link
              href="/book-demo"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:text-orange-400 transition-colors group"
            >
              Speak With Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right: Steps */}
          <div className="space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-gray-900/50 border border-gray-800"
              >
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -left-2 text-[10px] font-bold text-orange-500 bg-gray-900 px-1.5 py-0.5 rounded">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SECTION 4: COMPARISON TABLE
// ============================================================================

function ComparisonSection() {
  const features = [
    {
      feature: 'Lead Capture Method',
      sms: 'Mobile number first',
      chat: 'Email (often fake)',
      smsWins: true
    },
    {
      feature: 'Message Open Rate',
      sms: '98%',
      chat: '~20% (email)',
      smsWins: true
    },
    {
      feature: 'Response Time',
      sms: '< 90 seconds',
      chat: 'Depends on tab open',
      smsWins: true
    },
    {
      feature: 'After Hours',
      sms: 'AI continues via SMS',
      chat: 'Lead lost',
      smsWins: true
    },
    {
      feature: 'Lead Quality',
      sms: 'Verified phone = serious buyer',
      chat: 'Anonymous tire-kickers',
      smsWins: true
    },
    {
      feature: 'Re-engagement',
      sms: 'Text them anytime',
      chat: 'Must wait for return visit',
      smsWins: true
    },
    {
      feature: 'Compliance',
      sms: 'Built-in TCPA consent',
      chat: 'Often overlooked',
      smsWins: true
    }
  ]

  return (
    <section className="py-24 lg:py-32 border-t border-gray-800/50">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
              The Comparison
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            SMS Widget vs
            <br />
            <span className="text-orange-500">Traditional Chat</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See why forward-thinking dealerships are making the switch.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl border border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-gray-900/80">
            <div className="px-6 py-4 text-sm font-medium text-gray-400 uppercase tracking-wider">
              Feature
            </div>
            <div className="px-6 py-4 text-sm font-medium text-orange-500 uppercase tracking-wider text-center">
              SMS First Widget
            </div>
            <div className="px-6 py-4 text-sm font-medium text-gray-500 uppercase tracking-wider text-center">
              Traditional Chat
            </div>
          </div>

          {/* Rows */}
          {features.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-gray-900/30' : 'bg-gray-900/50'}`}
            >
              <div className="px-6 py-5 text-white font-medium">
                {row.feature}
              </div>
              <div className="px-6 py-5 text-center">
                <span className="inline-flex items-center gap-2 text-orange-500">
                  <Check className="w-4 h-4" />
                  {row.sms}
                </span>
              </div>
              <div className="px-6 py-5 text-center text-gray-500">
                {row.chat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ============================================================================
// SECTION 5: FEATURES / BENEFITS
// ============================================================================

function FeaturesSection() {
  return (
    <section className="py-24 lg:py-32 border-t border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700/50 mb-6">
            <span className="text-orange-500 text-sm font-medium tracking-wide uppercase">
              Built for Dealers
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Feels Like Texting
            <br />
            <span className="text-orange-500">a Friend</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No clunky web portals. No "please wait for an agent".
            Just a natural SMS conversation that fits right into your customer's life.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            icon={<MessageSquare className="w-6 h-6" />}
            iconColor="text-emerald-500"
            iconBg="bg-emerald-500/10 border-emerald-500/20"
            title="Rich Media Support"
            description="Send videos, photos, and PDFs instantly. Show that Z71 before they even ask."
          />
          <FeatureCard
            icon={<Smartphone className="w-6 h-6" />}
            iconColor="text-blue-500"
            iconBg="bg-blue-500/10 border-blue-500/20"
            title="Instant Call Handoff"
            description="Seamlessly switch from text to voice call when the customer is ready to talk."
          />
          <FeatureCard
            icon={<Bot className="w-6 h-6" />}
            iconColor="text-purple-500"
            iconBg="bg-purple-500/10 border-purple-500/20"
            title="Bespoke AI Agent"
            description="Trained on your inventory, your dealership, your way of doing business. Not a generic chatbot."
          />
          <FeatureCard
            icon={<Clock className="w-6 h-6" />}
            iconColor="text-orange-500"
            iconBg="bg-orange-500/10 border-orange-500/20"
            title="24/7 Coverage"
            description="Saturday night? Sunday morning? The AI is always on, always qualifying, always booking."
          />
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  icon,
  iconColor,
  iconBg,
  title,
  description
}: {
  icon: React.ReactNode
  iconColor: string
  iconBg: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex gap-5 p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-colors duration-300"
    >
      <div className={`w-12 h-12 rounded-xl ${iconBg} border flex items-center justify-center ${iconColor} flex-shrink-0`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// ============================================================================
// SECTION 6: FAQ
// ============================================================================

function FAQSection() {
  const faqs = [
    {
      question: "Does this replace my existing chat tool?",
      answer: "Yes. The SMS First Widget is designed to be a complete replacement. Traditional chat widgets have become a place where leads go to die — customers start conversations and then close the tab, never to be seen again. Our widget captures their mobile number first, so even if they leave, you can follow up via text."
    },
    {
      question: "How does the AI handle questions it doesn't know?",
      answer: "Our AI is trained specifically on your dealership — your inventory, hours, staff, and processes. For questions outside its knowledge, it gracefully hands off to your team via SMS notification, so a human can jump in seamlessly. The customer never knows the difference."
    },
    {
      question: "Does it integrate with my CRM?",
      answer: "Absolutely. We integrate with all major automotive CRMs including DealerSocket, VinSolutions, elead, and more. Leads flow directly into your existing system with full conversation history attached."
    },
    {
      question: "Can I customize the greeting and widget appearance?",
      answer: "Yes. Everything is customizable — the greeting message, avatar, colors, position on screen, and the AI's personality. We match your brand so it feels like a natural extension of your website."
    },
    {
      question: "Is it mobile friendly?",
      answer: "Absolutely. The widget is designed mobile-first. On phones, it expands to a full-screen experience that feels native. Since we're capturing phone numbers and texting customers, mobile visitors convert particularly well."
    },
    {
      question: "What about SMS compliance and TCPA?",
      answer: "Compliance is built into the widget. We collect explicit opt-in consent before any messages are sent, maintain complete audit trails, and honor opt-out requests instantly. You're protected."
    },
    {
      question: "How long does setup take?",
      answer: "Most dealerships are live within 5 minutes. It's a single line of code added to your website header. Our team handles the AI training and CRM integration — usually completed within 24-48 hours of signup."
    },
    {
      question: "What if a customer prefers to call?",
      answer: "No problem. The AI can seamlessly transfer to a phone call at any point in the conversation. We can also configure click-to-call buttons and have the AI proactively offer phone conversations when it detects high intent."
    }
  ]

  return (
    <section className="py-24 lg:py-32 border-t border-gray-800/50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Common
            <span className="text-orange-500"> Questions</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-gray-800 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-900/50 transition-colors"
      >
        <span className="text-white font-medium pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ============================================================================
// SECTION 7: FINAL CTA
// ============================================================================

function FinalCTASection() {
  return (
    <section className="py-20 lg:py-32 px-4 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#111] shadow-2xl">

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[400px] bg-orange-500/20 blur-[120px] opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[100px] opacity-30 pointer-events-none" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 lg:py-28">
          {/* Icon Badge */}
          <div className="mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md rotate-3 hover:rotate-6 transition-transform duration-500">
            <MessageSquare className="w-10 h-10 text-orange-500" />
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
            Stop losing leads to <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              slow responses.
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-2xl leading-relaxed font-light">
            Install VisQuanta's SMS First Widget today and start capturing
            <span className="text-white font-medium"> 3x more leads</span> from your existing traffic.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link
              href="/book-demo"
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(249,115,22,0.4)] hover:shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)]"
            >
              Speak With Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 font-semibold text-lg rounded-xl hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
