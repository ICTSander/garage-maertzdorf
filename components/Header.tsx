"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, siteConfig } from "../lib/siteConfig";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-neutral-900/95 backdrop-blur-sm">
      <div className="container-max flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="h-2 w-2 rounded-full bg-primary-500" />
          <span className="text-base font-bold tracking-tight text-white">
            Maertzdorf
          </span>
          <span className="hidden text-xs font-medium text-white/35 sm:block">
            Autobedrijf
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/55 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors duration-150 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
            className="hidden items-center rounded-full bg-primary-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-400 sm:inline-flex"
          >
            Bel ons
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu openen"
            className="relative flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-md hover:bg-white/5 md:hidden"
          >
            <span
              className={`block h-px w-5 bg-white origin-center transition-all duration-200 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-200 ${
                open ? "scale-x-0 opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white origin-center transition-all duration-200 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="container-max flex flex-col gap-1 border-t border-white/5 py-4">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/65 transition-colors hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
            className="mt-2 flex items-center justify-center rounded-full bg-primary-500 px-4 py-3 text-sm font-semibold text-white"
          >
            Bel ons: {siteConfig.contactPhone}
          </a>
        </nav>
      </div>
    </header>
  );
}
