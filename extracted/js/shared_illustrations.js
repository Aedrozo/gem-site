/* ============================================================
   Shared content data — drawn from gemhometeam.com facts,
   re-written into original copy.
   ============================================================ */

/* Navigation. Page routes use real paths ("/route", handled by the SPA
   router via the History API); "/#section" links go Home and scroll. */
/* Every item links directly to a real destination. Items without their own
   page/section were removed rather than pointed at a generic page. */
const NAV = [
  { label: "The NEO Experience", href: "/experience" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/insights", children: [
    { label: "Insights & Guides", href: "/insights" },
    { label: "Total Cost Analysis", href: "/total-cost-analysis" },
    { label: "Mortgage Calculator", href: "/#mortgage-calculator" },
    { label: "VA Loan Calculator", href: "/va-calculator" },
    { label: "First-Time Buyers", href: "/insights/first-time-buyer-roadmap" },
  ]},
  { label: "Technology", href: "/technology" },
  { label: "Contact", href: "/contact" },
];

/* Individual NMLS IDs for licensed loan officers (shown under each headshot).
   Kevin Torres (Client Success Manager) is a non-licensed support role. */
const TEAM_NMLS = {
  "Megan Sawamura": "972639",
  "Sonny Alquizar": "1591708",
  "Camryn Hottell": "2118766",
  "Anthony Edrozo": "2829800",
};

const SERVICES = [
  {
    n: "01",
    title: "Mortgage Under Management",
    body: "We manage your mortgage like a financial advisor manages a portfolio — actively, for the next thirty years, not just to closing day.",
    illo: "wave",
    bullets: [
      "Continuous rate monitoring against your locked rate",
      "Automatic refi alerts when the math actually works",
      "Equity moves and HELOC modeling on demand",
    ],
  },
  {
    n: "02",
    title: "The NEO Experience App",
    body: "Loan progress, equity tracking, document uploads, and direct messaging with your team — all in one place, on your phone.",
    illo: "doc",
    bullets: [
      "Real-time loan status with document upload",
      "Live home value + equity tracking, updated monthly",
      "Direct messaging with your loan team",
    ],
  },
  {
    n: "03",
    title: "Home Concierge Service",
    body: "A vetted bench of contractors, designers, and handymen — kept on call so your home stays its best.",
    illo: "key",
    bullets: [
      "23+ pre-vetted local professionals on call",
      "Preferred-client pricing through our network",
      "One-tap booking, no quote-shopping required",
    ],
  },
  {
    n: "04",
    title: "Monthly Wealth Digest",
    body: "A clear monthly snapshot of your real estate equity, appreciation, and the moves available to you.",
    illo: "coins",
    bullets: [
      "Live home value pulled from comparable sales",
      "Month-over-month equity growth, plain-English",
      "Personalized moves you could make next",
    ],
  },
  {
    n: "05",
    title: "Annual Financial Reviews",
    body: "We sit down with you each year to make sure your mortgage is still aligned with where life is taking you next.",
    illo: "chart",
    bullets: [
      "Year-in-review of equity, payments, and savings",
      "Forward-looking strategy for the next 12 months",
      "Tax-document checklist for your CPA",
    ],
  },
  {
    n: "06",
    title: "Relocation Services",
    body: "No-cost renovation financing and a tech-forward move-in process to maximize your home's sale.",
    illo: "house",
    bullets: [
      "$0-upfront renovation financing before listing",
      "Coordinated move-in logistics from day one",
      "Same loan team across both transactions",
    ],
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Discovery",
    body: "We learn your numbers, your timeline, and what 'home' actually means for your family.",
  },
  {
    n: "02",
    title: "Strategy",
    body: "We model loan options against your goals and present a Total Cost Analysis you can actually read.",
  },
  {
    n: "03",
    title: "Execution",
    body: "We close fast in competitive markets, or coach patiently when you need time to get ready.",
  },
  {
    n: "04",
    title: "Wealth Maximization",
    body: "After closing, we keep watch — your mortgage is managed for the next 5, 10, 30 years.",
  },
];

const STATS = [
  { num: "$420M+", label: "in loans guided to closing" },
  { num: "1,800", label: "San Diego families served" },
  { num: "4.86★", label: "average client rating" },
  { num: "21 days", label: "median time to close" },
];

const FAQS = [
  {
    q: "How are you different from a bank?",
    a: "Banks sell you a product. We build a long-term strategy. Your loan is one part of a financial picture we keep watching — annual reviews, refi alerts when rates drop, equity moves when they make sense.",
  },
  {
    q: "Do I need 20% down?",
    a: "Not necessarily. We work with conventional, FHA, VA, jumbo, and physician loans — including options with 3–5% down. The right structure depends on your timeline and cash position, not a rule of thumb.",
  },
  {
    q: "How long does pre-approval take?",
    a: "Most clients get a verified pre-approval within 24–48 hours of submitting documents. We run it through full underwriting, not just a soft pull, so your offer carries weight.",
  },
  {
    q: "What does this actually cost me?",
    a: "Our consultation, analysis, and ongoing mortgage management — free. We're paid by the lender at closing. You get a Total Cost Analysis comparing every option so you can see the math yourself.",
  },
  {
    q: "Can you help if I'm not buying right now?",
    a: "Yes — most of our clients come to us 6 to 18 months before they buy. We help you position your credit, savings, and debt so when the right home shows up you're ready.",
  },
  {
    q: "Do you only work in San Diego?",
    a: "We're based in San Diego and licensed in every state — so whether you're buying here at home or relocating across the country, we can guide you the whole way.",
  },
];

/* Real, verbatim client reviews from Megan's verified Experience.com profile
   (experience.com/reviews/megan-sawamura-401537). Do not edit the quotes. */
/* 15 real, verbatim 5-star reviews pulled from Megan's verified Experience.com
   profile (experience.com/reviews/megan-sawamura-401537), which aggregates
   Zillow + Google + post-closing surveys. ONE review per client — duplicates of
   the same person on multiple platforms were removed. "…" marks a trim of a
   longer original; do not edit the quote text. */
const TESTIMONIALS = [
  { quote: "Megan and her Team recently helped me obtain the loan for my new home and I can wholeheartedly recommend them for their professionalism, industry knowledge, responsiveness and clear communication throughout the entire process.", name: "Michele S.", detail: "San Diego, CA · via Zillow" },
  { quote: "Megan was diligent, thorough, and very informative throughout the entire process. She did a great job getting us through the biggest purchase of our lives.", name: "Sean D.", detail: "Makawao, HI · via Experience.com" },
  { quote: "Megan and her team were absolutely amazing throughout my home buying process. My realtor connected me with Megan, and even though she was traveling, she took my call right away and got everything started without missing a beat.", name: "Justin S.", detail: "San Diego, CA · via Experience.com" },
  { quote: "Megan and her team were amazing to work with! They got everything done promptly and efficiently. My husband and I had an amazing first home buying experience because of Megan. Will use them for future homes and refinancing!", name: "Kaleena V.", detail: "San Diego, CA · Verified client review" },
  { quote: "The team at Neo has made my first home buying experience so easy. The communication is above and beyond, and they truly care about your well being. 10 out of 10", name: "Nicole R.", detail: "San Diego, CA · Verified client review" },
  { quote: "As a first-time home buyer, I was lost in the home buying process. The team's patience and communications made me feel at ease throughout the buying process.", name: "Vincent Z.", detail: "Poway, CA · Verified client review" },
  { quote: "I can't believe how easy our refinance was. Megan ushered us through the process, and offered us sound advice that made our decisions pain free. Great work!!", name: "Matthew J.", detail: "Carlsbad, CA · Verified client review" },
  { quote: "The GEM team was so knowledgeable, fast, friendly, and made the entire experience painless. They did such a great job explaining the process and making me feel comfortable. Thank you!", name: "Olivia P.", detail: "Sarasota, FL · Verified client review" },
  { quote: "What made it great was the exceptional communication and support we received from Megan and Camryn throughout the process. They always responded promptly to our calls and texts and were happy to answer any questions we had…", name: "Daniel G.", detail: "The Villages, FL · Verified client review" },
  { quote: "Thank you! I truly appreciate the support that you gave me. I was very worried about going through this but your team helped me get this accomplished.", name: "Myrna M.", detail: "Oceanside, CA · Verified client review" },
  { quote: "Megan and her team were extremely responsive and professional. They all took the time to patiently answer our plethora of questions and always managed to do it with a positive attitude even when we were flustered.", name: "Frances W.", detail: "Palm Springs, CA · Verified client review" },
  { quote: "Megan is an absolute Pro. Honest, easy to work with, knowledgeable and very much on top of the market. It has been a pleasure to work with her on multiple loans.", name: "Ramin S.", detail: "San Diego, CA · Verified client review" },
  { quote: "Megan and her team were always very responsive and patient when it came to addressing my many questions. The speed at which I was able to make my dream home a reality was well ahead of expectations! Thanks again for all your help!", name: "Gashirai Z.", detail: "San Diego, CA · Verified client review" },
  { quote: "Very transparent and guided us along every step of the way, making the process as easy and seamless as possible.", name: "Craig M.", detail: "Torrance, CA · Verified client review" },
  { quote: "Megan and Camryn were always so available and responsive. I appreciate all their hard work and how much information they provided. It was very clear.", name: "Sydney N.", detail: "Torrance, CA · Verified client review" },
];

/* Rotating review carousel — shows `perView` cards, advances one card every
   6s (pauses on hover/touch, respects prefers-reduced-motion), with arrows
   and dot navigation. Used on Home desktop (perView 3) and mobile (perView 1). */
function ReviewCarousel({ perView = 3 }) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touchX = React.useRef(null);
  const n = TESTIMONIALS.length;
  const maxIdx = n - perView;
  React.useEffect(() => {
    if (paused) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx((i) => (i >= maxIdx ? 0 : i + 1)), 6000);
    return () => clearInterval(t);
  }, [paused, maxIdx]);
  const prev = () => setIdx((i) => (i <= 0 ? maxIdx : i - 1));
  const next = () => setIdx((i) => (i >= maxIdx ? 0 : i + 1));
  const grads = [
    "linear-gradient(135deg, #5BC2E7 0%, #2EB6DE 100%)",
    "linear-gradient(135deg, #0A0A0A 0%, #2A4163 100%)",
    "linear-gradient(135deg, #B8E2F0 0%, #5BC2E7 100%)",
  ];
  const arrowStyle = {
    width: 40, height: 40, borderRadius: 20, border: "1px solid var(--line-2)",
    background: "#fff", color: "var(--ink)", fontSize: 16, display: "grid", placeItems: "center",
    cursor: "pointer", flexShrink: 0,
  };
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
      onTouchStart={(e) => { setPaused(true); touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => { setPaused(false); const dx = e.changedTouches[0].clientX - (touchX.current ?? 0); if (Math.abs(dx) > 40) (dx < 0 ? next() : prev()); }}>
      <div style={{ overflow: "hidden" }}>
        <div style={{ display: "flex", width: (n * 100 / perView) + "%",
          transform: "translateX(-" + (idx * 100 / n) + "%)", transition: "transform .55s cubic-bezier(.25,.8,.35,1)" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ width: (100 / n) + "%", padding: perView > 1 ? "0 10px" : "0 2px", boxSizing: "border-box" }}>
              <div style={{ padding: perView > 1 ? 32 : 22, background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
                display: "flex", flexDirection: "column", gap: perView > 1 ? 18 : 14, height: "100%", minHeight: perView > 1 ? 300 : 0,
                position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -10, right: 24, fontSize: 110, color: "var(--accent-tint)", fontFamily: "Georgia, serif", lineHeight: 1, fontStyle: "italic" }}>"</div>
                <div style={{ color: "var(--gold)", fontSize: 13, letterSpacing: ".15em", position: "relative" }}>★★★★★</div>
                <p style={{ fontSize: perView > 1 ? 15.5 : 15, lineHeight: 1.5, color: "var(--ink)", letterSpacing: "-0.008em", flex: 1, position: "relative" }}>
                  {t.quote}
                </p>
                <div style={{ borderTop: "1px solid var(--line)", paddingTop: 14, display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 19, background: grads[i % 3],
                    color: "#fff", display: "grid", placeItems: "center", fontSize: 12.5, fontWeight: 700, letterSpacing: "0.02em", flexShrink: 0 }}>
                    {t.name.split(" ").map((x) => x[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 2 }}>{t.detail}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 26 }}>
        <button onClick={prev} aria-label="Previous reviews" style={arrowStyle}>←</button>
        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {Array.from({ length: maxIdx + 1 }).map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} aria-label={"Go to review " + (i + 1)}
              style={{ width: i === idx ? 20 : 7, height: 7, borderRadius: 4, cursor: "pointer", padding: 0, border: "none",
                background: i === idx ? "var(--gold)" : "var(--line-2)", transition: "all .3s" }}></button>
          ))}
        </div>
        <button onClick={next} aria-label="Next reviews" style={arrowStyle}>→</button>
      </div>
    </div>
  );
}

const RESOURCES = [
  { kind: "GUIDE", title: "What 'rate buydown' actually costs you", read: "8 min" },
  { kind: "VIDEO", title: "San Diego market read — May 2026", read: "4 min" },
  { kind: "CALCULATOR", title: "Renting vs. buying in your zip code", read: "Interactive" },
];

/* Mortgage calc helper */
function monthlyPayment(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

Object.assign(window, { NAV, TEAM_NMLS, SERVICES, PROCESS, STATS, FAQS, TESTIMONIALS, RESOURCES, ReviewCarousel, monthlyPayment });
