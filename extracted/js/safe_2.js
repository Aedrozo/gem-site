/* ============================================================
   SAFE direction — Mobile Home + Features/About/Contact/Dashboard
   ============================================================ */
const { useState: useStateS2 } = React;

/* ==================== SAFE HOME — MOBILE ==================== */
function SafeHomeMobile() {
  const [open, setOpen] = useStateS2(false);
  const [oFaq, setOFaq] = useStateS2(0);
  return (
    <div className="s-page" data-screen-label="Safe · Home (Mobile)" style={{ fontSize: 14 }}>
      <header style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 20px", borderBottom:"1px solid var(--line)", background:"var(--bg)" }}>
        <div className="s-nav-mark" style={{ fontSize: 15 }}>
          <span className="s-nav-mark-dot"></span>
          <span>GEM Home Team</span>
        </div>
        <button onClick={() => setOpen(!open)} style={{ display:"flex", flexDirection:"column", gap: 4 }}>
          <span style={{ width: 22, height: 1.5, background: "var(--ink)" }}></span>
          <span style={{ width: 22, height: 1.5, background: "var(--ink)" }}></span>
        </button>
      </header>
      {open && (
        <nav style={{ padding: "20px", background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}>
          {NAV.map(n => <a key={n.label} href={n.href} style={{ display:"block", padding:"10px 0", borderBottom:"1px solid var(--line)", fontSize: 16 }}>{n.label}</a>)}
          <a href="#" className="s-btn s-btn-primary" style={{ display:"block", textAlign:"center", marginTop: 16 }}>Apply now →</a>
        </nav>
      )}

      {/* HERO */}
      <section style={{ padding: "48px 20px 32px" }}>
        <div className="row gap-2" style={{ marginBottom: 24 }}>
          <span className="s-tag" style={{ fontSize: 10 }}>📍 SAN DIEGO</span>
          <span className="s-tag" style={{ fontSize: 10 }}>⭐ 4.97</span>
        </div>
        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.028em", lineHeight: 1.02, marginBottom: 20 }}>
          Your mortgage, <span style={{ color: "var(--gold)", fontStyle: "italic" }}>actually managed</span> for the next 30 years.
        </h1>
        <p className="s-lede" style={{ fontSize: 16, marginBottom: 24 }}>
          Most lenders disappear after closing. We don't. Annual reviews, rate-drop alerts, equity moves when they make sense.
        </p>
        <div className="col gap-3">
          <a href="#" className="s-btn s-btn-primary" style={{ justifyContent:"center", padding:"14px" }}>Start application →</a>
          <a href="#" className="s-btn s-btn-secondary" style={{ justifyContent:"center", padding:"14px" }}>Book 20-min call</a>
        </div>
        <div style={{ marginTop: 32, padding: 18, background: "var(--bg-2)", border: "1px solid var(--line)", borderRadius: 10 }}>
          <div className="s-eyebrow" style={{ color: "var(--good)", fontSize: 10 }}>● LIVE RATE · MAY 15</div>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"baseline", marginTop: 6 }}>
            <span style={{ fontSize: 28, fontWeight: 500, letterSpacing:"-0.02em" }}>6.375%</span>
            <span style={{ fontSize: 11, color: "var(--ink-mute)" }}>30y · 20% down</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)", padding: "24px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {STATS.map(s => (
            <div key={s.label} style={{ borderLeft: "2px solid var(--gold)", paddingLeft: 12 }}>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing:"-0.02em" }}>{s.num}</div>
              <div className="s-body" style={{ fontSize: 11, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATOR — compact */}
      <section style={{ padding: "48px 20px" }}>
        <div className="s-eyebrow" style={{ marginBottom: 10 }}>The Numbers</div>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 24 }}>What might my payment look like?</h2>
        <MobileCalc />
      </section>

      {/* SERVICES */}
      <section style={{ padding: "48px 20px", background: "var(--bg-2)" }}>
        <div className="s-eyebrow" style={{ marginBottom: 10 }}>The NEO Experience</div>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 28 }}>Six things your last lender never offered.</h2>
        <div className="col gap-3">
          {SERVICES.map(s => (
            <div key={s.n} className="s-card" style={{ padding: 22 }}>
              <div className="row" style={{ justifyContent:"space-between", marginBottom: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--gold)", letterSpacing: ".15em" }}>{s.n}</span>
              </div>
              <h3 className="s-h3" style={{ fontSize: 18, marginBottom: 8 }}>{s.title}</h3>
              <p className="s-body" style={{ fontSize: 13 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ padding: "48px 20px" }}>
        <div className="s-eyebrow" style={{ marginBottom: 10 }}>Our Process</div>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 28 }}>Four steps, no theater.</h2>
        <div className="col gap-6">
          {PROCESS.map(p => (
            <div key={p.n} style={{ display:"grid", gridTemplateColumns:"40px 1fr", gap: 16, alignItems:"start" }}>
              <div style={{ width: 40, height: 40, borderRadius: 20, border: "1px solid var(--ink)", display: "grid", placeItems:"center", fontFamily:"var(--font-mono)", fontSize: 12 }}>{p.n}</div>
              <div>
                <h3 className="s-h3" style={{ fontSize: 18, marginBottom: 4 }}>{p.title}</h3>
                <p className="s-body" style={{ fontSize: 13 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MEGAN */}
      <section style={{ padding: "48px 20px", background: "var(--gold-tint)" }}>
        <PhotoSlot width={350} height={400} label="MEGAN" accent="var(--ink)" />
        <div className="s-eyebrow" style={{ marginTop: 28, marginBottom: 10 }}>Meet Megan</div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 16, lineHeight: 1.1 }}>
          I learned wealth-building from a $20 Fidelity statement.
        </h2>
        <p className="s-body" style={{ fontSize: 15, marginBottom: 12, color: "var(--ink-2)" }}>
          My grandfather went from washing dishes to owning a shopping center. He never bought presents — he gave us stock statements. When he passed, mine was worth $20,000.
        </p>
        <p className="s-body" style={{ fontSize: 15, marginBottom: 24, color: "var(--ink-2)" }}>
          At 24 I bought my first house. Eight years later, five properties. I built GEM to give other families the same head start.
        </p>
        <a href="#" className="s-btn s-btn-primary">Megan's full story →</a>
      </section>

      {/* TESTIMONIAL — one feature */}
      <section style={{ padding: "48px 20px" }}>
        <div className="s-eyebrow" style={{ marginBottom: 10 }}>Client voices</div>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 28 }}>The proof is in the closings.</h2>
        <div className="s-card-flat" style={{ padding: 24 }}>
          <div style={{ display:"flex", gap: 2, marginBottom: 16 }}>{Array.from({length:5}).map((_,j)=><span key={j} style={{color:"var(--gold)"}}>★</span>)}</div>
          <p style={{ fontSize: 16, lineHeight: 1.45, marginBottom: 20 }}>"{TESTIMONIALS[0].quote}"</p>
          <div style={{ fontSize: 13, fontWeight: 500 }}>{TESTIMONIALS[0].name}</div>
          <div style={{ fontSize: 11, color: "var(--ink-soft)" }}>{TESTIMONIALS[0].detail}</div>
        </div>
        <a href="#" className="s-btn s-btn-ghost" style={{ marginTop: 16 }}>Read 412 reviews →</a>
      </section>

      {/* FAQ */}
      <section style={{ padding: "48px 20px", background: "var(--bg-2)" }}>
        <div className="s-eyebrow" style={{ marginBottom: 10 }}>Questions</div>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.022em", marginBottom: 28 }}>People ask us…</h2>
        <div>
          {FAQS.slice(0, 4).map((f, i) => (
            <div key={i} style={{ borderTop: i===0 ? "1px solid var(--line-strong)" : "none", borderBottom: "1px solid var(--line-strong)" }}>
              <button onClick={() => setOFaq(oFaq === i ? -1 : i)} style={{ width:"100%", padding: "18px 0", textAlign:"left", display:"flex", justifyContent:"space-between", alignItems:"center", gap: 12 }}>
                <span style={{ fontSize: 15, fontWeight: 500 }}>{f.q}</span>
                <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: 13, border: "1px solid var(--line-strong)", display: "grid", placeItems: "center", fontSize: 14, transition: "transform .2s", transform: oFaq === i ? "rotate(45deg)" : "none" }}>+</span>
              </button>
              {oFaq === i && <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.6, paddingBottom: 18 }}>{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 20px", background: "var(--ink)", color: "var(--bg)" }}>
        <h2 style={{ fontSize: 36, letterSpacing: "-0.025em", fontWeight: 500, lineHeight: 1.05, marginBottom: 16 }}>
          Buying, refinancing, or just thinking?
        </h2>
        <p style={{ color: "#A8B6CC", fontSize: 15, marginBottom: 24 }}>A 20-minute call is free.</p>
        <div className="col gap-3">
          <a href="#" className="s-btn s-btn-gold" style={{ justifyContent:"center", padding:"14px" }}>Schedule a call →</a>
          <a href="#" className="s-btn" style={{ justifyContent:"center", padding:"14px", color: "var(--bg)", border: "1px solid #2A4163" }}>Apply now</a>
        </div>
      </section>

      <footer style={{ padding: "32px 20px", background: "var(--bg-deep)", color: "#9BA8BD", fontSize: 12 }}>
        <div style={{ marginBottom: 16, color: "#fff" }}>GEM Home Team</div>
        <div style={{ marginBottom: 6 }}>(858) 567-2233</div>
        <div style={{ marginBottom: 16 }}>Team@GemHomeTeam.com</div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#6B7B95" }}>© 2026 · NMLS #972639 · Equal Housing Lender</div>
      </footer>
    </div>
  );
}

function MobileCalc() {
  const [price, setPrice] = useStateS2(965000);
  const [down, setDown] = useStateS2(20);
  const monthly = monthlyPayment(price * (1 - down/100), 6.375, 30) + price * 0.0073 / 12 + 120;
  return (
    <div className="s-card-flat" style={{ padding: 20 }}>
      <CalcSlider label="Home price" value={price} min={400000} max={2500000} step={5000} format={v => "$" + v.toLocaleString()} onChange={setPrice} />
      <CalcSlider label="Down %" value={down} min={3} max={50} step={1} format={v => v + "%"} onChange={setDown} sub={"$" + Math.round(price*down/100).toLocaleString()} />
      <div style={{ marginTop: 18, padding: 18, background: "var(--ink)", color: "var(--bg)", borderRadius: 8 }}>
        <div className="s-eyebrow" style={{ color: "var(--gold-soft)", fontSize: 10 }}>EST. MONTHLY · PITI</div>
        <div style={{ fontSize: 36, marginTop: 4, fontWeight: 500, letterSpacing: "-0.02em" }}>${Math.round(monthly).toLocaleString()}</div>
      </div>
    </div>
  );
}

/* ==================== SAFE FEATURES (The NEO Experience detail) ==================== */
function SafeFeatures() {
  return (
    <div className="s-page" data-screen-label="Safe · Features">
      <SafeNav active="The NEO Experience" />
      <section style={{ padding: "80px 0 56px" }}>
        <div className="s-container">
          <div className="s-eyebrow" style={{ marginBottom: 14 }}>The NEO Experience</div>
          <h1 className="s-h1" style={{ maxWidth: 880, marginBottom: 24 }}>
            Closing day is the start. What happens after is the actual product.
          </h1>
          <p className="s-lede" style={{ maxWidth: 700 }}>
            Six commitments we make to every client — built to keep your mortgage aligned with your life, not the day you signed.
          </p>
        </div>
      </section>
      <section style={{ padding: "32px 0 80px" }}>
        <div className="s-container">
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{ display:"grid", gridTemplateColumns: i % 2 === 0 ? "1fr 0.9fr" : "0.9fr 1fr", gap: 64, padding: "48px 0", borderTop: "1px solid var(--line)", alignItems: "center" }}>
              {i % 2 === 0 ? <>
                <div>
                  <div className="row gap-3" style={{ alignItems: "center", marginBottom: 16 }}>
                    <span className="mono" style={{ fontSize: 12, color: "var(--gold)", letterSpacing: ".15em" }}>{s.n}</span>
                    <span style={{ width: 40, height: 1, background: "var(--gold)" }}></span>
                  </div>
                  <h2 className="s-h2" style={{ fontSize: 40, marginBottom: 18 }}>{s.title}</h2>
                  <p className="s-lede" style={{ marginBottom: 24 }}>{s.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {["Included in The NEO Experience", "No additional cost — ever", "Available to clients for life"].map(x => (
                      <li key={x} style={{ display: "flex", gap: 12, padding: "8px 0", fontSize: 14, color: "var(--ink-2)" }}>
                        <span style={{ color: "var(--gold)" }}>✓</span>{x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ background:"var(--bg-2)", border:"1px solid var(--line)", borderRadius: 16, height: 360, display:"grid", placeItems:"center", color: "var(--ink)" }}>
                  {s.illo === "chart" && <ChartIllo size={200} />}
                  {s.illo === "key" && <KeyIllo size={200} />}
                  {s.illo === "doc" && <DocIllo size={180} />}
                  {s.illo === "wave" && <WaveIllo width={260} height={120} />}
                  {s.illo === "coins" && <CoinsIllo size={200} />}
                  {s.illo === "house" && <HouseIllo size={200} />}
                </div>
              </> : <>
                <div style={{ background:"var(--gold-tint)", border:"1px solid var(--line)", borderRadius: 16, height: 360, display:"grid", placeItems:"center", color: "var(--ink)" }}>
                  {s.illo === "chart" && <ChartIllo size={200} />}
                  {s.illo === "key" && <KeyIllo size={200} />}
                  {s.illo === "doc" && <DocIllo size={180} />}
                  {s.illo === "wave" && <WaveIllo width={260} height={120} />}
                  {s.illo === "coins" && <CoinsIllo size={200} />}
                  {s.illo === "house" && <HouseIllo size={200} />}
                </div>
                <div>
                  <div className="row gap-3" style={{ alignItems: "center", marginBottom: 16 }}>
                    <span className="mono" style={{ fontSize: 12, color: "var(--gold)", letterSpacing: ".15em" }}>{s.n}</span>
                    <span style={{ width: 40, height: 1, background: "var(--gold)" }}></span>
                  </div>
                  <h2 className="s-h2" style={{ fontSize: 40, marginBottom: 18 }}>{s.title}</h2>
                  <p className="s-lede" style={{ marginBottom: 24 }}>{s.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {["Included in The NEO Experience", "No additional cost — ever", "Available to clients for life"].map(x => (
                      <li key={x} style={{ display: "flex", gap: 12, padding: "8px 0", fontSize: 14, color: "var(--ink-2)" }}>
                        <span style={{ color: "var(--gold)" }}>✓</span>{x}
                      </li>
                    ))}
                  </ul>
                </div>
              </>}
            </div>
          ))}
        </div>
      </section>
      {/* Comparison table */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)" }}>
        <div className="s-container-narrow">
          <h2 className="s-h2" style={{ marginBottom: 36 }}>What you get vs. what you usually get.</h2>
          <div style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", padding: "16px 24px", background: "var(--ink)", color: "var(--bg)", fontSize: 13, fontFamily: "var(--font-mono)", letterSpacing: ".1em" }}>
              <span>SERVICE</span>
              <span style={{ color: "var(--gold-soft)" }}>GEM HOME TEAM</span>
              <span style={{ color: "#9BA8BD" }}>TYPICAL LENDER</span>
            </div>
            {[
              ["Annual financial review", "✓ Included", "Not offered"],
              ["Refi-when-rates-drop alerts", "✓ Automated", "You're on your own"],
              ["Home concierge & contractors", "✓ Vetted bench", "Not offered"],
              ["Total Cost Analysis (all options)", "✓ Standard", "Single quote only"],
              ["Time to verified pre-approval", "24–48 hrs", "5–10 days"],
              ["Post-close relationship", "30 years", "Until funding"],
            ].map(([a,b,c], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", padding: "18px 24px", borderTop: "1px solid var(--line)", alignItems: "center", fontSize: 14 }}>
                <span>{a}</span>
                <span style={{ color: "var(--good)" }}>{b}</span>
                <span style={{ color: "var(--ink-mute)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SafeFooter />
    </div>
  );
}

/* ==================== SAFE ABOUT ==================== */
function SafeAbout() {
  return (
    <div className="s-page" data-screen-label="Safe · About">
      <SafeNav active="About" />
      <section style={{ padding: "80px 0" }}>
        <div className="s-container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: 80, alignItems:"end" }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 16 }}>About Megan</div>
              <h1 className="s-h1" style={{ marginBottom: 24 }}>From a $20 Fidelity statement to five properties — and a mission.</h1>
              <p className="s-lede">Building generational wealth doesn't take inheritance. It takes the right information, applied early. That's the whole thesis behind GEM Home Team.</p>
            </div>
            <PhotoSlot width={520} height={520} label="MEGAN PORTRAIT" accent="var(--ink)" />
          </div>
        </div>
      </section>

      {/* BIO */}
      <section style={{ padding: "0 0 80px" }}>
        <div className="s-container-narrow">
          <div className="s-card-flat" style={{ padding: 56 }}>
            <p style={{ fontSize: 22, lineHeight: 1.45, letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: 24 }}>
              "My grandfather went from washing dishes in a restaurant to owning that restaurant — then to owning the whole shopping center."
            </p>
            <p className="s-body" style={{ fontSize: 17, marginBottom: 18 }}>
              Every Christmas, while my twelve cousins and I expected presents, we got Fidelity statements in our stockings instead. He'd already bought us each a little stock. At twelve, it looked like a piece of paper. At twenty-four, when he passed, that piece of paper was $20,000.
            </p>
            <p className="s-body" style={{ fontSize: 17, marginBottom: 18 }}>
              I used it as a down payment on my first house in San Diego. I rented out the rooms to friends and saved aggressively. Two years later I bought another. Eight years later, five properties. None of it would have happened without that one Christmas-stocking statement and an understanding of how leverage, equity, and time actually work together.
            </p>
            <p className="s-body" style={{ fontSize: 17 }}>
              I started GEM Home Team to give other families the same head start. Most of my clients don't have a wealthy grandfather. They have a steady job, a good plan, and the courage to ask questions. That's all they need.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "80px 0", background: "var(--bg-2)" }}>
        <div className="s-container">
          <div className="s-eyebrow" style={{ marginBottom: 12 }}>What we stand for</div>
          <h2 className="s-h2" style={{ marginBottom: 48 }}>Three principles we won't compromise.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { t: "Education over salesmanship", b: "If you don't fully understand the math, we haven't done our job. No jargon traps. No 'just trust us'."},
              { t: "Lifetime relationships", b: "We stay involved long after closing. Year three, year fifteen, year thirty — same email, same number."},
              { t: "The Total Cost view", b: "Rate is one number. The lifetime cost of your loan is another. We always show both. You decide."}
            ].map(v => (
              <div key={v.t} className="s-card">
                <div style={{ width: 36, height: 36, background: "var(--gold)", marginBottom: 18 }}></div>
                <h3 className="s-h3" style={{ marginBottom: 10, fontSize: 20 }}>{v.t}</h3>
                <p className="s-body" style={{ fontSize: 14 }}>{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIO FACTS */}
      <section style={{ padding: "80px 0" }}>
        <div className="s-container">
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap: 80, alignItems:"start" }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 14 }}>The basics</div>
              <h2 className="s-h2">Off the clock.</h2>
            </div>
            <div className="col gap-4">
              {[
                ["Education", "B.A. Economics, UC Santa Barbara"],
                ["Lives", "Little Italy, San Diego"],
                ["Loyalty", "Padres season ticket holder"],
                ["Hobbies", "Wine making + tasting · scuba diving · live music festivals"],
                ["License", "NMLS #972639"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "180px 1fr", gap: 24, padding: "16px 0", borderTop: "1px solid var(--line)", fontSize: 16 }}>
                  <span style={{ color: "var(--ink-soft)", fontFamily: "var(--font-mono)", fontSize: 12, letterSpacing: ".12em", textTransform: "uppercase", paddingTop: 4 }}>{k}</span>
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* THE TEAM */}
      <section style={{ padding: "80px 0", background: "var(--gold-tint)" }}>
        <div className="s-container">
          <div className="s-eyebrow" style={{ marginBottom: 14 }}>The Team</div>
          <h2 className="s-h2" style={{ marginBottom: 36 }}>You're never just working with one person.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16 }}>
            {[
              ["Megan Sawamura", "Branch Leader", "assets/team-megan.png"],
              ["Sonny Alquizar", "Mortgage Advisor", null],
              ["Anthony Edrozo", "Production Partner", "assets/team-anthony.png"],
              ["Camryn Hottell", "Loan Specialist", "assets/team-camryn.png"],
              ["Kevin Torres", "Client Success Manager", "assets/team-kevin.png"],
            ].map(([n, r, photo]) => (
              <div key={n}>
                <div style={{ position: "relative", width: "100%", aspectRatio: "1 / 1", marginBottom: 14 }}>
                  <div style={{ position: "absolute", inset: "8%", borderRadius: "50%",
                    background: "radial-gradient(circle at 50% 35%, var(--gold-tint) 0%, #fff 72%)" }}></div>
                  <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--line)", padding: 7 }}>
                    <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
                      background: photo ? "linear-gradient(160deg, var(--gold-tint) 0%, #fff 100%)" : "transparent",
                      display: "grid", placeItems: "center" }}>
                      {photo ? (
                        <img src={assetUrl(photo)} alt={n} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: n === "Kevin Torres" ? "center" : "center top", display: "block", transform: n === "Kevin Torres" ? "scale(1.2)" : undefined, transformOrigin: "57% 42%" }} />
                      ) : (
                        <div style={{ width: "100%", height: "100%", borderRadius: "50%",
                          background: "linear-gradient(160deg, var(--gold) 0%, var(--gold-deep) 100%)",
                          display: "grid", placeItems: "center", color: "#fff", fontSize: 26, fontWeight: 600 }}>
                          {n.split(" ").map(x => x[0]).join("")}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: "center", fontSize: 15, fontWeight: 600 }}>{n}</div>
                <div style={{ textAlign: "center", fontSize: 12, color: "var(--gold)", fontWeight: 500, marginTop: 3 }}>{r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SafeFooter />
    </div>
  );
}

/* ==================== SAFE CONTACT ==================== */
function SafeContact() {
  const [submitted, setSubmitted] = useStateS2(false);
  return (
    <div className="s-page" data-screen-label="Safe · Contact">
      <SafeNav active="Contact" />
      <section style={{ padding: "80px 0" }}>
        <div className="s-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
            <div>
              <div className="s-eyebrow" style={{ marginBottom: 14 }}>Contact</div>
              <h1 className="s-h1" style={{ marginBottom: 24 }}>Let's find the best path here for you.</h1>
              <p className="s-lede" style={{ marginBottom: 40 }}>
                The first conversation is exploratory. We'll ask about your timeline, look at your numbers, and tell you honestly whether now is the right moment to move.
              </p>

              <div className="col gap-4" style={{ marginBottom: 40 }}>
                {[
                  ["📞", "Call", "(858) 567-2233", "Mon–Fri 8a–6p PT"],
                  ["✉️", "Email", "Team@GemHomeTeam.com", "Replies within 4 hrs"],
                  ["📍", "Office", "10089 Willow Creek Rd, Suite 200", "San Diego, CA 92131"],
                ].map(([ic, k, v, sub]) => (
                  <div key={k} style={{ display:"grid", gridTemplateColumns:"36px 1fr", gap: 16, padding:"16px 0", borderTop: "1px solid var(--line)" }}>
                    <span style={{ fontSize: 22 }}>{ic}</span>
                    <div>
                      <div style={{ fontFamily:"var(--font-mono)", fontSize: 11, letterSpacing:".14em", textTransform:"uppercase", color: "var(--ink-soft)", marginBottom: 4 }}>{k}</div>
                      <div style={{ fontSize: 16, fontWeight: 500 }}>{v}</div>
                      <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="s-card-flat" style={{ padding: 0, overflow: "hidden" }}>
                <div style={{ color: "var(--ink)" }}>
                  <MapIllo width={520} height={260} accent="var(--gold)" />
                </div>
                <div style={{ padding: 18, fontSize: 13, color: "var(--ink-soft)", borderTop: "1px solid var(--line)" }}>
                  Office is a 4-min walk from Scripps Ranch Marketplace. Free parking.
                </div>
              </div>
            </div>

            <div>
              <div className="s-card-flat" style={{ padding: 36 }}>
                {!submitted ? <>
                  <h3 className="s-h3" style={{ marginBottom: 6 }}>Tell us where you're at.</h3>
                  <p className="s-body" style={{ marginBottom: 28, fontSize: 14 }}>We'll respond within 4 business hours.</p>
                  <div className="col gap-4">
                    <div>
                      <label className="s-label">Full name</label>
                      <input className="s-input" placeholder="Alex Rivera" />
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                      <div>
                        <label className="s-label">Email</label>
                        <input className="s-input" placeholder="alex@example.com" />
                      </div>
                      <div>
                        <label className="s-label">Phone</label>
                        <input className="s-input" placeholder="(555) 555-5555" />
                      </div>
                    </div>
                    <div>
                      <label className="s-label">I'm thinking about…</label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                        {["Buying my first home","Buying again","Refinancing","Investment property","HELOC","Just exploring"].map(o => (
                          <button key={o} style={{ padding: "10px 12px", border: "1px solid var(--line-strong)", borderRadius: 6, textAlign: "left", fontSize: 13 }}>{o}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="s-label">Timeline</label>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
                        {["ASAP","1–3 mo","3–6 mo","6+ mo"].map(o => (
                          <button key={o} style={{ padding: "10px 8px", border: "1px solid var(--line-strong)", borderRadius: 6, fontSize: 13 }}>{o}</button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="s-label">Anything we should know?</label>
                      <textarea className="s-input" rows="3" placeholder="Tell us a bit about your situation…" />
                    </div>
                    <button onClick={() => setSubmitted(true)} className="s-btn s-btn-primary" style={{ justifyContent: "center", padding: "14px", marginTop: 8 }}>Send message →</button>
                    <p style={{ fontSize: 11, color: "var(--ink-mute)", textAlign: "center", marginTop: 4 }}>By submitting you agree to our privacy policy.</p>
                  </div>
                </> : <>
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: 32, background: "var(--good)", color: "white", display: "grid", placeItems: "center", margin: "0 auto 20px", fontSize: 30 }}>✓</div>
                    <h3 className="s-h3" style={{ marginBottom: 10 }}>Got it. We'll reach out to you as soon as possible.</h3>
                    <p className="s-body">Expect a response within 4 business hours. In the meantime, here's what to read next:</p>
                    <a href="#" className="s-btn s-btn-secondary" style={{ marginTop: 20 }}>Reading list for first-time buyers →</a>
                  </div>
                </>}
              </div>
            </div>
          </div>
        </div>
      </section>
      <SafeFooter />
    </div>
  );
}

/* ==================== SAFE DASHBOARD (borrower portal) ==================== */
function SafeDashboard() {
  const [tab, setTab] = useStateS2("overview");
  return (
    <div className="s-page" data-screen-label="Safe · Dashboard" style={{ background: "var(--bg-2)" }}>
      <header style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"16px 32px", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
        <div className="row gap-6" style={{ alignItems: "center" }}>
          <div className="s-nav-mark"><span className="s-nav-mark-dot"></span><span>GEM Portal</span></div>
          <div className="row gap-6" style={{ marginLeft: 24 }}>
            {["Overview","Loan","Documents","Messages","Wealth"].map(t => (
              <button key={t} onClick={() => setTab(t.toLowerCase())}
                style={{ padding: "8px 0", fontSize: 14, color: tab === t.toLowerCase() ? "var(--ink)" : "var(--ink-soft)", borderBottom: tab === t.toLowerCase() ? "2px solid var(--gold)" : "2px solid transparent" }}>{t}</button>
            ))}
          </div>
        </div>
        <div className="row gap-4" style={{ alignItems: "center" }}>
          <button style={{ fontSize: 14, color: "var(--ink-soft)" }}>🔔</button>
          <div className="row gap-2" style={{ alignItems: "center", padding: "6px 12px", border: "1px solid var(--line-strong)", borderRadius: 999 }}>
            <span style={{ width: 26, height: 26, borderRadius: 13, background: "var(--gold)", display: "grid", placeItems: "center", fontSize: 11, color: "var(--ink)", fontWeight: 500 }}>JR</span>
            <span style={{ fontSize: 13 }}>Jordan Rivera</span>
          </div>
        </div>
      </header>

      <div style={{ padding: "36px 32px", maxWidth: 1300, margin: "0 auto" }}>
        {/* Header summary */}
        <div style={{ display:"grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
          <div className="s-card-flat" style={{ padding: 24, background: "var(--ink)", color: "var(--bg)" }}>
            <div className="s-eyebrow" style={{ color: "var(--gold-soft)", marginBottom: 10 }}>Your loan · 14 Encinitas Ct</div>
            <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 4 }}>Step 4 of 6 · Underwriting</div>
            <div style={{ fontSize: 13, color: "#A8B6CC", marginBottom: 18 }}>Est. close June 8, 2026 · 24 days remaining</div>
            <div style={{ height: 8, background: "#2A4163", borderRadius: 4, overflow: "hidden" }}>
              <div style={{ width: "62%", height: "100%", background: "var(--gold)" }}></div>
            </div>
          </div>
          {[
            ["Loan amount", "$772,000", "30y fixed · 6.250%"],
            ["Monthly payment", "$5,432", "Principal + Interest"],
            ["Equity at close", "$193,000", "20% down · $965k price"],
          ].map(([k, v, s]) => (
            <div key={k} className="s-card-flat" style={{ padding: 24 }}>
              <div className="s-eyebrow" style={{ marginBottom: 8 }}>{k}</div>
              <div style={{ fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 6 }}>{s}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 24 }}>
          {/* Progress timeline */}
          <div className="s-card-flat" style={{ padding: 32 }}>
            <div className="row" style={{ justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 className="s-h3">Loan progress</h3>
              <a href="#" style={{ fontSize: 13, color: "var(--ink-soft)" }}>View full timeline →</a>
            </div>
            <div className="col gap-6">
              {[
                ["Application submitted", "Apr 28", "done"],
                ["Pre-approval issued", "Apr 29", "done"],
                ["Appraisal ordered", "May 9", "done"],
                ["Underwriting review", "In progress · 3 conditions outstanding", "active"],
                ["Clear to close", "Estimated Jun 2", "pending"],
                ["Closing & funding", "Jun 8 · 2:30pm", "pending"],
              ].map(([t, s, st], i) => (
                <div key={i} style={{ display:"grid", gridTemplateColumns:"24px 1fr auto", gap: 20, alignItems: "start" }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: 9,
                      background: st === "done" ? "var(--good)" : st === "active" ? "var(--gold)" : "transparent",
                      border: st === "pending" ? "1.5px dashed var(--ink-mute)" : "0",
                      display: "grid", placeItems: "center", fontSize: 10, color: "white"
                    }}>{st === "done" ? "✓" : ""}</div>
                    {i < 5 && <div style={{ width: 1, height: 26, background: st === "done" ? "var(--good)" : "var(--line-strong)" }}></div>}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 500 }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)" }}>{s}</div>
                  </div>
                  {st === "active" && <span className="s-tag" style={{ color: "var(--gold)", borderColor: "var(--gold)" }}>Action needed</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Side: action items + messages */}
          <div className="col gap-4">
            <div className="s-card-flat" style={{ padding: 24, background: "var(--gold-tint)" }}>
              <div className="s-eyebrow" style={{ marginBottom: 10 }}>3 actions for you</div>
              <h3 className="s-h3" style={{ fontSize: 18, marginBottom: 16 }}>Outstanding conditions</h3>
              <div className="col gap-3">
                {[
                  ["Updated bank statement (April)", "Due May 18"],
                  ["Explanation letter — late payment 2024", "Due May 20"],
                  ["Hazard insurance binder", "Due May 28"],
                ].map(([t, d]) => (
                  <div key={t} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12, padding: "12px 14px", background: "var(--bg-2)", borderRadius: 8, alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{t}</div>
                      <div style={{ fontSize: 11, color: "var(--ink-soft)" }}>{d}</div>
                    </div>
                    <button className="s-btn s-btn-primary" style={{ padding: "8px 12px", fontSize: 12 }}>Upload</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="s-card-flat" style={{ padding: 24 }}>
              <div className="row" style={{ justifyContent: "space-between", marginBottom: 16 }}>
                <h3 className="s-h3" style={{ fontSize: 18 }}>From your team</h3>
                <span className="s-tag" style={{ color: "var(--good)", borderColor: "var(--good)" }}>● 2 new</span>
              </div>
              <div className="col gap-3">
                {[
                  ["Megan Sawamura", "Appraisal came back at $972k — $7k over asking. Quick thoughts attached.", "11m"],
                  ["Sonny Alquizar", "Got your statements — uploading to underwriting now.", "2h"],
                ].map(([who, msg, t]) => (
                  <div key={who} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 12 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 16, background: "var(--ink)", color: "var(--bg)", display: "grid", placeItems: "center", fontSize: 11 }}>{who.split(" ").map(x=>x[0]).join("")}</div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{who} <span style={{ color: "var(--ink-mute)", fontWeight: 400, marginLeft: 4 }}>{t}</span></div>
                      <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2, lineHeight: 1.45 }}>{msg}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="s-card-flat" style={{ padding: 24, background: "var(--ink)", color: "var(--bg)" }}>
              <div className="s-eyebrow" style={{ color: "var(--gold-soft)", marginBottom: 10 }}>Rate watch</div>
              <div style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>6.250%</div>
              <div style={{ fontSize: 12, color: "#A8B6CC", marginTop: 4 }}>Your locked rate · expires Jun 12</div>
              <div style={{ marginTop: 16, padding: "8px 12px", background: "#2A4163", borderRadius: 6, fontSize: 12 }}>↓ 0.125 vs. market avg</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SafeHomeMobile, SafeFeatures, SafeAbout, SafeContact, SafeDashboard });
