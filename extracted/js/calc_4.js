/* ============================================================
   Military / VA Loan calculator — MOBILE (390px)
   Replicates the desktop calculator's logic in a single column.
   Reuses BoldSlider, Toggle, OutLine, MilitaryFAQ + mobile chrome.
   ============================================================ */
const { useState: useStateMCM, useMemo: useMemoMCM } = React;

function MilitaryCalculatorMobile() {
  const STATES = Object.keys(MILITARY_MARKETS).sort((a, b) =>
    MILITARY_MARKETS[a].name.localeCompare(MILITARY_MARKETS[b].name)
  );

  const [stateCode, setStateCode] = useStateMCM("CA");
  const stateData = MILITARY_MARKETS[stateCode];
  const [cityIdx, setCityIdx] = useStateMCM(0);
  const city = stateData.cities[cityIdx] || stateData.cities[0];

  const [branch, setBranch] = useStateMCM("army");
  const [grade, setGrade] = useStateMCM("E-6");
  const [yearsServed, setYearsServed] = useStateMCM(8);
  const [hasDependents, setHasDependents] = useStateMCM(true);
  const [price, setPrice] = useStateMCM(city.price);
  const [down, setDown] = useStateMCM(0);
  const [rate, setRate] = useStateMCM(5.875);
  const [years, setYears] = useStateMCM(30);
  const [firstUse, setFirstUse] = useStateMCM(true);
  const [disabilityWaived, setDisabilityWaived] = useStateMCM(false);
  const [serviceType, setServiceType] = useStateMCM("active");
  const [bah, setBah] = useStateMCM(city.bah);

  const isOfficer = isOfficerGrade(grade);
  const rank = isOfficer ? "officer" : "enlisted";
  const BAS_ENLISTED = 465;
  const BAS_OFFICER = 321;
  const bas = isOfficer ? BAS_OFFICER : BAS_ENLISTED;

  const bahForGrade = Math.round(bah * (BAH_MULTIPLIER[grade] || 1));
  const bahForStatus = hasDependents ? bahForGrade : Math.round(bahForGrade * 0.85);
  const qualifyingMonthly = (bahForStatus + bas) * 1.25;

  React.useEffect(() => { setCityIdx(0); }, [stateCode]);
  React.useEffect(() => { setPrice(city.price); setBah(city.bah); }, [stateCode, cityIdx]);

  const meetsMinService = useMemoMCM(() => {
    if (serviceType === "veteran" || serviceType === "spouse") return true;
    if (serviceType === "reserve") return yearsServed >= 6;
    return yearsServed >= 1;
  }, [serviceType, yearsServed]);

  const downAmt = price * (down / 100);
  const fundingFeePct = useMemoMCM(() => {
    if (disabilityWaived) return 0;
    if (firstUse) { if (down < 5) return 2.15; if (down < 10) return 1.5; return 1.25; }
    if (down < 5) return 3.3; if (down < 10) return 1.5; return 1.25;
  }, [firstUse, down, disabilityWaived]);

  const fundingFee = (price - downAmt) * fundingFeePct / 100;
  const principalFinanced = price - downAmt + fundingFee;
  const monthly = monthlyPayment(principalFinanced, rate, years);
  const tax = price * 0.0073 / 12;
  const ins = 120;
  const totalPITI = monthly + tax + ins;
  const conventionalEquiv = monthlyPayment(price * 0.95, 6.375, years) + price * 0.0073 / 12 + 120 + (price * 0.95 * 0.005 / 12);
  const bahCoverage = (bahForStatus / totalPITI) * 100;
  const usd = (n) => "$" + Math.round(n).toLocaleString();

  const seg = (active) => ({
    padding: "11px 0", fontSize: 12.5, fontWeight: 600, borderRadius: 8,
    background: active ? "#fff" : "transparent",
    color: active ? "var(--ink)" : "var(--ink-soft)",
    boxShadow: active ? "0 2px 6px rgba(10,31,54,.08)" : "none"
  });
  const selectStyle = {
    width: "100%", padding: "12px 32px 12px 14px", border: "1px solid var(--line-2)", borderRadius: 8,
    fontSize: 13.5, fontWeight: 500, color: "var(--ink)", background: "var(--bg)", appearance: "none", cursor: "pointer", outline: "none"
  };
  const caret = <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", color: "var(--ink-soft)", pointerEvents: "none", fontSize: 10 }}>▼</span>;

  return (
    <div className="b-page" data-screen-label="Bold · Military Calculator (Mobile)">
      <MobHeader />

      {/* HERO */}
      <section style={{ background: "var(--bg)", padding: "44px 20px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.4, backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)", backgroundSize: "26px 26px", pointerEvents: "none" }}></div>
        <div style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 12px", background: "var(--accent-tint)", borderRadius: 999, marginBottom: 22, fontSize: 11, fontWeight: 600, color: "var(--gold-deep)" }}>
            ✦ For service members, veterans & spouses
          </div>
          <h1 style={{ fontSize: 38, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 18 }}>
            VA Loan calculator <span style={{ color: "var(--gold-deep)" }}>built for the people who served.</span>
          </h1>
          <p style={{ fontSize: 15.5, lineHeight: 1.55, color: "var(--ink-soft)" }}>
            Real numbers — funding fee, disability waiver, BAH coverage — modeled with the same math we use for our active-duty and veteran clients.
          </p>
        </div>
      </section>

      {/* CALCULATOR — inputs */}
      <section style={{ padding: "8px 20px 0" }}>
        <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 18, padding: 22 }}>
          <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 16 }}>Your scenario</div>

          {/* Branch */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 8 }}>Branch of service</label>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
              {[["army", "Army"], ["navy", "Navy"], ["marines", "USMC"], ["airforce", "Air Force"], ["spaceforce", "Space F."], ["coastguard", "Coast G."]].map(([v, l]) => (
                <button key={v} onClick={() => setBranch(v)} style={seg(branch === v)}>{l}</button>
              ))}
            </div>
          </div>

          {/* Service status */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 8 }}>Service status</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
              {[["active", "Active duty"], ["reserve", "Reserve/NG"], ["veteran", "Veteran"], ["spouse", "Surviving"]].map(([v, l]) => (
                <button key={v} onClick={() => setServiceType(v)} style={seg(serviceType === v)}>{l}</button>
              ))}
            </div>
          </div>

          {/* Rank + dependents */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 8 }}>Rank</label>
            <div style={{ position: "relative", marginBottom: 12 }}>
              <select value={grade} onChange={(e) => setGrade(e.target.value)} style={selectStyle}>
                <optgroup label="Enlisted">
                  {ENLISTED_GRADES.map((g) => <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>)}
                </optgroup>
                {branch !== "airforce" && branch !== "spaceforce" && (
                  <optgroup label="Warrant">
                    {WARRANT_GRADES.filter((g) => RANK_LABELS[g][branch]).map((g) => <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>)}
                  </optgroup>
                )}
                <optgroup label="Officer">
                  {OFFICER_GRADES.map((g) => <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>)}
                </optgroup>
              </select>
              {caret}
            </div>
            <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 8 }}>Dependents</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
              {[[true, "With"], [false, "Without"]].map(([v, l]) => (
                <button key={l} onClick={() => setHasDependents(v)} style={seg(hasDependents === v)}>{l}</button>
              ))}
            </div>
          </div>

          {/* Years served */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>Years served</span>
              <span className="tabular" style={{ fontSize: 14, color: "var(--ink)", fontWeight: 600 }}>
                {yearsServed} {yearsServed === 1 ? "yr" : "yrs"}
                <span style={{ marginLeft: 8, padding: "2px 8px", borderRadius: 999, fontSize: 10.5, fontWeight: 600, background: meetsMinService ? "rgba(52,199,123,.15)" : "rgba(194,90,59,.15)", color: meetsMinService ? "#1F8A5B" : "#C25A3B" }}>
                  {meetsMinService ? "✓ Meets min" : "Below min"}
                </span>
              </span>
            </div>
            <input type="range" min={0} max={30} step={1} value={yearsServed} onChange={(e) => setYearsServed(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)" }} />
          </div>

          {/* State + City */}
          <div style={{ marginBottom: 20 }}>
            <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 8 }}>Where are you moving to?</label>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div style={{ position: "relative" }}>
                <select value={stateCode} onChange={(e) => setStateCode(e.target.value)} style={selectStyle}>
                  {STATES.map((s) => <option key={s} value={s}>{MILITARY_MARKETS[s].name}</option>)}
                </select>
                {caret}
              </div>
              <div style={{ position: "relative" }}>
                <select value={cityIdx} onChange={(e) => setCityIdx(Number(e.target.value))} style={selectStyle}>
                  {stateData.cities.map((c, i) => <option key={i} value={i}>{c.name}</option>)}
                </select>
                {caret}
              </div>
            </div>
            <div style={{ marginTop: 10, padding: "10px 12px", background: "var(--accent-tint)", borderRadius: 8, fontSize: 12, color: "var(--ink-2)", lineHeight: 1.5 }}>
              <span style={{ fontWeight: 600, color: "var(--gold-deep)" }}>Local median:</span> {usd(city.price)} home · {usd(city.bah)}/mo BAH (E-6 w/ deps)
            </div>
          </div>

          <BoldSlider label={`Home price · ${city.name.split("(")[0].trim()} median`} value={price} min={120000} max={2500000} step={5000} format={usd} onChange={setPrice} />
          <BoldSlider label="Down payment" value={down} min={0} max={20} step={1} format={(v) => v + "%"} sub={down === 0 ? "$0 down · VA benefit" : usd(downAmt)} onChange={setDown} />
          <BoldSlider label="VA interest rate" value={rate} min={4.5} max={7.5} step={0.125} format={(v) => v.toFixed(3) + "%"} onChange={setRate} />

          {/* Term */}
          <div style={{ marginTop: 18, marginBottom: 20, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
            {[15, 20, 30].map((y) => (
              <button key={y} onClick={() => setYears(y)} style={seg(years === y)}>{y}-yr</button>
            ))}
          </div>

          {/* Toggles */}
          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 18 }}>
            <Toggle label="First time using VA loan benefit" sub="Subsequent users pay a higher funding fee (3.3% vs 2.15%)" value={firstUse} onChange={setFirstUse} />
            <Toggle label="VA disability rating ≥ 10%" sub="Waives the VA funding fee entirely. Also applies to surviving spouses receiving DIC." value={disabilityWaived} onChange={setDisabilityWaived} />
          </div>

          {/* BAH */}
          <div style={{ padding: 16, background: "var(--bg-2)", borderRadius: 12, marginBottom: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
              <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>Monthly BAH · {hasDependents ? "with" : "no"} deps</span>
              <span className="tabular" style={{ fontSize: 16, fontWeight: 600 }}>{usd(bahForStatus)}</span>
            </div>
            <input type="range" min={1000} max={5500} step={50} value={bah} onChange={(e) => setBah(Number(e.target.value))} style={{ width: "100%", accentColor: "var(--gold)" }} />
            <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6 }}>{city.name} MHA · {grade} ≈ {usd(bahForGrade)} (with deps).</div>
          </div>

          {/* BAS */}
          <div style={{ padding: 16, background: "var(--bg-2)", borderRadius: 12 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>Monthly BAS · {rank} rate</span>
              <span className="tabular" style={{ fontSize: 16, fontWeight: 600 }}>{usd(bas)}</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6 }}>2024 rate · enlisted $465/mo, officer $321/mo. Counts as qualifying income.</div>
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section style={{ padding: "16px 20px 0" }}>
        <div style={{ padding: 24, background: "linear-gradient(180deg, var(--ink) 0%, #0E2540 100%)", color: "#fff", borderRadius: 18, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: -100, right: -100, width: 260, height: 260, borderRadius: 130, background: "radial-gradient(circle, rgba(91,194,231,0.35) 0%, rgba(91,194,231,0) 70%)" }}></div>
          <div style={{ position: "relative" }}>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: ".1em", fontWeight: 700, marginBottom: 10 }}>YOUR ESTIMATED MONTHLY PAYMENT</div>
            <div className="tabular" style={{ fontSize: 54, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>{usd(totalPITI)}</div>
            <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", marginTop: 8 }}>Principal · Interest · Tax · Insurance · No PMI</div>

            {/* Qualifying income */}
            <div style={{ marginTop: 22, padding: 16, background: "linear-gradient(135deg, rgba(91,194,231,0.18) 0%, rgba(91,194,231,0.06) 100%)", border: "1px solid rgba(91,194,231,0.35)", borderRadius: 12 }}>
              <div style={{ fontSize: 10.5, fontWeight: 600, color: "var(--gold)", letterSpacing: ".06em", marginBottom: 6 }}>QUALIFYING INCOME (BAH + BAS × 1.25)</div>
              <div className="tabular" style={{ fontSize: 26, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>{usd(qualifyingMonthly)}<span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/mo</span></div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 8, lineHeight: 1.5 }}>
                BAH + BAS are tax-free. Lenders gross them up by <strong style={{ color: "var(--gold)" }}>1.25×</strong> for DTI — {usd(qualifyingMonthly * 12)}/yr from allowances alone, before base pay.
              </div>
            </div>

            {/* BAH coverage */}
            <div style={{ marginTop: 16, padding: 16, background: "rgba(255,255,255,0.06)", borderRadius: 12, border: "1px solid rgba(91,194,231,0.25)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "var(--gold)" }}>BAH COVERAGE</span>
                <span className="tabular" style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>{bahCoverage >= 100 ? "Fully covered" : Math.round(bahCoverage) + "%"}</span>
              </div>
              <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ width: Math.min(bahCoverage, 100) + "%", height: "100%", background: bahCoverage >= 100 ? "#34C77B" : "var(--gold)", borderRadius: 4 }}></div>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 8, lineHeight: 1.5 }}>
                {bahCoverage >= 100 ? `Your BAH covers your full mortgage + ${usd(bah - totalPITI)} extra each month.` : `Out of pocket: ${usd(totalPITI - bah)}/mo on top of your BAH.`}
              </div>
            </div>

            {/* Breakdown */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <OutLine label="Principal & interest" v={usd(monthly)} />
              <OutLine label="Property tax" v={usd(tax)} />
              <OutLine label="Insurance" v={usd(ins)} />
              <OutLine label="PMI" v="$0" highlight />
            </div>

            {/* Funding fee */}
            <div style={{ marginTop: 20, padding: 16, background: disabilityWaived ? "rgba(52,199,123,0.1)" : "rgba(91,194,231,0.1)", border: "1px solid " + (disabilityWaived ? "rgba(52,199,123,0.3)" : "rgba(91,194,231,0.3)"), borderRadius: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>VA FUNDING FEE</span>
                <span className="tabular" style={{ fontSize: 16, fontWeight: 600, color: "#fff" }}>{disabilityWaived ? "Waived" : usd(fundingFee)}</span>
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                {disabilityWaived ? "Your service-connected disability rating waives this fee entirely." : `${fundingFeePct}% of loan amount · financed into your loan, not paid upfront`}
              </div>
            </div>

            {/* vs conventional */}
            <div style={{ marginTop: 16, padding: 16, background: "rgba(255,255,255,0.06)", borderRadius: 12 }}>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600, marginBottom: 10 }}>VS. CONVENTIONAL (5% DOWN + PMI)</div>
              <div className="tabular" style={{ fontSize: 24, fontWeight: 600, color: "var(--gold)" }}>{usd(Math.max(0, conventionalEquiv - totalPITI))}<span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/mo saved</span></div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>{usd(Math.max(0, conventionalEquiv - totalPITI) * 12 * years)} over {years} years</div>
            </div>

            <a href="#" style={{ display: "flex", justifyContent: "center", gap: 8, padding: "14px", fontSize: 14, fontWeight: 600, background: "var(--gold)", color: "var(--ink-on-cyan)", borderRadius: 10, marginTop: 24 }}>See what I qualify for now →</a>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 10.5, color: "var(--ink-mute)", lineHeight: 1.5 }}>
          Estimates based on current VA loan guidelines. Funding fee per 38 U.S.C. § 3729. Subject to credit and underwriting approval. Not a commitment to lend.
        </div>
      </section>

      {/* WHY VA */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Why VA" title="The benefits you earned, without the jargon." />
        <div className="col gap-3">
          {[
            ["$0", "down payment required", "VA covers 100% financing on eligible properties up to your entitlement."],
            ["$0", "private mortgage insurance", "No PMI — ever. Saves the average buyer ~$200/mo for the first several years."],
            ["–0.375%", "lower rate vs. conventional", "VA loans typically price 0.25–0.5% under comparable conventional loans."],
            ["100%", "reusable benefit", "Your entitlement restores after you sell. Use it again — no lifetime limit on uses."],
          ].map(([num, label, body]) => (
            <div key={label} style={{ padding: 22, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, borderTop: "3px solid var(--gold)" }}>
              <div className="tabular" style={{ fontSize: 38, fontWeight: 600, letterSpacing: "-0.028em", color: "var(--gold-deep)", lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)", marginTop: 6, marginBottom: 10 }}>{label}</div>
              <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Are you eligible?" title="The quick check." sub="Check any box below and you almost certainly qualify. We'll pull your Certificate of Eligibility (COE) for you." />
        <div style={{ background: "var(--bg-2)", borderRadius: 16, padding: 22 }}>
          {[
            ["Active duty service", "90+ continuous days wartime, or 181 days peacetime"],
            ["National Guard / Reserve", "6 years of service, or 90+ days under Title 32"],
            ["Veteran (honorably discharged)", "Service-era requirements apply — we verify for you"],
            ["Surviving spouse", "If your spouse died in service or from a service-connected disability"],
            ["Cadet / midshipman", "Service-academy grads after meeting service requirement"],
            ["Public Health Service / NOAA", "Commissioned officers, with qualifying service"],
          ].map(([t, s], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "22px 1fr", gap: 14, padding: "14px 0", borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
              <span style={{ width: 20, height: 20, borderRadius: 10, border: "1.5px solid var(--gold-deep)", display: "grid", placeItems: "center", color: "var(--gold-deep)", fontWeight: 700, fontSize: 11, marginTop: 2 }}>✓</span>
              <div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                <div style={{ fontSize: 12.5, color: "var(--ink-soft)", marginTop: 2 }}>{s}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#" style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16, padding: "13px", fontSize: 14, fontWeight: 600, background: "var(--ink)", color: "#fff", borderRadius: 10 }}>We'll pull your COE for you →</a>
      </section>

      {/* SAN DIEGO BASES */}
      <section className="b-section-warm" style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="San Diego military market" title="We work with every base in America's Finest City." />
        <div className="col gap-3">
          {[
            ["NB San Diego (32nd St)", "Chula Vista, Bonita, National City", "Avg VA loan: $612K"],
            ["MCAS Miramar", "Mira Mesa, Scripps Ranch, Tierrasanta", "Avg VA loan: $748K"],
            ["MCB Camp Pendleton", "Oceanside, Carlsbad, Vista", "Avg VA loan: $689K"],
            ["NAS North Island / Coronado", "Coronado, IB, Eastlake", "Avg VA loan: $1.2M"],
            ["NB Point Loma", "Point Loma, OB, Liberty Station", "Avg VA loan: $891K"],
            ["NMRTC Balboa", "Linda Vista, Bay Park, Hillcrest", "Avg VA loan: $720K"],
          ].map(([base, areas, avg], i) => (
            <div key={i} style={{ padding: 20, background: "#fff", border: "1px solid var(--line)", borderRadius: 14 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--gold-deep)" }}></span>
                <h3 style={{ fontSize: 15.5, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.005em" }}>{base}</h3>
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: 8 }}>{areas}</p>
              <div style={{ fontSize: 12, color: "var(--gold-deep)", fontWeight: 600 }}>{avg}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "56px 20px" }}>
        <MobHead eyebrow="Questions" title="From the briefing." />
        <MilitaryFAQ />
      </section>

      {/* CTA */}
      <section className="b-section-cyan" style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: 44, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 18 }}>
          Use the benefit. <span style={{ fontStyle: "italic" }}>You earned it.</span>
        </h2>
        <p style={{ fontSize: 16, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 28 }}>
          20-minute call, no obligation. We'll pull your COE and run the numbers for your rank and location.
        </p>
        <div className="col gap-3">
          <a href="#" className="b-btn b-btn-dark" style={{ justifyContent: "center", padding: "13px", background: "#fff", color: "var(--ink)" }}>Schedule a call →</a>
          <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" className="b-btn" style={{ justifyContent: "center", padding: "13px", background: "transparent", border: "1.5px solid var(--ink-on-cyan)", color: "var(--ink-on-cyan)" }}>Apply now</a>
        </div>
      </section>

      <MobFooter />
    </div>
  );
}

Object.assign(window, { MilitaryCalculatorMobile });
