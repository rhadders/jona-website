// Startseite, Deutsch (mit "du"). Gleiche Struktur wie nl.ts.
// ActueleGegevens.nl gibt es nur auf Niederländisch, deshalb steht hier TirgumAI.
// Ohne Individualsoftware und Kundengeschichten: in Deutschland bieten wir nur
// unsere eigene Software an (MAATWERK in src/i18n/talen.ts).
import type { HomeTekst, Product } from "./nl";

export const de: HomeTekst = {
  hero: {
    duifAria: "Die Geschichte hinter der Taube: Lies, warum Jona eine Taube im Logo hat",
    duifVraag: "Die Geschichte hinter der Taube?",
    duifKlik: "Hier klicken",
    eyebrow: "Software & KI mit Mission",
    kopHtml: 'Sinnvolle Technologie für Unternehmen und Organisationen <br class="br-wide">mit einer Mission',
    lead: "Wir entwickeln benutzerfreundliche Software und KI für komplexe Abläufe. Aus jahrelanger Erfahrung mit Technik in Organisationen mit einer Mission wissen wir, was es braucht, damit Software sich wirklich gut anfühlt.",
    knopSoftware: "Unsere Software ansehen",
    knopKennismaking: "Kontakt aufnehmen",
  },
  producten: {
    eyebrow: "Unsere eigene Software",
    kop: "Apps zum Verlieben, die die Herzen der Nutzer erobern.",
    lijst: [
      {
        beeld: { src: "/beeld/jonagiften-jaar", breed: 1600, hoog: 1000, alt: "Die Jahresübersicht in Jona Spenden: was in diesem Jahr eingegangen ist, Monat für Monat, und alle Spenden aus dem November" },
        tag: "Jetzt verfügbar",
        naam: "Jona Spenden",
        tekst: "Die Spendenverwaltung für kleine Stiftungen und Vereine. Behalte Spender, Spenden und Lastschriftmandate an einem Ort im Blick, lass Menschen online für einzelne Projekte spenden und verschicke alle Jahresübersichten mit einem Klick. So einfach, dass jeder Kassenwart damit zurechtkommt.",
        meer: { label: "Mehr über Jona Spenden", pagina: "jonagiften" },
        actie: { label: "14 Tage kostenlos testen", doel: "https://spenden.jonatools.com/taal/de?terug=/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/jonabestuur-vergadermodus", breed: 1600, hoog: 1000, alt: "Der Sitzungsmodus von Jona Vorstand: links die Tagesordnung, rechts Tagesordnungspunkt 6, Haushalt 2027, mit drei Fragen: Was wurde besprochen, was wurde beschlossen und wer macht was" },
        tag: "Jetzt verfügbar",
        naam: "Jona Vorstand",
        tekst: "Tagesordnung, Protokolle und Beschlüsse für kleine Vorstände. Geht Punkt für Punkt durch eure Sitzung: Was wurde besprochen, was wurde beschlossen und wer macht was. Nach dem letzten Tagesordnungspunkt steht der Protokollentwurf bereit, und jeden Beschluss findest du im Beschlussregister wieder.",
        meer: { label: "Mehr über Jona Vorstand", pagina: "jonabestuur" },
        actie: { label: "14 Tage kostenlos testen", doel: "https://vorstand.jonatools.com/taal/de?terug=/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/tirgumai-start", breed: 1800, hoog: 1125, alt: "Der Startbildschirm von TirgumAI: Genesis 1,1 auf Hebräisch mit der eigenen Übersetzung darunter, Schaltflächen zum Weiterübersetzen und zum Lesen des Kapitels, und die Projekte" },
        tag: "Erwartet für 2027",
        naam: "TirgumAI",
        tekst: "Bibelsoftware der neuesten Generation. Übersetze mit Hilfe von KI aus dem hebräischen und griechischen Grundtext, ergänze den Bibeltext mit Kommentaren und veröffentliche eine vollständige Studienbibel. Für professionelle Übersetzer ebenso wie für Hobbytheologen.",
        meer: { label: "Mehr über TirgumAI", pagina: "tirgumai" },
        actie: { label: "Halte mich auf dem Laufenden", doel: { pagina: "tirgumai", anker: "op-de-hoogte" }, stijl: "outline" },
      },
    ] as Product[],
    alles: "Außerdem Selaread, der digitale Kiosk für christliche Zeitschriften, und was sonst noch kommt.",
    allesKnop: "Alle unsere Software ansehen",
  },
};
