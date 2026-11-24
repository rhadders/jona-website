// Teksten van de homepage, Nederlands. De opmaak staat in src/views/Home.astro.
// Velden met HTML erin (een <br>, een link) zijn met `html` gemarkeerd.
// Links naar eigen pagina's gaan via een pagina-id (zie src/lib/paginas.ts),
// zodat ze in elke taal naar het juiste adres wijzen.

export type Doel = string | { pagina: string; anker?: string };

export interface Product {
  beeld: { src: string; breed: number; hoog: number; alt: string };
  tag: string;
  naam: string;
  tekst: string;
  meer: { label: string; pagina: string };
  actie: { label: string; doel: Doel; stijl: "primary" | "outline" };
}

export interface Verhaal {
  pagina: string;
  beeld: { src: string; breed: number; hoog: number; alt: string };
  /** Schuin geplaatste telefoon of tablet in plaats van een schermafbeelding. */
  mockup: boolean;
  kop: string;
  tekst: string;
  /** Naam voor het bolletje onder de carrousel ("Ga naar …"). */
  klant: string;
}

export const nl = {
  hero: {
    duifAria: "Het verhaal achter de duif: lees waarom Jona een duif als beeldmerk heeft",
    duifVraag: "Het verhaal achter de duif?",
    duifKlik: "Klik hier",
    eyebrow: "Missiegedreven software & AI",
    kopHtml: 'Zinvolle technologie voor bedrijven en organisaties <br class="br-wide">met een missie',
    lead: "Wij bouwen gebruiksvriendelijke software en AI voor complexe processen. Vanuit onze jarenlange ervaring met techniek binnen missiegedreven organisaties, weten we wat er nodig is om software écht fijn te laten werken.",
    knopSoftware: "Bekijk onze software",
    knopKennismaking: "Plan een kennismaking",
  },
  producten: {
    eyebrow: "Onze eigen software",
    kop: "Oogstrelende apps waarmee we de harten van gebruikers stelen.",
    lijst: [
      {
        beeld: { src: "/beeld/jonagiften-jaar", breed: 1600, hoog: 1000, alt: "Het jaaroverzicht in Jona Giften: wat er dit jaar binnenkwam, maand voor maand, en alle giften van november" },
        tag: "Nu beschikbaar",
        naam: "Jona Giften",
        tekst: "De giftenadministratie voor kleine stichtingen. Houd donateurs, giften en machtigingen bij op één plek, laat mensen online geven per project en stuur met één klik alle jaaroverzichten. Zo eenvoudig dat elke penningmeester ermee overweg kan.",
        meer: { label: "Meer over Jona Giften", pagina: "jonagiften" },
        actie: { label: "Probeer 14 dagen gratis", doel: "https://jonagiften.nl/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/jonabestuur-vergadermodus", breed: 1600, hoog: 1000, alt: "De vergadermodus van Jona Bestuur: links de agenda, rechts agendapunt 6, Begroting 2027, met drie vragen: wat is er besproken, wat is besloten en wie doet wat" },
        tag: "Nu beschikbaar",
        naam: "Jona Bestuur",
        tekst: "Agenda, notulen en besluiten voor kleine besturen. Vergader punt voor punt: wat is besproken, wat is besloten en wie doet wat. Na het laatste agendapunt staan de conceptnotulen klaar, en elk besluit vind je terug in het besluitenregister.",
        meer: { label: "Meer over Jona Bestuur", pagina: "jonabestuur" },
        actie: { label: "Probeer 14 dagen gratis", doel: "https://jonabestuur.nl/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/actuelegegevens-site", breed: 1800, hoog: 1145, alt: "De website van ActueleGegevens.nl: laat je relaties hun gegevens zelf controleren, met een campagneoverzicht ernaast" },
        tag: "Publieke beta is live",
        naam: "ActueleGegevens.nl",
        tekst: "De worsteling van elke organisatie: hoe houd je je relatiebestand actueel? Verouderde of onjuiste gegevens kosten geld. Met deze online tool zet je binnen 10 minuten een campagne op en laat je jouw relaties zelf hun gegevens controleren en aanvullen.",
        meer: { label: "Meer over ActueleGegevens.nl", pagina: "actuelegegevens" },
        actie: { label: "Meld je aan als testgebruiker", doel: { pagina: "actuelegegevens", anker: "testgebruiker" }, stijl: "primary" },
      },
    ] as Product[],
    alles: "Ook Selaread, de leeskiosk voor christelijke tijdschriften, TirgumAI voor bijbelvertalers, en wat er nog meer aankomt.",
    allesKnop: "Bekijk al onze software",
  },
  maatwerk: {
    eyebrow: "Maatwerk software",
    kop: "Wat er niet is, kan gemaakt worden",
    leadHtml: 'Onder de indruk van de software die wij bouwen? Loop je zelf rond met een idee voor jouw bedrijf of organisatie? Wij bouwen ook software en AI op maat, via ons zusterbedrijf <a href="https://echonova.nl" target="_blank" rel="noopener">EchoNova</a>. Altijd vanuit twee eenvoudige principes:',
    principes: [
      { kop: "Wij maken software betaalbaar en duurzaam", tekst: "Dankzij AI kan met een klein budget zeer geavanceerde software gebouwd worden, die in kwaliteit niet onderdoet ten opzichte van grote ontwikkelstudio's. Maar we gaan niet zomaar bouwen: we denken eerst mee in wat écht nodig is en wat ook op de lange termijn van belang kan zijn. Zodat software ook een duurzame keuze is." },
      { kop: "Wij maken software eenvoudig en aantrekkelijk", tekst: "Software waarbij een consultant of cursus nodig is voor je ermee kunt werken, is in onze ogen niet goed ontworpen. Ook al zijn processen nog zo complex, wij doen er alles aan om ze eenvoudig, duidelijk en gebruiksvriendelijk te maken. In een ontwerp dat aantrekkelijk oogt. Zodat je met plezier naar je beeldscherm kijkt." },
    ],
  },
  verhalen: {
    aria: "Gemaakt voor een klant",
    eyebrow: "Gemaakt voor een klant",
    lees: "Lees het klantverhaal",
    van: "van",
    vorige: "Vorige klant",
    volgende: "Volgende klant",
    gaNaar: "Ga naar",
    lijst: [
      {
        pagina: "klantverhaal/hadders-media",
        beeld: { src: "/beeld/hadders-media-beheer", breed: 1800, hoog: 1416, alt: "Het beheer van het livestreamplatform van Hadders Media: de livestreams van vandaag met per uitzending de opdrachtgever, de status (terugkijken, live of gepland), de toegangscode en het aantal reacties, en daaronder de komende uitzendingen" },
        mockup: false,
        kop: "Een afscheid volgen, waar je ook bent en welke taal je ook spreekt.",
        tekst: "Hadders Media maakt het mogelijk om op afstand bij een afscheid te zijn en biedt als eerste in Nederland live ondertiteling en nasynchronisatie aan bij uitvaarten. Wij bouwden een eigen platform dat livestreams, vertalingen en condoleances samenbrengt. Eenvoudig te beheren voor Hadders Media en toegankelijk voor familie en vrienden, overal ter wereld.",
        klant: "Hadders Media",
      },
      {
        pagina: "klantverhaal/holy-moly",
        beeld: { src: "/beeld/holy-moly-ipad", breed: 1200, hoog: 1490, alt: "Een iPad, schuin in beeld, met een lopend potje van de Holy Moly!-app: een rij bijbelse personages voor de stadspoort en daaronder de handkaarten van de speler" },
        mockup: true,
        kop: "Een game app voor een kaartspel van bijbelse proporties.",
        tekst: "Holy Moly! is een kaartspel dat medio 2027 verschijnt. Wij bouwden een app voor iOS en Android, waarin je het spel kunt spelen tegen de computer. Strategisch, geestig en een tikkeltje zondig.",
        klant: "Holy Moly!",
      },
      {
        pagina: "klantverhaal/vbgg",
        beeld: { src: "/beeld/vbgg-website", breed: 1800, hoog: 1416, alt: "De homepage van vakantiewekenvbgg.nl: bovenaan de knoppen Meegaan als staflid en Meegaan als gast, daaronder een foto van twee mannen op een duofiets met de tekst Samen uit, samen één" },
        mockup: false,
        kop: "Van papieren administratie naar één portal dat zich aanpast aan elke doelgroep.",
        tekst: "De Vakantieweken van de Vrouwenbond Gereformeerde Gemeenten geven ieder jaar meer dan 600 gasten een week vakantie, met hulp van ruim 450 vrijwilligers en zorgprofessionals. Wij brachten alle aanmeldingen en de administratie eromheen samen in één systeem, gekoppeld aan de website.",
        klant: "Vakantieweken VBGG",
      },
      {
        pagina: "klantverhaal/bc-app",
        beeld: { src: "/beeld/bc-app-iphone", breed: 992, hoog: 1490, alt: "Een iPhone, schuin in beeld, met het welkomstscherm van de BC app: de zegelring als uitgelicht voorwerp en daaronder de categorieën met voorwerpen" },
        mockup: true,
        kop: "Een app die de voorwerpen uit de Bijbel laat spreken.",
        tekst: "Bij het boek De Zin der Dingen van Jaap Bönker en Ruben Hadders bouwden wij voor de Bijbelse Cultuur Stichting een app voor iOS en Android. Met beschrijvingen van meer dan 125 gebruiksvoorwerpen uit de Bijbel en hun symbolische betekenis, om te lezen of te luisteren.",
        klant: "de BC app",
      },
    ] as Verhaal[],
  },
};

// Maatwerk en klantverhalen ontbreken in talen waarin we niet in opdracht bouwen (Duits).
export type HomeTekst = Omit<typeof nl, "maatwerk" | "verhalen"> & Partial<Pick<typeof nl, "maatwerk" | "verhalen">>;
