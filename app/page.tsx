import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Websites & leads voor garages",
  description:
    "Wij bouwen websites en online leadformulieren voor lokale garages. Vraag een gratis demo aan en ontdek hoeveel extra afspraken er voor jouw garage in zitten.",
  openGraph: {
    title: "Websites & leads voor garages",
    description:
      "Meer apk, meer onderhoud en meer afspraken via een website die wél converteert.",
    type: "website"
  }
};

export default function HomePage() {
  return (
    <div className="container-max py-8 sm:py-12">
      <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary-600">
            Websites & leads voor garages
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
            Meer afspraken uit je website,{" "}
            <span className="underline decoration-primary-300 decoration-2 underline-offset-4">
              zonder marketing gedoe
            </span>
            .
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[0.95rem]">
            We bouwen een snelle, simpele website en online leadformulieren
            speciaal voor jouw garage. Gericht op &eacute;&eacute;n ding: meer
            aanvragen voor apk, onderhoud en reparaties in je agenda.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-primary-500/30 hover:bg-primary-700"
            >
              Gratis demo aanvragen
            </Link>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-semibold text-emerald-700">
                ✓
              </span>
              <span>Geen langdurig contract. Maandelijks opzegbaar.</span>
            </div>
          </div>

          <div className="mt-8 grid gap-4 text-xs text-slate-600 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-semibold text-slate-900">Voor lokale garages</p>
              <p className="mt-1">
                Gericht op apk, onderhoud en reparaties in een straal rondom
                jouw garage.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-semibold text-slate-900">
                Leads direct in je inbox
              </p>
              <p className="mt-1">
                Ingevulde formulieren komen direct binnen. Je belt of mailt zelf
                terug.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-semibold text-slate-900">
                We regelen alles
              </p>
              <p className="mt-1">
                Teksten, techniek en formulier. Jij levert alleen je logo en
                basisinfo aan.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:max-w-md">
          <ContactForm />
        </div>
      </section>

      <section className="mt-14 space-y-6">
        <div className="max-w-xl">
          <h2 className="text-xl font-semibold text-slate-900">
            Onze aanpak: van demo naar vaste stroom leads
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            We houden het simpel. Geen dikke strategiepresentaties, maar een
            duidelijke funnel:{" "}
            <span className="font-semibold">demo → live → maandelijkse optimalisatie</span>.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
              1
            </span>
            <p className="text-sm font-semibold text-slate-900">
              Demo binnen 24 uur
            </p>
            <p className="text-xs text-slate-600">
              We sturen je een voorbeeldsite met formulier op basis van jouw
              garage. Zo zie je direct hoe het er uit kan zien.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
              2
            </span>
            <p className="text-sm font-semibold text-slate-900">
              Live binnen een week
            </p>
            <p className="text-xs text-slate-600">
              Na akkoord zetten we jouw versie online op je eigen domein. We
              koppelen het formulier zodat leads direct bij jou binnenkomen.
            </p>
          </div>
          <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-50 text-xs font-semibold text-primary-700">
              3
            </span>
            <p className="text-sm font-semibold text-slate-900">
              Maandelijkse optimalisatie
            </p>
            <p className="text-xs text-slate-600">
              Elke maand kijken we naar de ingevulde formulieren en passen we de
              website aan voor meer kwaliteit en meer aanvragen.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Twee heldere pakketten
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Geen verrassingen achteraf. Je kiest een pakket dat past bij de
            grootte van je garage. Alle prijzen zijn{" "}
            <span className="font-semibold">voorbeeldbedragen</span> zodat je een idee hebt.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
                Start
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Voor 1 vestiging
              </p>
              <p className="mt-3 text-xs text-slate-600">
                Ideaal als je nu weinig met online doet en gewoon meer aanvragen
                in je mailbox wilt.
              </p>
              <div className="mt-4 text-sm">
                <p className="font-semibold text-slate-900">
                  € 750 setup
                </p>
                <p className="text-xs text-slate-600">+ € 129 per maand</p>
              </div>
            </div>
            <div className="flex flex-col rounded-2xl border border-primary-200 bg-primary-50/40 p-5 shadow-sm shadow-primary-100/80">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-700">
                Groei
              </p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                Voor drukke garages / meerdere vestigingen
              </p>
              <p className="mt-3 text-xs text-slate-600">
                Meer formulieren, meer campagnes en maandelijkse optimalisaties
                op basis van data.
              </p>
              <div className="mt-4 text-sm">
                <p className="font-semibold text-slate-900">
                  € 1.250 setup
                </p>
                <p className="text-xs text-slate-600">+ € 249 per maand</p>
              </div>
            </div>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Bedragen zijn indicatief en exclusief btw. In de demo ontvang je een
            voorstel op maat voor jouw situatie.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-sm font-semibold text-slate-900">
            Veelgestelde vragen
          </h2>
          <div className="space-y-4 text-sm">
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-medium text-slate-900">
                Hoe snel kan mijn nieuwe website online?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Meestal binnen een week nadat we de basisinfo van je garage
                hebben ontvangen. De demo sturen we al binnen 24 uur zodat je
                snel kunt beslissen.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-medium text-slate-900">
                Werken jullie ook met mijn huidige website?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Soms. Vaak is het sneller en effectiever om een nieuwe
                &ldquo;leadpagina&rdquo; te maken naast je huidige site. In de
                demo laten we beide opties zien.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
              <p className="font-medium text-slate-900">
                Zit ik vast aan een lang contract?
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Nee. Onze pakketten zijn maandelijks opzegbaar. We willen dat je
                blijft omdat het werkt, niet omdat het moet.
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-primary-200 bg-primary-50/60 p-4 text-xs text-slate-800">
            <p className="font-semibold text-slate-900">
              Eerst zien, dan beslissen?
            </p>
            <p className="mt-1">
              Vul het formulier in en je krijgt een demo die is afgestemd op
              jouw garage. Je zit nergens aan vast.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex text-xs font-semibold text-primary-700 underline underline-offset-4"
            >
              Ja, stuur mij een gratis demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

