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
    nr: "01",
    title: "APK-keuring",
    sub: "RDW-erkend · Vaak dezelfde dag",
    description:
      "Snelle, nauwkeurige keuring met direct advies. Herkeuring in één keer geregeld.",
  },
  {
    nr: "02",
    title: "Onderhoud & service",
    sub: "Alle merken · Kleine en grote beurt",
    description:
      "Regelmatig onderhoud verlengt de levensduur van uw auto. Van olieverversing tot distributieriemen.",
  },
  {
    nr: "03",
    title: "Reparatie",
    sub: "Diagnose met moderne apparatuur",
    description:
      "Waarschuwingslampje? Vreemd geluid? Wij vinden het probleem en lossen het op.",
  },
  {
    nr: "04",
    title: "Spuitwerk",
    sub: "Kleurmatching op computerbasis",
    description:
      "Van plaatselijke bijwerking tot volledige overlakking — professioneel resultaat, gegarandeerd.",
  },
  {
    nr: "05",
    title: "Schadeherstel",
    sub: "Deuk, kras of aanrijdingsschade",
    description:
      "Vakkundig herstel van plaatwerk, bumpers en koetswerk. Hulp bij verzekeringsafwikkeling.",
  },
];

const stats = [
  { value: "50+", label: "jaar ervaring" },
  { value: "5", label: "specialisaties" },
  { value: "RDW", label: "erkend" },
  { value: "∞", label: "merken welkom" },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO: SPLIT LAYOUT ─────────────────────────────── */}
      <section className="lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left — dark, text */}
        <div className="flex flex-col justify-center bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500">
            Bocholtz · Zuid-Limburg · Est. 1970
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Auto&shy;bedrijf<br />
            <span className="text-primary-500">Maertz&shy;dorf</span>
          </h1>

          <p className="mt-7 max-w-sm text-sm leading-relaxed text-neutral-400">
            Meer dan 50 jaar vakmanschap voor APK-keuring, onderhoud,
            reparatie, spuitwerk en schadeherstel. Persoonlijk, eerlijk,
            altijd dichtbij.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              Afspraak maken
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-sm border border-neutral-700 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.contactPhone}
            </a>
          </div>

          {/* Mini stats row */}
          <div className="mt-14 grid grid-cols-3 gap-4 border-t border-neutral-800 pt-8">
            {[
              { v: "50+", l: "jaar" },
              { v: "5", l: "diensten" },
              { v: "RDW", l: "erkend" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-2xl font-black text-white">{s.v}</p>
                <p className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-neutral-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — full photo */}
        <div className="relative h-72 sm:h-96 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85"
            alt="Autobedrijf Maertzdorf werkplaats"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* subtle red tint at bottom edge */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-primary-900/30 to-transparent" />
        </div>
      </section>

      {/* ─── DIENSTEN: EDITORIAL LIST ───────────────────────── */}
      <section className="bg-neutral-50 py-20 sm:py-28">
        <div className="container-max">
          <AnimateOnScroll>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
                  Diensten
                </p>
                <h2 className="mt-2 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
                  Wat wij doen
                </h2>
              </div>
              <Link
                href="/diensten"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 transition-colors hover:text-primary-600 sm:mt-0"
              >
                Alle diensten
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>

          <div className="mt-10 divide-y divide-neutral-200">
            {diensten.map((d, i) => (
              <AnimateOnScroll key={d.nr} delay={i * 65}>
                <div className="group flex items-start gap-6 py-7 transition-colors hover:bg-neutral-100 sm:gap-10 sm:px-3 sm:py-8">
                  <span className="w-10 shrink-0 font-mono text-xs font-bold text-primary-500 sm:w-12">
                    {d.nr}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
                      <h3 className="text-lg font-bold text-neutral-900 sm:text-xl">
                        {d.title}
                      </h3>
                      <span className="text-xs font-medium text-neutral-400">
                        {d.sub}
                      </span>
                    </div>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-500">
                      {d.description}
                    </p>
                  </div>
                  <svg
                    className="mt-1 hidden h-5 w-5 shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-primary-500 sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS: HUGE NUMBERS ────────────────────────────── */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-px bg-neutral-800 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center bg-neutral-950 py-12 px-4 text-center"
              >
                <span className="text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                  {s.value}
                </span>
                <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT: IMAGE LEFT / TEXT RIGHT ─────────────────── */}
      <section className="lg:grid lg:grid-cols-2">
        {/* Image */}
        <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[520px]">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80"
            alt="Vakkundige monteur aan het werk"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
          <AnimateOnScroll>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
              Over ons
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Halve eeuw<br />
              <span className="text-primary-600">vakmanschap</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-500">
              Autobedrijf Maertzdorf begon als een klein familiebedrijf in
              Bocholtz en groeide generatie op generatie uit tot de volledige
              werkplaats die het vandaag is. Wij werken voor alle merken,
              eerlijk en transparant.
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Eerlijk advies, geen verborgen kosten",
                "Alle merken personenauto's en bestelauto's",
                "Moderne diagnose-apparatuur",
                "Snelle doorlooptijd, flexibele planning",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex gap-3">
              <Link
                href="/over-ons"
                className="inline-flex items-center gap-2 rounded-sm border border-neutral-300 px-5 py-2.5 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-400 hover:bg-neutral-100"
              >
                Meer over ons
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
              >
                Contact
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ─── CTA STRIP ──────────────────────────────────────── */}
      <section className="bg-primary-600 py-14 sm:py-16">
        <div className="container-max">
          <AnimateOnScroll>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  Klaar voor een afspraak?
                </p>
                <p className="mt-1.5 text-sm text-red-100">
                  Bel ons of gebruik het contactformulier. Wij reageren snel.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-bold text-primary-700 transition-colors hover:bg-red-50"
                >
                  Contactformulier
                </Link>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-sm border-2 border-white/25 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white/50 hover:bg-white/10"
                >
                  {siteConfig.contactPhone}
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
