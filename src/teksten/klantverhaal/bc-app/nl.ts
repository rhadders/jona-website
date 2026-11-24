// Klantverhaal BC app (De Zin der Dingen), Nederlands. De opmaak staat in
// src/views/klantverhaal/BcApp.astro.
import type { Feit, Onderdeel } from "../types";

export const nl = {
  kruimelpad: { aria: "Kruimelpad", terug: "Gemaakt voor een klant", hier: "BC app" },
  eyebrow: "Verhaal · in opdracht gebouwd",
  kop: "Een app die de voorwerpen uit de Bijbel laat spreken",
  lead: "De Bijbelse Cultuur Stichting laat mensen kennismaken met de wereld van de Bijbel. Bij het boek De Zin der Dingen van Jaap Bönker en Ruben Hadders bouwden wij een app voor iOS en Android, met beschrijvingen van meer dan 125 gebruiksvoorwerpen uit de Bijbel en hun symbolische betekenis.",
  video: {
    aria: "Video van de BC app op een telefoon: het welkomstscherm met een uitgelicht voorwerp, de pagina van de zegelring met bijbeltekst en hoofdstukken, de leesweergave, het overzicht van de drie categorieën en de achtergrondartikelen",
    bijschrift: "De app in een halve minuut: een uitgelicht voorwerp, het verhaal en de symboliek erachter, en artikelen met verdieping.",
  },
  boek: {
    kop: "Het boek",
    alineas: [
      "De Bijbel is een boek vol beelden. Een zegelring, een olielamp, een kruik of een herdersstaf: alledaagse voorwerpen krijgen er een bijzondere betekenis. Wie weet hoe zo'n voorwerp eruitzag en waarvoor het diende, leest de tekst met andere ogen.",
      "De Bijbelse Cultuur Stichting verzamelde door de jaren heen honderden van zulke voorwerpen en laat ze zien in lezingen en tentoonstellingen. In De Zin der Dingen beschrijven Jaap Bönker en Ruben Hadders er meer dan 125: hoe ze werden gebruikt, wat ze voor Israël betekenden en welke symboliek de Bijbel eraan verbindt.",
      "De stichting vroeg ons om bij het boek een app te maken. Zo heb je de voorwerpen altijd bij de hand, ook als het boek thuis op tafel ligt.",
    ],
  },
  gebouwd: {
    kop: "Wat we bouwden",
    intro: "We maakten een app voor iOS en Android die uitnodigt om er elke dag even in te lezen. Het ontwerp is rustig en licht, met veel ruimte voor de foto's van de voorwerpen en voor de tekst.",
    onderdelen: [
      { kop: "Elke dag iets te ontdekken", tekst: "Het welkomstscherm licht steeds een ander voorwerp uit en onthoudt waar je was gebleven, zodat je met één tik verder leest." },
      { kop: "Drie categorieën, meer dan 125 voorwerpen", tekst: "De voorwerpen zijn ingedeeld zoals in het boek: Leven met Elkaar, Leven met het Land en Leven met God. Per categorie zie je hoeveel je al gelezen hebt." },
      { kop: "Het verhaal en de symboliek erachter", tekst: "Bij elk voorwerp staat de bijbeltekst waarin het voorkomt, met daaronder de beschrijving en het gebruik, het belang voor Israël en de geestelijke betekenis." },
      { kop: "Lezen of luisteren", tekst: "Een rustige leesweergave zonder afleiding, op je eigen tempo. Wie liever luistert, laat de tekst voorlezen." },
      { kop: "Artikelen met verdieping", tekst: "Achtergrondartikelen over het dagelijks leven in bijbelse tijden, van het wonen in een vierkamerhuis tot de feesten van Israël." },
    ] as Onderdeel[],
    slot: "Wie vriend wordt van de stichting, leest alle voorwerpen en alle achtergrondartikelen. Zo draagt de app ook bij aan het werk van de stichting zelf.",
  },
  oplevert: {
    kop: "Wat het oplevert",
    alineas: [
      "De kennis uit het boek en de collectie van de stichting zijn nu overal beschikbaar: thuis, onderweg, bij de bijbelstudie of in de kerkbank. Een voorwerp opzoeken kost een paar tikken en een hoofdstuk lezen een paar minuten.",
      "Voor de Bijbelse Cultuur Stichting is de app een nieuw podium naast de lezingen en tentoonstellingen. Wijsheid van toen, binnen handbereik voor het leven van nu.",
    ],
  },
  kort: {
    eyebrow: "In het kort",
    feiten: [
      { k: "Opdrachtgever", v: "Bijbelse Cultuur Stichting" },
      { k: "Sector", v: "Non-profit" },
      { k: "Wat we opleverden", v: "iOS / Android app" },
      { k: "Jaar", v: "2026" },
      { k: "Website", v: "www.bijbelsecultuur.nl", href: "https://www.bijbelsecultuur.nl" },
    ] as Feit[],
  },
  kaart: {
    kop: "Ook een boek of collectie die een app verdient?",
    tekst: "Grote kans dat we daarbij kunnen helpen. Begin met een kennismaking.",
    knop: "Plan een kennismaking",
  },
};

export type BcAppTekst = typeof nl;
