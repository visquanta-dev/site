'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import {
  ArrowUp,
  Info,
  ChevronRight,
  Play,
  Pause,
  Star,
  ArrowRight,
  Sparkles,
  Timer,
  Globe,
  PhoneIncoming,
  X
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// --- Types ---

type Message = {
  id: string;
  sender: 'user' | 'agent' | 'system';
  content: string | React.ReactNode | { title: string; subtitle?: string; appointments?: string[] };
  timestamp?: string;
  type?: 'text' | 'audio' | 'review' | 'source_tag';
  delay?: number;
};

type Scenario = {
  id: 'reactivation' | 'speed_to_lead' | 'widget' | 'reputation' | 'service';
  number: string;
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  contactName: string;
  contactRole: string;
  avatarInitials: string;
  avatarImage?: string;
  messages: Message[];
  link: string;
};

// --- Data ---

const scenarios: Scenario[] = [
  {
    id: 'reactivation',
    number: '01',
    title: 'Lead Reactivation',
    description: 'Most dealerships underestimate the revenue hidden in their cold leads. We convert your dormant lead base into booked appointments on autopilot.',
    stats: [
      { value: '30%+', label: 'RESPONSE RATE' },
      { value: '11%+', label: 'REVENUE INCREASE' },
    ],
    contactName: 'Amy (Visquanta)',
    contactRole: 'Reactivating: John',
    avatarInitials: 'VQ',
    messages: [
      { id: 'msg1', sender: 'agent', content: "Hi John, it’s Amy at Westline Motors. You stopped by a little while back to look at one of our vehicles, so I just wanted to check if you’re still looking." },
      { id: 'msg2', sender: 'user', content: "Yeah, I am actually, my lease is up next month." },
      { id: 'msg3', sender: 'agent', content: "Perfect timing then. We’ve had some great stock come in recently. Would you like to pop by for a look and a quick test drive?" },
      { id: 'msg4', sender: 'user', content: "Sure, that works." },
      { id: 'msg5', sender: 'agent', content: "Perfect. I’ll have one of our sales team give you a quick call to lock in a time. You can expect a call from them within the next 30 minutes." },
      { id: 'msg6', sender: 'user', content: "Ok, thanks for getting in touch." },
      { id: 'msg7', sender: 'agent', content: "You’re very welcome, John. Speak shortly and have a great day." }
    ],
    link: "/lead-loss-mitigation"
  },
  {
    id: 'speed_to_lead',
    number: '02',
    title: 'Speed to Lead',
    description: '78% of customers buy from the first responder. Our AI engages inbound leads in <60 seconds via SMS, holding the conversation until they are ready to book an appointment with your sales team.',
    stats: [
      { value: '<60s', label: 'RESPONSE TIME' },
      { value: '100+', label: 'LEAD SOURCES' },
    ],
    contactName: 'David (Inbound Lead)',
    contactRole: '2024 Silverado 1500',
    avatarInitials: 'David',
    avatarImage: '/testimonials/Steve.jpeg',
    messages: [
      { id: 'tag1', sender: 'system', content: { title: 'LEAD SOURCE: CARGURUS', subtitle: 'Arrived: Just now' }, type: 'source_tag' },
      { id: 'msg1', sender: 'agent', content: "Hi David, VisQuanta Chevy here. Just saw your request on CarGurus. The 2024 Silverado you asked about is available." },
      { id: 'msg2', sender: 'agent', content: "Are you looking to come by today or would tomorrow work better?" },
      { id: 'msg3', sender: 'user', content: "Can I come by at 5?" },
      { id: 'msg4', sender: 'agent', content: "5:00 PM works perfectly. I will have it pulled up front for you." },
      { id: 'msg5', sender: 'agent', content: "Will you be driving yourself in or would you like directions sent over?" },
      { id: 'msg6', sender: 'user', content: "I will drive myself." },
      { id: 'msg7', sender: 'agent', content: "Perfect. I will text you the address and a quick pin now." }
    ],
    link: "/speed-to-lead"
  },
  {
    id: 'widget',
    number: '03',
    title: 'SMS-First Widget',
    description: 'Webchat is where leads go to die. We instantly transition website visitors to SMS, capturing their real cell number and keeping the conversation alive.',
    stats: [
      { value: '98%', label: 'OPEN RATE' },
      { value: '100%', label: 'ENGAGED LEADS' },
    ],
    contactName: 'James (Web Widget)',
    contactRole: 'Source: Website Widget',
    avatarInitials: 'James',
    avatarImage: '/testimonials/paul.webp',
    messages: [
      { id: 'tag1', sender: 'system', content: { title: 'Moved from Website' }, type: 'source_tag' },
      { id: 'msg1', sender: 'agent', content: "Hi James, you just reached out via our website, how can i help you today?" },
      { id: 'msg2', sender: 'user', content: "Do you have any white Tahoes in stock?" },
      { id: 'msg3', sender: 'agent', content: "We do, yes. We currently have a few white Tahoes available. Are you looking for a specific year, trim, or price range?" },
      { id: 'msg4', sender: 'user', content: "I’m just starting to look." },
      { id: 'msg5', sender: 'agent', content: "No problem at all. I can quickly go over what we have and help narrow it down. Would it be okay if I gave you a quick call?" },
      { id: 'msg6', sender: 'user', content: "Sure." },
      { id: 'msg7', sender: 'agent', content: "Great, what’s the best number to reach you on?" }
    ],
    link: "/auto-master-suite"
  },
  {
    id: 'reputation',
    number: '04',
    title: 'Reputation Management',
    description: 'Automate your CSI. We detect happy customers post-purchase and text them a direct review link, while intercepting negative feedback before it goes public.',
    stats: [
      { value: '4.8', label: 'AVG STAR RATING' },
    ],
    contactName: 'Claire',
    contactRole: 'Sold: 2024 Tahoe',
    avatarInitials: 'Claire',
    avatarImage: '/testimonials/claire.png',
    messages: [
      { id: 'tag1', sender: 'system', content: { title: 'Purchase Verified' }, type: 'source_tag' },
      { id: 'msg1', sender: 'agent', content: "Hi Claire! Huge congrats on the new Tahoe." },
      { id: 'msg2', sender: 'agent', content: "Quick question - how would you rate your experience with us?" },
      { id: 'msg3', sender: 'user', content: "Honestly it was great. Fast finance process." },
      { id: 'msg4', sender: 'agent', content: "That's awesome! Would you mind sharing that on Google? It helps a ton." },
      { id: 'rev1', sender: 'agent', type: 'review', content: 'review_card' },
      { id: 'msg5', sender: 'user', content: "done, thanks again for everything 🙂" }
    ],
    link: "/reputation-management"
  },
  {
    id: 'service',
    number: '05',
    title: 'Service Drive Pro',
    description: 'Fill your service bays on autopilot. Our AI parses service history to send timely, relevant recall and maintenance reminders that actually convert.',
    stats: [
      { value: '+15%', label: 'RO GROWTH' },
      { value: '0', label: 'MISSED CALLS' },
    ],
    contactName: 'Mike (Service)',
    contactRole: 'Inbound Call: 555-0123',
    avatarInitials: 'Incoming',
    messages: [
      { id: 'audio1', sender: 'agent', type: 'audio', content: 'audio_card' }
    ],
    link: "/service-drive"
  }
];

// --- Sub-Components ---

const TypingIndicator = () => (
  <motion.div
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    className="flex justify-end mb-2"
  >
    <div className="bg-[#ff7404] px-4 py-3 rounded-2xl rounded-tr-sm flex items-center gap-1.5 w-fit">
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0 }}
        className="w-1.5 h-1.5 bg-white rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="w-1.5 h-1.5 bg-white rounded-full"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        className="w-1.5 h-1.5 bg-white rounded-full"
      />
    </div>
  </motion.div>
);

const ChatBubble = ({ message, onPlay }: { message: Message; onPlay?: (id: string) => void }) => {
  // System / Tags
  if (message.type === 'source_tag') {
    const content = message.content as any;

    if (typeof content === 'string') {
      return (
        <div className="flex justify-center my-6">
          <span className="text-[10px] font-medium text-gray-500 bg-[#1A1A1A] px-3 py-1.5 rounded-full border border-white/5 shadow-sm">
            {content}
          </span>
        </div>
      );
    }

    return (
      <div className="flex justify-center my-6 w-full px-4">
        {content.title === 'LEAD SOURCE: CARGURUS' ? (
          <div className="w-full bg-[#1A1A1A]/80 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
            <div className="h-8 px-2 bg-white/90 rounded flex items-center justify-center border border-white/10">
              <Image
                src="/assets/cargurus-logo.png"
                alt="CarGurus"
                width={80}
                height={24}
                className="object-contain h-4 w-auto"
              />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">New Lead</div>
              <div className="text-[10px] text-gray-500">Arrived: Just now</div>
            </div>
          </div>
        ) : (content.title === 'Service Appointment' || content.title === 'Appointment Booked') ? (
          <div className="w-full bg-[#111] backdrop-blur-xl rounded-2xl p-5 flex flex-col gap-4 border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-10 h-10 bg-black/50 text-green-500 rounded-xl flex items-center justify-center border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <Timer className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-0.5">Appointment Booked</div>
                {!content.appointments && <div className="text-[11px] text-white/40 font-mono tracking-wide">{content.subtitle}</div>}
              </div>
            </div>

            {content.appointments && (
              <div className="flex flex-col gap-2 relative z-10">
                {content.appointments.map((appt: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3 text-xs text-white/90 font-medium bg-white/[0.03] hover:bg-white/[0.06] px-4 py-3.5 rounded-xl border border-white/5 hover:border-green-500/30 transition-all duration-300 group cursor-default"
                  >
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] group-hover:scale-125 transition-transform duration-300" />
                    <span className="font-mono tracking-wide">{appt}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        ) : (content.title === 'Inbound Call') ? (
          <div className="w-full bg-[#1A1A1A]/90 backdrop-blur rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
            <div className="w-8 h-8 bg-blue-500/20 text-blue-500 rounded flex items-center justify-center border border-blue-500/20">
              <PhoneIncoming className="w-4 h-4 animate-pulse" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Inbound Call Answered</div>
              <div className="text-[10px] text-gray-500 font-mono">{content.subtitle}</div>
            </div>
          </div>
        ) : (content.title === 'Moved from Website') ? (
          <div className="relative overflow-hidden bg-gradient-to-r from-[#ff7404]/20 to-[#ff7404]/5 border border-[#ff7404]/50 text-[#ff7404] px-4 py-2 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,116,4,0.3)] backdrop-blur-md">
            <div className="absolute inset-0 bg-[#ff7404]/10 blur-md" />
            <Globe className="w-3.5 h-3.5 relative z-10 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest relative z-10">Moved from Website</span>
          </div>
        ) : (content.title === 'Purchase Verified') ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.1)] overflow-hidden"
          >
            {/* Animated Shine Effect */}
            <motion.div
              animate={{ x: ['-200%', '200%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-emerald-400/10 to-transparent -skew-x-12 pointer-events-none"
            />

            <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              <svg className="w-2.5 h-2.5 text-[#050505] fill-current" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>

            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400 relative z-10">
              Purchase Verified
            </span>
          </motion.div>
        ) : (
          <div className="bg-[#1A1A1A]/90 backdrop-blur text-gray-400 border border-white/5 px-3 py-1.5 rounded-full text-[11px] font-medium shadow-sm">
            {content.title}
          </div>
        )}
      </div>
    );
  }

  // Review Card
  if (message.type === 'review') {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-[#1A1A1A] rounded-2xl p-4 w-[240px] border border-white/10 shadow-xl overflow-hidden relative group">
          <div className="flex justify-center mb-4">
            <Image
              src="/assets/google-reviews.png"
              alt="Google Reviews"
              width={160}
              height={50}
              className="object-contain"
            />
          </div>
          <button className="w-full bg-[#ff7404] text-white text-xs font-bold py-2.5 rounded-lg shadow-lg">
            Click Here
          </button>
        </div>
      </div>
    );
  }

  // Audio Card
  if (message.type === 'audio') {
    return (
      <div className="flex justify-center mb-8 w-full px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => onPlay?.('1')}
          className="w-full bg-gradient-to-br from-[#1a1a1a] to-black rounded-3xl p-6 border border-white/10 shadow-2xl relative overflow-hidden group cursor-pointer"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff7404]/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#ff7404]/20 transition-all duration-500" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center gap-6">

            {/* Icon & Badge */}
            <div className="relative">
              <div className="w-20 h-20 bg-[#1a1a1a] rounded-2xl flex items-center justify-center border border-white/10 shadow-xl group-hover:border-[#ff7404]/30 transition-colors">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-6 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite]" />
                  <div className="w-1.5 h-10 bg-[#ff7404] rounded-full animate-[bounce_1.2s_infinite]" />
                  <div className="w-1.5 h-6 bg-[#ff7404] rounded-full animate-[bounce_0.8s_infinite]" />
                </div>
              </div>
              <div className="absolute -top-2 -right-4 bg-[#ff7404] text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg animate-pulse">
                LIVE AUDIO
              </div>
            </div>

            {/* Text */}
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">Hear It In Action</h3>
              <p className="text-sm text-gray-400 max-w-[260px] mx-auto leading-relaxed">
                Listen to how our AI handles a real Service Drive appointment booking.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-all">
              <Play className="w-4 h-4 fill-black" />
              <span>Play Service Demo</span>
            </div>

          </div>
        </motion.div>
      </div>
    );
  }

  const isAgent = message.sender === 'agent';

  return (
    <div className={`flex w-full mb-2 ${isAgent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-5 py-3 text-[15px] leading-snug relative tracking-normal font-medium shadow-md antialiased
        ${isAgent
            ? 'bg-[#ff7404] text-white rounded-2xl rounded-tr-sm shadow-orange-900/10'
            : 'bg-[#262626] text-gray-100 rounded-2xl rounded-tl-sm border border-white/5'
          }`}
      >
        {message.content as string}
      </div>
    </div>
  );
};


// --- Call Examples Data ---

const callExamples = [
  {
    id: '1',
    title: 'EPC Warning Light',
    situation: 'EPC light appeared on customer\'s Volkswagen.',
    action: 'Service Drive Agent™ guided customer through diagnostic pricing and towing process',
    result: 'Vehicle was towed in overnight, customer contacted promptly.',
    videoId: '1128516515',
    issue: 'Emergency Diagnostic'
  },
  {
    id: '2',
    title: 'Book a Service',
    situation: 'Customer called after hours to schedule service.',
    action: 'Service Drive Agent™ gathered name and callback info.',
    result: 'Advisor contacted customer first thing to confirm appointment.',
    videoId: '1128816533',
    issue: 'After-Hours Booking'
  },
  {
    id: '3',
    title: 'Problem with Brakes',
    situation: '2022 Hyundai Tucson with brake failure.',
    action: 'Service Drive Agent™ captured details and scheduled callback.',
    result: 'Advisor contacted customer next morning, inspection arranged.',
    videoId: '1128816504',
    issue: 'Safety Concern'
  }
];

// --- Main Component ---

export default function SeeItInAction() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeScenarioId, setActiveScenarioId] = useState<string>('speed_to_lead');
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Refs for Scroll Trigger logic
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const activeScenario = scenarios.find(s => s.id === activeScenarioId) || scenarios[0];
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Observer for scroll activation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('data-id');
          if (id) setActiveScenarioId(id);
        }
      });
    }, { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 });

    const items = document.querySelectorAll('.scenario-item');
    items.forEach(i => observer.observe(i));

    return () => observer.disconnect();
  }, []);

  // Message Sequencing Logic 
  useEffect(() => {
    setVisibleMessages([]);
    let timeouts: NodeJS.Timeout[] = [];
    let accumulatedDelay = 0;

    const sequenceMessages = async () => {
      for (const msg of activeScenario.messages) {
        const readingDelay = msg.type === 'source_tag' ? 300 : 700;
        const typingDelay = msg.sender === 'agent' ? 1000 : 400;
        const preDelay = accumulatedDelay;

        if (msg.sender === 'agent' && msg.type !== 'audio' && msg.type !== 'review') {
          timeouts.push(setTimeout(() => setIsTyping(true), preDelay));
          accumulatedDelay += typingDelay;
          timeouts.push(setTimeout(() => setIsTyping(false), accumulatedDelay));
        } else {
          accumulatedDelay += readingDelay;
        }

        timeouts.push(setTimeout(() => {
          setVisibleMessages(prev => [...prev, msg]);
          if (chatContainerRef.current) {
            // Scroll to bottom
            setTimeout(() => {
              chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
            }, 50);
          }
        }, accumulatedDelay));
      }
    };

    sequenceMessages();
    return () => timeouts.forEach(clearTimeout);
  }, [activeScenarioId]);

  return (
    <section ref={sectionRef} className="bg-[#050505] py-24 lg:py-32 border-t border-white/5 relative selection:bg-amber-500/30">

      {/* Background FX */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />
      </div>

      <div className="container-wide relative z-10">

        {/* Header */}
        <div className="mb-24 max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[0.9] mb-8">
            Conversations<br />
            <span className="text-white/80">that convert.</span>
          </h2>
          <p className="text-white/40 text-xl lg:text-2xl leading-relaxed">
            See how each VisQuanta product operates across lead reactivation, inbound response, SMS chat, review requests, and service drive coordination, shown through real dealership conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">

          {/* LEFT: Scrollable Feature List */}
          <div className="lg:col-span-6 space-y-32 py-12">
            {/* Top spacer for first scenario alignment */}
            <div className="h-[20vh]" aria-hidden="true" />

            {scenarios.map((scenario) => {
              const isActive = activeScenarioId === scenario.id;

              return (
                <div
                  key={scenario.id}
                  data-id={scenario.id}
                  className="scenario-item group relative min-h-[400px] flex flex-col justify-center"
                >
                  {/* Left Border Accent */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 transition-colors duration-500 ${isActive ? 'bg-[#ff7404]' : 'bg-white/5'}`} />

                  <div className="pl-12">
                    <div className="flex items-center gap-3 mb-6">
                      <span className={`font-mono text-sm font-bold tracking-widest ${isActive ? 'text-[#ff7404]' : 'text-white/20'}`}>
                        #{scenario.number}
                      </span>
                      <h3 className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/20'}`}>
                        {scenario.title}
                      </h3>
                    </div>

                    <div className={`transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-30 blur-[1px]'}`}>
                      <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8">
                        {scenario.description}
                      </p>

                      <div className="flex items-center gap-12">
                        {scenario.stats.map((stat, i) => (
                          <div key={i}>
                            <div className={`text-4xl font-bold tracking-tighter mb-1 ${isActive ? 'text-white' : 'text-white/40'}`}>
                              {stat.value}
                            </div>
                            <div className="text-[10px] font-bold text-white/30 tracking-[0.2em] uppercase">{stat.label}</div>
                          </div>
                        ))}

                        {/* Interactive Next Button */}
                        {/* Interactive Next Button - Prominent CTA */}
                        <div className={`transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'}`}>
                          <Link
                            href={scenario.link}
                            className="group/cta relative inline-flex items-center gap-3 px-6 py-3 border border-[#ff7404] text-[#ff7404] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#ff7404] hover:text-black transition-all shadow-[0_0_15px_rgba(255,116,4,0.1)] hover:shadow-[0_0_25px_rgba(255,116,4,0.4)]"
                          >
                            Learn More
                            <ArrowRight className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* Spacer for last scenario alignment */}
            <div className="h-[40vh]" aria-hidden="true" />
          </div>

          {/* RIGHT: Sticky Phone Mockup */}
          <div className="lg:col-span-6 lg:col-start-7 relative hidden lg:block">
            <div className="sticky top-24 h-[800px] flex items-center justify-center translate-x-10">

              {/* Live Agent Label */}
              <div className="absolute -top-12 text-[10px] font-bold text-white/20 uppercase tracking-[0.3em]">
                Live Agent Simulation
              </div>

              {/* Phone Frame - Apple Polish */}
              <div className="relative w-[380px] h-[760px] bg-black rounded-[55px] border-[6px] border-[#4a4a4a] shadow-2xl overflow-hidden ring-1 ring-white/20 select-none">

                {/* Hardware Buttons */}
                <div className="absolute -left-[8px] top-[120px] h-[26px] w-[4px] bg-[#3a3a3a] rounded-l-md" /> {/* Silent */}
                <div className="absolute -left-[8px] top-[160px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" /> {/* Vol Up */}
                <div className="absolute -left-[8px] top-[215px] h-[45px] w-[4px] bg-[#3a3a3a] rounded-l-md" /> {/* Vol Down */}
                <div className="absolute -right-[8px] top-[160px] h-[80px] w-[4px] bg-[#3a3a3a] rounded-r-md" /> {/* Power */}

                {/* Status Bar */}
                <div className="absolute top-4 left-0 right-0 px-7 flex justify-between items-center z-[60] text-white font-medium text-[14px]">
                  <span className="tracking-wide text-[14px]">9:41</span>
                  <div className="flex items-center gap-2 text-white">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18 20h2v-6h-2v6zm-4 0h2v-10h-2v10zm-4 0h2v-14h-2v14zm-4 0h2v-17h-2v17z" /></svg> {/* Signal */}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24"><path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" /></svg> {/* Wifi */}
                    <div className="w-6 h-[11px] rounded-[3px] border-[1.5px] border-white/40 flex items-center pr-[1px] relative ml-1">
                      <div className="w-full h-full bg-white rounded-[1px]" />
                      <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 h-1 w-[2px] bg-white/40 rounded-r-[1px]" />
                    </div>
                  </div>
                </div>

                {/* Dynamic Island */}
                <div className="absolute top-[11px] left-1/2 -translate-x-1/2 h-[36px] w-[120px] bg-black rounded-[24px] z-[70] flex justify-center items-center">
                  <div className="w-[40%] h-full bg-black rounded-full relative overflow-hidden">
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] shadow-inner opacity-60" />
                  </div>
                </div>

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[130px] h-[5px] bg-white/90 rounded-full z-[80]" />

                {/* Screen Content */}
                <div className="w-full h-full bg-black flex flex-col pt-14">

                  {/* Chat Header */}
                  <div className="px-6 pb-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-md z-10">
                    <motion.div
                      key={`header-${activeScenario.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#111] border border-white flex items-center justify-center overflow-hidden">
                        {activeScenario.avatarImage ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={activeScenario.avatarImage}
                              alt={activeScenario.contactName}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ) : activeScenario.id === 'reactivation' ? (
                          <div className="relative w-7 h-7">
                            <Image
                              src="/images/logo-black.jpg"
                              alt="VisQuanta"
                              fill
                              className="object-contain"
                            />
                          </div>
                        ) : activeScenario.id === 'service' ? (
                          <PhoneIncoming className="w-5 h-5 text-green-500 animate-pulse" />
                        ) : (
                          <span className="text-[10px] text-white/50 font-bold">{activeScenario.avatarInitials}</span>
                        )}
                      </div>
                      <div>
                        <div className="text-white text-sm font-bold">{activeScenario.contactName}</div>
                        <div className="text-white/40 text-[10px] uppercase tracking-wider">{activeScenario.contactRole}</div>
                      </div>
                    </motion.div>
                    <Info className="w-5 h-5 text-[#ff7404]" />
                  </div>

                  {/* Messages Area */}
                  <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto px-4 py-6 space-y-4 no-scrollbar"
                  >
                    <AnimatePresence mode="popLayout">
                      {visibleMessages.map((msg) => (
                        <motion.div
                          key={msg.id}
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        >
                          <ChatBubble message={msg} onPlay={setActiveVideo} />
                        </motion.div>
                      ))}
                      {isTyping && <TypingIndicator key="typing" />}
                    </AnimatePresence>
                  </div>

                  {/* Input Area */}
                  <div className="px-4 pb-8 pt-2">
                    <div className="h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center px-4 justify-between">
                      <div className="flex gap-1 items-center pl-1">
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite]" />
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.2s]" />
                        <div className="w-1.5 h-1.5 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.4s]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#ff7404] flex items-center justify-center">
                        <ArrowUp className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Ultra-Premium Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl bg-[#050505] rounded-[2rem] border border-white/10 ring-1 ring-white/5 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] flex flex-col md:flex-row h-[85vh] md:h-[700px] max-h-[90vh]"
            >
              {/* Cinematic Glow Effect */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-[#ff7404]/10 blur-[100px] pointer-events-none mix-blend-screen" />

              {/* Close Button */}
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white/70 hover:text-white backdrop-blur-md transition-all z-50 group border border-white/10 hover:border-white/20"
              >
                <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
              </button>

              {/* Sidebar (Premium Playlist) */}
              <div className="w-full md:w-[320px] border-r border-white/10 bg-[#0a0a0a] flex flex-col relative z-20">
                <div className="p-6 pb-2 shrink-0">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#ff7404] uppercase mb-2">Library</div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Real Recordings</h3>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 custom-scrollbar">
                  {callExamples.map((ex) => (
                    <button
                      key={ex.id}
                      onClick={() => setActiveVideo(ex.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${activeVideo === ex.id
                        ? 'bg-white/[0.03] border-amber-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                    >
                      {activeVideo === ex.id && (
                        <motion.div
                          layoutId="activeGlow"
                          className="absolute inset-0 bg-gradient-to-r from-[#ff7404]/10 to-transparent pointer-events-none"
                          transition={{ duration: 0.3 }}
                        />
                      )}

                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-[9px] font-bold uppercase tracking-wider py-1 px-2 rounded-md transition-colors ${activeVideo === ex.id
                            ? 'bg-[#ff7404] text-white shadow-[0_2px_8px_rgba(255,116,4,0.3)]'
                            : 'bg-black/40 border border-white/10 text-white/50 group-hover:text-white/70'
                            }`}>
                            {ex.issue}
                          </span>
                          {activeVideo === ex.id && (
                            <motion.div
                              initial={{ scale: 0 }} animate={{ scale: 1 }}
                              className="w-1.5 h-1.5 rounded-full bg-[#ff7404] shadow-[0_0_8px_#ff7404]"
                            />
                          )}
                        </div>
                        <div className={`font-bold text-sm transition-colors ${activeVideo === ex.id ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>
                          {ex.title}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Did You Know Card */}
                <div className="p-4 shrink-0">
                  <div className="bg-[#1a1a1a] rounded-xl p-5 border border-white/5 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-2">Did You Know?</div>
                    <p className="text-xs text-white/70 leading-relaxed">
                      Dealerships using VisQuanta see an average <span className="text-white font-bold">30% increase</span> in appointment set rates within the first 60 days.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 flex flex-col bg-[#050505] relative overflow-hidden">
                {(() => {
                  const selectedCall = callExamples.find(c => c.id === activeVideo) || callExamples[0];
                  return (
                    <>
                      {/* Video Player - Compact Height */}
                      <div className="w-full h-[45%] bg-black relative shadow-2xl z-10 shrink-0">
                        <iframe
                          key={selectedCall.id}
                          src={`https://player.vimeo.com/video/${selectedCall.videoId}?autoplay=1&title=0&byline=0&portrait=0`}
                          className="absolute inset-0 w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                        {/* Gradient Overlay for seamless blend */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
                      </div>

                      {/* Details - Compact Cinematic Layout */}
                      <div className="flex-1 relative p-8 overflow-y-auto custom-scrollbar flex flex-col">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                          className="max-w-3xl mx-auto w-full flex-1 flex flex-col"
                        >
                          <div className="flex items-center gap-3 mb-6 shrink-0">
                            <div className="w-1 h-8 bg-gradient-to-b from-[#ff7404] to-transparent rounded-full" />
                            <div>
                              <h2 className="text-2xl font-bold text-white tracking-tight">{selectedCall.title}</h2>
                              <p className="text-white/40 text-xs">Intervention Analysis</p>
                            </div>
                          </div>

                          <div className="space-y-6 relative pl-4 pb-4 flex-1">
                            {/* Animated Timeline Line */}
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: "100%" }}
                              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                              className="absolute left-[26px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-white/10 via-white/5 to-transparent origin-top"
                            />

                            {/* Situation */}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="relative pl-10 group"
                            >
                              <div className="absolute left-0 top-1.5 w-[40px] h-[1px] bg-gradient-to-r from-amber-500/50 to-transparent" />
                              <div className="absolute left-0 top-0 w-10 h-10 -ml-[18px] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#050505] border border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)] z-10 relative">
                                  <div className="absolute inset-0 bg-amber-500 animate-ping opacity-20 hover:opacity-100 rounded-full" />
                                </div>
                              </div>
                              <div className="text-[9px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                                Situation
                              </div>
                              <p className="text-sm text-white/80 leading-relaxed font-light">{selectedCall.situation}</p>
                            </motion.div>

                            {/* Action */}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 }}
                              className="relative pl-10 group"
                            >
                              <div className="absolute left-0 top-1.5 w-[40px] h-[1px] bg-gradient-to-r from-[#ff7404]/50 to-transparent" />
                              <div className="absolute left-0 top-0 w-10 h-10 -ml-[18px] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#050505] border border-[#ff7404] shadow-[0_0_10px_rgba(255,116,4,0.3)] z-10 relative" />
                              </div>
                              <div className="text-[9px] font-bold text-[#ff7404] uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                                AI Agent Action
                              </div>
                              <p className="text-sm text-white/80 leading-relaxed font-light">{selectedCall.action}</p>
                            </motion.div>

                            {/* Result */}
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.6 }}
                              className="relative pl-10 group"
                            >
                              <div className="absolute left-0 top-1.5 w-[40px] h-[1px] bg-gradient-to-r from-emerald-500/50 to-transparent" />
                              <div className="absolute left-0 top-0 w-10 h-10 -ml-[18px] flex items-center justify-center">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#050505] border border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)] z-10 relative" />
                              </div>
                              <div className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-1.5 flex items-center gap-2">
                                Result
                              </div>
                              <p className="text-sm text-white/80 leading-relaxed font-light">{selectedCall.result}</p>
                            </motion.div>
                          </div>

                          {/* CTA Button */}
                          <div className="mt-8 pt-6 border-t border-white/5 shrink-0 w-full">
                            <button className="w-full py-4 bg-[#ff7404] hover:bg-[#ff8a2b] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(255,116,4,0.2)] hover:shadow-[0_0_30px_rgba(255,116,4,0.4)] active:scale-[0.98]">
                              Book a Live Demo <ArrowRight className="w-5 h-5" />
                            </button>
                          </div>
                        </motion.div>
                      </div>
                    </>
                  );
                })()}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
