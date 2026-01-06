"use client";

export function GradientOrb({
    variant = "teal",
    size = 300,
    className = ""
}: {
    variant?: "teal" | "orange" | "purple";
    size?: number;
    className?: string;
}) {
    const gradients = {
        teal: "from-[#00d4ff] via-[#0891b2] to-[#164e63]",
        orange: "from-[#fbbf24] via-[#f59e0b] to-[#92400e]",
        purple: "from-[#a78bfa] via-[#7c3aed] to-[#4c1d95]",
    };

    return (
        <div
            className={`orb bg-gradient-to-br ${gradients[variant]} animate-float blur-sm ${className}`}
            style={{
                width: size,
                height: size,
            }}
        />
    );
}
