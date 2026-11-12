// Maakt de deelplaatjes (Open Graph, 1200 x 630) voor elke openbare pagina.
// Uitvoeren: npm run og   (nodig: Google Chrome op deze Mac)
// Uitvoer: public/beeld/og/<pagina>.png. Base.astro kiest het plaatje bij de
// pagina via ogPad() in src/lib/paginas.ts.
// Teksten komen van de pagina's zelf (bovenregel en hoofdkop).
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync, rmSync, existsSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";
import sharp from "sharp";

const ROOT = resolve(import.meta.dirname, "..");
const PUB = join(ROOT, "public");
const UIT = join(PUB, "beeld", "og");
const CHROME = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const f = (p) => pathToFileURL(join(PUB, p)).href;

// De duif uit het logo, als losse paden, zodat hij in elke kleur kan.
const mark = readFileSync(join(PUB, "logo/jona-mark.svg"), "utf8");
const pad = (kleur) => mark.match(new RegExp(`<path fill="${kleur}" d="([^"]+)"`, "i"))[1];
const VLEUGEL = pad("#2BBCC0"), LIJN = pad("#073A56");
const duif = (lijn) => `<svg class="duif" viewBox="604 22 232 232"><path fill="#2BBCC0" d="${VLEUGEL}"/><path fill="${lijn}" d="${LIJN}"/></svg>`;
const VLAK = { mist: ["#f5f8fa", "#073A56"], teal: ["#dff5f6", "#073A56"], navy: ["#073a56", "#FFFFFF"] };

const KAARTEN = [
  { slug: "home", eyebrow: "Missiegedreven software & AI", kop: "Zinvolle technologie voor bedrijven en organisaties met een missie", beeld: { soort: "duif", vlak: "mist" } },
  { slug: "selaread", eyebrow: "Selaread", kop: "De leeskiosk voor christelijk Nederland", beeld: { soort: "los", src: "beeld/selaread-apparaten.png" } },
  { slug: "actuelegegevens", eyebrow: "ActueleGegevens.nl", kop: "Je relatiebestand opschonen was nog nooit zó simpel", beeld: { soort: "scherm", src: "beeld/actuelegegevens-site.png" } },
  { slug: "tirgumai", eyebrow: "TirgumAI", kop: "Vers voor vers de Bijbel vertalen, met hulp van AI", beeld: { soort: "scherm", src: "beeld/tirgumai-werkplek-licht.png" } },
  { slug: "ai-scan", eyebrow: "De AI-scan", kop: "Eén dag meekijken, één plan waar je mee verder kunt", beeld: { soort: "duif", vlak: "teal" }, label: "€ 795 excl. btw en reiskosten" },
  { slug: "advies", eyebrow: "Kennismaken", kop: "Een half uur over hoe software jullie werk leuker kan maken", beeld: { soort: "duif", vlak: "navy" }, label: "Gratis · online of bij jullie aan tafel" },
  { slug: "over-jona", eyebrow: "Over Jona", kop: "Softwareoplossingen die bedrijven en organisaties helpen het goede te doen", beeld: { soort: "team" } },
  { slug: "klantverhaal-hadders-media", eyebrow: "Klantverhaal · Hadders Media", kop: "Een afscheid volgen, waar je ook bent en welke taal je ook spreekt", beeld: { soort: "scherm", src: "beeld/hadders-media-beheer.png" } },
  { slug: "klantverhaal-holy-moly", eyebrow: "Klantverhaal · Holy Moly!", kop: "Een game app voor een kaartspel van bijbelse proporties", beeld: { soort: "scherm", src: "beeld/holy-moly-showcase.png" } },
  { slug: "klantverhaal-vbgg", eyebrow: "Klantverhaal · Vakantieweken VBGG", kop: "Van papieren administratie naar één portal voor elke doelgroep", beeld: { soort: "scherm", src: "beeld/vbgg-website.png" } },
  { slug: "klantverhaal-bc-app", eyebrow: "Klantverhaal · Bijbelse Cultuur Stichting", kop: "Een app die de voorwerpen uit de Bijbel laat spreken", beeld: { soort: "scherm", src: "beeld/bc-app.png" } },
];

function beeldHtml(b) {
  switch (b.soort) {
    case "scherm":
      return `<div class="scherm"><img src="${f(b.src)}"></div>`;
    case "los":
      return `<img class="los" src="${f(b.src)}">`;
    case "team":
      return `<div class="team">${["ruben-hadders", "gijsbert-legemaat", "jelle-pals"]
        .map((n) => `<img src="${f(`beeld/team-${n}.png`)}">`).join("")}</div>`;
    default:
      return duif(VLAK[b.vlak ?? "mist"][1]);
  }
}

const html = (k) => `<!doctype html><html lang="nl" class="${k.beeld.soort === "team" ? "breed" : ""}"><head><meta charset="utf-8"><style>
@font-face { font-family: Lora; font-weight: 500; src: url(${f("fonts/lora-latin-500-normal.woff2")}); }
@font-face { font-family: Jost; font-weight: 400; src: url(${f("fonts/jost-latin-400-normal.woff2")}); }
@font-face { font-family: Jost; font-weight: 500; src: url(${f("fonts/jost-latin-500-normal.woff2")}); }
* { margin: 0; box-sizing: border-box; }
html, body { width: 1200px; height: 630px; overflow: hidden; background: #fff; }
body { font-family: Jost, sans-serif; color: #073a56; position: relative; }
.tekst { position: absolute; left: 72px; top: 64px; bottom: 60px; width: 540px; display: flex; flex-direction: column; }
.logo { height: 54px; width: auto; align-self: flex-start; }
.midden { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 22px; padding: 28px 0 12px; }
.eyebrow { font-weight: 500; font-size: 19px; letter-spacing: 0.14em; text-transform: uppercase; color: #1a7f83; }
h1 { font-family: Lora, serif; font-weight: 500; font-size: 54px; line-height: 1.1; letter-spacing: -0.015em; }
.label { align-self: flex-start; font-size: 21px; padding: 9px 20px; border-radius: 999px; background: #dff5f6; color: #14666a; }
.voet { display: flex; align-items: center; gap: 14px; font-size: 21px; color: #3f5866; }
.voet::before { content: ""; width: 40px; height: 4px; border-radius: 2px; background: #2bbcc0; }
.vlak { position: absolute; left: 660px; top: 0; right: 0; bottom: 0; background: #f5f8fa; overflow: hidden; }
.vlak::after { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: #2bbcc0; }
.scherm { position: absolute; left: 48px; top: 70px; width: 640px; border-radius: 14px; overflow: hidden;
  box-shadow: 0 30px 60px -20px rgba(7,58,86,.35), 0 0 0 1px rgba(7,58,86,.08); background: #fff; }
.scherm img { display: block; width: 100%; }
.los { position: absolute; left: 30px; right: 30px; top: 30px; bottom: 30px; width: calc(100% - 60px); height: calc(100% - 60px); object-fit: contain; }
.duif { position: absolute; left: 50%; top: 50%; width: 420px; transform: translate(-50%, -50%); }
/* Over Jona: tekst boven over de volle breedte, het team breed eronder. */
.breed .tekst { width: auto; right: 72px; bottom: auto; top: 56px; gap: 30px; }
.breed .midden { gap: 14px; flex: none; padding: 0; }
.breed h1 { font-size: 52px; }
.breed .voet { position: absolute; right: 0; top: 14px; }
.breed .vlak { left: 0; top: 330px; }
.breed .vlak::after { width: auto; height: 6px; right: 0; bottom: auto; }
.team { position: absolute; left: 140px; right: 140px; bottom: 0; height: 296px; display: flex; align-items: flex-end; justify-content: space-between; }
.team img { height: 100%; width: auto; }
</style></head><body>
<div class="tekst">
  <img class="logo" src="${f("logo/jona-logo.svg")}">
  <div class="midden">
    <div class="eyebrow">${k.eyebrow}</div>
    <h1>${k.kop}</h1>
    ${k.label ? `<div class="label">${k.label}</div>` : ""}
  </div>
  <div class="voet">jonatechnologie.nl</div>
</div>
<div class="vlak" style="background:${VLAK[k.beeld.vlak ?? "mist"][0]}">${beeldHtml(k.beeld)}</div>
<script>
  // Kop verkleinen tot hij in de tekstkolom past.
  document.fonts.ready.then(() => {
    const h = document.querySelector("h1"), m = document.querySelector(".midden");
    let s = parseInt(getComputedStyle(h).fontSize); while (m.scrollHeight > m.clientHeight && s > 36) { s -= 2; h.style.fontSize = s + "px"; }
  });
</script>
</body></html>`;

if (!existsSync(CHROME)) throw new Error(`Chrome niet gevonden op ${CHROME}. Zet CHROME=/pad/naar/chrome.`);
const tmp = mkdtempSync(join(tmpdir(), "jona-og-"));
try {
  for (const k of KAARTEN) {
    const bron = join(tmp, `${k.slug}.html`), ruw = join(tmp, `${k.slug}.png`);
    writeFileSync(bron, html(k));
    execFileSync(CHROME, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--force-device-scale-factor=1",
      "--allow-file-access-from-files", "--virtual-time-budget=3000", "--window-size=1200,630", `--screenshot=${ruw}`,
      pathToFileURL(bron).href], { stdio: "ignore" });
    const doel = join(UIT, `${k.slug}.png`);
    await sharp(ruw).resize(1200, 630).png({ palette: true, quality: 90, effort: 10 }).toFile(doel);
    console.log("✓", doel.replace(ROOT + "/", ""));
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}
