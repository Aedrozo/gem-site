/* Simple geometric illustrations.
   Strictly basic shapes — house, gem, key, chart bars, etc.
   Two-tone using currentColor + an `accent` prop.            */

const HouseIllo = ({ size = 160, accent = "#BC8A3D" }) => (
  <svg width={size} height={size * 0.9} viewBox="0 0 160 144" fill="none" aria-hidden="true">
    <rect x="32" y="60" width="96" height="68" fill="currentColor" opacity="0.06" />
    <path d="M22 66 L80 18 L138 66" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <rect x="32" y="60" width="96" height="68" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <rect x="70" y="86" width="20" height="42" fill={accent} />
    <rect x="44" y="74" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="98" y="74" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" />
    <line x1="53" y1="74" x2="53" y2="92" stroke="currentColor" strokeWidth="1.5" />
    <line x1="44" y1="83" x2="62" y2="83" stroke="currentColor" strokeWidth="1.5" />
    <line x1="107" y1="74" x2="107" y2="92" stroke="currentColor" strokeWidth="1.5" />
    <line x1="98" y1="83" x2="116" y2="83" stroke="currentColor" strokeWidth="1.5" />
    {/* chimney */}
    <rect x="112" y="28" width="10" height="22" fill="currentColor" />
  </svg>
);

const GemIllo = ({ size = 140, accent = "#BC8A3D" }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none" aria-hidden="true">
    <path d="M30 50 L70 14 L110 50 L70 126 Z" fill={accent} />
    <path d="M30 50 L110 50" stroke="currentColor" strokeWidth="2" />
    <path d="M70 14 L70 126" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <path d="M50 50 L70 14 L90 50" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <path d="M30 50 L70 50 L70 126" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
    <path d="M110 50 L70 126" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
  </svg>
);

const KeyIllo = ({ size = 140, accent = "#BC8A3D" }) => (
  <svg width={size} height={size * 0.55} viewBox="0 0 140 78" fill="none" aria-hidden="true">
    <circle cx="32" cy="39" r="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="39" r="9" fill={accent} />
    <rect x="50" y="34" width="80" height="10" fill="currentColor" />
    <rect x="106" y="44" width="8" height="14" fill="currentColor" />
    <rect x="122" y="44" width="8" height="10" fill="currentColor" />
  </svg>
);

const ChartIllo = ({ size = 140, accent = "#BC8A3D" }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 140 120" fill="none" aria-hidden="true">
    <line x1="14" y1="14" x2="14" y2="106" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="106" x2="130" y2="106" stroke="currentColor" strokeWidth="1.5" />
    <rect x="30" y="78" width="14" height="28" fill="currentColor" opacity="0.7" />
    <rect x="52" y="56" width="14" height="50" fill="currentColor" opacity="0.7" />
    <rect x="74" y="42" width="14" height="64" fill="currentColor" opacity="0.7" />
    <rect x="96" y="22" width="14" height="84" fill={accent} />
    <path d="M30 70 L52 50 L74 38 L103 22" stroke={accent} strokeWidth="2.5" fill="none" />
    <circle cx="103" cy="22" r="4" fill={accent} />
  </svg>
);

const CoinsIllo = ({ size = 140, accent = "#BC8A3D" }) => (
  <svg width={size} height={size * 0.75} viewBox="0 0 140 106" fill="none" aria-hidden="true">
    <ellipse cx="70" cy="88" rx="48" ry="10" fill={accent} />
    <rect x="22" y="76" width="96" height="12" fill={accent} />
    <ellipse cx="70" cy="76" rx="48" ry="10" stroke="currentColor" strokeWidth="2" fill={accent} />
    <ellipse cx="70" cy="56" rx="40" ry="9" stroke="currentColor" strokeWidth="2" fill="currentColor" />
    <ellipse cx="70" cy="56" rx="40" ry="9" fill={accent} />
    <ellipse cx="70" cy="38" rx="30" ry="7" stroke="currentColor" strokeWidth="2" fill={accent} />
    <text x="70" y="42" textAnchor="middle" fontFamily="serif" fontWeight="700" fontSize="12" fill="currentColor">$</text>
  </svg>
);

const SunIllo = ({ size = 120, accent = "#BC8A3D" }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" aria-hidden="true">
    <circle cx="60" cy="60" r="22" fill={accent} />
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 60 + Math.cos(a) * 32, y1 = 60 + Math.sin(a) * 32;
      const x2 = 60 + Math.cos(a) * 50, y2 = 60 + Math.sin(a) * 50;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />;
    })}
  </svg>
);

const WaveIllo = ({ width = 200, height = 80, accent = "#BC8A3D" }) => (
  <svg width={width} height={height} viewBox="0 0 200 80" fill="none" aria-hidden="true" preserveAspectRatio="none">
    <path d="M0 50 Q 25 20, 50 50 T 100 50 T 150 50 T 200 50" stroke={accent} strokeWidth="3" fill="none" />
    <path d="M0 62 Q 25 32, 50 62 T 100 62 T 150 62 T 200 62" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
  </svg>
);

const DocIllo = ({ size = 120, accent = "#BC8A3D" }) => (
  <svg width={size} height={size * 1.2} viewBox="0 0 120 144" fill="none" aria-hidden="true">
    <rect x="14" y="10" width="92" height="120" fill="currentColor" opacity="0.04" stroke="currentColor" strokeWidth="2" />
    <rect x="26" y="26" width="60" height="6" fill="currentColor" />
    <rect x="26" y="42" width="68" height="3" fill="currentColor" opacity="0.5" />
    <rect x="26" y="50" width="68" height="3" fill="currentColor" opacity="0.5" />
    <rect x="26" y="58" width="40" height="3" fill="currentColor" opacity="0.5" />
    <rect x="26" y="78" width="68" height="32" fill={accent} opacity="0.7" />
    <path d="M26 102 L40 88 L54 96 L72 80 L94 92" stroke="currentColor" strokeWidth="2" fill="none" />
    <rect x="26" y="118" width="30" height="6" fill="currentColor" />
  </svg>
);

const MapIllo = ({ width = 240, height = 160, accent = "#BC8A3D" }) => (
  <svg width={width} height={height} viewBox="0 0 240 160" fill="none" aria-hidden="true">
    <rect width="240" height="160" fill="currentColor" opacity="0.04" />
    {Array.from({ length: 10 }).map((_, i) => (
      <line key={"h"+i} x1="0" y1={i*16} x2="240" y2={i*16} stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
    ))}
    {Array.from({ length: 16 }).map((_, i) => (
      <line key={"v"+i} x1={i*16} y1="0" x2={i*16} y2="160" stroke="currentColor" strokeWidth="0.5" opacity="0.18" />
    ))}
    <path d="M0 90 Q 60 80, 100 90 T 240 100" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.45" />
    <path d="M40 0 L60 60 L100 70 L120 160" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.45" />
    <circle cx="130" cy="78" r="22" fill={accent} opacity="0.18" />
    <path d="M130 60 a14 14 0 1 1 0 28 a14 14 0 1 1 0 -28 z M130 78 L130 100" stroke={accent} strokeWidth="2.5" fill="none" />
    <circle cx="130" cy="74" r="5" fill={accent} />
  </svg>
);

/* Resolve an asset path to a bundled blob URL when running as a standalone
   inlined file (window.__resources populated by the bundler); otherwise return
   the original path so the live preview keeps working. */
function assetUrl(path) {
  if (!path) return path;
  const R = (typeof window !== "undefined") && window.__resources;
  if (R) {
    const m = document.querySelector('meta[name="ext-resource-dependency"][content="' + path + '"]');
    if (m) { const id = m.getAttribute("data-resource-id"); if (R[id]) return R[id]; }
  }
  return path;
}
if (typeof window !== "undefined") window.assetUrl = assetUrl;

/* NEO mark — stylized M-in-hexagon brand mark approximation.
   Use the actual PNG (assets/neo-logo.png) when you need the full lockup. */
const NEOMark = ({ size = 38, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" aria-hidden="true">
    <path d="M30 2 L56 16 L56 44 L30 58 L4 44 L4 16 Z" fill={color} />
    <path d="M14 16 L22 16 L22 32 L30 24 L38 32 L38 16 L46 16 L46 44 L38 44 L38 38 L30 30 L22 38 L22 44 L14 44 Z" fill="white" />
  </svg>
);

/* Editorial photo placeholder — replaces the diagonal-stripe look.
   Sophisticated mesh-gradient frame with a small caption strip so it
   looks intentional even without a real photo. */
const PhotoSlot = ({ width, height, label = "PHOTO", radius = 0, fill = false }) => (
  <div style={{
    width: fill ? "100%" : width, height: fill ? "100%" : height,
    position: fill ? "absolute" : "relative", inset: fill ? 0 : undefined,
    overflow: "hidden",
    borderRadius: radius,
    background: `
      radial-gradient(circle at 30% 20%, rgba(91,194,231,0.35) 0%, transparent 55%),
      radial-gradient(circle at 75% 80%, rgba(10,10,10,0.4) 0%, transparent 60%),
      radial-gradient(circle at 50% 50%, rgba(10,10,10,0.7) 0%, rgba(10,10,10,0.92) 100%)
    `,
  }}>
    {/* film grain */}
    <div style={{
      position: "absolute", inset: 0, opacity: 0.25, mixBlendMode: "overlay",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 0.5px, transparent 0.5px)",
      backgroundSize: "3px 3px",
    }}></div>
    {/* corner frame marks */}
    {[
      { top: 20, left: 20, brT: "1px solid rgba(255,255,255,0.4)", brL: "1px solid rgba(255,255,255,0.4)" },
      { top: 20, right: 20, brT: "1px solid rgba(255,255,255,0.4)", brR: "1px solid rgba(255,255,255,0.4)" },
      { bottom: 20, left: 20, brB: "1px solid rgba(255,255,255,0.4)", brL: "1px solid rgba(255,255,255,0.4)" },
      { bottom: 20, right: 20, brB: "1px solid rgba(255,255,255,0.4)", brR: "1px solid rgba(255,255,255,0.4)" },
    ].map((s, i) => (
      <div key={i} style={{
        position: "absolute", width: 22, height: 22,
        top: s.top, left: s.left, right: s.right, bottom: s.bottom,
        borderTop: s.brT, borderBottom: s.brB, borderLeft: s.brL, borderRight: s.brR,
      }}></div>
    ))}
    {/* center caption */}
    <div style={{
      position: "absolute", inset: 0, display: "grid", placeItems: "center",
      color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-mono)", fontSize: 10,
      letterSpacing: "0.18em", textTransform: "uppercase",
    }}>
      <span style={{ padding: "5px 10px", border: "1px solid rgba(255,255,255,0.25)", borderRadius: 3 }}>{label}</span>
    </div>
  </div>
);

Object.assign(window, { HouseIllo, GemIllo, KeyIllo, ChartIllo, CoinsIllo, SunIllo, WaveIllo, DocIllo, MapIllo, PhotoSlot, NEOMark });

/* ---------- Contact form → email relay ----------
   FormSubmit.co AJAX endpoint: no account needed; submissions email to the
   team inbox. First-ever submission triggers a one-time activation email to
   that inbox — until it's confirmed, messages don't deliver. */
async function sendInquiry(rootId, interest, timeline) {
  const root = document.getElementById(rootId);
  const val = (n) => { const el = root && root.querySelector('[name="' + n + '"]'); return el ? el.value.trim() : ""; };
  const payload = {
    _subject: "Website inquiry — " + (val("name") || "new lead"),
    _template: "table",
    _captcha: "false",
    _replyto: val("email"),
    name: val("name"),
    email: val("email"),
    phone: val("phone"),
    interest: interest || "",
    timeline: timeline || "",
    message: val("message"),
    page: (typeof window !== "undefined" ? window.location.href : ""),
  };
  const res = await fetch("https://formsubmit.co/ajax/team@gemhometeam.com", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("HTTP " + res.status);
  return res.json();
}
if (typeof window !== "undefined") window.sendInquiry = sendInquiry;
