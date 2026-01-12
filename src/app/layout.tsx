import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CalendlyModalProvider } from "@/components/CalendlyModal";
import SmoothScroll from "@/components/ui/SmoothScroll";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "VisQuanta | The Dealer's Unfair Advantage",
  description: "AI-Powered Dealership Platform - The unfair advantage elite dealerships use",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, // Allow some zoom for accessibility while keeping initial scale clean
};

// Calendly URL for demo scheduling
const CALENDLY_URL = "https://calendly.com/d/cn5m-s6d-whf/visquanta-ams-demo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable} style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }} suppressHydrationWarning>
        <SmoothScroll>
          <CalendlyModalProvider calendlyUrl={CALENDLY_URL}>
            {children}

            <Toaster />
          </CalendlyModalProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
