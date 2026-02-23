import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Wie achter Garage Leads zit en waarom we specifiek voor lokale garages werken.",
  openGraph: {
    title: "Over Garage Leads",
    description:
      "We helpen lokale garages aan meer goede online leads, zonder marketingpoespas."
  }
};

export default function OverOnsPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Over Garage Leads
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Garage Leads is ontstaan uit een simpele observatie:{" "}
          veel lokale garages draaien op vakmanschap en vaste klanten, maar
          laten online nog veel liggen. Wij combineren techniek met een nuchtere
          kijk op marketing.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-700">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <h2 className="text-sm font-semibold text-slate-900">
              Waarom we specifiek met garages werken
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              De meeste online bureaus richten zich op &ldquo;iedereen&rdquo;:
              van kappers tot webshops. Wij hebben gemerkt dat garages een
              eigen ritme, seizoenen en type klant hebben. Door ons daar
              volledig op te focussen, kunnen we sneller en beter resultaat
              halen.
            </p>
            <ul className="mt-3 ml-4 list-disc space-y-1 text-xs text-slate-600">
              <li>We begrijpen apk- en onderhoudsseizoenen</li>
              <li>We weten wat klanten belangrijk vinden bij hun auto</li>
              <li>We spreken gewone taal, geen marketingjargon</li>
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/60">
            <h2 className="text-sm font-semibold text-slate-900">
              Hoe we omgaan met samenwerken
            </h2>
            <p className="mt-2 text-xs text-slate-600">
              We geloven niet in lange, dikke plannen of jaarcontracten. We
              beginnen klein met een demo en bouwen vanuit daar verder. Jij
              houdt de controle: elke maand kijken we samen wat beter kan.
            </p>
            <ul className="mt-3 ml-4 list-disc space-y-1 text-xs text-slate-600">
              <li>Heldere communicatie via mail en eventueel WhatsApp</li>
              <li>Maandelijks opzegbare pakketten</li>
              <li>Geen verborgen kosten of vage &ldquo;campagnebudgetten&rdquo;</li>
            </ul>
          </section>
        </div>

        <aside className="space-y-4 text-xs text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Hoe we werken
            </p>
            <p className="mt-2 font-semibold text-slate-900">
              Demo → live → optimalisatie
            </p>
            <p className="mt-1">
              Eerst laten we zien wat er mogelijk is, dan zetten we het snel
              live en daarna blijven we maandelijks bijsturen.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Wat je van ons mag verwachten
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Snelle reactie op vragen</li>
              <li>Eerlijke uitleg, ook als iets niet nodig is</li>
              <li>Focus op afspraken in je agenda, niet op &ldquo;likes&rdquo;</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-primary-200 bg-primary-50/60 p-4 shadow-sm shadow-primary-100/80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-primary-700">
              Kennismaken?
            </p>
            <p className="mt-1 text-slate-800">
              Vul het formulier in en we sturen je een demo met een korte video
              waarin we alles stap voor stap uitleggen.
            </p>
            <Link
              href="/contact"
              className="mt-3 inline-flex text-xs font-semibold text-primary-700 underline underline-offset-4"
            >
              Ja, stuur mij een demo
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

