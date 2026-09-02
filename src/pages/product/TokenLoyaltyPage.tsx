import { PageShell } from "./PageShell";
import { Link } from "react-router-dom";

const tiers = [
  { name: "Spark", min: "0", max: "499", color: "#94A3B8", cashback: "1%", perks: ["Basic AI discovery", "Standard settlement", "Monthly statement"] },
  { name: "Core", min: "500", max: "4,999", color: "#4ADE80", cashback: "2%", perks: ["Priority AI matching", "Reduced fee: 0.45%", "Weekly payouts"] },
  { name: "Surge", min: "5,000", max: "24,999", color: "#00F0FF", cashback: "3.5%", perks: ["Dedicated AI agent pool", "Reduced fee: 0.4%", "Daily payouts", "Catalog boost"] },
  { name: "Apex", min: "25,000", max: "∞", color: "#8A2BE2", cashback: "5%", perks: ["Custom AI model fine-tuning", "Reduced fee: 0.3%", "Real-time payouts", "24/7 priority support", "DAO voting weight ×3"] },
];

const howTokensWork = [
  { step: "01", title: "Buyer completes an order", desc: "Every successful checkout on the Somidax network earns $SMDX — automatically credited to the buyer's wallet." },
  { step: "02", title: "Merchant matches the reward", desc: "Merchants set a match rate (1x–3x) to incentivise repeat purchases. Higher matches = more discovery priority." },
  { step: "03", title: "Tokens stake for tier benefits", desc: "Buyers and merchants stake $SMDX to unlock higher cashback rates, lower fees, and premium AI features." },
  { step: "04", title: "Redemption at any connected store", desc: "Staked or free-floating $SMDX redeems at face value against any order across the entire network." },
];

export default function TokenLoyaltyPage() {
  return (
    <PageShell active="Token Loyalty">
      {/* Hero */}
      <div className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(138,43,226,0.12) 0%, rgba(0,240,255,0.06) 50%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.3)" }}>
            <span className="w-2 h-2 rounded-full pulse-glow inline-block" style={{ background: "#8A2BE2" }} />
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>$SMDX Token · Dual-Chain · ETH + BNB</span>
          </div>
          <h1 className="font-display font-900 text-white mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.05 }}>
            Loyalty that{" "}
            <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              compounds
            </span>
          </h1>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Every order earns $SMDX. Stake it to lower your fees, boost your AI discovery ranking, and unlock cashback rates up to 5% — across every connected storefront in the network.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B" target="_blank" rel="noopener noreferrer"
              className="font-mono-data text-xs px-4 py-2 rounded-xl transition-all hover:opacity-80"
              style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.35)", color: "#818CF8" }}>
              ETH Contract ↗
            </a>
            <a href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb" target="_blank" rel="noopener noreferrer"
              className="font-mono-data text-xs px-4 py-2 rounded-xl transition-all hover:opacity-80"
              style={{ background: "rgba(251,191,36,0.08)", border: "1px solid rgba(251,191,36,0.3)", color: "#FCD34D" }}>
              BNB Contract ↗
            </a>
          </div>
        </div>
      </div>

      {/* Tier cards */}
      <div className="py-20 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-800 text-white text-center mb-4" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Merchant reward tiers
          </h2>
          <p className="text-center text-sm mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>Tier determined by $SMDX staked. Upgrade any time — downgrade never penalised.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((t) => (
              <div key={t.name} className="card-hover rounded-2xl p-6 flex flex-col"
                style={{ background: "rgba(18,15,36,0.85)", border: `1px solid ${t.color}28`, boxShadow: `0 0 30px ${t.color}10` }}>
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="font-display font-800 text-lg" style={{ color: t.color }}>{t.name}</div>
                    <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>{t.min}–{t.max} $SMDX</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display font-800 text-2xl" style={{ color: t.color }}>{t.cashback}</div>
                    <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>cashback</div>
                  </div>
                </div>
                <ul className="space-y-2 flex-1">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
                        <circle cx="6" cy="6" r="5.5" stroke={t.color} strokeOpacity="0.4" />
                        <polyline points="3.5 6 5.5 8 8.5 4" stroke={t.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/signin"
                  className="mt-5 text-center py-2.5 rounded-xl text-sm font-600 transition-all hover:opacity-80"
                  style={{ background: `${t.color}18`, color: t.color, border: `1px solid ${t.color}30` }}>
                  Stake for {t.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display font-800 text-white text-center mb-14" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            How $SMDX loyalty works
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {howTokensWork.map((s, i) => (
              <div key={i} className="rounded-2xl p-6 flex gap-4"
                style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-800 text-sm flex-shrink-0"
                  style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff" }}>
                  {s.step}
                </div>
                <div>
                  <h3 className="font-display font-700 text-white text-sm mb-2">{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Token stats banner */}
      <div className="py-14 px-6" style={{ background: "rgba(138,43,226,0.06)", borderTop: "1px solid rgba(138,43,226,0.12)", borderBottom: "1px solid rgba(138,43,226,0.12)" }}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label: "Total supply", value: "1B", unit: "$SMDX" },
            { label: "Circulating", value: "240M", unit: "$SMDX" },
            { label: "Staking APY", value: "12–28%", unit: "variable" },
            { label: "Chains", value: "2", unit: "ETH · BNB" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-display font-900 text-2xl text-white">{s.value}</div>
              <div className="font-mono-data text-xs mt-1" style={{ color: "#8A2BE2" }}>{s.unit}</div>
              <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
