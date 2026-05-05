import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "../../lib/siteConfig";
import { AnimateOnScroll } from "../../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel bij Autobedrijf Maertzdorf in Bocholtz.",
  openGraph: {
    title: "Diensten – Autobedrijf Maertzdorf",
    description:
      "APK-keuring, onderhoud, reparatie, spuitwerk en schadeherstel. Al meer dan 50 jaar in Bocholtz."
  }
};

const diensten = [
  {
    nr: "01",
    title: "APK-keuring",
    subtitle: "Snel en vakkundig gekeurd",
    description:
      "Uw APK-keuring is bij ons in goede handen. Wij zijn een RDW-erkend keurstation en voeren de keuring zorgvuldig uit. Eventuele aandachtspunten bespreken wij direct met u — herkeuringen plannen we zo snel mogelijk in.",
    items: [
      "RDW-erkend keurstation",
      "Keuring vaak dezelfde dag mogelijk",
      "Duidelijke uitleg bij afkeurpunten",
      "Reparatie en herkeuring in één keer"
    ]
  },
  {
    nr: "02",
    title: "Onderhoud & service",
    subtitle: "Regelmatig onderhoud, zorgeloos rijden",
    description:
      "Regelmatig onderhoud voorkomt dure reparaties en verlengt de levensduur van uw auto. Wij verzorgen kleine en grote beurten voor alle merken personenauto's en lichte bedrijfswagens.",
    items: [
      "Kleine en grote beurt",
      "Olieverversing en filterwissels",
      "Remmen, distributieriem en koppeling",
      "Seizoensgebonden checks (airco, banden)"
    ]
  },
  {
    nr: "03",
    title: "Reparatie",
    subtitle: "Diagnose en reparatie van alle merken",
    description:
      "Of het nu gaat om een waarschuwingslampje, een vreemd geluid of een motorstoring: wij beschikken over de kennis en moderne apparatuur om het probleem te vinden en te verhelpen.",
    items: [
      "Elektronische diagnose met moderne apparatuur",
      "Motor- en versnellingsbakproblemen",
      "Remmen, ophanging en stuurinrichting",
      "Uitlaat- en koelsysteemreparaties"
    ]
  },
  {
    nr: "04",
    title: "Spuitwerk",
    subtitle: "Professioneel spuitwerk met oog voor detail",
    description:
      "Van een kleine bijwerking tot een volledige spuitbeurt: wij zorgen voor een perfect resultaat met nauwkeurige kleurmatching en hoogwaardige lakproducten.",
    items: [
      "Kleurmatching met computeranalyse",
      "Plaatselijke reparatie of volledige overlakking",
      "Hoogwaardige lakproducten",
      "Zorgvuldige voorbereiding en afwerking"
    ]
  },
  {
    nr: "05",
    title: "Schadeherstel",
    subtitle: "Vakkundige reparatie van schade",
    description:
      "Schade aan uw auto is vervelend. Wij zorgen ervoor dat uw auto er weer als nieuw uitziet — van kleine deuken tot grotere aanrijdingsschade.",
    items: [
      "Deuk- en krasreparatie",
      "Aanrijdingsschade herstellen",
      "Bumper- en plaatwerkherstel",
      "Hulp bij schadeclaims en verzekeringen"
    ]
  }
];

export default function DienstenPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="container-max">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Onze diensten
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Van APK-keuring tot schadeherstel: een compleet pakket aan
            diensten voor uw auto — alles onder één dak, door ervaren vakmensen.
          </p>
        </div>
      </section>

      {/* Diensten list */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-max space-y-5">
          {diensten.map((dienst, i) => (
            <AnimateOnScroll key={dienst.nr} delay={i * 55}>
              <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="shrink-0 font-mono text-sm font-bold text-primary-300">
                    {dienst.nr}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-neutral-900">
                      {dienst.title}
                    </h2>
                    <p className="mt-0.5 text-xs font-medium text-primary-600">
                      {dienst.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                      {dienst.description}
                    </p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {dienst.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs text-neutral-500"
                        >
                          <svg
                            className="h-3.5 w-3.5 shrink-0 text-primary-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-900 py-14">
        <div className="container-max">
          <AnimateOnScroll>
            <div className="flex flex-col gap-5 rounded-2xl border border-white/10 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div>
                <p className="font-semibold text-white">
                  Hulp nodig of een afspraak maken?
                </p>
                <p className="mt-1 text-sm text-white/45">
                  Neem contact op. Wij helpen u met eerlijk advies.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-primary-400"
                >
                  Neem contact op
                </Link>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/30 hover:bg-white/5"
                >
                  Bel ons
                </a>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
