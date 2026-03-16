import Link from "next/link";
import { mainNav, siteConfig } from "../lib/siteConfig";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="rounded-md bg-primary-500 px-2 py-1 text-xs font-semibold text-white">
            Maertzdorf
          </span>
          <span className="text-sm font-semibold tracking-tight text-neutral-800">
            Autobedrijf
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-primary-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a
          href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
          className="rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-primary-400/30 hover:bg-primary-600"
        >
          Bel ons
        </a>
      </div>
    </header>
  );
}
