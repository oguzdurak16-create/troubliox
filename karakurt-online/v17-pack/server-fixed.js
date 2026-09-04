const zlib = require('zlib');

const BASE = 'https://raw.githubusercontent.com/oguzdurak16-create/troubliox/karakurt-online/karakurt-online/v17-pack';

module.exports = async function handler(req, res) {
  try {
    const parts = await Promise.all(
      Array.from({ length: 8 }, async (_, i) => {
        const name = `pack-${String(i).padStart(2, '0')}.txt`;
        const r = await fetch(`${BASE}/${name}`, { cache: 'no-store' });
        if (!r.ok) throw new Error(`${name} HTTP ${r.status}`);
        return (await r.text()).trim();
      })
    );

    // IMPORTANT: Base64 is split at arbitrary character offsets.
    // Join the TEXT first, then decode exactly once. Decoding each part
    // separately corrupts gzip bytes when a part length is not divisible by 4.
    const b64 = parts.join('').replace(/\s+/g, '');
    const gz = Buffer.from(b64, 'base64');
    const html = zlib.gunzipSync(gz).toString('utf8');

    if (!html.startsWith('<!doctype html>') && !html.startsWith('<!DOCTYPE html>')) {
      throw new Error('decoded payload is not HTML');
    }
    if (!html.includes('Karakurt Online')) throw new Error('Karakurt signature missing');

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store, max-age=0');
    res.setHeader('X-Karakurt-Engine', 'v17-pack-fixed');
    res.end(html);
  } catch (e) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('Karakurt v17 açılış hatası: ' + (e?.message || String(e)));
  }
};
