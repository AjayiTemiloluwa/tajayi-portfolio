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
    "Petroleum engineer turned AI builder — ensemble ML for well control, satellite analytics for gas flaring, and financial engineering for the energy transition. Lagos, Nigeria.",
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
      "Machine learning for the energy problem — well-control AI, flaring analytics, fluid design. Drafts inside.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0908", // --ink
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