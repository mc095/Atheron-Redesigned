"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";
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

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20 sm:pt-32 pb-16 sm:pb-20">
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
            We read the <i>Skies</i>
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

          {/* AI Sneak Peek - Curved Perspective Style (like Dreelio) */}
          <div
            className="w-full animate-slide-up mt-12 sm:mt-16 px-4 sm:px-8 md:px-16"
            style={{ animationDelay: "0.8s" }}
          >
            {/* <p className="text-center text-muted-foreground text-sm mb-8 sm:mb-12">
              Sneak peek of our AI assistant
            </p> */}

            {/* Perspective Container */}
            <div className="relative max-w-6xl mx-auto" style={{ perspective: "1000px" }}>
              {/* Curved Image with 3D Transform + Hover Effect */}
              <div
                className="relative rounded-[20px] sm:rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 ease-out cursor-pointer group hover:shadow-[0_35px_100px_-15px_rgba(0,0,0,0.6)]"
                style={{
                  transform: "rotateX(8deg)",
                  transformOrigin: "center bottom",
                  boxShadow: "0 25px 80px -12px rgba(0, 0, 0, 0.5), 0 8px 40px -8px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Hover transforms applied via CSS */}
                <style jsx>{`
                  .group:hover {
                    transform: rotateX(2deg) translateY(-10px) scale(1.02) !important;
                  }
                `}</style>

                {/* Top gradient fade */}
                <div className="absolute top-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-b from-background/60 to-transparent z-10 pointer-events-none" />

                <Image
                  src="/athey-sneakpeek.png"
                  alt="Athey AI Interface Preview"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover"
                  priority
                />

                {/* Bottom gradient with CTA */}
                <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-background via-background/90 to-transparent z-10 pointer-events-none" />
              </div>

              {/* Ambient glow effect */}
              <div className="absolute -inset-4 sm:-inset-8 bg-gradient-radial from-white/[0.02] to-transparent rounded-[40px] pointer-events-none -z-10" />

              {/* CTA Button */}
              <div className="flex justify-center -mt-16 sm:-mt-20 relative z-20">
                <Link href="/waitlist" className="btn-white shadow-xl shadow-black/40">
                  Join the Waitlist
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Globe Section */}
      <section id="what-we-offer" className="py-12 sm:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Section Heading */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-muted-foreground uppercase tracking-wider text-sm mb-4">Explore the Universe</p>
            <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-white">
              What we offer
            </h2>
          </div>

          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            <iframe
              src="https://my.spline.design/orbitalviewofarrakisfromtimqxyz-WlhiKEalB1KzqVaKdiAZFcW9/"
              frameBorder="0"
              width="100%"
              height="100%"
              title="3D Globe"
              className="w-full h-full"
              style={{ background: "#0F1011" }}
            />
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

      {/* CTA Section - Split Layout with Rocket */}
      <section className="relative border-t border-white/[0.06]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-[#0a0c14] to-background" />

        {/* Content Container */}
        <div className="relative z-10 max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:min-h-screen">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 px-8 sm:px-16 lg:px-20 xl:px-28 py-16 sm:py-20 lg:py-32 flex items-center justify-center lg:justify-end">
              <div className="max-w-lg">
                {/* Small label */}
                <p className="text-muted-foreground uppercase tracking-wider text-sm mb-6">
                  Join the Mission
                </p>

                {/* Serif headline */}
                <h2 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl text-white mb-6 leading-[1.1]">
                  Ready for liftoff?
                </h2>

                <p className="text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed">
                  Join the waitlist and be among the first to experience intelligent space exploration.
                </p>

                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <Link href="/waitlist" className="btn-white text-base px-8 py-4">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/about" className="btn-outline text-base px-8 py-4">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side - 3D Rocket - Full width on mobile */}
            <div className="w-full lg:w-1/2 relative overflow-hidden" style={{ height: "500px" }}>
              {/* Gradient fade on left edge - desktop only */}
              <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-48 bg-gradient-to-r from-[#0a0c14] to-transparent z-10 pointer-events-none hidden lg:block" />

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
                  src="https://my.spline.design/launchartemisrocket-3xEeXg1XoddSqvy7jjs6oqEM/"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  title="3D Rocket"
                  className="w-full h-full"
                  style={{ background: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Top/Bottom gradient fades */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
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
