// Afhandeling van de formulieren: kennismaking, AI-scan, testgebruiker en de
// nieuwsbrief van TirgumAI.
// Opslag in Supabase (tabel website_aanvragen, de stack van Jona BI) en een
// melding per mail via de Hostinger Mail API vanaf mail@jonatechnologie.nl.
// Beide zijn optioneel: zonder omgevingsvariabelen slaat de stap over en logt de
// server dat; de bezoeker krijgt alleen een foutmelding als er niets is gelukt.

import { BRONTAAL, isTaal, taalUitPad, type Taal } from "../i18n/talen";
import { BEDANKT } from "./paginas";

export type FormKind = "kennismaking" | "ai-scan" | "testgebruiker" | "nieuwsbrief-tirgumai" | "beta-selaread";

type FieldSpec = { label: string; required?: boolean; max?: number; email?: boolean };

const SPECS: Record<FormKind, Record<string, FieldSpec>> = {
  kennismaking: {
    naam: { label: "Je naam", required: true, max: 120 },
    organisatie: { label: "Organisatie", max: 160 },
    rol: { label: "Je rol", max: 120 },
    soort: { label: "Soort organisatie", max: 60 },
    email: { label: "E-mailadres", required: true, max: 200, email: true },
    telefoon: { label: "Telefoon", max: 40 },
    vorm: { label: "Voorkeur", max: 40 },
    bericht: { label: "Vraag of idee", max: 4000 },
  },
  "ai-scan": {
    naam: { label: "Je naam", required: true, max: 120 },
    rol: { label: "Je rol", max: 120 },
    organisatie: { label: "Organisatie", required: true, max: 160 },
    soort: { label: "Soort organisatie", max: 60 },
    mensen: { label: "Aantal mensen", max: 40 },
    email: { label: "E-mailadres", required: true, max: 200, email: true },
    telefoon: { label: "Telefoon", max: 40 },
    bericht: { label: "Waar naar kijken", max: 4000 },
  },
  testgebruiker: {
    organisatie: { label: "Organisatie", required: true, max: 160 },
    soort: { label: "Soort organisatie", max: 60 },
    aantal: { label: "Aantal relaties", max: 40 },
    naam: { label: "Je naam en rol", required: true, max: 160 },
    email: { label: "E-mailadres", required: true, max: 200, email: true },
    wanneer: { label: "Wanneer", max: 60 },
    bericht: { label: "Waar lopen jullie tegenaan", max: 4000 },
  },
  "nieuwsbrief-tirgumai": {
    email: { label: "E-mailadres", required: true, max: 200, email: true },
  },
  "beta-selaread": {
    rol: { label: "Ik meld me aan als", max: 40 },
    naam: { label: "Naam", required: true, max: 160 },
    email: { label: "E-mailadres", required: true, max: 200, email: true },
    organisatie: { label: "Uitgeverij, tijdschrift of organisatie", max: 160 },
  },
};

const TITELS: Record<FormKind, string> = {
  kennismaking: "Nieuwe aanvraag: kennismaking",
  "ai-scan": "Nieuwe aanvraag: AI-scan",
  testgebruiker: "Nieuwe aanmelding: testgebruiker ActueleGegevens.nl",
  "nieuwsbrief-tirgumai": "Aanmelding nieuwsbrief TirgumAI",
  "beta-selaread": "Nieuwe aanmelding: beta-test Selaread",
};

// Afwijkende ontvanger per formulier; de rest gaat naar MAIL_TO.
const ONTVANGERS: Partial<Record<FormKind, string>> = {
  "nieuwsbrief-tirgumai": "ruben@jonacommunicatie.nl",
};

// Formulieren waarbij het onderwerp precies de titel is, zonder naam erachter.
const KAAL_ONDERWERP = new Set<FormKind>(["nieuwsbrief-tirgumai"]);

export type Parsed = { ok: true; fields: Record<string, string> } | { ok: false; errors: Record<string, string> };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Meldingen voor de bezoeker, in de taal van de pagina waar het formulier op staat.
const MELDINGEN: Record<Taal, {
  verplicht: (label: string) => string;
  teLang: (label: string) => string;
  email: string;
  onleesbaar: string;
  teSnel: string;
  nakijken: string;
  mislukt: string;
}> = {
  nl: {
    verplicht: (l) => `Vul ${l.toLowerCase()} in.`,
    teLang: (l) => `${l} is te lang.`,
    email: "Dat lijkt geen geldig e-mailadres.",
    onleesbaar: "We konden het formulier niet lezen. Probeer het nog eens.",
    teSnel: "Dat ging wat snel achter elkaar. Probeer het over een paar minuten nog eens.",
    nakijken: "Kijk de gemarkeerde velden nog even na.",
    mislukt: "Het versturen lukt nu niet. Mail ons dan rechtstreeks op info@jonatechnologie.nl.",
  },
  en: {
    verplicht: () => "Please fill in this field.",
    teLang: () => "This is too long.",
    email: "That doesn't look like a valid email address.",
    onleesbaar: "We couldn't read the form. Please try again.",
    teSnel: "That was a little fast. Please try again in a few minutes.",
    nakijken: "Please check the highlighted fields.",
    mislukt: "We can't send your message right now. Please email us directly at info@jonatechnologie.nl.",
  },
  de: {
    verplicht: () => "Bitte fülle dieses Feld aus.",
    teLang: () => "Das ist zu lang.",
    email: "Das sieht nicht nach einer gültigen E-Mail-Adresse aus.",
    onleesbaar: "Wir konnten das Formular nicht lesen. Versuch es bitte noch einmal.",
    teSnel: "Das ging etwas schnell hintereinander. Versuch es in ein paar Minuten noch einmal.",
    nakijken: "Bitte prüf die markierten Felder noch einmal.",
    mislukt: "Das Senden klappt gerade nicht. Schreib uns dann direkt an info@jonatechnologie.nl.",
  },
};

/** De taal van een inzending: het verborgen veld _taal, anders het pad van de pagina. */
export function taalVan(raw: Record<string, unknown>, bron: string): Taal {
  if (isTaal(raw._taal)) return raw._taal;
  try {
    return taalUitPad(new URL(bron, "https://x").pathname);
  } catch {
    return BRONTAAL;
  }
}

export function validate(kind: FormKind, raw: Record<string, unknown>, taal: Taal = BRONTAAL): Parsed {
  const m = MELDINGEN[taal];
  const spec = SPECS[kind];
  const fields: Record<string, string> = {};
  const errors: Record<string, string> = {};
  for (const [key, s] of Object.entries(spec)) {
    const v = typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
    if (s.required && !v) errors[key] = m.verplicht(s.label);
    else if (v && s.max && v.length > s.max) errors[key] = m.teLang(s.label);
    else if (v && s.email && !EMAIL_RE.test(v)) errors[key] = m.email;
    fields[key] = v;
  }
  return Object.keys(errors).length ? { ok: false, errors } : { ok: true, fields };
}

// Eenvoudige drempel per adres: hoogstens 5 inzendingen per 10 minuten.
const seen = new Map<string, number[]>();
export function tooMany(ip: string): boolean {
  const now = Date.now();
  const recent = (seen.get(ip) ?? []).filter((t) => now - t < 10 * 60 * 1000);
  recent.push(now);
  seen.set(ip, recent);
  if (seen.size > 5000) seen.clear();
  return recent.length > 5;
}

async function sha256(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

type Env = Record<string, string | undefined>;

async function opslaan(env: Env, kind: FormKind, fields: Record<string, string>, bron: string, ip: string, taal: Taal): Promise<boolean> {
  const url = env.SUPABASE_URL;
  const key = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return false;
  const { naam, email, organisatie, ...rest } = fields;
  const res = await fetch(`${url.replace(/\/$/, "")}/rest/v1/website_aanvragen`, {
    method: "POST",
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      soort: kind,
      naam: naam || email,
      email,
      organisatie: organisatie || null,
      velden: { ...rest, taal },
      bron,
      ip_hash: (await sha256(ip)).slice(0, 32),
    }),
  });
  if (!res.ok) {
    console.error(`[forms] opslaan mislukt: ${res.status}`);
    return false;
  }
  return true;
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
}

// Hostinger Mail API: het token hoort bij de mailbox van MAIL_FROM. De
// resource-id van die mailbox zoeken we één keer op en onthouden we.
const MAIL_API = "https://api.mail.hostinger.com/api/v1";
let mailboxId: string | null = null;

async function zoekMailbox(token: string, adres: string): Promise<string | null> {
  if (mailboxId) return mailboxId;
  const res = await fetch(`${MAIL_API}/me`, { headers: { Authorization: `Bearer ${token}`, Accept: "application/json" } });
  if (!res.ok) {
    console.error(`[forms] mailbox opzoeken mislukt: ${res.status}`);
    return null;
  }
  const body = (await res.json()) as { data?: { mailboxes?: { resourceId: string; address: string }[] } };
  const boxes = body.data?.mailboxes ?? [];
  const box = boxes.find((b) => b.address.toLowerCase() === adres.toLowerCase()) ?? (boxes.length === 1 ? boxes[0] : undefined);
  if (!box) {
    console.error(`[forms] mailbox ${adres} niet gevonden bij dit token`);
    return null;
  }
  mailboxId = box.resourceId;
  return mailboxId;
}

const TAAL_IN_MAIL: Record<Taal, string> = { nl: "Nederlands", en: "Engels", de: "Duits" };

async function mailen(env: Env, kind: FormKind, fields: Record<string, string>, bron: string, taal: Taal): Promise<boolean> {
  const token = env.HOSTINGER_MAIL_TOKEN;
  const to = ONTVANGERS[kind] ?? env.MAIL_TO;
  const from = env.MAIL_FROM || "mail@jonatechnologie.nl";
  if (!token || !to) return false;
  const box = env.HOSTINGER_MAIL_MAILBOX_ID || (await zoekMailbox(token, from));
  if (!box) return false;

  const spec = SPECS[kind];
  const rows = Object.entries(spec)
    .filter(([k]) => fields[k])
    .map(([k, s]) => `<tr><td style="padding:6px 12px 6px 0;color:#3F5866;vertical-align:top;white-space:nowrap">${escapeHtml(s.label)}</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(fields[k]!).replace(/\n/g, "<br>")}</td></tr>`)
    .join("");
  const text = Object.entries(spec)
    .filter(([k]) => fields[k])
    .map(([k, s]) => `${s.label}: ${fields[k]}`)
    .join("\n");
  // Niet-Nederlandse inzendingen: zet de taal er duidelijk bij, zodat je in die taal terugschrijft.
  const taalRegel = taal === BRONTAAL ? "" : `<p style="margin:0 0 16px"><strong>Taal: ${TAAL_IN_MAIL[taal]}</strong> (ingevuld op de ${TAAL_IN_MAIL[taal].toLowerCase()}e site)</p>`;
  const antwoord = fields.email ? `<p style="margin:16px 0 0;color:#3F5866">Antwoorden kan rechtstreeks aan <a href="mailto:${escapeHtml(fields.email)}" style="color:#073A56">${escapeHtml(fields.email)}</a>.</p>` : "";
  const html = `<div style="font-family:system-ui,sans-serif;font-size:15px;color:#073A56;line-height:1.5"><p style="margin:0 0 16px"><strong>${escapeHtml(TITELS[kind])}</strong><br><span style="color:#3F5866">via ${escapeHtml(bron)}</span></p>${taalRegel}<table style="border-collapse:collapse">${rows}</table>${antwoord}</div>`;
  const res = await fetch(`${MAIL_API}/mailboxes/${encodeURIComponent(box)}/send`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      displayName: "Jona website",
      to: to.split(",").map((s) => s.trim()).filter(Boolean),
      subject: `${KAAL_ONDERWERP.has(kind) ? TITELS[kind] : `${TITELS[kind]} (${fields.organisatie || fields.naam})`}${taal === BRONTAAL ? "" : ` [${taal.toUpperCase()}]`}`,
      html,
      text: `${TITELS[kind]}\nvia ${bron}${taal === BRONTAAL ? "" : `\nTaal: ${TAAL_IN_MAIL[taal]}`}\n\n${text}${fields.email ? `\n\nAntwoorden aan: ${fields.email}` : ""}`,
    }),
  });
  if (!res.ok) {
    console.error(`[forms] mailen mislukt: ${res.status}`);
    return false;
  }
  return true;
}

export type Outcome = { status: 200; taal: Taal; body: { ok: true } } | { status: 400 | 429 | 503; taal: Taal; body: { ok: false; message: string; errors?: Record<string, string> } };
type OutcomeZonderTaal = { status: 200; body: { ok: true } } | { status: 400 | 429 | 503; body: { ok: false; message: string; errors?: Record<string, string> } };

export async function handleForm(kind: FormKind, request: Request, env: Env, clientIp: string): Promise<Outcome> {
  const ct = request.headers.get("content-type") ?? "";
  let raw: Record<string, unknown> = {};
  try {
    if (ct.includes("application/json")) raw = (await request.json()) as Record<string, unknown>;
    else raw = Object.fromEntries((await request.formData()).entries());
  } catch {
    const taal = taalVan({}, request.headers.get("referer") ?? "");
    return { status: 400, taal, body: { ok: false, message: MELDINGEN[taal].onleesbaar } };
  }
  const bron = (typeof raw._bron === "string" && raw._bron) || request.headers.get("referer") || "website";
  const taal = taalVan(raw, bron);
  return { taal, ...(await verwerk(kind, raw, env, clientIp, bron, taal)) } as Outcome;
}

async function verwerk(kind: FormKind, raw: Record<string, unknown>, env: Env, clientIp: string, bron: string, taal: Taal): Promise<OutcomeZonderTaal> {
  const m = MELDINGEN[taal];

  // Honingpot: een veld dat mensen niet zien. Gevuld = robot; doe alsof het lukte.
  if (typeof raw.website === "string" && raw.website.trim() !== "") return { status: 200, body: { ok: true } };

  if (tooMany(clientIp)) return { status: 429, body: { ok: false, message: m.teSnel } };

  const parsed = validate(kind, raw, taal);
  if (!parsed.ok) return { status: 400, body: { ok: false, message: m.nakijken, errors: parsed.errors } };

  const [opgeslagen, gemaild] = await Promise.all([
    opslaan(env, kind, parsed.fields, bron, clientIp, taal).catch((e) => (console.error("[forms] opslaan", e), false)),
    mailen(env, kind, parsed.fields, bron, taal).catch((e) => (console.error("[forms] mailen", e), false)),
  ]);
  if (!opgeslagen && !gemaild) {
    console.error(`[forms] ${kind}: geen opslag en geen mail geconfigureerd of beide mislukt`);
    return { status: 503, body: { ok: false, message: m.mislukt } };
  }
  return { status: 200, body: { ok: true } };
}

// Eén route handler voor alle formulieren.
export function makeEndpoint(kind: FormKind) {
  return async ({ request, clientAddress, redirect }: { request: Request; clientAddress: string; redirect: (url: string, status?: 301 | 302 | 303 | 307 | 308) => Response }) => {
    const env = (import.meta.env ?? {}) as Env;
    const merged: Env = { ...process.env, ...env };
    let ip = "onbekend";
    try {
      ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || clientAddress;
    } catch {
      /* clientAddress is niet altijd beschikbaar */
    }
    const out = await handleForm(kind, request, merged, ip);
    const wantsJson = (request.headers.get("accept") ?? "").includes("application/json");
    if (!wantsJson) {
      // Zonder JavaScript: gewone formulierpost, daarna doorsturen.
      if (out.status === 200) return redirect(`${BEDANKT[out.taal]}?soort=${kind}`, 303);
      const msg = encodeURIComponent(out.body.message);
      const back = request.headers.get("referer") ?? BEDANKT[out.taal].replace(/\/[^/]+$/, "");
      const sep = back.includes("?") ? "&" : "?";
      return redirect(`${back.split("#")[0]}${sep}fout=${msg}#aanvraag`, 303);
    }
    return new Response(JSON.stringify(out.body), { status: out.status, headers: { "Content-Type": "application/json" } });
  };
}
