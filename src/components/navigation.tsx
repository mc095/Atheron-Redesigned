"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
];

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
                <div
                    className={`max-w-6xl mx-auto rounded-2xl transition-all duration-500 ${isScrolled
                        ? "bg-[#0F1011]/80 backdrop-blur-xl border border-white/[0.08] shadow-lg shadow-black/20"
                        : "bg-transparent"
                        }`}
                >
                    <div className="px-4 sm:px-6">
                        <div className="flex items-center justify-between h-14 sm:h-16">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
                                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                                    <Image
                                        src="/logo.jpeg"
                                        alt="Atheron"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-base sm:text-lg font-sans-heading text-white">
                                    Atheron
                                </span>
                            </Link>

                            {/* Desktop Navigation - Centered */}
                            <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                                <div className="flex items-center gap-8">
                                    {navLinks.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Button - Desktop - Right aligned */}
                            <div className="hidden md:flex items-center">
                                <Link href="/waitlist" className="btn-white text-sm py-2.5 px-5">
                                    Get Started
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden text-white p-2 -mr-2"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-background transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl text-white hover:text-white/80 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="/waitlist"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="btn-white mt-4"
                    >
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </>
    );
}
