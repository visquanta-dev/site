'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
    Mail,
    Phone as PhoneIcon,
    Send,
    ArrowRight,
    MessageSquare,
    Calendar,
    Zap,
    Globe,
    Sparkles,
    ChevronRight,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// --- Assets ---
const inquiryTypes = [
    "Schedule a Demo",
    "Pricing Inquiry",
    "Technical Support",
    "Partnership Opportunity",
    "Media / Press",
    "General Question"
];

const offices = [
    {
        city: "Miami",
        country: "USA",
        isHQ: true,
        address: ["2222 Ponce de Leon Blvd", "3rd Floor", "Miami, FL 33134"],
        phone: "+1 786-686-6554",
        timezone: "EST"
    },
    {
        city: "The Woodlands",
        country: "USA",
        isHQ: false,
        address: ["2001 Timberloch Place", "Suite 500", "TX 77380"],
        timezone: "CST"
    },
    {
        city: "Edinburgh",
        country: "UK",
        isHQ: false,
        address: ["5 South Charlotte Street", "Edinburgh", "EH2 4AN"],
        phone: "020 8058 5269",
        timezone: "GMT"
    }
];

// --- Form Schema ---
const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    phone: z.string().optional(),
    dealership: z.string().optional(),
    inquiryType: z.string().min(1, { message: "Please select an inquiry type." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function ContactPage() {
    // --- Scroll & Mouse Parsallax Logic ---
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 150 };
    const followX = useSpring(mouseX, springConfig);
    const followY = useSpring(mouseY, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 20;
        const y = (e.clientY - rect.top - rect.height / 2) / 20;
        mouseX.set(x);
        mouseY.set(y);
    };

    // --- Form Logic ---
    const [isSubmitted, setIsSubmitted] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            dealership: "",
            message: "",
        },
    });

    const { isSubmitting } = form.formState;

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log(values);
        setIsSubmitted(true);
        toast.success("Message sent successfully!");
    }

    // --- Animations ---
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
        }
    };

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black overflow-x-hidden">
            <Navigation />

            {/* CINEMATIC HERO */}
            <motion.section
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                onMouseMove={handleMouseMove}
                className="relative pt-40 pb-32 overflow-hidden min-h-[80vh] flex items-center"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#030303]" />
                    <motion.div
                        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px]"
                        style={{ x: followX, y: followY }}
                    />

                    {/* Floating Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.08, 0.15, 0.08],
                            x: [0, 50, 0],
                            y: [0, -30, 0]
                        }}
                        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-[#FF7404] rounded-full blur-[180px] pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.1, 0.05]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px] pointer-events-none"
                    />

                    {/* Noise Texture */}
                    <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                </div>

                <div className="container px-4 mx-auto relative z-10">
                    <div className="max-w-5xl mx-auto">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="text-center"
                        >
                            {/* Badge */}
                            <motion.div
                                variants={itemVariants}
                                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl mb-10"
                            >
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Globe className="w-4 h-4 text-[#FF7404]" />
                                </motion.div>
                                <span className="text-zinc-400 text-xs font-bold uppercase tracking-[0.2em]">
                                    Global Automotive AI Partner
                                </span>
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            </motion.div>

                            {/* Headline */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-[-0.04em] leading-[0.85]"
                            >
                                Let's Build <br />
                                <span className="relative">
                                    <motion.span
                                        className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-[#FFB070]"
                                        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                                        style={{ backgroundSize: "200% 200%" }}
                                    >
                                        Together.
                                    </motion.span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF7404] to-transparent"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 1.5, delay: 0.8 }}
                                    />
                                </span>
                            </motion.h1>

                            {/* Subheadline */}
                            <motion.p
                                variants={itemVariants}
                                className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed font-light mb-12"
                            >
                                Whether you're running a single rooftop or a national group, our team of
                                <span className="text-white font-medium"> automotive industry veterans </span>
                                is ready to show you what's possible.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* MAIN CONTENT */}
            <section className="py-24 relative">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:48px_48px]" />

                <div className="container px-4 mx-auto relative z-10">
                    <div className="grid lg:grid-cols-12 gap-12 xl:gap-20">

                        {/* Form Section - 7 cols */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="relative">
                                {/* Form Container */}
                                <div className="relative bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 md:p-12 overflow-hidden">
                                    {/* Decorative Elements */}
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF7404]/5 rounded-full blur-[120px] pointer-events-none" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-[#FF7404]/20 rounded-tl-[2.5rem]" />
                                    <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#FF7404]/20 rounded-br-[2.5rem]" />

                                    {isSubmitted ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-20 relative z-10"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                                className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-8"
                                            >
                                                <CheckCircle2 className="w-12 h-12 text-green-500" />
                                            </motion.div>
                                            <h3 className="text-4xl font-black text-white mb-4 tracking-tight">Message Received</h3>
                                            <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto">
                                                A member of our team will reach out within the next 2 hours.
                                            </p>
                                            <Button
                                                asChild
                                                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all h-auto"
                                            >
                                                <Link href="/">
                                                    Return to Homepage
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </Button>
                                        </motion.div>
                                    ) : (
                                        <div className="relative z-10">
                                            {/* Form Header */}
                                            <div className="mb-10">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-xl bg-[#FF7404]/10 border border-[#FF7404]/20 flex items-center justify-center">
                                                        <MessageSquare className="w-5 h-5 text-[#FF7404]" />
                                                    </div>
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-white">Start a Conversation</h2>
                                                        <p className="text-zinc-500 text-sm">We respond within 2 hours during business hours.</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <Form {...form}>
                                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        {/* Name Field */}
                                                        <FormField
                                                            control={form.control}
                                                            name="name"
                                                            render={({ field }) => (
                                                                <FormItem className="group relative">
                                                                    <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                        Full Name <span className="text-[#FF7404]">*</span>
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="John Smith"
                                                                            className="w-full px-5 py-6 bg-white/[0.03] border-white/10 rounded-xl text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-[#FF7404]/50 focus-visible:bg-white/[0.05] focus-visible:border-[#FF7404]/50 transition-all duration-300"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />

                                                        {/* Email Field */}
                                                        <FormField
                                                            control={form.control}
                                                            name="email"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                        Email Address <span className="text-[#FF7404]">*</span>
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="john@dealership.com"
                                                                            className="w-full px-5 py-6 bg-white/[0.03] border-white/10 rounded-xl text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-[#FF7404]/50 focus-visible:bg-white/[0.05] focus-visible:border-[#FF7404]/50 transition-all duration-300"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>

                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        {/* Phone Field */}
                                                        <FormField
                                                            control={form.control}
                                                            name="phone"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                        Phone Number
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="+1 (555) 123-4567"
                                                                            className="w-full px-5 py-6 bg-white/[0.03] border-white/10 rounded-xl text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-[#FF7404]/50 focus-visible:bg-white/[0.05] focus-visible:border-[#FF7404]/50 transition-all duration-300"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />

                                                        {/* Dealership Field */}
                                                        <FormField
                                                            control={form.control}
                                                            name="dealership"
                                                            render={({ field }) => (
                                                                <FormItem>
                                                                    <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                        Dealership / Company
                                                                    </FormLabel>
                                                                    <FormControl>
                                                                        <Input
                                                                            placeholder="Premier Auto Group"
                                                                            className="w-full px-5 py-6 bg-white/[0.03] border-white/10 rounded-xl text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-[#FF7404]/50 focus-visible:bg-white/[0.05] focus-visible:border-[#FF7404]/50 transition-all duration-300"
                                                                            {...field}
                                                                        />
                                                                    </FormControl>
                                                                    <FormMessage />
                                                                </FormItem>
                                                            )}
                                                        />
                                                    </div>

                                                    {/* Inquiry Type */}
                                                    <FormField
                                                        control={form.control}
                                                        name="inquiryType"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                    How Can We Help? <span className="text-[#FF7404]">*</span>
                                                                </FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger className="w-full px-5 py-6 bg-white/[0.03] border-white/10 rounded-xl text-white focus:ring-1 focus:ring-[#FF7404]/50 focus:bg-white/[0.05] focus:border-[#FF7404]/50 transition-all duration-300 h-auto">
                                                                            <SelectValue placeholder="Select an option" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent className="bg-[#0A0A0A] border-white/10 text-white">
                                                                        {inquiryTypes.map((type, i) => (
                                                                            <SelectItem key={i} value={type} className="focus:bg-[#FF7404]/20 focus:text-white cursor-pointer">
                                                                                {type}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    {/* Message */}
                                                    <FormField
                                                        control={form.control}
                                                        name="message"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-3 block">
                                                                    Your Message <span className="text-[#FF7404]">*</span>
                                                                </FormLabel>
                                                                <FormControl>
                                                                    <Textarea
                                                                        placeholder="Tell us about your dealership, your goals, and how we can help accelerate your growth..."
                                                                        className="w-full px-5 py-4 bg-white/[0.03] border-white/10 rounded-xl text-white placeholder-zinc-600 focus-visible:ring-1 focus-visible:ring-[#FF7404]/50 focus-visible:bg-white/[0.05] focus-visible:border-[#FF7404]/50 transition-all duration-300 resize-none min-h-[140px]"
                                                                        {...field}
                                                                    />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    {/* Submit Button */}
                                                    <Button
                                                        type="submit"
                                                        disabled={isSubmitting}
                                                        className="w-full px-8 py-7 bg-[#FF7404] hover:bg-[#ff8a2b] text-black font-bold text-lg rounded-xl flex items-center justify-center gap-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_40px_-10px_rgba(255,116,4,0.4)] hover:shadow-[0_0_50px_-10px_rgba(255,116,4,0.5)] h-auto"
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                                                Sending...
                                                            </>
                                                        ) : (
                                                            <>
                                                                Send Message
                                                                <Send className="w-5 h-5" />
                                                            </>
                                                        )}
                                                    </Button>

                                                    {/* Privacy Note */}
                                                    <p className="text-center text-zinc-600 text-[10px] uppercase tracking-widest leading-relaxed">
                                                        By submitting, you agree to our <Link href="/trust" className="text-[#FF7404] hover:underline font-bold">Privacy & data handling</Link> practices.
                                                    </p>
                                                </form>
                                            </Form>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column - 5 cols */}
                        <motion.div
                            className="lg:col-span-5 space-y-8"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            {/* Quick Contact Actions */}
                            <div className="space-y-4">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-6">Quick Connect</div>

                                <Link href="/book-demo">
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="p-6 bg-gradient-to-r from-[#FF7404]/10 to-transparent border border-[#FF7404]/20 rounded-2xl cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-[#FF7404] flex items-center justify-center shadow-[0_0_30px_-5px_rgba(255,116,4,0.5)]">
                                                <Calendar className="w-7 h-7 text-black" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-bold text-lg mb-1">Book a Live Demo</div>
                                                <div className="text-zinc-500 text-sm">See AutoMaster Suite in action</div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-[#FF7404] group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </motion.div>
                                </Link>

                                <a href="mailto:info@visquanta.com">
                                    <motion.div
                                        whileHover={{ scale: 1.02, x: 5 }}
                                        className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl cursor-pointer group hover:border-white/20 transition-all"
                                    >
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#FF7404] group-hover:border-[#FF7404] transition-all">
                                                <Mail className="w-7 h-7 text-zinc-400 group-hover:text-black transition-colors" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-white font-bold text-lg mb-1">Email Us Directly</div>
                                                <div className="text-[#FF7404] text-sm font-medium">info@visquanta.com</div>
                                            </div>
                                            <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-[#FF7404] group-hover:translate-x-2 transition-all" />
                                        </div>
                                    </motion.div>
                                </a>
                            </div>

                            {/* Global Offices */}
                            <div className="bg-gradient-to-b from-white/[0.03] to-transparent border border-white/10 rounded-3xl p-8 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF7404]/5 rounded-full blur-[80px]" />

                                <div className="relative z-10">
                                    <div className="flex items-center gap-3 mb-8">
                                        <Globe className="w-5 h-5 text-[#FF7404]" />
                                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Global Presence</span>
                                    </div>

                                    <div className="space-y-6">
                                        {offices.map((office, i) => (
                                            <motion.div
                                                key={i}
                                                whileHover={{ x: 5 }}
                                                className={`relative pl-6 ${i !== offices.length - 1 ? 'pb-6 border-b border-white/5' : ''}`}
                                            >
                                                {/* Accent Line */}
                                                <div className={`absolute left-0 top-0 bottom-0 w-0.5 ${office.isHQ ? 'bg-[#FF7404]' : 'bg-white/10'}`} />

                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-2">
                                                            <span className="text-white font-bold">{office.city}</span>
                                                            {office.isHQ && (
                                                                <span className="text-[8px] font-black text-[#FF7404] bg-[#FF7404]/10 px-2 py-0.5 rounded uppercase tracking-wider">HQ</span>
                                                            )}
                                                        </div>
                                                        <div className="text-zinc-500 text-sm leading-relaxed">
                                                            {office.address.map((line, j) => (
                                                                <span key={j}>{line}{j < office.address.length - 1 && <br />}</span>
                                                            ))}
                                                        </div>
                                                        {office.phone && (
                                                            <div className="flex items-center gap-2 mt-2">
                                                                <PhoneIcon className="w-3.5 h-3.5 text-[#FF7404]" />
                                                                <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-zinc-400 text-sm hover:text-[#FF7404] transition-colors">
                                                                    {office.phone}
                                                                </a>
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="text-[10px] font-mono text-zinc-600 bg-white/5 px-2 py-1 rounded">
                                                        {office.timezone}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Support Info */}
                                    <div className="mt-8 pt-6 border-t border-white/5">
                                        <div className="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/10 rounded-xl">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <div>
                                                <div className="text-green-400 text-sm font-bold">24/7 Client Support</div>
                                                <div className="text-zinc-500 text-xs">Active clients receive priority support</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Response Guarantee */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-br from-[#FF7404]/10 via-[#FF7404]/5 to-transparent border border-[#FF7404]/20 rounded-2xl p-6 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 opacity-10">
                                    <Sparkles className="w-24 h-24 text-[#FF7404]" />
                                </div>
                                <div className="relative z-10 flex items-center gap-5">
                                    <div className="w-14 h-14 rounded-full bg-[#FF7404]/20 flex items-center justify-center">
                                        <Zap className="w-7 h-7 text-[#FF7404]" />
                                    </div>
                                    <div>
                                        <div className="text-white font-bold text-lg mb-1">Fast Response Guarantee</div>
                                        <div className="text-zinc-400 text-sm">All inquiries answered within 2 business hours</div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="py-32 bg-[#030303] relative overflow-hidden border-t border-white/5">
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-[#FF7404] rounded-full blur-[200px] pointer-events-none"
                />

                <div className="container px-4 mx-auto relative z-10">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tight leading-[0.95]">
                            Ready to Outperform <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] to-[#FF9040]">
                                Your Competition?
                            </span>
                        </h2>
                        <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Join the dealerships already using AutoMaster Suite to capture more leads, close more deals, and dominate their market.
                        </p>
                        <Link href="/book-demo">
                            <motion.div
                                whileHover={{ scale: 1.02, boxShadow: "0 0 60px -10px rgba(255,116,4,0.6)" }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-4 px-12 py-6 bg-[#FF7404] text-black font-black text-xl rounded-2xl cursor-pointer shadow-[0_0_50px_-10px_rgba(255,116,4,0.5)]"
                            >
                                Schedule Your Demo
                                <ArrowRight className="w-6 h-6" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
