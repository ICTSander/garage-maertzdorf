import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../lib/siteConfig";

export const metadata: Metadata = {
  title: "Autobedrijf Maertzdorf – Bocholtz",
  description:
    "Autobedrijf Maertzdorf in Bocholtz: al meer dan 50 jaar uw specialist voor APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel.",
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
      "Wij voeren APK-keuringen snel en vakkundig uit. Uw auto is bij ons in vertrouwde handen.",
    icon: "1"
  },
  {
    title: "Onderhoud",
    description:
      "Regelmatig onderhoud verlengt de levensduur van uw auto. Wij verzorgen kleine en grote beurten.",
    icon: "2"
  },
  {
    title: "Reparatie",
    description:
      "Van motorproblemen tot elektronische storingen: wij diagnosticeren en repareren alle merken.",
    icon: "3"
  },
  {
    title: "Spuitwerk",
    description:
      "Professioneel spuitwerk voor een perfect resultaat. Van kleine lakschade tot een volledige spuitbeurt.",
    icon: "4"
  },
  {
    title: "Schadeherstel",
    description:
      "Schade aan uw auto? Wij herstellen deuk-, kras- en botsingschade vakkundig en snel.",
    icon: "5"
  }
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-neutral-800 text-white">
        <div className="container-max py-16 sm:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-400">
            Bocholtz, Zuid-Limburg
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]">
            Meer dan 50 jaar{" "}
            <span className="underline decoration-primary-500 decoration-2 underline-offset-4">
              vakmanschap
            </span>{" "}
            voor uw auto
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 sm:text-base">
            Autobedrijf Maertzdorf is al meer dan een halve eeuw uw betrouwbare
            partner voor APK-keuring, onderhoud, reparatie, spuitwerk en
            schadeherstel. Persoonlijk, vakkundig en altijd dichtbij.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-600"
            >
              Maak een afspraak
            </Link>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Bel direct: {siteConfig.contactPhone}
            </a>
          </div>
        </div>
      </section>

      {/* Diensten Section */}
      <section className="container-max py-14 sm:py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Onze diensten
          </h2>
          <p className="mt-3 text-sm text-neutral-600">
            Van APK-keuring tot schadeherstel: wij bieden een compleet pakket
            aan diensten voor uw auto. Alles onder &eacute;&eacute;n dak,
            uitgevoerd door ervaren vakmensen.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((dienst) => (
            <div
              key={dienst.title}
              className="flex flex-col gap-2 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/60"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-xs font-semibold text-primary-700">
                {dienst.icon}
              </span>
              <h3 className="text-sm font-semibold text-neutral-900">
                {dienst.title}
              </h3>
              <p className="text-xs text-neutral-600">{dienst.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/diensten"
            className="inline-flex text-sm font-semibold text-primary-600 underline underline-offset-4 hover:text-primary-700"
          >
            Bekijk al onze diensten
          </Link>
        </div>
      </section>

      {/* Waarom Maertzdorf Section */}
      <section className="border-y bg-neutral-50">
        <div className="container-max py-14 sm:py-16">
          <h2 className="text-xl font-semibold text-neutral-900">
            Waarom Autobedrijf Maertzdorf?
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/60">
              <p className="font-semibold text-neutral-900">50+ jaar ervaring</p>
              <p className="mt-1 text-xs text-neutral-600">
                Al meer dan een halve eeuw bieden wij betrouwbare service aan
                automobilisten in Zuid-Limburg.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/60">
              <p className="font-semibold text-neutral-900">
                Alles onder &eacute;&eacute;n dak
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                APK, onderhoud, reparatie, spuitwerk en schadeherstel: u hoeft
                niet verder te zoeken.
              </p>
            </div>
            <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/60">
              <p className="font-semibold text-neutral-900">
                Persoonlijke aanpak
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                Bij ons bent u geen nummer. Wij nemen de tijd om uw wensen te
                bespreken en u eerlijk te adviseren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container-max py-14 sm:py-16">
        <div className="rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm shadow-primary-100/80 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-neutral-900">
                Afspraak maken of een vraag?
              </h2>
              <p className="mt-1 text-sm text-neutral-700">
                Neem contact met ons op. Wij helpen u graag verder.
              </p>
              <p className="mt-2 text-xs text-neutral-600">
                {siteConfig.address.street}, {siteConfig.address.postcode}{" "}
                {siteConfig.address.city}
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-400/30 hover:bg-primary-600"
              >
                Contactformulier
              </Link>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border border-primary-300 px-5 py-2.5 text-sm font-semibold text-primary-700 hover:bg-primary-100"
              >
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}