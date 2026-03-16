import type { Metadata } from "next";
import Link from "next/link";

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
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Over Autobedrijf Maertzdorf
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Al meer dan 50 jaar is Autobedrijf Maertzdorf een vertrouwd adres
          voor automobilisten in Bocholtz en omgeving. Wat begon als een klein
          garagebedrijf is uitgegroeid tot een complete werkplaats waar
          vakmanschap en persoonlijke service centraal staan.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-700">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <h2 className="text-sm font-semibold text-slate-900">
              Een familiebedrijf met roots in Bocholtz
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Autobedrijf Maertzdorf is geworteld in de gemeenschap van
              Bocholtz. Generatie na generatie hebben wij ons vak verfijnd en
              onze diensten uitgebreid. Vandaag de dag bieden wij een compleet
              pakket aan: van APK-keuring en onderhoud tot professioneel
              spuitwerk en schadeherstel.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <h2 className="text-sm font-semibold text-slate-900">
              Onze aanpak
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              Wij geloven in eerlijk en transparant werken. Voordat wij aan de
              slag gaan, bespreken wij altijd wat er nodig is en wat de kosten
              zijn. Geen verrassingen achteraf. Wij doen alleen wat nodig is en
              adviseren u eerlijk over de staat van uw auto.
            </p>
            <ul className="mt-3 ml-4 list-disc space-y-1 text-xs text-slate-600">
              <li>Persoonlijk contact en eerlijk advies</li>
              <li>Vooraf duidelijkheid over kosten</li>
              <li>Vakkundig werk door ervaren monteurs</li>
              <li>Korte wachttijden en flexibele planning</li>
            </ul>
          </section>
        </div>

        <aside className="space-y-4 text-xs text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Locatie
            </p>
            <p className="mt-2 font-semibold text-slate-900">
              Bocholtz, Zuid-Limburg
            </p>
            <p className="mt-1">
              Centraal gelegen in het Heuvelland, goed bereikbaar vanuit
              Simpelveld, Vaals, Kerkrade en omstreken.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Wat u van ons mag verwachten
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Meer dan 50 jaar ervaring</li>
              <li>Alle merken welkom</li>
              <li>Persoonlijke en eerlijke service</li>
              <li>Alles onder &eacute;&eacute;n dak</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-primary-50/60 p-4 shadow-sm shadow-primary-100/80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-700">
              Langskomen?
            </p>
            <p className="mt-1 text-slate-800">
              U bent van harte welkom op ons adres: Reinert 11a, 6351 HK
              Bocholtz. Bel gerust voor een afspraak.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex text-xs font-semibold text-primary-700 underline underline-offset-4"
            >
              Neem contact op
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
