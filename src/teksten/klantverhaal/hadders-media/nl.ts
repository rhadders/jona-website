// Klantverhaal Hadders Media, Nederlands. De opmaak staat in
// src/views/klantverhaal/HaddersMedia.astro.
import type { Feit } from "../types";

export const nl = {
  kruimelpad: { aria: "Kruimelpad", terug: "Gemaakt voor een klant", hier: "Hadders Media" },
  eyebrow: "Verhaal · in opdracht gebouwd",
  kop: "Een afscheid volgen, waar je ook bent en welke taal je ook spreekt",
  lead: "Hadders Media maakt het mogelijk om op afstand bij een afscheid te zijn en biedt als eerste in Nederland live ondertiteling en nasynchronisatie aan bij uitvaarten. Wij bouwden een eigen platform dat livestreams, vertalingen en condoleances samenbrengt. Eenvoudig te beheren voor Hadders Media en toegankelijk voor familie en vrienden, overal ter wereld.",
  beeld: {
    alt: "Het beheer van het livestreamplatform van Hadders Media: de livestreams van vandaag met per uitzending de opdrachtgever, de status (terugkijken, live of gepland), de toegangscode en het aantal reacties, en daaronder de komende uitzendingen",
    bijschrift: "Het beheer: de uitzendingen van vandaag met hun status, toegangscode en reacties, en daaronder wat er komende dagen gepland staat.",
  },
  vraag: {
    kop: "De vraag",
    alineas: [
      "Een afscheid wil je samen beleven. Ook met familie in het buitenland of vrienden die er door ziekte niet bij kunnen zijn. Hadders Media verzorgt livestreams van uitvaarten door heel Nederland en maakt het mogelijk om op afstand mee te kijken.",
      "Daarbij gaat het om meer dan beeld en geluid. Hoe zorg je dat ook iemand die geen Nederlands spreekt de herinneringen en persoonlijke woorden kan volgen? Hadders Media biedt als eerste in Nederland live ondertiteling en nasynchronisatie aan bij uitvaarten. Zo kunnen mensen het afscheid in hun eigen taal volgen, thuis én op locatie.",
      "Om dit goed te organiseren, waren achter de schermen veel losse handelingen nodig. Hadders Media vroeg ons om één platform te ontwikkelen dat het klaarzetten en beheren van uitzendingen eenvoudiger maakt, met een persoonlijke kijkomgeving voor iedere opdrachtgever.",
    ],
  },
  gebouwd: {
    kop: "Wat we bouwden",
    alineas: [
      "We ontwikkelden een platform waarin Hadders Media alle onderdelen van een livestream bij elkaar heeft. Bij het aanmaken van een uitzending worden de opdrachtgever, het tijdstip en de gewenste mogelijkheden gekozen, zoals ondertiteling, gesproken vertaling en een condoleancemogelijkheid. Het platform zet de benodigde diensten klaar en zorgt dat ze op tijd starten en na afloop stoppen.",
      "Voor familie en vrienden begint het met een link en een toegangscode. Daarmee openen zij de uitzending op een pagina in de huisstijl van de uitvaartondernemer. Ze zien wanneer de dienst begint, kunnen live meekijken en vinden er na afloop de opname. Wie een persoonlijk bericht wil achterlaten, kan via dezelfde pagina condoleren.",
      "Ook aanwezigen op locatie kunnen de vertaling gebruiken. Via een QR-code openen zij de live ondertiteling op hun telefoon, in een taal naar keuze. Desgewenst luisteren ze naar een gesproken vertaling. Nederlandse ondertiteling helpt bovendien dove en slechthorende bezoekers om de woorden tijdens het afscheid te volgen.",
      "De omgeving is ook voorbereid op gebruik door opdrachtgevers zelf, zodat uitvaartondernemers, kerken en uitvaartcentra hun uitzendingen kunnen beheren.",
    ],
  },
  citaat: {
    tekst: "Dankzij één overzichtelijke en intuïtieve app hebben we nu veel meer controle en overzicht, zonder voortdurend tussen verschillende websites en apps te hoeven schakelen.",
    naam: "Otto Hadders",
    rol: "eigenaar Hadders Media",
  },
  oplevert: {
    kop: "Wat het oplevert",
    alineas: [
      "Hadders Media hoeft minder handmatig klaar te zetten en tussen verschillende diensten te schakelen. Uitzendingen, instellingen en condoleances staan overzichtelijk bij elkaar. Dat bespaart werk in de voorbereiding en geeft tijdens de uitvaart meer ruimte voor de zorgvuldige registratie van het afscheid.",
      "Voor familie en vrienden blijft het gebruik eenvoudig: geen app installeren of account aanmaken, maar de link openen en meekijken. Dichtbij of ver weg, in het Nederlands of in een andere taal. Zo helpt het platform Hadders Media om meer mensen te betrekken bij een afscheid dat ze niet willen missen.",
    ],
  },
  kort: {
    eyebrow: "In het kort",
    feiten: [
      { k: "Organisatie", v: "Hadders Media" },
      { k: "Sector", v: "Audiovisuele dienstverlening", v2: "Uitvaart" },
      { k: "Wat we bouwden", v: "Livestream platform" },
      { k: "Jaar", v: "2026" },
      { k: "Website", v: "www.haddersmedia.nl", href: "https://www.haddersmedia.nl" },
    ] as Feit[],
  },
  kaart: {
    kop: "Ook een app die het werken makkelijker maakt?",
    tekst: "Grote kans dat we het snel kunnen bouwen. Begin met een kennismaking.",
    knop: "Plan een kennismaking",
  },
};

export type HaddersMediaTekst = typeof nl;
