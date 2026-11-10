import type { APIRoute } from "astro";
import { COOKIE, codeKlopt, gateAan, maakCookie, veiligPad } from "../../lib/toegang";

export const prerender = false;

// Maximaal tien pogingen per tien minuten per adres.
const pogingen = new Map<string, number[]>();
function teVaak(ip: string): boolean {
  const nu = Date.now();
  const lijst = (pogingen.get(ip) ?? []).filter((t) => nu - t < 10 * 60 * 1000);
  lijst.push(nu);
  pogingen.set(ip, lijst);
  if (pogingen.size > 5000) pogingen.clear();
  return lijst.length > 10;
}

async function lees(request: Request): Promise<Record<string, unknown>> {
  const type = request.headers.get("content-type") ?? "";
  if (type.includes("application/json")) return (await request.json()) as Record<string, unknown>;
  return Object.fromEntries(await request.formData());
}

export const GET: APIRoute = ({ redirect }) => redirect("/toegang", 303);

export const POST: APIRoute = async ({ request, cookies, clientAddress, redirect }) => {
  const raw = await lees(request).catch(() => ({}));
  const naar = veiligPad(raw.naar);
  if (!gateAan()) return redirect(naar, 303);

  let ip = "onbekend";
  try {
    ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || clientAddress;
  } catch {
    /* clientAddress is niet altijd beschikbaar */
  }
  const terug = (fout: string) => redirect(`/toegang?fout=${fout}&naar=${encodeURIComponent(naar)}`, 303);
  if (teVaak(ip)) return terug("2");

  const code = typeof raw.code === "string" ? raw.code : "";
  if (!code || !codeKlopt(code)) return terug("1");

  const { value, maxAge } = maakCookie();
  cookies.set(COOKIE, value, {
    httpOnly: true,
    sameSite: "lax",
    secure: import.meta.env.PROD,
    path: "/",
    maxAge,
  });
  return redirect(naar, 303);
};
