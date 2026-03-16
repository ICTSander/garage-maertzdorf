import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Overzicht van onze diensten: APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel bij Autobedrijf Maertzdorf in Bocholtz.",
  openGraph: {
    title: "Diensten – Autobedrijf Maertzdorf",
    description:
      "APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel. Al meer dan 50 jaar in Bocholtz."
  }
};

export default function DienstenPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Onze diensten
        </h1>
        <p className="mt-3 text-sm text-neutral-600">
          Bij Autobedrijf Maertzdorf kunt u terecht voor een compleet pakket aan
          autodiensten. Onze ervaren monteurs staan voor u klaar met persoonlijk
          advies en vakkundig werk.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            1. APK-keuring
          </p>
          <h2 className="mt-2 text-sm font-semibold text-neutral-900">
            Snel en vakkundig gekeurd
          </h2>
          <p className="mt-2 text-xs text-neutral-600">
            Uw APK-keuring is bij ons in goede handen. Wij voeren de keuring
            zorgvuldig uit en bespreken eventuele aandachtspunten direct met u.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-600">
            <li>RDW-erkend keurstation</li>
            <li>Keuring vaak dezelfde dag mogelijk</li>
            <li>Duidelijke uitleg bij afkeurpunten</li>
            <li>Reparatie en herkeuring in &eacute;&eacute;n keer geregeld</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            2. Onderhoud &amp; service
          </p>
          <h2 className="mt-2 text-sm font-semibold text-neutral-900">
            Regelmatig onderhoud, zorgeloos rijden
          </h2>
          <p className="mt-2 text-xs text-neutral-600">
            Regelmatig onderhoud voorkomt dure reparaties en verlengt de
            levensduur van uw auto. Wij verzorgen kleine en grote beurten voor
            alle merken.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-600">
            <li>Kleine en grote beurt</li>
            <li>Olieverversing en filterwissels</li>
            <li>Remenset en distributieriemen</li>
            <li>Seizoensgebonden checks (airco, banden)</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            3. Reparatie
          </p>
          <h2 className="mt-2 text-sm font-semibold text-neutral-900">
            Diagnose en reparatie van alle merken
          </h2>
          <p className="mt-2 text-xs text-neutral-600">
            Of het nu gaat om een waarschuwingslampje, een vreemd geluid of een
            motorstoring: wij beschikken over de kennis en apparatuur om het
            probleem te vinden en op te lossen.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-600">
            <li>Elektronische diagnose met moderne apparatuur</li>
            <li>Motor- en versnellingsbakproblemen</li>
            <li>Remmen, ophanging en stuurinrichting</li>
            <li>Uitlaat- en koelsysteemreparaties</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm shadow-neutral-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            4. Spuitwerk
          </p>
          <h2 className="mt-2 text-sm font-semibold text-neutral-900">
            Professioneel spuitwerk met oog voor detail
          </h2>
          <p className="mt-2 text-xs text-neutral-600">
            Van een kleine bijwerking tot een volledige spuitbeurt: wij zorgen
            voor een perfect resultaat met kleurmatching en professionele
            lakproducten.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-600">
            <li>Kleurmatching met computeranalyse</li>
            <li>Plaatselijke reparatie of volledige overlakking</li>
            <li>Hoogwaardige lakproducten</li>
            <li>Zorgvuldige voorbereiding en afwerking</li>
          </ul>
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6 shadow-sm shadow-neutral-200/60">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            5. Schadeherstel
          </p>
          <h2 className="mt-2 text-sm font-semibold text-neutral-900">
            Vakkundige reparatie van schade
          </h2>
          <p className="mt-2 text-xs text-neutral-600">
            Schade aan uw auto is vervelend. Wij zorgen ervoor dat uw auto er
            weer als nieuw uitziet. Van kleine deuken tot grotere
            aanrijdingsschade.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-4 text-xs text-neutral-600">
            <li>Deuk- en krasreparatie</li>
            <li>Aanrijdingsschade herstellen</li>
            <li>Bumper- en plaatwerkherstel</li>
            <li>Hulp bij schadeclaims en verzekeringen</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-primary-200 bg-primary-50/60 p-6 shadow-sm shadow-primary-100/80">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-neutral-900">
              Hulp nodig of een afspraak maken?
            </p>
            <p className="mt-1 text-xs text-neutral-700">
              Neem gerust contact met ons op. Wij helpen u graag verder met
              eerlijk advies.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-primary-400/30 hover:bg-primary-600"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
}
