# Karakurt Online v18.2

Status: development source prepared locally; production remains stable v16 because Vercel API daily deployment quota is exhausted.

Source file: `karakurt_v182_direct_ready.html`
Source SHA-256: `d6f01c62966b6fd1df83a68c01c0b3eca8eeb6fa91d9d48f0796051023668b3f`
Source bytes: `123824`
JS syntax: `node --check` PASS

Changes over v18.1:
- Real GLB coverage expanded to every town NPC: quest guard, sundries, inn, teleport master and blacksmith.
- `Rogue.glb` added for Inn Hostess; Sundries uses `Rogue_Hooded.glb`.
- Quest spear, blacksmith hammer and teleport staff are re-parented to the loaded rig's detected right-hand bone.
- Blacksmith real rig periodically uses an attack/strike animation so the hand-mounted hammer moves with the skeleton.
- Old procedural NPC prop animation only runs when the real GLB rig is unavailable.
- Mobile asset loading stays staggered to avoid a simultaneous GLB network/parse spike.
- Procedural player/NPC/mob models remain the hard fallback.

Character source: KayKit Adventurers Character Pack 1.0 (CC0). The pack is fully rigged/animated and intended for low-poly/mobile use.
