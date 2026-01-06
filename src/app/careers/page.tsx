"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
    Globe,
    Cpu,
    Rocket,
    Users,
    Code,
    Palette,
    TrendingUp,
    ChevronDown,
    Star,
} from "lucide-react";

const roles = [
    {
        id: "tech",
        icon: Code,
        title: "Technical Team",
        subtitle: "Frontend, Backend, AI, 3D, Data Engineering",
        requirements: [
            "Passion for space technology & AI",
            "Strong problem-solving mindset",
            "Ability to work in fast-paced startup",
        ],
    },
    {
        id: "design",
        icon: Palette,
        title: "UI/UX & Design",
        subtitle: "Product Design, Visual Design, Motion",
        requirements: [
            "Passion for space technology & AI",
            "Strong problem-solving mindset",
            "Ability to work in fast-paced startup",
        ],
    },
    {
        id: "growth",
        icon: TrendingUp,
        title: "Marketing & Growth",
        subtitle: "User Acquisition, Brand, Analytics",
        requirements: [
            "Passion for space technology & AI",
            "Strong problem-solving mindset",
            "Ability to work in fast-paced startup",
        ],
    },
];

const benefits = [
    {
        icon: Globe,
        title: "Orbital Intelligence",
        description: "Work on real satellite data and AI systems orbiting Earth right now.",
    },
    {
        icon: Cpu,
        title: "Futuristic Tech",
        description: "Build with the bleeding edge: Rust, WebGPU, Neural Networks, and more.",
    },
    {
        icon: Rocket,
        title: "High Impact",
        description: "Early-stage equity. Your code shapes the foundational architecture.",
    },
    {
        icon: Users,
        title: "Remote-First",
        description: "Work from anywhere on Earth. We care about output, not hours.",
    },
];

export default function CareersPage() {
    const [openRole, setOpenRole] = useState<string | null>(null);

    // Load Tally script on mount
    useEffect(() => {
        const loadTally = () => {
            const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
            if (!existingScript) {
                const script = document.createElement("script");
                script.src = "https://tally.so/widgets/embed.js";
                script.async = true;
                document.body.appendChild(script);
            }
            // Initialize Tally after script loads
            setTimeout(() => {
                if (typeof window !== "undefined" && (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally) {
                    (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
                }
            }, 1000);
        };
        loadTally();
    }, []);

    const scrollToForm = () => {
        document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-28 sm:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="pill-badge mb-8 sm:mb-10 animate-fade-in">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                        </span>
                        <span className="text-white/80">Hiring for Q1 2026</span>
                    </div>

                    {/* Serif for main headline */}
                    <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 animate-fade-in-up px-2">
                        Shape the future of
                        <br />
                        space intelligence
                    </h1>

                    <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
                        Join the elite team building Atheron&apos;s orbital AI network. We
                        aren&apos;t just watching the stars; we&apos;re giving them intelligence.
                    </p>

                    <button
                        onClick={scrollToForm}
                        className="btn-white animate-fade-in-up"
                        style={{ animationDelay: "0.4s" }}
                    >
                        Initialize Application
                    </button>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 sm:py-20 border-y border-white/[0.06]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-muted-foreground uppercase tracking-wider mb-4">Benefits</p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-white">
                            Why Atheron?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="origin-card p-6 sm:p-8 group">
                                <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/[0.1] transition-colors">
                                    <benefit.icon className="w-5 h-5 text-white/70" />
                                </div>
                                <h3 className="text-lg sm:text-xl font-medium text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-muted-foreground text-sm sm:text-base">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 sm:py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <p className="text-muted-foreground uppercase tracking-wider mb-4">Positions</p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-white">
                            Open roles
                        </h2>
                    </div>

                    <div className="space-y-3 sm:space-y-4">
                        {roles.map((role) => (
                            <div
                                key={role.id}
                                className="rounded-2xl border border-white/[0.06] bg-card overflow-hidden transition-all hover:border-white/[0.12]"
                            >
                                <button
                                    onClick={() => setOpenRole(openRole === role.id ? null : role.id)}
                                    className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                                >
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <div
                                            className={`p-2.5 sm:p-3 rounded-xl transition-colors ${openRole === role.id
                                                    ? "bg-white text-black"
                                                    : "bg-white/[0.06] text-white/70"
                                                }`}
                                        >
                                            <role.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-base sm:text-lg font-medium text-white">
                                                {role.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground hidden sm:block">{role.subtitle}</p>
                                        </div>
                                    </div>
                                    <ChevronDown
                                        className={`text-muted-foreground transition-transform duration-300 ${openRole === role.id ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${openRole === role.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="p-4 sm:p-6 pt-0 border-t border-white/[0.06]">
                                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-white/[0.03] rounded-xl p-4 sm:p-5">
                                                <h4 className="text-white font-medium mb-3 flex items-center gap-2">
                                                    <Star className="w-4 h-4" />
                                                    Requirements
                                                </h4>
                                                <ul className="text-muted-foreground space-y-2 list-disc list-inside text-sm sm:text-base">
                                                    {role.requirements.map((req, i) => (
                                                        <li key={i}>{req}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-col justify-center gap-4">
                                                <p className="text-muted-foreground italic text-sm sm:text-base">
                                                    &quot;We are looking for visionaries who want to leave a
                                                    dent in the universe.&quot;
                                                </p>
                                                <button
                                                    onClick={scrollToForm}
                                                    className="btn-outline w-full justify-center"
                                                >
                                                    Apply for this Role
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Application Form */}
            <section id="application-form" className="py-16 sm:py-20 border-t border-white/[0.06]">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10 sm:mb-12">
                        <p className="text-muted-foreground uppercase tracking-wider mb-4">Apply</p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-white">
                            Application form
                        </h2>
                    </div>

                    <div className="origin-card p-4 sm:p-8">
                        <iframe
                            src="https://tally.so/embed/rjBYGR?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="500"
                            frameBorder="0"
                            title="Application Form"
                            style={{ border: "none" }}
                        />
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
