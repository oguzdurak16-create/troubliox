-- Troublio Experience Graph v1
-- Apply to a dedicated Troublio Supabase project after review.
-- Raw experience rows are private. The Next.js API route uses a server-only
-- Supabase secret key and returns only aggregates.

create extension if not exists pgcrypto;

create table if not exists public.troublio_products (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  brand text not null check (char_length(brand) between 1 and 100),
  model text not null check (char_length(model) between 1 and 160),
  category text not null check (char_length(category) between 1 and 100),
  created_at timestamptz not null default now()
);

create table if not exists public.troublio_experiences (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.troublio_products(id) on delete cascade,
  use_months integer not null check (use_months between 0 and 600),
  still_using boolean not null,
  had_problem boolean not null,
  problem_label text check (problem_label is null or char_length(problem_label) <= 120),
  repair_cost numeric(12,2) check (repair_cost is null or (repair_cost >= 0 and repair_cost <= 10000000)),
  currency varchar(3) not null default 'USD' check (currency ~ '^[A-Z]{3}$'),
  would_buy_again boolean not null,
  submission_key char(64) not null unique,
  created_at timestamptz not null default now(),
  constraint problem_requires_label check ((had_problem = false and problem_label is null) or had_problem = true)
);

create index if not exists troublio_experiences_product_id_idx
  on public.troublio_experiences(product_id);
create index if not exists troublio_experiences_created_at_idx
  on public.troublio_experiences(created_at desc);

alter table public.troublio_products enable row level security;
alter table public.troublio_experiences enable row level security;

-- No public policies by design. Browser clients must not read raw rows.
revoke all on table public.troublio_products from anon, authenticated;
revoke all on table public.troublio_experiences from anon, authenticated;

-- Server-side API uses the Supabase secret/service role. Do not expose that key
-- in NEXT_PUBLIC_* variables or browser code.

grant all on table public.troublio_products to service_role;
grant all on table public.troublio_experiences to service_role;

-- Pilot products. Aggregate values on the beta UI remain demo-only until real
-- contributions exist in the shared database.
insert into public.troublio_products (slug, brand, model, category)
values
  ('philips-xc7057-01', 'Philips', 'XC7057/01', 'Cordless vacuum'),
  ('bosch-wan28281gb', 'Bosch', 'WAN28281GB', 'Washing machine'),
  ('samsung-ww90t534daw', 'Samsung', 'WW90T534DAW', 'Washing machine'),
  ('airpods-pro-2', 'Apple', 'AirPods Pro (2nd generation)', 'Wireless earbuds')
on conflict (slug) do nothing;
