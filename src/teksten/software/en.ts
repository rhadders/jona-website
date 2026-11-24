// Software overview, English (American English). Same structure as nl.ts.
// ActueleGegevens.nl is only available in Dutch; it is left out here, and
// the view filters on `beschikbaar` as well.
import type { App, SoftwareTekst } from "./nl";

export const en: SoftwareTekst = {
  kop: {
    eyebrow: "Our software",
    titel: "All the apps we build ourselves, in one place",
    lead: "From donation management and board meetings to Bible translation: software for organizations with a mission. Some apps are ready to use today, others are still in the works. Feel free to look around.",
  },
  nuKop: "Ready to use",
  binnenkortKop: "Coming soon",
  meerOver: "More about",
  nu: [
    {
      id: "jonagiften",
      naam: "Jona Donations",
      tag: "Available now",
      voor: "Small foundations and their treasurer",
      tekst: "Donation management for small charities and foundations. Keep track of donors, gifts and direct debit mandates in one place, let people give online per project, and send every annual statement with a single click. So simple that any treasurer can use it.",
      beeld: "/beeld/jonagiften-jaar",
      breed: 1600,
      hoog: 1000,
      alt: "The annual overview in Jona Donations: what came in this year, month by month, and all donations from November",
      actie: "Try it free for 14 days",
      doel: "https://donations.jonatools.com/taal/en?terug=/aanmelden",
    },
    {
      id: "jonabestuur",
      naam: "Jona Board",
      tag: "Available now",
      voor: "Small boards and their secretary",
      tekst: "Agendas, minutes and decisions for small boards. Go through your meeting item by item: what was discussed, what was decided, and who does what. After the last agenda item, the draft minutes are ready, and every decision ends up in the decision log.",
      beeld: "/beeld/jonabestuur-vergadermodus",
      breed: 1600,
      hoog: 1000,
      alt: "Meeting mode in Jona Board: the agenda on the left, agenda item 6, Budget 2027, on the right, with three questions: what was discussed, what was decided, and who does what",
      actie: "Try it free for 14 days",
      doel: "https://board.jonatools.com/taal/en?terug=/aanmelden",
    },
  ] as App[],
  binnenkort: [
    {
      id: "selaread",
      naam: "Selaread",
      tag: "Launching spring 2027",
      voor: "Readers of Christian magazines, and publishers",
      tekst: "Read as many Christian magazines as you like, on your phone, tablet or desktop. Selaread is a modern newsstand app. It's also for publishers looking for a reading app for their own subscribers.",
      beeld: "/beeld/selaread-ontdek",
      breed: 1800,
      hoog: 1177,
      alt: "The Explore page in Selaread: a search field, categories such as Israel, Church magazines and Children, and an overview of magazines with their covers",
      actie: "Sign up as a beta tester",
      doel: { pagina: "selaread", anker: "beta" },
    },
    {
      id: "tirgumai",
      naam: "TirgumAI",
      tag: "Expected in 2027",
      voor: "Bible translators and amateur theologians",
      tekst: "The next generation of Bible software. Translate from the original text with the help of AI, enrich the Bible text with commentary, and publish a complete study Bible.",
      beeld: "/beeld/tirgumai-start",
      breed: 1800,
      hoog: 1125,
      alt: "The start screen of TirgumAI: Genesis 1:1 in Hebrew with your own translation below it, buttons to continue translating and read the chapter, and your projects",
      actie: "Keep me posted",
      doel: { pagina: "tirgumai", anker: "op-de-hoogte" },
    },
  ] as App[],
  vergelijk: {
    kop: "Which app is right for you?",
    app: "App",
    voorWie: "Who it's for",
    wanneer: "When",
    aanDeSlag: "Get started",
  },
  maatwerk: {
    kop: "Prefer custom software?",
    tekstHtml: 'Through our sister company <a href="https://echonova.nl" target="_blank" rel="noopener">EchoNova</a>, we also build software and AI for your organization.',
    knop: "Schedule a meeting",
  },
};
