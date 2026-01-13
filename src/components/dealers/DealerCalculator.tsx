'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Calculator, RefreshCw, Zap, Phone, ArrowRight, DollarSign, Clock, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';

// Product tabs configuration
const products = [
    {
        id: 'reactivation',
        name: 'Lead Reactivation',
        icon: RefreshCw,
        color: 'from-[#FF7404] to-[#FF9040]',
        iconColor: 'text-[#FF7404]',
        description: 'Recover revenue from your existing CRM database',
        link: '/lead-reactivation'
    },
    {
        id: 'speed-to-lead',
        name: 'Speed-to-Lead',
        icon: Zap,
        color: 'from-[#FF7404] to-[#FF9040]',
        iconColor: 'text-[#FF7404]',
        description: 'Instant engagement for every new lead',
        link: '/speed-to-lead'
    },
    {
        id: 'service-drive',
        name: 'Service Drive AI',
        icon: Phone,
        color: 'from-[#FF7404] to-[#FF9040]',
        iconColor: 'text-[#FF7404]',
        description: 'Never miss a service call again',
        link: '/service-drive'
    }
];

// Slider Component
function Slider({
    label,
    value,
    onChange,
    min,
    max,
    step = 1,
    icon: Icon,
    suffix = ''
}: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    step?: number;
    icon: React.ComponentType<{ className?: string }>;
    suffix?: string;
}) {
    const percentage = ((value - min) / (max - min)) * 100;

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium">
                    <Icon className="w-4 h-4 text-[#FF7404]" />
                    {label}
                </div>
                <div className="text-white font-bold text-lg">{value.toLocaleString()}{suffix}</div>
            </div>
            <div className="relative">
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-[#FF7404] to-orange-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={step}
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <motion.div
                    className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-[#FF7404] rounded-full border-2 border-white shadow-lg pointer-events-none"
                    style={{ left: `calc(${percentage}% - 10px)` }}
                    whileHover={{ scale: 1.2 }}
                />
            </div>
            <div className="flex justify-between text-xs text-zinc-600">
                <span>{min.toLocaleString()}</span>
                <span>{max.toLocaleString()}{suffix}</span>
            </div>
        </div>
    );
}

// Lead Reactivation Calculator
function ReactivationCalculator() {
    const [dbSize, setDbSize] = useState(5000);
    const [avgDealProfit, setAvgDealProfit] = useState(3500);

    // Calculations
    const reengagementRate = 0.08; // 8% response rate
    const closeRate = 0.12; // 12% close on reengaged
    const potentialDeals = Math.round(dbSize * reengagementRate * closeRate);
    const projectedRevenue = potentialDeals * avgDealProfit;

    return (
        <div className="space-y-8">
            <Slider
                label="Database Size (Leads)"
                value={dbSize}
                onChange={setDbSize}
                min={1000}
                max={50000}
                step={500}
                icon={Users}
            />
            <Slider
                label="Avg Front-End Gross"
                value={avgDealProfit}
                onChange={setAvgDealProfit}
                min={1500}
                max={6000}
                step={100}
                icon={DollarSign}
                suffix=""
            />

            <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Projected Deals/Month</span>
                    <span className="text-white font-bold">{potentialDeals}</span>
                </div>
                <div className="flex justify-between items-center text-2xl">
                    <span className="text-zinc-400">Recovered Revenue</span>
                    <motion.span
                        key={projectedRevenue}
                        initial={{ scale: 1.1, color: "#FF7404" }}
                        animate={{ scale: 1, color: "#fff" }}
                        className="font-bold"
                    >
                        ${projectedRevenue.toLocaleString()}
                    </motion.span>
                </div>
            </div>
        </div>
    );
}

// Speed-to-Lead Calculator
function SpeedToLeadCalculator() {
    const [monthlyLeads, setMonthlyLeads] = useState(250);
    const [currentCloseRate, setCurrentCloseRate] = useState(8);

    // Calculations (speed-to-lead typically improves close rate by 30-50%)
    const improvedCloseRate = currentCloseRate * 1.35;
    const additionalDeals = Math.round(monthlyLeads * ((improvedCloseRate - currentCloseRate) / 100));
    const revenueImpact = additionalDeals * 3200; // Avg deal profit
    const hoursReclaimed = Math.round(monthlyLeads * 0.15); // 9 min per lead saved

    return (
        <div className="space-y-8">
            <Slider
                label="Monthly Lead Volume"
                value={monthlyLeads}
                onChange={setMonthlyLeads}
                min={50}
                max={1000}
                step={10}
                icon={TrendingUp}
            />
            <Slider
                label="Current Close Rate (%)"
                value={currentCloseRate}
                onChange={setCurrentCloseRate}
                min={3}
                max={20}
                step={1}
                icon={TrendingUp}
                suffix="%"
            />

            <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Projected Close Rate</span>
                    <span className="text-green-400 font-bold">{improvedCloseRate.toFixed(1)}% (+{(improvedCloseRate - currentCloseRate).toFixed(1)}%)</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Additional Deals/Month</span>
                    <span className="text-white font-bold">+{additionalDeals}</span>
                </div>
                <div className="flex justify-between items-center text-2xl">
                    <span className="text-zinc-400">Revenue Impact</span>
                    <motion.span
                        key={revenueImpact}
                        initial={{ scale: 1.1, color: "#FF7404" }}
                        animate={{ scale: 1, color: "#fff" }}
                        className="font-bold"
                    >
                        +${revenueImpact.toLocaleString()}
                    </motion.span>
                </div>
            </div>
        </div>
    );
}

// Service Drive Calculator
function ServiceDriveCalculator() {
    const [dailyCalls, setDailyCalls] = useState(45);
    const [missedRate, setMissedRate] = useState(25);

    // Calculations
    const monthlyMissedCalls = Math.round(dailyCalls * 22 * (missedRate / 100));
    const recoveredAppointments = Math.round(monthlyMissedCalls * 0.6); // 60% would have booked
    const avgROPerAppointment = 380;
    const revenueRecovered = recoveredAppointments * avgROPerAppointment;

    return (
        <div className="space-y-8">
            <Slider
                label="Daily Service Calls"
                value={dailyCalls}
                onChange={setDailyCalls}
                min={10}
                max={150}
                step={5}
                icon={Phone}
            />
            <Slider
                label="Missed/Abandoned Rate (%)"
                value={missedRate}
                onChange={setMissedRate}
                min={10}
                max={50}
                step={1}
                icon={Clock}
                suffix="%"
            />

            <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Missed Calls/Month</span>
                    <span className="text-white font-bold">{monthlyMissedCalls}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-zinc-400">Recovered Appointments</span>
                    <span className="text-green-400 font-bold">+{recoveredAppointments}</span>
                </div>
                <div className="flex justify-between items-center text-2xl">
                    <span className="text-zinc-400">Service Revenue</span>
                    <motion.span
                        key={revenueRecovered}
                        initial={{ scale: 1.1, color: "#FF7404" }}
                        animate={{ scale: 1, color: "#fff" }}
                        className="font-bold"
                    >
                        +${revenueRecovered.toLocaleString()}
                    </motion.span>
                </div>
            </div>
        </div>
    );
}

// Main Component
export default function DealerCalculator() {
    const [activeTab, setActiveTab] = useState('reactivation');
    const activeProduct = products.find(p => p.id === activeTab)!;

    return (
        <section id="calculator" className="py-24 bg-[#020202] relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF7404] rounded-full blur-[150px] pointer-events-none"
            />

            <div className="container px-4 mx-auto relative z-10">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-xs font-bold uppercase tracking-widest mb-6">
                        <Calculator className="w-3 h-3" />
                        ROI Calculator
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Calculate Your <span className="text-[#FF7404]">True Potential</span>
                    </h2>
                    <p className="text-zinc-400 text-lg">
                        See the revenue impact of each AutoMaster product for your dealership.
                    </p>
                </motion.div>

                {/* Product Tabs */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {products.map((product) => (
                        <motion.button
                            key={product.id}
                            onClick={() => setActiveTab(product.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${activeTab === product.id
                                ? `bg-gradient-to-r ${product.color} text-white shadow-lg`
                                : 'bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white border border-white/10'
                                }`}
                        >
                            <product.icon className="w-4 h-4" />
                            {product.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Calculator Card */}
                <motion.div
                    className="max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                >
                    <div className="bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                        {/* Tab Indicator */}
                        <div className={`h-1 bg-gradient-to-r ${activeProduct.color}`} />

                        <div className="grid lg:grid-cols-2 gap-0 lg:divide-x divide-white/5">
                            {/* Inputs */}
                            <div className="p-8 lg:p-12">
                                <div className="flex items-center gap-3 mb-8">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${activeProduct.color} flex items-center justify-center`}>
                                        <activeProduct.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white">{activeProduct.name}</h3>
                                        <p className="text-zinc-500 text-xs">{activeProduct.description}</p>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {activeTab === 'reactivation' && <ReactivationCalculator />}
                                        {activeTab === 'speed-to-lead' && <SpeedToLeadCalculator />}
                                        {activeTab === 'service-drive' && <ServiceDriveCalculator />}
                                    </motion.div>
                                </AnimatePresence>
                            </div>

                            {/* Results */}
                            <div className="p-8 lg:p-12 bg-white/[0.02] flex flex-col">
                                <div className="flex-1 flex flex-col justify-center">
                                    <div className="text-center mb-8">
                                        <div className="text-zinc-500 text-xs uppercase tracking-wider font-bold mb-2">Projected Monthly Impact</div>
                                        <motion.div
                                            key={activeTab}
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            className="text-5xl lg:text-6xl font-bold text-white mb-3"
                                        >
                                            {activeTab === 'reactivation' && '$48,000'}
                                            {activeTab === 'speed-to-lead' && '$28,800'}
                                            {activeTab === 'service-drive' && '$18,620'}
                                        </motion.div>
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold">
                                            <TrendingUp className="w-3 h-3" />
                                            Based on your inputs
                                        </div>
                                    </div>
                                </div>

                                <Link href={activeProduct.link}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px -10px rgba(255,116,4,0.5)" }}
                                        whileTap={{ scale: 0.98 }}
                                        className="w-full py-4 bg-[#FF7404] text-black font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        Learn More About {activeProduct.name}
                                        <ArrowRight className="w-4 h-4" />
                                    </motion.div>
                                </Link>

                                <p className="text-center text-zinc-600 text-xs mt-4">
                                    Estimates based on average dealer performance metrics.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
