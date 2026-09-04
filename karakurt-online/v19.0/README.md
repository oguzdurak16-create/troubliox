# Karakurt Online v19.0

Source SHA-256: `a1e33f13b014bef48e487d97efd8b81bbf34d97d88c75870e89159ed527ddbab`
Source bytes: `153526`
JS syntax: `node --check` PASS

Changes over v18.6:
- Fixed global character/mob facing: visible -Z model forward is now respected while moving, attacking and returning home.
- Desktop right click: short click moves/interacts/starts mob auto attack; right-drag rotates camera with a drag threshold.
- Click navigation now accelerates/decelerates and stops at proper NPC/portal/loot distance instead of fighting collision.
- Animation transitions optimized; one-shot attack/hit/dodge/interact/blacksmith actions can force replay with shorter crossfades.
- Auto-loot (AFK “oto kutu”) prioritizes nearby ground loot before retargeting.
- Stackable drops merge in world and inventory with max x200 per stack; gear remains non-stackable.
- Inn Hostess now has a persistent 48-slot warehouse, inventory↔warehouse transfer, bulk deposit/withdraw and x200 stacking.
- Real account UI added with email/password signup/login/logout and Supabase cloud-save hooks. Local guest save remains as fallback.
- Supabase schema prepared under `karakurt-online/supabase/001_karakurt_accounts.sql`; project URL/key placeholders stay disabled until a dedicated Supabase project is created.

Production is intentionally not changed by these source commits. Test v19 in preview before promotion.
