import type { Problem } from "./problems";

// Curated browser, web, and entertainment search clusters added in v1.4.
export const growthProblems: Problem[] = [
  {
    "slug": "chrome-err-connection-reset",
    "title": "Chrome ERR_CONNECTION_RESET: the connection was reset",
    "shortTitle": "Chrome ERR_CONNECTION_RESET",
    "summary": "Chrome reached the network, but the connection was closed before the page finished loading. A router, VPN, security filter, proxy, browser state, or the website itself can reset the session.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The website or its server closed the connection",
      "A VPN, proxy, antivirus web shield, or firewall interrupted traffic",
      "The router or internet path has a temporary fault",
      "Chrome network state or cached site data is corrupted"
    ],
    "quickChecks": [
      {
        "title": "Test the same site in another browser",
        "detail": "This separates a website or network problem from a Chrome-only problem.",
        "level": "safe"
      },
      {
        "title": "Pause VPN or proxy for one test",
        "detail": "Reconnect only after confirming whether the filtered path causes the reset.",
        "level": "caution"
      },
      {
        "title": "Restart Chrome and the router",
        "detail": "Close Chrome fully, then power-cycle the router for 30 seconds.",
        "level": "safe"
      },
      {
        "title": "Clear data only for the affected site",
        "detail": "Remove the site cookie and cache instead of clearing all browsing data.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Where does the reset occur?",
    "observations": [
      {
        "label": "Only one website fails",
        "advice": "The website, its CDN, or a route to that host is the likely focus."
      },
      {
        "label": "Every browser fails",
        "advice": "Focus on the router, provider, DNS path, VPN, or security software."
      },
      {
        "label": "Only Chrome fails",
        "advice": "Reset Chrome network-related extensions and site data before changing the whole PC."
      }
    ],
    "whenToStop": [
      "A work or school network requires administrator approval",
      "Security software reports a real certificate or malware warning"
    ],
    "faq": [
      {
        "question": "Does ERR_CONNECTION_RESET mean the website blocked me?",
        "answer": "Not necessarily. It only means the connection ended unexpectedly; the cause can be local, network-side, or server-side."
      },
      {
        "question": "Should I reset all Windows network settings first?",
        "answer": "No. Start with another browser, one site, VPN or proxy checks, and a router restart before broad resets."
      }
    ],
    "tags": [
      "chrome",
      "err_connection_reset",
      "connection reset",
      "website not loading"
    ],
    "contentKind": "error-code",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "errorCode": "ERR_CONNECTION_RESET",
    "aliases": [
      "connection reset"
    ],
    "appliesTo": "Desktop and mobile Chrome",
    "sources": [
      {
        "label": "Google Chrome Help: Fix connection and loading errors",
        "url": "https://support.google.com/chrome/answer/6098869"
      }
    ],
    "modelNote": "The same message can come from the site, network path, browser, or security software. Match the failure across browsers and networks before changing system settings.",
    "featured": true
  },
  {
    "slug": "chrome-dns-probe-finished-nxdomain",
    "title": "Chrome DNS_PROBE_FINISHED_NXDOMAIN: domain not found",
    "shortTitle": "Chrome DNS_PROBE_FINISHED_NXDOMAIN",
    "summary": "The DNS lookup did not return a usable address for the domain. The name may be mistyped, expired, temporarily unavailable, filtered, or failing through the current DNS resolver.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The web address is misspelled or no longer exists",
      "The current DNS resolver cannot answer correctly",
      "A VPN, private DNS, parental filter, or security product is intercepting DNS",
      "The router or device has stale DNS state"
    ],
    "quickChecks": [
      {
        "title": "Check the address carefully",
        "detail": "Remove extra characters and test the site home page.",
        "level": "safe"
      },
      {
        "title": "Try the domain on mobile data",
        "detail": "If it works there, the local network or DNS resolver is the likely difference.",
        "level": "safe"
      },
      {
        "title": "Restart the browser and router",
        "detail": "This clears common temporary resolver and gateway states.",
        "level": "safe"
      },
      {
        "title": "Review custom DNS or filtering settings",
        "detail": "Return to automatic DNS temporarily if you intentionally use a custom resolver.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Does the domain resolve elsewhere?",
    "observations": [
      {
        "label": "It fails on every network",
        "advice": "The domain may be invalid, expired, or having authoritative DNS trouble."
      },
      {
        "label": "It works on mobile data",
        "advice": "Focus on home router DNS, provider DNS, filters, or local configuration."
      },
      {
        "label": "Only one device fails",
        "advice": "Focus on that device’s DNS cache, VPN, private DNS, or security software."
      }
    ],
    "whenToStop": [
      "The domain is used for banking, identity, or payment and redirects unexpectedly",
      "A managed device requires network administrator changes"
    ],
    "faq": [
      {
        "question": "What does NXDOMAIN mean?",
        "answer": "It means the resolver reports that the requested domain name does not exist in DNS."
      },
      {
        "question": "Can changing DNS fix it?",
        "answer": "Sometimes, but only when the current resolver or filter is the cause. It cannot fix a genuinely missing domain."
      }
    ],
    "tags": [
      "chrome",
      "dns_probe_finished_nxdomain",
      "nxdomain",
      "dns"
    ],
    "contentKind": "error-code",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "errorCode": "DNS_PROBE_FINISHED_NXDOMAIN",
    "aliases": [
      "nxdomain",
      "domain not found"
    ],
    "appliesTo": "Desktop and mobile Chrome",
    "sources": [
      {
        "label": "Google Chrome Help: Fix connection and loading errors",
        "url": "https://support.google.com/chrome/answer/6098869"
      }
    ],
    "modelNote": "Confirm the exact domain and test another network before treating this as a device fault."
  },
  {
    "slug": "chrome-your-connection-is-not-private",
    "title": "Chrome says Your connection is not private",
    "shortTitle": "Chrome connection is not private",
    "summary": "Chrome cannot validate the website certificate for the current connection. A wrong clock, expired certificate, captive portal, interception, or unsafe site configuration can trigger the warning.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The device date or time is wrong",
      "The website certificate is expired, mismatched, or incomplete",
      "A hotel, café, school, or workplace network is intercepting the connection",
      "Security software or a malicious network is inspecting encrypted traffic"
    ],
    "quickChecks": [
      {
        "title": "Check date, time, and time zone",
        "detail": "Certificate validation depends on an accurate system clock.",
        "level": "safe"
      },
      {
        "title": "Try the official site address directly",
        "detail": "Avoid following shortened or unexpected links.",
        "level": "safe"
      },
      {
        "title": "Complete the Wi-Fi sign-in page",
        "detail": "Open a plain website on public Wi-Fi to trigger its captive portal.",
        "level": "safe"
      },
      {
        "title": "Do not bypass warnings on sensitive sites",
        "detail": "Stop for banking, email, identity, health, or payment pages.",
        "level": "stop"
      }
    ],
    "decisionTitle": "Where does the warning appear?",
    "observations": [
      {
        "label": "Only one website shows it",
        "advice": "The site certificate or hostname is the likely focus."
      },
      {
        "label": "Many sites show it",
        "advice": "Check the clock, network interception, antivirus HTTPS scanning, and captive portal."
      },
      {
        "label": "It appears only on public Wi-Fi",
        "advice": "Complete network sign-in or leave the network if the warning remains."
      }
    ],
    "whenToStop": [
      "The warning appears on a payment, banking, email, or identity site",
      "The certificate name does not match the site you intended to visit",
      "The browser or security software reports active interception"
    ],
    "faq": [
      {
        "question": "Is it safe to click Advanced and continue?",
        "answer": "Not for sensitive activity. The warning means Chrome cannot establish trusted identity for the encrypted connection."
      },
      {
        "question": "Can a wrong clock cause the warning?",
        "answer": "Yes. A significantly wrong date or time can make a valid certificate appear expired or not yet valid."
      }
    ],
    "tags": [
      "chrome",
      "privacy error",
      "certificate",
      "your connection is not private"
    ],
    "contentKind": "error-code",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "errorCode": "NET::ERR_CERT",
    "aliases": [
      "privacy error",
      "certificate error"
    ],
    "appliesTo": "Chrome certificate warnings",
    "sources": [
      {
        "label": "Google Chrome Help: Fix connection and loading errors",
        "url": "https://support.google.com/chrome/answer/6098869"
      }
    ],
    "modelNote": "Certificate messages vary. Do not bypass them until the hostname, clock, network, and certificate context are understood.",
    "featured": true
  },
  {
    "slug": "chrome-err-connection-refused",
    "title": "Chrome ERR_CONNECTION_REFUSED: site refused the connection",
    "shortTitle": "Chrome ERR_CONNECTION_REFUSED",
    "summary": "The destination was reached, but nothing accepted the connection on the requested service. The website may be down, blocked, misconfigured, or reachable only through a specific network.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The website service is stopped or rejecting requests",
      "A firewall, proxy, VPN, or router rule is blocking the destination",
      "The address points to the wrong host or port",
      "A local development service is not running"
    ],
    "quickChecks": [
      {
        "title": "Test another website",
        "detail": "Confirm that general internet access works.",
        "level": "safe"
      },
      {
        "title": "Try the same address on another network",
        "detail": "This separates local filtering from a server-side refusal.",
        "level": "safe"
      },
      {
        "title": "Disable proxy or VPN for one test",
        "detail": "Use only if you control the connection and can restore the setting.",
        "level": "caution"
      },
      {
        "title": "For a local service, confirm it is running",
        "detail": "Check the expected host, port, and listening service.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Which address is refusing?",
    "observations": [
      {
        "label": "A public website",
        "advice": "The site, CDN, route, or a local filter may be rejecting the connection."
      },
      {
        "label": "localhost or a local IP",
        "advice": "The app or service may not be running or listening on that port."
      },
      {
        "label": "Only on one network",
        "advice": "A firewall, DNS override, proxy, or router policy is likely."
      }
    ],
    "whenToStop": [
      "The site is a sensitive service and the address changed unexpectedly",
      "Changing firewall rules would weaken a managed network"
    ],
    "faq": [
      {
        "question": "Is connection refused the same as a timeout?",
        "answer": "No. Refused usually means the destination actively rejected the connection; a timeout means no usable response arrived in time."
      },
      {
        "question": "Can clearing browser cache fix it?",
        "answer": "Rarely. This error is more often about the service, address, port, proxy, firewall, or network route."
      }
    ],
    "tags": [
      "chrome",
      "err_connection_refused",
      "connection refused",
      "website"
    ],
    "contentKind": "error-code",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "errorCode": "ERR_CONNECTION_REFUSED",
    "aliases": [
      "connection refused"
    ],
    "appliesTo": "Chrome and Chromium browsers",
    "sources": [
      {
        "label": "Google Chrome Help: Fix connection and loading errors",
        "url": "https://support.google.com/chrome/answer/6098869"
      }
    ],
    "modelNote": "Identify whether the address is public, local, or port-specific before changing network or firewall settings."
  },
  {
    "slug": "browser-too-many-redirects",
    "title": "Browser says too many redirects",
    "shortTitle": "Too many redirects",
    "summary": "The website is sending the browser through a redirect loop. Conflicting cookies, HTTP-to-HTTPS rules, login state, proxy settings, or the website configuration can cause the loop.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Web browser",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The site has a redirect configuration loop",
      "A stale login or preference cookie keeps selecting the wrong route",
      "A VPN, proxy, cache, or content delivery layer is rewriting requests",
      "The site alternates between www, non-www, HTTP, HTTPS, or regional URLs"
    ],
    "quickChecks": [
      {
        "title": "Open the site in a private window",
        "detail": "If it works there, stored site data is a strong suspect.",
        "level": "safe"
      },
      {
        "title": "Clear cookies for that site only",
        "detail": "Avoid deleting all browser data before testing the affected domain.",
        "level": "safe"
      },
      {
        "title": "Disable extensions for one test",
        "detail": "Focus on privacy, redirect, proxy, or user-agent extensions.",
        "level": "safe"
      },
      {
        "title": "Try another network or browser",
        "detail": "This helps identify a site-side loop versus a local browser state.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Does private browsing work?",
    "observations": [
      {
        "label": "Private mode works",
        "advice": "Clear cookies and site storage for the affected domain."
      },
      {
        "label": "Every browser and network fails",
        "advice": "The website owner likely needs to correct redirect rules."
      },
      {
        "label": "Only a VPN connection fails",
        "advice": "Regional, proxy, or security routing may be changing the redirect chain."
      }
    ],
    "whenToStop": [
      "The redirect leads to a different or suspicious domain",
      "The problem involves login, payment, or identity and the destination is unclear"
    ],
    "faq": [
      {
        "question": "What does ERR_TOO_MANY_REDIRECTS mean?",
        "answer": "The browser detected a loop or excessive chain of redirects and stopped loading the page."
      },
      {
        "question": "Will clearing all cookies fix it?",
        "answer": "Site-specific cookies can fix a local loop, but a server configuration loop requires the website owner."
      }
    ],
    "tags": [
      "browser",
      "too many redirects",
      "redirect loop",
      "cookies"
    ],
    "contentKind": "symptom",
    "brand": "Web",
    "brandSlug": "web",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ]
  },
  {
    "slug": "website-403-forbidden",
    "title": "Website shows 403 Forbidden",
    "shortTitle": "Website shows 403 Forbidden",
    "summary": "The server understood the request but refuses to authorize it. Permissions, login state, region, IP reputation, security rules, or a private resource can produce HTTP 403.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Website",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The page requires an account or permission",
      "A security rule blocks the IP, region, browser, or request",
      "The URL points to a protected file or directory",
      "The website permissions are misconfigured"
    ],
    "quickChecks": [
      {
        "title": "Confirm the URL and sign in again",
        "detail": "Use the site home page rather than a bookmarked protected path.",
        "level": "safe"
      },
      {
        "title": "Try without VPN or proxy",
        "detail": "Some sites block shared or unusual IP addresses.",
        "level": "caution"
      },
      {
        "title": "Clear only that site’s cookies",
        "detail": "A stale session can preserve a denied state.",
        "level": "safe"
      },
      {
        "title": "If you own the site, inspect access rules",
        "detail": "Check server, CDN, storage, and file permissions.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does the HTTP error appear?",
    "observations": [
      {
        "label": "Only one page is forbidden",
        "advice": "That resource may be private, moved, or permission-restricted."
      },
      {
        "label": "The whole site is forbidden",
        "advice": "A firewall, region, IP, account, or server rule may block access."
      },
      {
        "label": "It works on another network",
        "advice": "The original IP, proxy, or network policy is likely involved."
      }
    ],
    "whenToStop": [
      "The page handles payment or identity and you cannot confirm whether an action completed",
      "The site redirects to an unexpected domain or asks for sensitive information"
    ],
    "faq": [
      {
        "question": "What does HTTP 403 mean?",
        "answer": "The server understood the request but refuses to authorize it."
      },
      {
        "question": "Is this usually a browser problem?",
        "answer": "Usually not. Browser state can contribute in some cases, but gateway, server, permission, rate-limit, or upstream conditions are common."
      }
    ],
    "tags": [
      "http",
      "403",
      "website shows 403 forbidden",
      "website error"
    ],
    "contentKind": "error-code",
    "brand": "Web",
    "brandSlug": "web",
    "errorCode": "403 Forbidden",
    "aliases": [
      "403"
    ],
    "appliesTo": "Websites and web APIs",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ],
    "modelNote": "HTTP status meaning is standard, but the operational cause depends on the website, CDN, gateway, application, and account context."
  },
  {
    "slug": "website-429-too-many-requests",
    "title": "Website shows 429 Too Many Requests",
    "shortTitle": "Website shows 429 Too Many Requests",
    "summary": "The service is rate-limiting requests from the browser, account, app, or IP address. Repeated refreshes, automation, extensions, shared networks, or service limits can trigger HTTP 429.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Website",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "Too many requests were sent in a short period",
      "An extension, app, or script is retrying automatically",
      "A shared VPN or public IP has exceeded a limit",
      "The account or API plan has a request quota"
    ],
    "quickChecks": [
      {
        "title": "Stop refreshing and wait",
        "detail": "Respect any Retry-After time shown by the service.",
        "level": "safe"
      },
      {
        "title": "Close duplicate tabs or automated tools",
        "detail": "Prevent background retries from extending the limit.",
        "level": "safe"
      },
      {
        "title": "Disable VPN for one test",
        "detail": "Shared VPN addresses can accumulate other users’ traffic.",
        "level": "caution"
      },
      {
        "title": "For an API, inspect response headers and quotas",
        "detail": "Reduce request frequency and implement backoff.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Where does the HTTP error appear?",
    "observations": [
      {
        "label": "It clears after waiting",
        "advice": "A temporary rate window was exceeded."
      },
      {
        "label": "It affects an API key or account",
        "advice": "Check plan quota, account limits, and automated callers."
      },
      {
        "label": "It happens only on a VPN or public network",
        "advice": "The shared public IP may be rate-limited."
      }
    ],
    "whenToStop": [
      "The page handles payment or identity and you cannot confirm whether an action completed",
      "The site redirects to an unexpected domain or asks for sensitive information"
    ],
    "faq": [
      {
        "question": "What does HTTP 429 mean?",
        "answer": "The service is rate-limiting requests from the browser, account, app, or IP address."
      },
      {
        "question": "Is this usually a browser problem?",
        "answer": "Usually not. Browser state can contribute in some cases, but gateway, server, permission, rate-limit, or upstream conditions are common."
      }
    ],
    "tags": [
      "http",
      "429",
      "website shows 429 too many requests",
      "website error"
    ],
    "contentKind": "error-code",
    "brand": "Web",
    "brandSlug": "web",
    "errorCode": "429 Too Many Requests",
    "aliases": [
      "429"
    ],
    "appliesTo": "Websites and web APIs",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ],
    "modelNote": "HTTP status meaning is standard, but the operational cause depends on the website, CDN, gateway, application, and account context."
  },
  {
    "slug": "website-502-bad-gateway",
    "title": "Website shows 502 Bad Gateway",
    "shortTitle": "Website shows 502 Bad Gateway",
    "summary": "A gateway or proxy received an invalid response from an upstream server. The website, hosting platform, CDN, load balancer, or origin service is usually responsible for HTTP 502.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Website",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The origin server is down or returning an invalid response",
      "A CDN, reverse proxy, or load balancer cannot reach the origin",
      "A deployment or configuration change broke the upstream service",
      "Temporary overload or network failure interrupted the backend"
    ],
    "quickChecks": [
      {
        "title": "Refresh once after a short wait",
        "detail": "Transient gateway failures can clear quickly.",
        "level": "safe"
      },
      {
        "title": "Check whether the service reports an outage",
        "detail": "Use the official status page rather than repeated refreshes.",
        "level": "safe"
      },
      {
        "title": "Try another network only to compare",
        "detail": "A true 502 usually remains server-side across networks.",
        "level": "safe"
      },
      {
        "title": "If you own the site, inspect gateway and origin logs",
        "detail": "Check health probes, timeouts, DNS, TLS, and upstream process state.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does the HTTP error appear?",
    "observations": [
      {
        "label": "Everyone sees the error",
        "advice": "The service owner or host must restore the upstream path."
      },
      {
        "label": "Only one route fails",
        "advice": "A specific backend service or deployment may be unhealthy."
      },
      {
        "label": "It appears during a deployment",
        "advice": "The new release, health check, or startup timing is a likely cause."
      }
    ],
    "whenToStop": [
      "The page handles payment or identity and you cannot confirm whether an action completed",
      "The site redirects to an unexpected domain or asks for sensitive information"
    ],
    "faq": [
      {
        "question": "What does HTTP 502 mean?",
        "answer": "A gateway or proxy received an invalid response from an upstream server."
      },
      {
        "question": "Is this usually a browser problem?",
        "answer": "Usually not. Browser state can contribute in some cases, but gateway, server, permission, rate-limit, or upstream conditions are common."
      }
    ],
    "tags": [
      "http",
      "502",
      "website shows 502 bad gateway",
      "website error"
    ],
    "contentKind": "error-code",
    "brand": "Web",
    "brandSlug": "web",
    "errorCode": "502 Bad Gateway",
    "aliases": [
      "502"
    ],
    "appliesTo": "Websites and web APIs",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ],
    "modelNote": "HTTP status meaning is standard, but the operational cause depends on the website, CDN, gateway, application, and account context."
  },
  {
    "slug": "website-503-service-unavailable",
    "title": "Website shows 503 Service Unavailable",
    "shortTitle": "Website shows 503 Service Unavailable",
    "summary": "The server is temporarily unable to handle the request. Maintenance, overload, failed dependencies, disabled application pools, or capacity limits commonly produce HTTP 503.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Website",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The service is in planned maintenance",
      "The server is overloaded or out of capacity",
      "A required backend, database, or application process is unavailable",
      "Hosting or security controls temporarily disabled the service"
    ],
    "quickChecks": [
      {
        "title": "Wait and retry later",
        "detail": "Respect any Retry-After header or maintenance notice.",
        "level": "safe"
      },
      {
        "title": "Check the official status page",
        "detail": "Confirm whether the provider has acknowledged an outage.",
        "level": "safe"
      },
      {
        "title": "Avoid repeated rapid refreshes",
        "detail": "Extra requests can worsen overload and trigger rate limits.",
        "level": "safe"
      },
      {
        "title": "If you own the site, inspect capacity and dependencies",
        "detail": "Check process health, database connections, queues, and host limits.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does the HTTP error appear?",
    "observations": [
      {
        "label": "A maintenance message appears",
        "advice": "Wait for the stated window to end."
      },
      {
        "label": "The error is intermittent under load",
        "advice": "Capacity, autoscaling, or dependency saturation is likely."
      },
      {
        "label": "Only one application route fails",
        "advice": "A specific service or dependency may be unavailable."
      }
    ],
    "whenToStop": [
      "The page handles payment or identity and you cannot confirm whether an action completed",
      "The site redirects to an unexpected domain or asks for sensitive information"
    ],
    "faq": [
      {
        "question": "What does HTTP 503 mean?",
        "answer": "The server is temporarily unable to handle the request."
      },
      {
        "question": "Is this usually a browser problem?",
        "answer": "Usually not. Browser state can contribute in some cases, but gateway, server, permission, rate-limit, or upstream conditions are common."
      }
    ],
    "tags": [
      "http",
      "503",
      "website shows 503 service unavailable",
      "website error"
    ],
    "contentKind": "error-code",
    "brand": "Web",
    "brandSlug": "web",
    "errorCode": "503 Service Unavailable",
    "aliases": [
      "503"
    ],
    "appliesTo": "Websites and web APIs",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ],
    "modelNote": "HTTP status meaning is standard, but the operational cause depends on the website, CDN, gateway, application, and account context."
  },
  {
    "slug": "website-504-gateway-timeout",
    "title": "Website shows 504 Gateway Timeout",
    "shortTitle": "Website shows 504 Gateway Timeout",
    "summary": "A gateway waited too long for an upstream service to respond. Slow database work, overloaded application servers, network faults, or timeout settings commonly cause HTTP 504.",
    "category": "Internet & Wi-Fi",
    "categorySlug": "internet-wifi",
    "device": "Website",
    "updated": "2026-07-17",
    "readTime": 5,
    "likelyCauses": [
      "The upstream application is too slow or overloaded",
      "A database or external dependency is not responding in time",
      "A proxy, CDN, or load balancer timeout is shorter than the task",
      "A network path between gateway and origin is failing"
    ],
    "quickChecks": [
      {
        "title": "Wait and retry once",
        "detail": "A temporary slow request can complete on a later attempt.",
        "level": "safe"
      },
      {
        "title": "Check the service status page",
        "detail": "Look for acknowledged latency or outage reports.",
        "level": "safe"
      },
      {
        "title": "Do not repeat a payment or order blindly",
        "detail": "Verify whether the original action completed before submitting again.",
        "level": "caution"
      },
      {
        "title": "If you own the site, trace the slow upstream call",
        "detail": "Inspect gateway logs, application timings, database queries, and dependency latency.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does the HTTP error appear?",
    "observations": [
      {
        "label": "Only long actions fail",
        "advice": "The task duration or upstream timeout is likely too high."
      },
      {
        "label": "All pages time out",
        "advice": "The origin, database, or network path may be broadly unhealthy."
      },
      {
        "label": "A payment timed out",
        "advice": "Check order history before retrying to avoid duplicate transactions."
      }
    ],
    "whenToStop": [
      "The page handles payment or identity and you cannot confirm whether an action completed",
      "The site redirects to an unexpected domain or asks for sensitive information"
    ],
    "faq": [
      {
        "question": "What does HTTP 504 mean?",
        "answer": "A gateway waited too long for an upstream service to respond."
      },
      {
        "question": "Is this usually a browser problem?",
        "answer": "Usually not. Browser state can contribute in some cases, but gateway, server, permission, rate-limit, or upstream conditions are common."
      }
    ],
    "tags": [
      "http",
      "504",
      "website shows 504 gateway timeout",
      "website error"
    ],
    "contentKind": "error-code",
    "brand": "Web",
    "brandSlug": "web",
    "errorCode": "504 Gateway Timeout",
    "aliases": [
      "504"
    ],
    "appliesTo": "Websites and web APIs",
    "sources": [
      {
        "label": "MDN Web Docs: HTTP response status codes",
        "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status"
      }
    ],
    "modelNote": "HTTP status meaning is standard, but the operational cause depends on the website, CDN, gateway, application, and account context."
  },
  {
    "slug": "chrome-pages-not-loading-but-internet-works",
    "title": "Chrome pages are not loading but the internet works",
    "shortTitle": "Chrome pages not loading",
    "summary": "Other apps or browsers reach the internet, but Chrome cannot load pages because of extensions, proxy or DNS settings, profile corruption, security filtering, or a stuck browser process.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "A Chrome extension is blocking or rewriting requests",
      "Chrome is using a broken proxy, DNS, or secure DNS setting",
      "The Chrome profile or cached network state is corrupted",
      "Security software treats Chrome differently from other apps"
    ],
    "quickChecks": [
      {
        "title": "Test the same page in another browser",
        "detail": "Confirm that the internet connection and website are working.",
        "level": "safe"
      },
      {
        "title": "Open an Incognito window",
        "detail": "If it works, extensions or stored site data are likely involved.",
        "level": "safe"
      },
      {
        "title": "Disable network-related extensions",
        "detail": "Test privacy, VPN, proxy, ad-blocking, and security extensions one at a time.",
        "level": "safe"
      },
      {
        "title": "Review Chrome proxy and secure DNS settings",
        "detail": "Return custom settings to automatic only if you can restore them.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What works outside Chrome?",
    "observations": [
      {
        "label": "Another browser works",
        "advice": "Focus on Chrome extensions, profile, proxy, secure DNS, and security filtering."
      },
      {
        "label": "No browser works",
        "advice": "Treat it as a wider network, DNS, router, or provider problem."
      },
      {
        "label": "Incognito works",
        "advice": "An extension, cookie, or cached site state is likely."
      }
    ],
    "whenToStop": [
      "A managed browser is controlled by work or school policy",
      "Security software reports a genuine threat"
    ],
    "faq": [
      {
        "question": "Should I reinstall Chrome first?",
        "answer": "No. Incognito, extensions, proxy, secure DNS, and a new profile are more targeted tests."
      },
      {
        "question": "Why can apps work when Chrome cannot?",
        "answer": "Apps may use different DNS, proxy, certificate, or network paths than Chrome."
      }
    ],
    "tags": [
      "chrome",
      "pages not loading",
      "internet works",
      "browser"
    ],
    "contentKind": "symptom",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "sources": [
      {
        "label": "Google Chrome Help: Fix connection and loading errors",
        "url": "https://support.google.com/chrome/answer/6098869"
      }
    ],
    "featured": true
  },
  {
    "slug": "chrome-keeps-crashing",
    "title": "Google Chrome keeps crashing or closing",
    "shortTitle": "Chrome keeps crashing",
    "summary": "Chrome can crash because of a damaged profile, incompatible extension, graphics acceleration issue, low memory, outdated build, or security software conflict.",
    "category": "Computers & printers",
    "categorySlug": "computers-printers",
    "device": "Google Chrome",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "An extension or browser profile is corrupted",
      "Graphics acceleration conflicts with the display driver",
      "The device is low on memory or storage",
      "Chrome, the operating system, or security software is outdated"
    ],
    "quickChecks": [
      {
        "title": "Restart the device and update Chrome",
        "detail": "Clear stuck processes and install the current stable browser update.",
        "level": "safe"
      },
      {
        "title": "Test with extensions disabled",
        "detail": "If stable, re-enable extensions one at a time.",
        "level": "safe"
      },
      {
        "title": "Check free memory and storage",
        "detail": "Close heavy apps and confirm the system drive is not nearly full.",
        "level": "safe"
      },
      {
        "title": "Test hardware acceleration off",
        "detail": "Change only if crashes happen during video, scrolling, or graphics-heavy pages.",
        "level": "caution"
      }
    ],
    "decisionTitle": "When does Chrome crash?",
    "observations": [
      {
        "label": "Immediately at startup",
        "advice": "A profile, extension, policy, or installation issue is likely."
      },
      {
        "label": "During video or scrolling",
        "advice": "Graphics acceleration or the display driver is a likely focus."
      },
      {
        "label": "Only on one website",
        "advice": "That page, an extension interaction, or stored site data may trigger the crash."
      }
    ],
    "whenToStop": [
      "The whole computer freezes, restarts, or shows hardware errors",
      "A managed device requires administrator changes"
    ],
    "faq": [
      {
        "question": "Will resetting Chrome delete bookmarks?",
        "answer": "Resetting settings usually keeps bookmarks, but profile removal or unsynced data can cause loss. Back up important data first."
      },
      {
        "question": "Why does Chrome crash with many tabs?",
        "answer": "Each tab and extension uses memory. Low available memory can terminate browser processes."
      }
    ],
    "tags": [
      "chrome",
      "crashing",
      "closing",
      "browser"
    ],
    "contentKind": "symptom",
    "brand": "Google Chrome",
    "brandSlug": "google-chrome",
    "sources": [
      {
        "label": "Google Chrome Help: Fix Chrome if it crashes or will not open",
        "url": "https://support.google.com/chrome/answer/142063"
      }
    ]
  },
  {
    "slug": "netflix-not-working-on-smart-tv",
    "title": "Netflix is not working on a smart TV",
    "shortTitle": "Netflix not working on TV",
    "summary": "The Netflix app may fail because of a temporary service issue, stale app state, TV software, network trouble, account state, or an unsupported device version.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Smart TV",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The Netflix service or regional route is temporarily unavailable",
      "The TV app session or device data is stuck",
      "The TV has weak or unavailable internet access",
      "The TV software or Netflix app version is no longer compatible"
    ],
    "quickChecks": [
      {
        "title": "Test another streaming app",
        "detail": "Confirm whether the TV has general internet access.",
        "level": "safe"
      },
      {
        "title": "Fully restart the TV",
        "detail": "Unplug it for 60 seconds rather than using standby only.",
        "level": "safe"
      },
      {
        "title": "Sign out and back in if the app opens",
        "detail": "Refresh the account and device session.",
        "level": "safe"
      },
      {
        "title": "Check TV software and app availability",
        "detail": "Use the TV maker update path and supported app store.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How far does Netflix get?",
    "observations": [
      {
        "label": "The app will not open",
        "advice": "Focus on TV restart, app data, software support, and storage."
      },
      {
        "label": "Menus open but video will not play",
        "advice": "Focus on network quality, title-specific errors, account state, and DRM."
      },
      {
        "label": "Netflix works on other devices",
        "advice": "The TV app, TV software, or that TV’s network path is the likely focus."
      }
    ],
    "whenToStop": [
      "The TV power supply clicks, smells burned, or repeatedly restarts",
      "The app requests credentials outside the official Netflix sign-in flow"
    ],
    "faq": [
      {
        "question": "Should I reinstall Netflix on the TV?",
        "answer": "Only after a full TV restart, network check, and software update. Some TVs do not allow the built-in app to be removed."
      },
      {
        "question": "Why does Netflix work on my phone but not the TV?",
        "answer": "The TV may use a different app version, Wi-Fi band, DNS path, software platform, or device authorization."
      }
    ],
    "tags": [
      "netflix",
      "smart tv",
      "not working",
      "streaming"
    ],
    "contentKind": "symptom",
    "brand": "Netflix",
    "brandSlug": "netflix",
    "sources": [
      {
        "label": "Netflix Help Center",
        "url": "https://help.netflix.com/en"
      }
    ],
    "featured": true
  },
  {
    "slug": "netflix-black-screen-with-sound",
    "title": "Netflix has a black screen but sound still plays",
    "shortTitle": "Netflix black screen with sound",
    "summary": "Audio can continue while the video path fails because of an app rendering issue, HDMI or HDCP problem, display mode conflict, screen mirroring limitation, or device software fault.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Streaming device or smart TV",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The Netflix app video renderer is stuck",
      "An HDMI cable, port, receiver, or HDCP handshake is failing",
      "Screen mirroring or capture is not permitted for protected video",
      "The display driver or device software has a compatibility problem"
    ],
    "quickChecks": [
      {
        "title": "Open the device menu or another app",
        "detail": "Confirm that the display itself can show normal video.",
        "level": "safe"
      },
      {
        "title": "Restart the app and playback device",
        "detail": "Fully close the app and power-cycle the TV or streaming device.",
        "level": "safe"
      },
      {
        "title": "Test another HDMI port and cable",
        "detail": "Bypass a receiver or splitter for one test.",
        "level": "caution"
      },
      {
        "title": "Stop screen sharing or recording",
        "detail": "Protected playback may intentionally show a black image.",
        "level": "safe"
      }
    ],
    "decisionTitle": "Where is the picture missing?",
    "observations": [
      {
        "label": "Only Netflix video is black",
        "advice": "Focus on the app, protected playback, device software, or title session."
      },
      {
        "label": "All HDMI video is black",
        "advice": "Focus on the cable, port, receiver, input, or display handshake."
      },
      {
        "label": "Menus display but playback is black",
        "advice": "A DRM, HDCP, app, or video-mode issue is likely."
      }
    ],
    "whenToStop": [
      "Opening the TV or receiver would expose internal power sections",
      "The HDMI cable or port is visibly burned or unusually hot"
    ],
    "faq": [
      {
        "question": "Why can sound play when video is black?",
        "answer": "Audio and video are separate paths. The app can decode audio while protected video output or rendering fails."
      },
      {
        "question": "Can an HDMI splitter cause this?",
        "answer": "Yes. A splitter or receiver that does not complete the required HDCP handshake can block protected video."
      }
    ],
    "tags": [
      "netflix",
      "black screen",
      "sound",
      "hdcp"
    ],
    "contentKind": "symptom",
    "brand": "Netflix",
    "brandSlug": "netflix",
    "sources": [
      {
        "label": "Netflix Help Center",
        "url": "https://help.netflix.com/en"
      }
    ]
  },
  {
    "slug": "netflix-keeps-buffering",
    "title": "Netflix keeps buffering or lowering video quality",
    "shortTitle": "Netflix keeps buffering",
    "summary": "Unstable bandwidth, Wi-Fi interference, congestion, device performance, VPN routing, or service-side trouble can interrupt Netflix playback even when a speed test looks acceptable.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Streaming device",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Wi-Fi latency or packet loss is unstable",
      "Other devices are using the available connection",
      "A VPN or DNS path is adding delay",
      "The streaming device or app session is overloaded"
    ],
    "quickChecks": [
      {
        "title": "Pause other large downloads and streams",
        "detail": "Retest with the connection available to one playback device.",
        "level": "safe"
      },
      {
        "title": "Move closer or test Ethernet",
        "detail": "A wired test separates Wi-Fi quality from provider speed.",
        "level": "safe"
      },
      {
        "title": "Restart the router and streaming device",
        "detail": "Clear temporary network and app state.",
        "level": "safe"
      },
      {
        "title": "Disable VPN for one test",
        "detail": "Streaming routes through VPN services can be slower or blocked.",
        "level": "caution"
      }
    ],
    "decisionTitle": "When does buffering happen?",
    "observations": [
      {
        "label": "Only at busy evening hours",
        "advice": "Provider or neighborhood congestion may be involved."
      },
      {
        "label": "Only on Wi-Fi",
        "advice": "Signal strength, interference, mesh roaming, or band selection is likely."
      },
      {
        "label": "Only Netflix buffers",
        "advice": "Check the app, title, service status, VPN route, and device session."
      }
    ],
    "whenToStop": [
      "The router or power adapter is hot, damaged, or smells burned",
      "A managed network prohibits configuration changes"
    ],
    "faq": [
      {
        "question": "Why does a speed test look fast while Netflix buffers?",
        "answer": "A brief speed test may not reveal packet loss, jitter, Wi-Fi interference, or route-specific congestion."
      },
      {
        "question": "Will lowering video quality help?",
        "answer": "It can reduce bandwidth demand, but repeated buffering still warrants checking Wi-Fi stability and competing traffic."
      }
    ],
    "tags": [
      "netflix",
      "buffering",
      "streaming quality",
      "wifi"
    ],
    "contentKind": "symptom",
    "brand": "Netflix",
    "brandSlug": "netflix",
    "sources": [
      {
        "label": "Netflix Help Center",
        "url": "https://help.netflix.com/en"
      }
    ]
  },
  {
    "slug": "youtube-app-not-working-on-smart-tv",
    "title": "YouTube app is not working on a smart TV",
    "shortTitle": "YouTube app not working on TV",
    "summary": "The YouTube TV app can fail because of stale app data, a TV software problem, account state, network trouble, incorrect time, or an unsupported platform version.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Smart TV",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The app session or TV process is stuck",
      "The TV has lost internet or DNS access",
      "The TV clock or software is outdated",
      "The YouTube app version is no longer supported on the device"
    ],
    "quickChecks": [
      {
        "title": "Test YouTube on another device",
        "detail": "Check whether the account and service work elsewhere.",
        "level": "safe"
      },
      {
        "title": "Fully restart the TV",
        "detail": "Disconnect power for 60 seconds before reopening the app.",
        "level": "safe"
      },
      {
        "title": "Check date, time, and TV software",
        "detail": "Incorrect time can break secure connections and sign-in.",
        "level": "safe"
      },
      {
        "title": "Clear or reinstall the app if supported",
        "detail": "Use the TV maker’s app management tools.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What part of YouTube fails?",
    "observations": [
      {
        "label": "The app will not open",
        "advice": "Focus on app data, TV storage, software support, and restart."
      },
      {
        "label": "The app opens but videos do not play",
        "advice": "Focus on network, DNS, account restrictions, and video errors."
      },
      {
        "label": "Sign-in fails",
        "advice": "Check the TV time, code flow, account permissions, and linked-device session."
      }
    ],
    "whenToStop": [
      "The TV repeatedly restarts or shows power faults",
      "A sign-in screen sends you to a non-Google domain"
    ],
    "faq": [
      {
        "question": "Why does YouTube work in the TV browser but not the app?",
        "answer": "The browser and app use different software components, storage, sign-in state, and codecs."
      },
      {
        "question": "Can the TV be too old for YouTube?",
        "answer": "Yes. App support can end when the TV platform can no longer meet current security or playback requirements."
      }
    ],
    "tags": [
      "youtube",
      "smart tv",
      "app not working",
      "video"
    ],
    "contentKind": "symptom",
    "brand": "YouTube",
    "brandSlug": "youtube",
    "sources": [
      {
        "label": "YouTube Help Center",
        "url": "https://support.google.com/youtube/"
      }
    ]
  },
  {
    "slug": "tv-hdmi-no-signal",
    "title": "TV says HDMI no signal",
    "shortTitle": "HDMI no signal on TV",
    "summary": "The TV is on an HDMI input but does not detect usable video. A wrong input, sleeping source, cable fault, port issue, resolution mismatch, receiver, or handshake problem can cause the message.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Television HDMI input",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The wrong HDMI input is selected",
      "The source device is off, asleep, or not outputting video",
      "The HDMI cable, port, receiver, or adapter is failing",
      "The source resolution or HDCP handshake is incompatible"
    ],
    "quickChecks": [
      {
        "title": "Confirm the exact input number",
        "detail": "Match the TV input to the physical port used by the cable.",
        "level": "safe"
      },
      {
        "title": "Wake and restart the source device",
        "detail": "Power-cycle both the TV and source, then connect directly.",
        "level": "safe"
      },
      {
        "title": "Test another HDMI cable and port",
        "detail": "Bypass receivers, switches, and adapters for one test.",
        "level": "safe"
      },
      {
        "title": "Reset source video output",
        "detail": "Use the source device’s safe-mode or low-resolution procedure if the screen stays blank.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What does the TV detect?",
    "observations": [
      {
        "label": "The source appears briefly, then disappears",
        "advice": "A cable, handshake, resolution, or power issue is likely."
      },
      {
        "label": "Another source works on the same port",
        "advice": "Focus on the original source device and its output settings."
      },
      {
        "label": "No device works on any HDMI port",
        "advice": "The TV input board, settings, or power state may require service."
      }
    ],
    "whenToStop": [
      "A port is bent, burned, loose, or unusually hot",
      "Opening the TV or source device would expose internal power sections"
    ],
    "faq": [
      {
        "question": "Can an HDMI cable fail while still looking normal?",
        "answer": "Yes. Internal conductors or shielding can fail without visible external damage."
      },
      {
        "question": "Why does no signal appear after changing resolution?",
        "answer": "The source may be outputting a format the TV or receiver cannot display. Start the source in a safe or low-resolution mode."
      }
    ],
    "tags": [
      "tv",
      "hdmi",
      "no signal",
      "input"
    ],
    "contentKind": "symptom",
    "brand": "HDMI",
    "brandSlug": "hdmi",
    "sources": [
      {
        "label": "HDMI Licensing Administrator: HDMI technology",
        "url": "https://www.hdmi.org/"
      }
    ],
    "featured": true
  },
  {
    "slug": "fire-tv-stuck-on-logo",
    "title": "Amazon Fire TV is stuck on the logo",
    "shortTitle": "Fire TV stuck on logo",
    "summary": "A weak power supply, storage problem, failed update, accessory conflict, or software corruption can keep Fire TV on its startup logo.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Amazon Fire TV",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The power adapter or cable cannot provide stable power",
      "A software update or startup process did not complete",
      "Storage is full or corrupted",
      "An HDMI accessory or USB device interferes with startup"
    ],
    "quickChecks": [
      {
        "title": "Use the original wall power adapter",
        "detail": "Do not power the device from a low-current TV USB port.",
        "level": "safe"
      },
      {
        "title": "Wait through one full startup attempt",
        "detail": "An update can take longer than a normal boot; avoid repeated unplugging.",
        "level": "safe"
      },
      {
        "title": "Disconnect USB accessories and HDMI extensions",
        "detail": "Test the Fire TV directly with only power and HDMI.",
        "level": "safe"
      },
      {
        "title": "Use the official recovery or reset procedure",
        "detail": "A reset can erase apps and settings; use it only after power checks.",
        "level": "caution"
      }
    ],
    "decisionTitle": "How does the logo behave?",
    "observations": [
      {
        "label": "It restarts in a loop",
        "advice": "Power instability, update failure, storage, or hardware is likely."
      },
      {
        "label": "The logo stays indefinitely",
        "advice": "The boot process may be frozen or unable to access storage."
      },
      {
        "label": "It starts with another adapter",
        "advice": "The original cable, adapter, or TV USB power was insufficient."
      }
    ],
    "whenToStop": [
      "The adapter, cable, or device becomes very hot or smells burned",
      "The device is swollen or physically damaged"
    ],
    "faq": [
      {
        "question": "Can the TV USB port power Fire TV?",
        "answer": "Some ports do not provide enough stable current. The original wall adapter is the best test."
      },
      {
        "question": "Will a factory reset remove everything?",
        "answer": "It removes local apps, settings, and account association from the device."
      }
    ],
    "tags": [
      "fire tv",
      "stuck on logo",
      "boot loop",
      "amazon"
    ],
    "contentKind": "symptom",
    "brand": "Amazon Fire TV",
    "brandSlug": "amazon-fire-tv",
    "sources": [
      {
        "label": "Amazon Fire TV Help",
        "url": "https://www.amazon.com/gp/help/customer/display.html?nodeId=201452680"
      }
    ]
  },
  {
    "slug": "roku-connected-to-wifi-but-no-internet",
    "title": "Roku is connected to Wi-Fi but has no internet",
    "shortTitle": "Roku connected with no internet",
    "summary": "Roku has joined the local wireless network, but the router, DNS path, captive portal, provider, or Roku network session is not reaching the internet.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Roku device",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The router has Wi-Fi but no internet service",
      "Roku has a stale address or DNS state",
      "The network requires a browser sign-in Roku cannot complete",
      "Signal quality or router compatibility is unstable"
    ],
    "quickChecks": [
      {
        "title": "Test another device on the same Wi-Fi",
        "detail": "If every device is offline, focus on the router or provider.",
        "level": "safe"
      },
      {
        "title": "Restart Roku and the router",
        "detail": "Use the Roku system restart and power-cycle the router.",
        "level": "safe"
      },
      {
        "title": "Check Roku signal and connection test",
        "detail": "Use Network settings to compare wireless strength and internet result.",
        "level": "safe"
      },
      {
        "title": "Avoid captive-portal networks",
        "detail": "Hotel, dorm, or guest networks may require Roku’s supported connection flow.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What does the network test show?",
    "observations": [
      {
        "label": "Wireless succeeds, internet fails",
        "advice": "The router, provider, DNS, or network sign-in path is the likely focus."
      },
      {
        "label": "Wireless connection also fails",
        "advice": "Focus on password, signal, band, router settings, and interference."
      },
      {
        "label": "Other devices work normally",
        "advice": "Focus on Roku restart, saved network state, DNS compatibility, and signal quality."
      }
    ],
    "whenToStop": [
      "The router or power adapter is damaged or overheating",
      "The network is managed and requires administrator approval"
    ],
    "faq": [
      {
        "question": "How can Roku be connected without internet?",
        "answer": "Connected means it has a local link to the router; the router may still lack access to the wider internet."
      },
      {
        "question": "Should I factory reset Roku first?",
        "answer": "No. Restart, network test, router, password, and another network are more targeted checks."
      }
    ],
    "tags": [
      "roku",
      "wifi",
      "connected no internet",
      "streaming"
    ],
    "contentKind": "symptom",
    "brand": "Roku",
    "brandSlug": "roku",
    "sources": [
      {
        "label": "Roku Support",
        "url": "https://support.roku.com/"
      }
    ]
  },
  {
    "slug": "chromecast-not-found",
    "title": "Chromecast is not found during setup or casting",
    "shortTitle": "Chromecast not found",
    "summary": "The phone and Chromecast may be on different networks, local-network permission may be blocked, isolation may be enabled, or the Chromecast may not be in setup mode.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Google Chromecast",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The phone and Chromecast are on different Wi-Fi networks",
      "Local network, Bluetooth, or location permission is blocked",
      "Guest isolation or client isolation prevents device discovery",
      "The Chromecast is offline, frozen, or not in setup mode"
    ],
    "quickChecks": [
      {
        "title": "Confirm both devices use the same Wi-Fi",
        "detail": "Check the exact network name, including guest or extender networks.",
        "level": "safe"
      },
      {
        "title": "Enable local network and setup permissions",
        "detail": "Allow the Google Home app to discover nearby devices.",
        "level": "safe"
      },
      {
        "title": "Restart the phone, Chromecast, and router",
        "detail": "Clear temporary multicast and discovery state.",
        "level": "safe"
      },
      {
        "title": "Disable guest isolation for setup",
        "detail": "Only change router isolation settings on a network you control.",
        "level": "caution"
      }
    ],
    "decisionTitle": "Where does discovery fail?",
    "observations": [
      {
        "label": "Google Home sees no device",
        "advice": "Focus on power, setup mode, permissions, Wi-Fi, and isolation."
      },
      {
        "label": "Setup completes but Cast is missing",
        "advice": "The app, phone, and Chromecast may be on different networks or multicast discovery is blocked."
      },
      {
        "label": "Only one phone cannot find it",
        "advice": "Focus on that phone’s permissions, VPN, and Wi-Fi state."
      }
    ],
    "whenToStop": [
      "A managed network prohibits device discovery changes",
      "The Chromecast or power adapter is damaged or overheating"
    ],
    "faq": [
      {
        "question": "Why does guest Wi-Fi block Chromecast?",
        "answer": "Guest networks often isolate clients so phones cannot discover or contact other devices."
      },
      {
        "question": "Does Bluetooth need to stay on after setup?",
        "answer": "Bluetooth can assist discovery and setup, while normal casting primarily uses the local network."
      }
    ],
    "tags": [
      "chromecast",
      "not found",
      "google home",
      "casting"
    ],
    "contentKind": "symptom",
    "brand": "Google Chromecast",
    "brandSlug": "google-chromecast",
    "sources": [
      {
        "label": "Google Chromecast Help",
        "url": "https://support.google.com/chromecast/"
      }
    ]
  },
  {
    "slug": "spotify-playing-but-no-sound",
    "title": "Spotify is playing but there is no sound",
    "shortTitle": "Spotify playing with no sound",
    "summary": "The progress bar can move while audio is routed to another device, muted by the system or app mixer, controlled by Spotify Connect, or blocked by an audio driver or app state.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Spotify app",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "Spotify Connect is sending audio to another device",
      "The app or system mixer is muted",
      "Bluetooth or wired audio output changed",
      "The Spotify app or audio service is stuck"
    ],
    "quickChecks": [
      {
        "title": "Open the device picker in Spotify",
        "detail": "Confirm that This phone or This computer is the active playback device.",
        "level": "safe"
      },
      {
        "title": "Check app and system volume",
        "detail": "On desktop, inspect the per-app volume mixer as well as master volume.",
        "level": "safe"
      },
      {
        "title": "Disconnect Bluetooth and external audio temporarily",
        "detail": "Test the built-in speaker to isolate routing.",
        "level": "safe"
      },
      {
        "title": "Restart Spotify and the audio device",
        "detail": "Fully close the app before reopening it.",
        "level": "safe"
      }
    ],
    "decisionTitle": "What does the device picker show?",
    "observations": [
      {
        "label": "Another device is selected",
        "advice": "Switch playback back to the current device."
      },
      {
        "label": "This device is selected but silent",
        "advice": "Check system mixer, output device, Bluetooth routing, and audio service."
      },
      {
        "label": "Only downloaded songs are silent",
        "advice": "Check storage, download integrity, offline mode, and app cache."
      }
    ],
    "whenToStop": [
      "Audio hardware is damaged, overheating, or producing loud distortion",
      "A managed device blocks audio or application settings"
    ],
    "faq": [
      {
        "question": "Why does the Spotify timer move without sound?",
        "answer": "Playback can continue while output is muted or routed to another Spotify Connect, Bluetooth, HDMI, or system audio device."
      },
      {
        "question": "Can the Windows volume mixer mute only Spotify?",
        "answer": "Yes. Per-app volume can be set independently from master volume."
      }
    ],
    "tags": [
      "spotify",
      "playing no sound",
      "connect",
      "audio"
    ],
    "contentKind": "symptom",
    "brand": "Spotify",
    "brandSlug": "spotify",
    "sources": [
      {
        "label": "Spotify Support",
        "url": "https://support.spotify.com/"
      }
    ]
  },
  {
    "slug": "playstation-hdmi-no-signal",
    "title": "PlayStation turns on but the TV says no signal",
    "shortTitle": "PlayStation HDMI no signal",
    "summary": "The console may output an unsupported resolution, fail the HDMI handshake, use a damaged cable or port, or start without completing normal video output.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "PlayStation console",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The TV is on the wrong HDMI input",
      "The HDMI cable, TV port, or console port is failing",
      "The console video resolution is not accepted by the display",
      "A receiver, switch, capture device, or HDCP handshake blocks video"
    ],
    "quickChecks": [
      {
        "title": "Connect the console directly to the TV",
        "detail": "Bypass receivers, switches, splitters, and capture devices.",
        "level": "safe"
      },
      {
        "title": "Test another known-good HDMI cable and port",
        "detail": "Confirm the TV input matches the physical port.",
        "level": "safe"
      },
      {
        "title": "Fully power-cycle console and TV",
        "detail": "Disconnect both from power briefly before reconnecting.",
        "level": "safe"
      },
      {
        "title": "Start PlayStation Safe Mode",
        "detail": "Use the official procedure to select a compatible video output.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What remains visible?",
    "observations": [
      {
        "label": "Safe Mode appears",
        "advice": "Change video output settings and restart normally."
      },
      {
        "label": "Another device works on the same TV port",
        "advice": "Focus on the PlayStation cable, port, and output state."
      },
      {
        "label": "The console light indicates an abnormal startup",
        "advice": "Use the official light-state and safe-mode guidance before hardware service."
      }
    ],
    "whenToStop": [
      "The HDMI port is bent, loose, burned, or unusually hot",
      "Opening the console would expose internal power and void service options"
    ],
    "faq": [
      {
        "question": "Can resolution settings cause no signal?",
        "answer": "Yes. Safe Mode can restore a video format the display accepts."
      },
      {
        "question": "Why should I bypass a receiver?",
        "answer": "It removes extra HDMI and HDCP handshakes, cables, and settings from the test path."
      }
    ],
    "tags": [
      "playstation",
      "hdmi no signal",
      "safe mode",
      "console"
    ],
    "contentKind": "symptom",
    "brand": "PlayStation",
    "brandSlug": "playstation",
    "sources": [
      {
        "label": "PlayStation Support",
        "url": "https://www.playstation.com/en-us/support/"
      }
    ]
  },
  {
    "slug": "nintendo-switch-not-charging",
    "title": "Nintendo Switch is not charging",
    "shortTitle": "Nintendo Switch not charging",
    "summary": "The Switch may be deeply discharged, using an incompatible adapter, have debris or damage in the USB-C port, be frozen, or have a battery or charging-circuit fault.",
    "category": "TV & entertainment",
    "categorySlug": "tv-entertainment",
    "device": "Nintendo Switch",
    "updated": "2026-07-17",
    "readTime": 4,
    "likelyCauses": [
      "The battery is deeply discharged",
      "The adapter, cable, outlet, or dock is not providing correct power",
      "The USB-C port has debris or physical damage",
      "The console is frozen or has a battery or charging-circuit fault"
    ],
    "quickChecks": [
      {
        "title": "Use the official Nintendo AC adapter",
        "detail": "Connect directly to the console and a wall outlet for at least 30 minutes.",
        "level": "safe"
      },
      {
        "title": "Reset the adapter",
        "detail": "Unplug it from both the wall and console for 30 seconds before reconnecting.",
        "level": "safe"
      },
      {
        "title": "Force a normal restart",
        "detail": "Hold the power button according to Nintendo guidance, then try charging again.",
        "level": "safe"
      },
      {
        "title": "Inspect the USB-C port without metal tools",
        "detail": "Stop if pins are bent, burned, or loose.",
        "level": "caution"
      }
    ],
    "decisionTitle": "What appears when power is connected?",
    "observations": [
      {
        "label": "A battery icon appears briefly",
        "advice": "Leave it charging with the official adapter before trying to start."
      },
      {
        "label": "It charges directly but not in the dock",
        "advice": "Focus on dock power order, HDMI accessories, dock connector, and adapter."
      },
      {
        "label": "There is no response with the official adapter",
        "advice": "The port, battery, adapter, or internal charging circuit may need service."
      }
    ],
    "whenToStop": [
      "The console or battery is swollen, hot, wet, or smells chemical",
      "The USB-C port is bent, burned, or loose"
    ],
    "faq": [
      {
        "question": "Can a phone USB-C charger charge the Switch?",
        "answer": "Some can charge slowly or inconsistently, but the official adapter is the correct diagnostic test and is required for normal dock operation."
      },
      {
        "question": "How long can a fully drained Switch take to respond?",
        "answer": "A deeply discharged console may need 15 to 30 minutes or longer before it shows a stable charging indicator."
      }
    ],
    "tags": [
      "nintendo switch",
      "not charging",
      "usb-c",
      "battery"
    ],
    "contentKind": "symptom",
    "brand": "Nintendo",
    "brandSlug": "nintendo",
    "sources": [
      {
        "label": "Nintendo Support",
        "url": "https://en-americas-support.nintendo.com/"
      }
    ],
    "featured": true
  }
];
