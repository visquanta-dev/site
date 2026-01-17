'use client';

import { useState, useCallback } from 'react';
import { useConversation } from '@elevenlabs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, X, Phone, PhoneOff } from 'lucide-react';

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
            // Request microphone permission
            await navigator.mediaDevices.getUserMedia({ audio: true });

            // Start the conversation with your agent
            await conversation.startSession({
                agentId: 'agent_4501k4d2eehvf0p8axd56y4a0d45',
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

    return (
        <AnimatePresence>
            {isVisible && (
                <>
                    {/* Terms Modal */}
                    <AnimatePresence>
                        {showTermsModal && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
                                onClick={() => setShowTermsModal(false)}
                            >
                                <motion.div
                                    initial={{ scale: 0.9, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.9, opacity: 0 }}
                                    onClick={(e) => e.stopPropagation()}
                                    className="bg-white rounded-2xl p-6 max-w-sm mx-4 shadow-2xl"
                                >
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        Service Drive AI Assistant
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        This is a demo of our Voice AI. By continuing, you agree to our Terms and Conditions.
                                    </p>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setShowTermsModal(false)}
                                            className="flex-1 px-4 py-2 text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onClick={handleAcceptTerms}
                                            className="flex-1 px-4 py-2 bg-[#FF7404] text-white rounded-lg hover:bg-[#FF7404]/90 transition-colors font-medium"
                                        >
                                            Accept
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Voice Agent Card */}
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
                                onClick={isConnected ? handleEndConversation : handleStartConversation}
                                disabled={isConnecting}
                                className={`flex items-center gap-4 bg-[#0a0a0a] border pl-4 pr-5 py-3 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-pointer group/card ${isConnected
                                        ? 'border-[#FF7404]/50 shadow-[0_0_30px_rgba(255,116,4,0.2)]'
                                        : 'border-white/[0.08] hover:border-[#FF7404]/30'
                                    } ${isConnecting ? 'opacity-70 cursor-wait' : ''}`}
                            >
                                {/* Animated Icon */}
                                <div className={`relative w-11 h-11 rounded-full flex items-center justify-center transition-all ${isConnected
                                        ? 'bg-[#FF7404] shadow-[0_0_24px_rgba(255,116,4,0.5)]'
                                        : 'bg-gradient-to-br from-[#FF7404] to-[#FF7404]/70 shadow-[0_0_24px_rgba(255,116,4,0.35)] group-hover/card:shadow-[0_0_32px_rgba(255,116,4,0.5)]'
                                    }`}>
                                    {isConnected ? (
                                        <>
                                            {/* Active waveform animation */}
                                            <div className="absolute inset-0 flex items-center justify-center gap-[2px]">
                                                {[1, 2, 3, 4, 3, 2, 1].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        className="w-[2px] bg-white rounded-full"
                                                        animate={{
                                                            height: conversation.isSpeaking
                                                                ? [4, 16 + h * 4, 4]
                                                                : [4, 8, 4]
                                                        }}
                                                        transition={{
                                                            duration: conversation.isSpeaking ? 0.5 : 1.5,
                                                            repeat: Infinity,
                                                            ease: "easeInOut",
                                                            delay: i * 0.05
                                                        }}
                                                    />
                                                ))}
                                            </div>
                                            <Phone className="w-5 h-5 text-white relative z-10 opacity-0" />
                                        </>
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
                                            {isConnected ? 'Voice AI Active' : isConnecting ? 'Connecting...' : 'Test Drive Our Voice AI'}
                                        </span>
                                        <div className={`flex items-center gap-1.5 px-2 py-0.5 rounded-full border ${isConnected
                                                ? 'bg-green-500/10 border-green-500/20'
                                                : 'bg-[#FF7404]/10 border-[#FF7404]/20'
                                            }`}>
                                            <span className="relative flex h-1.5 w-1.5">
                                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isConnected ? 'bg-green-500' : 'bg-[#FF7404]'
                                                    }`}></span>
                                                <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isConnected ? 'bg-green-500' : 'bg-[#FF7404]'
                                                    }`}></span>
                                            </span>
                                            <span className={`text-[9px] font-bold uppercase tracking-wider ${isConnected ? 'text-green-500' : 'text-[#FF7404]'
                                                }`}>
                                                {isConnected ? 'Connected' : 'Live'}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        {isConnected ? (
                                            <>
                                                <PhoneOff className="w-3 h-3 text-white/40" />
                                                <span className="text-[11px] text-white/40">Click to end call</span>
                                            </>
                                        ) : (
                                            <>
                                                <Phone className="w-3 h-3 text-white/40" />
                                                <span className="text-[11px] text-white/40 group-hover/card:text-white/60 transition-colors">
                                                    {isConnecting ? 'Please wait...' : 'Click to start demo'}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
