// Seite Jona Spenden, Deutsch (mit "du", die Organisation mit "ihr"). Gleiche Struktur wie nl.ts.
// iDEAL, Lastschrift, periodische Spenden und die RSIN auf der Übersicht sind
// niederländische Funktionen; sie sind beschrieben, wie sie sind.
import type { JonaGiftenTekst, Kaart } from "./nl";

export const de: JonaGiftenTekst = {
  kruimelpad: "Brotkrümelnavigation",
  software: "Unsere Software",
  hero: {
    tag: "Jetzt verfügbar · 14 Tage kostenlos testen",
    kop: "Jona Spenden: eine Spendenverwaltung, die jeder Kassenwart versteht.",
    lead: "In den meisten kleinen Stiftungen erledigt der Kassenwart die Verwaltung neben Beruf und Familie. Da darf das Erfassen von Spendern und Spenden nicht im Weg stehen. Jona Spenden bringt alles an einen Ort: wer gespendet hat, für welches Projekt, und wer noch eine Jahresübersicht bekommen muss. So einfach, dass du keine Anleitung brauchst.",
    knopProberen: "14 Tage kostenlos testen",
    knopSite: "Zu spenden.jonatools.com",
    altBrowser: "Die Jahresübersicht in Jona Spenden: 48.320 € gesammelt im Jahr 2026, ein Balken pro Monat und alle Spenden aus dem November",
    altTelefoon: "Eine Spende auf dem Handy erfassen: Spender, Betrag, Datum, Projekt und wie das Geld eingegangen ist",
  },
  stappen: {
    eyebrow: "Von der Spende bis zur Jahresübersicht",
    kop: "Alles, was ein Kassenwart tut, an einem Ort",
    stap: "Schritt",
    lijst: [
      { icon: "users", titel: "Spender hinzufügen", tekst: "Trag deine Spender ein, einzeln oder alle auf einmal aus deiner bestehenden Liste. Name und Wohnort reichen für den Anfang." },
      { icon: "circle-plus", titel: "Spenden erfassen", tekst: "Wer gespendet hat, wie viel und für welches Projekt. Mehr musst du nicht eintragen. Am Computer oder schnell auf dem Handy." },
      { icon: "heart", titel: "Online spenden lassen", tekst: "Jedes Projekt bekommt eine eigene Spendenseite. Ein Spender zahlt online, und die Spende steht automatisch in deiner Übersicht." },
      { icon: "file-text", titel: "Jahresübersichten verschicken", tekst: "Für die Steuererklärung wollen Spender wissen, was sie gegeben haben. Mit einem Klick bekommt jeder eine eigene Übersicht." },
    ] as Kaart[],
  },
  telefoon: {
    eyebrow: "Auch auf dem Handy",
    kop: "Eine Spende erfasst du einfach zwischendurch",
    tekst: "Nach der Kollekte oder auf einem Geburtstag Geld angenommen? Dann erfasst du es sofort, ohne dich erst an den Laptop setzen zu müssen. Auf dem Handy siehst du auch auf einen Blick, was in diesem Jahr eingegangen ist und wer deine Spender sind.",
    altJaar: "Die Jahresübersicht auf dem Handy",
    altDonateurs: "Die Spenderliste auf dem Handy, mit dem Betrag, den jeder in diesem Jahr gegeben hat",
  },
  geefpagina: {
    alt: "Die Spendenseite für das Projekt „Tafel“: einmalig oder monatlich, einen Betrag wählen und spenden",
    melding: { kop: "Neue Spende", wanneer: "heute", naam: "Familie Schmidt", project: "Tafel", via: "Online" },
    eyebrow: "Spendenseite pro Projekt",
    kop: "Eine eigene Spendenseite in den Farben deiner Stiftung",
    tekst: "Eine Tafel, ein Schulprojekt oder ein neues Gemeindehaus: Jedes Projekt bekommt eine eigene Seite mit eurem Logo und euren Farben. Menschen spenden online, einmalig oder monatlich. Die Spende landet automatisch in deiner Verwaltung.",
  },
  overzicht: {
    eyebrow: "Spendenübersicht",
    kop: "Für jeden Spender eine eigene Jahresübersicht, mit einem Klick",
    tekst: "Am Jahresanfang fragen Spender nach einer Übersicht für die Steuererklärung. Wähle das Jahr, wähle, wer sie bekommt, und Jona Spenden erstellt für jeden eine ordentliche Übersicht mit den Spenden pro Projekt. Per E-Mail oder als Druckdatei.",
    alt: "Die Spendenübersicht 2025 für einen Spender, mit der Anzahl der Spenden und der Summe pro Projekt",
  },
  meer: {
    eyebrow: "Und mehr, wenn du es brauchst",
    kop: "Alles ist drin, und nichts steht im Weg",
    lijst: [
      { icon: "pen", titel: "Lastschriftmandate", tekst: "Spender unterschreiben ein Mandat einfach auf dem Handy." },
      { icon: "repeat", titel: "Lastschrift", tekst: "Einziehen über deine eigene Bank oder über Mollie." },
      { icon: "calendar", titel: "Periodische Spenden", tekst: "Halte periodische Spendenvereinbarungen fest, damit du weißt, was abgemacht ist." },
      { icon: "chart", titel: "Bericht für den Vorstand", tekst: "Spenden pro Projekt, neben dem Vorjahr. Als Excel oder PDF herunterzuladen." },
      { icon: "palette", titel: "Euer eigenes Erscheinungsbild", tekst: "Logo, Farben und Anrede (Sie oder du) stellst du einmal ein." },
      { icon: "monitor", titel: "Nichts zu installieren", tekst: "Läuft im Browser, auf Computer, Tablet und Handy." },
    ] as Kaart[],
  },
  prijs: {
    eyebrow: "Was es kostet",
    kop: "Erst 14 Tage kostenlos testen",
    tekst: "Du kannst Jona Spenden erst in Ruhe mit deinen eigenen Spendern und Spenden ausprobieren. Gefällt es dir, wählst du, ob du jährlich oder monatlich zahlst. Alle Funktionen sind immer dabei, es gibt keine Pakete und keine Zusatzkosten pro Spender.",
    portretAlt: "Gezeichnetes Porträt von Ruben Hadders",
    persoonlijk: "Du bist unsicher, ob es zu eurer Stiftung passt? Ruf mich gern an oder schreib mir eine E-Mail, ich denke gern mit dir mit.",
    naam: "Ruben Hadders, Entwickler von Jona Spenden",
    telefoon: "+31 33 230 17 37",
    kaartKop: "Jona Spenden für eure Stiftung",
    perJaarBetalen: "Jährlich zahlen",
    perMaandBetalen: "Monatlich zahlen",
    perMaand: "pro Monat",
    perJaar: "pro Jahr",
    perMaandAfgerekend: "monatlich abgerechnet",
    checks: [
      "14 Tage kostenlos, mit all deinen eigenen Daten",
      "Alle Funktionen, auch Spendenseiten und Jahresübersichten",
      "Persönliche Hilfe, wenn du mal nicht weiterkommst",
      "Preise inkl. MwSt.",
    ],
    knop: "Starte deine kostenlose Testphase",
    note: ["Die Anmeldung dauert zwei Minuten und läuft über ", "."],
  },
  faq: {
    kop: "Häufige Fragen",
    lijst: [
      { v: "Für wen ist Jona Spenden gedacht?", a: "Für kleine Stiftungen und gemeinnützige Organisationen, die mit Ehrenamtlichen arbeiten. Eine Stiftung für ein Projekt im Ausland, eine Lebensmittelhilfe in deinem Ort, ein Fonds der Kirchengemeinde. Wenn du Spender und Spenden im Blick behalten musst, ist es für dich gemacht." },
      { v: "Muss ich mich mit Buchhaltung auskennen?", a: "Nein. Jona Spenden ist für Kassenwarte gemacht, die das neben ihrem Beruf tun. Eine Spende erfasst du in wenigen Sekunden, und die Übersichten für Spender und Vorstand erstellt das Programm selbst." },
      { v: "Muss ich etwas installieren?", a: "Nein. Du meldest dich über spenden.jonatools.com an, auf deinem Computer, Tablet oder Handy. Es gibt nichts herunterzuladen oder zu aktualisieren." },
      { v: "Kann ich meine bisherige Spenderliste übernehmen?", a: "Ja. Du importierst deine Spender auf einmal aus deiner bestehenden Liste, damit du nicht alles neu eintippen musst." },
      { v: "Wie geht ihr mit den Daten unserer Spender um?", a: "Sicher und sorgfältig. Alle Daten werden auf einem Server in den Niederlanden verarbeitet, im Einklang mit der DSGVO. Die Daten eurer Spender gehören nur eurer Stiftung und werden für nichts anderes verwendet." },
    ],
  },
};
