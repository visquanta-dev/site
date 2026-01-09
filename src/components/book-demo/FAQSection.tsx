'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    { question: "How long is the demo?", answer: "Most demos take about 30 minutes. We'll show you exactly how VisQuanta works and answer any questions." },
    { question: "Do I need to prepare anything?", answer: "No preparation needed. If you know your monthly volume and current pain points, that helps us tailor the walkthrough." },
    { question: "Is there a free trial?", answer: "We offer pilot programs for qualified dealerships. Ask your product specialist during the call." },
    { question: "Does it integrate with my CRM?", answer: "Yes, VisQuanta integrates with all major automotive CRMs tailored to your specific setup." },
];

export default function FAQSection() {
    return (
        <div className="max-w-2xl mx-auto w-full pt-12 border-t border-white/5 mt-12">
            <h3 className="text-xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-xl px-6 bg-white/[0.02] data-[state=open]:border-[#FF7404]/30 transition-colors">
                        <AccordionTrigger className="text-white hover:text-[#FF7404] hover:no-underline text-left py-5 font-bold text-sm tracking-wide">{faq.question}</AccordionTrigger>
                        <AccordionContent className="text-white/60 leading-relaxed pb-6">
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
