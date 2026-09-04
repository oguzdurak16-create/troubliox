# Karakurt Online v18.6

Source SHA-256: `c8f1b3adee2189e7993594509d2219ab7b5af8fc4aa46bfcc824e333107e21bf`
Source bytes: `131883`
JS syntax: `node --check` PASS

Changes over v18.5:
- Weapon and inventory-item upgrades now trigger a world-space blacksmith ceremony, not only UI feedback.
- Demirci Börü's real rig is forced into its strike animation during the upgrade window, so the hand-attached hammer moves with the skeleton.
- A glowing sword hologram appears above the town anvil during the upgrade attempt.
- The hologram rotates/pulses and uses success/failure emissive colors.
- Forge flame grows brighter and changes its glow during the upgrade attempt, then restores its normal state automatically.
- Upgrade ceremony is wired into legacy weapon upgrade, equipped weapon upgrade and inventory gear upgrade paths.
- Existing success/failure particles, sound, banner and screen shake remain active.
- v18.5 rig helmet, v18.4 profession animations and v18.3 rarity shield remain intact.

Live production remains stable v16 until Vercel API deployment quota resets.
