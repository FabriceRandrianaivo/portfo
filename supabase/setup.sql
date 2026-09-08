-- ============================================================
--  Portfolio Fabrice — Setup Supabase
--  À coller dans : Supabase → SQL Editor → New query → Run
--  Idempotent : peut être relancé sans casse.
-- ============================================================

-- 1) TABLES ---------------------------------------------------

-- Nouveaux projets ajoutés via le back office.
-- (Les projets existants restent dans le code ; ceux-ci s'ajoutent.)
create table if not exists public.projects (
  id             uuid primary key default gen_random_uuid(),
  slug           text unique not null,
  year           int  not null default (extract(year from now())::int),
  name           text not null,
  company        text,
  category       text,
  featured       boolean not null default false,
  description_fr text,
  description_en text,
  technologies   text[] not null default '{}',
  links          text[] not null default '{}',
  post_fr        text[] not null default '{}',
  post_en        text[] not null default '{}',
  cover_url      text,
  sort           int not null default 0,
  hidden         boolean not null default false,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
-- pour les installs déjà créées avant l'ajout de la colonne :
alter table public.projects add column if not exists hidden boolean not null default false;

-- Images de galerie, rattachées à un projet par son slug.
-- Fonctionne pour les projets statiques ET les nouveaux.
create table if not exists public.project_images (
  id           uuid primary key default gen_random_uuid(),
  project_slug text not null,
  url          text not null,
  path         text,           -- chemin dans le bucket (pour suppression)
  sort         int not null default 0,
  created_at   timestamptz not null default now()
);
create index if not exists project_images_slug_idx on public.project_images(project_slug);

-- Documents PRIVÉS : certificats & lettres de recommandation.
create table if not exists public.documents (
  id         uuid primary key default gen_random_uuid(),
  title      text not null,
  kind       text not null default 'certificate',  -- 'certificate' | 'recommendation'
  issuer     text,
  path       text not null,    -- chemin dans le bucket privé "documents"
  created_at timestamptz not null default now()
);

-- updated_at automatique sur projects
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;
drop trigger if exists projects_set_updated_at on public.projects;
create trigger projects_set_updated_at
  before update on public.projects
  for each row execute function public.set_updated_at();

-- 2) RLS (Row Level Security) --------------------------------
alter table public.projects       enable row level security;
alter table public.project_images enable row level security;
alter table public.documents      enable row level security;

-- projects : lecture PUBLIQUE, écriture réservée aux connectés (toi)
drop policy if exists "projects public read"  on public.projects;
create policy "projects public read"  on public.projects for select using (true);
drop policy if exists "projects auth write"   on public.projects;
create policy "projects auth write"   on public.projects for all
  to authenticated using (true) with check (true);

-- project_images : lecture PUBLIQUE, écriture réservée aux connectés
drop policy if exists "images public read"  on public.project_images;
create policy "images public read"  on public.project_images for select using (true);
drop policy if exists "images auth write"   on public.project_images;
create policy "images auth write"   on public.project_images for all
  to authenticated using (true) with check (true);

-- documents : PRIVÉ — réservé aux connectés (jamais exposé au public)
drop policy if exists "documents auth only" on public.documents;
create policy "documents auth only" on public.documents for all
  to authenticated using (true) with check (true);

-- 3) STORAGE : buckets + policies ----------------------------
insert into storage.buckets (id, name, public)
  values ('project-images','project-images', true)
  on conflict (id) do update set public = true;
insert into storage.buckets (id, name, public)
  values ('documents','documents', false)
  on conflict (id) do update set public = false;

-- project-images : lecture publique, écriture connectés
drop policy if exists "pimg public read" on storage.objects;
create policy "pimg public read" on storage.objects for select
  using (bucket_id = 'project-images');
drop policy if exists "pimg auth insert" on storage.objects;
create policy "pimg auth insert" on storage.objects for insert
  to authenticated with check (bucket_id = 'project-images');
drop policy if exists "pimg auth update" on storage.objects;
create policy "pimg auth update" on storage.objects for update
  to authenticated using (bucket_id = 'project-images');
drop policy if exists "pimg auth delete" on storage.objects;
create policy "pimg auth delete" on storage.objects for delete
  to authenticated using (bucket_id = 'project-images');

-- documents : PRIVÉ — tout réservé aux connectés (accès via liens signés)
drop policy if exists "docs auth all" on storage.objects;
create policy "docs auth all" on storage.objects for all
  to authenticated
  using (bucket_id = 'documents')
  with check (bucket_id = 'documents');

-- ============================================================
--  FIN. Ensuite, dans le dashboard Supabase :
--  1. Authentication → Users → Add user : ton email + mot de passe
--     (coche "Auto Confirm User") → ce sera ton login /admin.
--  2. Authentication → Sign In / Providers (ou Settings) :
--     DÉSACTIVE "Allow new users to sign up"
--     (personne d'autre ne pourra créer de compte).
-- ============================================================
