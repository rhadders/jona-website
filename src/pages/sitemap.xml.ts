// Sitemap, gemaakt uit de paginalijst in src/lib/paginas.ts: elke pagina in
// elke taal waarin hij bestaat, met de andere talen erbij (hreflang).
import type { APIRoute } from "astro";
import { PAGINAS } from "../lib/paginas";
import { HTML_LANG, TALEN } from "../i18n/talen";

export const GET: APIRoute = ({ site }) => {
  const basis = site ?? new URL("https://jonatechnology.com");
  const abs = (pad: string) => new URL(pad, basis).href;
  const urls = PAGINAS.flatMap((p) => {
    const talen = TALEN.filter((t) => p.talen[t]);
    const alternatieven = talen.length > 1
      ? talen.map((t) => `\n    <xhtml:link rel="alternate" hreflang="${HTML_LANG[t]}" href="${abs(p.talen[t]!.pad)}"/>`).join("")
      : "";
    return talen.map((t) => `  <url>\n    <loc>${abs(p.talen[t]!.pad)}</loc>${alternatieven}\n  </url>`);
  }).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
};
