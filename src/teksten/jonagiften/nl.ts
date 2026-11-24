// Teksten van de pagina Jona Giften, Nederlands. De opmaak staat in src/views/JonaGiften.astro.
// Velden met HTML erin zijn met `Html` gemarkeerd. Bedragen staan niet hier: die
// zet de view in de schrijfwijze van de taal (bedrag() in src/i18n/talen.ts).
import type { ComponentProps } from "astro/types";
import type Icon from "../../components/Icon.astro";

export type IconNaam = ComponentProps<typeof Icon>["name"];

export interface Kaart {
  icon: IconNaam;
  titel: string;
  tekst: string;
}

export const nl = {
  kruimelpad: "Kruimelpad",
  software: "Onze software",
  hero: {
    tag: "Nu beschikbaar · 14 dagen gratis proberen",
    kop: "Jona Giften: een giftenadministratie die elke penningmeester snapt.",
    lead: "Bij de meeste kleine stichtingen doet de penningmeester de administratie naast werk en gezin. Dan moet het bijhouden van donateurs en giften niet in de weg zitten. Jona Giften zet alles op één plek: wie er gaf, voor welk project, en wie nog een jaaroverzicht moet krijgen. Zo eenvoudig dat je er geen handleiding voor nodig hebt.",
    knopProberen: "Probeer 14 dagen gratis",
    knopSite: "Naar jonagiften.nl",
    altBrowser: "Het jaaroverzicht in Jona Giften: € 48.320 opgehaald in 2026, een staafje per maand en alle giften van november",
    altTelefoon: "Een gift boeken op de telefoon: donateur, bedrag, datum, project en hoe het geld binnenkwam",
  },
  stappen: {
    eyebrow: "Van gift tot jaaroverzicht",
    kop: "Alles wat een penningmeester doet, op één plek",
    stap: "Stap",
    lijst: [
      { icon: "users", titel: "Donateurs toevoegen", tekst: "Zet je donateurs erin, één voor één of in één keer vanuit je bestaande lijst. Naam en woonplaats is genoeg om te beginnen." },
      { icon: "circle-plus", titel: "Giften boeken", tekst: "Wie gaf, hoeveel en voor welk project. Meer hoef je niet in te vullen. Op de computer, of even snel op je telefoon." },
      { icon: "heart", titel: "Online laten geven", tekst: "Elk project krijgt een eigen donatiepagina. Een donateur betaalt met iDEAL en de gift staat vanzelf in je overzicht." },
      { icon: "file-text", titel: "Jaaroverzichten sturen", tekst: "Voor de belastingaangifte willen donateurs weten wat ze gaven. Met één klik krijgt iedereen een eigen overzicht." },
    ] as Kaart[],
  },
  telefoon: {
    eyebrow: "Ook op je telefoon",
    kop: "Een gift boek je gewoon even tussendoor",
    tekst: "Na de collecte of op een verjaardag geld aangenomen? Dan boek je het meteen, zonder dat je eerst achter de laptop hoeft. Op je telefoon zie je ook in één oogopslag wat er dit jaar binnenkwam en wie je donateurs zijn.",
    altJaar: "Het jaaroverzicht op de telefoon",
    altDonateurs: "De lijst met donateurs op de telefoon, met wat ieder dit jaar gaf",
  },
  geefpagina: {
    alt: "De donatiepagina voor het project Voedselhulp: eenmalig of maandelijks, een bedrag kiezen en geven",
    /** Het voorbeeld van een melding naast de telefoon (alleen decoratie). */
    melding: { kop: "Nieuwe gift", wanneer: "vandaag", naam: "Fam. Dekker", project: "Voedselhulp", via: "iDEAL" },
    eyebrow: "Donatiepagina per project",
    kop: "Een eigen geefpagina, in de kleuren van je stichting",
    tekst: "Voedselhulp, een schoolproject of een nieuw buurthuis: elk project krijgt een eigen pagina met jullie logo en kleuren. Mensen geven eenmalig of maandelijks, met iDEAL. De gift komt vanzelf in je administratie terecht.",
  },
  overzicht: {
    eyebrow: "Giftenoverzicht",
    kop: "Elke donateur een eigen jaaroverzicht, met één klik",
    tekst: "Begin van het jaar vragen donateurs om een overzicht voor de belastingaangifte. Kies het jaar, kies wie het krijgt, en Jona Giften maakt voor iedereen een net overzicht met de giften per project. Per e-mail of als printbestand.",
    alt: "Het giftenoverzicht 2025 voor een donateur, met het totaal per project en het RSIN van de stichting",
  },
  meer: {
    eyebrow: "En meer, als het nodig is",
    kop: "Het zit er allemaal in, en het staat niet in de weg",
    lijst: [
      { icon: "pen", titel: "Machtigingen", tekst: "Donateurs tekenen een machtiging gewoon op hun telefoon." },
      { icon: "repeat", titel: "Incasso", tekst: "Incasseren via je eigen bank, of via Mollie." },
      { icon: "calendar", titel: "Periodieke giften", tekst: "Leg periodieke giften vast, zodat je weet wat er is afgesproken." },
      { icon: "chart", titel: "Rapport voor het bestuur", tekst: "Giften per project, naast vorig jaar. Te downloaden als Excel of pdf." },
      { icon: "palette", titel: "Jullie eigen huisstijl", tekst: "Logo, kleuren en aanspreekvorm (u of je) stel je één keer in." },
      { icon: "monitor", titel: "Niets te installeren", tekst: "Werkt in de browser, op computer, tablet en telefoon." },
    ] as Kaart[],
  },
  prijs: {
    eyebrow: "Wat het kost",
    kop: "Eerst 14 dagen gratis proberen",
    tekst: "Je kunt Jona Giften eerst rustig uitproberen met je eigen donateurs en giften. Bevalt het, dan kies je of je per jaar of per maand betaalt. Alle functies zitten er altijd in, er zijn geen pakketten of extra kosten per donateur.",
    portretAlt: "Getekend portret van Ruben Hadders",
    persoonlijk: "Twijfel je of het past bij jullie stichting? Bel of mail me gerust, ik denk graag met je mee.",
    naam: "Ruben Hadders, ontwikkelaar van Jona Giften",
    telefoon: "033 230 17 37",
    kaartKop: "Jona Giften voor jullie stichting",
    perJaarBetalen: "Per jaar betalen",
    perMaandBetalen: "Per maand betalen",
    perMaand: "per maand",
    perJaar: "per jaar",
    perMaandAfgerekend: "per maand afgerekend",
    checks: [
      "14 dagen gratis, met al je eigen gegevens",
      "Alle functies, ook donatiepagina's en jaaroverzichten",
      "Persoonlijke hulp als je ergens niet uitkomt",
      "Prijzen inclusief btw",
    ],
    knop: "Start je gratis proefperiode",
    /** De tekst voor en na de link naar jonagiften.nl. */
    note: ["Aanmelden duurt twee minuten en gaat via ", "."] as [string, string],
  },
  faq: {
    kop: "Veelgestelde vragen",
    lijst: [
      { v: "Voor wie is Jona Giften bedoeld?", a: "Voor kleine stichtingen en goede doelen die met vrijwilligers werken. Een stichting voor een project in het buitenland, een voedselhulp in je eigen dorp, een fonds van de kerk. Heb je donateurs en giften bij te houden, dan is het voor jou gemaakt." },
      { v: "Moet ik verstand hebben van boekhouden?", a: "Nee. Jona Giften is gemaakt voor penningmeesters die dit naast hun werk doen. Een gift boek je in een paar seconden, en de overzichten voor donateurs en bestuur maakt het programma zelf." },
      { v: "Moet ik iets installeren?", a: "Nee. Je logt in via jonagiften.nl, op je computer, tablet of telefoon. Er is niets te downloaden of bij te werken." },
      { v: "Kan ik mijn huidige donateurslijst overzetten?", a: "Ja. Je importeert je donateurs in één keer vanuit je bestaande lijst, zodat je niet alles opnieuw hoeft in te typen." },
      { v: "Hoe gaan jullie om met de gegevens van onze donateurs?", a: "Veilig en zorgvuldig. Alle gegevens worden verwerkt op een server in Nederland, in lijn met de AVG. De gegevens van jullie donateurs zijn alleen van jullie stichting en worden nergens anders voor gebruikt." },
    ],
  },
};

export type JonaGiftenTekst = typeof nl;
