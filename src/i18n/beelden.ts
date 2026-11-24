// Schermafbeeldingen van de apps per taal. De Nederlandse staan in
// public/beeld/, de Engelse en Duitse met dezelfde naam in public/beeld/en/
// en public/beeld/de/ (telkens .png en .webp). Een afbeelding die hier niet
// staat, blijft in elke taal de Nederlandse: zo blijven de schermafbeeldingen
// van klanten (Hadders Media, VBGG, de BC app, Holy Moly!) zoals ze zijn.
//
// Duits valt terug op Engels voor apps zonder Duitse versie (TirgumAI is er
// in het Nederlands en Engels).
import type { Taal } from "./talen";

const VERTAALD: Record<Exclude<Taal, "nl">, string[]> = {
  en: [
    "tirgumai-start", "tirgumai-werkplek-licht", "tirgumai-werkplek-donker", "tirgumai-interlineair",
    "tirgumai-consistentie", "tirgumai-leessite", "tirgumai-template-kerkbijbel", "tirgumai-template-notitiebijbel",
    "tirgumai-template-studiebijbel", "tirgumai-template-eigen-ontwerp",
    "selaread-ontdek", "selaread-uitgeversportaal",
    "jonagiften-jaar", "jonagiften-giftenoverzicht", "jonagiften-mobiel-gift", "jonagiften-mobiel-jaar",
    "jonagiften-mobiel-donateurs", "jonagiften-mobiel-geefpagina",
    "jonabestuur-agenda", "jonabestuur-besluiten", "jonabestuur-notulen", "jonabestuur-vergadermodus",
    "jonabestuur-mobiel-agenda", "jonabestuur-mobiel-besluiten", "jonabestuur-mobiel-punt",
  ],
  de: [
    "selaread-ontdek", "selaread-uitgeversportaal",
    "jonagiften-jaar", "jonagiften-giftenoverzicht", "jonagiften-mobiel-gift", "jonagiften-mobiel-jaar",
    "jonagiften-mobiel-donateurs", "jonagiften-mobiel-geefpagina",
    "jonabestuur-agenda", "jonabestuur-besluiten", "jonabestuur-notulen", "jonabestuur-vergadermodus",
    "jonabestuur-mobiel-agenda", "jonabestuur-mobiel-besluiten", "jonabestuur-mobiel-punt",
  ],
};

const SETS = { en: new Set(VERTAALD.en), de: new Set(VERTAALD.de) };
const VOLGORDE: Record<Taal, Exclude<Taal, "nl">[]> = { nl: [], en: ["en"], de: ["de", "en"] };

/**
 * Het pad van een afbeelding in de taal van de pagina: "/beeld/jonabestuur-agenda.webp"
 * wordt op de Duitse site "/beeld/de/jonabestuur-agenda.webp", als die er is.
 * Werkt met en zonder extensie.
 */
export function beeld(pad: string, taal: Taal): string {
  const m = pad.match(/^\/beeld\/([a-z0-9-]+)(\.[a-z]+)?$/);
  if (!m) return pad;
  const [, naam, ext = ""] = m;
  const t = VOLGORDE[taal].find((x) => SETS[x].has(naam));
  return t ? `/beeld/${t}/${naam}${ext}` : pad;
}

/** Of deze afbeelding in deze taal een eigen versie heeft (voor alt-teksten die het Nederlandse scherm beschrijven). */
export function heeftVertaling(naam: string, taal: Taal): boolean {
  return beeld(`/beeld/${naam}`, taal) !== `/beeld/${naam}`;
}
