// Selaread page, English (American English). Same structure as nl.ts.
// Selaread is meant for an international audience too, so it is positioned
// here as the digital newsstand for Christian magazines, without the
// "for the Christian Netherlands" framing of the Dutch page.
import type { Kaart, SelareadTekst } from "./nl";

export const en: SelareadTekst = {
  kruimelpad: "Breadcrumb",
  kruimelSoftware: "Our software",
  hero: {
    tag: "Launching spring 2027",
    kop: "the digital newsstand for Christian magazines",
    lead: "One subscription, all your Christian magazines, on phone, tablet and desktop. For readers, a modern newsstand app. For publishers, a new channel for more reach and revenue, without having to invest in technology, marketing and support.",
    knopBeta: "Sign up for the beta test",
    knopUitgevers: "Information for publishers",
    alt: "Selaread on a tablet and a phone: on the tablet, a magazine article in the reader; on the phone, the home screen with recently added magazines",
  },
  lezers: {
    eyebrow: "For readers",
    kop: "All your Christian magazines in one app",
    lead: "From opinion and Bible study to church magazines and children's magazines: read as much as you like, in a reading experience that works on every screen.",
    kaarten: [
      { icon: "newspaper", titel: "One subscription, every title", tekst: "Browse dozens of Christian magazines and read whatever you like. A monthly subscription always gets you the latest issue of every magazine; an annual subscription adds the full archive." },
      { icon: "smartphone", titel: "On any device, even offline", tekst: "Selaread is available as an app for iPhone and Android and as a web app for tablet and desktop. Download an issue and keep reading on the train, without internet." },
      { icon: "search", titel: "Discover, follow, keep reading", tekst: "Discover titles by category, follow your favorite magazines and pick up where you left off. Your library travels with you, from phone to tablet." },
    ] as Kaart[],
    alt: "The Explore page in Selaread: a search field, categories such as Israel, Church magazines and Children, and an overview of magazines with their covers",
  },
  uitgevers: {
    eyebrow: "For publishers",
    kop: "A new channel for your magazine, without an app of your own",
    lead: "Selaread brings Christian magazines together in one subscription. For publishers, that means a new channel to build reach and revenue, without having to invest in technology, marketing and support.",
    kaarten: [
      { icon: "smartphone", titel: "No app of your own needed", tekst: "Building and maintaining your own iOS and Android app easily costs thousands of euros, on top of all the time and technical know-how it takes to manage app stores, update the app and help readers with login problems. Selaread takes all of that off your hands. You supply the PDFs, we take care of the digital distribution. In an optimal reading experience on desktop, tablet and smartphone." },
      { icon: "trending-up", titel: "Grow your revenue", tekst: "By offering your magazine in the Selaread app, you extend its reach without investing a single cent in distribution and marketing. That has a positive effect on your magazine's name recognition, on ad sales and on your business model. Because for the first time, you also earn from readers who are interested in your magazine but don't want a print subscription (yet)." },
    ] as Kaart[],
    bandCijfer: "70%",
    bandSub: "of revenue goes to the publisher",
    bandKop: "Publishers receive a full 70% of revenue",
    bandTekst: "That's the highest payout on the market. This matters to us, because we want to invest in the future of Christian media. Digital reading should be a sustainable source of income for publishers too.",
    zoKop: "How it works",
    stappen: [
      { titel: "Sign up as a publisher", tekst: "You create a free account in the publisher portal. Once we've approved it, you can start publishing." },
      { titel: "Upload your PDFs", tekst: "You supply each issue as a PDF. We turn it into an issue that reads comfortably on any screen." },
      { titel: "Readers find your title", tekst: "Your magazine is in the newsstand, easy to find by category. Readers follow your title and get notified when a new issue comes out." },
      { titel: "You receive your share", tekst: "In the portal, you can see how many readers your issues have, and you receive 70% of revenue, in proportion to how much of your titles is read." },
    ],
  },
  pro: {
    eyebrow: "Selaread Pro",
    kop: "Reach further with Selaread Pro",
    lead: "For publishers who want to make the most of every option and give their subscribers the best reading experience, there's Selaread Pro: five extras on top of the free basic account.",
    alt: "The Selaread publisher portal on a laptop: the Issues overview, showing the magazine, date, status and number of unique readers for each issue",
    teller: "Pro feature",
    van: "of",
    vorige: "Previous feature",
    volgende: "Next feature",
    functie: "Feature",
    functies: [
      { icon: "key", titel: "Manage subscriber access", tekst: "Give your existing (print) subscribers access to the digital edition, without them needing a Selaread subscription. That adds value to your regular subscription." },
      { icon: "sparkles", titel: "AI text editing", tekst: "Advanced text recognition on your uploaded issues, so articles are searchable and read comfortably on a small screen." },
      { icon: "chart", titel: "Detailed insights", tekst: "See how each issue and each article is read, and what captures your readers' interest. So you know what works, for your ad sales too." },
      { icon: "ticket", titel: "Voucher campaigns", tekst: "Create access codes for partners, promotions or trial subscriptions, and track what they bring in." },
      { icon: "layers", titel: "Extended archive", tekst: "Offer an unlimited number of back volumes. Back issues turn out to be good for 20% more revenue." },
    ] as Kaart[],
    prijsNaam: "Selaread Pro",
    prijsBedrag: "€25",
    prijsPer: "per month",
    prijsNoot: "A basic account is, and will stay, free.",
    knop: "Sign up as a publisher",
  },
  faqKop: "Frequently asked questions",
  faq: [
    { v: "Is there really enough interest in digital reading?", a: "In the Netherlands alone, there are 9 million readers of print magazines and another 8 million digital readers, with around 1,100 titles available digitally. So the market for digital magazines is large, and it's still growing." },
    { v: "Why is Selaread better than an app of your own?", a: "Distributing and marketing a magazine on your own is expensive and not profitable for most publishers. With Selaread, you don't have to invest in any of that, which makes it possible for smaller publishers to earn money from their publications too. On top of that, readers turn out to strongly prefer one reading app over having to use lots of different apps." },
    { v: "Does it pay off enough for publishers?", a: "Figures from British publishers show that they already earn more than half of their revenue from all-you-can-read apps. The growth is in digital reading. And a wider reach has a positive effect on ad sales as well." },
    { v: "Won't publishers lose subscribers because of this?", a: "Similar apps like Readly have shown that publishers actually win back readers they had lost. There are also many readers who are interested in a particular title, but not (yet) enough to become a subscriber. With Selaread, publishers can still earn from them. What's more, with Selaread Pro you can give your existing subscribers access to the digital edition, without them needing a Selaread subscription. That adds value to the regular subscription and makes subscribers less likely to cancel." },
    { v: "What does Selaread cost for publishers?", a: "A basic account is free: you pay nothing to put your title in the newsstand, and you share in the revenue. If you want more, there's Selaread Pro for €25 per month. For churches, the basic features are always free. Charities and other nonprofits get a separate rate, which we're happy to discuss in person." },
    { v: "When can I use Selaread?", a: "The launch is planned for spring 2027. Until then, we're testing the app with a group of readers and publishers. Sign up below, and we'll invite you as soon as the beta test starts." },
  ],
  beta: {
    eyebrow: "Beta test",
    kop: "Be among the first to read, or the first publishers on board?",
    lead: "Ahead of the launch in spring 2027, we're testing Selaread with a group of readers and publishers. Sign up and we'll invite you as soon as the beta test starts.",
    punten: [
      "Readers: free access during the beta test",
      "Publishers: personal support with supplying your issues",
      "Your feedback helps shape what we build",
    ],
  },
  form: {
    rol: "I'm signing up as",
    rolOpties: ["Reader", "Publisher", "Church or organization"],
    naam: "Your name",
    email: "Email address",
    organisatie: "Publisher, magazine or organization",
    optioneel: "(optional)",
    knop: "Sign me up",
    noot: "Prefer email? Publishers can also get in touch directly at",
  },
};
