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
      <h1>Privacyverklaring Garage Leads (demo)</h1>
      <p>
        Dit is een voorbeeld-privacyverklaring behorend bij de demo-website van
        Garage Leads. Vervang deze tekst bij livegang door jouw eigen juridische
        tekst of laat deze nakijken door een jurist.
      </p>

      <h2>Wie zijn wij?</h2>
      <p>
        Garage Leads is een voorbeeldnaam voor een dienst die websites en
        online leadformulieren levert aan lokale garages (B2B). In deze demo
        gaan we er vanuit dat Garage Leads de verwerkingsverantwoordelijke is
        voor de gegevens die via de formulieren op deze site binnenkomen.
      </p>

      <h2>Welke gegevens verwerken we?</h2>
      <p>Via de formulieren op deze website kunnen we de volgende gegevens ontvangen:</p>
      <ul>
        <li>Naam van de contactpersoon</li>
        <li>Naam van de garage</li>
        <li>Plaats</li>
        <li>E-mailadres</li>
        <li>Telefoonnummer</li>
        <li>Huidige website-url (indien ingevuld)</li>
        <li>Waar je meer van wilt (bijv. apk, onderhoud, algemeen)</li>
        <li>Overige informatie die je zelf in het berichtveld invult</li>
      </ul>

      <h2>Waarom verzamelen we deze gegevens?</h2>
      <p>We gebruiken deze gegevens om:</p>
      <ul>
        <li>
          Contact met je op te nemen naar aanleiding van je aanvraag voor een
          demo;
        </li>
        <li>
          Een demo-voorbeeld van een website en formulier te maken dat past bij
          jouw garage;
        </li>
        <li>
          Eventueel een vervolgvoorstel te doen als je daar om vraagt.
        </li>
      </ul>
      <p>
        We gebruiken je gegevens <strong>niet</strong> om je in te schrijven voor
        algemene nieuwsbrieven en we verkopen je gegevens niet door aan derden.
      </p>

      <h2>Rechtsgrond</h2>
      <p>
        De rechtsgrond voor deze verwerking is{" "}
        <strong>toestemming</strong> en/of{" "}
        <strong>gerechtvaardigd belang</strong>. Zonder jouw aanvraag kunnen we
        geen demo maken of contact opnemen over onze diensten.
      </p>

      <h2>Hoe lang bewaren we je gegevens?</h2>
      <p>
        Voor deze demo-website geldt dat gegevens in principe kort worden
        bewaard en regelmatig worden opgeschoond. In een echte productieomgeving
        kun je er bijvoorbeeld voor kiezen gegevens maximaal 12 tot 24 maanden
        te bewaren, tenzij er een lopende samenwerking is.
      </p>

      <h2>Formulieren en externe verwerker</h2>
      <p>
        De formulieren op deze website worden technisch afgevangen via een
        externe formulierdienst (zoals Formspree of een vergelijkbare dienst).
        Dat betekent dat:
      </p>
      <ul>
        <li>
          De gegevens vanaf de website veilig naar die externe dienst worden
          verstuurd;
        </li>
        <li>
          Die dienst de gegevens doorstuurt naar ons e-mailadres;
        </li>
        <li>
          Met deze partij idealiter een verwerkersovereenkomst wordt afgesloten
          in een productieomgeving.
        </li>
      </ul>

      <h2>Met wie delen we je gegevens?</h2>
      <p>
        We delen je gegevens niet met andere partijen dan de partijen die
        strikt noodzakelijk zijn om de website en het formulier te laten werken
        (zoals hosting en de formulierdienst). We verkopen je gegevens nooit.
      </p>

      <h2>Beveiliging</h2>
      <p>
        We nemen passende technische en organisatorische maatregelen om je
        gegevens te beschermen. Denk aan versleuteling van verbindingen (HTTPS)
        en het beperken van toegang tot de mailbox en beheersystemen.
      </p>

      <h2>Jouw rechten</h2>
      <p>
        In een echte productieomgeving heb je het recht om je gegevens in te
        zien, te laten wijzigen of te laten verwijderen. Ook kun je vragen om
        een export van je gegevens of je toestemming intrekken. In deze
        demo-omgeving kun je hiervoor het beste contact opnemen met de
        eigenaar van de demo.
      </p>

      <h2>Contact</h2>
      <p>
        Heb je vragen over deze privacyverklaring of over de manier waarop we
        met gegevens omgaan? Neem dan contact op via de contactgegevens op de
        website.
      </p>

      <h2>Wijzigingen</h2>
      <p>
        Deze privacyverklaring is een voorbeeld en kan worden aangepast als de
        diensten of werkwijze wijzigen. Zorg bij livegang altijd voor een
        actuele en juridisch getoetste versie.
      </p>
    </div>
  );
}

