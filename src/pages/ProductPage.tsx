import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(8,11,17,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(138,43,226,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={somidaxLogo} alt="Somidax" className="w-9 h-9 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-xl">Somidax</span>
        </Link>
        <Link to="/" className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.5)" }}>
          ← Back to Home
        </Link>
      </div>
    </nav>
  );
}

const features = [
  {
    category: "AI Engine",
    color: "#8A2BE2",
    items: [
      { name: "Natural Language Catalog Matching", desc: "Buyers describe products in plain language — our AI maps intent to your SKUs instantly across 50+ languages.", status: "Live" },
      { name: "Real-Time Inventory Sync", desc: "Bi-directional stock sync across Shopify, WooCommerce, BigCommerce, and Magento with sub-5s propagation.", status: "Live" },
      { name: "Dynamic Repricing Engine", desc: "Algorithmic price suggestions based on competitor data, demand signals, and your margin floors.", status: "Beta" },
      { name: "Multi-Store Price Comparison", desc: "Agents autonomously scan the Somidax network to surface the best offer for each buyer query.", status: "Live" },
      { name: "Returns & Warranty Orchestration", desc: "Automated return routing, refund triggers, and warranty claim management via agent-to-merchant API.", status: "Coming Soon" },
    ],
  },
  {
    category: "Somidax Pay",
    color: "#00F0FF",
    items: [
      { name: "Gasless Stablecoin Checkout", desc: "Zero gas fees for buyers and merchants. Vobit absorbs network costs and batches settlements.", status: "Live" },
      { name: "Sub-Second Settlement", desc: "Merchant accounts receive confirmed settlement in under 1 second — no T+2, no holds.", status: "Live" },
      { name: "Auto Fiat Conversion", desc: "Instantly convert stablecoin receipts to GBP, USD, or EUR at spot rate with zero slippage.", status: "Live" },
      { name: "Multi-Currency Payouts", desc: "Configure split payouts across currencies with custom allocation percentages per sale.", status: "Live" },
      { name: "Fraud Risk Scoring", desc: "On-chain transaction history and agent reputation scores reduce chargeback exposure by up to 94%.", status: "Beta" },
    ],
  },
  {
    category: "$SMDX Token Loyalty",
    color: "#A855F7",
    items: [
      { name: "Buyer Cashback (up to 8%)", desc: "Shoppers earn $SMDX on every qualifying agentic purchase, auto-deposited to their Web3 wallet.", status: "Live" },
      { name: "Merchant Fee Staking", desc: "Stake 10,000+ SMDX to unlock the 0.3% fee tier — the lowest settlement rate in the market.", status: "Live" },
      { name: "Governance Voting", desc: "1 SMDX = 1 vote. Shape protocol upgrades, treasury allocation, and fee schedules on-chain.", status: "Live" },
      { name: "Referral Yield", desc: "Earn 1.5% of settlement fees from referred merchants for 12 months, paid weekly in $SMDX.", status: "Live" },
      { name: "Loyalty Tier Programme", desc: "Tiered merchant badges (Bronze → Diamond) unlock priority support, analytics, and promotional slots.", status: "Beta" },
    ],
  },
  {
    category: "Integrations",
    color: "#4ADE80",
    items: [
      { name: "Shopify Plugin", desc: "1-click install from the Shopify App Store. Full catalog sync and agent checkout in under 20 minutes.", status: "Live" },
      { name: "WooCommerce Plugin", desc: "WordPress plugin with automatic REST API wiring, no developer required.", status: "Live" },
      { name: "BigCommerce App", desc: "Native BigCommerce channel integration with real-time webhook support.", status: "Live" },
      { name: "Magento Extension", desc: "Adobe Commerce / Magento 2 extension for enterprise stores.", status: "Beta" },
      { name: "Headless / API-first", desc: "Full REST and GraphQL API for custom storefronts. Webhooks for all order lifecycle events.", status: "Live" },
    ],
  },
];

const statusColor: Record<string, string> = {
  "Live": "#4ADE80",
  "Beta": "#FFBD2E",
  "Coming Soon": "#00F0FF",
};

export default function ProductPage() {
  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar />

      {/* Hero */}
      <div className="pt-32 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(138,43,226,0.12) 0%, transparent 60%)" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.3)" }}>
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Product Overview</span>
          </div>
          <h1 className="font-display font-900 text-white mb-5" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
            Every feature your store needs to go{" "}
            <span style={{ background: "linear-gradient(135deg, #8A2BE2, #00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              AI-native
            </span>
          </h1>
          <p className="text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Somidax is a composable three-layer protocol — AI Engine, Pay, and Token — designed to work independently or together. Pick what you need.
          </p>
        </div>
      </div>

      {/* Feature categories */}
      <div className="max-w-6xl mx-auto px-6 pb-32 space-y-16">
        {features.map((cat) => (
          <div key={cat.category}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 rounded-full" style={{ background: cat.color }} />
              <h2 className="font-display font-700 text-white text-xl">{cat.category}</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.items.map((item) => (
                <div key={item.name} className="rounded-2xl p-5 transition-all duration-200 hover:border-opacity-60"
                  style={{ background: "rgba(18,15,36,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display font-600 text-white text-sm leading-snug flex-1 pr-2">{item.name}</h3>
                    <span className="flex-shrink-0 px-2 py-0.5 rounded-full font-mono-data text-xs"
                      style={{ background: `${statusColor[item.status]}15`, color: statusColor[item.status], border: `1px solid ${statusColor[item.status]}30` }}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
