-- Karakurt Online v19 - player accounts, cloud saves, and presence foundation
create extension if not exists pgcrypto;

create table if not exists public.karakurt_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  class_id text not null default 'warrior' check (class_id in ('warrior','rogue','mage','priest')),
  game_state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  constraint karakurt_username_len check (char_length(username) between 2 and 24)
);

create unique index if not exists karakurt_profiles_username_lower_uidx
  on public.karakurt_profiles (lower(username));

alter table public.karakurt_profiles enable row level security;

create policy "karakurt_profiles_select_own"
  on public.karakurt_profiles for select
  to authenticated
  using ((select auth.uid()) = user_id);

create policy "karakurt_profiles_insert_own"
  on public.karakurt_profiles for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "karakurt_profiles_update_own"
  on public.karakurt_profiles for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create or replace function public.karakurt_set_updated_at()
returns trigger
language plpgsql
security invoker
set search_path = public
as $$
begin
  new.updated_at = now();
  new.last_seen_at = now();
  return new;
end;
$$;

drop trigger if exists karakurt_profiles_set_updated_at on public.karakurt_profiles;
create trigger karakurt_profiles_set_updated_at
before update on public.karakurt_profiles
for each row execute function public.karakurt_set_updated_at();

create or replace function public.karakurt_handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  base_name text;
begin
  base_name := left(coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1), 'Karakurt'), 24);
  if char_length(base_name) < 2 then base_name := 'Karakurt'; end if;
  begin
    insert into public.karakurt_profiles (user_id, username)
    values (new.id, base_name)
    on conflict (user_id) do nothing;
  exception when unique_violation then
    insert into public.karakurt_profiles (user_id, username)
    values (new.id, left(base_name, 17) || '_' || substr(new.id::text, 1, 6))
    on conflict (user_id) do nothing;
  end;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_karakurt on auth.users;
create trigger on_auth_user_created_karakurt
after insert on auth.users
for each row execute function public.karakurt_handle_new_user();

-- Lightweight online-presence foundation. Gameplay is still client-authoritative in v19;
-- this table is ready for later realtime player ghosts / party presence.
create table if not exists public.karakurt_presence (
  user_id uuid primary key references auth.users(id) on delete cascade,
  map_id text not null default 'bozkir',
  pos_x double precision not null default 0,
  pos_z double precision not null default 7,
  yaw double precision not null default 0,
  level integer not null default 1 check (level >= 1),
  updated_at timestamptz not null default now()
);

create index if not exists karakurt_presence_updated_idx on public.karakurt_presence(updated_at desc);
alter table public.karakurt_presence enable row level security;

create policy "karakurt_presence_read_authenticated"
  on public.karakurt_presence for select
  to authenticated
  using (true);

create policy "karakurt_presence_insert_own"
  on public.karakurt_presence for insert
  to authenticated
  with check ((select auth.uid()) = user_id);

create policy "karakurt_presence_update_own"
  on public.karakurt_presence for update
  to authenticated
  using ((select auth.uid()) = user_id)
  with check ((select auth.uid()) = user_id);

create policy "karakurt_presence_delete_own"
  on public.karakurt_presence for delete
  to authenticated
  using ((select auth.uid()) = user_id);

grant usage on schema public to authenticated;
grant select, insert, update on public.karakurt_profiles to authenticated;
grant select, insert, update, delete on public.karakurt_presence to authenticated;
