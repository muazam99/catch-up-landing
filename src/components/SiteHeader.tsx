"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import posthog from "posthog-js";
import { useEffect, useState } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/qiyam-masjid-tracker/id6760124208";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.catchupmobility.qiyam";

const navigation = [
  { label: "Features", href: "/#features" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Screenshots", href: "/#screenshots" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blogs", href: "/blogs" },
];

function getDeviceStoreUrl() {
  const userAgent = window.navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(userAgent) ||
    (window.navigator.platform === "MacIntel" &&
      window.navigator.maxTouchPoints > 1);
  const isAndroid = /Android/i.test(userAgent);

  if (isIOS) return APP_STORE_URL;
  if (isAndroid) return GOOGLE_PLAY_URL;
  return "/#download";
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const handleGetAppClick = () => {
    posthog.capture("click_get_app");
    const storeUrl = getDeviceStoreUrl();

    if (storeUrl === "/#download" && pathname === "/") {
      document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.location.href = storeUrl;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/#top" className="flex items-center gap-3" aria-label="Qiyam home">
          <Image
            src="/app-icon.png"
            alt=""
            width={36}
            height={36}
            className="rounded-[8px]"
            priority
          />
          <span className="text-lg font-semibold tracking-tight">Qiyam</span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-sm text-[var(--muted-foreground)] md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => {
            const active = item.href === "/blogs" && pathname.startsWith("/blogs");

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`transition-colors hover:text-[var(--foreground)] ${
                  active ? "font-medium text-[var(--primary)]" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleGetAppClick}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-3.5 py-2 text-sm font-medium text-[var(--primary-foreground)] shadow-sm transition-transform hover:scale-[1.03] sm:px-4"
          >
            Get the app
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] md:hidden"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-2xl border border-[var(--border)] bg-[var(--card)] p-2 shadow-xl md:hidden"
          >
            {navigation.map((item) => {
              const active = item.href === "/blogs" && pathname.startsWith("/blogs");

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-[var(--muted)] ${
                    active ? "bg-[var(--primary)]/10 text-[var(--primary)]" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}
