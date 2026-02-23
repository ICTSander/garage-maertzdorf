import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prijzen pakketten",
  description:
    "Heldere prijzen voor websites en leadformulieren voor garages. Voorbeeldbedragen voor start- en groeipakket.",
  openGraph: {
    title: "Prijzen pakketten",
    description:
      "Twee duidelijke pakketten met setup en maandbedrag. Maandelijks opzegbaar."
  }
};

export default function PrijzenPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Prijzen & pakketten
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          We werken met twee overzichtelijke pakketten. De bedragen hieronder
          zijn <span className="font-semibold">realistische voorbeeldprijzen</span>,
          zodat je een gevoel hebt bij de investering. In jouw demo ontvang je
          een voorstel op maat.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            Start
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            Voor zelfstandige garages en 1 vestiging
          </p>
          <p className="mt-2 text-xs text-slate-600">
            Ideaal als je nu een verouderde website hebt of alleen een
            Facebook-pagina, en je gewoon meer afspraken in je agenda wilt.
          </p>

          <div className="mt-4 flex items-baseline gap-2 text-slate-900">
            <span className="text-xl font-semibold">€ 750</span>
            <span className="text-xs text-slate-600">eenmalige setup</span>
          </div>
          <div className="text-xs text-slate-600">
            + <span className="font-semibold">€ 129 per maand</span>
          </div>

          <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>1 website met maximaal 5 pagina&apos;s</li>
            <li>1 algemeen leadformulier + 1 apk-formulier</li>
            <li>Basis teksten en beeld op maat voor jouw garage</li>
            <li>Hosting, beveiliging en technische updates inbegrepen</li>
            <li>Maandelijkse check en kleine aanpassingen</li>
          </ul>

          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary-500/30 hover:bg-primary-700"
            >
              Start demo aanvragen
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm shadow-primary-100/80">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-700">
            Groei
          </p>
          <p className="mt-2 text-sm font-semibold text-slate-900">
            Voor drukke garages of meerdere vestigingen
          </p>
          <p className="mt-2 text-xs text-slate-700">
            Meer formulieren, acties en maandelijkse optimalisatie op basis van
            data. Voor garages die actief willen groeien en online zichtbaar
            willen zijn.
          </p>

          <div className="mt-4 flex items-baseline gap-2 text-slate-900">
            <span className="text-xl font-semibold">€ 1.250</span>
            <span className="text-xs text-slate-600">eenmalige setup</span>
          </div>
          <div className="text-xs text-slate-600">
            + <span className="font-semibold">€ 249 per maand</span>
          </div>

          <ul className="mt-4 list-disc space-y-1 pl-4 text-xs text-slate-700">
            <li>Uitgebreide website met meerdere dienstenpagina&apos;s</li>
            <li>Meerdere leadformulieren (apk, onderhoud, banden, acties)</li>
            <li>Optie voor meerdere vestigingen / locaties</li>
            <li>Maandelijkse rapportage en optimalisatie op basis van resultaten</li>
            <li>Doorlopende A/B tests op teksten en knoppen</li>
          </ul>

          <div className="mt-5">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-700 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary-500/40 hover:bg-primary-800"
            >
              Groei demo aanvragen
            </Link>
          </div>
        </div>
      </div>

      <p className="mt-4 text-[11px] text-slate-500">
        Alle bedragen zijn voorbeeldbedragen en exclusief btw. In het
        voorstel dat je na de demo ontvangt, werken we exacte prijzen en
        opties uit op basis van jouw situatie.
      </p>
    </div>
  );
}

