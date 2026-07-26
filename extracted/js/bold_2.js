/* ============================================================
   Interactive screens for the Bold Home page:
   - NEO Experience App phone mockup (tabbable)
   - Homebot widget (interactive home value chart with hover)
   - Video CTA card
   ============================================================ */

const { useState: useStateInt, useMemo: useMemoInt } = React;

/* ============================ NEO App Mockup ============================ */
function NeoAppSection() {
  const [tab, setTab] = useStateInt("loans");

  return (
    <section className="b-section-warm" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div className="b-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Phone mockup */}
          <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
            {/* glow */}
            <div style={{ position: "absolute", width: 360, height: 600, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(91,194,231,0.3) 0%, rgba(91,194,231,0) 70%)",
              filter: "blur(40px)" }}></div>
            <div style={{
              position: "relative", width: 320, height: 640,
              borderRadius: 44, background: "#0A0A0A", padding: 12,
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,0,0,0.05)"
            }}>
              {/* notch */}
              <div style={{ position: "absolute", top: 16, left: "50%", transform: "translateX(-50%)",
                width: 110, height: 28, background: "#0A0A0A", borderRadius: 14, zIndex: 5 }}></div>
              {/* screen */}
              <div style={{ width: "100%", height: "100%", borderRadius: 32, background: "#fff", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                {/* status */}
                <div style={{ padding: "16px 20px 8px", display: "flex", justifyContent: "space-between", fontSize: 12, fontWeight: 600 }}>
                  <span>9:41</span>
                  <span>▮▮▮ 􀙇 􀛨</span>
                </div>
                {/* header */}
                <div style={{ padding: "16px 20px", borderBottom: "1px solid #EEF1F3", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: 11, color: "#8FA0AE", letterSpacing: ".06em" }}>WELCOME BACK</div>
                    <div style={{ fontSize: 17, fontWeight: 600, marginTop: 2 }}>Jordan Rivera</div>
                  </div>
                  <div style={{ width: 32, height: 32, borderRadius: 16, background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-deep) 100%)", display: "grid", placeItems: "center", color: "#fff", fontSize: 12, fontWeight: 600 }}>JR</div>
                </div>

                {/* tab content */}
                <div style={{ flex: 1, overflow: "hidden", position: "relative" }}>
                  {tab === "loans" && <AppLoans />}
                  {tab === "wealth" && <AppWealth />}
                  {tab === "concierge" && <AppConcierge />}
                </div>

                {/* tab bar */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid #EEF1F3", padding: "8px 0" }}>
                  {[
                    ["loans", "Loan", "🏠"],
                    ["wealth", "Wealth", "📈"],
                    ["concierge", "Concierge", "✦"],
                  ].map(([k, l, icon]) => (
                    <button key={k} onClick={() => setTab(k)}
                      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "4px 0",
                               color: tab === k ? "var(--gold-deep)" : "#8FA0AE", fontWeight: tab === k ? 600 : 500, fontSize: 11 }}>
                      <span style={{ fontSize: 16, opacity: tab === k ? 1 : 0.6 }}>{icon}</span>
                      <span>{l}</span>
                    </button>
                  ))}
                </div>

                {/* home indicator */}
                <div style={{ display: "flex", justifyContent: "center", padding: "4px 0 8px" }}>
                  <div style={{ width: 120, height: 4, background: "#0A0A0A", borderRadius: 2 }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="b-eyebrow" style={{ marginBottom: 16, color: "var(--gold-deep)" }}>The NEO Experience App</div>
            <h2 className="b-h2" style={{ marginBottom: 24 }}>Your mortgage, your equity, your home — in one place.</h2>
            <p className="b-lede" style={{ marginBottom: 32, maxWidth: 480 }}>
              Track loan progress in real time. Monitor your home equity month over month. Tap our concierge bench for any home need — all from a single app.
            </p>
            <div className="col gap-3" style={{ marginBottom: 32 }}>
              {[
                ["loans", "Loan dashboard", "Live status, document uploads, messaging with your team"],
                ["wealth", "Wealth monitor", "Monthly equity reports + rate-drop refi alerts"],
                ["concierge", "Home concierge", "Vetted contractors, designers, and handymen on call"],
              ].map(([k, t, b]) => (
                <button key={k} onClick={() => setTab(k)}
                  style={{ display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 16, padding: "16px 20px",
                           border: tab === k ? "1px solid var(--gold)" : "1px solid var(--line)",
                           background: tab === k ? "var(--accent-tint)" : "var(--bg)",
                           borderRadius: 10, textAlign: "left", alignItems: "center", transition: "all .2s" }}>
                  <span style={{ width: 8, height: 8, borderRadius: 4, background: tab === k ? "var(--gold-deep)" : "var(--line-2)" }}></span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{b}</div>
                  </div>
                  <span style={{ fontSize: 18, color: tab === k ? "var(--gold-deep)" : "var(--ink-mute)" }}>→</span>
                </button>
              ))}
            </div>
            <a href="#" className="b-btn b-btn-primary" style={{ padding: "13px 22px" }}>Get the app →</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppLoans() {
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontSize: 11, color: "#8FA0AE", letterSpacing: ".05em" }}>14 ENCINITAS COURT</div>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.01em", marginTop: 2 }}>Underwriting</div>
        <div style={{ fontSize: 12, color: "#5C5C5C", marginTop: 4 }}>Step 4 of 6 · Closes Jun 8</div>
        <div style={{ height: 6, background: "#EEF1F3", borderRadius: 3, marginTop: 12 }}>
          <div style={{ width: "62%", height: "100%", background: "var(--gold-deep)", borderRadius: 3 }}></div>
        </div>
      </div>
      <div style={{ padding: 14, background: "var(--accent-tint)", borderRadius: 10, border: "1px solid var(--gold)" }}>
        <div style={{ fontSize: 11, color: "var(--gold-deep)", fontWeight: 600, letterSpacing: ".05em" }}>3 ACTIONS</div>
        <div style={{ fontSize: 13, fontWeight: 600, marginTop: 4, color: "var(--ink)" }}>Outstanding conditions</div>
        <div style={{ marginTop: 8 }}>
          {["Updated bank statement", "Explanation letter", "Insurance binder"].map(t => (
            <div key={t} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", fontSize: 12, color: "var(--ink-2)", borderTop: "1px solid rgba(46,182,222,0.2)" }}>
              <span>{t}</span><span style={{ color: "var(--gold-deep)" }}>›</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div style={{ padding: 12, background: "#F7F9FB", borderRadius: 8 }}>
          <div style={{ fontSize: 10, color: "#8FA0AE" }}>MONTHLY</div>
          <div className="tabular" style={{ fontSize: 17, fontWeight: 600, marginTop: 2 }}>$5,432</div>
        </div>
        <div style={{ padding: 12, background: "#F7F9FB", borderRadius: 8 }}>
          <div style={{ fontSize: 10, color: "#8FA0AE" }}>RATE</div>
          <div className="tabular" style={{ fontSize: 17, fontWeight: 600, marginTop: 2 }}>6.250%</div>
        </div>
      </div>
    </div>
  );
}

function AppWealth() {
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <div style={{ fontSize: 11, color: "#8FA0AE", letterSpacing: ".05em" }}>HOME EQUITY · MAY</div>
        <div className="tabular" style={{ fontSize: 28, fontWeight: 600, letterSpacing: "-0.02em", marginTop: 2, color: "var(--ink)" }}>$284,500</div>
        <div style={{ fontSize: 12, color: "#34C77B", marginTop: 4, fontWeight: 600 }}>↑ $4,200 this month</div>
      </div>
      {/* mini chart */}
      <div style={{ height: 120, background: "#F7F9FB", borderRadius: 10, padding: 12, position: "relative" }}>
        <svg width="100%" height="100%" viewBox="0 0 260 96" preserveAspectRatio="none">
          <defs>
            <linearGradient id="appG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5BC2E7" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#5BC2E7" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0 80 L20 75 L40 70 L60 65 L80 62 L100 55 L120 50 L140 42 L160 38 L180 30 L200 28 L220 22 L240 18 L260 12 L260 96 L0 96 Z" fill="url(#appG)" />
          <path d="M0 80 L20 75 L40 70 L60 65 L80 62 L100 55 L120 50 L140 42 L160 38 L180 30 L200 28 L220 22 L240 18 L260 12" stroke="#2EB6DE" strokeWidth="2" fill="none" />
        </svg>
      </div>
      <div style={{ padding: 14, background: "#FFF8E6", borderRadius: 10, border: "1px solid #F0D480" }}>
        <div style={{ fontSize: 11, color: "#9D7A00", fontWeight: 600, letterSpacing: ".05em" }}>⚡ RATE ALERT</div>
        <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.4 }}>30Y fixed is down 0.375% since you locked. Refi could save $214/mo.</div>
      </div>
    </div>
  );
}

function AppConcierge() {
  return (
    <div style={{ padding: "16px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div>
        <div style={{ fontSize: 11, color: "#8FA0AE", letterSpacing: ".05em" }}>BOOK A PRO</div>
        <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>Vetted, on-call</div>
      </div>
      {[
        ["🔧", "Handyman", "Same-day available"],
        ["🎨", "Interior designer", "From $250/hr"],
        ["🌿", "Landscaper", "Mon, Wed, Fri"],
        ["🔌", "Electrician", "Licensed · bonded"],
      ].map(([icon, t, s]) => (
        <div key={t} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", background: "#F7F9FB", borderRadius: 10 }}>
          <span style={{ fontSize: 20 }}>{icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
            <div style={{ fontSize: 11, color: "#8FA0AE" }}>{s}</div>
          </div>
          <button style={{ fontSize: 11, color: "var(--gold-deep)", fontWeight: 600 }}>BOOK ›</button>
        </div>
      ))}
    </div>
  );
}

/* ============================ Homebot Section ============================ */
function HomebotSection() {
  const months = ["Jul '25", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan '26", "Feb", "Mar", "Apr", "May"];
  const values = [892, 905, 911, 918, 924, 932, 941, 948, 956, 962, 972];
  const [hover, setHover] = useStateInt(values.length - 1);

  const cur = values[hover];
  const prev = values[0];
  const pct = ((cur - prev) / prev * 100).toFixed(1);

  return (
    <section style={{ padding: "120px 0" }}>
      <div className="b-container">
        <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 80, alignItems: "center" }}>
          {/* Copy */}
          <div>
            <div className="b-eyebrow" style={{ marginBottom: 16, color: "var(--gold-deep)" }}>Homebot · Live equity</div>
            <h2 className="b-h2" style={{ marginBottom: 24 }}>Unlock your home's financial potential.</h2>
            <p className="b-lede" style={{ marginBottom: 32, maxWidth: 480 }}>
              Our monthly Wealth Digest gives you an intuitive dashboard tailored to your home's value, your equity position, and the moves available to you — all updated in real time.
            </p>
            <div className="col gap-3" style={{ marginBottom: 32 }}>
              {[
                ["Live home value tracking", "Pulled from comparable sales in your zip"],
                ["Refi-when-it-makes-sense alerts", "We watch rates, you don't have to"],
                ["Equity moves & HELOC modeling", "See what your home can do next"],
              ].map(([t, b]) => (
                <div key={t} style={{ display: "grid", gridTemplateColumns: "20px 1fr", gap: 14, alignItems: "start" }}>
                  <span style={{ width: 18, height: 18, borderRadius: 9, background: "var(--gold)", color: "var(--ink-on-cyan)", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700, marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{b}</div>
                  </div>
                </div>
              ))}
            </div>
            <a href="#" className="b-btn b-btn-primary" style={{ padding: "13px 22px" }}>See your home's value →</a>
          </div>

          {/* Interactive widget */}
          <div className="b-card" style={{ padding: 32, position: "relative", overflow: "hidden" }}>
            {/* corner cyan accent */}
            <div style={{ position: "absolute", top: -100, right: -100, width: 300, height: 300, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(91,194,231,0.25) 0%, rgba(91,194,231,0) 70%)" }}></div>
            <div style={{ position: "relative" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 11, color: "var(--ink-soft)", letterSpacing: ".05em", fontWeight: 500 }}>YOUR HOME VALUE · {months[hover].toUpperCase()}</div>
                  <div className="tabular" style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--ink)", marginTop: 4 }}>
                    ${cur}<span style={{ fontSize: 24, color: "var(--ink-soft)" }}>K</span>
                  </div>
                  <div style={{ fontSize: 13, marginTop: 6, color: "#34C77B", fontWeight: 600 }}>↑ {pct}% in 11 months · +${cur - prev}K</div>
                </div>
                <div style={{ padding: "6px 12px", background: "var(--accent-tint)", borderRadius: 6, fontSize: 11, color: "var(--gold-deep)", fontWeight: 600 }}>
                  ● LIVE
                </div>
              </div>

              {/* chart */}
              <div style={{ position: "relative", height: 200, marginBottom: 16 }}>
                <svg width="100%" height="100%" viewBox="0 0 600 200" style={{ display: "block" }}>
                  <defs>
                    <linearGradient id="hbGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5BC2E7" stopOpacity="0.35"/>
                      <stop offset="100%" stopColor="#5BC2E7" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  {/* gridlines */}
                  {[0, 1, 2, 3].map(i => (
                    <line key={i} x1="0" y1={i * 50 + 10} x2="600" y2={i * 50 + 10} stroke="#EAEAEA" strokeWidth="1" strokeDasharray="3 4" />
                  ))}
                  {/* area */}
                  {(() => {
                    const min = Math.min(...values) - 10, max = Math.max(...values) + 5;
                    const xStep = 600 / (values.length - 1);
                    const yFor = v => 180 - ((v - min) / (max - min)) * 160 + 10;
                    const pts = values.map((v, i) => `${i * xStep} ${yFor(v)}`).join(" L ");
                    const area = `M 0 190 L ${pts} L 600 190 Z`;
                    const line = `M ${pts}`;
                    return <>
                      <path d={area} fill="url(#hbGrad)" />
                      <path d={line} stroke="#2EB6DE" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                      {values.map((v, i) => (
                        <g key={i}>
                          <circle cx={i * xStep} cy={yFor(v)} r={i === hover ? 7 : 4}
                            fill={i === hover ? "#2EB6DE" : "#fff"}
                            stroke="#2EB6DE" strokeWidth={i === hover ? 3 : 2}
                            style={{ cursor: "pointer", transition: "all .15s" }}
                            onMouseEnter={() => setHover(i)} />
                          {/* invisible larger hit area */}
                          <circle cx={i * xStep} cy={yFor(v)} r={20} fill="transparent"
                            style={{ cursor: "pointer" }}
                            onMouseEnter={() => setHover(i)} />
                        </g>
                      ))}
                    </>;
                  })()}
                </svg>
              </div>

              {/* months axis */}
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${months.length}, 1fr)`, fontSize: 10, color: "var(--ink-mute)", textAlign: "center" }}>
                {months.map((m, i) => (
                  <span key={m} style={{ color: i === hover ? "var(--gold-deep)" : "var(--ink-mute)", fontWeight: i === hover ? 600 : 400 }}>
                    {m.split(" ")[0]}
                  </span>
                ))}
              </div>

              {/* action row */}
              <div style={{ marginTop: 24, padding: 16, background: "var(--accent-tint)", borderRadius: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: "var(--gold-deep)" }}>⚡ HELOC available</div>
                  <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 2 }}>You could access up to ${Math.round(cur * 0.35)}K at 7.25% APR</div>
                </div>
                <button style={{ fontSize: 12, color: "var(--ink)", fontWeight: 600, background: "var(--gold)", padding: "8px 14px", borderRadius: 6 }}>Model it ›</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================ Story Video Section ============================ */
function StoryVideoSection() {
  return (
    <section style={{ padding: "0", background: "var(--ink)", color: "#fff" }}>
      <div style={{ position: "relative", height: 560, overflow: "hidden" }}>
        <video autoPlay muted loop playsInline
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.5 }}>
          <source src="/assets/bento.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(10,10,10,0.4) 65%, rgba(10,10,10,0.7) 100%)" }}></div>
        <div className="b-container" style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="b-eyebrow" style={{ color: "var(--gold)", marginBottom: 16 }}>Our story · 3 min</div>
          <h2 style={{ fontSize: 60, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.04, color: "#fff", marginBottom: 28, maxWidth: 720 }}>
            How we've helped 1,800 San Diego families build wealth through real estate.
          </h2>
          <div>
            <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 14, padding: "14px 22px",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: 999, color: "#fff", backdropFilter: "blur(8px)", fontSize: 15, fontWeight: 500 }}>
              <span style={{ width: 36, height: 36, borderRadius: 18, background: "var(--gold)", color: "var(--ink-on-cyan)", display: "grid", placeItems: "center", fontSize: 14, paddingLeft: 2 }}>▶</span>
              <span>Play full story</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { NeoAppSection, HomebotSection, StoryVideoSection });
