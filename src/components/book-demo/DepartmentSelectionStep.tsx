'use client';

import { useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import SelectionCard from './SelectionCard';
import { MonitorPlay, Users, Code2, Receipt, Briefcase } from 'lucide-react';

export default function DepartmentSelectionStep() {
    const { watch, setValue, formState: { errors } } = useFormContext();
    const department = watch('department');

    const departments = [
        { id: 'Sales', label: 'See a Product Demo', description: 'Explore the VisQuanta platform', icon: MonitorPlay },
        { id: 'Account Management', label: 'Existing Customer Support', description: 'Chat with your success manager', icon: Users },
        { id: 'Tech', label: 'Technical & Integrations', description: 'API, CRM setup, or bugs', icon: Code2 },
        { id: 'Finance', label: 'Billing & Contracts', description: 'Invoices and payments', icon: Receipt },
        { id: 'Management', label: 'Strategic Partnerships', description: 'High-level business discussions', icon: Briefcase },
    ];

    const getError = (name: string) => errors[name] ? (errors[name]?.message as string) : null;

    return (
        <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 space-y-12">
            <div className="text-center max-w-xl mx-auto">
                <h2 className="text-3xl font-black text-white tracking-tighter mb-3">How can we help?</h2>
                <p className="text-white/50">Select the department you need to speak with.</p>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-baseline px-1">
                    <Label className="text-white/70 uppercase tracking-[0.2em] text-[13px] font-bold">Select Department</Label>
                    {getError('department') && <span className="text-[#FF7404] text-sm">{getError('department')}</span>}
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {departments.map((dept) => (
                        <SelectionCard
                            key={dept.id}
                            title={dept.label}
                            description={dept.description}
                            icon={dept.icon}
                            selected={department === dept.id}
                            onClick={() => setValue('department', dept.id, { shouldValidate: true })}
                            className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
