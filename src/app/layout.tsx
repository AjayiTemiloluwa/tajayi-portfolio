import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { ScrollFx } from "@/components/ui/ScrollFx";
import { ScrollRipples } from "@/components/ui/ScrollRipples";
import { SmoothScroll } from "@/components/ui/SmoothScroll";
import { TouchFx } from "@/components/ui/TouchFx";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://temiloluwaajayi.vercel.app"),
  title: "Temiloluwa Samuel Ajayi — AI × Energy × Sustainability × Finance",
  description:
    "Building a career at the intersection of AI, energy, sustainability and finance — machine learning for safe, sustainable energy.",
  keywords: [
    "Temiloluwa Ajayi",
    "AI",
    "Energy",
    "Sustainability",
    "Well Control",
    "Machine Learning",
    "SPE",
    "Financial Engineering",
    "Gas Flaring",
    "Lagos",
    "Portfolio",
  ],
  openGraph: {
    title: "Temiloluwa Samuel Ajayi — AI × Energy × Sustainability × Finance",
    description:
      "Machine intelligence for safe, sustainable, well-capitalized energy — a career built at the intersection of AI, energy, sustainability and finance.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0908", // --ink
};

/** Structured data — who this is, and where else to find him. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Temiloluwa Samuel Ajayi",
  jobTitle: "AI & Automation Analyst",
  email: "mailto:temiloluwaajayi2019@gmail.com",
  url: "https://temiloluwaajayi.vercel.app",
  sameAs: [
    "https://github.com/AjayiTemiloluwa",
    "https://www.linkedin.com/in/temiloluwa-ajayi-b5b566236/",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Ibadan" },
    { "@type": "CollegeOrUniversity", name: "WorldQuant University" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${playfair.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-paper text-ink font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <CursorGlow />
        <ScrollFx />
        <ScrollRipples />
        <SmoothScroll />
        <TouchFx />
        {children}
      </body>
    </html>
  );
}