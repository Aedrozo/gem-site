/* ============================================================
   BOLD direction — MODERN refresh
   Mobile Home + Features/About/Contact/Dashboard
   ============================================================ */
const { useState: useStateB2 } = React;

/* ==================== BOLD HOME MOBILE ==================== */
function BoldHomeMobile() {
  const [oFaq, setOFaq] = useStateB2(0);
  return (
    <div className="b-page" data-screen-label="Bold · Home (Mobile)">
      <MobHeader />

      <section style={{ padding: "48px 20px 32px" }}>
        <div className="b-tag" style={{ marginBottom: 24, fontSize: 11 }}>
          <span style={{ width: 5, height: 5, borderRadius: 2.5, background: "#34C77B" }}></span>
          <span>Free 15-minute mortgage review</span>
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, marginBottom: 20 }}>
          Your mortgage, managed for the next 30 years.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)", marginBottom: 28 }}>
          We close fast, then stay involved — annual reviews, rate-drop alerts, equity moves when they make sense.
        </p>
        <div className="col gap-3">
          <a href="#" className="b-btn b-btn-primary" style={{ justifyContent: "center", padding: "13px" }}>Start application →</a>
          <a href="#" className="b-btn b-btn-outline" style={{ justifyContent: "center", padding: "13px" }}>Book a 20-min call</a>
        </div>
      </section>

      {/* Live rates strip */}
      <section style={{ padding: "0 20px 32px" }}>
        <div style={{ border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
          {[
            ["30-year fixed", "6.375%", "20% down · conventional"],
            ["15-year fixed", "5.625%", "20% down · conventional"],
            ["FHA · 30y", "6.125%", "3.5% down"],
          ].map(([k, v, s], i) => (
            <div key={k} style={{ padding: "18px 20px", borderTop: i > 0 ? "1px solid var(--line)" : "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{k}</div>
                <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 2 }}>{s}</div>
              </div>
              <div className="tabular" style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em" }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontSize: 10, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: ".06em" }}>
          ● SAMPLE RATES · ILLUSTRATIVE ONLY
        </div>
        <div style={{ marginTop: 6, fontSize: 10, color: "var(--ink-mute)", lineHeight: 1.5 }}>
          Not a rate quote or commitment to lend; subject to change with credit, loan, and market conditions.
        </div>
      </section>

      {/* Stats — full cyan */}
      <section className="b-section-cyan" style={{ padding: "32px 20px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div className="tabular" style={{ fontSize: 26, fontWeight: 600, letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: 12, marginTop: 4, opacity: 0.78 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 14 }}>What we do</div>
        <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: 28 }}>
          Most lenders sell a rate. We sell decades of attention.
        </h2>
        <div className="col gap-3">
          {SERVICES.map(s => (
            <div key={s.n} className="b-card" style={{ padding: 22 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span className="tabular" style={{ fontSize: 11, color: "var(--ink-mute)", fontWeight: 500 }}>{s.n}</span>
                <ServiceDot kind={s.illo} />
              </div>
              <h3 className="b-h3" style={{ fontSize: 18, marginBottom: 6 }}>{s.title}</h3>
              <p className="b-body" style={{ fontSize: 13.5 }}>{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Calculator */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 14 }}>Quick estimate</div>
        <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: 24 }}>
          What might my payment look like?
        </h2>
        <BoldCalculator />
      </section>

      {/* Process */}
      <section style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 14 }}>The process</div>
        <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: 28 }}>Four steps. Then we never leave.</h2>
        {PROCESS.map((p, i) => (
          <div key={p.n} style={{ padding: "22px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
              <span className="tabular" style={{ fontSize: 12, fontWeight: 600, color: "var(--ink)" }}>{p.n}</span>
              <span className="b-eyebrow" style={{ fontSize: 10 }}>{["~30 MIN", "1–3 DAYS", "21 DAYS AVG", "30 YEARS"][i]}</span>
            </div>
            <h3 className="b-h3" style={{ fontSize: 19, marginBottom: 6 }}>{p.title}</h3>
            <p className="b-body" style={{ fontSize: 14 }}>{p.body}</p>
          </div>
        ))}
        <a href="/total-cost-analysis" className="b-btn b-btn-primary" style={{ justifyContent: "center", width: "100%", padding: "13px", marginTop: 24 }}>See a sample Total Cost Analysis →</a>
      </section>

      {/* Megan */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <div style={{ width: "100%", aspectRatio: "17 / 20", borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", background: "var(--bg)" }}>
          <img src={assetUrl("assets/megan-portrait.jpg")} alt="Megan Sawamura" style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center bottom", display: "block" }} />
        </div>
        <div className="b-eyebrow" style={{ marginTop: 28, marginBottom: 12 }}>Meet Megan</div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 18 }}>
          From a $20 Fidelity statement in a stocking to five properties.
        </h2>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 14 }}>
          Every Christmas my grandfather gave us Fidelity stock statements. At twenty-four mine was worth $20,000. I bought my first house with it.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 24 }}>
          Eight years later — five properties. GEM exists to give other families the same head start.
        </p>
        <a href="#" className="b-btn b-btn-outline" style={{ justifyContent: "center", width: "100%" }}>Read Megan's full story →</a>
      </section>

      {/* Meet the team */}
      <section style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 12 }}>Meet the team</div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 20 }}>
          The people behind every close.
        </h2>
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", marginBottom: 28 }}>
          <img src={assetUrl("assets/team-group.jpg")} alt="The GEM Home Team" style={{ width: "100%", display: "block" }} />
        </div>
        <div className="col gap-3">
          {[
            ["Megan Sawamura", "Branch Leader", "assets/team-megan.png"],
            ["Sonny Alquizar", "Mortgage Advisor", "assets/team-sonny.png"],
            ["Camryn Hottell", "Loan Specialist", "assets/team-camryn.png"],
            ["Anthony Edrozo", "Production Partner", "assets/team-anthony.png"],
            ["Kevin Torres", "Client Success Manager", "assets/team-kevin.png"],
          ].map(([n, r, photo]) => (
            <div key={n} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ flexShrink: 0, width: 56, height: 56, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--line)" }}>
                <img src={assetUrl(photo)} alt={n} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: n === "Kevin Torres" ? "scale(1.2)" : undefined, transformOrigin: "57% 42%" }} />
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{n}</div>
                <div style={{ fontSize: 12.5, color: "var(--gold-deep)", fontWeight: 500, marginTop: 2 }}>{r}</div>
                {TEAM_NMLS[n] && <div style={{ fontSize: 10.5, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", marginTop: 2 }}>NMLS #{TEAM_NMLS[n]}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rooted in San Diego */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 12 }}>Rooted in San Diego</div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 20 }}>
          A local team, serving our community.
        </h2>
        <div style={{ borderRadius: 18, overflow: "hidden", border: "1px solid var(--line)", marginBottom: 24 }}>
          <img src={assetUrl("assets/team-sandiego.jpg")} alt="The GEM Home Team in San Diego" style={{ width: "100%", display: "block" }} />
        </div>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 24 }}>
          We're a San Diego team — born here, based here, and invested in the families we serve. Together we bring over 30 years of combined mortgage experience to every loan.
        </p>
        <div style={{ display: "flex", gap: 40 }}>
          {[["30+", "years combined experience"], ["100%", "San Diego based"]].map(([n, l]) => (
            <div key={l}>
              <div className="tabular" style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1 }}>{n}</div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 6, maxWidth: 130 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 8 }}>Client voices</div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20, fontSize: 14, color: "var(--ink-soft)" }}>
          <span style={{ color: "var(--gold)", letterSpacing: ".1em" }}>★★★★★</span>
          <strong style={{ color: "var(--ink)" }}>4.86</strong> · 202 verified reviews
        </div>
        <div className="col gap-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="b-card" style={{ padding: 22 }}>
              <div style={{ color: "var(--gold)", fontSize: 12, letterSpacing: ".15em", marginBottom: 12 }}>★★★★★</div>
              <p style={{ fontSize: 15.5, lineHeight: 1.45, marginBottom: 14, letterSpacing: "-0.008em" }}>"{t.quote}"</p>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginTop: 2 }}>{t.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="https://www.experience.com/reviews/megan-sawamura-401537" target="_blank" rel="noopener" className="b-btn b-btn-outline" style={{ justifyContent: "center", width: "100%", padding: "13px", marginTop: 18 }}>Read all reviews on Experience.com →</a>
      </section>

      {/* FAQ */}
      <section style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 14 }}>Questions</div>
        <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: 24 }}>
          People ask us…
        </h2>
        {FAQS.map((f, i) => (
          <div key={i} style={{ borderTop: "1px solid var(--line)" }}>
            <button onClick={() => setOFaq(oFaq === i ? -1 : i)} style={{ width: "100%", padding: "18px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ fontSize: 15, fontWeight: 500 }}>{f.q}</span>
              <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 12, border: "1px solid var(--line-2)", display: "grid", placeItems: "center", fontSize: 13, transition: "transform .2s", transform: oFaq === i ? "rotate(45deg)" : "none" }}>+</span>
            </button>
            {oFaq === i && <p style={{ paddingBottom: 18, fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.55 }}>{f.a}</p>}
          </div>
        ))}
      </section>

      {/* CTA — full cyan */}
      <section className="b-section-cyan" style={{ padding: "64px 20px" }}>
        <h2 style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 16 }}>
          Buying, refinancing, or just thinking?
        </h2>
        <p style={{ fontSize: 16, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 28 }}>
          One 20-minute call is free. So is the second.
        </p>
        <div className="col gap-3">
          <a href="#" className="b-btn b-btn-dark" style={{ justifyContent: "center", padding: "13px", background: "#fff", color: "var(--ink)" }}>Schedule a call →</a>
          <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" className="b-btn" style={{ justifyContent: "center", padding: "13px", background: "transparent", border: "1.5px solid var(--ink-on-cyan)", color: "var(--ink-on-cyan)" }}>APPLY NOW</a>
        </div>
      </section>

      <footer style={{ padding: "40px 20px", background: "#0A0A0A", color: "#fff" }}>
        <img src={assetUrl("assets/neo-lockup-white.png")} alt="The GEM Home Team at NEO Home Loans" style={{ height: 24, width: "auto", marginBottom: 20, display: "block" }} />

        {/* compliance badges */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", padding: "18px 0", borderTop: "1px solid rgba(255,255,255,0.1)", borderBottom: "1px solid rgba(255,255,255,0.1)", marginBottom: 20 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 30, height: 30, borderRadius: 4, border: "1.5px solid rgba(255,255,255,0.4)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 3, display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 1 }}>
                <div style={{ background: "rgba(255,255,255,0.4)" }}></div><div></div><div></div>
                <div style={{ background: "rgba(255,255,255,0.4)" }}></div>
              </div>
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.85)", fontWeight: 600, letterSpacing: ".04em", lineHeight: 1.3 }}>EQUAL HOUSING<br />LENDER</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>COMPANY NMLS</div>
            <div style={{ fontSize: 12, color: "#fff", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>#330511 · Better Mortgage</div>
          </div>
          <div>
            <div style={{ fontSize: 9, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600 }}>INDIVIDUAL NMLS</div>
            <div style={{ fontSize: 12, color: "#fff", fontWeight: 500, fontVariantNumeric: "tabular-nums" }}>#972639 · Megan Sawamura</div>
          </div>
        </div>

        {/* Legal disclosures */}
        <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 20 }}>
          <p style={{ marginBottom: 8 }}>
            This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Production volume, transaction counts, client ratings, and any rankings or awards (including "Top 1% of U.S. Loan Officers") reflect historical results from internal records or third-party sources and are not a guarantee of future results. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer.
          </p>
          <p style={{ marginBottom: 8 }}>
            © 2026 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.
          </p>
          <p style={{ marginBottom: 8 }}>
            Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" style={{ color: "rgba(255,255,255,0.7)", textDecoration: "underline" }}>NMLS Consumer Access</a>.
          </p>
          <p style={{ marginBottom: 8 }}>
            Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &amp; Finance Holding Company. Each company is a separate legal entity. Products not available in all states.
          </p>
          <p>
            Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.
          </p>
        </div>

        <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".02em", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
          © 2026 The GEM Home Team at NEO Home Loans · All rights reserved
        </div>
      </footer>
    </div>
  );
}

/* ==================== BOLD FEATURES (modern) ==================== */
function BoldFeatures() {
  return (
    <div className="b-page" data-screen-label="Bold · Features">
      <BoldNav active="The NEO Experience" />
      <section style={{ padding: "80px 0 56px" }}>
        <div className="b-container">
          <div className="b-eyebrow" style={{ marginBottom: 24 }}>The NEO Experience</div>
          <h1 className="b-h1" style={{ maxWidth: 1000, marginBottom: 32 }}>
            Closing day is the start. What happens after is the actual product.
          </h1>
          <p className="b-lede" style={{ maxWidth: 640 }}>
            Six commitments we make to every client — built to keep your mortgage aligned with your life, not the day you signed.
          </p>
        </div>
      </section>

      <section style={{ padding: "32px 0 80px" }}>
        <div className="b-container">
          {SERVICES.map((s, i) => (
            <div key={s.n} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 0.85fr" : "0.85fr 1fr", gap: 80, padding: "64px 0", borderTop: "1px solid var(--line)", alignItems: "center" }}>
              {i % 2 === 0 ? <>
                <div>
                  <div className="tabular" style={{ fontSize: 13, color: "var(--ink-mute)", fontWeight: 500, marginBottom: 20 }}>{s.n}</div>
                  <h2 className="b-h2" style={{ fontSize: 48, marginBottom: 20 }}>{s.title}</h2>
                  <p className="b-lede" style={{ marginBottom: 28, maxWidth: 480 }}>{s.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.bullets.map(x => (
                      <li key={x} style={{ display: "flex", gap: 12, padding: "6px 0", fontSize: 14, color: "var(--ink-2)", alignItems: "center" }}>
                        <span style={{ width: 16, height: 16, borderRadius: 8, background: "var(--accent-tint)", color: "var(--gold-deep)", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700 }}>✓</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="b-card-soft" style={{ height: 380, display: "grid", placeItems: "center", padding: 60 }}>
                  <FeatureGraphic kind={s.illo} />
                </div>
              </> : <>
                <div className="b-card-dark" style={{ height: 380, display: "grid", placeItems: "center", padding: 60 }}>
                  <FeatureGraphic kind={s.illo} dark />
                </div>
                <div>
                  <div className="tabular" style={{ fontSize: 13, color: "var(--ink-mute)", fontWeight: 500, marginBottom: 20 }}>{s.n}</div>
                  <h2 className="b-h2" style={{ fontSize: 48, marginBottom: 20 }}>{s.title}</h2>
                  <p className="b-lede" style={{ marginBottom: 28, maxWidth: 480 }}>{s.body}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {s.bullets.map(x => (
                      <li key={x} style={{ display: "flex", gap: 12, padding: "6px 0", fontSize: 14, color: "var(--ink-2)", alignItems: "center" }}>
                        <span style={{ width: 16, height: 16, borderRadius: 8, background: "var(--accent-tint)", color: "var(--gold-deep)", display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700 }}>✓</span>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </>}
            </div>
          ))}
        </div>
      </section>

      <section className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 48, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 14 }}>Side by side</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 700 }}>What you get vs. what you usually get.</h2>
            </div>
          </div>
          <div style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", padding: "18px 28px", borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}>
              <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500 }}>Service</span>
              <span style={{ fontSize: 12, color: "var(--ink)", fontWeight: 600 }}>The GEM Home Team at NEO Home Loans</span>
              <span style={{ fontSize: 12, color: "var(--ink-soft)", fontWeight: 500 }}>Typical lender</span>
            </div>
            {[
              ["Annual financial review", "Included", "Not offered"],
              ["Refi-when-rates-drop alerts", "Automated", "On your own"],
              ["Home concierge & contractors", "Vetted bench", "Not offered"],
              ["Total Cost Analysis (all options)", "Standard", "Single quote only"],
              ["Time to verified pre-approval", "24–48 hrs", "5–10 days"],
              ["Post-close relationship", "30 years", "Until funding"],
            ].map(([a, b, c], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", padding: "22px 28px", borderTop: i === 0 ? "0" : "1px solid var(--line)", alignItems: "center" }}>
                <span style={{ fontSize: 15, color: "var(--ink)" }}>{a}</span>
                <span style={{ fontSize: 14, color: "var(--gold-deep)", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
                  <span style={{ width: 14, height: 14, borderRadius: 7, background: "var(--accent-tint)", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700 }}>✓</span>
                  {b}
                </span>
                <span style={{ fontSize: 14, color: "var(--ink-mute)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NeoAppSection />
      <FeaturesContactSection />

      <BoldFooter />
    </div>
  );
}

/* Contact submission form for the NEO Experience / Features page */
function FeaturesContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [interest, setInterest] = React.useState("Mortgage Under Management");

  return (
    <section style={{ padding: "120px 0", background: "var(--bg)" }}>
      <div className="b-container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "start" }}>
          <div style={{ position: "sticky", top: 40 }}>
            <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Get in touch</div>
            <h2 className="b-h2" style={{ marginBottom: 24 }}>
              Want the full <span style={{ color: "var(--gold-deep)" }}>NEO Experience</span>?
            </h2>
            <p className="b-lede" style={{ marginBottom: 32, maxWidth: 440 }}>
              Send us a note. We'll set up a quick call to walk through which pieces of the experience matter most for your situation — no pitch, just a conversation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24, borderTop: "1px solid var(--line)" }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--ink-soft)", marginBottom: 4, fontWeight: 500 }}>Call</div>
                <a href="tel:8588762506" style={{ fontSize: 16, color: "var(--ink)", fontWeight: 500 }}>(858) 876-2506</a>
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--ink-soft)", marginBottom: 4, fontWeight: 500 }}>Office</div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.55 }}>
                  10089 Willow Creek Rd, Suite 200<br/>San Diego, CA 92131
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 40,
            boxShadow: "0 24px 64px -32px rgba(46,182,222,.2)" }}>
            {!submitted ? (
              <>
                <h3 className="b-h3" style={{ marginBottom: 6 }}>Tell us where you're at.</h3>
                <p className="b-body" style={{ marginBottom: 28, fontSize: 14 }}>We'll respond within 4 business hours.</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <label className="b-label">Full name</label>
                    <input className="b-input" placeholder="Alex Rivera" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label className="b-label">Email</label>
                      <input className="b-input" placeholder="alex@example.com" />
                    </div>
                    <div>
                      <label className="b-label">Phone</label>
                      <input className="b-input" placeholder="(555) 555-5555" />
                    </div>
                  </div>
                  <div>
                    <label className="b-label">Which part of the NEO Experience matters most?</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
                      {[
                        "Mortgage Under Management",
                        "NEO Experience App",
                        "Home Concierge Service",
                        "Wealth Digests",
                        "Annual Financial Reviews",
                        "Not sure yet — tell me more",
                      ].map(o => (
                        <button key={o} onClick={() => setInterest(o)}
                          style={{ padding: "12px 14px", border: "1px solid var(--line-2)", borderRadius: 8,
                            textAlign: "left", fontSize: 13.5,
                            background: interest === o ? "var(--ink)" : "var(--bg)",
                            color: interest === o ? "#fff" : "var(--ink)",
                            borderColor: interest === o ? "var(--ink)" : "var(--line-2)" }}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="b-label">Anything we should know?</label>
                    <textarea className="b-input" rows="3" placeholder="Where you are in the process, timeline, questions…" />
                  </div>
                  <button onClick={() => setSubmitted(true)}
                    style={{ marginTop: 8, padding: "14px 22px", fontSize: 14, fontWeight: 600,
                      background: "var(--gold)", color: "var(--ink-on-cyan)",
                      borderRadius: 10, justifyContent: "center", display: "flex",
                      boxShadow: "0 6px 20px -6px rgba(46,182,222,.4)" }}>
                    Send message →
                  </button>
                  <p style={{ fontSize: 11, color: "var(--ink-mute)", textAlign: "center", marginTop: 4 }}>
                    By submitting you agree to our privacy policy.
                  </p>
                </div>
              </>
            ) : (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 28, background: "var(--accent-tint)",
                  display: "grid", placeItems: "center", margin: "0 auto 20px",
                  color: "var(--gold-deep)", fontSize: 26 }}>✓</div>
                <h3 className="b-h3" style={{ marginBottom: 10 }}>Got it — we'll reach out.</h3>
                <p className="b-body">Expect a response within 4 business hours.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FeaturesContactSection });
/* Icons for the About-page "non-negotiables" value cards */
function ValueIcon({ kind }) {
  const c = "var(--gold-deep)";
  const wrap = (children) => (
    <span style={{ width: 48, height: 48, borderRadius: 12, background: "var(--accent-tint)",
      display: "grid", placeItems: "center", color: c }}>{children}</span>
  );
  if (kind === "edu") return wrap(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8 L12 4 L21 8 L12 12 Z"/><path d="M6 10.5 V15 C6 15 8.5 17 12 17 C15.5 17 18 15 18 15 V10.5"/><line x1="21" y1="8" x2="21" y2="13"/>
    </svg>
  );
  if (kind === "loyal") return wrap(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20 C12 20 4 14.5 4 9 C4 6.5 6 4.5 8.5 4.5 C10 4.5 11.3 5.3 12 6.5 C12.7 5.3 14 4.5 15.5 4.5 C18 4.5 20 6.5 20 9 C20 14.5 12 20 12 20 Z"/>
    </svg>
  );
  if (kind === "scale") return wrap(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="4" x2="12" y2="20"/><line x1="7" y1="20" x2="17" y2="20"/><path d="M5 7 L19 7"/><path d="M5 7 L3 12 H7 Z"/><path d="M19 7 L17 12 H21 Z"/>
    </svg>
  );
  return null;
}

/* Small icons for the About-page "basics" chips */
function BasicIcon({ kind }) {
  const c = "var(--gold-deep)";
  const p = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "edu") return <svg {...p}><path d="M3 8 L12 4 L21 8 L12 12 Z"/><path d="M6 10.5 V15 C6 15 8.5 17 12 17 C15.5 17 18 15 18 15 V10.5"/></svg>;
  if (kind === "home") return <svg {...p}><path d="M4 11 L12 4 L20 11"/><path d="M6 9.5 V19 H18 V9.5"/><line x1="10" y1="19" x2="10" y2="14"/><line x1="14" y1="19" x2="14" y2="14"/></svg>;
  if (kind === "ball") return <svg {...p}><circle cx="12" cy="12" r="8"/><path d="M5 9 C8 10 10 13 11 19"/><path d="M19 9 C16 10 14 13 13 19"/></svg>;
  if (kind === "wine") return <svg {...p}><path d="M7 4 H17 C17 9 15 12 12 12 C9 12 7 9 7 4 Z"/><line x1="12" y1="12" x2="12" y2="19"/><line x1="8" y1="19" x2="16" y2="19"/></svg>;
  if (kind === "badge") return <svg {...p}><path d="M12 3 L19 6 V11 C19 16 12 20 12 20 C12 20 5 16 5 11 V6 Z"/><path d="M9 11.5 L11 13.5 L15 9.5"/></svg>;
  return null;
}

function FeatureGraphic({ kind, dark }) {
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
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%" }}>
        <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          {/* header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>ANNUAL REVIEW · MAY '26</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: ink, marginTop: 4, letterSpacing: "-0.01em" }}>You're $214/mo ahead.</div>
            </div>
            <span style={{ padding: "4px 10px", background: tint, color: cyanDeep, borderRadius: 999, fontSize: 10, fontWeight: 700 }}>SCHEDULED</span>
          </div>
          {/* chart */}
          <svg width="100%" height="80" viewBox="0 0 280 80" style={{ display: "block" }}>
            <defs>
              <linearGradient id={`fg-c-${dark}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={cyan} stopOpacity="0.4"/>
                <stop offset="100%" stopColor={cyan} stopOpacity="0"/>
              </linearGradient>
            </defs>
            <line x1="0" y1="20" x2="280" y2="20" stroke={line} strokeWidth="1" strokeDasharray="3 3" />
            <line x1="0" y1="50" x2="280" y2="50" stroke={line} strokeWidth="1" strokeDasharray="3 3" />
            <path className="anim-draw" style={{ "--len": "400" }} d="M0 65 L30 60 L60 55 L90 50 L120 42 L150 38 L180 30 L210 24 L240 18 L280 12" stroke={cyanDeep} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M0 65 L30 60 L60 55 L90 50 L120 42 L150 38 L180 30 L210 24 L240 18 L280 12 L280 80 L0 80 Z" fill={`url(#fg-c-${dark})`} opacity="0.85" />
            <circle cx="240" cy="18" r="5" fill={cyanDeep} stroke="#fff" strokeWidth="2" className="anim-float" />
          </svg>
          {/* x axis */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 9, color: inkMute, fontFamily: "var(--font-mono)", letterSpacing: ".05em" }}>
            {["'22", "'23", "'24", "'25", "'26"].map(y => <span key={y}>{y}</span>)}
          </div>
          {/* stats row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 18, paddingTop: 16, borderTop: `1px solid ${line}` }}>
            {[["$284K", "Equity"], ["6.250%", "Your rate"], ["$2,568", "Saved/yr"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontSize: 13, fontWeight: 600, color: ink, letterSpacing: "-0.012em", fontVariantNumeric: "tabular-nums" }}>{v}</div>
                <div style={{ fontSize: 9, color: inkMute, marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* === HOME CONCIERGE · service bench card === */
  if (kind === "key") {
    const services = [
      { name: "Handyman", note: "Today", icon: "🔧", color: "#FF9F43" },
      { name: "Designer", note: "Mon 2pm", icon: "✦", color: cyan },
      { name: "Electrician", note: "Booked", icon: "⚡", color: "#FFC845" },
      { name: "Landscape", note: "Weekly", icon: "🌿", color: "#34C77B" },
    ];
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%" }}>
        <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>YOUR BENCH</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: ink, marginTop: 4, letterSpacing: "-0.01em" }}>23 vetted pros, on call.</div>
            </div>
            <span style={{ width: 28, height: 28, borderRadius: 14, background: tint, color: cyanDeep, display: "grid", placeItems: "center", fontSize: 13 }}>+</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {services.map((s, i) => (
              <div key={s.name} className="anim-row" style={{ animationDelay: (0.15 + i * 0.12) + "s", display: "grid", gridTemplateColumns: "32px 1fr auto", gap: 10, padding: "10px 12px",
                background: surfaceSoft, borderRadius: 10, alignItems: "center" }}>
                <span style={{ width: 28, height: 28, borderRadius: 8, background: s.color + "22", color: s.color, display: "grid", placeItems: "center", fontSize: 13 }}>{s.icon}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: ink }}>{s.name}</div>
                  <div style={{ fontSize: 10, color: inkMute }}>{s.note}</div>
                </div>
                <span style={{ fontSize: 10, color: cyanDeep, fontWeight: 600 }}>BOOK ›</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* === MONTHLY WEALTH DIGEST · email-style card === */
  if (kind === "doc") {
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%", position: "relative" }}>
        {/* stack effect */}
        <div style={{ position: "absolute", top: 8, left: 8, right: -8, bottom: -8,
          background: surfaceSoft, border: `1px solid ${line}`, borderRadius: 14, opacity: 0.5 }}></div>
        <div style={{ position: "relative", background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>WEALTH DIGEST · MAY '26</div>
            <span style={{ width: 6, height: 6, borderRadius: 3, background: "#34C77B" }}></span>
          </div>
          <div style={{ fontSize: 18, fontWeight: 600, color: ink, marginBottom: 4, letterSpacing: "-0.01em" }}>
            Your home is worth <span style={{ color: cyanDeep }}>$972K</span>.
          </div>
          <div style={{ fontSize: 12, color: inkSoft, marginBottom: 16 }}>Up $7K this month. Up $32K this year.</div>
          {/* equity bar */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: inkMute, marginBottom: 6 }}>
              <span>EQUITY · $284K</span><span>HOME VALUE · $972K</span>
            </div>
            <div style={{ height: 8, background: surfaceSoft, borderRadius: 4, overflow: "hidden" }}>
              <div className="anim-fill" style={{ width: "29%", height: "100%", background: `linear-gradient(90deg, ${cyan} 0%, ${cyanDeep} 100%)` }}></div>
            </div>
          </div>
          {/* alert */}
          <div style={{ padding: 12, background: tint, borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 24, borderRadius: 12, background: cyanDeep, color: "#fff", display: "grid", placeItems: "center", fontSize: 11 }}>⚡</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: ink }}>HELOC available · up to $204K</div>
              <div style={{ fontSize: 10, color: inkSoft }}>Tap to model scenarios</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* === PERFECT MORTGAGE PROMISE · rate watch === */
  if (kind === "wave") {
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%" }}>
        <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 16 }}>
            <div>
              <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>RATE WATCH · 30Y FIXED</div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 6 }}>
                <span style={{ fontSize: 26, fontWeight: 600, color: ink, letterSpacing: "-0.02em", fontVariantNumeric: "tabular-nums" }}>6.375%</span>
                <span style={{ fontSize: 11, color: "#34C77B", fontWeight: 600 }}>↓ 0.375 this week</span>
              </div>
            </div>
            <span style={{ padding: "4px 10px", background: tint, color: cyanDeep, borderRadius: 999, fontSize: 10, fontWeight: 700 }}>● SAMPLE</span>
          </div>
          <svg width="100%" height="80" viewBox="0 0 280 80" style={{ display: "block", marginBottom: 12 }}>
            <defs>
              <linearGradient id={`fg-w-${dark}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={cyan} stopOpacity="0.4"/>
                <stop offset="100%" stopColor={cyan} stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path className="anim-draw" style={{ "--len": "320" }} d="M0 20 Q 35 50, 70 30 T 140 35 T 210 20 T 280 5" stroke={cyanDeep} strokeWidth="2.5" fill="none" />
            <path d="M0 20 Q 35 50, 70 30 T 140 35 T 210 20 T 280 5 L 280 80 L 0 80 Z" fill={`url(#fg-w-${dark})`} opacity="0.85" />
            <circle cx="280" cy="5" r="5" fill={cyanDeep} stroke="#fff" strokeWidth="2" className="anim-float" />
            <text x="270" y="0" textAnchor="end" fontSize="9" fill={inkMute} fontFamily="var(--font-mono)">NOW</text>
          </svg>
          <div style={{ padding: 12, background: tint, borderRadius: 10, display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ width: 24, height: 24, borderRadius: 12, background: cyanDeep, color: "#fff", display: "grid", placeItems: "center", fontSize: 11 }}>↓</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: ink }}>Refi could save $214/mo</div>
              <div style={{ fontSize: 10, color: inkSoft }}>Break-even in 14 months</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* === WEALTH THROUGH REAL ESTATE · property portfolio === */
  if (kind === "coins") {
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%" }}>
        <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
            <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>YOUR PORTFOLIO</div>
            <span style={{ fontSize: 10, color: "#34C77B", fontWeight: 700 }}>↑ 38% IN 7 YRS</span>
          </div>
          <div style={{ fontSize: 26, fontWeight: 600, color: ink, letterSpacing: "-0.02em", marginBottom: 16, fontVariantNumeric: "tabular-nums" }}>$2.41M<span style={{ fontSize: 12, color: inkSoft, fontWeight: 500, marginLeft: 8 }}>total equity</span></div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              { name: "Encinitas (primary)", value: "$284K", pct: 100, accent: cyanDeep },
              { name: "North Park (rental)", value: "$198K", pct: 70, accent: cyan },
              { name: "PB condo (rental)", value: "$142K", pct: 50, accent: "rgba(91,194,231,0.5)" },
            ].map((p, i) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                    <span style={{ fontSize: 12, color: ink, fontWeight: 500 }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: ink, fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{p.value}</span>
                  </div>
                  <div style={{ height: 6, background: surfaceSoft, borderRadius: 3, overflow: "hidden" }}>
                    <div className="anim-fill" style={{ width: `${p.pct}%`, height: "100%", background: p.accent, animationDelay: (0.15 + i * 0.18) + "s" }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  /* === RELOCATION · move-in tracker === */
  if (kind === "house") {
    return (
      <div className="featgfx" style={{ width: 360, maxWidth: "100%" }}>
        <div style={{ background: surface, border: `1px solid ${line}`, borderRadius: 14, padding: 22, boxShadow: dark ? "none" : "0 24px 64px -32px rgba(46,182,222,0.25)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: 18 }}>
            <div>
              <div style={{ fontSize: 10, color: inkMute, letterSpacing: ".1em", fontWeight: 600 }}>YOUR MOVE · STEP 3 OF 5</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: ink, marginTop: 4, letterSpacing: "-0.01em" }}>Renovation in progress</div>
            </div>
            <span style={{ padding: "4px 10px", background: tint, color: cyanDeep, borderRadius: 999, fontSize: 10, fontWeight: 700 }}>$0 DOWN</span>
          </div>
          {/* progress line */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 18 }}>
            {[1, 2, 3, 4, 5].map((n, i) => (
              <React.Fragment key={n}>
                <div style={{
                  width: 24, height: 24, borderRadius: 12,
                  background: n <= 3 ? cyanDeep : surfaceSoft,
                  color: n <= 3 ? "#fff" : inkMute,
                  border: n <= 3 ? "none" : `1.5px dashed ${line}`,
                  display: "grid", placeItems: "center", fontSize: 10, fontWeight: 700, flexShrink: 0
                }}>{n <= 3 ? "✓" : n}</div>
                {i < 4 && <div style={{ flex: 1, height: 2, background: n < 3 ? cyanDeep : line, margin: "0 4px" }}></div>}
              </React.Fragment>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              ["✓", "Listing photos & staging", "Done"],
              ["✓", "Pre-listing repairs", "Done"],
              ["◐", "Kitchen reno · contractor on site", "In progress"],
              ["○", "Final walkthrough", "Apr 18"],
              ["○", "Move-in day", "May 2"],
            ].map(([icon, name, status], i) => (
              <div key={i} className="anim-row" style={{ animationDelay: (0.2 + i * 0.1) + "s", display: "grid", gridTemplateColumns: "20px 1fr auto", gap: 10, padding: "8px 12px",
                background: i === 2 ? tint : surfaceSoft, borderRadius: 8, alignItems: "center" }}>
                <span style={{ color: i <= 2 ? cyanDeep : inkMute, fontWeight: 700, fontSize: 11 }}>{icon}</span>
                <span style={{ fontSize: 12, color: i < 2 ? inkSoft : ink, fontWeight: i === 2 ? 600 : 500, textDecoration: i < 2 ? "line-through" : "none" }}>{name}</span>
                <span style={{ fontSize: 10, color: i === 2 ? cyanDeep : inkMute, fontWeight: 600 }}>{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

/* ==================== BOLD ABOUT ==================== */
function BoldAbout() {
  return (
    <div className="b-page" data-screen-label="Bold · About">
      <BoldNav active="About" />
      <section style={{ padding: "80px 0 100px" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 80, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 24 }}>About Megan</div>
              <h1 className="b-h1" style={{ marginBottom: 28 }}>
                From a $20 Fidelity statement to five properties — and a mission.
              </h1>
              <p className="b-lede" style={{ maxWidth: 580 }}>
                Building generational wealth doesn't take inheritance. It takes the right information, applied early. That's the entire thesis behind The GEM Home Team at NEO Home Loans.
              </p>
            </div>
            <div style={{ position: "relative", width: 440, aspectRatio: "1 / 1", justifySelf: "end" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%",
                background: "radial-gradient(circle at 50% 35%, var(--accent-tint) 0%, #fff 70%)" }}></div>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--line)", padding: 14 }}>
                <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden",
                  background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)" }}>
                  <img src={assetUrl("assets/team-megan.png")} alt="Megan Sawamura" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                </div>
              </div>
              <div style={{ position: "absolute", bottom: 18, left: 0, padding: "8px 16px",
                background: "var(--ink)", color: "#fff", borderRadius: 999, fontSize: 12, fontWeight: 600,
                boxShadow: "0 8px 24px -8px rgba(10,10,10,0.4)" }}>
                NMLS #972639
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="b-section-warm" style={{ padding: "100px 0" }}>
        <div className="b-container-narrow">
          <p style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.018em", lineHeight: 1.25, color: "var(--ink)", marginBottom: 40, maxWidth: 760 }}>
            "My grandfather went from washing dishes in a restaurant to owning that restaurant — then to owning the whole shopping center."
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
              Every Christmas, while my twelve cousins and I expected presents, we got Fidelity statements in our stockings. He had bought us each a little stock. At twelve, it looked like a piece of paper. At twenty-four, when he passed, that piece of paper was $20,000.
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--ink-2)" }}>
              I used it as a down payment on my first house in San Diego. I rented out the rooms to friends and saved aggressively. Two years later I bought another. Eight years later — five properties. GEM exists to give other families the same head start.
            </p>
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 14 }}>What we stand for</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 560 }}>Three non-negotiables.</h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              ["01", "Education over salesmanship", "If you don't fully understand the math, we haven't done our job. No jargon traps. No 'just trust us.'", "edu"],
              ["02", "Lifetime relationships", "We stay involved long after closing. Year three, year fifteen, year thirty — same email, same number.", "loyal"],
              ["03", "The Total Cost view", "Rate is one number. The lifetime cost of your loan is another. We always show both. You decide.", "scale"],
            ].map(([n, t, b, ic]) => (
              <div key={n} className="b-card tilt-card" style={{ padding: 32, borderTop: "3px solid var(--gold)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: 60,
                  background: "radial-gradient(circle, var(--accent-tint) 0%, transparent 70%)" }}></div>
                <div style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
                  <ValueIcon kind={ic} />
                  <span className="tabular" style={{ fontSize: 13, color: "var(--gold-deep)", fontWeight: 600 }}>{n}</span>
                </div>
                <h3 style={{ position: "relative", fontSize: 24, fontWeight: 500, letterSpacing: "-0.018em", lineHeight: 1.15, color: "var(--ink)", marginBottom: 12 }}>{t}</h3>
                <p style={{ position: "relative", fontSize: 14.5, lineHeight: 1.65, color: "var(--ink-soft)" }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="b-section-warm" style={{ padding: "100px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 14 }}>Off the clock</div>
              <h2 className="b-h2">The basics.</h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                ["Education", "B.A. Economics, UC Santa Barbara", "edu"],
                ["Lives", "Little Italy, San Diego", "home"],
                ["Loyalty", "Padres season ticket holder", "ball"],
                ["Hobbies", "Wine making · scuba diving · live music", "wine"],
                ["License", "NMLS #972639", "badge"],
              ].map(([k, v, ic], i) => (
                <div key={k} style={{ display: "flex", gap: 16, padding: 20, background: "var(--bg)",
                  border: "1px solid var(--line)", borderRadius: 14, alignItems: "center",
                  gridColumn: i === 4 ? "span 2" : "auto" }}>
                  <span style={{ flexShrink: 0, width: 44, height: 44, borderRadius: 12, background: "var(--accent-tint)",
                    display: "grid", placeItems: "center", color: "var(--gold-deep)" }}>
                    <BasicIcon kind={ic} />
                  </span>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 3 }}>{k}</div>
                    <div style={{ fontSize: 15, color: "var(--ink)", fontWeight: 500 }}>{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="team" style={{ padding: "120px 0", background: "var(--bg)", scrollMarginTop: 80 }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "end", marginBottom: 56 }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 16 }}>Meet the team</div>
              <h2 className="b-h2" style={{ maxWidth: 420 }}>The people behind every close.</h2>
            </div>
            <p className="b-lede" style={{ maxWidth: 540 }}>
              Five specialists, one San Diego team. From your first question to the day you get the keys — and every year after — you'll know exactly who's in your corner.
            </p>
          </div>

          {/* Group photo */}
          <div style={{ position: "relative", borderRadius: 24, overflow: "hidden",
            boxShadow: "0 30px 80px -40px rgba(10,10,10,0.4)", border: "1px solid var(--line)", marginBottom: 64 }}>
            <img src={assetUrl("assets/team-group.jpg")} alt="The GEM Home Team" style={{ width: "100%", display: "block" }} />
          </div>

          {/* Headshot row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 28 }}>
            {[
              ["Megan Sawamura", "Branch Leader", "assets/team-megan.png"],
              ["Sonny Alquizar", "Mortgage Advisor", "assets/team-sonny.png"],
              ["Camryn Hottell", "Loan Specialist", "assets/team-camryn.png"],
              ["Anthony Edrozo", "Production Partner", "assets/team-anthony.png"],
              ["Kevin Torres", "Client Success Manager", "assets/team-kevin.png"],
            ].map(([n, r, photo]) => (
              <div key={n} style={{ textAlign: "center" }}>
                <div style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: "50%", overflow: "hidden",
                  border: "1px solid var(--line)", marginBottom: 18,
                  background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)",
                  boxShadow: "0 12px 30px -16px rgba(10,10,10,0.35)" }}>
                  <img src={assetUrl(photo)} alt={n} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: n === "Kevin Torres" ? "scale(1.2)" : undefined, transformOrigin: "57% 42%" }} />
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, letterSpacing: "-0.01em", color: "var(--ink)" }}>{n}</div>
                <div style={{ fontSize: 13, color: "var(--gold-deep)", fontWeight: 500, marginTop: 4 }}>{r}</div>
                {TEAM_NMLS[n] && <div style={{ fontSize: 11, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", letterSpacing: "0.02em", marginTop: 5 }}>NMLS #{TEAM_NMLS[n]}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

<section className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 72, alignItems: "center" }}>
            <div>
              <div className="b-eyebrow" style={{ marginBottom: 18 }}>Rooted in San Diego</div>
              <h2 className="b-h2" style={{ marginBottom: 24, maxWidth: 460 }}>A local team, serving our community.</h2>
              <p className="b-lede" style={{ marginBottom: 24, maxWidth: 480 }}>
                We're not a national call center. We're a San Diego team — born here, based here, and genuinely invested in the families and neighborhoods we serve.
              </p>
              <p className="b-body" style={{ marginBottom: 40, maxWidth: 480, color: "var(--ink-2)" }}>
                Together we bring over 30 years of combined mortgage experience to every loan we close — guiding our neighbors home, one family at a time.
              </p>
              <div style={{ display: "flex", gap: 56 }}>
                {[["30+", "years combined experience"], ["100%", "San Diego based"]].map(([n, l]) => (
                  <div key={l}>
                    <div className="tabular" style={{ fontSize: 40, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 8, maxWidth: 150 }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: "relative", borderRadius: 24, overflow: "hidden",
              boxShadow: "0 30px 80px -40px rgba(10,10,10,0.45)", border: "1px solid var(--line)" }}>
              <img src={assetUrl("assets/team-sandiego.jpg")} alt="The GEM Home Team in San Diego" style={{ width: "100%", display: "block" }} />
            </div>
          </div>
        </div>
      </section>

      <BoldFooter />
    </div>
  );
}

/* ==================== BOLD CONTACT ==================== */
function BoldContact() {
  const [submitted, setSubmitted] = useStateB2(false);
  const [selected, setSelected] = useStateB2("Buying my first home");
  const [timeline, setTimeline] = useStateB2("3–6 mo");
  return (
    <div className="b-page" data-screen-label="Bold · Contact">
      <BoldNav active="Contact" />
      <section style={{ padding: "80px 0 120px" }}>
        <div className="b-container">
          <div className="b-eyebrow" style={{ marginBottom: 24 }}>Say hello</div>
          <h1 className="b-h1" style={{ marginBottom: 32, maxWidth: 800 }}>
            Let's find the best path here for you.
          </h1>
          <p className="b-lede" style={{ marginBottom: 64, maxWidth: 600 }}>
            The first conversation is exploratory. We'll ask about your timeline, look at your numbers, and tell you honestly whether now is the right moment.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              {[
                ["Call", "(858) 876-2506", "Mon–Fri 8a–6p PT"],
                ["Email", "hello@gemhometeam.com", "Replies within 4 hrs"],
                ["Visit", "10089 Willow Creek Rd, Suite 200", "San Diego, CA 92131"],
              ].map(([k, v, sub]) => (
                <div key={k} style={{ padding: "20px 0", borderTop: "1px solid var(--line)" }}>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 6, fontWeight: 500 }}>{k}</div>
                  <div style={{ fontSize: 18, color: "var(--ink)", letterSpacing: "-0.01em" }}>{v}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>{sub}</div>
                </div>
              ))}
              <div style={{ marginTop: 40, borderRadius: 12, overflow: "hidden", border: "1px solid var(--line)", color: "var(--ink-mute)" }}>
                <MapIllo width={520} height={260} accent="var(--gold)" />
              </div>
            </div>

            <div className="b-card" style={{ padding: 40 }}>
              {!submitted ? <>
                <h3 className="b-h3" style={{ marginBottom: 6 }}>Tell us where you're at.</h3>
                <p className="b-body" style={{ marginBottom: 32, fontSize: 14 }}>We'll respond within 4 business hours.</p>
                <div className="col gap-4">
                  <div>
                    <label className="b-label">Full name</label>
                    <input className="b-input" placeholder="Alex Rivera" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label className="b-label">Email</label>
                      <input className="b-input" placeholder="alex@example.com" />
                    </div>
                    <div>
                      <label className="b-label">Phone</label>
                      <input className="b-input" placeholder="(555) 555-5555" />
                    </div>
                  </div>
                  <div>
                    <label className="b-label">I'm thinking about…</label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
                      {["Buying my first home", "Buying again", "Refinancing", "Investment property", "HELOC", "Just exploring"].map(o => (
                        <button key={o} onClick={() => setSelected(o)}
                          style={{ padding: "12px 14px", border: "1px solid var(--line-2)", borderRadius: 8, textAlign: "left", fontSize: 13.5,
                                   background: selected === o ? "var(--ink)" : "var(--bg)",
                                   color: selected === o ? "#fff" : "var(--ink)",
                                   borderColor: selected === o ? "var(--ink)" : "var(--line-2)" }}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="b-label">Timeline</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 4 }}>
                      {["ASAP", "1–3 mo", "3–6 mo", "6+ mo"].map(o => (
                        <button key={o} onClick={() => setTimeline(o)}
                          style={{ padding: "12px 0", border: "1px solid var(--line-2)", borderRadius: 8, fontSize: 13,
                                   background: timeline === o ? "var(--ink)" : "var(--bg)",
                                   color: timeline === o ? "#fff" : "var(--ink)",
                                   borderColor: timeline === o ? "var(--ink)" : "var(--line-2)" }}>{o}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="b-label">Anything we should know?</label>
                    <textarea className="b-input" rows="3" placeholder="Tell us a bit about your situation…" />
                  </div>
                  <button onClick={() => setSubmitted(true)} className="b-btn b-btn-primary" style={{ justifyContent: "center", padding: "14px", marginTop: 8 }}>Send message →</button>
                </div>
              </> : <div style={{ padding: "60px 0", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 28, background: "var(--accent-tint)", display: "grid", placeItems: "center", margin: "0 auto 20px", color: "var(--gold-deep)", fontSize: 26 }}>✓</div>
                <h3 className="b-h3" style={{ marginBottom: 10 }}>Got it. Megan or Sonny will reach out.</h3>
                <p className="b-body">Expect a response within 4 business hours.</p>
              </div>}
            </div>
          </div>
        </div>
      </section>
      <BoldFooter />
    </div>
  );
}

/* ==================== BOLD DASHBOARD ==================== */
function BoldDashboard() {
  const [tab, setTab] = useStateB2("overview");
  return (
    <div className="b-page" data-screen-label="Bold · Dashboard" style={{ background: "var(--bg-2)" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", background: "var(--bg)", borderBottom: "1px solid var(--line)" }}>
        <div className="row gap-8" style={{ alignItems: "center" }}>
          <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 30, width: "auto", display: "block" }} />
          <div className="row gap-6" style={{ marginLeft: 16 }}>
            {["Overview", "Loan", "Documents", "Messages", "Wealth"].map(t => (
              <button key={t} onClick={() => setTab(t.toLowerCase())}
                style={{ padding: "8px 0", fontSize: 14, color: tab === t.toLowerCase() ? "var(--ink)" : "var(--ink-soft)", borderBottom: tab === t.toLowerCase() ? "2px solid var(--ink)" : "2px solid transparent", fontWeight: 500 }}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="row gap-3" style={{ alignItems: "center" }}>
          <button style={{ width: 36, height: 36, borderRadius: 8, border: "1px solid var(--line)", color: "var(--ink-soft)" }}>🔔</button>
          <div className="row gap-2" style={{ alignItems: "center", padding: "5px 10px 5px 5px", border: "1px solid var(--line)", borderRadius: 999 }}>
            <span style={{ width: 28, height: 28, borderRadius: 14, background: "var(--gold)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600 }}>JR</span>
            <span style={{ fontSize: 13 }}>Jordan Rivera</span>
          </div>
        </div>
      </header>

      <div style={{ padding: "36px 32px", maxWidth: 1320, margin: "0 auto" }}>
        {/* Status header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 }}>14 Encinitas Court · Your loan</div>
          <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 16 }}>
            Step 4 of 6 · Underwriting in progress
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <div style={{ flex: 1, height: 6, background: "var(--line)", borderRadius: 3, overflow: "hidden" }}>
              <div style={{ width: "62%", height: "100%", background: "var(--ink)" }}></div>
            </div>
            <span style={{ fontSize: 13, color: "var(--ink-soft)" }} className="tabular">62% · 24 days to close June 8</span>
          </div>
        </div>

        {/* Stat strip */}
        <div className="b-card" style={{ padding: 0, marginBottom: 24, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {[
            ["Loan amount", "$772,000", "30y · 6.250%"],
            ["Monthly · PITI", "$5,432", "Locked May 8"],
            ["Equity at close", "$193,000", "20% down"],
            ["Locked rate", "6.250%", "↓ 0.125 vs market"],
          ].map(([k, v, s], i) => (
            <div key={k} style={{ padding: "24px 28px", borderLeft: i > 0 ? "1px solid var(--line)" : "none" }}>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 8 }}>{k}</div>
              <div className="tabular" style={{ fontSize: 26, fontWeight: 500, letterSpacing: "-0.02em" }}>{v}</div>
              <div style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 4 }}>{s}</div>
            </div>
          ))}
        </div>

        {/* Timeline + sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24 }}>
          <div className="b-card" style={{ padding: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
              <h3 className="b-h3" style={{ fontSize: 18 }}>Loan progress</h3>
              <a href="#" style={{ fontSize: 13, color: "var(--ink-soft)" }}>View full timeline →</a>
            </div>
            {[
              ["Application submitted", "Apr 28", "done"],
              ["Pre-approval issued", "Apr 29", "done"],
              ["Appraisal ordered", "May 9", "done"],
              ["Underwriting review", "In progress · 3 conditions outstanding", "active"],
              ["Clear to close", "Estimated Jun 2", "pending"],
              ["Closing & funding", "Jun 8 · 2:30pm", "pending"],
            ].map(([t, s, st], i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "20px 1fr auto", gap: 16, padding: "18px 0", borderTop: i === 0 ? "0" : "1px solid var(--line)", alignItems: "center" }}>
                <div style={{
                  width: 16, height: 16, borderRadius: 8,
                  background: st === "done" ? "var(--ink)" : st === "active" ? "var(--gold)" : "var(--bg)",
                  border: st === "pending" ? "1.5px dashed var(--line-2)" : "0",
                  color: "#fff", display: "grid", placeItems: "center", fontSize: 9
                }}>{st === "done" ? "✓" : ""}</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: st === "pending" ? "var(--ink-soft)" : "var(--ink)" }}>{t}</div>
                  <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 2 }}>{s}</div>
                </div>
                {st === "active" && <span className="b-tag" style={{ background: "var(--accent-tint)", color: "var(--gold-deep)", borderColor: "transparent", fontSize: 10, fontWeight: 600 }}>Action needed</span>}
                {st === "done" && <span style={{ fontSize: 11, color: "var(--ink-mute)" }}>Complete</span>}
              </div>
            ))}
          </div>

          <div className="col gap-4">
            <div className="b-card-dark" style={{ padding: 24 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginBottom: 10, fontWeight: 500 }}>3 actions for you</div>
              <h3 style={{ fontSize: 17, fontWeight: 500, marginBottom: 18, color: "#fff" }}>Outstanding conditions</h3>
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
                  <button style={{ padding: "6px 12px", background: "var(--gold)", color: "var(--ink)", borderRadius: 6, fontSize: 12, fontWeight: 500 }}>Upload</button>
                </div>
              ))}
            </div>

            <div className="b-card" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <h3 style={{ fontSize: 17, fontWeight: 500 }}>From your team</h3>
                <span className="b-tag" style={{ background: "var(--accent-tint)", color: "var(--gold-deep)", borderColor: "transparent", fontSize: 10, fontWeight: 600 }}>2 new</span>
              </div>
              {[
                ["Megan Sawamura", "Appraisal came back at $972k — $7k over asking. Quick thoughts attached.", "11m"],
                ["Sonny Alquizar", "Got your statements — uploading to underwriting now.", "2h"],
              ].map(([who, msg, t]) => (
                <div key={who} style={{ display: "grid", gridTemplateColumns: "32px 1fr", gap: 12, padding: "12px 0", borderTop: "1px solid var(--line)" }}>
                  <div style={{ width: 32, height: 32, borderRadius: 16, background: "var(--bg-3)", color: "var(--ink)", display: "grid", placeItems: "center", fontSize: 11, fontWeight: 600 }}>{who.split(" ").map(x => x[0]).join("")}</div>
                  <div>
                    <div style={{ fontSize: 13 }}><span style={{ fontWeight: 500 }}>{who}</span> <span style={{ color: "var(--ink-mute)", marginLeft: 4 }}>{t}</span></div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 3, lineHeight: 1.45 }}>{msg}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { BoldHomeMobile, BoldFeatures, BoldAbout, BoldContact, BoldDashboard, FeatureGraphic, ValueIcon, BasicIcon });
