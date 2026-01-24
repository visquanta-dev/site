'use client';

import { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ChevronRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

import StepProgress from './StepProgress';
import CountrySelectionStep from './CountrySelectionStep';
import ContactInfoStep from './ContactInfoStep';
import DealershipDetailsStep from './DealershipDetailsStep';
import DepartmentSelectionStep from './DepartmentSelectionStep';
import SalesRepSelectionStep from './SalesRepSelectionStep';
import SalesRepCard from './SalesRepCard';
import CalendlyEmbed from './CalendlyEmbed';
import { motion, AnimatePresence } from 'framer-motion';

// Schema
const schema = z.object({
    fullName: z.string().min(2, "Full Name is required"),
    email: z.string().email("Valid email is required"),
    phone: z.string().min(10, "Valid phone number is required"),
    dealershipName: z.string().min(2, "Dealership Name is required"),
    dealerType: z.string().optional(),
    dealershipSize: z.string().optional(),
    howDidYouHear: z.string().optional(),
    department: z.string().optional(),
    salesRep: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function BookingWizard() {
    const [step, setStep] = useState(1);
    const [country, setCountry] = useState<'US' | 'CA' | 'EU' | null>(null);
    const [targetCalendlyUrl, setTargetCalendlyUrl] = useState<string>('');

    const isCanada = country === 'CA';
    const totalSteps = isCanada ? 3 : 6;

    const form = useForm<FormData>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: {
            fullName: '',
            email: '',
            phone: '',
            dealershipName: '',
            department: '',
            salesRep: '',
        }
    });

    const { trigger, getValues, watch } = form;
    const formData = getValues();
    const department = watch('department');

    // Auto-detect country
    useEffect(() => {
        const detectCountry = async () => {
            try {
                // Using ipapi.co for reliable country detection
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();

                if (data.country_code) {
                    if (data.country_code === 'CA') {
                        setCountry('CA');
                        setTargetCalendlyUrl(REP_DETAILS.DWAYNE.calendly);
                        setStep(2);
                    } else if (['US', 'UM', 'VI', 'PR', 'GU', 'AS', 'MP'].includes(data.country_code)) {
                        setCountry('US');
                        setStep(2);
                    } else if (['GB', 'FR', 'DE', 'IT', 'ES', 'NL', 'BE', 'SE', 'DK', 'NO', 'FI', 'IE'].includes(data.country_code)) {
                        // Map common EU/Western countries to EU flow
                        setCountry('EU');
                        setStep(2);
                    } else {
                        // Default fallback logic or let them choose if unsure
                        // For now we won't force 'Other' to avoid miscategorizing, 
                        // unless we want to default anything else to 'EU/International'
                    }
                }
            } catch (error) {
                console.warn('Country detection failed, falling back to manual selection', error);
            }
        };

        // Only run if we haven't selected yet (step 1)
        if (step === 1 && !country) {
            detectCountry();
        }
    }, [step, country]);

    // Mapping
    const REP_DETAILS = {
        DWAYNE: {
            name: "Dwayne Roemer",
            role: "Director of Canadian Operations",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4cd9a69563d82a59b270f_WhatsApp_Image_2025-10-07_at_01.28.06_8f1c8935-modified-removebg-preview.avif",
            calendly: "https://calendly.com/droemer-visquanta/30min"
        },
        WILLIAM: {
            name: "William Voyles",
            role: "Co-Founder & CSO",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp",
            calendly: "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo"
        },
        SIA: {
            name: "Sia Small",
            role: "Director of Business Growth",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68cfc815d913fc58d63cc49d_Sia_Small.avif",
            calendly: "https://calendly.com/ssmall-visquanta/book-a-product-demo-45-min"
        },
        CHARLES: {
            name: "Charles Snodgrass",
            role: "Director of Client Success",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp",
            calendly: "https://calendly.com/csnodgrass-visquanta/visquanta-discovery-call"
        },
        AARON: {
            name: "Aaron Rowley",
            role: "Co-Founder & CTO",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61e609317cfb8b63364_aaron%2Crowley%2Cheadshot%2Cvisquanta.webp",
            calendly: "https://calendly.com/aaron-visquanta/virtual_coffee"
        },
        MATT: {
            name: "Matt Nixon",
            role: "Co-Founder & CFO",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61edcc6a5a093ce6245_matt%2Cnixon%2Cheadshot%2Cvisquanta.webp",
            calendly: "https://calendly.com/matt-visquanta/30min"
        },
        CHRISTOPHER: {
            name: "Christopher Wilson",
            role: "Co-Founder & COO",
            image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61f76c1b77bb770b669_christopher%2Cwilson%2Cheadshot%2Cvisquanta.webp",
            calendly: "https://calendly.com/christopher-visquanta/30min"
        },
        CLINT: {
            name: "Clint Annis",
            role: "Integrations Lead",
            image: "/team/clint-annis.png",
            calendly: "https://calendly.com/cannis-visquanta/30min"
        },
        SALES_TEAM: {
            name: "Product Specialist Team",
            role: "Assigned via Round Robin",
            isTeam: true,
            images: [
                "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp",
                "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68cfc815d913fc58d63cc49d_Sia_Small.avif"
            ],
            calendly: "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo" // Placeholder for Round Robin
        },
        SUCCESS_TEAM: {
            name: "Client Success Team",
            role: "Assigned via Round Robin",
            isTeam: true,
            images: [
                "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp",
                "/team/clint-annis.png"
            ],
            calendly: "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo" // Placeholder
        }
    };

    const handleCountrySelect = (code: 'US' | 'CA' | 'EU') => {
        setCountry(code);
        if (code === 'CA') {
            setTargetCalendlyUrl(REP_DETAILS.DWAYNE.calendly);
            setStep(2);
        } else {
            setStep(2);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNext = async () => {
        let isValid = false;

        if (step === 2) {
            isValid = await trigger(['fullName', 'email', 'phone', 'dealershipName']);
            if (isValid) {
                if (isCanada) {
                    setStep(3);
                } else {
                    setStep(3);
                }
            }
        } else if (step === 3) {
            // Details
            isValid = await trigger(['dealerType', 'dealershipSize']);
            if (isValid) setStep(4);
        } else if (step === 4) {
            // Dept
            isValid = await trigger('department');
            if (isValid) {
                const dept = getValues('department');
                if (dept === 'Sales' || dept === 'Account Management' || dept === 'Finance') {
                    setStep(5);
                } else {
                    switch (dept) {
                        case 'Tech': setTargetCalendlyUrl(REP_DETAILS.AARON.calendly); break;
                        case 'Management': setTargetCalendlyUrl(REP_DETAILS.CHRISTOPHER.calendly); break;
                        default: setTargetCalendlyUrl(REP_DETAILS.WILLIAM.calendly);
                    }
                    setStep(6);
                }
            }
        } else if (step === 5) {
            // Rep
            isValid = await trigger('salesRep');
            if (isValid) {
                const rep = getValues('salesRep');
                if (rep === 'SalesTeam') setTargetCalendlyUrl(REP_DETAILS.SALES_TEAM.calendly);
                else if (rep === 'SuccessTeam') setTargetCalendlyUrl(REP_DETAILS.SUCCESS_TEAM.calendly);
                else if (rep === 'William') setTargetCalendlyUrl(REP_DETAILS.WILLIAM.calendly);
                else if (rep === 'Sia') setTargetCalendlyUrl(REP_DETAILS.SIA.calendly);
                else if (rep === 'Charles') setTargetCalendlyUrl(REP_DETAILS.CHARLES.calendly);
                else if (rep === 'Clint') setTargetCalendlyUrl(REP_DETAILS.CLINT.calendly);
                else if (rep === 'Matt') setTargetCalendlyUrl(REP_DETAILS.MATT.calendly);
                else if (rep === 'Christopher') setTargetCalendlyUrl(REP_DETAILS.CHRISTOPHER.calendly);
                setStep(6);
            }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        if (step === 6 && !isCanada && (department !== 'Sales' && department !== 'Account Management' && department !== 'Finance')) {
            setStep(4);
        } else if (step > 1) {
            setStep(step - 1);
        }
    };

    // Helper to get rep info for final step
    const getFinalRep = () => {
        if (isCanada) return REP_DETAILS.DWAYNE;

        const rep = getValues('salesRep');
        const dept = getValues('department');

        if (rep === 'SalesTeam') return REP_DETAILS.SALES_TEAM;
        if (rep === 'SuccessTeam') return REP_DETAILS.SUCCESS_TEAM;
        if (rep === 'William') return REP_DETAILS.WILLIAM;
        if (rep === 'Sia') return REP_DETAILS.SIA;
        if (rep === 'Charles') return REP_DETAILS.CHARLES;
        if (rep === 'Clint') return REP_DETAILS.CLINT;
        if (rep === 'Matt') return REP_DETAILS.MATT;
        if (rep === 'Christopher') return REP_DETAILS.CHRISTOPHER;

        // Fallback or Direct routing
        if (dept === 'Tech') return REP_DETAILS.AARON;
        if (dept === 'Management') return REP_DETAILS.CHRISTOPHER;

        return REP_DETAILS.WILLIAM; // Default
    };

    return (
        <FormProvider {...form}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">

                {/* Progress Bar */}
                {step > 1 && (
                    <div className="max-w-xl mx-auto mb-8 lg:mb-12">
                        <StepProgress currentStep={step} totalSteps={totalSteps} />
                    </div>
                )}

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <CountrySelectionStep
                                    selectedCountry={country}
                                    onSelect={handleCountrySelect}
                                    onAlreadyClient={() => setStep(4)}
                                />
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <ContactInfoStep />
                            </motion.div>
                        )}

                        {step === 3 && !isCanada && (
                            <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <DealershipDetailsStep />
                            </motion.div>
                        )}

                        {step === 3 && isCanada && (
                            <motion.div key="step3-ca" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="max-w-4xl mx-auto space-y-8">
                                    <div className="max-w-md mx-auto">
                                        <SalesRepCard
                                            name={REP_DETAILS.DWAYNE.name}
                                            role={REP_DETAILS.DWAYNE.role}
                                            image={REP_DETAILS.DWAYNE.image}
                                            selected={true}
                                            onClick={() => { }}
                                        />
                                    </div>
                                    <CalendlyEmbed
                                        url={targetCalendlyUrl}
                                        prefill={{
                                            name: formData.fullName,
                                            email: formData.email,
                                            phone: formData.phone,
                                            dealership: formData.dealershipName
                                        }}
                                    />
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <DepartmentSelectionStep />
                            </motion.div>
                        )}

                        {step === 5 && (
                            <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <SalesRepSelectionStep />
                            </motion.div>
                        )}

                        {step === 6 && (
                            <motion.div key="step6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                <div className="max-w-4xl mx-auto space-y-12">
                                    <div className="text-center space-y-8">
                                        <h2 className="text-3xl font-black text-white tracking-tighter">Confirm Your 15-Min Walkthrough</h2>
                                        <div className="max-w-md mx-auto pointer-events-none">
                                            {/* Show the resolved rep card in a 'selected' state */}
                                            <SalesRepCard
                                                name={getFinalRep().name}
                                                role={getFinalRep().role}
                                                image={(getFinalRep() as any).image}
                                                images={(getFinalRep() as any).images}
                                                selected={true}
                                                onClick={() => { }}
                                            />
                                        </div>
                                    </div>

                                    <div className="border-t border-white/10 pt-12">
                                        <CalendlyEmbed
                                            url={targetCalendlyUrl}
                                            prefill={{
                                                name: formData.fullName,
                                                email: formData.email,
                                                phone: formData.phone,
                                                dealership: formData.dealershipName
                                            }}
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Navigation Buttons */}
                {step > 1 && (
                    <div className="fixed bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent backdrop-blur-2xl z-50 md:static md:bg-transparent md:backdrop-blur-none md:p-0 md:mt-24 animate-in slide-in-from-bottom-full duration-700">
                        <div className="max-w-xl mx-auto flex items-center justify-between gap-12">
                            <Button
                                variant="ghost"
                                onClick={handleBack}
                                className="group px-0 h-auto text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white bg-transparent hover:bg-transparent transition-all flex items-center gap-3"
                            >
                                <ChevronRight className="w-3.5 h-3.5 rotate-180 transition-transform group-hover:-translate-x-1" />
                                Back
                            </Button>

                            {!((isCanada && step === 3) || step === 6) && (
                                <motion.div
                                    className="flex-1 md:flex-none"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        onClick={handleNext}
                                        className="relative w-full md:w-auto h-12 px-8 rounded-xl bg-[#FF7404] text-black hover:bg-white hover:text-black font-black text-[10px] uppercase tracking-[0.2em] shadow-[0_15px_30px_-10px_rgba(255,116,4,0.4)] transition-all duration-500 overflow-hidden group border-none"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                                        <span className="relative z-10">Continue</span>

                                        <div className="relative z-10 w-5 h-5 rounded-lg bg-black/10 flex items-center justify-center ml-3 transition-colors group-hover:bg-black/5">
                                            <Zap className="w-3 h-3 fill-current transition-transform group-hover:rotate-12" />
                                        </div>

                                        {/* Pulse Dot */}
                                        <span className="absolute top-2 right-2 w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white] animate-pulse" />

                                        {/* Bottom Glow */}
                                        <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Button>
                                </motion.div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </FormProvider>
    );
}

function FormSummary({ formData }: { formData: any }) {
    return null;
}
