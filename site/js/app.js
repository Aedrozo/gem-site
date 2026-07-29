
/* ===== shared_data ===== */
/* Simple geometric illustrations.
   Strictly basic shapes — house, gem, key, chart bars, etc.
   Two-tone using currentColor + an `accent` prop.            */

const HouseIllo = ({
  size = 160,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 0.9,
  viewBox: "0 0 160 144",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "32",
  y: "60",
  width: "96",
  height: "68",
  fill: "currentColor",
  opacity: "0.06"
}), /*#__PURE__*/React.createElement("path", {
  d: "M22 66 L80 18 L138 66",
  stroke: "currentColor",
  strokeWidth: "2.5",
  strokeLinejoin: "round"
}), /*#__PURE__*/React.createElement("rect", {
  x: "32",
  y: "60",
  width: "96",
  height: "68",
  stroke: "currentColor",
  strokeWidth: "2.5",
  fill: "none"
}), /*#__PURE__*/React.createElement("rect", {
  x: "70",
  y: "86",
  width: "20",
  height: "42",
  fill: accent
}), /*#__PURE__*/React.createElement("rect", {
  x: "44",
  y: "74",
  width: "18",
  height: "18",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none"
}), /*#__PURE__*/React.createElement("rect", {
  x: "98",
  y: "74",
  width: "18",
  height: "18",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none"
}), /*#__PURE__*/React.createElement("line", {
  x1: "53",
  y1: "74",
  x2: "53",
  y2: "92",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "44",
  y1: "83",
  x2: "62",
  y2: "83",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "107",
  y1: "74",
  x2: "107",
  y2: "92",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "98",
  y1: "83",
  x2: "116",
  y2: "83",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "112",
  y: "28",
  width: "10",
  height: "22",
  fill: "currentColor"
}));
const GemIllo = ({
  size = 140,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 140 140",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M30 50 L70 14 L110 50 L70 126 Z",
  fill: accent
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 50 L110 50",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("path", {
  d: "M70 14 L70 126",
  stroke: "currentColor",
  strokeWidth: "1.5",
  opacity: "0.4"
}), /*#__PURE__*/React.createElement("path", {
  d: "M50 50 L70 14 L90 50",
  stroke: "currentColor",
  strokeWidth: "1.5",
  opacity: "0.5"
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 50 L70 50 L70 126",
  stroke: "currentColor",
  strokeWidth: "1.5",
  opacity: "0.25"
}), /*#__PURE__*/React.createElement("path", {
  d: "M110 50 L70 126",
  stroke: "currentColor",
  strokeWidth: "1.5",
  opacity: "0.25"
}));
const KeyIllo = ({
  size = 140,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 0.55,
  viewBox: "0 0 140 78",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "32",
  cy: "39",
  r: "22",
  stroke: "currentColor",
  strokeWidth: "2.5",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "32",
  cy: "39",
  r: "9",
  fill: accent
}), /*#__PURE__*/React.createElement("rect", {
  x: "50",
  y: "34",
  width: "80",
  height: "10",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: "106",
  y: "44",
  width: "8",
  height: "14",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: "122",
  y: "44",
  width: "8",
  height: "10",
  fill: "currentColor"
}));
const ChartIllo = ({
  size = 140,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 0.85,
  viewBox: "0 0 140 120",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "14",
  x2: "14",
  y2: "106",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("line", {
  x1: "14",
  y1: "106",
  x2: "130",
  y2: "106",
  stroke: "currentColor",
  strokeWidth: "1.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "30",
  y: "78",
  width: "14",
  height: "28",
  fill: "currentColor",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "52",
  y: "56",
  width: "14",
  height: "50",
  fill: "currentColor",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "74",
  y: "42",
  width: "14",
  height: "64",
  fill: "currentColor",
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("rect", {
  x: "96",
  y: "22",
  width: "14",
  height: "84",
  fill: accent
}), /*#__PURE__*/React.createElement("path", {
  d: "M30 70 L52 50 L74 38 L103 22",
  stroke: accent,
  strokeWidth: "2.5",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "103",
  cy: "22",
  r: "4",
  fill: accent
}));
const CoinsIllo = ({
  size = 140,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 0.75,
  viewBox: "0 0 140 106",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("ellipse", {
  cx: "70",
  cy: "88",
  rx: "48",
  ry: "10",
  fill: accent
}), /*#__PURE__*/React.createElement("rect", {
  x: "22",
  y: "76",
  width: "96",
  height: "12",
  fill: accent
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "70",
  cy: "76",
  rx: "48",
  ry: "10",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: accent
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "70",
  cy: "56",
  rx: "40",
  ry: "9",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "70",
  cy: "56",
  rx: "40",
  ry: "9",
  fill: accent
}), /*#__PURE__*/React.createElement("ellipse", {
  cx: "70",
  cy: "38",
  rx: "30",
  ry: "7",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: accent
}), /*#__PURE__*/React.createElement("text", {
  x: "70",
  y: "42",
  textAnchor: "middle",
  fontFamily: "serif",
  fontWeight: "700",
  fontSize: "12",
  fill: "currentColor"
}, "$"));
const SunIllo = ({
  size = 120,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 120 120",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "60",
  cy: "60",
  r: "22",
  fill: accent
}), Array.from({
  length: 12
}).map((_, i) => {
  const a = i / 12 * Math.PI * 2;
  const x1 = 60 + Math.cos(a) * 32,
    y1 = 60 + Math.sin(a) * 32;
  const x2 = 60 + Math.cos(a) * 50,
    y2 = 60 + Math.sin(a) * 50;
  return /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  });
}));
const WaveIllo = ({
  width = 200,
  height = 80,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: width,
  height: height,
  viewBox: "0 0 200 80",
  fill: "none",
  "aria-hidden": "true",
  preserveAspectRatio: "none"
}, /*#__PURE__*/React.createElement("path", {
  d: "M0 50 Q 25 20, 50 50 T 100 50 T 150 50 T 200 50",
  stroke: accent,
  strokeWidth: "3",
  fill: "none"
}), /*#__PURE__*/React.createElement("path", {
  d: "M0 62 Q 25 32, 50 62 T 100 62 T 150 62 T 200 62",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none",
  opacity: "0.3"
}));
const DocIllo = ({
  size = 120,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size * 1.2,
  viewBox: "0 0 120 144",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  x: "14",
  y: "10",
  width: "92",
  height: "120",
  fill: "currentColor",
  opacity: "0.04",
  stroke: "currentColor",
  strokeWidth: "2"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "26",
  width: "60",
  height: "6",
  fill: "currentColor"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "42",
  width: "68",
  height: "3",
  fill: "currentColor",
  opacity: "0.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "50",
  width: "68",
  height: "3",
  fill: "currentColor",
  opacity: "0.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "58",
  width: "40",
  height: "3",
  fill: "currentColor",
  opacity: "0.5"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "78",
  width: "68",
  height: "32",
  fill: accent,
  opacity: "0.7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M26 102 L40 88 L54 96 L72 80 L94 92",
  stroke: "currentColor",
  strokeWidth: "2",
  fill: "none"
}), /*#__PURE__*/React.createElement("rect", {
  x: "26",
  y: "118",
  width: "30",
  height: "6",
  fill: "currentColor"
}));
const MapIllo = ({
  width = 240,
  height = 160,
  accent = "#BC8A3D"
}) => /*#__PURE__*/React.createElement("svg", {
  width: width,
  height: height,
  viewBox: "0 0 240 160",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("rect", {
  width: "240",
  height: "160",
  fill: "currentColor",
  opacity: "0.04"
}), Array.from({
  length: 10
}).map((_, i) => /*#__PURE__*/React.createElement("line", {
  key: "h" + i,
  x1: "0",
  y1: i * 16,
  x2: "240",
  y2: i * 16,
  stroke: "currentColor",
  strokeWidth: "0.5",
  opacity: "0.18"
})), Array.from({
  length: 16
}).map((_, i) => /*#__PURE__*/React.createElement("line", {
  key: "v" + i,
  x1: i * 16,
  y1: "0",
  x2: i * 16,
  y2: "160",
  stroke: "currentColor",
  strokeWidth: "0.5",
  opacity: "0.18"
})), /*#__PURE__*/React.createElement("path", {
  d: "M0 90 Q 60 80, 100 90 T 240 100",
  stroke: "currentColor",
  strokeWidth: "1.5",
  fill: "none",
  opacity: "0.45"
}), /*#__PURE__*/React.createElement("path", {
  d: "M40 0 L60 60 L100 70 L120 160",
  stroke: "currentColor",
  strokeWidth: "1.5",
  fill: "none",
  opacity: "0.45"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "130",
  cy: "78",
  r: "22",
  fill: accent,
  opacity: "0.18"
}), /*#__PURE__*/React.createElement("path", {
  d: "M130 60 a14 14 0 1 1 0 28 a14 14 0 1 1 0 -28 z M130 78 L130 100",
  stroke: accent,
  strokeWidth: "2.5",
  fill: "none"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "130",
  cy: "74",
  r: "5",
  fill: accent
}));

/* Resolve an asset path to a bundled blob URL when running as a standalone
   inlined file (window.__resources populated by the bundler); otherwise return
   the original path so the live preview keeps working. */
function assetUrl(path) {
  if (!path) return path;
  const R = typeof window !== "undefined" && window.__resources;
  if (R) {
    const m = document.querySelector('meta[name="ext-resource-dependency"][content="' + path + '"]');
    if (m) {
      const id = m.getAttribute("data-resource-id");
      if (R[id]) return R[id];
    }
  }
  return path;
}
if (typeof window !== "undefined") window.assetUrl = assetUrl;

/* NEO mark — stylized M-in-hexagon brand mark approximation.
   Use the actual PNG (assets/neo-logo.webp) when you need the full lockup. */
const NEOMark = ({
  size = 38,
  color = "currentColor"
}) => /*#__PURE__*/React.createElement("svg", {
  width: size,
  height: size,
  viewBox: "0 0 60 60",
  fill: "none",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M30 2 L56 16 L56 44 L30 58 L4 44 L4 16 Z",
  fill: color
}), /*#__PURE__*/React.createElement("path", {
  d: "M14 16 L22 16 L22 32 L30 24 L38 32 L38 16 L46 16 L46 44 L38 44 L38 38 L30 30 L22 38 L22 44 L14 44 Z",
  fill: "white"
}));

/* Editorial photo placeholder — replaces the diagonal-stripe look.
   Sophisticated mesh-gradient frame with a small caption strip so it
   looks intentional even without a real photo. */
const PhotoSlot = ({
  width,
  height,
  label = "PHOTO",
  radius = 0,
  fill = false
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: fill ? "100%" : width,
    height: fill ? "100%" : height,
    position: fill ? "absolute" : "relative",
    inset: fill ? 0 : undefined,
    overflow: "hidden",
    borderRadius: radius,
    background: `
      radial-gradient(circle at 30% 20%, rgba(91,194,231,0.35) 0%, transparent 55%),
      radial-gradient(circle at 75% 80%, rgba(10,10,10,0.4) 0%, transparent 60%),
      radial-gradient(circle at 50% 50%, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.92) 100%)
    `
  }
}, /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    opacity: 0.25,
    mixBlendMode: "overlay",
    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 0.5px, transparent 0.5px)",
    backgroundSize: "3px 3px"
  }
}), [{
  top: 20,
  left: 20,
  brT: "1px solid rgba(255,255,255,0.4)",
  brL: "1px solid rgba(255,255,255,0.4)"
}, {
  top: 20,
  right: 20,
  brT: "1px solid rgba(255,255,255,0.4)",
  brR: "1px solid rgba(255,255,255,0.4)"
}, {
  bottom: 20,
  left: 20,
  brB: "1px solid rgba(255,255,255,0.4)",
  brL: "1px solid rgba(255,255,255,0.4)"
}, {
  bottom: 20,
  right: 20,
  brB: "1px solid rgba(255,255,255,0.4)",
  brR: "1px solid rgba(255,255,255,0.4)"
}].map((s, i) => /*#__PURE__*/React.createElement("div", {
  key: i,
  style: {
    position: "absolute",
    width: 22,
    height: 22,
    top: s.top,
    left: s.left,
    right: s.right,
    bottom: s.bottom,
    borderTop: s.brT,
    borderBottom: s.brB,
    borderLeft: s.brL,
    borderRight: s.brR
  }
})), /*#__PURE__*/React.createElement("div", {
  style: {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    color: "rgba(255,255,255,0.5)",
    fontFamily: "var(--font-mono)",
    fontSize: 10,
    letterSpacing: "0.18em",
    textTransform: "uppercase"
  }
}, /*#__PURE__*/React.createElement("span", {
  style: {
    padding: "5px 10px",
    border: "1px solid rgba(255,255,255,0.25)",
    borderRadius: 3
  }
}, label)));
Object.assign(window, {
  HouseIllo,
  GemIllo,
  KeyIllo,
  ChartIllo,
  CoinsIllo,
  SunIllo,
  WaveIllo,
  DocIllo,
  MapIllo,
  PhotoSlot,
  NEOMark
});

/* ---------- Contact form → email relay ----------
   FormSubmit.co AJAX endpoint: no account needed; submissions email to the
   team inbox. First-ever submission triggers a one-time activation email to
   that inbox — until it's confirmed, messages don't deliver. */
async function sendInquiry(rootId, interest, timeline) {
  const root = document.getElementById(rootId);
  const val = n => {
    const el = root && root.querySelector('[name="' + n + '"]');
    return el ? el.value.trim() : "";
  };
  const payload = {
    _subject: "Website inquiry — " + (val("name") || "new lead"),
    _template: "table",
    _captcha: "false",
    _replyto: val("email"),
    name: val("name"),
    email: val("email"),
    phone: val("phone"),
    interest: interest || "",
    timeline: timeline || "",
    message: val("message"),
    page: typeof window !== "undefined" ? window.location.href : ""
  };
  const res = await fetch("https://formsubmit.co/ajax/team@gemhometeam.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}
if (typeof window !== "undefined") window.sendInquiry = sendInquiry;

/* ===== shared_illustrations ===== */
/* ============================================================
   Shared content data — drawn from gemhometeam.com facts,
   re-written into original copy.
   ============================================================ */

/* Navigation. Page routes use real paths ("/route", handled by the SPA
   router via the History API); "/#section" links go Home and scroll. */
/* Every item links directly to a real destination. Items without their own
   page/section were removed rather than pointed at a generic page. */
const NAV = [{
  label: "The NEO Experience",
  href: "/experience"
}, {
  label: "Process",
  href: "/#process"
}, {
  label: "About",
  href: "/about"
}, {
  label: "Resources",
  href: "/insights",
  children: [{
    label: "Insights & Guides",
    href: "/insights"
  }, {
    label: "Total Cost Analysis",
    href: "/total-cost-analysis"
  }, {
    label: "Mortgage Calculator",
    href: "/#mortgage-calculator"
  }, {
    label: "VA Loan Calculator",
    href: "/va-calculator"
  }, {
    label: "First-Time Buyers",
    href: "/insights/first-time-buyer-roadmap"
  }]
}, {
  label: "Technology",
  href: "/technology"
}, {
  label: "Contact",
  href: "/contact"
}];

/* Individual NMLS IDs for licensed loan officers (shown under each headshot).
   Kevin Torres (Client Success Manager) is a non-licensed support role. */
const TEAM_NMLS = {
  "Megan Sawamura": "972639",
  "Sonny Alquizar": "1591708",
  "Camryn Hottell": "2118766",
  "Anthony Edrozo": "2829800"
};
const SERVICES = [{
  n: "01",
  title: "Mortgage Under Management",
  body: "We manage your mortgage like a financial advisor manages a portfolio — actively, for the next thirty years, not just to closing day.",
  illo: "wave",
  bullets: ["Continuous rate monitoring against your locked rate", "Automatic refi alerts when the math actually works", "Equity moves and HELOC modeling on demand"]
}, {
  n: "02",
  title: "The NEO Experience App",
  body: "Loan progress, equity tracking, document uploads, and direct messaging with your team — all in one place, on your phone.",
  illo: "doc",
  bullets: ["Real-time loan status with document upload", "Live home value + equity tracking, updated monthly", "Direct messaging with your loan team"]
}, {
  n: "03",
  title: "Home Concierge Service",
  body: "A vetted bench of contractors, designers, and handymen — kept on call so your home stays its best.",
  illo: "key",
  bullets: ["23+ pre-vetted local professionals on call", "Preferred-client pricing through our network", "One-tap booking, no quote-shopping required"]
}, {
  n: "04",
  title: "Monthly Wealth Digest",
  body: "A clear monthly snapshot of your real estate equity, appreciation, and the moves available to you.",
  illo: "coins",
  bullets: ["Live home value pulled from comparable sales", "Month-over-month equity growth, plain-English", "Personalized moves you could make next"]
}, {
  n: "05",
  title: "Annual Financial Reviews",
  body: "We sit down with you each year to make sure your mortgage is still aligned with where life is taking you next.",
  illo: "chart",
  bullets: ["Year-in-review of equity, payments, and savings", "Forward-looking strategy for the next 12 months", "Tax-document checklist for your CPA"]
}, {
  n: "06",
  title: "Relocation Services",
  body: "No-cost renovation financing and a tech-forward move-in process to maximize your home's sale.",
  illo: "house",
  bullets: ["$0-upfront renovation financing before listing", "Coordinated move-in logistics from day one", "Same loan team across both transactions"]
}];
const PROCESS = [{
  n: "01",
  title: "Discovery",
  body: "We learn your numbers, your timeline, and what 'home' actually means for your family."
}, {
  n: "02",
  title: "Strategy",
  body: "We model loan options against your goals and present a Total Cost Analysis you can actually read."
}, {
  n: "03",
  title: "Execution",
  body: "We close fast in competitive markets, or coach patiently when you need time to get ready."
}, {
  n: "04",
  title: "Wealth Maximization",
  body: "After closing, we keep watch — your mortgage is managed for the next 5, 10, 30 years."
}];
const STATS = [{
  num: "$420M+",
  label: "in loans guided to closing"
}, {
  num: "1,800",
  label: "San Diego families served"
}, {
  num: "4.86★",
  label: "average client rating"
}, {
  num: "21 days",
  label: "median time to close"
}];
const FAQS = [{
  q: "How are you different from a bank?",
  a: "Banks sell you a product. We build a long-term strategy. Your loan is one part of a financial picture we keep watching — annual reviews, refi alerts when rates drop, equity moves when they make sense."
}, {
  q: "Do I need 20% down?",
  a: "Not necessarily. We work with conventional, FHA, VA, jumbo, and physician loans — including options with 3–5% down. The right structure depends on your timeline and cash position, not a rule of thumb."
}, {
  q: "How long does pre-approval take?",
  a: "Most clients get a verified pre-approval within 24–48 hours of submitting documents. We run it through full underwriting, not just a soft pull, so your offer carries weight."
}, {
  q: "What does this actually cost me?",
  a: "Our consultation, analysis, and ongoing mortgage management — free. We're paid by the lender at closing. You get a Total Cost Analysis comparing every option so you can see the math yourself."
}, {
  q: "Can you help if I'm not buying right now?",
  a: "Yes — most of our clients come to us 6 to 18 months before they buy. We help you position your credit, savings, and debt so when the right home shows up you're ready."
}, {
  q: "Do you only work in San Diego?",
  a: "We're based in San Diego and licensed in every state — so whether you're buying here at home or relocating across the country, we can guide you the whole way."
}];

/* Real, verbatim client reviews from Megan's verified Experience.com profile
   (experience.com/reviews/megan-sawamura-401537). Do not edit the quotes. */
/* 15 real, verbatim 5-star reviews pulled from Megan's verified Experience.com
   profile (experience.com/reviews/megan-sawamura-401537), which aggregates
   Zillow + Google + post-closing surveys. ONE review per client — duplicates of
   the same person on multiple platforms were removed. "…" marks a trim of a
   longer original; do not edit the quote text. */
const TESTIMONIALS = [{
  quote: "Megan and her Team recently helped me obtain the loan for my new home and I can wholeheartedly recommend them for their professionalism, industry knowledge, responsiveness and clear communication throughout the entire process.",
  name: "Michele S.",
  detail: "San Diego, CA · via Zillow"
}, {
  quote: "Megan was diligent, thorough, and very informative throughout the entire process. She did a great job getting us through the biggest purchase of our lives.",
  name: "Sean D.",
  detail: "Makawao, HI · via Experience.com"
}, {
  quote: "Megan and her team were absolutely amazing throughout my home buying process. My realtor connected me with Megan, and even though she was traveling, she took my call right away and got everything started without missing a beat.",
  name: "Justin S.",
  detail: "San Diego, CA · via Experience.com"
}, {
  quote: "Megan and her team were amazing to work with! They got everything done promptly and efficiently. My husband and I had an amazing first home buying experience because of Megan. Will use them for future homes and refinancing!",
  name: "Kaleena V.",
  detail: "San Diego, CA · Verified client review"
}, {
  quote: "The team at Neo has made my first home buying experience so easy. The communication is above and beyond, and they truly care about your well being. 10 out of 10",
  name: "Nicole R.",
  detail: "San Diego, CA · Verified client review"
}, {
  quote: "As a first-time home buyer, I was lost in the home buying process. The team's patience and communications made me feel at ease throughout the buying process.",
  name: "Vincent Z.",
  detail: "Poway, CA · Verified client review"
}, {
  quote: "I can't believe how easy our refinance was. Megan ushered us through the process, and offered us sound advice that made our decisions pain free. Great work!!",
  name: "Matthew J.",
  detail: "Carlsbad, CA · Verified client review"
}, {
  quote: "The GEM team was so knowledgeable, fast, friendly, and made the entire experience painless. They did such a great job explaining the process and making me feel comfortable. Thank you!",
  name: "Olivia P.",
  detail: "Sarasota, FL · Verified client review"
}, {
  quote: "What made it great was the exceptional communication and support we received from Megan and Camryn throughout the process. They always responded promptly to our calls and texts and were happy to answer any questions we had…",
  name: "Daniel G.",
  detail: "The Villages, FL · Verified client review"
}, {
  quote: "Thank you! I truly appreciate the support that you gave me. I was very worried about going through this but your team helped me get this accomplished.",
  name: "Myrna M.",
  detail: "Oceanside, CA · Verified client review"
}, {
  quote: "Megan and her team were extremely responsive and professional. They all took the time to patiently answer our plethora of questions and always managed to do it with a positive attitude even when we were flustered.",
  name: "Frances W.",
  detail: "Palm Springs, CA · Verified client review"
}, {
  quote: "Megan is an absolute Pro. Honest, easy to work with, knowledgeable and very much on top of the market. It has been a pleasure to work with her on multiple loans.",
  name: "Ramin S.",
  detail: "San Diego, CA · Verified client review"
}, {
  quote: "Megan and her team were always very responsive and patient when it came to addressing my many questions. The speed at which I was able to make my dream home a reality was well ahead of expectations! Thanks again for all your help!",
  name: "Gashirai Z.",
  detail: "San Diego, CA · Verified client review"
}, {
  quote: "Very transparent and guided us along every step of the way, making the process as easy and seamless as possible.",
  name: "Craig M.",
  detail: "Torrance, CA · Verified client review"
}, {
  quote: "Megan and Camryn were always so available and responsive. I appreciate all their hard work and how much information they provided. It was very clear.",
  name: "Sydney N.",
  detail: "Torrance, CA · Verified client review"
}];

/* Rotating review carousel — shows `perView` cards, advances one card every
   6s (pauses on hover/touch, respects prefers-reduced-motion), with arrows
   and dot navigation. Used on Home desktop (perView 3) and mobile (perView 1). */
function ReviewCarousel({
  perView = 3
}) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const touchX = React.useRef(null);
  const n = TESTIMONIALS.length;
  const maxIdx = n - perView;
  React.useEffect(() => {
    if (paused) return;
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIdx(i => i >= maxIdx ? 0 : i + 1), 6000);
    return () => clearInterval(t);
  }, [paused, maxIdx]);
  const prev = () => setIdx(i => i <= 0 ? maxIdx : i - 1);
  const next = () => setIdx(i => i >= maxIdx ? 0 : i + 1);
  const grads = ["linear-gradient(135deg, #5BC2E7 0%, #2EB6DE 100%)", "linear-gradient(135deg, #0A0A0A 0%, #2A4163 100%)", "linear-gradient(135deg, #B8E2F0 0%, #5BC2E7 100%)"];
  const arrowStyle = {
    width: 40,
    height: 40,
    borderRadius: 20,
    border: "1px solid var(--line-2)",
    background: "#fff",
    color: "var(--ink)",
    fontSize: 16,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    flexShrink: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onTouchStart: e => {
      setPaused(true);
      touchX.current = e.touches[0].clientX;
    },
    onTouchEnd: e => {
      setPaused(false);
      const dx = e.changedTouches[0].clientX - (touchX.current ?? 0);
      if (Math.abs(dx) > 40) dx < 0 ? next() : prev();
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      width: n * 100 / perView + "%",
      transform: "translateX(-" + idx * 100 / n + "%)",
      transition: "transform .55s cubic-bezier(.25,.8,.35,1)"
    }
  }, TESTIMONIALS.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      width: 100 / n + "%",
      padding: perView > 1 ? "0 10px" : "0 2px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: perView > 1 ? 32 : 22,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 16,
      display: "flex",
      flexDirection: "column",
      gap: perView > 1 ? 18 : 14,
      height: "100%",
      minHeight: perView > 1 ? 300 : 0,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -10,
      right: 24,
      fontSize: 110,
      color: "var(--accent-tint)",
      fontFamily: "Georgia, serif",
      lineHeight: 1,
      fontStyle: "italic"
    }
  }, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--gold)",
      fontSize: 13,
      letterSpacing: ".15em",
      position: "relative"
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: perView > 1 ? 15.5 : 15,
      lineHeight: 1.5,
      color: "var(--ink)",
      letterSpacing: "-0.008em",
      flex: 1,
      position: "relative"
    }
  }, t.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 14,
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 19,
      background: grads[i % 3],
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 12.5,
      fontWeight: 700,
      letterSpacing: "0.02em",
      flexShrink: 0
    }
  }, t.name.split(" ").map(x => x[0]).join("").slice(0, 2)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, t.detail)))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 16,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: prev,
    "aria-label": "Previous reviews",
    style: arrowStyle
  }, "\u2190"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, Array.from({
    length: maxIdx + 1
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setIdx(i),
    "aria-label": "Go to review " + (i + 1),
    style: {
      width: i === idx ? 20 : 7,
      height: 7,
      borderRadius: 4,
      cursor: "pointer",
      padding: 0,
      border: "none",
      background: i === idx ? "var(--gold)" : "var(--line-2)",
      transition: "all .3s"
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: next,
    "aria-label": "Next reviews",
    style: arrowStyle
  }, "\u2192")));
}
const RESOURCES = [{
  kind: "GUIDE",
  title: "What 'rate buydown' actually costs you",
  read: "8 min"
}, {
  kind: "VIDEO",
  title: "San Diego market read — May 2026",
  read: "4 min"
}, {
  kind: "CALCULATOR",
  title: "Renting vs. buying in your zip code",
  read: "Interactive"
}];

/* Mortgage calc helper */
function monthlyPayment(principal, annualRate, years) {
  const r = annualRate / 100 / 12;
  const n = years * 12;
  if (r === 0) return principal / n;
  return principal * r / (1 - Math.pow(1 + r, -n));
}
Object.assign(window, {
  NAV,
  TEAM_NMLS,
  SERVICES,
  PROCESS,
  STATS,
  FAQS,
  TESTIMONIALS,
  RESOURCES,
  ReviewCarousel,
  monthlyPayment
});

/* ===== bold_1 ===== */
/* ============================================================
   BOLD direction — MODERN v3 · "Unlike any mortgage site"
   Cinematic, bento-grid, multiple video moments
   Cyan + white + black throughout
   ============================================================ */
const {
  useState: useStateB,
  useMemo: useMemoB,
  useRef: useRefB,
  useEffect: useEffectB
} = React;

/* ============================== Nav ============================== */
function BoldNav({
  active = "Home"
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 48,
      alignItems: "center",
      padding: "20px 56px",
      background: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--line)",
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/",
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-v2.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 32,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 4,
      justifyContent: "center"
    }
  }, NAV.map(n => {
    const isActive = active === n.label;
    if (!n.children) {
      return /*#__PURE__*/React.createElement("a", {
        key: n.label,
        href: n.href,
        style: {
          padding: "8px 14px",
          fontSize: 14,
          fontWeight: isActive ? 600 : 500,
          color: isActive ? "var(--ink)" : "var(--ink-soft)",
          letterSpacing: "-0.005em",
          transition: "color .15s",
          borderRadius: 8
        }
      }, n.label);
    }
    return /*#__PURE__*/React.createElement("div", {
      key: n.label,
      className: "nav-dd",
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: n.href,
      className: "nav-dd-trigger",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        padding: "8px 14px",
        fontSize: 14,
        fontWeight: isActive ? 600 : 500,
        color: isActive ? "var(--ink)" : "var(--ink-soft)",
        letterSpacing: "-0.005em",
        transition: "color .15s",
        borderRadius: 8,
        cursor: "pointer"
      }
    }, n.label, /*#__PURE__*/React.createElement("span", {
      className: "nav-dd-caret",
      style: {
        fontSize: 8,
        opacity: 0.6,
        transition: "transform .18s"
      }
    }, "\u25BC")), /*#__PURE__*/React.createElement("div", {
      className: "nav-dd-menu",
      style: {
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%) translateY(6px)",
        minWidth: 240,
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 12,
        boxShadow: "0 16px 48px -16px rgba(10,31,54,0.22)",
        padding: 8,
        zIndex: 50,
        opacity: 0,
        visibility: "hidden",
        transition: "opacity .16s, transform .16s"
      }
    }, n.children.map(c => /*#__PURE__*/React.createElement("a", {
      key: c.label,
      href: c.href,
      style: {
        display: "block",
        padding: "10px 14px",
        fontSize: 13.5,
        fontWeight: 500,
        color: "var(--ink-2)",
        borderRadius: 8,
        transition: "background .12s, color .12s"
      }
    }, c.label))));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/dashboard",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-2)"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "10px 20px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 8,
      transition: "background .15s"
    }
  }, "Apply now ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "\u2192"))));
}

/* ============================ Footer ============================ */
function BoldFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "80px 0 32px",
      background: "#0A0A0A",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 56,
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-white.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 56,
      width: "auto",
      marginBottom: 24,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,.55)",
      marginBottom: 16
    }
  }, "Powered by Better"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 24
    }
  }, [["instagram", "https://www.instagram.com/gemhometeam/", /*#__PURE__*/React.createElement("svg", {
    key: "ig",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2.5",
    y: "2.5",
    width: "19",
    height: "19",
    rx: "5",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    stroke: "currentColor",
    strokeWidth: "1.8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1.2",
    fill: "currentColor"
  }))], ["facebook", "https://facebook.com/GEMTeamMortgage/", /*#__PURE__*/React.createElement("svg", {
    key: "fb",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.55-1.5h1.45V4.4c-.25-.04-1.1-.1-2.1-.1-2.07 0-3.5 1.27-3.5 3.6v2H8.4v3h2.5V21h2.6z"
  }))], ["youtube", "https://youtube.com/channel/UCR_MAH3M-_tpM8SzdtaluCg", /*#__PURE__*/React.createElement("svg", {
    key: "yt",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21.6 7.2c-.2-1-.95-1.75-1.95-2C17.85 4.8 12 4.8 12 4.8s-5.85 0-7.65.4c-1 .25-1.75 1-1.95 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 .95 1.75 1.95 2 1.8.4 7.65.4 7.65.4s5.85 0 7.65-.4c1-.25 1.75-1 1.95-2C22 15 22 12 22 12s0-3-.4-4.8zM10 15.5v-7l5.5 3.5-5.5 3.5z"
  }))], ["linkedin", "https://linkedin.com/in/megansawamura", /*#__PURE__*/React.createElement("svg", {
    key: "li",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4.5 4.5a2 2 0 100 4 2 2 0 000-4zM3 9.5h3v11H3v-11zM9 9.5h2.9v1.5h.05c.4-.75 1.4-1.55 2.85-1.55 3.05 0 3.6 2 3.6 4.6v6.45h-3v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-3v-11z"
  }))]].map(([name, href, icon]) => /*#__PURE__*/React.createElement("a", {
    key: name,
    href: href,
    "aria-label": name,
    style: {
      width: 36,
      height: 36,
      borderRadius: 18,
      border: "1px solid rgba(255,255,255,0.2)",
      display: "grid",
      placeItems: "center",
      color: "rgba(255,255,255,0.75)",
      transition: "all .15s"
    }
  }, icon)))), [["Resources", [["Mortgage calculator", "/#mortgage-calculator"], ["VA loan calculator", "/va-calculator"], ["First-time buyers", "/experience"], ["Refinance", "/insights/when-to-refinance"], ["The NEO Experience", "/experience"]]], ["Company", [["About Megan", "/about"], ["The team", "/about"], ["Reviews", "/about"], ["Technology", "/technology"], ["Contact", "/contact"]]], ["Contact", [["(858) 567-2233", "tel:+18585672233"], ["Team@GemHomeTeam.com", "mailto:Team@GemHomeTeam.com"], ["10089 Willow Creek Rd, Suite 200", null], ["San Diego, CA 92131", null]]]].map(([head, items]) => /*#__PURE__*/React.createElement("div", {
    key: head
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#fff",
      marginBottom: 18
    }
  }, head), items.map(([label, href]) => href ? /*#__PURE__*/React.createElement("a", {
    key: label,
    href: href,
    style: {
      display: "block",
      fontSize: 13.5,
      color: "rgba(255,255,255,.72)",
      padding: "6px 0"
    }
  }, label) : /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      fontSize: 13.5,
      color: "rgba(255,255,255,.55)",
      padding: "6px 0"
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      alignItems: "center",
      padding: "24px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 4,
      border: "1.5px solid rgba(255,255,255,0.4)",
      display: "grid",
      placeItems: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 4,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "transparent"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "transparent"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "EQUAL HOUSING"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.85)",
      fontWeight: 500
    }
  }, "LENDER"))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "NMLS CONSUMER ACCESS"), /*#__PURE__*/React.createElement("a", {
    href: "http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511",
    style: {
      fontSize: 13,
      color: "#fff",
      fontWeight: 500
    }
  }, "nmlsconsumeraccess.org \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "BETTER MORTGAGE NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#330511")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 32,
      background: "rgba(255,255,255,0.1)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "INDIVIDUAL NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#972639 \xB7 Megan Sawamura"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6,
      maxWidth: 1100,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Production volume, transaction counts, client ratings, and any rankings or awards (including \u201CTop 1% of U.S. Loan Officers\u201D) reflect historical results from internal records or third-party sources and are not a guarantee of future results. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "\xA9 2026 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved. Better BMC operates under the name Better Mortgage Corporation in New York."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. ", /*#__PURE__*/React.createElement("a", {
    href: "http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "NMLS Consumer Access"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325\u201341 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's ", /*#__PURE__*/React.createElement("a", {
    href: "https://better.com/with/better-realestate-license",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "license numbers"), ". Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (\"Better Real Estate Partner Agents\"). Equal Housing Opportunity. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "New York State Housing and Anti-Discrimination Notice"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "New York Standard Operating Procedures"), " \xB7 Texas Real Estate Commission: ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=645736",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "Information About Brokerage Services"), " \xB7 ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "Consumer Protection Notice"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Better Settlement Services, LLC. 325\u201341 Chestnut Street, Suite 803, Philadelphia, PA 19106. Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325\u201341 Chestnut Street, Suite 807, Philadelphia, PA 19106. Insurance quotes and policies are offered through Better Cover, LLC. Here is a full listing of Better Cover, LLC's ", /*#__PURE__*/React.createElement("a", {
    href: "https://www.bettercover.com/licenses",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "license numbers"), ". Better Inspect, LLC maintains its corporate headquarters at 325\u201341 Chestnut Street, Suite 846, Philadelphia, PA 19106."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states."), /*#__PURE__*/React.createElement("p", null, "Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "rgba(255,255,255,.1)",
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16,
      fontSize: 11,
      color: "rgba(255,255,255,.5)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 The GEM Home Team at NEO Home Loans \xB7 All rights reserved"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://better.com/about-us/privacy-policy",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "rgba(255,255,255,0.65)"
    }
  }, "Privacy policy"), /*#__PURE__*/React.createElement("a", {
    href: "https://better.com/about-us/terms-of-use",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "rgba(255,255,255,0.65)"
    }
  }, "Terms of use"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:Team@GemHomeTeam.com?subject=Accessibility%20feedback",
    style: {
      color: "rgba(255,255,255,0.65)"
    }
  }, "Accessibility"), /*#__PURE__*/React.createElement("a", {
    href: "http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511",
    target: "_blank",
    rel: "noopener",
    style: {
      color: "rgba(255,255,255,0.65)"
    }
  }, "NMLS Consumer Access"), /*#__PURE__*/React.createElement("a", {
    href: "/sitemap.xml",
    style: {
      color: "rgba(255,255,255,0.65)"
    }
  }, "Sitemap")))));
}

/* ============================ Marquee ============================ */
function Marquee({
  items
}) {
  const list = [...items, ...items, ...items];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      padding: "18px 0",
      overflow: "hidden",
      borderTop: "1px solid var(--gold-deep)",
      borderBottom: "1px solid var(--gold-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 64,
      whiteSpace: "nowrap",
      animation: "marquee 40s linear infinite",
      fontWeight: 600,
      fontSize: 15,
      letterSpacing: "-0.005em"
    }
  }, list.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16
    }
  }, x, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: 0.5
    }
  }, "\u2726")))), /*#__PURE__*/React.createElement("style", null, `@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}`));
}

/* ============================ HOME ============================ */
function BoldHome() {
  const [oFaq, setOFaq] = useStateB(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Home (Desktop)"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Home"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      minHeight: 720,
      maxHeight: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "80px 56px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.35,
      backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      background: "var(--accent-tint)",
      borderRadius: 999,
      marginBottom: 32,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold-deep)",
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "var(--gold-deep)"
    }
  }), "Trusted by 1,200+ San Diego homeowners"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 96,
      lineHeight: 0.94,
      letterSpacing: "-0.04em",
      fontWeight: 500,
      color: "var(--ink)",
      marginBottom: 28
    }
  }, "Buy the home.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "Build the wealth."), /*#__PURE__*/React.createElement("br", null), "Keep both."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.5,
      color: "var(--ink-2)",
      maxWidth: 520,
      marginBottom: 40
    }
  }, "Most lenders close the deal and disappear. We manage your mortgage for the next thirty years \u2014 through every rate cycle and life stage in between."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "14px 24px",
      fontSize: 15,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10,
      boxShadow: "0 6px 20px -6px rgba(10,10,10,.4)"
    }
  }, "Get Pre-Approved \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "14px 22px",
      fontSize: 15,
      fontWeight: 600,
      background: "var(--bg)",
      color: "var(--ink)",
      border: "1px solid var(--line-2)",
      borderRadius: 10
    }
  }, "Schedule A Consultation \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.5,
      maxWidth: 560
    }
  }, "Rates change daily and depend on your credit, loan amount, and property. ", /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "Contact us for a personalized quote.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    key: "hero-home",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center"
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "/assets/hero.mp4?v=1785302872537",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0) 35%, rgba(10,10,10,0.28) 100%)"
    }
  })))), /*#__PURE__*/React.createElement(Marquee, {
    items: ["$420M+ funded", "1,800 San Diego families", "★ 4.86 average rating", "202 verified reviews", "21 day median close", "68% repeat clients", "NMLS #972639"]
  }), /*#__PURE__*/React.createElement("section", {
    id: "experience",
    style: {
      padding: "120px 0",
      background: "var(--bg)",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "What we do")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 720
    }
  }, "Six commitments. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "Zero asterisks.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(12, 1fr)",
      gridTemplateRows: "auto auto",
      gap: 16,
      perspective: 1200
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 7",
      gridRow: "span 2",
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      minHeight: 480,
      background: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    key: "bento-vr",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      opacity: 0.55
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "/assets/bento.mp4?v=1785302872537",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: 40,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      color: "#fff",
      minHeight: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold)"
    }
  }, "01 \xB7 Annual review"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-0.028em",
      lineHeight: 1.02,
      marginBottom: 16,
      color: "#fff"
    }
  }, "Your mortgage gets a check-up every year."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgba(255,255,255,.82)",
      maxWidth: 480
    }
  }, "Like a financial advisor for the biggest loan you'll ever take \u2014 we sit down each year to make sure it's still working for your life.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 5",
      gridRow: "span 1",
      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%)",
      padding: 40,
      borderRadius: 20,
      color: "var(--ink-on-cyan)",
      position: "relative",
      overflow: "hidden"
    },
    className: "tilt-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -40,
      right: -40,
      width: 200,
      height: 200,
      borderRadius: 100,
      background: "rgba(255,255,255,0.15)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--ink-on-cyan)",
      opacity: 0.7,
      marginBottom: 14
    }
  }, "02 \xB7 Rate alerts"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.022em",
      lineHeight: 1.05,
      marginBottom: 12
    }
  }, "We watch the market.", /*#__PURE__*/React.createElement("br", null), "You watch the inbox."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.5,
      opacity: 0.85,
      maxWidth: 380,
      marginBottom: 20
    }
  }, "Automated refi alerts when rates drop enough to matter. Math attached."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      background: "var(--ink)",
      color: "var(--gold)",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600
    }
  }, "\u26A1 Live now \xB7 $214/mo saved avg"))), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: "span 5",
      gridRow: "span 1",
      background: "var(--ink)",
      color: "#fff",
      padding: 40,
      borderRadius: 20,
      position: "relative",
      overflow: "hidden"
    },
    className: "tilt-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold)",
      marginBottom: 14
    }
  }, "03 \xB7 Home concierge"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.022em",
      lineHeight: 1.05,
      marginBottom: 16,
      color: "#fff"
    }
  }, "A vetted bench of pros, on call for life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 20,
      flexWrap: "wrap"
    }
  }, ["Handymen", "Designers", "Landscapers", "Electricians", "Roofers", "+ 18 more"].map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      padding: "6px 12px",
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: 999,
      fontSize: 12,
      color: "rgba(255,255,255,0.85)"
    }
  }, x)))), /*#__PURE__*/React.createElement("div", {
    className: "tilt-card",
    style: {
      gridColumn: "span 4",
      gridRow: "span 1",
      background: "#fff",
      border: "1px solid var(--line)",
      padding: 32,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 12
    }
  }, "04 \xB7 Wealth digest"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.012em",
      lineHeight: 1.2,
      marginBottom: 14
    }
  }, "Monthly equity snapshot."), /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "60",
    viewBox: "0 0 200 60"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "bgs",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5BC2E7",
    stopOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#5BC2E7",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 45 L25 40 L50 35 L75 32 L100 28 L125 22 L150 18 L175 10 L200 5 L200 60 L0 60 Z",
    fill: "url(#bgs)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 45 L25 40 L50 35 L75 32 L100 28 L125 22 L150 18 L175 10 L200 5",
    stroke: "var(--gold-deep)",
    strokeWidth: "2",
    fill: "none"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 12,
      fontSize: 12,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "11 mo ago"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#1F8A5B",
      fontWeight: 600
    }
  }, "\u2191 +$32K equity"))), /*#__PURE__*/React.createElement("div", {
    className: "tilt-card",
    style: {
      gridColumn: "span 4",
      gridRow: "span 1",
      background: "var(--bg-2)",
      padding: 32,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 12
    }
  }, "05 \xB7 The promise"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.012em",
      lineHeight: 1.2,
      marginBottom: 14
    }
  }, "Your mortgage evolves with your life."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      marginTop: 16
    }
  }, ["Marriage", "First baby", "Job change", "Empty nest", "Retirement"].map((x, i) => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontSize: 13,
      color: "var(--ink-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "var(--gold-deep)"
    }
  }), x, " \u2192 strategy update")))), /*#__PURE__*/React.createElement("div", {
    className: "tilt-card",
    style: {
      gridColumn: "span 4",
      gridRow: "span 1",
      background: "#fff",
      border: "1px solid var(--line)",
      padding: 32,
      borderRadius: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 12
    }
  }, "06 \xB7 Relocation"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.012em",
      lineHeight: 1.2,
      marginBottom: 14
    }
  }, "No-cost renovation financing + tech-forward move-in."), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--gold-deep)",
      marginTop: 16
    }
  }, "$0", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: "var(--ink-soft)",
      marginLeft: 6
    }
  }, "upfront cost")))))), /*#__PURE__*/React.createElement("section", {
    id: "mortgage-calculator",
    className: "b-section-warm",
    style: {
      padding: "120px 0",
      position: "relative",
      overflow: "hidden",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 60,
      right: -200,
      width: 500,
      height: 500,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "The numbers"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24
    }
  }, "What does this ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "actually"), " cost me each month?"), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 32,
      maxWidth: 440
    }
  }, "Real numbers, computed with current San Diego county tax rates and average homeowners insurance baked in. No email gate."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "12px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10
    }
  }, "Get a personalized rate \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "/#mortgage-calculator",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "12px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--bg)",
      color: "var(--ink)",
      border: "1px solid var(--line-2)",
      borderRadius: 10
    }
  }, "Compare loan types"))), /*#__PURE__*/React.createElement(BoldCalculator, null)))), /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      padding: "120px 0",
      background: "var(--bg)",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 64,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "How it works")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 680
    }
  }, "Four steps. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "Then we never leave.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 28,
      left: "12.5%",
      right: "12.5%",
      height: 2,
      background: "linear-gradient(90deg, var(--gold) 0%, var(--gold) 75%, var(--line-2) 75%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 24
    }
  }, PROCESS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: i <= 2 ? "var(--gold)" : "var(--bg)",
      border: i <= 2 ? "none" : "2px solid var(--line-2)",
      color: i <= 2 ? "var(--ink-on-cyan)" : "var(--ink-mute)",
      display: "grid",
      placeItems: "center",
      fontWeight: 700,
      fontSize: 16,
      marginBottom: 24,
      position: "relative",
      zIndex: 1,
      boxShadow: i <= 2 ? "0 4px 12px -4px rgba(46,182,222,0.5)" : "none"
    }
  }, p.n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gold-deep)",
      fontWeight: 600,
      letterSpacing: ".08em",
      marginBottom: 8
    }
  }, ["~30 MIN", "1–3 DAYS", "21 DAYS AVG", "30 YEARS"][i]), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      marginBottom: 10,
      fontSize: 22
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 14,
      maxWidth: 240
    }
  }, p.body))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 32,
      borderTop: "1px solid var(--line)",
      display: "flex",
      flexWrap: "wrap",
      gap: 20,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 15,
      maxWidth: 540
    }
  }, "Step two is where most lenders just quote a rate. We hand you a ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "Total Cost Analysis"), " \u2014 every option, side by side, with what each truly costs over the years you'll hold it."), /*#__PURE__*/React.createElement("a", {
    href: "/total-cost-analysis",
    className: "b-btn b-btn-primary",
    style: {
      padding: "12px 22px",
      fontSize: 14,
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, "See a sample Total Cost Analysis \u2192")))), /*#__PURE__*/React.createElement(ScenarioSection, null), /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: "var(--ink)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      minHeight: 720,
      maxHeight: 820
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/megan-portrait.webp"),
    alt: "Megan Sawamura",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center bottom",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0) 70%, var(--ink) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 40,
      left: 40,
      padding: "10px 16px",
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: ".05em",
      boxShadow: "0 8px 24px -8px rgba(46,182,222,0.6)"
    }
  }, "\u2605 TOP 1% OF U.S. LOAN OFFICERS"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 40,
      left: 40,
      padding: "10px 16px",
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(20px)",
      color: "var(--ink)",
      borderRadius: 12,
      fontSize: 12,
      fontWeight: 600
    }
  }, "NMLS #972639")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "80px 80px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold)",
      marginBottom: 18
    }
  }, "Meet Megan Sawamura"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 54,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1.04,
      marginBottom: 28,
      color: "#fff",
      maxWidth: 540
    }
  }, "\"From a $20 stocking stuffer to ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      fontStyle: "italic"
    }
  }, "five"), " properties.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.78)",
      marginBottom: 16,
      maxWidth: 520
    }
  }, "Every Christmas, instead of presents, my grandfather gave me a Fidelity stock statement. At twenty-four it was worth $20,000 \u2014 and it bought my first house."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.78)",
      marginBottom: 40,
      maxWidth: 520
    }
  }, "Eight years later, five properties. I built GEM to give other families the same head start \u2014 without needing the wealthy grandfather to start it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, auto)",
      gap: 48,
      marginBottom: 40
    }
  }, [["$420M+", "guided to closing"], ["1,800", "families served"], ["4.86 ★", "202 reviews"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 30,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "#fff"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "rgba(255,255,255,0.55)",
      marginTop: 4
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "/about",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 10
    }
  }, "Read Megan's full story \u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Client voices")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 720
    }
  }, "The proof ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "shows up"), " at closing."))), /*#__PURE__*/React.createElement(ReviewCarousel, {
    perView: 3
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 36,
      display: "flex",
      justifyContent: "center",
      gap: 14,
      alignItems: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: 14.5,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      letterSpacing: ".1em"
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)",
      fontWeight: 700
    }
  }, "4.86"), " \xB7 202 verified reviews on Experience.com"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.experience.com/reviews/megan-sawamura-401537",
    target: "_blank",
    rel: "noopener",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "Read all reviews \u2192")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 360,
      marginBottom: 24
    }
  }, "Things people ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "actually"), " ask us."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      maxWidth: 320
    }
  }, "Still wondering? Email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:Team@GemHomeTeam.com",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 500
    }
  }, "Team@GemHomeTeam.com"), " \u2014 usually a reply within 4 hours.")), /*#__PURE__*/React.createElement("div", null, FAQS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--line)",
      borderBottom: i === FAQS.length - 1 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOFaq(oFaq === i ? -1 : i),
    style: {
      width: "100%",
      padding: "24px 0",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: "var(--ink)",
      letterSpacing: "-0.012em"
    }
  }, f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      background: oFaq === i ? "var(--gold)" : "transparent",
      border: oFaq === i ? "none" : "1px solid var(--line-2)",
      color: oFaq === i ? "var(--ink-on-cyan)" : "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 16,
      transition: "all .2s",
      transform: oFaq === i ? "rotate(45deg)" : "none"
    }
  }, "+")), oFaq === i && /*#__PURE__*/React.createElement("p", {
    style: {
      paddingBottom: 24,
      fontSize: 15,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      maxWidth: 640
    }
  }, f.a))))))), /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "b-section-cyan",
    style: {
      padding: "140px 0",
      position: "relative",
      overflow: "hidden",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -200,
      left: -200,
      width: 600,
      height: 600,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -200,
      right: -200,
      width: 600,
      height: 600,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontFamily: "var(--font-mono)",
      letterSpacing: ".15em",
      color: "var(--ink-on-cyan)",
      opacity: 0.6,
      marginBottom: 32
    }
  }, "\u2193 START THE CONVERSATION \u2193"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 120,
      fontWeight: 500,
      letterSpacing: "-0.04em",
      lineHeight: 0.94,
      color: "var(--ink-on-cyan)",
      marginBottom: 40,
      maxWidth: 1100,
      margin: "0 auto 40px"
    }
  }, "Let's see what your", /*#__PURE__*/React.createElement("br", null), "next thirty years could look like."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 48,
      lineHeight: 1.5,
      maxWidth: 600,
      margin: "0 auto 48px"
    }
  }, "A 20-minute call is free. So is the second one. So is the year-three rate check, and every annual review after."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "16px 32px",
      fontSize: 15,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10,
      boxShadow: "0 12px 32px -8px rgba(10,10,10,0.4)"
    }
  }, "Schedule a 20-min call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "16px 32px",
      fontSize: 15,
      fontWeight: 600,
      background: "transparent",
      color: "var(--ink-on-cyan)",
      border: "1.5px solid var(--ink-on-cyan)",
      borderRadius: 10
    }
  }, "Apply now")))), /*#__PURE__*/React.createElement(BoldFooter, null));
}

/* ============================ Video chapters ============================ */
function VideoChapters() {
  const chapters = [{
    tag: "FUNDAMENTALS · 4 MIN",
    title: "How to read a Total Cost Analysis",
    sub: "Rate is one number. Lifetime cost is the one that matters.",
    grad: "linear-gradient(135deg, #5BC2E7 0%, #2EB6DE 100%)",
    iconLight: false
  }, {
    tag: "MARKET · 6 MIN",
    title: "San Diego market read · Q2 2026",
    sub: "Where prices are headed, and what that means for buyers.",
    grad: "linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 100%)",
    iconLight: true
  }, {
    tag: "STRATEGY · 8 MIN",
    title: "Buying now vs. waiting six months",
    sub: "Real numbers, modeled three ways.",
    grad: "linear-gradient(135deg, #F0F7FA 0%, #D6EAF3 100%)",
    iconLight: false
  }, {
    tag: "WEALTH · 5 MIN",
    title: "Your home equity is an underused asset",
    sub: "How smart owners deploy it without overleveraging.",
    grad: "linear-gradient(135deg, #5BC2E7 0%, #0A0A0A 100%)",
    iconLight: true
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "The video library")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "end",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 600
    }
  }, "Watch first. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "Decide second.")), /*#__PURE__*/React.createElement("a", {
    href: "/insights",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)",
      whiteSpace: "nowrap"
    }
  }, "Full library (47) \u2192")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, chapters.map((c, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      display: "block",
      borderRadius: 16,
      overflow: "hidden",
      transition: "all .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 260,
      background: c.grad,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: `repeating-linear-gradient(45deg, transparent 0 12px, ${c.iconLight ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.18)"} 12px 13px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: 32,
      background: c.iconLight ? "var(--gold)" : "rgba(0,0,0,0.85)",
      color: c.iconLight ? "var(--ink-on-cyan)" : "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 22,
      paddingLeft: 4,
      boxShadow: "0 12px 24px -8px rgba(0,0,0,0.4)"
    }
  }, "\u25B6")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: ".08em",
      color: c.iconLight ? "var(--gold)" : "var(--ink)",
      padding: "6px 10px",
      background: c.iconLight ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)",
      borderRadius: 999
    }
  }, c.tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "20px 4px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: "-0.012em",
      lineHeight: 1.25,
      marginBottom: 8
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.5
    }
  }, c.sub)))))));
}

/* small abstract dot for service cards */
function ServiceDot({
  kind
}) {
  const map = {
    chart: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 4,
        background: "var(--accent-tint)",
        border: "1px solid var(--gold)",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 6,
        bottom: 6,
        width: 4,
        height: 8,
        background: "var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 12,
        bottom: 6,
        width: 4,
        height: 14,
        background: "var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 18,
        bottom: 6,
        width: 4,
        height: 11,
        background: "var(--gold)"
      }
    })),
    key: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 8,
        width: 14,
        height: 14,
        borderRadius: 7,
        border: "2px solid var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 13,
        top: 13,
        width: 15,
        height: 4,
        background: "var(--gold)"
      }
    })),
    doc: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 28,
        border: "2px solid var(--gold)",
        borderRadius: 2,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 3,
        top: 6,
        width: 12,
        height: 2,
        background: "var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 3,
        top: 12,
        width: 12,
        height: 2,
        background: "var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 3,
        top: 18,
        width: 8,
        height: 2,
        background: "var(--gold)"
      }
    })),
    wave: /*#__PURE__*/React.createElement("svg", {
      width: 32,
      height: 20,
      viewBox: "0 0 32 20",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M0 10 Q 8 0, 16 10 T 32 10",
      stroke: "var(--gold)",
      strokeWidth: "2",
      fill: "none"
    })),
    coins: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 28,
        height: 28,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 14,
        width: 28,
        height: 8,
        borderRadius: 4,
        background: "var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 4,
        top: 4,
        width: 20,
        height: 8,
        borderRadius: 4,
        background: "var(--gold)",
        opacity: .6
      }
    })),
    house: /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        height: 28,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 0,
        top: 8,
        width: 0,
        height: 0,
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        borderBottom: "10px solid var(--gold)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 4,
        top: 18,
        width: 24,
        height: 10,
        background: "var(--gold)"
      }
    }))
  };
  return map[kind] || null;
}

/* ============================ Calculator ============================ */
function BoldCalculator() {
  const [price, setPrice] = useStateB(965000);
  const [down, setDown] = useStateB(20);
  const [rate, setRate] = useStateB(6.375);
  const [years, setYears] = useStateB(30);
  const principal = price * (1 - down / 100);
  const m = useMemoB(() => monthlyPayment(principal, rate, years), [principal, rate, years]);
  const tax = price * 0.0073 / 12,
    ins = 120;
  const total = m + tax + ins;
  const usd = n => "$" + Math.round(n).toLocaleString();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      padding: 40,
      borderRadius: 20,
      border: "1px solid var(--line)",
      boxShadow: "0 24px 64px -32px rgba(46,182,222,.25)"
    }
  }, /*#__PURE__*/React.createElement(BoldSlider, {
    label: "Home price",
    value: price,
    min: 400000,
    max: 2500000,
    step: 5000,
    format: usd,
    onChange: setPrice
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "Down payment",
    value: down,
    min: 3,
    max: 50,
    step: 1,
    format: v => v + "%",
    sub: usd(price * down / 100),
    onChange: setDown
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "Rate (APR)",
    value: rate,
    min: 5,
    max: 8,
    step: 0.125,
    format: v => v.toFixed(3) + "%",
    onChange: setRate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      marginBottom: 32,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [15, 20, 30].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setYears(y),
    style: {
      padding: "11px 0",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 8,
      background: years === y ? "#fff" : "transparent",
      color: years === y ? "var(--ink)" : "var(--ink-soft)",
      boxShadow: years === y ? "0 2px 6px rgba(10,31,54,.08)" : "none"
    }
  }, y, "-year fixed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 28,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Estimated monthly \xB7 PITI"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "Tax + ins. included")), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 72,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--ink)"
    }
  }, usd(total)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(SmallStat, {
    k: "Loan amount",
    v: usd(principal)
  }), /*#__PURE__*/React.createElement(SmallStat, {
    k: "P & I",
    v: usd(m)
  }), /*#__PURE__*/React.createElement(SmallStat, {
    k: "Tax",
    v: usd(tax)
  }), /*#__PURE__*/React.createElement(SmallStat, {
    k: "Insurance",
    v: usd(ins)
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      lineHeight: 1.55,
      marginTop: 24
    }
  }, "Estimate for educational purposes only. Not a loan offer, rate quote, pre-qualification, or commitment to lend. Actual rates, payments, taxes, insurance, and closing costs vary and are subject to credit approval, verification, property appraisal, and underwriting. Rates change daily. Equal Housing Lender \xB7 NMLS\xA0#330511.")));
}
function SmallStat({
  k,
  v
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginBottom: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 600
    }
  }, v));
}
function BoldSlider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
  sub
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 600
    }
  }, format(value), " ", sub && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      fontSize: 12,
      fontWeight: 400
    }
  }, "\xB7 ", sub))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  }));
}

/* ============================ Scenario · interactive 30-year comparison ============================ */
function ScenarioSection() {
  const [buyYear, setBuyYear] = useStateB(2026);
  const APPRECIATION = 0.045; // 4.5% / yr avg San Diego
  const RENT_INCREASE = 0.04;
  const todayPrice = 965000;
  const todayRent = 4200;

  // Compute equity at year 2056 for both scenarios
  // Scenario A: Buy in `buyYear` at projected price (today × (1+app)^(buyYear-2026))
  // Scenario B: Rent until 2056, paying rent that grows 4%/yr
  const yearsUntilBuy = buyYear - 2026;
  const yearsOwned = 2056 - buyYear;
  const buyPrice = todayPrice * Math.pow(1 + APPRECIATION, yearsUntilBuy);
  const equityAtEnd = yearsOwned > 0 ? buyPrice * Math.pow(1 + APPRECIATION, yearsOwned) : buyPrice;
  // Total rent paid 2026..2056
  let totalRent = 0;
  for (let y = 2026; y < 2056; y++) {
    const i = y - 2026;
    if (y < buyYear) totalRent += todayRent * 12 * Math.pow(1 + RENT_INCREASE, i);
  }
  const usd = n => "$" + Math.round(n).toLocaleString();
  const usdK = n => "$" + Math.round(n / 1000).toLocaleString() + "K";
  const usdM = n => "$" + (n / 1000000).toFixed(2) + "M";

  // Build chart points
  const years = Array.from({
    length: 31
  }, (_, i) => 2026 + i);
  const equityPath = years.map(y => {
    if (y < buyYear) return 0;
    const yo = y - buyYear;
    return buyPrice * Math.pow(1 + APPRECIATION, yo);
  });
  const rentPath = years.map(y => {
    const i = y - 2026;
    if (y < buyYear) return -1 * Array.from({
      length: i + 1
    }, (_, k) => todayRent * 12 * Math.pow(1 + RENT_INCREASE, k)).reduce((a, b) => a + b, 0);
    // After buying, rent stops being paid
    return -1 * Array.from({
      length: buyYear - 2026
    }, (_, k) => todayRent * 12 * Math.pow(1 + RENT_INCREASE, k)).reduce((a, b) => a + b, 0);
  });
  const max = Math.max(...equityPath, 1);
  const min = Math.min(...rentPath, -1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg-2)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "30%",
      background: "linear-gradient(180deg, rgba(91,194,231,0.08) 0%, transparent 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "The 30-year picture")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 720
    }
  }, "The cost of ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "waiting"), " isn't on the listing."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 580,
      marginTop: 16
    }
  }, "Drag the slider to see what each year of waiting actually costs in equity built \u2014 and rent paid to someone else."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: 24,
      padding: 48,
      border: "1px solid var(--line)",
      boxShadow: "0 32px 80px -32px rgba(46,182,222,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "I buy a home in"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: "-0.022em",
      color: "var(--ink)"
    }
  }, buyYear, buyYear === 2026 && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gold-deep)",
      marginLeft: 12,
      fontWeight: 500
    }
  }, "\xB7 now"))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 2026,
    max: 2036,
    step: 1,
    value: buyYear,
    onChange: e => setBuyYear(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "2026"), /*#__PURE__*/React.createElement("span", null, "2028"), /*#__PURE__*/React.createElement("span", null, "2030"), /*#__PURE__*/React.createElement("span", null, "2032"), /*#__PURE__*/React.createElement("span", null, "2034"), /*#__PURE__*/React.createElement("span", null, "2036"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      gap: 32,
      alignItems: "center",
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: "linear-gradient(135deg, var(--accent-tint) 0%, #fff 100%)",
      border: "1px solid var(--gold)",
      borderRadius: 16,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -40,
      right: -40,
      width: 160,
      height: 160,
      borderRadius: 80,
      background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gold-deep)",
      fontWeight: 700,
      letterSpacing: ".1em",
      marginBottom: 12
    }
  }, "\u2726 HOME EQUITY BY 2056"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 56,
      fontWeight: 600,
      letterSpacing: "-0.028em",
      color: "var(--ink)",
      lineHeight: 1
    }
  }, equityAtEnd >= 1000000 ? usdM(equityAtEnd) : usdK(equityAtEnd)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      marginTop: 12,
      lineHeight: 1.4
    }
  }, "Real estate you ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)",
      fontWeight: 600
    }
  }, "own"), " at 30 years. Your home becomes an asset, not an expense.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      color: "var(--ink-mute)",
      letterSpacing: "-0.01em"
    }
  }, "vs."), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 32,
      background: "var(--bg-2)",
      border: "1px solid var(--line-2)",
      borderRadius: 16,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      fontWeight: 700,
      letterSpacing: ".1em",
      marginBottom: 12
    }
  }, "\u2715 RENT PAID WHILE WAITING"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 56,
      fontWeight: 600,
      letterSpacing: "-0.028em",
      color: "var(--ink-2)",
      lineHeight: 1
    }
  }, totalRent >= 1000000 ? usdM(totalRent) : usdK(totalRent)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      marginTop: 12,
      lineHeight: 1.4
    }
  }, "Money handed to ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "someone else's"), " equity. You don't get it back."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 12
    }
  }, "Wealth trajectory \xB7 2026\u20132056"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 160,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: `0 0 1000 160`,
    preserveAspectRatio: "none",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "upG",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5BC2E7",
    stopOpacity: "0.5"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#5BC2E7",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "dnG",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#94A5BA",
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#94A5BA",
    stopOpacity: "0.3"
  }))), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "80",
    x2: "1000",
    y2: "80",
    stroke: "var(--line-2)",
    strokeWidth: "1",
    strokeDasharray: "3 4"
  }), (() => {
    const xStep = 1000 / (years.length - 1);
    const yFor = v => 80 - v / max * 70 + (v < 0 ? Math.abs(v / min) * 70 - v / max * 70 : 0);
    // simpler: use linear scale for positive (up) and abs of negative (down)
    const yPos = v => 80 - Math.min(70, v / max * 70);
    const yNeg = v => 80 + Math.min(70, Math.abs(v) / Math.abs(min) * 70);
    const eqPts = equityPath.map((v, i) => `${i * xStep} ${yPos(v)}`).join(" L ");
    const rentPts = rentPath.map((v, i) => `${i * xStep} ${yNeg(v)}`).join(" L ");
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: `M 0 80 L ${eqPts} L 1000 80 Z`,
      fill: "url(#upG)"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M ${eqPts}`,
      stroke: "var(--gold-deep)",
      strokeWidth: "2.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M 0 80 L ${rentPts} L 1000 80 Z`,
      fill: "url(#dnG)"
    }), /*#__PURE__*/React.createElement("path", {
      d: `M ${rentPts}`,
      stroke: "var(--ink-mute)",
      strokeWidth: "1.5",
      fill: "none",
      strokeDasharray: "4 4"
    }));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: 8,
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "2026"), /*#__PURE__*/React.createElement("span", null, "2031"), /*#__PURE__*/React.createElement("span", null, "2036"), /*#__PURE__*/React.createElement("span", null, "2041"), /*#__PURE__*/React.createElement("span", null, "2046"), /*#__PURE__*/React.createElement("span", null, "2051"), /*#__PURE__*/React.createElement("span", null, "2056")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      marginTop: 16,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--gold-deep)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 2,
      background: "var(--gold-deep)"
    }
  }), "Equity built (you own this)"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 2,
      background: "var(--ink-mute)",
      borderTop: "1px dashed var(--ink-mute)"
    }
  }), "Rent paid (gone forever)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      paddingTop: 32,
      borderTop: "1px solid var(--line)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 4
    }
  }, "Want to run this for your real numbers?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--ink)"
    }
  }, "We'll model your actual income, location, and timeline \u2014 for free.")), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10,
      boxShadow: "0 6px 20px -6px rgba(10,10,10,.3)"
    }
  }, "Get my personalized plan \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11,
      color: "var(--ink-mute)",
      textAlign: "center",
      maxWidth: 800,
      margin: "16px auto 0"
    }
  }, "Based on San Diego county 4.5%/yr historical appreciation and 4%/yr rent growth. Past performance not indicative of future results. For illustration only.")));
}
Object.assign(window, {
  BoldNav,
  BoldFooter,
  BoldHome,
  BoldCalculator,
  BoldSlider,
  SmallStat,
  ServiceDot,
  VideoChapters,
  Marquee,
  ScenarioSection
});

/* ===== bold_2 ===== */
/* ============================================================
   Interactive screens for the Bold Home page:
   - NEO Experience App phone mockup (tabbable)
   - Homebot widget (interactive home value chart with hover)
   - Video CTA card
   ============================================================ */

const {
  useState: useStateInt,
  useMemo: useMemoInt
} = React;

/* ============================ NEO App Mockup ============================ */
function NeoAppSection() {
  const [tab, setTab] = useStateInt("loans");
  return /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 360,
      height: 600,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)",
      filter: "blur(40px)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 320,
      height: 640,
      borderRadius: 44,
      background: "#0A0A0A",
      padding: 12,
      boxShadow: "0 40px 80px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.05)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 16,
      left: "50%",
      transform: "translateX(-50%)",
      width: 110,
      height: 28,
      background: "#0A0A0A",
      borderRadius: 14,
      zIndex: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: 32,
      background: "#fff",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px 8px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", null, "\u25AE\u25AE\u25AE \uDBC1\uDE47 \uDBC1\uDEE8")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid #EEF1F3",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#8FA0AE",
      letterSpacing: ".06em"
    }
  }, "WELCOME BACK"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginTop: 2
    }
  }, "Jordan Rivera")), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%)",
      display: "grid",
      placeItems: "center",
      color: "#fff",
      fontSize: 12,
      fontWeight: 600
    }
  }, "JR")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "hidden",
      position: "relative"
    }
  }, tab === "loans" && /*#__PURE__*/React.createElement(AppLoans, null), tab === "wealth" && /*#__PURE__*/React.createElement(AppWealth, null), tab === "concierge" && /*#__PURE__*/React.createElement(AppConcierge, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      borderTop: "1px solid #EEF1F3",
      padding: "8px 0"
    }
  }, [["loans", "Loan", "🏠"], ["wealth", "Wealth", "📈"], ["concierge", "Concierge", "✦"]].map(([k, l, icon]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4,
      padding: "4px 0",
      color: tab === k ? "var(--gold-deep)" : "#8FA0AE",
      fontWeight: tab === k ? 600 : 500,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      opacity: tab === k ? 1 : 0.6
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      padding: "4px 0 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 4,
      background: "#0A0A0A",
      borderRadius: 2
    }
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 16,
      color: "var(--gold-deep)"
    }
  }, "The NEO Experience App"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24
    }
  }, "Your mortgage, your equity, your home \u2014 in one place."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 32,
      maxWidth: 480
    }
  }, "Track loan progress in real time. Monitor your home equity month over month. Tap our concierge bench for any home need \u2014 all from a single app."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3",
    style: {
      marginBottom: 32
    }
  }, [["loans", "Loan dashboard", "Live status, document uploads, messaging with your team"], ["wealth", "Wealth monitor", "Monthly equity reports + rate-drop refi alerts"], ["concierge", "Home concierge", "Vetted contractors, designers, and handymen on call"]].map(([k, t, b]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      display: "grid",
      gridTemplateColumns: "auto 1fr auto",
      gap: 16,
      padding: "16px 20px",
      border: tab === k ? "1px solid var(--gold)" : "1px solid var(--line)",
      background: tab === k ? "var(--accent-tint)" : "var(--bg)",
      borderRadius: 10,
      textAlign: "left",
      alignItems: "center",
      transition: "all .2s"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: tab === k ? "var(--gold-deep)" : "var(--line-2)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, b)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      color: tab === k ? "var(--gold-deep)" : "var(--ink-mute)"
    }
  }, "\u2192")))), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-primary",
    style: {
      padding: "13px 22px"
    }
  }, "Get the app \u2192")))));
}
function AppLoans() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#8FA0AE",
      letterSpacing: ".05em"
    }
  }, "14 ENCINITAS COURT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      marginTop: 2
    }
  }, "Underwriting"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#5C5C5C",
      marginTop: 4
    }
  }, "Step 4 of 6 \xB7 Closes Jun 8"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "#EEF1F3",
      borderRadius: 3,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--gold-deep)",
      borderRadius: 3
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: "var(--accent-tint)",
      borderRadius: 10,
      border: "1px solid var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--gold-deep)",
      fontWeight: 600,
      letterSpacing: ".05em"
    }
  }, "3 ACTIONS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginTop: 4,
      color: "var(--ink)"
    }
  }, "Outstanding conditions"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, ["Updated bank statement", "Explanation letter", "Insurance binder"].map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      fontSize: 12,
      color: "var(--ink-2)",
      borderTop: "1px solid rgba(46,182,222,0.2)"
    }
  }, /*#__PURE__*/React.createElement("span", null, t), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "\u203A"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "#F7F9FB",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#8FA0AE"
    }
  }, "MONTHLY"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginTop: 2
    }
  }, "$5,432")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 12,
      background: "#F7F9FB",
      borderRadius: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "#8FA0AE"
    }
  }, "RATE"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600,
      marginTop: 2
    }
  }, "6.250%"))));
}
function AppWealth() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#8FA0AE",
      letterSpacing: ".05em"
    }
  }, "HOME EQUITY \xB7 MAY"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 28,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      marginTop: 2,
      color: "var(--ink)"
    }
  }, "$284,500"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#34C77B",
      marginTop: 4,
      fontWeight: 600
    }
  }, "\u2191 $4,200 this month")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      background: "#F7F9FB",
      borderRadius: 10,
      padding: 12,
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 260 96",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "appG",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5BC2E7",
    stopOpacity: "0.4"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#5BC2E7",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 L20 75 L40 70 L60 65 L80 62 L100 55 L120 50 L140 42 L160 38 L180 30 L200 28 L220 22 L240 18 L260 12 L260 96 L0 96 Z",
    fill: "url(#appG)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 80 L20 75 L40 70 L60 65 L80 62 L100 55 L120 50 L140 42 L160 38 L180 30 L200 28 L220 22 L240 18 L260 12",
    stroke: "#2EB6DE",
    strokeWidth: "2",
    fill: "none"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      background: "#FFF8E6",
      borderRadius: 10,
      border: "1px solid #F0D480"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#9D7A00",
      fontWeight: 600,
      letterSpacing: ".05em"
    }
  }, "\u26A1 RATE ALERT"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-2)",
      marginTop: 4,
      lineHeight: 1.4
    }
  }, "30Y fixed is down 0.375% since you locked. Refi could save $214/mo.")));
}
function AppConcierge() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#8FA0AE",
      letterSpacing: ".05em"
    }
  }, "BOOK A PRO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      marginTop: 2
    }
  }, "Vetted, on-call")), [["🔧", "Handyman", "Same-day available"], ["🎨", "Interior designer", "From $250/hr"], ["🌿", "Landscaper", "Mon, Wed, Fri"], ["🔌", "Electrician", "Licensed · bonded"]].map(([icon, t, s]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 12px",
      background: "#F7F9FB",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "#8FA0AE"
    }
  }, s)), /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: 11,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "BOOK \u203A"))));
}

/* ============================ Homebot Section ============================ */
function HomebotSection() {
  const months = ["Jul '25", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan '26", "Feb", "Mar", "Apr", "May"];
  const values = [892, 905, 911, 918, 924, 932, 941, 948, 956, 962, 972];
  const [hover, setHover] = useStateInt(values.length - 1);
  const cur = values[hover];
  const prev = values[0];
  const pct = ((cur - prev) / prev * 100).toFixed(1);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.9fr 1.1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 16,
      color: "var(--gold-deep)"
    }
  }, "Homebot \xB7 Live equity"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24
    }
  }, "Unlock your home's financial potential."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 32,
      maxWidth: 480
    }
  }, "Our monthly Wealth Digest gives you an intuitive dashboard tailored to your home's value, your equity position, and the moves available to you \u2014 all updated in real time."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3",
    style: {
      marginBottom: 32
    }
  }, [["Live home value tracking", "Pulled from comparable sales in your zip"], ["Refi-when-it-makes-sense alerts", "We watch rates, you don't have to"], ["Equity moves & HELOC modeling", "See what your home can do next"]].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "20px 1fr",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700,
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, b))))), /*#__PURE__*/React.createElement("a", {
    href: "/experience",
    className: "b-btn b-btn-primary",
    style: {
      padding: "13px 22px"
    }
  }, "See your home's value \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 32,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -100,
      right: -100,
      width: 300,
      height: 300,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(91,194,231,0.25) 0%, rgba(91,194,231,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "start",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      letterSpacing: ".05em",
      fontWeight: 500
    }
  }, "YOUR HOME VALUE \xB7 ", months[hover].toUpperCase()), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 48,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      marginTop: 4
    }
  }, "$", cur, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: "var(--ink-soft)"
    }
  }, "K")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      marginTop: 6,
      color: "#34C77B",
      fontWeight: 600
    }
  }, "\u2191 ", pct, "% in 11 months \xB7 +$", cur - prev, "K")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "6px 12px",
      background: "var(--accent-tint)",
      borderRadius: 6,
      fontSize: 11,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "\u25CF LIVE")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 200,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 600 200",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "hbGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#5BC2E7",
    stopOpacity: "0.35"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#5BC2E7",
    stopOpacity: "0"
  }))), [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("line", {
    key: i,
    x1: "0",
    y1: i * 50 + 10,
    x2: "600",
    y2: i * 50 + 10,
    stroke: "#EAEAEA",
    strokeWidth: "1",
    strokeDasharray: "3 4"
  })), (() => {
    const min = Math.min(...values) - 10,
      max = Math.max(...values) + 5;
    const xStep = 600 / (values.length - 1);
    const yFor = v => 180 - (v - min) / (max - min) * 160 + 10;
    const pts = values.map((v, i) => `${i * xStep} ${yFor(v)}`).join(" L ");
    const area = `M 0 190 L ${pts} L 600 190 Z`;
    const line = `M ${pts}`;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: area,
      fill: "url(#hbGrad)"
    }), /*#__PURE__*/React.createElement("path", {
      d: line,
      stroke: "#2EB6DE",
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), values.map((v, i) => /*#__PURE__*/React.createElement("g", {
      key: i
    }, /*#__PURE__*/React.createElement("circle", {
      cx: i * xStep,
      cy: yFor(v),
      r: i === hover ? 7 : 4,
      fill: i === hover ? "#2EB6DE" : "#fff",
      stroke: "#2EB6DE",
      strokeWidth: i === hover ? 3 : 2,
      style: {
        cursor: "pointer",
        transition: "all .15s"
      },
      onMouseEnter: () => setHover(i)
    }), /*#__PURE__*/React.createElement("circle", {
      cx: i * xStep,
      cy: yFor(v),
      r: 20,
      fill: "transparent",
      style: {
        cursor: "pointer"
      },
      onMouseEnter: () => setHover(i)
    }))));
  })())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${months.length}, 1fr)`,
      fontSize: 10,
      color: "var(--ink-mute)",
      textAlign: "center"
    }
  }, months.map((m, i) => /*#__PURE__*/React.createElement("span", {
    key: m,
    style: {
      color: i === hover ? "var(--gold-deep)" : "var(--ink-mute)",
      fontWeight: i === hover ? 600 : 400
    }
  }, m.split(" ")[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 16,
      background: "var(--accent-tint)",
      borderRadius: 10,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "\u26A1 HELOC available"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-2)",
      marginTop: 2
    }
  }, "You could access up to $", Math.round(cur * 0.35), "K at 7.25% APR")), /*#__PURE__*/React.createElement("button", {
    style: {
      fontSize: 12,
      color: "var(--ink)",
      fontWeight: 600,
      background: "var(--gold)",
      padding: "8px 14px",
      borderRadius: 6
    }
  }, "Model it \u203A")))))));
}

/* ============================ Story Video Section ============================ */
function StoryVideoSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0",
      background: "var(--ink)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 560,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    playsInline: true,
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("source", {
    src: "/assets/bento.mp4?v=1785302872537",
    type: "video/mp4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 65%, rgba(10,10,10,0.7) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold)",
      marginBottom: 16
    }
  }, "Our story \xB7 3 min"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 60,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1.04,
      color: "#fff",
      marginBottom: 28,
      maxWidth: 720
    }
  }, "How we've helped 1,800 San Diego families build wealth through real estate."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 22px",
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.3)",
      borderRadius: 999,
      color: "#fff",
      backdropFilter: "blur(8px)",
      fontSize: 15,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 18,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      display: "grid",
      placeItems: "center",
      fontSize: 14,
      paddingLeft: 2
    }
  }, "\u25B6"), /*#__PURE__*/React.createElement("span", null, "Play full story"))))));
}
Object.assign(window, {
  NeoAppSection,
  HomebotSection,
  StoryVideoSection
});

/* ===== bold_3 ===== */
/* ============================================================
   BOLD direction — MODERN refresh
   Mobile Home + Features/About/Contact/Dashboard
   ============================================================ */
const {
  useState: useStateB2
} = React;

/* ==================== BOLD HOME MOBILE ==================== */
function BoldHomeMobile() {
  const [oFaq, setOFaq] = useStateB2(0);
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Home (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "48px 20px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-tag",
    style: {
      marginBottom: 24,
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: 2.5,
      background: "#34C77B"
    }
  }), /*#__PURE__*/React.createElement("span", null, "Free 15-minute mortgage review")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1,
      marginBottom: 20
    }
  }, "Your mortgage, managed for the next 30 years."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--ink-soft)",
      marginBottom: 28
    }
  }, "We close fast, then stay involved \u2014 annual reviews, rate-drop alerts, equity moves when they make sense."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      padding: "13px"
    }
  }, "Start application \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-outline",
    style: {
      justifyContent: "center",
      padding: "13px"
    }
  }, "Book a 20-min call"))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 20px 32px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, "Rates change daily and depend on your credit, loan amount, and property. ", /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "Contact us for a personalized quote."))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "32px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 24
    }
  }, STATS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-0.02em"
    }
  }, s.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      marginTop: 4,
      opacity: 0.78
    }
  }, s.label))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.08,
      marginBottom: 28
    }
  }, "Most lenders sell a rate. We sell decades of attention."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "b-card",
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      fontWeight: 500
    }
  }, s.n), /*#__PURE__*/React.createElement(ServiceDot, {
    kind: s.illo
  })), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 18,
      marginBottom: 6
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 13.5
    }
  }, s.body))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Quick estimate"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.08,
      marginBottom: 24
    }
  }, "What might my payment look like?"), /*#__PURE__*/React.createElement(BoldCalculator, null)), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "The process"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.08,
      marginBottom: 28
    }
  }, "Four steps. Then we never leave."), PROCESS.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.n,
    style: {
      padding: "22px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, p.n), /*#__PURE__*/React.createElement("span", {
    className: "b-eyebrow",
    style: {
      fontSize: 10
    }
  }, ["~30 MIN", "1–3 DAYS", "21 DAYS AVG", "30 YEARS"][i])), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 19,
      marginBottom: 6
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 14
    }
  }, p.body))), /*#__PURE__*/React.createElement("a", {
    href: "/total-cost-analysis",
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      width: "100%",
      padding: "13px",
      marginTop: 24
    }
  }, "See a sample Total Cost Analysis \u2192")), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "17 / 20",
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--line)",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/megan-portrait.webp"),
    alt: "Megan Sawamura",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
      objectPosition: "center bottom",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginTop: 28,
      marginBottom: 12
    }
  }, "Meet Megan"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      marginBottom: 18
    }
  }, "From a $20 Fidelity statement in a stocking to five properties."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginBottom: 14
    }
  }, "Every Christmas my grandfather gave us Fidelity stock statements. At twenty-four mine was worth $20,000. I bought my first house with it."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginBottom: 24
    }
  }, "Eight years later \u2014 five properties. GEM exists to give other families the same head start."), /*#__PURE__*/React.createElement("a", {
    href: "/about",
    className: "b-btn b-btn-outline",
    style: {
      justifyContent: "center",
      width: "100%"
    }
  }, "Read Megan's full story \u2192")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Meet the team"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      marginBottom: 20
    }
  }, "The people behind every close."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--line)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-group.webp"),
    alt: "The GEM Home Team",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Megan Sawamura", "Branch Leader", "/assets/team-megan.webp"], ["Sonny Alquizar", "Mortgage Advisor", "/assets/team-sonny.webp"], ["Camryn Hottell", "Loan Specialist", "/assets/team-camryn.webp"], ["Anthony Edrozo", "Production Partner", "/assets/team-anthony.webp"], ["Kevin Torres", "Client Success Manager", "/assets/team-kevin.webp"]].map(([n, r, photo]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 56,
      height: 56,
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl(photo),
    alt: n,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: n === "Kevin Torres" ? "scale(1.2)" : undefined,
      transformOrigin: "57% 42%"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gold-deep)",
      fontWeight: 500,
      marginTop: 2
    }
  }, r), TEAM_NMLS[n] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      fontFamily: "var(--font-mono)",
      marginTop: 2
    }
  }, "NMLS #", TEAM_NMLS[n])))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 12
    }
  }, "Rooted in San Diego"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      marginBottom: 20
    }
  }, "A local team, serving our community."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--line)",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-sandiego.webp"),
    alt: "The GEM Home Team in San Diego",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginBottom: 24
    }
  }, "We're a San Diego team \u2014 born here, based here, and invested in the families we serve. Together we bring over 30 years of combined mortgage experience to every loan."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, [["30+", "years combined experience"], ["100%", "San Diego based"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 32,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginTop: 6,
      maxWidth: 130
    }
  }, l))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Client voices"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 20,
      fontSize: 14,
      color: "var(--ink-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)",
      letterSpacing: ".1em"
    }
  }, "\u2605\u2605\u2605\u2605\u2605"), /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "4.86"), " \xB7 202 verified reviews"), /*#__PURE__*/React.createElement(ReviewCarousel, {
    perView: 1
  }), /*#__PURE__*/React.createElement("a", {
    href: "https://www.experience.com/reviews/megan-sawamura-401537",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-outline",
    style: {
      justifyContent: "center",
      width: "100%",
      padding: "13px",
      marginTop: 18
    }
  }, "Read all reviews on Experience.com \u2192")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.08,
      marginBottom: 24
    }
  }, "People ask us\u2026"), FAQS.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOFaq(oFaq === i ? -1 : i),
    style: {
      width: "100%",
      padding: "18px 0",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500
    }
  }, f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 24,
      height: 24,
      borderRadius: 12,
      border: "1px solid var(--line-2)",
      display: "grid",
      placeItems: "center",
      fontSize: 13,
      transition: "transform .2s",
      transform: oFaq === i ? "rotate(45deg)" : "none"
    }
  }, "+")), oFaq === i && /*#__PURE__*/React.createElement("p", {
    style: {
      paddingBottom: 18,
      fontSize: 14,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, f.a)))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "64px 20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 16
    }
  }, "Buying, refinancing, or just thinking?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 28
    }
  }, "One 20-minute call is free. So is the second."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-dark",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "#fff",
      color: "var(--ink)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "transparent",
      border: "1.5px solid var(--ink-on-cyan)",
      color: "var(--ink-on-cyan)"
    }
  }, "APPLY NOW"))), /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "40px 20px",
      background: "#0A0A0A",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-white.webp"),
    alt: "The GEM Home Team at NEO Home Loans",
    style: {
      height: 24,
      width: "auto",
      marginBottom: 20,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "18px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 4,
      border: "1.5px solid rgba(255,255,255,0.4)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 3,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.85)",
      fontWeight: 600,
      letterSpacing: ".04em",
      lineHeight: 1.3
    }
  }, "EQUAL HOUSING", /*#__PURE__*/React.createElement("br", null), "LENDER")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "COMPANY NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#330511 \xB7 Better Mortgage")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "INDIVIDUAL NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#972639 \xB7 Megan Sawamura"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Production volume, transaction counts, client ratings, and any rankings or awards (including \"Top 1% of U.S. Loan Officers\") reflect historical results from internal records or third-party sources and are not a guarantee of future results. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "\xA9 2026 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. ", /*#__PURE__*/React.createElement("a", {
    href: "http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "NMLS Consumer Access"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity. Products not available in all states."), /*#__PURE__*/React.createElement("p", null, "Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.55)",
      letterSpacing: ".02em",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      paddingTop: 16
    }
  }, "\xA9 2026 The GEM Home Team at NEO Home Loans \xB7 All rights reserved")));
}

/* ==================== BOLD FEATURES (modern) ==================== */
function BoldFeatures() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Features"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "The NEO Experience"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 24
    }
  }, "The NEO Experience"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h1",
    style: {
      maxWidth: 1000,
      marginBottom: 32
    }
  }, "Closing day is the start. What happens after is the actual product."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 640
    }
  }, "Six commitments we make to every client \u2014 built to keep your mortgage aligned with your life, not the day you signed."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "32px 0 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, SERVICES.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "grid",
      gridTemplateColumns: i % 2 === 0 ? "1fr 0.85fr" : "0.85fr 1fr",
      gap: 80,
      padding: "64px 0",
      borderTop: "1px solid var(--line)",
      alignItems: "center"
    }
  }, i % 2 === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 13,
      color: "var(--ink-mute)",
      fontWeight: 500,
      marginBottom: 20
    }
  }, s.n), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      fontSize: 48,
      marginBottom: 20
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 28,
      maxWidth: 480
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, s.bullets.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: "flex",
      gap: 12,
      padding: "6px 0",
      fontSize: 14,
      color: "var(--ink-2)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700
    }
  }, "\u2713"), x)))), /*#__PURE__*/React.createElement("div", {
    className: "b-card-soft",
    style: {
      height: 380,
      display: "grid",
      placeItems: "center",
      padding: 60
    }
  }, /*#__PURE__*/React.createElement(FeatureGraphic, {
    kind: s.illo
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "b-card-dark",
    style: {
      height: 380,
      display: "grid",
      placeItems: "center",
      padding: 60
    }
  }, /*#__PURE__*/React.createElement(FeatureGraphic, {
    kind: s.illo,
    dark: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 13,
      color: "var(--ink-mute)",
      fontWeight: 500,
      marginBottom: 20
    }
  }, s.n), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      fontSize: 48,
      marginBottom: 20
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 28,
      maxWidth: 480
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, s.bullets.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: "flex",
      gap: 12,
      padding: "6px 0",
      fontSize: 14,
      color: "var(--ink-2)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700
    }
  }, "\u2713"), x))))))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 48,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Side by side")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 700
    }
  }, "What you get vs. what you usually get."))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr",
      padding: "18px 28px",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Service"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink)",
      fontWeight: 600
    }
  }, "The GEM Home Team at NEO Home Loans"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Typical lender")), [["Annual financial review", "Included", "Not offered"], ["Refi-when-rates-drop alerts", "Automated", "On your own"], ["Home concierge & contractors", "Vetted bench", "Not offered"], ["Total Cost Analysis (all options)", "Standard", "Single quote only"], ["Time to verified pre-approval", "24–48 hrs", "5–10 days"], ["Post-close relationship", "30 years", "Until funding"]].map(([a, b, c], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr",
      padding: "22px 28px",
      borderTop: i === 0 ? "0" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--ink)"
    }
  }, a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--gold-deep)",
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 7,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      fontSize: 9,
      fontWeight: 700
    }
  }, "\u2713"), b), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-mute)"
    }
  }, c)))))), /*#__PURE__*/React.createElement(NeoAppSection, null), /*#__PURE__*/React.createElement(FeaturesContactSection, null), /*#__PURE__*/React.createElement(BoldFooter, null));
}

/* Contact submission form for the NEO Experience / Features page */
function FeaturesContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [interest, setInterest] = React.useState("Mortgage Under Management");
  const [sending, setSending] = React.useState(false);
  const [sendErr, setSendErr] = React.useState(false);
  const submit = async () => {
    if (sending) return;
    setSending(true);
    setSendErr(false);
    try {
      await sendInquiry("contact-form-f", interest, "");
      setSubmitted(true);
    } catch (e) {
      setSendErr(true);
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0",
      background: "var(--bg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.3fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24
    }
  }, "Want the full ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "NEO Experience"), "?"), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 32,
      maxWidth: 440
    }
  }, "Send us a note. We'll set up a quick call to walk through which pieces of the experience matter most for your situation \u2014 no pitch, just a conversation."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      marginBottom: 4,
      fontWeight: 500
    }
  }, "Call"), /*#__PURE__*/React.createElement("a", {
    href: "tel:8585672233",
    style: {
      fontSize: 16,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, "(858) 567-2233")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      marginBottom: 4,
      fontWeight: 500
    }
  }, "Office"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--ink-2)",
      lineHeight: 1.55
    }
  }, "10089 Willow Creek Rd, Suite 200", /*#__PURE__*/React.createElement("br", null), "San Diego, CA 92131")))), /*#__PURE__*/React.createElement("div", {
    id: "contact-form-f",
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 16,
      padding: 40,
      boxShadow: "0 24px 64px -32px rgba(46,182,222,.2)"
    }
  }, !submitted ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      marginBottom: 6
    }
  }, "Tell us where you're at."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 28,
      fontSize: 14
    }
  }, "We'll respond within 4 business hours."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "name",
    placeholder: "Alex Rivera"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "email",
    type: "email",
    placeholder: "alex@example.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "phone",
    type: "tel",
    placeholder: "(555) 555-5555"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Which part of the NEO Experience matters most?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginTop: 4
    }
  }, ["Mortgage Under Management", "NEO Experience App", "Home Concierge Service", "Wealth Digests", "Annual Financial Reviews", "Not sure yet — tell me more"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setInterest(o),
    style: {
      padding: "12px 14px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      textAlign: "left",
      fontSize: 13.5,
      background: interest === o ? "var(--ink)" : "var(--bg)",
      color: interest === o ? "#fff" : "var(--ink)",
      borderColor: interest === o ? "var(--ink)" : "var(--line-2)"
    }
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Anything we should know?"), /*#__PURE__*/React.createElement("textarea", {
    className: "b-input",
    name: "message",
    rows: "3",
    placeholder: "Where you are in the process, timeline, questions\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    disabled: sending,
    style: {
      marginTop: 8,
      padding: "14px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 10,
      justifyContent: "center",
      display: "flex",
      opacity: sending ? 0.6 : 1,
      boxShadow: "0 6px 20px -6px rgba(46,182,222,.4)"
    }
  }, sending ? "Sending…" : "Send message →"), sendErr && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "#B4232A",
      textAlign: "center",
      marginTop: 4
    }
  }, "Couldn't send just now \u2014 please email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:team@gemhometeam.com",
    style: {
      fontWeight: 600,
      color: "#B4232A",
      textDecoration: "underline"
    }
  }, "team@gemhometeam.com"), " directly."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      textAlign: "center",
      marginTop: 4
    }
  }, "By submitting you agree to our privacy policy."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px",
      color: "var(--gold-deep)",
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      marginBottom: 10
    }
  }, "Got it. We'll reach out to you as soon as possible."), /*#__PURE__*/React.createElement("p", {
    className: "b-body"
  }, "Expect a response within 4 business hours."))))));
}
Object.assign(window, {
  FeaturesContactSection
});
/* Icons for the About-page "non-negotiables" value cards */
function ValueIcon({
  kind
}) {
  const c = "var(--gold-deep)";
  const wrap = children => /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 12,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      color: c
    }
  }, children);
  if (kind === "edu") return wrap(/*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 8 L12 4 L21 8 L12 12 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.5 V15 C6 15 8.5 17 12 17 C15.5 17 18 15 18 15 V10.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "21",
    y1: "8",
    x2: "21",
    y2: "13"
  })));
  if (kind === "loyal") return wrap(/*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 20 C12 20 4 14.5 4 9 C4 6.5 6 4.5 8.5 4.5 C10 4.5 11.3 5.3 12 6.5 C12.7 5.3 14 4.5 15.5 4.5 C18 4.5 20 6.5 20 9 C20 14.5 12 20 12 20 Z"
  })));
  if (kind === "scale") return wrap(/*#__PURE__*/React.createElement("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "4",
    x2: "12",
    y2: "20"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "7",
    y1: "20",
    x2: "17",
    y2: "20"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7 L19 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 7 L3 12 H7 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 7 L17 12 H21 Z"
  })));
  return null;
}

/* Small icons for the About-page "basics" chips */
function BasicIcon({
  kind
}) {
  const c = "var(--gold-deep)";
  const p = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: c,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  if (kind === "edu") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M3 8 L12 4 L21 8 L12 12 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 10.5 V15 C6 15 8.5 17 12 17 C15.5 17 18 15 18 15 V10.5"
  }));
  if (kind === "home") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M4 11 L12 4 L20 11"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 9.5 V19 H18 V9.5"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "10",
    y1: "19",
    x2: "10",
    y2: "14"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "14",
    y1: "19",
    x2: "14",
    y2: "14"
  }));
  if (kind === "ball") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9 C8 10 10 13 11 19"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 9 C16 10 14 13 13 19"
  }));
  if (kind === "wine") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M7 4 H17 C17 9 15 12 12 12 C9 12 7 9 7 4 Z"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "12",
    y1: "12",
    x2: "12",
    y2: "19"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "19",
    x2: "16",
    y2: "19"
  }));
  if (kind === "badge") return /*#__PURE__*/React.createElement("svg", p, /*#__PURE__*/React.createElement("path", {
    d: "M12 3 L19 6 V11 C19 16 12 20 12 20 C12 20 5 16 5 11 V6 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 11.5 L11 13.5 L15 9.5"
  }));
  return null;
}
function FeatureGraphic({
  kind,
  dark
}) {
  const ink = dark ? "#F4F8FB" : "#0A0A0A";
  const inkSoft = dark ? "rgba(244,248,251,0.55)" : "#5C5C5C";
  const inkMute = dark ? "rgba(244,248,251,0.3)" : "#999999";
  const surface = dark ? "rgba(255,255,255,0.06)" : "#FFFFFF";
  const surfaceSoft = dark ? "rgba(255,255,255,0.03)" : "#F7F7F7";
  const line = dark ? "rgba(255,255,255,0.12)" : "#EAEAEA";
  const cyan = "#5BC2E7";
  const cyanDeep = "#2EB6DE";
  const tint = dark ? "rgba(91,194,231,0.15)" : "#DCF1F8";

  /* === ANNUAL REVIEW · financial dashboard card === */
  if (kind === "chart") {
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "ANNUAL REVIEW \xB7 MAY '26"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 600,
        color: ink,
        marginTop: 4,
        letterSpacing: "-0.01em"
      }
    }, "You're $214/mo ahead.")), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "4px 10px",
        background: tint,
        color: cyanDeep,
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 700
      }
    }, "SCHEDULED")), /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "80",
      viewBox: "0 0 280 80",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `fg-c-${dark}`,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: cyan,
      stopOpacity: "0.4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: cyan,
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "20",
      x2: "280",
      y2: "20",
      stroke: line,
      strokeWidth: "1",
      strokeDasharray: "3 3"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "0",
      y1: "50",
      x2: "280",
      y2: "50",
      stroke: line,
      strokeWidth: "1",
      strokeDasharray: "3 3"
    }), /*#__PURE__*/React.createElement("path", {
      className: "anim-draw",
      style: {
        "--len": "400"
      },
      d: "M0 65 L30 60 L60 55 L90 50 L120 42 L150 38 L180 30 L210 24 L240 18 L280 12",
      stroke: cyanDeep,
      strokeWidth: "2.5",
      fill: "none",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 65 L30 60 L60 55 L90 50 L120 42 L150 38 L180 30 L210 24 L240 18 L280 12 L280 80 L0 80 Z",
      fill: `url(#fg-c-${dark})`,
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "240",
      cy: "18",
      r: "5",
      fill: cyanDeep,
      stroke: "#fff",
      strokeWidth: "2",
      className: "anim-float"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 8,
        fontSize: 9,
        color: inkMute,
        fontFamily: "var(--font-mono)",
        letterSpacing: ".05em"
      }
    }, ["'22", "'23", "'24", "'25", "'26"].map(y => /*#__PURE__*/React.createElement("span", {
      key: y
    }, y))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 8,
        marginTop: 18,
        paddingTop: 16,
        borderTop: `1px solid ${line}`
      }
    }, [["$284K", "Equity"], ["6.250%", "Your rate"], ["$2,568", "Saved/yr"]].map(([v, l]) => /*#__PURE__*/React.createElement("div", {
      key: l
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        fontWeight: 600,
        color: ink,
        letterSpacing: "-0.012em",
        fontVariantNumeric: "tabular-nums"
      }
    }, v), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9,
        color: inkMute,
        marginTop: 2
      }
    }, l))))));
  }

  /* === HOME CONCIERGE · service bench card === */
  if (kind === "key") {
    const services = [{
      name: "Handyman",
      note: "Today",
      icon: "🔧",
      color: "#FF9F43"
    }, {
      name: "Designer",
      note: "Mon 2pm",
      icon: "✦",
      color: cyan
    }, {
      name: "Electrician",
      note: "Booked",
      icon: "⚡",
      color: "#FFC845"
    }, {
      name: "Landscape",
      note: "Weekly",
      icon: "🌿",
      color: "#34C77B"
    }];
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "YOUR BENCH"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 600,
        color: ink,
        marginTop: 4,
        letterSpacing: "-0.01em"
      }
    }, "23 vetted pros, on call.")), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 14,
        background: tint,
        color: cyanDeep,
        display: "grid",
        placeItems: "center",
        fontSize: 13
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, services.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: s.name,
      className: "anim-row",
      style: {
        animationDelay: 0.15 + i * 0.12 + "s",
        display: "grid",
        gridTemplateColumns: "32px 1fr auto",
        gap: 10,
        padding: "10px 12px",
        background: surfaceSoft,
        borderRadius: 10,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 8,
        background: s.color + "22",
        color: s.color,
        display: "grid",
        placeItems: "center",
        fontSize: 13
      }
    }, s.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        fontWeight: 600,
        color: ink
      }
    }, s.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute
      }
    }, s.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: cyanDeep,
        fontWeight: 600
      }
    }, "BOOK \u203A"))))));
  }

  /* === MONTHLY WEALTH DIGEST · email-style card === */
  if (kind === "doc") {
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%",
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 8,
        left: 8,
        right: -8,
        bottom: -8,
        background: surfaceSoft,
        border: `1px solid ${line}`,
        borderRadius: 14,
        opacity: 0.5
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "WEALTH DIGEST \xB7 MAY '26"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: 3,
        background: "#34C77B"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 600,
        color: ink,
        marginBottom: 4,
        letterSpacing: "-0.01em"
      }
    }, "Your home is worth ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: cyanDeep
      }
    }, "$972K"), "."), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: inkSoft,
        marginBottom: 16
      }
    }, "Up $7K this month. Up $32K this year."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: 10,
        color: inkMute,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "EQUITY \xB7 $284K"), /*#__PURE__*/React.createElement("span", null, "HOME VALUE \xB7 $972K")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: surfaceSoft,
        borderRadius: 4,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "anim-fill",
      style: {
        width: "29%",
        height: "100%",
        background: `linear-gradient(90deg, ${cyan} 0%, ${cyanDeep} 100%)`
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        background: tint,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 12,
        background: cyanDeep,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 11
      }
    }, "\u26A1"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: ink
      }
    }, "HELOC available \xB7 up to $204K"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkSoft
      }
    }, "Tap to model scenarios")))));
  }

  /* === PERFECT MORTGAGE PROMISE · rate watch === */
  if (kind === "wave") {
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "RATE WATCH \xB7 30Y FIXED"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 10,
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 26,
        fontWeight: 600,
        color: ink,
        letterSpacing: "-0.02em",
        fontVariantNumeric: "tabular-nums"
      }
    }, "6.375%"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: "#34C77B",
        fontWeight: 600
      }
    }, "\u2193 0.375 this week"))), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "4px 10px",
        background: tint,
        color: cyanDeep,
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 700
      }
    }, "\u25CF SAMPLE")), /*#__PURE__*/React.createElement("svg", {
      width: "100%",
      height: "80",
      viewBox: "0 0 280 80",
      style: {
        display: "block",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: `fg-w-${dark}`,
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: cyan,
      stopOpacity: "0.4"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: cyan,
      stopOpacity: "0"
    }))), /*#__PURE__*/React.createElement("path", {
      className: "anim-draw",
      style: {
        "--len": "320"
      },
      d: "M0 20 Q 35 50, 70 30 T 140 35 T 210 20 T 280 5",
      stroke: cyanDeep,
      strokeWidth: "2.5",
      fill: "none"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M0 20 Q 35 50, 70 30 T 140 35 T 210 20 T 280 5 L 280 80 L 0 80 Z",
      fill: `url(#fg-w-${dark})`,
      opacity: "0.85"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "280",
      cy: "5",
      r: "5",
      fill: cyanDeep,
      stroke: "#fff",
      strokeWidth: "2",
      className: "anim-float"
    }), /*#__PURE__*/React.createElement("text", {
      x: "270",
      y: "0",
      textAnchor: "end",
      fontSize: "9",
      fill: inkMute,
      fontFamily: "var(--font-mono)"
    }, "NOW")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 12,
        background: tint,
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 12,
        background: cyanDeep,
        color: "#fff",
        display: "grid",
        placeItems: "center",
        fontSize: 11
      }
    }, "\u2193"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 600,
        color: ink
      }
    }, "Refi could save $214/mo"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkSoft
      }
    }, "Break-even in 14 months")))));
  }

  /* === WEALTH THROUGH REAL ESTATE · property portfolio === */
  if (kind === "coins") {
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "YOUR PORTFOLIO"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "#34C77B",
        fontWeight: 700
      }
    }, "\u2191 38% IN 7 YRS")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 26,
        fontWeight: 600,
        color: ink,
        letterSpacing: "-0.02em",
        marginBottom: 16,
        fontVariantNumeric: "tabular-nums"
      }
    }, "$2.41M", /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: inkSoft,
        fontWeight: 500,
        marginLeft: 8
      }
    }, "total equity")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, [{
      name: "Encinitas (primary)",
      value: "$284K",
      pct: 100,
      accent: cyanDeep
    }, {
      name: "North Park (rental)",
      value: "$198K",
      pct: 70,
      accent: cyan
    }, {
      name: "PB condo (rental)",
      value: "$142K",
      pct: 50,
      accent: "rgba(91,194,231,0.5)"
    }].map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: p.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: ink,
        fontWeight: 500
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: ink,
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      }
    }, p.value)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: surfaceSoft,
        borderRadius: 3,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "anim-fill",
      style: {
        width: `${p.pct}%`,
        height: "100%",
        background: p.accent,
        animationDelay: 0.15 + i * 0.18 + "s"
      }
    }))))))));
  }

  /* === RELOCATION · move-in tracker === */
  if (kind === "house") {
    return /*#__PURE__*/React.createElement("div", {
      className: "featgfx",
      style: {
        width: 360,
        maxWidth: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: surface,
        border: `1px solid ${line}`,
        borderRadius: 14,
        padding: 22,
        boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "start",
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10,
        color: inkMute,
        letterSpacing: ".1em",
        fontWeight: 600
      }
    }, "YOUR MOVE \xB7 STEP 3 OF 5"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 600,
        color: ink,
        marginTop: 4,
        letterSpacing: "-0.01em"
      }
    }, "Renovation in progress")), /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "4px 10px",
        background: tint,
        color: cyanDeep,
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 700
      }
    }, "$0 DOWN")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        marginBottom: 18
      }
    }, [1, 2, 3, 4, 5].map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
      key: n
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 24,
        height: 24,
        borderRadius: 12,
        background: n <= 3 ? cyanDeep : surfaceSoft,
        color: n <= 3 ? "#fff" : inkMute,
        border: n <= 3 ? "none" : `1.5px dashed ${line}`,
        display: "grid",
        placeItems: "center",
        fontSize: 10,
        fontWeight: 700,
        flexShrink: 0
      }
    }, n <= 3 ? "✓" : n), i < 4 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        background: n < 3 ? cyanDeep : line,
        margin: "0 4px"
      }
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, [["✓", "Listing photos & staging", "Done"], ["✓", "Pre-listing repairs", "Done"], ["◐", "Kitchen reno · contractor on site", "In progress"], ["○", "Final walkthrough", "Apr 18"], ["○", "Move-in day", "May 2"]].map(([icon, name, status], i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "anim-row",
      style: {
        animationDelay: 0.2 + i * 0.1 + "s",
        display: "grid",
        gridTemplateColumns: "20px 1fr auto",
        gap: 10,
        padding: "8px 12px",
        background: i === 2 ? tint : surfaceSoft,
        borderRadius: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: i <= 2 ? cyanDeep : inkMute,
        fontWeight: 700,
        fontSize: 11
      }
    }, icon), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        color: i < 2 ? inkSoft : ink,
        fontWeight: i === 2 ? 600 : 500,
        textDecoration: i < 2 ? "line-through" : "none"
      }
    }, name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: i === 2 ? cyanDeep : inkMute,
        fontWeight: 600
      }
    }, status))))));
  }
  return null;
}

/* ==================== BOLD ABOUT ==================== */
function BoldAbout() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 About"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "About"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 100px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: 80,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 24
    }
  }, "About Megan"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h1",
    style: {
      marginBottom: 28
    }
  }, "From a $20 Fidelity statement to five properties \u2014 and a mission."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 580
    }
  }, "Building generational wealth doesn't take inheritance. It takes the right information, applied early. That's the entire thesis behind The GEM Home Team at NEO Home Loans.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 440,
      aspectRatio: "1 / 1",
      justifySelf: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 35%, var(--accent-tint) 0%, #fff 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "1px solid var(--line)",
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      overflow: "hidden",
      background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-megan.webp"),
    alt: "Megan Sawamura",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 18,
      left: 0,
      padding: "8px 16px",
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 999,
      fontSize: 12,
      fontWeight: 600,
      boxShadow: "0 8px 24px -8px rgba(10,10,10,0.4)"
    }
  }, "NMLS #972639"))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "100px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container-narrow"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.018em",
      lineHeight: 1.25,
      color: "var(--ink)",
      marginBottom: 40,
      maxWidth: 760
    }
  }, "\"My grandfather went from washing dishes in a restaurant to owning that restaurant \u2014 then to owning the whole shopping center.\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ink-2)"
    }
  }, "Every Christmas, while my twelve cousins and I expected presents, we got Fidelity statements in our stockings. He had bought us each a little stock. At twelve, it looked like a piece of paper. At twenty-four, when he passed, that piece of paper was $20,000."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.65,
      color: "var(--ink-2)"
    }
  }, "I used it as a down payment on my first house in San Diego. I rented out the rooms to friends and saved aggressively. Two years later I bought another. Eight years later \u2014 five properties. GEM exists to give other families the same head start.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "What we stand for")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 560
    }
  }, "Three non-negotiables."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, [["01", "Education over salesmanship", "If you don't fully understand the math, we haven't done our job. No jargon traps. No 'just trust us.'", "edu"], ["02", "Lifetime relationships", "We stay involved long after closing. Year three, year fifteen, year thirty — same email, same number.", "loyal"], ["03", "The Total Cost view", "Rate is one number. The lifetime cost of your loan is another. We always show both. You decide.", "scale"]].map(([n, t, b, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "b-card tilt-card",
    style: {
      padding: 32,
      borderTop: "3px solid var(--gold)",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -30,
      right: -30,
      width: 120,
      height: 120,
      borderRadius: 60,
      background: "radial-gradient(circle, var(--accent-tint) 0%, transparent 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(ValueIcon, {
    kind: ic
  }), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: "relative",
      fontSize: 24,
      fontWeight: 500,
      letterSpacing: "-0.018em",
      lineHeight: 1.15,
      color: "var(--ink)",
      marginBottom: 12
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "relative",
      fontSize: 14.5,
      lineHeight: 1.65,
      color: "var(--ink-soft)"
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "100px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Off the clock"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2"
  }, "The basics.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, [["Education", "B.A. Economics, UC Santa Barbara", "edu"], ["Lives", "Little Italy, San Diego", "home"], ["Loyalty", "Padres season ticket holder", "ball"], ["Hobbies", "Wine making · scuba diving · live music", "wine"], ["License", "NMLS #972639", "badge"]].map(([k, v, ic], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 16,
      padding: 20,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 14,
      alignItems: "center",
      gridColumn: i === 4 ? "span 2" : "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 44,
      height: 44,
      borderRadius: 12,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      color: "var(--gold-deep)"
    }
  }, /*#__PURE__*/React.createElement(BasicIcon, {
    kind: ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 3
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, v)))))))), /*#__PURE__*/React.createElement("section", {
    id: "team",
    style: {
      padding: "120px 0",
      background: "var(--bg)",
      scrollMarginTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80,
      alignItems: "end",
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Meet the team"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 420
    }
  }, "The people behind every close.")), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 540
    }
  }, "Five specialists, one San Diego team. From your first question to the day you get the keys \u2014 and every year after \u2014 you'll know exactly who's in your corner.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "0 30px 80px -40px rgba(10,10,10,0.4)",
      border: "1px solid var(--line)",
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-group.webp"),
    alt: "The GEM Home Team",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: 28
    }
  }, [["Megan Sawamura", "Branch Leader", "/assets/team-megan.webp"], ["Sonny Alquizar", "Mortgage Advisor", "/assets/team-sonny.webp"], ["Camryn Hottell", "Loan Specialist", "/assets/team-camryn.webp"], ["Anthony Edrozo", "Production Partner", "/assets/team-anthony.webp"], ["Kevin Torres", "Client Success Manager", "/assets/team-kevin.webp"]].map(([n, r, photo]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "1 / 1",
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid var(--line)",
      marginBottom: 18,
      background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)",
      boxShadow: "0 12px 30px -16px rgba(10,10,10,0.35)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl(photo),
    alt: n,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      transform: n === "Kevin Torres" ? "scale(1.2)" : undefined,
      transformOrigin: "57% 42%"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      letterSpacing: "-0.01em",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gold-deep)",
      fontWeight: 500,
      marginTop: 4
    }
  }, r), TEAM_NMLS[n] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      fontFamily: "var(--font-mono)",
      letterSpacing: "0.02em",
      marginTop: 5
    }
  }, "NMLS #", TEAM_NMLS[n])))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.15fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Rooted in San Diego"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24,
      maxWidth: 460
    }
  }, "A local team, serving our community."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 24,
      maxWidth: 480
    }
  }, "We're not a national call center. We're a San Diego team \u2014 born here, based here, and genuinely invested in the families and neighborhoods we serve."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 40,
      maxWidth: 480,
      color: "var(--ink-2)"
    }
  }, "Together we bring over 30 years of combined mortgage experience to every loan we close \u2014 guiding our neighbors home, one family at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 56
    }
  }, [["30+", "years combined experience"], ["100%", "San Diego based"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 40,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: "var(--ink)",
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 8,
      maxWidth: 150
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "0 30px 80px -40px rgba(10,10,10,0.45)",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-sandiego.webp"),
    alt: "The GEM Home Team in San Diego",
    style: {
      width: "100%",
      display: "block"
    }
  }))))), /*#__PURE__*/React.createElement(BoldFooter, null));
}

/* ==================== BOLD CONTACT ==================== */
function BoldContact() {
  const [submitted, setSubmitted] = useStateB2(false);
  const [selected, setSelected] = useStateB2("Buying my first home");
  const [timeline, setTimeline] = useStateB2("3–6 mo");
  const [sending, setSending] = useStateB2(false);
  const [sendErr, setSendErr] = useStateB2(false);
  const submit = async () => {
    if (sending) return;
    setSending(true);
    setSendErr(false);
    try {
      await sendInquiry("contact-form-d", selected, timeline);
      setSubmitted(true);
    } catch (e) {
      setSendErr(true);
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Contact"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Contact"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 24
    }
  }, "Say hello"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h1",
    style: {
      marginBottom: 32,
      maxWidth: 800
    }
  }, "Let's find the best path here for you."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 64,
      maxWidth: 600
    }
  }, "The first conversation is exploratory. We'll ask about your timeline, look at your numbers, and tell you honestly whether now is the right moment."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 80,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, [["Call", "(858) 567-2233", "Mon–Fri 8a–6p PT"], ["Email", "Team@GemHomeTeam.com", "Replies within 4 hrs"], ["Visit", "10089 Willow Creek Rd, Suite 200", "San Diego, CA 92131"]].map(([k, v, sub]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "20px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginBottom: 6,
      fontWeight: 500
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 4
    }
  }, sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      borderRadius: 12,
      overflow: "hidden",
      border: "1px solid var(--line)",
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement(MapIllo, {
    width: 520,
    height: 260,
    accent: "var(--gold)"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 40
    },
    id: "contact-form-d"
  }, !submitted ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      marginBottom: 6
    }
  }, "Tell us where you're at."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 32,
      fontSize: 14
    }
  }, "We'll respond within 4 business hours."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "name",
    placeholder: "Alex Rivera"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "email",
    type: "email",
    placeholder: "alex@example.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "phone",
    type: "tel",
    placeholder: "(555) 555-5555"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "I'm thinking about\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginTop: 4
    }
  }, ["Buying my first home", "Buying again", "Refinancing", "Investment property", "HELOC", "Just exploring"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setSelected(o),
    style: {
      padding: "12px 14px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      textAlign: "left",
      fontSize: 13.5,
      background: selected === o ? "var(--ink)" : "var(--bg)",
      color: selected === o ? "#fff" : "var(--ink)",
      borderColor: selected === o ? "var(--ink)" : "var(--line-2)"
    }
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8,
      marginTop: 4
    }
  }, ["ASAP", "1–3 mo", "3–6 mo", "6+ mo"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setTimeline(o),
    style: {
      padding: "12px 0",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      fontSize: 13,
      background: timeline === o ? "var(--ink)" : "var(--bg)",
      color: timeline === o ? "#fff" : "var(--ink)",
      borderColor: timeline === o ? "var(--ink)" : "var(--line-2)"
    }
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Anything we should know?"), /*#__PURE__*/React.createElement("textarea", {
    className: "b-input",
    name: "message",
    rows: "3",
    placeholder: "Tell us a bit about your situation\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    disabled: sending,
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      padding: "14px",
      marginTop: 8,
      opacity: sending ? 0.6 : 1
    }
  }, sending ? "Sending…" : "Send message →"), sendErr && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "#B4232A",
      textAlign: "center",
      marginTop: 4
    }
  }, "Couldn't send just now \u2014 please email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:team@gemhometeam.com",
    style: {
      fontWeight: 600,
      color: "#B4232A",
      textDecoration: "underline"
    }
  }, "team@gemhometeam.com"), " directly."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "60px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px",
      color: "var(--gold-deep)",
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      marginBottom: 10
    }
  }, "Got it. We'll reach out to you as soon as possible."), /*#__PURE__*/React.createElement("p", {
    className: "b-body"
  }, "Expect a response within 4 business hours.")))))), /*#__PURE__*/React.createElement(BoldFooter, null));
}

/* ==================== BOLD DASHBOARD ==================== */
function BoldDashboard() {
  const [tab, setTab] = useStateB2("overview");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Dashboard",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "16px 32px",
      background: "var(--bg)",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "row gap-8",
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-v2.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 30,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "row gap-6",
    style: {
      marginLeft: 16
    }
  }, ["Overview", "Loan", "Documents", "Messages", "Wealth"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t.toLowerCase()),
    style: {
      padding: "8px 0",
      fontSize: 14,
      color: tab === t.toLowerCase() ? "var(--ink)" : "var(--ink-soft)",
      borderBottom: tab === t.toLowerCase() ? "2px solid var(--ink)" : "2px solid transparent",
      fontWeight: 500
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "row gap-3",
    style: {
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      border: "1px solid var(--line)",
      color: "var(--ink-soft)"
    }
  }, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("div", {
    className: "row gap-2",
    style: {
      alignItems: "center",
      padding: "5px 10px 5px 5px",
      border: "1px solid var(--line)",
      borderRadius: 999
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: "var(--gold)",
      color: "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 600
    }
  }, "JR"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Jordan Rivera")))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "36px 32px",
      maxWidth: 1320,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginBottom: 8
    }
  }, "14 Encinitas Court \xB7 Your loan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.1,
      marginBottom: 16
    }
  }, "Step 4 of 6 \xB7 Underwriting in progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      background: "var(--line)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--ink)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)"
    },
    className: "tabular"
  }, "62% \xB7 24 days to close June 8"))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 0,
      marginBottom: 24,
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0
    }
  }, [["Loan amount", "$772,000", "30y · 6.250%"], ["Monthly · PITI", "$5,432", "Locked May 8"], ["Equity at close", "$193,000", "20% down"], ["Locked rate", "6.250%", "↓ 0.125 vs market"]].map(([k, v, s], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "24px 28px",
      borderLeft: i > 0 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginBottom: 8
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 18
    }
  }, "Loan progress"), /*#__PURE__*/React.createElement("a", {
    href: "/dashboard",
    style: {
      fontSize: 13,
      color: "var(--ink-soft)"
    }
  }, "View full timeline \u2192")), [["Application submitted", "Apr 28", "done"], ["Pre-approval issued", "Apr 29", "done"], ["Appraisal ordered", "May 9", "done"], ["Underwriting review", "In progress · 3 conditions outstanding", "active"], ["Clear to close", "Estimated Jun 2", "pending"], ["Closing & funding", "Jun 8 · 2:30pm", "pending"]].map(([t, s, st], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "20px 1fr auto",
      gap: 16,
      padding: "18px 0",
      borderTop: i === 0 ? "0" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: st === "done" ? "var(--ink)" : st === "active" ? "var(--gold)" : "var(--bg)",
      border: st === "pending" ? "1.5px dashed var(--line-2)" : "0",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 9
    }
  }, st === "done" ? "✓" : ""), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: st === "pending" ? "var(--ink-soft)" : "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, s)), st === "active" && /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      borderColor: "transparent",
      fontSize: 10,
      fontWeight: 600
    }
  }, "Action needed"), st === "done" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "Complete")))), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-card-dark",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.55)",
      marginBottom: 10,
      fontWeight: 500
    }
  }, "3 actions for you"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      marginBottom: 18,
      color: "#fff"
    }
  }, "Outstanding conditions"), [["Updated bank statement (April)", "Due May 18"], ["Explanation letter — late payment 2024", "Due May 20"], ["Hazard insurance binder", "Due May 28"]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      padding: "12px 0",
      borderTop: "1px solid rgba(255,255,255,.1)",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "#fff"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.5)",
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "6px 12px",
      background: "var(--gold)",
      color: "var(--ink)",
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 500
    }
  }, "Upload")))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 500
    }
  }, "From your team"), /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      borderColor: "transparent",
      fontSize: 10,
      fontWeight: 600
    }
  }, "2 new")), [["Megan Sawamura", "Appraisal came back at $972k — $7k over asking. Quick thoughts attached.", "11m"], ["Sonny Alquizar", "Got your statements — uploading to underwriting now.", "2h"]].map(([who, msg, t]) => /*#__PURE__*/React.createElement("div", {
    key: who,
    style: {
      display: "grid",
      gridTemplateColumns: "32px 1fr",
      gap: 12,
      padding: "12px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--bg-3)",
      color: "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 600
    }
  }, who.split(" ").map(x => x[0]).join("")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, who), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, msg)))))))));
}
Object.assign(window, {
  BoldHomeMobile,
  BoldFeatures,
  BoldAbout,
  BoldContact,
  BoldDashboard,
  FeatureGraphic,
  ValueIcon,
  BasicIcon
});

/* ===== bold_4 ===== */
/* ============================================================
   BOLD direction — TECHNOLOGY / "Powered by Better"
   What makes GEM Home Team + NEO + Better the most advanced
   mortgage stack in America. Crypto-backed mortgages, Tinman AI,
   Betsy, One Day Mortgage, partner network.
   Reuses BoldNav / BoldFooter and the cyan-forward .b-* system.
   ============================================================ */
const {
  useState: useStateT
} = React;

/* ---- Small chrome for the partner / capability cards ---- */
function MonoTag({
  children,
  color
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: color || "var(--ink-mute)",
      fontWeight: 600
    }
  }, children);
}

/* Coin glyph — simple geometric BTC / USDC token (no brand logos) */
function TokenGlyph({
  kind,
  size = 44
}) {
  const isBtc = kind === "btc";
  const bg = isBtc ? "#F7931A" : "#2775CA";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: size / 2,
      background: bg,
      display: "grid",
      placeItems: "center",
      color: "#fff",
      flexShrink: 0,
      fontWeight: 700,
      fontSize: size * 0.42,
      fontFamily: "var(--font-mono)",
      boxShadow: `0 6px 18px -6px ${bg}88`
    }
  }, isBtc ? "₿" : "$");
}

/* ---- Partner logos: clean brand-colored wordmark lockups (text-based,
   not raster brand art — swap in official logo PNG/SVG if provided) ---- */
function partnerLogo(key) {
  const W = (txt, st) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Geist, system-ui, sans-serif",
      lineHeight: 1,
      ...st
    }
  }, txt);
  switch (key) {
    case "better":
      return W("Better", {
        fontSize: 27,
        fontWeight: 800,
        letterSpacing: "-0.035em",
        color: "#017848"
      });
    case "coinbase":
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "#0052FF",
          display: "grid",
          placeItems: "center",
          flexShrink: 0
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 8.5,
          height: 8.5,
          borderRadius: 1,
          background: "#fff"
        }
      })), W("Coinbase", {
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "-0.02em",
        color: "#0A2540"
      }));
    case "fannie":
      return W("fanniemae", {
        fontSize: 24,
        fontWeight: 700,
        letterSpacing: "-0.015em",
        color: "#0B6E4F"
      });
    case "neo":
      return /*#__PURE__*/React.createElement("img", {
        src: assetUrl("/assets/neo-lockup-v2.webp"),
        alt: "NEO Home Loans",
        style: {
          height: 30,
          width: "auto",
          display: "block"
        }
      });
    case "stripe":
      return W("stripe", {
        fontSize: 27,
        fontWeight: 800,
        letterSpacing: "-0.045em",
        color: "#635BFF"
      });
    case "openai":
      return /*#__PURE__*/React.createElement("span", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontFamily: "Geist, system-ui, sans-serif",
          fontSize: 18,
          fontWeight: 600,
          color: "#0A0A0A",
          letterSpacing: "-0.01em"
        }
      }, /*#__PURE__*/React.createElement("span", null, "OpenAI"), /*#__PURE__*/React.createElement("span", {
        style: {
          opacity: 0.35,
          fontWeight: 400
        }
      }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "ElevenLabs"));
    default:
      return W(key, {
        fontSize: 20,
        fontWeight: 700,
        color: "var(--ink)"
      });
  }
}
function BoldTech() {
  const [pledge, setPledge] = useStateT("btc");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Technology"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Technology"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0 64px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
      backgroundSize: "30px 30px",
      pointerEvents: "none",
      maskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
      WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 80%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "8px 14px",
      background: "var(--accent-tint)",
      borderRadius: 999,
      marginBottom: 28,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold-deep)",
      letterSpacing: ".02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pulse-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "var(--gold-deep)"
    }
  }), "POWERED BY BETTER \xB7 NMLS #330511"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h1",
    style: {
      maxWidth: 1080,
      marginBottom: 32
    }
  }, "A San Diego team that knows your name \u2014 on the most advanced mortgage engine in America."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 660,
      marginBottom: 40
    }
  }, "Most local brokers run on borrowed software and overnight email. We run on Better's AI-native platform \u2014 the first fintech to fund over $110 billion in home loans \u2014 and we pair it with a team that manages your mortgage for the next thirty years."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#crypto",
    className: "b-btn b-btn-primary",
    style: {
      padding: "13px 22px"
    }
  }, "See crypto-backed mortgages \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "#stack",
    className: "b-btn b-btn-outline",
    style: {
      padding: "13px 22px"
    }
  }, "Tour the technology")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 0,
      marginTop: 64,
      border: "1px solid var(--line)",
      borderRadius: 14,
      overflow: "hidden",
      background: "#fff"
    }
  }, [["$110B+", "funded on the Better platform"], ["24 hrs", "click to commitment letter"], ["~3 wks", "median time to close"], ["24/7/365", "AI loan assistant on call"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "28px 28px",
      borderLeft: i ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 6,
      lineHeight: 1.4
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-dark",
    style: {
      padding: "104px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "0.85fr 1.15fr",
      gap: 72,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 22
    }
  }, "Why strategy beats rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 150,
      fontWeight: 600,
      letterSpacing: "-0.04em",
      lineHeight: 0.85,
      color: "var(--gold)"
    }
  }, "81"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 66,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "%"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      fontSize: 42,
      lineHeight: 1.08,
      marginBottom: 24,
      color: "#fff"
    }
  }, "of homeowners aged 18\u201334 regret something about buying their home."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 540,
      marginBottom: 14
    }
  }, "That's Zillow's number \u2014 and the cause is almost always the same: a mortgage chosen on interest rate alone, with no plan for the decades after closing."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      color: "rgba(255,255,255,0.6)",
      maxWidth: 540
    }
  }, "We do it the other way around. Strategy first, rate second, and a team that stays."))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 80,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 16
    }
  }, "Total Cost Analysis"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 24,
      maxWidth: 480
    }
  }, "See the real cost \u2014 not just the rate."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 32,
      maxWidth: 480
    }
  }, "The lowest rate isn't always the cheapest loan. Your Total Cost Analysis is a clear, digital side-by-side of every option \u2014 fees, payment, and what each one truly costs over the years you'll actually hold it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["Every option side by side — not just the headline rate", "Fees, monthly payment, and lifetime cost in plain English", "Modeled to your real timeline in the home"].map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 700,
      color: "var(--gold-deep)",
      flexShrink: 0
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--ink-2)"
    }
  }, b)))), /*#__PURE__*/React.createElement("a", {
    href: "/total-cost-analysis",
    className: "b-btn b-btn-primary",
    style: {
      marginTop: 30,
      padding: "13px 24px",
      fontSize: 14,
      fontWeight: 600
    }
  }, "Try the Total Cost Analysis \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 0,
      background: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 24px",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ink-soft)"
    }
  }, "Total Cost Analysis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: "var(--ink-mute)"
    }
  }, "$675K \xB7 7-yr horizon")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      display: "grid",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, "Option A \xB7 Buy the rate down"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--ink-soft)"
    }
  }, "6.75%")), [["Monthly payment", "$4,210"], ["Points & fees", "$14,000"], ["Cost over 7 years", "$367,640"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px 0",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-soft)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink)",
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "2px solid var(--gold-deep)",
      borderRadius: 12,
      padding: 18,
      background: "var(--accent-tint)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -10,
      left: 16,
      background: "var(--gold-deep)",
      color: "#fff",
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      padding: "3px 10px",
      borderRadius: 999
    }
  }, "Recommended for your timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink-on-cyan)"
    }
  }, "Option B \xB7 No points"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--ink-on-cyan)"
    }
  }, "7.00%")), [["Monthly payment", "$4,320"], ["Points & fees", "$1,500"], ["Cost over 7 years", "$364,380"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px 0",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-on-cyan)",
      opacity: 0.7
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink-on-cyan)",
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "13px 16px",
      background: "var(--ink)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.82)",
      fontSize: 13
    }
  }, "If you move or refi within 7 years"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--gold)",
      fontWeight: 700,
      fontSize: 15
    }
  }, "Save $3,260"))))))), /*#__PURE__*/React.createElement("section", {
    id: "stack",
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.5fr",
      gap: 80,
      marginBottom: 64,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow"
  }, "The engine room"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 720,
      marginBottom: 20
    }
  }, "Three pieces of technology your last lender simply didn't have."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 560
    }
  }, "Built in-house by Better since 2016. We're a NEO Home Loans branch on top of it \u2014 so you get the engineering of a fintech with the attention of a neighbor."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-card tilt-card",
    style: {
      padding: 32,
      background: "#fff",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(MonoTag, {
    color: "var(--gold-deep)"
  }, "Tinman\u2122 \xB7 AI underwriting"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.12,
      margin: "16px 0 12px",
      color: "var(--ink)"
    }
  }, "Rates in seconds. Pre-approval in minutes."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 24
    }
  }, "Better's proprietary loan engine keeps your whole file \u2014 pricing, documents, underwriting \u2014 in one system instead of five. Roughly 40% of loans are now AI-underwritten, on the way to a one-minute mortgage."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--bg-2)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(MonoTag, null, "Underwriting"), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: "3px 9px",
      background: "#1F8A5B",
      color: "#fff",
      borderRadius: 999,
      fontSize: 10,
      fontWeight: 700
    }
  }, "CLEARED")), [["Income & assets", 100], ["Credit", 100], ["Property", 78]].map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 11,
      color: "var(--ink-soft)",
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", null, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular"
  }, v, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      background: "var(--line)",
      borderRadius: 3,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "anim-fill",
    style: {
      width: v + "%",
      height: "100%",
      background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-deep) 100%)",
      animationDelay: 0.1 + i * 0.15 + "s"
    }
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "b-card tilt-card",
    style: {
      padding: 32,
      background: "#fff",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(MonoTag, {
    color: "var(--gold-deep)"
  }, "Betsy\u2122 \xB7 AI loan assistant"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.12,
      margin: "16px 0 12px",
      color: "var(--ink)"
    }
  }, "The first voice AI built for mortgages."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 24
    }
  }, "Betsy answers status questions, collects documents, and moves your file forward \u2014 day or night. She handles 125,000+ conversations a month so your human team can spend their time on your strategy, not your paperwork."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--bg-2)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 11,
      background: "var(--gold-deep)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 11
    }
  }, "\u266A"), /*#__PURE__*/React.createElement(MonoTag, null, "Betsy \xB7 live"), /*#__PURE__*/React.createElement("span", {
    className: "pulse-dot",
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "#1F8A5B",
      marginLeft: "auto"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-2)",
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: "12px 12px 12px 4px",
      padding: "10px 12px",
      marginBottom: 8,
      lineHeight: 1.4
    }
  }, "\"Your appraisal just came in at $1.02M \u2014 $48K over contract. Want me to text Megan?\""), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-on-cyan)",
      background: "var(--accent-tint)",
      border: "1px solid var(--gold-soft)",
      borderRadius: "12px 12px 4px 12px",
      padding: "10px 12px",
      marginLeft: 32,
      lineHeight: 1.4
    }
  }, "Yes please \uD83D\uDE4C"))), /*#__PURE__*/React.createElement("div", {
    className: "b-card tilt-card",
    style: {
      padding: 32,
      background: "#fff",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(MonoTag, {
    color: "var(--gold-deep)"
  }, "One Day Mortgage\u2122"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.12,
      margin: "16px 0 12px",
      color: "var(--ink)"
    }
  }, "Click to commitment letter in 24 hours."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 24
    }
  }, "Not a pre-qual. A real, underwritten commitment \u2014 the kind that makes your offer read like cash in a bidding war. The industry takes a week or more; we hand it to you the next day."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      background: "var(--bg-2)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 18
    }
  }, [["Apply online", "9:14 AM", true], ["Tinman prices & underwrites", "9:31 AM", true], ["Commitment letter issued", "Next day", true], ["Write a winning offer", "—", false]].map(([k, t, done], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 9,
      flexShrink: 0,
      background: done ? "var(--gold-deep)" : "#fff",
      border: done ? "none" : "1.5px dashed var(--line-2)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 9,
      fontWeight: 700
    }
  }, done ? "✓" : ""), i < arr.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 2,
      height: 22,
      background: "var(--line)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: i < arr.length - 1 ? 6 : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      fontWeight: 500,
      color: done ? "var(--ink)" : "var(--ink-mute)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      marginTop: 1
    }
  }, t))))))))), /*#__PURE__*/React.createElement("section", {
    id: "crypto",
    className: "b-section-dark",
    style: {
      padding: "120px 0",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -160,
      right: -120,
      width: 480,
      height: 480,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(91,194,231,0.22) 0%, transparent 70%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      gap: 80,
      alignItems: "center",
      marginBottom: 72
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "7px 13px",
      background: "rgba(91,194,231,0.14)",
      border: "1px solid rgba(91,194,231,0.3)",
      borderRadius: 999,
      marginBottom: 24,
      fontSize: 11,
      fontWeight: 600,
      color: "var(--gold)",
      letterSpacing: ".06em"
    }
  }, "NEW \xB7 BETTER \xD7 COINBASE"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      color: "#fff",
      marginBottom: 24
    }
  }, "Buy the home. Keep the Bitcoin."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      color: "rgba(255,255,255,0.72)",
      marginBottom: 28,
      maxWidth: 520
    }
  }, "We're one of the first San Diego teams able to write the crypto-backed mortgage \u2014 the first Fannie Mae-conforming home loan that lets you pledge Bitcoin or USDC for your down payment instead of selling it."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      color: "rgba(255,255,255,0.6)",
      maxWidth: 520
    }
  }, "No liquidation. No capital-gains event from the down payment. Your crypto sits in Coinbase Prime custody and comes back when the loan is paid off \u2014 and you keep every cent of future upside.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: 18,
      padding: 28,
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(MonoTag, {
    color: "rgba(255,255,255,0.5)"
  }, "Pledge calculator"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      color: "var(--gold)",
      fontWeight: 600,
      fontFamily: "var(--font-mono)"
    }
  }, "\u25CF COINBASE PRIME")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginBottom: 24
    }
  }, [["btc", "Bitcoin", "40% credited"], ["usdc", "USDC", "80% credited"]].map(([k, label, sub]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setPledge(k),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      borderRadius: 12,
      textAlign: "left",
      border: pledge === k ? "1.5px solid var(--gold)" : "1.5px solid rgba(255,255,255,0.12)",
      background: pledge === k ? "rgba(91,194,231,0.12)" : "transparent",
      transition: "all .18s"
    }
  }, /*#__PURE__*/React.createElement(TokenGlyph, {
    kind: k,
    size: 36
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)"
    }
  }, sub))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, (pledge === "btc" ? [["You pledge", "$250,000 BTC"], ["Credited to down payment", "$100,000"], ["Capital-gains tax owed", "$0"], ["Bitcoin you keep", "100%"]] : [["You pledge", "$125,000 USDC"], ["Credited to down payment", "$100,000"], ["Capital-gains tax owed", "$0"], ["USDC you keep", "100%"]]).map(([k, v], i, arr) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingBottom: i < arr.length - 1 ? 14 : 0,
      borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.6)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: i >= 2 ? "var(--gold)" : "#fff"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: "12px 14px",
      background: "rgba(91,194,231,0.1)",
      borderRadius: 10,
      fontSize: 11.5,
      color: "rgba(255,255,255,0.7)",
      lineHeight: 1.5
    }
  }, "Coinbase One members get 1% of the loan amount \u2014 up to $10,000 \u2014 back toward closing."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      marginBottom: 56
    }
  }, [["01", "Qualify with Better", "Same income and credit check as any conforming loan. Single-family, condo, or townhouse."], ["02", "Pledge your crypto", "Connect Coinbase and move BTC or USDC into Prime custody in a single click — no wires, no sales."], ["03", "One loan, one payment", "A Fannie Mae mortgage plus a crypto-secured down-payment loan, same rate and term, one monthly bill."], ["04", "Get it back at payoff", "Your tokens are returned in full when the loan is repaid. Until then they keep working for you."]].map(([n, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      padding: "26px 0",
      borderTop: "1px solid rgba(255,255,255,0.14)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 13,
      color: "var(--gold)",
      fontWeight: 700,
      marginBottom: 16
    }
  }, n), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: "#fff",
      marginBottom: 10,
      letterSpacing: "-0.01em"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.6)",
      lineHeight: 1.55
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16
    }
  }, [["No margin calls", "If the market drops, your terms don't change and no top-up is required. Price moves alone never trigger a sale."], ["Fannie Mae-conforming", "The same government-backed protections as a standard 15- or 30-year fixed mortgage — not an exotic crypto loan."], ["Only at risk if delinquent", "Pledged crypto can be liquidated only after a 60-day payment delinquency — exactly like any other mortgage."]].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 14,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: 12,
      background: "rgba(91,194,231,0.18)",
      color: "var(--gold)",
      display: "grid",
      placeItems: "center",
      fontSize: 12,
      fontWeight: 700
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "#fff"
    }
  }, t)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.62)",
      lineHeight: 1.55
    }
  }, b)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.4)",
      lineHeight: 1.6,
      marginTop: 36,
      maxWidth: 880
    }
  }, "Token-backed mortgages are originated and serviced by Better Mortgage and backed by Fannie Mae; BTC and USDC pledges are powered by Coinbase. First loan funded June 2026, with nationwide availability rolling out summer 2026. Crypto involves risk and tax treatment varies \u2014 consult your own tax advisor. Figures shown are illustrative."))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "The honest comparison"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2"
  }, "Tech of a fintech. Heart of a neighbor.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 16,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1.2fr 1fr 1fr",
      padding: "20px 28px",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-2)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "What matters"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--gold-deep)",
      fontWeight: 700
    }
  }, "NEO \xD7 Better"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Local broker"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Big bank")), [["AI underwriting engine", "Tinman, built in-house", "Third-party LOS", "Legacy systems"], ["Commitment letter speed", "24 hours", "5–10 days", "2–3 weeks"], ["Crypto-backed mortgage", "Yes — BTC & USDC", "Not offered", "Not offered"], ["24/7 AI loan assistant", "Betsy", "Voicemail", "Call center"], ["After you close", "Managed 30 years", "Until funding", "Sold to a servicer"], ["Who you actually talk to", "Megan & team", "Varies", "Whoever picks up"]].map(([label, a, b, c], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1.2fr 1fr 1fr",
      padding: "20px 28px",
      borderTop: i ? "1px solid var(--line)" : "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: "var(--ink)"
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--gold-deep)",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2713"), a), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-mute)"
    }
  }, b), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-mute)"
    }
  }, c)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "52px 0",
      borderTop: "1px solid var(--line)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "18px 22px"
    }
  }, ["Equal Housing Lender", "NMLS #330511", "Powered by Better Mortgage", "Licensed by the CA DFPI"].map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 2,
      background: "var(--line-2)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12,
      letterSpacing: ".06em",
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, label)))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "100px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 64,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 20,
      maxWidth: 900,
      margin: "0 auto 20px"
    }
  }, "Want all of this pointed at your home?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 36,
      maxWidth: 560,
      margin: "0 auto 36px"
    }
  }, "Whether you're paying cash, financing, or pledging crypto \u2014 start with a free 20-minute call."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-dark",
    style: {
      padding: "14px 26px",
      fontSize: 15,
      background: "#fff",
      color: "var(--ink)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      padding: "14px 26px",
      fontSize: 15,
      background: "transparent",
      border: "1.5px solid var(--ink-on-cyan)",
      color: "var(--ink-on-cyan)"
    }
  }, "APPLY NOW")))), /*#__PURE__*/React.createElement(BoldFooter, null));
}
Object.assign(window, {
  BoldTech,
  partnerLogo,
  MonoTag
});

/* ===== mobile_1 ===== */
/* ============================================================
   BOLD direction — MOBILE pages
   Reusable mobile chrome (header/footer) + Features, About, Contact.
   390px-wide artboards. Reuses shared data + .b-* system.
   ============================================================ */
const {
  useState: useStateM
} = React;

/* ---------- Reusable mobile header ---------- */
function MobHeader() {
  const [menuOpen, setMenuOpen] = useStateM(false);
  const [openGroup, setOpenGroup] = useStateM(null);
  const close = () => {
    setMenuOpen(false);
    setOpenGroup(null);
  };
  const bar = {
    display: "block",
    width: 22,
    height: 2,
    background: "var(--ink)",
    borderRadius: 2
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-deep) 100%)",
      color: "var(--ink-on-cyan)",
      padding: "8px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: 11,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "NMLS #972639"), /*#__PURE__*/React.createElement("a", {
    href: "tel:8585672233",
    style: {
      color: "var(--ink-on-cyan)",
      fontWeight: 600
    }
  }, "\uD83D\uDCDE (858) 567-2233")), /*#__PURE__*/React.createElement("header", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      padding: "14px 18px",
      background: "linear-gradient(180deg, #FFFFFF 0%, #F4FBFD 100%)",
      borderBottom: "1px solid var(--line)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      background: "linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)",
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenuOpen(true),
    "aria-label": "Open menu",
    style: {
      justifySelf: "start",
      display: "flex",
      flexDirection: "column",
      gap: 5,
      width: 40,
      height: 40,
      justifyContent: "center",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: bar
  }), /*#__PURE__*/React.createElement("span", {
    style: bar
  }), /*#__PURE__*/React.createElement("span", {
    style: bar
  })), /*#__PURE__*/React.createElement("a", {
    href: "/",
    onClick: close,
    style: {
      justifySelf: "center",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-v2.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 28,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      justifySelf: "end",
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      padding: "8px 12px",
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: ".02em",
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 6
    }
  }, "APPLY ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold)"
    }
  }, "\u2192"))), menuOpen && /*#__PURE__*/React.createElement("div", {
    onClick: close,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 200,
      background: "rgba(10,10,10,0.45)",
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      width: "84%",
      maxWidth: 340,
      background: "#fff",
      boxShadow: "0 0 60px -10px rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      overflowY: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 20px",
      borderBottom: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-v2.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 26,
      width: "auto"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: close,
    "aria-label": "Close menu",
    style: {
      fontSize: 22,
      lineHeight: 1,
      color: "var(--ink-soft)",
      padding: "4px 8px"
    }
  }, "\u2715")), /*#__PURE__*/React.createElement("nav", {
    style: {
      padding: "12px 10px",
      flex: 1
    }
  }, NAV.map(item => /*#__PURE__*/React.createElement("div", {
    key: item.label,
    style: {
      padding: "2px 0"
    }
  }, item.children ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpenGroup(openGroup === item.label ? null : item.label),
    "aria-expanded": openGroup === item.label,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      padding: "12px 14px",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink)",
      background: "none",
      borderRadius: 8,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", null, item.label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: "var(--ink-soft)",
      transition: "transform 0.2s ease",
      transform: openGroup === item.label ? "rotate(180deg)" : "none"
    }
  }, "\u25BC")), openGroup === item.label && item.children.map(c => /*#__PURE__*/React.createElement("a", {
    key: c.label,
    href: c.href,
    onClick: close,
    style: {
      display: "block",
      padding: "8px 14px 8px 28px",
      fontSize: 14,
      color: "var(--ink-soft)",
      borderRadius: 8
    }
  }, c.label))) : /*#__PURE__*/React.createElement("a", {
    href: item.href,
    onClick: close,
    style: {
      display: "block",
      padding: "12px 14px",
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink)",
      borderRadius: 8
    }
  }, item.label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderTop: "1px solid var(--line)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    onClick: close,
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      padding: "13px"
    }
  }, "Apply now \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "/dashboard",
    onClick: close,
    style: {
      textAlign: "center",
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink-soft)"
    }
  }, "Sign in")))));
}

/* ---------- Reusable mobile footer ---------- */
function MobFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "40px 20px",
      background: "#0A0A0A",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-white.webp"),
    alt: "The GEM Home Team at NEO Home Loans",
    style: {
      height: 24,
      width: "auto",
      marginBottom: 20,
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 16,
      alignItems: "center",
      padding: "18px 0",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      borderBottom: "1px solid rgba(255,255,255,0.1)",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 4,
      border: "1.5px solid rgba(255,255,255,0.4)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 3,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gap: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.4)"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.85)",
      fontWeight: 600,
      letterSpacing: ".04em",
      lineHeight: 1.3
    }
  }, "EQUAL HOUSING", /*#__PURE__*/React.createElement("br", null), "LENDER")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "COMPANY NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#330511 \xB7 Better Mortgage")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600
    }
  }, "INDIVIDUAL NMLS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "#fff",
      fontWeight: 500,
      fontVariantNumeric: "tabular-nums"
    }
  }, "#972639 \xB7 Megan Sawamura"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "rgba(255,255,255,0.45)",
      lineHeight: 1.6,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 8
    }
  }, "\xA9 2026 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Home lending products offered by Better Mortgage Corporation, a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. ", /*#__PURE__*/React.createElement("a", {
    href: "http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511",
    style: {
      color: "rgba(255,255,255,0.7)",
      textDecoration: "underline"
    }
  }, "NMLS Consumer Access"), "."), /*#__PURE__*/React.createElement("p", null, "Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.55)",
      letterSpacing: ".02em",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      paddingTop: 16
    }
  }, "\xA9 2026 The GEM Home Team at NEO Home Loans \xB7 All rights reserved"));
}

/* Shared section heading for mobile */
function MobHead({
  eyebrow,
  title,
  sub,
  dark
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14,
      color: dark ? "var(--gold)" : "var(--gold-deep)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 30,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.08,
      marginBottom: sub ? 16 : 24,
      color: dark ? "#fff" : "var(--ink)"
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: dark ? "rgba(255,255,255,0.7)" : "var(--ink-soft)",
      marginBottom: 28
    }
  }, sub));
}

/* ==================== FEATURES MOBILE ==================== */
function BoldFeaturesMobile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Features (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "44px 20px 28px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 20
    }
  }, "The NEO Experience"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.0,
      marginBottom: 20
    }
  }, "Closing day is the start. What happens after is the product."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--ink-soft)"
    }
  }, "Six commitments we make to every client \u2014 built to keep your mortgage aligned with your life, not the day you signed.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "12px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    className: "b-card",
    style: {
      padding: 24,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      fontWeight: 500
    }
  }, s.n)), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 22,
      marginBottom: 10
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 14,
      marginBottom: 18
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 20px"
    }
  }, s.bullets.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: "flex",
      gap: 10,
      padding: "5px 0",
      fontSize: 13.5,
      color: "var(--ink-2)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 15,
      height: 15,
      borderRadius: 8,
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      display: "grid",
      placeItems: "center",
      fontSize: 9,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2713"), x))), /*#__PURE__*/React.createElement("div", {
    className: "b-card-soft",
    style: {
      borderRadius: 14,
      padding: "28px 18px",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React.createElement(FeatureGraphic, {
    kind: s.illo
  })))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Side by side",
    title: "What you get vs. what you usually get."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Annual financial review", "Included", "Not offered"], ["Refi-when-rates-drop alerts", "Automated", "On your own"], ["Home concierge & contractors", "Vetted bench", "Not offered"], ["Total Cost Analysis (all options)", "Standard", "Single quote only"], ["Time to verified pre-approval", "24–48 hrs", "5–10 days"], ["Post-close relationship", "30 years", "Until funding"]].map(([a, b, c]) => /*#__PURE__*/React.createElement("div", {
    key: a,
    style: {
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)",
      marginBottom: 12
    }
  }, a), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      fontWeight: 600,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "NEO"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--gold-deep)",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 7,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      fontSize: 9,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2713"), b)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      fontWeight: 600,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Typical"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-mute)"
    }
  }, c))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "The NEO Experience App",
    title: "Your mortgage, your equity, your home \u2014 in one place."
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 22,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(FeatureGraphic, {
    kind: "chart"
  })), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Live equity tracking", "Watch your home's value and equity update month over month."], ["Rate-drop alerts", "We watch the market and ping you the moment a refi makes sense."], ["One-tap to your team", "Megan, Sonny and the crew — a message away, for 30 years."]].map(([t, b]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: "var(--gold-deep)",
      marginTop: 7,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      lineHeight: 1.5,
      marginTop: 2
    }
  }, b)))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "60px 20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 16
    }
  }, "Want the full NEO Experience?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 28
    }
  }, "One 20-minute call is free. So is the second."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-dark",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "#fff",
      color: "var(--ink)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "transparent",
      border: "1.5px solid var(--ink-on-cyan)",
      color: "var(--ink-on-cyan)"
    }
  }, "APPLY NOW"))), /*#__PURE__*/React.createElement(MobFooter, null));
}

/* ==================== ABOUT MOBILE ==================== */
function BoldAboutMobile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 About (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "44px 20px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 20
    }
  }, "About Megan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.02,
      marginBottom: 24
    }
  }, "From a $20 Fidelity statement to five properties \u2014 and a mission."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--ink-soft)",
      marginBottom: 32
    }
  }, "Building generational wealth doesn't take inheritance. It takes the right information, applied early. That's the entire thesis behind The GEM Home Team."), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "78%",
      aspectRatio: "1 / 1",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      background: "radial-gradient(circle at 50% 35%, var(--accent-tint) 0%, #fff 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      borderRadius: "50%",
      border: "1px solid var(--line)",
      padding: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      overflow: "hidden",
      background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-megan.webp"),
    alt: "Megan Sawamura",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 10,
      left: "50%",
      transform: "translateX(-50%)",
      padding: "7px 14px",
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      whiteSpace: "nowrap"
    }
  }, "NMLS #972639"))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 23,
      fontWeight: 500,
      letterSpacing: "-0.018em",
      lineHeight: 1.28,
      color: "var(--ink)",
      marginBottom: 28
    }
  }, "\"My grandfather went from washing dishes in a restaurant to owning that restaurant \u2014 then to owning the whole shopping center.\""), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginBottom: 16
    }
  }, "Every Christmas, while my twelve cousins and I expected presents, we got Fidelity statements in our stockings. He had bought us each a little stock. At twelve, it looked like a piece of paper. At twenty-four, when he passed, that piece of paper was $20,000."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--ink-2)"
    }
  }, "I used it as a down payment on my first house in San Diego. I rented out the rooms to friends and saved aggressively. Two years later I bought another. Eight years later \u2014 five properties. GEM exists to give other families the same head start.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "What we stand for",
    title: "Three non-negotiables."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["01", "Education over salesmanship", "If you don't fully understand the math, we haven't done our job. No jargon traps. No 'just trust us.'", "edu"], ["02", "Lifetime relationships", "We stay involved long after closing. Year three, year fifteen, year thirty — same email, same number.", "loyal"], ["03", "The Total Cost view", "Rate is one number. The lifetime cost of your loan is another. We always show both. You decide.", "scale"]].map(([n, t, b, ic]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    className: "b-card",
    style: {
      padding: 24,
      borderTop: "3px solid var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(ValueIcon, {
    kind: ic
  }), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, n)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 500,
      letterSpacing: "-0.018em",
      lineHeight: 1.15,
      color: "var(--ink)",
      marginBottom: 10
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--ink-soft)"
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Off the clock",
    title: "The basics."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Education", "B.A. Economics, UC Santa Barbara", "edu"], ["Lives", "Little Italy, San Diego", "home"], ["Loyalty", "Padres season ticket holder", "ball"], ["Hobbies", "Wine making · scuba diving · live music", "wine"], ["License", "NMLS #972639", "badge"]].map(([k, v, ic]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      gap: 14,
      padding: 16,
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 14,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 42,
      height: 42,
      borderRadius: 12,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      color: "var(--gold-deep)"
    }
  }, /*#__PURE__*/React.createElement(BasicIcon, {
    kind: ic
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-soft)",
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      marginBottom: 3
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: "var(--ink)",
      fontWeight: 500
    }
  }, v)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Meet the team",
    title: "The people behind every close."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 18,
      overflow: "hidden",
      border: "1px solid var(--line)",
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/team-group.webp"),
    alt: "The GEM Home Team",
    style: {
      width: "100%",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Megan Sawamura", "Branch Leader", "/assets/team-megan.webp"], ["Sonny Alquizar", "Mortgage Advisor", "/assets/team-sonny.webp"], ["Camryn Hottell", "Loan Specialist", "/assets/team-camryn.webp"], ["Anthony Edrozo", "Production Partner", "/assets/team-anthony.webp"], ["Kevin Torres", "Client Success Manager", "/assets/team-kevin.webp"]].map(([n, r, photo]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      width: 60,
      height: 60,
      borderRadius: "50%",
      overflow: "hidden",
      border: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl(photo),
    alt: n,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block",
      transform: n === "Kevin Torres" ? "scale(1.2)" : undefined,
      transformOrigin: "57% 42%"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--gold-deep)",
      fontWeight: 500,
      marginTop: 2
    }
  }, r), TEAM_NMLS[n] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      color: "var(--ink-mute)",
      fontFamily: "var(--font-mono)",
      marginTop: 2
    }
  }, "NMLS #", TEAM_NMLS[n])))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 14
    }
  }, "Rooted in San Diego"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.022em",
      lineHeight: 1.1,
      marginBottom: 16
    }
  }, "A local team, serving our community."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 16
    }
  }, "We're not a national call center. We're a San Diego team \u2014 born here, based here, and genuinely invested in the families and neighborhoods we serve."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 28,
      color: "var(--ink-2)"
    }
  }, "Together we bring over 30 years of combined mortgage experience to every loan we close \u2014 guiding our neighbors home, one family at a time."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 40
    }
  }, [["30+", "years combined experience"], ["100%", "San Diego based"]].map(([num, lbl]) => /*#__PURE__*/React.createElement("div", {
    key: lbl
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 34,
      fontWeight: 600,
      letterSpacing: "-0.025em",
      color: "var(--ink)"
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      marginTop: 4
    }
  }, lbl))))), /*#__PURE__*/React.createElement(MobFooter, null));
}

/* ==================== CONTACT MOBILE ==================== */
function BoldContactMobile() {
  const [submitted, setSubmitted] = useStateM(false);
  const [selected, setSelected] = useStateM("Buying my first home");
  const [timeline, setTimeline] = useStateM("3–6 mo");
  const [sending, setSending] = useStateM(false);
  const [sendErr, setSendErr] = useStateM(false);
  const submit = async () => {
    if (sending) return;
    setSending(true);
    setSendErr(false);
    try {
      await sendInquiry("contact-form-m", selected, timeline);
      setSubmitted(true);
    } catch (e) {
      setSendErr(true);
    } finally {
      setSending(false);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Contact (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "44px 20px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 20
    }
  }, "Say hello"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.0,
      marginBottom: 20
    }
  }, "Let's find the best path here for you."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--ink-soft)"
    }
  }, "The first conversation is exploratory. We'll ask about your timeline, look at your numbers, and tell you honestly whether now is the right moment.")), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 20px 8px"
    }
  }, [["Call", "(858) 567-2233", "Mon–Fri 8a–6p PT"], ["Email", "Team@GemHomeTeam.com", "Replies within 4 hrs"], ["Visit", "10089 Willow Creek Rd, Suite 200", "San Diego, CA 92131"]].map(([k, v, sub]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "18px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginBottom: 6,
      fontWeight: 500
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 4
    }
  }, sub))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      borderRadius: 14,
      overflow: "hidden",
      border: "1px solid var(--line)",
      color: "var(--ink-mute)"
    }
  }, /*#__PURE__*/React.createElement(MapIllo, {
    width: 350,
    height: 200,
    accent: "var(--gold)"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 20px 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 24
    }
  }, !submitted ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 22,
      marginBottom: 6
    }
  }, "Tell us where you're at."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 24,
      fontSize: 14
    }
  }, "We'll respond within 4 business hours."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-4",
    id: "contact-form-m"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "name",
    placeholder: "Alex Rivera"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "email",
    type: "email",
    placeholder: "alex@example.com"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Phone"), /*#__PURE__*/React.createElement("input", {
    className: "b-input",
    name: "phone",
    type: "tel",
    placeholder: "(555) 555-5555"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "I'm thinking about\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8,
      marginTop: 4
    }
  }, ["Buying my first home", "Buying again", "Refinancing", "Investment property", "HELOC", "Just exploring"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setSelected(o),
    style: {
      padding: "12px 12px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      textAlign: "left",
      fontSize: 13,
      background: selected === o ? "var(--ink)" : "var(--bg)",
      color: selected === o ? "#fff" : "var(--ink)",
      borderColor: selected === o ? "var(--ink)" : "var(--line-2)"
    }
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 8,
      marginTop: 4
    }
  }, ["ASAP", "1–3 mo", "3–6 mo", "6+ mo"].map(o => /*#__PURE__*/React.createElement("button", {
    key: o,
    onClick: () => setTimeline(o),
    style: {
      padding: "12px 0",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      fontSize: 12.5,
      background: timeline === o ? "var(--ink)" : "var(--bg)",
      color: timeline === o ? "#fff" : "var(--ink)",
      borderColor: timeline === o ? "var(--ink)" : "var(--line-2)"
    }
  }, o)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "b-label"
  }, "Anything we should know?"), /*#__PURE__*/React.createElement("textarea", {
    className: "b-input",
    name: "message",
    rows: "3",
    placeholder: "Tell us a bit about your situation\u2026"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: submit,
    disabled: sending,
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      padding: "14px",
      marginTop: 4,
      opacity: sending ? 0.6 : 1
    }
  }, sending ? "Sending…" : "Send message →"), sendErr && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "#B4232A",
      textAlign: "center",
      marginTop: 2
    }
  }, "Couldn't send just now \u2014 please email ", /*#__PURE__*/React.createElement("a", {
    href: "mailto:team@gemhometeam.com",
    style: {
      fontWeight: 600,
      color: "#B4232A",
      textDecoration: "underline"
    }
  }, "team@gemhometeam.com"), " directly."))) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "48px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: 28,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      margin: "0 auto 20px",
      color: "var(--gold-deep)",
      fontSize: 26
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 22,
      marginBottom: 10
    }
  }, "Got it. We'll reach out to you as soon as possible."), /*#__PURE__*/React.createElement("p", {
    className: "b-body"
  }, "Expect a response within 4 business hours.")))), /*#__PURE__*/React.createElement(MobFooter, null));
}
Object.assign(window, {
  MobHeader,
  MobFooter,
  MobHead,
  BoldFeaturesMobile,
  BoldAboutMobile,
  BoldContactMobile
});

/* ===== mobile_2 ===== */
/* ============================================================
   BOLD direction — MOBILE pages, part 2
   Technology + Dashboard (390px). Reuses mobile chrome + partnerLogo.
   ============================================================ */
const {
  useState: useStateM2
} = React;

/* ==================== TECHNOLOGY MOBILE ==================== */
function BoldTechMobile() {
  const [pledge, setPledge] = useStateM2("btc");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Technology (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "44px 20px 36px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      maskImage: "linear-gradient(180deg, #000 0%, transparent 75%)",
      WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 75%)",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 12px",
      background: "var(--accent-tint)",
      borderRadius: 999,
      marginBottom: 22,
      fontSize: 11,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "var(--gold-deep)"
    }
  }), "POWERED BY BETTER \xB7 NMLS #330511"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.0,
      marginBottom: 20
    }
  }, "A San Diego team that knows your name \u2014 on the most advanced mortgage engine in America."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.55,
      color: "var(--ink-soft)",
      marginBottom: 28
    }
  }, "Most local brokers run on borrowed software. We run on Better's AI-native platform \u2014 the first fintech to fund over $110 billion in home loans."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      padding: "13px"
    }
  }, "See crypto-backed mortgages \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-outline",
    style: {
      justifyContent: "center",
      padding: "13px"
    }
  }, "Tour the technology")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 0,
      marginTop: 28,
      border: "1px solid var(--line)",
      borderRadius: 12,
      overflow: "hidden",
      background: "#fff"
    }
  }, [["$110B+", "funded on Better"], ["24 hrs", "to commitment letter"], ["~3 wks", "median time to close"], ["24/7/365", "AI loan assistant"]].map(([n, l], i) => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      padding: "20px 18px",
      borderLeft: i % 2 ? "1px solid var(--line)" : "none",
      borderTop: i > 1 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      color: "var(--ink)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginTop: 4
    }
  }, l)))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-dark",
    style: {
      padding: "52px 20px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 18
    }
  }, "Why strategy beats rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 96,
      fontWeight: 600,
      letterSpacing: "-0.04em",
      lineHeight: 0.85,
      color: "var(--gold)"
    }
  }, "81"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 46,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "%")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 28,
      fontWeight: 500,
      letterSpacing: "-0.022em",
      lineHeight: 1.12,
      color: "#fff",
      marginBottom: 18
    }
  }, "of homeowners aged 18\u201334 regret something about buying their home."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.72)",
      marginBottom: 10
    }
  }, "That's Zillow's number \u2014 and the cause is almost always the same: a mortgage chosen on rate alone, with no plan for the decades after closing."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.55,
      color: "rgba(255,255,255,0.55)"
    }
  }, "We do it the other way around. Strategy first, rate second, and a team that stays.")), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "The NEO process",
    title: "We don't sell you a loan. We build you a plan.",
    sub: "Four steps to a mortgage that fits the life you're actually building \u2014 and a relationship that doesn't end at the closing table."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["01", "Discovery", "We learn your full financial picture and long-term goals before we ever talk product.", "Step one"], ["02", "Strategy", "We model every option for the lowest lifetime cost, then hand you a plain-English Total Cost Analysis.", "Your options"], ["03", "Execution", "A flawless, fast close — positioned to win in competitive markets, or patient while you prepare.", "Close"], ["04", "Wealth Maximization", "Closing is just the start. We manage your mortgage for years and help turn equity into wealth.", "For 30 years"]].map(([n, t, d, tag], i) => {
    const last = i === 3;
    return /*#__PURE__*/React.createElement("div", {
      key: n,
      className: "b-card",
      style: {
        padding: 22,
        background: last ? "var(--ink)" : "#fff",
        border: last ? "none" : "1px solid var(--line)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "tabular",
      style: {
        fontSize: 13,
        fontWeight: 700,
        color: last ? "var(--gold)" : "var(--gold-deep)"
      }
    }, n), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: ".12em",
        textTransform: "uppercase",
        color: last ? "rgba(255,255,255,0.5)" : "var(--ink-mute)"
      }
    }, tag)), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 20,
        fontWeight: 600,
        letterSpacing: "-0.015em",
        lineHeight: 1.15,
        color: last ? "#fff" : "var(--ink)",
        marginBottom: 8
      }
    }, t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: 14,
        lineHeight: 1.55,
        color: last ? "rgba(255,255,255,0.72)" : "var(--ink-soft)"
      }
    }, d));
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Total Cost Analysis",
    title: "See the real cost \u2014 not just the rate.",
    sub: "The lowest rate isn't always the cheapest loan. Your Total Cost Analysis is a clear, digital side-by-side of every option \u2014 fees, payment, and what each one truly costs over the years you'll hold it."
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "14px 18px",
      borderBottom: "1px solid var(--line)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--ink-soft)"
    }
  }, "Total Cost Analysis"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--ink-mute)"
    }
  }, "7-yr horizon")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 18,
      display: "grid",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, "Option A \xB7 Buy the rate down"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--ink-soft)"
    }
  }, "6.75%")), [["Monthly payment", "$4,210"], ["Points & fees", "$14,000"], ["Cost over 7 years", "$367,640"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px 0",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-soft)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink)",
      fontWeight: 500
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      border: "2px solid var(--gold-deep)",
      borderRadius: 12,
      padding: 16,
      background: "var(--accent-tint)",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -10,
      left: 14,
      background: "var(--gold-deep)",
      color: "#fff",
      fontSize: 9.5,
      fontWeight: 700,
      letterSpacing: ".05em",
      textTransform: "uppercase",
      padding: "3px 9px",
      borderRadius: 999
    }
  }, "Recommended for your timeline"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 12,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink-on-cyan)"
    }
  }, "Option B \xB7 No points"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--ink-on-cyan)"
    }
  }, "7.00%")), [["Monthly payment", "$4,320"], ["Points & fees", "$1,500"], ["Cost over 7 years", "$364,380"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "4px 0",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-on-cyan)",
      opacity: 0.7
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink-on-cyan)",
      fontWeight: 600
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 14px",
      background: "var(--ink)",
      borderRadius: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "rgba(255,255,255,0.82)",
      fontSize: 12.5
    }
  }, "Move or refi within 7 years"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--gold)",
      fontWeight: 700,
      fontSize: 15
    }
  }, "Save $3,260")))), /*#__PURE__*/React.createElement("a", {
    href: "/total-cost-analysis",
    className: "b-btn b-btn-primary",
    style: {
      justifyContent: "center",
      width: "100%",
      padding: "13px",
      marginTop: 22
    }
  }, "Try the Total Cost Analysis \u2192")), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "The engine room",
    title: "Three pieces of technology your last lender didn't have.",
    sub: "Built in-house by Better since 2016. We're a NEO branch on top of it \u2014 fintech engineering with a neighbor's attention."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["Tinman™ · AI underwriting", "Rates in seconds. Pre-approval in minutes.", "Better's proprietary loan engine keeps your whole file in one system. Roughly 40% of loans are now AI-underwritten."], ["Betsy™ · AI loan assistant", "The first voice AI built for mortgages.", "Betsy answers questions, collects documents, and moves your file forward — day or night, 125,000+ conversations a month."], ["One Day Mortgage™", "Click to commitment letter in 24 hours.", "Not a pre-qual — a real, underwritten commitment that makes your offer read like cash. The industry takes a week or more."]].map(([tag, t, b]) => /*#__PURE__*/React.createElement("div", {
    key: tag,
    className: "b-card",
    style: {
      padding: 22,
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement(MonoTag, {
    color: "var(--gold-deep)"
  }, tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 21,
      fontWeight: 500,
      letterSpacing: "-0.02em",
      lineHeight: 1.14,
      margin: "14px 0 10px",
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 14
    }
  }, b))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "The honest comparison",
    title: "Tech of a fintech. Heart of a neighbor."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["AI underwriting engine", "Tinman, built in-house", "Third-party LOS"], ["Commitment letter speed", "24 hours", "5–10 days"], ["Crypto-backed mortgage", "Yes — BTC & USDC", "Not offered"], ["24/7 AI loan assistant", "Betsy", "Voicemail"], ["After you close", "Managed 30 years", "Until funding"], ["Who you actually talk to", "Megan & team", "Whoever picks up"]].map(([label, a, b]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      background: "var(--bg)",
      border: "1px solid var(--line)",
      borderRadius: 12,
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)",
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--gold-deep)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "NEO \xD7 Better"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--gold-deep)",
      fontWeight: 600,
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: 7,
      background: "var(--accent-tint)",
      display: "grid",
      placeItems: "center",
      fontSize: 9,
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\u2713"), a)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "var(--ink-mute)",
      fontWeight: 700,
      letterSpacing: ".04em",
      textTransform: "uppercase",
      marginBottom: 4
    }
  }, "Local broker"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-mute)"
    }
  }, b))))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "32px 20px",
      borderTop: "1px solid var(--line)",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px 16px"
    }
  }, ["Equal Housing Lender", "NMLS #330511", "Powered by Better Mortgage", "Licensed by the CA DFPI"].map((label, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: label
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      height: 4,
      borderRadius: 2,
      background: "var(--line-2)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: ".05em",
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, label))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "60px 20px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      fontWeight: 500,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 16
    }
  }, "Want all of this pointed at your home?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 28
    }
  }, "Whether you're paying cash, financing, or pledging crypto \u2014 start with a free 20-minute call."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-dark",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "#fff",
      color: "var(--ink)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "transparent",
      border: "1.5px solid var(--ink-on-cyan)",
      color: "var(--ink-on-cyan)"
    }
  }, "APPLY NOW"))), /*#__PURE__*/React.createElement(MobFooter, null));
}

/* ==================== DASHBOARD MOBILE ==================== */
function BoldDashboardMobile() {
  const [tab, setTab] = useStateM2("overview");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Dashboard (Mobile)",
    style: {
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 20px",
      background: "var(--bg)",
      borderBottom: "1px solid var(--line)",
      position: "sticky",
      top: 0,
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: assetUrl("/assets/neo-lockup-v2.webp"),
    alt: "NEO Home Loans",
    style: {
      height: 26,
      width: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 8,
      border: "1px solid var(--line)",
      color: "var(--ink-soft)"
    }
  }, "\uD83D\uDD14"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--gold)",
      color: "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 12,
      fontWeight: 600
    }
  }, "JR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      padding: "12px 20px",
      overflowX: "auto",
      background: "var(--bg)",
      borderBottom: "1px solid var(--line)"
    }
  }, ["Overview", "Loan", "Documents", "Messages", "Wealth"].map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => setTab(t.toLowerCase()),
    style: {
      flexShrink: 0,
      padding: "8px 16px",
      fontSize: 13,
      borderRadius: 999,
      fontWeight: 500,
      background: tab === t.toLowerCase() ? "var(--ink)" : "transparent",
      color: tab === t.toLowerCase() ? "#fff" : "var(--ink-soft)",
      border: tab === t.toLowerCase() ? "1px solid var(--ink)" : "1px solid var(--line)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 20px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginBottom: 8
    }
  }, "14 Encinitas Court \xB7 Your loan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      fontWeight: 500,
      letterSpacing: "-0.025em",
      lineHeight: 1.12,
      marginBottom: 16
    }
  }, "Step 4 of 6 \xB7 Underwriting in progress"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      background: "var(--line)",
      borderRadius: 3,
      overflow: "hidden",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "62%",
      height: "100%",
      background: "var(--ink)"
    }
  })), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)"
    }
  }, "62% \xB7 24 days to close June 8")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      marginBottom: 24
    }
  }, [["Loan amount", "$772,000", "30y · 6.250%"], ["Monthly · PITI", "$5,432", "Locked May 8"], ["Equity at close", "$193,000", "20% down"], ["Locked rate", "6.250%", "↓ 0.125 vs market"]].map(([k, v, s]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: "b-card",
    style: {
      padding: "18px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      marginBottom: 8
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 22,
      fontWeight: 500,
      letterSpacing: "-0.02em"
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 4
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 22,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 17,
      marginBottom: 16
    }
  }, "Loan progress"), [["Application submitted", "Apr 28", "done"], ["Pre-approval issued", "Apr 29", "done"], ["Appraisal ordered", "May 9", "done"], ["Underwriting review", "3 conditions outstanding", "active"], ["Clear to close", "Estimated Jun 2", "pending"], ["Closing & funding", "Jun 8 · 2:30pm", "pending"]].map(([t, s, st], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "18px 1fr",
      gap: 14,
      padding: "14px 0",
      borderTop: i === 0 ? "0" : "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 8,
      background: st === "done" ? "var(--ink)" : st === "active" ? "var(--gold)" : "var(--bg)",
      border: st === "pending" ? "1.5px dashed var(--line-2)" : "0",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontSize: 9
    }
  }, st === "done" ? "✓" : ""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: st === "pending" ? "var(--ink-soft)" : "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, s)), st === "active" && /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      borderColor: "transparent",
      fontSize: 9.5,
      fontWeight: 600,
      flexShrink: 0
    }
  }, "Action"))))), /*#__PURE__*/React.createElement("div", {
    className: "b-card-dark",
    style: {
      padding: 22,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.55)",
      marginBottom: 10,
      fontWeight: 500
    }
  }, "3 actions for you"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 500,
      marginBottom: 14,
      color: "#fff"
    }
  }, "Outstanding conditions"), [["Updated bank statement (April)", "Due May 18"], ["Explanation letter — late payment 2024", "Due May 20"], ["Hazard insurance binder", "Due May 28"]].map(([t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      padding: "12px 0",
      borderTop: "1px solid rgba(255,255,255,.1)",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: "#fff"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,.5)",
      marginTop: 2
    }
  }, d)), /*#__PURE__*/React.createElement("button", {
    style: {
      padding: "7px 13px",
      background: "var(--gold)",
      color: "var(--ink)",
      borderRadius: 6,
      fontSize: 12,
      fontWeight: 500
    }
  }, "Upload")))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 17,
      fontWeight: 500
    }
  }, "From your team"), /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      color: "var(--gold-deep)",
      borderColor: "transparent",
      fontSize: 9.5,
      fontWeight: 600
    }
  }, "2 new")), [["Megan Sawamura", "Appraisal came back at $972k — $7k over asking. Quick thoughts attached.", "11m"], ["Sonny Alquizar", "Got your statements — uploading to underwriting now.", "2h"]].map(([who, msg, t]) => /*#__PURE__*/React.createElement("div", {
    key: who,
    style: {
      display: "grid",
      gridTemplateColumns: "32px 1fr",
      gap: 12,
      padding: "12px 0",
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--bg-3)",
      color: "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 11,
      fontWeight: 600
    }
  }, who.split(" ").map(x => x[0]).join("")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, who), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-mute)",
      marginLeft: 4
    }
  }, t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 3,
      lineHeight: 1.45
    }
  }, msg)))))));
}
Object.assign(window, {
  BoldTechMobile,
  BoldDashboardMobile
});

/* ===== calc_1 ===== */
/* ============================================================
   Military markets — all 50 states + DC
   Each state has 1-4 major metros relevant to military buyers.
   Numbers: median home price + E-6 w/dependents BAH (or local median rent
   for states without a major installation, used as MHA approximation).
   ============================================================ */

const MILITARY_MARKETS = {
  AL: {
    name: "Alabama",
    cities: [{
      name: "Huntsville (Redstone Arsenal)",
      price: 318000,
      bah: 1872
    }, {
      name: "Montgomery (Maxwell AFB)",
      price: 232000,
      bah: 1488
    }, {
      name: "Mobile",
      price: 218000,
      bah: 1407
    }]
  },
  AK: {
    name: "Alaska",
    cities: [{
      name: "Anchorage (JBER)",
      price: 412000,
      bah: 2253
    }, {
      name: "Fairbanks (Fort Wainwright)",
      price: 285000,
      bah: 1842
    }]
  },
  AZ: {
    name: "Arizona",
    cities: [{
      name: "Tucson (Davis-Monthan AFB)",
      price: 348000,
      bah: 1722
    }, {
      name: "Phoenix (Luke AFB)",
      price: 428000,
      bah: 1995
    }, {
      name: "Sierra Vista (Fort Huachuca)",
      price: 268000,
      bah: 1467
    }, {
      name: "Yuma (MCAS Yuma)",
      price: 282000,
      bah: 1428
    }]
  },
  AR: {
    name: "Arkansas",
    cities: [{
      name: "Jacksonville (Little Rock AFB)",
      price: 198000,
      bah: 1428
    }, {
      name: "Fayetteville",
      price: 312000,
      bah: 1521
    }]
  },
  CA: {
    name: "California",
    cities: [{
      name: "San Diego — Miramar (MCAS)",
      price: 748000,
      bah: 3702
    }, {
      name: "San Diego — 32nd St (NB)",
      price: 612000,
      bah: 3402
    }, {
      name: "Oceanside (Camp Pendleton)",
      price: 689000,
      bah: 3573
    }, {
      name: "Coronado (NAS North Island)",
      price: 1200000,
      bah: 3786
    }, {
      name: "Point Loma (NB Point Loma)",
      price: 891000,
      bah: 3624
    }, {
      name: "Twentynine Palms (MCAGCC)",
      price: 245000,
      bah: 1644
    }, {
      name: "Monterey (NPS / DLI)",
      price: 928000,
      bah: 3411
    }, {
      name: "Lemoore (NAS Lemoore)",
      price: 348000,
      bah: 2049
    }, {
      name: "Travis AFB area (Fairfield)",
      price: 612000,
      bah: 2904
    }, {
      name: "Beale AFB area (Marysville)",
      price: 398000,
      bah: 2241
    }, {
      name: "Edwards AFB area (Palmdale)",
      price: 472000,
      bah: 2196
    }, {
      name: "Los Angeles",
      price: 985000,
      bah: 3531
    }]
  },
  CO: {
    name: "Colorado",
    cities: [{
      name: "Colorado Springs (Fort Carson)",
      price: 462000,
      bah: 2238
    }, {
      name: "Aurora (Buckley SFB)",
      price: 498000,
      bah: 2436
    }, {
      name: "Denver",
      price: 562000,
      bah: 2598
    }]
  },
  CT: {
    name: "Connecticut",
    cities: [{
      name: "Groton (NSB New London)",
      price: 348000,
      bah: 2196
    }, {
      name: "Hartford",
      price: 312000,
      bah: 2058
    }]
  },
  DE: {
    name: "Delaware",
    cities: [{
      name: "Dover (Dover AFB)",
      price: 312000,
      bah: 1758
    }, {
      name: "Wilmington",
      price: 348000,
      bah: 1845
    }]
  },
  DC: {
    name: "District of Columbia",
    cities: [{
      name: "Washington DC (Joint Base Anacostia-Bolling)",
      price: 612000,
      bah: 3024
    }]
  },
  FL: {
    name: "Florida",
    cities: [{
      name: "Jacksonville (NAS Jacksonville)",
      price: 318000,
      bah: 1962
    }, {
      name: "Pensacola (NAS Pensacola)",
      price: 268000,
      bah: 1632
    }, {
      name: "Tampa (MacDill AFB)",
      price: 412000,
      bah: 2358
    }, {
      name: "Panama City (Tyndall AFB)",
      price: 318000,
      bah: 1611
    }, {
      name: "Crestview (Eglin AFB)",
      price: 298000,
      bah: 1647
    }, {
      name: "Niceville (Hurlburt Field)",
      price: 312000,
      bah: 1722
    }, {
      name: "Key West (NAS Key West)",
      price: 745000,
      bah: 3174
    }, {
      name: "Orlando",
      price: 382000,
      bah: 2058
    }, {
      name: "Homestead (Homestead ARB)",
      price: 412000,
      bah: 2412
    }, {
      name: "Miami",
      price: 568000,
      bah: 2541
    }]
  },
  GA: {
    name: "Georgia",
    cities: [{
      name: "Hinesville (Fort Stewart)",
      price: 228000,
      bah: 1545
    }, {
      name: "Columbus (Fort Moore)",
      price: 218000,
      bah: 1419
    }, {
      name: "Augusta (Fort Eisenhower)",
      price: 248000,
      bah: 1572
    }, {
      name: "Savannah (Hunter AAF)",
      price: 312000,
      bah: 1731
    }, {
      name: "Valdosta (Moody AFB)",
      price: 228000,
      bah: 1383
    }, {
      name: "Warner Robins (Robins AFB)",
      price: 228000,
      bah: 1413
    }, {
      name: "Marietta (Dobbins ARB / Atlanta)",
      price: 412000,
      bah: 2061
    }]
  },
  HI: {
    name: "Hawaii",
    cities: [{
      name: "Honolulu / Pearl Harbor (JBPHH)",
      price: 845000,
      bah: 3801
    }, {
      name: "Kaneohe Bay (MCBH)",
      price: 985000,
      bah: 3915
    }, {
      name: "Schofield Barracks (Wahiawa)",
      price: 745000,
      bah: 3702
    }]
  },
  ID: {
    name: "Idaho",
    cities: [{
      name: "Mountain Home (Mountain Home AFB)",
      price: 298000,
      bah: 1473
    }, {
      name: "Boise",
      price: 482000,
      bah: 1758
    }]
  },
  IL: {
    name: "Illinois",
    cities: [{
      name: "North Chicago (NS Great Lakes)",
      price: 248000,
      bah: 1953
    }, {
      name: "Belleville (Scott AFB)",
      price: 218000,
      bah: 1647
    }, {
      name: "Chicago",
      price: 348000,
      bah: 2289
    }, {
      name: "Rock Island (RI Arsenal)",
      price: 168000,
      bah: 1359
    }]
  },
  IN: {
    name: "Indiana",
    cities: [{
      name: "Indianapolis",
      price: 282000,
      bah: 1572
    }, {
      name: "Crane (NSA Crane / Bloomington)",
      price: 232000,
      bah: 1419
    }]
  },
  IA: {
    name: "Iowa",
    cities: [{
      name: "Des Moines",
      price: 268000,
      bah: 1431
    }, {
      name: "Cedar Rapids",
      price: 232000,
      bah: 1338
    }]
  },
  KS: {
    name: "Kansas",
    cities: [{
      name: "Junction City (Fort Riley)",
      price: 198000,
      bah: 1338
    }, {
      name: "Leavenworth (Fort Leavenworth)",
      price: 228000,
      bah: 1500
    }, {
      name: "Wichita (McConnell AFB)",
      price: 218000,
      bah: 1392
    }, {
      name: "Topeka",
      price: 198000,
      bah: 1338
    }]
  },
  KY: {
    name: "Kentucky",
    cities: [{
      name: "Radcliff (Fort Knox)",
      price: 228000,
      bah: 1545
    }, {
      name: "Hopkinsville (Fort Campbell)",
      price: 228000,
      bah: 1500
    }, {
      name: "Louisville",
      price: 268000,
      bah: 1542
    }, {
      name: "Lexington",
      price: 312000,
      bah: 1602
    }]
  },
  LA: {
    name: "Louisiana",
    cities: [{
      name: "Leesville (Fort Johnson)",
      price: 198000,
      bah: 1428
    }, {
      name: "Bossier City (Barksdale AFB)",
      price: 218000,
      bah: 1455
    }, {
      name: "Belle Chasse (NAS JRB)",
      price: 268000,
      bah: 1722
    }, {
      name: "New Orleans",
      price: 298000,
      bah: 1782
    }]
  },
  ME: {
    name: "Maine",
    cities: [{
      name: "Brunswick (former NAS Brunswick)",
      price: 348000,
      bah: 1782
    }, {
      name: "Bangor",
      price: 268000,
      bah: 1455
    }]
  },
  MD: {
    name: "Maryland",
    cities: [{
      name: "Aberdeen (APG)",
      price: 312000,
      bah: 2058
    }, {
      name: "Lexington Park (NAS Patuxent)",
      price: 348000,
      bah: 2316
    }, {
      name: "Annapolis (USNA)",
      price: 562000,
      bah: 2754
    }, {
      name: "Bethesda (NSAB)",
      price: 745000,
      bah: 3024
    }, {
      name: "Fort Meade area",
      price: 412000,
      bah: 2451
    }, {
      name: "Baltimore",
      price: 318000,
      bah: 2241
    }]
  },
  MA: {
    name: "Massachusetts",
    cities: [{
      name: "Bedford (Hanscom AFB)",
      price: 712000,
      bah: 3204
    }, {
      name: "Cape Cod (Joint Base Cape Cod)",
      price: 612000,
      bah: 2745
    }, {
      name: "Boston",
      price: 798000,
      bah: 3294
    }]
  },
  MI: {
    name: "Michigan",
    cities: [{
      name: "Oscoda (former Wurtsmith AFB)",
      price: 168000,
      bah: 1182
    }, {
      name: "Selfridge ANGB area (Mt Clemens)",
      price: 248000,
      bah: 1602
    }, {
      name: "Detroit",
      price: 198000,
      bah: 1602
    }, {
      name: "Grand Rapids",
      price: 298000,
      bah: 1602
    }]
  },
  MN: {
    name: "Minnesota",
    cities: [{
      name: "Minneapolis-St Paul",
      price: 348000,
      bah: 2058
    }, {
      name: "Duluth",
      price: 232000,
      bah: 1383
    }]
  },
  MS: {
    name: "Mississippi",
    cities: [{
      name: "Biloxi (Keesler AFB)",
      price: 232000,
      bah: 1521
    }, {
      name: "Meridian (NAS Meridian)",
      price: 168000,
      bah: 1338
    }, {
      name: "Columbus (Columbus AFB)",
      price: 198000,
      bah: 1356
    }, {
      name: "Jackson",
      price: 218000,
      bah: 1383
    }]
  },
  MO: {
    name: "Missouri",
    cities: [{
      name: "Waynesville (Fort Leonard Wood)",
      price: 198000,
      bah: 1428
    }, {
      name: "Knob Noster (Whiteman AFB)",
      price: 198000,
      bah: 1383
    }, {
      name: "St. Louis (Scott AFB area)",
      price: 248000,
      bah: 1647
    }, {
      name: "Kansas City",
      price: 268000,
      bah: 1788
    }]
  },
  MT: {
    name: "Montana",
    cities: [{
      name: "Great Falls (Malmstrom AFB)",
      price: 318000,
      bah: 1542
    }, {
      name: "Billings",
      price: 382000,
      bah: 1602
    }]
  },
  NE: {
    name: "Nebraska",
    cities: [{
      name: "Bellevue (Offutt AFB / Omaha)",
      price: 268000,
      bah: 1602
    }, {
      name: "Lincoln",
      price: 248000,
      bah: 1428
    }]
  },
  NV: {
    name: "Nevada",
    cities: [{
      name: "Las Vegas (Nellis AFB)",
      price: 412000,
      bah: 2061
    }, {
      name: "Fallon (NAS Fallon)",
      price: 412000,
      bah: 1968
    }, {
      name: "Reno",
      price: 482000,
      bah: 2196
    }]
  },
  NH: {
    name: "New Hampshire",
    cities: [{
      name: "Portsmouth (Portsmouth NSY)",
      price: 562000,
      bah: 2598
    }, {
      name: "Manchester",
      price: 412000,
      bah: 2196
    }]
  },
  NJ: {
    name: "New Jersey",
    cities: [{
      name: "Wrightstown (JB McGuire-Dix-Lakehurst)",
      price: 312000,
      bah: 2541
    }, {
      name: "Picatinny Arsenal area (Dover)",
      price: 412000,
      bah: 2541
    }, {
      name: "Newark / Jersey City",
      price: 562000,
      bah: 3024
    }]
  },
  NM: {
    name: "New Mexico",
    cities: [{
      name: "Alamogordo (Holloman AFB)",
      price: 248000,
      bah: 1500
    }, {
      name: "Clovis (Cannon AFB)",
      price: 198000,
      bah: 1383
    }, {
      name: "Albuquerque (Kirtland AFB)",
      price: 348000,
      bah: 1788
    }, {
      name: "White Sands area (Las Cruces)",
      price: 282000,
      bah: 1500
    }]
  },
  NY: {
    name: "New York",
    cities: [{
      name: "Watertown (Fort Drum)",
      price: 218000,
      bah: 1731
    }, {
      name: "West Point (USMA)",
      price: 498000,
      bah: 2904
    }, {
      name: "Rome (Griffiss / Rome Lab)",
      price: 198000,
      bah: 1572
    }, {
      name: "Niagara Falls (NF ARS)",
      price: 198000,
      bah: 1500
    }, {
      name: "New York City",
      price: 798000,
      bah: 3531
    }]
  },
  NC: {
    name: "North Carolina",
    cities: [{
      name: "Jacksonville (Camp Lejeune)",
      price: 248000,
      bah: 1773
    }, {
      name: "Fayetteville (Fort Liberty)",
      price: 285000,
      bah: 1893
    }, {
      name: "Goldsboro (Seymour Johnson AFB)",
      price: 218000,
      bah: 1500
    }, {
      name: "Havelock (MCAS Cherry Point)",
      price: 232000,
      bah: 1602
    }, {
      name: "Raleigh-Durham",
      price: 412000,
      bah: 2061
    }, {
      name: "Charlotte",
      price: 382000,
      bah: 1962
    }]
  },
  ND: {
    name: "North Dakota",
    cities: [{
      name: "Minot (Minot AFB)",
      price: 282000,
      bah: 1500
    }, {
      name: "Grand Forks (Grand Forks AFB)",
      price: 248000,
      bah: 1428
    }, {
      name: "Fargo",
      price: 298000,
      bah: 1500
    }]
  },
  OH: {
    name: "Ohio",
    cities: [{
      name: "Dayton (Wright-Patterson AFB)",
      price: 232000,
      bah: 1647
    }, {
      name: "Columbus",
      price: 298000,
      bah: 1647
    }, {
      name: "Cleveland",
      price: 198000,
      bah: 1500
    }, {
      name: "Cincinnati",
      price: 268000,
      bah: 1602
    }]
  },
  OK: {
    name: "Oklahoma",
    cities: [{
      name: "Lawton (Fort Sill)",
      price: 168000,
      bah: 1383
    }, {
      name: "Altus (Altus AFB)",
      price: 168000,
      bah: 1338
    }, {
      name: "Enid (Vance AFB)",
      price: 178000,
      bah: 1338
    }, {
      name: "Oklahoma City (Tinker AFB)",
      price: 248000,
      bah: 1572
    }, {
      name: "Tulsa",
      price: 232000,
      bah: 1500
    }]
  },
  OR: {
    name: "Oregon",
    cities: [{
      name: "Portland",
      price: 562000,
      bah: 2358
    }, {
      name: "Eugene",
      price: 482000,
      bah: 1962
    }]
  },
  PA: {
    name: "Pennsylvania",
    cities: [{
      name: "Carlisle (USAWC)",
      price: 282000,
      bah: 1788
    }, {
      name: "Mechanicsburg (NSA Mech)",
      price: 312000,
      bah: 1788
    }, {
      name: "Philadelphia",
      price: 282000,
      bah: 2196
    }, {
      name: "Pittsburgh",
      price: 232000,
      bah: 1647
    }]
  },
  RI: {
    name: "Rhode Island",
    cities: [{
      name: "Newport (NSC Newport)",
      price: 562000,
      bah: 2598
    }, {
      name: "Providence",
      price: 412000,
      bah: 2196
    }]
  },
  SC: {
    name: "South Carolina",
    cities: [{
      name: "Beaufort (MCRD / MCAS Beaufort)",
      price: 412000,
      bah: 1962
    }, {
      name: "Charleston (JB Charleston)",
      price: 412000,
      bah: 2196
    }, {
      name: "Columbia (Fort Jackson)",
      price: 268000,
      bah: 1602
    }, {
      name: "Sumter (Shaw AFB)",
      price: 218000,
      bah: 1500
    }]
  },
  SD: {
    name: "South Dakota",
    cities: [{
      name: "Rapid City (Ellsworth AFB)",
      price: 348000,
      bah: 1647
    }, {
      name: "Sioux Falls",
      price: 298000,
      bah: 1500
    }]
  },
  TN: {
    name: "Tennessee",
    cities: [{
      name: "Clarksville (Fort Campbell)",
      price: 312000,
      bah: 1647
    }, {
      name: "Millington (NSA Mid-South)",
      price: 248000,
      bah: 1602
    }, {
      name: "Tullahoma (Arnold AFB)",
      price: 282000,
      bah: 1500
    }, {
      name: "Nashville",
      price: 412000,
      bah: 2061
    }, {
      name: "Memphis",
      price: 232000,
      bah: 1602
    }]
  },
  TX: {
    name: "Texas",
    cities: [{
      name: "Killeen (Fort Cavazos)",
      price: 268000,
      bah: 1659
    }, {
      name: "San Antonio (JB San Antonio)",
      price: 298000,
      bah: 1782
    }, {
      name: "El Paso (Fort Bliss)",
      price: 248000,
      bah: 1647
    }, {
      name: "Del Rio (Laughlin AFB)",
      price: 198000,
      bah: 1338
    }, {
      name: "San Angelo (Goodfellow AFB)",
      price: 232000,
      bah: 1455
    }, {
      name: "Wichita Falls (Sheppard AFB)",
      price: 198000,
      bah: 1383
    }, {
      name: "Corpus Christi (NAS Corpus Christi)",
      price: 248000,
      bah: 1602
    }, {
      name: "Kingsville (NAS Kingsville)",
      price: 218000,
      bah: 1500
    }, {
      name: "Abilene (Dyess AFB)",
      price: 232000,
      bah: 1383
    }, {
      name: "Houston",
      price: 348000,
      bah: 2061
    }, {
      name: "Dallas-Fort Worth",
      price: 382000,
      bah: 2061
    }, {
      name: "Austin",
      price: 482000,
      bah: 2196
    }]
  },
  UT: {
    name: "Utah",
    cities: [{
      name: "Ogden (Hill AFB)",
      price: 482000,
      bah: 2058
    }, {
      name: "Salt Lake City",
      price: 562000,
      bah: 2196
    }]
  },
  VT: {
    name: "Vermont",
    cities: [{
      name: "Burlington",
      price: 412000,
      bah: 2196
    }, {
      name: "Montpelier",
      price: 348000,
      bah: 1788
    }]
  },
  VA: {
    name: "Virginia",
    cities: [{
      name: "Norfolk (NS Norfolk)",
      price: 385000,
      bah: 2196
    }, {
      name: "Virginia Beach (NAS Oceana / JEB)",
      price: 412000,
      bah: 2358
    }, {
      name: "Newport News (JB Langley-Eustis)",
      price: 348000,
      bah: 2196
    }, {
      name: "Quantico (MCB Quantico)",
      price: 562000,
      bah: 2904
    }, {
      name: "Arlington (Pentagon / JB Myer)",
      price: 745000,
      bah: 3024
    }, {
      name: "Fort Belvoir area",
      price: 612000,
      bah: 2904
    }, {
      name: "Dahlgren (NSWC Dahlgren)",
      price: 412000,
      bah: 2358
    }, {
      name: "Williamsburg",
      price: 412000,
      bah: 2196
    }]
  },
  WA: {
    name: "Washington",
    cities: [{
      name: "Tacoma / Lakewood (JBLM)",
      price: 562000,
      bah: 2598
    }, {
      name: "Bremerton (NB Kitsap)",
      price: 562000,
      bah: 2598
    }, {
      name: "Oak Harbor (NAS Whidbey Island)",
      price: 562000,
      bah: 2358
    }, {
      name: "Spokane (Fairchild AFB)",
      price: 412000,
      bah: 1788
    }, {
      name: "Seattle",
      price: 798000,
      bah: 3024
    }]
  },
  WV: {
    name: "West Virginia",
    cities: [{
      name: "Martinsburg (167th ANG)",
      price: 282000,
      bah: 1788
    }, {
      name: "Charleston",
      price: 218000,
      bah: 1455
    }]
  },
  WI: {
    name: "Wisconsin",
    cities: [{
      name: "Milwaukee",
      price: 282000,
      bah: 1647
    }, {
      name: "Madison (Truax Field)",
      price: 348000,
      bah: 1788
    }]
  },
  WY: {
    name: "Wyoming",
    cities: [{
      name: "Cheyenne (FE Warren AFB)",
      price: 348000,
      bah: 1602
    }, {
      name: "Casper",
      price: 312000,
      bah: 1500
    }]
  }
};
Object.assign(window, {
  MILITARY_MARKETS
});

/* ===== calc_2 ===== */
/* ============================================================
   Military ranks by branch.
   Each grade (E-1..E-9, W-1..W-5, O-1..O-10) has a per-branch label.
   BAH multipliers applied to the E-6-w/-deps baseline from city data.
   ============================================================ */

// BAH multipliers vs. E-6 w/ dependents baseline (roughly drawn from DoD tables)
const BAH_MULTIPLIER = {
  "E-1": 0.62,
  "E-2": 0.62,
  "E-3": 0.66,
  "E-4": 0.72,
  "E-5": 0.85,
  "E-6": 1.00,
  "E-7": 1.10,
  "E-8": 1.18,
  "E-9": 1.28,
  "W-1": 1.05,
  "W-2": 1.16,
  "W-3": 1.26,
  "W-4": 1.34,
  "W-5": 1.42,
  "O-1": 0.95,
  "O-2": 1.08,
  "O-3": 1.28,
  "O-4": 1.42,
  "O-5": 1.50,
  "O-6": 1.58,
  "O-7": 1.66,
  "O-8": 1.72,
  "O-9": 1.74,
  "O-10": 1.76
};

// Rank labels: { grade: { branch: "Display name" } }
const RANK_LABELS = {
  // ENLISTED
  "E-1": {
    army: "Private (PVT)",
    navy: "Seaman Recruit (SR)",
    marines: "Private (Pvt)",
    airforce: "Airman Basic (AB)",
    spaceforce: "Specialist 1 (Spc1)",
    coastguard: "Seaman Recruit (SR)"
  },
  "E-2": {
    army: "Private (PV2)",
    navy: "Seaman Apprentice (SA)",
    marines: "Private First Class (PFC)",
    airforce: "Airman (Amn)",
    spaceforce: "Specialist 2 (Spc2)",
    coastguard: "Seaman Apprentice (SA)"
  },
  "E-3": {
    army: "Private First Class (PFC)",
    navy: "Seaman (SN)",
    marines: "Lance Corporal (LCpl)",
    airforce: "Airman First Class (A1C)",
    spaceforce: "Specialist 3 (Spc3)",
    coastguard: "Seaman (SN)"
  },
  "E-4": {
    army: "Specialist / Corporal (SPC)",
    navy: "Petty Officer 3rd Class (PO3)",
    marines: "Corporal (Cpl)",
    airforce: "Senior Airman (SrA)",
    spaceforce: "Specialist 4 (Spc4)",
    coastguard: "Petty Officer 3rd Class (PO3)"
  },
  "E-5": {
    army: "Sergeant (SGT)",
    navy: "Petty Officer 2nd Class (PO2)",
    marines: "Sergeant (Sgt)",
    airforce: "Staff Sergeant (SSgt)",
    spaceforce: "Sergeant (Sgt)",
    coastguard: "Petty Officer 2nd Class (PO2)"
  },
  "E-6": {
    army: "Staff Sergeant (SSG)",
    navy: "Petty Officer 1st Class (PO1)",
    marines: "Staff Sergeant (SSgt)",
    airforce: "Technical Sergeant (TSgt)",
    spaceforce: "Technical Sergeant (TSgt)",
    coastguard: "Petty Officer 1st Class (PO1)"
  },
  "E-7": {
    army: "Sergeant First Class (SFC)",
    navy: "Chief Petty Officer (CPO)",
    marines: "Gunnery Sergeant (GySgt)",
    airforce: "Master Sergeant (MSgt)",
    spaceforce: "Master Sergeant (MSgt)",
    coastguard: "Chief Petty Officer (CPO)"
  },
  "E-8": {
    army: "Master Sergeant / 1SG (MSG)",
    navy: "Senior Chief Petty Officer (SCPO)",
    marines: "Master Sergeant (MSgt)",
    airforce: "Senior Master Sergeant (SMSgt)",
    spaceforce: "Senior Master Sergeant (SMSgt)",
    coastguard: "Senior Chief Petty Officer (SCPO)"
  },
  "E-9": {
    army: "Sergeant Major (SGM)",
    navy: "Master Chief Petty Officer (MCPO)",
    marines: "Master Gunnery Sergeant (MGySgt)",
    airforce: "Chief Master Sergeant (CMSgt)",
    spaceforce: "Chief Master Sergeant (CMSgt)",
    coastguard: "Master Chief Petty Officer (MCPO)"
  },
  // WARRANT (no Air Force or Space Force warrants)
  "W-1": {
    army: "Warrant Officer 1 (WO1)",
    navy: "Warrant Officer 1 (WO1)",
    marines: "Warrant Officer (WO)",
    airforce: null,
    spaceforce: null,
    coastguard: "Warrant Officer 1 (WO1)"
  },
  "W-2": {
    army: "Chief Warrant Officer 2 (CW2)",
    navy: "Chief Warrant Officer 2 (CWO2)",
    marines: "Chief Warrant Officer 2 (CWO2)",
    airforce: null,
    spaceforce: null,
    coastguard: "Chief Warrant Officer 2 (CWO2)"
  },
  "W-3": {
    army: "Chief Warrant Officer 3 (CW3)",
    navy: "Chief Warrant Officer 3 (CWO3)",
    marines: "Chief Warrant Officer 3 (CWO3)",
    airforce: null,
    spaceforce: null,
    coastguard: "Chief Warrant Officer 3 (CWO3)"
  },
  "W-4": {
    army: "Chief Warrant Officer 4 (CW4)",
    navy: "Chief Warrant Officer 4 (CWO4)",
    marines: "Chief Warrant Officer 4 (CWO4)",
    airforce: null,
    spaceforce: null,
    coastguard: "Chief Warrant Officer 4 (CWO4)"
  },
  "W-5": {
    army: "Chief Warrant Officer 5 (CW5)",
    navy: "Chief Warrant Officer 5 (CWO5)",
    marines: "Chief Warrant Officer 5 (CWO5)",
    airforce: null,
    spaceforce: null,
    coastguard: null
  },
  // OFFICER
  "O-1": {
    army: "Second Lieutenant (2LT)",
    navy: "Ensign (ENS)",
    marines: "Second Lieutenant (2ndLt)",
    airforce: "Second Lieutenant (2d Lt)",
    spaceforce: "Second Lieutenant (2d Lt)",
    coastguard: "Ensign (ENS)"
  },
  "O-2": {
    army: "First Lieutenant (1LT)",
    navy: "Lieutenant Junior Grade (LTJG)",
    marines: "First Lieutenant (1stLt)",
    airforce: "First Lieutenant (1st Lt)",
    spaceforce: "First Lieutenant (1st Lt)",
    coastguard: "Lieutenant Junior Grade (LTJG)"
  },
  "O-3": {
    army: "Captain (CPT)",
    navy: "Lieutenant (LT)",
    marines: "Captain (Capt)",
    airforce: "Captain (Capt)",
    spaceforce: "Captain (Capt)",
    coastguard: "Lieutenant (LT)"
  },
  "O-4": {
    army: "Major (MAJ)",
    navy: "Lieutenant Commander (LCDR)",
    marines: "Major (Maj)",
    airforce: "Major (Maj)",
    spaceforce: "Major (Maj)",
    coastguard: "Lieutenant Commander (LCDR)"
  },
  "O-5": {
    army: "Lieutenant Colonel (LTC)",
    navy: "Commander (CDR)",
    marines: "Lieutenant Colonel (LtCol)",
    airforce: "Lieutenant Colonel (Lt Col)",
    spaceforce: "Lieutenant Colonel (Lt Col)",
    coastguard: "Commander (CDR)"
  },
  "O-6": {
    army: "Colonel (COL)",
    navy: "Captain (CAPT)",
    marines: "Colonel (Col)",
    airforce: "Colonel (Col)",
    spaceforce: "Colonel (Col)",
    coastguard: "Captain (CAPT)"
  },
  "O-7": {
    army: "Brigadier General (BG)",
    navy: "Rear Admiral Lower Half (RDML)",
    marines: "Brigadier General (BGen)",
    airforce: "Brigadier General (Brig Gen)",
    spaceforce: "Brigadier General (Brig Gen)",
    coastguard: "Rear Admiral Lower Half (RDML)"
  },
  "O-8": {
    army: "Major General (MG)",
    navy: "Rear Admiral (RADM)",
    marines: "Major General (MajGen)",
    airforce: "Major General (Maj Gen)",
    spaceforce: "Major General (Maj Gen)",
    coastguard: "Rear Admiral (RADM)"
  },
  "O-9": {
    army: "Lieutenant General (LTG)",
    navy: "Vice Admiral (VADM)",
    marines: "Lieutenant General (LtGen)",
    airforce: "Lieutenant General (Lt Gen)",
    spaceforce: "Lieutenant General (Lt Gen)",
    coastguard: "Vice Admiral (VADM)"
  },
  "O-10": {
    army: "General (GEN)",
    navy: "Admiral (ADM)",
    marines: "General (Gen)",
    airforce: "General (Gen)",
    spaceforce: "General (Gen)",
    coastguard: "Admiral (ADM)"
  }
};
const ENLISTED_GRADES = ["E-1", "E-2", "E-3", "E-4", "E-5", "E-6", "E-7", "E-8", "E-9"];
const WARRANT_GRADES = ["W-1", "W-2", "W-3", "W-4", "W-5"];
const OFFICER_GRADES = ["O-1", "O-2", "O-3", "O-4", "O-5", "O-6", "O-7", "O-8", "O-9", "O-10"];
function isOfficerGrade(g) {
  return g.startsWith("O-") || g.startsWith("W-");
}
Object.assign(window, {
  BAH_MULTIPLIER,
  RANK_LABELS,
  ENLISTED_GRADES,
  WARRANT_GRADES,
  OFFICER_GRADES,
  isOfficerGrade
});

/* ===== calc_3 ===== */
/* ============================================================
   Military / VA Loan calculator page
   Dedicated tool for service members, veterans, and surviving spouses
   ============================================================ */
const {
  useState: useStateMC,
  useMemo: useMemoMC
} = React;
function MilitaryCalculator() {
  // All 50 states + DC. See military-markets.jsx for the dataset.
  const STATES = Object.keys(MILITARY_MARKETS).sort((a, b) => MILITARY_MARKETS[a].name.localeCompare(MILITARY_MARKETS[b].name));
  const [stateCode, setStateCode] = useStateMC("CA");
  const stateData = MILITARY_MARKETS[stateCode];
  const [cityIdx, setCityIdx] = useStateMC(0);
  const city = stateData.cities[cityIdx] || stateData.cities[0];
  const [branch, setBranch] = useStateMC("army");
  const [grade, setGrade] = useStateMC("E-6");
  const [yearsServed, setYearsServed] = useStateMC(8);
  const [hasDependents, setHasDependents] = useStateMC(true);
  const [price, setPrice] = useStateMC(city.price);
  const [down, setDown] = useStateMC(0);
  const [rate, setRate] = useStateMC(5.875);
  const [years, setYears] = useStateMC(30);
  const [firstUse, setFirstUse] = useStateMC(true);
  const [disabilityWaived, setDisabilityWaived] = useStateMC(false);
  const [serviceType, setServiceType] = useStateMC("active");
  const [bah, setBah] = useStateMC(city.bah);

  // Derived: officer/enlisted from pay grade; BAS rate; BAH multiplier
  const isOfficer = isOfficerGrade(grade);
  const rank = isOfficer ? "officer" : "enlisted";
  // BAS — 2024 rates (rounded). Officer is lower; enlisted is higher.
  const BAS_ENLISTED = 465; // /mo
  const BAS_OFFICER = 321; // /mo
  const bas = isOfficer ? BAS_OFFICER : BAS_ENLISTED;

  // BAH for selected grade — multiply E-6 baseline by rank multiplier, then dependents adjustment
  const bahForGrade = Math.round(bah * (BAH_MULTIPLIER[grade] || 1));
  const bahForStatus = hasDependents ? bahForGrade : Math.round(bahForGrade * 0.85);

  // VA qualifying income: BAH + BAS are non-taxable, so lenders can "gross up"
  // by 1.25x to compare against taxable income (DTI calculations).
  const qualifyingMonthly = (bahForStatus + bas) * 1.25;

  // When state changes, reset city to first option
  React.useEffect(() => {
    setCityIdx(0);
  }, [stateCode]);
  // When city changes, auto-update price + BAH defaults
  React.useEffect(() => {
    setPrice(city.price);
    setBah(city.bah);
  }, [stateCode, cityIdx]);

  // Eligibility: simple rule-of-thumb display
  const meetsMinService = useMemoMC(() => {
    if (serviceType === "veteran" || serviceType === "spouse") return true;
    if (serviceType === "reserve") return yearsServed >= 6;
    // Active duty: 90 days wartime / 181 days peacetime — display "Yes" for 1+ year
    return yearsServed >= 1;
  }, [serviceType, yearsServed]);
  const downAmt = price * (down / 100);
  const fundingFeePct = useMemoMC(() => {
    if (disabilityWaived) return 0;
    // VA funding fee schedule (2024+ rates)
    // First use: 2.15% (<5%), 1.5% (5-9.99%), 1.25% (10%+)
    // Subsequent: 3.3% (<5%), 1.5% (5-9.99%), 1.25% (10%+)
    if (firstUse) {
      if (down < 5) return 2.15;
      if (down < 10) return 1.5;
      return 1.25;
    } else {
      if (down < 5) return 3.3;
      if (down < 10) return 1.5;
      return 1.25;
    }
  }, [firstUse, down, disabilityWaived]);
  const fundingFee = (price - downAmt) * fundingFeePct / 100;
  const principalFinanced = price - downAmt + fundingFee;
  const monthly = monthlyPayment(principalFinanced, rate, years);
  const tax = price * 0.0073 / 12;
  const ins = 120;
  const totalPITI = monthly + tax + ins;
  // VA loans do NOT require PMI — that's a key selling point
  const conventionalEquiv = monthlyPayment(price * 0.95, 6.375, years) + price * 0.0073 / 12 + 120 + price * 0.95 * 0.005 / 12; // 0.5% PMI

  const bahCoverage = bahForStatus / totalPITI * 100;
  const usd = n => "$" + Math.round(n).toLocaleString();
  const usdK = n => "$" + Math.round(n / 1000).toLocaleString() + "K";
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Military Calculator"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Resources"
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg)",
      padding: "80px 0 56px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "b-container",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 14px",
      background: "var(--accent-tint)",
      borderRadius: 999,
      marginBottom: 28,
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "\u2726 For service members, veterans & surviving spouses"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h1",
    style: {
      maxWidth: 980,
      marginBottom: 24,
      fontSize: 76
    }
  }, "VA Loan calculator ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "built for the people who served.")), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 680
    }
  }, "Real numbers \u2014 funding fee, disability waiver, BAH coverage, San Diego MHA \u2014 modeled with the same math we use for our active-duty and veteran clients at MCAS Miramar, NB San Diego, and Camp Pendleton."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 24,
      overflow: "hidden",
      boxShadow: "0 32px 80px -32px rgba(46,182,222,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 16
    }
  }, "Your scenario"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Branch of service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(6, 1fr)",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [["army", "Army"], ["navy", "Navy"], ["marines", "USMC"], ["airforce", "AF"], ["spaceforce", "USSF"], ["coastguard", "USCG"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setBranch(v),
    style: {
      padding: "10px 0",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 8,
      background: branch === v ? "#fff" : "transparent",
      color: branch === v ? "var(--ink)" : "var(--ink-soft)",
      boxShadow: branch === v ? "0 2px 6px rgba(10,31,54,.08)" : "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Service status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [["active", "Active duty"], ["reserve", "Reserve/NG"], ["veteran", "Veteran"], ["spouse", "Surviving"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setServiceType(v),
    style: {
      padding: "10px 0",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 8,
      background: serviceType === v ? "#fff" : "transparent",
      color: serviceType === v ? "var(--ink)" : "var(--ink-soft)",
      boxShadow: serviceType === v ? "0 2px 6px rgba(10,31,54,.08)" : "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Rank"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: grade,
    onChange: e => setGrade(e.target.value),
    style: {
      width: "100%",
      padding: "12px 32px 12px 14px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      fontSize: 13.5,
      fontWeight: 500,
      color: "var(--ink)",
      background: "var(--bg)",
      appearance: "none",
      cursor: "pointer",
      outline: "none"
    }
  }, /*#__PURE__*/React.createElement("optgroup", {
    label: "Enlisted"
  }, ENLISTED_GRADES.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch]))), branch !== "airforce" && branch !== "spaceforce" && /*#__PURE__*/React.createElement("optgroup", {
    label: "Warrant"
  }, WARRANT_GRADES.filter(g => RANK_LABELS[g][branch]).map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch]))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Officer"
  }, OFFICER_GRADES.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch])))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-soft)",
      pointerEvents: "none",
      fontSize: 10
    }
  }, "\u25BC"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Dependents"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [[true, "With"], [false, "Without"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setHasDependents(v),
    style: {
      padding: "10px 0",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 8,
      background: hasDependents === v ? "#fff" : "transparent",
      color: hasDependents === v ? "var(--ink)" : "var(--ink-soft)",
      boxShadow: hasDependents === v ? "0 2px 6px rgba(10,31,54,.08)" : "none"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Years served"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 15,
      color: "var(--ink)",
      fontWeight: 600
    }
  }, yearsServed, " ", yearsServed === 1 ? "year" : "years", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 10,
      padding: "2px 8px",
      borderRadius: 999,
      fontSize: 11,
      fontWeight: 600,
      background: meetsMinService ? "rgba(52,199,123,.15)" : "rgba(194,90,59,.15)",
      color: meetsMinService ? "#1F8A5B" : "#C25A3B"
    }
  }, meetsMinService ? "✓ Meets min" : "Below min"))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: 30,
    step: 1,
    value: yearsServed,
    onChange: e => setYearsServed(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 10
    }
  }, "Where are you moving to?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "150px 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: stateCode,
    onChange: e => setStateCode(e.target.value),
    style: {
      width: "100%",
      padding: "12px 32px 12px 14px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink)",
      background: "var(--bg)",
      appearance: "none",
      cursor: "pointer",
      outline: "none"
    }
  }, STATES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, MILITARY_MARKETS[s].name))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-soft)",
      pointerEvents: "none",
      fontSize: 10
    }
  }, "\u25BC")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: cityIdx,
    onChange: e => setCityIdx(Number(e.target.value)),
    style: {
      width: "100%",
      padding: "12px 32px 12px 14px",
      border: "1px solid var(--line-2)",
      borderRadius: 8,
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink)",
      background: "var(--bg)",
      appearance: "none",
      cursor: "pointer",
      outline: "none"
    }
  }, stateData.cities.map((c, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: i
  }, c.name))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-soft)",
      pointerEvents: "none",
      fontSize: 10
    }
  }, "\u25BC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: "10px 12px",
      background: "var(--accent-tint)",
      borderRadius: 8,
      fontSize: 12,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "Local median:"), " ", usd(city.price), " home \xB7 ", usd(city.bah), "/mo BAH (E-6 w/ dependents)")), /*#__PURE__*/React.createElement(BoldSlider, {
    label: `Home price · ${city.name.split("(")[0].trim()} median`,
    value: price,
    min: 120000,
    max: 2500000,
    step: 5000,
    format: usd,
    onChange: setPrice
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "Down payment",
    value: down,
    min: 0,
    max: 20,
    step: 1,
    format: v => v + "%",
    sub: down === 0 ? "$0 down · VA benefit" : usd(downAmt),
    onChange: setDown
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "VA interest rate",
    value: rate,
    min: 4.5,
    max: 7.5,
    step: 0.125,
    format: v => v.toFixed(3) + "%",
    onChange: setRate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      marginBottom: 24,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [15, 20, 30].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setYears(y),
    style: {
      padding: "11px 0",
      fontSize: 13,
      fontWeight: 600,
      borderRadius: 8,
      background: years === y ? "#fff" : "transparent",
      color: years === y ? "var(--ink)" : "var(--ink-soft)",
      boxShadow: years === y ? "0 2px 6px rgba(10,31,54,.08)" : "none"
    }
  }, y, "-year fixed"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "First time using VA loan benefit",
    sub: "Subsequent users pay a higher funding fee (3.3% vs 2.15%)",
    value: firstUse,
    onChange: setFirstUse
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "VA disability rating \u2265 10%",
    sub: "Waives the VA funding fee entirely. Also applies to surviving spouses receiving DIC.",
    value: disabilityWaived,
    onChange: setDisabilityWaived
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-2)",
      borderRadius: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Monthly BAH \xB7 ", hasDependents ? "with" : "no", " dependents"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, usd(bahForStatus))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 1000,
    max: 5500,
    step: 50,
    value: bah,
    onChange: e => setBah(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, city.name, " MHA \xB7 ", grade, " \u2248 ", usd(bahForGrade), " (with deps). Adjusted from E-6 baseline ", usd(city.bah), " by grade.")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-2)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Monthly BAS \xB7 ", rank === "officer" ? "officer" : "enlisted", " rate"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600
    }
  }, usd(bas))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, "2024 rate \xB7 enlisted $465/mo, officer $321/mo. Counts as qualifying income."))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 48,
      background: "linear-gradient(180deg, var(--ink) 0%, #0E2540 100%)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -100,
      right: -100,
      width: 280,
      height: 280,
      borderRadius: 140,
      background: "radial-gradient(circle, rgba(91,194,231,0.35) 0%, rgba(91,194,231,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".1em",
      fontWeight: 700,
      marginBottom: 12
    }
  }, "YOUR ESTIMATED MONTHLY PAYMENT"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 72,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "#fff"
    }
  }, usd(totalPITI)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.55)",
      marginTop: 8
    }
  }, "Principal \xB7 Interest \xB7 Tax \xB7 Insurance \xB7 No PMI"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 18,
      background: "linear-gradient(135deg, rgba(91,194,231,0.18) 0%, rgba(91,194,231,0.06) 100%)",
      border: "1px solid rgba(91,194,231,0.35)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      color: "var(--gold)",
      letterSpacing: ".08em"
    }
  }, "QUALIFYING INCOME (BAH + BAS \xD7 1.25)")), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, usd(qualifyingMonthly), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "rgba(255,255,255,0.55)",
      fontWeight: 400
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.65)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "BAH + BAS are tax-free. Lenders gross them up by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--gold)"
    }
  }, "1.25\xD7"), " to match taxable income for DTI. That's ", usd(qualifyingMonthly * 12), "/yr in qualifying income from allowances alone \u2014 before your base pay."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 12,
      marginTop: 14,
      paddingTop: 14,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)"
    }
  }, "BAH (", hasDependents ? "w/ deps" : "no deps", ")"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, usd(bahForStatus))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)"
    }
  }, "BAS (", rank === "officer" ? "officer" : "enlisted", ")"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "#fff"
    }
  }, usd(bas))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: "rgba(255,255,255,0.55)"
    }
  }, "Gross-up"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "1.25\xD7")))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 18,
      background: "rgba(255,255,255,0.06)",
      borderRadius: 12,
      border: "1px solid rgba(91,194,231,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "BAH COVERAGE"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, bahCoverage >= 100 ? "Fully covered" : Math.round(bahCoverage) + "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "rgba(255,255,255,0.1)",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(bahCoverage, 100) + "%",
      height: "100%",
      background: bahCoverage >= 100 ? "#34C77B" : "var(--gold)",
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, bahCoverage >= 100 ? `Your BAH covers your full mortgage + ${usd(bah - totalPITI)} extra each month.` : `Out of pocket: ${usd(totalPITI - bah)}/mo on top of your BAH.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 32,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement(OutLine, {
    label: "Principal & interest",
    v: usd(monthly)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "Property tax",
    v: usd(tax)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "Insurance",
    v: usd(ins)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "PMI",
    v: "$0",
    highlight: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 18,
      background: disabilityWaived ? "rgba(52,199,123,0.1)" : "rgba(91,194,231,0.1)",
      border: "1px solid " + (disabilityWaived ? "rgba(52,199,123,0.3)" : "rgba(91,194,231,0.3)"),
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "rgba(255,255,255,0.7)"
    }
  }, "VA FUNDING FEE"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "#fff"
    }
  }, disabilityWaived ? "Waived" : usd(fundingFee))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      lineHeight: 1.5
    }
  }, disabilityWaived ? "Your service-connected disability rating waives this fee. You save the entire amount." : `${fundingFeePct}% of loan amount · financed into your loan, not paid upfront`)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 18,
      background: "rgba(255,255,255,0.06)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600,
      marginBottom: 10
    }
  }, "VS. CONVENTIONAL LOAN (5% DOWN + PMI)"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, usd(Math.max(0, conventionalEquiv - totalPITI)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.55)",
      fontWeight: 400
    }
  }, "/mo saved")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      marginTop: 6
    }
  }, usd(Math.max(0, conventionalEquiv - totalPITI) * 12), "/yr \xB7 ", usd(Math.max(0, conventionalEquiv - totalPITI) * 12 * years), " over ", years, " years")), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      padding: "14px 24px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 10,
      marginTop: 32
    }
  }, "See what I qualify for now \u2192"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      fontSize: 11,
      color: "var(--ink-mute)",
      textAlign: "center",
      maxWidth: 900,
      margin: "16px auto 0",
      lineHeight: 1.5
    }
  }, "Estimates based on current VA loan guidelines. Funding fee rates per 38 U.S.C. \xA7 3729. APR, payment, and eligibility subject to credit and underwriting approval. Property tax estimate uses San Diego county effective rate of 0.73%. Insurance estimate is a regional average. Not a commitment to lend."))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80,
      marginBottom: 56,
      alignItems: "end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Why VA")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 720
    }
  }, "The benefits you ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "earned"), ", finally explained without the jargon."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20
    }
  }, [["$0", "down payment required", "Conventional loans typically require 5–20% down. VA covers 100% financing on eligible properties up to your entitlement."], ["$0", "private mortgage insurance", "No PMI — ever. Saves the average buyer ~$200/mo for the first several years of the loan."], ["–0.375%", "lower rate vs. conventional", "VA loans typically price 0.25–0.5% under comparable conventional loans, even with similar credit."], ["100%", "reusable benefit", "Your VA entitlement restores after you sell. Use it again. And again. There's no lifetime limit on uses."]].map(([num, label, body], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 28,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 16,
      borderTop: "3px solid var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 44,
      fontWeight: 600,
      letterSpacing: "-0.028em",
      color: "var(--gold-deep)",
      lineHeight: 1
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "var(--ink)",
      marginTop: 6,
      marginBottom: 12
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, body)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Are you eligible?"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 20
    }
  }, "The quick check."), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginBottom: 28
    }
  }, "If you check any of the boxes on the right, you almost certainly qualify. We'll pull your Certificate of Eligibility (COE) on your behalf \u2014 no separate VA paperwork needed."), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "13px 22px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10
    }
  }, "We'll pull your COE for you \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 16,
      padding: 40
    }
  }, [["Active duty service", "90+ continuous days during wartime, or 181 days peacetime"], ["National Guard / Reserve", "6 years of service, or 90+ days under Title 32 (active service)"], ["Veteran (honorably discharged)", "Service-era requirements apply — we'll verify for you"], ["Surviving spouse", "If your spouse died in service or from a service-connected disability"], ["Cadet / midshipman", "USMA, USNA, USAFA, USCGA, USMMA grads after meeting service requirement"], ["Public Health Service / NOAA", "Commissioned officers, with qualifying service"]].map(([t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "24px 1fr",
      gap: 16,
      padding: "16px 0",
      borderTop: i === 0 ? "none" : "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      border: "1.5px solid var(--gold-deep)",
      display: "grid",
      placeItems: "center",
      color: "var(--gold-deep)",
      fontWeight: 700,
      fontSize: 11,
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, s)))))))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "San Diego military market"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      marginBottom: 48,
      maxWidth: 720
    }
  }, "We work with every base in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "America's Finest City"), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, [["NB San Diego (32nd St)", "Most popular areas: Chula Vista, Bonita, National City", "Avg VA loan: $612K"], ["MCAS Miramar", "Most popular areas: Mira Mesa, Scripps Ranch, Tierrasanta", "Avg VA loan: $748K"], ["MCB Camp Pendleton", "Most popular areas: Oceanside, Carlsbad, Vista", "Avg VA loan: $689K"], ["NAS North Island / Coronado", "Most popular areas: Coronado, IB, Eastlake", "Avg VA loan: $1.2M"], ["NB Point Loma", "Most popular areas: Point Loma, OB, Liberty Station", "Avg VA loan: $891K"], ["NMRTC Balboa", "Most popular areas: Linda Vista, Bay Park, Hillcrest", "Avg VA loan: $720K"]].map(([base, areas, avg], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 24,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: "var(--gold-deep)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "var(--ink)",
      letterSpacing: "-0.005em"
    }
  }, base)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.5,
      marginBottom: 8
    }
  }, areas), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, avg)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "120px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.6fr",
      gap: 80
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 14
    }
  }, "Questions"), /*#__PURE__*/React.createElement("h2", {
    className: "b-h2",
    style: {
      maxWidth: 360
    }
  }, "From the briefing.")), /*#__PURE__*/React.createElement(MilitaryFAQ, null)))), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "120px 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 80,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 24,
      maxWidth: 800,
      margin: "0 auto 24px"
    }
  }, "Use the benefit. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "You earned it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 36,
      maxWidth: 600,
      margin: "0 auto 36px"
    }
  }, "20-minute call, no obligation. We'll pull your COE, run the numbers for your rank and location, and tell you honestly what's available."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      padding: "16px 32px",
      fontSize: 15,
      fontWeight: 600,
      background: "#fff",
      color: "var(--ink)",
      borderRadius: 10,
      boxShadow: "0 12px 32px -8px rgba(10,10,10,0.4)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      padding: "16px 32px",
      fontSize: 15,
      fontWeight: 600,
      background: "transparent",
      color: "var(--ink-on-cyan)",
      border: "1.5px solid var(--ink-on-cyan)",
      borderRadius: 10
    }
  }, "Apply now")))), /*#__PURE__*/React.createElement(BoldFooter, null));
}
function Toggle({
  label,
  sub,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => onChange(!value),
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: 16,
      padding: "16px 0",
      textAlign: "left",
      borderTop: "1px solid var(--line)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--ink)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--ink-soft)",
      marginTop: 4,
      lineHeight: 1.4
    }
  }, sub)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 26,
      borderRadius: 13,
      background: value ? "var(--gold)" : "var(--line-2)",
      position: "relative",
      transition: "background .2s"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 3,
      left: value ? 21 : 3,
      width: 20,
      height: 20,
      borderRadius: 10,
      background: "#fff",
      transition: "left .2s",
      boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
    }
  })));
}
function OutLine({
  label,
  v,
  highlight
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      marginBottom: 4
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: highlight ? "var(--gold)" : "#fff"
    }
  }, v, highlight && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      marginLeft: 6,
      color: "var(--gold)",
      fontWeight: 500
    }
  }, "\u2713 VA")));
}
function MilitaryFAQ() {
  const [open, setOpen] = useStateMC(0);
  const faqs = [{
    q: "Can I use my VA loan more than once?",
    a: "Yes. Your entitlement restores after you sell the property and pay off the loan. There's no lifetime cap on uses. Some clients use VA for their first home, sell it, then use VA again for the next one — all while saving on PMI each time."
  }, {
    q: "What's the funding fee, and why?",
    a: "The funding fee keeps the VA loan program running without taxpayer cost. It's 2.15% for first-time use with 0% down, dropping to 1.25% with 10%+ down. Subsequent uses are higher (3.3% with 0% down). It's financed into your loan — not paid out of pocket. If you have a 10%+ disability rating, the fee is waived entirely."
  }, {
    q: "Will using VA make my offer less competitive in San Diego?",
    a: "Not when it's structured right. VA offers a clean, fully-underwritten pre-approval that closes in 21–25 days. We coach you on appraisal contingencies and ask the seller to cover specific fees only when needed. Several of our active-duty clients have won against all-cash offers in 2025."
  }, {
    q: "Can I buy a duplex or fourplex with VA?",
    a: "Yes — VA allows 2-, 3-, and 4-unit properties if you live in one as your primary residence. House-hacking with VA is one of the most underused wealth-building strategies in the military community."
  }, {
    q: "Do you work with PCSing service members?",
    a: "Constantly. We handle PCS timing, BAH transitions, dual-state moves, and partner with VA-savvy real estate agents at every major fleet concentration area. We can also handle remote closings — you don't need to be in San Diego to start."
  }, {
    q: "What if my credit took a hit during deployment?",
    a: "We work with credit profiles that conventional lenders bounce. VA has no minimum score by statute (lenders set their own — ours is 580 with manual underwriting available). We've closed loans for service members with bankruptcies, deployment-related credit dips, and complex situations."
  }];
  return /*#__PURE__*/React.createElement("div", null, faqs.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      borderTop: "1px solid var(--line)",
      borderBottom: i === faqs.length - 1 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(open === i ? -1 : i),
    style: {
      width: "100%",
      padding: "24px 0",
      textAlign: "left",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 500,
      color: "var(--ink)",
      letterSpacing: "-0.012em"
    }
  }, f.q), /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      width: 32,
      height: 32,
      borderRadius: 16,
      background: open === i ? "var(--gold)" : "transparent",
      border: open === i ? "none" : "1px solid var(--line-2)",
      color: open === i ? "var(--ink-on-cyan)" : "var(--ink)",
      display: "grid",
      placeItems: "center",
      fontSize: 16,
      transition: "all .2s",
      transform: open === i ? "rotate(45deg)" : "none"
    }
  }, "+")), open === i && /*#__PURE__*/React.createElement("p", {
    style: {
      paddingBottom: 24,
      fontSize: 15,
      color: "var(--ink-soft)",
      lineHeight: 1.6,
      maxWidth: 640
    }
  }, f.a))));
}
Object.assign(window, {
  MilitaryCalculator,
  Toggle,
  OutLine,
  MilitaryFAQ
});

/* ===== calc_4 ===== */
/* ============================================================
   Military / VA Loan calculator — MOBILE (390px)
   Replicates the desktop calculator's logic in a single column.
   Reuses BoldSlider, Toggle, OutLine, MilitaryFAQ + mobile chrome.
   ============================================================ */
const {
  useState: useStateMCM,
  useMemo: useMemoMCM
} = React;
function MilitaryCalculatorMobile() {
  const STATES = Object.keys(MILITARY_MARKETS).sort((a, b) => MILITARY_MARKETS[a].name.localeCompare(MILITARY_MARKETS[b].name));
  const [stateCode, setStateCode] = useStateMCM("CA");
  const stateData = MILITARY_MARKETS[stateCode];
  const [cityIdx, setCityIdx] = useStateMCM(0);
  const city = stateData.cities[cityIdx] || stateData.cities[0];
  const [branch, setBranch] = useStateMCM("army");
  const [grade, setGrade] = useStateMCM("E-6");
  const [yearsServed, setYearsServed] = useStateMCM(8);
  const [hasDependents, setHasDependents] = useStateMCM(true);
  const [price, setPrice] = useStateMCM(city.price);
  const [down, setDown] = useStateMCM(0);
  const [rate, setRate] = useStateMCM(5.875);
  const [years, setYears] = useStateMCM(30);
  const [firstUse, setFirstUse] = useStateMCM(true);
  const [disabilityWaived, setDisabilityWaived] = useStateMCM(false);
  const [serviceType, setServiceType] = useStateMCM("active");
  const [bah, setBah] = useStateMCM(city.bah);
  const isOfficer = isOfficerGrade(grade);
  const rank = isOfficer ? "officer" : "enlisted";
  const BAS_ENLISTED = 465;
  const BAS_OFFICER = 321;
  const bas = isOfficer ? BAS_OFFICER : BAS_ENLISTED;
  const bahForGrade = Math.round(bah * (BAH_MULTIPLIER[grade] || 1));
  const bahForStatus = hasDependents ? bahForGrade : Math.round(bahForGrade * 0.85);
  const qualifyingMonthly = (bahForStatus + bas) * 1.25;
  React.useEffect(() => {
    setCityIdx(0);
  }, [stateCode]);
  React.useEffect(() => {
    setPrice(city.price);
    setBah(city.bah);
  }, [stateCode, cityIdx]);
  const meetsMinService = useMemoMCM(() => {
    if (serviceType === "veteran" || serviceType === "spouse") return true;
    if (serviceType === "reserve") return yearsServed >= 6;
    return yearsServed >= 1;
  }, [serviceType, yearsServed]);
  const downAmt = price * (down / 100);
  const fundingFeePct = useMemoMCM(() => {
    if (disabilityWaived) return 0;
    if (firstUse) {
      if (down < 5) return 2.15;
      if (down < 10) return 1.5;
      return 1.25;
    }
    if (down < 5) return 3.3;
    if (down < 10) return 1.5;
    return 1.25;
  }, [firstUse, down, disabilityWaived]);
  const fundingFee = (price - downAmt) * fundingFeePct / 100;
  const principalFinanced = price - downAmt + fundingFee;
  const monthly = monthlyPayment(principalFinanced, rate, years);
  const tax = price * 0.0073 / 12;
  const ins = 120;
  const totalPITI = monthly + tax + ins;
  const conventionalEquiv = monthlyPayment(price * 0.95, 6.375, years) + price * 0.0073 / 12 + 120 + price * 0.95 * 0.005 / 12;
  const bahCoverage = bahForStatus / totalPITI * 100;
  const usd = n => "$" + Math.round(n).toLocaleString();
  const seg = active => ({
    padding: "11px 0",
    fontSize: 12.5,
    fontWeight: 600,
    borderRadius: 8,
    background: active ? "#fff" : "transparent",
    color: active ? "var(--ink)" : "var(--ink-soft)",
    boxShadow: active ? "0 2px 6px rgba(10,31,54,.08)" : "none"
  });
  const selectStyle = {
    width: "100%",
    padding: "12px 32px 12px 14px",
    border: "1px solid var(--line-2)",
    borderRadius: 8,
    fontSize: 13.5,
    fontWeight: 500,
    color: "var(--ink)",
    background: "var(--bg)",
    appearance: "none",
    cursor: "pointer",
    outline: "none"
  };
  const caret = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--ink-soft)",
      pointerEvents: "none",
      fontSize: 10
    }
  }, "\u25BC");
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page",
    "data-screen-label": "Bold \xB7 Military Calculator (Mobile)"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg)",
      padding: "44px 20px 32px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.4,
      backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
      backgroundSize: "26px 26px",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "7px 12px",
      background: "var(--accent-tint)",
      borderRadius: 999,
      marginBottom: 22,
      fontSize: 11,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "\u2726 For service members, veterans & spouses"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 38,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1.0,
      marginBottom: 18
    }
  }, "VA Loan calculator ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)"
    }
  }, "built for the people who served.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.55,
      color: "var(--ink-soft)"
    }
  }, "Real numbers \u2014 funding fee, disability waiver, BAH coverage \u2014 modeled with the same math we use for our active-duty and veteran clients."))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "8px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      color: "var(--gold-deep)",
      marginBottom: 16
    }
  }, "Your scenario"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Branch of service"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [["army", "Army"], ["navy", "Navy"], ["marines", "USMC"], ["airforce", "Air Force"], ["spaceforce", "Space F."], ["coastguard", "Coast G."]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setBranch(v),
    style: seg(branch === v)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Service status"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [["active", "Active duty"], ["reserve", "Reserve/NG"], ["veteran", "Veteran"], ["spouse", "Surviving"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: v,
    onClick: () => setServiceType(v),
    style: seg(serviceType === v)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Rank"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: grade,
    onChange: e => setGrade(e.target.value),
    style: selectStyle
  }, /*#__PURE__*/React.createElement("optgroup", {
    label: "Enlisted"
  }, ENLISTED_GRADES.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch]))), branch !== "airforce" && branch !== "spaceforce" && /*#__PURE__*/React.createElement("optgroup", {
    label: "Warrant"
  }, WARRANT_GRADES.filter(g => RANK_LABELS[g][branch]).map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch]))), /*#__PURE__*/React.createElement("optgroup", {
    label: "Officer"
  }, OFFICER_GRADES.map(g => /*#__PURE__*/React.createElement("option", {
    key: g,
    value: g
  }, g, " \xB7 ", RANK_LABELS[g][branch])))), caret), /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Dependents"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [[true, "With"], [false, "Without"]].map(([v, l]) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setHasDependents(v),
    style: seg(hasDependents === v)
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Years served"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 14,
      color: "var(--ink)",
      fontWeight: 600
    }
  }, yearsServed, " ", yearsServed === 1 ? "yr" : "yrs", /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 8,
      padding: "2px 8px",
      borderRadius: 999,
      fontSize: 10.5,
      fontWeight: 600,
      background: meetsMinService ? "rgba(52,199,123,.15)" : "rgba(194,90,59,.15)",
      color: meetsMinService ? "#1F8A5B" : "#C25A3B"
    }
  }, meetsMinService ? "✓ Meets min" : "Below min"))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 0,
    max: 30,
    step: 1,
    value: yearsServed,
    onChange: e => setYearsServed(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      display: "block",
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500,
      marginBottom: 8
    }
  }, "Where are you moving to?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: stateCode,
    onChange: e => setStateCode(e.target.value),
    style: selectStyle
  }, STATES.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, MILITARY_MARKETS[s].name))), caret), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: cityIdx,
    onChange: e => setCityIdx(Number(e.target.value)),
    style: selectStyle
  }, stateData.cities.map((c, i) => /*#__PURE__*/React.createElement("option", {
    key: i,
    value: i
  }, c.name))), caret)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      padding: "10px 12px",
      background: "var(--accent-tint)",
      borderRadius: 8,
      fontSize: 12,
      color: "var(--ink-2)",
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "Local median:"), " ", usd(city.price), " home \xB7 ", usd(city.bah), "/mo BAH (E-6 w/ deps)")), /*#__PURE__*/React.createElement(BoldSlider, {
    label: `Home price · ${city.name.split("(")[0].trim()} median`,
    value: price,
    min: 120000,
    max: 2500000,
    step: 5000,
    format: usd,
    onChange: setPrice
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "Down payment",
    value: down,
    min: 0,
    max: 20,
    step: 1,
    format: v => v + "%",
    sub: down === 0 ? "$0 down · VA benefit" : usd(downAmt),
    onChange: setDown
  }), /*#__PURE__*/React.createElement(BoldSlider, {
    label: "VA interest rate",
    value: rate,
    min: 4.5,
    max: 7.5,
    step: 0.125,
    format: v => v.toFixed(3) + "%",
    onChange: setRate
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      marginBottom: 20,
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 6,
      padding: 4,
      background: "var(--bg-2)",
      borderRadius: 10
    }
  }, [15, 20, 30].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setYears(y),
    style: seg(years === y)
  }, y, "-yr"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 0,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Toggle, {
    label: "First time using VA loan benefit",
    sub: "Subsequent users pay a higher funding fee (3.3% vs 2.15%)",
    value: firstUse,
    onChange: setFirstUse
  }), /*#__PURE__*/React.createElement(Toggle, {
    label: "VA disability rating \u2265 10%",
    sub: "Waives the VA funding fee entirely. Also applies to surviving spouses receiving DIC.",
    value: disabilityWaived,
    onChange: setDisabilityWaived
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-2)",
      borderRadius: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Monthly BAH \xB7 ", hasDependents ? "with" : "no", " deps"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, usd(bahForStatus))), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: 1000,
    max: 5500,
    step: 50,
    value: bah,
    onChange: e => setBah(Number(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, city.name, " MHA \xB7 ", grade, " \u2248 ", usd(bahForGrade), " (with deps).")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      background: "var(--bg-2)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, "Monthly BAS \xB7 ", rank, " rate"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, usd(bas))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "var(--ink-mute)",
      marginTop: 6
    }
  }, "2024 rate \xB7 enlisted $465/mo, officer $321/mo. Counts as qualifying income.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "16px 20px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      background: "linear-gradient(180deg, var(--ink) 0%, #0E2540 100%)",
      color: "#fff",
      borderRadius: 18,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -100,
      right: -100,
      width: 260,
      height: 260,
      borderRadius: 130,
      background: "radial-gradient(circle, rgba(91,194,231,0.35) 0%, rgba(91,194,231,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".1em",
      fontWeight: 700,
      marginBottom: 10
    }
  }, "YOUR ESTIMATED MONTHLY PAYMENT"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 54,
      fontWeight: 600,
      letterSpacing: "-0.03em",
      lineHeight: 1,
      color: "#fff"
    }
  }, usd(totalPITI)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.55)",
      marginTop: 8
    }
  }, "Principal \xB7 Interest \xB7 Tax \xB7 Insurance \xB7 No PMI"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: 16,
      background: "linear-gradient(135deg, rgba(91,194,231,0.18) 0%, rgba(91,194,231,0.06) 100%)",
      border: "1px solid rgba(91,194,231,0.35)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      color: "var(--gold)",
      letterSpacing: ".06em",
      marginBottom: 6
    }
  }, "QUALIFYING INCOME (BAH + BAS \xD7 1.25)"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: "#fff",
      letterSpacing: "-0.02em"
    }
  }, usd(qualifyingMonthly), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.55)",
      fontWeight: 400
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.65)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, "BAH + BAS are tax-free. Lenders gross them up by ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--gold)"
    }
  }, "1.25\xD7"), " for DTI \u2014 ", usd(qualifyingMonthly * 12), "/yr from allowances alone, before base pay.")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 16,
      background: "rgba(255,255,255,0.06)",
      borderRadius: 12,
      border: "1px solid rgba(91,194,231,0.25)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, "BAH COVERAGE"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: "#fff"
    }
  }, bahCoverage >= 100 ? "Fully covered" : Math.round(bahCoverage) + "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      background: "rgba(255,255,255,0.1)",
      borderRadius: 4,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: Math.min(bahCoverage, 100) + "%",
      height: "100%",
      background: bahCoverage >= 100 ? "#34C77B" : "var(--gold)",
      borderRadius: 4
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      marginTop: 8,
      lineHeight: 1.5
    }
  }, bahCoverage >= 100 ? `Your BAH covers your full mortgage + ${usd(bah - totalPITI)} extra each month.` : `Out of pocket: ${usd(totalPITI - bah)}/mo on top of your BAH.`)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
      marginTop: 24,
      paddingTop: 20,
      borderTop: "1px solid rgba(255,255,255,0.1)"
    }
  }, /*#__PURE__*/React.createElement(OutLine, {
    label: "Principal & interest",
    v: usd(monthly)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "Property tax",
    v: usd(tax)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "Insurance",
    v: usd(ins)
  }), /*#__PURE__*/React.createElement(OutLine, {
    label: "PMI",
    v: "$0",
    highlight: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      padding: 16,
      background: disabilityWaived ? "rgba(52,199,123,0.1)" : "rgba(91,194,231,0.1)",
      border: "1px solid " + (disabilityWaived ? "rgba(52,199,123,0.3)" : "rgba(91,194,231,0.3)"),
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "rgba(255,255,255,0.7)"
    }
  }, "VA FUNDING FEE"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 16,
      fontWeight: 600,
      color: "#fff"
    }
  }, disabilityWaived ? "Waived" : usd(fundingFee))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      lineHeight: 1.5
    }
  }, disabilityWaived ? "Your service-connected disability rating waives this fee entirely." : `${fundingFeePct}% of loan amount · financed into your loan, not paid upfront`)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 16,
      background: "rgba(255,255,255,0.06)",
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      letterSpacing: ".08em",
      fontWeight: 600,
      marginBottom: 10
    }
  }, "VS. CONVENTIONAL (5% DOWN + PMI)"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 24,
      fontWeight: 600,
      color: "var(--gold)"
    }
  }, usd(Math.max(0, conventionalEquiv - totalPITI)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: "rgba(255,255,255,0.55)",
      fontWeight: 400
    }
  }, "/mo saved")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: "rgba(255,255,255,0.55)",
      marginTop: 6
    }
  }, usd(Math.max(0, conventionalEquiv - totalPITI) * 12 * years), " over ", years, " years")), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      padding: "14px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--gold)",
      color: "var(--ink-on-cyan)",
      borderRadius: 10,
      marginTop: 24
    }
  }, "See what I qualify for now \u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      fontSize: 10.5,
      color: "var(--ink-mute)",
      lineHeight: 1.5
    }
  }, "Estimates based on current VA loan guidelines. Funding fee per 38 U.S.C. \xA7 3729. Subject to credit and underwriting approval. Not a commitment to lend.")), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Why VA",
    title: "The benefits you earned, without the jargon."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["$0", "down payment required", "VA covers 100% financing on eligible properties up to your entitlement."], ["$0", "private mortgage insurance", "No PMI — ever. Saves the average buyer ~$200/mo for the first several years."], ["–0.375%", "lower rate vs. conventional", "VA loans typically price 0.25–0.5% under comparable conventional loans."], ["100%", "reusable benefit", "Your entitlement restores after you sell. Use it again — no lifetime limit on uses."]].map(([num, label, body]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      padding: 22,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 14,
      borderTop: "3px solid var(--gold)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      fontSize: 38,
      fontWeight: 600,
      letterSpacing: "-0.028em",
      color: "var(--gold-deep)",
      lineHeight: 1
    }
  }, num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: "var(--ink)",
      marginTop: 6,
      marginBottom: 10
    }
  }, label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: "var(--ink-soft)",
      lineHeight: 1.55
    }
  }, body))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Are you eligible?",
    title: "The quick check.",
    sub: "Check any box below and you almost certainly qualify. We'll pull your Certificate of Eligibility (COE) for you."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-2)",
      borderRadius: 16,
      padding: 22
    }
  }, [["Active duty service", "90+ continuous days wartime, or 181 days peacetime"], ["National Guard / Reserve", "6 years of service, or 90+ days under Title 32"], ["Veteran (honorably discharged)", "Service-era requirements apply — we verify for you"], ["Surviving spouse", "If your spouse died in service or from a service-connected disability"], ["Cadet / midshipman", "Service-academy grads after meeting service requirement"], ["Public Health Service / NOAA", "Commissioned officers, with qualifying service"]].map(([t, s], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "grid",
      gridTemplateColumns: "22px 1fr",
      gap: 14,
      padding: "14px 0",
      borderTop: i === 0 ? "none" : "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 10,
      border: "1.5px solid var(--gold-deep)",
      display: "grid",
      placeItems: "center",
      color: "var(--gold-deep)",
      fontWeight: 700,
      fontSize: 11,
      marginTop: 2
    }
  }, "\u2713"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: "var(--ink-soft)",
      marginTop: 2
    }
  }, s))))), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 8,
      marginTop: 16,
      padding: "13px",
      fontSize: 14,
      fontWeight: 600,
      background: "var(--ink)",
      color: "#fff",
      borderRadius: 10
    }
  }, "We'll pull your COE for you \u2192")), /*#__PURE__*/React.createElement("section", {
    className: "b-section-warm",
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "San Diego military market",
    title: "We work with every base in America's Finest City."
  }), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, [["NB San Diego (32nd St)", "Chula Vista, Bonita, National City", "Avg VA loan: $612K"], ["MCAS Miramar", "Mira Mesa, Scripps Ranch, Tierrasanta", "Avg VA loan: $748K"], ["MCB Camp Pendleton", "Oceanside, Carlsbad, Vista", "Avg VA loan: $689K"], ["NAS North Island / Coronado", "Coronado, IB, Eastlake", "Avg VA loan: $1.2M"], ["NB Point Loma", "Point Loma, OB, Liberty Station", "Avg VA loan: $891K"], ["NMRTC Balboa", "Linda Vista, Bay Park, Hillcrest", "Avg VA loan: $720K"]].map(([base, areas, avg], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: 20,
      background: "#fff",
      border: "1px solid var(--line)",
      borderRadius: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: "var(--gold-deep)"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 15.5,
      fontWeight: 600,
      color: "var(--ink)",
      letterSpacing: "-0.005em"
    }
  }, base)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--ink-soft)",
      lineHeight: 1.5,
      marginBottom: 8
    }
  }, areas), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, avg))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "56px 20px"
    }
  }, /*#__PURE__*/React.createElement(MobHead, {
    eyebrow: "Questions",
    title: "From the briefing."
  }), /*#__PURE__*/React.createElement(MilitaryFAQ, null)), /*#__PURE__*/React.createElement("section", {
    className: "b-section-cyan",
    style: {
      padding: "60px 20px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      fontWeight: 500,
      letterSpacing: "-0.035em",
      lineHeight: 1,
      color: "var(--ink-on-cyan)",
      marginBottom: 18
    }
  }, "Use the benefit. ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic"
    }
  }, "You earned it.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--ink-on-cyan)",
      opacity: 0.82,
      marginBottom: 28
    }
  }, "20-minute call, no obligation. We'll pull your COE and run the numbers for your rank and location."), /*#__PURE__*/React.createElement("div", {
    className: "col gap-3"
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn b-btn-dark",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "#fff",
      color: "var(--ink)"
    }
  }, "Schedule a call \u2192"), /*#__PURE__*/React.createElement("a", {
    href: "https://neohomeloans.com/start/r/130389",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      justifyContent: "center",
      padding: "13px",
      background: "transparent",
      border: "1.5px solid var(--ink-on-cyan)",
      color: "var(--ink-on-cyan)"
    }
  }, "Apply now"))), /*#__PURE__*/React.createElement(MobFooter, null));
}
Object.assign(window, {
  MilitaryCalculatorMobile
});

/* ===== tca ===== */
/* ============================================================
   Total Cost Analysis — signature interactive tool.
   Compares the FULL lifetime cost of two mortgage scenarios
   (not just the monthly rate): monthly P&I, total interest,
   total cost, payoff year, and the savings between them.
   Responsive core + desktop/mobile chrome wrappers.
   ============================================================ */
const {
  useState: useStateTCA,
  useMemo: useMemoTCA
} = React;
function tcaMoney(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}
function tcaShort(n) {
  const a = Math.abs(n);
  if (a >= 1e6) return "$" + (n / 1e6).toFixed(2).replace(/\.00$/, "") + "M";
  if (a >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + Math.round(n);
}
function tcaCompute(price, down, rate, years) {
  const principal = Math.max(price - down, 0);
  const monthly = monthlyPayment(principal, rate, years); // P&I, from shared
  const totalPaid = monthly * years * 12;
  const totalInterest = Math.max(totalPaid - principal, 0);
  return {
    principal,
    monthly,
    totalPaid,
    totalInterest
  };
}

/* slider with label + live value */
function TCASlider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-label",
    style: {
      marginBottom: 0
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 17,
      fontWeight: 600,
      color: "var(--ink)",
      letterSpacing: "-0.01em"
    }
  }, display)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(parseFloat(e.target.value)),
    style: {
      width: "100%",
      accentColor: "var(--gold-deep)",
      height: 4,
      cursor: "pointer"
    }
  }));
}

/* one scenario configuration + computed results */
function TCAScenarioCard({
  tag,
  accent,
  years,
  setYears,
  rate,
  setRate,
  result,
  thisYear
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      flex: "1 1 280px",
      minWidth: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: "var(--ink-soft)"
    }
  }, tag)), /*#__PURE__*/React.createElement("div", {
    className: "b-label"
  }, "Loan term"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 18
    }
  }, [15, 20, 30].map(y => /*#__PURE__*/React.createElement("button", {
    key: y,
    onClick: () => setYears(y),
    style: {
      flex: 1,
      padding: "9px 0",
      fontSize: 13.5,
      fontWeight: 600,
      borderRadius: 8,
      border: "1px solid " + (years === y ? "var(--gold-deep)" : "var(--line-2)"),
      background: years === y ? "var(--accent-tint)" : "var(--bg)",
      color: years === y ? "var(--gold-deep)" : "var(--ink-soft)"
    }
  }, y, "-yr"))), /*#__PURE__*/React.createElement("div", {
    className: "b-label"
  }, "Interest rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setRate(Math.max(0, Math.round((rate - 0.125) * 1000) / 1000)),
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      border: "1px solid var(--line-2)",
      fontSize: 18,
      color: "var(--ink-soft)"
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    className: "tabular",
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 22,
      fontWeight: 600,
      color: "var(--ink)"
    }
  }, rate.toFixed(3), "%"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setRate(Math.round((rate + 0.125) * 1000) / 1000),
    style: {
      width: 38,
      height: 38,
      borderRadius: 8,
      border: "1px solid var(--line-2)",
      fontSize: 18,
      color: "var(--ink-soft)"
    }
  }, "+")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-body",
    style: {
      fontSize: 13
    }
  }, "Monthly P&I"), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      fontSize: 26,
      fontWeight: 600,
      color: "var(--ink)",
      letterSpacing: "-0.02em"
    }
  }, tcaMoney(result.monthly))), [["Total interest", tcaMoney(result.totalInterest)], ["Total of payments", tcaMoney(result.totalPaid)], ["Paid off by", String(thisYear + years)]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: "flex",
      justifyContent: "space-between",
      padding: "6px 0",
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-soft)"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink-2)",
      fontWeight: 500
    }
  }, v)))));
}

/* stacked principal+interest bar for visual comparison */
function TCABar({
  label,
  accent,
  principal,
  interest,
  scaleMax
}) {
  const pct = n => scaleMax > 0 ? n / scaleMax * 100 : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 12.5,
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink-2)",
      fontWeight: 600
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink-soft)"
    }
  }, tcaShort(principal + interest), " total")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      height: 22,
      borderRadius: 6,
      overflow: "hidden",
      background: "var(--bg-2)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct(principal) + "%",
      background: "var(--ink)"
    },
    title: "Principal"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct(interest) + "%",
      background: accent
    },
    title: "Interest"
  })));
}
function TotalCostCore() {
  const thisYear = new Date().getFullYear();
  const [price, setPrice] = useStateTCA(850000);
  const [downPct, setDownPct] = useStateTCA(20);
  const [aYears, setAYears] = useStateTCA(30);
  const [aRate, setARate] = useStateTCA(6.375);
  const [bYears, setBYears] = useStateTCA(15);
  const [bRate, setBRate] = useStateTCA(5.625);
  const down = Math.round(price * downPct / 100);
  const A = useMemoTCA(() => tcaCompute(price, down, aRate, aYears), [price, down, aRate, aYears]);
  const B = useMemoTCA(() => tcaCompute(price, down, bRate, bYears), [price, down, bRate, bYears]);
  const interestDiff = A.totalInterest - B.totalInterest; // + => B saves interest
  const monthlyDiff = B.monthly - A.monthly; // + => B costs more / mo
  const saver = interestDiff >= 0 ? "B" : "A";
  const saved = Math.abs(interestDiff);
  const moreMonthly = Math.abs(monthlyDiff);
  const yearsDiff = Math.abs(aYears - bYears);
  const scaleMax = Math.max(A.principal + A.totalInterest, B.principal + B.totalInterest);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Total Cost Analysis"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h2",
    style: {
      maxWidth: 620,
      marginBottom: 16
    }
  }, "The whole cost. Not just the rate."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 600,
      marginBottom: 40
    }
  }, "A lower rate isn't always the cheaper loan. Compare two scenarios side by side and see what each one really costs you over the life of the mortgage \u2014 interest, total payments, and payoff date."), /*#__PURE__*/React.createElement("div", {
    className: "b-card-soft",
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "8px 48px"
    }
  }, /*#__PURE__*/React.createElement(TCASlider, {
    label: "Home price",
    value: price,
    display: tcaMoney(price),
    min: 300000,
    max: 2500000,
    step: 25000,
    onChange: setPrice
  }), /*#__PURE__*/React.createElement(TCASlider, {
    label: "Down payment · " + downPct + "%",
    value: downPct,
    display: tcaMoney(down),
    min: 0,
    max: 50,
    step: 1,
    onChange: setDownPct
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-body",
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, "Loan amount: ", /*#__PURE__*/React.createElement("span", {
    className: "tabular",
    style: {
      color: "var(--ink)",
      fontWeight: 600
    }
  }, tcaMoney(price - down)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 24,
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(TCAScenarioCard, {
    tag: "Scenario A",
    accent: "var(--ink)",
    years: aYears,
    setYears: setAYears,
    rate: aRate,
    setRate: setARate,
    result: A,
    thisYear: thisYear
  }), /*#__PURE__*/React.createElement(TCAScenarioCard, {
    tag: "Scenario B",
    accent: "var(--gold-deep)",
    years: bYears,
    setYears: setBYears,
    rate: bRate,
    setRate: setBRate,
    result: B,
    thisYear: thisYear
  })), /*#__PURE__*/React.createElement("div", {
    className: "b-section-cyan",
    style: {
      borderRadius: "var(--radius)",
      padding: "32px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 28,
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "1 1 320px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      opacity: 0.7,
      marginBottom: 8
    }
  }, "The bottom line"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 600,
      letterSpacing: "-0.02em",
      lineHeight: 1.2
    }
  }, "Scenario ", saver, " saves ", /*#__PURE__*/React.createElement("span", {
    style: {
      borderBottom: "3px solid currentColor"
    }
  }, tcaMoney(saved)), " in total interest."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      marginTop: 10,
      opacity: 0.85
    }
  }, monthlyDiff === 0 ? "Same monthly payment." : "Trade-off: " + tcaMoney(moreMonthly) + "/mo " + (saver === "B" ? "more" : "less") + " on Scenario " + saver + (yearsDiff ? ", and paid off " + yearsDiff + " years " + ((saver === "B" ? bYears : aYears) < (saver === "B" ? aYears : bYears) ? "sooner" : "later") + "." : "."))), /*#__PURE__*/React.createElement("a", {
    href: "https://gemteam.youcanbook.me",
    target: "_blank",
    rel: "noopener",
    className: "b-btn",
    style: {
      background: "var(--ink)",
      color: "#fff",
      padding: "14px 24px",
      fontSize: 15,
      fontWeight: 600,
      textAlign: "center"
    }
  }, "Get your personalized analysis \u2192"))), /*#__PURE__*/React.createElement("div", {
    className: "b-card",
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18,
      flexWrap: "wrap",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow"
  }, "Lifetime cost"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18,
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--ink)"
    }
  }), "Principal"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: 2,
      background: "var(--gold-deep)"
    }
  }), "Interest"))), /*#__PURE__*/React.createElement(TCABar, {
    label: "Scenario A · " + aYears + "-yr @ " + aRate.toFixed(3) + "%",
    accent: "var(--ink-soft)",
    principal: A.principal,
    interest: A.totalInterest,
    scaleMax: scaleMax
  }), /*#__PURE__*/React.createElement(TCABar, {
    label: "Scenario B · " + bYears + "-yr @ " + bRate.toFixed(3) + "%",
    accent: "var(--gold-deep)",
    principal: B.principal,
    interest: B.totalInterest,
    scaleMax: scaleMax
  })), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 11.5,
      color: "var(--ink-mute)",
      marginTop: 22,
      lineHeight: 1.6,
      maxWidth: 760
    }
  }, "Illustrative estimate only \u2014 not a rate quote, pre-qualification, or commitment to lend. Figures show principal & interest and exclude taxes, insurance, HOA, PMI, and points. Actual rates and costs depend on credit, property, and market conditions and are subject to change. ", /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "Talk to us"), " for a personalized Total Cost Analysis.")));
}
function TotalCostAnalysis() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Resources"
  }), /*#__PURE__*/React.createElement(TotalCostCore, null), /*#__PURE__*/React.createElement(BoldFooter, null));
}
function TotalCostAnalysisMobile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement(TotalCostCore, null), /*#__PURE__*/React.createElement(MobFooter, null));
}
Object.assign(window, {
  TotalCostCore,
  TotalCostAnalysis,
  TotalCostAnalysisMobile,
  tcaCompute
});

/* ===== insights ===== */
/* ============================================================
   Insights — content hub + evergreen guide articles.
   A filterable card grid (/insights) plus pre-rendered article
   pages (/insights/<slug>). Educational content only — no rate
   quotes or market data. Cross-links the calculators.
   ============================================================ */
const {
  useState: useStateINS
} = React;
const ARTICLES = [{
  slug: "rate-buydown-cost",
  category: "Buying",
  title: "What a mortgage rate buydown actually costs you",
  dek: "Points can lower your rate — but they only pay off if you keep the loan long enough to break even. Here's how to run that math before you spend the cash.",
  read: "6 min read",
  body: [{
    p: "A \"buydown\" means paying money up front — discount points — to get a lower interest rate. One point costs 1% of your loan amount and typically shaves a fraction off your rate. It can be a smart move or wasted cash, and the difference comes down to one number: your break-even."
  }, {
    h: "How break-even works"
  }, {
    p: "Paying points lowers your monthly payment. Divide what the points cost by how much you save each month, and you get the number of months it takes to recover the cost. Keep the loan past that point and you're ahead; sell or refinance before it, and you've lost money."
  }, {
    note: "If points cost $8,000 and lower your payment by $130/month, your break-even is about 62 months — just over five years. Stay in the loan longer than that and the buydown pays for itself."
  }, {
    h: "When a buydown usually makes sense"
  }, {
    ul: ["You're confident you'll keep this mortgage well past the break-even point.", "You have cash to spare after your down payment and reserves.", "Rates are unlikely to fall enough to make a future refinance the better play."]
  }, {
    h: "When it usually doesn't"
  }, {
    ul: ["You might move or refinance within a few years.", "That cash would do more as a larger down payment or emergency fund.", "You're stretching to afford the points in the first place."]
  }, {
    p: "The honest answer depends on the whole picture, not just the rate — which is exactly what a side-by-side comparison is for."
  }],
  cta: {
    label: "Compare a buydown in the Total Cost Analysis →",
    href: "/total-cost-analysis"
  }
}, {
  slug: "rent-vs-buy",
  category: "Buying",
  title: "Rent vs. buy: how to actually run the math",
  dek: "The 'throwing money away on rent' line is too simple. The real comparison is about time horizon, total cost, and what your money could do elsewhere.",
  read: "7 min read",
  body: [{
    p: "Buying isn't automatically better than renting, and renting isn't automatically throwing money away. Both have costs. The question is which one leaves you better off over the specific number of years you'll actually stay."
  }, {
    h: "Count the real cost of owning"
  }, {
    p: "A mortgage payment is only part of it. Owning also means property taxes, insurance, maintenance, and — if you put less than 20% down — mortgage insurance. Renting has its own costs: rent increases over time, and the down payment you didn't spend could be invested instead."
  }, {
    h: "Time horizon is everything"
  }, {
    p: "Buying has large up-front costs (closing costs, and the agent costs when you eventually sell). Spread those over two years and they're punishing; spread them over ten and they shrink to almost nothing per month. The longer you stay, the more buying tends to win."
  }, {
    note: "A useful rule of thumb: the shorter your expected stay, the more renting makes sense. Most break-even points land somewhere in the 3–6 year range, depending on your market and loan."
  }, {
    h: "Don't forget equity and appreciation"
  }, {
    p: "Each mortgage payment builds equity, and over long periods homes have historically appreciated — though never on a guaranteed or straight line. Run the comparison with conservative assumptions, not best-case ones."
  }, {
    p: "The point isn't to talk you into a house. It's to make the decision with real numbers in front of you."
  }],
  cta: {
    label: "Model your numbers in the Total Cost Analysis →",
    href: "/total-cost-analysis"
  }
}, {
  slug: "va-loans-explained",
  category: "VA / Military",
  title: "VA loans, explained: what every service member should know",
  dek: "No down payment, no monthly mortgage insurance, and a one-time funding fee that can sometimes be waived. Here's how the VA loan benefit actually works.",
  read: "6 min read",
  body: [{
    p: "If you've served, the VA home loan is often the single strongest financing tool available to you — and one of the most misunderstood. It's a loan from a regular lender that the Department of Veterans Affairs partially guarantees, which is why the terms can be so favorable."
  }, {
    h: "The headline benefits"
  }, {
    ul: ["No down payment required on most purchases, up to your entitlement.", "No monthly mortgage insurance — a real, ongoing savings versus conventional or FHA loans.", "Competitive rates and limits on certain closing costs."]
  }, {
    h: "The funding fee"
  }, {
    p: "Instead of mortgage insurance, the VA charges a one-time funding fee that can be rolled into the loan. The percentage depends on your down payment and whether it's your first use of the benefit. Importantly, the fee is often waived entirely for veterans receiving compensation for a service-connected disability."
  }, {
    note: "Your Certificate of Eligibility (COE) confirms your entitlement. You don't have to track it down yourself — your lender can usually pull it for you."
  }, {
    h: "Common myths"
  }, {
    ul: ["\"It's only for first-time buyers.\" — It isn't; the benefit can be reused.", "\"VA loans are slow.\" — With a lender who knows the program, timelines are competitive.", "\"You can only use it once.\" — Entitlement can be restored after a sale."]
  }, {
    p: "The details — entitlement, BAH, funding-fee tiers — are exactly what a purpose-built calculator can model for your rank and location."
  }],
  cta: {
    label: "Run the numbers in the VA Loan Calculator →",
    href: "/va-calculator"
  }
}, {
  slug: "first-time-buyer-roadmap",
  category: "First-Time Buyers",
  title: "The first-time buyer's roadmap, start to keys",
  dek: "You don't need 20% down and you don't need to do it alone. A plain-English walk through the steps, in the order they actually happen.",
  read: "8 min read",
  body: [{
    p: "Buying your first home feels like a maze because no one lays out the order of operations. Here it is, start to finish, without the jargon."
  }, {
    h: "1. Get your numbers straight"
  }, {
    p: "Before looking at homes, understand your income, debts, and savings. This tells you what you can comfortably afford — which is often different from the maximum a lender will approve."
  }, {
    h: "2. Get a real pre-approval"
  }, {
    p: "A pre-approval runs your credit and verifies your income, so your offer carries weight. It's stronger than a quick \"pre-qualification\" and tells you your actual price range."
  }, {
    h: "3. Know your down-payment options"
  }, {
    ul: ["Conventional loans can go as low as 3% down.", "FHA loans allow around 3.5% down with more flexible credit.", "VA loans (for eligible service members) can be 0% down.", "Down-payment assistance programs exist in many areas — ask."]
  }, {
    note: "Putting less than 20% down usually means mortgage insurance, which raises your payment. That's not a dealbreaker — it's just a number to factor into the total cost."
  }, {
    h: "4. Make an offer and go under contract"
  }, {
    p: "Once you find the home, your agent helps you structure an offer. Accepted? You're \"under contract\" and the clock starts on inspections, appraisal, and final underwriting."
  }, {
    h: "5. Close"
  }, {
    p: "Underwriting verifies everything one last time, you review your final numbers, sign, and get the keys. A good loan team keeps you ahead of every deadline so closing day is calm, not chaotic."
  }, {
    p: "The biggest first-time-buyer mistake is waiting until you're \"ready\" to start the conversation. Most people benefit from talking to a loan officer 6–18 months out, while there's still time to position credit and savings."
  }],
  cta: {
    label: "Start the conversation →",
    href: "/contact"
  }
}, {
  slug: "when-to-refinance",
  category: "Refinancing",
  title: "When refinancing actually makes sense (and when it doesn't)",
  dek: "A lower rate isn't automatically a win. The real question is whether the savings outrun the costs before you sell, move, or refinance again.",
  read: "6 min read",
  body: [{
    p: "Refinancing means replacing your current mortgage with a new one — usually to get a lower rate, change your term, or pull cash out of your equity. It can save real money, but it isn't free, and the math only works in specific situations."
  }, {
    h: "The break-even test"
  }, {
    p: "A refinance comes with closing costs. Divide those costs by how much the new loan saves you each month, and you get your break-even point — the number of months before the refinance starts actually paying you back. Keep the loan past that point and you win; sell or refinance again before it, and you paid for nothing."
  }, {
    note: "If a refinance costs $6,000 and saves you $200/month, your break-even is 30 months. Planning to stay five more years? Worth a look. Planning to move next year? Keep the loan you have."
  }, {
    h: "When a refinance usually makes sense"
  }, {
    ul: ["Rates have dropped meaningfully below what you're paying, and you'll stay past break-even.", "You want to drop mortgage insurance now that you've built enough equity.", "You're shortening your term — a 30-year into a 15-year can save six figures in interest.", "You have high-interest debt that a cash-out refinance could consolidate at a much lower rate — carefully, and with a plan."]
  }, {
    h: "When it usually doesn't"
  }, {
    ul: ["The monthly savings are small and the break-even lands past when you might move.", "You'd reset a loan you've been paying for years back to a fresh 30-year term without accounting for the extra interest.", "You're pulling cash out just because the equity is there, without a real use for it."]
  }, {
    h: "The part most people miss"
  }, {
    p: "A refinance restarts your amortization clock. In the early years of any mortgage, most of your payment goes to interest — so refinancing over and over means always paying the interest-heavy years and never reaching the equity-heavy ones. The full comparison isn't payment vs. payment; it's total cost over the years you'll actually hold the loan."
  }, {
    p: "That's exactly the math a side-by-side Total Cost Analysis shows you — and it's why we watch rates for our clients and only call when the numbers genuinely work."
  }],
  cta: {
    label: "Run your refinance math in the Total Cost Analysis →",
    href: "/total-cost-analysis"
  }
}];
const INS_CATEGORIES = ["All", "Buying", "First-Time Buyers", "VA / Military", "Refinancing"];
function insArticle(slug) {
  return ARTICLES.find(a => a.slug === slug);
}

/* ---- shared card ---- */
function InsightCard({
  a
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: "/insights/" + a.slug,
    className: "b-card",
    style: {
      display: "flex",
      flexDirection: "column",
      textAlign: "left",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      borderColor: "transparent",
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, a.category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      fontFamily: "var(--font-mono)"
    }
  }, a.read)), /*#__PURE__*/React.createElement("h3", {
    className: "b-h3",
    style: {
      fontSize: 21,
      marginBottom: 10,
      lineHeight: 1.2
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      fontSize: 14.5,
      marginBottom: 18,
      flex: 1
    }
  }, a.dek), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "Read the guide \u2192"));
}

/* ---- hub ---- */
function InsightsHubCore() {
  const [cat, setCat] = useStateINS("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter(a => a.category === cat);
  React.useEffect(() => {
    document.title = "Insights & Guides | The GEM Home Team at NEO Home Loans";
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-eyebrow",
    style: {
      marginBottom: 16
    }
  }, "Insights & Guides"), /*#__PURE__*/React.createElement("h1", {
    className: "b-h2",
    style: {
      maxWidth: 640,
      marginBottom: 16
    }
  }, "Mortgage strategy, in plain English."), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      maxWidth: 600,
      marginBottom: 36
    }
  }, "No jargon, no sales pitch \u2014 just clear, practical guides to help you make the biggest financial decision of your life with confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 40
    }
  }, INS_CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      padding: "8px 16px",
      fontSize: 13.5,
      fontWeight: 600,
      borderRadius: 999,
      border: "1px solid " + (cat === c ? "var(--gold-deep)" : "var(--line-2)"),
      background: cat === c ? "var(--gold-deep)" : "var(--bg)",
      color: cat === c ? "#fff" : "var(--ink-soft)"
    }
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
      gap: 24
    }
  }, list.map(a => /*#__PURE__*/React.createElement(InsightCard, {
    key: a.slug,
    a: a
  }))), list.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "b-body",
    style: {
      marginTop: 24
    }
  }, "More guides in this category are on the way.")));
}

/* ---- single article ---- */
function InsightBlock({
  b
}) {
  if (b.h) return /*#__PURE__*/React.createElement("h2", {
    className: "b-h3",
    style: {
      fontSize: 24,
      margin: "36px 0 12px",
      letterSpacing: "-0.015em"
    }
  }, b.h);
  if (b.p) return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: "var(--ink-2)",
      marginBottom: 18
    }
  }, b.p);
  if (b.ul) return /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "0 0 18px",
      paddingLeft: 0,
      listStyle: "none"
    }
  }, b.ul.map((x, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
      fontSize: 16.5,
      lineHeight: 1.6,
      color: "var(--ink-2)",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--gold-deep)",
      fontWeight: 700,
      flexShrink: 0
    }
  }, "\xB7"), x)));
  if (b.note) return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--accent-tint)",
      borderLeft: "3px solid var(--gold-deep)",
      borderRadius: "0 10px 10px 0",
      padding: "16px 20px",
      margin: "8px 0 24px",
      fontSize: 15.5,
      lineHeight: 1.6,
      color: "var(--ink)"
    }
  }, b.note);
  return null;
}
function InsightArticleCore({
  slug
}) {
  const a = insArticle(slug);
  React.useEffect(() => {
    if (a) {
      document.title = a.title + " | The GEM Home Team";
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute("content", a.dek);
    }
  }, [a]);
  if (!a) return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "96px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container-narrow"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "b-h2",
    style: {
      marginBottom: 16
    }
  }, "Guide not found."), /*#__PURE__*/React.createElement("a", {
    href: "/insights",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "\u2190 Back to all guides")));
  return /*#__PURE__*/React.createElement("article", {
    style: {
      padding: "56px 0 96px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "b-container-narrow",
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "/insights",
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--gold-deep)"
    }
  }, "\u2190 Insights & Guides"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "28px 0 16px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "b-tag",
    style: {
      background: "var(--accent-tint)",
      borderColor: "transparent",
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, a.category), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-mute)",
      fontFamily: "var(--font-mono)"
    }
  }, a.read)), /*#__PURE__*/React.createElement("h1", {
    className: "b-h2",
    style: {
      marginBottom: 18,
      lineHeight: 1.08
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    className: "b-lede",
    style: {
      marginBottom: 36,
      paddingBottom: 28,
      borderBottom: "1px solid var(--line)"
    }
  }, a.dek), a.body.map((b, i) => /*#__PURE__*/React.createElement(InsightBlock, {
    key: i,
    b: b
  })), a.cta && /*#__PURE__*/React.createElement("a", {
    href: a.cta.href,
    className: "b-btn b-btn-primary",
    style: {
      marginTop: 28,
      padding: "14px 24px",
      fontSize: 15,
      fontWeight: 600
    }
  }, a.cta.label), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: "var(--ink-mute)",
      lineHeight: 1.6,
      marginTop: 40,
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, "This article is general education, not financial, legal, or tax advice, and is not a commitment to lend. Examples are illustrative. Your situation is unique \u2014 ", /*#__PURE__*/React.createElement("a", {
    href: "/contact",
    style: {
      color: "var(--gold-deep)",
      fontWeight: 600
    }
  }, "talk to us"), " for guidance specific to you.")));
}

/* ---- chrome wrappers ---- */
function InsightsHub() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Resources"
  }), /*#__PURE__*/React.createElement(InsightsHubCore, null), /*#__PURE__*/React.createElement(BoldFooter, null));
}
function InsightsHubMobile() {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement(InsightsHubCore, null), /*#__PURE__*/React.createElement(MobFooter, null));
}
function InsightArticle({
  slug
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(BoldNav, {
    active: "Resources"
  }), /*#__PURE__*/React.createElement(InsightArticleCore, {
    slug: slug
  }), /*#__PURE__*/React.createElement(BoldFooter, null));
}
function InsightArticleMobile({
  slug
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "b-page"
  }, /*#__PURE__*/React.createElement(MobHeader, null), /*#__PURE__*/React.createElement(InsightArticleCore, {
    slug: slug
  }), /*#__PURE__*/React.createElement(MobFooter, null));
}
Object.assign(window, {
  ARTICLES,
  insArticle,
  InsightsHub,
  InsightsHubMobile,
  InsightArticle,
  InsightArticleMobile
});

/* ===== site_entry ===== */
/* ============================================================
   Production entry — real, navigable website with REAL URLs.
   Path router (History API):  "/route" => page.
   "/#section" or "#section" => Home + smooth scroll to section.
   Responsive: Mobile variant below 1024px (tablets get the clean
   centered mobile column).
   ============================================================ */

const ROUTES = {
  "/": {
    d: "BoldHome",
    m: "BoldHomeMobile",
    title: "San Diego Mortgage Lender",
    desc: "The GEM Home Team at NEO Home Loans, powered by Better — San Diego mortgage lending managed for the next 30 years, not just to closing."
  },
  "/home": {
    d: "BoldHome",
    m: "BoldHomeMobile",
    title: "San Diego Mortgage Lender",
    desc: "The GEM Home Team at NEO Home Loans, powered by Better — San Diego mortgage lending managed for the next 30 years."
  },
  "/experience": {
    d: "BoldFeatures",
    m: "BoldFeaturesMobile",
    title: "The NEO Experience",
    desc: "Mortgage Under Management, the NEO app, home concierge, and annual reviews — what you get when your lender stays for the next 30 years."
  },
  "/features": {
    d: "BoldFeatures",
    m: "BoldFeaturesMobile",
    title: "The NEO Experience",
    desc: "Mortgage Under Management, the NEO app, home concierge, and annual reviews — what you get when your lender stays for the next 30 years."
  },
  "/technology": {
    d: "BoldTech",
    m: "BoldTechMobile",
    title: "Technology",
    desc: "A San Diego team on Better's AI-native mortgage platform — the first fintech to fund over $110 billion in home loans."
  },
  "/about": {
    d: "BoldAbout",
    m: "BoldAboutMobile",
    title: "About Megan & the GEM Home Team",
    desc: "Meet Megan Sawamura (NMLS #972639) and the GEM Home Team — San Diego mortgage advisors building generational wealth."
  },
  "/contact": {
    d: "BoldContact",
    m: "BoldContactMobile",
    title: "Contact",
    desc: "Talk to the GEM Home Team. Call (858) 567-2233 or start a conversation about your timeline and numbers."
  },
  "/dashboard": {
    d: "BoldDashboard",
    m: "BoldDashboardMobile",
    title: "Client Dashboard",
    desc: "Your mortgage, managed — loan status, equity tracking, and your team in one place."
  },
  "/va-calculator": {
    d: "MilitaryCalculator",
    m: "MilitaryCalculatorMobile",
    title: "VA Loan Calculator",
    desc: "A VA loan calculator built for service members and veterans — funding fee, disability waiver, BAH, and San Diego MHA modeled in."
  },
  "/total-cost-analysis": {
    d: "TotalCostAnalysis",
    m: "TotalCostAnalysisMobile",
    title: "Total Cost Analysis",
    desc: "Compare the full lifetime cost of two mortgage scenarios — monthly payment, total interest, total cost, and payoff date. See what a loan really costs, not just the rate."
  },
  "/insights": {
    d: "InsightsHub",
    m: "InsightsHubMobile",
    title: "Insights & Guides",
    desc: "Plain-English mortgage guides from The GEM Home Team — buying, refinancing, VA loans, first-time buyers, and how to run the math."
  }
};
const SITE_NAME = "The GEM Home Team at NEO Home Loans";
const ORIGIN = "https://www.gemhometeam.com";
function normalizePath(p) {
  if (!p) return "/";
  p = p.replace(/\/+$/, ""); // strip trailing slash
  return p === "" ? "/" : p;
}

/* One-time: migrate any old hash routes (#/about) to real paths. */
(function migrateHash() {
  const h = window.location.hash || "";
  if (h.indexOf("#/") === 0) {
    const path = h.slice(1); // "/about"
    window.history.replaceState({}, "", normalizePath(path) + window.location.search);
  }
})();
function useLocation() {
  const [loc, setLoc] = React.useState({
    path: normalizePath(window.location.pathname),
    hash: window.location.hash
  });
  React.useEffect(() => {
    const on = () => setLoc({
      path: normalizePath(window.location.pathname),
      hash: window.location.hash
    });
    window.addEventListener("popstate", on);
    window.addEventListener("hashchange", on);
    // Intercept internal link clicks for client-side navigation.
    const onClick = e => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download")) return;
      // internal: "/path", "/path#sec", or "/#sec"
      if (href.charAt(0) !== "/") return;
      e.preventDefault();
      const [rawPath, rawHash] = href.split("#");
      const path = normalizePath(rawPath || "/");
      const url = path + (rawHash ? "#" + rawHash : "");
      if (path !== normalizePath(window.location.pathname) || rawHash) {
        window.history.pushState({}, "", url);
      }
      setLoc({
        path,
        hash: rawHash ? "#" + rawHash : ""
      });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener("hashchange", on);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return loc;
}
function useIsMobile() {
  const q = "(max-width: 1023px)";
  const [m, setM] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = e => setM(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

/* Keyboard/touch nav dropdowns + lazy image decoding. Runs after render. */
function enhanceAfterRender() {
  document.querySelectorAll(".nav-dd").forEach(dd => {
    if (dd.__wired) return;
    dd.__wired = true;
    const trigger = dd.querySelector(".nav-dd-trigger");
    if (trigger) {
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
      trigger.addEventListener("click", e => {
        if (window.matchMedia("(hover: none)").matches && !dd.classList.contains("open")) e.preventDefault();
        const open = dd.classList.toggle("open");
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  });
  if (!document.__navKeys) {
    document.__navKeys = true;
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") document.querySelectorAll(".nav-dd.open").forEach(d => d.classList.remove("open"));
    });
    document.addEventListener("click", e => {
      document.querySelectorAll(".nav-dd.open").forEach(d => {
        if (!d.contains(e.target)) d.classList.remove("open");
      });
    });
  }
  document.querySelectorAll("img:not([data-opt])").forEach((img, i) => {
    img.setAttribute("data-opt", "1");
    img.decoding = "async";
    if (i > 2) img.loading = "lazy";
  });
}
function Site() {
  const {
    path,
    hash
  } = useLocation();
  const isMobile = useIsMobile();

  // Dynamic article route: /insights/<slug>
  const isArticle = path.indexOf("/insights/") === 0 && path.length > 10;
  let route,
    useMobile,
    Comp,
    compProps = null;
  if (isArticle) {
    useMobile = isMobile && !!window.InsightArticleMobile;
    Comp = useMobile ? window.InsightArticleMobile : window.InsightArticle;
    compProps = {
      slug: path.slice("/insights/".length)
    };
    route = {
      title: "",
      desc: ""
    }; // article sets its own title/meta
  } else {
    route = ROUTES[path] || ROUTES["/"];
    useMobile = isMobile && route.m && window[route.m];
    Comp = window[useMobile ? route.m : route.d] || window[route.d];
  }
  React.useEffect(() => {
    if (route.title) {
      document.title = route.title + " | " + SITE_NAME;
      const md = document.querySelector('meta[name="description"]');
      if (md && route.desc) md.setAttribute("content", route.desc);
    }
    let link = document.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute("href", ORIGIN + (path === "/" ? "/" : path));
  }, [route, path]);
  React.useEffect(() => {
    enhanceAfterRender();
    const id = setTimeout(() => {
      const sec = (hash || "").replace(/^#/, "");
      if (sec) {
        const el = document.getElementById(sec);
        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
          return;
        }
      }
      window.scrollTo({
        top: 0
      });
    }, 0);
    return () => clearTimeout(id);
  }, [path, hash, isMobile]);
  if (!Comp) return React.createElement("div", {
    style: {
      padding: 48,
      fontFamily: "system-ui"
    }
  }, "Page not found.");
  const el = compProps ? React.createElement(Comp, compProps) : React.createElement(Comp);
  return useMobile ? React.createElement("div", {
    className: "site-mobile-shell"
  }, el) : el;
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Site));
