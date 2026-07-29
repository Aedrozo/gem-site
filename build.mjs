// Build the production static site from the extracted JSX sources.
// Pre-compiles JSX with the bundled Babel (no in-browser Babel), concatenates
// in dependency order, copies assets/fonts, and emits dist/index.html.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const JS = path.join(root, "extracted", "js");
const EX = path.join(root, "extracted");
const DIST = path.join(root, "site"); // served by preview
const dist = (p) => path.join(DIST, p);
const VER = Date.now(); // cache-busting query for JS/CSS/video on each build

// ---- load Babel standalone in a VM ----
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(JS, "vendor_babel.js"), "utf8"), sandbox);
const Babel = sandbox.Babel;
console.log("Babel", Babel.version);

// ---- transpile + concatenate app sources (dependency order) ----
const ORDER = [
  "shared_data",        // assetUrl, NEOMark, illustrations, PhotoSlot
  "shared_illustrations", // NAV + content data
  "bold_1", "bold_2", "bold_3", "bold_4",
  "mobile_1", "mobile_2",
  "calc_1", "calc_2", "calc_3", "calc_4",
  "tca",                // Total Cost Analysis tool
  "insights",           // content hub + articles
  "site_entry",         // router (renders)
];
// ---- CTA wiring (central, by button label) ----
const APPLY = "https://neohomeloans.com/start/r/130389";   // NEO secure application
const BOOK  = "https://gemteam.youcanbook.me";             // scheduler
const YT    = "https://youtube.com/channel/UCR_MAH3M-_tpM8SzdtaluCg"; // GEM YouTube
const BOOK_LABELS  = ["See if we're a fit", "Schedule a 20-min call", "Schedule a call", "Book a 20-min call", "Book a call",
                      "Get a personalized rate", "Get my personalized plan", "We'll pull your COE",
                      "Tour the technology", "See crypto-backed mortgages"];
const APPLY_LABELS = ["Start application", "Start my application", "Get pre-approved", "Get the app", "See what I qualify for"];
const VIDEO_LABELS = ["Watch in 90 seconds", "Watch in 90 sec"];
// Internal-route CTAs (same-tab SPA navigation, no target=_blank).
const INTERNAL = {
  "Compare loan types": "/#mortgage-calculator",
  "Compare all": "/#mortgage-calculator",
  "Read Megan's full story": "/about",
  "Read all 412 reviews": "/about",
  "View full timeline": "/dashboard",
  "Full library (47)": "/insights",          // legacy VideoChapters (unrendered)
  "See your home's value": "/experience",    // legacy Homebot section (unrendered)
};
function wireCtas(src) {
  const wire = (labels, url, blank = true) => {
    for (const label of labels) {
      const esc = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const re = new RegExp('<a href="#"([^>]*)>(\\s*)(' + esc + ')', "g");
      const attrs = blank ? '" target="_blank" rel="noopener"' : '"';
      src = src.replace(re, '<a href="' + url + attrs + '$1>$2$3');
    }
  };
  wire(BOOK_LABELS, BOOK);
  wire(APPLY_LABELS, APPLY);
  wire(VIDEO_LABELS, YT);
  for (const [label, href] of Object.entries(INTERNAL)) wire([label], href, false);
  // Contact forms now submit for real via sendInquiry (shared_data.js) — no relabel/funnel.
  return src;
}

let out = "";
for (const name of ORDER) {
  let src = fs.readFileSync(path.join(JS, name + ".js"), "utf8");
  src = wireCtas(src);
  const { code } = Babel.transform(src, { presets: ["react"], filename: name + ".js" });
  out += `\n/* ===== ${name} ===== */\n` + code + "\n";
}
// All raster assets are served as WebP — rewrite the .png/.jpg references.
out = out.replace(/assets\/([a-z0-9-]+)\.(?:png|jpe?g)/g, "assets/$1.webp");
// Absolute asset paths so they resolve from any depth (real-URL routing).
out = out.replace(/(["'`])assets\//g, "$1/assets/");
// Cache-bust the videos so a new clip is never served stale after a deploy.
out = out.replace(/\/assets\/(hero|bento)\.mp4/g, "/assets/$1.mp4?v=" + VER);
fs.mkdirSync(dist("js"), { recursive: true });
fs.writeFileSync(dist("js/app.js"), out);
// SSR bundle: same code, but without the client mount call — exposes Site() for renderToString.
const outSsr = out.replace(/ReactDOM\.createRoot\([^;]*\);?/, "/* mount removed for SSR */");
fs.mkdirSync(path.join(root, "_ssr"), { recursive: true });
fs.writeFileSync(path.join(root, "_ssr", "app.ssr.js"), outSsr);
// Production React (18.3.1) — far smaller and no dev warnings.
fs.copyFileSync(path.join(root, "vendors", "react.production.min.js"), dist("js/react.js"));
fs.copyFileSync(path.join(root, "vendors", "react-dom.production.min.js"), dist("js/react-dom.js"));
console.log("app.js bytes:", out.length);

// ---- fonts ----
fs.mkdirSync(dist("fonts"), { recursive: true });
for (const f of fs.readdirSync(path.join(EX, "fonts"))) {
  fs.copyFileSync(path.join(EX, "fonts", f), dist("fonts/" + f));
}
// Absolute font URLs so @font-face resolves from any route depth.
const fontsCss = fs.readFileSync(path.join(EX, "fonts.css"), "utf8").replace(/url\("fonts\//g, 'url("/fonts/');
fs.writeFileSync(dist("fonts.css"), fontsCss);
fs.copyFileSync(path.join(EX, "tokens.css"), dist("tokens.css"));

// ---- brand / social assets ----
for (const f of ["favicon.svg", "apple-touch-icon.png", "og-image.jpg"]) {
  fs.copyFileSync(path.join(EX, f), dist(f));
}

// ---- images: optimized WebP, named to the paths the source expects ----
fs.mkdirSync(dist("assets"), { recursive: true });
for (const f of fs.readdirSync(path.join(EX, "webp"))) {
  fs.copyFileSync(path.join(EX, "webp", f), dist("assets/" + f));
}
// ---- self-hosted media (hero video, etc.) ----
const mediaDir = path.join(EX, "media");
if (fs.existsSync(mediaDir)) {
  for (const f of fs.readdirSync(mediaDir)) fs.copyFileSync(path.join(mediaDir, f), dist("assets/" + f));
}

// ---- SEO: structured data, sitemap, robots, host rewrites ----
const ORIGIN = "https://www.gemhometeam.com";
const PAGES = ["/", "/experience", "/technology", "/about", "/contact", "/va-calculator", "/total-cost-analysis",
  "/insights", "/insights/rate-buydown-cost", "/insights/rent-vs-buy", "/insights/va-loans-explained", "/insights/first-time-buyer-roadmap", "/insights/when-to-refinance"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MortgageBroker",
  name: "The GEM Home Team at NEO Home Loans",
  description: "San Diego mortgage lending, powered by Better — managed for the next 30 years, not just to closing.",
  url: ORIGIN + "/",
  telephone: "+1-858-567-2233",
  email: "Team@GemHomeTeam.com",
  image: ORIGIN + "/og-image.jpg",
  logo: ORIGIN + "/apple-touch-icon.png",
  areaServed: [{ "@type": "City", name: "San Diego" }, { "@type": "State", name: "California" }],
  address: { "@type": "PostalAddress", streetAddress: "10089 Willow Creek Rd, Suite 200", addressLocality: "San Diego", addressRegion: "CA", postalCode: "92131", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 32.8986, longitude: -117.1064 },
  founder: { "@type": "Person", name: "Megan Sawamura", jobTitle: "Loan Officer", identifier: "NMLS #972639" },
  parentOrganization: { "@type": "Organization", name: "Better Mortgage Corporation", identifier: "NMLS #330511" },
  sameAs: [
    "https://www.instagram.com/gemhometeam/",
    "https://facebook.com/GEMTeamMortgage/",
    "https://www.linkedin.com/in/megansawamura",
    "https://youtube.com/channel/UCR_MAH3M-_tpM8SzdtaluCg",
  ],
};

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map((p) => `  <url><loc>${ORIGIN}${p === "/" ? "/" : p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(dist("sitemap.xml"), sitemap);
fs.writeFileSync(dist("robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
// SPA deep-link fallback for hosts
fs.writeFileSync(dist("_redirects"), "/*    /index.html   200\n");
fs.writeFileSync(dist("vercel.json"), JSON.stringify({ rewrites: [{ source: "/(.*)", destination: "/index.html" }] }, null, 2) + "\n");

// ---- index.html ----
const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>The GEM Home Team at NEO Home Loans — San Diego Mortgage Lender</title>
  <meta name="description" content="The GEM Home Team at NEO Home Loans, powered by Better. San Diego mortgage lending with mortgage-under-management, VA loans, and a 30-year relationship — not just a closing.">
  <meta name="theme-color" content="#5BC2E7">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="canonical" href="${ORIGIN}/">
  <!-- Open Graph / social sharing -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="The GEM Home Team at NEO Home Loans">
  <meta property="og:title" content="The GEM Home Team at NEO Home Loans — San Diego Mortgage">
  <meta property="og:description" content="San Diego mortgage, managed for the next 30 years — not just to closing day. Powered by Better.">
  <meta property="og:url" content="${ORIGIN}/">
  <meta property="og:image" content="${ORIGIN}/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="The GEM Home Team at NEO Home Loans — San Diego Mortgage">
  <meta name="twitter:description" content="San Diego mortgage, managed for the next 30 years. Powered by Better.">
  <meta name="twitter:image" content="${ORIGIN}/og-image.jpg">
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <link rel="stylesheet" href="/fonts.css?v=${VER}">
  <link rel="stylesheet" href="/tokens.css?v=${VER}">
  <style>
    html, body { margin: 0; padding: 0; background: #fff; }
    #root { min-height: 100vh; }
    body { font-family: "Geist", system-ui, sans-serif; }
  </style>
</head>
<body class="b-page">
  <div id="root"></div>
  <noscript>
    <div style="max-width:680px;margin:48px auto;padding:0 24px;font-family:system-ui;line-height:1.6;color:#0A0A0A">
      <h1>The GEM Home Team at NEO Home Loans — San Diego</h1>
      <p>San Diego mortgage lending, powered by Better — your mortgage managed for the next 30 years, not just to closing day. We offer conventional, FHA, VA, jumbo, and physician loans.</p>
      <p>Call <a href="tel:+18585672233">(858) 567-2233</a> · Email <a href="mailto:Team@GemHomeTeam.com">Team@GemHomeTeam.com</a> · 10089 Willow Creek Rd, Suite 200, San Diego, CA 92131.</p>
      <p>Pages: <a href="/experience">The NEO Experience</a> · <a href="/technology">Technology</a> · <a href="/about">About</a> · <a href="/va-calculator">VA Loan Calculator</a> · <a href="/total-cost-analysis">Total Cost Analysis</a> · <a href="/contact">Contact</a>.</p>
      <p>This site requires JavaScript for the full experience.</p>
    </div>
  </noscript>
  <script src="/js/react.js?v=${VER}"></script>
  <script src="/js/react-dom.js?v=${VER}"></script>
  <script src="/js/app.js?v=${VER}"></script>
</body>
</html>
`;
fs.writeFileSync(dist("index.html"), html);
console.log("WROTE", dist("index.html"), "+ sitemap.xml, robots.txt, vercel.json");
