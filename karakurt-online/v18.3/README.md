# Karakurt Online v18.3

Status: development source complete and syntax checked. Live production remains stable v16 only because Vercel API daily deployment quota is exhausted.

Source file: `karakurt_v183_direct_ready.html`
Source SHA-256: `6496b53ab49340bc5c6711a653967bfc6071a041dc283dec6f0639ac79adbdab`
Source bytes: `126457`
JS syntax: `node --check` PASS

Changes over v18.2:
- Warrior real rig now gets a left-hand shield attached directly to the detected left-hand bone.
- Shield visual follows equipped armor rarity: common, rare, epic and legendary variants.
- Epic/legendary shields receive additional silhouette details; legendary gets an aura ring.
- Guard skill pulses the real-rig shield and applies a temporary emissive block glow.
- Changing armor rarity rebuilds the shield immediately without reloading the character GLB.
- Karahisar quest guard now receives a separate real-rig left-hand shield while keeping the spear in the right hand.
- Rogue remains dual-wield, Mage remains staff; shield is Warrior-only.
- All real-rig additions retain procedural fallback and do not add any new client-side external asset request chain.

Character source remains KayKit Adventurers Character Pack 1.0 (CC0). KayKit accessory filenames were inspected, but external multi-file `.gltf + .bin` accessories are deliberately not loaded client-side yet; v18.3 uses robust in-engine shield geometry attached to the real skeleton to preserve mobile/network stability.
