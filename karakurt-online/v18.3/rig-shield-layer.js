// Karakurt Online v18.3 - real-rig shield/equipment layer
export function bestArmorRarity(state){
  const rank={common:0,rare:1,epic:2,legendary:3};let best='common';
  for(const it of [state.equipment?.helmet,state.equipment?.armor,state.equipment?.boots])if(it&&rank[it.rarity]>rank[best])best=it.rarity;
  return best;
}

export const SHIELD_STYLE={
  common:{shell:0x465159,accent:0x90703c},
  rare:{shell:0x315b79,accent:0x5aaee8},
  epic:{shell:0x594070,accent:0xb16cf0,spikes:true},
  legendary:{shell:0x765022,accent:0xf2b449,spikes:true,aura:true}
};

export function shieldGuardPulse(now,guardUntil){
  if(now>=guardUntil)return{scale:1,emissive:0x000000,intensity:0};
  return{scale:1+.07*Math.sin(now*.018),emissive:0x1f8f67,intensity:.9};
}

// Integrated source uses the existing robust findHandNode() helper:
// Warrior: right-hand sword + left-hand rarity shield.
// Quest guard: right-hand spear + left-hand rare shield.
// Rogue: dual blades, no shield. Mage: staff, no shield.
// Armor rarity changes rebuild only the hand prop; the GLB skeleton is not reloaded.
