'use client';

import { useFormContext, Controller } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import SelectionCard from './SelectionCard';
import { Building2, Store, Car, Layers } from 'lucide-react';

export default function DealershipDetailsStep() {
    const { control, watch, setValue, formState: { errors } } = useFormContext();
    const dealerType = watch('dealerType');
    const dealershipSize = watch('dealershipSize');

    const types = [
        { id: 'Franchise', label: 'Franchise', icon: Building2 },
        { id: 'Independent', label: 'Independent', icon: Store },
        { id: 'Pre-Owned', label: 'Pre-Owned', icon: Car },
        { id: 'Auto Group', label: 'Auto Group', icon: Layers },
        { id: 'Other', label: 'Other', icon: Store },
    ];

    const sizes = [
        { id: 'Under 50', label: '< 50 units' },
        { id: '50-150', label: '50-150 units' },
        { id: '150-300', label: '150-300 units' },
        { id: '300+', label: '300+ units' },
    ];

    const getError = (name: string) => errors[name] ? (errors[name]?.message as string) : null;

    return (
        <div className="w-full max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 space-y-20 pb-12">
            <div className="text-center max-w-2xl mx-auto space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Dealership Details</h2>
                <p className="text-xl text-white/40 leading-relaxed font-medium">
                    Tailoring your experience requires a quick look at your business scale.
                </p>
            </div>

            <div className="space-y-12">
                {/* Type Selection */}
                <div className="relative p-1">
                    <div className="flex justify-between items-end mb-8 px-2">
                        <div className="space-y-1">
                            <Label className="text-white/70 uppercase tracking-[0.3em] text-[13px] font-bold">Business Model</Label>
                            <p className="text-sm text-white/30">Select the primary structure of your dealership</p>
                        </div>
                        {getError('dealerType') && <span className="text-[#FF7404] text-sm font-bold bg-[#FF7404]/10 px-4 py-1 rounded-full border border-[#FF7404]/20">{getError('dealerType')}</span>}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {types.map(t => (
                            <SelectionCard
                                key={t.id}
                                title={t.label}
                                icon={t.icon}
                                selected={dealerType === t.id}
                                onClick={() => setValue('dealerType', t.id, { shouldValidate: true })}
                                className="h-full min-h-[160px]"
                            />
                        ))}
                    </div>
                </div>

                {/* Size Selection */}
                <div className="relative p-1">
                    <div className="flex justify-between items-end mb-8 px-2">
                        <div className="space-y-1">
                            <Label className="text-white/70 uppercase tracking-[0.3em] text-[13px] font-bold">Sales Volume</Label>
                            <p className="text-sm text-white/30">Average monthly units sold across all channels</p>
                        </div>
                        {getError('dealershipSize') && <span className="text-[#FF7404] text-sm font-bold bg-[#FF7404]/10 px-4 py-1 rounded-full border border-[#FF7404]/20">{getError('dealershipSize')}</span>}
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {sizes.map(s => (
                            <SelectionCard
                                key={s.id}
                                title={s.label}
                                selected={dealershipSize === s.id}
                                onClick={() => setValue('dealershipSize', s.id, { shouldValidate: true })}
                                className="py-10"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
