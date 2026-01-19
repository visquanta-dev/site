'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PhoneIncoming, Database, CalendarCheck, MessageSquare, Zap, CheckCircle2 } from 'lucide-react';
import MobileCarousel from './MobileCarousel';

const steps = [
    {
        icon: PhoneIncoming,
        title: "Call Answered",
        description: "Voice AI picks up instantly and understands what the customer needs — appointment, status check, or emergency.",
        number: "01",
        isStart: true
    },
    {
        icon: Database,
        title: "Customer Verified",
        description: "Connects to your DMS to pull vehicle history and warranty status in real-time.",
        number: "02"
    },
    {
        icon: CalendarCheck,
        title: "Appointment Booked",
        description: "Checks technician availability and books directly into your scheduler.",
        number: "03"
    },
    {
        icon: MessageSquare,
        title: "SMS Sent",
        description: "Customer gets instant SMS confirmation. Advisor gets full transcript + draft RO.",
        number: "04",
        isEnd: true
    }
];

// Animated Step Card Component
function StepCard({
    step,
    index,
    isInView
}: {
    step: typeof steps[0];
    index: number;
    isInView: boolean;
}) {
    const Icon = step.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: 0.2 + index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="relative group"
            style={{
                // Slight cascade effect - each card slightly lower
                marginTop: index * 8,
            }}
        >
            {/* Start/End Indicator Badge */}
            {step.isStart && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 hidden md:block" // Hidden on mobile
                >
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6B35]/20 border border-[#FF6B35]/40">
                        <Zap className="w-3 h-3 text-[#FF6B35]" />
                        <span className="text-[9px] font-bold text-[#FF6B35] uppercase tracking-wider">Start</span>
                    </div>
                </motion.div>
            )}
            {step.isEnd && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 hidden md:block" // Hidden on mobile
                >
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider">Complete</span>
                    </div>
                </motion.div>
            )}

            {/* Main Card with Glassmorphism */}
            <motion.div
                className="relative h-full text-center p-8 rounded-[20px] overflow-hidden cursor-default"
                style={{
                    background: 'rgba(17,17,17,0.8)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    boxShadow: '0 24px 48px -12px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05)',
                }}
                whileHover={{
                    y: -4,
                    boxShadow: '0 32px 64px -16px rgba(0,0,0,0.5), 0 0 40px rgba(255,107,53,0.1), inset 0 1px 1px rgba(255,255,255,0.05)',
                }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Inner highlight for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-[20px]" />

                <div className="relative z-10 flex flex-col items-center">
                    {/* Premium Icon Container */}
                    <motion.div
                        className="relative mb-6"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        {/* Glow behind icon */}
                        <div className="absolute inset-0 w-[72px] h-[72px] bg-[#FF6B35]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Icon container */}
                        <div
                            className="relative w-[72px] h-[72px] rounded-2xl flex items-center justify-center transition-all duration-500"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,107,53,0.15) 0%, rgba(255,107,53,0.05) 100%)',
                                border: '1px solid rgba(255,107,53,0.3)',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                            }}
                        >
                            <Icon className="w-8 h-8 text-[#FF6B35] group-hover:text-[#FF8C5A] transition-colors duration-300" />
                        </div>
                    </motion.div>

                    {/* Step Number - More Prominent */}
                    <div className="text-[#FF6B35] font-mono text-sm font-bold mb-3 tracking-wider">
                        STEP {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{step.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-white/50 leading-relaxed font-light">
                        {step.description}
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default function WorkflowSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="py-32 bg-[#0A0A0A] relative border-t border-white/[0.05] overflow-hidden"
        >
            {/* Ambient Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-[#FF6B35]/[0.03] rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none" />

            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FF6B35]/[0.02] to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full mb-6"
                        style={{
                            background: 'rgba(255,107,53,0.08)',
                            border: '1px solid rgba(255,107,53,0.2)',
                        }}
                    >
                        <Zap className="w-3.5 h-3.5 text-[#FF6B35]" />
                        <span className="text-[10px] font-bold text-[#FF6B35] uppercase tracking-[0.2em]">How Voice AI Works</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
                    >
                        How{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]">
                            Voice AI Books Appointments
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-white/40 max-w-xl mx-auto text-lg font-light leading-relaxed"
                    >
                        Four steps. Zero staff. Every call handled.
                    </motion.p>
                </div>

                {/* Process Flow Container */}
                <div className="relative">

                    {/* Desktop Connecting Line - Animated Draw */}
                    <div className="hidden lg:block absolute top-[45px] left-[8%] right-[8%] h-[4px] z-30">
                        {/* Base track */}
                        <div className="absolute inset-0 bg-[#2A2A2A] rounded-full" />

                        {/* Animated gradient fill */}
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                            style={{
                                background: 'linear-gradient(90deg, #FF6B35 0%, #FF8C5A 50%, #FF6B35 100%)',
                                boxShadow: '0 0 24px rgba(255,107,53,0.5)',
                                transformOrigin: 'left center'
                            }}
                        />

                        {/* Traveling dot animation */}
                        <motion.div
                            className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white"
                            style={{
                                boxShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,107,53,0.6)',
                            }}
                            initial={{ left: '0%', opacity: 0 }}
                            animate={isInView ? {
                                left: ['0%', '100%'],
                                opacity: [0, 1, 1, 0]
                            } : {}}
                            transition={{
                                duration: 2,
                                delay: 0.5,
                                ease: 'easeInOut',
                                times: [0, 0.1, 0.9, 1]
                            }}
                        />
                    </div>

                    {/* Desktop: Step number nodes on the line */}
                    <div className="hidden lg:flex absolute top-[34px] left-[8%] right-[8%] justify-between z-40">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                transition={{
                                    duration: 0.4,
                                    delay: 0.6 + i * 0.15,
                                    type: 'spring',
                                    stiffness: 200
                                }}
                                className="relative"
                            >
                                <div
                                    className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[11px] font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                                        boxShadow: '0 0 24px rgba(255,107,53,0.6), 0 4px 12px rgba(0,0,0,0.4)',
                                        color: '#000',
                                    }}
                                >
                                    {i + 1}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Cards Carousel */}
                    <div className="relative z-20 mt-12 lg:mt-0 lg:pt-[80px]">
                        <MobileCarousel
                            gridClassName="md:grid-cols-2 lg:grid-cols-4"
                            slideClassName="w-[80vw]"
                            className="w-full"
                        >
                            {steps.map((step, i) => (
                                <StepCard
                                    key={i}
                                    step={step}
                                    index={i}
                                    isInView={isInView}
                                />
                            ))}
                        </MobileCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}
