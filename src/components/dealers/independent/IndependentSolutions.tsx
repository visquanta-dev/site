'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MessageSquare, Phone, RefreshCw, Star, BarChart3, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

const solutions = [
    {
        icon: MessageSquare,
        title: "Speed-to-Lead AI",
        desc: "Instant SMS engagement for every lead source (Cars.com, AutoTrader, Website) in under 90 seconds. 24/7/365 coverage.",
        color: "text-[#FF7404]",
        bg: "bg-[#FF7404]/10",
        border: "border-[#FF7404]/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.3)]",
        link: "/speed-to-lead",
        cta: "See How It Works"
    },
    {
        icon: RefreshCw,
        title: "Lead Loss Mitigation",
        desc: "We mine your existing CRM data to re-engage unsold leads, aged prospects, and declined finance customers. Found money.",
        color: "text-[#FF7404]",
        bg: "bg-[#FF7404]/10",
        border: "border-[#FF7404]/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,116,4,0.3)]",
        link: "/lead-loss-mitigation",
        cta: "Recover Lost Revenue"
    },
    {
        icon: Phone,
        title: "Service Drive Voice AI",
        desc: "Never miss a service call again. AI answers every inbound call, routes it correctly, or books the appointment instantly.",
        color: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(192,132,252,0.3)]",
        link: "/service-drive",
        cta: "Automate Service Calls"
    },
    {
        icon: Star,
        title: "Reputation Management",
        desc: "AI monitors and responds to all reviews instantly. Protect your local SEO and build trust with 5-star responsiveness.",
        color: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(250,204,21,0.3)]",
        link: "/reputation-management",
        cta: "Protect Your Reviews"
    },
    {
        icon: Users,
        title: "Dedicated Success Manager",
        desc: "You're not just buying software. You get a dedicated human partner and on-site training to ensure your team wins.",
        color: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(74,222,128,0.3)]",
        link: "/dealer-success",
        cta: "Meet the Team"
    },
    {
        icon: BarChart3,
        title: "Custom Campaigns (IWAV)",
        desc: "Launch local Facebook/SMS promotions for trade-ins or service specials. We handle the conversations; you just sell.",
        color: "text-pink-400",
        bg: "bg-pink-400/10",
        border: "border-pink-400/20",
        glow: "group-hover:shadow-[0_0_30px_-5px_rgba(244,114,182,0.3)]",
        link: "/custom-campaigns",
        cta: "Launch a Campaign"
    }
];

// 3D Tilt Card Component
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 20, stiffness: 300 };
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const xPos = (e.clientX - rect.left) / rect.width - 0.5;
        const yPos = (e.clientY - rect.top) / rect.height - 0.5;
        x.set(xPos);
        y.set(yPos);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function IndependentSolutions() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        The Full Arsenal. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 via-[#C0C0C0] to-white/60">Nothing Held Back.</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        Independents get the exact same "Purpose-Built Tech" suite as diverse franchise groups. No stripped-down "lite" versions.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {solutions.map((sol, i) => (
                        <motion.div key={i} variants={cardVariants}>
                            <TiltCard className="h-full perspective-1000">
                                <Link
                                    href={sol.link}
                                    className={`group block h-full p-8 rounded-2xl bg-[#080808] border border-white/5 hover:border-white/20 transition-all duration-500 ${sol.glow}`}
                                    style={{ transform: "translateZ(0)" }}
                                >
                                    <motion.div
                                        className={`w-12 h-12 rounded-xl ${sol.bg} ${sol.border} border flex items-center justify-center mb-6`}
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                    >
                                        <sol.icon className={`w-6 h-6 ${sol.color}`} />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF7404] transition-colors duration-300">{sol.title}</h3>
                                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                                        {sol.desc}
                                    </p>
                                    <div className="inline-flex items-center gap-2 text-sm font-bold text-zinc-400 group-hover:text-[#FF7404] group-hover:gap-3 transition-all duration-300 whitespace-nowrap">
                                        {sol.cta}
                                        <motion.div
                                            className="inline-block"
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </div>
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
