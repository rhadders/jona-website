// Teksten van de pagina TirgumAI (/nl/tirgumai), Nederlands.
// De opmaak staat in src/views/TirgumAI.astro.
// Velden met HTML erin (een &nbsp;, een <br>) zijn met `Html` gemarkeerd.

/** Pictogrammen uit src/components/Icon.astro die deze pagina gebruikt. */
export type Pictogram = "book-open" | "bars" | "sparkles" | "circle-check" | "users" | "upload" | "clock" | "euro" | "shield-check";
export interface Stap { icon: Pictogram; label: string; ai: boolean }
export interface Groep { kop: string; ai: boolean; punten: string[] }
export interface Voordeel { icon: Pictogram; kop: string; tekst: string }
export interface Template { naam: string; beeld: string; b: number; h: number; tekst: string; alt: string }
export interface Kop { kop: string; tekst: string }
export interface Feature { eyebrow: string; kop: string; tekst: string; alt: string; onderschrift: string }
export interface Download { href: string; label: string; hreflang?: string }
export interface Vraag { v: string; a: string }

export const nl = {
  kruimelpad: "Kruimelpad",
  software: "Onze software",
  hero: {
    tag: "Beta · voor bijbelvertalers, theologen en uitgevers",
    kop: "TirgumAI: vers voor vers de Bijbel vertalen, met hulp van AI",
    leadHtml: "Vertaal vanuit de Hebreeuwse en Griekse grondtekst, alleen of met een team, met behulp van AI. Verrijk de vertaling met&nbsp;voetnoten, afbeeldingen en commentaren. Publiceer vervolgens je eigen studiebijbel, online of als drukklare pdf, direct vanuit de software.",
    knopHoogte: "Houd me op de hoogte",
    knopLeessite: "Bekijk een voorbeeld van de leessite",
  },
  vergelijk: {
    alt: "De werkplek van TirgumAI bij Genesis 1:8 in de lichte modus: vertaling en Hebreeuwse grondtekst in het midden, woordpaneel rechts",
    licht: "Licht",
    donker: "Donker",
    schuif: "Schuif tussen de lichte en de donkere modus",
  },
  functies: {
    eyebrow: "Wat TirgumAI uniek maakt",
    kopHtml: 'Vertrouwd vertaalgereedschap, <br class="br-breed">gecombineerd met baanbrekende technologie',
    strook: "De zes stappen van het vertaalwerk",
    aiLabel: "Met AI-ondersteuning",
    // De zes stappen van het vertaalwerk; de middelste drie krijgen AI-ondersteuning.
    stappen: [
      { icon: "book-open", label: "Lezen", ai: false },
      { icon: "bars", label: "Begrijpen", ai: true },
      { icon: "sparkles", label: "Vertalen", ai: true },
      { icon: "circle-check", label: "Controleren", ai: true },
      { icon: "users", label: "Samenwerken", ai: false },
      { icon: "upload", label: "Publiceren", ai: false },
    ] as Stap[],
    groepen: [
      { kop: "De grondtekst lezen", ai: false, punten: [
        "Hebreeuws, Aramees en Grieks woord voor woord, met lemma, vorm, Strong's, transliteratie en uitspraak",
        "Zinsbouw en de betekenis van een woord in één oogopslag",
        "Vergelijkingsteksten (o.a. Nestle 1904, Tischendorf en Westcott-Hort)",
        "Concordantie op Strong's, lemma of grammaticale vorm, in de hele Bijbel of in één passage",
      ] },
      { kop: "De achtergrond begrijpen", ai: true, punten: [
        "Woordenboeken (o.a. Brown-Driver-Briggs, Abbott-Smith en Strong's)",
        "Tekstvarianten met toelichting bij 4.515 plaatsen in het Oude Testament",
        "Parallelle passages naast elkaar weergeven",
        "Personen, plaatsen en namen toegelicht",
        "Handboeken, commentaren en studienotities",
      ] },
      { kop: "Vertalen met hulp van AI", ai: true, punten: [
        "Richtlijnen voor stijl, register, godsnamen, aanspreekvorm, poëzie en eerbiedshoofdletters",
        "Een AI-vertaling per vers of de hele Bijbel in één keer",
        "Een projectglossarium met voorkomens en afwijkingen zichtbaar gemaakt",
        "Een AI-assistent die je helpt de grondtekst te begrijpen en weloverwogen vertaalkeuzes te maken",
        "Een AI-controle van jouw vertaling tegen de grondtekst",
      ] },
      { kop: "Controleren op consistentie", ai: true, punten: [
        "Consistentie in twee richtingen: één grondwoord met meer vertalingen, één doelwoord voor meer grondwoorden",
        "Taalfouten in de doeltaal: spaties, leestekens, open aanhalingstekens en de spelling van eigennamen",
      ] },
      { kop: "Vertalen in teamverband", ai: false, punten: [
        "Ondersteuning voor meerdere projecten",
        "Overleg met teamleden over de beste vertaling",
        "Volledige geschiedenis per vers en een logboek per project",
        "Vier gebruikersrollen: meelezer, vertaler, reviewer en manager",
      ] },
      { kop: "Publiceren", ai: false, punten: [
        "Complete Bijbels en studiebijbels automatisch gezet met kant-en-klare templates, drukklaar met afloop en snijtekens",
        "Je eigen online studiebijbel, met een leesstand en een studiestand",
        "Export naar Word, PDF, EPUB, USFM 3.1, USX en USJ",
        "PTXprint-pakket voor typesetting",
      ] },
    ] as Groep[],
  },
  vertaler: {
    eyebrow: "Voor de vertaler",
    kop: "Elk woord uitgelegd, op de plek waar je werkt",
    tekst: "Onder elk vers staat de grondtekst woord voor woord, met transliteratie, betekenis en Strong's-nummer. Klik op een woord en het paneel toont de grammatica, de herkomst, hoe je het eerder vertaalde en wat het glossarium voorschrijft. Geen woordenboeken ernaast, geen tabbladen.",
    alt: "De interlineaire strook van Genesis 1:8: tien Hebreeuwse woorden met transliteratie, Nederlandse betekenis en Strong's-nummer, het woord voor gewelf geselecteerd",
    onderschrift: "De grondtekst per woord onder Genesis 1:8.",
  } as Feature,
  lezer: {
    eyebrow: "Voor de lezer",
    kop: "Van werkvertaling naar studiebijbel, zonder extra werk",
    tekst: "Wat het team in de werkplek vastlegt, zoals voetnoten, verwijzingen, inleidingen, studienoten en afbeeldingen, staat op de leessite meteen op zijn plek. De lezer kiest zelf: alleen de tekst, of alles erbij. Bronnen en licenties staan netjes op één pagina.",
    alt: "De leessite van een vertaalproject op Genesis 1: boekinleiding, sectiekoppen, voetnoten, verwijzingen in de kantlijn en een studiepaneel",
    onderschrift: "De leessite in de studiemodus: inleiding, verwijzingen, voetnoten, grondtekst.",
  } as Feature,
  team: {
    eyebrow: "Voor het team",
    kop: "Consequent vertalen, ook met tien mensen",
    tekst: "De consistentiecontrole vindt de plekken waar één Nederlands woord voor twee grondwoorden staat, of waar hetzelfde grondwoord verschillend is vertaald. Per knelpunt zie je de verzen, spring je naar de kaart, of markeer je het bewust zo. Rollen voor vertaler, reviewer en beheerder houden het werk op orde.",
    alt: "De consistentiecontrole, tabblad Begrippen: vier Nederlandse woorden die voor meer dan één grondwoord staan, met de verzen per grondwoord",
    onderschrift: "Consistentie › Begrip 'licht' in Genesis 1.",
  } as Feature,
  drukwerk: {
    eyebrow: "Van vertaling tot gedrukte Bijbel",
    kop: "Drukklaar gezet, zonder maanden opmaakwerk",
    tekst: "Dezelfde software zet ook complete Bijbels en studiebijbels. Koppen, hoofdstuk- en versnummers, voetnoten en kruisverwijzingen, kolommen in balans, afloop en snijtekens: de hele tekst in één keer. Drukwerkpartner Drukcase, specialist in Bijbels, gebruikt TirgumAI al voor het zetten. Een compleet Bulgaars Nieuw Testament is ermee gemaakt en andere uitgaven zijn in voorbereiding.",
    voordelen: [
      { icon: "clock", kop: "Minder tijd", tekst: "Een Bijbel telt al snel meer dan duizend pagina's. De software zet de hele tekst in één keer en doet automatisch voorstellen bij problemen." },
      { icon: "euro", kop: "Lagere kosten", tekst: "Ook een kleine oplage of een eerste uitgave wordt haalbaar. Uitgevers zonder ervaring profiteren van kant-en-klare templates." },
      { icon: "shield-check", kop: "Geen frustratie", tekst: "Geen verspringende verzen of losgeraakte voetnoten. Elke proef wordt op dezelfde manier gezet: wat goed was, blijft goed." },
    ] as Voordeel[],
    studiebijbel: {
      alt: "Een spread uit Genesis 1 tot 3 in de studiebijbel-template: twee kolommen bijbeltekst met tekstnoten en studienoten onderaan elke pagina",
      eyebrow: "Template",
      kop: "Studiebijbel",
      tekst: "Twee kolommen, met tekstnoten en studienoten onderaan elke pagina. De software zet automatisch:",
      punten: [
        "koppen, hoofdstuk- en versnummers",
        "voetnoten en kruisverwijzingen",
        "studienoten bij het juiste vers",
        "kolommen in balans, met afbreking",
        "afloop en snijtekens voor de drukker",
      ],
    },
    templates: [
      { naam: "Kerkbijbel", beeld: "tirgumai-template-kerkbijbel", b: 1200, h: 1760, tekst: "Twee kolommen, kruisverwijzingen en duimgrepen in de marge.", alt: "Een pagina uit Johannes 1 in de kerkbijbel-template: twee kolommen, voetnoten en verwijzingen onderaan, duimgreep in de marge" },
      { naam: "Notitiebijbel", beeld: "tirgumai-template-notitiebijbel", b: 1200, h: 1800, tekst: "Eén kolom, versnummers in de kantlijn en notitieregels.", alt: "Een pagina uit Romeinen 1 in de notitiebijbel-template: één kolom met versnummers in de kantlijn en lege notitieregels ernaast" },
      { naam: "Eigen ontwerp", beeld: "tirgumai-template-eigen-ontwerp", b: 1200, h: 1800, tekst: "Naar de voorbeeldpagina van een klant: eigen formaat, letter, kop en notenlijst.", alt: "Een pagina uit Mattheüs 1 in een eigen ontwerp: één brede kolom met een eigen letter en voetnoten onderaan" },
    ] as Template[],
    alleLabel: "Alle templates:",
    alleTemplates: ["Leesbijbel", "Handbijbel", "Grote letter", "Kerkbijbel", "Kinderbijbel", "Studiebijbel", "Predikantenbijbel", "Toepassingsbijbel", "Notitiebijbel"],
    stappen: [
      { kop: "Lever je tekst aan", tekst: "Uit Paratext, als USFM of USX, of als Scripture Burrito." },
      { kop: "Kies de opmaak", tekst: "Een kant-en-klaar template of een ontwerp op maat." },
      { kop: "Bekijk de proef", tekst: "Download als pdf, inclusief detectie van opmaakproblemen." },
      { kop: "Drukcase drukt", tekst: "Het drukbestand gaat naar de pers, Drukcase verzorgt de rest." },
    ] as Kop[],
    sheet: {
      eyebrow: "Informatiesheet",
      tekst: "Alles over drukken met TirgumAI en Drukcase op twee pagina's, om door te sturen binnen je organisatie.",
      downloads: [
        { href: "/downloads/tirgumai-informatiesheet-drukcase.pdf", label: "Nederlands (pdf)" },
        { href: "/downloads/tirgumai-information-sheet-drukcase-en.pdf", label: "English (pdf)", hreflang: "en" },
      ] as Download[],
    },
  },
  hoogte: {
    eyebrow: "Op de hoogte blijven",
    kop: "Als eerste horen wanneer TirgumAI beschikbaar komt?",
    lead: "TirgumAI is in ontwikkeling en wordt op dit moment getest met een kleine groep vertalers. Laat je e-mailadres achter en we mailen je bij de belangrijke stappen: nieuwe functies, de start van de open beta en de lancering. Niet vaker dan nodig, en afmelden kan altijd.",
    punten: [
      "Nieuws over nieuwe functies",
      "Een uitnodiging voor de open beta",
      "Bericht bij de lancering",
    ],
    email: "E-mailadres",
    knop: "Houd me op de hoogte",
    note: "We gebruiken je adres alleen voor nieuws over TirgumAI. Liever mailen?",
  },
  faq: {
    kop: "Veelgestelde vragen",
    lijst: [
      { v: "Schrijft de AI de vertaling?", a: "Dat is mogelijk, als je dat wilt. Met TirgumAI kun je de Hebreeuwse en Griekse grondteksten met één druk op de knop laten vertalen in tientallen doeltalen, op basis van jouw eigen vertaalrichtlijnen. Maar je kunt de ingebouwde AI ook gebruiken als ondersteuning bij het vertalen of om jouw eigen vertaling te controleren." },
      { v: "Welke grondteksten gebruikt TirgumAI?", a: "Open edities van het Hebreeuwse Oude Testament en het Griekse Nieuwe Testament, met Strong's-nummers en grammaticale informatie. Daarnaast vergelijkingsteksten zoals Nestle 1904, Tischendorf en Westcott-Hort, en woordenboeken als Brown-Driver-Briggs, Abbott-Smith en Strong's." },
      { v: "Kunnen we met een team werken?", a: "Ja, een vertaalproject heeft vaak behalve vertalers ook meelezers, reviewers en projectleiders. Zij hebben elk eigen rechten in de software. TirgumAI is echter ook heel goed individueel te gebruiken." },
      { v: "Hoe komt de vertaling bij de lezer?", a: "Je kunt de vertaling als online bijbel publiceren, in een mooi vormgegeven leesomgeving die geschikt is voor mobiel en desktop." },
      { v: "We hebben al een vertaling. In welk formaat leveren we die aan?", a: "Rechtstreeks uit Paratext, als USFM of USX, of als Scripture Burrito. Je hoeft dus niet in TirgumAI te vertalen om de software voor het zetten te gebruiken." },
      { v: "Kunnen we onze Bijbel ook laten drukken?", a: "Ja. TirgumAI zet de complete tekst drukklaar, met afloop en snijtekens, in een kant-en-klaar template of een eigen ontwerp." },
    ] as Vraag[],
  },
};

export type TirgumAITekst = typeof nl;
