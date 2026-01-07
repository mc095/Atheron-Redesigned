import Link from "next/link";
import Image from "next/image";
import { Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/[0.06] bg-background">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <div className="relative w-9 h-9 rounded-full overflow-hidden">
                                <Image
                                    src="/logo.jpeg"
                                    alt="Atheron"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-lg font-serif-heading text-white">
                                Atheron
                            </span>
                        </Link>
                        <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed text-sm">
                            AI-powered space intelligence platform built to help humans
                            understand, track, and explore space. Made by <a href="https://www.linkedin.com/in/ganesh097/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Ganesh Vathumilli</a>
                        </p>
                        <div className="flex items-center gap-3">
                            <Link
                                href="https://www.linkedin.com/company/110338814"
                                target="_blank"
                                className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                            >
                                <Linkedin size={16} />
                            </Link>
                            <Link
                                href="https://youtube.com/@SoloBirdAcademy"
                                target="_blank"
                                className="w-9 h-9 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] flex items-center justify-center text-muted-foreground hover:text-white transition-all"
                            >
                                <Youtube size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-sm font-medium text-white mb-5">Product</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/#what-we-offer" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/waitlist" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="md:col-span-3">
                        <h4 className="text-sm font-medium text-white mb-5">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-white transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2026 Atheron Space Intelligence
                    </p>
                    <p className="text-xs text-muted-foreground">
                        All systems nominal
                    </p>
                </div>
            </div>
        </footer>
    );
}
