// Karakurt Online v18.2 integration layer. The full integrated source is syntax-checked locally.
export const V182_ASSETS={
  player:'Knight.glb',
  quest:'Knight.glb',
  sundries:'Rogue_Hooded.glb',
  inn:'Rogue.glb',
  teleport:'Mage.glb',
  blacksmith:'Barbarian.glb'
};

export function handScore(obj,side='right'){
  const n=(obj.name||'').toLowerCase().replace(/[\s:_-]+/g,'');
  if(!n.includes('hand'))return-1;
  const right=/righthand|handr|rhand|mixamorig.*righthand/.test(n);
  const left=/lefthand|handl|lhand|mixamorig.*lefthand/.test(n);
  let score=obj.isBone?12:4;
  if(side==='right'&&right)score+=30;
  if(side==='left'&&left)score+=30;
  if(n==='righthand'||n==='lefthand')score+=8;
  return score;
}

export function findHandNode(model,side='right'){
  let best=null,bestScore=-1;
  model.traverse(o=>{const s=handScore(o,side);if(s>bestScore){best=o;bestScore=s}});
  return bestScore>5?best:null;
}

export function attachNpcHandProp(rig,role,prop){
  if(!rig||!prop)return null;
  const hand=findHandNode(rig.model,'right');
  if(!hand)return null;
  prop.userData.realAsset=true;
  prop.userData.handProp=true;
  hand.add(prop);
  if(role==='quest'){
    prop.scale.setScalar(.34);prop.position.set(.02,.01,0);prop.rotation.set(Math.PI/2,0,Math.PI);
  }else if(role==='blacksmith'){
    prop.scale.setScalar(.38);prop.position.set(.01,.02,0);prop.rotation.set(Math.PI/2,0,Math.PI);
  }else if(role==='teleport'){
    prop.scale.setScalar(.38);prop.position.set(.02,.02,0);prop.rotation.set(Math.PI/2,0,Math.PI);
  }
  return prop;
}

export function npcRigState(role,now){
  if(role==='blacksmith'&&now%3600<720)return'attack';
  return'idle';
}
