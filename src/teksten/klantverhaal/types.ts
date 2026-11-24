// Gedeelde vormen voor de teksten van de klantverhalen
// (src/teksten/klantverhaal/<slug>/<taal>.ts).

/** Een regel in het blok "In het kort": label, waarde, eventueel een tweede regel of een link. */
export interface Feit {
  k: string;
  v: string;
  v2?: string;
  href?: string;
}

/** Een onderdeel in een lijst met vinkjes. */
export interface Onderdeel {
  kop: string;
  tekst: string;
}
