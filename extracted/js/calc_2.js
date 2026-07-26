/* ============================================================
   Military ranks by branch.
   Each grade (E-1..E-9, W-1..W-5, O-1..O-10) has a per-branch label.
   BAH multipliers applied to the E-6-w/-deps baseline from city data.
   ============================================================ */

// BAH multipliers vs. E-6 w/ dependents baseline (roughly drawn from DoD tables)
const BAH_MULTIPLIER = {
  "E-1": 0.62, "E-2": 0.62, "E-3": 0.66, "E-4": 0.72, "E-5": 0.85,
  "E-6": 1.00, "E-7": 1.10, "E-8": 1.18, "E-9": 1.28,
  "W-1": 1.05, "W-2": 1.16, "W-3": 1.26, "W-4": 1.34, "W-5": 1.42,
  "O-1": 0.95, "O-2": 1.08, "O-3": 1.28, "O-4": 1.42, "O-5": 1.50,
  "O-6": 1.58, "O-7": 1.66, "O-8": 1.72, "O-9": 1.74, "O-10": 1.76,
};

// Rank labels: { grade: { branch: "Display name" } }
const RANK_LABELS = {
  // ENLISTED
  "E-1":  { army: "Private (PVT)",                 navy: "Seaman Recruit (SR)",          marines: "Private (Pvt)",            airforce: "Airman Basic (AB)",        spaceforce: "Specialist 1 (Spc1)",     coastguard: "Seaman Recruit (SR)" },
  "E-2":  { army: "Private (PV2)",                 navy: "Seaman Apprentice (SA)",       marines: "Private First Class (PFC)", airforce: "Airman (Amn)",            spaceforce: "Specialist 2 (Spc2)",     coastguard: "Seaman Apprentice (SA)" },
  "E-3":  { army: "Private First Class (PFC)",     navy: "Seaman (SN)",                  marines: "Lance Corporal (LCpl)",    airforce: "Airman First Class (A1C)", spaceforce: "Specialist 3 (Spc3)",     coastguard: "Seaman (SN)" },
  "E-4":  { army: "Specialist / Corporal (SPC)",   navy: "Petty Officer 3rd Class (PO3)", marines: "Corporal (Cpl)",          airforce: "Senior Airman (SrA)",      spaceforce: "Specialist 4 (Spc4)",     coastguard: "Petty Officer 3rd Class (PO3)" },
  "E-5":  { army: "Sergeant (SGT)",                navy: "Petty Officer 2nd Class (PO2)", marines: "Sergeant (Sgt)",          airforce: "Staff Sergeant (SSgt)",    spaceforce: "Sergeant (Sgt)",          coastguard: "Petty Officer 2nd Class (PO2)" },
  "E-6":  { army: "Staff Sergeant (SSG)",          navy: "Petty Officer 1st Class (PO1)", marines: "Staff Sergeant (SSgt)",   airforce: "Technical Sergeant (TSgt)", spaceforce: "Technical Sergeant (TSgt)", coastguard: "Petty Officer 1st Class (PO1)" },
  "E-7":  { army: "Sergeant First Class (SFC)",    navy: "Chief Petty Officer (CPO)",    marines: "Gunnery Sergeant (GySgt)", airforce: "Master Sergeant (MSgt)",   spaceforce: "Master Sergeant (MSgt)",  coastguard: "Chief Petty Officer (CPO)" },
  "E-8":  { army: "Master Sergeant / 1SG (MSG)",   navy: "Senior Chief Petty Officer (SCPO)", marines: "Master Sergeant (MSgt)", airforce: "Senior Master Sergeant (SMSgt)", spaceforce: "Senior Master Sergeant (SMSgt)", coastguard: "Senior Chief Petty Officer (SCPO)" },
  "E-9":  { army: "Sergeant Major (SGM)",          navy: "Master Chief Petty Officer (MCPO)", marines: "Master Gunnery Sergeant (MGySgt)", airforce: "Chief Master Sergeant (CMSgt)", spaceforce: "Chief Master Sergeant (CMSgt)", coastguard: "Master Chief Petty Officer (MCPO)" },

  // WARRANT (no Air Force or Space Force warrants)
  "W-1":  { army: "Warrant Officer 1 (WO1)",       navy: "Warrant Officer 1 (WO1)",      marines: "Warrant Officer (WO)",     airforce: null, spaceforce: null, coastguard: "Warrant Officer 1 (WO1)" },
  "W-2":  { army: "Chief Warrant Officer 2 (CW2)", navy: "Chief Warrant Officer 2 (CWO2)", marines: "Chief Warrant Officer 2 (CWO2)", airforce: null, spaceforce: null, coastguard: "Chief Warrant Officer 2 (CWO2)" },
  "W-3":  { army: "Chief Warrant Officer 3 (CW3)", navy: "Chief Warrant Officer 3 (CWO3)", marines: "Chief Warrant Officer 3 (CWO3)", airforce: null, spaceforce: null, coastguard: "Chief Warrant Officer 3 (CWO3)" },
  "W-4":  { army: "Chief Warrant Officer 4 (CW4)", navy: "Chief Warrant Officer 4 (CWO4)", marines: "Chief Warrant Officer 4 (CWO4)", airforce: null, spaceforce: null, coastguard: "Chief Warrant Officer 4 (CWO4)" },
  "W-5":  { army: "Chief Warrant Officer 5 (CW5)", navy: "Chief Warrant Officer 5 (CWO5)", marines: "Chief Warrant Officer 5 (CWO5)", airforce: null, spaceforce: null, coastguard: null },

  // OFFICER
  "O-1":  { army: "Second Lieutenant (2LT)",       navy: "Ensign (ENS)",                 marines: "Second Lieutenant (2ndLt)", airforce: "Second Lieutenant (2d Lt)", spaceforce: "Second Lieutenant (2d Lt)", coastguard: "Ensign (ENS)" },
  "O-2":  { army: "First Lieutenant (1LT)",        navy: "Lieutenant Junior Grade (LTJG)", marines: "First Lieutenant (1stLt)", airforce: "First Lieutenant (1st Lt)", spaceforce: "First Lieutenant (1st Lt)", coastguard: "Lieutenant Junior Grade (LTJG)" },
  "O-3":  { army: "Captain (CPT)",                 navy: "Lieutenant (LT)",              marines: "Captain (Capt)",           airforce: "Captain (Capt)",           spaceforce: "Captain (Capt)",          coastguard: "Lieutenant (LT)" },
  "O-4":  { army: "Major (MAJ)",                   navy: "Lieutenant Commander (LCDR)",   marines: "Major (Maj)",             airforce: "Major (Maj)",              spaceforce: "Major (Maj)",             coastguard: "Lieutenant Commander (LCDR)" },
  "O-5":  { army: "Lieutenant Colonel (LTC)",      navy: "Commander (CDR)",              marines: "Lieutenant Colonel (LtCol)", airforce: "Lieutenant Colonel (Lt Col)", spaceforce: "Lieutenant Colonel (Lt Col)", coastguard: "Commander (CDR)" },
  "O-6":  { army: "Colonel (COL)",                 navy: "Captain (CAPT)",               marines: "Colonel (Col)",            airforce: "Colonel (Col)",            spaceforce: "Colonel (Col)",           coastguard: "Captain (CAPT)" },
  "O-7":  { army: "Brigadier General (BG)",        navy: "Rear Admiral Lower Half (RDML)", marines: "Brigadier General (BGen)", airforce: "Brigadier General (Brig Gen)", spaceforce: "Brigadier General (Brig Gen)", coastguard: "Rear Admiral Lower Half (RDML)" },
  "O-8":  { army: "Major General (MG)",            navy: "Rear Admiral (RADM)",          marines: "Major General (MajGen)",   airforce: "Major General (Maj Gen)",  spaceforce: "Major General (Maj Gen)", coastguard: "Rear Admiral (RADM)" },
  "O-9":  { army: "Lieutenant General (LTG)",      navy: "Vice Admiral (VADM)",          marines: "Lieutenant General (LtGen)", airforce: "Lieutenant General (Lt Gen)", spaceforce: "Lieutenant General (Lt Gen)", coastguard: "Vice Admiral (VADM)" },
  "O-10": { army: "General (GEN)",                 navy: "Admiral (ADM)",                marines: "General (Gen)",            airforce: "General (Gen)",            spaceforce: "General (Gen)",           coastguard: "Admiral (ADM)" },
};

const ENLISTED_GRADES = ["E-1","E-2","E-3","E-4","E-5","E-6","E-7","E-8","E-9"];
const WARRANT_GRADES = ["W-1","W-2","W-3","W-4","W-5"];
const OFFICER_GRADES = ["O-1","O-2","O-3","O-4","O-5","O-6","O-7","O-8","O-9","O-10"];

function isOfficerGrade(g) { return g.startsWith("O-") || g.startsWith("W-"); }

Object.assign(window, { BAH_MULTIPLIER, RANK_LABELS, ENLISTED_GRADES, WARRANT_GRADES, OFFICER_GRADES, isOfficerGrade });
