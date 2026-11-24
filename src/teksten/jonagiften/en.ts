// Jona Donations page, English (American English). Same structure as nl.ts.
// iDEAL, direct debit, periodic gifts and the RSIN on the statement are Dutch
// features; they are described as they are, not adapted to other countries.
import type { JonaGiftenTekst, Kaart } from "./nl";

export const en: JonaGiftenTekst = {
  kruimelpad: "Breadcrumb",
  software: "Our software",
  hero: {
    tag: "Available now · Try it free for 14 days",
    kop: "Jona Donations: donation management any treasurer can understand.",
    lead: "At most small foundations, the treasurer keeps the records alongside a job and a family. Keeping track of donors and donations shouldn't get in the way. Jona Donations puts everything in one place: who gave, for which project, and who still needs an annual statement. So simple you won't need a manual.",
    knopProberen: "Try it free for 14 days",
    knopSite: "Go to donations.jonatools.com",
    altBrowser: "The annual overview in Jona Donations: €48,320 raised in 2026, a bar for each month, and all donations from November",
    altTelefoon: "Recording a donation on a phone: donor, amount, date, project, and how the money came in",
  },
  stappen: {
    eyebrow: "From donation to annual statement",
    kop: "Everything a treasurer does, in one place",
    stap: "Step",
    lijst: [
      { icon: "users", titel: "Add donors", tekst: "Enter your donors one by one, or all at once from your existing list. A name and a town are enough to get started." },
      { icon: "circle-plus", titel: "Record donations", tekst: "Who gave, how much, and for which project. That's all you need to fill in. On your computer, or quickly on your phone." },
      { icon: "heart", titel: "Take donations online", tekst: "Every project gets its own donation page. A donor pays with iDEAL, and the donation shows up in your overview automatically." },
      { icon: "file-text", titel: "Send annual statements", tekst: "For their tax return, donors want to know what they gave. With one click, everyone gets their own statement." },
    ] as Kaart[],
  },
  telefoon: {
    eyebrow: "On your phone, too",
    kop: "Record a donation whenever you have a moment",
    tekst: "Received money after the collection or at a birthday party? Record it right away, without having to sit down at your laptop first. On your phone, you can also see at a glance what came in this year and who your donors are.",
    altJaar: "The annual overview on a phone",
    altDonateurs: "The list of donors on a phone, with what each one gave this year",
  },
  geefpagina: {
    alt: "The donation page for the Food bank project: give once or monthly, choose an amount, and donate",
    melding: { kop: "New donation", wanneer: "today", naam: "The Taylor family", project: "Food bank", via: "iDEAL" },
    eyebrow: "A donation page for each project",
    kop: "Your own giving page, in your foundation's colors",
    tekst: "A food bank, a school project or a new community center: every project gets its own page with your logo and colors. People give once or monthly, with iDEAL, the Dutch online payment method. The donation lands in your records automatically.",
  },
  overzicht: {
    eyebrow: "Donation statement",
    kop: "An annual statement for every donor, in one click",
    tekst: "At the start of the year, donors ask for a statement for their tax return. Choose the year, choose who gets one, and Jona Donations creates a neat statement for everyone, with their donations per project. By email or as a file to print.",
    alt: "The 2025 donation statement for a donor, with the number of donations and the total per project",
  },
  meer: {
    eyebrow: "And more, when you need it",
    kop: "It's all in there, and it stays out of your way",
    lijst: [
      { icon: "pen", titel: "Direct debit mandates", tekst: "Donors simply sign a mandate on their phone." },
      { icon: "repeat", titel: "Direct debit", tekst: "Collect through your own bank, or through Mollie." },
      { icon: "calendar", titel: "Periodic gifts", tekst: "Record periodic gift agreements, so you know what was agreed." },
      { icon: "chart", titel: "Report for the board", tekst: "Donations per project, next to last year's. Download it as Excel or PDF." },
      { icon: "palette", titel: "Your own branding", tekst: "Set your logo, colors and form of address (formal or informal) once." },
      { icon: "monitor", titel: "Nothing to install", tekst: "Works in the browser, on computer, tablet and phone." },
    ] as Kaart[],
  },
  prijs: {
    eyebrow: "What it costs",
    kop: "Try it free for 14 days first",
    tekst: "Take your time trying out Jona Donations with your own donors and donations. If you like it, you choose whether to pay yearly or monthly. All features are always included: there are no plans to choose from and no extra costs per donor.",
    portretAlt: "Drawn portrait of Ruben Hadders",
    persoonlijk: "Not sure it's right for your foundation? Feel free to call or email me. I'm happy to think it through with you.",
    naam: "Ruben Hadders, developer of Jona Donations",
    telefoon: "+31 33 230 17 37",
    kaartKop: "Jona Donations for your foundation",
    perJaarBetalen: "Pay yearly",
    perMaandBetalen: "Pay monthly",
    perMaand: "per month",
    perJaar: "per year",
    perMaandAfgerekend: "billed monthly",
    checks: [
      "14 days free, with all your own data",
      "All features, including donation pages and annual statements",
      "Personal help when you get stuck",
      "Prices include VAT",
    ],
    knop: "Start your free trial",
    note: ["Signing up takes two minutes and is done at ", "."],
  },
  faq: {
    kop: "Frequently asked questions",
    lijst: [
      { v: "Who is Jona Donations for?", a: "For small foundations and charities that rely on volunteers. A foundation supporting a project abroad, a food bank in your own town, a church fund. If you have donors and donations to keep track of, it's made for you." },
      { v: "Do I need to know about bookkeeping?", a: "No. Jona Donations is made for treasurers who do this alongside their job. You record a donation in a few seconds, and the program creates the statements for donors and the board by itself." },
      { v: "Do I need to install anything?", a: "No. You log in at donations.jonatools.com, on your computer, tablet or phone. There's nothing to download or update." },
      { v: "Can I bring over my current donor list?", a: "Yes. You import all your donors at once from your existing list, so you don't have to type everything in again." },
      { v: "How do you handle our donors' data?", a: "Safely and carefully. All data is processed on a server in the Netherlands, in line with the GDPR. Your donors' data belongs to your foundation only and is never used for anything else." },
    ],
  },
};
