import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const strict = process.argv.includes("--strict");
const ignoredDirectories = new Set([".git", ".next", ".pnpm-store", ".vercel", "coverage", "node_modules", "out"]);
const sourceExtensions = new Set([".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs"]);
const assetExtensions = new Set([".avif", ".gif", ".html", ".ico", ".jpeg", ".jpg", ".json", ".png", ".svg", ".txt", ".webmanifest", ".webp", ".xml"]);
const errors = [];
const warnings = [];

function normalized(filePath) {
  return filePath.split(path.sep).join("/");
}

function walk(directory, output = []) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(absolute, output);
    else output.push(normalized(path.relative(root, absolute)));
  }
  return output;
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function addError(message) {
  errors.push(message);
}

function addWarning(message) {
  warnings.push(message);
}

const files = walk(root).sort();
const fileSet = new Set(files);

const requiredFiles = [
  ".github/workflows/ci.yml",
  ".gitignore",
  ".npmrc",
  "CHANGELOG.md",
  "README.md",
  "next.config.ts",
  "package.json",
  "pnpm-lock.yaml",
  "public/googlebe83404e57cafffd.html",
  "public/icon.svg",
  "public/og-image.svg",
  "scripts/submit-indexnow.mjs",
  "scripts/validate-content.mjs",
  "src/app/layout.tsx",
  "src/app/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "src/lib/site.ts",
  "tsconfig.json",
  "vercel.json",
];

for (const requiredFile of requiredFiles) {
  if (!fileSet.has(requiredFile)) addError(`Missing required file: ${requiredFile}`);
}

for (const legacyFile of [".gitlab-ci.yml", "GITLABA-YUKLE.bat"]) {
  if (fileSet.has(legacyFile)) addWarning(`Legacy GitLab file remains in the GitHub production repository: ${legacyFile}`);
}

for (const forbiddenLock of ["package-lock.json", "yarn.lock", "bun.lock", "bun.lockb"]) {
  if (fileSet.has(forbiddenLock)) addError(`Conflicting package-manager lock file: ${forbiddenLock}`);
}

for (const file of files) {
  const base = path.posix.basename(file).toLowerCase();
  if (/^(x|tmp|temp|test)(\..*)?$/.test(base)) addWarning(`Suspicious temporary file: ${file}`);
  if (/\.(bak|old|orig|rej|tmp)$/i.test(file)) addWarning(`Backup or rejected file should not be committed: ${file}`);
}

const caseInsensitivePaths = new Map();
for (const file of files) {
  const key = file.toLowerCase();
  const previous = caseInsensitivePaths.get(key);
  if (previous && previous !== file) addError(`Case-conflicting paths: ${previous} and ${file}`);
  caseInsensitivePaths.set(key, file);
}

let packageJson = null;
if (exists("package.json")) {
  packageJson = JSON.parse(read("package.json"));
  if (!String(packageJson.packageManager || "").startsWith("pnpm@")) addError("package.json must declare a pnpm packageManager version.");
  if (packageJson.engines?.node !== "22.x") addWarning(`Expected Node 22.x in package.json, found ${packageJson.engines?.node || "none"}.`);
  for (const script of ["build", "typecheck", "validate:content"]) {
    if (!packageJson.scripts?.[script]) addError(`Missing package script: ${script}`);
  }
}

if (packageJson && exists("README.md")) {
  const readme = read("README.md");
  const headingVersion = readme.match(/^#\s+Troublio\s+v([0-9.]+)/m)?.[1];
  if (headingVersion !== packageJson.version) addWarning(`README version ${headingVersion || "missing"} does not match package version ${packageJson.version}.`);
  if (!readme.includes("github.com/oguzdurak16-create/troubliox")) addWarning("README does not identify the active GitHub repository.");
  if (/gitlab\.com\/oguzdurak16\/troublio|GitLab CI|GITLABA-YUKLE\.bat/i.test(readme)) addWarning("README still contains obsolete GitLab deployment instructions.");
}

if (packageJson && exists("pnpm-lock.yaml")) {
  const lock = read("pnpm-lock.yaml");
  for (const [name, version] of Object.entries({ ...(packageJson.dependencies || {}), ...(packageJson.devDependencies || {}) })) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const escapedVersion = String(version).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const block = new RegExp(`\\n\\s{6}['\"]?${escapedName}['\"]?:\\n\\s{8}specifier:\\s*['\"]?${escapedVersion}['\"]?`, "m");
    if (!block.test(lock)) addError(`pnpm-lock.yaml importer does not match package.json for ${name}@${version}.`);
  }
}

function routeFromAppFile(file) {
  const relative = file.replace(/^src\/app\//, "");
  if (relative === "page.tsx" || relative === "page.ts" || relative === "route.ts" || relative === "route.js") return "/";
  const directory = relative.replace(/\/(page|route)\.(tsx?|jsx?)$/, "");
  if (directory === relative) return null;
  const segments = directory.split("/").filter((segment) => segment && !segment.startsWith("@") && !(segment.startsWith("(") && segment.endsWith(")")));
  return `/${segments.join("/")}`.replace(/\/$/, "") || "/";
}

const appRouteFiles = files.filter((file) => /^src\/app\/.+\/(page|route)\.(tsx?|jsx?)$/.test(file) || /^src\/app\/(page|route)\.(tsx?|jsx?)$/.test(file));
const routePaths = appRouteFiles.map(routeFromAppFile).filter(Boolean);
if (fileSet.has("src/app/sitemap.ts")) routePaths.push("/sitemap.xml");
if (fileSet.has("src/app/robots.ts")) routePaths.push("/robots.txt");
if (fileSet.has("src/app/manifest.ts")) routePaths.push("/manifest.webmanifest");

function routeRegex(routePath) {
  const escaped = routePath
    .split("/")
    .map((segment) => {
      if (!segment) return "";
      if (/^\[\.\.\..+\]$/.test(segment)) return ".+";
      if (/^\[\[\.\.\..+\]\]$/.test(segment)) return ".*";
      if (/^\[.+\]$/.test(segment)) return "[^/]+";
      return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp(`^${escaped || "/"}/?$`);
}

const routeMatchers = routePaths.map((routePath) => ({ routePath, regex: routeRegex(routePath) }));
function hasRoute(urlPath) {
  const clean = (urlPath.split(/[?#]/)[0] || "/").replace(/\/$/, "") || "/";
  return routeMatchers.some(({ regex }) => regex.test(clean));
}

if (exists("src/app/sitemap.ts")) {
  const sitemapSource = read("src/app/sitemap.ts");
  const staticArray = sitemapSource.match(/const\s+pages\s*=\s*\[([\s\S]*?)\];/)?.[1] || "";
  const staticPaths = [...staticArray.matchAll(/["'](\/?[^"']*)["']/g)].map((match) => match[1] || "/");
  for (const sitemapPath of staticPaths) {
    const routePath = sitemapPath || "/";
    if (!hasRoute(routePath)) addError(`Sitemap path has no matching app route: ${routePath}`);
  }
}

function resolveImport(fromFile, specifier) {
  if (!specifier.startsWith(".") && !specifier.startsWith("@/")) return true;
  const start = specifier.startsWith("@/")
    ? path.join(root, "src", specifier.slice(2))
    : path.resolve(root, path.dirname(fromFile), specifier);
  const candidates = [
    start,
    ...[".ts", ".tsx", ".js", ".jsx", ".mjs", ".cjs", ".json", ".css"].map((extension) => `${start}${extension}`),
    ...["index.ts", "index.tsx", "index.js", "index.jsx", "index.mjs", "index.cjs"].map((name) => path.join(start, name)),
  ];
  return candidates.some((candidate) => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
}

const codeFiles = files.filter((file) => sourceExtensions.has(path.extname(file)));
for (const file of codeFiles) {
  const source = read(file);
  const importMatches = [
    ...source.matchAll(/(?:import|export)\s+(?:type\s+)?(?:[^"']*?\s+from\s+)?["']([^"']+)["']/g),
    ...source.matchAll(/import\(\s*["']([^"']+)["']\s*\)/g),
  ];
  for (const match of importMatches) {
    const specifier = match[1];
    if (!resolveImport(file, specifier)) addError(`Unresolved import in ${file}: ${specifier}`);
  }
}

const internalLinks = new Map();
const assetReferences = new Map();
for (const file of codeFiles) {
  const source = read(file);
  for (const match of source.matchAll(/(?:href|url|src)\s*=\s*(?:\{\s*)?["'`]((?:\/)[^"'`$]+)["'`](?:\s*\})?/g)) {
    const value = match[1];
    const clean = value.split(/[?#]/)[0];
    if (!clean || clean === "/") continue;
    const extension = path.posix.extname(clean).toLowerCase();
    const targetMap = assetExtensions.has(extension) ? assetReferences : internalLinks;
    if (!targetMap.has(clean)) targetMap.set(clean, new Set());
    targetMap.get(clean).add(file);
  }
}

for (const [link, origins] of internalLinks) {
  if (!hasRoute(link)) addError(`Internal link has no matching app route: ${link} (${[...origins].join(", ")})`);
}
for (const [asset, origins] of assetReferences) {
  if (!fileSet.has(`public${asset}`) && !hasRoute(asset)) addError(`Referenced asset or generated endpoint is missing: ${asset} (${[...origins].join(", ")})`);
}

const verificationFiles = files.filter((file) => /^public\/google[a-z0-9]+\.html$/i.test(file));
if (verificationFiles.length !== 1) addWarning(`Expected exactly one Google verification file; found ${verificationFiles.length}.`);

const indexNowKeys = files.filter((file) => /^public\/[a-f0-9]{32}\.txt$/i.test(file));
if (indexNowKeys.length === 0) addWarning("No 32-character IndexNow verification file was found in public/.");

const summary = {
  files: files.length,
  appRouteFiles: appRouteFiles.length,
  routePatterns: routePaths.length,
  codeFiles: codeFiles.length,
  internalLinks: internalLinks.size,
  assetReferences: assetReferences.size,
  errors: errors.length,
  warnings: warnings.length,
};

console.log("\nTroublio repository audit");
console.table(summary);
if (errors.length) {
  console.error("\nERRORS");
  for (const issue of errors) console.error(`- ${issue}`);
}
if (warnings.length) {
  console.warn("\nWARNINGS");
  for (const issue of warnings) console.warn(`- ${issue}`);
}
if (!errors.length && !warnings.length) console.log("\nRepository structure is clean.");

if (errors.length || (strict && warnings.length)) process.exit(1);
