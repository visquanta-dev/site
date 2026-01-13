'use client';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Does this replace my existing chat tool?",
        answer: "Yes. VisQuanta's AI widget is a complete replacement for legacy chat tools like Drift or Intercom, specifically trained for automotive dealerships."
    },
    {
        question: "How does the AI handle questions it doesn't know?",
        answer: "If the AI encounters a question it can't confidently answer (like a specific service issue or complex financing scenario), it gracefully collects the user's contact info and escalates it to your human team instantly."
    },
    {
        question: "Does it integrate with my CRM?",
        answer: "Absolutely. We integrate with all major automotive CRMs (VinSolutions, eLeads, DealerSocket, etc.) to push leads, notes, and appointment details in real-time."
    },
    {
        question: "Can I customize the greeting?",
        answer: "Yes, you can customize the initial greeting based on the page the visitor is on (e.g., a specific VDP greeting vs. a Service page greeting)."
    },
    {
        question: "Is it mobile friendly?",
        answer: "100%. The widget is fully responsive and optimized for mobile devices, where over 70% of dealership traffic comes from."
    }
];

export default function FAQ() {
    return (
        <section className="py-24 bg-[#020202] border-t border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                        Common <span className="text-[#FF7404]">Questions</span>
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-2xl bg-white/[0.02] px-6">
                            <AccordionTrigger className="text-lg font-bold text-white hover:text-[#FF7404] transition-colors py-6 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
