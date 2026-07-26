/* ============================================================
   Military / VA Loan calculator page
   Dedicated tool for service members, veterans, and surviving spouses
   ============================================================ */
const { useState: useStateMC, useMemo: useMemoMC } = React;

function MilitaryCalculator() {
  // All 50 states + DC. See military-markets.jsx for the dataset.
  const STATES = Object.keys(MILITARY_MARKETS).sort((a, b) =>
    MILITARY_MARKETS[a].name.localeCompare(MILITARY_MARKETS[b].name)
  );

  const [stateCode, setStateCode] = useStateMC("CA");
  const stateData = MILITARY_MARKETS[stateCode];
  const [cityIdx, setCityIdx] = useStateMC(0);
  const city = stateData.cities[cityIdx] || stateData.cities[0];

  const [branch, setBranch] = useStateMC("army");
  const [grade, setGrade] = useStateMC("E-6");
  const [yearsServed, setYearsServed] = useStateMC(8);
  const [hasDependents, setHasDependents] = useStateMC(true);
  const [price, setPrice] = useStateMC(city.price);
  const [down, setDown] = useStateMC(0);
  const [rate, setRate] = useStateMC(5.875);
  const [years, setYears] = useStateMC(30);
  const [firstUse, setFirstUse] = useStateMC(true);
  const [disabilityWaived, setDisabilityWaived] = useStateMC(false);
  const [serviceType, setServiceType] = useStateMC("active");
  const [bah, setBah] = useStateMC(city.bah);

  // Derived: officer/enlisted from pay grade; BAS rate; BAH multiplier
  const isOfficer = isOfficerGrade(grade);
  const rank = isOfficer ? "officer" : "enlisted";
  // BAS — 2024 rates (rounded). Officer is lower; enlisted is higher.
  const BAS_ENLISTED = 465;   // /mo
  const BAS_OFFICER = 321;    // /mo
  const bas = isOfficer ? BAS_OFFICER : BAS_ENLISTED;

  // BAH for selected grade — multiply E-6 baseline by rank multiplier, then dependents adjustment
  const bahForGrade = Math.round(bah * (BAH_MULTIPLIER[grade] || 1));
  const bahForStatus = hasDependents ? bahForGrade : Math.round(bahForGrade * 0.85);

  // VA qualifying income: BAH + BAS are non-taxable, so lenders can "gross up"
  // by 1.25x to compare against taxable income (DTI calculations).
  const qualifyingMonthly = (bahForStatus + bas) * 1.25;

  // When state changes, reset city to first option
  React.useEffect(() => { setCityIdx(0); }, [stateCode]);
  // When city changes, auto-update price + BAH defaults
  React.useEffect(() => {
    setPrice(city.price);
    setBah(city.bah);
  }, [stateCode, cityIdx]);

  // Eligibility: simple rule-of-thumb display
  const meetsMinService = useMemoMC(() => {
    if (serviceType === "veteran" || serviceType === "spouse") return true;
    if (serviceType === "reserve") return yearsServed >= 6;
    // Active duty: 90 days wartime / 181 days peacetime — display "Yes" for 1+ year
    return yearsServed >= 1;
  }, [serviceType, yearsServed]);

  const downAmt = price * (down / 100);
  const fundingFeePct = useMemoMC(() => {
    if (disabilityWaived) return 0;
    // VA funding fee schedule (2024+ rates)
    // First use: 2.15% (<5%), 1.5% (5-9.99%), 1.25% (10%+)
    // Subsequent: 3.3% (<5%), 1.5% (5-9.99%), 1.25% (10%+)
    if (firstUse) {
      if (down < 5) return 2.15;
      if (down < 10) return 1.5;
      return 1.25;
    } else {
      if (down < 5) return 3.3;
      if (down < 10) return 1.5;
      return 1.25;
    }
  }, [firstUse, down, disabilityWaived]);

  const fundingFee = (price - downAmt) * fundingFeePct / 100;
  const principalFinanced = price - downAmt + fundingFee;
  const monthly = monthlyPayment(principalFinanced, rate, years);
  const tax = price * 0.0073 / 12;
  const ins = 120;
  const totalPITI = monthly + tax + ins;
  // VA loans do NOT require PMI — that's a key selling point
  const conventionalEquiv = monthlyPayment(price * 0.95, 6.375, years) + price * 0.0073 / 12 + 120 + (price * 0.95 * 0.005 / 12); // 0.5% PMI

  const bahCoverage = (bahForStatus / totalPITI) * 100;
  const usd = n => "$" + Math.round(n).toLocaleString();
  const usdK = n => "$" + Math.round(n / 1000).toLocaleString() + "K";

  return (
    <div className="b-page" data-screen-label="Bold · Military Calculator">
      <BoldNav active="Resources" />

      {/* HERO */}
      <section style={{ background: "var(--bg)", padding: "80px 0 56px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.4,
          backgroundImage: "radial-gradient(circle, var(--line-2) 1px, transparent 1px)",
          backgroundSize: "28px 28px", pointerEvents: "none" }}></div>
        <div className="b-container" style={{ position: "relative" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "8px 14px",
            background: "var(--accent-tint)", borderRadius: 999, marginBottom: 28,
            fontSize: 12, fontWeight: 600, color: "var(--gold-deep)" }}>
            ✦ For service members, veterans & surviving spouses
          </div>
          <h1 className="b-h1" style={{ maxWidth: 980, marginBottom: 24, fontSize: 76 }}>
            VA Loan calculator <span style={{ color: "var(--gold-deep)" }}>built for the people who served.</span>
          </h1>
          <p className="b-lede" style={{ maxWidth: 680 }}>
            Real numbers — funding fee, disability waiver, BAH coverage, San Diego MHA — modeled with the same math we use for our active-duty and veteran clients at MCAS Miramar, NB San Diego, and Camp Pendleton.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section style={{ padding: "0 0 120px" }}>
        <div className="b-container">
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 24, overflow: "hidden",
            boxShadow: "0 32px 80px -32px rgba(46,182,222,0.25)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 0 }}>

              {/* INPUTS */}
              <div style={{ padding: 48 }}>
                <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 16 }}>Your scenario</div>

                {/* Branch of service */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 10 }}>
                    Branch of service
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
                    {[
                      ["army", "Army"],
                      ["navy", "Navy"],
                      ["marines", "USMC"],
                      ["airforce", "AF"],
                      ["spaceforce", "USSF"],
                      ["coastguard", "USCG"],
                    ].map(([v, l]) => (
                      <button key={v} onClick={() => setBranch(v)}
                        style={{ padding: "10px 0", fontSize: 12, fontWeight: 600, borderRadius: 8,
                          background: branch === v ? "#fff" : "transparent",
                          color: branch === v ? "var(--ink)" : "var(--ink-soft)",
                          boxShadow: branch === v ? "0 2px 6px rgba(10,31,54,.08)" : "none" }}>{l}</button>
                    ))}
                  </div>
                </div>

                {/* Service status segmented */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 10 }}>
                    Service status
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
                    {[
                      ["active", "Active duty"],
                      ["reserve", "Reserve/NG"],
                      ["veteran", "Veteran"],
                      ["spouse", "Surviving"],
                    ].map(([v, l]) => (
                      <button key={v} onClick={() => setServiceType(v)}
                        style={{ padding: "10px 0", fontSize: 12, fontWeight: 600, borderRadius: 8,
                          background: serviceType === v ? "#fff" : "transparent",
                          color: serviceType === v ? "var(--ink)" : "var(--ink-soft)",
                          boxShadow: serviceType === v ? "0 2px 6px rgba(10,31,54,.08)" : "none" }}>{l}</button>
                    ))}
                  </div>
                </div>

                {/* Rank dropdown + dependents */}
                <div style={{ marginBottom: 24, display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 10 }}>
                      Rank
                    </label>
                    <div style={{ position: "relative" }}>
                      <select value={grade} onChange={e => setGrade(e.target.value)}
                        style={{
                          width: "100%", padding: "12px 32px 12px 14px",
                          border: "1px solid var(--line-2)", borderRadius: 8,
                          fontSize: 13.5, fontWeight: 500, color: "var(--ink)",
                          background: "var(--bg)", appearance: "none", cursor: "pointer",
                          outline: "none"
                        }}>
                        <optgroup label="Enlisted">
                          {ENLISTED_GRADES.map(g => (
                            <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>
                          ))}
                        </optgroup>
                        {/* Air Force / Space Force don't have warrants */}
                        {branch !== "airforce" && branch !== "spaceforce" && (
                          <optgroup label="Warrant">
                            {WARRANT_GRADES.filter(g => RANK_LABELS[g][branch]).map(g => (
                              <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>
                            ))}
                          </optgroup>
                        )}
                        <optgroup label="Officer">
                          {OFFICER_GRADES.map(g => (
                            <option key={g} value={g}>{g} · {RANK_LABELS[g][branch]}</option>
                          ))}
                        </optgroup>
                      </select>
                      <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                        color: "var(--ink-soft)", pointerEvents: "none", fontSize: 10 }}>▼</span>
                    </div>
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 10 }}>
                      Dependents
                    </label>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
                      {[[true, "With"], [false, "Without"]].map(([v, l]) => (
                        <button key={l} onClick={() => setHasDependents(v)}
                          style={{ padding: "10px 0", fontSize: 12, fontWeight: 600, borderRadius: 8,
                            background: hasDependents === v ? "#fff" : "transparent",
                            color: hasDependents === v ? "var(--ink)" : "var(--ink-soft)",
                            boxShadow: hasDependents === v ? "0 2px 6px rgba(10,31,54,.08)" : "none" }}>{l}</button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Years served */}
                <div style={{ marginBottom: 24 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>Years served</span>
                    <span className="tabular" style={{ fontSize: 15, color: "var(--ink)", fontWeight: 600 }}>
                      {yearsServed} {yearsServed === 1 ? "year" : "years"}
                      <span style={{ marginLeft: 10, padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 600,
                        background: meetsMinService ? "rgba(52,199,123,.15)" : "rgba(194,90,59,.15)",
                        color: meetsMinService ? "#1F8A5B" : "#C25A3B" }}>
                        {meetsMinService ? "✓ Meets min" : "Below min"}
                      </span>
                    </span>
                  </div>
                  <input type="range" min={0} max={30} step={1} value={yearsServed}
                    onChange={e => setYearsServed(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--gold)" }} />
                </div>

                {/* State + City */}
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: "block", fontSize: 13, color: "var(--ink-soft)", fontWeight: 500, marginBottom: 10 }}>
                    Where are you moving to?
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 8 }}>
                    {/* State */}
                    <div style={{ position: "relative" }}>
                      <select value={stateCode} onChange={e => setStateCode(e.target.value)}
                        style={{
                          width: "100%", padding: "12px 32px 12px 14px",
                          border: "1px solid var(--line-2)", borderRadius: 8,
                          fontSize: 14, fontWeight: 500, color: "var(--ink)",
                          background: "var(--bg)", appearance: "none", cursor: "pointer",
                          outline: "none"
                        }}>
                        {STATES.map(s => (
                          <option key={s} value={s}>{MILITARY_MARKETS[s].name}</option>
                        ))}
                      </select>
                      <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                        color: "var(--ink-soft)", pointerEvents: "none", fontSize: 10 }}>▼</span>
                    </div>
                    {/* City */}
                    <div style={{ position: "relative" }}>
                      <select value={cityIdx} onChange={e => setCityIdx(Number(e.target.value))}
                        style={{
                          width: "100%", padding: "12px 32px 12px 14px",
                          border: "1px solid var(--line-2)", borderRadius: 8,
                          fontSize: 14, fontWeight: 500, color: "var(--ink)",
                          background: "var(--bg)", appearance: "none", cursor: "pointer",
                          outline: "none"
                        }}>
                        {stateData.cities.map((c, i) => (
                          <option key={i} value={i}>{c.name}</option>
                        ))}
                      </select>
                      <span style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                        color: "var(--ink-soft)", pointerEvents: "none", fontSize: 10 }}>▼</span>
                    </div>
                  </div>
                  <div style={{ marginTop: 10, padding: "10px 12px", background: "var(--accent-tint)", borderRadius: 8,
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.5 }}>
                    <span style={{ fontWeight: 600, color: "var(--gold-deep)" }}>Local median:</span> {usd(city.price)} home · {usd(city.bah)}/mo BAH (E-6 w/ dependents)
                  </div>
                </div>

                <BoldSlider label={`Home price · ${city.name.split("(")[0].trim()} median`} value={price} min={120000} max={2500000} step={5000} format={usd} onChange={setPrice} />
                <BoldSlider label="Down payment" value={down} min={0} max={20} step={1} format={v => v + "%"} sub={down === 0 ? "$0 down · VA benefit" : usd(downAmt)} onChange={setDown} />
                <BoldSlider label="VA interest rate" value={rate} min={4.5} max={7.5} step={0.125} format={v => v.toFixed(3) + "%"} onChange={setRate} />

                {/* Term */}
                <div style={{ marginTop: 22, marginBottom: 24, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, padding: 4, background: "var(--bg-2)", borderRadius: 10 }}>
                  {[15, 20, 30].map(y => (
                    <button key={y} onClick={() => setYears(y)}
                      style={{ padding: "11px 0", fontSize: 13, fontWeight: 600, borderRadius: 8,
                        background: years === y ? "#fff" : "transparent",
                        color: years === y ? "var(--ink)" : "var(--ink-soft)",
                        boxShadow: years === y ? "0 2px 6px rgba(10,31,54,.08)" : "none" }}>{y}-year fixed</button>
                  ))}
                </div>

                {/* Toggles */}
                <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 24 }}>
                  <Toggle label="First time using VA loan benefit"
                    sub="Subsequent users pay a higher funding fee (3.3% vs 2.15%)"
                    value={firstUse} onChange={setFirstUse} />
                  <Toggle label="VA disability rating ≥ 10%"
                    sub="Waives the VA funding fee entirely. Also applies to surviving spouses receiving DIC."
                    value={disabilityWaived} onChange={setDisabilityWaived} />
                </div>

                {/* BAH input */}
                <div style={{ padding: 16, background: "var(--bg-2)", borderRadius: 12, marginBottom: 16 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>
                      Monthly BAH · {hasDependents ? "with" : "no"} dependents
                    </span>
                    <span className="tabular" style={{ fontSize: 17, fontWeight: 600 }}>{usd(bahForStatus)}</span>
                  </div>
                  <input type="range" min={1000} max={5500} step={50} value={bah}
                    onChange={e => setBah(Number(e.target.value))}
                    style={{ width: "100%", accentColor: "var(--gold)" }} />
                  <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6 }}>
                    {city.name} MHA · {grade} ≈ {usd(bahForGrade)} (with deps). Adjusted from E-6 baseline {usd(city.bah)} by grade.
                  </div>
                </div>

                {/* BAS row */}
                <div style={{ padding: 16, background: "var(--bg-2)", borderRadius: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                    <span style={{ fontSize: 13, color: "var(--ink-soft)", fontWeight: 500 }}>
                      Monthly BAS · {rank === "officer" ? "officer" : "enlisted"} rate
                    </span>
                    <span className="tabular" style={{ fontSize: 17, fontWeight: 600 }}>{usd(bas)}</span>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 6 }}>
                    2024 rate · enlisted $465/mo, officer $321/mo. Counts as qualifying income.
                  </div>
                </div>
              </div>

              {/* OUTPUTS */}
              <div style={{ padding: 48, background: "linear-gradient(180deg, var(--ink) 0%, #0E2540 100%)", color: "#fff", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -100, right: -100, width: 280, height: 280, borderRadius: 140,
                  background: "radial-gradient(circle, rgba(91,194,231,0.35) 0%, rgba(91,194,231,0) 70%)" }}></div>

                <div style={{ position: "relative" }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: ".1em", fontWeight: 700, marginBottom: 12 }}>
                    YOUR ESTIMATED MONTHLY PAYMENT
                  </div>
                  <div className="tabular" style={{ fontSize: 72, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1, color: "#fff" }}>
                    {usd(totalPITI)}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginTop: 8 }}>
                    Principal · Interest · Tax · Insurance · No PMI
                  </div>

                  {/* Qualifying income callout */}
                  <div style={{ marginTop: 28, padding: 18, background: "linear-gradient(135deg, rgba(91,194,231,0.18) 0%, rgba(91,194,231,0.06) 100%)", border: "1px solid rgba(91,194,231,0.35)", borderRadius: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ fontSize: 11, fontWeight: 600, color: "var(--gold)", letterSpacing: ".08em" }}>QUALIFYING INCOME (BAH + BAS × 1.25)</span>
                    </div>
                    <div className="tabular" style={{ fontSize: 28, fontWeight: 600, color: "#fff", letterSpacing: "-0.02em" }}>
                      {usd(qualifyingMonthly)}<span style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/mo</span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 8, lineHeight: 1.5 }}>
                      BAH + BAS are tax-free. Lenders gross them up by <strong style={{ color: "var(--gold)" }}>1.25×</strong> to match taxable income for DTI. That's {usd(qualifyingMonthly * 12)}/yr in qualifying income from allowances alone — before your base pay.
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 14, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                      <div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>BAH ({hasDependents ? "w/ deps" : "no deps"})</div>
                        <div className="tabular" style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{usd(bahForStatus)}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>BAS ({rank === "officer" ? "officer" : "enlisted"})</div>
                        <div className="tabular" style={{ fontSize: 14, fontWeight: 600, color: "#fff" }}>{usd(bas)}</div>
                      </div>
                      <div>
                        <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>Gross-up</div>
                        <div className="tabular" style={{ fontSize: 14, fontWeight: 600, color: "var(--gold)" }}>1.25×</div>
                      </div>
                    </div>
                  </div>

                  {/* BAH coverage bar */}
                  <div style={{ marginTop: 28, padding: 18, background: "rgba(255,255,255,0.06)", borderRadius: 12, border: "1px solid rgba(91,194,231,0.25)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "var(--gold)" }}>BAH COVERAGE</span>
                      <span className="tabular" style={{ fontSize: 13, fontWeight: 600, color: "#fff" }}>
                        {bahCoverage >= 100 ? "Fully covered" : Math.round(bahCoverage) + "%"}
                      </span>
                    </div>
                    <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
                      <div style={{ width: Math.min(bahCoverage, 100) + "%", height: "100%",
                        background: bahCoverage >= 100 ? "#34C77B" : "var(--gold)", borderRadius: 4 }}></div>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 8, lineHeight: 1.5 }}>
                      {bahCoverage >= 100
                        ? `Your BAH covers your full mortgage + ${usd(bah - totalPITI)} extra each month.`
                        : `Out of pocket: ${usd(totalPITI - bah)}/mo on top of your BAH.`}
                    </div>
                  </div>

                  {/* Breakdown */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                    <OutLine label="Principal & interest" v={usd(monthly)} />
                    <OutLine label="Property tax" v={usd(tax)} />
                    <OutLine label="Insurance" v={usd(ins)} />
                    <OutLine label="PMI" v="$0" highlight />
                  </div>

                  {/* Funding fee callout */}
                  <div style={{ marginTop: 28, padding: 18, background: disabilityWaived ? "rgba(52,199,123,0.1)" : "rgba(91,194,231,0.1)", border: "1px solid " + (disabilityWaived ? "rgba(52,199,123,0.3)" : "rgba(91,194,231,0.3)"), borderRadius: 12 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
                      <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.7)" }}>VA FUNDING FEE</span>
                      <span className="tabular" style={{ fontSize: 17, fontWeight: 600, color: "#fff" }}>
                        {disabilityWaived ? "Waived" : usd(fundingFee)}
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                      {disabilityWaived
                        ? "Your service-connected disability rating waives this fee. You save the entire amount."
                        : `${fundingFeePct}% of loan amount · financed into your loan, not paid upfront`}
                    </div>
                  </div>

                  {/* vs conventional */}
                  <div style={{ marginTop: 28, padding: 18, background: "rgba(255,255,255,0.06)", borderRadius: 12 }}>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", letterSpacing: ".08em", fontWeight: 600, marginBottom: 10 }}>
                      VS. CONVENTIONAL LOAN (5% DOWN + PMI)
                    </div>
                    <div className="tabular" style={{ fontSize: 26, fontWeight: 600, color: "var(--gold)" }}>
                      {usd(Math.max(0, conventionalEquiv - totalPITI))}<span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", fontWeight: 400 }}>/mo saved</span>
                    </div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 6 }}>
                      {usd(Math.max(0, conventionalEquiv - totalPITI) * 12)}/yr · {usd(Math.max(0, conventionalEquiv - totalPITI) * 12 * years)} over {years} years
                    </div>
                  </div>

                  <a href="#contact" style={{ display: "flex", justifyContent: "center", gap: 8,
                    padding: "14px 24px", fontSize: 14, fontWeight: 600,
                    background: "var(--gold)", color: "var(--ink-on-cyan)",
                    borderRadius: 10, marginTop: 32 }}>
                    See what I qualify for now →
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 16, fontSize: 11, color: "var(--ink-mute)", textAlign: "center", maxWidth: 900, margin: "16px auto 0", lineHeight: 1.5 }}>
            Estimates based on current VA loan guidelines. Funding fee rates per 38 U.S.C. § 3729. APR, payment, and eligibility subject to credit and underwriting approval. Property tax estimate uses San Diego county effective rate of 0.73%. Insurance estimate is a regional average. Not a commitment to lend.
          </div>
        </div>
      </section>

      {/* WHY VA */}
      <section className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, marginBottom: 56, alignItems: "end" }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Why VA</div>
            </div>
            <div>
              <h2 className="b-h2" style={{ maxWidth: 720 }}>
                The benefits you <span style={{ color: "var(--gold-deep)" }}>earned</span>, finally explained without the jargon.
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {[
              ["$0", "down payment required", "Conventional loans typically require 5–20% down. VA covers 100% financing on eligible properties up to your entitlement."],
              ["$0", "private mortgage insurance", "No PMI — ever. Saves the average buyer ~$200/mo for the first several years of the loan."],
              ["–0.375%", "lower rate vs. conventional", "VA loans typically price 0.25–0.5% under comparable conventional loans, even with similar credit."],
              ["100%", "reusable benefit", "Your VA entitlement restores after you sell. Use it again. And again. There's no lifetime limit on uses."],
            ].map(([num, label, body], i) => (
              <div key={i} style={{ padding: 28, background: "#fff", border: "1px solid var(--line)", borderRadius: 16, borderTop: "3px solid var(--gold)" }}>
                <div className="tabular" style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.028em", color: "var(--gold-deep)", lineHeight: 1 }}>{num}</div>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--ink)", marginTop: 6, marginBottom: 12 }}>{label}</div>
                <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.55 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY CHECKLIST */}
      <section style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Are you eligible?</div>
              <h2 className="b-h2" style={{ marginBottom: 20 }}>The quick check.</h2>
              <p className="b-body" style={{ marginBottom: 28 }}>
                If you check any of the boxes on the right, you almost certainly qualify. We'll pull your Certificate of Eligibility (COE) on your behalf — no separate VA paperwork needed.
              </p>
              <a href="#" style={{ display: "inline-flex", alignItems: "center", gap: 8,
                padding: "13px 22px", fontSize: 14, fontWeight: 600,
                background: "var(--ink)", color: "#fff", borderRadius: 10 }}>
                We'll pull your COE for you →
              </a>
            </div>
            <div style={{ background: "var(--bg-2)", borderRadius: 16, padding: 40 }}>
              {[
                ["Active duty service", "90+ continuous days during wartime, or 181 days peacetime"],
                ["National Guard / Reserve", "6 years of service, or 90+ days under Title 32 (active service)"],
                ["Veteran (honorably discharged)", "Service-era requirements apply — we'll verify for you"],
                ["Surviving spouse", "If your spouse died in service or from a service-connected disability"],
                ["Cadet / midshipman", "USMA, USNA, USAFA, USCGA, USMMA grads after meeting service requirement"],
                ["Public Health Service / NOAA", "Commissioned officers, with qualifying service"],
              ].map(([t, s], i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "24px 1fr", gap: 16, padding: "16px 0",
                  borderTop: i === 0 ? "none" : "1px solid var(--line)" }}>
                  <span style={{ width: 20, height: 20, borderRadius: 10, border: "1.5px solid var(--gold-deep)",
                    display: "grid", placeItems: "center", color: "var(--gold-deep)", fontWeight: 700, fontSize: 11, marginTop: 2 }}>✓</span>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{t}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 2 }}>{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SAN DIEGO BASES */}
      <section className="b-section-warm" style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>San Diego military market</div>
          <h2 className="b-h2" style={{ marginBottom: 48, maxWidth: 720 }}>
            We work with every base in <span style={{ color: "var(--gold-deep)" }}>America's Finest City</span>.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {[
              ["NB San Diego (32nd St)", "Most popular areas: Chula Vista, Bonita, National City", "Avg VA loan: $612K"],
              ["MCAS Miramar", "Most popular areas: Mira Mesa, Scripps Ranch, Tierrasanta", "Avg VA loan: $748K"],
              ["MCB Camp Pendleton", "Most popular areas: Oceanside, Carlsbad, Vista", "Avg VA loan: $689K"],
              ["NAS North Island / Coronado", "Most popular areas: Coronado, IB, Eastlake", "Avg VA loan: $1.2M"],
              ["NB Point Loma", "Most popular areas: Point Loma, OB, Liberty Station", "Avg VA loan: $891K"],
              ["NMRTC Balboa", "Most popular areas: Linda Vista, Bay Park, Hillcrest", "Avg VA loan: $720K"],
            ].map(([base, areas, avg], i) => (
              <div key={i} style={{ padding: 24, background: "#fff", border: "1px solid var(--line)", borderRadius: 14 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 4, background: "var(--gold-deep)" }}></span>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.005em" }}>{base}</h3>
                </div>
                <p style={{ fontSize: 13, color: "var(--ink-soft)", lineHeight: 1.5, marginBottom: 8 }}>{areas}</p>
                <div style={{ fontSize: 12, color: "var(--gold-deep)", fontWeight: 600 }}>{avg}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "120px 0" }}>
        <div className="b-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80 }}>
            <div>
              <div className="b-eyebrow" style={{ color: "var(--gold-deep)", marginBottom: 14 }}>Questions</div>
              <h2 className="b-h2" style={{ maxWidth: 360 }}>From the briefing.</h2>
            </div>
            <MilitaryFAQ />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="b-section-cyan" style={{ padding: "120px 0", textAlign: "center" }}>
        <div className="b-container">
          <h2 style={{ fontSize: 80, fontWeight: 500, letterSpacing: "-0.035em", lineHeight: 1, color: "var(--ink-on-cyan)", marginBottom: 24, maxWidth: 800, margin: "0 auto 24px" }}>
            Use the benefit. <span style={{ fontStyle: "italic" }}>You earned it.</span>
          </h2>
          <p style={{ fontSize: 19, color: "var(--ink-on-cyan)", opacity: 0.82, marginBottom: 36, maxWidth: 600, margin: "0 auto 36px" }}>
            20-minute call, no obligation. We'll pull your COE, run the numbers for your rank and location, and tell you honestly what's available.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#" style={{ padding: "16px 32px", fontSize: 15, fontWeight: 600,
              background: "#fff", color: "var(--ink)", borderRadius: 10,
              boxShadow: "0 12px 32px -8px rgba(10,10,10,0.4)" }}>Schedule a call →</a>
            <a href="https://neohomeloans.com/start/r/130389" target="_blank" rel="noopener" style={{ padding: "16px 32px", fontSize: 15, fontWeight: 600,
              background: "transparent", color: "var(--ink-on-cyan)",
              border: "1.5px solid var(--ink-on-cyan)", borderRadius: 10 }}>Apply now</a>
          </div>
        </div>
      </section>

      <BoldFooter />
    </div>
  );
}

function Toggle({ label, sub, value, onChange }) {
  return (
    <button onClick={() => onChange(!value)}
      style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 16, padding: "16px 0", textAlign: "left",
        borderTop: "1px solid var(--line)", alignItems: "center" }}>
      <div>
        <div style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{label}</div>
        <div style={{ fontSize: 12, color: "var(--ink-soft)", marginTop: 4, lineHeight: 1.4 }}>{sub}</div>
      </div>
      <div style={{
        width: 44, height: 26, borderRadius: 13,
        background: value ? "var(--gold)" : "var(--line-2)",
        position: "relative", transition: "background .2s"
      }}>
        <div style={{
          position: "absolute", top: 3, left: value ? 21 : 3,
          width: 20, height: 20, borderRadius: 10, background: "#fff",
          transition: "left .2s", boxShadow: "0 1px 3px rgba(0,0,0,0.2)"
        }}></div>
      </div>
    </button>
  );
}

function OutLine({ label, v, highlight }) {
  return (
    <div>
      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", marginBottom: 4 }}>{label}</div>
      <div className="tabular" style={{ fontSize: 17, fontWeight: 600, color: highlight ? "var(--gold)" : "#fff" }}>
        {v}
        {highlight && <span style={{ fontSize: 10, marginLeft: 6, color: "var(--gold)", fontWeight: 500 }}>✓ VA</span>}
      </div>
    </div>
  );
}

function MilitaryFAQ() {
  const [open, setOpen] = useStateMC(0);
  const faqs = [
    {
      q: "Can I use my VA loan more than once?",
      a: "Yes. Your entitlement restores after you sell the property and pay off the loan. There's no lifetime cap on uses. Some clients use VA for their first home, sell it, then use VA again for the next one — all while saving on PMI each time."
    },
    {
      q: "What's the funding fee, and why?",
      a: "The funding fee keeps the VA loan program running without taxpayer cost. It's 2.15% for first-time use with 0% down, dropping to 1.25% with 10%+ down. Subsequent uses are higher (3.3% with 0% down). It's financed into your loan — not paid out of pocket. If you have a 10%+ disability rating, the fee is waived entirely."
    },
    {
      q: "Will using VA make my offer less competitive in San Diego?",
      a: "Not when it's structured right. VA offers a clean, fully-underwritten pre-approval that closes in 21–25 days. We coach you on appraisal contingencies and ask the seller to cover specific fees only when needed. Several of our active-duty clients have won against all-cash offers in 2025."
    },
    {
      q: "Can I buy a duplex or fourplex with VA?",
      a: "Yes — VA allows 2-, 3-, and 4-unit properties if you live in one as your primary residence. House-hacking with VA is one of the most underused wealth-building strategies in the military community."
    },
    {
      q: "Do you work with PCSing service members?",
      a: "Constantly. We handle PCS timing, BAH transitions, dual-state moves, and partner with VA-savvy real estate agents at every major fleet concentration area. We can also handle remote closings — you don't need to be in San Diego to start."
    },
    {
      q: "What if my credit took a hit during deployment?",
      a: "We work with credit profiles that conventional lenders bounce. VA has no minimum score by statute (lenders set their own — ours is 580 with manual underwriting available). We've closed loans for service members with bankruptcies, deployment-related credit dips, and complex situations."
    },
  ];

  return (
    <div>
      {faqs.map((f, i) => (
        <div key={i} style={{ borderTop: "1px solid var(--line)", borderBottom: i === faqs.length - 1 ? "1px solid var(--line)" : "none" }}>
          <button onClick={() => setOpen(open === i ? -1 : i)} style={{ width: "100%", padding: "24px 0", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24 }}>
            <span style={{ fontSize: 18, fontWeight: 500, color: "var(--ink)", letterSpacing: "-0.012em" }}>{f.q}</span>
            <span style={{ flexShrink: 0, width: 32, height: 32, borderRadius: 16,
              background: open === i ? "var(--gold)" : "transparent",
              border: open === i ? "none" : "1px solid var(--line-2)",
              color: open === i ? "var(--ink-on-cyan)" : "var(--ink)",
              display: "grid", placeItems: "center", fontSize: 16, transition: "all .2s", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
          </button>
          {open === i && <p style={{ paddingBottom: 24, fontSize: 15, color: "var(--ink-soft)", lineHeight: 1.6, maxWidth: 640 }}>{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { MilitaryCalculator, Toggle, OutLine, MilitaryFAQ });
