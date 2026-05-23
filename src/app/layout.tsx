import type { Metadata } from "next";
import { Syne, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LenisProvider from "@/components/lenis-provider";

/* ─── Syne — geometric grotesque, bold-friendly, zero elegance ─ */
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal"],
  variable: "--font-serif",   // keeps all existing font-serif classes working
  display: "swap",
});

/* ─── Inter — the minimal standard ─────────────────────────── */
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-sans",    // keeps all existing font-sans classes working
  display: "swap",
});

/* ─── Geist Mono — unchanged ────────────────────────────────── */
const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trigarty | Venture Studio",
  description: "A Venture Studio that operates on building scalable companies, brands and businesses through embedded execution, strategic systems, and long-term operational support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("light", inter.variable, syne.variable, geistMono.variable)} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-primary/30 selection:text-primary-foreground overflow-x-hidden">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
