// Homepage, English (American English). Same structure as nl.ts.
// ActueleGegevens.nl is only available in Dutch, so TirgumAI takes its place here.
import type { HomeTekst, Product, Verhaal } from "./nl";

export const en: HomeTekst = {
  hero: {
    duifAria: "The story behind the dove: read why Jona has a dove as its logo",
    duifVraag: "The story behind the dove?",
    duifKlik: "Click here",
    eyebrow: "Mission-driven software & AI",
    kopHtml: 'Meaningful technology for businesses and organizations <br class="br-wide">with a mission',
    lead: "We build user-friendly software and AI for complex processes. Years of working with technology inside mission-driven organizations have taught us what it takes to make software truly pleasant to use.",
    knopSoftware: "See our software",
    knopKennismaking: "Schedule a meeting",
  },
  producten: {
    eyebrow: "Our own software",
    kop: "Eye-catching apps that win users' hearts.",
    lijst: [
      {
        beeld: { src: "/beeld/jonagiften-jaar", breed: 1600, hoog: 1000, alt: "The annual overview in Jona Donations: what came in this year, month by month, and all donations from November" },
        tag: "Available now",
        naam: "Jona Donations",
        tekst: "Donation management for small charities and foundations. Keep track of donors, gifts and direct debit mandates in one place, let people give online per project, and send every annual statement with a single click. So simple that any treasurer can use it.",
        meer: { label: "More about Jona Donations", pagina: "jonagiften" },
        actie: { label: "Try it free for 14 days", doel: "https://donations.jonatools.com/taal/en?terug=/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/jonabestuur-vergadermodus", breed: 1600, hoog: 1000, alt: "Meeting mode in Jona Board: the agenda on the left, agenda item 6, Budget 2027, on the right, with three questions: what was discussed, what was decided, and who does what" },
        tag: "Available now",
        naam: "Jona Board",
        tekst: "Agendas, minutes and decisions for small boards. Go through your meeting item by item: what was discussed, what was decided, and who does what. After the last agenda item, the draft minutes are ready, and every decision ends up in the decision log.",
        meer: { label: "More about Jona Board", pagina: "jonabestuur" },
        actie: { label: "Try it free for 14 days", doel: "https://board.jonatools.com/taal/en?terug=/aanmelden", stijl: "primary" },
      },
      {
        beeld: { src: "/beeld/tirgumai-start", breed: 1800, hoog: 1125, alt: "The start screen of TirgumAI: Genesis 1:1 in Hebrew with your own translation below it, buttons to continue translating and read the chapter, and your projects" },
        tag: "Expected in 2027",
        naam: "TirgumAI",
        tekst: "The next generation of Bible software. Translate from the original Hebrew and Greek with the help of AI, enrich the text with commentary, and publish a complete study Bible. For professional translators and amateur theologians alike.",
        meer: { label: "More about TirgumAI", pagina: "tirgumai" },
        actie: { label: "Keep me posted", doel: { pagina: "tirgumai", anker: "op-de-hoogte" }, stijl: "outline" },
      },
    ] as Product[],
    alles: "There's also Selaread, the digital newsstand for Christian magazines, and more on the way.",
    allesKnop: "See all our software",
  },
  maatwerk: {
    eyebrow: "Custom software",
    kop: "If it doesn't exist, it can be built",
    leadHtml: 'Impressed by the software we build? Do you have an idea of your own for your business or organization? We also build custom software and AI through our sister company <a href="https://echonova.nl" target="_blank" rel="noopener">EchoNova</a>. Always based on two simple principles:',
    principes: [
      { kop: "We make software affordable and sustainable", tekst: "Thanks to AI, very advanced software can be built on a small budget, with quality that holds its own against large development studios. But we don't just start building: first we think with you about what's really needed and what will still matter in the long run. So that software is a sustainable choice, too." },
      { kop: "We make software simple and attractive", tekst: "If you need a consultant or a course before you can work with a piece of software, we think it's not well designed. However complex the processes are, we do everything we can to make them simple, clear and user-friendly. In a design that looks good. So you actually enjoy looking at your screen." },
    ],
  },
  verhalen: {
    aria: "Built for a client",
    eyebrow: "Built for a client",
    lees: "Read the case study",
    van: "of",
    vorige: "Previous client",
    volgende: "Next client",
    gaNaar: "Go to",
    lijst: [
      {
        pagina: "klantverhaal/hadders-media",
        beeld: { src: "/beeld/hadders-media-beheer", breed: 1800, hoog: 1416, alt: "The admin of the Hadders Media livestream platform: today's livestreams with the client, status (replay, live or scheduled), access code and number of messages for each broadcast, and the upcoming broadcasts below" },
        mockup: false,
        kop: "Attend a farewell wherever you are, whatever language you speak.",
        tekst: "Hadders Media makes it possible to attend a funeral remotely, and was the first in the Netherlands to offer live subtitles and dubbing at funerals. We built a platform that brings livestreams, translations and condolences together. Easy for Hadders Media to manage, and accessible to family and friends all over the world.",
        klant: "Hadders Media",
      },
      {
        pagina: "klantverhaal/holy-moly",
        beeld: { src: "/beeld/holy-moly-ipad", breed: 1200, hoog: 1490, alt: "An iPad at an angle, showing a game in progress in the Holy Moly! app: a row of biblical characters in front of the city gate, with the player's hand of cards below" },
        mockup: true,
        kop: "A game app for a card game of biblical proportions.",
        tekst: "Holy Moly! is a card game coming out in mid-2027. We built an app for iOS and Android where you can play the game against the computer. Strategic, witty and just a little bit sinful.",
        klant: "Holy Moly!",
      },
      {
        pagina: "klantverhaal/vbgg",
        beeld: { src: "/beeld/vbgg-website", breed: 1800, hoog: 1416, alt: "The homepage of vakantiewekenvbgg.nl: buttons to join as a staff member or as a guest at the top, and below that a photo of two men on a side-by-side tandem bike" },
        mockup: false,
        kop: "From paper records to a single portal that adapts to every audience.",
        tekst: "Every year, the Vakantieweken (holiday weeks) of the Vrouwenbond Gereformeerde Gemeenten give more than 600 guests a week of vacation, with the help of over 450 volunteers and care professionals. We brought all sign-ups and the administration around them together in one system, connected to the website.",
        klant: "Vakantieweken VBGG",
      },
      {
        pagina: "klantverhaal/bc-app",
        beeld: { src: "/beeld/bc-app-iphone", breed: 992, hoog: 1490, alt: "An iPhone at an angle, showing the welcome screen of the BC app: the signet ring as the featured object, with the categories of objects below" },
        mockup: true,
        kop: "An app that lets the objects of the Bible speak.",
        tekst: "For the book De Zin der Dingen (The Meaning of Things) by Jaap Bönker and Ruben Hadders, we built an iOS and Android app for the Bijbelse Cultuur Stichting (Biblical Culture Foundation). It describes more than 125 everyday objects from the Bible and their symbolic meaning, to read or to listen to.",
        klant: "the BC app",
      },
    ] as Verhaal[],
  },
};
