"use client";

import { RefreshCw } from "lucide-react";
import { useEffect } from "react";

import SiteHeader from "@/components/SiteHeader";

export default function BlogsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <main className="mx-auto flex max-w-2xl flex-col items-center px-6 py-28 text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">
          Something went wrong
        </span>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">We could not open this page</h1>
        <p className="mt-4 text-[var(--muted-foreground)]">
          The blog service may be temporarily unavailable. Please try again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-[var(--primary-foreground)]"
        >
          <RefreshCw className="h-4 w-4" aria-hidden="true" />
          Try again
        </button>
      </main>
    </div>
  );
}
