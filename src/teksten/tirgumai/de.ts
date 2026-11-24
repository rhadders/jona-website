// TirgumAI (/de/tirgumai), Deutsch (mit "du"). Gleiche Struktur wie nl.ts.
// Das Infoblatt gibt es nicht auf Deutsch; hier steht die englische Fassung.
import type { Download, Feature, Groep, Kop, Stap, Template, TirgumAITekst, Vraag, Voordeel } from "./nl";

export const de: TirgumAITekst = {
  kruimelpad: "Brotkrümelnavigation",
  software: "Unsere Software",
  hero: {
    tag: "Beta · für Bibelübersetzer, Theologen und Verlage",
    kop: "TirgumAI: die Bibel Vers für Vers übersetzen, mit Hilfe von KI",
    leadHtml: "Übersetze aus dem hebräischen und griechischen Grundtext, allein oder im Team, mit Hilfe von KI. Ergänze die Übersetzung mit&nbsp;Fußnoten, Bildern und Kommentaren. Veröffentliche anschließend deine eigene Studienbibel, online oder als druckfertiges PDF, direkt aus der Software.",
    knopHoogte: "Halte mich auf dem Laufenden",
    knopLeessite: "Beispiel der Leseseite ansehen",
  },
  vergelijk: {
    alt: "Der Arbeitsplatz von TirgumAI bei Genesis 1,8 im hellen Modus, mit englischer Oberfläche: Übersetzung und hebräischer Grundtext in der Mitte, Wortpanel rechts",
    licht: "Hell",
    donker: "Dunkel",
    schuif: "Zwischen hellem und dunklem Modus wechseln",
  },
  functies: {
    eyebrow: "Was TirgumAI einzigartig macht",
    kopHtml: 'Bewährte Übersetzungswerkzeuge, <br class="br-breed">kombiniert mit bahnbrechender Technologie',
    strook: "Die sechs Schritte der Übersetzungsarbeit",
    aiLabel: "Mit KI-Unterstützung",
    stappen: [
      { icon: "book-open", label: "Lesen", ai: false },
      { icon: "bars", label: "Verstehen", ai: true },
      { icon: "sparkles", label: "Übersetzen", ai: true },
      { icon: "circle-check", label: "Prüfen", ai: true },
      { icon: "users", label: "Zusammenarbeiten", ai: false },
      { icon: "upload", label: "Veröffentlichen", ai: false },
    ] as Stap[],
    groepen: [
      { kop: "Den Grundtext lesen", ai: false, punten: [
        "Hebräisch, Aramäisch und Griechisch Wort für Wort, mit Lemma, Form, Strong's, Transliteration und Aussprache",
        "Satzbau und die Bedeutung eines Wortes auf einen Blick",
        "Vergleichstexte (u. a. Nestle 1904, Tischendorf und Westcott-Hort)",
        "Konkordanz nach Strong's, Lemma oder grammatischer Form, in der ganzen Bibel oder in einer einzelnen Passage",
      ] },
      { kop: "Den Hintergrund verstehen", ai: true, punten: [
        "Wörterbücher (u. a. Brown-Driver-Briggs, Abbott-Smith und Strong's)",
        "Textvarianten mit Erläuterungen an 4.515 Stellen im Alten Testament",
        "Parallelstellen nebeneinander anzeigen",
        "Personen, Orte und Namen erklärt",
        "Handbücher, Kommentare und Studiennotizen",
      ] },
      { kop: "Übersetzen mit Hilfe von KI", ai: true, punten: [
        "Richtlinien für Stil, Register, Gottesnamen, Anredeform, Poesie und Ehrfurchtsgroßschreibung",
        "Eine KI-Übersetzung pro Vers oder der ganzen Bibel auf einmal",
        "Ein Projektglossar, das Vorkommen und Abweichungen sichtbar macht",
        "Ein KI-Assistent, der dir hilft, den Grundtext zu verstehen und gut überlegte Übersetzungsentscheidungen zu treffen",
        "Eine KI-Prüfung deiner Übersetzung am Grundtext",
      ] },
      { kop: "Auf Konsistenz prüfen", ai: true, punten: [
        "Konsistenz in beide Richtungen: ein Grundwort mit mehreren Übersetzungen, ein Zielwort für mehrere Grundwörter",
        "Sprachfehler in der Zielsprache: Leerzeichen, Satzzeichen, offene Anführungszeichen und die Schreibweise von Eigennamen",
      ] },
      { kop: "Im Team übersetzen", ai: false, punten: [
        "Unterstützung für mehrere Projekte",
        "Absprache mit Teammitgliedern über die beste Übersetzung",
        "Vollständiger Verlauf pro Vers und ein Protokoll pro Projekt",
        "Vier Benutzerrollen: Korrekturleser, Übersetzer, Reviewer und Manager",
      ] },
      { kop: "Veröffentlichen", ai: false, punten: [
        "Komplette Bibeln und Studienbibeln automatisch gesetzt mit fertigen Vorlagen, druckfertig mit Beschnitt und Schnittmarken",
        "Deine eigene Online-Studienbibel, mit einem Lesemodus und einem Studienmodus",
        "Export nach Word, PDF, EPUB, USFM 3.1, USX und USJ",
        "PTXprint-Paket für den Satz",
      ] },
    ] as Groep[],
  },
  vertaler: {
    eyebrow: "Für Übersetzer",
    kop: "Jedes Wort erklärt, genau dort, wo du arbeitest",
    tekst: "Unter jedem Vers steht der Grundtext Wort für Wort, mit Transliteration, Bedeutung und Strong's-Nummer. Klick auf ein Wort, und das Panel zeigt die Grammatik, die Herkunft, wie du es früher übersetzt hast und was das Glossar vorgibt. Keine Wörterbücher daneben, keine Tabs.",
    alt: "Die Interlinearzeile zu Genesis 1,8: zehn hebräische Wörter mit Transliteration, englischer Bedeutung und Strong's-Nummer, das Wort „expanse“ (Ausdehnung) ausgewählt",
    onderschrift: "Der Grundtext Wort für Wort unter Genesis 1,8.",
  } as Feature,
  lezer: {
    eyebrow: "Für Leser",
    kop: "Von der Arbeitsübersetzung zur Studienbibel, ohne zusätzliche Arbeit",
    tekst: "Was das Team am Arbeitsplatz festhält, etwa Fußnoten, Verweise, Einleitungen, Studiennotizen und Bilder, steht auf der Leseseite sofort an der richtigen Stelle. Die Leser entscheiden selbst: nur der Text oder alles dazu. Quellen und Lizenzen stehen übersichtlich auf einer Seite.",
    alt: "Die Leseseite eines Übersetzungsprojekts bei Genesis 1: Bucheinleitung, Abschnittsüberschriften, Fußnoten, Verweise am Rand und ein Studienpanel",
    onderschrift: "Die Leseseite im Studienmodus: Einleitung, Verweise, Fußnoten, Grundtext.",
  } as Feature,
  team: {
    eyebrow: "Fürs Team",
    kop: "Einheitlich übersetzen, auch mit zehn Leuten",
    tekst: "Die Konsistenzprüfung findet die Stellen, an denen ein Wort deiner Übersetzung für zwei verschiedene Grundwörter steht oder dasselbe Grundwort unterschiedlich übersetzt wurde. Zu jeder Problemstelle siehst du die Verse, springst zur Karte oder markierst sie als bewusst so gewollt. Rollen für Übersetzer, Reviewer und Administrator halten die Arbeit in Ordnung.",
    alt: "Die Konsistenzprüfung, Reiter Begriffe: drei englische Wörter, die für mehr als ein Grundwort stehen, etwa „light“ (Licht), mit den Versen pro Grundwort",
    onderschrift: "Konsistenz › Begriff 'light' (Licht) in Genesis 1.",
  } as Feature,
  drukwerk: {
    eyebrow: "Von der Übersetzung zur gedruckten Bibel",
    kop: "Druckfertig gesetzt, ohne monatelange Satzarbeit",
    tekst: "Dieselbe Software setzt auch komplette Bibeln und Studienbibeln. Überschriften, Kapitel- und Versnummern, Fußnoten und Querverweise, ausgeglichene Spalten, Beschnitt und Schnittmarken: der ganze Text in einem Durchgang. Druckpartner Drukcase, spezialisiert auf Bibeln, nutzt TirgumAI bereits für den Satz. Ein komplettes bulgarisches Neues Testament ist damit entstanden, weitere Ausgaben sind in Vorbereitung.",
    voordelen: [
      { icon: "clock", kop: "Weniger Zeit", tekst: "Eine Bibel hat schnell mehr als tausend Seiten. Die Software setzt den ganzen Text in einem Durchgang und macht bei Problemen automatisch Vorschläge." },
      { icon: "euro", kop: "Geringere Kosten", tekst: "Auch eine kleine Auflage oder eine Erstausgabe wird machbar. Verlage ohne Erfahrung profitieren von fertigen Vorlagen." },
      { icon: "shield-check", kop: "Kein Frust", tekst: "Keine verrutschten Verse oder Fußnoten, die sich lösen. Jeder Probedruck wird auf dieselbe Weise gesetzt: Was gut war, bleibt gut." },
    ] as Voordeel[],
    studiebijbel: {
      alt: "Eine Doppelseite aus Genesis 1 bis 3 in der Vorlage Studienbibel: zwei Spalten Bibeltext mit Textanmerkungen und Studiennotizen unten auf jeder Seite",
      eyebrow: "Vorlage",
      kop: "Studienbibel",
      tekst: "Zwei Spalten, mit Textanmerkungen und Studiennotizen unten auf jeder Seite. Die Software setzt automatisch:",
      punten: [
        "Überschriften, Kapitel- und Versnummern",
        "Fußnoten und Querverweise",
        "Studiennotizen beim richtigen Vers",
        "ausgeglichene Spalten, mit Silbentrennung",
        "Beschnitt und Schnittmarken für die Druckerei",
      ],
    },
    templates: [
      { naam: "Kirchenbibel", beeld: "tirgumai-template-kerkbijbel", b: 1200, h: 1760, tekst: "Zwei Spalten, Querverweise und Daumenregister am Rand.", alt: "Eine Seite aus Johannes 1 in der Vorlage Kirchenbibel: zwei Spalten, Fußnoten und Verweise unten, Daumenregister am Rand" },
      { naam: "Notizbibel", beeld: "tirgumai-template-notitiebijbel", b: 1200, h: 1800, tekst: "Eine Spalte, Versnummern am Rand und Linien für Notizen.", alt: "Eine Seite aus Römer 1 in der Vorlage Notizbibel: eine Spalte mit Versnummern am Rand und leeren Notizlinien daneben" },
      { naam: "Eigenes Design", beeld: "tirgumai-template-eigen-ontwerp", b: 1200, h: 1800, tekst: "Nach der Musterseite eines Kunden: eigenes Format, eigene Schrift, Überschriften und Anmerkungen.", alt: "Eine Seite aus Matthäus 1 in einem eigenen Design: eine breite Spalte mit eigener Schrift und Fußnoten unten" },
    ] as Template[],
    alleLabel: "Alle Vorlagen:",
    alleTemplates: ["Lesebibel", "Handbibel", "Großdruck", "Kirchenbibel", "Kinderbibel", "Studienbibel", "Pastorenbibel", "Anwendungsbibel", "Notizbibel"],
    stappen: [
      { kop: "Text einreichen", tekst: "Aus Paratext, als USFM oder USX oder als Scripture Burrito." },
      { kop: "Layout wählen", tekst: "Eine fertige Vorlage oder ein maßgeschneidertes Design." },
      { kop: "Probedruck ansehen", tekst: "Als PDF herunterladen, inklusive Erkennung von Layoutproblemen." },
      { kop: "Drukcase druckt", tekst: "Die Druckdatei geht in die Druckerei, Drukcase kümmert sich um den Rest." },
    ] as Kop[],
    sheet: {
      eyebrow: "Infoblatt",
      tekst: "Alles über das Drucken mit TirgumAI und Drukcase auf zwei Seiten, zum Weiterleiten in deiner Organisation.",
      downloads: [
        { href: "/downloads/tirgumai-information-sheet-drukcase-en.pdf", label: "Herunterladen (PDF, Englisch)", hreflang: "en" },
      ] as Download[],
    },
  },
  hoogte: {
    eyebrow: "Auf dem Laufenden bleiben",
    kop: "Als Erster erfahren, wann TirgumAI verfügbar ist?",
    lead: "TirgumAI ist in Entwicklung und wird gerade mit einer kleinen Gruppe von Übersetzern getestet. Hinterlass deine E-Mail-Adresse, und wir schreiben dir bei den wichtigen Schritten: neue Funktionen, der Start der offenen Beta und der Launch. Nicht öfter als nötig, und abmelden kannst du dich jederzeit.",
    punten: [
      "Neuigkeiten zu neuen Funktionen",
      "Eine Einladung zur offenen Beta",
      "Nachricht zum Launch",
    ],
    email: "E-Mail-Adresse",
    knop: "Halte mich auf dem Laufenden",
    note: "Wir verwenden deine Adresse nur für Neuigkeiten zu TirgumAI. Lieber per E-Mail?",
  },
  faq: {
    kop: "Häufige Fragen",
    lijst: [
      { v: "Schreibt die KI die Übersetzung?", a: "Das ist möglich, wenn du das möchtest. Mit TirgumAI kannst du die hebräischen und griechischen Grundtexte auf Knopfdruck in Dutzende Zielsprachen übersetzen lassen, auf Grundlage deiner eigenen Übersetzungsrichtlinien. Du kannst die eingebaute KI aber auch zur Unterstützung beim Übersetzen nutzen oder um deine eigene Übersetzung zu prüfen." },
      { v: "Welche Grundtexte verwendet TirgumAI?", a: "Offene Ausgaben des hebräischen Alten Testaments und des griechischen Neuen Testaments, mit Strong's-Nummern und grammatischen Informationen. Dazu Vergleichstexte wie Nestle 1904, Tischendorf und Westcott-Hort und Wörterbücher wie Brown-Driver-Briggs, Abbott-Smith und Strong's." },
      { v: "Können wir im Team arbeiten?", a: "Ja, ein Übersetzungsprojekt hat neben Übersetzern oft auch Korrekturleser, Reviewer und Projektleiter. Sie haben jeweils eigene Rechte in der Software. TirgumAI lässt sich aber auch sehr gut allein nutzen." },
      { v: "Wie kommt die Übersetzung zu den Lesern?", a: "Du kannst die Übersetzung als Online-Bibel veröffentlichen, in einer schön gestalteten Leseumgebung, die sich für Smartphone und Desktop eignet." },
      { v: "Wir haben schon eine Übersetzung. In welchem Format liefern wir sie?", a: "Direkt aus Paratext, als USFM oder USX oder als Scripture Burrito. Du musst also nicht in TirgumAI übersetzen, um die Software für den Satz zu nutzen." },
      { v: "Können wir unsere Bibel auch drucken lassen?", a: "Ja. TirgumAI setzt den kompletten Text druckfertig, mit Beschnitt und Schnittmarken, in einer fertigen Vorlage oder einem eigenen Design." },
    ] as Vraag[],
  },
};
