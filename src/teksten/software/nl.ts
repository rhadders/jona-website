// Teksten van het software-overzicht, Nederlands. De opmaak staat in
// src/views/Software.astro. Velden met HTML erin zijn met `Html` gemarkeerd.
// Nieuwe app? Zet hem in een van de twee lijsten; de vergelijkingstabel
// onderaan leest uit allebei. Apps die in een taal niet te gebruiken zijn
// (zie `beschikbaar` in src/lib/paginas.ts), filtert de view eruit.

/** Een extern adres, of een eigen pagina (met optioneel een #anker). */
export type Doel = string | { pagina: string; anker?: string };

export interface App {
  /** Pagina-id in src/lib/paginas.ts. */
  id: string;
  naam: string;
  tag: string;
  voor: string;
  tekst: string;
  beeld: string;
  breed: number;
  hoog: number;
  alt: string;
  actie: string;
  doel: Doel;
}

export const nl = {
  kop: {
    eyebrow: "Onze software",
    titel: "Alle apps die we zelf bouwen, op één plek",
    lead: "Van giftenadministratie en bestuursvergaderingen tot bijbelvertaling: software voor organisaties met een missie. Sommige apps kun je vandaag al gebruiken, andere zijn in de maak. Kijk gerust rond.",
  },
  nuKop: "Nu te gebruiken",
  binnenkortKop: "Binnenkort",
  /** Linktekst onder elke app; de naam van de app komt erachter. */
  meerOver: "Meer over",
  nu: [
    {
      id: "jonagiften",
      naam: "Jona Giften",
      tag: "Nu beschikbaar",
      voor: "Kleine stichtingen en hun penningmeester",
      tekst: "De giftenadministratie voor kleine stichtingen. Houd donateurs, giften en machtigingen bij op één plek, laat mensen online geven per project en stuur met één klik alle jaaroverzichten. Zo eenvoudig dat elke penningmeester ermee overweg kan.",
      beeld: "/beeld/jonagiften-jaar",
      breed: 1600,
      hoog: 1000,
      alt: "Het jaaroverzicht in Jona Giften: wat er dit jaar binnenkwam, maand voor maand, en alle giften van november",
      actie: "Probeer 14 dagen gratis",
      doel: "https://jonagiften.nl/aanmelden",
    },
    {
      id: "jonabestuur",
      naam: "Jona Bestuur",
      tag: "Nu beschikbaar",
      voor: "Kleine besturen en hun secretaris",
      tekst: "Agenda, notulen en besluiten voor kleine besturen. Vergader punt voor punt: wat is besproken, wat is besloten en wie doet wat. Na het laatste agendapunt staan de conceptnotulen klaar, en elk besluit vind je terug in het besluitenregister.",
      beeld: "/beeld/jonabestuur-vergadermodus",
      breed: 1600,
      hoog: 1000,
      alt: "De vergadermodus van Jona Bestuur: links de agenda, rechts agendapunt 6, Begroting 2027, met drie vragen: wat is er besproken, wat is besloten en wie doet wat",
      actie: "Probeer 14 dagen gratis",
      doel: "https://jonabestuur.nl/aanmelden",
    },
    {
      id: "actuelegegevens",
      naam: "ActueleGegevens.nl",
      tag: "Publieke beta is live",
      voor: "Elke organisatie met een relatiebestand",
      tekst: "De worsteling van elke organisatie: hoe houd je je relatiebestand actueel? Met deze online tool zet je binnen 10 minuten een campagne op en laat je jouw relaties zelf hun gegevens controleren en aanvullen.",
      beeld: "/beeld/actuelegegevens-site",
      breed: 1800,
      hoog: 1145,
      alt: "De website van ActueleGegevens.nl: laat je relaties hun gegevens zelf controleren, met een campagneoverzicht ernaast",
      actie: "Meld je aan als testgebruiker",
      doel: { pagina: "actuelegegevens", anker: "testgebruiker" },
    },
  ] as App[],
  binnenkort: [
    {
      id: "selaread",
      naam: "Selaread",
      tag: "Lancering voorjaar 2027",
      voor: "Lezers van christelijke tijdschriften en uitgevers",
      tekst: "Lees onbeperkt christelijke tijdschriften, op mobiel, tablet of desktop. Selaread is een moderne kioskapp. Ook voor uitgevers die op zoek zijn naar een leesapp voor hun eigen abonnees.",
      beeld: "/beeld/selaread-ontdek",
      breed: 1800,
      hoog: 1177,
      alt: "De pagina Ontdek in Selaread: een zoekveld, rubrieken als Israël, Kerkbladen en Kinderen, en een overzicht van magazines met hun omslagen",
      actie: "Meld je aan als testgebruiker",
      doel: { pagina: "selaread", anker: "beta" },
    },
    {
      id: "tirgumai",
      naam: "TirgumAI",
      tag: "Wordt verwacht in 2027",
      voor: "Bijbelvertalers en amateur-theologen",
      tekst: "De nieuwste generatie bijbelsoftware. Vertaal vanuit de grondtekst met behulp van AI, verrijk de bijbeltekst met commentaar en publiceer een volledige studiebijbel.",
      beeld: "/beeld/tirgumai-start",
      breed: 1800,
      hoog: 1125,
      alt: "Het startscherm van TirgumAI: Genesis 1:1 in het Hebreeuws met de eigen vertaling eronder, knoppen Verder vertalen en Hoofdstuk lezen, en de projecten",
      actie: "Houd me op de hoogte",
      doel: { pagina: "tirgumai", anker: "op-de-hoogte" },
    },
  ] as App[],
  vergelijk: {
    kop: "Welke app past bij jou?",
    app: "App",
    voorWie: "Voor wie",
    wanneer: "Wanneer",
    aanDeSlag: "Aan de slag",
  },
  maatwerk: {
    kop: "Liever software op maat?",
    tekstHtml: 'Via ons zusterbedrijf <a href="https://echonova.nl" target="_blank" rel="noopener">EchoNova</a> bouwen we ook software en AI voor jouw organisatie.',
    knop: "Plan een kennismaking",
  },
};

// Software op maat ontbreekt in talen waarin we niet in opdracht bouwen (Duits).
export type SoftwareTekst = Omit<typeof nl, "maatwerk"> & Partial<Pick<typeof nl, "maatwerk">>;
