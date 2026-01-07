import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Linkedin, ArrowRight } from "lucide-react";

const team = [
    {
        name: "Aryan Nalawade",
        role: "Co-Founder & CEO",
        image: "/aryan.jpg",
        linkedin: "https://www.linkedin.com/in/aryan-nalawade-58a56b329/",
    },
    {
        name: "Hassan Suhail",
        role: "Co-Founder & CTO",
        image: "/hassan.jpg",
        linkedin: "https://www.linkedin.com/in/hassan-suhail-383891389/",
    },
    {
        name: "Ganesh Vathumilli",
        role: "Deputy CTO & SWE",
        image: "/ganesh.jpg",
        linkedin: "https://www.linkedin.com/in/ganesh097/",
    },
    {
        name: "Pranit",
        role: "Senior Developer",
        image: "/pranit.jpeg",
        linkedin: "#",
    },
    {
        name: "Arya Madiwale",
        role: "SWE",
        image: "/arya_madiwale.png",
        linkedin: "https://www.linkedin.com/in/arya-madiwale-6aa82237b/",
    },
    {
        name: "Om Deshmukh",
        role: "Developer",
        image: "/om_deshmukh.png",
        linkedin: "https://www.linkedin.com/in/om01deshmukh/",
    },
    {
        name: "Roshani Sharma",
        role: "HR",
        image: "/roshani_sharma.png",
        linkedin: "https://www.linkedin.com/in/roshani-sharma-68a2a924b/",
    },
    {
        name: "Avadhoot",
        role: "Media Head",
        image: "/avadhoot.jpeg",
        linkedin: "#",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            {/* Hero */}
            <section className="pt-28 sm:pt-40 pb-8 sm:pb-12 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-muted-foreground uppercase tracking-wider mb-4 animate-fade-in">About Us</p>
                    {/* Serif for main headline */}
                    <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 sm:mb-8 animate-fade-in-up px-2">
                        The story behind Atheron
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground animate-fade-in-up px-4" style={{ animationDelay: "0.2s" }}>
                        Built by curiosity. Driven by science. Designed for space.
                    </p>
                </div>
            </section>

            {/* 3D Black Hole Section */}
            <section className="py-8 sm:py-12 relative overflow-hidden" style={{ background: "#0F1011" }}>
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                        {/* Zoom out by making container larger and scaling down */}
                        <div
                            className="absolute inset-0 flex items-center justify-center"
                            style={{
                                width: "200%",
                                height: "200%",
                                left: "-50%",
                                top: "-50%",
                                transform: "scale(0.5)",
                                transformOrigin: "center center"
                            }}
                        >
                            <iframe
                                src="https://my.spline.design/blackhole-B0YGRGAJqvQL4GTJaMOiIIU3/"
                                frameBorder="0"
                                width="100%"
                                height="100%"
                                title="3D Black Hole"
                                className="w-full h-full"
                                style={{ background: "#0F1011" }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="py-12 sm:py-16 px-4 sm:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="space-y-5 sm:space-y-6 text-muted-foreground leading-relaxed text-base sm:text-lg">
                        <p>
                            Atheron began with a simple yet ambitious idea - to make space
                            understandable, accessible, and intelligent for everyone.
                        </p>
                        <p>
                            Founded by two teenagers driven by science, technology, and an
                            obsession with the cosmos, Atheron was born during late nights of
                            experimentation and relentless questioning.
                        </p>
                        <p>
                            By combining AI, real-time satellite tracking, and immersive 3D
                            visualization, Atheron bridges the gap between raw space data and
                            human understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/[0.06]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-muted-foreground uppercase tracking-wider mb-4">Team</p>
                        <h2 className="text-3xl sm:text-4xl font-medium text-white">
                            People building Atheron
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
                        {team.map((member, index) => (
                            <div key={index} className="origin-card overflow-hidden group">
                                <div className="relative aspect-square">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-3 sm:p-5 flex items-center justify-between">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="text-white font-medium text-sm sm:text-base truncate">{member.name}</h3>
                                        <p className="text-muted-foreground text-xs sm:text-sm truncate">{member.role}</p>
                                    </div>
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/[0.06] flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/[0.1] transition-all flex-shrink-0 ml-2"
                                    >
                                        <Linkedin size={12} className="sm:hidden" />
                                        <Linkedin size={14} className="hidden sm:block" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 sm:py-20 px-4 sm:px-6 border-t border-white/[0.06]">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Serif for this */}
                    <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 px-2">
                        Want to join us?
                    </h2>
                    <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-4">
                        We&apos;re always looking for passionate people.
                    </p>
                    <Link href="/careers" className="btn-white">
                        View Careers
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
