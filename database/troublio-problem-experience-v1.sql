-- Troublio problem-experience loop v1
-- Applied to the dedicated Troublio Supabase project.

create schema if not exists private;
revoke all on schema private from public;

create table if not exists public.troublio_problem_experiences (
  id uuid primary key default gen_random_uuid(),
  problem_slug text not null check (char_length(problem_slug) between 1 and 180),
  brand text check (brand is null or char_length(brand) <= 100),
  device text check (device is null or char_length(device) <= 120),
  model_text text check (model_text is null or char_length(model_text) <= 160),
  resolved boolean not null,
  solution_label text check (solution_label is null or char_length(solution_label) <= 160),
  submission_key char(64) not null unique check (submission_key ~ '^[0-9a-f]{64}$'),
  created_at timestamptz not null default now(),
  constraint solution_when_resolved check (resolved = false or solution_label is not null)
);

create index if not exists troublio_problem_experiences_problem_slug_idx
  on public.troublio_problem_experiences(problem_slug);
create index if not exists troublio_problem_experiences_created_at_idx
  on public.troublio_problem_experiences(created_at desc);

create table if not exists public.troublio_problem_aggregates (
  problem_slug text primary key,
  experience_count integer not null default 0 check (experience_count >= 0),
  resolved_count integer not null default 0 check (resolved_count >= 0),
  resolution_rate integer not null default 0 check (resolution_rate between 0 and 100),
  top_solutions jsonb not null default '[]'::jsonb,
  last_contribution_at timestamptz,
  updated_at timestamptz not null default now()
);

create or replace function private.refresh_troublio_problem_aggregate()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_slug text := coalesce(new.problem_slug, old.problem_slug);
begin
  insert into public.troublio_problem_aggregates (
    problem_slug, experience_count, resolved_count, resolution_rate,
    top_solutions, last_contribution_at, updated_at
  )
  select
    target_slug,
    count(*)::integer,
    count(*) filter (where resolved)::integer,
    case when count(*) = 0 then 0 else round((count(*) filter (where resolved))::numeric * 100 / count(*))::integer end,
    coalesce((
      select jsonb_agg(jsonb_build_object('label', ranked.solution_label, 'reports', ranked.reports) order by ranked.reports desc, ranked.solution_label)
      from (
        select solution_label, count(*)::integer as reports
        from public.troublio_problem_experiences
        where problem_slug = target_slug and resolved = true and solution_label is not null
        group by solution_label
        order by count(*) desc, solution_label
        limit 5
      ) ranked
    ), '[]'::jsonb),
    max(created_at),
    now()
  from public.troublio_problem_experiences
  where problem_slug = target_slug
  on conflict (problem_slug) do update set
    experience_count = excluded.experience_count,
    resolved_count = excluded.resolved_count,
    resolution_rate = excluded.resolution_rate,
    top_solutions = excluded.top_solutions,
    last_contribution_at = excluded.last_contribution_at,
    updated_at = excluded.updated_at;

  return coalesce(new, old);
end;
$$;

revoke all on function private.refresh_troublio_problem_aggregate() from public, anon, authenticated;

drop trigger if exists troublio_problem_aggregate_after_change on public.troublio_problem_experiences;
create trigger troublio_problem_aggregate_after_change
after insert or delete on public.troublio_problem_experiences
for each row execute function private.refresh_troublio_problem_aggregate();

alter table public.troublio_problem_experiences enable row level security;
alter table public.troublio_problem_aggregates enable row level security;

revoke all on table public.troublio_problem_experiences from anon, authenticated;
revoke all on table public.troublio_problem_aggregates from anon, authenticated;

grant insert on table public.troublio_problem_experiences to anon, authenticated;
grant select on table public.troublio_problem_aggregates to anon, authenticated;

drop policy if exists "public can contribute problem experience" on public.troublio_problem_experiences;
create policy "public can contribute problem experience"
on public.troublio_problem_experiences
for insert
to anon, authenticated
with check (
  char_length(problem_slug) between 1 and 180
  and (brand is null or char_length(brand) <= 100)
  and (device is null or char_length(device) <= 120)
  and (model_text is null or char_length(model_text) <= 160)
  and (solution_label is null or char_length(solution_label) <= 160)
  and submission_key ~ '^[0-9a-f]{64}$'
);

drop policy if exists "public can read problem aggregates" on public.troublio_problem_aggregates;
create policy "public can read problem aggregates"
on public.troublio_problem_aggregates
for select
to anon, authenticated
using (true);
