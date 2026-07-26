/* ============================================================
   SAFE direction — trust-first, clean, conventional layout
   Pages: Home (desktop+mobile), Features, About, Contact, Dashboard
   ============================================================ */
const { useState, useMemo } = React;

/* ----------------------------- shared bits ----------------------------- */
function SafeNav({ active = "Home" }) {
  return (
    <header className="s-nav">
      <a href="#" className="s-nav-mark">
        <span className="s-nav-mark-dot"></span>
        <span>GEM Home Team</span>
        <span style={{ fontSize: 11, color: "var(--ink-mute)", marginLeft: 4, fontFamily: "var(--font-mono)" }}>· NEO</span>
      </a>
      <nav className="s-nav-links">
        {NAV.map(n => (
          <a key={n.label} href={n.href} className="s-nav-link"
             style={ active === n.label ? { color: "var(--ink)", fontWeight: 500 } : {}}>{n.label}</a>
        ))}
      </nav>
      <div className="row gap-3" style={{ alignItems: "center" }}>
        <a href="#" className="s-btn s-btn-ghost" style={{ fontSize: 13 }}>(858) 876-2506</a>
        <a href="#" className="s-btn s-btn-primary">Apply now →</a>
      </div>
    </header>
  );
}

function SafeFooter() {
  return (
    <footer style={{ background: "var(--bg-deep)", color: "#D9DEE6", padding: "64px 0 32px" }}>
      <div className="s-container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
          <div>
            <div className="row gap-3" style={{ alignItems: "center", marginBottom: 18 }}>
              <span style={{ width:22, height:22, background:"#fff", transform:"rotate(45deg)", position:"relative" }}>
                <span style={{ position:"absolute", inset:5, background:"var(--gold)" }}></span>
              </span>
              <span style={{ color: "#fff", fontWeight: 600 }}>GEM Home Team</span>
            </div>
            <p style={{ fontSize: 14, color: "#9BA8BD", lineHeight: 1.6, maxWidth: 320 }}>
              Mortgage guidance, real estate strategy, and a relationship that doesn't end at closing.
              San Diego, CA · NMLS #972639.
            </p>
            <div className="row gap-3" style={{ marginTop: 22 }}>
              {["IG","FB","YT","LI"].map(s => (
                <span key={s} style={{ width:32, height:32, border:"1px solid #2A4163", display:"grid", placeItems:"center", fontSize:11, fontFamily:"var(--font-mono)", color:"#9BA8BD" }}>{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#6B7B95", marginBottom: 14, letterSpacing: ".1em", fontFamily:"var(--font-mono)" }}>RESOURCES</div>
            {["Mortgage Calculator","HELOC","First-Time Buyers","Refinance","Investor Loans"].map(x => (
              <a key={x} href="#" style={{ display:"block", fontSize:14, color:"#D9DEE6", padding:"5px 0" }}>{x}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#6B7B95", marginBottom: 14, letterSpacing: ".1em", fontFamily:"var(--font-mono)" }}>COMPANY</div>
            {["About Megan","The Team","Reviews","Press","Careers"].map(x => (
              <a key={x} href="#" style={{ display:"block", fontSize:14, color:"#D9DEE6", padding:"5px 0" }}>{x}</a>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 12, color: "#6B7B95", marginBottom: 14, letterSpacing: ".1em", fontFamily:"var(--font-mono)" }}>CONTACT</div>
            <div style={{ fontSize: 14, lineHeight: 1.7, color: "#D9DEE6" }}>
              (858) 876-2506<br/>
              hello@gemhometeam.com<br/>
              <br/>
              10089 Willow Creek Rd<br/>
              Suite 200, Office 294<br/>
              San Diego, CA 92131
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid #1F3A5C", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 12, color: "#6B7B95", fontFamily:"var(--font-mono)" }}>
          <span>© 2026 GEM Home Team · NMLS #972639 · Equal Housing Lender</span>
          <span>Powered by NEO Home Loans</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- Mortgage calculator ----------------------------- */
function SafeCalculator() {
  const [price, setPrice] = useState(965000);
  const [down, setDown] = useState(20);
  const [rate, setRate] = useState(6.375);
  const [years, setYears] = useState(30);

  const downAmt = price * down / 100;
  const principal = price - downAmt;
  const monthly = useMemo(() => monthlyPayment(principal, rate, years), [principal, rate, years]);
  const tax = price * 0.0073 / 12;
  const ins = 120;
  const total = monthly + tax + ins;
  const usd = (n) => "$" + Math.round(n).toLocaleString();

  return (
    <div className="s-card-flat" style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 40, padding: 40 }}>
      <div>
        <div className="s-eyebrow" style={{ marginBottom: 14 }}>Quick estimate</div>
        <h3 className="s-h3" style={{ marginBottom: 6, fontSize: 28 }}>What might my payment look like?</h3>
        <p className="s-body" style={{ marginBottom: 24 }}>Real numbers, not generic ranges. Adjust below — we'll show San Diego county taxes and average insurance baked in.</p>

        <CalcSlider label="Home price" value={price} min={400000} max={2500000} step={5000} format={usd} onChange={setPrice}/>
        <CalcSlider label="Down payment" value={down} min={3} max={50} step={1} format={v => v + "%"} onChange={setDown} sub={usd(downAmt)}/>
        <CalcSlider label="Rate (APR)" value={rate} min={5} max={8} step={0.125} format={v => v.toFixed(3) + "%"} onChange={setRate}/>
        <div style={{ display:"flex", gap: 8, marginTop: 14 }}>
          {[15, 20, 30].map(y => (
            <button key={y} onClick={() => setYears(y)}
              style={{ flex: 1, padding: "10px 12px", border: years===y ? "1px solid var(--ink)" : "1px solid var(--line-strong)",
                       background: years===y ? "var(--ink)" : "transparent", color: years===y ? "var(--bg)" : "var(--ink)",
                       borderRadius: 6, fontSize: 13 }}>{y}-year fixed</button>
          ))}
        </div>
      </div>
      <div style={{ background: "var(--ink)", color: "var(--bg)", borderRadius: 12, padding: 36, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          <div className="s-eyebrow" style={{ color: "var(--gold-soft)", marginBottom: 12 }}>Estimated monthly</div>
          <div style={{ fontSize: 64, letterSpacing: "-0.03em", fontWeight: 500, lineHeight: 1 }}>{usd(total)}</div>
          <div style={{ marginTop: 6, fontSize: 13, color: "#A8B6CC" }}>Principal · Interest · Tax · Insurance</div>
        </div>
        <div style={{ marginTop: 28, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, fontSize: 14 }}>
          <CalcLine label="Loan amount" v={usd(principal)} />
          <CalcLine label="Principal + Interest" v={usd(monthly)} />
          <CalcLine label="Estimated tax" v={usd(tax)} />
          <CalcLine label="Home insurance" v={usd(ins)} />
        </div>
        <div style={{ marginTop: 28, display:"flex", gap: 10 }}>
          <a href="#" className="s-btn" style={{ background: "var(--gold)", color: "var(--ink)", fontWeight: 500 }}>Get a personalized rate →</a>
          <a href="#" className="s-btn" style={{ color: "var(--bg)", borderBottom: "1px solid var(--gold-soft)", borderRadius: 0 }}>Compare loan types</a>
        </div>
      </div>
    </div>
  );
}

function CalcSlider({ label, value, min, max, step, format, onChange, sub }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
        <span className="s-label" style={{ marginBottom: 0 }}>{label}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 15, color: "var(--ink)" }}>{format(value)} {sub && <span style={{color:"var(--ink-mute)", fontSize:12}}>· {sub}</span>}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))}
        style={{ width: "100%", accentColor: "var(--ink)", display: "block" }} />
    </div>
  );
}
function CalcLine({ label, v }) {
  return (
    <div>
      <div style={{ color: "#A8B6CC", fontSize: 12, letterSpacing: 0.5 }}>{label}</div>
      <div style={{ color: "#fff", fontSize: 17, marginTop: 2, fontFamily: "var(--font-mono)", letterSpacing: "-0.01em" }}>{v}</div>
    </div>
  );
}

/* ============================ HOME — DESKTOP ============================ */
function SafeHome() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <div className="s-page" data-screen-label="Safe · Home (Desktop)">
      <SafeNav active="Home" />

      {/* HERO */}
      <section style={{ padding: "100px 0 80px" }}>
        <div className="s-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 64, alignItems: "center" }}>
            <div>
              <div className="row gap-3" style={{ alignItems:"center", marginBottom: 28 }}>
                <span className="s-tag">📍 San Diego, CA</span>
                <span className="s-tag">⭐ 4.97 · 412 reviews</span>
              </div>
              <h1 className="s-h1" style={{ marginBottom: 24 }}>
                Your mortgage,<br/>
                <span style={{ color: "var(--gold)", fontStyle: "italic" }}>actually managed</span>{" "}
                for the next 30 years.
              </h1>
              <p className="s-lede" style={{ marginBottom: 32, maxWidth: 540 }}>
                Most lenders disappear after closing. We don't. The GEM Home Team builds a mortgage strategy
                that follows your life — annual reviews, rate-drop alerts, equity moves when they make sense.
              </p>
              <div className="row gap-3" style={{ marginBottom: 40 }}>
                <a href="#" className="s-btn s-btn-primary" style={{ padding: "14px 22px", fontSize: 15 }}>Start your application →</a>
                <a href="#" className="s-btn s-btn-secondary" style={{ padding: "14px 22px", fontSize: 15 }}>Book a 20-min call</a>
              </div>
              <div className="row gap-8" style={{ paddingTop: 28, borderTop: "1px solid var(--line)" }}>
                <TrustBit label="Median close" v="21 days" />
                <TrustBit label="Saved vs. bank" v="$11,400" />
                <TrustBit label="Repeat clients" v="68%" />
              </div>
            </div>
            <div style={{ position: "relative", height: 540 }}>
              <div style={{ position:"absolute", inset:0, background:"var(--bg-2)", border:"1px solid var(--line)", borderRadius: 18 }} />
              <div style={{ position:"absolute", top: 36, left: 36, color: "var(--ink)" }}>
                <HouseIllo size={200} />
              </div>
              <div style={{ position:"absolute", bottom: 90, right: 56, color: "var(--ink)" }}>
                <GemIllo size={170} />
              </div>
              <div style={{ position:"absolute", bottom: 30, left: 36, padding: 14, background:"var(--bg)", border:"1px solid var(--line)", borderRadius: 10, width: 280 }}>
                <div className="s-eyebrow" style={{ color: "var(--good)" }}>● LIVE RATE · MAY 15</div>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginTop: 6 }}>
                  <span style={{ fontSize: 28, fontWeight: 500, letterSpacing:"-0.02em" }}>6.375%</span>
                  <span style={{ fontSize: 12, color: "var(--ink-mute)" }}>30y conventional · 20% down</span>
                </div>
              </div>
              <div style={{ position:"absolute", top: 36, right: 36, padding: "8px 12px", background:"var(--gold)", color:"var(--ink)", fontSize:11, fontFamily:"var(--font-mono)", letterSpacing:".12em" }}>
                NMLS #972639
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "40px 0" }}>
        <div className="s-container">
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap: 32 }}>
            {STATS.map(s => (
              <div key={s.label} style={{ borderLeft:"2px solid var(--gold)", paddingLeft: 20 }}>
                <div style={{ fontSize: 36, fontWeight: 500, letterSpacing:"-0.02em" }}>{s.num}</div>
                <div className="s-body" style={{ marginTop: 4, fontSize: 13 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ padding: "100px 0" }}>
        <div className="s-container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"end", marginBottom: 36 }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 12 }}>The Numbers</div>
              <h2 className="s-h2">Run the math, not the marketing.</h2>
            </div>
            <a href="#" className="s-btn s-btn-secondary">Full calculator suite →</a>
          </div>
          <SafeCalculator />
        </div>
      </section>

      {/* EXPERIENCE / SERVICES */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)" }}>
        <div className="s-container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="s-eyebrow" style={{ marginBottom: 12 }}>The NEO Experience</div>
            <h2 className="s-h2" style={{ marginBottom: 18 }}>Six things your last lender never offered.</h2>
            <p className="s-lede">The closing is the start, not the finish. Here's what shows up in your inbox after.</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 20 }}>
            {SERVICES.map(s => (
              <div key={s.n} className="s-card" style={{ padding: 32 }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"start", marginBottom: 24 }}>
                  <span className="mono" style={{ fontSize: 12, color: "var(--gold)", letterSpacing: ".15em" }}>{s.n}</span>
                  <div style={{ color: "var(--ink)" }}>
                    {s.illo === "chart" && <ChartIllo size={70} />}
                    {s.illo === "key" && <KeyIllo size={70} />}
                    {s.illo === "doc" && <DocIllo size={60} />}
                    {s.illo === "wave" && <WaveIllo width={90} height={40} />}
                    {s.illo === "coins" && <CoinsIllo size={70} />}
                    {s.illo === "house" && <HouseIllo size={70} />}
                  </div>
                </div>
                <h3 className="s-h3" style={{ marginBottom: 10, fontSize: 21 }}>{s.title}</h3>
                <p className="s-body" style={{ fontSize: 14 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "100px 0" }}>
        <div className="s-container">
          <div style={{ maxWidth: 720, marginBottom: 56 }}>
            <div className="s-eyebrow" style={{ marginBottom: 12 }}>Our Process</div>
            <h2 className="s-h2">Four steps, no theater.</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap: 0, position: "relative" }}>
            <div style={{ position:"absolute", top: 24, left: "12%", right: "12%", height: 1, background: "var(--line-strong)" }}></div>
            {PROCESS.map((p, i) => (
              <div key={p.n} style={{ padding: "0 16px", position:"relative" }}>
                <div style={{ width: 48, height: 48, borderRadius: 24, background:"var(--bg)", border:"1px solid var(--ink)", display:"grid", placeItems:"center", marginBottom: 24, position:"relative", color: "var(--ink)", fontFamily:"var(--font-mono)", fontSize: 14 }}>{p.n}</div>
                <h3 className="s-h3" style={{ marginBottom: 8, fontSize: 22 }}>{p.title}</h3>
                <p className="s-body" style={{ fontSize: 14, maxWidth: 240 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGAN BIO */}
      <section style={{ padding: "100px 0", background: "var(--gold-tint)" }}>
        <div className="s-container">
          <div style={{ display:"grid", gridTemplateColumns:"0.9fr 1.1fr", gap: 80, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <PhotoSlot width={420} height={520} label="MEGAN HEADSHOT" accent="var(--ink)" />
              <div style={{ position:"absolute", bottom: -20, right: -20, padding: 18, background:"var(--ink)", color:"var(--bg)", maxWidth: 220 }}>
                <div style={{ fontSize: 12, color:"var(--gold-soft)", fontFamily:"var(--font-mono)", letterSpacing:".12em" }}>SINCE 2017</div>
                <div style={{ fontSize: 28, marginTop: 4, fontWeight: 500, letterSpacing: "-0.02em" }}>$420M+</div>
                <div style={{ fontSize: 12, color:"#A8B6CC" }}>guided to closing</div>
              </div>
            </div>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 12 }}>Meet Megan</div>
              <h2 className="s-h2" style={{ marginBottom: 24 }}>I learned wealth-building from a $20 Fidelity statement in a Christmas stocking.</h2>
              <p className="s-body" style={{ fontSize: 17, marginBottom: 18, color: "var(--ink-2)" }}>
                My grandfather went from washing dishes to owning a shopping center. He never bought my cousins or me presents — instead, every Christmas we got a stock statement. When he passed, those statements were worth $20,000.
              </p>
              <p className="s-body" style={{ fontSize: 17, marginBottom: 32, color: "var(--ink-2)" }}>
                At 24 I used that to buy my first house. Eight years later, I own five properties. I built the GEM Home Team to give other families the same head start, even without the inheritance.
              </p>
              <div className="row gap-3">
                <a href="#" className="s-btn s-btn-primary">Read Megan's full story →</a>
                <a href="#" className="s-btn s-btn-ghost">Watch a 2-min intro</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: "100px 0" }}>
        <div className="s-container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"end", marginBottom: 48 }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 12 }}>Client voices</div>
              <h2 className="s-h2">The proof is in the closings.</h2>
            </div>
            <a href="#" className="s-btn s-btn-secondary">All 412 reviews →</a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="s-card-flat" style={{ padding: 32, display:"flex", flexDirection:"column", gap: 24, minHeight: 280 }}>
                <div style={{ display:"flex", gap: 2 }}>
                  {Array.from({length: 5}).map((_,j) => <span key={j} style={{ color: "var(--gold)" }}>★</span>)}
                </div>
                <p style={{ fontSize: 18, lineHeight: 1.45, color: "var(--ink)", letterSpacing: "-0.005em", flex: 1 }}>
                  "{t.quote}"
                </p>
                <div style={{ borderTop: "1px solid var(--line)", paddingTop: 16 }}>
                  <div style={{ fontWeight: 500, fontSize: 14 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>{t.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)" }}>
        <div className="s-container">
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"end", marginBottom: 36 }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 12 }}>Resources</div>
              <h2 className="s-h2">Read before you sign.</h2>
            </div>
            <a href="#" className="s-btn s-btn-secondary">All resources →</a>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap: 20 }}>
            {RESOURCES.map((r,i) => (
              <a key={i} href="#" className="s-card" style={{ padding: 0, overflow: "hidden", display: "block" }}>
                <div style={{ height: 180, background: i===0 ? "var(--ink)" : i===1 ? "var(--gold-tint)" : "var(--gold)", display:"grid", placeItems:"center", color: i===1 ? "var(--ink)" : "var(--bg)"}}>
                  {i===0 && <DocIllo size={100} accent="var(--gold)"/>}
                  {i===1 && <ChartIllo size={120} accent="var(--ink)"/>}
                  {i===2 && <CoinsIllo size={110} accent="var(--ink)"/>}
                </div>
                <div style={{ padding: 24 }}>
                  <div className="s-eyebrow" style={{ marginBottom: 10 }}>{r.kind} · {r.read}</div>
                  <h3 className="s-h3" style={{ fontSize: 19 }}>{r.title}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "100px 0" }}>
        <div className="s-container-narrow">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="s-eyebrow" style={{ marginBottom: 12 }}>Questions</div>
            <h2 className="s-h2">Things people actually ask us.</h2>
          </div>
          <div>
            {FAQS.map((f, i) => (
              <div key={i} style={{ borderTop: i===0 ? "1px solid var(--line)" : "none", borderBottom: "1px solid var(--line)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  style={{ width: "100%", padding: "24px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 19, fontWeight: 500 }}>{f.q}</span>
                  <span style={{ width: 32, height: 32, borderRadius: 16, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", fontSize: 18, transition: "transform .2s", transform: openFaq === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ paddingBottom: 24, maxWidth: 640 }}>
                    <p className="s-body" style={{ fontSize: 16 }}>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "100px 0", background: "var(--ink)", color: "var(--bg)" }}>
        <div className="s-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: 56, letterSpacing: "-0.025em", fontWeight: 500, lineHeight: 1.05, marginBottom: 20, color: "var(--bg)" }}>
            Buying, refinancing,<br/>or just thinking about it?
          </h2>
          <p style={{ color: "#A8B6CC", fontSize: 19, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            A 20-minute call is free. So is the second call. So is the year-three rate check.
          </p>
          <div className="row gap-3" style={{ justifyContent: "center" }}>
            <a href="#" className="s-btn s-btn-gold" style={{ padding: "16px 26px", fontSize: 15 }}>Schedule a call →</a>
            <a href="#" className="s-btn" style={{ padding: "16px 26px", fontSize: 15, color: "var(--bg)", border: "1px solid #2A4163" }}>Apply now</a>
          </div>
        </div>
      </section>

      <SafeFooter />
    </div>
  );
}

function TrustBit({ label, v }) {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>{v}</div>
      <div className="s-body" style={{ fontSize: 13 }}>{label}</div>
    </div>
  );
}

Object.assign(window, { SafeNav, SafeFooter, SafeCalculator, SafeHome, TrustBit });
