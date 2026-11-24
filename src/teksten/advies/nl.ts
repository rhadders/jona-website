// Teksten van de pagina Plan een kennismaking (/nl/advies), Nederlands.
// De opmaak staat in src/views/Advies.astro.

export const nl = {
  eyebrow: "Kennismaken",
  kop: "Een half uur over hoe software jullie werk leuker kan maken",
  lead: "Gratis, zonder verplichtingen, online of bij jullie aan tafel. We luisteren, stellen vragen en zeggen eerlijk wat je beter wel of niet kunt doen met software en AI.",
  stappen: [
    { kop: "Jullie vertellen", tekst: "Hoe het werk nu gaat en waar het knelt. Wat je liever anders zou zien en hoe dat het verschil zou maken." },
    { kop: "Wij kijken mee", tekst: "Wordt er al software gebruikt en is dat wel passend? Wie moeten ermee werken? Wat is er te automatiseren?" },
    { kop: "Jullie beslissen", tekst: "Na het gesprek sturen we een korte samenvatting met een advies. Wat jullie daarmee doen, is aan jullie." },
  ],
  scan: {
    eyebrow: "Wil je verder?",
    kop: "De AI-scan",
    tekst: "Een dag meekijken in jullie organisatie, met als uitkomst een concreet plan: welk werk kan slimmer, wat levert het op en wat kost het.",
    link: "Lees hoe de AI-scan werkt",
  },
  form: {
    kop: "Plan een kennismaking",
    naam: "Je naam",
    rol: "Je rol",
    organisatie: "Organisatie",
    soort: "Soort organisatie",
    email: "E-mailadres",
    emailVoorbeeld: "naam@organisatie.nl",
    telefoon: "Telefoon",
    optioneel: "(niet verplicht)",
    telefoonVoorbeeld: "06 12 34 56 78",
    bericht: "Waar blijft bij jullie werk liggen?",
    berichtVoorbeeld: "Een paar zinnen is genoeg.",
    voorkeur: "Voorkeur",
    /** De waarde gaat mee in de mail aan Jona (max. 40 tekens). */
    vormen: ["Online, via videobellen", "Bij ons op locatie"],
    knop: "Verstuur en plan het gesprek",
    note: "We nemen binnen twee werkdagen contact op en gebruiken je gegevens alleen daarvoor. Liever mailen?",
  },
};

export type AdviesTekst = typeof nl;
