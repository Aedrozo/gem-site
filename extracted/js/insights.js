/* ============================================================
   Insights — content hub + evergreen guide articles.
   A filterable card grid (/insights) plus pre-rendered article
   pages (/insights/<slug>). Educational content only — no rate
   quotes or market data. Cross-links the calculators.
   ============================================================ */
const { useState: useStateINS } = React;

const ARTICLES = [
  {
    slug: "rate-buydown-cost",
    category: "Buying",
    title: "What a mortgage rate buydown actually costs you",
    dek: "Points can lower your rate — but they only pay off if you keep the loan long enough to break even. Here's how to run that math before you spend the cash.",
    read: "6 min read",
    body: [
      { p: "A \"buydown\" means paying money up front — discount points — to get a lower interest rate. One point costs 1% of your loan amount and typically shaves a fraction off your rate. It can be a smart move or wasted cash, and the difference comes down to one number: your break-even." },
      { h: "How break-even works" },
      { p: "Paying points lowers your monthly payment. Divide what the points cost by how much you save each month, and you get the number of months it takes to recover the cost. Keep the loan past that point and you're ahead; sell or refinance before it, and you've lost money." },
      { note: "If points cost $8,000 and lower your payment by $130/month, your break-even is about 62 months — just over five years. Stay in the loan longer than that and the buydown pays for itself." },
      { h: "When a buydown usually makes sense" },
      { ul: [
        "You're confident you'll keep this mortgage well past the break-even point.",
        "You have cash to spare after your down payment and reserves.",
        "Rates are unlikely to fall enough to make a future refinance the better play.",
      ] },
      { h: "When it usually doesn't" },
      { ul: [
        "You might move or refinance within a few years.",
        "That cash would do more as a larger down payment or emergency fund.",
        "You're stretching to afford the points in the first place.",
      ] },
      { p: "The honest answer depends on the whole picture, not just the rate — which is exactly what a side-by-side comparison is for." },
    ],
    cta: { label: "Compare a buydown in the Total Cost Analysis →", href: "/total-cost-analysis" },
  },
  {
    slug: "rent-vs-buy",
    category: "Buying",
    title: "Rent vs. buy: how to actually run the math",
    dek: "The 'throwing money away on rent' line is too simple. The real comparison is about time horizon, total cost, and what your money could do elsewhere.",
    read: "7 min read",
    body: [
      { p: "Buying isn't automatically better than renting, and renting isn't automatically throwing money away. Both have costs. The question is which one leaves you better off over the specific number of years you'll actually stay." },
      { h: "Count the real cost of owning" },
      { p: "A mortgage payment is only part of it. Owning also means property taxes, insurance, maintenance, and — if you put less than 20% down — mortgage insurance. Renting has its own costs: rent increases over time, and the down payment you didn't spend could be invested instead." },
      { h: "Time horizon is everything" },
      { p: "Buying has large up-front costs (closing costs, and the agent costs when you eventually sell). Spread those over two years and they're punishing; spread them over ten and they shrink to almost nothing per month. The longer you stay, the more buying tends to win." },
      { note: "A useful rule of thumb: the shorter your expected stay, the more renting makes sense. Most break-even points land somewhere in the 3–6 year range, depending on your market and loan." },
      { h: "Don't forget equity and appreciation" },
      { p: "Each mortgage payment builds equity, and over long periods homes have historically appreciated — though never on a guaranteed or straight line. Run the comparison with conservative assumptions, not best-case ones." },
      { p: "The point isn't to talk you into a house. It's to make the decision with real numbers in front of you." },
    ],
    cta: { label: "Model your numbers in the Total Cost Analysis →", href: "/total-cost-analysis" },
  },
  {
    slug: "va-loans-explained",
    category: "VA / Military",
    title: "VA loans, explained: what every service member should know",
    dek: "No down payment, no monthly mortgage insurance, and a one-time funding fee that can sometimes be waived. Here's how the VA loan benefit actually works.",
    read: "6 min read",
    body: [
      { p: "If you've served, the VA home loan is often the single strongest financing tool available to you — and one of the most misunderstood. It's a loan from a regular lender that the Department of Veterans Affairs partially guarantees, which is why the terms can be so favorable." },
      { h: "The headline benefits" },
      { ul: [
        "No down payment required on most purchases, up to your entitlement.",
        "No monthly mortgage insurance — a real, ongoing savings versus conventional or FHA loans.",
        "Competitive rates and limits on certain closing costs.",
      ] },
      { h: "The funding fee" },
      { p: "Instead of mortgage insurance, the VA charges a one-time funding fee that can be rolled into the loan. The percentage depends on your down payment and whether it's your first use of the benefit. Importantly, the fee is often waived entirely for veterans receiving compensation for a service-connected disability." },
      { note: "Your Certificate of Eligibility (COE) confirms your entitlement. You don't have to track it down yourself — your lender can usually pull it for you." },
      { h: "Common myths" },
      { ul: [
        "\"It's only for first-time buyers.\" — It isn't; the benefit can be reused.",
        "\"VA loans are slow.\" — With a lender who knows the program, timelines are competitive.",
        "\"You can only use it once.\" — Entitlement can be restored after a sale.",
      ] },
      { p: "The details — entitlement, BAH, funding-fee tiers — are exactly what a purpose-built calculator can model for your rank and location." },
    ],
    cta: { label: "Run the numbers in the VA Loan Calculator →", href: "/va-calculator" },
  },
  {
    slug: "first-time-buyer-roadmap",
    category: "First-Time Buyers",
    title: "The first-time buyer's roadmap, start to keys",
    dek: "You don't need 20% down and you don't need to do it alone. A plain-English walk through the steps, in the order they actually happen.",
    read: "8 min read",
    body: [
      { p: "Buying your first home feels like a maze because no one lays out the order of operations. Here it is, start to finish, without the jargon." },
      { h: "1. Get your numbers straight" },
      { p: "Before looking at homes, understand your income, debts, and savings. This tells you what you can comfortably afford — which is often different from the maximum a lender will approve." },
      { h: "2. Get a real pre-approval" },
      { p: "A pre-approval runs your credit and verifies your income, so your offer carries weight. It's stronger than a quick \"pre-qualification\" and tells you your actual price range." },
      { h: "3. Know your down-payment options" },
      { ul: [
        "Conventional loans can go as low as 3% down.",
        "FHA loans allow around 3.5% down with more flexible credit.",
        "VA loans (for eligible service members) can be 0% down.",
        "Down-payment assistance programs exist in many areas — ask.",
      ] },
      { note: "Putting less than 20% down usually means mortgage insurance, which raises your payment. That's not a dealbreaker — it's just a number to factor into the total cost." },
      { h: "4. Make an offer and go under contract" },
      { p: "Once you find the home, your agent helps you structure an offer. Accepted? You're \"under contract\" and the clock starts on inspections, appraisal, and final underwriting." },
      { h: "5. Close" },
      { p: "Underwriting verifies everything one last time, you review your final numbers, sign, and get the keys. A good loan team keeps you ahead of every deadline so closing day is calm, not chaotic." },
      { p: "The biggest first-time-buyer mistake is waiting until you're \"ready\" to start the conversation. Most people benefit from talking to a loan officer 6–18 months out, while there's still time to position credit and savings." },
    ],
    cta: { label: "Start the conversation →", href: "/contact" },
  },
  {
    slug: "when-to-refinance",
    category: "Refinancing",
    title: "When refinancing actually makes sense (and when it doesn't)",
    dek: "A lower rate isn't automatically a win. The real question is whether the savings outrun the costs before you sell, move, or refinance again.",
    read: "6 min read",
    body: [
      { p: "Refinancing means replacing your current mortgage with a new one — usually to get a lower rate, change your term, or pull cash out of your equity. It can save real money, but it isn't free, and the math only works in specific situations." },
      { h: "The break-even test" },
      { p: "A refinance comes with closing costs. Divide those costs by how much the new loan saves you each month, and you get your break-even point — the number of months before the refinance starts actually paying you back. Keep the loan past that point and you win; sell or refinance again before it, and you paid for nothing." },
      { note: "If a refinance costs $6,000 and saves you $200/month, your break-even is 30 months. Planning to stay five more years? Worth a look. Planning to move next year? Keep the loan you have." },
      { h: "When a refinance usually makes sense" },
      { ul: [
        "Rates have dropped meaningfully below what you're paying, and you'll stay past break-even.",
        "You want to drop mortgage insurance now that you've built enough equity.",
        "You're shortening your term — a 30-year into a 15-year can save six figures in interest.",
        "You have high-interest debt that a cash-out refinance could consolidate at a much lower rate — carefully, and with a plan.",
      ] },
      { h: "When it usually doesn't" },
      { ul: [
        "The monthly savings are small and the break-even lands past when you might move.",
        "You'd reset a loan you've been paying for years back to a fresh 30-year term without accounting for the extra interest.",
        "You're pulling cash out just because the equity is there, without a real use for it.",
      ] },
      { h: "The part most people miss" },
      { p: "A refinance restarts your amortization clock. In the early years of any mortgage, most of your payment goes to interest — so refinancing over and over means always paying the interest-heavy years and never reaching the equity-heavy ones. The full comparison isn't payment vs. payment; it's total cost over the years you'll actually hold the loan." },
      { p: "That's exactly the math a side-by-side Total Cost Analysis shows you — and it's why we watch rates for our clients and only call when the numbers genuinely work." },
    ],
    cta: { label: "Run your refinance math in the Total Cost Analysis →", href: "/total-cost-analysis" },
  },
];

const INS_CATEGORIES = ["All", "Buying", "First-Time Buyers", "VA / Military", "Refinancing"];

function insArticle(slug) { return ARTICLES.find((a) => a.slug === slug); }

/* ---- shared card ---- */
function InsightCard({ a }) {
  return (
    <a href={"/insights/" + a.slug} className="b-card" style={{ display: "flex", flexDirection: "column", textAlign: "left", height: "100%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
        <span className="b-tag" style={{ background: "var(--accent-tint)", borderColor: "transparent", color: "var(--gold-deep)", fontWeight: 600 }}>{a.category}</span>
        <span style={{ fontSize: 12, color: "var(--ink-mute)", fontFamily: "var(--font-mono)" }}>{a.read}</span>
      </div>
      <h3 className="b-h3" style={{ fontSize: 21, marginBottom: 10, lineHeight: 1.2 }}>{a.title}</h3>
      <p className="b-body" style={{ fontSize: 14.5, marginBottom: 18, flex: 1 }}>{a.dek}</p>
      <span style={{ fontSize: 14, fontWeight: 600, color: "var(--gold-deep)" }}>Read the guide →</span>
    </a>
  );
}

/* ---- hub ---- */
function InsightsHubCore() {
  const [cat, setCat] = useStateINS("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  React.useEffect(() => { document.title = "Insights & Guides | The GEM Home Team at NEO Home Loans"; }, []);
  return (
    <section style={{ padding: "72px 0 96px" }}>
      <div className="b-container">
        <div className="b-eyebrow" style={{ marginBottom: 16 }}>Insights &amp; Guides</div>
        <h1 className="b-h2" style={{ maxWidth: 640, marginBottom: 16 }}>Mortgage strategy, in plain English.</h1>
        <p className="b-lede" style={{ maxWidth: 600, marginBottom: 36 }}>
          No jargon, no sales pitch — just clear, practical guides to help you make the biggest financial decision of your life with confidence.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
          {INS_CATEGORIES.map((c) => (
            <button key={c} onClick={() => setCat(c)}
              style={{ padding: "8px 16px", fontSize: 13.5, fontWeight: 600, borderRadius: 999,
                border: "1px solid " + (cat === c ? "var(--gold-deep)" : "var(--line-2)"),
                background: cat === c ? "var(--gold-deep)" : "var(--bg)",
                color: cat === c ? "#fff" : "var(--ink-soft)" }}>{c}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 24 }}>
          {list.map((a) => <InsightCard key={a.slug} a={a} />)}
        </div>
        {list.length === 0 && <p className="b-body" style={{ marginTop: 24 }}>More guides in this category are on the way.</p>}
      </div>
    </section>
  );
}

/* ---- single article ---- */
function InsightBlock({ b }) {
  if (b.h) return <h2 className="b-h3" style={{ fontSize: 24, margin: "36px 0 12px", letterSpacing: "-0.015em" }}>{b.h}</h2>;
  if (b.p) return <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 18 }}>{b.p}</p>;
  if (b.ul) return (
    <ul style={{ margin: "0 0 18px", paddingLeft: 0, listStyle: "none" }}>
      {b.ul.map((x, i) => (
        <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", fontSize: 16.5, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 10 }}>
          <span style={{ color: "var(--gold-deep)", fontWeight: 700, flexShrink: 0 }}>·</span>{x}
        </li>
      ))}
    </ul>
  );
  if (b.note) return (
    <div style={{ background: "var(--accent-tint)", borderLeft: "3px solid var(--gold-deep)", borderRadius: "0 10px 10px 0", padding: "16px 20px", margin: "8px 0 24px", fontSize: 15.5, lineHeight: 1.6, color: "var(--ink)" }}>{b.note}</div>
  );
  return null;
}

function InsightArticleCore({ slug }) {
  const a = insArticle(slug);
  React.useEffect(() => {
    if (a) {
      document.title = a.title + " | The GEM Home Team";
      const md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute("content", a.dek);
    }
  }, [a]);
  if (!a) return (
    <section style={{ padding: "96px 0" }}><div className="b-container-narrow">
      <h1 className="b-h2" style={{ marginBottom: 16 }}>Guide not found.</h1>
      <a href="/insights" style={{ color: "var(--gold-deep)", fontWeight: 600 }}>← Back to all guides</a>
    </div></section>
  );
  return (
    <article style={{ padding: "56px 0 96px" }}>
      <div className="b-container-narrow" style={{ maxWidth: 760 }}>
        <a href="/insights" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold-deep)" }}>← Insights &amp; Guides</a>
        <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "28px 0 16px" }}>
          <span className="b-tag" style={{ background: "var(--accent-tint)", borderColor: "transparent", color: "var(--gold-deep)", fontWeight: 600 }}>{a.category}</span>
          <span style={{ fontSize: 13, color: "var(--ink-mute)", fontFamily: "var(--font-mono)" }}>{a.read}</span>
        </div>
        <h1 className="b-h2" style={{ marginBottom: 18, lineHeight: 1.08 }}>{a.title}</h1>
        <p className="b-lede" style={{ marginBottom: 36, paddingBottom: 28, borderBottom: "1px solid var(--line)" }}>{a.dek}</p>

        {a.body.map((b, i) => <InsightBlock key={i} b={b} />)}

        {a.cta && (
          <a href={a.cta.href} className="b-btn b-btn-primary" style={{ marginTop: 28, padding: "14px 24px", fontSize: 15, fontWeight: 600 }}>{a.cta.label}</a>
        )}

        <p style={{ fontSize: 12, color: "var(--ink-mute)", lineHeight: 1.6, marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          This article is general education, not financial, legal, or tax advice, and is not a commitment to lend. Examples are illustrative.
          Your situation is unique — <a href="/contact" style={{ color: "var(--gold-deep)", fontWeight: 600 }}>talk to us</a> for guidance specific to you.
        </p>
      </div>
    </article>
  );
}

/* ---- chrome wrappers ---- */
function InsightsHub() { return <div className="b-page"><BoldNav active="Resources" /><InsightsHubCore /><BoldFooter /></div>; }
function InsightsHubMobile() { return <div className="b-page"><MobHeader /><InsightsHubCore /><MobFooter /></div>; }
function InsightArticle({ slug }) { return <div className="b-page"><BoldNav active="Resources" /><InsightArticleCore slug={slug} /><BoldFooter /></div>; }
function InsightArticleMobile({ slug }) { return <div className="b-page"><MobHeader /><InsightArticleCore slug={slug} /><MobFooter /></div>; }

Object.assign(window, { ARTICLES, insArticle, InsightsHub, InsightsHubMobile, InsightArticle, InsightArticleMobile });
