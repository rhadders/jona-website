// Doorverwijzingen vóór elke pagina:
// 1. jonatechnologie.nl (en www.) → jonatechnology.com/nl/…, met behoud van het pad.
// 2. Het kale domein (/) → de taal van de browser: /nl, /en of /de.
// 3. Oude Nederlandse adressen zonder taal (/over-jona) → /nl/over-jona.
// Alleen voor GET en HEAD: formulieren posten gewoon naar /api/… op het domein waar ze staan.
import { BRONTAAL, TALEN, isTaal, type Taal } from "../i18n/talen";
import { BEDANKT, PAGINAS, bestaat } from "./paginas";

export const HOOFDDOMEIN = "jonatechnology.com";
const OUD_DOMEIN = /(^|\.)jonatechnologie\.nl$/i;

// Oude adressen zonder taal: alles wat in het Nederlands bestaat, plus de bedankpagina.
const OUDE_PADEN = new Map<string, string>([
  ...PAGINAS.filter((p) => p.id !== "home").map((p) => [`/${p.id}`, p.talen.nl.pad] as [string, string]),
  ["/bedankt", BEDANKT.nl],
]);

/** Het nieuwe adres voor een oud (taalloos) Nederlands pad, of null. */
export function nieuwPad(pad: string): string | null {
  if (pad === "/" || pad === "") return null;
  const schoon = pad.replace(/\/+$/, "");
  return OUDE_PADEN.get(schoon) ?? null;
}

/**
 * De beste taal voor een Accept-Language-header, uit de talen waarin de
 * homepage bestaat. Zonder overeenkomst: Engels (het internationale domein),
 * of Nederlands als er nog geen Engelse homepage is.
 */
export function kiesTaal(acceptLanguage: string | null): Taal {
  const beschikbaar = TALEN.filter((t) => bestaat("home", t));
  const voorkeuren = (acceptLanguage ?? "")
    .split(",")
    .map((deel) => {
      const [tag, ...rest] = deel.trim().split(";");
      const q = Number(rest.find((r) => r.trim().startsWith("q="))?.split("=")[1] ?? 1);
      return { taal: tag.toLowerCase().split("-")[0], q: Number.isFinite(q) ? q : 0 };
    })
    .filter((v) => v.taal && v.q > 0)
    .sort((a, b) => b.q - a.q);
  for (const v of voorkeuren) {
    if (isTaal(v.taal) && beschikbaar.includes(v.taal)) return v.taal;
  }
  return beschikbaar.includes("en") ? "en" : BRONTAAL;
}

/** Het host-deel van een aanvraag, ook achter de proxy van Hostinger. */
export function hostVan(request: Request, url: URL): string {
  const fwd = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim();
  return (fwd || request.headers.get("host") || url.host).replace(/:\d+$/, "").toLowerCase();
}

/** Een doorverwijzing voor deze aanvraag, of null als de pagina gewoon getoond kan worden. */
export function doorverwijzing(request: Request, url: URL): Response | null {
  if (request.method !== "GET" && request.method !== "HEAD") return null;
  const { pathname, search } = url;

  if (OUD_DOMEIN.test(hostVan(request, url))) {
    const eerste = pathname.split("/")[1];
    const pad = isTaal(eerste) ? pathname : pathname === "/" ? "/nl" : nieuwPad(pathname) ?? pathname;
    return verwijs(`https://${HOOFDDOMEIN}${pad}${search}`, 301);
  }

  if (pathname === "/") {
    const taal = kiesTaal(request.headers.get("accept-language"));
    const res = verwijs(`/${taal}${search}`, 302);
    res.headers.set("Vary", "Accept-Language");
    return res;
  }

  const nieuw = nieuwPad(pathname);
  if (nieuw) return verwijs(`${nieuw}${search}`, 301);
  return null;
}

function verwijs(naar: string, status: 301 | 302): Response {
  return new Response(null, { status, headers: { Location: naar, "Cache-Control": status === 301 ? "public, max-age=86400" : "no-store" } });
}
