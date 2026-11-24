// Teksten van de pagina De AI-scan, Nederlands. De opmaak staat in
// src/views/AiScan.astro. Velden met HTML erin zijn met `Html` gemarkeerd.
// De prijs staat als getal in src/lib/paginas.ts en wordt met bedrag()
// in de schrijfwijze van de taal gezet.

export const nl = {
  top: {
    eyebrow: "De AI-scan",
    kop: "Eén dag meekijken, één plan waar je mee verder kunt",
    lead: "Het kennismakingsgesprek geeft een eerste indruk. De AI-scan gaat een laag dieper: we lopen een dag mee in jullie organisatie, kijken wat er aan werk ligt en welke software er al is, en vertalen dat naar een plan dat jullie zelf kunnen beoordelen. Geen dik rapport, wel een eerlijk antwoord op de vraag wat slimmer kan, wat het oplevert en wat het kost.",
    stappen: [
      { kop: "Ochtend: meekijken", tekst: "We zitten naast de mensen die het werk doen. Ledenadministratie, communicatie, financiën, planning: waar gaat tijd in zitten, en waar loopt het vast?" },
      { kop: "Middag: in kaart brengen", tekst: "Samen zetten we op een rij welk werk zich leent voor software of AI, welk werk beter bij mensen blijft, en wat daarvoor nodig is. Ook als het antwoord is: niets van ons." },
      { kop: "Binnen een week: het plan", tekst: "Jullie krijgen een plan van een paar pagina's, in gewone taal: de drie tot vijf dingen die het meeste opleveren, wat ze kosten, en in welke volgorde je ze het beste aanpakt." },
    ],
  },
  aanbod: {
    kop: "Wat je krijgt",
    punten: [
      "Een dag op locatie met één van ons, bij voorkeur op een gewone werkdag.",
      "Een overzicht van het werk dat slimmer kan, met per onderdeel wat het oplevert.",
      "Een advies per onderdeel: een van onze producten, iets van een ander, maatwerk met EchoNova, of gewoon laten zoals het is.",
      "Een kostenindicatie en een volgorde, zodat je klein kunt beginnen.",
      "Een gesprek om het plan door te nemen, met wie er bij jullie over beslist.",
    ],
    vastePrijs: "Vaste prijs",
    exclusief: "excl. btw en reiskosten",
    knop: "Vraag de AI-scan aan",
    contact: "We nemen binnen twee werkdagen contact op om een dag te prikken.",
    /** De link "Plan een kennismaking" komt erachter, dan een punt. */
    hint: "Nog geen kennismakingsgesprek gehad? Dat blijft de beste eerste stap. In een half uur weet je of een scan voor jullie zin heeft.",
    hintLink: "Plan een kennismaking",
  },
  voorWie: {
    eyebrow: "Voor wie",
    kop: "Voor organisaties die vermoeden dat het slimmer kan, maar niet weten waar te beginnen",
    kaarten: [
      { kop: "Het werk stapelt zich op", tekst: "Dezelfde lijstjes op drie plekken, elke maand opnieuw overtypen, en niemand die precies weet welke versie klopt." },
      { kop: "Er is al software, maar het wringt", tekst: "Een pakket dat te groot is voor wat jullie doen, of te klein, en waar maar één iemand echt mee overweg kan." },
      { kop: "Iedereen praat over AI", tekst: "Jullie willen weten wat het voor jullie betekent, zonder er een project van een jaar van te maken." },
    ],
  },
  aanvraag: {
    eyebrow: "Aanvragen",
    kop: "Vraag de AI-scan aan",
    intro: "Vul het formulier in, dan nemen we contact op om een dag te prikken en af te stemmen wie er bij jullie bij moeten zijn. Je zit nog nergens aan vast; de scan gaat pas door als we samen de dag hebben vastgelegd.",
  },
  form: {
    naam: "Je naam",
    rol: "Je rol",
    rolVoorbeeld: "Bijvoorbeeld: directeur, scriba",
    organisatie: "Organisatie",
    organisatieVoorbeeld: "Bijvoorbeeld: Stichting De Groene Weide",
    soort: "Soort organisatie",
    mensen: "Hoeveel mensen werken er (betaald en vrijwillig)?",
    mensenOpties: ["1 tot 5", "5 tot 20", "20 tot 50", "Meer dan 50"],
    email: "E-mailadres",
    emailVoorbeeld: "naam@organisatie.nl",
    telefoon: "Telefoon",
    nietVerplicht: "(niet verplicht)",
    telefoonVoorbeeld: "06 12 34 56 78",
    bericht: "Waar wil je vooral naar laten kijken?",
    berichtVoorbeeld: "Bijvoorbeeld: de ledenadministratie en de nieuwsbrief.",
    knop: "Vraag de AI-scan aan",
    noot: "We nemen binnen twee werkdagen contact op en gebruiken je gegevens alleen daarvoor. Liever mailen?",
  },
};

export type AiScanTekst = typeof nl;
