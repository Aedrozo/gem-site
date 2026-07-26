/* ============================================================
   Production entry — real, navigable website with REAL URLs.
   Path router (History API):  "/route" => page.
   "/#section" or "#section" => Home + smooth scroll to section.
   Responsive: Mobile variant below 1024px (tablets get the clean
   centered mobile column).
   ============================================================ */

const ROUTES = {
  "/":              { d: "BoldHome",           m: "BoldHomeMobile",           title: "San Diego Mortgage Lender", desc: "The GEM Home Team at NEO Home Loans, powered by Better — San Diego mortgage lending managed for the next 30 years, not just to closing." },
  "/home":          { d: "BoldHome",           m: "BoldHomeMobile",           title: "San Diego Mortgage Lender", desc: "The GEM Home Team at NEO Home Loans, powered by Better — San Diego mortgage lending managed for the next 30 years." },
  "/experience":    { d: "BoldFeatures",       m: "BoldFeaturesMobile",       title: "The NEO Experience", desc: "Mortgage Under Management, the NEO app, home concierge, and annual reviews — what you get when your lender stays for the next 30 years." },
  "/features":      { d: "BoldFeatures",       m: "BoldFeaturesMobile",       title: "The NEO Experience", desc: "Mortgage Under Management, the NEO app, home concierge, and annual reviews — what you get when your lender stays for the next 30 years." },
  "/technology":    { d: "BoldTech",           m: "BoldTechMobile",           title: "Technology", desc: "A San Diego team on Better's AI-native mortgage platform — the first fintech to fund over $110 billion in home loans." },
  "/about":         { d: "BoldAbout",          m: "BoldAboutMobile",          title: "About Megan & the GEM Home Team", desc: "Meet Megan Sawamura (NMLS #972639) and the GEM Home Team — San Diego mortgage advisors building generational wealth." },
  "/contact":       { d: "BoldContact",        m: "BoldContactMobile",        title: "Contact", desc: "Talk to the GEM Home Team. Call (858) 876-2506 or start a conversation about your timeline and numbers." },
  "/dashboard":     { d: "BoldDashboard",      m: "BoldDashboardMobile",      title: "Client Dashboard", desc: "Your mortgage, managed — loan status, equity tracking, and your team in one place." },
  "/va-calculator": { d: "MilitaryCalculator", m: "MilitaryCalculatorMobile", title: "VA Loan Calculator", desc: "A VA loan calculator built for service members and veterans — funding fee, disability waiver, BAH, and San Diego MHA modeled in." },
  "/total-cost-analysis": { d: "TotalCostAnalysis", m: "TotalCostAnalysisMobile", title: "Total Cost Analysis", desc: "Compare the full lifetime cost of two mortgage scenarios — monthly payment, total interest, total cost, and payoff date. See what a loan really costs, not just the rate." },
  "/insights":      { d: "InsightsHub",         m: "InsightsHubMobile",        title: "Insights & Guides", desc: "Plain-English mortgage guides from The GEM Home Team — buying, refinancing, VA loans, first-time buyers, and how to run the math." },
};

const SITE_NAME = "The GEM Home Team at NEO Home Loans";
const ORIGIN = "https://www.gemhometeam.com";

function normalizePath(p) {
  if (!p) return "/";
  p = p.replace(/\/+$/, "");      // strip trailing slash
  return p === "" ? "/" : p;
}

/* One-time: migrate any old hash routes (#/about) to real paths. */
(function migrateHash() {
  const h = window.location.hash || "";
  if (h.indexOf("#/") === 0) {
    const path = h.slice(1);       // "/about"
    window.history.replaceState({}, "", normalizePath(path) + window.location.search);
  }
})();

function useLocation() {
  const [loc, setLoc] = React.useState({ path: normalizePath(window.location.pathname), hash: window.location.hash });
  React.useEffect(() => {
    const on = () => setLoc({ path: normalizePath(window.location.pathname), hash: window.location.hash });
    window.addEventListener("popstate", on);
    window.addEventListener("hashchange", on);
    // Intercept internal link clicks for client-side navigation.
    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href || a.target === "_blank" || a.hasAttribute("download")) return;
      // internal: "/path", "/path#sec", or "/#sec"
      if (href.charAt(0) !== "/") return;
      e.preventDefault();
      const [rawPath, rawHash] = href.split("#");
      const path = normalizePath(rawPath || "/");
      const url = path + (rawHash ? "#" + rawHash : "");
      if (path !== normalizePath(window.location.pathname) || rawHash) {
        window.history.pushState({}, "", url);
      }
      setLoc({ path, hash: rawHash ? "#" + rawHash : "" });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("popstate", on);
      window.removeEventListener("hashchange", on);
      document.removeEventListener("click", onClick);
    };
  }, []);
  return loc;
}

function useIsMobile() {
  const q = "(max-width: 1023px)";
  const [m, setM] = React.useState(() => window.matchMedia(q).matches);
  React.useEffect(() => {
    const mq = window.matchMedia(q);
    const on = (e) => setM(e.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return m;
}

/* Keyboard/touch nav dropdowns + lazy image decoding. Runs after render. */
function enhanceAfterRender() {
  document.querySelectorAll(".nav-dd").forEach((dd) => {
    if (dd.__wired) return;
    dd.__wired = true;
    const trigger = dd.querySelector(".nav-dd-trigger");
    if (trigger) {
      trigger.setAttribute("aria-haspopup", "true");
      trigger.setAttribute("aria-expanded", "false");
      trigger.addEventListener("click", (e) => {
        if (window.matchMedia("(hover: none)").matches && !dd.classList.contains("open")) e.preventDefault();
        const open = dd.classList.toggle("open");
        trigger.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }
  });
  if (!document.__navKeys) {
    document.__navKeys = true;
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") document.querySelectorAll(".nav-dd.open").forEach((d) => d.classList.remove("open"));
    });
    document.addEventListener("click", (e) => {
      document.querySelectorAll(".nav-dd.open").forEach((d) => { if (!d.contains(e.target)) d.classList.remove("open"); });
    });
  }
  document.querySelectorAll("img:not([data-opt])").forEach((img, i) => {
    img.setAttribute("data-opt", "1");
    img.decoding = "async";
    if (i > 2) img.loading = "lazy";
  });
}

function Site() {
  const { path, hash } = useLocation();
  const isMobile = useIsMobile();

  // Dynamic article route: /insights/<slug>
  const isArticle = path.indexOf("/insights/") === 0 && path.length > 10;
  let route, useMobile, Comp, compProps = null;
  if (isArticle) {
    useMobile = isMobile && !!window.InsightArticleMobile;
    Comp = useMobile ? window.InsightArticleMobile : window.InsightArticle;
    compProps = { slug: path.slice("/insights/".length) };
    route = { title: "", desc: "" }; // article sets its own title/meta
  } else {
    route = ROUTES[path] || ROUTES["/"];
    useMobile = isMobile && route.m && window[route.m];
    Comp = window[useMobile ? route.m : route.d] || window[route.d];
  }

  React.useEffect(() => {
    if (route.title) {
      document.title = route.title + " | " + SITE_NAME;
      const md = document.querySelector('meta[name="description"]');
      if (md && route.desc) md.setAttribute("content", route.desc);
    }
    let link = document.querySelector('link[rel="canonical"]');
    if (link) link.setAttribute("href", ORIGIN + (path === "/" ? "/" : path));
  }, [route, path]);

  React.useEffect(() => {
    enhanceAfterRender();
    const id = setTimeout(() => {
      const sec = (hash || "").replace(/^#/, "");
      if (sec) {
        const el = document.getElementById(sec);
        if (el) { el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      }
      window.scrollTo({ top: 0 });
    }, 0);
    return () => clearTimeout(id);
  }, [path, hash, isMobile]);

  if (!Comp) return React.createElement("div", { style: { padding: 48, fontFamily: "system-ui" } }, "Page not found.");
  const el = compProps ? React.createElement(Comp, compProps) : React.createElement(Comp);
  return useMobile ? React.createElement("div", { className: "site-mobile-shell" }, el) : el;
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Site));
