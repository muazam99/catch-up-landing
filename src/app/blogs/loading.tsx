import SiteHeader from "@/components/SiteHeader";

export default function BlogsLoading() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <SiteHeader />
      <div className="border-b border-[var(--border)]/60">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="h-10 w-32 animate-pulse rounded bg-[var(--muted)]" />
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[220px_minmax(0,1fr)]">
        <div className="hidden space-y-2 lg:block">
          {[0, 1, 2, 3].map((item) => (
            <div key={item} className="h-10 animate-pulse rounded-xl bg-[var(--muted)]" />
          ))}
        </div>
        <div className="space-y-5">
          {[0, 1, 2].map((item) => (
            <div key={item} className="h-60 animate-pulse rounded-2xl bg-[var(--muted)]" />
          ))}
        </div>
      </div>
    </div>
  );
}
