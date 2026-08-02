/* ============================================================
   BOLD direction — MOBILE pages
   Reusable mobile chrome (header/footer) + Features, About, Contact.
   390px-wide artboards. Reuses shared data + .b-* system.
   ============================================================ */
const { useState: useStateM } = React;

/* ---------- Reusable mobile header ---------- */
function MobHeader() {
  const [menuOpen, setMenuOpen] = useStateM(false);
  const [openGroup, setOpenGroup] = useStateM(null);
  const close = () => { setMenuOpen(false); setOpenGroup(null); };
  const bar = { display: "block", width: 22, height: 2, background: "var(--ink)", borderRadius: 2 };
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{
        background: "linear-gradient(90deg, var(--gold) 0%, var(--gold-deep) 100%)",
        color: "var(--ink-on-cyan)", padding: "8px 20px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 11, fontWeight: 500
      }}>
        <span>NMLS #972639</span>
        <a href="tel:8585672233" style={{ color: "var(--ink-on-cyan)", fontWeight: 600 }}>📞 (858) 567-2233</a>
      </div>
      <header style={{
        display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center",
        padding: "14px 18px", background: "linear-gradient(180deg, #FFFFFF 0%, #F4FBFD 100%)",
        borderBottom: "1px solid var(--line)", position: "relative"
      }}>
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 1,
          background: "linear-gradient(90deg, transparent 0%, var(--gold) 50%, transparent 100%)", opacity: 0.4 }}></div>
        {/* hamburger — left */}
        <button onClick={() => setMenuOpen(true)} aria-label="Open menu"
          style={{ justifySelf: "start", display: "flex", flexDirection: "column", gap: 5,
            width: 40, height: 40, justifyContent: "center", alignItems: "center" }}>
          <span style={bar}></span><span style={bar}></span><span style={bar}></span>
        </button>
        {/* logo — center */}
        <a href="/" onClick={close} style={{ justifySelf: "center", display: "flex", alignItems: "center" }}>
          <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 28, width: "auto", display: "block" }} />
        </a>
        {/* apply — right */}
        <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" style={{
          justifySelf: "end", display: "inline-flex", alignItems: "center", gap: 5, padding: "8px 12px",
          fontSize: 11.5, fontWeight: 600, letterSpacing: ".02em",
          background: "var(--ink)", color: "#fff", borderRadius: 6
        }}>APPLY <span style={{ color: "var(--gold)" }}>→</span></a>
      </header>

      {/* slide-in nav menu */}
      {menuOpen && (
        <div onClick={close} style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(10,10,10,0.45)", backdropFilter: "blur(2px)" }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            position: "absolute", top: 0, left: 0, bottom: 0, width: "84%", maxWidth: 340,
            background: "#fff", boxShadow: "0 0 60px -10px rgba(0,0,0,0.4)",
            display: "flex", flexDirection: "column", overflowY: "auto"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", borderBottom: "1px solid var(--line)" }}>
              <img src={assetUrl("assets/neo-lockup-v2.png")} alt="NEO Home Loans" style={{ height: 26, width: "auto" }} />
              <button onClick={close} aria-label="Close menu" style={{ fontSize: 22, lineHeight: 1, color: "var(--ink-soft)", padding: "4px 8px" }}>✕</button>
            </div>
            <nav style={{ padding: "12px 10px", flex: 1 }}>
              {NAV.map((item) => (
                <div key={item.label} style={{ padding: "2px 0" }}>
                  {item.children ? (
                    <>
                      <button onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                        aria-expanded={openGroup === item.label}
                        style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%",
                          padding: "12px 14px", fontSize: 16, fontWeight: 600, color: "var(--ink)", background: "none", borderRadius: 8, cursor: "pointer" }}>
                        <span>{item.label}</span>
                        <span style={{ fontSize: 11, color: "var(--ink-soft)", transition: "transform 0.2s ease",
                          transform: openGroup === item.label ? "rotate(180deg)" : "none" }}>▼</span>
                      </button>
                      {openGroup === item.label && item.children.map((c) => (
                        <a key={c.label} href={c.href} onClick={close} style={{ display: "block", padding: "8px 14px 8px 28px", fontSize: 14, color: "var(--ink-soft)", borderRadius: 8 }}>{c.label}</a>
                      ))}
                    </>
                  ) : (
                    <a href={item.href} onClick={close} style={{ display: "block", padding: "12px 14px", fontSize: 16, fontWeight: 600, color: "var(--ink)", borderRadius: 8 }}>{item.label}</a>
                  )}
                </div>
              ))}
            </nav>
            <div style={{ padding: "16px 20px", borderTop: "1px solid var(--line)", display: "flex", flexDirection: "column", gap: 10 }}>
              <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" onClick={close} className="b-btn b-btn-primary" style={{ justifyContent: "center", padding: "13px" }}>Apply now →</a>
              <a href="/dashboard" onClick={close} style={{ textAlign: "center", fontSize: 14, fontWeight: 500, color: "var(--ink-soft)" }}>Sign in</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Reusable mobile footer ---------- */
function MobFooter() {
  const dimLink = { color: "rgba(255,255,255,0.7)", textDecoration: "underline" };
  const navLink = { color: "rgba(255,255,255,0.75)", fontSize: 13, padding: "6px 0", display: "block" };
  const socials = [
    ["Instagram", "https://www.instagram.com/gemhometeam/",
      <svg key="ig" width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/></svg>],
    ["Facebook", "https://facebook.com/GEMTeamMortgage/",
      <svg key="fb" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.2 0-1-.1-1.9-.1-1.9 0-3.2 1.2-3.2 3.3V11H8.5v3h2.8v7h2.2z"/></svg>],
    ["YouTube", "https://youtube.com/channel/UCR_MAH3M-_tpM8SzdtaluCg",
      <svg key="yt" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8zM10 15.2V8.8L15.5 12 10 15.2z"/></svg>],
    ["LinkedIn", "https://linkedin.com/in/megansawamura",
      <svg key="li" width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M6.5 8.8H3.6V21h2.9V8.8zM5 7.4a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4zM21 14.3c0-3.2-1.7-4.7-4-4.7a3.5 3.5 0 0 0-3.1 1.7V8.8H11V21h2.9v-6.5c0-1.7.8-2.7 2.2-2.7 1.3 0 2 .9 2 2.7V21H21v-6.7z"/></svg>],
  ];
  return (
    <footer style={{ padding: "40px 20px", background: "#0A0A0A", color: "#fff" }}>
      <img src={assetUrl("assets/neo-lockup-white.png")} alt="The GEM Home Team at NEO Home Loans" style={{ height: 24, width: "auto", marginBottom: 8, display: "block" }} />
      <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", marginBottom: 16 }}>Powered by Better</div>

      {/* contact + socials */}
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
        <a href="tel:+18585672233" style={{ color: "#fff", fontSize: 14, fontWeight: 500 }}>(858) 567-2233</a>
        <a href="mailto:Team@GemHomeTeam.com" style={{ color: "rgba(255,255,255,0.75)", fontSize: 13 }}>Team@GemHomeTeam.com</a>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
        {socials.map(([label, href, icon]) => (
          <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
            style={{ width: 34, height: 34, borderRadius: 17, border: "1px solid rgba(255,255,255,0.25)", display: "grid", placeItems: "center", color: "rgba(255,255,255,0.8)" }}>{icon}</a>
        ))}
      </div>

      {/* quick links — same destinations as the desktop footer columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px", padding: "16px 0", borderTop: "1px solid rgba(255,255,255,0.1)", marginBottom: 18 }}>
        <a href="/#mortgage-calculator" style={navLink}>Mortgage calculator</a>
        <a href="/about" style={navLink}>About Megan</a>
        <a href="/va-calculator" style={navLink}>VA loan calculator</a>
        <a href="/about" style={navLink}>The team</a>
        <a href="/total-cost-analysis" style={navLink}>Total Cost Analysis</a>
        <a href="/technology" style={navLink}>Technology</a>
        <a href="/insights/when-to-refinance" style={navLink}>Refinance</a>
        <a href="/contact" style={navLink}>Contact</a>
        <a href="/insights" style={navLink}>Insights &amp; guides</a>
        <a href="/experience" style={navLink}>The NEO Experience</a>
      </div>

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
      {/* Full legal disclosures — identical text to the desktop footer */}
      <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, marginBottom: 20 }}>
        <p style={{ marginBottom: 8 }}>
          This website is for informational and educational purposes only and is not an offer, rate quote, pre-qualification, pre-approval, or commitment to lend. All loans are subject to credit approval, income and asset verification, property appraisal, and underwriting; rates, terms, and programs are subject to change without notice and are not guaranteed. Production volume, transaction counts, client ratings, and any rankings or awards (including “Top 1% of U.S. Loan Officers”) reflect historical results from internal records or third-party sources and are not a guarantee of future results. Calculator outputs and any payment, savings, or dashboard figures shown are hypothetical illustrations for example purposes only and do not reflect an actual loan offer.
        </p>
        <p style={{ marginBottom: 8 }}>
          © 2026 Better Home &amp; Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License #02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved. Better BMC operates under the name Better Mortgage Corporation in New York.
        </p>
        <p style={{ marginBottom: 8 }}>
          Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. <a href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/330511" style={dimLink}>NMLS Consumer Access</a>.
        </p>
        <p style={{ marginBottom: 8 }}>
          Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325–41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC's <a href="https://better.com/with/better-realestate-license" style={dimLink}>license numbers</a>. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents ("Better Real Estate Partner Agents"). Equal Housing Opportunity. All rights reserved.
        </p>
        <p style={{ marginBottom: 8 }}>
          <a href="https://www.dos.ny.gov/licensing/docs/FairHousingNotice_new.pdf" style={dimLink}>New York State Housing and Anti-Discrimination Notice</a> · <a href="https://media.better.com/pdfs/NYStandardizedOperatingProcedures.pdf" style={dimLink}>New York Standard Operating Procedures</a> · Texas Real Estate Commission: <a href="https://www.har.com/mhf/terms/dispBrokerInfo?sitetype=aws&cid=645736" style={dimLink}>Information About Brokerage Services</a> · <a href="https://www.trec.texas.gov/sites/default/files/pdf-forms/CN%201-4-1_1.pdf" style={dimLink}>Consumer Protection Notice</a>.
        </p>
        <p style={{ marginBottom: 8 }}>
          Better Settlement Services, LLC. 325–41 Chestnut Street, Suite 803, Philadelphia, PA 19106. Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325–41 Chestnut Street, Suite 807, Philadelphia, PA 19106. Insurance quotes and policies are offered through Better Cover, LLC. Here is a full listing of Better Cover, LLC's <a href="https://www.bettercover.com/licenses" style={dimLink}>license numbers</a>. Better Inspect, LLC maintains its corporate headquarters at 325–41 Chestnut Street, Suite 846, Philadelphia, PA 19106.
        </p>
        <p style={{ marginBottom: 8 }}>
          Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home &amp; Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.
        </p>
        <p>
          Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home &amp; Finance Holding Company. Better Home &amp; Finance Holding Company trademarks are federally registered with the U.S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC. Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. CA-DRE #02164055.
        </p>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 16 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", fontSize: 11.5, marginBottom: 12 }}>
          <a href="https://better.com/about-us/privacy-policy" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>Privacy policy</a>
          <a href="https://better.com/about-us/terms-of-use" target="_blank" rel="noopener" style={{ color: "rgba(255,255,255,0.65)" }}>Terms of use</a>
          <a href="mailto:Team@GemHomeTeam.com?subject=Accessibility%20feedback" style={{ color: "rgba(255,255,255,0.65)" }}>Accessibility</a>
          <a href="/sitemap.xml" style={{ color: "rgba(255,255,255,0.65)" }}>Sitemap</a>
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.55)", letterSpacing: ".02em" }}>
          © 2026 The GEM Home Team at NEO Home Loans · All rights reserved
        </div>
      </div>
    </footer>
  );
}

/* Shared section heading for mobile */
function MobHead({ eyebrow, title, sub, dark }) {
  return (
    <>
      <div className="b-eyebrow" style={{ marginBottom: 14, color: dark ? "var(--gold)" : "var(--gold-deep)" }}>{eyebrow}</div>
      <h2 style={{ fontSize: 30, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.08, marginBottom: sub ? 16 : 24, color: dark ? "#fff" : "var(--ink)" }}>{title}</h2>
      {sub && <p style={{ fontSize: 15, lineHeight: 1.55, color: dark ? "rgba(255,255,255,0.7)" : "var(--ink-soft)", marginBottom: 28 }}>{sub}</p>}
    </>
  );
}

/* ==================== FEATURES MOBILE ==================== */
function BoldFeaturesMobile() {
  return (
    <div className="b-page" data-screen-label="Bold · Features (Mobile)">
      <MobHeader />

      <section style={{ padding: "44px 20px 28px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 20 }}>The NEO Experience</div>
        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 20 }}>
          Closing day is the start. What happens after is the product.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)" }}>
          Six commitments we make to every client — built to keep your mortgage aligned with your life, not the day you signed.
        </p>
      </section>

      {/* Service cards */}
      <section style={{ padding: "12px 20px 8px" }}>
        <div className="col gap-3">
          {SERVICES.map((s) => (
            <div key={s.n} className="b-card" style={{ padding: 24, overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <span className="tabular" style={{ fontSize: 12, color: "var(--ink-mute)", fontWeight: 500 }}>{s.n}</span>
              </div>
              <h3 className="b-h3" style={{ fontSize: 22, marginBottom: 10 }}>{s.title}</h3>
              <p className="b-body" style={{ fontSize: 14, marginBottom: 18 }}>{s.body}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px" }}>
                {s.bullets.map((x) => (
                  <li key={x} style={{ display: "flex", gap: 10, padding: "5px 0", fontSize: 13.5, color: "var(--ink-2)", alignItems: "center" }}>
                    <span style={{ width: 15, height: 15, borderRadius: 8, background: "var(--accent-tint)", color: "var(--gold-deep)", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>✓</span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="b-card-soft" style={{ borderRadius: 14, padding: "28px 18px", display: "grid", placeItems: "center" }}>
                <FeatureGraphic kind={s.illo} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison — stacked */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Side by side" title="What you get vs. what you usually get." />
        <div className="col gap-3">
          {[
            ["Annual financial review", "Included", "Not offered"],
            ["Refi-when-rates-drop alerts", "Automated", "On your own"],
            ["Home concierge & contractors", "Vetted bench", "Not offered"],
            ["Total Cost Analysis (all options)", "Standard", "Single quote only"],
            ["Time to verified pre-approval", "24–48 hrs", "5–10 days"],
            ["Post-close relationship", "30 years", "Until funding"],
          ].map(([a, b, c]) => (
            <div key={a} style={{ background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 12, padding: "16px 18px" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink)", marginBottom: 12 }}>{a}</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                <div>
                  <div style={{ fontSize: 10, color: "var(--ink-mute)", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>NEO</div>
                  <div style={{ fontSize: 13.5, color: "var(--gold-deep)", fontWeight: 600, display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 14, height: 14, borderRadius: 7, background: "var(--accent-tint)", display: "grid", placeItems: "center", fontSize: 9, fontWeight: 700, flexShrink: 0 }}>✓</span>{b}
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: 10, color: "var(--ink-mute)", fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", marginBottom: 4 }}>Typical</div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-mute)" }}>{c}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* App teaser */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="The NEO Experience App" title="Your mortgage, your equity, your home — in one place." />
        <div className="b-card" style={{ padding: 22, marginBottom: 16 }}>
          <FeatureGraphic kind="chart" />
        </div>
        <div className="col gap-3">
          {[
            ["Live equity tracking", "Watch your home's value and equity update month over month."],
            ["Rate-drop alerts", "We watch the market and ping you the moment a refi makes sense."],
            ["One-tap to your team", "Megan, Sonny and the crew — a message away, for 30 years."],
          ].map(([t, b]) => (
            <div key={t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--gold-deep)", marginTop: 7, flexShrink: 0 }}></span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                <div style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.5, marginTop: 2 }}>{b}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="b-section-cyan" style={{ padding: "60px 20px" }}>
        <h2 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 16 }}>
          Want the full NEO Experience?
        </h2>
        <p style={{ fontSize: 16, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 28 }}>
          One 20-minute call is free. So is the second.
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

/* ==================== ABOUT MOBILE ==================== */
function BoldAboutMobile() {
  return (
    <div className="b-page" data-screen-label="Bold · About (Mobile)">
      <MobHeader />

      <section style={{ padding: "44px 20px 32px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 20 }}>About Megan</div>
        <h1 style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.02, marginBottom: 24 }}>
          From a $20 Fidelity statement to five properties — and a mission.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)", marginBottom: 32 }}>
          Building generational wealth doesn't take inheritance. It takes the right information, applied early. That's the entire thesis behind The GEM Home Team.
        </p>
        <div style={{ position: "relative", width: "78%", aspectRatio: "1 / 1", margin: "0 auto" }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "radial-gradient(circle at 50% 35%, var(--accent-tint) 0%, #fff 70%)" }}></div>
          <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1px solid var(--line)", padding: 10 }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", overflow: "hidden", background: "linear-gradient(160deg, var(--accent-tint) 0%, #fff 100%)" }}>
              <img src={assetUrl("assets/team-megan.png")} alt="Megan Sawamura" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", padding: "7px 14px", background: "var(--ink)", color: "#fff", borderRadius: 999, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>NMLS #972639</div>
        </div>
      </section>

      {/* Story */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <p style={{ fontSize: 23, fontWeight: 500, letterSpacing: "-0.018em", lineHeight: 1.28, color: "var(--ink)", marginBottom: 28 }}>
          "My grandfather went from washing dishes in a restaurant to owning that restaurant — then to owning the whole shopping center."
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)", marginBottom: 16 }}>
          Every Christmas, while my twelve cousins and I expected presents, we got Fidelity statements in our stockings. He had bought us each a little stock. At twelve, it looked like a piece of paper. At twenty-four, when he passed, that piece of paper was $20,000.
        </p>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--ink-2)" }}>
          I used it as a down payment on my first house in San Diego. I rented out the rooms to friends and saved aggressively. Two years later I bought another. Eight years later — five properties. GEM exists to give other families the same head start.
        </p>
      </section>

      {/* Non-negotiables */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="What we stand for" title="Three non-negotiables." />
        <div className="col gap-3">
          {[
            ["01", "Education over salesmanship", "If you don't fully understand the math, we haven't done our job. No jargon traps. No 'just trust us.'", "edu"],
            ["02", "Lifetime relationships", "We stay involved long after closing. Year three, year fifteen, year thirty — same email, same number.", "loyal"],
            ["03", "The Total Cost view", "Rate is one number. The lifetime cost of your loan is another. We always show both. You decide.", "scale"],
          ].map(([n, t, b, ic]) => (
            <div key={n} className="b-card" style={{ padding: 24, borderTop: "3px solid var(--gold)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <ValueIcon kind={ic} />
                <span className="tabular" style={{ fontSize: 13, color: "var(--gold-deep)", fontWeight: 600 }}>{n}</span>
              </div>
              <h3 style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-0.018em", lineHeight: 1.15, color: "var(--ink)", marginBottom: 10 }}>{t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: "var(--ink-soft)" }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Basics */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Off the clock" title="The basics." />
        <div className="col gap-3">
          {[
            ["Education", "B.A. Economics, UC Santa Barbara", "edu"],
            ["Lives", "Little Italy, San Diego", "home"],
            ["Loyalty", "Padres season ticket holder", "ball"],
            ["Hobbies", "Wine making · scuba diving · live music", "wine"],
            ["License", "NMLS #972639", "badge"],
          ].map(([k, v, ic]) => (
            <div key={k} style={{ display: "flex", gap: 14, padding: 16, background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14, alignItems: "center" }}>
              <span style={{ flexShrink: 0, width: 42, height: 42, borderRadius: 12, background: "var(--accent-tint)", display: "grid", placeItems: "center", color: "var(--gold-deep)" }}>
                <BasicIcon kind={ic} />
              </span>
              <div>
                <div style={{ fontSize: 10.5, color: "var(--ink-soft)", fontWeight: 600, letterSpacing: ".06em", textTransform: "uppercase", marginBottom: 3 }}>{k}</div>
                <div style={{ fontSize: 14.5, color: "var(--ink)", fontWeight: 500 }}>{v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Meet the team" title="The people behind every close." />
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
              <div style={{ flexShrink: 0, width: 60, height: 60, borderRadius: "50%", overflow: "hidden", border: "1px solid var(--line)" }}>
                <img src={assetUrl(photo)} alt={n} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block", transform: n === "Kevin Torres" ? "scale(1.2)" : undefined, transformOrigin: "57% 42%" }} />
              </div>
              <div>
                <div style={{ fontSize: 15.5, fontWeight: 600, color: "var(--ink)" }}>{n}</div>
                <div style={{ fontSize: 12.5, color: "var(--gold-deep)", fontWeight: 500, marginTop: 2 }}>{r}</div>
                {TEAM_NMLS[n] && <div style={{ fontSize: 10.5, color: "var(--ink-mute)", fontFamily: "var(--font-mono)", marginTop: 2 }}>NMLS #{TEAM_NMLS[n]}</div>}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rooted in San Diego */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 14 }}>Rooted in San Diego</div>
        <h2 style={{ fontSize: 28, fontWeight: 500, letterSpacing: "-0.022em", lineHeight: 1.1, marginBottom: 16 }}>A local team, serving our community.</h2>
        <p className="b-lede" style={{ marginBottom: 16 }}>
          We're not a national call center. We're a San Diego team — born here, based here, and genuinely invested in the families and neighborhoods we serve.
        </p>
        <p className="b-body" style={{ marginBottom: 28, color: "var(--ink-2)" }}>
          Together we bring over 30 years of combined mortgage experience to every loan we close — guiding our neighbors home, one family at a time.
        </p>
        <div style={{ display: "flex", gap: 40 }}>
          {[["30+", "years combined experience"], ["100%", "San Diego based"]].map(([num, lbl]) => (
            <div key={lbl}>
              <div className="tabular" style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--ink)" }}>{num}</div>
              <div style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 4 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </section>

      <MobFooter />
    </div>
  );
}

/* ==================== CONTACT MOBILE ==================== */
function BoldContactMobile() {
  const [submitted, setSubmitted] = useStateM(false);
  const [selected, setSelected] = useStateM("Buying my first home");
  const [timeline, setTimeline] = useStateM("3–6 mo");
  const [sending, setSending] = useStateM(false);
  const [sendErr, setSendErr] = useStateM(false);
  const submit = async () => {
    if (sending) return;
    setSending(true); setSendErr(false);
    try { await sendInquiry("contact-form-m", selected, timeline); setSubmitted(true); }
    catch (e) { setSendErr(true); }
    finally { setSending(false); }
  };
  return (
    <div className="b-page" data-screen-label="Bold · Contact (Mobile)">
      <MobHeader />

      <section style={{ padding: "44px 20px 32px" }}>
        <div className="b-eyebrow" style={{ marginBottom: 20 }}>Say hello</div>
        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 20 }}>
          Let's find the best path here for you.
        </h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-soft)" }}>
          The first conversation is exploratory. We'll ask about your timeline, look at your numbers, and tell you honestly whether now is the right moment.
        </p>
      </section>

      {/* Contact rows */}
      <section style={{ padding: "0 20px 8px" }}>
        {[
          ["Call", "(858) 567-2233", "Mon–Fri 8a–6p PT"],
          ["Email", "Team@GemHomeTeam.com", "Replies within 4 hrs"],
          ["Visit", "10089 Willow Creek Rd, Suite 200", "San Diego, CA 92131"],
        ].map(([k, v, sub]) => (
          <div key={k} style={{ padding: "18px 0", borderTop: "1px solid var(--line)" }}>
            <div style={{ fontSize: 12, color: "var(--ink-soft)", marginBottom: 6, fontWeight: 500 }}>{k}</div>
            <div style={{ fontSize: 17, color: "var(--ink)", letterSpacing: "-0.01em" }}>{v}</div>
            <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>{sub}</div>
          </div>
        ))}
        <div style={{ marginTop: 24, borderRadius: 14, overflow: "hidden", border: "1px solid var(--line)" }}>
          <iframe
            src="https://maps.google.com/maps?q=10089+Willow+Creek+Rd+Suite+200,+San+Diego,+CA+92131&z=15&output=embed"
            title="Map to The GEM Home Team office — 10089 Willow Creek Rd, Suite 200, San Diego"
            width="100%" height="220" loading="lazy" allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0, display: "block" }} />
        </div>
        <a href="https://www.google.com/maps/search/?api=1&query=10089+Willow+Creek+Rd+Suite+200,+San+Diego,+CA+92131"
          target="_blank" rel="noopener"
          style={{ display: "inline-block", marginTop: 12, fontSize: 13.5, fontWeight: 600, color: "var(--gold-deep)" }}>
          Get directions →
        </a>
      </section>

      {/* Form */}
      <section style={{ padding: "40px 20px 56px" }}>
        <div className="b-card" style={{ padding: 24 }}>
          {!submitted ? (
            <>
              <h3 className="b-h3" style={{ fontSize: 22, marginBottom: 6 }}>Tell us where you're at.</h3>
              <p className="b-body" style={{ marginBottom: 24, fontSize: 14 }}>We'll respond within 4 business hours.</p>
              <div className="col gap-4" id="contact-form-m">
                <div>
                  <label className="b-label">Full name</label>
                  <input className="b-input" name="name" placeholder="Alex Rivera" />
                </div>
                <div>
                  <label className="b-label">Email</label>
                  <input className="b-input" name="email" type="email" placeholder="alex@example.com" />
                </div>
                <div>
                  <label className="b-label">Phone</label>
                  <input className="b-input" name="phone" type="tel" placeholder="(555) 555-5555" />
                </div>
                <div>
                  <label className="b-label">I'm thinking about…</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 4 }}>
                    {["Buying my first home", "Buying again", "Refinancing", "Investment property", "HELOC", "Just exploring"].map((o) => (
                      <button key={o} onClick={() => setSelected(o)} style={{
                        padding: "12px 12px", border: "1px solid var(--line-2)", borderRadius: 8, textAlign: "left", fontSize: 13,
                        background: selected === o ? "var(--ink)" : "var(--bg)",
                        color: selected === o ? "#fff" : "var(--ink)",
                        borderColor: selected === o ? "var(--ink)" : "var(--line-2)"
                      }}>{o}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="b-label">Timeline</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginTop: 4 }}>
                    {["ASAP", "1–3 mo", "3–6 mo", "6+ mo"].map((o) => (
                      <button key={o} onClick={() => setTimeline(o)} style={{
                        padding: "12px 0", border: "1px solid var(--line-2)", borderRadius: 8, fontSize: 12.5,
                        background: timeline === o ? "var(--ink)" : "var(--bg)",
                        color: timeline === o ? "#fff" : "var(--ink)",
                        borderColor: timeline === o ? "var(--ink)" : "var(--line-2)"
                      }}>{o}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="b-label">Anything we should know?</label>
                  <textarea className="b-input" name="message" rows="3" placeholder="Tell us a bit about your situation…"></textarea>
                </div>
                <button onClick={submit} disabled={sending} className="b-btn b-btn-primary" style={{ justifyContent: "center", padding: "14px", marginTop: 4, opacity: sending ? 0.6 : 1 }}>{sending ? "Sending…" : "Send message →"}</button>
                {sendErr && <p style={{ fontSize: 13, color: "#B4232A", textAlign: "center", marginTop: 2 }}>Couldn't send just now — please email <a href="mailto:team@gemhometeam.com" style={{ fontWeight: 600, color: "#B4232A", textDecoration: "underline" }}>team@gemhometeam.com</a> directly.</p>}
              </div>
            </>
          ) : (
            <div style={{ padding: "48px 0", textAlign: "center" }}>
              <div style={{ width: 56, height: 56, borderRadius: 28, background: "var(--accent-tint)", display: "grid", placeItems: "center", margin: "0 auto 20px", color: "var(--gold-deep)", fontSize: 26 }}>✓</div>
              <h3 className="b-h3" style={{ fontSize: 22, marginBottom: 10 }}>Got it. We'll reach out to you as soon as possible.</h3>
              <p className="b-body">Expect a response within 4 business hours.</p>
            </div>
          )}
        </div>
      </section>

      <MobFooter />
    </div>
  );
}

Object.assign(window, { MobHeader, MobFooter, MobHead, BoldFeaturesMobile, BoldAboutMobile, BoldContactMobile });
