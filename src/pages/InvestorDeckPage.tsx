import React, { useState } from "react";
import { Link } from "react-router-dom";

// ─── helpers ────────────────────────────────────────────────────────────────

const Pill = ({ children, color = "bg-violet-600/20 text-violet-300 border-violet-600/30" }: { children: React.ReactNode; color?: string }) => (
  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border tracking-widest uppercase ${color}`}>
    {children}
  </span>
);

const SlideNumber = ({ n, total }: { n: number; total: number }) => (
  <span className="text-[10px] font-mono text-slate-500 tabular-nums tracking-widest print:text-slate-400">
    {String(n).padStart(2, "0")} / {String(total).padStart(2, "0")}
  </span>
);

const Rule = () => <div className="w-12 h-px bg-violet-500 my-5" />;

// ─── slide wrapper ───────────────────────────────────────────────────────────

const Slide = ({ id, className = "", children }: { id?: string; className?: string; children: React.ReactNode }) => (
  <section
    id={id}
    className={`relative w-full min-h-screen flex flex-col print:min-h-0 print:h-[297mm] print:page-break-after-always overflow-x-hidden ${className}`}
  >
    {children}
  </section>
);

// ─── stat tile ───────────────────────────────────────────────────────────────

const Stat = ({ value, label, note }: { value: string; label: string; note?: string }) => (
  <div className="flex flex-col gap-1 border-l-2 border-violet-500 pl-4">
    <span className="text-3xl font-bold text-white tracking-tight font-display">{value}</span>
    <span className="text-xs text-slate-400 font-medium uppercase tracking-widest">{label}</span>
    {note && <span className="text-xs text-slate-500">{note}</span>}
  </div>
);

// ─── section heading ─────────────────────────────────────────────────────────

const SectionTag = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 mb-6">
    <span className="text-[11px] font-mono text-violet-400 tracking-[0.2em]">{n}</span>
    <div className="flex-1 h-px bg-slate-700/60" />
    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-[0.2em]">{label}</span>
  </div>
);

// ─── main component ──────────────────────────────────────────────────────────

export default function InvestorDeckPage() {
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 150);
  };

  const TOTAL = 11;

  return (
    <div className="bg-[#060910] text-white font-body selection:bg-violet-600/40" style={{ "--font-display": "var(--font-editorial)" } as React.CSSProperties}>

      {/* ── SCREEN-ONLY CONTROLS ───────────────────────────────────────────── */}
      <div className="print:hidden sticky top-0 z-50 flex items-center justify-between px-6 py-3 bg-[#060910]/95 backdrop-blur border-b border-slate-800/60">
        <Link to="/" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Somidax
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-500 font-mono">Investor Deck · Q4 2026</span>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-1.5 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {printing ? "Preparing…" : "Export PDF"}
          </button>
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 01 — COVER
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="cover" className="bg-[#060910] justify-between p-6 sm:p-10 md:p-16">
        {/* background grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* top bar */}
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center">
              <span className="text-white font-black text-xs">S</span>
            </div>
            <span className="font-semibold text-sm tracking-wide text-white">SOMIDAX</span>
          </div>
          <div className="flex items-center gap-4">
            <Pill>Confidential</Pill>
            <SlideNumber n={1} total={TOTAL} />
          </div>
        </div>

        {/* center content */}
        <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
          <Pill>Investor Presentation · Q4 2026</Pill>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight font-display">
            The AI-Native<br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Commerce Network
            </span><br />
            for Web3
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Somidax combines real-time AI, settlement infrastructure, and token-based loyalty into a single e-commerce operating system — replacing fragmented SaaS stacks with one unified platform.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            <Stat value="$SMDX" label="Native Utility Token" note="ERC-20 · BEP-20" />
            <Stat value="£0" label="Free Tier Available" note="No card required" />
            <Stat value="< 2s" label="AI Settlement Speed" note="vs 3–5 days traditional" />
          </div>
        </div>

        {/* footer */}
        <div className="relative z-10 flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>somidax.net</span>
          <span>Version 1.0 · August 2026</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 02 — EXECUTIVE SUMMARY
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="executive" className="bg-white text-slate-900 p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="01" label="Executive Summary" />
          <SlideNumber n={2} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5 font-display">
              One platform.<br />Every commerce need.
            </h2>
            <Rule />
            <p className="text-lg text-slate-600 leading-relaxed">
              Somidax is building the infrastructure layer that modern e-commerce demands — an AI-driven network where merchants process payments, reward loyal customers, and manage their entire operation through a single, tokenised ecosystem. We replace 5–7 disconnected tools with one platform that gets smarter with every transaction.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "$6.3T", l: "Global E-Commerce TAM", n: "2028 projection" },
              { v: "40%", l: "Merchant SaaS Waste", n: "Avg. 6 tools per merchant" },
              { v: "1B+", l: "Loyalty Points Unredeemed", n: "Per year globally" },
              { v: "500M", l: "$SMDX Max Supply", n: "Fixed, deflationary" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-violet-500 pl-4">
                <div className="text-3xl font-black text-slate-900 font-display">{s.v}</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-widest mt-1">{s.l}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.n}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 03 — THE PROBLEM
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="problem" className="bg-[#0c0f17] text-white p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="02" label="The Problem" />
          <SlideNumber n={3} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight font-display">
            Modern e-commerce is<br />
            <span className="text-red-400">broken by design.</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                icon: "💸",
                title: "Payment Friction",
                body: "Merchants pay 2–3.5% per transaction to payment processors. Cross-border fees add another 1–2%. Settlement takes 3–5 business days — cash-flow killing for SMEs.",
                stat: "~4.5% avg. transaction cost",
              },
              {
                icon: "🧩",
                title: "Tool Fragmentation",
                body: "The average online merchant uses 6.2 disconnected SaaS tools — each with its own API, billing, and support contract. Integration debt compounds year over year.",
                stat: "£18,000 avg. annual SaaS spend",
              },
              {
                icon: "🔒",
                title: "Dead Loyalty Value",
                body: "Over $1 billion in loyalty points expire unused each year. Existing programmes are siloed, non-transferable, and fail to drive genuine repeat behaviour.",
                stat: "68% points never redeemed",
              },
            ].map((p) => (
              <div key={p.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 flex flex-col gap-3">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="font-bold text-white text-lg">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{p.body}</p>
                <div className="mt-auto pt-3 border-t border-slate-800 text-xs font-mono text-red-400">{p.stat}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 04 — THE SOLUTION
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="solution" className="bg-white text-slate-900 p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="03" label="Our Solution" />
          <SlideNumber n={4} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight font-display">
            One AI-native network.<br />
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              Infinite commerce possibilities.
            </span>
          </h2>
          <Rule />

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                n: "01",
                title: "Somidax AI Engine",
                body: "Real-time intelligence layer. Personalised product recommendations, dynamic pricing, demand forecasting, and fraud detection — all trained on platform-wide transaction data.",
                badge: "Core Infrastructure",
              },
              {
                n: "02",
                title: "Somidax Pay",
                body: "Sub-2-second settlement using $SMDX as the settlement rail. Merchants accept fiat or crypto; settlement converts and lands in their account instantly. 0.5% flat fee.",
                badge: "Revenue Driver",
              },
              {
                n: "03",
                title: "Token Loyalty",
                body: "$SMDX rewards replace dead-end points. Customers earn tokens on every purchase, stake for tier benefits, and redeem across any Somidax merchant — fully on-chain and transferable.",
                badge: "Retention Engine",
              },
              {
                n: "04",
                title: "Open Integrations",
                body: "REST API, webhooks, and official SDKs (TypeScript, Python, Go). Native plugins for Shopify, WooCommerce, and Next.js. Connect any existing stack in under 30 minutes.",
                badge: "Distribution Layer",
              },
            ].map((s) => (
              <div key={s.title} className="border border-slate-200 rounded-xl p-6 flex flex-col gap-3 hover:border-violet-300 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400">{s.n}</span>
                  <span className="text-xs font-semibold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full border border-violet-200">{s.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 05 — MARKET OPPORTUNITY
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="market" className="bg-[#060910] text-white p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="04" label="Market Opportunity" />
          <SlideNumber n={5} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display leading-tight">
            A multi-trillion dollar<br />infrastructure gap.
          </h2>

          {/* TAM / SAM / SOM */}
          <div className="relative flex flex-col md:flex-row gap-4 items-start">
            {[
              { label: "TAM", value: "$6.3T", sub: "Global e-commerce GMV by 2028", color: "from-violet-500/20 to-fuchsia-500/10 border-violet-500/30", w: "w-full md:w-2/3" },
              { label: "SAM", value: "$480B", sub: "SME + mid-market segment using SaaS commerce tools", color: "from-fuchsia-500/20 to-cyan-500/10 border-fuchsia-500/30", w: "w-full md:w-1/2" },
              { label: "SOM", value: "$2.4B", sub: "5-year serviceable target at 0.5% SAM penetration", color: "from-cyan-500/20 to-violet-500/10 border-cyan-500/30", w: "w-full md:w-1/3" },
            ].map((m) => (
              <div key={m.label} className={`${m.w} bg-gradient-to-br ${m.color} border rounded-xl p-6 flex flex-col gap-2`}>
                <span className="text-xs font-mono text-slate-400 tracking-widest">{m.label}</span>
                <span className="text-4xl font-black font-display text-white">{m.value}</span>
                <span className="text-sm text-slate-400 leading-snug">{m.sub}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            {[
              { v: "26M+", l: "Active online merchants globally" },
              { v: "38%", l: "YoY growth in crypto-accepting merchants" },
              { v: "£9.1B", l: "UK loyalty programme market (2025)" },
            ].map((s) => (
              <div key={s.l} className="flex items-center gap-3 bg-slate-900/50 rounded-lg p-4 border border-slate-800">
                <span className="text-xl font-black text-violet-400 font-display">{s.v}</span>
                <span className="text-slate-400 text-xs">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 06 — TOKEN ECONOMICS
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="tokenomics" className="bg-white text-slate-900 p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="05" label="Token Economics" />
          <SlideNumber n={6} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black leading-tight font-display">$SMDX</h2>
            <div className="flex flex-wrap gap-2 mb-1">
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">ERC-20 · Ethereum</span>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-3 py-1 rounded-full border border-slate-200">BEP-20 · BNB Chain</span>
              <span className="text-xs font-mono bg-violet-50 text-violet-700 px-3 py-1 rounded-full border border-violet-200 font-semibold">500,000,000 Max Supply</span>
            </div>
          </div>
          <Rule />

          <div className="grid md:grid-cols-2 gap-8">
            {/* distribution */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Token Distribution</h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Community & Rewards", pct: 35, color: "bg-violet-500" },
                  { label: "Ecosystem & Partnerships", pct: 20, color: "bg-fuchsia-500" },
                  { label: "Team & Advisors", pct: 15, color: "bg-cyan-500" },
                  { label: "Treasury & DAO", pct: 15, color: "bg-indigo-500" },
                  { label: "Public Sale", pct: 10, color: "bg-pink-500" },
                  { label: "Liquidity & Market Making", pct: 5, color: "bg-amber-500" },
                ].map((d) => (
                  <div key={d.label} className="flex items-center gap-3">
                    <div className="w-28 text-xs text-slate-500 text-right shrink-0">{d.label}</div>
                    <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${d.color} rounded-full`} style={{ width: `${d.pct * 2.86}%` }} />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-700 w-8">{d.pct}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* utility */}
            <div>
              <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4">Token Utility</h3>
              <div className="flex flex-col gap-3">
                {[
                  { icon: "⚡", title: "Settlement Rail", desc: "Powers Somidax Pay — sub-2s settlement, 0.5% flat fee" },
                  { icon: "🏆", title: "Loyalty Rewards", desc: "Earned on every purchase, redeemable across the network" },
                  { icon: "🗳", title: "DAO Governance", desc: "Vote on proposals proportional to staked $SMDX" },
                  { icon: "🔒", title: "Staking Tiers", desc: "Spark → Core → Surge → Apex tiers unlock platform benefits" },
                  { icon: "🔥", title: "Deflationary Burns", desc: "0.1% of each transaction permanently burned" },
                ].map((u) => (
                  <div key={u.title} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-lg">{u.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{u.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{u.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 07 — BUSINESS MODEL
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="businessmodel" className="bg-[#0c0f17] text-white p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="06" label="Business Model" />
          <SlideNumber n={7} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display leading-tight">
            Four compounding<br />revenue streams.
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                stream: "Transaction Fees",
                model: "0.5% flat fee on every Somidax Pay settlement",
                why: "Scales linearly with GMV. No ceiling. Replaces 2–3.5% processor markup.",
                tag: "Primary",
                tagColor: "bg-violet-600/20 text-violet-300 border-violet-600/40",
              },
              {
                stream: "SaaS Subscriptions",
                model: "Free · £99/mo Growth · Enterprise custom pricing",
                why: "Predictable recurring revenue. Annual plans carry 20% discount to improve LTV.",
                tag: "Recurring",
                tagColor: "bg-cyan-600/20 text-cyan-300 border-cyan-600/40",
              },
              {
                stream: "Token Appreciation",
                model: "Deflationary burn + staking lockups reduce circulating supply",
                why: "Treasury holds 15% of supply. Network growth directly benefits token value.",
                tag: "Asset",
                tagColor: "bg-fuchsia-600/20 text-fuchsia-300 border-fuchsia-600/40",
              },
              {
                stream: "Ecosystem Revenue",
                model: "Plugin marketplace commission · API overage · Partner rev-share",
                why: "Long-tail flywheel — each new integration drives more merchant adoption.",
                tag: "Platform",
                tagColor: "bg-amber-600/20 text-amber-300 border-amber-600/40",
              },
            ].map((r) => (
              <div key={r.stream} className="border border-slate-800 rounded-xl p-6 flex flex-col gap-3 bg-slate-900/40">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-white">{r.stream}</h3>
                  <span className={`text-[10px] font-semibold border px-2 py-0.5 rounded-full tracking-widest uppercase ${r.tagColor}`}>{r.tag}</span>
                </div>
                <p className="text-xs font-mono text-violet-400">{r.model}</p>
                <p className="text-sm text-slate-400 leading-relaxed">{r.why}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 08 — ROADMAP
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="roadmap" className="bg-white text-slate-900 p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="07" label="Roadmap" />
          <SlideNumber n={8} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display leading-tight">
            From foundation<br />to global network.
          </h2>
          <Rule />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y sm:divide-y-0 divide-slate-100">
            {[
              {
                phase: "Phase 1",
                period: "Q3–Q4 2026",
                title: "Foundation",
                status: "Live",
                statusColor: "bg-green-100 text-green-700 border-green-200",
                items: ["Platform launch", "Somidax Pay beta", "AI Engine v1", "SDK release", "DAO governance live"],
              },
              {
                phase: "Phase 2",
                period: "Q1–Q2 2027",
                title: "Growth",
                status: "Upcoming",
                statusColor: "bg-violet-100 text-violet-700 border-violet-200",
                items: ["Mobile apps (iOS + Android)", "Shopify / WooCommerce plugins", "500 merchant milestone", "Token staking launch", "Series A raise"],
              },
              {
                phase: "Phase 3",
                period: "Q3–Q4 2027",
                title: "Scale",
                status: "Planned",
                statusColor: "bg-slate-100 text-slate-600 border-slate-200",
                items: ["Cross-chain expansion", "B2B wholesale module", "10,000 merchant milestone", "CEX listings", "DAO full autonomy"],
              },
              {
                phase: "Phase 4",
                period: "2028+",
                title: "Network",
                status: "Vision",
                statusColor: "bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200",
                items: ["Global regulatory licensing", "100,000 merchant milestone", "AI merchant co-pilot", "Somidax Chain (L2)", "IPO / token listing maturity"],
              },
            ].map((p, i) => (
              <div key={p.phase} className={`flex flex-col gap-3 p-5 ${i < 3 ? "border-r border-slate-100" : ""}`}>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-mono text-slate-400">{p.phase}</span>
                  <span className="text-xs font-mono text-slate-500">{p.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="font-black text-slate-900 text-lg">{p.title}</h3>
                  <span className={`text-[10px] font-semibold border px-2 py-0.5 rounded-full ${p.statusColor}`}>{p.status}</span>
                </div>
                <ul className="flex flex-col gap-1.5 mt-1">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                      <span className="text-violet-500 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 09 — DAO & GOVERNANCE
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="dao" className="bg-[#060910] text-white p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="08" label="DAO & Governance" />
          <SlideNumber n={9} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display leading-tight">
            Community-owned.<br />
            <span className="text-violet-400">Token-governed.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-4">
              <p className="text-slate-300 leading-relaxed">
                The Somidax DAO gives $SMDX holders direct influence over platform direction — fee structures, treasury allocation, protocol upgrades, and partnership decisions are all governed on-chain.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Proposal Threshold", value: "10,000 $SMDX staked" },
                  { label: "Quorum Required", value: "15% of circulating supply" },
                  { label: "Voting Period", value: "7 days per proposal" },
                  { label: "Treasury Managed", value: "$2.4M equivalent (Aug 2026)" },
                  { label: "Active Proposals", value: "6 open (SIP-038 to SIP-043)" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between py-2 border-b border-slate-800 text-sm">
                    <span className="text-slate-400">{r.label}</span>
                    <span className="font-mono text-violet-300 font-semibold">{r.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Treasury Allocation</h3>
              {[
                { label: "Development Grants", pct: 40, color: "bg-violet-500" },
                { label: "Ecosystem Growth", pct: 30, color: "bg-fuchsia-500" },
                { label: "Security Audits", pct: 15, color: "bg-cyan-500" },
                { label: "Legal & Compliance", pct: 10, color: "bg-indigo-500" },
                { label: "Operational Reserve", pct: 5, color: "bg-slate-500" },
              ].map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <div className="w-36 text-xs text-slate-400 shrink-0">{t.label}</div>
                  <div className="flex-1 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div className={`h-full ${t.color} rounded-full`} style={{ width: `${t.pct * 2.5}%` }} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 w-8">{t.pct}%</span>
                </div>
              ))}
              <div className="mt-3 p-4 rounded-lg bg-violet-950/40 border border-violet-800/40">
                <p className="text-xs text-violet-300 leading-relaxed">
                  All treasury transactions are publicly auditable on-chain. No multisig gating without DAO approval. Full transparency by design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 10 — COMPETITIVE ADVANTAGE
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="competitive" className="bg-white text-slate-900 p-6 sm:p-10 md:p-16 justify-between">
        <div className="flex items-start justify-between">
          <SectionTag n="09" label="Competitive Landscape" />
          <SlideNumber n={10} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-8">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-display leading-tight">
            No direct competitor<br />owns this whole stack.
          </h2>
          <Rule />

          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[560px] text-sm">
              <thead>
                <tr className="border-b-2 border-slate-900">
                  <th className="text-left py-3 pr-6 font-semibold text-slate-500 text-xs uppercase tracking-widest">Capability</th>
                  {["Somidax", "Shopify", "PayPal", "Loyalty Lion", "Stripe"].map((c) => (
                    <th key={c} className={`text-center py-3 px-3 text-xs font-bold uppercase tracking-widest ${c === "Somidax" ? "text-violet-600" : "text-slate-400"}`}>{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { cap: "AI Product Recommendations", vals: [true, true, false, false, false] },
                  { cap: "Sub-2s Payment Settlement", vals: [true, false, false, false, false] },
                  { cap: "On-chain Loyalty Tokens", vals: [true, false, false, false, false] },
                  { cap: "DAO Governance", vals: [true, false, false, false, false] },
                  { cap: "Open SDK / Webhooks", vals: [true, true, true, false, true] },
                  { cap: "Native Crypto Settlement", vals: [true, false, true, false, false] },
                  { cap: "Flat 0.5% Fee Model", vals: [true, false, false, false, false] },
                  { cap: "Free Tier Available", vals: [true, false, false, false, true] },
                ].map((row) => (
                  <tr key={row.cap} className="border-b border-slate-100 hover:bg-violet-50/30 transition-colors">
                    <td className="py-3 pr-6 text-slate-700 font-medium">{row.cap}</td>
                    {row.vals.map((v, i) => (
                      <td key={i} className="text-center py-3 px-3">
                        {v
                          ? <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${i === 0 ? "bg-violet-600 text-white" : "bg-green-100 text-green-700"}`}>✓</span>
                          : <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-slate-100 text-slate-400">—</span>
                        }
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>SOMIDAX · INVESTOR DECK</span>
          <span>somidax.net</span>
        </div>
      </Slide>

      {/* ════════════════════════════════════════════════════════════════════
          SLIDE 11 — CALL TO ACTION
      ════════════════════════════════════════════════════════════════════ */}
      <Slide id="cta" className="bg-[#060910] justify-between p-6 sm:p-10 md:p-16">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        <div className="flex items-start justify-between relative z-10">
          <SectionTag n="10" label="Contact & Next Steps" />
          <SlideNumber n={11} total={TOTAL} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-10 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tight font-display">
              Join the future<br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                of commerce.
              </span>
            </h2>
            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl">
              We are seeking strategic investors, ecosystem partners, and enterprise merchants who share our vision for an open, AI-native commerce network. If you are building the future of retail, payments, or Web3 — we want to connect.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: "Investor Enquiries",
                detail: "investors@somidax.net",
                sub: "Institutional & angel rounds",
                icon: "📈",
              },
              {
                title: "Partnership & Integration",
                detail: "partners@somidax.net",
                sub: "Merchant & ecosystem deals",
                icon: "🤝",
              },
              {
                title: "Press & Media",
                detail: "press@somidax.net",
                sub: "Media kit available on request",
                icon: "📰",
              },
            ].map((c) => (
              <div key={c.title} className="border border-slate-800 rounded-xl p-6 flex flex-col gap-2 bg-slate-900/40">
                <span className="text-2xl">{c.icon}</span>
                <div className="font-bold text-white">{c.title}</div>
                <div className="text-violet-400 text-sm font-mono">{c.detail}</div>
                <div className="text-xs text-slate-500">{c.sub}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
            <span className="font-mono">somidax.net</span>
            <span>·</span>
            <span className="font-mono">@somidax</span>
            <span>·</span>
            <span className="font-mono">github.com/somidaxAI</span>
            <span>·</span>
            <span className="font-mono text-xs">ETH: 0x7e85...a949B</span>
            <span>·</span>
            <span className="font-mono text-xs">BNB: 0xea8c...2bdb</span>
          </div>
        </div>

        <div className="relative z-10 flex items-center justify-between text-xs text-slate-600 font-mono">
          <span>This document is for informational purposes only and does not constitute financial or investment advice.</span>
          <span>© 2026 Somidax</span>
        </div>
      </Slide>

    </div>
  );
}
