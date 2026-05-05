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
    description: "Bel ons of vul het contactformulier in. Wij helpen u graag."
  }
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-neutral-900 py-16 sm:py-20">
        <div className="container-max">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-400">
            Autobedrijf Maertzdorf
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/50">
            Heeft u een vraag of wilt u een afspraak maken? Neem gerust contact
            met ons op via telefoon of het onderstaande formulier.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-max">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
            <AnimateOnScroll>
              <ContactForm />
            </AnimateOnScroll>

            <AnimateOnScroll delay={120}>
              <div className="space-y-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                    Adres
                  </p>
                  <p className="mt-3 text-sm font-semibold text-neutral-900">
                    Autobedrijf Maertzdorf
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">
                    {siteConfig.address.street}
                    <br />
                    {siteConfig.address.postcode} {siteConfig.address.city}
                  </p>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                    Telefoon &amp; e-mail
                  </p>
                  <div className="mt-3 space-y-1.5 text-sm">
                    <p>
                      <a
                        href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                        className="font-semibold text-neutral-900 transition-colors hover:text-primary-600"
                      >
                        {siteConfig.contactPhone}
                      </a>
                    </p>
                    <p>
                      <a
                        href={`mailto:${siteConfig.contactEmail}`}
                        className="text-neutral-600 transition-colors hover:text-primary-600"
                      >
                        {siteConfig.contactEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-400">
                    Bereikbaarheid
                  </p>
                  <p className="mt-3 text-sm text-neutral-600">
                    Centraal gelegen in Bocholtz, goed bereikbaar vanuit
                    Simpelveld, Vaals, Kerkrade, Gulpen en omstreken in
                    Zuid-Limburg.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
