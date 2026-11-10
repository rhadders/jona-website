// Sitemap, gemaakt uit de paginalijst in src/lib/paginas.ts.
import type { APIRoute } from "astro";
import { PAGINAS } from "../lib/paginas";

export const GET: APIRoute = ({ site }) => {
  const basis = site ?? new URL("https://jonatechnologie.nl");
  const urls = PAGINAS.map((p) => `  <url><loc>${new URL(p.pad, basis).href}</loc></url>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
};
