// Pre-render each route to static HTML so crawlers and social scrapers get full
// content without executing JS. Uses jsdom + ReactDOMServer.renderToString on the
// SSR bundle (_ssr/app.ssr.js), then injects the markup into the page shell.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { JSDOM } from "jsdom";

const root = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.join(root, "site");
const ORIGIN = "https://www.gemhometeam.com";

const META = {
  "/":              { dir: "",              title: "San Diego Mortgage Lender", desc: "The GEM Home Team at NEO Home Loans, powered by Better — San Diego mortgage lending managed for the next 30 years, not just to closing." },
  "/experience":    { dir: "experience",    title: "The NEO Experience", desc: "Mortgage Under Management, the NEO app, home concierge, and annual reviews — what you get when your lender stays for the next 30 years." },
  "/technology":    { dir: "technology",    title: "Technology", desc: "A San Diego team on Better's AI-native mortgage platform — the first fintech to fund over $110 billion in home loans." },
  "/about":         { dir: "about",         title: "About Megan & the GEM Home Team", desc: "Meet Megan Sawamura (NMLS #972639) and the GEM Home Team — San Diego mortgage advisors building generational wealth." },
  "/contact":       { dir: "contact",       title: "Contact", desc: "Talk to the GEM Home Team. Call (858) 567-2233 or start a conversation about your timeline and numbers." },
  "/va-calculator": { dir: "va-calculator", title: "VA Loan Calculator", desc: "A VA loan calculator built for service members and veterans — funding fee, disability waiver, BAH, and San Diego MHA modeled in." },
  "/total-cost-analysis": { dir: "total-cost-analysis", title: "Total Cost Analysis", desc: "Compare the full lifetime cost of two mortgage scenarios — monthly payment, total interest, total cost, and payoff date." },
  "/insights": { dir: "insights", title: "Insights & Guides", desc: "Plain-English mortgage guides from The GEM Home Team — buying, refinancing, VA loans, first-time buyers, and how to run the math." },
  "/insights/rate-buydown-cost": { dir: "insights/rate-buydown-cost", title: "What a mortgage rate buydown actually costs you", desc: "Points can lower your rate — but only pay off if you keep the loan past your break-even. How to run that math." },
  "/insights/rent-vs-buy": { dir: "insights/rent-vs-buy", title: "Rent vs. buy: how to actually run the math", desc: "The real rent-vs-buy comparison is about time horizon, total cost, and what your money could do elsewhere." },
  "/insights/va-loans-explained": { dir: "insights/va-loans-explained", title: "VA loans, explained", desc: "No down payment, no monthly mortgage insurance, and a funding fee that can be waived. How the VA loan benefit works." },
  "/insights/first-time-buyer-roadmap": { dir: "insights/first-time-buyer-roadmap", title: "The first-time buyer's roadmap, start to keys", desc: "You don't need 20% down. A plain-English walk through the steps, in the order they actually happen." },
  "/insights/when-to-refinance": { dir: "insights/when-to-refinance", title: "When refinancing actually makes sense (and when it doesn't)", desc: "A lower rate isn't automatically a win. Break-even math, when a refi pays off, and the amortization reset most people miss." },
};
const SITE = "The GEM Home Team at NEO Home Loans";

// ---- jsdom environment + polyfills ----
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><div id="root"></div></body></html>`, {
  url: ORIGIN + "/", pretendToBeVisual: true,
});
const w = dom.window;
w.self = w; w.global = w;
w.TextEncoder = TextEncoder; w.TextDecoder = TextDecoder;
w.queueMicrotask = w.queueMicrotask || queueMicrotask;
if (typeof MessageChannel !== "undefined") w.MessageChannel = MessageChannel;
w.matchMedia = (q) => ({ matches: false, media: q, onchange: null, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {}, dispatchEvent() { return false; } });
w.scrollTo = () => {};
w.requestAnimationFrame = w.requestAnimationFrame || ((cb) => setTimeout(() => cb(Date.now()), 0));
w.cancelAnimationFrame = w.cancelAnimationFrame || ((id) => clearTimeout(id));
w.IntersectionObserver = class { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } };
w.ResizeObserver = class { observe() {} unobserve() {} disconnect() {} };

const ctx = vm.createContext(w);
const run = (p) => vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: p });
run(path.join(root, "vendors", "react.production.min.js"));
run(path.join(root, "vendors", "react-dom-server-legacy.browser.production.min.js"));
run(path.join(root, "_ssr", "app.ssr.js"));

const React = w.React, RDS = w.ReactDOMServer;
if (!w.Site) throw new Error("Site component not found in SSR bundle");

// ---- shell template ----
const shell = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

function pageHtml(route, meta) {
  w.history.replaceState({}, "", route);
  let markup = "";
  try {
    markup = RDS.renderToString(React.createElement(w.Site));
  } catch (e) {
    console.error("  ! render failed for", route, "-", e.message);
    return null;
  }
  let html = shell
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${meta.title} | ${SITE}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(">)/, `$1${meta.desc.replace(/"/g, "&quot;")}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(">)/, `$1${ORIGIN}${route}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(">)/, `$1${ORIGIN}${route}$2`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
  return html;
}

let ok = 0;
const homeOut = [];
for (const [route, meta] of Object.entries(META)) {
  const html = pageHtml(route, meta);
  if (!html) continue;
  if (meta.dir === "") {
    homeOut.push(html); // write last (it's the template source)
  } else {
    const dir = path.join(DIST, meta.dir);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, "index.html"), html);
  }
  const bytes = html.length;
  console.log(`  prerendered ${route.padEnd(16)} -> ${(bytes / 1024).toFixed(0)} KB`);
  ok++;
}
if (homeOut.length) fs.writeFileSync(path.join(DIST, "index.html"), homeOut[0]);
console.log(`Done: ${ok}/${Object.keys(META).length} routes prerendered.`);
