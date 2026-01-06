"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, MapPin } from "lucide-react";

export default function ContactPage() {
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
            setTimeout(() => {
                if (typeof window !== "undefined" && (window as unknown as { Tally?: { loadEmbeds: () => void } }).Tally) {
                    (window as unknown as { Tally: { loadEmbeds: () => void } }).Tally.loadEmbeds();
                }
            }, 1000);
        };
        loadTally();
    }, []);

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-28 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-muted-foreground uppercase tracking-wider mb-4 animate-fade-in">Contact</p>
                    {/* Serif for main headline */}
                    <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 animate-fade-in-up px-2">
                        Get in touch
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
                        Whether it&apos;s space, satellites, or something curious — we&apos;re
                        listening.
                    </p>
                </div>
            </section>

            {/* Contact Form (Tally Embed) */}
            <section className="py-6 sm:py-8">
                <div className="max-w-2xl mx-auto px-4 sm:px-6">
                    <div className="origin-card p-4 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-medium text-white mb-6 sm:mb-8 text-center">
                            Send us a message
                        </h2>
                        <iframe
                            src="https://tally.so/embed/9qXa9K?alignLeft=0&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                            loading="lazy"
                            width="100%"
                            height="550"
                            frameBorder="0"
                            title="Contact Us"
                            style={{ border: "none" }}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 sm:py-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {/* Email */}
                        <div className="origin-card p-6 sm:p-8 text-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-5 sm:mb-6">
                                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                            </div>
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                                Email us
                            </h2>
                            <p className="text-sm sm:text-base text-muted-foreground mb-4">
                                For collaborations, questions, or cosmic conversations.
                            </p>
                            <a
                                href="mailto:atheron.ai@gmail.com"
                                className="text-white hover:underline font-medium text-sm sm:text-base"
                            >
                                contact@atheron.space
                            </a>
                        </div>

                        {/* Location */}
                        <div className="origin-card p-6 sm:p-8 text-center">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-5 sm:mb-6">
                                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
                            </div>
                            <h2 className="text-lg sm:text-xl font-medium text-white mb-2">
                                Location
                            </h2>
                            <p className="text-sm sm:text-base text-muted-foreground">
                                Everywhere and nowhere at the same time. Our office exists in
                                the cloud — powered by Wi-Fi and a shared obsession with space.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
