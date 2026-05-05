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
    sub: "RDW-erkend keurstation",
    description:
      "Uw APK-keuring is bij ons in goede handen. Wij voeren de keuring zorgvuldig uit en bespreken eventuele aandachtspunten direct met u. Herkeuringen plannen wij zo snel mogelijk in.",
    items: [
      "RDW-erkend keurstation",
      "Keuring vaak dezelfde dag mogelijk",
      "Duidelijke uitleg bij afkeurpunten",
      "Reparatie en herkeuring in één keer",
    ],
  },
  {
    nr: "02",
    title: "Onderhoud & service",
    sub: "Kleine en grote beurten · Alle merken",
    description:
      "Regelmatig onderhoud voorkomt dure reparaties en verlengt de levensduur van uw auto. Wij verzorgen kleine en grote beurten voor alle merken personenauto's en lichte bedrijfswagens.",
    items: [
      "Kleine en grote beurt",
      "Olieverversing en filterwissels",
      "Remmen, distributieriem en koppeling",
      "Seizoensgebonden checks",
    ],
  },
  {
    nr: "03",
    title: "Reparatie",
    sub: "Diagnose met moderne apparatuur",
    description:
      "Of het nu gaat om een waarschuwingslampje, een vreemd geluid of een motorstoring: wij beschikken over de kennis en moderne apparatuur om het probleem te vinden en te verhelpen.",
    items: [
      "Elektronische diagnose",
      "Motor- en versnellingsbakproblemen",
      "Remmen, ophanging en stuurinrichting",
      "Uitlaat- en koelsysteemreparaties",
    ],
  },
  {
    nr: "04",
    title: "Spuitwerk",
    sub: "Kleurmatching op computerbasis",
    description:
      "Van een kleine bijwerking tot een volledige spuitbeurt: wij zorgen voor een perfect resultaat met nauwkeurige kleurmatching op computerbasis en hoogwaardige lakproducten.",
    items: [
      "Kleurmatching met computeranalyse",
      "Plaatselijke reparatie of volledige overlakking",
      "Hoogwaardige lakproducten",
      "Zorgvuldige voorbereiding en afwerking",
    ],
  },
  {
    nr: "05",
    title: "Schadeherstel",
    sub: "Deuk · Kras · Aanrijdingsschade",
    description:
      "Schade aan uw auto is vervelend. Wij zorgen ervoor dat uw auto er weer als nieuw uitziet — van kleine deuken tot grotere aanrijdingsschade. Wij helpen ook bij verzekeringsclaims.",
    items: [
      "Deuk- en krasreparatie",
      "Aanrijdingsschade herstellen",
      "Bumper- en plaatwerkherstel",
      "Hulp bij schadeclaims",
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-16">
        <div className="container-max">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
            Onze diensten
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500">
            Alles voor uw auto onder één dak. Van snelle APK-keuring tot
            vakkundig spuitwerk — uitgevoerd door ervaren vakmensen.
          </p>
        </div>
      </section>

      {/* Diensten */}
      <section className="bg-neutral-50 py-6">
        <div className="container-max">
          {diensten.map((d, i) => (
            <AnimateOnScroll key={d.nr} delay={i * 55}>
              <div className="grid gap-6 border-b border-neutral-200 py-10 last:border-0 sm:grid-cols-[auto_1fr] sm:gap-10">
                {/* Number */}
                <div className="flex items-start gap-4 sm:flex-col sm:gap-0">
                  <span className="font-mono text-4xl font-black text-primary-500 sm:text-5xl">
                    {d.nr}
                  </span>
                  <div className="mt-1 sm:mt-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                      {d.sub}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h2 className="text-2xl font-black text-neutral-900 sm:text-3xl">
                    {d.title}
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-500">
                    {d.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {d.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-sm border border-neutral-200 bg-white px-3 py-1.5 text-xs font-medium text-neutral-600"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12">
        <div className="container-max flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-black text-white">Hulp nodig?</p>
            <p className="mt-1 text-sm text-red-100">
              Bel of mail ons. Wij helpen u verder.
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
