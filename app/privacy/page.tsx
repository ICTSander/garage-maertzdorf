import type { Metadata } from "next";
import { siteConfig } from "../../lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacyverklaring van Autobedrijf Maertzdorf over hoe wij omgaan met uw persoonsgegevens.",
  openGraph: {
    title: "Privacyverklaring – Autobedrijf Maertzdorf",
    description:
      "Wij gaan zorgvuldig om met uw gegevens en bewaren niet meer dan nodig."
  }
};

export default function PrivacyPage() {
  return (
    <div className="container-max prose prose-sm max-w-3xl py-10 sm:py-12 prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary-700">
      <h1>Privacyverklaring</h1>
      <p>
        Autobedrijf Maertzdorf hecht veel waarde aan uw privacy. In deze
        privacyverklaring leggen wij uit welke gegevens wij verzamelen en wat
        wij daarmee doen.
      </p>
      <p>
        Wanneer u via onze website een formulier invult, verzamelen wij de
        volgende gegevens:
      </p>
      <ul>
        <li>Naam</li>
        <li>E-mailadres</li>
        <li>Telefoonnummer</li>
        <li>De gekozen dienst</li>
        <li>Eventuele aanvullende informatie die u zelf invult</li>
      </ul>
      <p>Deze gegevens gebruiken wij uitsluitend om:</p>
      <ul>
        <li>Contact met u op te nemen naar aanleiding van uw aanvraag</li>
        <li>Een afspraak in te plannen voor de gevraagde dienst</li>
      </ul>
      <p>Wij verkopen of delen uw gegevens niet met derden.</p>
      <p>
        Gegevens worden veilig opgeslagen en niet langer bewaard dan nodig is
        voor het afhandelen van uw aanvraag.
      </p>
      <p>
        U heeft het recht om uw gegevens in te zien, te laten wijzigen of te
        laten verwijderen. Stuur hiervoor een e-mail naar:{" "}
        <a href={`mailto:${siteConfig.contactEmail}`}>
          {siteConfig.contactEmail}
        </a>
      </p>
      <p>
        Door gebruik te maken van deze website gaat u akkoord met deze
        privacyverklaring.
      </p>
    </div>
  );
}
