// Teksten van de pagina Over Jona (/nl/over-jona), Nederlands.
// De opmaak staat in src/views/OverJona.astro.

export interface Teamlid {
  rol: string;
  naam: string;
  beeld: string;
  b: number;
  h: number;
  tekst: string;
  mail: string;
}

export const nl = {
  hero: {
    eyebrow: "Over Jona",
    kop: "Softwareoplossingen die bedrijven en organisaties helpen het goede te doen.",
    lead: "Jona zinvolle technologie, zoals wij voluit heten, is een sociaal bewogen tech-startup uit Veenendaal. We bouwen aan gebruiksvriendelijke software en AI-oplossingen voor kleine bedrijven, stichtingen en verenigingen. Zodat zij kunnen uitblinken in hun werk en het verschil kunnen maken voor anderen.",
  },
  waaromDoen: {
    kop: "Waarom doen we dit?",
    alineas: [
      "Nederland kent heel veel kleine bedrijven, stichtingen, en verenigingen. De meeste daarvan hebben weinig technische kennis in huis om goed te beoordelen welke software nodig en passend is. Zij werken vaak met software die niet goed aansluit bij de organisatie. Te uitgebreid, te complex en meestal ook te duur. Maar ja, maatwerk is onbetaalbaar. Toch?",
      "AI heeft daar verandering in gebracht. Wat vroeger alleen grote organisaties zich konden veroorloven, bouwen wij nu voor een zzp'er of een stichting met slechts drie vrijwilligers en een handjevol donateurs. Want dankzij AI kan software vele malen sneller en goedkoper gebouwd worden. Wij vinden dat juist kleine bedrijven en missiegedreven organisaties daarvan moeten profiteren. Zodat ze beter in staat zijn om te groeien en nog meer het verschil kunnen maken.",
    ],
  },
  wie: {
    eyebrow: "Wie we zijn",
    kop: "Drie ondernemers die niets liever doen dan organisaties helpen vliegen.",
    intro: "We zijn klein en dat heeft zo zijn voordelen. Je spreekt altijd iemand die de software kent en jullie organisatie begrijpt. Persoonlijk contact maakt het werk beter en leuker. Met de hulp van AI verzetten we ondertussen in één dag net zoveel werk als eerder in een hele maand.",
    /** Gevolgd door de naam: "Getekend portret van Ruben Hadders". */
    portret: "Getekend portret van",
    team: [
      { rol: "Voor kansrijke ideeën", naam: "Ruben Hadders", beeld: "team-ruben-hadders", b: 900, h: 816, tekst: "Helpt al meer dan twintig jaar non-profits aan ideeën om te groeien op het gebied van marketing, communicatie en ict.", mail: "ruben@jonacommunicatie.nl" },
      { rol: "Voor een scherp oog", naam: "Gijsbert Legemaat", beeld: "team-gijsbert-legemaat", b: 900, h: 787, tekst: "Bouwt aan apps en digitale ondernemingen. Nuchter, maar met een scherp oog voor gebruiksgemak en design.", mail: "gijsbert@echonova.nl" },
      { rol: "Voor betrouwbare techniek", naam: "Jelle Pals", beeld: "team-jelle-pals", b: 900, h: 928, tekst: "Programmeur in hart en nieren. Analyseert bedrijfsprocessen en weet dit om te zetten naar betrouwbare automatiseringen.", mail: "jelle@echonova.nl" },
    ] as Teamlid[],
    bellen: "Bel ons rechtstreeks, op werkdagen van 9-17 uur:",
    telefoon: "033 - 230 17 37",
  },
  waaromJona: {
    eyebrow: "Waarom Jona",
    kop: "Waarom wij een duif als beeldmerk hebben.",
    alineas: [
      "Jona is Hebreeuws voor duif. In het verhaal van Noach is de duif de vogel die na de zondvloed terugkeert met een olijftak in haar snavel: er is vruchtbaar land gevonden, er is weer toekomst. Sindsdien is de duif het symbool voor vrede en hoop.",
      "Dat gunnen we elke organisatie: nieuwe grond vinden. Werk dat lichter wordt, tijd die terugkomt voor de mensen om wie het gaat, en technologie die rustig haar werk doet in plaats van aandacht op te eisen.",
      "Jona is ook de naam van een profeet die een belangrijke boodschap moest brengen aan mensen die hij niet kende. Dat verhaal gaat over communicatie en verbinding maken. Precies waar missiegedreven organisaties zich elke dag voor inzetten.",
      "In het Nabije Oosten is de witte duif ook een beeld van schoonheid. Dat past goed bij onze doelstelling om niet alleen zinvolle maar ook mooie software te maken, die aantrekkelijk is om te gebruiken.",
    ],
    /** Cursief, als laatste regel. */
    slot: "It's all in the name.",
    duifAlt: "Het beeldmerk van Jona: een witte duif",
  },
};

export type OverJonaTekst = typeof nl;
