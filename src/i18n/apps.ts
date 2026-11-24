// De apps van Jona Tools hebben per taal een eigen naam en eigen website
// (zie jonatools.com). Gebruik deze namen en adressen in plaats van ze in een
// pagina te typen, zodat ze overal gelijk blijven.
import type { Taal } from "./talen";

export interface AppInTaal {
  naam: string;
  /** Landingspagina van de app in deze taal. */
  site: string;
  /** Direct naar het aanmelden voor de gratis proefperiode, in deze taal. */
  aanmelden: string;
}

export type AppId = "jonagiften" | "jonabestuur" | "jonaroosters";

export const APPS: Record<AppId, Record<Taal, AppInTaal>> = {
  jonagiften: {
    nl: { naam: "Jona Giften", site: "https://jonagiften.nl", aanmelden: "https://jonagiften.nl/aanmelden" },
    en: { naam: "Jona Donations", site: "https://donations.jonatools.com", aanmelden: "https://donations.jonatools.com/taal/en?terug=/aanmelden" },
    de: { naam: "Jona Spenden", site: "https://spenden.jonatools.com", aanmelden: "https://spenden.jonatools.com/taal/de?terug=/aanmelden" },
  },
  jonabestuur: {
    nl: { naam: "Jona Bestuur", site: "https://jonabestuur.nl", aanmelden: "https://jonabestuur.nl/aanmelden" },
    en: { naam: "Jona Board", site: "https://board.jonatools.com", aanmelden: "https://board.jonatools.com/taal/en?terug=/aanmelden" },
    de: { naam: "Jona Vorstand", site: "https://vorstand.jonatools.com", aanmelden: "https://vorstand.jonatools.com/taal/de?terug=/aanmelden" },
  },
  // Nog geen pagina op deze site; hier alvast voor wanneer die er komt.
  jonaroosters: {
    nl: { naam: "Jona Roosters", site: "https://jonaroosters.nl", aanmelden: "https://schedules.jonatools.com/taal/nl?terug=/aanmelden" },
    en: { naam: "Jona Schedules", site: "https://schedules.jonatools.com", aanmelden: "https://schedules.jonatools.com/taal/en?terug=/aanmelden" },
    de: { naam: "Jona Dienstplan", site: "https://dienstplan.jonatools.com", aanmelden: "https://dienstplan.jonatools.com/taal/de?terug=/aanmelden" },
  },
};

export const app = (id: AppId, taal: Taal): AppInTaal => APPS[id][taal];

/** Het adres zonder https:// voor in beeld, zoals in de nagebootste adresbalk. */
export const kaalAdres = (url: string): string => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
