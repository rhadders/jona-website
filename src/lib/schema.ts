// Gestructureerde data (schema.org, JSON-LD) voor zoekmachines en AI-diensten.
// Alleen feiten die ook zichtbaar op de site staan: footer, Over Jona en de
// productpagina's. Pas dit aan als die teksten veranderen.
import { PAGINAS, zoekPagina, type Pagina } from "./paginas";

const SITE = "https://jonatechnologie.nl";
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
  description: zoekPagina("/over-jona")!.description,
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
  knowsLanguage: "nl",
  member: ["Ruben Hadders", "Gijsbert Legemaat", "Jelle Pals"].map((name) => ({ "@type": "Person", name })),
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE,
  url: `${SITE}/`,
  name: "Jona · zinvolle technologie",
  inLanguage: "nl-NL",
  publisher: { "@id": ORG },
};

function kruimelpad(p: Pagina) {
  const items = [{ name: "Home", item: `${SITE}/` }];
  items.push({ name: p.title, item: abs(p.pad) });
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, ...it })),
  };
}

const PAGINATYPE: Record<Pagina["soort"], string> = {
  home: "WebPage",
  software: "WebPage",
  dienst: "WebPage",
  contact: "ContactPage",
  over: "AboutPage",
  verhaal: "WebPage",
};

function hoofdonderwerp(p: Pagina): Record<string, unknown> | null {
  const id = `${abs(p.pad)}#onderwerp`;
  switch (p.soort) {
    case "software":
      return {
        "@type": "SoftwareApplication",
        "@id": id,
        name: p.title,
        description: p.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        inLanguage: "nl",
        url: p.extern ?? abs(p.pad),
        ...(p.extern ? { sameAs: p.extern } : {}),
        publisher: { "@id": ORG },
      };
    case "dienst":
      return {
        "@type": "Service",
        "@id": id,
        name: p.title,
        description: p.description,
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
        headline: p.title,
        description: p.description,
        inLanguage: "nl",
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
  const p = zoekPagina(pad);
  if (!p) return null;
  const url = abs(p.pad);
  const onderwerp = hoofdonderwerp(p);
  const pagina: Record<string, unknown> = {
    "@type": PAGINATYPE[p.soort],
    "@id": `${url}#pagina`,
    url,
    name: p.title,
    description: p.description,
    inLanguage: "nl-NL",
    isPartOf: { "@id": WEBSITE },
    about: onderwerp ? { "@id": onderwerp["@id"] } : { "@id": ORG },
    ...(p.soort === "home" ? {} : { breadcrumb: kruimelpad(p) }),
  };
  const graaf: Record<string, unknown>[] = [organisatie, website, pagina];
  if (onderwerp) graaf.push(onderwerp);
  if (p.soort === "home") {
    graaf.push({
      "@type": "ItemList",
      name: "Software van Jona",
      itemListElement: PAGINAS.filter((x) => x.soort === "software").map((x, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: abs(x.pad),
        name: x.title,
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graaf };
}
