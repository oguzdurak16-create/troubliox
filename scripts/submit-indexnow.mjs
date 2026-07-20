const siteUrl = (process.env.SITE_URL || "https://www.troublio.com").replace(/\/$/, "");
const host = new URL(siteUrl).host;
const key = process.env.INDEXNOW_KEY || "51e8da7fe9810cd2b61ee0247de7e9c73444a1f6";
const keyLocation = `${siteUrl}/${key}.txt`;
const sitemapUrl = `${siteUrl}/sitemap.xml`;
const endpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";

function decodeXml(value) {
  return value.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
}

async function getUrls() {
  const response = await fetch(sitemapUrl, { headers: { "User-Agent": "Troublio-IndexNow/1.4" } });
  if (!response.ok) throw new Error(`Sitemap could not be read: HTTP ${response.status}`);
  const xml = await response.text();
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeXml(match[1].trim()));
  return [...new Set(urls.filter((url) => new URL(url).host === host))];
}

async function submitBatch(urlList) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation, urlList }),
  });
  const body = await response.text();
  if (![200, 202].includes(response.status)) throw new Error(`IndexNow rejected the batch: HTTP ${response.status} ${body}`);
  return response.status;
}

const urls = await getUrls();
if (!urls.length) throw new Error("No URLs were found in sitemap.xml");
if (process.argv.includes("--dry-run")) {
  console.log(`Dry run: ${urls.length} URLs ready.`);
  console.log(`Key file: ${keyLocation}`);
  process.exit(0);
}

for (let offset = 0; offset < urls.length; offset += 10000) {
  const batch = urls.slice(offset, offset + 10000);
  const status = await submitBatch(batch);
  console.log(`Submitted ${batch.length} URLs (HTTP ${status}).`);
}
console.log("IndexNow submission completed.");
