import { siteConfig, mainNav } from "../lib/siteConfig";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-neutral-950">
      <div className="container-max grid gap-10 py-16 md:grid-cols-[2fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-xs font-black text-white">
              M
            </span>
            <div className="leading-none">
              <span className="block text-sm font-black uppercase tracking-[0.08em] text-white">
                Maertzdorf
              </span>
              <span className="block text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-500">
                Autobedrijf · Bocholtz
              </span>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-xs leading-relaxed text-neutral-500">
            Al meer dan 50 jaar uw betrouwbare partner voor APK-keuring,
            onderhoud, reparatie, spuitwerk en schadeherstel in
            Bocholtz en omgeving.
          </p>
          <div className="mt-6 space-y-1 text-xs text-neutral-500">
            <p>{siteConfig.address.street}, {siteConfig.address.postcode} {siteConfig.address.city}</p>
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

        {/* Navigation */}
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">
            Navigatie
          </p>
          <ul className="space-y-2">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-xs text-neutral-500 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Diensten */}
        <div>
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-600">
            Diensten
          </p>
          <ul className="space-y-2">
            {["APK-keuring", "Onderhoud", "Reparatie", "Spuitwerk", "Schadeherstel"].map((d) => (
              <li key={d}>
                <Link
                  href="/diensten"
                  className="text-xs text-neutral-500 transition-colors hover:text-white"
                >
                  {d}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-800 py-5">
        <div className="container-max flex flex-col items-center justify-between gap-2 text-[11px] text-neutral-600 md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Autobedrijf Maertzdorf. Alle rechten voorbehouden.
          </span>
          <Link href="/privacy" className="transition-colors hover:text-neutral-400">
            Privacy &amp; cookies
          </Link>
        </div>
      </div>
    </footer>
  );
}
