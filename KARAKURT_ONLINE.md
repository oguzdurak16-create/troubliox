# Karakurt Online

Browser tabanlı, Knight Online hissiyatını hedefleyen üçüncü şahıs MMORPG projesi.

## Production

https://karakurt-online.vercel.app

Vercel project: `karakurt-online`

## Kontrol şeması

- Sağ tık basılı + mouse: kamera
- Sol tık zemin: yürü
- Sol tık NPC/portal: yaklaş ve etkileşim
- Sol tık mob: hedef seç
- Z: en yakın mob
- R: basic auto attack
- F: AFK slot modu
- 1-8: skill bar
- Mobil: yatay ekran, D-pad + Z/R/F + 1-8 skill bar, sağ ekran sürükleme kamera

## Mevcut prototip alanları

- Karahisar / Bozkır Geçidi
- Karakuyu Zindanı
- Kızıl Sınır PvP

## Mevcut sistemler

- Third-person kamera ve hareket
- Targeting
- Basic auto attack
- 8 slot düzenlenebilir skill bar
- Mob aggro/chase/attack/return/respawn
- Ölüm ve şehirde respawn
- EXP / level / coin / loot / NP prototipi
- NPC etkileşimi
- Quest prototipi
- Merchant / warehouse prototipi
- Portal / dungeon / PvP zone prototipi
- Landscape mobil HUD

## Geliştirme yönü

Bu branch Karakurt Online geliştirmesine ayrılmıştır. `main` branch etkilenmez. Bir sonraki mimari aşama kaynakların modüllere ayrılması, gerçek inventory/equipment, item/drop tabloları, sınıflar, persistence ve server-authoritative multiplayer katmanıdır.
