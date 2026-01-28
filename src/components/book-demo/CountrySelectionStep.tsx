'use client';

import { US, CA, EU } from 'country-flag-icons/react/3x2';
import { motion } from 'framer-motion';
import FlagCard from './FlagCard';

interface CountrySelectionStepProps {
    selectedCountry: 'US' | 'CA' | 'EU' | null;
    onSelect: (country: 'US' | 'CA' | 'EU') => void;
    onAlreadyClient: () => void;
}

export default function CountrySelectionStep({ selectedCountry, onSelect, onAlreadyClient }: CountrySelectionStepProps) {
    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-10">
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4"
                >
                    Schedule Your Walkthrough
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-xl text-white/50"
                >
                    15-min 1:1 • Get an exact revenue-lift projection for your dealership
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <FlagCard
                        countryCode="US"
                        countryName="United States"
                        FlagComponent={US}
                        selected={selectedCountry === 'US'}
                        onClick={() => onSelect('US')}
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <FlagCard
                        countryCode="CA"
                        countryName="Canada"
                        FlagComponent={CA}
                        selected={selectedCountry === 'CA'}
                        onClick={() => onSelect('CA')}
                    />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <FlagCard
                        countryCode="EU"
                        countryName="Europe / Other"
                        FlagComponent={EU}
                        selected={selectedCountry === 'EU'}
                        onClick={() => onSelect('EU')}
                    />
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-center"
            >
                <button
                    onClick={onAlreadyClient}
                    className="group relative px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-[#FF7404]/30 transition-all duration-300 font-bold overflow-hidden"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FF7404]/0 via-[#FF7404]/5 to-[#FF7404]/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <span className="relative z-10 flex items-center gap-2">
                        Already a VisQuanta Client?
                        <span className="text-[#FF7404] group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                </button>
            </motion.div>
        </div>
    );
}
