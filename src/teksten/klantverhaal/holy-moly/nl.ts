// Klantverhaal Holy Moly!, Nederlands. De opmaak staat in
// src/views/klantverhaal/HolyMoly.astro.
import type { Feit } from "../types";

export const nl = {
  kruimelpad: { aria: "Kruimelpad", terug: "Gemaakt voor een klant", hier: "Holy Moly!" },
  eyebrow: "Verhaal · in opdracht gebouwd",
  kop: "Een game app voor een kaartspel van bijbelse proporties",
  lead: "Holy Moly! is een kaartspel dat medio 2027 verschijnt. Wij bouwden een app voor iOS en Android, waarin je het spel kunt spelen tegen de computer. Strategisch, geestig en een tikkeltje zondig.",
  video: {
    aria: "Video van de Holy Moly!-app op een iPad: je kiest een tegenstander, een rij bijbelse personages schuift naar de stadspoort, je speelt actiekaarten om de rij te veranderen en na drie dagen volgt de volkstelling",
    bijschrift: "De app in veertig seconden: kies je tegenstander, manipuleer de rij voor de poort en claim de meest prestigieuze heiligen.",
  },
  spel: {
    kop: "Het spel",
    alineas: [
      "Het is dringen geblazen voor de poorten van het Heilige Land. Een eindeloze rij profeten, krijgers en handelaren staat te trappelen om jouw stad binnen te gaan. Maar pas op: niet iedereen die aanklopt is een zegen!",
      "Manipuleer de rij, verban zondaars naar je buren en claim de meest prestigieuze heiligen. Na drie dagen vindt een volkstelling plaats en wordt duidelijk wie zich de heilige stad mag noemen. De stad met de meeste punten wordt heilig verklaard.",
      "Holy Moly! is een eenvoudig kaartspel vol humor, bedacht door de Bijbelse Cultuur Stichting. De gedrukte versie verschijnt medio 2027.",
    ],
  },
  gebouwd: {
    kop: "Wat we bouwden",
    alineas: [
      "We maakten een game-app voor iOS en Android waarin het hele spel zit: de ruim honderdvijftig geïllustreerde kaarten, de rij voor de stadspoort, de actiekaarten waarmee je die rij naar je hand zet en de volkstelling na drie dagen. De app kent de spelregels en bewaakt ze, zodat je alleen nog hoeft te bedenken wie je binnenlaat en wie je doorschuift naar de buren.",
      "Je speelt tegen de computer en kiest zelf hoe sluw die is: makkelijk, normaal of lastig. Wat je tegenstander doet, zie je op het scherm gebeuren, zodat je kunt volgen waarom die ene heilige net voor je neus wordt weggekaapt. Wie het spel nog niet kent, kiest voor een potje met uitleg en leert de regels al spelend.",
    ],
  },
  noot: "De video toont de eerste demo-versie. De afbeeldingen en het logo wijken af van de uiteindelijke versie.",
  kort: {
    eyebrow: "In het kort",
    feiten: [
      { k: "Opdrachtgever", v: "Ruben Hadders &", v2: "Ronald-Jan de Bruin" },
      { k: "Wat we bouwden", v: "iOS / Android game app" },
      { k: "Status", v: "Eerste demoversie", v2: "Kaartspel verschijnt medio 2027" },
      { k: "Jaar", v: "2026" },
    ] as Feit[],
  },
  kaart: {
    kop: "Ook een idee dat je eerst wilt uitproberen?",
    tekst: "Grote kans dat we het snel kunnen bouwen. Begin met een kennismaking.",
    knop: "Plan een kennismaking",
  },
};

export type HolyMolyTekst = typeof nl;
