# Jona · zinvolle technologie — website

De website van Jona (jonatechnologie.nl), eerste versie: homepage, Over Jona,
Plan een kennismaking, de productpagina's van ActueleGegevens.nl, TirgumAI en
Selaread, de AI-scan en de klantverhalen van Hadders Media, Holy Moly!, de Vakantieweken VBGG en
de BC app van de Bijbelse Cultuur Stichting.

Gebouwd met [Astro](https://astro.build) met de node-adapter: de pagina's
worden op de server gerenderd, zodat de toegangscode (zie hieronder) elke
aanvraag kan controleren; de formulier-endpoints staan onder `/api/`. Geen
framework in de browser, één klein script voor het menu en de formulieren. Schriften (Lora, Jost) worden vanaf de eigen origin
geladen; er gaat niets naar Google of een ander CDN.

## Lokaal

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run start      # draait de gebouwde site met node
```

Kopieer `.env.example` naar `.env` voor de formulieren. Zonder die variabelen
werkt de site, maar krijgt een inzender een nette foutmelding met het
e-mailadres als alternatief.

## Toegangscode (optioneel, standaard uit)

De site is openbaar. Met `TOEGANG=aan` komt de hele site achter een code, net als de wachtcode van
ActueleGegevens.nl. `src/middleware.ts` laat zonder geldige cookie op elk
adres de codepagina zien (`src/pages/toegang.astro`, status 401) en zet
`X-Robots-Tag: noindex`. Wie de juiste code invult op `/api/toegang`, krijgt
een getekende cookie van dertig dagen (`src/lib/toegang.ts`); de code zelf
staat nooit in de cookie en een nieuwe code maakt oude cookies ongeldig.
Maximaal tien pogingen per tien minuten per adres.

- `TOEGANG=aan` zet de beveiliging aan; zonder deze variabele is de site openbaar.
- `TOEGANGSCODE` is de code (standaard `555555`).
- Bestanden in `public/` (beelden, pdf's) zijn ook zonder code bereikbaar;
  dat is een bewuste keuze, het is een drempel en geen kluis.

## Formulieren

Vijf formulieren, één afhandeling (`src/lib/forms.ts`):

| formulier      | endpoint             | waar                              |
| -------------- | -------------------- | --------------------------------- |
| kennismaking   | `/api/kennismaking`  | homepage, Over Jona, Advies       |
| AI-scan        | `/api/ai-scan`       | AI-scan                           |
| testgebruiker  | `/api/testgebruiker` | ActueleGegevens.nl (beta)         |
| nieuwsbrief TirgumAI | `/api/nieuwsbrief-tirgumai` | TirgumAI (op de hoogte blijven) |
| beta Selaread  | `/api/beta-selaread`  | Selaread (beta-test, lezers en uitgevers) |

Elke inzending wordt opgeslagen in de Supabase-stack van Jona BI (Dokploy
op de VPS, tabel `website_aanvragen`, schema in `supabase/schema.sql`) en
gemaild via de Hostinger Mail API vanaf `mail@jonatechnologie.nl` naar
`MAIL_TO`. Het mailtoken maak je in hPanel bij het e-maildomein onder
Agentic Mail → API access; de site zoekt de mailbox-id zelf op.
Uitzondering: de nieuwsbrief van TirgumAI gaat naar ruben@jonacommunicatie.nl
met als onderwerp "Aanmelding nieuwsbrief TirgumAI" (vast in `forms.ts`).
Bestaat de tabel al, draai dan het `alter table` onderaan `schema.sql`, zodat
de soorten `nieuwsbrief-tirgumai` en `beta-selaread` zijn toegestaan.
Lukt één van de twee, dan ziet de bezoeker een bedankpagina; lukt geen van
beide, dan een foutmelding. Verder: honingpot-veld, maximaal vijf inzendingen
per tien minuten per adres, validatie op de server én in de browser.
Zonder JavaScript werkt het formulier ook (gewone post, daarna doorsturen).

Omgevingsvariabelen: zie `.env.example`. De service-rolesleutel van Supabase
blijft op de server; de site gebruikt geen anon-sleutel.

## Deploy (Hostinger, Node.js-app)

De site draait als Node.js-app op het Unlimited-webhostingplan van
Hostinger, website `jonatechnologie.nl` (account `u261928307`). Hostinger
bouwt de app zelf: `npm install`, `npm run build`, en start daarna
`dist/server/entry.mjs` (framework Astro, Node 22). Een nieuwe versie
uitrollen kan met de Hostinger-MCP (`hosting_deploy`, map van dit project,
type `nodejs`, appType `astro`, outputDirectory `dist`, buildScript `build`
en entryFile `server/entry.mjs`; laat je het startbestand weg, dan start de
app niet en geeft de site een 503) of met de Hostinger CLI:

```bash
hostinger up . --domain jonatechnologie.nl --yes
```

Vooraf `dist/` weggooien, want de map wordt meegestuurd zoals hij is
(`node_modules`, `.git` en `.env` worden overgeslagen).

1. Omgevingsvariabelen staan in hPanel bij de Node.js-app (of via
   `hosting_nodejs_replace-environment-variables`, dat vervangt de hele
   set): `TOEGANGSCODE`, en voor de formulieren de variabelen uit
   `.env.example`. Na een wijziging herstart de app vanzelf.
2. Draai `supabase/schema.sql` één keer in de SQL Editor van het
   Supabase-project.
3. De site is openbaar. Tijdelijk achter de code zetten kan met
   `TOEGANG=aan`.

De `Dockerfile` blijft bruikbaar voor een VPS met Dokploy: bouwmethode
Dockerfile, poort `4321`.

## Structuur

```
src/
  layouts/Base.astro        kop, voet, meta, fonts
  components/               Header, Footer, LetsTalk (navy blok), Icon, FormScript
  middleware.ts             toegangscode: zonder cookie overal de codepagina
  pages/                    index, over-jona, advies, ai-scan, actuelegegevens, tirgumai, selaread, toegang, bedankt, 404
  pages/klantverhaal/       klantverhalen: hadders-media, holy-moly, vbgg en bc-app
  pages/api/                de vijf formulier-endpoints en /api/toegang
  lib/forms.ts              validatie, opslag, mail
  lib/toegang.ts            code vergelijken, cookie tekenen en controleren
  styles/global.css         tokens en basisopmaak (Jona design system)
public/
  logo/                     jona-logo.svg, jona-logo-wit.svg, jona-mark.svg (+ gelaagd)
  beeld/                    schermafbeeldingen (png + webp), og.png
  downloads/                informatiesheets (pdf), nu de Drukcase-sheet van TirgumAI in NL en EN
  video/                    duif (voor een latere animatie bij Waarom Jona), video's bij klantverhalen
  fonts/                    Lora 500, Jost 400/500/600
supabase/schema.sql         tabel voor de formulieren
```

## Vormgeving

Alles loopt via de tokens in `src/styles/global.css`: navy als inkt, teal als
enige accent, knoppen zijn pillen, focus is een teal rand met zachte ring,
stralen 8/12/18/28. Geen harde kleuren in pagina's, geen unicode als icoon
(Lucide-glyphs in `Icon.astro`). De enige uitzondering is de fictieve
huisstijl van "De Groene Weide" in de whitelabel-illustratie op de
productpagina.

## Carrousel "Gemaakt voor een klant"

Op de homepage staan de klantverhalen in een carrousel: een horizontale baan
met snappunten (`.slides` in `index.astro`), zodat vegen op een telefoon
zonder JavaScript werkt. Met JavaScript komen de bolletjes en de pijlen erbij.
Een klant toevoegen: een `<article class="slide …">` erbij in de baan en een
bolletje erbij in `.dots`; de rest volgt vanzelf. De carrousel loopt rond: het
script zet een kopie van de laatste slide vooraan en van de eerste achteraan.

## Nog in te vullen

- Het klantverhaal van VOO (de slide op de homepage linkt nu naar Advies).
- KvK-nummer in de voet, als dat erbij moet.
- Analytics, als gewenst (bijvoorbeeld Plausible, zonder cookies).
