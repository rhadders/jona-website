-- Formulieren van de website: één tabel voor alle soorten aanvragen.
-- Draai dit één keer in de SQL Editor van het Supabase-project.
-- De website schrijft met de service role; er zijn bewust geen policies,
-- zodat de anon-sleutel (die niet in de site zit) niets kan.

create table if not exists public.website_aanvragen (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  soort       text not null check (soort in ('kennismaking', 'ai-scan', 'testgebruiker', 'nieuwsbrief-tirgumai', 'beta-selaread')),
  naam        text not null,
  email       text not null,
  organisatie text,
  velden      jsonb not null default '{}'::jsonb,   -- de overige velden van het formulier
  bron        text,                                  -- de pagina waar het formulier stond
  ip_hash     text,                                  -- gehasht, voor misbruikdetectie; geen adres
  status      text not null default 'nieuw' check (status in ('nieuw', 'opgepakt', 'afgerond', 'spam'))
);

comment on table public.website_aanvragen is 'Inzendingen van de formulieren op jonatechnologie.nl';

alter table public.website_aanvragen enable row level security;

create index if not exists website_aanvragen_created_at_idx on public.website_aanvragen (created_at desc);
create index if not exists website_aanvragen_soort_status_idx on public.website_aanvragen (soort, status);

-- Bestaat de tabel al? Dan alleen de check-constraint bijwerken voor de nieuwsbrief van TirgumAI:
-- alter table public.website_aanvragen drop constraint website_aanvragen_soort_check;
-- alter table public.website_aanvragen add constraint website_aanvragen_soort_check
--   check (soort in ('kennismaking', 'ai-scan', 'testgebruiker', 'nieuwsbrief-tirgumai', 'beta-selaread'));
