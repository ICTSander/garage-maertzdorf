import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & gratis demo",
  description:
    "Vraag een gratis demo aan van een website en leadformulier op maat voor jouw garage.",
  openGraph: {
    title: "Contact & gratis demo",
    description:
      "Laat je gegevens achter en ontvang binnen 24 uur een demo-link."
  }
};

export default function ContactPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Vraag een gratis demo aan
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Vul het formulier in en we sturen je binnen 24 uur een{" "}
          <span className="font-semibold">demo-link</span> van een website en
          formulier die passen bij jouw garage. Je zit nergens aan vast.
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ContactForm />
        <aside className="space-y-4 text-xs text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Wat je ontvangt
            </p>
            <ul className="mt-2 ml-4 list-disc space-y-1">
              <li>Een online voorbeeldsite die lijkt op jouw garage</li>
              <li>Een of meerdere leadformulieren op maat</li>
              <li>Korte uitlegvideo (optioneel) met toelichting</li>
              <li>Een indicatie van een passend pakket en prijs</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Hoe we met je gegevens omgaan
            </p>
            <p className="mt-1">
              We gebruiken je gegevens alleen om contact met je op te nemen over
              de demo en een eventueel vervolg. Geen nieuwsbrieven, geen
              doorverkoop. Meer hierover in onze{" "}
              <a
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary-600"
              >
                privacyverklaring
              </a>
              .
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}

