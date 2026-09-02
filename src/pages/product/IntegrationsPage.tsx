import { PageShell } from "./PageShell";
import { Link } from "react-router-dom";

const platforms = [
  { name: "Shopify", category: "E-commerce", color: "#95BF47", status: "GA", desc: "One-click OAuth install. Inventory, orders, and fulfilment sync in real-time." },
  { name: "WooCommerce", category: "E-commerce", color: "#7F54B3", status: "GA", desc: "REST API bridge. Supports variable products, custom post types, and HPOS." },
  { name: "BigCommerce", category: "E-commerce", color: "#34313F", status: "GA", desc: "Native B2B price lists, multi-storefront, and headless API supported." },
  { name: "Magento 2", category: "E-commerce", color: "#EE672F", status: "GA", desc: "Composer package. Full MSI inventory source sync and GraphQL catalogue." },
  { name: "Stripe", category: "Payments", color: "#635BFF", status: "GA", desc: "Fallback fiat rails. Card payments flow through Stripe, settled alongside $SMDX." },
  { name: "Salesforce Commerce", category: "Enterprise", color: "#00A1E0", status: "Beta", desc: "B2B pricebook sync and account-level AI agent personalisation." },
  { name: "SAP Commerce", category: "Enterprise", color: "#0070C0", status: "Beta", desc: "OMS and ERP inventory pushed to the Somidax network via IDOC bridge." },
  { name: "Klaviyo", category: "Marketing", color: "#00B400", status: "GA", desc: "AI-triggered purchase events feed directly into Klaviyo flows and segments." },
  { name: "Zapier", category: "Automation", color: "#FF4A00", status: "GA", desc: "2,000+ app triggers available. No-code workflow builder for non-dev teams." },
  { name: "Headless / Custom", category: "API", color: "#00F0FF", status: "GA", desc: "REST + Webhooks. Full SDK in TypeScript, Python, and Go for custom storefronts." },
  { name: "Contentful", category: "CMS", color: "#FFD85F", status: "GA", desc: "Product content and enriched descriptions sync bidirectionally via Content Model." },
  { name: "Attentive", category: "Marketing", color: "#FF5C8D", status: "Coming Q4", desc: "SMS + push notifications triggered by AI agent purchase events." },
];

const statusColor: Record<string, string> = {
  "GA": "#4ADE80",
  "Beta": "#FFBD2E",
  "Coming Q4": "#94A3B8",
};

export default function IntegrationsPage() {
  const categories = [...new Set(platforms.map((p) => p.category))];

  return (
    <PageShell active="Integrations">
      {/* Hero */}
      <div className="pt-28 pb-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 50% at 50% 30%, rgba(0,240,255,0.08) 0%, transparent 60%)" }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(0,240,255,0.07)", border: "1px solid rgba(0,240,255,0.2)" }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#4ADE80" }} />
            <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>12+ Native Integrations · REST API · Webhooks</span>
          </div>
          <h1 className="font-display font-900 text-white mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.05 }}>
            Connect your{" "}
            <span style={{ background: "linear-gradient(135deg,#00F0FF,#8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              entire stack
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Plug Somidax into the platforms you already use. Every integration syncs inventory, orders, and AI discovery signals in real-time — no middleware, no batch jobs.
          </p>
          <Link to="/developers"
            className="font-display font-700 px-7 py-3.5 rounded-xl text-sm transition-all hover:scale-105 inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 24px rgba(138,43,226,0.4)" }}>
            View API Docs →
          </Link>
        </div>
      </div>

      {/* Grid */}
      <div className="py-16 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          {categories.map((cat) => (
            <div key={cat} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <h2 className="font-display font-700 text-white text-sm uppercase tracking-widest">{cat}</h2>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {platforms.filter((p) => p.category === cat).map((p) => (
                  <div key={p.name} className="card-hover rounded-xl p-5 flex gap-4 items-start"
                    style={{ background: "rgba(18,15,36,0.85)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-800 text-sm flex-shrink-0"
                      style={{ background: `${p.color}18`, border: `1px solid ${p.color}28`, color: p.color }}>
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-display font-700 text-white text-sm">{p.name}</span>
                        <span className="font-mono-data text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                          style={{ background: `${statusColor[p.status]}18`, color: statusColor[p.status], border: `1px solid ${statusColor[p.status]}30` }}>
                          {p.status}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom integration CTA */}
      <div className="py-16 px-6">
        <div className="max-w-3xl mx-auto rounded-2xl p-8 text-center"
          style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(138,43,226,0.2)", boxShadow: "0 0 40px rgba(138,43,226,0.1)" }}>
          <div className="font-display font-800 text-white text-xl mb-3">Need a custom integration?</div>
          <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            The Somidax REST API and webhook system supports any platform. Full TypeScript, Python, and Go SDKs are available. Integration typically takes under a day.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/developers"
              className="font-display font-600 px-6 py-3 rounded-xl text-sm transition-all hover:opacity-80"
              style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.25)", color: "#00F0FF" }}>
              Read the API Docs
            </Link>
            <Link to="/signin"
              className="font-display font-600 px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff" }}>
              Start Building →
            </Link>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
