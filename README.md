# The GEM Home Team at NEO Home Loans — Website

A real, deployable static website built from the original design file
(`GEM Team Website (offline).html`). The design exploration "canvas" was
converted into a navigable multi-page site.

## What's here

- **`site/`** — the deploy-ready website (this is the only folder you upload).
- **`extracted/`** — the editable source (JSX, images, fonts) pulled out of the
  original bundle.
- **`build.mjs`** — rebuilds `site/` from `extracted/`.

## Pages (hash routes)

| Route | Page |
|---|---|
| `#/` | Home |
| `/features` | The NEO Experience / Features |
| `/technology` | Technology |
| `/about` | About Megan & team |
| `/contact` | Contact |
| `/va-calculator` | VA Loan Calculator (interactive) |
| `/dashboard` | Client dashboard preview ("Sign in") |

Real URLs via the History API (not hash routes). Deep links rely on the host
serving `index.html` for unknown paths — handled by `site/_redirects` (Netlify)
and `site/vercel.json` (Vercel). "Apply now" → `https://neohomeloans.com/start/r/130389`.
Each page has a desktop and a mobile layout (mobile/tablet under 1024px).

SEO: per-page `<title>`/description/canonical, `sitemap.xml`, `robots.txt`,
JSON-LD `MortgageBroker` structured data, OG/Twitter cards, `<noscript>` fallback.
Note: search engines render JS, so pages index — but full server-side
**pre-rendering** (static HTML per route) is the remaining optional SEO step.

## How to rebuild

```bash
export PATH="/Users/anthony/.local/node/bin:$PATH"
cd /Users/anthony/gem-site
node build.mjs      # compile JSX, assets, SEO files, SSR bundle
node prerender.mjs  # generate static HTML per route (run AFTER build)
```

`build.mjs` writes the SPA + `_ssr/app.ssr.js`. `prerender.mjs` uses jsdom +
ReactDOMServer to bake each route into static HTML (`site/about/index.html`,
etc.) so crawlers/social scrapers get full content; the browser then loads that
HTML and React takes over for interactivity.

CTAs are wired centrally in `build.mjs`: "Apply"/"Start application" →
the NEO application; "Book/Schedule a call" + "See if we're a fit" →
`https://gemteam.youcanbook.me`; the contact form funnels to the application.

## How to deploy (pick one)

**Netlify drag-and-drop (easiest):** go to https://app.netlify.com/drop and
drag the `site/` folder onto the page. Done — you get a live URL. Add your
custom domain in Site settings → Domain.

**Vercel:** `npx vercel deploy site --prod` (or import the folder in the Vercel
dashboard).

Deep links need the host to serve `index.html` for unknown paths —
`site/_redirects` (Netlify) and `site/vercel.json` (Vercel) handle this.

## ⚠️ Before you go live — review checklist

1. **Compliance sign-off (required).** Have your Better broker / compliance
   officer confirm the footer's Better Mortgage disclosures are the current
   required versions, that every licensed loan officer shown on the site has an
   "Individual NMLS" entry (only **Megan Sawamura #972639** is listed now), and
   that the state-licensing list covers every state you originate in.
2. **Posted rates** — now labeled "SAMPLE / illustrative only" with a
   "not a rate quote or commitment to lend" disclaimer (done). Still: confirm
   with compliance, and ideally wire to a live rate feed with an "as-of" date.
3. **Footer/legal links** are now all wired (no dead `#` links anywhere — verified
   0 across all pages). Privacy/Terms/Accessibility currently point to **Better's**
   pages (`better.com/...`) since you operate under Better — confirm with compliance
   or swap for your own. Sitemap → `/sitemap.xml`.
4. **CTAs:** "Book / Schedule a call" + "See if we're a fit" → your scheduler
   `https://gemteam.youcanbook.me` (done). Contact form funnels to your NEO
   application (done). "Apply now" links to your NEO application (done).
5. **Replace placeholder testimonials (compliance).** The quotes on the home
   page ("Priya & Daniel R.", "Marcus T.", "Erin H.") are **sample content from
   the design** — they must be replaced with real, attributable client reviews
   before launch (FTC). Until then they should not be treated as genuine.
6. **Trust/proof section** (recommended): add real Google/Zillow/Experience.com
   review links + testimonials. Once provided, it will also be placed high on
   the home page. Needs your real data (no fabricated reviews).
