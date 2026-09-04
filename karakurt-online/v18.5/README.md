# Karakurt Online v18.5

Source SHA-256: `bbbb6ed59ba1a37a625e898b8d8061b3d4b925e499823f1ba75ff02ede614c79`
Source bytes: `130152`
JS syntax: `node --check` PASS

Changes over v18.4:
- Equipped helmet is now represented on the real skinned character rig.
- Robust head-bone detection was added; helmet props are parented directly to the imported skeleton's head bone.
- Common/Rare/Epic/Legendary helmet tiers have progressively different silhouettes and materials.
- Rare adds a crest, Epic adds horns/details, Legendary adds a subtle aura.
- Equipping or replacing a helmet rebuilds only the rig head prop; the GLB character is not reloaded.
- Removing helmet gear removes the rig head prop immediately.
- Helmet visualization works for Warrior, Rogue and Mage visual classes.
- v18.4 role-specific NPC rig animations and v18.3 Warrior shield/guard effects remain intact.

Live production remains untouched/stable while Vercel's API-deploy quota is exhausted.
