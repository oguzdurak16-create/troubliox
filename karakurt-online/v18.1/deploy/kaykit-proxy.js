const ALLOWED=new Set(['Knight.glb','Rogue_Hooded.glb','Mage.glb','Barbarian.glb']);
const BASE='https://raw.githubusercontent.com/KayKit-Game-Assets/KayKit-Character-Pack-Adventures-1.0/main/addons/kaykit_character_pack_adventures/Characters/gltf/';
module.exports=async function(req,res){
  try{
    const file=String(req.query?.file||'');
    if(!ALLOWED.has(file)){res.statusCode=404;return res.end('asset not found')}
    const r=await fetch(BASE+encodeURIComponent(file),{cache:'no-store'});
    if(!r.ok)throw new Error(`asset HTTP ${r.status}`);
    const body=Buffer.from(await r.arrayBuffer());
    res.statusCode=200;
    res.setHeader('Content-Type','model/gltf-binary');
    res.setHeader('Content-Length',String(body.length));
    res.setHeader('Cache-Control','public, max-age=31536000, immutable');
    res.setHeader('X-Karakurt-Asset','KayKit-CC0');
    res.end(body);
  }catch(e){res.statusCode=502;res.setHeader('Content-Type','text/plain; charset=utf-8');res.end('Karakurt asset proxy error: '+(e?.message||String(e)))}
};
