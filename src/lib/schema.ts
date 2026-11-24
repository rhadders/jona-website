// Gestructureerde data (schema.org, JSON-LD) voor zoekmachines en AI-diensten.
// Alleen feiten die ook zichtbaar op de site staan: footer, Over Jona en de
// productpagina's. Pas dit aan als die teksten veranderen.
import { PAGINAS, link, zoekPagina, type Pagina, type PaginaTaal } from "./paginas";
import { HTML_LANG, type Taal } from "../i18n/talen";

const SITE = "https://jonatechnology.com";
const ORG = `${SITE}/#organisatie`;
const WEBSITE = `${SITE}/#website`;
const abs = (pad: string) => new URL(pad, SITE).href;

const organisatie = {
  "@type": "Organization",
  "@id": ORG,
  name: "Jona",
  alternateName: "Jona · zinvolle technologie",
  legalName: "Jona zinvolle technologie",
  url: `${SITE}/`,
  logo: abs("/logo/jona-logo.svg"),
  image: abs("/beeld/og/home.png"),
  slogan: "Software voor bedrijven en organisaties met een missie.",
  description: zoekPagina("/nl/over-jona")!.tekst.description,
  foundingDate: "2026",
  email: "info@jonatechnologie.nl",
  telephone: "+31615943200",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kazemat 23",
    addressLocality: "Veenendaal",
    addressCountry: "NL",
  },
  areaServed: { "@type": "Country", name: "Nederland" },
  knowsLanguage: ["nl", "en", "de"],
  member: ["Ruben Hadders", "Gijsbert Legemaat", "Jelle Pals"].map((name) => ({ "@type": "Person", name })),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE,
  url: `${SITE}/`,
  name: "Jona · zinvolle technologie",
  inLanguage: ["nl", "en-US", "de"],
  publisher: { "@id": ORG },
};

const SOFTWARE_LABEL: Record<Taal, string> = { nl: "Onze software", en: "Our software", de: "Unsere Software" };
const LIJST_LABEL: Record<Taal, string> = { nl: "Software van Jona", en: "Software by Jona", de: "Software von Jona" };

function kruimelpad(p: Pagina, t: PaginaTaal, taal: Taal) {
  const items = [{ name: "Home", item: abs(link("home", taal)) }];
  if (p.soort === "software") items.push({ name: SOFTWARE_LABEL[taal], item: abs(link("software", taal)) });
  items.push({ name: t.title, item: abs(t.pad) });
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
  };
}

const PAGINATYPE: Record<Pagina["soort"], string> = {
  home: "WebPage",
  overzicht: "CollectionPage",
  software: "WebPage",
  dienst: "WebPage",
  contact: "ContactPage",
  over: "AboutPage",
  verhaal: "WebPage",
};

function hoofdonderwerp(p: Pagina, t: PaginaTaal, taal: Taal): Record<string, unknown> | null {
  const id = `${abs(t.pad)}#onderwerp`;
  switch (p.soort) {
    case "software":
      return {
        "@type": "SoftwareApplication",
        "@id": id,
        name: t.title,
        description: t.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: (p.beschikbaar ?? ["nl", "en", "de"]).map((x) => HTML_LANG[x]),
        url: t.extern ?? p.extern ?? abs(t.pad),
        ...((t.extern ?? p.extern) ? { sameAs: t.extern ?? p.extern } : {}),
        publisher: { "@id": ORG },
      };
    case "dienst":
      return {
        "@type": "Service",
        "@id": id,
        name: t.title,
        description: t.description,
        provider: { "@id": ORG },
        areaServed: { "@type": "Country", name: "Nederland" },
        ...(p.prijs
          ? {
              offers: {
                "@type": "Offer",
                price: p.prijs,
                priceCurrency: "EUR",
                priceSpecification: {
                  "@type": "UnitPriceSpecification",
                  price: p.prijs,
                  priceCurrency: "EUR",
                  valueAddedTaxIncluded: false,
                },
              },
            }
          : {}),
      };
    case "verhaal":
      return {
        "@type": "Article",
        "@id": id,
        headline: t.title,
        description: t.description,
        inLanguage: HTML_LANG[taal],
        author: { "@id": ORG },
        publisher: { "@id": ORG },
        ...(p.beeld ? { image: abs(p.beeld) } : {}),
        ...(p.klant ? { about: { "@type": "Organization", name: p.klant } } : {}),
      };
    default:
      return null;
  }
}

/** De volledige JSON-LD-graaf voor een pad, of null voor pagina's buiten de lijst. */
export function schemaVoor(pad: string): Record<string, unknown> | null {
  const g = zoekPagina(pad);
  if (!g) return null;
  const { pagina: p, tekst: t, taal } = g;
  const url = abs(t.pad);
  const onderwerp = hoofdonderwerp(p, t, taal);
  const pagina: Record<string, unknown> = {
    "@type": PAGINATYPE[p.soort],
    "@id": `${url}#pagina`,
    url,
    name: t.title,
    description: t.description,
    inLanguage: HTML_LANG[taal],
    isPartOf: { "@id": WEBSITE },
    about: onderwerp ? { "@id": onderwerp["@id"] } : { "@id": ORG },
    ...(p.soort === "home" ? {} : { breadcrumb: kruimelpad(p, t, taal) }),
  };
  const graaf: Record<string, unknown>[] = [organisatie, website, pagina];
  if (onderwerp) graaf.push(onderwerp);
  if (p.soort === "home" || p.soort === "overzicht") {
    graaf.push({
      "@type": "ItemList",
      name: LIJST_LABEL[taal],
      itemListElement: PAGINAS.filter((x) => x.soort === "software" && (!x.beschikbaar || x.beschikbaar.includes(taal))).map((x, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: abs(link(x.id, taal)),
        name: (x.talen[taal] ?? x.talen.nl).title,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graaf };
}
