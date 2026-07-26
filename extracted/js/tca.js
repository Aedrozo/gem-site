/* ============================================================
   Total Cost Analysis — signature interactive tool.
   Compares the FULL lifetime cost of two mortgage scenarios
   (not just the monthly rate): monthly P&I, total interest,
   total cost, payoff year, and the savings between them.
   Responsive core + desktop/mobile chrome wrappers.
   ============================================================ */
const { useState: useStateTCA, useMemo: useMemoTCA } = React;

function tcaMoney(n) { return "$" + Math.round(n).toLocaleString("en-US"); }
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
  return { principal, monthly, totalPaid, totalInterest };
}

/* slider with label + live value */
function TCASlider({ label, value, display, min, max, step, onChange }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
        <span className="b-label" style={{ marginBottom: 0 }}>{label}</span>
        <span className="tabular" style={{ fontSize: 17, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.01em" }}>{display}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        style={{ width: "100%", accentColor: "var(--gold-deep)", height: 4, cursor: "pointer" }} />
    </div>
  );
}

/* one scenario configuration + computed results */
function TCAScenarioCard({ tag, accent, years, setYears, rate, setRate, result, thisYear }) {
  return (
    <div className="b-card" style={{ flex: "1 1 280px", minWidth: 260 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18 }}>
        <span style={{ width: 8, height: 8, borderRadius: 4, background: accent }}></span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink-soft)" }}>{tag}</span>
      </div>

      <div className="b-label">Loan term</div>
      <div style={{ display: "flex", gap: 6, marginBottom: 18 }}>
        {[15, 20, 30].map((y) => (
          <button key={y} onClick={() => setYears(y)}
            style={{ flex: 1, padding: "9px 0", fontSize: 13.5, fontWeight: 600, borderRadius: 8,
              border: "1px solid " + (years === y ? "var(--gold-deep)" : "var(--line-2)"),
              background: years === y ? "var(--accent-tint)" : "var(--bg)",
              color: years === y ? "var(--gold-deep)" : "var(--ink-soft)" }}>{y}-yr</button>
        ))}
      </div>

      <div className="b-label">Interest rate</div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 22 }}>
        <button onClick={() => setRate(Math.max(0, Math.round((rate - 0.125) * 1000) / 1000))}
          style={{ width: 38, height: 38, borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 18, color: "var(--ink-soft)" }}>−</button>
        <div className="tabular" style={{ flex: 1, textAlign: "center", fontSize: 22, fontWeight: 600, color: "var(--ink)" }}>{rate.toFixed(3)}%</div>
        <button onClick={() => setRate(Math.round((rate + 0.125) * 1000) / 1000)}
          style={{ width: 38, height: 38, borderRadius: 8, border: "1px solid var(--line-2)", fontSize: 18, color: "var(--ink-soft)" }}>+</button>
      </div>

      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 18 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
          <span className="b-body" style={{ fontSize: 13 }}>Monthly P&amp;I</span>
          <span className="tabular" style={{ fontSize: 26, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>{tcaMoney(result.monthly)}</span>
        </div>
        {[
          ["Total interest", tcaMoney(result.totalInterest)],
          ["Total of payments", tcaMoney(result.totalPaid)],
          ["Paid off by", String(thisYear + years)],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 13.5 }}>
            <span style={{ color: "var(--ink-soft)" }}>{k}</span>
            <span className="tabular" style={{ color: "var(--ink-2)", fontWeight: 500 }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* stacked principal+interest bar for visual comparison */
function TCABar({ label, accent, principal, interest, scaleMax }) {
  const pct = (n) => (scaleMax > 0 ? (n / scaleMax) * 100 : 0);
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, marginBottom: 6 }}>
        <span style={{ color: "var(--ink-2)", fontWeight: 600 }}>{label}</span>
        <span className="tabular" style={{ color: "var(--ink-soft)" }}>{tcaShort(principal + interest)} total</span>
      </div>
      <div style={{ display: "flex", height: 22, borderRadius: 6, overflow: "hidden", background: "var(--bg-2)" }}>
        <div style={{ width: pct(principal) + "%", background: "var(--ink)" }} title="Principal"></div>
        <div style={{ width: pct(interest) + "%", background: accent }} title="Interest"></div>
      </div>
    </div>
  );
}

function TotalCostCore() {
  const thisYear = new Date().getFullYear();
  const [price, setPrice] = useStateTCA(850000);
  const [downPct, setDownPct] = useStateTCA(20);
  const [aYears, setAYears] = useStateTCA(30);
  const [aRate, setARate] = useStateTCA(6.375);
  const [bYears, setBYears] = useStateTCA(15);
  const [bRate, setBRate] = useStateTCA(5.625);

  const down = Math.round((price * downPct) / 100);
  const A = useMemoTCA(() => tcaCompute(price, down, aRate, aYears), [price, down, aRate, aYears]);
  const B = useMemoTCA(() => tcaCompute(price, down, bRate, bYears), [price, down, bRate, bYears]);

  const interestDiff = A.totalInterest - B.totalInterest;   // + => B saves interest
  const monthlyDiff = B.monthly - A.monthly;                // + => B costs more / mo
  const saver = interestDiff >= 0 ? "B" : "A";
  const saved = Math.abs(interestDiff);
  const moreMonthly = Math.abs(monthlyDiff);
  const yearsDiff = Math.abs(aYears - bYears);
  const scaleMax = Math.max(A.principal + A.totalInterest, B.principal + B.totalInterest);

  return (
    <section style={{ padding: "72px 0 96px" }}>
      <div className="b-container">
        {/* header */}
        <div className="b-eyebrow" style={{ marginBottom: 16 }}>Total Cost Analysis</div>
        <h1 className="b-h2" style={{ maxWidth: 620, marginBottom: 16 }}>The whole cost. Not just the rate.</h1>
        <p className="b-lede" style={{ maxWidth: 600, marginBottom: 40 }}>
          A lower rate isn't always the cheaper loan. Compare two scenarios side by side and see what each one
          really costs you over the life of the mortgage — interest, total payments, and payoff date.
        </p>

        {/* shared inputs */}
        <div className="b-card-soft" style={{ marginBottom: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "8px 48px" }}>
            <TCASlider label="Home price" value={price} display={tcaMoney(price)} min={300000} max={2500000} step={25000} onChange={setPrice} />
            <TCASlider label={"Down payment · " + downPct + "%"} value={downPct} display={tcaMoney(down)} min={0} max={50} step={1} onChange={setDownPct} />
          </div>
          <div className="b-body" style={{ fontSize: 13, marginTop: 4 }}>Loan amount: <span className="tabular" style={{ color: "var(--ink)", fontWeight: 600 }}>{tcaMoney(price - down)}</span></div>
        </div>

        {/* two scenarios */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 28 }}>
          <TCAScenarioCard tag="Scenario A" accent="var(--ink)" years={aYears} setYears={setAYears} rate={aRate} setRate={setARate} result={A} thisYear={thisYear} />
          <TCAScenarioCard tag="Scenario B" accent="var(--gold-deep)" years={bYears} setYears={setBYears} rate={bRate} setRate={setBRate} result={B} thisYear={thisYear} />
        </div>

        {/* verdict */}
        <div className="b-section-cyan" style={{ borderRadius: "var(--radius)", padding: "32px 32px" }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 28, alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 320px" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.7, marginBottom: 8 }}>The bottom line</div>
              <div style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2 }}>
                Scenario {saver} saves <span style={{ borderBottom: "3px solid currentColor" }}>{tcaMoney(saved)}</span> in total interest.
              </div>
              <div style={{ fontSize: 15, marginTop: 10, opacity: 0.85 }}>
                {monthlyDiff === 0
                  ? "Same monthly payment."
                  : "Trade-off: " + tcaMoney(moreMonthly) + "/mo " + (saver === "B" ? "more" : "less") + " on Scenario " + saver + (yearsDiff ? ", and paid off " + yearsDiff + " years " + (((saver === "B" ? bYears : aYears) < (saver === "B" ? aYears : bYears)) ? "sooner" : "later") + "." : ".")}
              </div>
            </div>
            <a href="https://gemteam.youcanbook.me" target="_blank" rel="noopener" className="b-btn"
              style={{ background: "var(--ink)", color: "#fff", padding: "14px 24px", fontSize: 15, fontWeight: 600, textAlign: "center" }}>
              Get your personalized analysis →
            </a>
          </div>
        </div>

        {/* chart */}
        <div className="b-card" style={{ marginTop: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18, flexWrap: "wrap", gap: 12 }}>
            <div className="b-eyebrow">Lifetime cost</div>
            <div style={{ display: "flex", gap: 18, fontSize: 12 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: "var(--ink)" }}></span>Principal</span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}><span style={{ width: 10, height: 10, borderRadius: 2, background: "var(--gold-deep)" }}></span>Interest</span>
            </div>
          </div>
          <TCABar label={"Scenario A · " + aYears + "-yr @ " + aRate.toFixed(3) + "%"} accent="var(--ink-soft)" principal={A.principal} interest={A.totalInterest} scaleMax={scaleMax} />
          <TCABar label={"Scenario B · " + bYears + "-yr @ " + bRate.toFixed(3) + "%"} accent="var(--gold-deep)" principal={B.principal} interest={B.totalInterest} scaleMax={scaleMax} />
        </div>

        {/* disclaimer */}
        <p className="b-body" style={{ fontSize: 11.5, color: "var(--ink-mute)", marginTop: 22, lineHeight: 1.6, maxWidth: 760 }}>
          Illustrative estimate only — not a rate quote, pre-qualification, or commitment to lend. Figures show principal &amp; interest
          and exclude taxes, insurance, HOA, PMI, and points. Actual rates and costs depend on credit, property, and market conditions
          and are subject to change. <a href="/contact" style={{ color: "var(--gold-deep)", fontWeight: 600 }}>Talk to us</a> for a personalized Total Cost Analysis.
        </p>
      </div>
    </section>
  );
}

function TotalCostAnalysis() {
  return (
    <div className="b-page">
      <BoldNav active="Resources" />
      <TotalCostCore />
      <BoldFooter />
    </div>
  );
}

function TotalCostAnalysisMobile() {
  return (
    <div className="b-page">
      <MobHeader />
      <TotalCostCore />
      <MobFooter />
    </div>
  );
}

Object.assign(window, { TotalCostCore, TotalCostAnalysis, TotalCostAnalysisMobile, tcaCompute });
