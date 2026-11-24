// Eén bron voor de pagina's van de site, per taal: het adres, de titel en de
// omschrijving. De pagina's zelf, de sitemap (/sitemap.xml), /llms.txt, de
// taalwisselaar, de hreflang-links en de gestructureerde data (JSON-LD in
// Base.astro) lezen allemaal hieruit, zodat ze nooit uit elkaar lopen.
//
// Een pagina bestaat in een taal zodra die taal hier onder `talen` staat.
// Engels en Duits krijgen alleen pagina's voor apps die in die taal te
// gebruiken zijn: ActueleGegevens.nl blijft Nederlands. In het Duits ook geen
// pagina's over bouwen in opdracht (AI-scan, kennismaken, klantverhalen; zie
// MAATWERK in src/i18n/talen.ts).
// Nieuwe pagina of vertaling? Voeg hem hier toe.
import { BRONTAAL, TALEN, taalUitPad, type Taal } from "../i18n/talen";

export type Soort = "home" | "overzicht" | "software" | "dienst" | "contact" | "over" | "verhaal";

export interface PaginaTaal {
  pad: string;
  title: string;
  description: string;
  /** Eigen website van het product in deze taal, als die afwijkt van `extern`. */
  extern?: string;
}

export interface Pagina {
  /** Vaste sleutel, gelijk aan het Nederlandse adres zonder /nl (home voor de homepage). */
  id: string;
  talen: { nl: PaginaTaal } & Partial<Record<Exclude<Taal, "nl">, PaginaTaal>>;
  soort: Soort;
  /**
   * Talen waarin het product zelf te gebruiken is. Zonder deze regel: alle
   * talen. Een app die niet in een taal bestaat, krijgt in die taal ook geen
   * pagina en wordt daar nergens genoemd.
   */
  beschikbaar?: Taal[];
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
    id: "home",
    talen: {
      nl: {
        pad: "/nl",
        title: "Jona · zinvolle technologie",
        description:
          "Wij bouwen gebruiksvriendelijke software en AI voor bedrijven en organisaties met een missie. Jona Giften, Jona Bestuur, Selaread, ActueleGegevens.nl en TirgumAI, en maatwerk via EchoNova.",
      },
      en: {
        pad: "/en",
        title: "Jona · meaningful technology",
        description:
          "We build user-friendly software and AI for businesses and organizations with a mission. Jona Donations, Jona Board, Selaread and TirgumAI, plus custom software through EchoNova.",
      },
      de: {
        pad: "/de",
        title: "Jona · sinnvolle Technologie",
        description:
          "Wir entwickeln benutzerfreundliche Software für Vereine, Stiftungen und Organisationen mit einer Mission: Jona Spenden, Jona Vorstand, Selaread und TirgumAI.",
      },
    },
    soort: "home",
  },
  {
    id: "software",
    talen: {
      nl: {
        pad: "/nl/software",
        title: "Onze software",
        description:
          "Alle software die Jona zelf bouwt: Jona Giften, Jona Bestuur en ActueleGegevens.nl kun je vandaag gebruiken, Selaread en TirgumAI komen eraan. Apps voor organisaties met een missie.",
      },
      en: {
        pad: "/en/software",
        title: "Our software",
        description:
          "All the software Jona builds itself: Jona Donations and Jona Board are ready to use today, Selaread and TirgumAI are on the way. Apps for organizations with a mission.",
      },
      de: {
        pad: "/de/software",
        title: "Unsere Software",
        description:
          "Alle Software, die Jona selbst entwickelt: Jona Spenden und Jona Vorstand kannst du schon heute nutzen, Selaread und TirgumAI kommen bald. Apps für Organisationen mit einer Mission.",
      },
    },
    soort: "overzicht",
  },
  {
    id: "jonagiften",
    talen: {
      nl: {
        pad: "/nl/jonagiften",
        title: "Jona Giften",
        description:
          "Jona Giften is de giftenadministratie voor kleine stichtingen: donateurs, giften, machtigingen, donatiepagina's en jaaroverzichten op één plek. Eenvoudig genoeg voor elke penningmeester. Probeer het 14 dagen gratis.",
      },
      en: {
        pad: "/en/jona-donations",
        extern: "https://donations.jonatools.com",
        title: "Jona Donations",
        description:
          "Jona Donations is donation management for small charities and foundations: donors, gifts, direct debit mandates, donation pages and annual statements in one place. Simple enough for any treasurer. Try it free for 14 days.",
      },
      de: {
        pad: "/de/jona-spenden",
        extern: "https://spenden.jonatools.com",
        title: "Jona Spenden",
        description:
          "Jona Spenden ist die Spendenverwaltung für kleine Stiftungen und Vereine: Spender, Spenden, Lastschriftmandate, Spendenseiten und Jahresübersichten an einem Ort. Einfach genug für jeden Kassenwart. 14 Tage kostenlos testen.",
      },
    },
    soort: "software",
    extern: "https://jonagiften.nl",
  },
  {
    id: "jonabestuur",
    talen: {
      nl: {
        pad: "/nl/jonabestuur",
        title: "Jona Bestuur",
        description:
          "Jona Bestuur zet de agenda, de notulen, de besluiten en de acties van een klein bestuur op één plek. Vergader punt voor punt en de conceptnotulen staan klaar na het laatste agendapunt. Eenvoudig genoeg voor elke secretaris. Probeer het 14 dagen gratis.",
      },
      en: {
        pad: "/en/jona-board",
        extern: "https://board.jonatools.com",
        title: "Jona Board",
        description:
          "Jona Board brings the agenda, minutes, decisions and action items of a small board together in one place. Go through your meeting item by item, and the draft minutes are ready after the last agenda item. Simple enough for any secretary. Try it free for 14 days.",
      },
      de: {
        pad: "/de/jona-vorstand",
        extern: "https://vorstand.jonatools.com",
        title: "Jona Vorstand",
        description:
          "Jona Vorstand bringt Tagesordnung, Protokolle, Beschlüsse und Aufgaben eines kleinen Vorstands an einem Ort zusammen. Geht eure Sitzung Punkt für Punkt durch, und nach dem letzten Tagesordnungspunkt steht der Protokollentwurf bereit. Einfach genug für jeden Schriftführer. 14 Tage kostenlos testen.",
      },
    },
    soort: "software",
    extern: "https://jonabestuur.nl",
  },
  {
    id: "selaread",
    talen: {
      nl: {
        pad: "/nl/selaread",
        title: "Selaread",
        description:
          "Selaread is de leeskiosk voor christelijk Nederland: alle christelijke tijdschriften in één abonnement, op mobiel, tablet en desktop. Voor uitgevers een nieuw kanaal met 70% van de omzet, zonder eigen app te hoeven bouwen.",
      },
      en: {
        pad: "/en/selaread",
        title: "Selaread",
        description:
          "Selaread is the digital newsstand for Christian magazines: all your Christian magazines in one subscription, on phone, tablet and desktop. For publishers, a new channel that pays out 70% of revenue, without having to build an app of their own.",
      },
      de: {
        pad: "/de/selaread",
        title: "Selaread",
        description:
          "Selaread ist der digitale Kiosk für christliche Zeitschriften: alle christlichen Zeitschriften in einem Abo, auf Smartphone, Tablet und Desktop. Für Verlage ein neuer Vertriebskanal mit 70 % des Umsatzes, ohne eine eigene App bauen zu müssen.",
      },
    },
    soort: "software",
  },
  {
    id: "actuelegegevens",
    talen: {
      nl: {
        pad: "/nl/actuelegegevens",
        title: "ActueleGegevens.nl",
        description:
          "Laat je relaties zelf hun gegevens controleren en aanvullen. Importeer je bestand, start een campagne, volg de wijzigingen en download een actueel relatiebestand. Live vanaf 1 december.",
      },
    },
    soort: "software",
    beschikbaar: ["nl"],
    extern: "https://actuelegegevens.nl",
  },
  {
    id: "tirgumai",
    talen: {
      nl: {
        pad: "/nl/tirgumai",
        title: "TirgumAI",
        description:
          "Vertaal de Bijbel vers voor vers vanuit de Hebreeuwse en Griekse grondtekst, alleen of met een team, met hulp van AI. Verrijk de vertaling, publiceer je eigen studiebijbel online en laat complete Bijbels automatisch drukklaar zetten.",
      },
      en: {
        pad: "/en/tirgumai",
        title: "TirgumAI",
        description:
          "Translate the Bible verse by verse from the Hebrew and Greek source texts, on your own or with a team, with the help of AI. Enrich the translation, publish your own study Bible online, and have complete Bibles typeset for print automatically.",
      },
      de: {
        pad: "/de/tirgumai",
        title: "TirgumAI",
        description:
          "Übersetze die Bibel Vers für Vers aus dem hebräischen und griechischen Grundtext, allein oder im Team, mit Hilfe von KI. Ergänze die Übersetzung, veröffentliche deine eigene Studienbibel online und lass komplette Bibeln automatisch druckfertig setzen.",
      },
    },
    soort: "software",
  },
  {
    id: "ai-scan",
    talen: {
      nl: {
        pad: "/nl/ai-scan",
        title: "De AI-scan",
        description:
          "Eén dag meekijken in jullie organisatie, binnen een week een plan in gewone taal: welk werk kan slimmer met software of AI, wat levert het op en wat kost het.",
      },
      en: {
        pad: "/en/ai-scan",
        title: "The AI scan",
        description:
          "We spend one day with your organization, and within a week you get a plan in plain language: which work can be done smarter with software or AI, what it delivers and what it costs.",
      },
    },
    soort: "dienst",
    prijs: 925,
  },
  {
    id: "advies",
    talen: {
      nl: {
        pad: "/nl/advies",
        title: "Plan een kennismaking",
        description:
          "Een gratis kennismakingsgesprek van een half uur, online of bij jullie aan tafel. We luisteren, stellen vragen en zeggen eerlijk wat je beter wel of niet kunt doen met software en AI.",
      },
      en: {
        pad: "/en/contact",
        title: "Schedule a meeting",
        description:
          "A free, half-hour introductory meeting, online or at your place. We listen, ask questions and tell you honestly what you should and shouldn't do with software and AI.",
      },
    },
    soort: "contact",
  },
  {
    id: "over-jona",
    talen: {
      nl: {
        pad: "/nl/over-jona",
        title: "Over Jona",
        description:
          "Jona zinvolle technologie is een sociaal bewogen tech-startup uit Veenendaal. Drie ondernemers die software en AI bouwen voor kleine bedrijven, stichtingen en verenigingen.",
      },
      en: {
        pad: "/en/about",
        title: "About Jona",
        description:
          "Jona zinvolle technologie (meaningful technology) is a socially engaged tech startup from Veenendaal, the Netherlands. Three entrepreneurs who build software and AI for small businesses, foundations and associations.",
      },
      de: {
        pad: "/de/ueber-uns",
        title: "Über Jona",
        description:
          "Jona zinvolle technologie (sinnvolle Technologie) ist ein sozial engagiertes Tech-Start-up aus Veenendaal in den Niederlanden. Drei Unternehmer, die Software und KI für kleine Unternehmen, Stiftungen und Vereine entwickeln.",
      },
    },
    soort: "over",
  },
  {
    id: "klantverhaal/hadders-media",
    talen: {
      nl: {
        pad: "/nl/klantverhaal/hadders-media",
        title: "Klantverhaal: een livestreamplatform voor Hadders Media",
        description:
          "Hadders Media biedt als eerste in Nederland live ondertiteling en nasynchronisatie bij uitvaarten. Wij bouwden een platform dat livestreams, vertalingen en condoleances samenbrengt, eenvoudig te beheren en overal ter wereld te volgen.",
      },
      en: {
        pad: "/en/case-studies/hadders-media",
        title: "Case study: a livestream platform for Hadders Media",
        description:
          "Hadders Media was the first in the Netherlands to offer live subtitles and dubbing at funerals. We built a platform that brings livestreams, translations and condolences together, easy to manage and accessible from anywhere in the world.",
      },
    },
    soort: "verhaal",
    beeld: "/beeld/hadders-media-beheer.png",
    klant: "Hadders Media",
  },
  {
    id: "klantverhaal/holy-moly",
    talen: {
      nl: {
        pad: "/nl/klantverhaal/holy-moly",
        title: "Klantverhaal: de app bij het kaartspel Holy Moly!",
        description:
          "Holy Moly! is een kaartspel dat medio 2027 verschijnt. Wij bouwden een app voor iOS en Android, waarin je het spel kunt spelen tegen de computer. Strategisch, geestig en een tikkeltje zondig.",
      },
      en: {
        pad: "/en/case-studies/holy-moly",
        title: "Case study: the app for the card game Holy Moly!",
        description:
          "Holy Moly! is a card game coming out in mid-2027. We built an app for iOS and Android where you can play the game against the computer. Strategic, witty and just a little bit sinful.",
      },
    },
    soort: "verhaal",
    beeld: "/beeld/holy-moly-showcase.png",
  },
  {
    id: "klantverhaal/vbgg",
    talen: {
      nl: {
        pad: "/nl/klantverhaal/vbgg",
        title: "Klantverhaal: een administratieportal voor de Vakantieweken VBGG",
        description:
          "De Vakantieweken van de Vrouwenbond Gereformeerde Gemeenten werkten grotendeels op papier. Wij bouwden één portal voor de aanmelding van gasten en stafleden, VOG-aanvragen en de financiële afhandeling, gekoppeld aan de website.",
      },
      en: {
        pad: "/en/case-studies/vbgg",
        title: "Case study: an administration portal for the Vakantieweken VBGG",
        description:
          "The Vakantieweken (holiday weeks) of the Vrouwenbond Gereformeerde Gemeenten ran largely on paper. We built a single portal for guest and staff sign-ups, certificate of conduct (VOG) applications and the financial side, connected to the website.",
      },
    },
    soort: "verhaal",
    klant: "Commissie Vakantieweken VBGG",
    beeld: "/beeld/vbgg-website.png",
  },
  {
    id: "klantverhaal/bc-app",
    talen: {
      nl: {
        pad: "/nl/klantverhaal/bc-app",
        title: "Klantverhaal: de BC app bij het boek De Zin der Dingen",
        description:
          "Bij het boek De Zin der Dingen van Jaap Bönker en Ruben Hadders bouwden wij voor de Bijbelse Cultuur Stichting een app voor iOS en Android, met meer dan 125 gebruiksvoorwerpen uit de Bijbel en hun symbolische betekenis.",
      },
      en: {
        pad: "/en/case-studies/bc-app",
        title: "Case study: the BC app for the book De Zin der Dingen",
        description:
          "For the book De Zin der Dingen by Jaap Bönker and Ruben Hadders, we built an iOS and Android app for the Bijbelse Cultuur Stichting (Biblical Culture Foundation), featuring more than 125 everyday objects from the Bible and their symbolic meaning.",
      },
    },
    soort: "verhaal",
    klant: "Bijbelse Cultuur Stichting",
    beeld: "/beeld/bc-app.png",
  },
];

/** De bedankpagina na een formulier; niet openbaar, dus niet in PAGINAS. */
export const BEDANKT: Record<Taal, string> = { nl: "/nl/bedankt", en: "/en/thank-you", de: "/de/danke" };

const schoonPad = (pad: string) => pad.replace(/\/+$/, "") || "/";

export interface Gevonden {
  pagina: Pagina;
  taal: Taal;
  tekst: PaginaTaal;
}

/** De pagina bij een adres, in welke taal dan ook. */
export function zoekPagina(pad: string): Gevonden | undefined {
  const schoon = schoonPad(pad);
  for (const pagina of PAGINAS) {
    for (const taal of TALEN) {
      const tekst = pagina.talen[taal];
      if (tekst?.pad === schoon) return { pagina, taal, tekst };
    }
  }
  return undefined;
}

/** Titel en omschrijving voor <Base {...pagina("/nl/pad")}>. */
export function pagina(pad: string): { title: string; description: string } {
  const g = zoekPagina(pad);
  if (!g) throw new Error(`Onbekende pagina in src/lib/paginas.ts: ${pad}`);
  return { title: g.tekst.title, description: g.tekst.description };
}

/** Pagina's die in een taal bestaan, in de volgorde van PAGINAS. */
export function paginasIn(taal: Taal): (Pagina & { tekst: PaginaTaal })[] {
  return PAGINAS.flatMap((p) => (p.talen[taal] ? [{ ...p, tekst: p.talen[taal]! }] : []));
}

/** Bestaat deze pagina in deze taal? */
export function bestaat(id: string, taal: Taal): boolean {
  return Boolean(PAGINAS.find((p) => p.id === id)?.talen[taal]);
}

/** Is dit product in deze taal te gebruiken (en hoort het dus in die taal op de site)? */
export function beschikbaar(id: string, taal: Taal): boolean {
  const p = PAGINAS.find((x) => x.id === id);
  if (!p) throw new Error(`Onbekende pagina-id in src/lib/paginas.ts: ${id}`);
  return !p.beschikbaar || p.beschikbaar.includes(taal);
}

/**
 * Adres van een pagina in een taal, met optioneel een #anker. Bestaat de
 * pagina (nog) niet in die taal, dan het Nederlandse adres, zodat een link
 * nooit op een 404 uitkomt.
 */
export function link(id: string, taal: Taal, anker = ""): string {
  const p = PAGINAS.find((x) => x.id === id);
  if (!p) throw new Error(`Onbekende pagina-id in src/lib/paginas.ts: ${id}`);
  const t = p.talen[taal] ?? p.talen[BRONTAAL];
  return anker ? `${t.pad}#${anker.replace(/^#/, "")}` : t.pad;
}

/** Dezelfde pagina in de andere talen, voor hreflang en de taalwisselaar. */
export function vertalingen(pad: string): { taal: Taal; pad: string }[] {
  const schoon = schoonPad(pad);
  const g = zoekPagina(schoon);
  if (g) return TALEN.flatMap((taal) => (g.pagina.talen[taal] ? [{ taal, pad: g.pagina.talen[taal]!.pad }] : []));
  const bedankt = (Object.entries(BEDANKT) as [Taal, string][]).find(([, p]) => p === schoon);
  if (bedankt) return TALEN.map((taal) => ({ taal, pad: BEDANKT[taal] }));
  return [{ taal: taalUitPad(schoon), pad: schoon }];
}

/**
 * Deelplaatje (Open Graph, 1200 x 630) bij een pad. De plaatjes maak je met
 * `npm run og` (scripts/maak-og.mjs); de bestandsnaam volgt uit de id, met
 * een map per taal voor Engels en Duits (og/en/home.png). Pagina's waarvoor
 * nog geen plaatje in die taal is, krijgen het Nederlandse.
 */
const OG_VERTAALD = new Set(
  [
    ...["home", "software", "jonagiften", "jonabestuur", "selaread", "tirgumai", "over-jona"].flatMap((slug) => [`en/${slug}`, `de/${slug}`]),
    ...["ai-scan", "advies", "klantverhaal-hadders-media", "klantverhaal-holy-moly", "klantverhaal-vbgg", "klantverhaal-bc-app"].map((slug) => `en/${slug}`),
  ],
);
export function ogPad(pad: string): string {
  const g = zoekPagina(pad);
  if (!g) return "/beeld/og/home.png";
  const slug = g.pagina.id.replace(/\//g, "-");
  const vertaald = `${g.taal}/${slug}`;
  return g.taal !== BRONTAAL && OG_VERTAALD.has(vertaald) ? `/beeld/og/${vertaald}.png` : `/beeld/og/${slug}.png`;
}
