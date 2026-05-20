'use client';

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  CheckCircle2,
  Bell,
  Trophy,
  Users,
  LineChart,
  Moon,
  Apple,
  ChevronDown,
} from "lucide-react";

import FadeInSection from "@/components/animations/FadeInSection";
import StaggerContainer, {
  staggerChildVariants,
} from "@/components/animations/StaggerContainer";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/qiyam-masjid-tracker/id6760124208";
const GOOGLE_PLAY_URL =
  "https://play.google.com/store/apps/details?id=com.catchupmobility.qiyam";

const phoneViewportClassName =
  "absolute left-[6.9%] right-[6.9%] top-[1.9%] bottom-[2.1%] overflow-hidden rounded-[9%]";

const features = [
  {
    icon: CheckCircle2,
    title: "Masjid check-in",
    body: "Tap to log a prayer when you arrive. Location verification keeps your record honest and effortless.",
  },
  {
    icon: MapPin,
    title: "Find a masjid anywhere",
    body: "Browse a searchable directory with an interactive map. Useful at home, on the road, or somewhere new.",
  },
  {
    icon: Bell,
    title: "Daily prayer reminders",
    body: "Accurate prayer times for your location with gentle notifications so you never miss the next one.",
  },
  {
    icon: Trophy,
    title: "Achievements",
    body: "Unlock milestones as you build the habit. Quiet wins that mark real consistency over time.",
  },
  {
    icon: Users,
    title: "Community leaderboard",
    body: "See where you stand among other users. Friendly motivation, never about status.",
  },
  {
    icon: LineChart,
    title: "Personal analytics",
    body: "Charts and stats reveal your patterns. Spot what's working and where you can show up more.",
  },
];

const steps = [
  {
    number: "01",
    title: "Open Qiyam near a masjid",
    body: "The app uses your location to detect when you're at a masjid listed in the directory. No setup, no manual entry.",
    screenshot: "/screenshot-4.jpg",
    caption: "Find masjids around you",
    icon: MapPin,
  },
  {
    number: "02",
    title: "Tap to check in",
    body: "A single tap logs the prayer you attended. Location verification keeps the record honest, so every check-in counts.",
    screenshot: "/screenshot-2.jpg",
    caption: "One tap, prayer logged",
    icon: CheckCircle2,
  },
  {
    number: "03",
    title: "Watch the habit grow",
    body: "Your streak, history, and analytics build automatically. Climb the leaderboard, unlock achievements, and keep going.",
    screenshot: "/screenshot-3.jpg",
    caption: "Streaks and stats build over time",
    icon: LineChart,
  },
];

const screenshotCaptions = [
  "Your journey at a glance",
  "Masjid check-in",
  "Streaks & history",
  "Masjid finder",
  "Community leaderboard",
];

function AndroidIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
    </svg>
  );
}

const faqs = [
  {
    q: "How does the check-in work?",
    a: "When you're near a registered masjid, the app enables a check-in button so you can record the prayer you attended. Location verification keeps the log accurate.",
  },
  {
    q: "Does Qiyam work outside Malaysia?",
    a: "Yes. Anywhere masjid locations are available in our directory, you can check in, view prayer times, and track your habit.",
  },
  {
    q: "Is there a light and dark mode?",
    a: "Both. Qiyam follows your device theme by default, with a manual override in settings.",
  },
  {
    q: "How do I sign in?",
    a: "Sign in with Google or Apple. Your prayer history syncs to your account so it stays with you across devices.",
  },
  {
    q: "Will it drain my battery?",
    a: "Qiyam only uses location when you open the app or trigger a check-in, so background battery use stays minimal.",
  },
];

function StoreButtons({
  className = "",
}: {
  className?: string;
}) {
  const handleAppStoreClick = () => {
    window.open(APP_STORE_URL, "_blank");
  };

  const handleGooglePlayClick = () => {
    window.open(GOOGLE_PLAY_URL, "_blank");
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={handleAppStoreClick}
        className="cursor-pointer"
        role="button"
        aria-label="Download on the App Store"
      >
        <Image
          src="/app_store.png"
          alt="Download on the App Store"
          width={200}
          height={60}
          className="rounded-lg"
        />
      </motion.div>

      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={handleGooglePlayClick}
        className="cursor-pointer"
        role="button"
        aria-label="Get it on Google Play"
      >
        <Image
          src="/google_play.png"
          alt="Get it on Google Play"
          width={200}
          height={60}
          className="rounded-lg"
        />
      </motion.div>
    </div>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState<boolean>(defaultOpen);

  return (
    <motion.div
      variants={staggerChildVariants}
      className="rounded-2xl border border-[var(--border)] bg-[var(--card)] overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-[var(--muted)]"
        aria-expanded={open}
      >
        <span className="text-base sm:text-lg font-semibold text-[var(--foreground)]">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[var(--muted-foreground)]"
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: open ? "auto" : 0,
          opacity: open ? 1 : 0,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-[var(--muted-foreground)] leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-[var(--border)]/60 bg-[var(--background)]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <Image
              src="/app-icon.png"
              alt="Qiyam"
              width={36}
              height={36}
              className="rounded-[8px]"
            />
            <span className="text-lg font-semibold tracking-tight">Qiyam</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--muted-foreground)]">
            <a href="#features" className="hover:text-[var(--foreground)] transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[var(--foreground)] transition-colors">
              How it works
            </a>
            <a href="#screenshots" className="hover:text-[var(--foreground)] transition-colors">
              Screenshots
            </a>
            <a href="#faq" className="hover:text-[var(--foreground)] transition-colors">
              FAQ
            </a>
          </nav>

          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-medium text-[var(--primary-foreground)] shadow-sm transition-transform hover:scale-[1.03]"
          >
            Get the app
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden bg-hero-gradient">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2">
            <FadeInSection delay={0.1}>
              <div className="flex flex-col items-start gap-6 text-left">
                <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)]" />
                  Level up your masjid journey
                </span>

                <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                  Pray at the masjid.
                  <br />
                  <span className="text-[var(--primary)]">Build the habit that lasts.</span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-[var(--muted-foreground)]">
                  Qiyam helps you check in at any masjid, follow daily prayer times, and quietly track your streaks — so showing up becomes part of who you are.
                </p>

                <StoreButtons className="mt-2" />

                <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[var(--muted-foreground)]">
                  <span className="inline-flex items-center gap-2">
                    <Apple className="h-4 w-4" /> iOS
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <AndroidIcon className="h-4 w-4" /> Android
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Moon className="h-4 w-4" /> Light & Dark
                  </span>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3} direction="left">
              <div className="relative mx-auto flex justify-center">
                <div className="absolute inset-0 -z-10 mx-auto h-[460px] w-[280px] rounded-[3rem] bg-[var(--primary)]/15 blur-3xl" />
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="relative w-64 h-[520px]"
                >
                  <Image
                    src="/iphone-frame.png"
                    alt="Qiyam app preview"
                    width={256}
                    height={520}
                    priority
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                  <div className={phoneViewportClassName}>
                    <Image
                      src="/screenshot-1.jpg"
                      alt="Qiyam home screen"
                      width={256}
                      height={470}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="relative overflow-hidden bg-section-warm border-y border-[var(--border)]/60">
          <div className="absolute inset-x-0 top-0 -z-10 mx-auto h-[400px] max-w-5xl bg-[var(--primary)]/5 blur-3xl" />

          <div className="mx-auto max-w-6xl px-6 py-24">
            <FadeInSection>
              <div className="mx-auto max-w-2xl text-center">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                  How it works
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Three steps, then a habit
                </h2>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  No setup, no manual entry. Open the app at the masjid and you&apos;re tracking.
                </p>
              </div>
            </FadeInSection>

            <StaggerContainer
              staggerDelay={0.15}
              className="mt-16 grid gap-6 md:grid-cols-3"
            >
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={staggerChildVariants}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 280, damping: 22 }}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-shadow hover:shadow-xl"
                  >
                    {/* Step number badge */}
                    <div className="absolute right-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary)] text-xs font-bold text-[var(--primary-foreground)] shadow-md">
                      {step.number}
                    </div>

                    {/* Phone preview area */}
                    <div className="relative flex h-[400px] items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--primary)]/12 via-[var(--primary)]/5 to-transparent">
                      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent" />
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative w-44 h-[355px]"
                      >
                        <Image
                          src="/iphone-frame.png"
                          alt={step.title}
                          width={176}
                          height={355}
                          className="absolute inset-0 w-full h-full object-contain z-10"
                        />
                        <div className={phoneViewportClassName}>
                          <Image
                            src={step.screenshot}
                            alt={step.caption}
                            width={176}
                            height={323}
                            className="h-full w-full object-cover object-top"
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Card body */}
                    <div className="flex flex-1 flex-col gap-3 p-7">
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
                        {step.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </StaggerContainer>

            {/* Connecting line on desktop */}
            <FadeInSection delay={0.4}>
              <p className="mt-12 text-center text-sm text-[var(--muted-foreground)]">
                That&apos;s it. The streak starts as soon as you do.
              </p>
            </FadeInSection>
          </div>
        </section>

        {/* Features grid */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <FadeInSection>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                Features
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need in one app
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Masjid finder, prayer reminders, attendance tracking, and friendly community — together, in your pocket.
              </p>
            </div>
          </FadeInSection>

          <StaggerContainer
            staggerDelay={0.08}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                variants={staggerChildVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition-colors group-hover:bg-[var(--primary)] group-hover:text-[var(--primary-foreground)]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-[var(--muted-foreground)] leading-relaxed">
                  {body}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>

          <FadeInSection delay={0.2}>
            <p className="mt-12 text-center text-sm text-[var(--muted-foreground)]">
              Available on iOS and Android · Light and Dark mode
            </p>
          </FadeInSection>
        </section>

        {/* Screenshots showcase */}
        <section id="screenshots" className="mx-auto max-w-7xl px-6 py-24">
          <FadeInSection>
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                A look inside
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Designed to be quiet, calm, and useful
              </h2>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                Clean screens that get out of your way so you can focus on prayer.
              </p>
            </div>
          </FadeInSection>

          <StaggerContainer
            staggerDelay={0.12}
            className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center"
          >
            {[1, 2, 3, 4, 5].map((n, idx) => (
              <motion.div
                key={n}
                variants={staggerChildVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center"
              >
                <div className="relative w-56 h-[450px]">
                  <Image
                    src="/iphone-frame.png"
                    alt={`Qiyam screen ${n}`}
                    width={224}
                    height={450}
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                  <div className={phoneViewportClassName}>
                    <Image
                      src={`/screenshot-${n}.jpg`}
                      alt={`Qiyam screenshot ${n}`}
                      width={190}
                      height={385}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-[var(--muted-foreground)]">
                  {screenshotCaptions[idx]}
                </p>
              </motion.div>
            ))}
          </StaggerContainer>
        </section>

        {/* Community / leaderboard highlight */}
        <section className="bg-section-warm border-y border-[var(--border)]/60">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
            <FadeInSection>
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                  Community
                </span>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Climb the leaderboard, gently.
                </h2>
                <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                  Friendly ranking with the ummah turns consistency into shared encouragement — never status. Invite friends or family, build streaks together, and quietly cheer each other on.
                </p>

                <ul className="mt-6 space-y-3 text-[var(--foreground)]">
                  <li className="flex items-start gap-3">
                    <Trophy className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <span>Achievements unlock as you build the habit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <span>Compare progress on a community leaderboard</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <LineChart className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <span>See exactly which prayers and masjids you frequent</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection direction="left">
              <div className="relative mx-auto flex justify-center">
                <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[260px] rounded-[3rem] bg-[var(--primary)]/15 blur-3xl" />
                <div className="relative w-56 h-[450px]">
                  <Image
                    src="/iphone-frame.png"
                    alt="Qiyam leaderboard"
                    width={224}
                    height={450}
                    className="absolute inset-0 w-full h-full object-contain z-10"
                  />
                  <div className={phoneViewportClassName}>
                    <Image
                      src="/screenshot-5.jpg"
                      alt="Qiyam leaderboard screen"
                      width={190}
                      height={385}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
          <FadeInSection>
            <div className="text-center">
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--primary)]">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Frequently asked questions
              </h2>
            </div>
          </FadeInSection>

          <StaggerContainer staggerDelay={0.08} className="mt-12 space-y-3">
            {faqs.map((item, idx) => (
              <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={idx === 0} />
            ))}
          </StaggerContainer>
        </section>

        {/* Final CTA */}
        <section id="download" className="px-6 pb-24">
          <FadeInSection>
            <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--primary)] px-8 py-16 text-center text-[var(--primary-foreground)]">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

              <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
                Start tracking with Qiyam
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-base leading-relaxed opacity-90">
                Download the app and check in at your next prayer. The streak starts as soon as you do.
              </p>

              <div className="relative mt-8 flex justify-center">
                <StoreButtons />
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>
    </div>
  );
}
