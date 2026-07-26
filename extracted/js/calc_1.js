/* ============================================================
   Military markets — all 50 states + DC
   Each state has 1-4 major metros relevant to military buyers.
   Numbers: median home price + E-6 w/dependents BAH (or local median rent
   for states without a major installation, used as MHA approximation).
   ============================================================ */

const MILITARY_MARKETS = {
  AL: { name: "Alabama",        cities: [
    { name: "Huntsville (Redstone Arsenal)",    price: 318000, bah: 1872 },
    { name: "Montgomery (Maxwell AFB)",          price: 232000, bah: 1488 },
    { name: "Mobile",                            price: 218000, bah: 1407 },
  ]},
  AK: { name: "Alaska",         cities: [
    { name: "Anchorage (JBER)",                  price: 412000, bah: 2253 },
    { name: "Fairbanks (Fort Wainwright)",       price: 285000, bah: 1842 },
  ]},
  AZ: { name: "Arizona",        cities: [
    { name: "Tucson (Davis-Monthan AFB)",        price: 348000, bah: 1722 },
    { name: "Phoenix (Luke AFB)",                price: 428000, bah: 1995 },
    { name: "Sierra Vista (Fort Huachuca)",      price: 268000, bah: 1467 },
    { name: "Yuma (MCAS Yuma)",                  price: 282000, bah: 1428 },
  ]},
  AR: { name: "Arkansas",       cities: [
    { name: "Jacksonville (Little Rock AFB)",    price: 198000, bah: 1428 },
    { name: "Fayetteville",                      price: 312000, bah: 1521 },
  ]},
  CA: { name: "California",     cities: [
    { name: "San Diego — Miramar (MCAS)",        price: 748000, bah: 3702 },
    { name: "San Diego — 32nd St (NB)",          price: 612000, bah: 3402 },
    { name: "Oceanside (Camp Pendleton)",        price: 689000, bah: 3573 },
    { name: "Coronado (NAS North Island)",       price: 1200000, bah: 3786 },
    { name: "Point Loma (NB Point Loma)",        price: 891000, bah: 3624 },
    { name: "Twentynine Palms (MCAGCC)",         price: 245000, bah: 1644 },
    { name: "Monterey (NPS / DLI)",              price: 928000, bah: 3411 },
    { name: "Lemoore (NAS Lemoore)",             price: 348000, bah: 2049 },
    { name: "Travis AFB area (Fairfield)",       price: 612000, bah: 2904 },
    { name: "Beale AFB area (Marysville)",       price: 398000, bah: 2241 },
    { name: "Edwards AFB area (Palmdale)",       price: 472000, bah: 2196 },
    { name: "Los Angeles",                       price: 985000, bah: 3531 },
  ]},
  CO: { name: "Colorado",       cities: [
    { name: "Colorado Springs (Fort Carson)",    price: 462000, bah: 2238 },
    { name: "Aurora (Buckley SFB)",              price: 498000, bah: 2436 },
    { name: "Denver",                            price: 562000, bah: 2598 },
  ]},
  CT: { name: "Connecticut",    cities: [
    { name: "Groton (NSB New London)",           price: 348000, bah: 2196 },
    { name: "Hartford",                          price: 312000, bah: 2058 },
  ]},
  DE: { name: "Delaware",       cities: [
    { name: "Dover (Dover AFB)",                 price: 312000, bah: 1758 },
    { name: "Wilmington",                        price: 348000, bah: 1845 },
  ]},
  DC: { name: "District of Columbia", cities: [
    { name: "Washington DC (Joint Base Anacostia-Bolling)", price: 612000, bah: 3024 },
  ]},
  FL: { name: "Florida",        cities: [
    { name: "Jacksonville (NAS Jacksonville)",   price: 318000, bah: 1962 },
    { name: "Pensacola (NAS Pensacola)",         price: 268000, bah: 1632 },
    { name: "Tampa (MacDill AFB)",               price: 412000, bah: 2358 },
    { name: "Panama City (Tyndall AFB)",         price: 318000, bah: 1611 },
    { name: "Crestview (Eglin AFB)",             price: 298000, bah: 1647 },
    { name: "Niceville (Hurlburt Field)",        price: 312000, bah: 1722 },
    { name: "Key West (NAS Key West)",           price: 745000, bah: 3174 },
    { name: "Orlando",                           price: 382000, bah: 2058 },
    { name: "Homestead (Homestead ARB)",         price: 412000, bah: 2412 },
    { name: "Miami",                             price: 568000, bah: 2541 },
  ]},
  GA: { name: "Georgia",        cities: [
    { name: "Hinesville (Fort Stewart)",         price: 228000, bah: 1545 },
    { name: "Columbus (Fort Moore)",             price: 218000, bah: 1419 },
    { name: "Augusta (Fort Eisenhower)",         price: 248000, bah: 1572 },
    { name: "Savannah (Hunter AAF)",             price: 312000, bah: 1731 },
    { name: "Valdosta (Moody AFB)",              price: 228000, bah: 1383 },
    { name: "Warner Robins (Robins AFB)",        price: 228000, bah: 1413 },
    { name: "Marietta (Dobbins ARB / Atlanta)",  price: 412000, bah: 2061 },
  ]},
  HI: { name: "Hawaii",         cities: [
    { name: "Honolulu / Pearl Harbor (JBPHH)",   price: 845000, bah: 3801 },
    { name: "Kaneohe Bay (MCBH)",                price: 985000, bah: 3915 },
    { name: "Schofield Barracks (Wahiawa)",      price: 745000, bah: 3702 },
  ]},
  ID: { name: "Idaho",          cities: [
    { name: "Mountain Home (Mountain Home AFB)", price: 298000, bah: 1473 },
    { name: "Boise",                             price: 482000, bah: 1758 },
  ]},
  IL: { name: "Illinois",       cities: [
    { name: "North Chicago (NS Great Lakes)",    price: 248000, bah: 1953 },
    { name: "Belleville (Scott AFB)",            price: 218000, bah: 1647 },
    { name: "Chicago",                           price: 348000, bah: 2289 },
    { name: "Rock Island (RI Arsenal)",          price: 168000, bah: 1359 },
  ]},
  IN: { name: "Indiana",        cities: [
    { name: "Indianapolis",                      price: 282000, bah: 1572 },
    { name: "Crane (NSA Crane / Bloomington)",   price: 232000, bah: 1419 },
  ]},
  IA: { name: "Iowa",           cities: [
    { name: "Des Moines",                        price: 268000, bah: 1431 },
    { name: "Cedar Rapids",                      price: 232000, bah: 1338 },
  ]},
  KS: { name: "Kansas",         cities: [
    { name: "Junction City (Fort Riley)",        price: 198000, bah: 1338 },
    { name: "Leavenworth (Fort Leavenworth)",    price: 228000, bah: 1500 },
    { name: "Wichita (McConnell AFB)",           price: 218000, bah: 1392 },
    { name: "Topeka",                            price: 198000, bah: 1338 },
  ]},
  KY: { name: "Kentucky",       cities: [
    { name: "Radcliff (Fort Knox)",              price: 228000, bah: 1545 },
    { name: "Hopkinsville (Fort Campbell)",      price: 228000, bah: 1500 },
    { name: "Louisville",                        price: 268000, bah: 1542 },
    { name: "Lexington",                         price: 312000, bah: 1602 },
  ]},
  LA: { name: "Louisiana",      cities: [
    { name: "Leesville (Fort Johnson)",          price: 198000, bah: 1428 },
    { name: "Bossier City (Barksdale AFB)",      price: 218000, bah: 1455 },
    { name: "Belle Chasse (NAS JRB)",            price: 268000, bah: 1722 },
    { name: "New Orleans",                       price: 298000, bah: 1782 },
  ]},
  ME: { name: "Maine",          cities: [
    { name: "Brunswick (former NAS Brunswick)",  price: 348000, bah: 1782 },
    { name: "Bangor",                            price: 268000, bah: 1455 },
  ]},
  MD: { name: "Maryland",       cities: [
    { name: "Aberdeen (APG)",                    price: 312000, bah: 2058 },
    { name: "Lexington Park (NAS Patuxent)",     price: 348000, bah: 2316 },
    { name: "Annapolis (USNA)",                  price: 562000, bah: 2754 },
    { name: "Bethesda (NSAB)",                   price: 745000, bah: 3024 },
    { name: "Fort Meade area",                   price: 412000, bah: 2451 },
    { name: "Baltimore",                         price: 318000, bah: 2241 },
  ]},
  MA: { name: "Massachusetts",  cities: [
    { name: "Bedford (Hanscom AFB)",             price: 712000, bah: 3204 },
    { name: "Cape Cod (Joint Base Cape Cod)",    price: 612000, bah: 2745 },
    { name: "Boston",                            price: 798000, bah: 3294 },
  ]},
  MI: { name: "Michigan",       cities: [
    { name: "Oscoda (former Wurtsmith AFB)",     price: 168000, bah: 1182 },
    { name: "Selfridge ANGB area (Mt Clemens)",  price: 248000, bah: 1602 },
    { name: "Detroit",                           price: 198000, bah: 1602 },
    { name: "Grand Rapids",                      price: 298000, bah: 1602 },
  ]},
  MN: { name: "Minnesota",      cities: [
    { name: "Minneapolis-St Paul",               price: 348000, bah: 2058 },
    { name: "Duluth",                            price: 232000, bah: 1383 },
  ]},
  MS: { name: "Mississippi",    cities: [
    { name: "Biloxi (Keesler AFB)",              price: 232000, bah: 1521 },
    { name: "Meridian (NAS Meridian)",           price: 168000, bah: 1338 },
    { name: "Columbus (Columbus AFB)",           price: 198000, bah: 1356 },
    { name: "Jackson",                           price: 218000, bah: 1383 },
  ]},
  MO: { name: "Missouri",       cities: [
    { name: "Waynesville (Fort Leonard Wood)",   price: 198000, bah: 1428 },
    { name: "Knob Noster (Whiteman AFB)",        price: 198000, bah: 1383 },
    { name: "St. Louis (Scott AFB area)",        price: 248000, bah: 1647 },
    { name: "Kansas City",                       price: 268000, bah: 1788 },
  ]},
  MT: { name: "Montana",        cities: [
    { name: "Great Falls (Malmstrom AFB)",       price: 318000, bah: 1542 },
    { name: "Billings",                          price: 382000, bah: 1602 },
  ]},
  NE: { name: "Nebraska",       cities: [
    { name: "Bellevue (Offutt AFB / Omaha)",     price: 268000, bah: 1602 },
    { name: "Lincoln",                           price: 248000, bah: 1428 },
  ]},
  NV: { name: "Nevada",         cities: [
    { name: "Las Vegas (Nellis AFB)",            price: 412000, bah: 2061 },
    { name: "Fallon (NAS Fallon)",               price: 412000, bah: 1968 },
    { name: "Reno",                              price: 482000, bah: 2196 },
  ]},
  NH: { name: "New Hampshire",  cities: [
    { name: "Portsmouth (Portsmouth NSY)",       price: 562000, bah: 2598 },
    { name: "Manchester",                        price: 412000, bah: 2196 },
  ]},
  NJ: { name: "New Jersey",     cities: [
    { name: "Wrightstown (JB McGuire-Dix-Lakehurst)", price: 312000, bah: 2541 },
    { name: "Picatinny Arsenal area (Dover)",    price: 412000, bah: 2541 },
    { name: "Newark / Jersey City",              price: 562000, bah: 3024 },
  ]},
  NM: { name: "New Mexico",     cities: [
    { name: "Alamogordo (Holloman AFB)",         price: 248000, bah: 1500 },
    { name: "Clovis (Cannon AFB)",               price: 198000, bah: 1383 },
    { name: "Albuquerque (Kirtland AFB)",        price: 348000, bah: 1788 },
    { name: "White Sands area (Las Cruces)",     price: 282000, bah: 1500 },
  ]},
  NY: { name: "New York",       cities: [
    { name: "Watertown (Fort Drum)",             price: 218000, bah: 1731 },
    { name: "West Point (USMA)",                 price: 498000, bah: 2904 },
    { name: "Rome (Griffiss / Rome Lab)",        price: 198000, bah: 1572 },
    { name: "Niagara Falls (NF ARS)",            price: 198000, bah: 1500 },
    { name: "New York City",                     price: 798000, bah: 3531 },
  ]},
  NC: { name: "North Carolina", cities: [
    { name: "Jacksonville (Camp Lejeune)",       price: 248000, bah: 1773 },
    { name: "Fayetteville (Fort Liberty)",       price: 285000, bah: 1893 },
    { name: "Goldsboro (Seymour Johnson AFB)",   price: 218000, bah: 1500 },
    { name: "Havelock (MCAS Cherry Point)",      price: 232000, bah: 1602 },
    { name: "Raleigh-Durham",                    price: 412000, bah: 2061 },
    { name: "Charlotte",                         price: 382000, bah: 1962 },
  ]},
  ND: { name: "North Dakota",   cities: [
    { name: "Minot (Minot AFB)",                 price: 282000, bah: 1500 },
    { name: "Grand Forks (Grand Forks AFB)",     price: 248000, bah: 1428 },
    { name: "Fargo",                             price: 298000, bah: 1500 },
  ]},
  OH: { name: "Ohio",           cities: [
    { name: "Dayton (Wright-Patterson AFB)",     price: 232000, bah: 1647 },
    { name: "Columbus",                          price: 298000, bah: 1647 },
    { name: "Cleveland",                         price: 198000, bah: 1500 },
    { name: "Cincinnati",                        price: 268000, bah: 1602 },
  ]},
  OK: { name: "Oklahoma",       cities: [
    { name: "Lawton (Fort Sill)",                price: 168000, bah: 1383 },
    { name: "Altus (Altus AFB)",                 price: 168000, bah: 1338 },
    { name: "Enid (Vance AFB)",                  price: 178000, bah: 1338 },
    { name: "Oklahoma City (Tinker AFB)",        price: 248000, bah: 1572 },
    { name: "Tulsa",                             price: 232000, bah: 1500 },
  ]},
  OR: { name: "Oregon",         cities: [
    { name: "Portland",                          price: 562000, bah: 2358 },
    { name: "Eugene",                            price: 482000, bah: 1962 },
  ]},
  PA: { name: "Pennsylvania",   cities: [
    { name: "Carlisle (USAWC)",                  price: 282000, bah: 1788 },
    { name: "Mechanicsburg (NSA Mech)",          price: 312000, bah: 1788 },
    { name: "Philadelphia",                      price: 282000, bah: 2196 },
    { name: "Pittsburgh",                        price: 232000, bah: 1647 },
  ]},
  RI: { name: "Rhode Island",   cities: [
    { name: "Newport (NSC Newport)",             price: 562000, bah: 2598 },
    { name: "Providence",                        price: 412000, bah: 2196 },
  ]},
  SC: { name: "South Carolina", cities: [
    { name: "Beaufort (MCRD / MCAS Beaufort)",   price: 412000, bah: 1962 },
    { name: "Charleston (JB Charleston)",        price: 412000, bah: 2196 },
    { name: "Columbia (Fort Jackson)",           price: 268000, bah: 1602 },
    { name: "Sumter (Shaw AFB)",                 price: 218000, bah: 1500 },
  ]},
  SD: { name: "South Dakota",   cities: [
    { name: "Rapid City (Ellsworth AFB)",        price: 348000, bah: 1647 },
    { name: "Sioux Falls",                       price: 298000, bah: 1500 },
  ]},
  TN: { name: "Tennessee",      cities: [
    { name: "Clarksville (Fort Campbell)",       price: 312000, bah: 1647 },
    { name: "Millington (NSA Mid-South)",        price: 248000, bah: 1602 },
    { name: "Tullahoma (Arnold AFB)",            price: 282000, bah: 1500 },
    { name: "Nashville",                         price: 412000, bah: 2061 },
    { name: "Memphis",                           price: 232000, bah: 1602 },
  ]},
  TX: { name: "Texas",          cities: [
    { name: "Killeen (Fort Cavazos)",            price: 268000, bah: 1659 },
    { name: "San Antonio (JB San Antonio)",      price: 298000, bah: 1782 },
    { name: "El Paso (Fort Bliss)",              price: 248000, bah: 1647 },
    { name: "Del Rio (Laughlin AFB)",            price: 198000, bah: 1338 },
    { name: "San Angelo (Goodfellow AFB)",       price: 232000, bah: 1455 },
    { name: "Wichita Falls (Sheppard AFB)",      price: 198000, bah: 1383 },
    { name: "Corpus Christi (NAS Corpus Christi)", price: 248000, bah: 1602 },
    { name: "Kingsville (NAS Kingsville)",       price: 218000, bah: 1500 },
    { name: "Abilene (Dyess AFB)",               price: 232000, bah: 1383 },
    { name: "Houston",                           price: 348000, bah: 2061 },
    { name: "Dallas-Fort Worth",                 price: 382000, bah: 2061 },
    { name: "Austin",                            price: 482000, bah: 2196 },
  ]},
  UT: { name: "Utah",           cities: [
    { name: "Ogden (Hill AFB)",                  price: 482000, bah: 2058 },
    { name: "Salt Lake City",                    price: 562000, bah: 2196 },
  ]},
  VT: { name: "Vermont",        cities: [
    { name: "Burlington",                        price: 412000, bah: 2196 },
    { name: "Montpelier",                        price: 348000, bah: 1788 },
  ]},
  VA: { name: "Virginia",       cities: [
    { name: "Norfolk (NS Norfolk)",              price: 385000, bah: 2196 },
    { name: "Virginia Beach (NAS Oceana / JEB)", price: 412000, bah: 2358 },
    { name: "Newport News (JB Langley-Eustis)",  price: 348000, bah: 2196 },
    { name: "Quantico (MCB Quantico)",           price: 562000, bah: 2904 },
    { name: "Arlington (Pentagon / JB Myer)",    price: 745000, bah: 3024 },
    { name: "Fort Belvoir area",                 price: 612000, bah: 2904 },
    { name: "Dahlgren (NSWC Dahlgren)",          price: 412000, bah: 2358 },
    { name: "Williamsburg",                      price: 412000, bah: 2196 },
  ]},
  WA: { name: "Washington",     cities: [
    { name: "Tacoma / Lakewood (JBLM)",          price: 562000, bah: 2598 },
    { name: "Bremerton (NB Kitsap)",             price: 562000, bah: 2598 },
    { name: "Oak Harbor (NAS Whidbey Island)",   price: 562000, bah: 2358 },
    { name: "Spokane (Fairchild AFB)",           price: 412000, bah: 1788 },
    { name: "Seattle",                           price: 798000, bah: 3024 },
  ]},
  WV: { name: "West Virginia",  cities: [
    { name: "Martinsburg (167th ANG)",           price: 282000, bah: 1788 },
    { name: "Charleston",                        price: 218000, bah: 1455 },
  ]},
  WI: { name: "Wisconsin",      cities: [
    { name: "Milwaukee",                         price: 282000, bah: 1647 },
    { name: "Madison (Truax Field)",             price: 348000, bah: 1788 },
  ]},
  WY: { name: "Wyoming",        cities: [
    { name: "Cheyenne (FE Warren AFB)",          price: 348000, bah: 1602 },
    { name: "Casper",                            price: 312000, bah: 1500 },
  ]},
};

Object.assign(window, { MILITARY_MARKETS });
