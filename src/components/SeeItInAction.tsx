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
  Timer
} from 'lucide-react';

// --- Types ---

type Message = {
  id: string;
  sender: 'user' | 'agent' | 'system';
  content: string | React.ReactNode | { title: string; subtitle?: string };
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
  messages: Message[];
};

// --- Data ---

const scenarios: Scenario[] = [
  {
    id: 'reactivation',
    number: '01',
    title: 'Reactivation AI',
    description: 'Most dealerships underestimate the revenue hidden in their cold leads. We convert your dormant lead base into booked appointments on autopilot.',
    stats: [
      { value: '30%+', label: 'RESPONSE RATE' },
      { value: '7%+', label: 'REVENUE INCREASE' },
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
    ]
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
    contactName: 'David (Lead)',
    contactRole: '2024 Silverado 1500',
    avatarInitials: 'VQ',
    messages: [
      { id: 'tag1', sender: 'system', content: { title: 'LEAD SOURCE: CARGURUS', subtitle: 'Arrived: Just now' }, type: 'source_tag' },
      { id: 'msg1', sender: 'agent', content: "Hi David, Visquanta Chevy here. Confirming the 2024 Silverado you asked about is available." },
      { id: 'msg2', sender: 'agent', content: "When can you stop by for a test drive?" },
      { id: 'msg3', sender: 'user', content: "Can I come by at 5?" },
      { id: 'msg4', sender: 'agent', content: "5:00 PM works. I'll have it pulled up front. See you then!" }
    ]
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
    contactName: 'Web Lead',
    contactRole: 'Source: Website Widget',
    avatarInitials: 'VQ',
    messages: [
      { id: 'msg1', sender: 'agent', content: "Hi! You just reached out. How can I help you today?" },
      { id: 'msg2', sender: 'user', content: "Do you have any white Tahoes in stock?" },
      { id: 'msg3', sender: 'agent', content: "We do, yes. We currently have a few white Tahoes available. Are you looking for a specific year, trim, or price range?" },
      { id: 'msg4', sender: 'user', content: "I’m just starting to look." },
      { id: 'msg5', sender: 'agent', content: "No problem at all. I can quickly go over what we have and help narrow it down. Would it be okay if I gave you a quick call?" },
      { id: 'msg6', sender: 'user', content: "Sure." },
      { id: 'msg7', sender: 'agent', content: "Great, what’s the best number to reach you on?" }
    ]
  },
  {
    id: 'reputation',
    number: '04',
    title: 'Reputation Guard',
    description: 'Automate your CSI. We detect happy customers post-purchase and text them a direct review link, while intercepting negative feedback before it goes public.',
    stats: [
      { value: '4.8', label: 'AVG STAR RATING' },
    ],
    contactName: 'John Smith',
    contactRole: 'Sold: F-150 Lariat',
    avatarInitials: 'VQ',
    messages: [
      { id: 'tag1', sender: 'system', content: { title: 'Purchase Verified' }, type: 'source_tag' },
      { id: 'msg1', sender: 'agent', content: "Hi John! Huge congrats on the new F-150." },
      { id: 'msg2', sender: 'agent', content: "Quick question - how would you rate your experience with us?" },
      { id: 'msg3', sender: 'user', content: "Honestly it was great. Fast finance process." },
      { id: 'msg4', sender: 'agent', content: "That's awesome! Would you mind sharing that on Google? It helps a ton." },
      { id: 'rev1', sender: 'agent', type: 'review', content: 'review_card' }
    ]
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
    contactRole: '2021 Honda Accord',
    avatarInitials: 'VQ',
    messages: [
      { id: 'msg1', sender: 'agent', content: "Hi Mike, your Accord is due for its 30k mile service. Would you like to secure a slot?" },
      { id: 'msg2', sender: 'user', content: "How much is it?" },
      { id: 'msg3', sender: 'agent', content: "The 30k package is $349. We have a loaner available if you book for Tuesday." },
      { id: 'msg4', sender: 'user', content: "Ok let's do Tuesday morning." },
      { id: 'audio1', sender: 'agent', type: 'audio', content: 'audio_card' },
      { id: 'tag1', sender: 'system', content: { title: 'Service Appointment', subtitle: 'Tue Oct 24 • 8:00 AM' }, type: 'source_tag' }
    ]
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

const ChatBubble = ({ message }: { message: Message }) => {
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
            <div className="w-8 h-8 bg-yellow-600/20 text-yellow-500 rounded flex items-center justify-center border border-yellow-600/30">
              <div className="w-3 h-3 bg-current transform rotate-45" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">LEAD SOURCE: CARGURUS</div>
              <div className="text-[10px] text-gray-500">Arrived: Just now</div>
            </div>
          </div>
        ) : content.title === 'Service Appointment' ? (
          <div className="w-full bg-[#1A1A1A]/90 backdrop-blur rounded-xl p-3 flex items-center gap-3 border border-white/10 shadow-lg">
            <div className="w-8 h-8 bg-green-900/30 text-green-500 rounded flex items-center justify-center border border-green-500/20">
              <Timer className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold text-gray-300 uppercase tracking-wider">Service Appointment</div>
              <div className="text-[10px] text-gray-500 font-mono">{content.subtitle}</div>
            </div>
          </div>
        ) : (content.title === 'Moved from Website') ? (
          <div className="flex items-center gap-2 bg-[#ff7404]/10 backdrop-blur border border-[#ff7404]/30 text-[#ff7404] px-3 py-1.5 rounded-full text-[11px] shadow-[0_0_15px_rgba(255,116,4,0.2)]">
            <span className="block w-2 h-3 border-l border-b border-current" />
            Moved from Website
          </div>
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
          <div className="flex gap-1 justify-center mb-3">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
          </div>
          <div className="text-center text-[10px] text-gray-400 mb-4 font-medium tracking-wide">Google Review Link</div>
          <button className="w-full bg-[#ff7404] text-white text-xs font-bold py-2.5 rounded-lg shadow-lg">
            Five Stars
          </button>
        </div>
      </div>
    );
  }

  // Audio Card
  if (message.type === 'audio') {
    return (
      <div className="flex justify-end mb-4">
        <div className="bg-[#111] rounded-2xl p-4 w-full max-w-[280px] border border-white/10 relative overflow-hidden shadow-2xl group">
          <div className="flex items-center justify-between mb-4 z-10 relative">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]" />
              <span className="text-[10px] font-bold text-gray-300 tracking-wider">REAL CALL EXAMPLE</span>
            </div>
            <span className="text-[10px] font-bold text-gray-600 uppercase border border-gray-800 px-1.5 py-0.5 rounded">AI Agent</span>
          </div>
          <div className="flex items-center gap-3 z-10 relative">
            <button className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black">
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            </button>
            <div className="h-8 flex items-center gap-0.5 flex-1 opacity-50">
              {[...Array(16)].map((_, i) => (
                <div key={i} className="w-1 bg-white rounded-full h-4" />
              ))}
            </div>
          </div>
        </div>
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


// --- Main Component ---

export default function SeeItInAction() {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('reactivation');
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">that close.</span>
          </h2>
          <p className="text-white/40 text-xl lg:text-2xl leading-relaxed">
            Experience the power of VisQuanta's AI in real-time. Scroll through the scenarios to see how our intelligent agents handle lead reactivation, speed-to-lead, and service drive coordination.
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
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                             ${isActive
                            ? 'bg-[#ff7404] text-black shadow-[0_0_20px_rgba(255,116,4,0.4)] scale-100'
                            : 'bg-white/5 text-white/10 scale-90 opacity-0'}`}>
                          <ArrowRight className="w-5 h-5" />
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

              {/* Phone Frame */}
              <div className="relative w-[380px] h-[760px] bg-black rounded-[55px] border-[8px] border-[#1a1a1a] shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[30px] w-[120px] bg-[#1a1a1a] rounded-b-[20px] z-50 flex justify-center items-center">
                  <div className="w-16 h-4 bg-black rounded-full flex gap-2 items-center justify-center px-2">
                    <div className="w-1 h-1 rounded-full bg-[#333]" />
                    <div className="w-1 h-1 rounded-full bg-[#ff7404] animate-pulse" />
                  </div>
                </div>

                {/* Screen Content */}
                <div className="w-full h-full bg-black flex flex-col pt-12">

                  {/* Chat Header */}
                  <div className="px-6 pb-4 border-b border-white/5 flex items-center justify-between bg-black/80 backdrop-blur-md z-10">
                    <motion.div
                      key={`header-${activeScenario.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-[10px] text-white/50 font-bold">
                        {activeScenario.avatarInitials}
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
                          <ChatBubble message={msg} />
                        </motion.div>
                      ))}
                      {isTyping && <TypingIndicator key="typing" />}
                    </AnimatePresence>
                  </div>

                  {/* Input Area */}
                  <div className="px-4 pb-8 pt-2">
                    <div className="h-12 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center px-4 justify-between">
                      <span className="text-white/30 text-sm">iMessage</span>
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
    </section>
  );
}
