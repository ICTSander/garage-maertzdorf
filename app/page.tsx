import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";
import { AnimateOnScroll } from "../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Autobedrijf Maertzdorf – Bocholtz",
  description:
    "Autobedrijf Maertzdorf in Bocholtz: al meer dan 50 jaar specialist voor APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel.",
  openGraph: {
    title: "Autobedrijf Maertzdorf – Bocholtz",
    description:
      "Meer dan 50 jaar ervaring in APK, onderhoud, reparatie, spuitwerk en schadeherstel in Zuid-Limburg.",
    type: "website"
  }
};

const diensten = [
  {
    title: "APK-keuring",
    description:
      "RDW-erkend keurstation. Keuring vaak dezelfde dag mogelijk, met duidelijke uitleg en herkeuring in één keer geregeld.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Onderhoud",
    description:
      "Kleine en grote beurten, olieverversing, remmen, distributieriem en meer — voor alle merken.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.653-4.655m5.14-5.63l3.5-3.5a2.498 2.498 0 013.107 3.107l-3.5 3.5" />
      </svg>
    )
  },
  {
    title: "Reparatie",
    description:
      "Van motorproblemen tot elektronische storingen: diagnose en reparatie met moderne apparatuur.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    title: "Spuitwerk",
    description:
      "Professioneel spuitwerk met nauwkeurige kleurmatching. Van kleine bijwerking tot volledige overlakking.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    )
  },
  {
    title: "Schadeherstel",
    description:
      "Van kleine deuken tot aanrijdingsschade. Vakkundig herstel van plaatwerk, bumpers en koetswerk.",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  }
];

const stats = [
  { value: "50+", label: "jaar ervaring" },
  { value: "5", label: "diensten" },
  { value: "RDW", label: "erkend" },
  { value: "Alle", label: "merken welkom" }
];

const voordelen = [
  "Eerlijk en transparant advies",
  "Korte wachttijden, flexibele planning",
  "Alle merken personenauto's en bestelauto's",
  "Moderne diagnose-apparatuur"
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[92vh] items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-neutral-900/78" />

        <div className="relative z-10 container-max py-24 sm:py-32">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-400">
            Bocholtz · Zuid-Limburg · Sinds 1970
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Meer dan 50 jaar{" "}
            <span className="text-primary-400">vakmanschap</span>{" "}
            voor uw auto
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
            Autobedrijf Maertzdorf is uw specialist voor APK-keuring,
            onderhoud, reparatie, spuitwerk en schadeherstel. Persoonlijk,
            vakkundig en altijd eerlijk.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
            >
              Afspraak maken
            </Link>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Bel {siteConfig.contactPhone}
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/25">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            Scroll
          </span>
          <svg
            className="h-4 w-4 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="border-b border-white/5 bg-neutral-800">
        <div className="container-max py-10">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/35">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIENSTEN ──────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="container-max">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600">
              Onze diensten
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Alles voor uw auto,
              <br />
              onder één dak
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-500">
              Van periodieke APK tot vakkundig schadeherstel. Bij Autobedrijf
              Maertzdorf bent u voor al uw autobehoeften aan het juiste adres.
            </p>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {diensten.map((dienst, i) => (
              <AnimateOnScroll key={dienst.title} delay={i * 75}>
                <div className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                    {dienst.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      {dienst.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                      {dienst.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-10 text-center" delay={450}>
            <Link
              href="/diensten"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700"
            >
              Bekijk alle diensten
              <svg
                className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="bg-neutral-900 py-20 sm:py-28">
        <div className="container-max">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80"
                  alt="Vakkundig monteur aan het werk"
                  className="h-72 w-full object-cover sm:h-[420px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={150}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
                Over ons
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Een halve eeuw
                <br />
                vakmanschap
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/50">
                Wat begon als een klein garagebedrijf in Bocholtz is
                uitgegroeid tot een complete werkplaats. Al meer dan 50 jaar
                staat Autobedrijf Maertzdorf bekend om persoonlijk contact,
                eerlijk advies en vakkundig werk voor alle merken.
              </p>
              <ul className="mt-7 space-y-3">
                {voordelen.map((v) => (
                  <li
                    key={v}
                    className="flex items-center gap-3 text-sm text-white/65"
                  >
                    <svg
                      className="h-4 w-4 shrink-0 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {v}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/over-ons"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/35 hover:bg-white/5"
                >
                  Meer over ons
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-primary-500 py-16 sm:py-20">
        <div className="container-max">
          <AnimateOnScroll className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Klaar voor een afspraak?
            </h2>
            <p className="mt-4 text-base text-white/80">
              Neem contact op of bel ons direct. Wij helpen u graag verder.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Contactformulier
              </Link>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Bel {siteConfig.contactPhone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
