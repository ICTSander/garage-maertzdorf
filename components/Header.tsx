"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "../lib/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <div className="container-max flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded bg-primary-600 text-xs font-black text-white tracking-tight">
            M
          </span>
          <div className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.08em] text-neutral-900">
              Maertzdorf
            </span>
            <span className="block text-[9px] font-medium uppercase tracking-[0.15em] text-neutral-400">
              Autobedrijf · Bocholtz
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-500 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
            className="hidden items-center gap-2 rounded-sm bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:inline-flex"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Bel ons
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded md:hidden"
          >
            <span className={`block h-px w-5 bg-neutral-800 origin-center transition-all duration-200 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block h-px w-5 bg-neutral-800 transition-all duration-200 ${open ? "scale-x-0 opacity-0" : ""}`} />
            <span className={`block h-px w-5 bg-neutral-800 origin-center transition-all duration-200 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-72" : "max-h-0"}`}>
        <nav className="container-max flex flex-col gap-1 border-t border-neutral-100 bg-white py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded px-3 py-2.5 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
            className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-primary-600 px-4 py-3 text-sm font-semibold text-white"
          >
            Bel ons: {siteConfig.contactPhone}
          </a>
        </nav>
      </div>
    </header>
  );
}
