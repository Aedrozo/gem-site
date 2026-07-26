/* ============================================================
   BOLD direction — MOBILE pages, part 2
   Technology + Dashboard (390px). Reuses mobile chrome + partnerLogo.
   ============================================================ */
const { useState: useStateM2 } = React;

/* ==================== TECHNOLOGY MOBILE ==================== */
function BoldTechMobile() {
  const [pledge, setPledge] = useStateM2("btc");
  return (
    <div className="b-page" data-screen-label="Bold · Technology (Mobile)">
      <MobHeader />

      {/* HERO */}
      <section style={{ padding: "44px 20px 36px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)", backgroundSize: "26px 26px",
          maskImage: "linear-gradient(180deg, #000 0%, transparent 75%)", WebkitMaskImage: "linear-gradient(180deg, #000 0%, transparent 75%)", pointerEvents: "none" }}></div>
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 12px", background: "var(--accent-tint)", borderRadius: 999, marginBottom: 22, fontSize: 11, fontWeight: 600, color: "var(--gold-deep)" }}>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: "var(--gold-deep)" }}></span>
            POWERED BY BETTER · NMLS #330511
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 20 }}>
            A San Diego team that knows your name — on the most advanced mortgage engine in America.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)", marginBottom: 28 }}>
            Most local brokers run on borrowed software. We run on Better's AI-native platform — the first fintech to fund over $110 billion in home loans.
          </p>
          <div className="col gap-3">
            <a href="#" className="b-btn b-btn-primary" style={{ justifyContent: "center", padding: "13px" }}>See crypto-backed mortgages →</a>
            <a href="#" className="b-btn b-btn-outline" style={{ justifyContent: "center", padding: "13px" }}>Tour the technology</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: 28, border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden", background: "#fff" }}>
            {[
              ["$110B+", "funded on Better"],
              ["24 hrs", "to commitment letter"],
              ["~3 wks", "median time to close"],
              ["24/7/365", "AI loan assistant"],
            ].map(([n, l], i) => (
              <div key={l} style={{ padding: "20px 18px", borderLeft: i % 2 ? "1px solid var(--line)" : "none", borderTop: i > 1 ? "1px solid var(--line)" : "none" }}>
                <div className="tabular" style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.03em", color: "var(--ink)" }}>{n}</div>
                <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGRET HOOK */}
      <section className="b-section-dark" style={{ padding: "52px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 18 }}>Why strategy beats rate</div>
        <div style={{ display: "flex", alignItems: "baseline", marginBottom: 20 }}>
          <span className="tabular" style={{ fontSize: 96, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 0.85, color: "var(--gold)" }}>81</span>
          <span className="tabular" style={{ fontSize: 46, fontWeight: 600, color: "var(--gold)" }}>%</span>
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.12, color: "#fff", marginBottom: 18 }}>
          of homeowners aged 18–34 regret something about buying their home.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.72)", marginBottom: 10 }}>
          That's Zillow's number — and the cause is almost always the same: a mortgage chosen on rate alone, with no plan for the decades after closing.
        </p>
        <p style={{ fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,0.55)" }}>
          We do it the other way around. Strategy first, rate second, and a team that stays.
        </p>
      </section>

      {/* NEO PROCESS */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="The NEO process" title="We don't sell you a loan. We build you a plan." sub="Four steps to a mortgage that fits the life you're actually building — and a relationship that doesn't end at the closing table." />
        <div className="col gap-3">
          {[
            ["01", "Discovery", "We learn your full financial picture and long-term goals before we ever talk product.", "Step one"],
            ["02", "Strategy", "We model every option for the lowest lifetime cost, then hand you a plain-English Total Cost Analysis.", "Your options"],
            ["03", "Execution", "A flawless, fast close — positioned to win in competitive markets, or patient while you prepare.", "Close"],
            ["04", "Wealth Maximization", "Closing is just the start. We manage your mortgage for years and help turn equity into wealth.", "For 30 years"],
          ].map(([n, t, d, tag], i) => {
            const last = i === 3;
            return (
              <div key={n} className="b-card" style={{ padding: 22, background: last ? "var(--ink)" : "#fff", border: last ? "none" : "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <span className="tabular" style={{ fontSize: 13, fontWeight: 700, color: last ? "var(--gold)" : "var(--gold-deep)" }}>{n}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: ".12em", textTransform: "uppercase", color: last ? "rgba(255,255,255,0.5)" : "var(--ink-mute)" }}>{tag}</span>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 600, letterSpacing: "-0.015em", lineHeight: 1.15, color: last ? "#fff" : "var(--ink)", marginBottom: 8 }}>{t}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: last ? "rgba(255,255,255,0.72)" : "var(--ink-soft)" }}>{d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TOTAL COST ANALYSIS */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Total Cost Analysis" title="See the real cost — not just the rate." sub="The lowest rate isn't always the cheapest loan. Your Total Cost Analysis is a clear, digital side-by-side of every option — fees, payment, and what each one truly costs over the years you'll hold it." />
        <div className="b-card" style={{ padding: 0, overflow: "hidden" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--ink-soft)" }}>Total Cost Analysis</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, color: "var(--ink-mute)" }}>7-yr horizon</span>
          </div>
          <div style={{ padding: 18, display: "grid", gap: 12 }}>
            <div style={{ border: "1px solid var(--line)", borderRadius: 12, padding: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)" }}>Option A · Buy the rate down</span>
                <span className="tabular" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-soft)" }}>6.75%</span>
              </div>
              {[["Monthly payment", "$4,210"], ["Points & fees", "$14,000"], ["Cost over 7 years", "$367,640"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                  <span style={{ color: "var(--ink-soft)" }}>{k}</span>
                  <span className="tabular" style={{ color: "var(--ink)", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ border: "2px solid var(--gold-deep)", borderRadius: 12, padding: 16, background: "var(--accent-tint)", position: "relative" }}>
              <span style={{ position: "absolute", top: -10, left: 14, background: "var(--gold-deep)", color: "#fff", fontSize: 9.5, fontWeight: 700, letterSpacing: ".05em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 999 }}>Recommended for your timeline</span>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, marginTop: 4 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-on-cyan)" }}>Option B · No points</span>
                <span className="tabular" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink-on-cyan)" }}>7.00%</span>
              </div>
              {[["Monthly payment", "$4,320"], ["Points & fees", "$1,500"], ["Cost over 7 years", "$364,380"]].map(([k, v]) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: 13 }}>
                  <span style={{ color: "var(--ink-on-cyan)", opacity: 0.7 }}>{k}</span>
                  <span className="tabular" style={{ color: "var(--ink-on-cyan)", fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 14px", background: "var(--ink)", borderRadius: 10 }}>
              <span style={{ color: "rgba(255,255,255,0.82)", fontSize: 12.5 }}>Move or refi within 7 years</span>
              <span className="tabular" style={{ color: "var(--gold)", fontWeight: 700, fontSize: 15 }}>Save $3,260</span>
            </div>
          </div>
        </div>
        <a href="/total-cost-analysis" className="b-btn b-btn-primary" style={{ justifyContent: "center", width: "100%", padding: "13px", marginTop: 22 }}>Try the Total Cost Analysis →</a>
      </section>

      {/* THE STACK */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="The engine room" title="Three pieces of technology your last lender didn't have." sub="Built in-house by Better since 2016. We're a NEO branch on top of it — fintech engineering with a neighbor's attention." />
        <div className="col gap-3">
          {[
            ["Tinman™ · AI underwriting", "Rates in seconds. Pre-approval in minutes.", "Better's proprietary loan engine keeps your whole file in one system. Roughly 40% of loans are now AI-underwritten."],
            ["Betsy™ · AI loan assistant", "The first voice AI built for mortgages.", "Betsy answers questions, collects documents, and moves your file forward — day or night, 125,000+ conversations a month."],
            ["One Day Mortgage™", "Click to commitment letter in 24 hours.", "Not a pre-qual — a real, underwritten commitment that makes your offer read like cash. The industry takes a week or more."],
          ].map(([tag, t, b]) => (
            <div key={tag} className="b-card" style={{ padding: 22, background: "#fff" }}>
              <MonoTag color="var(--gold-deep)">{tag}</MonoTag>
              <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.14, margin: "14px 0 10px", color: "var(--ink)" }}>{t}</h3>
              <p className="b-body" style={{ fontSize: 14 }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER NETWORK */}
      

      {/* COMPARISON — stacked */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="The honest comparison" title="Tech of a fintech. Heart of a neighbor." />
        <div className="col gap-3">
          {[
            ["AI underwriting engine", "Tinman, built in-house", "Third-party LOS"],
            ["Commitment letter speed", "24 hours", "5–10 days"],
            ["Crypto-backed mortgage", "Yes — BTC & USDC", "Not offered"],
            ["24/7 AI loan assistant", "Betsy", "Voicemail"],
            ["After you close", "Managed 30 years", "Until funding"],
            ["Who you actually talk to", "Megan & team", "Whoever picks up"],
          ].map(([label, a, b]) => (
            <div key={label} style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>{label}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--gold-deep)", fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>NEO × Better</div>
                  <div style={{ fontSize: 13.5, color: "var(--gold-deep)", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 14, height: 14, borderRadius: 7, background: "var(--accent-tint)", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>✓</span>{a}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--ink-mute)", fontWeight: 700, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>Local broker</div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-mute)" }}>{b}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section style={{ padding: "32px 20px", borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px 16px" }}>
          {["Equal Housing Lender", "NMLS #330511", "Powered by Better Mortgage", "Licensed by the CA DFPI"].map((label, i) => (
            <React.Fragment key={label}>
              {i > 0 && <span style={{ width: 4, height: 4, borderRadius: 2, background: "var(--line-2)" }}></span>}
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".05em", color: "var(--ink-soft)", fontWeight: 500 }}>{label}</span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="b-section-cyan" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 16 }}>
          Want all of this pointed at your home?
        </h2>
        <p style={{ fontSize: 16, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 28 }}>
          Whether you're paying cash, financing, or pledging crypto — start with a free 20-minute call.
        </p>
        <div className="col gap-3">
          <a href="#" className="b-btn b-btn-dark" style={{ justifyContent: "center", padding: "13px", background: "#fff", color: "var(--ink)" }}>Schedule a call →</a>
          <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" className="b-btn" style={{ justifyContent: "center", padding: "13px", background: "transparent", border: "1.5px solid var(--ink-on-cyan)", color: "var(--ink-on-cyan)" }}>APPLY NOW</a>
        </div>
      </section>

      <MobFooter />
    </div>
  );
}

/* ==================== DASHBOARD MOBILE ==================== */
function BoldDashboardMobile() {
  const [tab, setTab] = useStateM2("overview");
  return (
    <div className="b-page" data-screen-label="Bold · Dashboard (Mobile)" style={{ background: "var(--bg-2)" }}>
      {/* app header */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px", background: "var(--bg)", borderBottom: "1px solid var(--line)", position: "sticky", top: 0, zIndex: 5 }}>
        <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 26, width: "auto", display: "block" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--line)", color: "var(--ink-soft)" }}>🔔</button>
          <span style={{ width: 32, height: 32, borderRadius: 16, background: "var(--gold)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: 12, fontWeight: 600 }}>JR</span>
        </div>
      </header>

      {/* tab bar (scrollable) */}
      <div style={{ display: "flex", gap: 6, padding: "12px 20px", overflowX: "auto", background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
        {["Overview", "Loan", "Documents", "Messages", "Wealth"].map((t) => (
          <button key={t} onClick={() => setTab(t.toLowerCase())} style={{
            flexShrink: 0, padding: "8px 16px", fontSize: 13, borderRadius: 999, fontWeight: 500,
            background: tab === t.toLowerCase() ? "var(--ink)" : "transparent",
            color: tab === t.toLowerCase() ? "#fff" : "var(--ink-soft)",
            border: tab === t.toLowerCase() ? "1px solid var(--ink)" : "1px solid var(--line)"
          }}>{t}</button>
        ))}
      </div>

      <div style={{ padding: "24px 20px 40px" }}>
        {/* status */}
        <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 }}>14 Encinitas Court · Your loan</div>
        <h1 style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.12, marginBottom: 16 }}>
          Step 4 of 6 · Underwriting in progress
        </h1>
        <div style={{ marginBottom: 28 }}>
          <div style={{ height: 6, background: "var(--line)", borderRadius: 3, overflow: "hidden", marginBottom: 8 }}>
            <div style={{ width: "62%", height: "100%", background: "var(--ink)" }}></div>
          </div>
          <span className="tabular" style={{ fontSize: 12.5, color: "var(--ink-soft)" }}>62% · 24 days to close June 8</span>
        </div>

        {/* stat cards 2x2 */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
          {[
            ["Loan amount", "$772,000", "30y · 6.250%"],
            ["Monthly · PITI", "$5,432", "Locked May 8"],
            ["Equity at close", "$193,000", "20% down"],
            ["Locked rate", "6.250%", "↓ 0.125 vs market"],
          ].map(([k, v, s]) => (
            <div key={k} className="b-card" style={{ padding: "18px 18px" }}>
              <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginBottom: 8 }}>{k}</div>
              <div className="tabular" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>

        {/* progress */}
        <div className="b-card" style={{ padding: 22, marginBottom: 16 }}>
          <h3 className="b-h3" style={{ fontSize: 17, marginBottom: 16 }}>Loan progress</h3>
          {[
            ["Application submitted", "Apr 28", "done"],
            ["Pre-approval issued", "Apr 29", "done"],
            ["Appraisal ordered", "May 9", "done"],
            ["Underwriting review", "3 conditions outstanding", "active"],
            ["Clear to close", "Estimated Jun 2", "pending"],
            ["Closing & funding", "Jun 8 · 2:30pm", "pending"],
          ].map(([t, s, st], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "18px 1fr", gap: 14, padding: "14px 0", borderTop: i === 0 ? "0" : "1px solid var(--line)", alignItems: "center" }}>
              <div style={{ width: 16, height: 16, borderRadius: 8, background: st === "done" ? "var(--ink)" : st === "active" ? "var(--gold)" : "var(--bg)", border: st === "pending" ? "1.5px dashed var(--line-2)" : "0", color: "#fff", display: "grid", placeItems: "center", fontSize: 9 }}>{st === "done" ? "✓" : ""}</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, color: st === "pending" ? "var(--ink-soft)" : "var(--ink)" }}>{t}</div>
                  <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginTop: 2 }}>{s}</div>
                </div>
                {st === "active" && <span className="b-tag" style={{ background: "var(--accent-tint)", color: "var(--gold-deep)", borderColor: "transparent", fontSize: 9.5, fontWeight: 600, flexShrink: 0 }}>Action</span>}
              </div>
            </div>
          ))}
        </div>

        {/* outstanding conditions */}
        <div className="b-card-dark" style={{ padding: 22, marginBottom: 16 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginBottom: 10, fontWeight: 500 }}>3 actions for you</div>
          <h3 style={{ fontSize: 17, fontWeight: 500, marginBottom: 14, color: "#fff" }}>Outstanding conditions</h3>
          {[
            ["Updated bank statement (April)", "Due May 18"],
            ["Explanation letter — late payment 2024", "Due May 20"],
            ["Hazard insurance binder", "Due May 28"],
          ].map(([t, d]) => (
            <div key={t} style={{ display: "grid", gridTemplateColumns: "1fr auto", padding: "12px 0", borderTop: "1px solid rgba(255,255,255,.1)", alignItems: "center", gap: 12 }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500, color: "#fff" }}>{t}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,.5)", marginTop: 2 }}>{d}</div>
              </div>
              <button style={{ padding: "7px 13px", background: "var(--gold)", color: "var(--ink)", borderRadius: 6, fontSize: 12, fontWeight: 500 }}>Upload</button>
            </div>
          ))}
        </div>

        {/* messages */}
        <div className="b-card" style={{ padding: 22 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 14 }}>
            <h3 style={{ fontSize: 17, fontWeight: 500 }}>From your team</h3>
            <span className="b-tag" style={{ background: "var(--accent-tint)", color: "var(--gold-deep)", borderColor: "transparent", fontSize: 9.5, fontWeight: 600 }}>2 new</span>
          </div>
          {[
            ["Megan Sawamura", "Appraisal came back at $972k — $7k over asking. Quick thoughts attached.", "11m"],
            ["Sonny Alquizar", "Got your statements — uploading to underwriting now.", "2h"],
          ].map(([who, msg, t]) => (
            <div key={who} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 12, padding: "12px 0", borderTop: "1px solid var(--line)" }}>
              <div style={{ width: 32, height: 32, borderRadius: 16, background: "var(--bg-3)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600 }}>{who.split(" ").map((x) => x[0]).join("")}</div>
              <div>
                <div style={{ fontSize: 13 }}><span style={{ fontWeight: 500 }}>{who}</span> <span style={{ color: "var(--ink-mute)", marginLeft: 4 }}>{t}</span></div>
                <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 3, lineHeight: 1.45 }}>{msg}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BoldTechMobile, BoldDashboardMobile });
