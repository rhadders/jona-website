// TirgumAI (/en/tirgumai), English (American English). Same structure as nl.ts.
// The information sheet is offered only in English here.
import type { Download, Feature, Groep, Kop, Stap, Template, TirgumAITekst, Vraag, Voordeel } from "./nl";

export const en: TirgumAITekst = {
  kruimelpad: "Breadcrumb",
  software: "Our software",
  hero: {
    tag: "Beta · for Bible translators, theologians and publishers",
    kop: "TirgumAI: translate the Bible verse by verse, with the help of AI",
    leadHtml: "Translate from the original Hebrew and Greek, on your own or with a team, with the help of AI. Enrich the translation with&nbsp;footnotes, images and commentary. Then publish your own study Bible, online or as a print-ready PDF, straight from the software.",
    knopHoogte: "Keep me posted",
    knopLeessite: "See an example of the reading site",
  },
  vergelijk: {
    alt: "The TirgumAI workspace at Genesis 1:8 in light mode: translation and Hebrew source text in the middle, word panel on the right",
    licht: "Light",
    donker: "Dark",
    schuif: "Slide between light and dark mode",
  },
  functies: {
    eyebrow: "What makes TirgumAI unique",
    kopHtml: 'Trusted translation tools, <br class="br-breed">combined with groundbreaking technology',
    strook: "The six steps of translation work",
    aiLabel: "With AI support",
    stappen: [
      { icon: "book-open", label: "Read", ai: false },
      { icon: "bars", label: "Understand", ai: true },
      { icon: "sparkles", label: "Translate", ai: true },
      { icon: "circle-check", label: "Check", ai: true },
      { icon: "users", label: "Collaborate", ai: false },
      { icon: "upload", label: "Publish", ai: false },
    ] as Stap[],
    groepen: [
      { kop: "Reading the original text", ai: false, punten: [
        "Hebrew, Aramaic and Greek word by word, with lemma, form, Strong's, transliteration and pronunciation",
        "Sentence structure and the meaning of a word at a glance",
        "Comparison texts (including Nestle 1904, Tischendorf and Westcott-Hort)",
        "Concordance by Strong's, lemma or grammatical form, across the whole Bible or within a single passage",
      ] },
      { kop: "Understanding the background", ai: true, punten: [
        "Lexicons (including Brown-Driver-Briggs, Abbott-Smith and Strong's)",
        "Textual variants with notes at 4,515 places in the Old Testament",
        "Parallel passages shown side by side",
        "People, places and names explained",
        "Handbooks, commentaries and study notes",
      ] },
      { kop: "Translating with the help of AI", ai: true, punten: [
        "Guidelines for style, register, divine names, forms of address, poetry and reverential capitalization",
        "An AI translation per verse, or of the whole Bible at once",
        "A project glossary that makes occurrences and deviations visible",
        "An AI assistant that helps you understand the original text and make well-considered translation choices",
        "An AI check of your translation against the original text",
      ] },
      { kop: "Checking for consistency", ai: true, punten: [
        "Consistency in both directions: one source word with several translations, one target word for several source words",
        "Language errors in the target language: spaces, punctuation, unclosed quotation marks and the spelling of proper names",
      ] },
      { kop: "Translating as a team", ai: false, punten: [
        "Support for multiple projects",
        "Discussion with team members about the best translation",
        "Full history per verse and a log per project",
        "Four user roles: proofreader, translator, reviewer and manager",
      ] },
      { kop: "Publishing", ai: false, punten: [
        "Complete Bibles and study Bibles typeset automatically with ready-made templates, print-ready with bleed and crop marks",
        "Your own online study Bible, with a reading mode and a study mode",
        "Export to Word, PDF, EPUB, USFM 3.1, USX and USJ",
        "PTXprint package for typesetting",
      ] },
    ] as Groep[],
  },
  vertaler: {
    eyebrow: "For the translator",
    kop: "Every word explained, right where you work",
    tekst: "Below every verse is the original text word by word, with transliteration, meaning and Strong's number. Click a word and the panel shows its grammar, its origin, how you translated it before and what the glossary prescribes. No dictionaries on the side, no extra tabs.",
    alt: "The interlinear strip for Genesis 1:8: ten Hebrew words with transliteration, English gloss and Strong's number, with the word for expanse selected",
    onderschrift: "The original text word by word under Genesis 1:8.",
  } as Feature,
  lezer: {
    eyebrow: "For the reader",
    kop: "From working translation to study Bible, with no extra work",
    tekst: "Everything the team records in the workspace, such as footnotes, cross-references, introductions, study notes and images, appears in the right place on the reading site right away. Readers choose for themselves: just the text, or everything. Sources and licenses are listed neatly on a single page.",
    alt: "The reading site of a translation project at Genesis 1: book introduction, section headings, footnotes, cross-references in the margin and a study panel",
    onderschrift: "The reading site in study mode: introduction, cross-references, footnotes, original text.",
  } as Feature,
  team: {
    eyebrow: "For the team",
    kop: "Consistent translation, even with ten people",
    tekst: "The consistency check finds the places where one word in your translation stands for two different source words, or where the same source word has been translated in different ways. For each issue, you see the verses, jump to the card, or mark it as intentional. Roles for translator, reviewer and administrator keep the work in order.",
    alt: "The consistency check, Terms tab: three English words that stand for more than one source word, such as 'light', with the verses for each source word",
    onderschrift: "Consistency › Term 'light' in Genesis 1.",
  } as Feature,
  drukwerk: {
    eyebrow: "From translation to printed Bible",
    kop: "Typeset for print, without months of layout work",
    tekst: "The same software also typesets complete Bibles and study Bibles. Headings, chapter and verse numbers, footnotes and cross-references, balanced columns, bleed and crop marks: the entire text in one go. Printing partner Drukcase, a Bible specialist, already uses TirgumAI for typesetting. A complete Bulgarian New Testament has been produced with it, and other editions are in preparation.",
    voordelen: [
      { icon: "clock", kop: "Less time", tekst: "A Bible easily runs to more than a thousand pages. The software typesets the entire text in one go and automatically suggests fixes when problems come up." },
      { icon: "euro", kop: "Lower costs", tekst: "Even a small print run or a first edition becomes feasible. Publishers without experience benefit from ready-made templates." },
      { icon: "shield-check", kop: "No frustration", tekst: "No shifting verses or footnotes that come loose. Every proof is typeset the same way: what was right stays right." },
    ] as Voordeel[],
    studiebijbel: {
      alt: "A spread from Genesis 1 to 3 in the study Bible template: two columns of Bible text with textual notes and study notes at the bottom of each page",
      eyebrow: "Template",
      kop: "Study Bible",
      tekst: "Two columns, with textual notes and study notes at the bottom of each page. The software automatically sets:",
      punten: [
        "headings, chapter and verse numbers",
        "footnotes and cross-references",
        "study notes with the right verse",
        "balanced columns, with hyphenation",
        "bleed and crop marks for the printer",
      ],
    },
    templates: [
      { naam: "Church Bible", beeld: "tirgumai-template-kerkbijbel", b: 1200, h: 1760, tekst: "Two columns, cross-references and thumb tabs in the margin.", alt: "A page from John 1 in the Church Bible template: two columns, footnotes and cross-references at the bottom, a thumb tab in the margin" },
      { naam: "Journaling Bible", beeld: "tirgumai-template-notitiebijbel", b: 1200, h: 1800, tekst: "One column, verse numbers in the margin and lines for notes.", alt: "A page from Romans 1 in the Journaling Bible template: one column with verse numbers in the margin and blank lines for notes beside it" },
      { naam: "Custom design", beeld: "tirgumai-template-eigen-ontwerp", b: 1200, h: 1800, tekst: "Based on a client's sample page: their own format, typeface, headings and notes.", alt: "A page from Matthew 1 in a custom design: one wide column with its own typeface and footnotes at the bottom" },
    ] as Template[],
    alleLabel: "All templates:",
    alleTemplates: ["Reader's Bible", "Personal Size Bible", "Large Print", "Church Bible", "Children's Bible", "Study Bible", "Pastor's Bible", "Application Bible", "Journaling Bible"],
    stappen: [
      { kop: "Submit your text", tekst: "From Paratext, as USFM or USX, or as a Scripture Burrito." },
      { kop: "Choose the layout", tekst: "A ready-made template or a custom design." },
      { kop: "Review the proof", tekst: "Download it as a PDF, including detection of layout problems." },
      { kop: "Drukcase prints", tekst: "The print file goes to press, and Drukcase takes care of the rest." },
    ] as Kop[],
    sheet: {
      eyebrow: "Information sheet",
      tekst: "Everything about printing with TirgumAI and Drukcase on two pages, to pass along within your organization.",
      downloads: [
        { href: "/downloads/tirgumai-information-sheet-drukcase-en.pdf", label: "Download (PDF, English)", hreflang: "en" },
      ] as Download[],
    },
  },
  hoogte: {
    eyebrow: "Stay in the loop",
    kop: "Want to be the first to hear when TirgumAI becomes available?",
    lead: "TirgumAI is in development and is currently being tested with a small group of translators. Leave your email address and we'll email you at the important milestones: new features, the start of the open beta and the launch. No more often than necessary, and you can unsubscribe at any time.",
    punten: [
      "News about new features",
      "An invitation to the open beta",
      "A message at launch",
    ],
    email: "Email address",
    knop: "Keep me posted",
    note: "We only use your address for news about TirgumAI. Prefer email?",
  },
  faq: {
    kop: "Frequently asked questions",
    lijst: [
      { v: "Does the AI write the translation?", a: "It can, if you want it to. With TirgumAI, you can have the Hebrew and Greek source texts translated into dozens of target languages at the push of a button, based on your own translation guidelines. But you can also use the built-in AI to support your translation work or to check your own translation." },
      { v: "Which source texts does TirgumAI use?", a: "Open editions of the Hebrew Old Testament and the Greek New Testament, with Strong's numbers and grammatical information. Plus comparison texts such as Nestle 1904, Tischendorf and Westcott-Hort, and lexicons such as Brown-Driver-Briggs, Abbott-Smith and Strong's." },
      { v: "Can we work as a team?", a: "Yes. Besides translators, a translation project often has proofreaders, reviewers and project leads. Each of them has their own permissions in the software. That said, TirgumAI works very well on your own, too." },
      { v: "How does the translation reach readers?", a: "You can publish the translation as an online Bible, in a beautifully designed reading environment that works on mobile and desktop." },
      { v: "We already have a translation. In what format do we submit it?", a: "Straight from Paratext, as USFM or USX, or as a Scripture Burrito. So you don't have to translate in TirgumAI to use the software for typesetting." },
      { v: "Can we have our Bible printed, too?", a: "Yes. TirgumAI typesets the complete text print-ready, with bleed and crop marks, in a ready-made template or a custom design." },
    ] as Vraag[],
  },
};
