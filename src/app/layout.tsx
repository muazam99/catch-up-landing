import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/animations/PageTransition";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Catch Up!",
  description: "Malaysia Train Navigation App",
  icons: {
    icon: "/app-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
        <footer className="bg-gray-100 border-t border-gray-200 py-8 px-6">
          {/* FadeInSection can be replaced with a static div if not available globally */}
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/app-icon.png"
                alt="Catch Up"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="text-left">
                <span className="text-lg font-semibold text-black">Catch Up</span>
                <p className="text-sm text-gray-600">© 2025 All rights reserved.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <a 
                href="/support"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
               Support
              </a>
              <a 
                href="/privacy-policy" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms-of-use" 
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </footer>
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
