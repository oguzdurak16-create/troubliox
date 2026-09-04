-- Karakurt Online v20 production schema
create extension if not exists pgcrypto;

create table if not exists public.karakurt_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  username text not null,
  race_id text not null default 'human' check (race_id in ('human','barbarian','elf','darkelf')),
  class_id text not null default 'warrior' check (class_id in ('warrior','rogue','mage','priest')),
  str_stat integer not null default 60,
  dex_stat integer not null default 50,
  hp_stat integer not null default 55,
  int_stat integer not null default 40,
  stat_points integer not null default 0,
  skill_points integer not null default 0,
  game_state jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  constraint karakurt_username_len check (char_length(username) between 2 and 24)
);
create unique index if not exists karakurt_profiles_username_lower_uidx on public.karakurt_profiles (lower(username));
alter table public.karakurt_profiles enable row level security;
drop policy if exists karakurt_profiles_select_own on public.karakurt_profiles;
create policy karakurt_profiles_select_own on public.karakurt_profiles for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists karakurt_profiles_insert_own on public.karakurt_profiles;
create policy karakurt_profiles_insert_own on public.karakurt_profiles for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists karakurt_profiles_update_own on public.karakurt_profiles;
create policy karakurt_profiles_update_own on public.karakurt_profiles for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

create or replace function public.karakurt_set_updated_at()
returns trigger language plpgsql security invoker set search_path = public as $$
begin new.updated_at = now(); new.last_seen_at = now(); return new; end;
$$;
drop trigger if exists karakurt_profiles_set_updated_at on public.karakurt_profiles;
create trigger karakurt_profiles_set_updated_at before update on public.karakurt_profiles for each row execute function public.karakurt_set_updated_at();

create or replace function public.karakurt_handle_new_user()
returns trigger language plpgsql security definer set search_path = '' as $$
declare
  base_name text; r text; c text; s integer := 60; d integer := 50; h integer := 55; i integer := 40;
begin
  base_name := left(coalesce(new.raw_user_meta_data ->> 'username', split_part(new.email, '@', 1), 'Karakurt'), 24);
  if char_length(base_name) < 2 then base_name := 'Karakurt'; end if;
  r := coalesce(new.raw_user_meta_data ->> 'race_id','human');
  c := coalesce(new.raw_user_meta_data ->> 'class_id','warrior');
  if r = 'barbarian' then s:=68; d:=43; h:=62; i:=32;
  elsif r = 'elf' then s:=45; d:=68; h:=45; i:=52;
  elsif r = 'darkelf' then s:=48; d:=58; h:=43; i:=66;
  end if;
  if c = 'warrior' then s:=s+8; h:=h+8;
  elsif c = 'rogue' then d:=d+10; h:=h+2;
  elsif c = 'mage' then d:=d+2; i:=i+12;
  elsif c = 'priest' then s:=s+2; h:=h+5; i:=i+9;
  end if;
  begin
    insert into public.karakurt_profiles (user_id, username, race_id, class_id, str_stat, dex_stat, hp_stat, int_stat, stat_points, skill_points)
    values (new.id, base_name, r, c, s, d, h, i, 5, 4)
    on conflict (user_id) do nothing;
  exception when unique_violation then
    insert into public.karakurt_profiles (user_id, username, race_id, class_id, str_stat, dex_stat, hp_stat, int_stat, stat_points, skill_points)
    values (new.id, left(base_name, 17) || '_' || substr(new.id::text, 1, 6), r, c, s, d, h, i, 5, 4)
    on conflict (user_id) do nothing;
  end;
  return new;
end;
$$;
drop trigger if exists on_auth_user_created_karakurt on auth.users;
create trigger on_auth_user_created_karakurt after insert on auth.users for each row execute function public.karakurt_handle_new_user();
revoke all on function public.karakurt_handle_new_user() from public;
revoke all on function public.karakurt_handle_new_user() from anon;
revoke all on function public.karakurt_handle_new_user() from authenticated;

create table if not exists public.karakurt_presence (
  user_id uuid primary key references auth.users(id) on delete cascade,
  map_id text not null default 'bozkir',
  pos_x double precision not null default 0,
  pos_z double precision not null default 7,
  yaw double precision not null default 0,
  level integer not null default 1 check (level >= 1),
  race_id text not null default 'human',
  class_id text not null default 'warrior',
  updated_at timestamptz not null default now()
);
create index if not exists karakurt_presence_updated_idx on public.karakurt_presence(updated_at desc);
alter table public.karakurt_presence enable row level security;
drop policy if exists karakurt_presence_read_authenticated on public.karakurt_presence;
create policy karakurt_presence_read_authenticated on public.karakurt_presence for select to authenticated using (true);
drop policy if exists karakurt_presence_insert_own on public.karakurt_presence;
create policy karakurt_presence_insert_own on public.karakurt_presence for insert to authenticated with check ((select auth.uid()) = user_id);
drop policy if exists karakurt_presence_update_own on public.karakurt_presence;
create policy karakurt_presence_update_own on public.karakurt_presence for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
drop policy if exists karakurt_presence_delete_own on public.karakurt_presence;
create policy karakurt_presence_delete_own on public.karakurt_presence for delete to authenticated using ((select auth.uid()) = user_id);
grant usage on schema public to authenticated;
grant select, insert, update on public.karakurt_profiles to authenticated;
grant select, insert, update, delete on public.karakurt_presence to authenticated;
