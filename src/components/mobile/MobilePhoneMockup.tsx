'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Info, PhoneIncoming, Play } from 'lucide-react';
import Image from 'next/image';

type Message = {
  id: string;
  sender: 'user' | 'agent' | 'system';
  content: string | React.ReactNode | { title: string; subtitle?: string; appointments?: string[] };
  timestamp?: string;
  type?: 'text' | 'audio' | 'review' | 'source_tag';
  delay?: number;
};

type Scenario = {
  id: string;
  contactName: string;
  contactRole: string;
  avatarInitials: string;
  avatarImage?: string;
  messages: Message[];
};

interface MobilePhoneMockupProps {
  scenario: Scenario;
  isActive: boolean;
  onPlay?: (id: string) => void;
}

// Simple chat bubble for mobile
function MobileChatBubble({ message, onPlay }: { message: Message; onPlay?: (id: string) => void }) {
  if (message.type === 'source_tag' && message.content && typeof message.content === 'object') {
    const content = message.content as any;
    if ('title' in content) {
      return (
        <div className="flex justify-center">
          <div className="px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
            <span className="text-[9px] font-bold text-white/40 uppercase tracking-wider">
              {content.title}
            </span>
          </div>
        </div>
      );
    }
  }

  if (message.type === 'review') {
    return (
      <div className="flex justify-end">
        <div className="bg-[#ff7404] rounded-2xl rounded-tr-sm px-3 py-2 max-w-[85%]">
          <div className="flex items-center gap-1 mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="w-3 h-3 text-white fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-[10px] text-white/80">Leave a review</span>
        </div>
      </div>
    );
  }
  if (message.type === 'audio') {
    return (
      <div className="flex justify-center my-2 w-full">
        <div
          onClick={() => onPlay?.('1')}
          className="w-full bg-gradient-to-br from-[#1a1a1a] to-black rounded-2xl p-4 border border-white/10 shadow-xl relative overflow-hidden group cursor-pointer"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#ff7404]/30 transition-colors">
                <div className="flex items-center gap-0.5">
                  <div className="w-1 h-4 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite]" />
                  <div className="w-1 h-6 bg-[#ff7404] rounded-full animate-[bounce_1.2s_infinite]" />
                  <div className="w-1 h-4 bg-[#ff7404] rounded-full animate-[bounce_0.8s_infinite]" />
                </div>
              </div>
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Service Demo</h3>
              <p className="text-[9px] text-gray-400">Hear the AI in action</p>
            </div>
            <div className="flex items-center gap-1.5 bg-white text-black px-4 py-1.5 rounded-lg font-bold text-[10px] shadow-lg">
              <Play className="w-3 h-3 fill-black" />
              <span>Listen</span>
            </div>
          </div>
        </div>
      </div>
    );
  }


  const isAgent = message.sender === 'agent';
  const content = typeof message.content === 'string' ? message.content : '';

  return (
    <div className={`flex ${isAgent ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] px-3 py-2 text-[11px] leading-relaxed ${isAgent
          ? 'bg-[#ff7404] text-white rounded-2xl rounded-tr-sm'
          : 'bg-[#2a2a2a] text-white/90 rounded-2xl rounded-tl-sm'
          }`}
      >
        {content}
      </div>
    </div>
  );
}

// Typing indicator
function MobileTypingIndicator() {
  return (
    <div className="flex justify-end">
      <div className="bg-[#ff7404]/20 rounded-2xl rounded-tr-sm px-4 py-3">
        <div className="flex gap-1">
          <div className="w-1.5 h-1.5 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite]" />
          <div className="w-1.5 h-1.5 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite_0.15s]" />
          <div className="w-1.5 h-1.5 bg-[#ff7404] rounded-full animate-[bounce_1s_infinite_0.3s]" />
        </div>
      </div>
    </div>
  );
}

export default function MobilePhoneMockup({ scenario, isActive, onPlay }: MobilePhoneMockupProps) {
  const [visibleMessages, setVisibleMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef<HTMLDivElement>(null);

  // Message sequencing - only run when active
  useEffect(() => {
    if (!isActive) {
      setVisibleMessages([]);
      return;
    }

    setVisibleMessages([]);
    let timeouts: NodeJS.Timeout[] = [];
    let accumulatedDelay = 500; // Start delay

    scenario.messages.forEach((msg) => {
      const readingDelay = msg.type === 'source_tag' ? 200 : 400;
      const typingDelay = msg.sender === 'agent' ? 600 : 200;

      if (msg.sender === 'agent' && msg.type !== 'audio' && msg.type !== 'review') {
        timeouts.push(setTimeout(() => setIsTyping(true), accumulatedDelay));
        accumulatedDelay += typingDelay;
        timeouts.push(setTimeout(() => setIsTyping(false), accumulatedDelay));
      } else {
        accumulatedDelay += readingDelay;
      }

      timeouts.push(setTimeout(() => {
        setVisibleMessages(prev => [...prev, msg]);
        if (chatRef.current) {
          setTimeout(() => {
            chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
          }, 50);
        }
      }, accumulatedDelay));

      accumulatedDelay += readingDelay;
    });

    return () => timeouts.forEach(clearTimeout);
  }, [isActive, scenario.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isActive ? 1 : 0.3, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center mt-8"
    >
      {/* Phone Frame - Compact Mobile Version */}
      <div className="relative w-[260px] h-[480px] bg-black rounded-[36px] border-[4px] border-[#3a3a3a] shadow-2xl overflow-hidden ring-1 ring-white/10">

        {/* Status Bar */}
        <div className="absolute top-2 left-0 right-0 px-5 flex justify-between items-center z-[60] text-white font-medium text-[11px]">
          <span>9:41</span>
          <div className="flex items-center gap-1.5">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
              <path d="M18 20h2v-6h-2v6zm-4 0h2v-10h-2v10zm-4 0h2v-14h-2v14zm-4 0h2v-17h-2v17z" />
            </svg>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" viewBox="0 0 24 24">
              <path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0" />
            </svg>
            <div className="w-5 h-[9px] rounded-[2px] border border-white/40 flex items-center pr-[1px]">
              <div className="w-full h-full bg-white rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Dynamic Island */}
        <div className="absolute top-[8px] left-1/2 -translate-x-1/2 h-[24px] w-[80px] bg-black rounded-[16px] z-[70]" />

        {/* Home Indicator */}
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[90px] h-[4px] bg-white/80 rounded-full z-[80]" />

        {/* Screen Content */}
        <div className="w-full h-full bg-black flex flex-col pt-10">

          {/* Chat Header */}
          <div className="px-4 pb-3 border-b border-white/5 flex items-center justify-between bg-black/80">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#111] border border-white/20 flex items-center justify-center overflow-hidden">
                {scenario.avatarImage ? (
                  <Image
                    src={scenario.avatarImage}
                    alt={scenario.contactName}
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                ) : scenario.id === 'reactivation' ? (
                  <Image
                    src="/images/logo-black.jpg"
                    alt="VisQuanta"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                ) : scenario.id === 'service' ? (
                  <PhoneIncoming className="w-4 h-4 text-green-500" />
                ) : (
                  <span className="text-[8px] text-white/50 font-bold">{scenario.avatarInitials}</span>
                )}
              </div>
              <div>
                <div className="text-white text-[11px] font-bold">{scenario.contactName}</div>
                <div className="text-white/40 text-[8px] uppercase tracking-wider">{scenario.contactRole}</div>
              </div>
            </div>
            <Info className="w-4 h-4 text-[#ff7404]" />
          </div>

          {/* Messages Area */}
          <div
            ref={chatRef}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-2.5"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="popLayout">
              {visibleMessages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <MobileChatBubble message={msg} onPlay={onPlay} />
                </motion.div>
              ))}
              {isTyping && <MobileTypingIndicator key="typing" />}
            </AnimatePresence>
          </div>

          {/* Input Area */}
          <div className="px-3 pb-6 pt-1">
            <div className="h-9 bg-[#1c1c1e] rounded-full border border-white/10 flex items-center px-3 justify-between">
              <div className="flex gap-0.5 items-center">
                <div className="w-1 h-1 bg-white/40 rounded-full animate-[bounce_1.4s_infinite]" />
                <div className="w-1 h-1 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.2s]" />
                <div className="w-1 h-1 bg-white/40 rounded-full animate-[bounce_1.4s_infinite_0.4s]" />
              </div>
              <div className="w-6 h-6 rounded-full bg-[#ff7404] flex items-center justify-center">
                <ArrowUp className="w-3 h-3 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
