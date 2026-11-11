// Optionele toegangscode voor de hele site. Staat standaard UIT: de site is openbaar.
// Zelfde opzet als de wachtcode van ActueleGegevens.nl: wie de code weet,
// krijgt een getekende cookie (30 dagen); de code zelf staat nooit in de cookie.
//
// Omgevingsvariabelen:
//   TOEGANG=aan     zet de beveiliging aan (zonder deze variabele is de site openbaar)
//   TOEGANGSCODE    de code (standaard 555555)
//   TOEGANG_GEHEIM  optioneel: eigen sleutel voor de handtekening
import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const COOKIE = "jt";
const MAX_AGE = 30 * 24 * 60 * 60;

function env(naam: string): string | undefined {
  const v = process.env[naam] ?? (import.meta.env as Record<string, string | undefined>)[naam];
  return typeof v === "string" ? v.trim() : undefined;
}

export function code(): string {
  return env("TOEGANGSCODE") || "555555";
}

export function gateAan(): boolean {
  return (env("TOEGANG") ?? "").toLowerCase() === "aan";
}

function sha(s: string): string {
  return createHash("sha256").update(s).digest("base64url");
}

function geheim(): string {
  return env("TOEGANG_GEHEIM") || sha(`jona-toegang:${code()}`);
}

function teken(payload: string): string {
  return createHmac("sha256", geheim()).update(payload).digest("base64url");
}

function gelijk(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/** Timing-veilige vergelijking van de ingevulde code met de verwachte. */
export function codeKlopt(ingevuld: string): boolean {
  return gelijk(sha(ingevuld.trim()), sha(code()));
}

type Payload = { f: string; exp: number };

export function maakCookie(nu: Date = new Date()): { value: string; maxAge: number } {
  const payload: Payload = { f: sha(code()), exp: Math.floor(nu.getTime() / 1000) + MAX_AGE };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  return { value: `${encoded}.${teken(encoded)}`, maxAge: MAX_AGE };
}

/** True als de cookie geldig is voor de huidige code. Een nieuwe code maakt oude cookies ongeldig. */
export function cookieGeldig(value: string | undefined, nu: Date = new Date()): boolean {
  if (!value) return false;
  const [encoded, handtekening] = value.split(".");
  if (!encoded || !handtekening || !gelijk(teken(encoded), handtekening)) return false;
  try {
    const p = JSON.parse(Buffer.from(encoded, "base64url").toString("utf8")) as Payload;
    if (typeof p.f !== "string" || typeof p.exp !== "number" || p.exp * 1000 <= nu.getTime()) return false;
    return gelijk(p.f, sha(code()));
  } catch {
    return false;
  }
}

/** Alleen paden op de eigen site, zodat ?naar= niet naar elders kan sturen. */
export function veiligPad(naar: unknown): string {
  if (typeof naar !== "string" || !naar.startsWith("/") || naar.startsWith("//") || naar.startsWith("/toegang") || naar.startsWith("/api/")) return "/";
  return naar;
}

// Wat zonder code bereikbaar blijft: de codepagina zelf en de bestanden die ze nodig heeft.
const VRIJ = ["/toegang", "/api/toegang", "/_astro/", "/logo/", "/fonts/", "/favicon.svg", "/favicon.ico", "/apple-touch-icon.png", "/icon-192.png", "/icon-512.png", "/site.webmanifest", "/beeld/og/", "/robots.txt", "/sitemap.xml"];

export function isVrij(pad: string): boolean {
  return VRIJ.some((v) => (v.endsWith("/") ? pad.startsWith(v) : pad === v));
}
