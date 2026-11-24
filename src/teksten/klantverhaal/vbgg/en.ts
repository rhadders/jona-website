// Klantverhaal Vakantieweken VBGG, English (American English).
import type { VbggTekst } from "./nl";

export const en: VbggTekst = {
  kruimelpad: { aria: "Breadcrumb", terug: "Built for a client", hier: "Vakantieweken VBGG" },
  eyebrow: "Case study · built for a client",
  kop: "From paper records to a single portal that adapts to every audience",
  lead: "Every year, the Vakantieweken (holiday weeks) of the Vrouwenbond Gereformeerde Gemeenten give more than 600 guests a week of vacation, with the help of over 450 volunteers and care professionals. We brought all sign-ups and the administration around them together in one system, connected to the website.",
  beeld: {
    alt: "The homepage of vakantiewekenvbgg.nl: at the top the buttons Meegaan als staflid (join as a staff member) and Meegaan als gast (join as a guest), below that a photo of two men on a side-by-side tandem bike with the text Samen uit, samen één (out together, together as one), and a short explanation of the holiday weeks",
    bijschrift: "The Vakantieweken website. Using the buttons at the top, staff members and guests sign up directly in the portal.",
  },
  vraag: {
    kop: "The brief",
    alineas: [
      "The Commissie Vakantieweken (Holiday Weeks Committee), part of the Vrouwenbond Gereformeerde Gemeenten (Women's Association of the Reformed Congregations), has been organizing holiday weeks since 1972 for people with physical, intellectual or multiple disabilities, for young people who need behavioral support and for older people who need care. Each group has its own wishes and its own requirements.",
      "An organization of this size needs tight administration. Staff members and guests sign up, a lot of information is needed, the finances have to be handled, and volunteers need, among other things, a certificate of conduct (VOG). Much of that work was still done on paper. That took time, was prone to errors and hard to keep track of, especially since the way of working differs so much from group to group.",
      "The committee asked us to bring all sign-ups and administrative workflows together in one system, connected to the website, that does justice to the differences between the groups.",
    ],
  },
  gebouwd: {
    kop: "What we built",
    intro: "We started with the processes themselves. In conversations with the people who do the work, we mapped out the ways of working, the exceptions and the differences between groups. Based on that, we built an administration portal that fits the way the organization works.",
    onderdelen: [
      { kop: "Online sign-up, for staff and guests", tekst: "Staff members and guests sign up through the portal. We ask for all the necessary information in a structured way, so it can then be processed automatically. No more paper needed." },
      { kop: "A system that adapts", tekst: "The processes differ greatly from group to group. That's why the system adapts to the situation: each group gets the right questions, steps and follow-up." },
      { kop: "Workflows that think ahead", tekst: "The system keeps track of what used to be tracked by hand. For example, it makes sure staff members apply for their VOG in time." },
      { kop: "Financial processing in the same system", tekst: "The financial side runs through the portal as well. That way, sign-up, details and payment all come together in one place." },
      { kop: "The website connected to the portal", tekst: "The public website and the portal form a single whole. Anyone who chooses on the website to come along as a staff member or guest goes straight to the right sign-up form." },
    ],
    slot: "Finally, we provided training, so the organization could get started with the new system on its own and with confidence.",
  },
  oplevert: {
    kop: "What it delivers",
    alineas: [
      "What used to be done largely on paper now happens digitally and in one place. Sign-ups from volunteers and guests, their details, the VOG applications and the financial processing come together in a system tailored to the organization's own processes.",
      "That saves manual work, prevents mistakes and gives a clear overview. So the committee can focus its energy on what really matters: making the holiday weeks happen.",
    ],
  },
  kort: {
    eyebrow: "At a glance",
    feiten: [
      { k: "Organization", v: "Commissie Vakantieweken", v2: "Vrouwenbond Gereformeerde Gemeenten" },
      { k: "Industry", v: "Holiday weeks with care", v2: "Volunteer organization" },
      { k: "What we built", v: "Administration portal", v2: "Website" },
      { k: "Scale", v: "Over 600 guests a year", v2: "Over 450 volunteers and care professionals" },
      { k: "Website", v: "vakantiewekenvbgg.nl", href: "https://vakantiewekenvbgg.nl" },
    ],
  },
  kaart: {
    kop: "Got admin work that could be simpler, too?",
    tekst: "Chances are we can help. Start with an introductory meeting.",
    knop: "Schedule a meeting",
  },
};
