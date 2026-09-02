import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

const productLinks = [
  { label: "AI Engine",     href: "/product/ai-engine" },
  { label: "Somidax Pay",   href: "/product/somidax-pay" },
  { label: "Token Loyalty", href: "/product/token-loyalty" },
  { label: "Integrations",  href: "/product/integrations" },
  { label: "Pricing",       href: "/product/pricing" },
];

export function PageShell({ children, active }: { children: React.ReactNode; active: string }) {
  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50"
        style={{ background: "rgba(8,11,17,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(138,43,226,0.15)" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain" style={{ background: "#fff" }} />
            <span className="font-display font-700 text-white text-lg">Somidax</span>
          </Link>

          {/* Product sub-nav */}
          <div className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {productLinks.map((l) => (
              <Link key={l.href} to={l.href}
                className="px-3 py-1.5 rounded-lg font-display font-500 text-sm transition-all duration-150"
                style={{
                  background: active === l.label ? "rgba(138,43,226,0.18)" : "transparent",
                  color: active === l.label ? "#fff" : "rgba(255,255,255,0.45)",
                  borderBottom: active === l.label ? "1px solid rgba(138,43,226,0.5)" : "1px solid transparent",
                }}>
                {l.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="text-sm font-500 transition-colors hover:text-white hidden md:block" style={{ color: "rgba(255,255,255,0.4)" }}>← Home</Link>
            <Link to="/signin"
              className="text-sm font-600 px-4 py-2 rounded-lg transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 12px rgba(138,43,226,0.35)" }}>
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer strip */}
      <div className="py-10 px-6 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {productLinks.map((l) => (
            <Link key={l.href} to={l.href}
              className="text-sm font-500 transition-colors hover:text-white"
              style={{ color: active === l.label ? "#00F0FF" : "rgba(255,255,255,0.4)" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/signin"
          className="inline-flex items-center gap-2 font-display font-700 px-8 py-3.5 rounded-xl transition-all hover:scale-105 text-sm"
          style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 24px rgba(138,43,226,0.4)" }}>
          Connect Your Storefront →
        </Link>
        <p className="text-xs mt-6" style={{ color: "rgba(255,255,255,0.25)" }}>© 2026 Somidax Network Ltd.</p>
      </div>
    </div>
  );
}
