// Schedule a meeting (/en/contact), English (American English). Same structure as nl.ts.
import type { AdviesTekst } from "./nl";

export const en: AdviesTekst = {
  eyebrow: "Let's meet",
  kop: "Half an hour on how software can make your work more enjoyable",
  lead: "Free, no strings attached, online or at your place. We listen, ask questions and tell you honestly what you should and shouldn't do with software and AI.",
  stappen: [
    { kop: "You tell us", tekst: "How the work goes today and where it gets stuck. What you'd like to see done differently, and how that would make a difference." },
    { kop: "We take a look", tekst: "Are you already using software, and is it the right fit? Who needs to work with it? What can be automated?" },
    { kop: "You decide", tekst: "After the meeting, we send you a short summary with our advice. What you do with it is up to you." },
  ],
  scan: {
    eyebrow: "Want to go further?",
    kop: "The AI scan",
    tekst: "We spend a day with your organization, and you get a concrete plan: which work can be done smarter, what it delivers and what it costs.",
    link: "Read how the AI scan works",
  },
  form: {
    kop: "Schedule a meeting",
    naam: "Your name",
    rol: "Your role",
    organisatie: "Organization",
    soort: "Type of organization",
    email: "Email address",
    emailVoorbeeld: "name@organization.org",
    telefoon: "Phone",
    optioneel: "(optional)",
    telefoonVoorbeeld: "+1 555 123 4567",
    bericht: "Where does work keep piling up for you?",
    berichtVoorbeeld: "A few sentences is enough.",
    voorkeur: "Preference",
    vormen: ["Online, by video call", "In person, at our place"],
    knop: "Send and schedule the meeting",
    note: "We'll get in touch within two business days and only use your details for that. Prefer email?",
  },
};
