import { SITE_NAME, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
      <ShortName>${SITE_NAME}</ShortName>
      <Description>Search troubleshooting guides, symptoms, and error codes.</Description>
      <InputEncoding>UTF-8</InputEncoding>
      <Image height="64" width="64" type="image/svg+xml">${SITE_URL}/icon.svg</Image>
      <Url type="text/html" template="${SITE_URL}/search?q={searchTerms}" />
    </OpenSearchDescription>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/opensearchdescription+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=604800",
    },
  });
}
