// The AI scan page, English (American English). Same structure as nl.ts.
import type { AiScanTekst } from "./nl";

export const en: AiScanTekst = {
  top: {
    eyebrow: "The AI scan",
    kop: "One day with your team, one plan you can actually use",
    lead: "The introductory meeting gives you a first impression. The AI scan goes a level deeper: we spend a day inside your organization, look at the work on your plate and the software you already have, and turn that into a plan you can judge for yourselves. No thick report, just an honest answer to the question of what can be done smarter, what it delivers and what it costs.",
    stappen: [
      { kop: "Morning: looking over your shoulder", tekst: "We sit next to the people who do the work. Membership records, communications, finances, scheduling: where does the time go, and where do things get stuck?" },
      { kop: "Afternoon: mapping it out", tekst: "Together we list which work lends itself to software or AI, which work is better left to people, and what that would take. Even if the answer is: nothing from us." },
      { kop: "Within a week: the plan", tekst: "You get a plan of a few pages, in plain language: the three to five things that will deliver the most, what they cost, and the best order to tackle them in." },
    ],
  },
  aanbod: {
    kop: "What you get",
    punten: [
      "A day on location with one of us, preferably on a regular workday.",
      "An overview of the work that can be done smarter, with what each part delivers.",
      "Advice for each part: one of our products, something from someone else, custom software with EchoNova, or simply leaving it as it is.",
      "A cost estimate and an order of steps, so you can start small.",
      "A meeting to go through the plan with whoever makes the decisions on your side.",
    ],
    vastePrijs: "Fixed price",
    exclusief: "excl. VAT and travel costs",
    knop: "Request the AI scan",
    contact: "We'll get in touch within two business days to pick a date.",
    hint: "Haven't had an introductory meeting yet? That's still the best first step. In half an hour, you'll know whether a scan makes sense for you.",
    hintLink: "Schedule a meeting",
  },
  voorWie: {
    eyebrow: "Who it's for",
    kop: "For organizations that suspect things could be smarter, but don't know where to start",
    kaarten: [
      { kop: "The work keeps piling up", tekst: "The same lists in three places, retyped every month, and nobody knows exactly which version is right." },
      { kop: "There's software, but it doesn't quite fit", tekst: "A package that's too big for what you do, or too small, and only one person really knows how to use it." },
      { kop: "Everyone's talking about AI", tekst: "You want to know what it means for you, without turning it into a year-long project." },
    ],
  },
  aanvraag: {
    eyebrow: "Request",
    kop: "Request the AI scan",
    intro: "Fill out the form, and we'll get in touch to pick a date and agree on who from your side should be there. You're not committing to anything yet; the scan only goes ahead once we've set the date together.",
  },
  form: {
    naam: "Your name",
    rol: "Your role",
    rolVoorbeeld: "For example: director, church clerk",
    organisatie: "Organization",
    organisatieVoorbeeld: "For example: Green Meadow Foundation",
    soort: "Type of organization",
    mensen: "How many people work there (paid and volunteer)?",
    mensenOpties: ["1 to 5", "5 to 20", "20 to 50", "More than 50"],
    email: "Email address",
    emailVoorbeeld: "name@organization.org",
    telefoon: "Phone",
    nietVerplicht: "(optional)",
    telefoonVoorbeeld: "+31 6 12 34 56 78",
    bericht: "What would you most like us to look at?",
    berichtVoorbeeld: "For example: the membership records and the newsletter.",
    knop: "Request the AI scan",
    noot: "We'll get in touch within two business days and only use your details for that. Prefer email?",
  },
};
