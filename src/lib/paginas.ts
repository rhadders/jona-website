// Eén bron voor titel, omschrijving en soort van elke openbare pagina.
// De pagina's zelf, de sitemap (/sitemap.xml), /llms.txt en de
// gestructureerde data (JSON-LD in Base.astro) lezen allemaal hieruit,
// zodat ze nooit uit elkaar lopen. Nieuwe pagina? Voeg hem hier toe.

export type Soort = "home" | "software" | "dienst" | "contact" | "over" | "verhaal";

export interface Pagina {
  pad: string;
  title: string;
  description: string;
  soort: Soort;
  /** Eigen website van een product, als die er is. */
  extern?: string;
  /** Prijs in euro excl. btw, alleen als die op de pagina staat. */
  prijs?: number;
  /** Klantverhaal: het beeld en de opdrachtgever voor de gestructureerde data. */
  beeld?: string;
  klant?: string;
}

export const PAGINAS: Pagina[] = [
  {
    pad: "/",
    title: "Jona · zinvolle technologie",
    description:
      "Wij bouwen gebruiksvriendelijke software en AI voor bedrijven en organisaties met een missie. Selaread, ActueleGegevens.nl en TirgumAI, en maatwerk via EchoNova.",
    soort: "home",
  },
  {
    pad: "/selaread",
    title: "Selaread",
    description:
      "Selaread is de leeskiosk voor christelijk Nederland: alle christelijke tijdschriften in één abonnement, op mobiel, tablet en desktop. Voor uitgevers een nieuw kanaal met 70% van de omzet, zonder eigen app te hoeven bouwen.",
    soort: "software",
  },
  {
    pad: "/actuelegegevens",
    title: "ActueleGegevens.nl",
    description:
      "Laat je relaties zelf hun gegevens controleren en aanvullen. Importeer je bestand, start een campagne, volg de wijzigingen en download een actueel relatiebestand. Live vanaf 1 december.",
    soort: "software",
    extern: "https://actuelegegevens.nl",
  },
  {
    pad: "/tirgumai",
    title: "TirgumAI",
    description:
      "Vertaal de Bijbel vers voor vers vanuit de Hebreeuwse en Griekse grondtekst, alleen of met een team, met hulp van AI. Verrijk de vertaling, publiceer je eigen studiebijbel online en laat complete Bijbels automatisch drukklaar zetten.",
    soort: "software",
  },
  {
    pad: "/ai-scan",
    title: "De AI-scan",
    description:
      "Eén dag meekijken in jullie organisatie, binnen een week een plan in gewone taal: welk werk kan slimmer met software of AI, wat levert het op en wat kost het.",
    soort: "dienst",
    prijs: 795,
  },
  {
    pad: "/advies",
    title: "Plan een kennismaking",
    description:
      "Een gratis kennismakingsgesprek van een half uur, online of bij jullie aan tafel. We luisteren, stellen vragen en zeggen eerlijk wat je beter wel of niet kunt doen met software en AI.",
    soort: "contact",
  },
  {
    pad: "/over-jona",
    title: "Over Jona",
    description:
      "Jona zinvolle technologie is een sociaal bewogen tech-startup uit Veenendaal. Drie ondernemers die software en AI bouwen voor kleine bedrijven, stichtingen en verenigingen.",
    soort: "over",
  },
  {
    pad: "/klantverhaal/hadders-media",
    title: "Klantverhaal: een livestreamplatform voor Hadders Media",
    description:
      "Hadders Media biedt als eerste in Nederland live ondertiteling en nasynchronisatie bij uitvaarten. Wij bouwden een platform dat livestreams, vertalingen en condoleances samenbrengt, eenvoudig te beheren en overal ter wereld te volgen.",
    soort: "verhaal",
    beeld: "/beeld/hadders-media-beheer.png",
    klant: "Hadders Media",
  },
  {
    pad: "/klantverhaal/holy-moly",
    title: "Klantverhaal: de app bij het kaartspel Holy Moly!",
    description:
      "Holy Moly! is een kaartspel dat medio 2027 verschijnt. Wij bouwden een app voor iOS en Android, waarin je het spel kunt spelen tegen de computer. Strategisch, geestig en een tikkeltje zondig.",
    soort: "verhaal",
    beeld: "/beeld/holy-moly-showcase.png",
  },
  {
    pad: "/klantverhaal/vbgg",
    title: "Klantverhaal: een administratieportal voor de Vakantieweken VBGG",
    description:
      "De Vakantieweken van de Vrouwenbond Gereformeerde Gemeenten werkten grotendeels op papier. Wij bouwden één portal voor de aanmelding van gasten en stafleden, VOG-aanvragen en de financiële afhandeling, gekoppeld aan de website.",
    soort: "verhaal",
    klant: "Commissie Vakantieweken VBGG",
    beeld: "/beeld/vbgg-website.png",
  },
  {
    pad: "/klantverhaal/bc-app",
    title: "Klantverhaal: de BC app bij het boek De Zin der Dingen",
    description:
      "Bij het boek De Zin der Dingen van Jaap Bönker en Ruben Hadders bouwden wij voor de Bijbelse Cultuur Stichting een app voor iOS en Android, met meer dan 125 gebruiksvoorwerpen uit de Bijbel en hun symbolische betekenis.",
    soort: "verhaal",
    klant: "Bijbelse Cultuur Stichting",
    beeld: "/beeld/bc-app.png",
  },
];

export function zoekPagina(pad: string): Pagina | undefined {
  const schoon = pad.replace(/\/+$/, "") || "/";
  return PAGINAS.find((p) => p.pad === schoon);
}

/** Titel en omschrijving voor <Base {...pagina("/pad")}>. */
export function pagina(pad: string): { title: string; description: string } {
  const p = zoekPagina(pad);
  if (!p) throw new Error(`Onbekende pagina in src/lib/paginas.ts: ${pad}`);
  return { title: p.title, description: p.description };
}

/**
 * Deelplaatje (Open Graph, 1200 x 630) bij een pad. De plaatjes maak je met
 * `npm run og` (scripts/maak-og.mjs); de bestandsnaam volgt uit het pad.
 */
export function ogPad(pad: string): string {
  const p = zoekPagina(pad);
  if (!p) return "/beeld/og/home.png";
  const slug = p.pad === "/" ? "home" : p.pad.slice(1).replace(/\//g, "-");
  return `/beeld/og/${slug}.png`;
}
