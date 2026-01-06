"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowLeft, Loader2, CheckCircle } from "lucide-react";

// Firebase imports
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function WaitlistPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setIsSuccess(true);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An error occurred");
            }
        } finally {
            setIsLoading(false);
        }
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6">
                <div className="text-center max-w-md">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/[0.06] flex items-center justify-center mx-auto mb-6 sm:mb-8">
                        <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    {/* Serif for this */}
                    <h1 className="font-serif-heading text-3xl sm:text-4xl text-white mb-3 sm:mb-4 px-2">
                        Welcome to the waitlist
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground mb-8 sm:mb-10 px-4">
                        You&apos;re in. We&apos;ll notify you when we launch.
                    </p>
                    <Link href="/" className="btn-outline">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="min-h-screen flex items-center justify-center py-28 sm:py-32 px-4 sm:px-6">
                <div className="w-full max-w-md">
                    <div className="text-center mb-8 sm:mb-10">
                        <p className="text-muted-foreground uppercase tracking-wider mb-4">Get Started</p>
                        {/* Serif for main headline */}
                        <h1 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 px-2">
                            Join the waitlist
                        </h1>
                        <p className="text-sm sm:text-base text-muted-foreground px-4">
                            Be the first to experience Atheron
                        </p>
                    </div>

                    <div className="origin-card p-5 sm:p-8">
                        <form onSubmit={handleSignup} className="space-y-3 sm:space-y-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email address"
                                required
                                className="input-bar text-sm sm:text-base"
                            />

                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Create password"
                                required
                                minLength={6}
                                className="input-bar text-sm sm:text-base"
                            />

                            {error && (
                                <p className="text-red-400 text-center text-sm sm:text-base">{error}</p>
                            )}

                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-white w-full justify-center text-sm sm:text-base"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Creating account...
                                    </>
                                ) : (
                                    "Sign Up"
                                )}
                            </button>
                        </form>
                    </div>

                    <p className="mt-6 sm:mt-8 text-center text-sm sm:text-base text-muted-foreground">
                        Back to{" "}
                        <Link href="/" className="text-white hover:underline">
                            Home
                        </Link>
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
