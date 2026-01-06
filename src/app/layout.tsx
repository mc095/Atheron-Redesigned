import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Cormorant Garamond - Elegant thin serif for headings (Lyon Display alternative)
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atheron - Space AI Systems",
  description: "AI-powered space intelligence platform built to help humans understand, track, and explore space in real time.",
  keywords: ["space", "AI", "satellite", "intelligence", "orbital", "tracking", "cosmos", "STEM", "astronomy"],
  authors: [{ name: "Atheron" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Atheron - Space AI Systems",
    description: "AI-powered space intelligence platform built to help humans understand, track, and explore space in real time.",
    type: "website",
    siteName: "Atheron",
    images: [
      {
        url: "/opengl.png",
        width: 1200,
        height: 630,
        alt: "Atheron - Space AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Atheron - Space AI Systems",
    description: "AI-powered space intelligence platform built to help humans understand, track, and explore space in real time.",
    images: ["/opengl.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tally Forms Script */}
        <script async src="https://tally.so/widgets/embed.js" />
      </head>
      <body
        className={`${cormorantGaramond.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
