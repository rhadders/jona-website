// Teksten van de pagina Jona Bestuur, Nederlands. De opmaak staat in src/views/JonaBestuur.astro.
// Bedragen staan niet hier: die zet de view in de schrijfwijze van de taal
// (bedrag() in src/i18n/talen.ts).
import type { Kaart } from "../jonagiften/nl";

export type { Kaart };

export interface Vraag {
  label: string;
  vraag: string;
  tekst: string;
}

export const nl = {
  kruimelpad: "Kruimelpad",
  software: "Onze software",
  hero: {
    tag: "Nu beschikbaar · 14 dagen gratis proberen",
    kop: "Jona Bestuur: agenda, notulen en besluiten op één plek.",
    lead: "De secretaris van een klein bestuur doet het meeste werk 's avonds, naast werk en gezin. De agenda maken, meeschrijven tijdens de vergadering, de notulen uitwerken en onthouden wat er besloten is. Jona Bestuur zet het allemaal op één plek. Zo eenvoudig dat je er geen handleiding voor nodig hebt, en de rest van het bestuur ook niet.",
    knopProberen: "Probeer 14 dagen gratis",
    knopSite: "Naar jonabestuur.nl",
    altBrowser: "De vergadermodus van Jona Bestuur: links de agenda, rechts agendapunt 6, Begroting 2027, met drie vragen: wat is er besproken, wat is besloten en wie doet wat",
    altTelefoon: "Een agendapunt in de vergadermodus op de telefoon",
  },
  stappen: {
    eyebrow: "Van agenda tot besluit",
    kop: "Alles wat een secretaris doet, op één plek",
    stap: "Stap",
    lijst: [
      { icon: "calendar", titel: "De agenda maken", tekst: "De vaste punten staan er al, zoals de opening en de rondvraag. Bestuursleden stellen zelf een punt voor, en openstaande acties komen vanzelf terug." },
      { icon: "users", titel: "Vergaderen, punt voor punt", tekst: "Bij elk punt maar drie vragen: wat is besproken, wat is besloten en wie doet wat. Alles wordt meteen bewaard." },
      { icon: "file-text", titel: "Notulen vaststellen", tekst: "Na het laatste punt staan de conceptnotulen klaar. Jij leest na, deelt ze ter controle en stelt ze de volgende keer vast." },
      { icon: "search", titel: "Besluiten terugvinden", tekst: "Elk besluit krijgt een nummer en staat in het besluitenregister. Je typt een woord en je hebt het." },
    ] as Kaart[],
  },
  vergadermodus: {
    eyebrow: "De vergadermodus",
    kop: "Je vergadert, één punt tegelijk",
    tekst: "Links de agenda, rechts het punt waar jullie nu zijn. Je vult in wat nodig is en gaat door naar het volgende punt. Alles wordt meteen bewaard, ook op een tablet of telefoon.",
    vragen: [
      { label: "Besproken", vraag: "Wat is er besproken?", tekst: "Een paar zinnen is genoeg." },
      { label: "Besloten", vraag: "Wat is besloten?", tekst: "Het besluit krijgt meteen een nummer." },
      { label: "Wie doet wat", vraag: "Wie doet wat?", tekst: "Een actie, met een naam en een datum." },
    ] as Vraag[],
  },
  notulen: {
    alt: "Notulen van 9 november, ter controle gedeeld, met een besluit en een actie bij het punt Begroting 2027",
    eyebrow: "De notulen",
    kop: "De notulen schrijven zich bijna vanzelf",
    tekst: "Na het laatste punt staan de conceptnotulen klaar, met de besluiten en acties erin. Jij leest ze na, deelt ze ter controle met het bestuur en stelt ze de volgende keer vast. Daarna liggen ze vast, ook als pdf.",
  },
  besluiten: {
    eyebrow: "Besluitenregister",
    kop: "“Wat hadden we nou afgesproken over de huur?”",
    tekst: "Elk besluit staat in het besluitenregister, met een nummer en het agendapunt waar het vandaan komt. Je typt een woord en je hebt het. Zo hoeft niemand meer door oude notulen te bladeren.",
    alt: "Het besluitenregister met vier besluiten en het spoor van besluit 2026-004",
  },
  telefoon: {
    altAgenda: "De agenda op de telefoon",
    altBesluiten: "Het besluitenregister op de telefoon",
    eyebrow: "Ook op je telefoon",
    kop: "De agenda en de besluiten altijd bij de hand",
    tekst: "Even nakijken wat er de volgende keer op de agenda staat, of wat er vorig jaar besloten is? Op je telefoon heb je het zo gevonden. Ook de rest van het bestuur kan meelezen.",
  },
  meer: {
    eyebrow: "En meer, als het nodig is",
    kop: "Het zit er allemaal in, en het staat niet in de weg",
    lijst: [
      { icon: "mail", titel: "Herinneringen bij acties", tekst: "Een e-mail als de datum van een actie nadert." },
      { icon: "lock", titel: "Vertrouwelijke punten", tekst: "Alleen zichtbaar voor wie ze mag zien." },
      { icon: "circle-plus", titel: "Punt voorstellen", tekst: "Bestuursleden zetten zelf een punt op de agenda." },
      { icon: "book-open", titel: "Doorzoekbaar archief", tekst: "Alle vergaderingen en stukken, terug te vinden op één woord." },
      { icon: "download", titel: "Excel en pdf", tekst: "Het register en de acties als Excel, de notulen als pdf." },
      { icon: "monitor", titel: "Niets te installeren", tekst: "Werkt in de browser, op computer, tablet en telefoon." },
    ] as Kaart[],
  },
  veilig: {
    kop: "Bestuursstukken zijn vertrouwelijk",
    tekst: "Daar is Jona Bestuur op gebouwd.",
    lijst: [
      "Inloggen gaat altijd met een tweede stap op je telefoon",
      "De gegevens van jullie bestuur zijn strikt gescheiden van die van anderen",
      "Bijlagen worden versleuteld bewaard, en elke nacht wordt er een back-up gemaakt",
      "Een bestuurslid ziet alleen wat gedeeld is",
      "Vastgestelde notulen en besluiten kan niemand stilletjes wijzigen",
      "Je kunt alles van jullie bestuur in één keer exporteren",
    ],
  },
  prijs: {
    eyebrow: "Wat het kost",
    kop: "Eerst 14 dagen gratis proberen",
    tekst: "Je probeert Jona Bestuur eerst rustig uit, met je eigen bestuur en je eigen vergaderingen. Bevalt het, dan kies je of je per jaar of per maand betaalt. Eén prijs voor het hele bestuur samen, en alles zit erin.",
    portretAlt: "Getekend portret van Ruben Hadders",
    persoonlijk: "Twijfel je of het past bij jullie bestuur? Bel of mail me gerust, ik denk graag met je mee.",
    naam: "Ruben Hadders, ontwikkelaar van Jona Bestuur",
    telefoon: "033 230 17 37",
    kaartKop: "Jona Bestuur voor jullie bestuur",
    perJaarBetalen: "Per jaar betalen",
    perMaandBetalen: "Per maand betalen",
    perMaand: "per maand",
    perJaar: "per jaar",
    perMaandAfgerekend: "per maand afgerekend",
    checks: [
      "14 dagen gratis, met je eigen vergaderingen",
      "Voor het hele bestuur samen, met alle functies",
      "Persoonlijke hulp als je ergens niet uitkomt",
      "Prijzen inclusief btw",
    ],
    knop: "Start je gratis proefperiode",
    /** De tekst voor en na de link naar jonabestuur.nl. */
    note: ["Aanmelden duurt twee minuten en gaat via ", "."] as [string, string],
  },
  faq: {
    kop: "Veelgestelde vragen",
    lijst: [
      { v: "Voor wie is Jona Bestuur bedoeld?", a: "Voor kleine besturen, zoals van een stichting of vereniging, waar de secretaris het werk naast een baan doet. Vergadert jullie bestuur een paar keer per jaar en wil je terug kunnen vinden wat er besloten is, dan is het voor jou gemaakt." },
      { v: "Moet de rest van het bestuur er ook mee werken?", a: "Dat kan, maar het hoeft niet. Bestuursleden lezen de agenda en de notulen mee, stellen zelf een punt voor en zien hun eigen acties. Een bestuurslid ziet alleen wat met hem of haar gedeeld is." },
      { v: "Moet ik iets installeren?", a: "Nee. Je logt in via jonabestuur.nl, op je computer, tablet of telefoon. Er is niets te downloaden of bij te werken." },
      { v: "Kan ik ook vergaderen met alleen een tablet of telefoon?", a: "Ja. De agenda, de vergadermodus en het besluitenregister werken ook op een klein scherm, en alles wat je invult wordt meteen bewaard." },
      { v: "Hoe veilig zijn onze bestuursstukken?", a: "Daar is Jona Bestuur op gebouwd. Inloggen gaat altijd met een tweede stap op je telefoon, de gegevens van jullie bestuur zijn strikt gescheiden van die van anderen, bijlagen worden versleuteld bewaard en elke nacht wordt er een back-up gemaakt." },
    ],
  },
};

export type JonaBestuurTekst = typeof nl;
