import { PageShell } from "./PageShell";
import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    annual: 0,
    fee: "0.5%",
    desc: "For independent merchants getting started with AI commerce.",
    color: "#94A3B8",
    cta: "Start Free",
    highlight: false,
    features: [
      "Up to 500 AI-matched orders/mo",
      "1 connected storefront",
      "Basic AI Engine (discovery + pricing)",
      "Somidax Pay (0.5% flat)",
      "$SMDX cashback at Spark tier (1%)",
      "Email support",
      "REST API access",
    ],
  },
  {
    name: "Growth",
    monthly: 99,
    annual: 79,
    fee: "0.45%",
    desc: "For scaling merchants who want full AI automation and lower fees.",
    color: "#00F0FF",
    cta: "Start 14-day Trial",
    highlight: true,
    features: [
      "Unlimited AI-matched orders",
      "Up to 5 storefronts",
      "Full AI Engine including repricing",
      "Somidax Pay (0.45% flat)",
      "$SMDX cashback at Core tier (2%)",
      "Priority support (< 4h SLA)",
      "Webhooks + full SDK access",
      "Advanced analytics dashboard",
      "Catalog enrichment (AI auto-tagging)",
    ],
  },
  {
    name: "Enterprise",
    monthly: null,
    annual: null,
    fee: "0.3–0.4%",
    desc: "For high-volume operators, B2B, and custom enterprise deployments.",
    color: "#8A2BE2",
    cta: "Contact Sales",
    highlight: false,
    features: [
      "Unlimited storefronts + sub-accounts",
      "Custom AI model fine-tuning",
      "Somidax Pay (0.3% negotiated)",
      "$SMDX cashback at Apex tier (5%)",
      "Dedicated AI agent pool",
      "SLA: 99.99% uptime guarantee",
      "SAP / Salesforce native connectors",
      "Custom webhook retention + replay",
      "DAO governance seat included",
    ],
  },
];

const faq = [
  { q: "Is there a setup fee?", a: "Never. Starter is free forever. Growth and Enterprise trials start immediately with no credit card required for the first 14 days." },
  { q: "What counts as an 'order'?", a: "An order is any checkout successfully settled through Somidax Pay. Browsed or abandoned carts are not counted." },
  { q: "Can I change plans mid-month?", a: "Yes. Upgrades are prorated to the day. Downgrades take effect at the start of the next billing cycle." },
  { q: "What is the 0.5% settlement fee charged on?", a: "The net order value after any $SMDX cashback or discounts applied. VAT or sales tax collected on behalf of the buyer is excluded." },
  { q: "Does Enterprise pricing include the settlement fee?", a: "Enterprise plans negotiate a blended rate that includes the platform fee and settlement fee as a single percentage. Minimums apply." },
  { q: "Can I pay the subscription in $SMDX?", a: "Yes. Growth and Enterprise subscribers may pay monthly fees in $SMDX at a 10% discount on the subscription price." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PageShell active="Pricing">
      {/* Hero */}
      <div className="pt-28 pb-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 20%, rgba(138,43,226,0.1) 0%, transparent 60%)" }} />
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="font-display font-900 text-white mb-4" style={{ fontSize: "clamp(2.2rem,4vw,3.5rem)", lineHeight: 1.05 }}>
            Simple,{" "}
            <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              transparent
            </span>
            {" "}pricing
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            One flat settlement fee. No hidden network charges. No per-seat upsells. Start free, scale to enterprise.
          </p>
          {/* Toggle */}
          <div className="inline-flex items-center gap-3 rounded-full p-1"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <button onClick={() => setAnnual(false)}
              className="px-4 py-1.5 rounded-full text-sm font-600 transition-all"
              style={{ background: !annual ? "rgba(138,43,226,0.7)" : "transparent", color: !annual ? "#fff" : "rgba(255,255,255,0.45)" }}>
              Monthly
            </button>
            <button onClick={() => setAnnual(true)}
              className="px-4 py-1.5 rounded-full text-sm font-600 transition-all flex items-center gap-2"
              style={{ background: annual ? "rgba(138,43,226,0.7)" : "transparent", color: annual ? "#fff" : "rgba(255,255,255,0.45)" }}>
              Annual
              <span className="font-mono-data text-xs px-1.5 py-0.5 rounded-full"
                style={{ background: "rgba(74,222,128,0.2)", color: "#4ADE80" }}>−20%</span>
            </button>
          </div>
        </div>
      </div>

      {/* Plan cards */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl p-7 flex flex-col relative"
              style={{
                background: p.highlight ? "rgba(0,240,255,0.04)" : "rgba(18,15,36,0.85)",
                border: `1px solid ${p.highlight ? "rgba(0,240,255,0.35)" : `${p.color}22`}`,
                boxShadow: p.highlight ? "0 0 40px rgba(0,240,255,0.1)" : "none",
              }}>
              {p.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="font-display font-700 text-xs px-4 py-1.5 rounded-full"
                    style={{ background: "linear-gradient(135deg,#00C4CC,#0088AA)", color: "#fff" }}>Most Popular</span>
                </div>
              )}
              <div className="mb-5">
                <div className="font-display font-800 text-lg mb-1" style={{ color: p.color }}>{p.name}</div>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
              </div>
              <div className="mb-2">
                {p.monthly === null ? (
                  <div className="font-display font-900 text-3xl text-white">Custom</div>
                ) : p.monthly === 0 ? (
                  <div className="font-display font-900 text-3xl text-white">Free</div>
                ) : (
                  <div className="flex items-end gap-1">
                    <div className="font-display font-900 text-3xl text-white">
                      £{annual ? p.annual : p.monthly}
                    </div>
                    <div className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>/mo</div>
                  </div>
                )}
                <div className="font-mono-data text-xs mt-1" style={{ color: p.color }}>+ {p.fee} settlement fee</div>
              </div>
              <ul className="flex-1 space-y-2.5 my-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0 mt-0.5">
                      <circle cx="7" cy="7" r="6.5" stroke={p.color} strokeOpacity="0.35" />
                      <polyline points="4 7 6.5 9.5 10 5" stroke={p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={p.monthly === null ? "/dao" : "/signin"}
                className="mt-2 py-3 rounded-xl text-sm font-700 text-center transition-all hover:scale-105"
                style={{
                  background: p.highlight ? "linear-gradient(135deg,#00C4CC,#0088AA)" : `${p.color}18`,
                  color: p.highlight ? "#fff" : p.color,
                  border: p.highlight ? "none" : `1px solid ${p.color}30`,
                  boxShadow: p.highlight ? "0 0 20px rgba(0,240,255,0.3)" : "none",
                }}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="py-16 px-6" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display font-800 text-white text-center mb-10" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>
            Pricing FAQ
          </h2>
          <div className="space-y-3">
            {faq.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden"
                style={{ background: "rgba(18,15,36,0.85)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                  style={{ color: "rgba(255,255,255,0.85)" }}>
                  <span className="font-display font-600 text-sm">{item.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 ml-4 transition-transform"
                    style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.35)" }}>
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
