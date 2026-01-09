'use client';

import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function ContactInfoStep() {
    const { register, formState: { errors } } = useFormContext();

    const getError = (name: string) => errors[name] ? (errors[name]?.message as string) : null;

    return (
        <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-white tracking-tighter mb-3">About You</h2>
                <p className="text-white/50">Tell us a bit about yourself so we can prepare for our chat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-3 col-span-2">
                    <Label htmlFor="fullName" className="text-white/70 uppercase tracking-[0.2em] text-[13px] font-bold pl-1">Full Name</Label>
                    <Input
                        id="fullName"
                        {...register('fullName')}
                        placeholder="John Doe"
                        className="h-16 bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus-visible:ring-[#FF7404]/50 focus-visible:border-[#FF7404] rounded-2xl text-xl px-6 transition-all"
                    />
                    {getError('fullName') && <p className="text-[#FF7404] text-sm pl-1">{getError('fullName')}</p>}
                </div>

                {/* Email */}
                <div className="space-y-3">
                    <Label htmlFor="email" className="text-white/70 uppercase tracking-[0.2em] text-[13px] font-bold pl-1">Work Email</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="john@dealership.com"
                        className="h-16 bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus-visible:ring-[#FF7404]/50 focus-visible:border-[#FF7404] rounded-2xl text-xl px-6 transition-all"
                    />
                    {getError('email') && <p className="text-[#FF7404] text-sm pl-1">{getError('email')}</p>}
                </div>

                {/* Phone */}
                <div className="space-y-3">
                    <Label htmlFor="phone" className="text-white/70 uppercase tracking-[0.2em] text-[13px] font-bold pl-1">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        placeholder="(555) 123-4567"
                        className="h-16 bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus-visible:ring-[#FF7404]/50 focus-visible:border-[#FF7404] rounded-2xl text-xl px-6 transition-all"
                    />
                    {getError('phone') && <p className="text-[#FF7404] text-sm pl-1">{getError('phone')}</p>}
                </div>

                {/* Dealership Name */}
                <div className="space-y-3 col-span-2">
                    <Label htmlFor="dealershipName" className="text-white/70 uppercase tracking-[0.2em] text-[13px] font-bold pl-1">Dealership Name</Label>
                    <Input
                        id="dealershipName"
                        {...register('dealershipName')}
                        placeholder="VisQuanta Motors"
                        className="h-16 bg-white/[0.03] border-white/10 text-white placeholder:text-white/20 focus-visible:ring-[#FF7404]/50 focus-visible:border-[#FF7404] rounded-2xl text-xl px-6 transition-all"
                    />
                    {getError('dealershipName') && <p className="text-[#FF7404] text-sm pl-1">{getError('dealershipName')}</p>}
                </div>
            </div>
        </div>
    );
}
