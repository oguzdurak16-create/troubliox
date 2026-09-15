-- Troublio user-grown model aggregates v1
-- Model pages are derived from structured troubleshooting experience rows.

create table if not exists public.troublio_model_aggregates (
  brand_key text not null,
  model_key text not null,
  brand text not null,
  model text not null,
  report_count integer not null default 0 check (report_count >= 0),
  resolved_count integer not null default 0 check (resolved_count >= 0),
  resolution_rate integer not null default 0 check (resolution_rate between 0 and 100),
  top_issues jsonb not null default '[]'::jsonb,
  top_solutions jsonb not null default '[]'::jsonb,
  last_contribution_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (brand_key, model_key)
);

create or replace function private.troublio_normalize_key(input_text text)
returns text
language sql
immutable
strict
set search_path = ''
as $$
  select regexp_replace(
    regexp_replace(lower(trim(input_text)), '[^a-z0-9]+', '-', 'g'),
    '(^-+|-+$)', '', 'g'
  );
$$;

revoke all on function private.troublio_normalize_key(text) from public, anon, authenticated;

create or replace function private.refresh_troublio_model_aggregate()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  target_brand text := coalesce(new.brand, old.brand);
  target_model text := coalesce(new.model_text, old.model_text);
  target_brand_key text;
  target_model_key text;
begin
  if target_brand is null or target_model is null or char_length(trim(target_model)) < 2 then
    return coalesce(new, old);
  end if;

  target_brand_key := private.troublio_normalize_key(target_brand);
  target_model_key := private.troublio_normalize_key(target_model);

  if target_brand_key = '' or target_model_key = '' then
    return coalesce(new, old);
  end if;

  delete from public.troublio_model_aggregates
  where brand_key = target_brand_key and model_key = target_model_key;

  if not exists (
    select 1
    from public.troublio_problem_experiences
    where brand is not null and model_text is not null
      and private.troublio_normalize_key(brand) = target_brand_key
      and private.troublio_normalize_key(model_text) = target_model_key
  ) then
    return coalesce(new, old);
  end if;

  insert into public.troublio_model_aggregates (
    brand_key, model_key, brand, model, report_count, resolved_count,
    resolution_rate, top_issues, top_solutions, last_contribution_at, updated_at
  )
  select
    target_brand_key,
    target_model_key,
    max(brand),
    max(model_text),
    count(*)::integer,
    count(*) filter (where resolved)::integer,
    round((count(*) filter (where resolved))::numeric * 100 / count(*))::integer,
    coalesce((
      select jsonb_agg(jsonb_build_object('slug', ranked.problem_slug, 'reports', ranked.reports) order by ranked.reports desc, ranked.problem_slug)
      from (
        select problem_slug, count(*)::integer as reports
        from public.troublio_problem_experiences
        where brand is not null and model_text is not null
          and private.troublio_normalize_key(brand) = target_brand_key
          and private.troublio_normalize_key(model_text) = target_model_key
        group by problem_slug
        order by count(*) desc, problem_slug
        limit 8
      ) ranked
    ), '[]'::jsonb),
    coalesce((
      select jsonb_agg(jsonb_build_object('label', ranked.solution_label, 'reports', ranked.reports) order by ranked.reports desc, ranked.solution_label)
      from (
        select solution_label, count(*)::integer as reports
        from public.troublio_problem_experiences
        where brand is not null and model_text is not null
          and private.troublio_normalize_key(brand) = target_brand_key
          and private.troublio_normalize_key(model_text) = target_model_key
          and resolved = true and solution_label is not null
        group by solution_label
        order by count(*) desc, solution_label
        limit 8
      ) ranked
    ), '[]'::jsonb),
    max(created_at),
    now()
  from public.troublio_problem_experiences
  where brand is not null and model_text is not null
    and private.troublio_normalize_key(brand) = target_brand_key
    and private.troublio_normalize_key(model_text) = target_model_key;

  return coalesce(new, old);
end;
$$;

revoke all on function private.refresh_troublio_model_aggregate() from public, anon, authenticated;

drop trigger if exists troublio_model_aggregate_after_change on public.troublio_problem_experiences;
create trigger troublio_model_aggregate_after_change
after insert or delete on public.troublio_problem_experiences
for each row execute function private.refresh_troublio_model_aggregate();

alter table public.troublio_model_aggregates enable row level security;
revoke all on table public.troublio_model_aggregates from anon, authenticated;
grant select on table public.troublio_model_aggregates to anon, authenticated;

drop policy if exists "public can read model aggregates" on public.troublio_model_aggregates;
create policy "public can read model aggregates"
on public.troublio_model_aggregates
for select
to anon, authenticated
using (true);
