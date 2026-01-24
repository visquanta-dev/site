'use client';

import { motion, useInView, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { AlertCircle, Clock, UserX, Ghost, Frown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Animated Counter Component
function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const count = useMotionValue(0);
    const springCount = useSpring(count, {
        stiffness: 50,
        damping: 30,
        duration: duration * 1000
    });
    const rounded = useTransform(springCount, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            count.set(value);
            setHasAnimated(true);
        }
    }, [isInView, hasAnimated, count, value]);

    useEffect(() => {
        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayValue(latest);
        });
        return unsubscribe;
    }, [rounded]);

    return (
        <span ref={ref} className="relative inline-block">
            <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-amber-500"
                animate={hasAnimated && displayValue === value ? {
                    textShadow: [
                        "0 0 0px rgba(249,115,22,0)",
                        "0 0 40px rgba(249,115,22,0.8)",
                        "0 0 20px rgba(249,115,22,0.4)",
                        "0 0 0px rgba(249,115,22,0)"
                    ]
                } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                {displayValue}%
            </motion.span>
            {/* Pulse ring effect when counter lands */}
            {hasAnimated && displayValue === value && (
                <motion.span
                    className="absolute inset-0 rounded-full"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{
                        background: "radial-gradient(circle, rgba(249,115,22,0.3) 0%, transparent 70%)"
                    }}
                />
            )}
        </span>
    );
}

export default function ProblemSection() {
    return (
        <section className="py-32 bg-[#050505] relative overflow-hidden">
            {/* Background Noise/Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:120px_120px] opacity-20 pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 lg:px-6 relative z-10">

                {/* Header with Motion Counter */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/5 border border-orange-500/10 mb-8 text-orange-500 font-bold text-[10px] uppercase tracking-[0.2em]"
                    >
                        <AlertCircle className="w-3 h-3" />
                        The Silent Killer
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8"
                    >
                        <AnimatedCounter value={73} duration={2} /> of Web Chats<br />
                        are Abandoned.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Traditional widgets trap the customer in the browser. When real life happens, or they just close the tab, you lose the lead <span className="text-zinc-200 font-medium">forever</span>.
                    </motion.p>
                </div>

                {/* 2-Row Grid Layout */}
                <div className="max-w-6xl mx-auto space-y-8">

                    {/* Row 1: Primary Pain Points (Large) */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                        <PainCard
                            icon={<UserX className="w-6 h-6 text-orange-500" />}
                            title="Anonymous Traffic"
                            desc="Traditional chat doesn't verify identity. You get 'Guest123' instead of a real name."
                            delay={0.1}
                            index={0}
                        />
                        <PainCard
                            icon={<Ghost className="w-6 h-6 text-orange-500" />}
                            title="The Closed Tab"
                            desc="The moment they leave your site, the connection is severed. No way to re-engage."
                            delay={0.2}
                            index={1}
                        />
                        <PainCard
                            icon={<Clock className="w-6 h-6 text-orange-500" />}
                            title="Slow Responses"
                            desc="If your BDC takes 5 minutes to reply, the shopper has already bought elsewhere."
                            delay={0.3}
                            index={2}
                        />
                    </div>

                    {/* Row 2: Secondary Pain Points (Smaller) */}
                    <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
                        <PainCardSmall
                            title="Zero Follow-Up"
                            desc="You can't text a browser session. Email open rates are <20%."
                            delay={0.4}
                            index={3}
                        />
                        <PainCardSmall
                            title="Low Trust"
                            desc="Customers hate 'Please wait for an agent' loaders."
                            delay={0.5}
                            index={4}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

function PainCard({ icon, title, desc, delay, index }: { icon: React.ReactNode, title: string, desc: string, delay: number, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative p-10 rounded-3xl bg-zinc-900/30 border border-white/5 transition-all duration-500 group h-full backdrop-blur-sm cursor-pointer"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
            whileHover={{
                y: -8,
                rotateX: -2,
                rotateY: 2,
                transition: { duration: 0.3 }
            }}
        >
            {/* Gradient border on hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.2) 0%, transparent 50%, rgba(249,115,22,0.1) 100%)',
                    border: '1px solid rgba(249,115,22,0.3)'
                }}
            />

            {/* Floating shadow */}
            <motion.div
                className="absolute -inset-2 rounded-3xl pointer-events-none -z-10"
                animate={{
                    opacity: isHovered ? 0.6 : 0,
                    scale: isHovered ? 1.02 : 1
                }}
                transition={{ duration: 0.4 }}
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.15) 0%, transparent 70%)',
                    filter: 'blur(20px)'
                }}
            />

            <motion.div
                className="w-14 h-14 rounded-2xl bg-orange-500/5 flex items-center justify-center mb-8 border border-orange-500/10 relative z-10"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    backgroundColor: isHovered ? 'rgba(249,115,22,0.15)' : 'rgba(249,115,22,0.05)'
                }}
                transition={{ duration: 0.3 }}
            >
                {icon}
            </motion.div>
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tight relative z-10 group-hover:text-orange-50 transition-colors duration-300">{title}</h3>
            <p className="text-zinc-500 leading-relaxed font-medium relative z-10 group-hover:text-zinc-400 transition-colors duration-300">{desc}</p>
        </motion.div>
    )
}

function PainCardSmall({ title, desc, delay, index }: { title: string, desc: string, delay: number, index: number }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay,
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-start gap-6 p-8 rounded-3xl bg-zinc-900/20 border border-white/5 transition-all duration-500 group backdrop-blur-sm cursor-pointer"
            style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px'
            }}
            whileHover={{
                y: -6,
                rotateX: -1,
                rotateY: 1,
                transition: { duration: 0.3 }
            }}
        >
            {/* Gradient border on hover */}
            <motion.div
                className="absolute inset-0 rounded-3xl opacity-0 pointer-events-none"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                    background: 'linear-gradient(135deg, rgba(249,115,22,0.15) 0%, transparent 50%, rgba(249,115,22,0.08) 100%)',
                    border: '1px solid rgba(249,115,22,0.25)'
                }}
            />

            {/* Floating shadow */}
            <motion.div
                className="absolute -inset-2 rounded-3xl pointer-events-none -z-10"
                animate={{
                    opacity: isHovered ? 0.4 : 0,
                    scale: isHovered ? 1.01 : 1
                }}
                transition={{ duration: 0.4 }}
                style={{
                    background: 'radial-gradient(ellipse at center, rgba(249,115,22,0.12) 0%, transparent 70%)',
                    filter: 'blur(15px)'
                }}
            />

            <motion.div
                className="p-3 bg-zinc-800/50 rounded-xl text-zinc-500 border border-white/5 relative z-10"
                animate={{
                    color: isHovered ? 'rgb(249,115,22)' : 'rgb(113,113,122)',
                    backgroundColor: isHovered ? 'rgba(249,115,22,0.1)' : 'rgba(39,39,42,0.5)'
                }}
                transition={{ duration: 0.3 }}
            >
                <Frown className="w-5 h-5" />
            </motion.div>
            <div className="relative z-10">
                <h3 className="text-lg font-bold text-zinc-300 mb-2 group-hover:text-white transition-colors duration-300">{title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{desc}</p>
            </div>
        </motion.div>
    )
}
