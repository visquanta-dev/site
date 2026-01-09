'use client';

import { US, CA, EU } from 'country-flag-icons/react/3x2';
import { motion } from 'framer-motion';
import FlagCard from './FlagCard';

interface CountrySelectionStepProps {
    selectedCountry: 'US' | 'CA' | 'EU' | null;
    onSelect: (country: 'US' | 'CA' | 'EU') => void;
}

export default function CountrySelectionStep({ selectedCountry, onSelect }: CountrySelectionStepProps) {
    return (
        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-10">
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-3"
                >
                    Where are you located?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg text-white/50"
                >
                    We'll connect you with the right team for your region.
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
        </div>
    );
}
