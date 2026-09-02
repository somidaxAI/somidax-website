import { useState } from "react";
import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

function NavBar({ activeTab, setActiveTab }: { activeTab: Tab; setActiveTab: (t: Tab) => void }) {
  const tabs: { key: Tab; label: string }[] = [
    { key: "governance", label: "Governance" },
    { key: "treasury", label: "Treasury" },
    { key: "proposals", label: "Proposals" },
    { key: "training", label: "Training" },
    { key: "join", label: "Join DAO" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(8,11,17,0.95)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(138,43,226,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between gap-6" style={{ height: 64 }}>
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-lg">Somidax</span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setActiveTab(t.key)}
              className="px-3.5 py-2 rounded-lg font-display font-500 text-sm transition-all"
              style={{
                background: activeTab === t.key ? t.key === "join" ? "linear-gradient(135deg,#8A2BE2,#6B21A8)" : "rgba(138,43,226,0.18)" : "transparent",
                color: activeTab === t.key ? "#fff" : "rgba(255,255,255,0.45)",
                border: `1px solid ${activeTab === t.key && t.key !== "join" ? "rgba(138,43,226,0.4)" : "transparent"}`,
                boxShadow: t.key === "join" && activeTab === t.key ? "0 0 12px rgba(138,43,226,0.4)" : "none",
              }}>
              {t.label}
            </button>
          ))}
        </div>
        <Link to="/dao/whitepaper"
          className="hidden md:block px-3.5 py-2 rounded-lg font-display font-500 text-sm transition-all"
          style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.28)", color: "#A855F7" }}>
          Whitepaper
        </Link>
        <Link to="/" className="text-sm font-500 transition-colors hover:text-white hidden md:block" style={{ color: "rgba(255,255,255,0.4)" }}>
          ← Home
        </Link>
      </div>
    </nav>
  );
}

type Tab = "governance" | "treasury" | "proposals" | "training" | "join";

// ─── Data ────────────────────────────────────────────────────────────────────

const allProposals = [
  { id: "SIP-043", title: "Introduce AI agent reputation scoring weighted by $SMDX stake", status: "Active", votes: { for: 61, against: 29, abstain: 10 }, ends: "5 days", quorum: 72, category: "Protocol" },
  { id: "SIP-042", title: "Reduce merchant staking threshold from 10k to 7.5k SMDX", status: "Active", votes: { for: 74, against: 18, abstain: 8 }, ends: "3 days", quorum: 58, category: "Parameters" },
  { id: "SIP-041", title: "Allocate 500k SMDX from treasury to ecosystem grants Q3 2026", status: "Passed", votes: { for: 89, against: 6, abstain: 5 }, ends: "Closed", quorum: 91, category: "Treasury" },
  { id: "SIP-040", title: "Add Solana chain support for SMDX cross-chain bridge", status: "Passed", votes: { for: 82, against: 12, abstain: 6 }, ends: "Closed", quorum: 84, category: "Protocol" },
  { id: "SIP-039", title: "Introduce dynamic cashback tiers based on SMDX holdings", status: "Failed", votes: { for: 41, against: 52, abstain: 7 }, ends: "Closed", quorum: 67, category: "Parameters" },
  { id: "SIP-038", title: "Expand DAO multisig from 3/5 to 4/7 signatories", status: "Passed", votes: { for: 93, against: 4, abstain: 3 }, ends: "Closed", quorum: 88, category: "Governance" },
];

const treasuryTokens = [
  { token: "SMDX", amount: "42,000,000", value: "$7.69M", pct: 64, color: "#8A2BE2", chain: "ETH + BNB" },
  { token: "USDC", amount: "2,100,000", value: "$2.10M", pct: 17, color: "#2775CA", chain: "ETH" },
  { token: "ETH",  amount: "520",        value: "$1.40M", pct: 12, color: "#627EEA", chain: "Ethereum" },
  { token: "BNB",  amount: "3,200",      value: "$880K",  pct: 7,  color: "#F0B90B", chain: "BNB Chain" },
];

const treasuryTxns = [
  { date: "28 Aug 2026", type: "Grants", desc: "SIP-041 ecosystem grants disbursement — Q3 2026", amount: "−500,000 SMDX", sign: "out" },
  { date: "14 Aug 2026", type: "Revenue", desc: "Protocol fee share — July 2026", amount: "+128,400 USDC", sign: "in" },
  { date: "1 Aug 2026",  type: "Buy-back", desc: "SMDX open-market buyback — tranche 3", amount: "+2,200,000 SMDX", sign: "in" },
  { date: "18 Jul 2026", type: "Revenue", desc: "Protocol fee share — June 2026", amount: "+112,800 USDC", sign: "in" },
  { date: "5 Jul 2026",  type: "Ops", desc: "Infrastructure & security audit payment", amount: "−48,000 USDC", sign: "out" },
];

const trainingModules = [
  {
    id: "TM-01", title: "Intro to Somidax DAO", level: "Beginner", duration: "15 min", xp: 200, badge: "Citizen",
    topics: ["What is a DAO", "How $SMDX grants voting power", "Reading a governance proposal", "DAO vs. company governance"],
    color: "#4ADE80",
  },
  {
    id: "TM-02", title: "Reading & Writing SIPs", level: "Beginner", duration: "20 min", xp: 300, badge: "Author",
    topics: ["SIP structure and lifecycle", "Quorum and thresholds explained", "How to draft a valid proposal", "Avoiding common SIP rejection reasons"],
    color: "#00F0FF",
  },
  {
    id: "TM-03", title: "Treasury & Protocol Economics", level: "Intermediate", duration: "30 min", xp: 500, badge: "Economist",
    topics: ["Treasury composition and diversification policy", "Protocol fee flow and buyback mechanics", "Reading on-chain treasury dashboards", "Evaluating treasury allocation proposals"],
    color: "#A855F7",
  },
  {
    id: "TM-04", title: "Staking, Tiers & Delegation", level: "Intermediate", duration: "25 min", xp: 400, badge: "Staker",
    topics: ["Spark → Apex tier mechanics", "Delegation vs. direct voting", "Staking lock-up periods and risks", "Compounding $SMDX rewards"],
    color: "#FFBD2E",
  },
  {
    id: "TM-05", title: "On-Chain Voting & Safety", level: "Advanced", duration: "35 min", xp: 700, badge: "Validator",
    topics: ["Snapshot vs. on-chain voting", "Front-running governance attacks", "Timelock contracts and what they protect", "Multisig safety and verification"],
    color: "#8A2BE2",
  },
  {
    id: "TM-06", title: "Contributing to Somidax", level: "Advanced", duration: "40 min", xp: 800, badge: "Contributor",
    topics: ["How to apply for ecosystem grants", "Developer grant tiers and requirements", "Community moderator programme", "Representing the DAO externally"],
    color: "#F87171",
  },
];

const statusColor: Record<string, string> = { Active: "#4ADE80", Passed: "#00F0FF", Failed: "#FF4D4D" };

// ─── Sub-sections ─────────────────────────────────────────────────────────────

function GovernanceTab({ setActiveTab }: { setActiveTab: (t: Tab) => void }) {
  const active = allProposals.filter((p) => p.status === "Active");
  const recent = allProposals.filter((p) => p.status !== "Active").slice(0, 3);

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { v: "14,820", l: "Token Holders", c: "#8A2BE2" },
          { v: "43", l: "Proposals Total", c: "#00F0FF" },
          { v: "68.4%", l: "Avg Participation", c: "#4ADE80" },
          { v: "50k", l: "SMDX to Propose", c: "#FFBD2E" },
        ].map((s) => (
          <div key={s.l} className="rounded-2xl p-5 text-center"
            style={{ background: "rgba(18,15,36,0.8)", border: `1px solid ${s.c}22` }}>
            <div className="font-display font-900 text-2xl mb-1" style={{ color: s.c }}>{s.v}</div>
            <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* How it works */}
      <div className="rounded-2xl p-7 mb-8"
        style={{ background: "rgba(138,43,226,0.05)", border: "1px solid rgba(138,43,226,0.18)" }}>
        <h2 className="font-display font-700 text-white text-lg mb-5">How DAO governance works</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { n: "01", t: "Hold $SMDX", d: "Any amount grants voting power proportional to your holdings. No minimum to vote.", c: "#8A2BE2" },
            { n: "02", t: "Submit a SIP", d: "50,000 SMDX required to submit a Somidax Improvement Proposal. Full template in Training.", c: "#A855F7" },
            { n: "03", t: "Community Debate", d: "7-day discussion window on DAO forums before voting opens. Anyone can comment.", c: "#00F0FF" },
            { n: "04", t: "On-Chain Vote", d: "5-day voting window. 10% quorum + 60% majority required for a proposal to pass.", c: "#4ADE80" },
          ].map((s) => (
            <div key={s.n} className="flex flex-col gap-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center font-display font-800 text-sm"
                style={{ background: `${s.c}20`, border: `1px solid ${s.c}40`, color: s.c }}>{s.n}</div>
              <div className="font-display font-600 text-white text-sm">{s.t}</div>
              <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active proposals */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display font-700 text-white text-base">Active Proposals ({active.length})</h2>
        <button onClick={() => setActiveTab("proposals")}
          className="text-xs font-600 px-3 py-1.5 rounded-lg transition-all"
          style={{ background: "rgba(138,43,226,0.12)", color: "#A855F7", border: "1px solid rgba(138,43,226,0.3)" }}>
          View all →
        </button>
      </div>
      <div className="space-y-4 mb-8">
        {active.map((p) => (
          <ProposalCard key={p.id} p={p} expanded />
        ))}
      </div>

      {/* Recent */}
      <h2 className="font-display font-700 text-white text-base mb-4">Recent Decisions</h2>
      <div className="space-y-3">
        {recent.map((p) => (
          <ProposalCard key={p.id} p={p} expanded={false} />
        ))}
      </div>
    </div>
  );
}

function ProposalCard({ p, expanded }: { p: typeof allProposals[0]; expanded: boolean }) {
  const [open, setOpen] = useState(expanded);
  const sc = statusColor[p.status] ?? "#94A3B8";
  return (
    <div className="rounded-2xl overflow-hidden transition-all"
      style={{ background: "rgba(18,15,36,0.85)", border: `1px solid ${open ? "rgba(138,43,226,0.28)" : "rgba(255,255,255,0.07)"}` }}>
      <button onClick={() => setOpen(!open)} className="w-full text-left px-6 py-4 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{p.id}</span>
            <span className="px-2 py-0.5 rounded-full font-mono-data text-xs"
              style={{ background: `${sc}12`, color: sc, border: `1px solid ${sc}28` }}>{p.status}</span>
            <span className="px-2 py-0.5 rounded-full font-mono-data text-xs"
              style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.35)", border: "1px solid rgba(255,255,255,0.1)" }}>
              {p.category}
            </span>
          </div>
          <h3 className="font-display font-600 text-white text-sm leading-snug">{p.title}</h3>
        </div>
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
          className="flex-shrink-0 mt-1 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <div className="space-y-2 mb-4">
            {[
              { label: "For", pct: p.votes.for, color: "#4ADE80" },
              { label: "Against", pct: p.votes.against, color: "#FF4D4D" },
              { label: "Abstain", pct: p.votes.abstain, color: "rgba(255,255,255,0.3)" },
            ].map((v) => (
              <div key={v.label} className="flex items-center gap-3">
                <span className="font-mono-data text-xs w-12" style={{ color: v.color }}>{v.label}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div className="h-full rounded-full transition-all" style={{ width: `${v.pct}%`, background: v.color, boxShadow: `0 0 6px ${v.color}60` }} />
                </div>
                <span className="font-mono-data text-xs w-8 text-right" style={{ color: "rgba(255,255,255,0.45)" }}>{v.pct}%</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              Quorum: <span style={{ color: p.quorum >= 70 ? "#4ADE80" : "#FFBD2E" }}>{p.quorum}%</span> reached &nbsp;·&nbsp;
              {p.status === "Active" ? `Closes in ${p.ends}` : "Voting closed"}
            </div>
            {p.status === "Active" && (
              <div className="flex gap-2">
                <button className="px-3 py-1.5 rounded-lg font-display font-600 text-xs transition-all hover:scale-105"
                  style={{ background: "rgba(74,222,128,0.12)", border: "1px solid rgba(74,222,128,0.28)", color: "#4ADE80" }}>
                  Vote For
                </button>
                <button className="px-3 py-1.5 rounded-lg font-display font-600 text-xs transition-all hover:scale-105"
                  style={{ background: "rgba(255,77,77,0.1)", border: "1px solid rgba(255,77,77,0.25)", color: "#FF4D4D" }}>
                  Against
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function TreasuryTab() {
  return (
    <div>
      {/* Total */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="md:col-span-1 rounded-2xl p-6"
          style={{ background: "linear-gradient(135deg,rgba(138,43,226,0.15),rgba(0,240,255,0.08))", border: "1px solid rgba(138,43,226,0.25)" }}>
          <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.45)" }}>Total Treasury Value</div>
          <div className="font-display font-900 text-white mb-1" style={{ fontSize: "2.2rem" }}>$12.1M</div>
          <div className="font-mono-data text-xs flex items-center gap-1.5" style={{ color: "#4ADE80" }}>
            <span>▲ +8.4% this month</span>
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-3 gap-4">
          {[
            { l: "Monthly Inflow", v: "+$241.2K", c: "#4ADE80" },
            { l: "Monthly Outflow", v: "−$48.0K", c: "#FF4D4D" },
            { l: "Net This Month", v: "+$193.2K", c: "#00F0FF" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl p-5 text-center"
              style={{ background: "rgba(18,15,36,0.85)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="font-display font-800 text-xl mb-1" style={{ color: s.c }}>{s.v}</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Holdings */}
      <h2 className="font-display font-700 text-white text-base mb-4">Holdings</h2>
      <div className="rounded-2xl overflow-hidden mb-8 overflow-x-auto" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="grid grid-cols-4 min-w-[480px] px-5 py-3 text-xs font-display font-600"
          style={{ background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }}>
          <span>Asset</span><span className="text-right">Balance</span><span className="text-right">USD Value</span><span className="text-right">Allocation</span>
        </div>
        {treasuryTokens.map((t, i) => (
          <div key={t.token} className="grid grid-cols-4 min-w-[480px] px-5 py-4 items-center"
            style={{ borderBottom: i < treasuryTokens.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i%2===0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full flex items-center justify-center font-display font-700 text-xs flex-shrink-0"
                style={{ background: `${t.color}20`, border: `1px solid ${t.color}38`, color: t.color }}>
                {t.token.slice(0, 2)}
              </div>
              <div>
                <div className="font-display font-600 text-white text-sm">{t.token}</div>
                <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t.chain}</div>
              </div>
            </div>
            <div className="font-mono-data text-sm text-right text-white">{t.amount}</div>
            <div className="font-display font-600 text-right text-white text-sm">{t.value}</div>
            <div className="text-right">
              <div className="inline-block w-20">
                <div className="h-1.5 rounded-full mb-1" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div className="h-full rounded-full" style={{ width: `${t.pct}%`, background: t.color }} />
                </div>
                <span className="font-mono-data text-xs" style={{ color: t.color }}>{t.pct}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent transactions */}
      <h2 className="font-display font-700 text-white text-base mb-4">Recent Transactions</h2>
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
        {treasuryTxns.map((t, i) => (
          <div key={i} className="flex items-center justify-between px-5 py-4 gap-4"
            style={{ borderBottom: i < treasuryTxns.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none", background: i%2===0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                style={{ background: t.sign === "in" ? "rgba(74,222,128,0.12)" : "rgba(255,77,77,0.1)", border: `1px solid ${t.sign === "in" ? "rgba(74,222,128,0.28)" : "rgba(255,77,77,0.22)"}`, color: t.sign === "in" ? "#4ADE80" : "#FF4D4D" }}>
                {t.sign === "in" ? "▲" : "▼"}
              </div>
              <div className="min-w-0">
                <div className="font-display font-600 text-white text-sm truncate">{t.desc}</div>
                <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{t.date} · {t.type}</div>
              </div>
            </div>
            <div className="font-mono-data text-sm flex-shrink-0" style={{ color: t.sign === "in" ? "#4ADE80" : "#FF4D4D" }}>
              {t.amount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProposalsTab() {
  const [filter, setFilter] = useState<"All" | "Active" | "Passed" | "Failed">("All");
  const filtered = filter === "All" ? allProposals : allProposals.filter((p) => p.status === filter);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="font-display font-700 text-white text-xl">All Proposals</h2>
        <div className="flex items-center gap-2">
          {(["All", "Active", "Passed", "Failed"] as const).map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-3.5 py-1.5 rounded-lg font-display font-600 text-xs transition-all"
              style={{
                background: filter === f ? "rgba(138,43,226,0.2)" : "rgba(255,255,255,0.04)",
                color: filter === f ? "#fff" : "rgba(255,255,255,0.4)",
                border: `1px solid ${filter === f ? "rgba(138,43,226,0.4)" : "rgba(255,255,255,0.07)"}`,
              }}>
              {f}
            </button>
          ))}
          <button className="ml-2 px-4 py-1.5 rounded-lg font-display font-700 text-xs transition-all hover:scale-105"
            style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 12px rgba(138,43,226,0.35)" }}>
            + New SIP
          </button>
        </div>
      </div>

      {/* Requirements notice */}
      <div className="rounded-xl p-4 mb-6 flex items-start gap-3"
        style={{ background: "rgba(255,189,46,0.06)", border: "1px solid rgba(255,189,46,0.2)" }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FFBD2E" strokeWidth="2" className="flex-shrink-0 mt-0.5">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
        </svg>
        <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          <span style={{ color: "#FFBD2E" }}>Proposal requirements:</span> 50,000 SMDX balance · 7-day discussion window · 10% quorum · 60% majority to pass · 5-day voting window
        </p>
      </div>

      <div className="space-y-4">
        {filtered.map((p) => <ProposalCard key={p.id} p={p} expanded={false} />)}
      </div>

      {/* SIP template */}
      <div className="mt-8 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,240,255,0.2)" }}>
        <div className="px-6 py-4 flex items-center justify-between"
          style={{ background: "rgba(0,240,255,0.05)", borderBottom: "1px solid rgba(0,240,255,0.12)" }}>
          <div className="font-display font-700 text-white text-sm">SIP Template</div>
          <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Markdown format</span>
        </div>
        <div className="p-6">
          <pre className="font-mono-data text-xs leading-loose overflow-x-auto" style={{ color: "rgba(255,255,255,0.6)" }}>{`---
sip: [number]
title: [Short descriptive title]
status: Draft
author: [wallet-address or pseudonym]
created: [YYYY-MM-DD]
---

## Abstract
[One paragraph summary of the proposal]

## Motivation
[Why is this change needed? What problem does it solve?]

## Specification
[Detailed technical or operational changes required]

## Parameters (if applicable)
- Current: [value]
- Proposed: [value]

## Rationale
[Why this approach over alternatives?]

## On-chain Actions
[Smart contract calls, treasury movements, or parameter changes]`}</pre>
        </div>
      </div>
    </div>
  );
}

function TrainingTab() {
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const levelColor: Record<string, string> = { Beginner: "#4ADE80", Intermediate: "#FFBD2E", Advanced: "#F87171" };

  return (
    <div>
      <div className="mb-8">
        <h2 className="font-display font-800 text-white text-xl mb-2">DAO Training Academy</h2>
        <p className="text-sm leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.5)" }}>
          Learn how to participate effectively in Somidax governance. Complete modules to earn $SMDX XP and unlock on-chain contributor badges.
        </p>
      </div>

      {/* Progress bar (mock) */}
      <div className="rounded-2xl p-5 mb-8 flex items-center gap-6"
        style={{ background: "rgba(138,43,226,0.07)", border: "1px solid rgba(138,43,226,0.2)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center font-display font-900 text-xl flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 20px rgba(138,43,226,0.4)" }}>
          0
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <div className="font-display font-600 text-white text-sm">Your Progress</div>
            <div className="font-mono-data text-xs" style={{ color: "#A855F7" }}>0 / 2,900 XP</div>
          </div>
          <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="h-full rounded-full" style={{ width: "0%", background: "linear-gradient(90deg,#8A2BE2,#00F0FF)" }} />
          </div>
          <div className="font-mono-data text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>Connect wallet to track progress</div>
        </div>
      </div>

      {/* Module grid */}
      <div className="grid md:grid-cols-2 gap-5">
        {trainingModules.map((m) => {
          const isOpen = activeModule === m.id;
          return (
            <div key={m.id} className="rounded-2xl overflow-hidden transition-all"
              style={{ background: "rgba(18,15,36,0.85)", border: `1px solid ${isOpen ? m.color + "40" : "rgba(255,255,255,0.07)"}`, boxShadow: isOpen ? `0 0 30px ${m.color}10` : "none" }}>
              <button onClick={() => setActiveModule(isOpen ? null : m.id)}
                className="w-full text-left p-5 flex items-start justify-between gap-4">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-800 text-xs flex-shrink-0"
                    style={{ background: `${m.color}15`, border: `1px solid ${m.color}28`, color: m.color }}>
                    {m.id}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-mono-data text-xs px-2 py-0.5 rounded-full"
                        style={{ background: `${levelColor[m.level]}15`, color: levelColor[m.level], border: `1px solid ${levelColor[m.level]}28` }}>
                        {m.level}
                      </span>
                      <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{m.duration}</span>
                      <span className="font-mono-data text-xs" style={{ color: m.color }}>+{m.xp} XP</span>
                    </div>
                    <h3 className="font-display font-700 text-white text-sm">{m.title}</h3>
                  </div>
                </div>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                  className="flex-shrink-0 transition-transform duration-200"
                  style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {isOpen && (
                <div className="px-5 pb-5">
                  <div className="pt-2 pb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div className="font-display font-600 text-xs mb-3 mt-3" style={{ color: "rgba(255,255,255,0.45)" }}>WHAT YOU"LL LEARN</div>
                    <ul className="space-y-2">
                      {m.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <circle cx="6" cy="6" r="5.5" stroke={m.color} strokeOpacity="0.4"/>
                            <polyline points="3.5 6 5.5 8 8.5 4" stroke={m.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Earn: <span style={{ color: m.color }}>+{m.xp} XP</span> · Badge: <span style={{ color: m.color }}>{m.badge}</span>
                      </div>
                      <button className="px-4 py-2 rounded-xl font-display font-700 text-xs transition-all hover:scale-105"
                        style={{ background: `${m.color}18`, color: m.color, border: `1px solid ${m.color}30` }}>
                        Start Module →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Certificate */}
      <div className="mt-8 rounded-2xl p-6 text-center"
        style={{ background: "rgba(0,240,255,0.04)", border: "1px solid rgba(0,240,255,0.18)" }}>
        <div className="font-display font-800 text-white text-base mb-2">Complete all modules → Earn the DAO Contributor NFT</div>
        <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
          Finish all 6 modules and accumulate 2,900 XP to mint your non-transferable DAO Contributor badge on-chain.
          Badge holders receive a governance weight multiplier of 1.25×.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {trainingModules.map((m) => (
            <div key={m.id} className="px-3 py-1.5 rounded-full font-mono-data text-xs"
              style={{ background: `${m.color}10`, border: `1px solid ${m.color}22`, color: m.color }}>
              {m.badge}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function JoinTab() {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  return (
    <div>
      <div className="text-center mb-10">
        <h2 className="font-display font-900 text-white mb-3" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
          Join the{" "}
          <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Somidax DAO
          </span>
        </h2>
        <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
          Three steps to become a governance member. No permissions required — anyone holding $SMDX can participate.
        </p>
      </div>

      {/* Step progress */}
      <div className="flex items-center justify-center mb-10 gap-0">
        {([1, 2, 3] as const).map((s, i) => (
          <div key={s} className="flex items-center">
            <button onClick={() => setStep(s)}
              className="w-10 h-10 rounded-full flex items-center justify-center font-display font-800 text-sm transition-all"
              style={{
                background: step >= s ? "linear-gradient(135deg,#8A2BE2,#6B21A8)" : "rgba(255,255,255,0.07)",
                color: step >= s ? "#fff" : "rgba(255,255,255,0.35)",
                boxShadow: step === s ? "0 0 20px rgba(138,43,226,0.5)" : "none",
              }}>
              {s}
            </button>
            {i < 2 && <div className="w-20 h-px" style={{ background: step > s ? "rgba(138,43,226,0.6)" : "rgba(255,255,255,0.1)" }} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 mb-5" style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(138,43,226,0.25)" }}>
            <div className="font-display font-800 text-white text-lg mb-2">Step 1 — Acquire $SMDX</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Purchase $SMDX on Ethereum or BNB Chain. Any amount grants voting power. 50,000 SMDX is required to submit proposals. There is no lock-up for voting.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-105"
                style={{ background: "rgba(98,126,234,0.1)", border: "1px solid rgba(98,126,234,0.3)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-700 text-xs"
                  style={{ background: "rgba(98,126,234,0.2)", color: "#627EEA" }}>ETH</div>
                <div>
                  <div className="font-display font-700 text-white text-sm">Ethereum ERC-20</div>
                  <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>0x7e85…49B ↗</div>
                </div>
              </a>
              <a href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-all hover:scale-105"
                style={{ background: "rgba(240,185,11,0.08)", border: "1px solid rgba(240,185,11,0.28)" }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center font-display font-700 text-xs"
                  style={{ background: "rgba(240,185,11,0.18)", color: "#F0B90B" }}>BNB</div>
                <div>
                  <div className="font-display font-700 text-white text-sm">BNB Chain BEP-20</div>
                  <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>0xea8c…bdb ↗</div>
                </div>
              </a>
            </div>
            <div className="rounded-xl p-4 text-sm leading-relaxed" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }}>
              $SMDX is a utility token. It is not a security or investment product. Purchasing $SMDX carries risk, including total loss of value. Do your own research before purchasing.
            </div>
          </div>
          <div className="text-center">
            <button onClick={() => setStep(2)}
              className="font-display font-700 px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 24px rgba(138,43,226,0.4)" }}>
              I have $SMDX → Next Step
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 mb-5" style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(0,240,255,0.2)" }}>
            <div className="font-display font-800 text-white text-lg mb-2">Step 2 — Connect & Register</div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Connect your wallet to the Somidax DAO portal. Your $SMDX balance is read on-chain — no approval or token transfer required.
            </p>
            <Link to="/signin"
              className="flex items-center justify-between p-4 rounded-xl mb-3 transition-all hover:scale-105 group"
              style={{ background: "rgba(255,153,0,0.08)", border: "1px solid rgba(255,153,0,0.28)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-800 text-xs"
                  style={{ background: "rgba(255,153,0,0.2)", color: "#FF9900" }}>M</div>
                <div>
                  <div className="font-display font-700 text-white text-sm">MetaMask</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Browser extension or mobile</div>
                </div>
              </div>
              <span className="text-xs" style={{ color: "#FF9900" }}>Connect →</span>
            </Link>
            <Link to="/signin"
              className="flex items-center justify-between p-4 rounded-xl mb-3 transition-all hover:scale-105"
              style={{ background: "rgba(0,240,255,0.06)", border: "1px solid rgba(0,240,255,0.18)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-800 text-xs"
                  style={{ background: "rgba(0,240,255,0.15)", color: "#00F0FF" }}>WC</div>
                <div>
                  <div className="font-display font-700 text-white text-sm">WalletConnect</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Any compatible mobile wallet</div>
                </div>
              </div>
              <span className="text-xs" style={{ color: "#00F0FF" }}>Connect →</span>
            </Link>
            <Link to="/signin"
              className="flex items-center justify-between p-4 rounded-xl transition-all hover:scale-105"
              style={{ background: "rgba(0,82,255,0.07)", border: "1px solid rgba(0,82,255,0.22)" }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center font-display font-800 text-xs"
                  style={{ background: "rgba(0,82,255,0.18)", color: "#0052FF" }}>CB</div>
                <div>
                  <div className="font-display font-700 text-white text-sm">Coinbase Wallet</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Self-custody wallet</div>
                </div>
              </div>
              <span className="text-xs" style={{ color: "#0052FF" }}>Connect →</span>
            </Link>
          </div>
          <div className="text-center flex gap-3 justify-center">
            <button onClick={() => setStep(1)} className="text-sm font-500 transition-colors hover:text-white px-5 py-3" style={{ color: "rgba(255,255,255,0.4)" }}>← Back</button>
            <button onClick={() => setStep(3)}
              className="font-display font-700 px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg,#00C4CC,#0088AA)", color: "#fff", boxShadow: "0 0 20px rgba(0,240,255,0.3)" }}>
              Wallet Connected → Step 3
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-2xl mx-auto">
          <div className="rounded-2xl p-8 mb-5" style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(74,222,128,0.22)" }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.3)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <div className="font-display font-800 text-white text-lg">Step 3 — You're in</div>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.55)" }}>
              Your $SMDX balance automatically counts as voting power. Here is what you can do right now:
            </p>
            <div className="space-y-3">
              {[
                { icon: "◉", title: "Vote on active proposals", desc: "Two proposals are currently open. Your vote counts immediately on-chain.", link: "governance", linkLabel: "Go to Governance" },
                { icon: "◈", title: "Complete Training Academy", desc: "Earn XP and unlock governance weight multipliers by finishing all 6 modules.", link: "training", linkLabel: "Start Training" },
                { icon: "▲", title: "Submit your first SIP", desc: "Once you hold 50,000 SMDX, submit a proposal using the SIP template.", link: "proposals", linkLabel: "View Proposals" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span className="text-lg flex-shrink-0 mt-0.5" style={{ color: "#8A2BE2" }}>{item.icon}</span>
                  <div className="flex-1">
                    <div className="font-display font-600 text-white text-sm mb-0.5">{item.title}</div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                  </div>
                  <button onClick={() => setStep(1)}
                    className="text-xs font-600 px-3 py-1.5 rounded-lg flex-shrink-0 transition-all hover:opacity-80"
                    style={{ background: "rgba(138,43,226,0.15)", color: "#A855F7", border: "1px solid rgba(138,43,226,0.3)" }}>
                    {item.linkLabel}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center">
            <button onClick={() => setStep(1)} className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>← Start over</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function DAOPage() {
  const [activeTab, setActiveTab] = useState<Tab>("governance");

  const tabLabels: Record<Tab, string> = {
    governance: "Governance",
    treasury: "Treasury",
    proposals: "Proposals",
    training: "Training",
    join: "Join DAO",
  };

  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Hero */}
      <div className="pt-28 pb-12 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(138,43,226,0.14) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(138,43,226,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5"
            style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.3)" }}>
            <span className="w-2 h-2 rounded-full pulse-glow inline-block" style={{ background: "#8A2BE2" }} />
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Decentralised Governance · On-chain · Non-Custodial</span>
          </div>
          <h1 className="font-display font-900 text-white mb-4" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.1 }}>
            Somidax{" "}
            <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              DAO
            </span>
          </h1>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
            The Somidax protocol is governed entirely by $SMDX holders. Propose upgrades, vote on fee structures, control the treasury, and shape the future of AI commerce — on-chain, transparent, pseudonymous.
          </p>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "14,820", l: "Token Holders", c: "#8A2BE2" },
              { v: "43", l: "Proposals Total", c: "#00F0FF" },
              { v: "$12.1M", l: "Treasury Value", c: "#4ADE80" },
              { v: "68.4%", l: "Avg Participation", c: "#FFBD2E" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl p-4"
                style={{ background: "rgba(18,15,36,0.8)", border: `1px solid ${s.c}22` }}>
                <div className="font-display font-800 text-xl mb-0.5" style={{ color: s.c }}>{s.v}</div>
                <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile tab strip */}
      <div className="md:hidden px-6 mb-6 overflow-x-auto">
        <div className="flex gap-2 w-max">
          <Link to="/dao/whitepaper"
          className="px-4 py-2 rounded-lg font-display font-600 text-xs whitespace-nowrap"
          style={{ background: "rgba(138,43,226,0.12)", color: "#A855F7", border: "1px solid rgba(138,43,226,0.25)" }}>
          Whitepaper
        </Link>
        {(["governance","treasury","proposals","training","join"] as Tab[]).map((t) => (
            <button key={t} onClick={() => setActiveTab(t)}
              className="px-4 py-2 rounded-lg font-display font-600 text-xs whitespace-nowrap transition-all capitalize"
              style={{
                background: activeTab === t ? "linear-gradient(135deg,#8A2BE2,#6B21A8)" : "rgba(255,255,255,0.05)",
                color: activeTab === t ? "#fff" : "rgba(255,255,255,0.45)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}>
              {tabLabels[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 20 }}>
          <div className="w-2 h-2 rounded-full pulse-glow" style={{ background: "#8A2BE2" }} />
          <h2 className="font-display font-700 text-white text-sm uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
            {tabLabels[activeTab]}
          </h2>
        </div>

        {activeTab === "governance" && <GovernanceTab setActiveTab={setActiveTab} />}
        {activeTab === "treasury" && <TreasuryTab />}
        {activeTab === "proposals" && <ProposalsTab />}
        {activeTab === "training" && <TrainingTab />}
        {activeTab === "join" && <JoinTab />}
      </div>
    </div>
  );
}
