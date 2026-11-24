// Software-Übersicht, Deutsch (mit "du"). Gleiche Struktur wie nl.ts.
// ActueleGegevens.nl gibt es nur auf Niederländisch; es fehlt hier, und die
// View filtert zusätzlich nach `beschikbaar`.
import type { App, SoftwareTekst } from "./nl";

export const de: SoftwareTekst = {
  kop: {
    eyebrow: "Unsere Software",
    titel: "Alle Apps, die wir selbst entwickeln, an einem Ort",
    lead: "Von Spendenverwaltung und Vorstandssitzungen bis zur Bibelübersetzung: Software für Organisationen mit einer Mission. Manche Apps kannst du schon heute nutzen, andere sind noch in Arbeit. Schau dich gern um.",
  },
  nuKop: "Jetzt nutzbar",
  binnenkortKop: "Demnächst",
  meerOver: "Mehr über",
  nu: [
    {
      id: "jonagiften",
      naam: "Jona Spenden",
      tag: "Jetzt verfügbar",
      voor: "Kleine Stiftungen und Vereine mit ihrem Kassenwart",
      tekst: "Die Spendenverwaltung für kleine Stiftungen und Vereine. Behalte Spender, Spenden und Lastschriftmandate an einem Ort im Blick, lass Menschen online für einzelne Projekte spenden und verschicke alle Jahresübersichten mit einem Klick. So einfach, dass jeder Kassenwart damit zurechtkommt.",
      beeld: "/beeld/jonagiften-jaar",
      breed: 1600,
      hoog: 1000,
      alt: "Die Jahresübersicht in Jona Spenden: was in diesem Jahr eingegangen ist, Monat für Monat, und alle Spenden aus dem November",
      actie: "14 Tage kostenlos testen",
      doel: "https://spenden.jonatools.com/taal/de?terug=/aanmelden",
    },
    {
      id: "jonabestuur",
      naam: "Jona Vorstand",
      tag: "Jetzt verfügbar",
      voor: "Kleine Vorstände mit ihrem Schriftführer",
      tekst: "Tagesordnung, Protokolle und Beschlüsse für kleine Vorstände. Geht Punkt für Punkt durch eure Sitzung: Was wurde besprochen, was wurde beschlossen und wer macht was. Nach dem letzten Tagesordnungspunkt steht der Protokollentwurf bereit, und jeden Beschluss findest du im Beschlussregister wieder.",
      beeld: "/beeld/jonabestuur-vergadermodus",
      breed: 1600,
      hoog: 1000,
      alt: "Der Sitzungsmodus von Jona Vorstand: links die Tagesordnung, rechts Tagesordnungspunkt 6, Haushalt 2027, mit drei Fragen: Was wurde besprochen, was wurde beschlossen und wer macht was",
      actie: "14 Tage kostenlos testen",
      doel: "https://vorstand.jonatools.com/taal/de?terug=/aanmelden",
    },
  ] as App[],
  binnenkort: [
    {
      id: "selaread",
      naam: "Selaread",
      tag: "Start im Frühjahr 2027",
      voor: "Leser christlicher Zeitschriften und Verlage",
      tekst: "Lies unbegrenzt christliche Zeitschriften, auf dem Smartphone, Tablet oder Desktop. Selaread ist eine moderne Kiosk-App. Auch für Verlage, die eine Lese-App für ihre eigenen Abonnenten suchen.",
      beeld: "/beeld/selaread-ontdek",
      breed: 1800,
      hoog: 1177,
      alt: "Die Seite Entdecken in Selaread: ein Suchfeld, Rubriken wie Israel, Kirchenmagazine und Kinder, und eine Übersicht der Zeitschriften mit ihren Titelseiten",
      actie: "Als Betatester anmelden",
      doel: { pagina: "selaread", anker: "beta" },
    },
    {
      id: "tirgumai",
      naam: "TirgumAI",
      tag: "Erwartet für 2027",
      voor: "Bibelübersetzer und Hobbytheologen",
      tekst: "Bibelsoftware der neuesten Generation. Übersetze mit Hilfe von KI aus dem Grundtext, ergänze den Bibeltext mit Kommentaren und veröffentliche eine vollständige Studienbibel.",
      beeld: "/beeld/tirgumai-start",
      breed: 1800,
      hoog: 1125,
      alt: "Der Startbildschirm von TirgumAI: Genesis 1,1 auf Hebräisch mit der eigenen Übersetzung darunter, Schaltflächen zum Weiterübersetzen und zum Lesen des Kapitels, und die Projekte",
      actie: "Halte mich auf dem Laufenden",
      doel: { pagina: "tirgumai", anker: "op-de-hoogte" },
    },
  ] as App[],
  vergelijk: {
    kop: "Welche App passt zu dir?",
    app: "App",
    voorWie: "Für wen",
    wanneer: "Wann",
    aanDeSlag: "Loslegen",
  },
};
