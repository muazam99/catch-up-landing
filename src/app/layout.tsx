import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/animations/PageTransition";
import { Analytics } from '@vercel/analytics/next';
import { Toaster } from 'react-hot-toast';
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://qiyam.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Qiyam: Masjid Tracker",
  description:
    "Level up your masjid journey. Check in at any masjid, follow daily prayer times, and quietly track your streaks with Qiyam.",
  icons: {
    icon: "/app-icon.png",
  },
  openGraph: {
    title: "Qiyam: Masjid Tracker",
    description:
      "Level up your masjid journey. Check in at any masjid, follow daily prayer times, and build the habit that lasts.",
    images: ["/app-icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Qiyam: Masjid Tracker",
    description:
      "Level up your masjid journey. Check in at any masjid, follow daily prayer times, and build the habit that lasts.",
    images: ["/app-icon.png"],
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

        <footer className="border-t border-[var(--border)] bg-[var(--card)]">
          <div className="mx-auto max-w-6xl px-6 py-12">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
              {/* Brand + tagline */}
              <div className="flex flex-col gap-4 max-w-md">
                <div className="flex items-center gap-3">
                  <Image
                    src="/app-icon.png"
                    alt="Qiyam"
                    width={40}
                    height={40}
                    className="rounded-[9px]"
                  />
                  <span className="text-lg font-semibold text-[var(--foreground)]">
                    Qiyam
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                  Masjid Tracker. Level up your masjid journey — check in, follow prayer times, and build a habit that stays.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-x-10 gap-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Product
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <Link
                        href="/#features"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#how-it-works"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        How it works
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#faq"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Legal
                  </h4>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <Link
                        href="/support"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/privacy-policy"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/terms-of-use"
                        className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
                      >
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                    Built with
                  </h4>
                  <a
                    href="https://krackeddevs.com/showcase/project/31e53497-e431-4dbb-ac66-5c03064c3fd7"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Visit KrackedDevs"
                    className="mt-3 inline-flex transition-opacity hover:opacity-80"
                  >
                    <Image
                      src="/kdlogodev-export.png"
                      alt="KrackedDevs"
                      width={140}
                      height={56}
                      className="h-auto w-auto max-w-[140px]"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted-foreground)] sm:flex-row sm:items-center">
              <p>© 2026 Qiyam. All rights reserved.</p>
              <p>Made for the ummah.</p>
            </div>
          </div>
        </footer>

        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
