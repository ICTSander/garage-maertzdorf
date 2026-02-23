import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "Privacyverklaring over hoe we omgaan met contactgegevens en ingevulde formulieren.",
  openGraph: {
    title: "Privacyverklaring",
    description:
      "We gaan zorgvuldig om met gegevens van garages en bewaren niet meer dan nodig."
  }
};

export default function PrivacyPage() {
  return (
    <div className="container-max prose prose-sm max-w-3xl py-10 sm:py-12 prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-primary-700">
      <h1>Privacyverklaring</h1>
      <p>
        Wij hechten veel waarde aan jouw privacy. In deze privacyverklaring
        leggen wij uit welke gegevens wij verzamelen en wat wij daarmee doen.
      </p>
      <p>Wanneer je via onze website een formulier invult, verzamelen wij de volgende gegevens:</p>
      <ul>
        <li>Naam</li>
        <li>Bedrijfsnaam</li>
        <li>Plaats</li>
        <li>E-mailadres</li>
        <li>Telefoonnummer</li>
        <li>Eventuele aanvullende informatie die je zelf invult</li>
      </ul>
      <p>Deze gegevens gebruiken wij uitsluitend om:</p>
      <ul>
        <li>Contact met je op te nemen naar aanleiding van je aanvraag</li>
        <li>Een gratis demo of voorstel voor je garage te kunnen maken</li>
      </ul>
      <p>Wij verkopen of delen jouw gegevens niet met derden.</p>
      <p>
        Gegevens worden veilig opgeslagen en niet langer bewaard dan nodig is
        voor het afhandelen van jouw aanvraag.
      </p>
      <p>
        Je hebt het recht om jouw gegevens in te zien, te laten wijzigen of te
        laten verwijderen. Stuur hiervoor een e-mail naar:
        {" "}
        <a href="mailto:autogarageflows@outlook.com">autogarageflows@outlook.com</a>
      </p>
      <p>
        Door gebruik te maken van deze website ga je akkoord met deze
        privacyverklaring.
      </p>
    </div>
  );
}

