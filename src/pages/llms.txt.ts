// /llms.txt: een korte, platte samenvatting van de site voor AI-assistenten
// (voorstel van llmstxt.org). Gemaakt uit src/lib/paginas.ts en teksten die
// al op de site staan; er staat hier niets nieuws in.
// Zolang de toegangscode aan staat, valt deze route ook achter de code.
import type { APIRoute } from "astro";
import { PAGINAS, zoekPagina } from "../lib/paginas";

export const GET: APIRoute = ({ site }) => {
  const basis = site ?? new URL("https://jonatechnologie.nl");
  const url = (pad: string) => new URL(pad, basis).href;
  const lijst = (soorten: string[]) =>
    PAGINAS.filter((p) => soorten.includes(p.soort))
      .map((p) => `- [${p.title}](${url(p.pad)}): ${p.description}`)
      .join("\n");

  const tekst = `# Jona · zinvolle technologie

> ${zoekPagina("/")!.description}

Jona zinvolle technologie, zoals wij voluit heten, is een sociaal bewogen tech-startup uit Veenendaal. We bouwen aan gebruiksvriendelijke software en AI-oplossingen voor kleine bedrijven, stichtingen en verenigingen. Zodat zij kunnen uitblinken in hun werk en het verschil kunnen maken voor anderen.

Wij bouwen ook software en AI op maat, via ons zusterbedrijf EchoNova (https://echonova.nl).

## Software

${lijst(["software"])}

## Diensten

${lijst(["dienst", "contact"])}

## Over Jona

${lijst(["over", "verhaal"])}

## Contact

- Bezoekadres: Kazemat 23, Veenendaal
- Telefoon: 06 - 159 432 00
- E-mail: info@jonatechnologie.nl

## Optional

- [TirgumAI en Drukcase, informatiesheet (pdf, Nederlands)](${url("/downloads/tirgumai-informatiesheet-drukcase.pdf")})
- [TirgumAI and Drukcase, information sheet (pdf, English)](${url("/downloads/tirgumai-information-sheet-drukcase-en.pdf")})
- [Sitemap](${url("/sitemap.xml")})
`;
  return new Response(tekst, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
};
