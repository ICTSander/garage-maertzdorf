import { siteConfig } from "../lib/siteConfig";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container-max grid gap-8 py-10 text-sm text-slate-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">Autobedrijf Maertzdorf</p>
          <p className="mt-2 max-w-xs text-xs">
            Al meer dan 50 jaar uw betrouwbare partner voor APK-keuring,
            onderhoud, reparatie, spuitwerk en schadeherstel in Bocholtz en
            omgeving.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2 text-xs">
            {siteConfig.address.street}
            <br />
            {siteConfig.address.postcode} {siteConfig.address.city}
          </p>
          <p className="mt-2 text-xs">
            Tel:{" "}
            <a
              href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
              className="font-mono hover:text-primary-600"
            >
              {siteConfig.contactPhone}
            </a>
            <br />
            E-mail:{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-mono hover:text-primary-600"
            >
              {siteConfig.contactEmail}
            </a>
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Informatie</p>
          <p className="mt-2 text-xs">
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy &amp; cookies
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t bg-slate-50 py-4">
        <div className="container-max flex flex-col items-center justify-between gap-2 text-xs text-slate-500 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Autobedrijf Maertzdorf. Alle
            rechten voorbehouden.
          </span>
        </div>
      </div>
    </footer>
  );
}
