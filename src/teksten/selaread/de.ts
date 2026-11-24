// Selaread, Deutsch (mit "du"). Gleiche Struktur wie nl.ts.
// Selaread ist auch für den internationalen Markt gedacht; deshalb steht es
// hier als digitaler Kiosk für christliche Zeitschriften, ohne den Zusatz
// "für das christliche Niederlande" der niederländischen Seite.
import type { Kaart, SelareadTekst } from "./nl";

export const de: SelareadTekst = {
  kruimelpad: "Brotkrümelnavigation",
  kruimelSoftware: "Unsere Software",
  hero: {
    tag: "Start im Frühjahr 2027",
    kop: "der digitale Kiosk für christliche Zeitschriften",
    lead: "Ein Abo, alle christlichen Zeitschriften, auf Smartphone, Tablet und Desktop. Für Leser eine moderne Kiosk-App. Für Verlage ein neuer Vertriebskanal für mehr Reichweite und Einnahmen, ohne in Technik, Marketing und Support investieren zu müssen.",
    knopBeta: "Für den Betatest anmelden",
    knopUitgevers: "Infos für Verlage",
    alt: "Selaread auf einem Tablet und einem Smartphone: auf dem Tablet ein Zeitschriftenartikel im Reader, auf dem Smartphone die Startseite mit kürzlich hinzugefügten Zeitschriften",
  },
  lezers: {
    eyebrow: "Für Leser",
    kop: "Alle christlichen Zeitschriften in einer App",
    lead: "Von Meinung und Bibelstudium bis zu Gemeindeblättern und Kinderzeitschriften: Lies unbegrenzt, in einer Leseumgebung, die auf jedem Bildschirm passt.",
    kaarten: [
      { icon: "newspaper", titel: "Ein Abo, alle Titel", tekst: "Blättere durch Dutzende christliche Zeitschriften und lies, was du willst. Mit einem Monatsabo liest du immer die neueste Ausgabe jeder Zeitschrift, mit einem Jahresabo auch das komplette Archiv." },
      { icon: "smartphone", titel: "Auf jedem Gerät, auch offline", tekst: "Selaread gibt es als App für iPhone und Android und als Web-App für Tablet und Desktop. Lade eine Ausgabe herunter und lies im Zug weiter, ohne Internet." },
      { icon: "search", titel: "Entdecken, folgen, weiterlesen", tekst: "Entdecke Titel nach Rubrik, folge deinen Lieblingszeitschriften und lies dort weiter, wo du aufgehört hast. Deine Bibliothek reist mit, vom Smartphone zum Tablet." },
    ] as Kaart[],
    alt: "Die Seite Entdecken in Selaread: ein Suchfeld, Rubriken wie Israel, Kirchenmagazine und Kinder, und eine Übersicht der Zeitschriften mit ihren Titelseiten",
  },
  uitgevers: {
    eyebrow: "Für Verlage",
    kop: "Ein neuer Vertriebskanal für deine Zeitschrift, ohne eigene App",
    lead: "Selaread bringt christliche Zeitschriften in einem Abo zusammen. Für Verlage bedeutet das einen neuen Kanal für mehr Reichweite und Einnahmen, ohne in Technik, Marketing und Support investieren zu müssen.",
    kaarten: [
      { icon: "smartphone", titel: "Keine eigene App nötig", tekst: "Eine eigene iOS- und Android-App zu bauen und zu pflegen, kostet schnell Tausende Euro, dazu kommen die Zeit und das technische Wissen, die man für die Verwaltung der App Stores, die Updates der App und die Hilfe für Leser bei Login-Problemen braucht. Selaread nimmt dir das komplett ab. Du lieferst die PDFs, wir kümmern uns um die digitale Bereitstellung. In einer optimalen Leseumgebung auf Desktop, Tablet und Smartphone." },
      { icon: "trending-up", titel: "Steigere deine Einnahmen", tekst: "Wenn du deine Zeitschrift in der Selaread-App anbietest, vergrößerst du ihre Reichweite, ohne auch nur einen Cent in Vertrieb und Marketing investieren zu müssen. Das wirkt sich positiv auf die Bekanntheit deiner Zeitschrift aus, auf den Anzeigenverkauf und auf dein Geschäftsmodell. Denn zum ersten Mal verdienst du so auch an Lesern, die sich für deine Zeitschrift interessieren, aber (noch) kein Print-Abo wollen." },
    ] as Kaart[],
    bandCijfer: "70 %",
    bandSub: "des Umsatzes gehen an den Verlag",
    bandKop: "Verlage erhalten ganze 70 % des Umsatzes",
    bandTekst: "Das ist die höchste Vergütung auf dem Markt. Das ist uns wichtig, weil wir in die Zukunft christlicher Medien investieren wollen. Auch digitales Lesen muss für Verlage eine nachhaltige Einnahmequelle sein können.",
    zoKop: "So funktioniert es",
    stappen: [
      { titel: "Als Verlag anmelden", tekst: "Du legst ein kostenloses Konto im Verlagsportal an. Nach unserer Freigabe kannst du veröffentlichen." },
      { titel: "PDFs hochladen", tekst: "Jede Ausgabe lieferst du als PDF. Wir machen daraus eine Ausgabe, die sich auf jedem Bildschirm angenehm liest." },
      { titel: "Leser finden deinen Titel", tekst: "Deine Zeitschrift steht im Kiosk, nach Rubrik auffindbar. Leser folgen deinem Titel und bekommen bei einer neuen Ausgabe Bescheid." },
      { titel: "Du erhältst deinen Anteil", tekst: "Im Portal siehst du, wie viele Leser deine Ausgaben haben, und du erhältst 70 % des Umsatzes, anteilig danach, wie viel von deinen Titeln gelesen wird." },
    ],
  },
  pro: {
    eyebrow: "Selaread Pro",
    kop: "Mehr erreichen mit Selaread Pro",
    lead: "Für Verlage, die alle Möglichkeiten nutzen und ihren Abonnenten das bestmögliche Leseerlebnis bieten wollen, gibt es Selaread Pro: fünf Extras zusätzlich zum kostenlosen Basiskonto.",
    alt: "Das Verlagsportal von Selaread auf einem Laptop: die Übersicht Ausgaben mit Magazin, Datum, Status und Anzahl der einzigartigen Leser pro Ausgabe",
    teller: "Pro-Funktion",
    van: "von",
    vorige: "Vorherige Funktion",
    volgende: "Nächste Funktion",
    functie: "Funktion",
    functies: [
      { icon: "key", titel: "Abonnentenzugang verwalten", tekst: "Gib deinen bestehenden (Print-)Abonnenten Zugang zur digitalen Ausgabe, ohne dass sie ein Selaread-Abo brauchen. So gewinnt das reguläre Abo an Wert." },
      { icon: "sparkles", titel: "KI-Textaufbereitung", tekst: "Fortschrittliche Texterkennung für deine hochgeladenen Ausgaben, damit Artikel durchsuchbar sind und sich auf einem kleinen Bildschirm angenehm lesen." },
      { icon: "chart", titel: "Detaillierte Einblicke", tekst: "Sieh pro Ausgabe und pro Artikel, wie gelesen wird und was deine Leser fesselt. So weißt du, was funktioniert, auch für deinen Anzeigenverkauf." },
      { icon: "ticket", titel: "Gutscheinaktionen", tekst: "Erstelle Zugangscodes für Partner, Aktionen oder Probeabos und verfolge, was sie bringen." },
      { icon: "layers", titel: "Erweitertes Archiv", tekst: "Biete beliebig viele ältere Jahrgänge an. Ältere Ausgaben bringen erfahrungsgemäß 20 % mehr Umsatz." },
    ] as Kaart[],
    prijsNaam: "Selaread Pro",
    prijsBedrag: "25 €",
    prijsPer: "pro Monat",
    prijsNoot: "Ein Basiskonto ist und bleibt kostenlos.",
    knop: "Als Verlag anmelden",
  },
  faqKop: "Häufige Fragen",
  faq: [
    { v: "Gibt es überhaupt genug Interesse am digitalen Lesen?", a: "Allein in den Niederlanden gibt es 9 Millionen Leser gedruckter Zeitschriften und dazu 8 Millionen digitale Leser, und rund 1.100 Titel sind digital verfügbar. Der Markt für digitale Zeitschriften ist also groß und wächst weiter." },
    { v: "Warum ist Selaread besser als eine eigene App?", a: "Eine Zeitschrift selbst zu vertreiben und zu vermarkten, ist teuer und für die meisten Verlage nicht rentabel. Mit Selaread musst du darin nicht investieren, und auch kleinere Verlage können mit ihren Publikationen Geld verdienen. Außerdem zeigt sich, dass Leser eine einzige Lese-App klar bevorzugen, statt viele verschiedene Apps nutzen zu müssen." },
    { v: "Lohnt es sich für Verlage?", a: "Zahlen britischer Verlage zeigen, dass sie schon mehr als die Hälfte ihrer Einnahmen mit All-you-can-read-Apps erzielen. Das Wachstum liegt gerade im digitalen Lesen. Dazu wirkt sich eine größere Reichweite auch positiv auf den Anzeigenverkauf aus." },
    { v: "Verlieren Verlage dadurch nicht Abonnenten?", a: "Vergleichbare Apps wie Readly haben gezeigt, dass Verlage gerade Leser zurückgewinnen, die sie früher verloren hatten. Außerdem gibt es viele Leser, die sich für einen bestimmten Titel interessieren, aber (noch) nicht genug, um ihn zu abonnieren. Mit Selaread können Verlage trotzdem an ihnen verdienen. Und mit Selaread Pro kannst du deinen bestehenden Abonnenten Zugang zur digitalen Ausgabe geben, ohne dass sie ein Selaread-Abo brauchen. So gewinnt das reguläre Abo an Wert, und Abonnenten kündigen weniger schnell." },
    { v: "Was kostet Selaread für Verlage?", a: "Ein Basiskonto ist kostenlos: Du zahlst nichts, um deinen Titel in den Kiosk zu stellen, und wirst am Umsatz beteiligt. Wenn du mehr willst, gibt es Selaread Pro für 25 € pro Monat. Für Kirchen sind die Basisfunktionen immer kostenlos. Für gemeinnützige Organisationen und andere Non-Profits gilt ein eigener Tarif, den besprechen wir gern persönlich." },
    { v: "Wann kann ich Selaread nutzen?", a: "Der Start ist für das Frühjahr 2027 geplant. Bis dahin testen wir die App mit einer Gruppe von Lesern und Verlagen. Melde dich unten an, dann laden wir dich ein, sobald der Betatest startet." },
  ],
  beta: {
    eyebrow: "Betatest",
    kop: "Als Erster lesen oder als einer der ersten Verlage dabei sein?",
    lead: "Vor dem Start im Frühjahr 2027 testen wir Selaread mit einer Gruppe von Lesern und Verlagen. Melde dich an, dann laden wir dich ein, sobald der Betatest startet.",
    punten: [
      "Leser: kostenloser Zugang während des Betatests",
      "Verlage: persönliche Begleitung beim Einliefern der Ausgaben",
      "Dein Feedback bestimmt mit, was wir bauen",
    ],
  },
  form: {
    rol: "Ich melde mich an als",
    rolOpties: ["Leser", "Verlag", "Kirche oder Organisation"],
    naam: "Dein Name",
    email: "E-Mail-Adresse",
    organisatie: "Verlag, Zeitschrift oder Organisation",
    optioneel: "(optional)",
    knop: "Anmelden",
    noot: "Lieber per E-Mail? Verlage können sich auch direkt melden unter",
  },
};
