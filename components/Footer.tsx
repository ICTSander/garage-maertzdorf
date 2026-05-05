import { siteConfig, mainNav } from "../lib/siteConfig";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-neutral-900">
      <div className="container-max grid gap-10 py-14 text-sm md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            <span className="font-bold tracking-tight text-white">
              Maertzdorf
            </span>
          </div>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-white/35">
            Al meer dan 50 jaar uw betrouwbare partner voor APK-keuring,
            onderhoud, reparatie, spuitwerk en schadeherstel in Bocholtz en
            omgeving.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25">
            Navigatie
          </p>
          <ul className="mt-4 space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-white/45 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-widest text-white/25">
            Contact
          </p>
          <div className="mt-4 space-y-2 text-xs text-white/45">
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postcode} {siteConfig.address.city}
            </p>
            <p>
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.contactPhone}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="transition-colors hover:text-white"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-5">
        <div className="container-max flex flex-col items-center justify-between gap-2 text-[11px] text-white/20 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Autobedrijf Maertzdorf. Alle
            rechten voorbehouden.
          </span>
          <Link href="/privacy" className="transition-colors hover:text-white/50">
            Privacy &amp; cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
