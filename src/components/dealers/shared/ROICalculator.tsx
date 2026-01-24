'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import { Calculator, Users, DollarSign, TrendingUp, Zap, ArrowRight, Check } from 'lucide-react';
import { RequestDemoButton } from '@/components/CalendlyModal';

interface ROICalculatorProps {
    badgeText?: string;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    ctaText?: string;
}

// Animated Count Up Component
const CountUp = ({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) => {
    const springValue = useSpring(value, { stiffness: 40, damping: 20 });
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        springValue.set(value);
    }, [value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span>
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
};

export default function ROICalculator({
    badgeText = "Efficiency Engine",
    title = (
        <>
            Calculate Your <span className="text-[#FF7404]">Potential.</span>
        </>
    ),
    subtitle = "See how much revenue is leaking out of your dealership. Independent dealers win on efficiency.",
    ctaText = "Claim Your Revenue Lift"
}: ROICalculatorProps) {
    const [activeTab, setActiveTab] = useState<'reactivation' | 'speed_to_lead' | 'efficiency' | 'combined'>('reactivation');
    const [leads, setLeads] = useState(150);
    const [dbSize, setDbSize] = useState(1200);
    const [staff, setStaff] = useState(3);

    // Dealer Metrics (Conservative)
    const AVG_GROSS = 2200;

    // 1. Reactivation Metrics (Mining the existing CRM)
    const RECOVERY_RATE = 0.012; // 1.2% of the total database reactivated per month
    const recoveredDeals = Math.floor(dbSize * RECOVERY_RATE);
    const reactivationRevenue = recoveredDeals * AVG_GROSS;

    // 2. Speed to Lead Metrics (New inbound performance)
    const CONVERSION_LIFT = 0.15; // 15% increase in close rate
    const speedToLeadRevenue = Math.floor(leads * CONVERSION_LIFT * 0.1 * AVG_GROSS); // Assuming 10% base close rate

    // 3. Efficiency Metrics
    const hoursSavedPerMonth = staff * 2 * 22; // 2 hrs * 22 days
    const operationalSavings = Math.round(hoursSavedPerMonth * 25); // $25/hr value

    // Dynamic Total based on Tab
    const totalImpact = activeTab === 'reactivation' ? reactivationRevenue
        : activeTab === 'speed_to_lead' ? speedToLeadRevenue
            : activeTab === 'efficiency' ? operationalSavings
                : (reactivationRevenue + speedToLeadRevenue + operationalSavings);

    const tabs = [
        { id: 'reactivation', label: 'Lead Reactivation', icon: Calculator },
        { id: 'speed_to_lead', label: 'Speed-to-Lead', icon: Zap },
        { id: 'efficiency', label: 'Team Efficiency', icon: Users },
        { id: 'combined', label: 'Revenue OS', icon: TrendingUp },
    ];


    return (
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden" id="roi-calculator">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest"
                    >
                        <Calculator className="w-3 h-3" />
                        {badgeText}
                    </motion.div>
                    <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
                        {title}
                    </h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto">
                        {subtitle}
                    </p>
                </div>

                {/* Main All-in-one Dashboard Card */}
                <div className="max-w-5xl mx-auto bg-[#0F0F0F] border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7404]/5 rounded-full blur-[100px] pointer-events-none" />

                    {/* Dashboard Header: Tabs */}
                    <div className="border-b border-white/10 bg-white/5 p-4 sm:p-6 relative z-20">
                        <div className="flex flex-wrap justify-center gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${activeTab === tab.id
                                        ? 'bg-[#FF7404] text-black border-[#FF7404] shadow-[0_0_20px_-5px_rgba(255,116,4,0.4)]'
                                        : 'bg-white/5 text-zinc-400 border-white/5 hover:bg-white/10'
                                        }`}
                                >
                                    <tab.icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                        {/* Dashboard Left Column: Controls (3/5) */}
                        <div className="lg:col-span-3 p-8 sm:p-12 space-y-10 relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className="space-y-10"
                                >
                                    {/* Description Area */}
                                    <div className="space-y-6">
                                        <div className="space-y-3">
                                            <h3 className="text-xl font-bold text-white capitalize">
                                                {activeTab.replace(/_/g, ' ')}
                                            </h3>
                                            <p className="text-zinc-400 text-sm leading-relaxed">
                                                {activeTab === 'reactivation' && "Turn your 'dead' CRM data into deals. We automatically message past leads to find the active buyers still in the market."}
                                                {activeTab === 'speed_to_lead' && "Win the lead before your competitor wakes up. Instant AI auto-responses 24/7/365 to stop lead bouncing."}
                                                {activeTab === 'efficiency' && "Stop paying your reps to hunt. Automate the first 10 touches so your team only talks to customers ready to buy."}
                                                {activeTab === 'combined' && "The Full Funnel Advantage. Mine your past data, respond to new leads instantly, and automate the chase."}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {(activeTab === 'reactivation' ? [
                                                "Mine 6-12 month old data",
                                                "Automated 'Still Looking?'",
                                                "No human effort required",
                                                "Found money in CRM"
                                            ] : activeTab === 'speed_to_lead' ? [
                                                "Instant AI Auto-Response",
                                                "24/7 After-Hours Coverage",
                                                "Direct Calendar Booking",
                                                "Stop Lead Bouncing"
                                            ] : activeTab === 'efficiency' ? [
                                                "Automate 'The Chase'",
                                                "First 10 Touches Handled",
                                                "Rep Only Joins Live Chat",
                                                "Focus on Closing"
                                            ] : [
                                                "Full Funnel Optimization",
                                                "Maximum ROI per Lead",
                                                "Lower CPA",
                                                "Scale Without Staff"
                                            ]).map(t => (
                                                <div key={t} className="flex items-center gap-2 text-[10px] text-zinc-300 font-bold uppercase tracking-wider bg-white/[0.03] px-3 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                                                    <Check className="w-3 h-3 text-[#FF7404]" /> {t}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Sliders Area */}
                                    <div className="space-y-12">
                                        {(activeTab === 'reactivation' || activeTab === 'combined') && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                        <label className="text-white font-bold flex items-center gap-2 uppercase tracking-tight text-[11px]">
                                                            <Calculator className="w-3 h-3 text-[#FF7404]" />
                                                            Total CRM Database Size
                                                        </label>
                                                        <p className="text-[10px] text-zinc-500 font-medium">Historical leads stored in your CRM</p>
                                                    </div>
                                                    <div className="text-3xl font-black text-white font-mono tabular-nums leading-none">
                                                        <CountUp value={dbSize} />
                                                    </div>
                                                </div>
                                                <div className="relative pt-2">
                                                    <div className="absolute top-[15px] left-0 h-[2px] bg-[#FF7404] rounded-full z-0 transition-all duration-300"
                                                        style={{ width: `${((dbSize - 200) / (5000 - 200)) * 100}%` }} />
                                                    <input
                                                        type="range"
                                                        min="200"
                                                        max="5000"
                                                        step="100"
                                                        value={dbSize}
                                                        onChange={(e) => setDbSize(Number(e.target.value))}
                                                        className="relative w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#FF7404] z-10"
                                                    />
                                                </div>
                                                <div className="flex justify-between text-[9px] text-white/20 font-bold uppercase tracking-widest">
                                                    <span>200 Contacts</span>
                                                    <span>5,000+ Contacts</span>
                                                </div>
                                            </div>
                                        )}

                                        {(activeTab === 'speed_to_lead' || activeTab === 'combined') && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                        <label className="text-white font-bold flex items-center gap-2 uppercase tracking-tight text-[11px]">
                                                            <Users className="w-3 h-3 text-[#FF7404]" />
                                                            Monthly Inbound Leads
                                                        </label>
                                                        <p className="text-[10px] text-zinc-500 font-medium">Leads from CarGurus, AutoTrader, etc</p>
                                                    </div>
                                                    <div className="text-3xl font-black text-white font-mono tabular-nums leading-none">
                                                        <CountUp value={leads} />
                                                    </div>
                                                </div>
                                                <div className="relative pt-2">
                                                    <div className="absolute top-[15px] left-0 h-[2px] bg-[#FF7404] rounded-full z-0 transition-all duration-300"
                                                        style={{ width: `${((leads - 50) / (500 - 50)) * 100}%` }} />
                                                    <input
                                                        type="range"
                                                        min="50"
                                                        max="500"
                                                        step="10"
                                                        value={leads}
                                                        onChange={(e) => setLeads(Number(e.target.value))}
                                                        className="relative w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#FF7404] z-10"
                                                    />
                                                </div>
                                                <div className="flex justify-between text-[9px] text-white/20 font-bold uppercase tracking-widest">
                                                    <span>50 Leads</span>
                                                    <span>500+ Leads</span>
                                                </div>
                                            </div>
                                        )}

                                        {(activeTab === 'efficiency' || activeTab === 'combined') && (
                                            <div className="space-y-6">
                                                <div className="flex justify-between items-end">
                                                    <div className="space-y-1">
                                                        <label className="text-white font-bold flex items-center gap-2 uppercase tracking-tight text-[11px]">
                                                            <Users className="w-3 h-3 text-[#FF7404]" />
                                                            Sales / BDC Team Size
                                                        </label>
                                                        <p className="text-[10px] text-zinc-500 font-medium">Number of staff members currently chasing leads</p>
                                                    </div>
                                                    <div className="text-3xl font-black text-white font-mono tabular-nums leading-none">
                                                        <CountUp value={staff} />
                                                    </div>
                                                </div>
                                                <div className="relative pt-2">
                                                    <div className="absolute top-[15px] left-0 h-[2px] bg-[#FF7404] rounded-full z-0 transition-all duration-300"
                                                        style={{ width: `${((staff - 1) / (15 - 1)) * 100}%` }} />
                                                    <input
                                                        type="range"
                                                        min="1"
                                                        max="15"
                                                        step="1"
                                                        value={staff}
                                                        onChange={(e) => setStaff(Number(e.target.value))}
                                                        className="relative w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-[#FF7404] z-10"
                                                    />
                                                </div>
                                                <div className="flex justify-between text-[9px] text-white/20 font-bold uppercase tracking-widest">
                                                    <span>1 Rep</span>
                                                    <span>15 Reps</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Dashboard Right Column: HUD (2/5) */}
                        <div className="lg:col-span-2 bg-[#121212] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden ring-1 ring-inset ring-white/5">
                            {/* Digital HUD Background Pattern */}
                            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                                style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                            <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/5 to-transparent pointer-events-none" />

                            <motion.div
                                key="hud"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-10 relative z-10 flex flex-col h-full"
                            >
                                <div className="space-y-10 flex-1">
                                    <div className="space-y-2">
                                        <div className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-2">
                                            <div className="w-1 h-1 bg-[#FF7404] animate-pulse rounded-full" />
                                            Projected Monthly Impact
                                        </div>
                                        <div className="text-6xl font-black text-white tracking-tighter tabular-nums drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                            <CountUp value={totalImpact} prefix="$" />
                                        </div>
                                        <div className="flex items-center gap-2 text-[#FF7404] text-[10px] font-black uppercase tracking-wider bg-[#FF7404]/10 w-fit px-3 py-1.5 rounded-lg border border-[#FF7404]/20">
                                            <TrendingUp className="w-3 h-3" />
                                            {activeTab === 'efficiency' ? (
                                                <span>+{hoursSavedPerMonth} Hrs Recaptured</span>
                                            ) : (
                                                <span>+34% Gross Profit Lift</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="space-y-4 pt-10 border-t border-white/5">
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeTab}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                className="space-y-4"
                                            >
                                                {(activeTab === 'reactivation' || activeTab === 'combined') && (
                                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                                                        <div className="flex items-center gap-3">
                                                            <DollarSign className="w-4 h-4 text-green-500" />
                                                            <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest leading-none">Lead Recovery</div>
                                                        </div>
                                                        <div className="text-sm font-black text-white font-mono tabular-nums">
                                                            <CountUp value={reactivationRevenue} prefix="+$" />
                                                        </div>
                                                    </div>
                                                )}

                                                {(activeTab === 'speed_to_lead' || activeTab === 'combined') && (
                                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                                                        <div className="flex items-center gap-3">
                                                            <Zap className="w-4 h-4 text-[#ff7404]" />
                                                            <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest leading-none">Conv. Lift</div>
                                                        </div>
                                                        <div className="text-sm font-black text-white font-mono tabular-nums">
                                                            <CountUp value={speedToLeadRevenue} prefix="+$" />
                                                        </div>
                                                    </div>
                                                )}

                                                {(activeTab === 'efficiency' || activeTab === 'combined') && (
                                                    <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.05] backdrop-blur-md">
                                                        <div className="flex items-center gap-3">
                                                            <Users className="w-4 h-4 text-blue-500" />
                                                            <div className="text-[10px] text-white/50 uppercase font-bold tracking-widest leading-none">Hours Saved</div>
                                                        </div>
                                                        <div className="text-sm font-black text-white font-mono tabular-nums">
                                                            <CountUp value={hoursSavedPerMonth} suffix="h" />
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <div className="pt-10 space-y-4 relative z-10">
                                    <RequestDemoButton className="w-full py-5 bg-[#FF7404] hover:bg-white text-black font-black text-xs uppercase tracking-[0.2em] rounded-xl transition-all duration-500 flex items-center justify-center gap-2 group/btn shadow-[0_0_50px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_60px_-10px_rgba(255,116,4,0.6)]">
                                        {ctaText}
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </RequestDemoButton>
                                    <p className="text-center text-[9px] text-white/20 uppercase font-bold tracking-widest">
                                        Conservative Estimates • ROI Verified 2026
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
