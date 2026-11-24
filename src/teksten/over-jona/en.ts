// About Jona (/en/about), English (American English). Same structure as nl.ts.
import type { OverJonaTekst, Teamlid } from "./nl";

export const en: OverJonaTekst = {
  hero: {
    eyebrow: "About Jona",
    kop: "Software solutions that help businesses and organizations do good.",
    lead: "Jona zinvolle technologie (meaningful technology), as our full name goes, is a socially engaged tech startup from Veenendaal, the Netherlands. We build user-friendly software and AI solutions for small businesses, foundations and associations, so they can excel at their work and make a difference for others.",
  },
  waaromDoen: {
    kop: "Why do we do this?",
    alineas: [
      "The Netherlands has a great many small businesses, foundations and associations. Most of them have little technical know-how in-house to judge which software they need and what fits. They often work with software that doesn't really suit the organization. Too extensive, too complex and usually too expensive as well. But custom software is unaffordable, right?",
      "AI has changed that. What used to be something only large organizations could afford, we now build for a freelancer or for a foundation with just three volunteers and a handful of donors. Thanks to AI, software can be built many times faster and cheaper. We believe that small businesses and mission-driven organizations in particular should benefit from that, so they're better able to grow and make an even bigger difference.",
    ],
  },
  wie: {
    eyebrow: "Who we are",
    kop: "Three entrepreneurs who love nothing more than helping organizations take flight.",
    intro: "We're small, and that has its advantages. You always talk to someone who knows the software and understands your organization. Personal contact makes the work better and more enjoyable. Meanwhile, with the help of AI, we now get as much done in one day as we used to in a whole month.",
    portret: "Drawn portrait of",
    team: [
      { rol: "For promising ideas", naam: "Ruben Hadders", beeld: "team-ruben-hadders", b: 900, h: 816, tekst: "For more than twenty years, he has been helping nonprofits with ideas to grow in marketing, communications and IT.", mail: "ruben@jonacommunicatie.nl" },
      { rol: "For a sharp eye", naam: "Gijsbert Legemaat", beeld: "team-gijsbert-legemaat", b: 900, h: 787, tekst: "Builds apps and digital businesses. Down-to-earth, but with a sharp eye for usability and design.", mail: "gijsbert@echonova.nl" },
      { rol: "For reliable technology", naam: "Jelle Pals", beeld: "team-jelle-pals", b: 900, h: 928, tekst: "A programmer through and through. Analyzes business processes and knows how to turn them into reliable automations.", mail: "jelle@echonova.nl" },
    ] as Teamlid[],
    bellen: "Call us directly, weekdays from 9 a.m. to 5 p.m. (Central European Time):",
    telefoon: "+31 33 230 17 37",
  },
  waaromJona: {
    eyebrow: "Why Jona",
    kop: "Why we have a dove as our logo.",
    alineas: [
      "Jona is Hebrew for dove. In the story of Noah, the dove is the bird that returns after the flood with an olive branch in its beak: fertile land has been found, and there is a future again. Ever since, the dove has been a symbol of peace and hope.",
      "That's what we wish for every organization: finding new ground. Work that gets lighter, time that comes back for the people it's all about, and technology that quietly does its job instead of demanding attention.",
      "Jona is also the name of a prophet, known in English as Jonah, who had to bring an important message to people he didn't know. That story is about communication and making connections. Exactly what mission-driven organizations work for every day.",
      "In the Near East, the white dove is also an image of beauty. That fits well with our goal of making software that is not only meaningful but also beautiful, and a pleasure to use.",
    ],
    slot: "It's all in the name.",
    duifAlt: "The Jona logo: a white dove",
  },
};
