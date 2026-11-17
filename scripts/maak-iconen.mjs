// Maakt de favicons uit de duif in public/logo/jona-mark.svg, in hetzelfde
// ontwerp als Jona Bestuur en Jona Giften: de duif zoals hij is, in navy en
// teal, zonder dikkere lijnen en zonder witte variant.
// Uitvoeren: npm run iconen
// - favicon.svg: de duif zelf (zonder de c2pa-metadata).
// - favicon.ico (16, 32, 48 px) voor oudere browsers, Google en deelvoorbeelden.
// - apple-touch-icon.png (180) en icon-192/512.png: de duif op wit.
import { readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import sharp from "sharp";

const PUB = join(resolve(import.meta.dirname, ".."), "public");
const mark = readFileSync(join(PUB, "logo/jona-mark.svg"), "utf8");
const pad = (kleur) => mark.match(new RegExp(`<path fill="${kleur}" d="([^"]+)"`, "i"))[1];
const VLEUGEL = pad("#2BBCC0"), LIJN = pad("#073A56");
const VB = [604, 22, 232, 232];

const duif = `<path fill="#2BBCC0" d="${VLEUGEL}"/><path fill="#073A56" d="${LIJN}"/>`;

// Klein: transparant, precies het logo.
const klein = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${VB.join(" ")}">${duif}</svg>\n`;

// Groot: de duif op een wit vlak met ruimte eromheen.
const groot = (rand) => {
  const [x, y, w, h] = VB, r = w * rand;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x - r} ${y - r} ${w + 2 * r} ${h + 2 * r}"><rect x="${x - r}" y="${y - r}" width="${w + 2 * r}" height="${h + 2 * r}" fill="#FFFFFF"/>${duif}</svg>`;
};

const png = (svg, s) => sharp(Buffer.from(svg), { density: 600 }).resize(s, s).png({ compressionLevel: 9 }).toBuffer();

writeFileSync(join(PUB, "favicon.svg"), klein);

// ICO met PNG-afbeeldingen erin.
const maten = [16, 32, 48];
const beelden = await Promise.all(maten.map((s) => png(klein, s)));
const kop = Buffer.alloc(6 + 16 * maten.length);
kop.writeUInt16LE(0, 0); kop.writeUInt16LE(1, 2); kop.writeUInt16LE(maten.length, 4);
let plek = kop.length;
maten.forEach((s, i) => {
  const o = 6 + 16 * i;
  kop.writeUInt8(s, o); kop.writeUInt8(s, o + 1); kop.writeUInt16LE(1, o + 4); kop.writeUInt16LE(32, o + 6);
  kop.writeUInt32LE(beelden[i].length, o + 8); kop.writeUInt32LE(plek, o + 12);
  plek += beelden[i].length;
});
writeFileSync(join(PUB, "favicon.ico"), Buffer.concat([kop, ...beelden]));

// Apple zet zelf ronde hoeken; Android-iconen krijgen extra rand voor 'maskable'.
writeFileSync(join(PUB, "apple-touch-icon.png"), await png(groot(0.16), 180));
writeFileSync(join(PUB, "icon-192.png"), await png(groot(0.22), 192));
writeFileSync(join(PUB, "icon-512.png"), await png(groot(0.22), 512));
console.log("✓ favicon.svg, favicon.ico, apple-touch-icon.png, icon-192.png, icon-512.png");
