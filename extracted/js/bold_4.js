/* ============================================================
   BOLD direction — TECHNOLOGY / "Powered by Better"
   What makes GEM Home Team + NEO + Better the most advanced
   mortgage stack in America. Crypto-backed mortgages, Tinman AI,
   Betsy, One Day Mortgage, partner network.
   Reuses BoldNav / BoldFooter and the cyan-forward .b-* system.
   ============================================================ */
const { useState: useStateT } = React;

/* ---- Small chrome for the partner / capability cards ---- */
function MonoTag({ children, color }) {
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em",
      textTransform: "uppercase", color: color || "var(--ink-mute)", fontWeight: 600 }}>{children}</span>
  );
}

/* Coin glyph — simple geometric BTC / USDC token (no brand logos) */
function TokenGlyph({ kind, size = 44 }) {
  const isBtc = kind === "btc";
  const bg = isBtc ? "#F7931A" : "#2775CA";
  return (
    <span style={{ width: size, height: size, borderRadius: size / 2, background: bg,
      display: "grid", placeItems: "center", color: "#fff", flexShrink: 0,
      fontWeight: 700, fontSize: size * 0.42, fontFamily: "var(--font-mono)",
      boxShadow: `0 6px 18px -6px ${bg}88` }}>
      {isBtc ? "₿" : "$"}
    </span>
  );
}

/* ---- Partner logos: clean brand-colored wordmark lockups (text-based,
   not raster brand art — swap in official logo PNG/SVG if provided) ---- */
function partnerLogo(key) {
  const W = (txt, st) => <span style={{ fontFamily: "Geist, system-ui, sans-serif", lineHeight: 1, ...st }}>{txt}</span>;
  switch (key) {
    case "better":
      return W("Better", { fontSize: 27, fontWeight: 800, letterSpacing: "-0.035em", color: "#017848" });
    case "coinbase":
      return (
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#0052FF", display: "grid", placeItems: "center", flexShrink: 0 }}>
            <span style={{ width: 8.5, height: 8.5, borderRadius: 1, background: "#fff" }}></span>
          </span>
          {W("Coinbase", { fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", color: "#0A2540" })}
        </span>
      );
    case "fannie":
      return W("fanniemae", { fontSize: 24, fontWeight: 700, letterSpacing: "-0.015em", color: "#0B6E4F" });
    case "neo":
      return (
        <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 30, width: "auto", display: "block" }} />
      );
    case "stripe":
      return W("stripe", { fontSize: 27, fontWeight: 800, letterSpacing: "-0.045em", color: "#635BFF" });
    case "openai":
      return (
        <span style={{ display: "flex", alignItems: "center", gap: 9, fontFamily: "Geist, system-ui, sans-serif", fontSize: 18, fontWeight: 600, color: "#0A0A0A", letterSpacing: "-0.01em" }}>
          <span>OpenAI</span>
          <span style={{ opacity: 0.35, fontWeight: 400 }}>·</span>
          <span>ElevenLabs</span>
        </span>
      );
    default:
      return W(key, { fontSize: 20, fontWeight: 700, color: "var(--ink)" });
  }
}

function BoldTech() {
  const [pledge, setPledge] = useStateT("btc");
  return (
    <div className="b-page" data-screen-label="Bold · Technology">
      <BoldNav active="Technology" />

      {/* ===================== HERO ===================== */}
      <section style={{ padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        {/* faint dot field */}
        <div style={{ position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
          backgroundSize: "30px 30px", pointerEvents: "none",
          maskImage: "linear-gradient(180deg, #000 0%, transparent 80%)",
          WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 80%)" }}></div>
        <div className="b-container" style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "8px 14px",
            background: "var(--accent-tint)", borderRadius: 999, marginBottom: 28,
            fontSize: 12, fontWeight: 600, color: "var(--gold-deep)", letterSpacing: ".02em" }}>
            <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gold-deep)" }}></span>
            POWERED BY BETTER · NMLS #330511
          </div>
          <h1 className="b-h1" style={{ maxWidth: 1080, marginBottom: 32 }}>
            A San Diego team that knows your name — on the most advanced mortgage engine in America.
          </h1>
          <p className="b-lede" style={{ maxWidth: 660, marginBottom: 40 }}>
            Most local brokers run on borrowed software and overnight email. We run on Better's
            AI-native platform — the first fintech to fund over $110 billion in home loans — and we
            pair it with a team that manages your mortgage for the next thirty years.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#crypto" className="b-btn b-btn-primary" style={{ padding: "13px 22px" }}>See crypto-backed mortgages →</a>
            <a href="#stack" className="b-btn b-btn-outline" style={{ padding: "13px 22px" }}>Tour the technology</a>
          </div>

          {/* hero stat strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 64,
            border: "1px solid var(--line)", borderRadius: 14, overflow: "hidden", background: "#fff" }}>
            {[
              ["$110B+", "funded on the Better platform"],
              ["24 hrs", "click to commitment letter"],
              ["~3 wks", "median time to close"],
              ["24/7/365", "AI loan assistant on call"],
            ].map(([n, l], i) => (
              <div key={l} style={{ padding: "28px 28px", borderLeft: i ? "1px solid var(--line)" : "none" }}>
                <div className="tabular" style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--ink)" }}>{n}</div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 6, lineHeight: 1.4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WEALTH-REGRET HOOK ===================== */}
      <section className="b-section-dark" style={{ padding: "104px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "0.85fr 1.15fr", gap: 72, alignItems: "center" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 22 }}>Why strategy beats rate</div>
              <div style={{ display: "flex", alignItems: "baseline" }}>
                <span className="tabular" style={{ fontSize: 150, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.85, color: "var(--gold)" }}>81</span>
                <span className="tabular" style={{ fontSize: 66, fontWeight: 600, color: "var(--gold)" }}>%</span>
              </div>
            </div>
            <div>
              <h2 className="b-h2" style={{ fontSize: 42, lineHeight: 1.08, marginBottom: 24, color: "#fff" }}>
                of homeowners aged 18–34 regret something about buying their home.
              </h2>
              <p className="b-lede" style={{ maxWidth: 540, marginBottom: 14 }}>
                That's Zillow's number — and the cause is almost always the same: a mortgage chosen on
                interest rate alone, with no plan for the decades after closing.
              </p>
              <p className="b-body" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 540 }}>
                We do it the other way around. Strategy first, rate second, and a team that stays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TOTAL COST ANALYSIS ===================== */}
      <section style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 80, alignItems: "center" }}>
            {/* copy */}
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 16 }}>Total Cost Analysis</div>
              <h2 className="b-h2" style={{ marginBottom: 24, maxWidth: 480 }}>See the real cost — not just the rate.</h2>
              <p className="b-lede" style={{ marginBottom: 32, maxWidth: 480 }}>
                The lowest rate isn't always the cheapest loan. Your Total Cost Analysis is a clear,
                digital side-by-side of every option — fees, payment, and what each one truly costs
                over the years you'll actually hold it.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Every option side by side — not just the headline rate",
                  "Fees, monthly payment, and lifetime cost in plain English",
                  "Modeled to your real timeline in the home",
                ].map((b) => (
                  <div key={b} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <span style={{ width: 18, height: 18, borderRadius: 9, background: "var(--accent-tint)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 700, color: "var(--gold-deep)", flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 15, color: "var(--ink-2)" }}>{b}</span>
                  </div>
                ))}
              </div>
              <a href="/total-cost-analysis" className="b-btn b-btn-primary" style={{ marginTop: 30, padding: "13px 24px", fontSize: 14, fontWeight: 600 }}>Try the Total Cost Analysis →</a>
            </div>

            {/* mock TCA */}
            <div className="b-card" style={{ padding: 0, background: "#fff", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-soft)" }}>Total Cost Analysis</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--ink-mute)" }}>$675K · 7-yr horizon</span>
              </div>
              <div style={{ padding: 24, display: "grid", gap: 14 }}>
                {/* Option A */}
                <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 18 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>Option A · Buy the rate down</span>
                    <span className="tabular" style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-soft)" }}>6.75%</span>
                  </div>
                  {[["Monthly payment", "$4,210"], ["Points & fees", "$14,000"], ["Cost over 7 years", "$367,640"]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                      <span style={{ color: "var(--ink-soft)" }}>{k}</span>
                      <span className="tabular" style={{ color: "var(--ink)", fontWeight: 500 }}>{v}</span>
                    </div>
                  ))}
                </div>
                {/* Option B — recommended */}
                <div style={{ border: "2px solid var(--gold-deep)", borderRadius: 12, padding: 18, background: "var(--accent-tint)", position: "relative" }}>
                  <span style={{ position: "absolute", top: -10, left: 16, background: "var(--gold-deep)", color: "#fff", fontSize: 10, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 999 }}>Recommended for your timeline</span>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, marginTop: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-on-cyan)" }}>Option B · No points</span>
                    <span className="tabular" style={{ fontSize: 14, fontWeight: 700, color: "var(--ink-on-cyan)" }}>7.00%</span>
                  </div>
                  {[["Monthly payment", "$4,320"], ["Points & fees", "$1,500"], ["Cost over 7 years", "$364,380"]].map(([k, v]) => (
                    <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                      <span style={{ color: "var(--ink-on-cyan)", opacity: 0.7 }}>{k}</span>
                      <span className="tabular" style={{ color: "var(--ink-on-cyan)", fontWeight: 600 }}>{v}</span>
                    </div>
                  ))}
                </div>
                {/* savings callout */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "13px 16px", background: "var(--ink)", borderRadius: 10 }}>
                  <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 13 }}>If you move or refi within 7 years</span>
                  <span className="tabular" style={{ color: "var(--gold)", fontWeight: 700, fontSize: 15 }}>Save $3,260</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== THE STACK ===================== */}
      <section id="stack" className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 80, marginBottom: 64, alignItems: "end" }}>
            <div className="b-eyebrow">The engine room</div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 720, marginBottom: 20 }}>
                Three pieces of technology your last lender simply didn't have.
              </h2>
              <p className="b-lede" style={{ maxWidth: 560 }}>
                Built in-house by Better since 2016. We're a NEO Home Loans branch on top of it —
                so you get the engineering of a fintech with the attention of a neighbor.
              </p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {/* Tinman */}
            <div className="b-card tilt-card" style={{ padding: 32, background: "#fff", display: "flex", flexDirection: "column" }}>
              <MonoTag color="var(--gold-deep)">Tinman™ · AI underwriting</MonoTag>
              <h3 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, margin: "16px 0 12px", color: "var(--ink)" }}>
                Rates in seconds. Pre-approval in minutes.
              </h3>
              <p className="b-body" style={{ marginBottom: 24 }}>
                Better's proprietary loan engine keeps your whole file — pricing, documents,
                underwriting — in one system instead of five. Roughly 40% of loans are now
                AI-underwritten, on the way to a one-minute mortgage.
              </p>
              {/* mini approval card */}
              <div style={{ marginTop: "auto", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <MonoTag>Underwriting</MonoTag>
                  <span style={{ padding: "3px 9px", background: "#1F8A5B", color: "#fff", borderRadius: 999, fontSize: 10, fontWeight: 700 }}>CLEARED</span>
                </div>
                {[["Income & assets", 100], ["Credit", 100], ["Property", 78]].map(([k, v], i) => (
                  <div key={k} style={{ marginBottom: 10 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink-soft)", marginBottom: 5 }}>
                      <span>{k}</span><span className="tabular">{v}%</span>
                    </div>
                    <div style={{ height: 5, background: "var(--line)", borderRadius: 3, overflow: "hidden" }}>
                      <div className="anim-fill" style={{ width: v + "%", height: "100%", background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-deep) 100%)", animationDelay: (0.1 + i * 0.15) + "s" }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Betsy */}
            <div className="b-card tilt-card" style={{ padding: 32, background: "#fff", display: "flex", flexDirection: "column" }}>
              <MonoTag color="var(--gold-deep)">Betsy™ · AI loan assistant</MonoTag>
              <h3 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, margin: "16px 0 12px", color: "var(--ink)" }}>
                The first voice AI built for mortgages.
              </h3>
              <p className="b-body" style={{ marginBottom: 24 }}>
                Betsy answers status questions, collects documents, and moves your file forward —
                day or night. She handles 125,000+ conversations a month so your human team can
                spend their time on your strategy, not your paperwork.
              </p>
              {/* mini chat */}
              <div style={{ marginTop: "auto", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 18 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                  <span style={{ width: 22, height: 22, borderRadius: 11, background: "var(--gold-deep)", color: "#fff", display: "grid", placeItems: "center", fontSize: 11 }}>♪</span>
                  <MonoTag>Betsy · live</MonoTag>
                  <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: 3, background: "#1F8A5B", marginLeft: "auto" }}></span>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-2)", background: "#fff", border: "1px solid var(--line)", borderRadius: "12px 12px 12px 4px", padding: "10px 12px", marginBottom: 8, lineHeight: 1.4 }}>
                  "Your appraisal just came in at $1.02M — $48K over contract. Want me to text Megan?"
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-on-cyan)", background: "var(--accent-tint)", border: "1px solid var(--gold-soft)", borderRadius: "12px 12px 4px 12px", padding: "10px 12px", marginLeft: 32, lineHeight: 1.4 }}>
                  Yes please 🙌
                </div>
              </div>
            </div>

            {/* One Day Mortgage */}
            <div className="b-card tilt-card" style={{ padding: 32, background: "#fff", display: "flex", flexDirection: "column" }}>
              <MonoTag color="var(--gold-deep)">One Day Mortgage™</MonoTag>
              <h3 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.12, margin: "16px 0 12px", color: "var(--ink)" }}>
                Click to commitment letter in 24 hours.
              </h3>
              <p className="b-body" style={{ marginBottom: 24 }}>
                Not a pre-qual. A real, underwritten commitment — the kind that makes your offer
                read like cash in a bidding war. The industry takes a week or more; we hand it to
                you the next day.
              </p>
              {/* mini timeline */}
              <div style={{ marginTop: "auto", background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 12, padding: 18 }}>
                {[
                  ["Apply online", "9:14 AM", true],
                  ["Tinman prices & underwrites", "9:31 AM", true],
                  ["Commitment letter issued", "Next day", true],
                  ["Write a winning offer", "—", false],
                ].map(([k, t, done], i, arr) => (
                  <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: 18, height: 18, borderRadius: 9, flexShrink: 0,
                        background: done ? "var(--gold-deep)" : "#fff", border: done ? "none" : "1.5px dashed var(--line-2)",
                        color: "#fff", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700 }}>{done ? "✓" : ""}</span>
                      {i < arr.length - 1 && <span style={{ width: 2, height: 22, background: "var(--line)" }}></span>}
                    </div>
                    <div style={{ paddingBottom: i < arr.length - 1 ? 6 : 0 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 500, color: done ? "var(--ink)" : "var(--ink-mute)" }}>{k}</div>
                      <div className="tabular" style={{ fontSize: 10.5, color: "var(--ink-mute)", marginTop: 1 }}>{t}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== CRYPTO-BACKED ===================== */}
      <section id="crypto" className="b-section-dark" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -160, right: -120, width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(91,194,231,0.22) 0%, transparent 70%)", pointerEvents: "none" }}></div>
        <div className="b-container" style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center", marginBottom: 72 }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "7px 13px",
                background: "rgba(91,194,231,0.14)", border: "1px solid rgba(91,194,231,0.3)", borderRadius: 999,
                marginBottom: 24, fontSize: 11, fontWeight: 600, color: "var(--gold)", letterSpacing: ".06em" }}>
                NEW · BETTER × COINBASE
              </div>
              <h2 className="b-h2" style={{ color: "#fff", marginBottom: 24 }}>
                Buy the home. Keep the Bitcoin.
              </h2>
              <p className="b-lede" style={{ color: "rgba(255,255,255,0.72)", marginBottom: 28, maxWidth: 520 }}>
                We're one of the first San Diego teams able to write the crypto-backed mortgage —
                the first Fannie Mae-conforming home loan that lets you pledge Bitcoin or USDC for
                your down payment instead of selling it.
              </p>
              <p className="b-body" style={{ color: "rgba(255,255,255,0.6)", maxWidth: 520 }}>
                No liquidation. No capital-gains event from the down payment. Your crypto sits in
                Coinbase Prime custody and comes back when the loan is paid off — and you keep every
                cent of future upside.
              </p>
            </div>

            {/* Interactive pledge card */}
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 18, padding: 28, backdropFilter: "blur(6px)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <MonoTag color="rgba(255,255,255,0.5)">Pledge calculator</MonoTag>
                <span style={{ fontSize: 10, color: "var(--gold)", fontWeight: 600, fontFamily: "var(--font-mono)" }}>● COINBASE PRIME</span>
              </div>
              {/* toggle */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 24 }}>
                {[["btc", "Bitcoin", "40% credited"], ["usdc", "USDC", "80% credited"]].map(([k, label, sub]) => (
                  <button key={k} onClick={() => setPledge(k)} style={{
                    display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 12, textAlign: "left",
                    border: pledge === k ? "1.5px solid var(--gold)" : "1.5px solid rgba(255,255,255,0.12)",
                    background: pledge === k ? "rgba(91,194,231,0.12)" : "transparent", transition: "all .18s" }}>
                    <TokenGlyph kind={k} size={36} />
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{label}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)" }}>{sub}</div>
                    </div>
                  </button>
                ))}
              </div>
              {/* numbers */}
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {(pledge === "btc"
                  ? [["You pledge", "$250,000 BTC"], ["Credited to down payment", "$100,000"], ["Capital-gains tax owed", "$0"], ["Bitcoin you keep", "100%"]]
                  : [["You pledge", "$125,000 USDC"], ["Credited to down payment", "$100,000"], ["Capital-gains tax owed", "$0"], ["USDC you keep", "100%"]]
                ).map(([k, v], i, arr) => (
                  <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center",
                    paddingBottom: i < arr.length - 1 ? 14 : 0, borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                    <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{k}</span>
                    <span className="tabular" style={{ fontSize: 16, fontWeight: 600, color: i >= 2 ? "var(--gold)" : "#fff" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20, padding: "12px 14px", background: "rgba(91,194,231,0.1)", borderRadius: 10,
                fontSize: 11.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.5 }}>
                Coinbase One members get 1% of the loan amount — up to $10,000 — back toward closing.
              </div>
            </div>
          </div>

          {/* how it works strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 56 }}>
            {[
              ["01", "Qualify with Better", "Same income and credit check as any conforming loan. Single-family, condo, or townhouse."],
              ["02", "Pledge your crypto", "Connect Coinbase and move BTC or USDC into Prime custody in a single click — no wires, no sales."],
              ["03", "One loan, one payment", "A Fannie Mae mortgage plus a crypto-secured down-payment loan, same rate and term, one monthly bill."],
              ["04", "Get it back at payoff", "Your tokens are returned in full when the loan is repaid. Until then they keep working for you."],
            ].map(([n, t, b]) => (
              <div key={n} style={{ padding: "26px 0", borderTop: "1px solid rgba(255,255,255,0.14)" }}>
                <div className="tabular" style={{ fontSize: 13, color: "var(--gold)", fontWeight: 700, marginBottom: 16 }}>{n}</div>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: "#fff", marginBottom: 10, letterSpacing: "-0.01em" }}>{t}</h3>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>{b}</p>
              </div>
            ))}
          </div>

          {/* no margin call callout */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {[
              ["No margin calls", "If the market drops, your terms don't change and no top-up is required. Price moves alone never trigger a sale."],
              ["Fannie Mae-conforming", "The same government-backed protections as a standard 15- or 30-year fixed mortgage — not an exotic crypto loan."],
              ["Only at risk if delinquent", "Pledged crypto can be liquidated only after a 60-day payment delinquency — exactly like any other mortgage."],
            ].map(([t, b]) => (
              <div key={t} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 14, padding: 24 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <span style={{ width: 24, height: 24, borderRadius: 12, background: "rgba(91,194,231,0.18)", color: "var(--gold)",
                    display: "grid", placeItems: "center", fontSize: 12, fontWeight: 700 }}>✓</span>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>{t}</h3>
                </div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.62)", lineHeight: 1.55 }}>{b}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, marginTop: 36, maxWidth: 880 }}>
            Token-backed mortgages are originated and serviced by Better Mortgage and backed by Fannie Mae; BTC and USDC
            pledges are powered by Coinbase. First loan funded June 2026, with nationwide availability rolling out
            summer 2026. Crypto involves risk and tax treatment varies — consult your own tax advisor. Figures shown
            are illustrative.
          </p>
        </div>
      </section>

      <section className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ maxWidth: 720, marginBottom: 48 }}>
            <div className="b-eyebrow" style={{ marginBottom: 14 }}>The honest comparison</div>
            <h2 className="b-h2">Tech of a fintech. Heart of a neighbor.</h2>
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1.2fr 1fr 1fr", padding: "20px 28px",
              borderBottom: "1px solid var(--line)", background: "var(--bg-2)", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500 }}>What matters</span>
              <span style={{ fontSize: 13, color: "var(--gold-deep)", fontWeight: 700 }}>NEO × Better</span>
              <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500 }}>Local broker</span>
              <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500 }}>Big bank</span>
            </div>
            {[
              ["AI underwriting engine", "Tinman, built in-house", "Third-party LOS", "Legacy systems"],
              ["Commitment letter speed", "24 hours", "5–10 days", "2–3 weeks"],
              ["Crypto-backed mortgage", "Yes — BTC & USDC", "Not offered", "Not offered"],
              ["24/7 AI loan assistant", "Betsy", "Voicemail", "Call center"],
              ["After you close", "Managed 30 years", "Until funding", "Sold to a servicer"],
              ["Who you actually talk to", "Megan & team", "Varies", "Whoever picks up"],
            ].map(([label, a, b, c], i) => (
              <div key={label} style={{ display: "grid", gridTemplateColumns: "1.6fr 1.2fr 1fr 1fr",
                padding: "20px 28px", borderTop: i ? "1px solid var(--line)" : "none", alignItems: "center" }}>
                <span style={{ fontSize: 15, color: "var(--ink)" }}>{label}</span>
                <span style={{ fontSize: 14, color: "var(--gold-deep)", fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 16, height: 16, borderRadius: 8, background: "var(--accent-tint)", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {a}
                </span>
                <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>{b}</span>
                <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TRUST / CREDENTIALS BAR ===================== */}
      <section style={{ padding: "52px 0", borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div className="b-container">
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "18px 22px" }}>
            {[
              "Equal Housing Lender",
              "NMLS #330511",
              "Powered by Better Mortgage",
              "Licensed by the CA DFPI",
            ].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <span style={{ width: 4, height: 4, borderRadius: 2, background: "var(--line-2)" }}></span>}
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".06em", color: "var(--ink-soft)", fontWeight: 500 }}>{label}</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="b-section-cyan" style={{ padding: "100px 0" }}>
        <div className="b-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 64, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 20, maxWidth: 900, margin: "0 auto 20px" }}>
            Want all of this pointed at your home?
          </h2>
          <p style={{ fontSize: 18, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Whether you're paying cash, financing, or pledging crypto — start with a free 20-minute call.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" className="b-btn b-btn-dark" style={{ padding: "14px 26px", fontSize: 15, background: "#fff", color: "var(--ink)" }}>Schedule a call →</a>
            <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" className="b-btn"
              style={{ padding: "14px 26px", fontSize: 15, background: "transparent", border: "1.5px solid var(--ink-on-cyan)", color: "var(--ink-on-cyan)" }}>
              APPLY NOW
            </a>
          </div>
        </div>
      </section>

      <BoldFooter />
    </div>
  );
}

Object.assign(window, { BoldTech, partnerLogo, MonoTag });
