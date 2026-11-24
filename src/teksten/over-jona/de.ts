// Über Jona (/de/ueber-uns), Deutsch (mit "du", Organisationen mit "ihr").
// Gleiche Struktur wie nl.ts.
import type { OverJonaTekst, Teamlid } from "./nl";

export const de: OverJonaTekst = {
  hero: {
    eyebrow: "Über Jona",
    kop: "Softwarelösungen, die Unternehmen und Organisationen helfen, Gutes zu tun.",
    lead: "Jona zinvolle technologie (sinnvolle Technologie), so unser voller Name, ist ein sozial engagiertes Tech-Start-up aus Veenendaal in den Niederlanden. Wir entwickeln benutzerfreundliche Software für kleine Vereine, Stiftungen und Gemeinden. Damit sie in ihrer Arbeit glänzen und für andere den Unterschied machen können.",
  },
  waaromDoen: {
    kop: "Warum machen wir das?",
    alineas: [
      "Es gibt sehr viele kleine Vereine, Stiftungen und Gemeinden. Die meisten haben wenig technisches Wissen im Haus, um gut beurteilen zu können, welche Software nötig und geeignet ist. Oft arbeiten sie mit Software, die nicht gut zur Organisation passt. Zu umfangreich, zu kompliziert und meistens auch zu teuer.",
      "Deshalb entwickeln wir einfache Apps, die jeweils eine Sache richtig gut machen: für die Kassenführung, für die Schriftführung im Vorstand, für Leser und Verlage christlicher Zeitschriften und für Bibelübersetzer. Dank KI können wir diese Software heute viel schneller und günstiger entwickeln als früher. Wir finden, dass gerade kleine Organisationen mit einer Mission davon profitieren sollten. Damit sie besser wachsen und noch mehr bewirken können.",
    ],
  },
  wie: {
    eyebrow: "Wer wir sind",
    kop: "Drei Unternehmer, die nichts lieber tun, als Organisationen Flügel zu verleihen.",
    intro: "Wir sind klein, und das hat seine Vorteile. Du sprichst immer mit jemandem, der die Software kennt und eure Organisation versteht. Persönlicher Kontakt macht die Arbeit besser und schöner. Mit Hilfe von KI schaffen wir inzwischen an einem Tag so viel wie früher in einem ganzen Monat.",
    portret: "Gezeichnetes Porträt von",
    team: [
      { rol: "Für vielversprechende Ideen", naam: "Ruben Hadders", beeld: "team-ruben-hadders", b: 900, h: 816, tekst: "Hilft gemeinnützigen Organisationen seit mehr als zwanzig Jahren mit Ideen, um in Marketing, Kommunikation und IT zu wachsen.", mail: "ruben@jonacommunicatie.nl" },
      { rol: "Für einen scharfen Blick", naam: "Gijsbert Legemaat", beeld: "team-gijsbert-legemaat", b: 900, h: 787, tekst: "Baut Apps und digitale Unternehmen auf. Bodenständig, aber mit einem scharfen Blick für Benutzerfreundlichkeit und Design.", mail: "gijsbert@echonova.nl" },
      { rol: "Für zuverlässige Technik", naam: "Jelle Pals", beeld: "team-jelle-pals", b: 900, h: 928, tekst: "Programmierer mit Leib und Seele. Analysiert Geschäftsprozesse und weiß sie in zuverlässige Automatisierungen umzusetzen.", mail: "jelle@echonova.nl" },
    ] as Teamlid[],
    bellen: "Ruf uns direkt an, werktags von 9 bis 17 Uhr (MEZ):",
    telefoon: "+31 33 230 17 37",
  },
  waaromJona: {
    eyebrow: "Warum Jona",
    kop: "Warum wir eine Taube im Logo haben.",
    alineas: [
      "Jona ist Hebräisch für Taube. In der Geschichte von Noah ist die Taube der Vogel, der nach der Sintflut mit einem Olivenzweig im Schnabel zurückkehrt: Fruchtbares Land ist gefunden, es gibt wieder eine Zukunft. Seitdem ist die Taube ein Symbol für Frieden und Hoffnung.",
      "Das wünschen wir jeder Organisation: neuen Boden finden. Arbeit, die leichter wird, Zeit, die zurückkommt für die Menschen, um die es geht, und Technologie, die in Ruhe ihre Arbeit tut, statt Aufmerksamkeit zu fordern.",
      "Jona ist auch der Name eines Propheten, der Menschen, die er nicht kannte, eine wichtige Botschaft bringen musste. Diese Geschichte handelt von Kommunikation und davon, Verbindungen zu schaffen. Genau dafür setzen sich Organisationen mit einer Mission jeden Tag ein.",
      "Im Nahen Osten ist die weiße Taube auch ein Bild für Schönheit. Das passt gut zu unserem Ziel, nicht nur sinnvolle, sondern auch schöne Software zu machen, die man gern benutzt.",
    ],
    slot: "It's all in the name.",
    duifAlt: "Das Logo von Jona: eine weiße Taube",
  },
};
