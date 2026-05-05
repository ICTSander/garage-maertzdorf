import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../lib/siteConfig";
import { AnimateOnScroll } from "../../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Al meer dan 50 jaar is Autobedrijf Maertzdorf in Bocholtz een begrip in Zuid-Limburg. Lees meer over ons familiebedrijf.",
  openGraph: {
    title: "Over Autobedrijf Maertzdorf",
    description:
      "Een familiebedrijf met meer dan 50 jaar ervaring in Bocholtz, Zuid-Limburg."
  }
};

export default function OverOnsPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-16">
        <div className="container-max">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
            Over ons
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500">
            Al meer dan een halve eeuw uw vertrouwde adres in Bocholtz.
          </p>
        </div>
      </section>

      {/* Split: image left / story right */}
      <section className="lg:grid lg:grid-cols-2">
        <div className="relative h-72 sm:h-96 lg:h-full lg:min-h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=900&q=80"
            alt="Werkplaats Autobedrijf Maertzdorf"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="bg-neutral-50 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <AnimateOnScroll>
            <h2 className="text-3xl font-black tracking-tight text-neutral-900 sm:text-4xl">
              Een familiebedrijf<br />
              met roots in Bocholtz
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600">
              Autobedrijf Maertzdorf is geworteld in de gemeenschap van
              Bocholtz. Wat begon als een klein garagebedrijf is generatie na
              generatie uitgegroeid tot een complete werkplaats — en een
              begrip in de regio.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600">
              Vandaag bieden wij een volledig pakket: van APK-keuring en
              onderhoud tot professioneel spuitwerk en schadeherstel — voor
              vrijwel alle merken personenauto's en lichte bedrijfswagens.
            </p>

            <div className="mt-8 rounded-sm border border-neutral-200 bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                Locatie
              </p>
              <p className="mt-2 font-bold text-neutral-900">
                {siteConfig.address.street}, {siteConfig.address.postcode}{" "}
                {siteConfig.address.city}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                Centraal in het Heuvelland. Goed bereikbaar vanuit Simpelveld,
                Vaals, Kerkrade en Gulpen.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Values — dark */}
      <section className="bg-neutral-950 py-16 sm:py-20">
        <div className="container-max">
          <AnimateOnScroll>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-500">
              Onze aanpak
            </p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              Wat u mag verwachten
            </h2>
          </AnimateOnScroll>

          <div className="mt-10 grid gap-px bg-neutral-800 sm:grid-cols-3">
            {[
              {
                title: "Eerlijkheid",
                body: "Vooraf duidelijkheid over kosten. Geen verrassingen achteraf. Wij doen alleen wat nodig is.",
              },
              {
                title: "Vakmanschap",
                body: "Meer dan 50 jaar ervaring, continue bijscholing en moderne apparatuur voor elke klus.",
              },
              {
                title: "Persoonlijk",
                body: "Bij ons bent u geen nummer. Wij nemen de tijd, luisteren en geven u eerlijk advies.",
              },
            ].map((w, i) => (
              <AnimateOnScroll key={w.title} delay={i * 80}>
                <div className="bg-neutral-950 p-8">
                  <div className="mb-3 h-px w-8 bg-primary-600" />
                  <h3 className="text-lg font-black text-white">{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-neutral-500">
                    {w.body}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12">
        <div className="container-max flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black text-white">
              Langskomen of een afspraak?
            </p>
            <p className="mt-1 text-sm text-red-100">
              U bent van harte welkom in Bocholtz.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-white px-5 py-2.5 text-sm font-bold text-primary-700 transition-colors hover:bg-red-50"
            >
              Neem contact op
            </Link>
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center rounded-sm border-2 border-white/25 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-white/50"
            >
              Bel ons
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
