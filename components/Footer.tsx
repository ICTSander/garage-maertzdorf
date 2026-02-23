import { siteConfig } from "../lib/siteConfig";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container-max grid gap-8 py-10 text-sm text-slate-600 md:grid-cols-3">
        <div>
          <p className="font-semibold text-slate-900">Garage Leads</p>
          <p className="mt-2 max-w-xs text-xs">
            Websites en leadformulieren speciaal voor lokale garages. Snel
            online, meetbare resultaten.
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Contact</p>
          <p className="mt-2 text-xs">
            E-mail: <span className="font-mono">{siteConfig.contactEmail}</span>
            <br />
            Tel: <span className="font-mono">{siteConfig.contactPhone}</span>
          </p>
        </div>
        <div>
          <p className="font-semibold text-slate-900">Legal</p>
          <p className="mt-2 text-xs">
            KVK: {siteConfig.kvk}
            <br />
            BTW: {siteConfig.btw}
            <br />
            <Link href="/privacy" className="underline underline-offset-4">
              Privacy &amp; cookies
            </Link>
          </p>
        </div>
      </div>
      <div className="border-t bg-slate-50 py-4">
        <div className="container-max flex flex-col items-center justify-between gap-2 text-xs text-slate-500 md:flex-row">
          <span>© {new Date().getFullYear()} Garage Leads. Alle rechten voorbehouden.</span>
          <span className="text-[11px]">
            Demo-voorbeeld, niet bedoeld als daadwerkelijke bedrijfsinformatie.
          </span>
        </div>
      </div>
    </footer>
  );
}

