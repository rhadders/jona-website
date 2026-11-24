// De talen van de site. Elke taal staat onder een eigen map: /nl, /en en /de.
// Nederlands is de brontaal; Engels en Duits volgen per pagina, en alleen
// voor pagina's die in die taal bestaan (zie src/lib/paginas.ts).

export const TALEN = ["nl", "en", "de"] as const;
export type Taal = (typeof TALEN)[number];
export const BRONTAAL: Taal = "nl";

/** Voor <html lang> en hreflang. Engels is Amerikaans Engels. */
export const HTML_LANG: Record<Taal, string> = { nl: "nl", en: "en-US", de: "de" };
export const OG_LOCALE: Record<Taal, string> = { nl: "nl_NL", en: "en_US", de: "de_DE" };
/** Naam van de taal in die taal zelf, voor de taalwisselaar. */
export const TAALNAAM: Record<Taal, string> = { nl: "Nederlands", en: "English", de: "Deutsch" };

/**
 * Of Jona in deze taal ook software in opdracht bouwt (maatwerk via EchoNova,
 * de AI-scan, kennismaken, klantverhalen). Voor de Duitse markt bieden we
 * alleen onze eigen software aan, dus daar staat niets over bouwen in opdracht.
 */
export const MAATWERK: Record<Taal, boolean> = { nl: true, en: true, de: false };

export function isTaal(x: unknown): x is Taal {
  return typeof x === "string" && (TALEN as readonly string[]).includes(x);
}

/** De taal uit het eerste deel van een pad (/en/... → en). Zonder taal: Nederlands. */
export function taalUitPad(pad: string): Taal {
  const eerste = pad.split("/")[1];
  return isTaal(eerste) ? eerste : BRONTAAL;
}

/** Bedragen in de schrijfwijze van de taal: € 925 · €925 · 925 €. */
export function bedrag(taal: Taal, n: number, decimalen = n % 1 === 0 ? 0 : 2): string {
  const getal = n.toLocaleString(HTML_LANG[taal], { minimumFractionDigits: decimalen, maximumFractionDigits: decimalen });
  if (taal === "de") return `${getal} €`;
  if (taal === "en") return `€${getal}`;
  return `€ ${getal}`;
}
