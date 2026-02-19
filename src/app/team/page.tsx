'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FinalCTA from '@/components/FinalCTA';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Twitter, Quote, Calendar } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    link?: string;
    email?: string;
    calendly?: string;
}

interface TeamLayer {
    title: string;
    badge: string;
    members: TeamMember[];
}

const teamLayers: TeamLayer[] = [
    {
        title: "Executive Leadership",
        badge: "C-Level Strategy",
        members: [
            {
                name: "Christopher Wilson",
                role: "Co-Founder & COO",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61f76c1b77bb770b669_christopher%2Cwilson%2Cheadshot%2Cvisquanta.webp",
                link: "https://www.linkedin.com/in/christo4wilson/",
                email: "christopher@visquanta.com",
                calendly: "https://calendly.com/christopher-visquanta/30min"
            },
            {
                name: "Aaron Rowley",
                role: "Co-Founder & CTO",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61e609317cfb8b63364_aaron%2Crowley%2Cheadshot%2Cvisquanta.webp",
                link: "https://www.linkedin.com/in/aaron-rowley-407341241/",
                email: "aaron@visquanta.com",
                calendly: "https://calendly.com/aaron-visquanta/virtual_coffee"
            },
            {
                name: "William Voyles",
                role: "Co-Founder & CSO",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61ef7f05cf2726e525e_william%2Cvoyles%2Cheadshot%2Cvisquanta.webp",
                link: "https://www.linkedin.com/in/wvoyles/",
                email: "william@visquanta.com",
                calendly: "https://calendly.com/william-visquanta/visquanta-discovery-call"
            },
            {
                name: "Lavar Harper",
                role: "Co-Founder",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac64f14c562cf25aec7e4_lavar%2Charper%2Cheadshot%2Cvisquanta.webp",
            },

            {
                name: "Matt Nixon",
                role: "Co-Founder & CFO",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61edcc6a5a093ce6245_matt%2Cnixon%2Cheadshot%2Cvisquanta.webp",
                link: "https://www.linkedin.com/in/mattnixonmarketingguy/",
                email: "matt@visquanta.com",
                calendly: "https://calendly.com/matt-visquanta/30min"
            }
        ]
    },
    {
        title: "Foundational Strategy",
        badge: "Director Level",
        members: [
            {
                name: "Charles Snodgrass",
                role: "Director of Client Success",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61fc9b8fa6d06815ceb_charles%2Csnodgrass%2Cheadshot%2Cvisquanta.webp",
                link: "https://www.linkedin.com/in/charles-snodgrass-a99b947b/",
                email: "csnodgrass@visquanta.com",
                calendly: "https://calendly.com/csnodgrass-visquanta/visquanta-discovery-call"
            },
            {
                name: "Sia Small",
                role: "Director of Business Growth",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68cfc815d913fc58d63cc49d_Sia_Small.avif",
                link: "https://www.linkedin.com/in/sia-small-256329198/",
                email: "ssmall@visquanta.com",
                calendly: "https://calendly.com/ssmall-visquanta/discovery"
            },
            {
                name: "Dwayne Roemer",
                role: "Director of Canadian Operations",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4cd9a69563d82a59b270f_WhatsApp_Image_2025-10-07_at_01.28.06_8f1c8935-modified-removebg-preview.avif",
                link: "https://www.linkedin.com/in/dwayne-roemer-ba29a79/",
                email: "droemer@visquanta.com",
                calendly: "https://calendly.com/droemer-visquanta/30min"
            },
            {
                name: "Murray Wilkinson",
                role: "Director of UK Operations",
                image: "/team/murray.png",
                link: "https://www.linkedin.com/in/murraywilkinsonaisalesenablement/",
                email: "mwilkinson@visquanta.com"
            },
            {
                name: "Clint Annis",
                role: "Implementation Lead",
                image: "/team/clint-annis.png",
                link: "#",
                email: "cannis@visquanta.com",
                calendly: "https://calendly.com/cannis-visquanta/30min"
            },
            {
                name: "Kyle Roath",
                role: "Systems Engineer",
                image: "/team/kyle-roath.png",
                email: "kroath@visquanta.com"

            }
        ]
    },
    {
        title: "Dealer Success & Ops",
        badge: "Execution Excellence",
        members: [
            {
                name: "Chloe Johncock",
                role: "Account Operations Manager",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6850417609bb855d13026da3_Chloe_JohnCock_Visquanta.avif",
                link: "https://www.linkedin.com/in/chloe-johncock-a48114122/",
                email: "cjohncock@visquanta.com",

            },
            {
                name: "Marion Ueland",
                role: "Account Operations",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4d024bdd582aff727d7f8_Screenshot_2025-08-28_180752-removebg-preview.avif",
                email: "mueland@visquanta.com",

            },

            {
                name: "Ellison Riviera",
                role: "Client Account Lead",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/6850416b0314723f40a489d0_Ellison_Riviera-removebg-preview-modified.avif",
                link: "https://www.linkedin.com/in/ellison-rivera-8162092a3/",
                email: "e.rivera@visquanta.com",

            },
            {
                name: "John Cabatingan",
                role: "Client Account Specialist",
                image: "https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/68e4d1ae44a7d738f878e7c6_20250806_173050-removebg-preview-modified.avif",
                email: "jcabatingan@visquanta.com",

            },

            {
                name: "Jonas Saycon",
                role: "Client Account Specialist",
                image: "/team/jonas-saycon.png",
                email: "jsaycon@visquanta.com",

            }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
};

export default function TeamPage() {
    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black relative overflow-x-hidden">
            <Navigation />

            {/* JSON-LD for E-E-A-T (Person Schema) */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "The VisQuanta Team",
                        "description": "Meet the experts behind the automotive revenue engine.",
                        "mainEntity": teamLayers.flatMap(layer =>
                            layer.members.map(member => ({
                                "@type": "Person",
                                "name": member.name,
                                "jobTitle": member.role,
                                "image": member.image.startsWith('http') ? member.image : `https://www.visquanta.com${member.image}`,
                                "email": member.email || "info@visquanta.com",
                                "url": `https://www.visquanta.com/team#${member.name.toLowerCase().replace(/\s+/g, '-')}`,
                                "sameAs": member.link && member.link !== "#" ? [member.link] : [],
                                "affiliation": {
                                    "@type": "Organization",
                                    "name": "VisQuanta",
                                    "url": "https://www.visquanta.com"
                                }
                            }))
                        )
                    })
                }}
            />

            {/* Premium Background Aura */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#FF7404]/5 rounded-full blur-[160px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[160px]" />
            </div>

            <section className="relative pt-56 pb-24 z-10">
                <div className="container px-4 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-6xl mx-auto"
                    >
                        {/* New Trust Badge */}
                        <div className="flex justify-center mb-20">
                            <div className="inline-flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-full px-6 py-2 backdrop-blur-md">
                                <div className="flex -space-x-2">
                                    {teamLayers[0].members.slice(0, 3).map((m, i) => (
                                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#020202] overflow-hidden bg-zinc-800">
                                            <img src={m.image} alt="" className="w-full h-full object-cover grayscale" />
                                        </div>
                                    ))}
                                </div>
                                <span className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                                    Strategic Automotive Leaders
                                </span>
                            </div>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black text-white mb-24 tracking-tighter text-center uppercase leading-[0.85]">
                            The Team Driving <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-white">
                                VisQuanta Forward.
                            </span>
                        </h1>

                        {/* Experience Section - The Cinematic Merge */}
                        <div className="relative mt-24 mb-32">
                            {/* Background Accents */}
                            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#FF7404]/30 to-transparent" />

                            <div className="grid lg:grid-cols-12 gap-12 py-24 items-stretch relative">
                                {/* Experience Stat Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:col-span-5 bg-white/[0.02] border border-white/5 rounded-[3rem] p-12 relative overflow-hidden flex flex-col justify-center group"
                                >

                                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[100px]" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-scanner pointer-events-none" />

                                    <div className="relative z-10">
                                        <div className="flex items-baseline gap-4 mb-2">
                                            <div className="text-9xl md:text-[12rem] font-black text-white leading-none tracking-tighter hover:text-[#FF7404] transition-colors duration-700 drop-shadow-[0_0_30px_rgba(255,116,4,0.2)]">76</div>
                                            <div className="text-2xl font-black text-[#FF7404] uppercase tracking-widest animate-pulse">+</div>
                                        </div>

                                        <div className="inline-flex items-center gap-2 bg-[#FF7404] text-black text-[10px] font-black uppercase tracking-[0.3em] px-4 py-2 mb-10 rounded-sm shadow-[0_0_30px_rgba(255,116,4,0.4)]">
                                            Combined Industry Tenure
                                        </div>

                                        <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-sm mb-12">
                                            The collective power of decades spent on the showroom floor, in the service bay, and at the boardroom table. <span className="text-white font-bold semi-italic underline decoration-[#FF7404]/40">Real-world results, not theory.</span>
                                        </p>

                                        {/* Precision Metrics */}
                                        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-8">
                                            <div>
                                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Sales_Ops</div>
                                                <div className="text-white font-black uppercase text-xs">Expert_Level</div>
                                            </div>
                                            <div>
                                                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Service_Finance</div>
                                                <div className="text-white font-black uppercase text-xs">Strategic_Lead</div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Leadership Quote Card */}
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="lg:col-span-7 bg-[#0A0A0A] border border-white/10 p-12 lg:p-16 rounded-[3rem] relative group flex flex-col justify-between overflow-hidden"
                                >
                                    {/* Glassmorphic Patterns */}
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,116,4,0.05),transparent)] pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.01] to-transparent -translate-x-full group-hover:animate-scanner pointer-events-none delay-500" />
                                    <div className="absolute top-12 right-12 opacity-10">
                                        <Quote className="w-24 h-24 text-white hover:text-[#FF7404] transition-colors duration-700" />
                                    </div>

                                    <div className="relative z-10 mb-12">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[8px] font-mono text-zinc-500 uppercase tracking-widest mb-8">
                                            <div className="w-1 h-1 rounded-full bg-[#FF7404] animate-pulse" />
                                            Leadership_Foundry // Verified // 2024_STRAT
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-[1] uppercase max-w-2xl">
                                            "Built for dealerships, by people who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7404] via-[#FF9040] to-white">know the business</span> inside out"
                                        </h2>
                                        <p className="text-zinc-400 text-xl font-light leading-relaxed italic border-l-2 border-[#FF7404]/40 pl-8">
                                            "At VisQuanta, we're not outsiders; we've lived and breathed the car business ourselves. Our team knows what it takes to keep dealerships running, because we've been in your shoes. Everything we build is shaped by first-hand experience."
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-6">
                                            <div className="relative">
                                                <div className="absolute inset-[-4px] rounded-full border border-[#FF7404]/30 animate-pulse" />
                                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_20px_rgba(255,116,4,0.2)]">
                                                    <img
                                                        src="https://cdn.prod.website-files.com/67f4e135760df55ea3128ae5/684ac61f76c1b77bb770b669_christopher%2Cwilson%2Cheadshot%2Cvisquanta.webp"
                                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                                        alt="Christopher Wilson"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="text-white font-black uppercase tracking-[0.2em] text-sm">Christopher Wilson</div>
                                                <div className="text-[#FF7404] text-[10px] font-mono uppercase tracking-widest">Co-Founder & COO</div>
                                            </div>
                                        </div>


                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Layered Grid Rendering */}
                        <div className="pt-32">
                            {teamLayers.map((layer, layerIdx) => (
                                <div key={layerIdx} className="mb-40 last:mb-0">
                                    {/* Layer Header */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 px-10"
                                    >
                                        <div>
                                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7404]/10 border border-[#FF7404]/20 text-[#FF7404] text-[10px] font-black uppercase tracking-widest mb-4">
                                                Layer 0{layerIdx + 1} // {layer.badge}
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                                {layer.title}
                                            </h2>
                                        </div>
                                        <div className="h-px flex-grow bg-gradient-to-r from-[#FF7404]/20 to-transparent mx-8 hidden md:block" />
                                        <div className="text-zinc-600 font-mono text-xs uppercase tracking-[0.2em]">
                                            {layerIdx === 0 ? "4" : layer.members.length} Active Members
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto"
                                    >
                                        {layer.members.map((member, i) => {
                                            const isInteractive = !!(member.link || member.email || member.calendly);
                                            return (
                                                <motion.div
                                                    key={i}
                                                    variants={itemVariants}
                                                    className={`relative w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] h-[280px] bg-[#0A0A0A] border border-white/5 rounded-[2.5rem] p-8 transition-all duration-700 overflow-hidden shadow-2xl ${isInteractive ? 'group hover:border-[#FF7404]/40 cursor-custom-pointer' : 'cursor-default'}`}
                                                >
                                                    {/* Advanced Hover Glow */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-[#FF7404]/0 via-[#FF7404]/[0.01] to-[#FF7404]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                    <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#FF7404]/10 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                                    {/* Scanning Flare Effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover:animate-scanner pointer-events-none" />

                                                    <div className="relative z-10 flex items-center justify-between h-full gap-4">
                                                        <div className="flex flex-col min-w-0 flex-1">
                                                            <h3 className={`text-xl lg:text-2xl font-black text-white mb-2 leading-none tracking-tight transition-all duration-500 uppercase ${isInteractive ? 'group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#FF7404]' : ''}`}>
                                                                {member.name.split(' ')[0]}<br />
                                                                {member.name.substring(member.name.indexOf(' ') + 1)}
                                                            </h3>
                                                            <div className={`w-8 h-[2px] bg-[#FF7404]/40 mb-4 transition-all duration-700 ${isInteractive ? 'group-hover:w-16' : ''}`} />
                                                            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] leading-tight mb-6 h-8">
                                                                {member.role}
                                                            </p>

                                                            <div className="flex items-center gap-2">
                                                                {member.link && (
                                                                    <a
                                                                        href={member.link}
                                                                        title="LinkedIn Profile"
                                                                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-[#FF7404] hover:text-black hover:scale-110 transition-all duration-500"
                                                                    >
                                                                        <Linkedin className="w-3.5 h-3.5" />
                                                                    </a>
                                                                )}
                                                                {member.email && (
                                                                    <a
                                                                        href={`mailto:${member.email}`}
                                                                        title="Send Email"
                                                                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-[#FF7404] hover:text-black hover:scale-110 transition-all duration-500"
                                                                    >
                                                                        <Mail className="w-3.5 h-3.5" />
                                                                    </a>
                                                                )}
                                                                {member.calendly && (
                                                                    <a
                                                                        href={member.calendly}
                                                                        title="Book Meeting"
                                                                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-500 hover:bg-[#FF7404] hover:text-black hover:scale-110 transition-all duration-500"
                                                                    >
                                                                        <Calendar className="w-3.5 h-3.5" />
                                                                    </a>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {/* Premium Avatar Composition */}
                                                        <div className="relative shrink-0">
                                                            {/* Pulsing Orbital Ring */}
                                                            <div className="absolute inset-[-12px] rounded-full border border-[#FF7404]/20 opacity-0 group-hover:opacity-100 group-hover:scale-110 animate-pulse transition-all duration-700" />
                                                            <div className="absolute inset-[-6px] rounded-full border border-[#FF7404]/40 opacity-0 group-hover:opacity-100 transition-all duration-700" />

                                                            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900 relative z-10 shadow-2xl transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2">
                                                                <img
                                                                    src={member.image}
                                                                    alt={member.name}
                                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
                                                                />
                                                            </div>

                                                            {/* Corner Accents */}
                                                            <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-[#FF7404]/0 group-hover:border-[#FF7404]/40 transition-all duration-700 translate-x-4 -translate-y-4" />
                                                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-[#FF7404]/0 group-hover:border-[#FF7404]/40 transition-all duration-700 -translate-x-4 translate-y-4" />
                                                        </div>
                                                    </div>

                                                    {/* Global Card Accent */}
                                                    <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-[#FF7404]" />
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <FinalCTA />


            <Footer />
        </main>
    );
}
