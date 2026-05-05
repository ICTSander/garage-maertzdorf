import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { siteConfig } from "../../lib/siteConfig";
import { AnimateOnScroll } from "../../components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Autobedrijf Maertzdorf in Bocholtz. Maak een afspraak voor APK, onderhoud, reparatie of schadeherstel.",
  openGraph: {
    title: "Contact – Autobedrijf Maertzdorf",
    description: "Bel ons of vul het contactformulier in."
  }
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="border-b border-neutral-200 bg-white py-14 sm:py-16">
        <div className="container-max">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-600">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-neutral-900 sm:text-6xl">
            Contact
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-neutral-500">
            Heeft u een vraag of wilt u een afspraak maken? Bel ons of gebruik
            het formulier hieronder.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-neutral-50 py-14 sm:py-16">
        <div className="container-max grid gap-10 lg:grid-cols-[1fr_380px]">
          <AnimateOnScroll>
            <ContactForm />
          </AnimateOnScroll>

          <AnimateOnScroll delay={100}>
            <div className="space-y-4">
              {/* Direct contact */}
              <div className="rounded-sm border border-neutral-200 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Direct contact
                </p>
                <a
                  href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                  className="mt-3 flex items-center gap-3 group"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-primary-600 text-white">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="text-base font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    {siteConfig.contactPhone}
                  </span>
                </a>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="mt-3 block text-sm text-neutral-500 hover:text-primary-600 transition-colors"
                >
                  {siteConfig.contactEmail}
                </a>
              </div>

              {/* Address */}
              <div className="rounded-sm border border-neutral-200 bg-white p-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Adres
                </p>
                <p className="mt-3 font-bold text-neutral-900">
                  Autobedrijf Maertzdorf
                </p>
                <p className="mt-1 text-sm text-neutral-600">
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postcode} {siteConfig.address.city}
                </p>
              </div>

              {/* Area */}
              <div className="rounded-sm bg-neutral-100 p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                  Bereikbaarheid
                </p>
                <p className="mt-2 text-xs leading-relaxed text-neutral-600">
                  Centraal in Bocholtz — goed bereikbaar vanuit Simpelveld,
                  Vaals, Kerkrade, Gulpen en omstreken.
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
