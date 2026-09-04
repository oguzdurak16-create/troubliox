# Karakurt Online v20.0 Publish

Build: `/karakurt-online/v20-pack/pack-00.txt` … `pack-06.txt` (gzip+base64; concatenate first, decode once, gunzip once on the Vercel server).

Supabase production project: `zdcmnisxjgpmyvhwhkyl` (`eu-central-1`).

Implemented for v20:
- Corrected character/mob facing and smoother locomotion/animation transitions.
- Desktop NPC flow: left-click selects NPC, right-click opens Knight Online-style action menu; right-click ground moves, right-drag rotates camera.
- Blacksmith Repair All + upgrade flow, item durability and repair pricing.
- I toggles combined Character + Inventory panel with equipped items, durability, STR/DEX/HP/INT, ATK/DEF/MAGIC, stat allocation and visual equipment.
- K toggles class skill tree with level/rank requirements and skill-point allocation.
- Human, Barbarian, Elf and Dark Elf races; Warrior, Rogue, Mage and Priest classes with race/class base stats.
- Stackable world/inventory loot up to x200; AFK auto-loot prioritizes nearby drops.
- Inn Hostess 48-slot persistent warehouse with x200 stacking and inventory↔warehouse transfer.
- Supabase email/password signup/login/logout, profile cloud saves and player-presence foundation.
- Local guest save remains a fallback.

Source HTML was validated with `node --check` on its module script before packaging.
