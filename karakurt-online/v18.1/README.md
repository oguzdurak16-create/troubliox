# Karakurt Online v18.1

Status: development source prepared locally; production remains v16 until Vercel API deployment quota resets.

Source SHA-256: `32a5a9e62042d90f36cb3b03ef2cf54ebe93ef0f70a7216941d3160e4114ad87`
Source bytes: `122777`
JS syntax: `node --check` PASS

Changes over v18:
- Same-origin KayKit GLB URLs through `/api/kaykit?file=...` with raw GitHub fallback.
- Automatic right/left hand bone detection for loaded skinned GLB characters.
- Warrior hand sword, Rogue dual short blades, Mage staff.
- Real-rig weapon visuals inherit item rarity and +7/+9 emissive upgrade effects.
- Equipping a new weapon rebuilds the real-rig hand prop without reloading the character GLB.
- Procedural character/weapon remains the failure fallback.

Allowed character assets for proxy:
- Knight.glb
- Rogue_Hooded.glb
- Mage.glb
- Barbarian.glb

Asset source: KayKit Adventurers Character Pack 1.0, CC0.
