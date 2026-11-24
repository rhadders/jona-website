// Teksten van de pagina Selaread, Nederlands. De opmaak staat in
// src/views/Selaread.astro.

/** Pictogrammen uit src/components/Icon.astro die deze pagina gebruikt. */
export type Pictogram = "newspaper" | "smartphone" | "search" | "trending-up" | "key" | "sparkles" | "chart" | "ticket" | "layers";

export interface Kaart {
  icon: Pictogram;
  titel: string;
  tekst: string;
}

export const nl = {
  kruimelpad: "Kruimelpad",
  kruimelSoftware: "Onze software",
  hero: {
    tag: "Lancering voorjaar 2027",
    /** Achter "Selaread: " in de kop. */
    kop: "de leeskiosk voor christelijk Nederland",
    lead: "Eén abonnement, alle christelijke tijdschriften, op mobiel, tablet en desktop. Voor lezers een moderne kioskapp. Voor uitgevers een nieuw kanaal voor meer bereik en inkomsten, zonder te hoeven investeren in techniek, marketing en support.",
    knopBeta: "Meld je aan voor de beta-test",
    knopUitgevers: "Informatie voor uitgevers",
    alt: "Selaread op een tablet en een telefoon: op de tablet een artikel uit een tijdschrift in de lezer, op de telefoon de startpagina met recent toegevoegde magazines",
  },
  lezers: {
    eyebrow: "Voor lezers",
    kop: "Alle christelijke tijdschriften in één app",
    lead: "Van opinie en Bijbelstudie tot kerkbladen en kinderbladen: lees onbeperkt, in een leesomgeving die klopt op elk scherm.",
    kaarten: [
      { icon: "newspaper", titel: "Eén abonnement, alle titels", tekst: "Blader door tientallen christelijke tijdschriften en lees wat je wilt. Met een maandabonnement lees je steeds de nieuwste editie van elk magazine, met een jaarabonnement ook het volledige archief." },
      { icon: "smartphone", titel: "Op elk apparaat, ook offline", tekst: "Selaread is er als app voor iPhone en Android en als webapp voor tablet en desktop. Download een editie en lees verder in de trein, zonder internet." },
      { icon: "search", titel: "Ontdekken, volgen, verder lezen", tekst: "Ontdek titels per rubriek, volg je favoriete magazines en ga verder waar je gebleven was. Je bibliotheek reist met je mee, van telefoon naar tablet." },
    ] as Kaart[],
    alt: "De pagina Ontdek in Selaread: een zoekveld, rubrieken als Israël, Kerkbladen en Kinderen, en een overzicht van magazines met hun omslagen",
  },
  uitgevers: {
    eyebrow: "Voor uitgevers",
    kop: "Een nieuw kanaal voor je tijdschrift, zonder eigen app",
    lead: "Selaread brengt christelijke tijdschriften samen in één abonnement. Voor uitgevers betekent dit een nieuw kanaal om meer bereik en inkomsten te creëren, zonder te hoeven investeren in techniek, marketing en support.",
    kaarten: [
      { icon: "smartphone", titel: "Geen eigen app nodig", tekst: "Een eigen iOS- en Android-app bouwen en onderhouden kost al snel duizenden euro's, naast alle tijd en technische kennis die nodig is voor het beheren van app stores, het updaten van de app en het helpen van lezers bij inlogproblemen. Selaread neemt dit volledig uit handen. Jij levert de pdf's aan, wij zorgen voor de digitale ontsluiting. In een optimale leesomgeving op desktop, tablet en smartphone." },
      { icon: "trending-up", titel: "Vergroot je inkomsten", tekst: "Door jouw tijdschrift aan te bieden in de Selaread-app vergroot je het bereik van je magazine, zonder ook maar een cent te hoeven investeren in distributie en marketing. Dat heeft een positief effect op de naamsbekendheid van je blad, op de advertentieverkoop en op je verdienmodel. Want voor het eerst verdien je hierdoor ook aan lezers die wel interesse hebben in jouw blad, maar (nog) geen printabonnement willen." },
    ] as Kaart[],
    bandCijfer: "70%",
    bandSub: "van de omzet is voor de uitgever",
    bandKop: "Uitgevers ontvangen maar liefst 70% van de omzet",
    bandTekst: "Dit is de hoogste vergoeding in de markt. Voor ons is dit belangrijk, omdat we willen investeren in de toekomst van christelijke media. Ook digitaal lezen moet een duurzame bron van inkomsten kunnen zijn voor uitgevers.",
    zoKop: "Zo werkt het",
    stappen: [
      { titel: "Meld je aan als uitgever", tekst: "Je maakt een gratis account aan in het uitgeversportaal. Na onze goedkeuring kun je publiceren." },
      { titel: "Upload je pdf's", tekst: "Elke editie lever je aan als pdf. Wij maken er een editie van die prettig leest op elk scherm." },
      { titel: "Lezers vinden je titel", tekst: "Je magazine staat in de kiosk, per rubriek vindbaar. Lezers volgen je titel en krijgen bericht bij een nieuw nummer." },
      { titel: "Jij ontvangt je deel", tekst: "Je volgt in het portaal hoeveel lezers je edities hebben en ontvangt 70% van de omzet, naar rato van wat er van jouw titels gelezen wordt." },
    ],
  },
  pro: {
    eyebrow: "Selaread Pro",
    kop: "Bereik meer met Selaread Pro",
    lead: "Voor uitgevers die alle mogelijkheden willen benutten en hun abonnees de optimale leeservaring willen bieden, is er Selaread Pro: vijf extra's bovenop het gratis basisaccount.",
    alt: "Het uitgeversportaal van Selaread op een laptop: het overzicht Edities met per editie het magazine, de datum, de status en het aantal unieke lezers",
    /** "Pro-functie 1 van 5": het nummer en het totaal komen ertussen. */
    teller: "Pro-functie",
    van: "van",
    vorige: "Vorige functie",
    volgende: "Volgende functie",
    /** aria-label van een bolletje: "Functie 1: Abonneetoegang beheren". */
    functie: "Functie",
    functies: [
      { icon: "key", titel: "Abonneetoegang beheren", tekst: "Geef je bestaande (print)abonnees toegang tot de digitale editie, zonder dat zij een Selaread-abonnement nodig hebben. Zo krijgt het reguliere abonnement meer waarde." },
      { icon: "sparkles", titel: "AI-tekstredactie", tekst: "Geavanceerde tekstherkenning op je geüploade edities, zodat artikelen doorzoekbaar zijn en prettig lezen op een klein scherm." },
      { icon: "chart", titel: "Gedetailleerde inzichten", tekst: "Zie per editie en per artikel hoe er gelezen wordt, en wat je lezers boeit. Zo weet je wat werkt, ook voor je advertentieverkoop." },
      { icon: "ticket", titel: "Vouchercampagnes", tekst: "Maak toegangscodes voor partners, acties of proefabonnementen en volg wat ze opleveren." },
      { icon: "layers", titel: "Uitgebreid archief", tekst: "Bied een onbeperkt aantal oude jaargangen aan. Oude edities blijken goed voor 20% meer omzet." },
    ] as Kaart[],
    prijsNaam: "Selaread Pro",
    prijsBedrag: "€ 25",
    prijsPer: "per maand",
    prijsNoot: "Een basisaccount is en blijft gratis.",
    knop: "Meld je aan als uitgever",
  },
  faqKop: "Veelgestelde vragen",
  faq: [
    { v: "Is er wel genoeg animo voor digitaal lezen?", a: "Nederland telt 9 miljoen lezers van gedrukte tijdschriften en daarnaast 8 miljoen digitale lezers. In totaal zijn er circa 1.100 titels digitaal beschikbaar. De markt voor digitale tijdschriften is dus groot en groeit nog altijd." },
    { v: "Waarom is Selaread beter dan een eigen app?", a: "Een magazine zelfstandig distribueren en vermarkten is duur en voor de meeste uitgevers niet rendabel. Met Selaread hoef je hier niet in te investeren en is het ook voor kleinere uitgevers mogelijk om geld te verdienen met hun uitgaven. Daarbij blijken lezers een sterke voorkeur te hebben voor één leesapp, in plaats van allerlei verschillende apps te moeten gebruiken." },
    { v: "Levert het uitgevers wel voldoende op?", a: "Uit cijfers van Britse uitgevers blijkt dat zij al meer dan de helft van hun inkomsten halen uit all-you-can-read-apps. De groei zit juist in digitaal lezen. Daarbij heeft een groter bereik ook een positief effect op de advertentieverkoop." },
    { v: "Verliezen uitgevers geen abonnees hierdoor?", a: "Soortgelijke apps als Readly hebben bewezen dat uitgevers juist lezers terugwinnen die zij eerder verloren waren. Ook zijn er veel lezers die wel interesse hebben in een bepaalde titel, maar (nog) te weinig om abonnee te worden. Met Selaread kunnen uitgevers tóch aan hen verdienen. Daarnaast kun je met Selaread Pro je bestaande abonnees toegang geven tot de digitale editie, zonder dat zij een abonnement bij Selaread hoeven te hebben. Zo krijgt het reguliere abonnement meer waarde en zijn abonnees minder snel geneigd op te zeggen." },
    { v: "Wat kost Selaread voor uitgevers?", a: "Een basisaccount is gratis: je betaalt niets om je titel in de kiosk te zetten en deelt mee in de omzet. Wil je meer, dan is er Selaread Pro voor € 25 per maand. Voor kerken zijn de basisfuncties altijd gratis. Voor goede doelen en andere non-profits geldt een apart tarief, dat bespreken we graag persoonlijk." },
    { v: "Wanneer kan ik Selaread gebruiken?", a: "De lancering staat gepland voor het voorjaar van 2027. Tot die tijd testen we de app met een groep lezers en uitgevers. Meld je hieronder aan, dan nodigen we je uit zodra de beta-test start." },
  ],
  beta: {
    eyebrow: "Beta-test",
    kop: "Als eerste lezen, of als eerste uitgever aan boord?",
    lead: "Voor de lancering in het voorjaar van 2027 testen we Selaread met een groep lezers en uitgevers. Meld je aan en we nodigen je uit zodra de beta-test start.",
    punten: [
      "Lezers: gratis toegang tijdens de beta-test",
      "Uitgevers: persoonlijke begeleiding bij het aanleveren",
      "Jouw feedback bepaalt mee wat we bouwen",
    ],
  },
  form: {
    rol: "Ik meld me aan als",
    rolOpties: ["Lezer", "Uitgever", "Kerk of organisatie"],
    naam: "Je naam",
    email: "E-mailadres",
    organisatie: "Uitgeverij, tijdschrift of organisatie",
    optioneel: "(optioneel)",
    knop: "Meld me aan",
    /** Het e-mailadres komt erachter, dan een punt. */
    noot: "Liever mailen? Uitgevers kunnen ook direct contact opnemen via",
  },
};

export type SelareadTekst = typeof nl;
