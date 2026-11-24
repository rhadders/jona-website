# Jona · zinvolle technologie — website

De website van Jona (jonatechnology.com, in het Nederlands, Engels en Duits), eerste versie: homepage, Over Jona,
Plan een kennismaking, de productpagina's van Jona Giften, ActueleGegevens.nl, TirgumAI en
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

## Talen en adressen

Hoofddomein is **jonatechnology.com**, met een map per taal: `/nl`, `/en` en
`/de`. Doorverwijzingen (`src/lib/adressen.ts`, vanuit de middleware):

- `jonatechnologie.nl` en `www.` → `jonatechnology.com/nl/…`, met behoud van het pad (301).
- Het kale domein `/` → de taal van de browser (302, `Vary: Accept-Language`); zonder overeenkomst Engels.
- Oude adressen zonder taal (`/over-jona`, `/bedankt`) → `/nl/…` (301).

Welke pagina in welke taal bestaat, staat in `src/lib/paginas.ts` (per pagina
`talen.nl`, `talen.en`, `talen.de` met adres, titel en omschrijving). Daaruit
volgen de taalwisselaar in de kop, de hreflang-links, de sitemap en de
gestructureerde data. Engels en Duits krijgen alleen pagina's voor apps die in
die taal te gebruiken zijn: `beschikbaar: ["nl"]` bij ActueleGegevens.nl houdt
die app uit het menu, de voet en de lijsten van de andere talen. Engels is
Amerikaans Engels; in het Duits spreken we de lezer aan met *du*.

Een pagina vertalen gaat zo (voorbeeld: de homepage):

- de opmaak, één keer: `src/views/Home.astro`;
- de teksten per taal: `src/teksten/home/nl.ts`, `en.ts`, `de.ts` (zelfde vorm, gecontroleerd door TypeScript);
- de routes, drie regels per taal: `src/pages/nl/index.astro`, `src/pages/en/index.astro`, `src/pages/de/index.astro`;
- het adres, de titel en de omschrijving in `src/lib/paginas.ts`;
- een deelplaatje: kaart in `scripts/maak-og.mjs`, dan `npm run og -- en/home` en de naam in `OG_VERTAALD`.

Alle pagina's bestaan in drie talen, met twee uitzonderingen:

- ActueleGegevens.nl is er alleen in het Nederlands.
- Voor de Duitse markt bieden we alleen onze eigen software aan, we bouwen daar
  niet in opdracht. De Duitse site heeft daarom geen AI-scan, geen
  kennismakingspagina, geen klantverhalen, geen blok over maatwerk/EchoNova
  (homepage, Software) en geen EchoNova in de voet. De knop rechtsboven heet er
  "Kontakt" en gaat naar het contactblok op Über Jona, dat over vragen over de
  software gaat. Dit hangt aan `MAATWERK` in `src/i18n/talen.ts`.

Schermafbeeldingen van de apps staan per taal in `public/beeld/en/` en
`public/beeld/de/` (zelfde naam als de Nederlandse); `src/i18n/beelden.ts`
houdt bij welke er zijn en kiest per pagina de juiste (Duits valt terug op
Engels, voor TirgumAI dat geen Duitse versie heeft). De schermen van Jona
Bestuur komen uit de repo jona-bestuur (`public/homepage/en|de`), die van Jona
Giften uit `npm run schermen` in jona-giften (uitgebreid met drie
telefoonschermen), die van Selaread en TirgumAI uit de apps zelf, lokaal met
voorbeeldgegevens. Het apparatenplaatje van Selaread (iPad en iPhone) is met
de hand gemaakt en nog Nederlands. Schermafbeeldingen van klanten
(Hadders Media, VBGG, de BC app, Holy Moly!) blijven Nederlands: dat zijn hun
echte, Nederlandse producten.

Korte teksten die overal terugkomen (menu, voet, Let's talk-blok, 404) staan in
`src/i18n/ui.ts`. De apps van Jona Tools hebben per taal een eigen naam en
website (Jona Giften = Jona Donations = Jona Spenden, Jona Bestuur = Jona Board =
Jona Vorstand, Jona Roosters = Jona Schedules = Jona Dienstplan; zie
jonatools.com); die staan met hun aanmeldlinks in `src/i18n/apps.ts`. Links naar eigen pagina's gaan via `link("over-jona", taal)`:
bestaat een pagina nog niet in die taal, dan wijst de link naar de Nederlandse.
Formulieren sturen de taal mee (`_taal`): foutmeldingen en de bedankpagina
volgen die taal, en een Engelse of Duitse aanvraag krijgt `[EN]` of `[DE]` in
het onderwerp van de mail en `taal` in `velden` in Supabase.

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
  middleware.ts             doorverwijzingen (adressen.ts) en de toegangscode
  i18n/                     talen.ts (talen, lang-codes, bedragen), ui.ts (menu, voet, Let's talk, 404), apps.ts (appnamen en -sites per taal)
  views/                    opmaak van elke pagina, één keer voor alle talen (klantverhalen in views/klantverhaal/)
  teksten/                  teksten per pagina en taal: <pagina>/nl.ts, en.ts, de.ts
  pages/nl/                 routes (drie regels): index, software, jonagiften, jonabestuur, selaread, actuelegegevens, tirgumai, ai-scan, advies, over-jona, bedankt
  pages/nl/klantverhaal/    klantverhalen: hadders-media, holy-moly, vbgg en bc-app
  pages/en/                 software, jona-donations, jona-board, selaread, tirgumai, ai-scan, contact, about, thank-you, case-studies/…
  pages/de/                 software, jona-spenden, jona-vorstand, selaread, tirgumai, ueber-uns, danke
  pages/                    toegang, 404, sitemap.xml, llms.txt
  pages/api/                de vijf formulier-endpoints en /api/toegang
  lib/paginas.ts            alle pagina's per taal: adres, titel, omschrijving
  lib/adressen.ts           oud domein, kale / en oude adressen doorverwijzen
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
