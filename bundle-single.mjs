/* Package the built site/ into ONE self-contained, double-clickable HTML file.
   Inlines CSS + JS, base64-embeds every image/video/font, and shims the
   History API so client-side navigation never throws on the file:// origin. */
import fs from "fs";
import path from "path";

const SITE = path.resolve("site");
const OUT = process.argv[2] || path.resolve(process.env.HOME, "Downloads", "GEM-Home-Team-Website.html");

const read = (p) => fs.readFileSync(path.join(SITE, p));
const readT = (p) => read(p).toString("utf8");
const MIME = { webp: "image/webp", mp4: "video/mp4", woff2: "font/woff2", woff: "font/woff",
  svg: "image/svg+xml", png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", ico: "image/x-icon", gif: "image/gif" };
const dataUri = (rel) => {
  const ext = rel.split(".").pop().toLowerCase();
  return `data:${MIME[ext] || "application/octet-stream"};base64,${read(rel).toString("base64")}`;
};

let html = readT("index.html");

// 1) Strip our ?v=NNNN cache-buster from every root-relative reference so the
//    path matches a real file on disk before we swap in the data URI.
html = html.replace(/(\/(?:assets|fonts|js)\/[^"'?]+|\/(?:fonts|tokens)\.css)\?v=\d+/g, "$1");

// 1b) The two background videos (hero 14 MB, bento 1.7 MB) are far too big to
//     base64-inline — a data: URI that large hangs the renderer and won't
//     autoplay. They're swapped for sentinel keys AFTER the JS is inlined (so
//     the references inside app.js are covered too) and a captured still frame
//     (poster) is applied by a small runtime script.
const SKIP_VIDEO = ["hero.mp4", "bento.mp4"];

// 2) Inline the two stylesheets. fonts.css points at /fonts/*.woff2 → embed those too.
let fontsCss = readT("fonts.css").replace(/url\((["']?)\/fonts\/([^)"']+)\1\)/g, (_m, _q, f) => `url(${dataUri("fonts/" + f)})`);
let tokensCss = readT("tokens.css");
// Replacement FUNCTIONS (not strings) so any $-sequences in the CSS/JS aren't
// treated as special replacement patterns ($&, $1, $`, …).
html = html.replace(/<link[^>]*href="\/fonts\.css"[^>]*>/, () => `<style>\n${fontsCss}\n</style>`);
html = html.replace(/<link[^>]*href="\/tokens\.css"[^>]*>/, () => `<style>\n${tokensCss}\n</style>`);

// 3) Inline the three scripts (order matters: react → react-dom → app), preceded
//    by a history shim so pushState/replaceState can never throw on file://.
const shim = `(function(){var h=window.history;["pushState","replaceState"].forEach(function(k){var o=h[k]&&h[k].bind(h);if(o)h[k]=function(){try{return o.apply(h,arguments)}catch(e){}}});})();`;
const react = readT("js/react.js");
const reactDom = readT("js/react-dom.js");
const app = readT("js/app.js");
// Poster-swap runtime: give each background <video> a captured still frame and
// stop it from trying to load the (removed) source. Re-applies on React
// re-renders via a MutationObserver.
const heroPoster = dataUri("assets/hero-poster.jpg");
const bentoPoster = dataUri("assets/bento-poster.jpg");
const posterScript = `<script>(function(){
  var P={GEM_HERO_POSTER:${JSON.stringify(heroPoster)},GEM_BENTO_POSTER:${JSON.stringify(bentoPoster)}};
  function fix(){document.querySelectorAll("video").forEach(function(v){
    var s=v.querySelector("source");if(!s)return;var k=s.getAttribute("src");
    if(P[k]){v.setAttribute("poster",P[k]);v.removeAttribute("autoplay");v.removeAttribute("loop");
      try{v.pause();}catch(e){}s.parentNode.removeChild(s);try{v.load();}catch(e){}}
  });}
  fix();new MutationObserver(fix).observe(document.documentElement,{childList:true,subtree:true});
  document.addEventListener("DOMContentLoaded",fix);
})();</script>`;
const combined = `<script>${shim}</script>\n<script>${react}</script>\n<script>${reactDom}</script>\n<script>${app}</script>\n${posterScript}`;
html = html
  .replace(/<script src="\/js\/react\.js"><\/script>\s*/, "")
  .replace(/<script src="\/js\/react-dom\.js"><\/script>\s*/, "")
  .replace(/<script src="\/js\/app\.js"><\/script>/, () => combined);

// 3b) NOW swap every video reference (index.html markup AND the inlined app.js,
//     which still carries a ?v= cache-buster) for the sentinel keys the poster
//     script recognizes.
html = html
  .replace(/\/assets\/hero\.mp4(\?v=\d+)?/g, "GEM_HERO_POSTER")
  .replace(/\/assets\/bento\.mp4(\?v=\d+)?/g, "GEM_BENTO_POSTER");

// 4) Embed every asset + root icon referenced anywhere in the document (HTML or inlined JS).
const embeds = {};
for (const f of fs.readdirSync(path.join(SITE, "assets"))) {
  if (SKIP_VIDEO.includes(f)) continue;                 // videos handled via posters, not inlined
  embeds["/assets/" + f] = () => dataUri("assets/" + f);
}
for (const f of ["favicon.svg", "apple-touch-icon.png", "favicon.ico", "og-image.jpg"]) {
  if (fs.existsSync(path.join(SITE, f))) embeds["/" + f] = () => dataUri(f);
}
// Replace longest paths first so /assets/team-megan.webp isn't shadowed by a prefix.
for (const p of Object.keys(embeds).sort((a, b) => b.length - a.length)) {
  if (html.includes(p)) html = html.split(p).join(embeds[p]());
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html);
const mb = (Buffer.byteLength(html) / 1048576).toFixed(1);
const leftover = (html.match(/(?:src|href)="\/(?:assets|js|fonts)\//g) || []).length;
console.log(`WROTE ${OUT}  (${mb} MB)`);
console.log(`Remaining un-inlined local refs: ${leftover}`);
