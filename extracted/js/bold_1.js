/* ============================================================
   BOLD direction — MODERN v3 · "Unlike any mortgage site"
   Cinematic, bento-grid, multiple video moments
   Cyan + white + black throughout
   ============================================================ */
const { useState: useStateB, useMemo: useMemoB, useRef: useRefB, useEffect: useEffectB } = React;

/* ============================== Nav ============================== */
function BoldNav({ active = "Home" }) {
  return (
    <header style={{
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
      zIndex: 100,
    }}>
      <a href="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 32, width: "auto", display: "block" }} />
      </a>
      <nav style={{ display: "flex", gap: 4, justifyContent: "center" }}>
        {NAV.map(n => {
          const isActive = active === n.label;
          if (!n.children) {
            return (
              <a key={n.label} href={n.href}
                style={{ padding: "8px 14px", fontSize: 14, fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--ink)" : "var(--ink-soft)",
                  letterSpacing: "-0.005em", transition: "color .15s", borderRadius: 8 }}>{n.label}</a>
            );
          }
          return (
            <div key={n.label} className="nav-dd" style={{ position: "relative" }}>
              <a href={n.href}
                className="nav-dd-trigger"
                style={{ display: "inline-flex", alignItems: "center", gap: 5,
                  padding: "8px 14px", fontSize: 14, fontWeight: isActive ? 600 : 500,
                  color: isActive ? "var(--ink)" : "var(--ink-soft)",
                  letterSpacing: "-0.005em", transition: "color .15s", borderRadius: 8, cursor: "pointer" }}>
                {n.label}
                <span className="nav-dd-caret" style={{ fontSize: 8, opacity: 0.6, transition: "transform .18s" }}>▼</span>
              </a>
              <div className="nav-dd-menu" style={{
                position: "absolute", top: "100%", left: "50%", transform: "translateX(-50%) translateY(6px)",
                minWidth: 240, background: "#fff", border: "1px solid var(--line)", borderRadius: 12,
                boxShadow: "0 16px 48px -16px rgba(10,31,54,0.22)", padding: 8, zIndex: 50,
                opacity: 0, visibility: "hidden", transition: "opacity .16s, transform .16s",
              }}>
                {n.children.map(c => (
                  <a key={c.label} href={c.href} style={{
                    display: "block", padding: "10px 14px", fontSize: 13.5, fontWeight: 500,
                    color: "var(--ink-2)", borderRadius: 8, transition: "background .12s, color .12s",
                  }}>{c.label}</a>
                ))}
              </div>
            </div>
          );
        })}
      </nav>
      <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
        <a href="/dashboard" style={{ fontSize: 14, fontWeight: 500, color: "var(--ink-2)" }}>Sign in</a>
        <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          padding: "10px 20px", fontSize: 14, fontWeight: 600,
          background: "var(--gold)", color: "var(--ink-on-cyan)",
          borderRadius: 8, transition: "background .15s",
        }}>
          Apply now <span style={{ fontSize: 13 }}>→</span>
        </a>
      </div>
    </header>
  );
}

/* ============================ Footer ============================ */
function BoldFooter() {
  return (
    <footer style={{ padding: "80px 0 32px", background: "#0A0A0A", color: "#fff" }}>
      <div className="b-container">
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 56, marginBottom: 56 }}>
          <div>
            <img src={assetUrl("assets/neo-lockup-white.png")} alt="NEO Home Loans" style={{ height: 56, width: "auto", marginBottom: 24, display: "block" }} />
            <div style={{ fontSize: 12, color: "rgba(255,255,255,.55)", marginBottom: 16 }}>Powered by Better</div>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[
                ["instagram", "https://instagram.com/meg.sawa/",
                  <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>
                  </svg>],
                ["facebook", "https://facebook.com/GEMTeamMortgage/",
                  <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.25-1.5 1.55-1.5h1.45V4.4c-.25-.04-1.1-.1-2.1-.1-2.07 0-3.5 1.27-3.5 3.6v2H8.4v3h2.5V21h2.6z"/>
                  </svg>],
                ["youtube", "https://youtube.com/channel/UCR_MAH3M-_tpM8SzdtaluCg",
                  <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21.6 7.2c-.2-1-.95-1.75-1.95-2C17.85 4.8 12 4.8 12 4.8s-5.85 0-7.65.4c-1 .25-1.75 1-1.95 2C2 9 2 12 2 12s0 3 .4 4.8c.2 1 .95 1.75 1.95 2 1.8.4 7.65.4 7.65.4s5.85 0 7.65-.4c1-.25 1.75-1 1.95-2C22 15 22 12 22 12s0-3-.4-4.8zM10 15.5v-7l5.5 3.5-5.5 3.5z"/>
                  </svg>],
                ["linkedin", "https://linkedin.com/in/megansawamura",
                  <svg key="li" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 4.5a2 2 0 100 4 2 2 0 000-4zM3 9.5h3v11H3v-11zM9 9.5h2.9v1.5h.05c.4-.75 1.4-1.55 2.85-1.55 3.05 0 3.6 2 3.6 4.6v6.45h-3v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-3v-11z"/>
                  </svg>],
              ].map(([name, href, icon]) => (
                <a key={name} href={href} aria-label={name} style={{ width: 36, height: 36, borderRadius: 18, border: "1px solid rgba(255,255,255,0.2)",
                  display: "grid", placeItems: "center", color: "rgba(255,255,255,0.75)", transition: "all .15s" }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>
          {[
            ["Resources", [
              ["Mortgage calculator", "/#mortgage-calculator"],
              ["VA loan calculator", "/va-calculator"],
              ["First-time buyers", "/experience"],
              ["Refinance", "/insights/when-to-refinance"],
              ["The NEO Experience", "/experience"],
            ]],
            ["Company", [
              ["About Megan", "/about"],
              ["The team", "/about"],
              ["Reviews", "/about"],
              ["Technology", "/technology"],
              ["Contact", "/contact"],
            ]],
            ["Contact", [
              ["(858) 567-2233", "tel:+18585672233"],
              ["Team@GemHomeTeam.com", "mailto:Team@GemHomeTeam.com"],
              ["10089 Willow Creek Rd, Suite 200", null],
              ["San Diego, CA 92131", null],
            ]],
          ].map(([head, items]) => (
            <div key={head}>
              <div style={{ fontSize: 12, fontWeight: 600, color: "#fff", marginBottom: 18 }}>{head}</div>
              {items.map(([label, href]) => href
                ? <a key={label} href={href} style={{ display:"block", fontSize:13.5, color:"rgba(255,255,255,.72)", padding:"6px 0" }}>{label}</a>
                : <div key={label} style={{ fontSize:13.5, color:"rgba(255,255,255,.55)", padding:"6px 0" }}>{label}</div>
              )}
            </div>
          ))}
        </div>

        {/* compliance badges */}
        {/* ⚠️ COMPLIANCE — BEFORE LAUNCH: (1) Have your Better broker / compliance
            officer confirm these Better Mortgage disclosures are the current
            required versions. (2) Add an "Individual NMLS" entry for EACH licensed
            loan officer featured on the site (only Megan Sawamura #972639 is listed).
            (3) Confirm the state-licensing list reflects every state you originate in. */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center", padding: "24px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 28 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 4, border: "1.5px solid rgba(255,255,255,0.4)", display: "grid", placeItems: "center", position: "relative" }}>
              <div style={{ position: "absolute", inset: 4, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 1 }}>
                <div style={{ background: "rgba(255,255,255,0.4)" }}></div>
                <div style={{ background: "transparent" }}></div>
                <div style={{ background: "transparent" }}></div>
                <div style={{ background: "rgba(255,255,255,0.4)" }}></div>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>EQUAL HOUSING</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>LENDER</div>
            </div>
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }}></div>
          <div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>NMLS CONSUMER ACCESS</div>
            <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" style={{ fontSize: 13, color: "#fff", fontWeight: 500 }}>nmlsconsumeraccess.org →</a>
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }}></div>
          <div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>BETTER MORTGAGE NMLS</div>
            <div style={{ fontSize: 13, color: "#fff", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>#330511</div>
          </div>
          <div style={{ width: 1, height: 32, background: "rgba(255,255,255,0.1)" }}></div>
          <div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>INDIVIDUAL NMLS</div>
            <div style={{ fontSize: 13, color: "#fff", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>#972639 · Megan Sawamura</div>
          </div>
        </div>

        {/* Legal disclosures — matches live site (gemhometeam.com) */}
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, maxWidth: 1100, marginBottom: 28 }}>
          <p style={{ marginBottom: 8 }}>
            This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Production volume, transaction counts, client ratings, and any rankings or awards (including “Top 1% of U.S. Loan Officers”) reflect historical results from internal records or third-party sources and are not a guarantee of future results. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer.
          </p>
          <p style={{ marginBottom: 8 }}>
            © 2026 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved. Better BMC operates under the name Better Mortgage Corporation in New York.
          </p>
          <p style={{ marginBottom: 8 }}>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>NMLS Consumer Access</a>.
          </p>
          <p style={{ marginBottom: 8 }}>
            Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325–41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's <a href="https://better.com/with/better-realestate-license" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents ("Better Real Estate Partner Agents"). Equal Housing Opportunity. All rights reserved.
          </p>
          <p style={{ marginBottom: 8 }}>
            <a href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>New York State Housing and Anti-Discrimination Notice</a> · <a href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>New York Standard Operating Procedures</a> · Texas Real Estate Commission: <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=645736" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>Information About Brokerage Services</a> · <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>Consumer Protection Notice</a>.
          </p>
          <p style={{ marginBottom: 8 }}>
            Better Settlement Services, LLC. 325–41 Chestnut Street, Suite 803, Philadelphia, PA 19106. Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325–41 Chestnut Street, Suite 807, Philadelphia, PA 19106. Insurance quotes and policies are offered through Better Cover, LLC. Here is a full listing of Better Cover, LLC's <a href="https://www.bettercover.com/licenses" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>license numbers</a>. Better Inspect, LLC maintains its corporate headquarters at 325–41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
          </p>
          <p style={{ marginBottom: 8 }}>
            Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
          </p>
          <p>
            Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.
          </p>
        </div>

        <div style={{ height: 1, background: "rgba(255,255,255,.1)", marginBottom: 20 }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, fontSize: 11, color: "rgba(255,255,255,.5)" }}>
          <span>© 2026 The GEM Home Team at NEO Home Loans · All rights reserved</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="https://better.com/privacy-policy" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>Privacy policy</a>
            <a href="https://better.com/terms-of-use" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>Terms of use</a>
            <a href="https://better.com/accessibility" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>Accessibility</a>
            <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>NMLS Consumer Access</a>
            <a href="/sitemap.xml" style={{ color: "rgba(255,255,255,0.65)" }}>Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================ Marquee ============================ */
function Marquee({ items }) {
  const list = [...items, ...items, ...items];
  return (
    <div style={{ background: "var(--gold)", color: "var(--ink-on-cyan)", padding: "18px 0", overflow: "hidden", borderTop: "1px solid var(--gold-deep)", borderBottom: "1px solid var(--gold-deep)" }}>
      <div style={{ display: "flex", gap: 64, whiteSpace: "nowrap",
        animation: "marquee 40s linear infinite", fontWeight: 600, fontSize: 15, letterSpacing: "-0.005em" }}>
        {list.map((x, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 16 }}>
            {x}<span style={{ opacity: 0.5 }}>✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-33.333%)}}`}</style>
    </div>
  );
}

/* ============================ HOME ============================ */
function BoldHome() {
  const [oFaq, setOFaq] = useStateB(0);

  return (
    <div className="b-page" data-screen-label="Bold · Home (Desktop)">
      <BoldNav active="Home" />

      {/* ================== 1. CINEMATIC HERO ================== */}
      <section style={{ position: "relative", overflow: "hidden", background: "#fff" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", minHeight: 720, maxHeight: 820 }}>
          {/* LEFT — bold type */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px 56px", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, opacity: 0.35,
              backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
              backgroundSize: "28px 28px", pointerEvents: "none" }}></div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px",
                background: "var(--accent-tint)", borderRadius: 999, marginBottom: 32,
                fontSize: 12, fontWeight: 600, color: "var(--gold-deep)", letterSpacing: ".02em" }}>
                <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gold-deep)" }}></span>
                Trusted by 1,200+ San Diego homeowners
              </div>
              <h1 style={{ fontSize: 96, lineHeight: 0.94, letterSpacing: "-0.04em", fontWeight: 500, color: "var(--ink)", marginBottom: 28 }}>
                Buy the home.<br/>
                <span style={{ color: "var(--gold-deep)" }}>Build the wealth.</span><br/>
                Keep both.
              </h1>
              <p style={{ fontSize: 19, lineHeight: 1.5, color: "var(--ink-2)", maxWidth: 520, marginBottom: 40 }}>
                Most lenders close the deal and disappear. We manage your mortgage for the next thirty years — through every rate cycle and life stage in between.
              </p>
              <div style={{ display: "flex", gap: 12, marginBottom: 48 }}>
                <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "14px 24px", fontSize: 15, fontWeight: 600,
                  background: "var(--ink)", color: "#fff", borderRadius: 10,
                  boxShadow: "0 6px 20px -6px rgba(10,10,10,.4)"
                }}>Get Pre-Approved →</a>
                <a href="https://gemteam.youcanbook.me" target="_blank" rel="noopener" style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  padding: "14px 22px", fontSize: 15, fontWeight: 600,
                  background: "var(--bg)", color: "var(--ink)",
                  border: "1px solid var(--line-2)", borderRadius: 10
                }}>
                  Schedule A Consultation →
                </a>
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, maxWidth: 560 }}>
                Rates change daily and depend on your credit, loan amount, and property. <a href="/contact" style={{ color: "var(--gold-deep)", fontWeight: 600 }}>Contact us for a personalized quote.</a>
              </div>
            </div>
          </div>

          {/* RIGHT — video portrait */}
          <div style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
            <video autoPlay muted loop playsInline preload="auto" key="hero-home"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}>
              {/* Self-hosted crisp 1080p home interior (no external/CDN re-encode) */}
              <source src="/assets/hero.mp4" type="video/mp4" />
            </video>
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(10,10,10,0.08) 0%, rgba(10,10,10,0) 35%, rgba(10,10,10,0.28) 100%)" }}></div>
          </div>
        </div>
      </section>

      {/* ================== 2. MARQUEE TICKER ================== */}
      <Marquee items={[
        "$420M+ funded",
        "1,800 San Diego families",
        "★ 4.86 average rating",
        "202 verified reviews",
        "21 day median close",
        "68% repeat clients",
        "NMLS #972639",
      ]} />

      {/* ================== 3. BENTO GRID — Services ================== */}
      <section id="experience" style={{ padding: "120px 0", background: "var(--bg)", scrollMarginTop: 80 }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 48, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>What we do</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 720 }}>
                Six commitments. <span style={{ color: "var(--gold-deep)" }}>Zero asterisks.</span>
              </h2>
            </div>
          </div>

          {/* Bento grid — variable cells */}
          <div style={{ display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 16, perspective: 1200 }}>
            {/* BIG VIDEO TILE — Annual Reviews */}
            <div style={{ gridColumn: "span 7", gridRow: "span 2",
              position: "relative", overflow: "hidden",
              borderRadius: 20, minHeight: 480,
              background: "var(--ink)" }}>
              <video autoPlay muted loop playsInline key="bento-vr"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.55 }}>
                <source src="/assets/bento.mp4" type="video/mp4" />
              </video>
              <div style={{ position: "absolute", inset: 0,
                background: "linear-gradient(180deg, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.7) 100%)" }}></div>
              <div style={{ position: "relative", padding: 40, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#fff", minHeight: 480 }}>
                <div className="b-eyebrow" style={{ color: "var(--gold)" }}>01 · Annual review</div>
                <div>
                  <h3 style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.028em", lineHeight: 1.02, marginBottom: 16, color: "#fff" }}>
                    Your mortgage gets a check-up every year.
                  </h3>
                  <p style={{ fontSize: 16, lineHeight: 1.5, color: "rgba(255,255,255,.82)", maxWidth: 480 }}>
                    Like a financial advisor for the biggest loan you'll ever take — we sit down each year to make sure it's still working for your life.
                  </p>
                </div>
              </div>
            </div>

            {/* Refi alerts */}
            <div style={{ gridColumn: "span 5", gridRow: "span 1",
              background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%)",
              padding: 40, borderRadius: 20, color: "var(--ink-on-cyan)", position: "relative", overflow: "hidden" }} className="tilt-card">
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: 100,
                background: "rgba(255,255,255,0.15)" }}></div>
              <div style={{ position: "relative" }}>
                <div className="b-eyebrow" style={{ color: "var(--ink-on-cyan)", opacity: 0.7, marginBottom: 14 }}>02 · Rate alerts</div>
                <h3 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.05, marginBottom: 12 }}>
                  We watch the market.<br/>You watch the inbox.
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85, maxWidth: 380, marginBottom: 20 }}>
                  Automated refi alerts when rates drop enough to matter. Math attached.
                </p>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px",
                  background: "var(--ink)", color: "var(--gold)", borderRadius: 999, fontSize: 12, fontWeight: 600 }}>
                  ⚡ Live now · $214/mo saved avg
                </div>
              </div>
            </div>

            {/* Home concierge */}
            <div style={{ gridColumn: "span 5", gridRow: "span 1",
              background: "var(--ink)", color: "#fff",
              padding: 40, borderRadius: 20, position: "relative", overflow: "hidden" }} className="tilt-card">
              <div className="b-eyebrow" style={{ color: "var(--gold)", marginBottom: 14 }}>03 · Home concierge</div>
              <h3 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.05, marginBottom: 16, color: "#fff" }}>
                A vetted bench of pros, on call for life.
              </h3>
              <div style={{ display: "flex", gap: 6, marginTop: 20, flexWrap: "wrap" }}>
                {["Handymen", "Designers", "Landscapers", "Electricians", "Roofers", "+ 18 more"].map((x, i) => (
                  <span key={x} style={{ padding: "6px 12px", background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)", borderRadius: 999,
                    fontSize: 12, color: "rgba(255,255,255,0.85)" }}>{x}</span>
                ))}
              </div>
            </div>

            {/* Wealth digest — chart inside */}
            <div className="tilt-card" style={{ gridColumn: "span 4", gridRow: "span 1",
              background: "#fff", border: "1px solid var(--line)",
              padding: 32, borderRadius: 20 }}>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 12 }}>04 · Wealth digest</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.012em", lineHeight: 1.2, marginBottom: 14 }}>
                Monthly equity snapshot.
              </h3>
              <svg width="100%" height="60" viewBox="0 0 200 60">
                <defs>
                  <linearGradient id="bgs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5BC2E7" stopOpacity="0.4"/>
                    <stop offset="100%" stopColor="#5BC2E7" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <path d="M0 45 L25 40 L50 35 L75 32 L100 28 L125 22 L150 18 L175 10 L200 5 L200 60 L0 60 Z" fill="url(#bgs)" />
                <path d="M0 45 L25 40 L50 35 L75 32 L100 28 L125 22 L150 18 L175 10 L200 5" stroke="var(--gold-deep)" strokeWidth="2" fill="none" />
              </svg>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 12, fontSize: 12, color: "var(--ink-soft)" }}>
                <span>11 mo ago</span><span style={{ color: "#1F8A5B", fontWeight: 600 }}>↑ +$32K equity</span>
              </div>
            </div>

            {/* Perfect mortgage promise */}
            <div className="tilt-card" style={{ gridColumn: "span 4", gridRow: "span 1",
              background: "var(--bg-2)", padding: 32, borderRadius: 20 }}>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 12 }}>05 · The promise</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.012em", lineHeight: 1.2, marginBottom: 14 }}>
                Your mortgage evolves with your life.
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                {["Marriage", "First baby", "Job change", "Empty nest", "Retirement"].map((x, i) => (
                  <div key={x} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--ink-2)" }}>
                    <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gold-deep)" }}></span>
                    {x} → strategy update
                  </div>
                ))}
              </div>
            </div>

            {/* Relocation */}
            <div className="tilt-card" style={{ gridColumn: "span 4", gridRow: "span 1",
              background: "#fff", border: "1px solid var(--line)",
              padding: 32, borderRadius: 20 }}>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 12 }}>06 · Relocation</div>
              <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.012em", lineHeight: 1.2, marginBottom: 14 }}>
                No-cost renovation financing + tech-forward move-in.
              </h3>
              <div className="tabular" style={{ fontSize: 36, fontWeight: 600, letterSpacing: "-0.022em", color: "var(--gold-deep)", marginTop: 16 }}>
                $0<span style={{ fontSize: 18, fontWeight: 500, color: "var(--ink-soft)", marginLeft: 6 }}>upfront cost</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== 4. CALCULATOR ================== */}
      <section id="mortgage-calculator" className="b-section-warm" style={{ padding: "120px 0", position: "relative", overflow: "hidden", scrollMarginTop: 80 }}>
        <div style={{ position: "absolute", top: 60, right: -200, width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)" }}></div>
        <div className="b-container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 40 }}>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>The numbers</div>
              <h2 className="b-h2" style={{ marginBottom: 24 }}>What does this <span style={{ color: "var(--gold-deep)" }}>actually</span> cost me each month?</h2>
              <p className="b-lede" style={{ marginBottom: 32, maxWidth: 440 }}>
                Real numbers, computed with current San Diego county tax rates and average homeowners insurance baked in. No email gate.
              </p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "12px 22px", fontSize: 14, fontWeight: 600,
                  background: "var(--ink)", color: "#fff", borderRadius: 10 }}>Get a personalized rate →</a>
                <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "12px 22px", fontSize: 14, fontWeight: 600,
                  background: "var(--bg)", color: "var(--ink)", border: "1px solid var(--line-2)", borderRadius: 10 }}>Compare loan types</a>
              </div>
            </div>
            <BoldCalculator />
          </div>
        </div>
      </section>

      {/* ================== 6. PROCESS ================== */}
      <section id="process" style={{ padding: "120px 0", background: "var(--bg)", scrollMarginTop: 80 }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>How it works</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 680 }}>Four steps. <span style={{ color: "var(--gold-deep)" }}>Then we never leave.</span></h2>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {/* progress line */}
            <div style={{ position: "absolute", top: 28, left: "12.5%", right: "12.5%", height: 2,
              background: "linear-gradient(90deg, var(--gold) 0%, var(--gold) 75%, var(--line-2) 75%)" }}></div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {PROCESS.map((p, i) => (
                <div key={p.n} style={{ position: "relative" }}>
                  <div style={{ width: 56, height: 56, borderRadius: 28,
                    background: i <= 2 ? "var(--gold)" : "var(--bg)",
                    border: i <= 2 ? "none" : "2px solid var(--line-2)",
                    color: i <= 2 ? "var(--ink-on-cyan)" : "var(--ink-mute)",
                    display: "grid", placeItems: "center", fontWeight: 700, fontSize: 16,
                    marginBottom: 24, position: "relative", zIndex: 1,
                    boxShadow: i <= 2 ? "0 4px 12px -4px rgba(46,182,222,0.5)" : "none" }}>
                    {p.n}
                  </div>
                  <div style={{ fontSize: 11, color: "var(--gold-deep)", fontWeight: 600, letterSpacing: ".08em", marginBottom: 8 }}>
                    {["~30 MIN", "1–3 DAYS", "21 DAYS AVG", "30 YEARS"][i]}
                  </div>
                  <h3 className="b-h3" style={{ marginBottom: 10, fontSize: 22 }}>{p.title}</h3>
                  <p className="b-body" style={{ fontSize: 14, maxWidth: 240 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--line)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center", justifyContent: "space-between" }}>
            <p className="b-body" style={{ fontSize: 15, maxWidth: 540 }}>
              Step two is where most lenders just quote a rate. We hand you a <strong style={{ color: "var(--ink)" }}>Total Cost Analysis</strong> — every option, side by side, with what each truly costs over the years you'll hold it.
            </p>
            <a href="/total-cost-analysis" className="b-btn b-btn-primary" style={{ padding: "12px 22px", fontSize: 14, fontWeight: 600, whiteSpace: "nowrap" }}>
              See a sample Total Cost Analysis →
            </a>
          </div>
        </div>
      </section>

      {/* ================== 7. MEGAN MAGAZINE SPREAD ================== */}
      <ScenarioSection />

      {/* ================== Megan ================== */}
      <section id="about" style={{ background: "var(--ink)", color: "#fff", position: "relative", overflow: "hidden", scrollMarginTop: 80 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 720, maxHeight: 820 }}>
          {/* Photo side */}
          <div style={{ position: "relative", overflow: "hidden", background: "var(--ink)" }}>
            <img src={assetUrl("assets/megan-portrait.jpg")} alt="Megan Sawamura" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }} />
            <div style={{ position: "absolute", inset: 0,
              background: "linear-gradient(90deg, rgba(10,10,10,0) 0%, rgba(10,10,10,0) 70%, var(--ink) 100%)" }}></div>
            {/* sticker badges */}
            <div style={{ position: "absolute", top: 40, left: 40, padding: "10px 16px",
              background: "var(--gold)", color: "var(--ink-on-cyan)", borderRadius: 999, fontSize: 12, fontWeight: 700,
              letterSpacing: ".05em", boxShadow: "0 8px 24px -8px rgba(46,182,222,0.6)" }}>
              ★ TOP 1% OF U.S. LOAN OFFICERS
            </div>
            <div style={{ position: "absolute", bottom: 40, left: 40, padding: "10px 16px",
              background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", color: "var(--ink)",
              borderRadius: 12, fontSize: 12, fontWeight: 600 }}>
              NMLS #972639
            </div>
          </div>

          {/* Text side */}
          <div style={{ padding: "80px 80px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="b-eyebrow" style={{ color: "var(--gold)", marginBottom: 18 }}>Meet Megan Sawamura</div>
            <h2 style={{ fontSize: 54, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.04, marginBottom: 28, color: "#fff", maxWidth: 540 }}>
              "From a $20 stocking stuffer to <span style={{ color: "var(--gold)", fontStyle: "italic" }}>five</span> properties."
            </h2>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", marginBottom: 16, maxWidth: 520 }}>
              Every Christmas, instead of presents, my grandfather gave me a Fidelity stock statement. At twenty-four it was worth $20,000 — and it bought my first house.
            </p>
            <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,0.78)", marginBottom: 40, maxWidth: 520 }}>
              Eight years later, five properties. I built GEM to give other families the same head start — without needing the wealthy grandfather to start it.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, auto)", gap: 48, marginBottom: 40 }}>
              {[["$420M+", "guided to closing"], ["1,800", "families served"], ["4.86 ★", "202 reviews"]].map(([n, l]) => (
                <div key={l}>
                  <div className="tabular" style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.022em", color: "#fff" }}>{n}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
            <div>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 22px", fontSize: 14, fontWeight: 600,
                background: "var(--gold)", color: "var(--ink-on-cyan)", borderRadius: 10 }}>Read Megan's full story →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ================== 10. TESTIMONIALS ================== */}
      <section style={{ padding: "120px 0", background: "var(--bg)" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Client voices</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 720 }}>The proof <span style={{ color: "var(--gold-deep)" }}>shows up</span> at closing.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {TESTIMONIALS.map((t, i) => {
              const grads = [
                "linear-gradient(135deg, #5BC2E7 0%, #2EB6DE 100%)",
                "linear-gradient(135deg, #0A0A0A 0%, #2A4163 100%)",
                "linear-gradient(135deg, #B8E2F0 0%, #5BC2E7 100%)",
              ];
              return (
                <div key={i} style={{ padding: 32, background: "#fff", border: "1px solid var(--line)", borderRadius: 16,
                  display: "flex", flexDirection: "column", gap: 20, minHeight: 320, position: "relative", overflow: "hidden", transition: "all .2s" }}>
                  <div style={{ position: "absolute", top: -10, right: 24, fontSize: 110, color: "var(--accent-tint)", fontFamily: "Georgia, serif", lineHeight: 1, fontStyle: "italic" }}>"</div>
                  <div style={{ color: "var(--gold)", fontSize: 14, letterSpacing: ".15em", position: "relative" }}>★★★★★</div>
                  <p style={{ fontSize: 17, lineHeight: 1.5, color: "var(--ink)", letterSpacing: "-0.008em", flex: 1, position: "relative" }}>
                    {t.quote}
                  </p>
                  <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16, display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 20, background: grads[i],
                      color: "#fff", display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, letterSpacing: "0.02em",
                      boxShadow: "0 4px 12px -4px rgba(0,0,0,0.25)" }}>
                      {t.name.split(" ").map(x => x[0]).join("").slice(0, 2)}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-soft)", marginTop: 2 }}>{t.detail}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 14.5, color: "var(--ink-soft)" }}>
              <span style={{ color: "var(--gold)", letterSpacing: ".1em" }}>★★★★★</span>
              <strong style={{ color: "var(--ink)", fontWeight: 700 }}>4.86</strong> · 202 verified reviews on Experience.com
            </span>
            <a href="https://www.experience.com/reviews/megan-sawamura-401537" target="_blank" rel="noopener" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold-deep)" }}>Read all reviews →</a>
          </div>
        </div>
      </section>

      {/* ================== 12. FAQ ================== */}
      <section style={{ padding: "120px 0", background: "var(--bg)" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Questions</div>
              <h2 className="b-h2" style={{ maxWidth: 360, marginBottom: 24 }}>Things people <span style={{ color: "var(--gold-deep)" }}>actually</span> ask us.</h2>
              <p className="b-body" style={{ maxWidth: 320 }}>
                Still wondering? Email <a href="mailto:Team@GemHomeTeam.com" style={{ color: "var(--gold-deep)", fontWeight: 500 }}>Team@GemHomeTeam.com</a> — usually a reply within 4 hours.
              </p>
            </div>
            <div>
              {FAQS.map((f, i) => (
                <div key={i} style={{ borderTop: "1px solid var(--line)", borderBottom: i === FAQS.length - 1 ? "1px solid var(--line)" : "none" }}>
                  <button onClick={() => setOFaq(oFaq === i ? -1 : i)} style={{ width: "100%", padding: "24px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
                    <span style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.012em" }}>{f.q}</span>
                    <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 16,
                      background: oFaq === i ? "var(--gold)" : "transparent",
                      border: oFaq === i ? "none" : "1px solid var(--line-2)",
                      color: oFaq === i ? "var(--ink-on-cyan)" : "var(--ink)",
                      display: "grid", placeItems: "center", fontSize: 16, transition: "all .2s", transform: oFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                  </button>
                  {oFaq === i && <p style={{ paddingBottom: 24, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 }}>{f.a}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================== 13. CTA — cyan ================== */}
      <section id="contact" className="b-section-cyan" style={{ padding: "140px 0", position: "relative", overflow: "hidden", scrollMarginTop: 80 }}>
        <div style={{ position: "absolute", top: -200, left: -200, width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0) 70%)" }}></div>
        <div style={{ position: "absolute", bottom: -200, right: -200, width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)" }}></div>
        <div className="b-container" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: ".15em", color: "var(--ink-on-cyan)", opacity: 0.6, marginBottom: 32 }}>
            ↓ START THE CONVERSATION ↓
          </div>
          <h2 style={{ fontSize: 120, fontWeight: 500, letterSpacing: "-0.04em", lineHeight: 0.94, color: "var(--ink-on-cyan)", marginBottom: 40, maxWidth: 1100, margin: "0 auto 40px" }}>
            Let's see what your<br/>next thirty years could look like.
          </h2>
          <p style={{ fontSize: 19, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 48, lineHeight: 1.5, maxWidth: 600, margin: "0 auto 48px" }}>
            A 20-minute call is free. So is the second one. So is the year-three rate check, and every annual review after.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 32px", fontSize: 15, fontWeight: 600,
              background: "var(--ink)", color: "#fff", borderRadius: 10,
              boxShadow: "0 12px 32px -8px rgba(10,10,10,0.4)" }}>Schedule a 20-min call →</a>
            <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" style={{ display: "inline-flex", alignItems: "center", gap: 8,
              padding: "16px 32px", fontSize: 15, fontWeight: 600,
              background: "transparent", color: "var(--ink-on-cyan)",
              border: "1.5px solid var(--ink-on-cyan)", borderRadius: 10 }}>Apply now</a>
          </div>
        </div>
      </section>

      <BoldFooter />
    </div>
  );
}

/* ============================ Video chapters ============================ */
function VideoChapters() {
  const chapters = [
    {
      tag: "FUNDAMENTALS · 4 MIN",
      title: "How to read a Total Cost Analysis",
      sub: "Rate is one number. Lifetime cost is the one that matters.",
      grad: "linear-gradient(135deg, #5BC2E7 0%, #2EB6DE 100%)",
      iconLight: false,
    },
    {
      tag: "MARKET · 6 MIN",
      title: "San Diego market read · Q2 2026",
      sub: "Where prices are headed, and what that means for buyers.",
      grad: "linear-gradient(135deg, #0A0A0A 0%, #2A2A2A 100%)",
      iconLight: true,
    },
    {
      tag: "STRATEGY · 8 MIN",
      title: "Buying now vs. waiting six months",
      sub: "Real numbers, modeled three ways.",
      grad: "linear-gradient(135deg, #F0F7FA 0%, #D6EAF3 100%)",
      iconLight: false,
    },
    {
      tag: "WEALTH · 5 MIN",
      title: "Your home equity is an underused asset",
      sub: "How smart owners deploy it without overleveraging.",
      grad: "linear-gradient(135deg, #5BC2E7 0%, #0A0A0A 100%)",
      iconLight: true,
    },
  ];
  return (
    <section style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div className="b-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
          <div>
            <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>The video library</div>
          </div>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 32 }}>
              <h2 className="b-h2" style={{ maxWidth: 600 }}>Watch first. <span style={{ color: "var(--gold-deep)" }}>Decide second.</span></h2>
              <a href="#" style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", whiteSpace: "nowrap" }}>Full library (47) →</a>
            </div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {chapters.map((c, i) => (
            <a key={i} href="#" style={{ display: "block", borderRadius: 16, overflow: "hidden", transition: "all .2s" }}>
              <div style={{ height: 260, background: c.grad, position: "relative", overflow: "hidden" }}>
                {/* texture */}
                <div style={{ position: "absolute", inset: 0,
                  backgroundImage: `repeating-linear-gradient(45deg, transparent 0 12px, ${c.iconLight ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.18)"} 12px 13px)` }}></div>
                {/* play */}
                <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center" }}>
                  <div style={{ width: 64, height: 64, borderRadius: 32,
                    background: c.iconLight ? "var(--gold)" : "rgba(0,0,0,0.85)",
                    color: c.iconLight ? "var(--ink-on-cyan)" : "#fff",
                    display: "grid", placeItems: "center", fontSize: 22, paddingLeft: 4,
                    boxShadow: "0 12px 24px -8px rgba(0,0,0,0.4)" }}>▶</div>
                </div>
                <div style={{ position: "absolute", top: 16, left: 16, fontSize: 10, fontWeight: 700, letterSpacing: ".08em",
                  color: c.iconLight ? "var(--gold)" : "var(--ink)",
                  padding: "6px 10px",
                  background: c.iconLight ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.95)", borderRadius: 999 }}>
                  {c.tag}
                </div>
              </div>
              <div style={{ padding: "20px 4px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.012em", lineHeight: 1.25, marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5 }}>{c.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* small abstract dot for service cards */
function ServiceDot({ kind }) {
  const map = {
    chart: <div style={{ width: 28, height: 28, borderRadius: 4, background: "var(--accent-tint)", border: "1px solid var(--gold)", position: "relative" }}>
      <div style={{ position: "absolute", left: 6, bottom: 6, width: 4, height: 8, background: "var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 12, bottom: 6, width: 4, height: 14, background: "var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 18, bottom: 6, width: 4, height: 11, background: "var(--gold)" }}></div>
    </div>,
    key: <div style={{ width: 28, height: 28, position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 8, width: 14, height: 14, borderRadius: 7, border: "2px solid var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 13, top: 13, width: 15, height: 4, background: "var(--gold)" }}></div>
    </div>,
    doc: <div style={{ width: 22, height: 28, border: "2px solid var(--gold)", borderRadius: 2, position: "relative" }}>
      <div style={{ position: "absolute", left: 3, top: 6, width: 12, height: 2, background: "var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 3, top: 12, width: 12, height: 2, background: "var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 3, top: 18, width: 8, height: 2, background: "var(--gold)" }}></div>
    </div>,
    wave: <svg width={32} height={20} viewBox="0 0 32 20" fill="none">
      <path d="M0 10 Q 8 0, 16 10 T 32 10" stroke="var(--gold)" strokeWidth="2" fill="none" />
    </svg>,
    coins: <div style={{ width: 28, height: 28, position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 14, width: 28, height: 8, borderRadius: 4, background: "var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 4, top: 4, width: 20, height: 8, borderRadius: 4, background: "var(--gold)", opacity: .6 }}></div>
    </div>,
    house: <div style={{ width: 32, height: 28, position: "relative" }}>
      <div style={{ position: "absolute", left: 0, top: 8, width: 0, height: 0, borderLeft: "16px solid transparent", borderRight: "16px solid transparent", borderBottom: "10px solid var(--gold)" }}></div>
      <div style={{ position: "absolute", left: 4, top: 18, width: 24, height: 10, background: "var(--gold)" }}></div>
    </div>,
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
  const tax = price * 0.0073 / 12, ins = 120;
  const total = m + tax + ins;
  const usd = n => "$" + Math.round(n).toLocaleString();

  return (
    <div style={{ background: "#fff", padding: 40, borderRadius: 20, border: "1px solid var(--line)", boxShadow: "0 24px 64px -32px rgba(46,182,222,.25)" }}>
      <BoldSlider label="Home price" value={price} min={400000} max={2500000} step={5000} format={usd} onChange={setPrice} />
      <BoldSlider label="Down payment" value={down} min={3} max={50} step={1} format={v => v + "%"} sub={usd(price * down / 100)} onChange={setDown} />
      <BoldSlider label="Rate (APR)" value={rate} min={5} max={8} step={0.125} format={v => v.toFixed(3) + "%"} onChange={setRate} />
      <div style={{ marginTop: 22, marginBottom: 32, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
        {[15, 20, 30].map(y => (
          <button key={y} onClick={() => setYears(y)}
            style={{ padding: "11px 0", fontSize: 13, fontWeight: 600, borderRadius: 8,
                     background: years === y ? "#fff" : "transparent",
                     color: years === y ? "var(--ink)" : "var(--ink-soft)",
                     boxShadow: years === y ? "0 2px 6px rgba(10,31,54,.08)" : "none" }}>{y}-year fixed</button>
        ))}
      </div>
      <div style={{ paddingTop: 28, borderTop: "1px solid var(--line)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>Estimated monthly · PITI</span>
          <span style={{ fontSize: 11, color: "var(--ink-mute)" }}>Tax + ins. included</span>
        </div>
        <div className="tabular" style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink)" }}>
          {usd(total)}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 32 }}>
          <SmallStat k="Loan amount" v={usd(principal)} />
          <SmallStat k="P & I" v={usd(m)} />
          <SmallStat k="Tax" v={usd(tax)} />
          <SmallStat k="Insurance" v={usd(ins)} />
        </div>
        <p style={{ fontSize: 11, color: "var(--ink-mute)", lineHeight: 1.55, marginTop: 24 }}>
          Estimate for educational purposes only. Not a loan offer, rate quote, pre-qualification, or commitment to lend. Actual rates, payments, taxes, insurance, and closing costs vary and are subject to credit approval, verification, property appraisal, and underwriting. Rates change daily. Equal Housing Lender · NMLS&nbsp;#330511.
        </p>
      </div>
    </div>
  );
}

function SmallStat({ k, v }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "var(--ink-mute)", marginBottom: 4 }}>{k}</div>
      <div className="tabular" style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600 }}>{v}</div>
    </div>
  );
}

function BoldSlider({ label, value, min, max, step, format, onChange, sub }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
        <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>{label}</span>
        <span className="tabular" style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600 }}>{format(value)} {sub && <span style={{ color: "var(--ink-mute)", fontSize: 12, fontWeight: 400 }}>· {sub}</span>}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "var(--gold)" }} />
    </div>
  );
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
  const usdK = n => "$" + (Math.round(n / 1000)).toLocaleString() + "K";
  const usdM = n => "$" + (n / 1000000).toFixed(2) + "M";

  // Build chart points
  const years = Array.from({ length: 31 }, (_, i) => 2026 + i);
  const equityPath = years.map(y => {
    if (y < buyYear) return 0;
    const yo = y - buyYear;
    return buyPrice * Math.pow(1 + APPRECIATION, yo);
  });
  const rentPath = years.map(y => {
    const i = y - 2026;
    if (y < buyYear) return -1 * Array.from({ length: i + 1 }, (_, k) => todayRent * 12 * Math.pow(1 + RENT_INCREASE, k)).reduce((a, b) => a + b, 0);
    // After buying, rent stops being paid
    return -1 * Array.from({ length: buyYear - 2026 }, (_, k) => todayRent * 12 * Math.pow(1 + RENT_INCREASE, k)).reduce((a, b) => a + b, 0);
  });
  const max = Math.max(...equityPath, 1);
  const min = Math.min(...rentPath, -1);

  return (
    <section style={{ padding: "120px 0", background: "var(--bg-2)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "30%",
        background: "linear-gradient(180deg, rgba(91,194,231,0.08) 0%, transparent 100%)" }}></div>
      <div className="b-container" style={{ position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
          <div>
            <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>The 30-year picture</div>
          </div>
          <div>
            <h2 className="b-h2" style={{ maxWidth: 720 }}>
              The cost of <span style={{ color: "var(--gold-deep)" }}>waiting</span> isn't on the listing.
            </h2>
            <p className="b-lede" style={{ maxWidth: 580, marginTop: 16 }}>
              Drag the slider to see what each year of waiting actually costs in equity built — and rent paid to someone else.
            </p>
          </div>
        </div>

        <div style={{ background: "#fff", borderRadius: 24, padding: 48, border: "1px solid var(--line)", boxShadow: "0 32px 80px -32px rgba(46,182,222,0.25)" }}>
          {/* Slider control */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
              <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>I buy a home in</span>
              <span className="tabular" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.022em", color: "var(--ink)" }}>
                {buyYear}
                {buyYear === 2026 && <span style={{ fontSize: 13, color: "var(--gold-deep)", marginLeft: 12, fontWeight: 500 }}>· now</span>}
              </span>
            </div>
            <input type="range" min={2026} max={2036} step={1} value={buyYear}
              onChange={e => setBuyYear(Number(e.target.value))}
              style={{ width: "100%", accentColor: "var(--gold)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--ink-mute)" }}>
              <span>2026</span><span>2028</span><span>2030</span><span>2032</span><span>2034</span><span>2036</span>
            </div>
          </div>

          {/* Side-by-side outcomes */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 32, alignItems: "center", marginBottom: 40 }}>
            {/* Equity built */}
            <div style={{ padding: 32, background: "linear-gradient(135deg, var(--accent-tint) 0%, #fff 100%)",
              border: "1px solid var(--gold)", borderRadius: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, borderRadius: 80,
                background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)" }}></div>
              <div style={{ fontSize: 11, color: "var(--gold-deep)", fontWeight: 700, letterSpacing: ".1em", marginBottom: 12 }}>
                ✦ HOME EQUITY BY 2056
              </div>
              <div className="tabular" style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.028em", color: "var(--ink)", lineHeight: 1 }}>
                {equityAtEnd >= 1000000 ? usdM(equityAtEnd) : usdK(equityAtEnd)}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 12, lineHeight: 1.4 }}>
                Real estate you <span style={{ color: "var(--ink)", fontWeight: 600 }}>own</span> at 30 years. Your home becomes an asset, not an expense.
              </div>
            </div>

            <div style={{ fontSize: 22, fontWeight: 600, color: "var(--ink-mute)", letterSpacing: "-0.01em" }}>vs.</div>

            {/* Rent paid */}
            <div style={{ padding: 32, background: "var(--bg-2)",
              border: "1px solid var(--line-2)", borderRadius: 16, position: "relative", overflow: "hidden" }}>
              <div style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 700, letterSpacing: ".1em", marginBottom: 12 }}>
                ✕ RENT PAID WHILE WAITING
              </div>
              <div className="tabular" style={{ fontSize: 56, fontWeight: 600, letterSpacing: "-0.028em", color: "var(--ink-2)", lineHeight: 1 }}>
                {totalRent >= 1000000 ? usdM(totalRent) : usdK(totalRent)}
              </div>
              <div style={{ fontSize: 14, color: "var(--ink-soft)", marginTop: 12, lineHeight: 1.4 }}>
                Money handed to <span style={{ fontWeight: 600 }}>someone else's</span> equity. You don't get it back.
              </div>
            </div>
          </div>

          {/* Mini chart */}
          <div>
            <div style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 12 }}>Wealth trajectory · 2026–2056</div>
            <div style={{ height: 160, position: "relative" }}>
              <svg width="100%" height="100%" viewBox={`0 0 1000 160`} preserveAspectRatio="none" style={{ display: "block" }}>
                <defs>
                  <linearGradient id="upG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5BC2E7" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#5BC2E7" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="dnG" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#94A5BA" stopOpacity="0"/>
                    <stop offset="100%" stopColor="#94A5BA" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                {/* zero line */}
                <line x1="0" y1="80" x2="1000" y2="80" stroke="var(--line-2)" strokeWidth="1" strokeDasharray="3 4" />
                {(() => {
                  const xStep = 1000 / (years.length - 1);
                  const yFor = v => 80 - (v / max) * 70 + (v < 0 ? Math.abs(v / min) * 70 - (v / max) * 70 : 0);
                  // simpler: use linear scale for positive (up) and abs of negative (down)
                  const yPos = v => 80 - Math.min(70, (v / max) * 70);
                  const yNeg = v => 80 + Math.min(70, (Math.abs(v) / Math.abs(min)) * 70);
                  const eqPts = equityPath.map((v, i) => `${i * xStep} ${yPos(v)}`).join(" L ");
                  const rentPts = rentPath.map((v, i) => `${i * xStep} ${yNeg(v)}`).join(" L ");
                  return <>
                    <path d={`M 0 80 L ${eqPts} L 1000 80 Z`} fill="url(#upG)" />
                    <path d={`M ${eqPts}`} stroke="var(--gold-deep)" strokeWidth="2.5" fill="none" />
                    <path d={`M 0 80 L ${rentPts} L 1000 80 Z`} fill="url(#dnG)" />
                    <path d={`M ${rentPts}`} stroke="var(--ink-mute)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
                  </>;
                })()}
              </svg>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 11, color: "var(--ink-mute)" }}>
              <span>2026</span><span>2031</span><span>2036</span><span>2041</span><span>2046</span><span>2051</span><span>2056</span>
            </div>
            <div style={{ display: "flex", gap: 24, marginTop: 16, fontSize: 12 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--gold-deep)" }}>
                <span style={{ width: 12, height: 2, background: "var(--gold-deep)" }}></span>
                Equity built (you own this)
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--ink-soft)" }}>
                <span style={{ width: 12, height: 2, background: "var(--ink-mute)", borderTop: "1px dashed var(--ink-mute)" }}></span>
                Rent paid (gone forever)
              </span>
            </div>
          </div>

          {/* CTA row */}
          <div style={{ marginTop: 40, paddingTop: 32, borderTop: "1px solid var(--line)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 4 }}>
                Want to run this for your real numbers?
              </div>
              <div style={{ fontSize: 15, color: "var(--ink)" }}>
                We'll model your actual income, location, and timeline — for free.
              </div>
            </div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8,
              padding: "13px 22px", fontSize: 14, fontWeight: 600,
              background: "var(--ink)", color: "#fff", borderRadius: 10,
              boxShadow: "0 6px 20px -6px rgba(10,10,10,.3)" }}>Get my personalized plan →</a>
          </div>
        </div>

        <div style={{ marginTop: 16, fontSize: 11, color: "var(--ink-mute)", textAlign: "center", maxWidth: 800, margin: "16px auto 0" }}>
          Based on San Diego county 4.5%/yr historical appreciation and 4%/yr rent growth. Past performance not indicative of future results. For illustration only.
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { BoldNav, BoldFooter, BoldHome, BoldCalculator, BoldSlider, SmallStat, ServiceDot, VideoChapters, Marquee, ScenarioSection });
