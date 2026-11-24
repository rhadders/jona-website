// Klantverhaal Vakantieweken VBGG, Nederlands. De opmaak staat in
// src/views/klantverhaal/Vbgg.astro.
import type { Feit, Onderdeel } from "../types";

export const nl = {
  kruimelpad: { aria: "Kruimelpad", terug: "Gemaakt voor een klant", hier: "Vakantieweken VBGG" },
  eyebrow: "Verhaal · in opdracht gebouwd",
  kop: "Van papieren administratie naar één portal dat zich aanpast aan elke doelgroep",
  lead: "De Vakantieweken van de Vrouwenbond Gereformeerde Gemeenten geven ieder jaar meer dan 600 gasten een week vakantie, met hulp van ruim 450 vrijwilligers en zorgprofessionals. Wij brachten alle aanmeldingen en de administratie eromheen samen in één systeem, gekoppeld aan de website.",
  beeld: {
    alt: "De homepage van vakantiewekenvbgg.nl: bovenaan de knoppen Meegaan als staflid en Meegaan als gast, daaronder een foto van twee mannen op een duofiets met de tekst Samen uit, samen één, en een korte uitleg over de vakantieweken",
    bijschrift: "De website van de Vakantieweken. Via de knoppen bovenaan melden stafleden en gasten zich direct aan in het portal.",
  },
  vraag: {
    kop: "De vraag",
    alineas: [
      "De Commissie Vakantieweken, uitgaande van de Vrouwenbond Gereformeerde Gemeenten, organiseert al sinds 1972 vakantieweken voor mensen met een lichamelijke, verstandelijke of meervoudige beperking, voor jongeren die gedragsbegeleiding nodig hebben en voor ouderen die zorg nodig hebben. Iedere doelgroep heeft eigen wensen en stelt eigen eisen.",
      "Een organisatie van deze omvang vraagt om een strakke administratie. Stafleden en gasten melden zich aan, er zijn veel gegevens nodig, de financiën moeten worden afgehandeld en vrijwilligers hebben onder meer een VOG nodig. Veel van dat werk liep nog op papier. Dat kostte tijd, was foutgevoelig en lastig te overzien, zeker omdat de werkwijze per doelgroep sterk verschilt.",
      "De commissie vroeg ons om alle aanmeldingen en administratieve stromen onder te brengen in één systeem, gekoppeld aan de website, dat recht doet aan de verschillen tussen de doelgroepen.",
    ],
  },
  gebouwd: {
    kop: "Wat we bouwden",
    intro: "We begonnen bij de processen zelf. In gesprekken met de mensen die het werk doen, brachten we de werkwijzen, de uitzonderingen en de verschillen per doelgroep in kaart. Op basis daarvan bouwden we een administratieportal dat past bij hoe de organisatie werkt.",
    onderdelen: [
      { kop: "Digitaal aanmelden, voor staf en gasten", tekst: "Stafleden en gasten melden zich aan via het portal. Alle benodigde gegevens vragen we gestructureerd uit, zodat ze daarna automatisch verwerkt kunnen worden. Papier is niet meer nodig." },
      { kop: "Een systeem dat zich aanpast", tekst: "De processen verschillen sterk per doelgroep. Daarom past het systeem zich aan de situatie aan: iedere doelgroep krijgt de juiste vragen, stappen en afhandeling." },
      { kop: "Workflows die meedenken", tekst: "Het systeem bewaakt zelf wat eerder handmatig bijgehouden moest worden. Het zorgt er bijvoorbeeld voor dat stafleden op tijd een VOG aanvragen." },
      { kop: "Financiële afhandeling in hetzelfde systeem", tekst: "Ook de financiële verwerking verloopt via het portal. Aanmelding, gegevens en betaling komen zo op één plek samen." },
      { kop: "De website gekoppeld aan het portal", tekst: "De openbare website en het portal vormen één geheel. Wie op de website kiest voor meegaan als staflid of gast, komt direct in de juiste aanmelding terecht." },
    ] as Onderdeel[],
    slot: "Tot slot verzorgden we een training, zodat de organisatie zelfstandig en met vertrouwen met het nieuwe systeem aan de slag kon.",
  },
  oplevert: {
    kop: "Wat het oplevert",
    alineas: [
      "Wat eerst grotendeels op papier ging, verloopt nu digitaal en op één plek. De aanmeldingen van vrijwilligers en gasten, hun gegevens, de VOG-aanvragen en de financiële afhandeling komen samen in een systeem dat is afgestemd op de eigen processen van de organisatie.",
      "Dat scheelt handwerk, voorkomt fouten en geeft overzicht. Zo kan de commissie haar energie richten op waar het echt om gaat: de vakantieweken mogelijk maken.",
    ],
  },
  kort: {
    eyebrow: "In het kort",
    feiten: [
      { k: "Organisatie", v: "Commissie Vakantieweken", v2: "Vrouwenbond Gereformeerde Gemeenten" },
      { k: "Sector", v: "Vakantieweken met zorg", v2: "Vrijwilligersorganisatie" },
      { k: "Wat we bouwden", v: "Administratieportal", v2: "Website" },
      { k: "Omvang", v: "Ruim 600 gasten per jaar", v2: "Ruim 450 vrijwilligers en zorgprofessionals" },
      { k: "Website", v: "vakantiewekenvbgg.nl", href: "https://vakantiewekenvbgg.nl" },
    ] as Feit[],
  },
  kaart: {
    kop: "Ook een administratie die eenvoudiger kan?",
    tekst: "Grote kans dat we daarbij kunnen helpen. Begin met een kennismaking.",
    knop: "Plan een kennismaking",
  },
};

export type VbggTekst = typeof nl;
