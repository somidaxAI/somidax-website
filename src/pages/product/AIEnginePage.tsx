import { PageShell } from "./PageShell";
import { Link } from "react-router-dom";

const capabilities = [
  {
    title: "Natural Language Product Discovery",
    desc: "Buyers type or say exactly what they want — 'noise-cancelling headphones under £250 that arrive tomorrow' — and the AI engine maps intent to real SKUs across every connected store in under 120ms.",
    icon: "◎",
    color: "#8A2BE2",
    stat: "< 120ms",
    statLabel: "Intent match latency",
  },
  {
    title: "Cross-Store Inventory Sync",
    desc: "Real-time bi-directional stock synchronisation across Shopify, WooCommerce, BigCommerce, Magento, and headless storefronts. Stock levels propagate in under 5 seconds — no stale listings, no overselling.",
    icon: "⟳",
    color: "#00F0FF",
    stat: "< 5s",
    statLabel: "Stock propagation",
  },
  {
    title: "Multi-Store Price Comparison",
    desc: "Agents autonomously query every relevant merchant in the network and surface the best available price, factoring in shipping, cashback eligibility, and buyer location.",
    icon: "≋",
    color: "#A855F7",
    stat: "18,400+",
    statLabel: "Stores scanned",
  },
  {
    title: "Dynamic Repricing Signals",
    desc: "Receive real-time competitor pricing signals and demand heatmaps. Set floor and ceiling rules — the engine adjusts your prices automatically within your defined margin boundaries.",
    icon: "▲",
    color: "#4ADE80",
    stat: "±0.1%",
    statLabel: "Pricing precision",
  },
  {
    title: "Semantic Catalog Enrichment",
    desc: "Upload any product feed and the AI engine automatically enriches titles, descriptions, and tags using your product images and specs — improving discoverability without manual effort.",
    icon: "◆",
    color: "#FFBD2E",
    stat: "50+",
    statLabel: "Languages supported",
  },
  {
    title: "Returns & Warranty Orchestration",
    desc: "Automated return routing, refund triggers, and warranty claim management via agent-to-merchant API. Buyers initiate returns in natural language — no forms, no friction.",
    icon: "↩",
    color: "#F87171",
    stat: "94%",
    statLabel: "Fewer support tickets",
  },
];

const howItWorks = [
  { step: "01", title: "Buyer expresses intent", desc: "A natural language query arrives via app, voice assistant, or chat interface." },
  { step: "02", title: "AI parses & classifies", desc: "The engine extracts product attributes, budget, urgency, and preference signals in milliseconds." },
  { step: "03", title: "Network query executes", desc: "Agents fan out across the Somidax merchant network and retrieve live inventory + pricing." },
  { step: "04", title: "Best match surfaced", desc: "A ranked result set is returned, with the optimal offer pre-selected based on buyer history." },
  { step: "05", title: "Agentic checkout fires", desc: "The buyer approves in one prompt — Somidax Pay settles in under one second." },
];

export default function AIEnginePage() {
  return (
    <PageShell active="AI Engine">
      {/* Hero */}
      <div className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 30% 50%, rgba(138,43,226,0.13) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: `linear-gradient(rgba(138,43,226,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.05) 1px, transparent 1px)`, backgroundSize: "60px 60px" }} />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.35)" }}>
              <span className="w-2 h-2 rounded-full pulse-glow inline-block" style={{ background: "#8A2BE2" }} />
              <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Intelligence Layer · Live</span>
            </div>
            <h1 className="font-display font-900 text-white mb-5" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", lineHeight: 1.05 }}>
              Somidax{" "}
              <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                AI Engine
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              The world's first autonomous commerce intelligence layer. Natural language product discovery, real-time inventory sync, and multi-store price comparison — all in under 120ms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/signin"
                className="font-display font-700 px-7 py-3.5 rounded-xl text-sm transition-all hover:scale-105 inline-flex items-center gap-2"
                style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 24px rgba(138,43,226,0.45)" }}>
                Connect Your Store →
              </Link>
              <Link to="/developers"
                className="font-display font-600 px-7 py-3.5 rounded-xl text-sm transition-all hover:scale-105 gradient-border"
                style={{ background: "rgba(0,240,255,0.07)", color: "#00F0FF" }}>
                View API Docs
              </Link>
            </div>
          </div>

          {/* Live query demo */}
          <div className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(138,43,226,0.25)", boxShadow: "0 0 40px rgba(138,43,226,0.15)" }}>
            <div className="px-5 py-3 flex items-center gap-2" style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
              <span className="font-mono-data text-xs ml-3" style={{ color: "rgba(255,255,255,0.3)" }}>Somidax AI Engine · Live Query</span>
            </div>
            <div className="p-5 space-y-3">
              {[
                { role: "buyer", msg: '"Find me noise-cancelling headphones under £250 arriving by tomorrow"' },
                { role: "agent", msg: "Scanning 18,400+ stores… 12 matching SKUs found." },
                { role: "agent", msg: "Best match: Sony WH-1000XM5 at Currys · £219.99 · Next-day delivery ✓" },
                { role: "agent", msg: "Applying $SMDX cashback: −£8.80 → Net £211.19. Proceed?" },
                { role: "buyer", msg: '"Yes, checkout now"' },
                { role: "agent", msg: "✓ Order confirmed · Settled in 0.8s · +8.80 SMDX credited." },
              ].map((m, i) => (
                <div key={i} className={`flex gap-3 ${m.role === "buyer" ? "justify-end" : "justify-start"}`}>
                  {m.role === "agent" && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-display font-700 text-xs"
                      style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", color: "#fff" }}>AI</div>
                  )}
                  <div className="px-3.5 py-2.5 rounded-2xl text-xs font-500 max-w-xs"
                    style={{
                      background: m.role === "buyer" ? "rgba(138,43,226,0.25)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${m.role === "buyer" ? "rgba(138,43,226,0.35)" : "rgba(255,255,255,0.08)"}`,
                      color: m.role === "buyer" ? "#fff" : "rgba(255,255,255,0.75)",
                    }}>
                    {m.msg}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Capabilities grid */}
      <div className="py-20 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-800 text-white mb-3" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>Six core capabilities</h2>
            <p className="text-base" style={{ color: "rgba(255,255,255,0.5)" }}>Everything the AI Engine does out of the box — no configuration required.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {capabilities.map((c) => (
              <div key={c.title} className="card-hover rounded-2xl p-6"
                style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${c.color}18`, border: `1px solid ${c.color}30`, color: c.color }}>
                    {c.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-display font-800 text-lg" style={{ color: c.color }}>{c.stat}</div>
                    <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{c.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display font-700 text-white text-base mb-2">{c.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-display font-800 text-white mb-3" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>How it works</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(180deg,rgba(138,43,226,0.5),rgba(0,240,255,0.3))" }} />
            <div className="space-y-6">
              {howItWorks.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 font-display font-800 text-lg relative z-10"
                    style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 20px rgba(138,43,226,0.3)" }}>
                    {s.step}
                  </div>
                  <div className="flex-1 pt-3">
                    <h3 className="font-display font-700 text-white text-base mb-1">{s.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
