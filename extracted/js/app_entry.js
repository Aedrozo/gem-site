/* ============================================================
   Main — Bold direction (committed). Safe direction omitted.
   ============================================================ */

function App() {
  return (
    <DesignCanvas>
      <DCSection id="brief" title="The GEM Home Team at NEO Home Loans · Website" subtitle="Modern refresh. Cleaner, more aesthetic. White-led with sky-blue accents.">
        <DCArtboard id="brief-card" label="System overview" width={820} height={1080}>
          <Brief />
        </DCArtboard>
      </DCSection>

      <DCSection id="bold" title="Modern direction" subtitle="Refined type scale, generous whitespace, NEO sky-blue as a single accent. One dark section for emphasis.">
        <DCArtboard id="bold-home-d" label="Home · Desktop" width={1440} height={15745}>
          <BoldHome />
        </DCArtboard>
        <DCArtboard id="bold-home-m" label="Home · Mobile" width={390} height={9265}>
          <BoldHomeMobile />
        </DCArtboard>
        <DCArtboard id="bold-features-d" label="Features · Desktop" width={1440} height={7710}>
          <BoldFeatures />
        </DCArtboard>
        <DCArtboard id="bold-features-m" label="Features · Mobile" width={390} height={7340}>
          <BoldFeaturesMobile />
        </DCArtboard>
        <DCArtboard id="bold-tech-d" label="Technology · Desktop" width={1440} height={9054}>
          <BoldTech />
        </DCArtboard>
        <DCArtboard id="bold-tech-m" label="Technology · Mobile" width={390} height={7815}>
          <BoldTechMobile />
        </DCArtboard>
        <DCArtboard id="bold-about-d" label="About · Desktop" width={1440} height={5360}>
          <BoldAbout />
        </DCArtboard>
        <DCArtboard id="bold-about-m" label="About · Mobile" width={390} height={4450}>
          <BoldAboutMobile />
        </DCArtboard>
        <DCArtboard id="bold-contact-d" label="Contact · Desktop" width={1440} height={2505}>
          <BoldContact />
        </DCArtboard>
        <DCArtboard id="bold-contact-m" label="Contact · Mobile" width={390} height={2560}>
          <BoldContactMobile />
        </DCArtboard>
        <DCArtboard id="bold-dashboard-d" label="Dashboard · Desktop" width={1440} height={1040}>
          <BoldDashboard />
        </DCArtboard>
        <DCArtboard id="bold-dashboard-m" label="Dashboard · Mobile" width={390} height={1720}>
          <BoldDashboardMobile />
        </DCArtboard>
        <DCArtboard id="bold-military-d" label="VA Loan Calculator · Desktop" width={1440} height={6875}>
          <MilitaryCalculator />
        </DCArtboard>
        <DCArtboard id="bold-military-m" label="VA Calculator · Mobile" width={390} height={7900}>
          <MilitaryCalculatorMobile />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
}

function Brief() {
  return (
    <div style={{ padding: 56, fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif", color: "#0E2540", height: "100%", overflow: "auto", background: "#fff" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
        <NEOMark size={42} color="#5BC2E7" />
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
          <span style={{ fontSize: 14, fontWeight: 600, letterSpacing: ".02em" }}>THE GEM HOME TEAM AT NEO HOME LOANS</span>
          <span style={{ fontFamily: "Geist Mono, monospace", fontSize: 10, letterSpacing: ".18em", color: "#5E6E85", marginTop: 4 }}>NEO HOME LOANS · POWERED BY BETTER</span>
        </div>
      </div>

      <div style={{ fontFamily: "Geist Mono, ui-monospace, monospace", fontSize: 11, letterSpacing: ".1em", color: "#2EB6DE", textTransform: "uppercase", marginBottom: 16 }}>
        Modern refresh · v2
      </div>
      <h1 style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.025em", lineHeight: 1.05, marginBottom: 18, color: "#0A1F36" }}>
        Cleaner. More refined. White-led.
      </h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, color: "#5C6F88", marginBottom: 32, maxWidth: 620 }}>
        Lighter overall, Stripe-meets-Linear aesthetic. White and cool-gray sections with a single
        dark moment for the bottom CTA. NEO sky blue used sparingly — for live rate accents, FAQ +
        ring, and the dashboard action pill. Typography is tighter (h1 88px, less letter-spacing
        on eyebrows) and the decorative illustrations are gone, replaced with cleaner abstract marks.
      </p>

      <div style={{ borderTop: "1px solid #EAEAEA", paddingTop: 24, marginBottom: 32 }}>
        <div style={{ fontFamily: "Geist Mono", fontSize: 11, letterSpacing: ".1em", color: "#5C5C5C", textTransform: "uppercase", marginBottom: 18 }}>The system</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
          {[
            ["#FFFFFF", "Paper", "Primary BG"],
            ["#F7F7F7", "Mist", "Soft sections"],
            ["#0A0A0A", "Ink", "Text / dark CTA"],
            ["#5BC2E7", "NEO cyan", "Accent only"],
          ].map(([c, n, r]) => (
            <div key={c}>
              <div style={{ height: 64, background: c, border: "1px solid #EAEAEA", borderRadius: 6, marginBottom: 8 }}></div>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{n}</div>
              <div style={{ fontFamily: "Geist Mono", fontSize: 10, color: "#999", letterSpacing: ".04em" }}>{c}</div>
              <div style={{ fontSize: 11, color: "#5C5C5C", marginTop: 2 }}>{r}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div style={{ padding: 16, background: "#F7F7F7", borderRadius: 8 }}>
            <div style={{ fontFamily: "Geist Mono", fontSize: 10, letterSpacing: ".1em", color: "#999" }}>DISPLAY · h1</div>
            <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: "-0.035em", marginTop: 6, color: "#0A0A0A" }}>Geist 500 · 88px</div>
            <div style={{ fontSize: 11, color: "#5C5C5C", marginTop: 6, fontFamily: "Geist Mono" }}>-3.5% TRACKING · LH 0.98</div>
          </div>
          <div style={{ padding: 16, background: "#F7F7F7", borderRadius: 8 }}>
            <div style={{ fontFamily: "Geist Mono", fontSize: 10, letterSpacing: ".1em", color: "#999" }}>EYEBROW</div>
            <div style={{ fontFamily: "Geist Mono", fontSize: 14, marginTop: 8, letterSpacing: ".1em", color: "#5C5C5C", textTransform: "uppercase" }}>What we do</div>
            <div style={{ fontSize: 11, color: "#5C5C5C", marginTop: 8, fontFamily: "Geist Mono" }}>11PX · +10% TRACKING · MUTED</div>
          </div>
        </div>
      </div>

      <div style={{ borderTop: "1px solid #EAEAEA", paddingTop: 24 }}>
        <div style={{ fontFamily: "Geist Mono", fontSize: 11, letterSpacing: ".1em", color: "#5C5C5C", textTransform: "uppercase", marginBottom: 12 }}>What changed in v3</div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 14, lineHeight: 1.7, color: "#2A2A2A" }}>
          <li>· NEO logo replaces "GEM Home Team" as the page brand mark</li>
          <li>· Pure cyan / white / black palette — no more navy or cool grays</li>
          <li>· Apply CTA in the nav is now cyan (the primary brand action)</li>
          <li>· Footer and dashboard headers all use the real logo lockup</li>
        </ul>
      </div>

      <div style={{ marginTop: 32, padding: 20, background: "#E6F6FC", borderRadius: 10, fontSize: 13, lineHeight: 1.55, color: "#0A0A0A" }}>
        <strong>Next: </strong>tell me what to push on. Real photography slots? Mobile coverage on more pages? Animation moments?
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
