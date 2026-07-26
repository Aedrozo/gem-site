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
const TESTIMONIALS = [
  {
    quote: "Megan and her team were absolutely amazing throughout my home buying process.",
    name: "Justin S.",
    detail: "San Diego, CA · Verified on Experience.com",
  },
  {
    quote: "Megan was diligent, thorough, and very informative throughout the entire process.",
    name: "Sean D.",
    detail: "Makawao, HI · Verified on Experience.com",
  },
  {
    quote: "She gave us advice while looking ahead to ensure everything goes smoothly.",
    name: "Chiaki N.",
    detail: "San Diego, CA · Verified on Experience.com",
  },
];

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

Object.assign(window, { NAV, TEAM_NMLS, SERVICES, PROCESS, STATS, FAQS, TESTIMONIALS, RESOURCES, monthlyPayment });
