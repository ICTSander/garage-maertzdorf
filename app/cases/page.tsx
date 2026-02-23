import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cases (demo/voorbeeld)",
  description:
    "Twee voorbeeldcases van garages (demo/voorbeeld) om te laten zien hoe de websites en formulieren kunnen werken.",
  openGraph: {
    title: "Cases (demo/voorbeeld)",
    description:
      "Voorbeeldcases van garages om de aanpak van Garage Leads te laten zien."
  }
};

export default function CasesPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Cases (demo / voorbeeld)
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Hieronder zie je twee{" "}
          <span className="font-semibold">volledig fictieve voorbeeldcases</span>.
          Ze zijn puur bedoeld om te laten zien hoe een website en
          leadformulier voor jouw garage eruit k&uacute;nnen zien.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            Demo / voorbeeld
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
              Stads-garage
            </span>
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            Garage De Binnenstad – meer apk-aanvragen via mobiel
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Fictieve stads-garage met veel passantenverkeer en bestaande
            klanten. De oude website werkte slecht op mobiel, waardoor veel
            potenti&euml;le apk-aanvragen verloren gingen.
          </p>
          <div className="mt-3 space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Aanpak</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Nieuwe homepage met duidelijk apk-blok en grote knop</li>
              <li>Los apk-formulier met datumvoorkeur en kentekenveld</li>
              <li>Mobiel design getest op verschillende telefoons</li>
              <li>Korte teksten, gericht op snelheid en gemak</li>
            </ul>
          </div>
          <div className="mt-3 space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Resultaat (voorbeeld)</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Stijging in apk-aanvragen via de site t.o.v. oude site</li>
              <li>Minder telefoontjes met simpele vragen (meer via formulier)</li>
              <li>Betere planning door duidelijke voorkeursdatums in het formulier</li>
            </ul>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            Let op: dit is een voorbeeldcase om de werkwijze te illustreren. De
            genoemde namen, cijfers en resultaten zijn fictief.
          </p>
        </article>

        <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
            Demo / voorbeeld
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-700">
              Dorps-garage
            </span>
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            Autobedrijf Het Dorp – meer onderhoud en bandenwissels
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Fictieve dorps-garage die vooral op mond-tot-mond reclame draaide.
            Er was wel een website, maar die leverde nauwelijks concrete
            aanvragen op.
          </p>
          <div className="mt-3 space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Aanpak</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Specifieke pagina&apos;s voor onderhoud, apk en banden</li>
              <li>Formulieren per dienst, zodat leads meteen goed binnenkomen</li>
              <li>Eenvoudige uitleg van de stappen: afspraak → werkplaats → nazorg</li>
              <li>Prominent telefoonnummer voor vaste klanten die liever bellen</li>
            </ul>
          </div>
          <div className="mt-3 space-y-2 text-xs text-slate-600">
            <p className="font-semibold text-slate-900">Resultaat (voorbeeld)</p>
            <ul className="ml-4 list-disc space-y-1">
              <li>Meer online aanvragen voor onderhoud en bandenwissels</li>
              <li>Betere verdeling van werkplaatsen door geplande afspraken</li>
              <li>Meer &ldquo;nieuwe&rdquo; klanten uit omliggende dorpen</li>
            </ul>
          </div>
          <p className="mt-3 text-[11px] text-slate-500">
            Ook dit is een volledig fictieve case. In jouw demo laten we op
            basis van je huidige situatie zien wat haalbaar is.
          </p>
        </article>
      </div>

      <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm shadow-primary-100/80">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Een voorbeeld zien dat lijkt op jouw garage?
            </p>
            <p className="mt-1 text-xs text-slate-700">
              In de demo bouwen we een mini-case op basis van jouw gegevens.
              Dan zie je direct hoe dit in jouw situatie kan werken.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary-500/30 hover:bg-primary-700"
          >
            Gratis demo aanvragen
          </Link>
        </div>
      </div>
    </div>
  );
}

