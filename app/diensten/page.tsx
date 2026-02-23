import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten voor garages",
  description:
    "Overzicht van onze diensten: websites, leadformulieren en maandelijkse optimalisatie voor lokale garages.",
  openGraph: {
    title: "Diensten voor garages",
    description:
      "Van snelle websites tot slimme leadformulieren: alles gericht op meer afspraken in je werkplaats."
  }
};

export default function DienstenPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Wat we voor je garage doen
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          We richten ons op &eacute;&eacute;n ding:{" "}
          <span className="font-semibold">meer goede aanvragen voor jouw garage</span>.
          Geen vage marketing, maar een duidelijke website en formulieren die
          werken.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            1. Websites voor garages
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            Moderne, snelle website die leads oplevert
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            We bouwen een overzichtelijke site waarin direct duidelijk is wat je
            doet, waar je zit en hoe klanten een afspraak kunnen aanvragen. Met
            duidelijke knoppen, heldere teksten en een mobielvriendelijk design.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>Mobielvriendelijk (werkt perfect op telefoon en tablet)</li>
            <li>Snel laden, ook op 4G in de werkplaats</li>
            <li>Duidelijke call-to-actions voor apk, onderhoud en reparatie</li>
            <li>Optie voor meerdere vestigingen / locaties</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            2. Online leadformulieren
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            Slimme formulieren voor meer afspraken
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            We plaatsen op strategische plekken formulieren: algemene afspraak,
            apk-aanvraag, onderhoudsaanvraag of actiepagina. Ingevulde leads
            komen direct in je mailbox, zodat jij terug kunt bellen.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>Leadformulieren per dienst (apk, onderhoud, banden, etc.)</li>
            <li>Directe e-mail notificaties naar jouw inbox</li>
            <li>Velden afgestemd op wat jij moet weten voor een goede offerte</li>
            <li>Beveiligde verzending via een externe formulierdienst</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            3. Maandelijkse optimalisatie
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            Elke maand een beetje beter
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            We kijken maandelijks mee naar de ingevulde formulieren en hoe
            bezoekers zich gedragen. Op basis daarvan passen we teksten, knoppen
            en formulieren aan voor meer kwaliteit en meer aanvragen.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>Analyse van ingevulde leads (hoe zijn ze binnengekomen?)</li>
            <li>A/B testen van teksten en knoppen</li>
            <li>Aanpassingen op seizoensacties (winter-/zomerbanden, airco)</li>
            <li>Rapportage in duidelijke taal, geen marketingjargon</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm shadow-slate-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            4. Techniek & support
          </p>
          <h2 className="mt-2 text-sm font-semibold text-slate-900">
            We regelen de technische kant
          </h2>
          <p className="mt-2 text-xs text-slate-600">
            Geen zorgen over hosting, updates of beveiliging. We draaien je
            website op moderne technologie (Next.js) en zorgen dat alles blijft
            werken.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>Snelle hosting in de cloud</li>
            <li>Automatische beveiligingsupdates</li>
            <li>Monitoring op uptime</li>
            <li>Support per mail voor wijzigingen en vragen</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm shadow-primary-100/80">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              Benieuwd hoe dit er voor jouw garage uitziet?
            </p>
            <p className="mt-1 text-xs text-slate-700">
              We maken gratis een demo op basis van jouw huidige situatie.
              Daarna beslis je pas of je verder wilt.
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

