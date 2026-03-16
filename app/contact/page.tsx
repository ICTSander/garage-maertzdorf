import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { siteConfig } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Autobedrijf Maertzdorf in Bocholtz. Maak een afspraak voor APK, onderhoud, reparatie of schadeherstel.",
  openGraph: {
    title: "Contact – Autobedrijf Maertzdorf",
    description:
      "Bel ons of vul het contactformulier in. Wij helpen u graag verder."
  }
};

export default function ContactPage() {
  return (
    <div className="container-max py-10 sm:py-12">
      <div className="max-w-2xl">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
          Contact
        </h1>
        <p className="mt-3 text-sm text-slate-600">
          Heeft u een vraag of wilt u een afspraak maken? Neem gerust contact
          met ons op via telefoon of het onderstaande formulier.
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <ContactForm />
        <aside className="space-y-4 text-xs text-slate-600">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Adres
            </p>
            <p className="mt-2 text-sm font-semibold text-slate-900">
              Autobedrijf Maertzdorf
            </p>
            <p className="mt-1">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postcode} {siteConfig.address.city}
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Telefoon &amp; e-mail
            </p>
            <p className="mt-2">
              Tel:{" "}
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="font-semibold text-slate-900 hover:text-primary-600"
              >
                {siteConfig.contactPhone}
              </a>
            </p>
            <p className="mt-1">
              E-mail:{" "}
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="font-semibold text-slate-900 hover:text-primary-600"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm shadow-slate-200/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-500">
              Bereikbaarheid
            </p>
            <p className="mt-2">
              Wij zijn centraal gelegen in Bocholtz, goed bereikbaar vanuit
              Simpelveld, Vaals, Kerkrade, Gulpen en omstreken in Zuid-Limburg.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
