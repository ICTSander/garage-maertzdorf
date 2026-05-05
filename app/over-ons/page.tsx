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

const waarden = [
  {
    title: "Eerlijkheid",
    description:
      "Wij bespreken altijd vooraf wat er nodig is en wat de kosten zijn. Geen verrassingen achteraf — alleen eerlijk advies."
  },
  {
    title: "Vakmanschap",
    description:
      "Meer dan 50 jaar ervaring en continue bijscholing zorgen voor de beste kwaliteit. Wij doen alleen wat nodig is."
  },
  {
    title: "Persoonlijk",
    description:
      "Bij ons bent u geen nummer. Wij nemen de tijd voor u, bespreken uw wensen en helpen u verder met een glimlach."
  }
];

export default function OverOnsPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="container-max">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Over ons
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Al meer dan 50 jaar een vertrouwd adres voor automobilisten in
            Bocholtz en omgeving.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-max">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <AnimateOnScroll>
              <img
                src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80"
                alt="Werkplaats Autobedrijf Maertzdorf"
                className="h-64 w-full rounded-2xl object-cover sm:h-80"
                loading="lazy"
              />
            </AnimateOnScroll>

            <AnimateOnScroll delay={120}>
              <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl">
                Een familiebedrijf met roots in Bocholtz
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                Autobedrijf Maertzdorf is geworteld in de gemeenschap van
                Bocholtz. Wat begon als een klein garagebedrijf is generatie na
                generatie uitgegroeid tot een complete werkplaats — en een
                begrip in de regio.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                Vandaag de dag bieden wij een volledig pakket aan: van
                APK-keuring en onderhoud tot professioneel spuitwerk en
                schadeherstel — voor vrijwel alle merken personenauto's en
                lichte bedrijfswagens.
              </p>

              <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                  Locatie
                </p>
                <p className="mt-2 text-sm font-semibold text-neutral-900">
                  {siteConfig.address.street}, {siteConfig.address.postcode}{" "}
                  {siteConfig.address.city}
                </p>
                <p className="mt-1 text-xs text-neutral-500">
                  Centraal gelegen in het Heuvelland, goed bereikbaar vanuit
                  Simpelveld, Vaals, Kerkrade en Gulpen.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="container-max">
          <AnimateOnScroll>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
              Onze aanpak
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Wat u van ons mag verwachten
            </h2>
          </AnimateOnScroll>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {waarden.map((w, i) => (
              <AnimateOnScroll key={w.title} delay={i * 90}>
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                  <h3 className="font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-white/45">
                    {w.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-500 py-14">
        <div className="container-max text-center">
          <AnimateOnScroll>
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Langskomen of een afspraak maken?
            </h2>
            <p className="mt-3 text-sm text-white/80">
              U bent van harte welkom in Bocholtz.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-700 transition-colors hover:bg-primary-50"
              >
                Neem contact op
              </Link>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10"
              >
                Bel ons
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
