import { defineMiddleware } from "astro:middleware";
import { COOKIE, cookieGeldig, gateAan, isVrij } from "./lib/toegang";

// Zolang de site achter de toegangscode staat, krijgt elke bezoeker zonder
// geldige cookie de codepagina te zien (op hetzelfde adres) en wordt de site
// niet geïndexeerd.
export const onRequest = defineMiddleware(async (context, next) => {
  if (!gateAan()) return next();

  const { pathname, search } = context.url;
  let res: Response;
  if (isVrij(pathname) || cookieGeldig(context.cookies.get(COOKIE)?.value)) {
    res = await next();
  } else if (context.request.method === "GET" || context.request.method === "HEAD") {
    const naar = encodeURIComponent(pathname + search);
    res = await context.rewrite(new URL(`/toegang?naar=${naar}`, context.url));
  } else {
    res = new Response(JSON.stringify({ ok: false, message: "Geen toegang. Vul eerst de toegangscode in." }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    // Nooit door een CDN of proxy laten bewaren: achter de code is elke pagina persoonlijk.
    if (!isVrij(pathname) || pathname.startsWith("/toegang") || pathname.startsWith("/api/")) res.headers.set("Cache-Control", "private, no-store");
  } catch {
    /* sommige responses hebben onveranderlijke headers */
  }
  return res;
});
