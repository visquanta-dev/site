'use client';

import { useState, useCallback } from 'react';
import { useConversation } from '@elevenlabs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Phone, PhoneOff, Volume2, Shield, CheckCircle2 } from 'lucide-react';

export default function VoiceAgent() {
    const [isVisible, setIsVisible] = useState(true);
    const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);

    const conversation = useConversation({
        onConnect: () => console.log('Connected to ElevenLabs'),
        onDisconnect: () => console.log('Disconnected from ElevenLabs'),
        onError: (error) => console.error('ElevenLabs error:', error),
    });

    const handleStartConversation = useCallback(async () => {
        if (!hasAcceptedTerms) {
            setShowTermsModal(true);
            return;
        }

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
                connectionType: 'websocket',
            });
        } catch (error) {
            console.error('Failed to start conversation:', error);
        }
    }, [conversation, hasAcceptedTerms]);

    const handleAcceptTerms = useCallback(async () => {
        setHasAcceptedTerms(true);
        setShowTermsModal(false);

        try {
            await navigator.mediaDevices.getUserMedia({ audio: true });
            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
                connectionType: 'websocket',
            });
        } catch (error) {
            console.error('Failed to start conversation:', error);
        }
    }, [conversation]);

    const handleEndConversation = useCallback(async () => {
        await conversation.endSession();
    }, [conversation]);

    if (!isVisible) return null;

    const isConnected = conversation.status === 'connected';
    const isConnecting = conversation.status === 'connecting';
    const isSpeaking = conversation.isSpeaking;

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Premium Terms Modal */}
                    <AnimatePresence>
                        {showTermsModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-md"
                                onClick={() => setShowTermsModal(false)}
                            >
                                <motion.div
                                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                                    animate={{ scale: 1, opacity: 1, y: 0 }}
                                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                                    transition={{ type: "spring", damping: 28, stiffness: 350 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] rounded-3xl px-8 pt-10 pb-8 max-w-md mx-4 shadow-[0_25px_80px_-15px_rgba(0,0,0,0.9)] border border-white/[0.08] overflow-hidden"
                                >
                                    {/* Subtle background depth - radial gradient */}
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,116,4,0.03)_0%,_transparent_60%)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.02)_0%,_transparent_50%)] pointer-events-none" />

                                    {/* Quieted Close button - larger hit area, lower opacity */}
                                    <button
                                        onClick={() => setShowTermsModal(false)}
                                        className="absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white/20 hover:text-white/50 hover:bg-white/5 transition-all"
                                    >
                                        <X className="w-4 h-4" />
                                    </button>

                                    {/* Icon */}
                                    <div className="relative flex justify-center mb-8">
                                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF7404] to-[#FF7404]/60 flex items-center justify-center shadow-[0_0_40px_rgba(255,116,4,0.25)]">
                                            <Shield className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Content - increased spacing above title */}
                                    <h3 className="relative text-xl font-bold text-white text-center mb-3">
                                        Service Drive Voice Assistant
                                    </h3>
                                    <p className="relative text-white/45 text-sm text-center mb-8 leading-relaxed max-w-xs mx-auto">
                                        A live demonstration of how inbound service calls are handled, qualified, and routed automatically.
                                    </p>

                                    {/* Authority-focused bullet points - slightly smaller text */}
                                    <div className="relative space-y-3 mb-10">
                                        {[
                                            'Live, real-time customer conversation',
                                            'Enterprise-grade voice infrastructure',
                                            'No recordings or data retained after session'
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-[#FF7404]/10 flex items-center justify-center flex-shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-[#FF7404]" />
                                                </div>
                                                <span className="text-white/60 text-[13px]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Terms text */}
                                    <p className="relative text-white/25 text-xs text-center mb-8">
                                        By continuing, you agree to our{' '}
                                        <a href="/terms" className="text-[#FF7404]/70 hover:text-[#FF7404] hover:underline transition-colors">Terms of Service</a>
                                        {' '}and{' '}
                                        <a href="/privacy" className="text-[#FF7404]/70 hover:text-[#FF7404] hover:underline transition-colors">Privacy Policy</a>
                                    </p>

                                    {/* Buttons - Primary dominant, Cancel downgraded */}
                                    <div className="relative flex gap-3">
                                        <button
                                            onClick={() => setShowTermsModal(false)}
                                            className="flex-1 px-5 py-2.5 text-white/40 border border-white/[0.06] rounded-xl hover:bg-white/[0.03] hover:text-white/60 hover:border-white/10 transition-all font-medium text-sm"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleAcceptTerms}
                                            className="flex-[1.2] px-6 py-3.5 bg-gradient-to-r from-[#FF7404] to-[#FF7404]/85 text-white rounded-xl hover:shadow-[0_0_30px_rgba(255,116,4,0.35)] transition-all font-semibold text-[15px]"
                                        >
                                            Start Demo
                                        </button>
                                    </div>

                                    {/* Micro-trust copy */}
                                    <p className="relative text-white/20 text-[10px] text-center mt-5 tracking-wide">
                                        No setup. No commitment. Ends automatically.
                                    </p>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Full-Screen Conversation Overlay */}
                    <AnimatePresence>
                        {isConnected && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]"
                            >
                                {/* Background Pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FF7404_0%,_transparent_50%)] opacity-20" />
                                </div>

                                {/* Top Bar */}
                                <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-white/60 text-sm font-medium">Connected to Voice AI</span>
                                    </div>
                                    <button
                                        onClick={handleEndConversation}
                                        className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/30 transition-all text-sm"
                                    >
                                        <X className="w-4 h-4" />
                                        <span>Close</span>
                                    </button>
                                </div>

                                {/* Central Avatar / Waveform */}
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 0.2, type: "spring" }}
                                    className="relative"
                                >
                                    {/* Outer rings */}
                                    <motion.div
                                        className="absolute inset-0 rounded-full border-2 border-[#FF7404]/20"
                                        style={{ width: 280, height: 280, left: -40, top: -40 }}
                                        animate={{ scale: isSpeaking ? [1, 1.1, 1] : 1, opacity: isSpeaking ? [0.3, 0.1, 0.3] : 0.2 }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                    <motion.div
                                        className="absolute inset-0 rounded-full border border-[#FF7404]/10"
                                        style={{ width: 340, height: 340, left: -70, top: -70 }}
                                        animate={{ scale: isSpeaking ? [1, 1.15, 1] : 1, opacity: isSpeaking ? [0.2, 0.05, 0.2] : 0.1 }}
                                        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                                    />

                                    {/* Main orb */}
                                    <div className={`relative w-[200px] h-[200px] rounded-full flex items-center justify-center transition-all duration-500 ${isSpeaking
                                        ? 'bg-gradient-to-br from-[#FF7404] to-[#FF7404]/60 shadow-[0_0_80px_rgba(255,116,4,0.5)]'
                                        : 'bg-gradient-to-br from-[#FF7404]/80 to-[#FF7404]/40 shadow-[0_0_60px_rgba(255,116,4,0.3)]'
                                        }`}>
                                        {/* Waveform bars */}
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5, 4, 3, 2, 1].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-[6px] bg-white rounded-full"
                                                    animate={{
                                                        height: isSpeaking
                                                            ? [12, 40 + h * 10, 12]
                                                            : [8, 20, 8]
                                                    }}
                                                    transition={{
                                                        duration: isSpeaking ? 0.4 : 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                        delay: i * 0.05
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Status Text */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-12 text-center"
                                >
                                    <h2 className="text-2xl font-bold text-white mb-2">
                                        {isSpeaking ? 'AI is Speaking...' : 'Listening...'}
                                    </h2>
                                    <p className="text-white/40 text-sm">
                                        {isSpeaking
                                            ? 'The AI assistant is responding'
                                            : 'Speak naturally, I\'m ready to help'}
                                    </p>
                                </motion.div>

                                {/* End Call Button */}
                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    onClick={handleEndConversation}
                                    className="mt-16 flex items-center gap-3 px-8 py-4 bg-red-500/10 border border-red-500/30 rounded-full text-red-400 hover:bg-red-500/20 hover:border-red-500/50 hover:text-red-300 transition-all group"
                                >
                                    <PhoneOff className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                                    <span className="font-semibold">End Conversation</span>
                                </motion.button>

                                {/* Bottom hint */}
                                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/5">
                                        <Volume2 className="w-4 h-4 text-white/30" />
                                        <span className="text-white/30 text-xs">Make sure your speakers are on</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Launcher Card (only visible when not connected) */}
                    {!isConnected && (
                        <div className="fixed bottom-6 right-6 z-50 font-sans">
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="relative group"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setIsVisible(false)}
                                    className="absolute -top-2 -right-2 w-5 h-5 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-[#FF7404] transition-all z-[60] opacity-0 group-hover:opacity-100 shadow-lg cursor-pointer"
                                >
                                    <X className="w-2.5 h-2.5" />
                                </button>

                                {/* Main Card */}
                                <button
                                    onClick={handleStartConversation}
                                    disabled={isConnecting}
                                    className={`flex items-center gap-4 bg-[#0a0a0a] border border-white/[0.08] pl-4 pr-5 py-3 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] hover:border-[#FF7404]/30 hover:shadow-[0_8px_40px_rgba(255,116,4,0.15)] transition-all duration-300 cursor-pointer group/card ${isConnecting ? 'opacity-70 cursor-wait' : ''
                                        }`}
                                >
                                    {/* Animated Icon */}
                                    <div className="relative w-11 h-11 rounded-full bg-gradient-to-br from-[#FF7404] to-[#FF7404]/70 flex items-center justify-center shadow-[0_0_24px_rgba(255,116,4,0.35)] group-hover/card:shadow-[0_0_32px_rgba(255,116,4,0.5)] transition-shadow">
                                        {isConnecting ? (
                                            <motion.div
                                                className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                            />
                                        ) : (
                                            <>
                                                <div className="absolute inset-0 flex items-center justify-center gap-[2px] opacity-40">
                                                    {[1, 2, 3, 2, 1].map((h, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="w-[3px] bg-white rounded-full"
                                                            animate={{ height: [6, 12 + h * 3, 6] }}
                                                            transition={{
                                                                duration: 1.2,
                                                                repeat: Infinity,
                                                                ease: "easeInOut",
                                                                delay: i * 0.08
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <Mic className="w-5 h-5 text-white relative z-10" />
                                            </>
                                        )}
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex flex-col items-start">
                                        <div className="flex items-center gap-2">
                                            <span className="text-white text-sm font-semibold tracking-wide">
                                                {isConnecting ? 'Connecting...' : 'Test Drive Our Voice AI'}
                                            </span>
                                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20">
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF7404] opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF7404]"></span>
                                                </span>
                                                <span className="text-[9px] font-bold text-[#FF7404] uppercase tracking-wider">Live</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <Phone className="w-3 h-3 text-white/40" />
                                            <span className="text-[11px] text-white/40 group-hover/card:text-white/60 transition-colors">
                                                {isConnecting ? 'Please wait...' : 'Click to start demo'}
                                            </span>
                                        </div>
                                    </div>
                                </button>
                            </motion.div>
                        </div>
                    )}
                </>
            )}
        </AnimatePresence>
    );
}
