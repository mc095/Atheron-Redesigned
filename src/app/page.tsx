"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  Satellite,
  Brain,
  Globe,
  Shield,
  Zap,
  Sparkles,
  Send,
  Atom,
  Rocket,
  Telescope,
} from "lucide-react";

// Rotating placeholder examples
const placeholderExamples = [
  "Explain Einstein's equation E=mc²...",
  "What is Schrödinger's cat experiment?",
  "Tell me about Voyager 2's journey...",
  "How does the BrahMos missile work?",
  "Calculate orbital velocity of ISS...",
  "What are black holes made of?",
  "Explain quantum entanglement...",
  "How do rockets escape Earth's gravity?",
];

export default function Home() {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholderExamples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section - Full Height with Video */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 video-overlay-origin" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-28 sm:pt-32 pb-16 sm:pb-20">
          {/* Pill Badge */}
          <div
            className="pill-badge mb-8 sm:mb-10 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="w-4 h-4 text-white/70" />
            <span className="text-white/80">Now in Development</span>
          </div>

          {/* Main Headline - Serif only for this */}
          <h1
            className="font-serif-heading text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] text-white mb-6 sm:mb-8 animate-fade-in-up px-2"
            style={{ animationDelay: "0.2s" }}
          >
            We read the Skies.
            <br />
            So you don&apos;t have to.
          </h1>

          {/* Subheadline - SF Pro */}
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed animate-fade-in-up px-4"
            style={{ animationDelay: "0.4s" }}
          >
            Atheron is an AI-powered space intelligence platform built to help
            humans understand, track, and explore space in real time.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 animate-fade-in-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href="/waitlist" className="btn-white">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>

          {/* AI Input Bar with rotating placeholder */}
          <div
            className="max-w-2xl mx-auto animate-slide-up px-4"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-center text-muted-foreground text-sm mb-3 sm:mb-4">
              Try asking Atheron
            </p>
            <div className="relative">
              <input
                type="text"
                placeholder={placeholderExamples[placeholderIndex]}
                className="input-bar w-full pl-5 sm:pl-6 pr-14 py-4 sm:py-5 text-sm sm:text-base"
              />
              <button className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white flex items-center justify-center hover:bg-white/90 transition-colors">
                <Send className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {[
              { value: "Real-time", label: "Satellite Tracking" },
              { value: "<100ms", label: "Response Time" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Monitoring" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intelligence Beyond Atmosphere - Showcase Section */}
      <section className="py-16 sm:py-24 section-glow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-muted-foreground uppercase tracking-wider mb-4">Capabilities</p>
            {/* Serif for this headline */}
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 px-2">
              Intelligence Beyond Atmosphere
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Stop manually calculating trajectories. Ask Atheron anything about
              the cosmos, satellite telemetry, or orbital mechanics.
            </p>
          </div>

          {/* Showcase Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <div className="origin-card p-6 sm:p-8 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/[0.1] transition-colors">
                <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                Red Planet Architectures
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Robust models trained on Martian topology data.
              </p>
            </div>

            <div className="origin-card p-6 sm:p-8 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/[0.1] transition-colors">
                <Telescope className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                Deep Space Analytics
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Process petabytes of telescope imagery instantly.
              </p>
            </div>

            <div className="origin-card p-6 sm:p-8 group sm:col-span-2 md:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/[0.1] transition-colors">
                <Satellite className="w-5 h-5 sm:w-6 sm:h-6 text-white/70" />
              </div>
              <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                Orbital Sync
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Real-time satellite constellation management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Bento Grid */}
      <section className="py-16 sm:py-24 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-muted-foreground uppercase tracking-wider mb-4">Features</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-white">
              Everything you need
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                icon: Atom,
                title: "STEM Intelligence",
                description: "From quantum physics to rocket science, ask anything.",
              },
              {
                icon: Brain,
                title: "AI Analysis",
                description: "ML models trained on petabytes of space data.",
              },
              {
                icon: Globe,
                title: "Global Coverage",
                description: "Track celestial objects worldwide in real-time.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Sub-millisecond response for critical operations.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Military-grade encryption for sensitive missions.",
              },
              {
                icon: Sparkles,
                title: "AI Assistant",
                description: "Ask anything about space in natural language.",
              },
            ].map((feature, index) => (
              <div key={index} className="origin-card p-6 sm:p-8 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mb-5 sm:mb-6 group-hover:bg-white/[0.1] transition-colors">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Serif for this headline */}
          <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 sm:mb-6 px-2">
            Ready for liftoff?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-10 sm:mb-12 max-w-xl mx-auto px-4">
            Join the waitlist and be among the first to experience intelligent space exploration.
          </p>
          <Link href="/waitlist" className="btn-white text-base px-8 sm:px-10 py-4 sm:py-5">
            Get Started
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 sm:py-20 border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-muted-foreground uppercase tracking-wider mb-4">Careers</p>
          {/* Serif for this headline */}
          <h2 className="font-serif-heading text-2xl sm:text-3xl md:text-4xl text-white mb-4 sm:mb-6 px-2">
            Want to join the team?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 max-w-lg mx-auto px-4">
            We&apos;re building the future of space intelligence. Come shape it with us.
          </p>
          <Link href="/careers" className="btn-outline">
            View Open Positions
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
