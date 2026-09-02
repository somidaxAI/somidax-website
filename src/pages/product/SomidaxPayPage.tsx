import { PageShell } from "./PageShell";
import { Link } from "react-router-dom";

const features = [
  { title: "0.5% Flat Fee", desc: "No percentage creep, no per-transaction surcharge on top. One simple rate for every order, every currency, every store.", icon: "◈", color: "#00F0FF", stat: "0.5%", statLabel: "vs 2.9% card average" },
  { title: "Sub-Second Settlement", desc: "Merchant accounts receive confirmed, spendable settlement in under one second — no T+2 delays, no holding periods, no chargeback windows.", icon: "⚡", color: "#4ADE80", stat: "< 1s", statLabel: "Confirmed settlement" },
  { title: "Gasless Transactions", desc: "Vobit absorbs all network gas fees. Buyers and merchants never touch gas — every transaction feels like a traditional card payment, settled on-chain.", icon: "○", color: "#A855F7", stat: "£0", statLabel: "Gas cost to merchant" },
  { title: "Auto Fiat Conversion", desc: "Stablecoin receipts convert to GBP, USD, or EUR at the spot rate the moment they land. Configure your split ratios from the dashboard.", icon: "⇄", color: "#FFBD2E", stat: "3", statLabel: "Fiat currencies" },
  { title: "Multi-Currency Payouts", desc: "Receive 60% GBP, 25% USD, 15% EUR automatically — or set any allocation. Zero slippage on conversion, settled to your bank account daily.", icon: "◉", color: "#8A2BE2", stat: "Daily", statLabel: "Bank payout cadence" },
  { title: "Fraud Risk Scoring", desc: "On-chain transaction history and buyer agent reputation scores reduce chargeback exposure by up to 94% compared to traditional card rails.", icon: "◇", color: "#F87171", stat: "−94%", statLabel: "Chargeback exposure" },
];

const comparison = [
  { label: "Settlement fee",       card: "2.9% + £0.30", somidax: "0.5% flat" },
  { label: "Time to cleared funds", card: "2–5 business days", somidax: "< 1 second" },
  { label: "Chargeback risk",       card: "High — buyer disputes", somidax: "Near-zero on-chain" },
  { label: "Gas / network fees",    card: "None (but FX markup)", somidax: "Absorbed by Vobit" },
  { label: "Currencies supported",  card: "Local card currency", somidax: "Stable + GBP/USD/EUR" },
  { label: "Settlement certainty",  card: "Reversible up to 120d", somidax: "Final on-chain, instant" },
  { label: "Merchant payout",       card: "Weekly / monthly batch", somidax: "Daily to your bank" },
];

export default function SomidaxPayPage() {
  return (
    <PageShell active="Somidax Pay">
      {/* Hero */}
      <div className="pt-28 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,240,255,0.1) 0%, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.25)" }}>
              <span className="w-2 h-2 rounded-full pulse-glow inline-block" style={{ background: "#00F0FF" }} />
              <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Settlement Layer · Powered by Vobit</span>
            </div>
            <h1 className="font-display font-900 text-white mb-5" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.05 }}>
              <span style={{ background: "linear-gradient(135deg,#00F0FF,#8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Somidax Pay
              </span>
            </h1>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
              Gasless, sub-second stablecoin settlement for every AI agent order. Funds hit your GBP, USD, or EUR account before the buyer closes their browser — at 0.5% flat.
            </p>
            <Link to="/signin"
              className="font-display font-700 px-7 py-3.5 rounded-xl text-sm transition-all hover:scale-105 inline-flex items-center gap-2"
              style={{ background: "linear-gradient(135deg,#00C4CC,#0088AA)", color: "#fff", boxShadow: "0 0 24px rgba(0,240,255,0.35)" }}>
              Start Accepting Payments →
            </Link>
          </div>

          {/* Settlement animation card */}
          <div className="rounded-2xl p-6" style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(0,240,255,0.2)", boxShadow: "0 0 40px rgba(0,240,255,0.1)" }}>
            <div className="font-display font-600 text-white text-sm mb-5">Live Settlement Flow</div>
            {[
              { label: "Order placed", value: "£219.99", time: "0.00s", color: "#fff", done: true },
              { label: "Vobit gas absorbed", value: "£0.00 cost", time: "0.12s", color: "#4ADE80", done: true },
              { label: "Stablecoin settled", value: "219.99 USDC", time: "0.61s", color: "#00F0FF", done: true },
              { label: "Fee deducted (0.5%)", value: "−£1.10", time: "0.62s", color: "#FFBD2E", done: true },
              { label: "GBP converted", value: "£218.89", time: "0.80s", color: "#4ADE80", done: true },
              { label: "Merchant account credited", value: "✓ Cleared", time: "0.81s", color: "#4ADE80", done: true },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2.5"
                style={{ borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                      <polyline points="2 6 5 9 10 3" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{row.label}</span>
                </div>
                <div className="text-right">
                  <div className="font-mono-data text-sm font-600" style={{ color: row.color }}>{row.value}</div>
                  <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{row.time}</div>
                </div>
              </div>
            ))}
            <div className="mt-4 rounded-xl p-3 text-center"
              style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)" }}>
              <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Total settlement time: 0.81s · Fee: £1.10</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display font-800 text-white text-center mb-14" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Everything included at 0.5%
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="card-hover rounded-2xl p-6"
                style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                    style={{ background: `${f.color}15`, border: `1px solid ${f.color}28`, color: f.color }}>
                    {f.icon}
                  </div>
                  <div className="text-right">
                    <div className="font-display font-800 text-lg" style={{ color: f.color }}>{f.stat}</div>
                    <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{f.statLabel}</div>
                  </div>
                </div>
                <h3 className="font-display font-700 text-white text-base mb-2">{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison table */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-800 text-white text-center mb-12" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)" }}>
            Somidax Pay vs traditional cards
          </h2>
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="grid grid-cols-3 px-5 py-3 font-display font-600 text-sm"
              style={{ background: "rgba(0,0,0,0.4)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Metric</span>
              <span className="text-center" style={{ color: "rgba(255,77,77,0.8)" }}>Credit Card</span>
              <span className="text-center" style={{ color: "#00F0FF" }}>Somidax Pay</span>
            </div>
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-3 px-5 py-4 items-center"
                style={{ borderBottom: i < comparison.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i%2===0?"rgba(255,255,255,0.01)":"transparent" }}>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>{row.label}</span>
                <div className="flex justify-center">
                  <span className="font-mono-data text-xs px-2.5 py-1 rounded-full text-center"
                    style={{ background: "rgba(255,77,77,0.08)", color: "rgba(255,120,120,0.8)", border: "1px solid rgba(255,77,77,0.2)" }}>
                    {row.card}
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className="font-mono-data text-xs px-2.5 py-1 rounded-full text-center"
                    style={{ background: "rgba(0,240,255,0.08)", color: "#00F0FF", border: "1px solid rgba(0,240,255,0.25)" }}>
                    {row.somidax}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
