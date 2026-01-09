'use client';

import { useFormContext } from 'react-hook-form';
import SalesRepCard from './SalesRepCard';

export default function SalesRepSelectionStep() {
    const { watch, setValue, formState: { errors } } = useFormContext();
    const salesRep = watch('salesRep');
    const department = watch('department');

    const getError = (name: string) => errors[name] ? (errors[name]?.message as string) : null;

    const isSales = department === 'Sales' || department === ''; // Default to sales
    const isAccountManagement = department === 'Account Management';
    const isFinance = department === 'Finance';

    return (
        <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-20 pb-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase">Pick Your Path</h2>
                <p className="text-xl text-white/40 leading-relaxed font-medium">
                    Select a specific specialist or use our <strong>Optimized Matching</strong> to book with the next available expert.
                </p>
                {getError('salesRep') && <p className="text-[#FF7404] text-sm mt-4 font-bold bg-[#FF7404]/10 inline-block px-6 py-2 rounded-full border border-[#FF7404]/20">{getError('salesRep')}</p>}
            </div>

            {/* Primary Option: Round Robin Team */}
            <div className="max-w-xl mx-auto">
                <div className="flex justify-between items-baseline mb-6 px-1">
                    <span className="text-white/30 uppercase tracking-[0.3em] text-[10px] font-bold">Optimized Booking (Recommended)</span>
                </div>
                {isSales && (
                    <SalesRepCard
                        name="Product Specialist Team"
                        role="Matches you with the best fit for your CRM"
                        selected={salesRep === 'SalesTeam'}
                        onClick={() => setValue('salesRep', 'SalesTeam', { shouldValidate: true })}
                        images={[
                            "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp",
                            "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68cfc815d913fc58d63cc49d_Sia_Small.avif"
                        ]}
                    />
                )}
                {isAccountManagement && (
                    <SalesRepCard
                        name="Client Success Team"
                        role="Get immediate implementation support"
                        selected={salesRep === 'SuccessTeam'}
                        onClick={() => setValue('salesRep', 'SuccessTeam', { shouldValidate: true })}
                        images={[
                            "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp",
                            "/team/clint-annis.png"
                        ]}
                    />
                )}
                {isFinance && (
                    <div className="p-12 text-center bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                        <p className="text-white/40 italic">Direct booking available with CFO or COO below.</p>
                    </div>
                )}
            </div>

            <div className="relative">
                <div className="absolute inset-x-0 top-1/2 h-px bg-white/5" />
                <span className="relative z-10 mx-auto px-8 bg-[#0a0a0a] text-white/20 uppercase tracking-[0.4em] text-[10px] font-black w-fit block">Or meet our specialists</span>
            </div>

            {/* Secondary Options: Individual Experts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                {isFinance ? (
                    <>
                        <SalesRepCard
                            name="Matt Nixon"
                            role="Co-Founder & CFO"
                            selected={salesRep === 'Matt'}
                            onClick={() => setValue('salesRep', 'Matt', { shouldValidate: true })}
                            image="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61edcc6a5a093ce6245_matt%2Cnixon%2Cheadshot%2Cvisquanta.webp"
                        />
                        <SalesRepCard
                            name="Christopher Wilson"
                            role="Co-Founder & COO"
                            selected={salesRep === 'Christopher'}
                            onClick={() => setValue('salesRep', 'Christopher', { shouldValidate: true })}
                            image="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61f76c1b77bb770b669_christopher%2Cwilson%2Cheadshot%2Cvisquanta.webp"
                        />
                    </>
                ) : isAccountManagement ? (
                    <>
                        <SalesRepCard
                            name="Charles Snodgrass"
                            role="Director of Client Success"
                            selected={salesRep === 'Charles'}
                            onClick={() => setValue('salesRep', 'Charles', { shouldValidate: true })}
                            image="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp"
                        />
                        <SalesRepCard
                            name="Clint Annis"
                            role="Integrations Lead"
                            selected={salesRep === 'Clint'}
                            onClick={() => setValue('salesRep', 'Clint', { shouldValidate: true })}
                            image="/team/clint-annis.png"
                        />
                    </>
                ) : (
                    <>
                        <SalesRepCard
                            name="William Voyles"
                            role="Co-Founder & CSO"
                            selected={salesRep === 'William'}
                            onClick={() => setValue('salesRep', 'William', { shouldValidate: true })}
                            image="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp"
                        />
                        <SalesRepCard
                            name="Sia Small"
                            role="Director of Business Growth"
                            selected={salesRep === 'Sia'}
                            onClick={() => setValue('salesRep', 'Sia', { shouldValidate: true })}
                            image="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68cfc815d913fc58d63cc49d_Sia_Small.avif"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
