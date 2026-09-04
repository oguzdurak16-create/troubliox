# Karakurt Online v18.4

Source SHA-256: `ff68a171cd784284a662cf5a564d9624c80b55ff7ccce86a8c294d7ce24fbb5f`
Source bytes: `127322`
JS syntax: `node --check` PASS

Changes over v18.3:
- Rig animation mapping expanded with cast, wave/greet, cheer/victory, interact/use and guard/block states.
- Teleport Ustası periodically uses a spell/cast clip when one exists.
- Sundries periodically greets/interacts instead of standing completely static.
- Inn Hostess uses cheer/wave animation when available.
- Karahisar Muhafızı periodically takes a guard/block stance while holding spear + shield.
- Demirci Börü retains periodic strike animation with hammer attached to the real hand bone.
- Every new role animation has an automatic idle fallback if the imported GLB does not contain a matching clip.
- v18.3 real-rig rarity shield and guard glow remain intact.

Production remains stable v16 until Vercel API deployment quota resets; development continues without touching the live build.
