import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";
import { AnimateOnScroll } from "../components/AnimateOnScroll";
import { CountUp } from "../components/CountUp";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Autobedrijf Maertzdorf – Bocholtz",
  description:
    "Autobedrijf Maertzdorf in Bocholtz: al meer dan 50 jaar specialist voor APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel. Maak vandaag nog een afspraak.",
  openGraph: {
    title: "Autobedrijf Maertzdorf – Bocholtz",
    description:
      "Meer dan 50 jaar ervaring in APK, onderhoud, reparatie, spuitwerk en schadeherstel in Zuid-Limburg.",
    type: "website"
  }
};

/* ── Data ─────────────────────────────────────────────────── */

const diensten = [
  {
    nr: "01",
    title: "APK-keuring",
    sub: "RDW-erkend · Vaak dezelfde dag",
    description:
      "Snelle, nauwkeurige keuring met direct advies. Herkeuring plannen wij zo snel mogelijk in.",
  },
  {
    nr: "02",
    title: "Onderhoud & service",
    sub: "Kleine en grote beurt · Alle merken",
    description:
      "Regelmatig onderhoud verlengt de levensduur van uw auto. Van olieverversing tot distributieriemen.",
  },
  {
    nr: "03",
    title: "Reparatie",
    sub: "Diagnose met moderne apparatuur",
    description:
      "Waarschuwingslampje of vreemd geluid? Wij vinden het probleem en lossen het op.",
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
    sub: "Deuk · Kras · Aanrijdingsschade",
    description:
      "Vakkundig herstel van plaatwerk en bumpers. Wij helpen ook bij verzekeringsclaims.",
  },
];

const reviews = [
  {
    name: "Inge de Boer",
    location: "Simpelveld",
    stars: 5,
    text: "Al jarenlang ga ik hier voor mijn APK en onderhoud. Eerlijk, snel en voor een eerlijke prijs. Nooit een onaangename verrassing.",
  },
  {
    name: "Thomas Willems",
    location: "Kerkrade",
    stars: 5,
    text: "Het schadeherstel na een aanrijding is perfect afgehandeld. De auto zag er beter uit dan ervoor. Echt top vakmanschap.",
  },
  {
    name: "Sandra Hendriks",
    location: "Vaals",
    stars: 5,
    text: "Vriendelijk personeel en snel geholpen. Mijn auto stond dezelfde dag nog klaar na de beurt. Zeker voor herhaling vatbaar!",
  },
];

const hours = [
  { day: "Maandag – vrijdag", time: "08:00 – 17:30" },
  { day: "Zaterdag", time: "08:00 – 12:00" },
  { day: "Zondag", time: "Gesloten" },
];

/* ── Page ─────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO — split layout
      ═══════════════════════════════════════════════════════ */}
      <section className="lg:grid lg:min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left: dark text panel */}
        <div className="flex flex-col justify-center bg-neutral-950 px-6 py-20 sm:px-10 lg:px-16 lg:py-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500">
            Bocholtz · Zuid-Limburg · Est. 1970
          </p>

          <h1 className="mt-6 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Auto&shy;bedrijf<br />
            <span className="text-primary-500">Maertz&shy;dorf</span>
          </h1>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-400">
            Meer dan 50 jaar vakmanschap voor uw auto — APK-keuring,
            onderhoud, reparatie, spuitwerk en schadeherstel. Persoonlijk,
            eerlijk en altijd dichtbij.
          </p>

          {/* Primary CTA row */}
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary-700"
            >
              Afspraak maken
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-sm border border-neutral-700 px-6 py-3.5 text-sm font-semibold text-neutral-300 transition-colors hover:border-neutral-500 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {siteConfig.contactPhone}
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-neutral-800 pt-9">
            {[
              { v: "50+", l: "jaar ervaring" },
              { v: "RDW", l: "erkend" },
              { v: "Alle", l: "merken" },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-xl font-black text-white sm:text-2xl">{s.v}</p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-widest text-neutral-500">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: full bleed photo */}
        <div className="relative h-72 sm:h-96 lg:h-auto">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=85"
            alt="Autobedrijf Maertzdorf werkplaats"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          {/* Urgency badge */}
          <div className="absolute bottom-5 left-5 rounded-sm bg-neutral-950/90 px-3 py-2 backdrop-blur-sm">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary-500">
              ● Vandaag nog geholpen
            </p>
            <p className="mt-0.5 text-xs text-neutral-300">APK · Onderhoud · Reparatie</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          DIENSTEN — editorial numbered list
      ═══════════════════════════════════════════════════════ */}
      <section id="diensten" className="bg-neutral-50 py-20 sm:py-28 scroll-mt-16">
        <div className="container-max">
          <AnimateOnScroll variant="up">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
                  Diensten
                </p>
                <h2 className="mt-2 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
                  Wat wij doen
                </h2>
              </div>
              <a
                href="#contact"
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400 transition-colors hover:text-primary-600 sm:mt-0"
              >
                Afspraak maken
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>

          <div className="mt-10 divide-y divide-neutral-200">
            {diensten.map((d, i) => (
              <AnimateOnScroll key={d.nr} delay={i * 60} variant="up">
                <a
                  href="#contact"
                  className="group flex items-start gap-6 py-7 transition-all duration-200 hover:bg-neutral-100 sm:gap-10 sm:px-3 sm:py-8"
                >
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
                </a>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          STATS — animated counters
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="container-max">
          <div className="grid grid-cols-2 gap-px bg-neutral-800 lg:grid-cols-4">
            {[
              { countTo: 50, suffix: "+", label: "jaar ervaring" },
              { countTo: 5,  suffix: "",  label: "specialisaties" },
              { countTo: 53, suffix: "",  label: "jaar al RDW erkend", prefix: "Sinds '70" },
              { countTo: 100, suffix: "%", label: "eerlijk advies" },
            ].map((s, i) => (
              <AnimateOnScroll key={s.label} delay={i * 80} variant="fade" threshold={0.4}>
                <div className="flex flex-col items-center justify-center bg-neutral-950 py-12 px-4 text-center">
                  <span className="text-5xl font-black text-white sm:text-6xl lg:text-7xl">
                    {s.prefix ? (
                      s.prefix
                    ) : (
                      <CountUp to={s.countTo} suffix={s.suffix} />
                    )}
                  </span>
                  <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                    {s.label}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          ABOUT — image left / text right
      ═══════════════════════════════════════════════════════ */}
      <section id="over-ons" className="scroll-mt-16 lg:grid lg:grid-cols-2">
        {/* Image */}
        <AnimateOnScroll variant="left" className="relative h-72 sm:h-96 lg:h-full lg:min-h-[540px]">
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80"
            alt="Vakkundige monteur aan het werk"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </AnimateOnScroll>

        {/* Text */}
        <div className="bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <AnimateOnScroll variant="right" delay={120}>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
              Over ons
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-tight text-neutral-900 sm:text-5xl">
              Halve eeuw<br />
              <span className="text-primary-600">vakmanschap</span>
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-600">
              Autobedrijf Maertzdorf begon als een klein familiebedrijf in
              Bocholtz en groeide generatie op generatie uit tot de volledige
              werkplaats van vandaag. We werken voor alle merken —{" "}
              <strong className="font-semibold text-neutral-900">
                eerlijk, transparant en zonder verborgen kosten.
              </strong>
            </p>

            <ul className="mt-6 space-y-3">
              {[
                "Vooraf duidelijkheid over kosten — nooit verrassingen",
                "Alle merken personenauto's en lichte bedrijfswagens",
                "Moderne diagnose-apparatuur, vakkundig personeel",
                "Snelle doorlooptijd · Flexibele planning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-600" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-sm border border-neutral-200 bg-white p-4">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Locatie
              </p>
              <p className="mt-1.5 font-bold text-neutral-900">
                {siteConfig.address.street}, {siteConfig.address.postcode}{" "}
                {siteConfig.address.city}
              </p>
              <p className="mt-0.5 text-xs text-neutral-500">
                Goed bereikbaar vanuit Simpelveld, Vaals, Kerkrade en Gulpen.
              </p>
            </div>

            <div className="mt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary-700"
              >
                Maak een afspraak
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          REVIEWS
      ═══════════════════════════════════════════════════════ */}
      <section id="reviews" className="scroll-mt-16 bg-white py-20 sm:py-24">
        <div className="container-max">
          <AnimateOnScroll variant="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
              Klantervaringen
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Wat klanten zeggen
            </h2>
          </AnimateOnScroll>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {reviews.map((r, i) => (
              <AnimateOnScroll key={r.name} delay={i * 90} variant="up">
                <div className="flex h-full flex-col rounded-sm border border-neutral-200 bg-neutral-50 p-6">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.stars }).map((_, j) => (
                      <svg key={j} className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  {/* Quote */}
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-600">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  {/* Attribution */}
                  <div className="mt-5 border-t border-neutral-200 pt-4">
                    <p className="text-sm font-bold text-neutral-900">{r.name}</p>
                    <p className="text-xs text-neutral-400">{r.location}</p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CONTACT — embedded form + info
      ═══════════════════════════════════════════════════════ */}
      <section id="contact" className="scroll-mt-16 bg-neutral-50 py-20 sm:py-24">
        <div className="container-max">
          <AnimateOnScroll variant="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
              Contact
            </p>
            <h2 className="mt-2 text-4xl font-black tracking-tight text-neutral-900 sm:text-5xl">
              Direct geholpen
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-500">
              Vul het formulier in of bel ons direct. Wij reageren zo snel
              mogelijk — vaak nog dezelfde dag.
            </p>
          </AnimateOnScroll>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
            {/* Form */}
            <AnimateOnScroll variant="left" delay={80}>
              <ContactForm />
            </AnimateOnScroll>

            {/* Info sidebar */}
            <AnimateOnScroll variant="right" delay={150}>
              <div className="space-y-4">
                {/* Phone */}
                <div className="rounded-sm border border-neutral-200 bg-white p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Liever bellen?
                  </p>
                  <a
                    href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                    className="group mt-3 flex items-center gap-3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-primary-600 text-white">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-lg font-black text-neutral-900 transition-colors group-hover:text-primary-600">
                        {siteConfig.contactPhone}
                      </p>
                      <p className="text-xs text-neutral-400">Klik om direct te bellen</p>
                    </div>
                  </a>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="mt-3 block text-sm text-neutral-500 transition-colors hover:text-primary-600"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>

                {/* Hours */}
                <div className="rounded-sm border border-neutral-200 bg-white p-6">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Openingstijden
                  </p>
                  <ul className="mt-3 space-y-2">
                    {hours.map((h) => (
                      <li key={h.day} className="flex items-center justify-between text-sm">
                        <span className="text-neutral-600">{h.day}</span>
                        <span className={`font-semibold ${h.time === "Gesloten" ? "text-neutral-400" : "text-neutral-900"}`}>
                          {h.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Address */}
                <div className="rounded-sm bg-neutral-100 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                    Adres
                  </p>
                  <p className="mt-2 font-bold text-neutral-900">
                    Autobedrijf Maertzdorf
                  </p>
                  <p className="mt-0.5 text-sm text-neutral-600">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postcode} {siteConfig.address.city}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FINAL CTA STRIP
      ═══════════════════════════════════════════════════════ */}
      <section className="bg-primary-600 py-12">
        <div className="container-max">
          <AnimateOnScroll variant="up">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-2xl font-black text-white sm:text-3xl">
                  Klaar om langs te komen?
                </p>
                <p className="mt-1 text-sm text-red-100">
                  Wij zijn er voor u — vandaag nog.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-sm bg-white px-6 py-3 text-sm font-bold text-primary-700 transition-colors hover:bg-red-50"
                >
                  Afspraak maken
                </a>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-sm border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-colors hover:border-white/60 hover:bg-white/10"
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
