import { useState } from "react";
import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(8,11,17,0.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(138,43,226,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4" style={{ height: 64 }}>
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-lg">Somidax</span>
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/dao" className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>← Somidax DAO</Link>
          <Link to="/developers" className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.45)" }}>Developers</Link>
          <Link to="/product/pricing"
            className="font-display font-600 px-4 py-2 rounded-lg text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 12px rgba(138,43,226,0.35)" }}>
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section {
  id: string;
  number: string;
  title: string;
  subsections: { title: string; body: string[] }[];
}

// ─── Content ──────────────────────────────────────────────────────────────────

const sections: Section[] = [
  {
    id: "abstract",
    number: "00",
    title: "Abstract",
    subsections: [
      {
        title: "",
        body: [
          "Somidax is an AI-native, non-custodial e-commerce settlement network that enables autonomous commercial transactions between AI buyer agents and merchant storefronts at global scale. The protocol combines a natural-language product discovery engine, a gasless stablecoin settlement layer (Vobit), and an on-chain token loyalty system ($SMDX) to deliver sub-second checkout at a flat 0.5% merchant fee — without intermediaries, card networks, or custodians.",
          "This paper describes the Somidax architecture, the economic model underpinning $SMDX, the governance structure of the Somidax DAO, and the technical foundations of the AI Engine and payment infrastructure. It is intended for merchants, developers, investors, and governance participants who wish to understand the protocol in depth.",
          "Version 1.0 — August 2026. This document supersedes all prior drafts. Somidax Network Ltd reserves the right to update this whitepaper as the protocol evolves. Material updates will be announced via DAO governance.",
        ],
      },
    ],
  },
  {
    id: "problem",
    number: "01",
    title: "The Problem",
    subsections: [
      {
        title: "1.1 The Friction Cost of Modern Commerce",
        body: [
          "Global e-commerce processed approximately $6.3 trillion in 2025, yet the infrastructure underpinning these transactions was designed for the analogue era. Card network rails impose 2.9% plus per-transaction surcharges, settlement delays of two to five business days, and chargeback windows of up to 120 days that hold merchant capital hostage.",
          "For merchants operating at scale, these costs represent the single largest variable cost line — frequently exceeding customer acquisition spend. For buyers, the checkout experience remains a multi-step, multi-form process that creates abandonment rates of 70% or higher across the industry.",
        ],
      },
      {
        title: "1.2 The AI Agent Commerce Gap",
        body: [
          "The emergence of AI buyer agents — autonomous software systems acting on behalf of consumers to discover, compare, and purchase products — creates a fundamental incompatibility with existing checkout infrastructure. Card networks require human authentication flows. Chargeback mechanisms assume human disputes. Fraud scoring models are calibrated for human behaviour patterns.",
          "No existing payment or commerce infrastructure was designed with autonomous agent-to-merchant interaction as a first-class primitive. Somidax is built from first principles to solve this.",
        ],
      },
      {
        title: "1.3 Discovery Fragmentation",
        body: [
          "Product discovery remains siloed. A buyer searching for the optimal product — factoring in price, availability, delivery window, and cashback eligibility — must manually traverse dozens of platforms. No network exists that enables an AI agent to query live inventory and pricing across all connected merchants simultaneously, in real time, with guaranteed settlement.",
          "Somidax provides this network. Its AI Engine resolves natural-language buyer intent to live SKUs across every connected storefront, returning a ranked result set with settlement-ready offers in under 120 milliseconds.",
        ],
      },
    ],
  },
  {
    id: "solution",
    number: "02",
    title: "The Somidax Solution",
    subsections: [
      {
        title: "2.1 Architecture Overview",
        body: [
          "Somidax is composed of four layers: the AI Intelligence Layer, the Settlement Layer, the Token Loyalty Layer, and the Governance Layer. Each layer is independently deployable but designed to operate as an integrated system.",
          "The AI Intelligence Layer handles buyer intent parsing, multi-store product matching, dynamic repricing signals, and semantic catalog enrichment. The Settlement Layer handles stablecoin routing, fiat conversion, gas abstraction, and merchant payout. The Token Loyalty Layer manages $SMDX issuance, staking mechanics, and reward calculation. The Governance Layer provides on-chain voting, treasury management, and protocol parameter upgrades via the Somidax DAO.",
        ],
      },
      {
        title: "2.2 Non-Custodial Design",
        body: [
          "Somidax is non-custodial by design. At no point does the protocol, the DAO, or Somidax Network Ltd take custody of merchant funds, buyer wallets, or $SMDX held by participants. Settlement occurs directly between buyer and merchant wallets via audited smart contracts on Ethereum and BNB Chain.",
          "This design eliminates counterparty risk from the core protocol. Merchants cannot suffer from platform insolvency affecting their settlement funds. Buyers cannot suffer from their assets being rehypothecated. The protocol is a coordination layer, not a financial intermediary.",
        ],
      },
      {
        title: "2.3 Multi-Chain Deployment",
        body: [
          "The $SMDX token is deployed on both Ethereum (ERC-20, contract: 0x7e8539D1E5cB91d63E46B8e188403b3f262a949B) and BNB Chain (BEP-20, contract: 0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb). Settlement can be processed on either chain, with cross-chain bridge infrastructure managed by the Somidax DAO treasury multisig.",
          "Multi-chain deployment reduces gas cost exposure for merchants operating in different regions and provides redundancy against single-chain network congestion.",
        ],
      },
    ],
  },
  {
    id: "ai-engine",
    number: "03",
    title: "The AI Engine",
    subsections: [
      {
        title: "3.1 Natural Language Intent Parsing",
        body: [
          "The Somidax AI Engine accepts free-text product queries from buyer agents or end-user interfaces. Queries are parsed by a fine-tuned language model trained on commercial product taxonomy, pricing signals, and buyer preference patterns. The model extracts structured intent — product type, attribute constraints, budget ceiling, urgency signals, and location preferences — in under 20 milliseconds.",
          "Parsed intent is mapped to a structured query that fans out across all connected merchant catalogs simultaneously. The fan-out is implemented as a parallel RPC broadcast over the Somidax peer network, with results aggregated and ranked by a composite relevance score.",
        ],
      },
      {
        title: "3.2 Catalog Matching & Ranking",
        body: [
          "Merchant catalogs are indexed in real time as product updates arrive via the Catalog Sync API or native platform integrations. The index supports semantic similarity matching, allowing the engine to identify relevant products even when merchant titles do not precisely match buyer query vocabulary.",
          "Results are ranked by a composite score weighting: semantic relevance (40%), price competitiveness relative to network median (25%), delivery window against buyer urgency (20%), and merchant trust score derived from on-chain fulfilment history and $SMDX stake level (15%). Merchants at higher $SMDX staking tiers receive a configurable ranking boost.",
        ],
      },
      {
        title: "3.3 Dynamic Repricing",
        body: [
          "Merchants may opt in to dynamic repricing signals. The AI Engine continuously monitors price distributions across competing merchants in the same product category and delivers floor-to-ceiling repricing recommendations in real time. Merchants set absolute floor and ceiling constraints; the engine operates within these bounds, adjusting prices to maintain competitive positioning without margin destruction.",
        ],
      },
      {
        title: "3.4 Semantic Catalog Enrichment",
        body: [
          "For merchants with incomplete or low-quality product metadata, the AI Engine offers automatic enrichment. Product images and raw specifications are processed by a vision-language model that generates optimised titles, descriptions, and discovery tags in over 50 languages. Enriched metadata improves AI discovery ranking and is returned to the merchant catalog for use in their own storefront.",
        ],
      },
    ],
  },
  {
    id: "settlement",
    number: "04",
    title: "Settlement Layer — Somidax Pay",
    subsections: [
      {
        title: "4.1 Vobit Gas Abstraction",
        body: [
          "On-chain settlements typically impose gas costs on one or both parties, creating an unpredictable cost variable that undermines the user experience. Somidax eliminates this through integration with Vobit, a gas abstraction infrastructure layer that sponsors network fees on behalf of protocol participants.",
          "From the merchant and buyer perspective, every transaction feels like a traditional card payment — zero gas cost, sub-second confirmation. Vobit fees are absorbed within the 0.5% Somidax protocol fee, making the total cost model transparent and bounded.",
        ],
      },
      {
        title: "4.2 Settlement Flow",
        body: [
          "When a buyer agent confirms an order, the following sequence executes: (1) the Somidax smart contract validates the order parameters and checks the buyer agent's $SMDX stake level for applicable cashback; (2) Vobit absorbs the gas cost and submits the settlement transaction; (3) stablecoin (USDC or USDT) transfers from the buyer's agent wallet to the Somidax settlement contract; (4) the 0.5% fee is deducted; (5) the net amount is transferred to the merchant wallet; (6) $SMDX cashback is minted to the buyer wallet. Steps 1–6 complete within one second.",
        ],
      },
      {
        title: "4.3 Fiat Conversion",
        body: [
          "Merchants who prefer fiat settlement configure a split ratio in the dashboard — for example 60% GBP, 25% USD, 15% EUR. Stablecoin receipts are converted at the spot rate via an on-chain oracle at settlement time and the resulting fiat is disbursed to the merchant's bank account on a daily basis via the Somidax fiat off-ramp partner network.",
          "Fiat conversion uses volume-weighted average pricing from three independent oracle sources to prevent price manipulation. The conversion rate is committed on-chain alongside the settlement transaction hash, providing merchants with a permanent, auditable record of every conversion.",
        ],
      },
      {
        title: "4.4 Merchant Fees",
        body: [
          "The standard settlement fee is 0.5% of net transaction value, inclusive of Vobit gas abstraction. Merchants at Core, Surge, and Apex $SMDX staking tiers benefit from fee reductions to 0.45%, 0.40%, and 0.30% respectively. No additional per-transaction, monthly platform, or currency conversion surcharges apply. Enterprise merchants negotiate a blended rate that consolidates the platform subscription and settlement fee into a single percentage.",
        ],
      },
    ],
  },
  {
    id: "token",
    number: "05",
    title: "$SMDX Token Economics",
    subsections: [
      {
        title: "5.1 Token Overview",
        body: [
          "$SMDX is the native utility token of the Somidax network. It performs four functions: (1) governance — token holders vote on protocol parameters, treasury allocations, and upgrade proposals via the Somidax DAO; (2) fee reduction — merchants who stake $SMDX above defined thresholds unlock reduced settlement fees; (3) cashback — buyers earn $SMDX on every settled order at rates determined by the merchant's configured match rate; (4) discovery ranking — merchants at higher staking tiers receive improved AI discovery weighting.",
          "$SMDX is a utility token. It is not a security, investment product, or financial instrument. Holding $SMDX does not entitle any party to dividends, profit sharing, or equity in Somidax Network Ltd.",
        ],
      },
      {
        title: "5.2 Token Supply",
        body: [
          "Total supply is fixed at 1,000,000,000 (one billion) $SMDX. No additional tokens will ever be minted. The allocation is as follows: 30% — Ecosystem Rewards (distributed to merchants and buyers as cashback over 10 years via a halving schedule); 20% — DAO Treasury (governed by $SMDX holders via on-chain vote); 20% — Core Contributors (4-year vesting, 12-month cliff, released 2023–2027); 15% — Public Sale (2023 initial offering); 10% — Protocol Reserve (held in the DAO multisig for emergency use, requiring 4/7 multisig approval); 5% — Advisors (2-year vesting).",
        ],
      },
      {
        title: "5.3 Staking Tiers",
        body: [
          "Four staking tiers govern merchant benefits. Spark (0–499 SMDX): 1% cashback, 0.5% settlement fee, basic AI discovery. Core (500–4,999 SMDX): 2% cashback, 0.45% fee, priority AI matching, weekly payouts. Surge (5,000–24,999 SMDX): 3.5% cashback, 0.40% fee, dedicated AI agent pool, daily payouts, catalog boost. Apex (25,000+ SMDX): 5% cashback, 0.30% fee, custom AI model fine-tuning, real-time payouts, DAO voting weight multiplier of 3×.",
          "Staking is non-custodial. Staked $SMDX remains in the merchant's wallet and is only soft-locked for the purpose of tier calculation. Merchants may unstake at any time; tier downgrades take effect at the start of the next billing period.",
        ],
      },
      {
        title: "5.4 Buyback & Burn",
        body: [
          "5% of all protocol fee revenue collected by the DAO treasury is allocated to open-market $SMDX buybacks on a quarterly basis. Purchased tokens are burned, permanently reducing circulating supply. The buyback schedule is governed by a DAO proposal that may be amended by token holder vote. All buyback transactions are executed on-chain and verifiable via the treasury dashboard.",
        ],
      },
    ],
  },
  {
    id: "dao",
    number: "06",
    title: "Governance — Somidax DAO",
    subsections: [
      {
        title: "6.1 Governance Model",
        body: [
          "The Somidax DAO is the decentralised governing body of the protocol. Any $SMDX holder may participate in governance. Governance power is proportional to token holdings, with Apex-tier stakers receiving a 3× voting weight multiplier. There is no minimum holding to vote; 50,000 $SMDX is required to submit a Somidax Improvement Proposal (SIP).",
          "Governance operates via Snapshot off-chain signalling for discussion phases, followed by on-chain execution for approved proposals. A 7-day discussion window precedes a 5-day voting window. Proposals pass with 10% quorum and 60% majority. Emergency protocol pauses require 4/7 multisig approval from the DAO security council.",
        ],
      },
      {
        title: "6.2 Treasury Management",
        body: [
          "The DAO treasury holds SMDX, USDC, ETH, and BNB. Treasury assets are secured by a 4/7 multisig with keyholders distributed across pseudonymous core contributors and elected community representatives. Treasury allocations — including ecosystem grants, buybacks, and operational expenditure — require a passed SIP.",
          "The treasury receives 100% of the DAO's share of protocol fee revenue. 5% of this revenue is earmarked for the quarterly buyback programme. The remaining 95% is allocated by governance vote. Historical allocations include ecosystem developer grants, security audits, integration partnerships, and liquidity provisioning.",
        ],
      },
      {
        title: "6.3 Protocol Upgrades",
        body: [
          "Smart contract upgrades are governed by a timelocked upgrade pattern. Approved protocol changes are subject to a 48-hour timelock before execution, during which any holder may verify the proposed change against the approved SIP. Critical security patches bypass the timelock with 4/7 multisig emergency approval, subject to a post-hoc ratification vote within 7 days.",
        ],
      },
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Security & Audits",
    subsections: [
      {
        title: "7.1 Smart Contract Audits",
        body: [
          "All Somidax Protocol smart contracts have been audited by independent security firms prior to mainnet deployment. The settlement contract, staking contract, and DAO governance contract have each undergone at minimum two independent audits. Audit reports are published in full in the Somidax GitHub repository under /audits.",
          "A continuous bug bounty programme is active via Immunefi. Critical vulnerabilities attract rewards of up to $500,000 USDC. High-severity vulnerabilities attract up to $100,000 USDC. The programme covers smart contracts, the API infrastructure, and the AI Engine's on-chain oracle integrations.",
        ],
      },
      {
        title: "7.2 Oracle Security",
        body: [
          "Price feeds used for fiat conversion and dynamic repricing are sourced from three independent oracle providers (Chainlink, Pyth Network, and a Somidax-operated aggregator). A median price is taken across all three feeds; if any feed diverges by more than 1% from the median, the settlement is paused pending manual MLRO review. Oracle manipulation attempts are logged and flagged for the DAO security council.",
        ],
      },
      {
        title: "7.3 AML & Sanctions Compliance",
        body: [
          "Every settlement is screened in real time against OFAC SDN, UK HMT, EU Consolidated, and UN Security Council sanctions lists. On-chain analytics detect known mixer outputs, structured transaction patterns, and darknet-associated wallet clusters. Suspicious settlements are held pending MLRO review. SAR filings are made to the UK NCA where required. Full AML policy is published at somidax.io/legal.",
        ],
      },
    ],
  },
  {
    id: "roadmap",
    number: "08",
    title: "Roadmap",
    subsections: [
      {
        title: "8.1 Completed (2023–2026)",
        body: [
          "Q1 2023: $SMDX token generation event and initial distribution. Q3 2023: Mainnet launch on Ethereum with core settlement contract. Q1 2024: BNB Chain deployment and cross-chain bridge. Q3 2024: Somidax Pay Vobit gas abstraction integration. Q1 2025: AI Engine v1 — natural language discovery and catalog sync. Q3 2025: Shopify, WooCommerce, and BigCommerce native integrations. Q1 2026: Dynamic repricing and semantic catalog enrichment. Q2 2026: Token loyalty tiers (Spark → Apex) and staking dashboard. Q3 2026: Fiat auto-conversion with GBP/USD/EUR split ratios and daily bank payouts.",
        ],
      },
      {
        title: "8.2 Near-Term (Q4 2026 – Q2 2027)",
        body: [
          "Q4 2026: Solana bridge (subject to SIP-040 execution), Attentive SMS integration, and DAO Training Academy NFT badges. Q1 2027: AI Engine v2 — buyer agent memory and preference learning across sessions. Cross-merchant buyer identity (zero-knowledge proof, privacy-preserving). Q2 2027: Somidax Consumer App — buyer-facing interface for agentic shopping across the full merchant network. B2B wholesale module for enterprise merchants.",
        ],
      },
      {
        title: "8.3 Long-Term Vision (2027–2030)",
        body: [
          "The long-term vision for Somidax is a fully autonomous commerce layer where AI agents transact on behalf of billions of buyers across a network of hundreds of thousands of merchants, with settlement occurring in milliseconds at near-zero cost. The Somidax DAO will govern the protocol parameters, treasury, and upgrade path as the network scales.",
          "Somidax Network Ltd's role will diminish over time as the protocol becomes fully autonomous and DAO-governed. The company acts as an initial coordinator and will progressively transfer operational control to the DAO as governance maturity increases.",
        ],
      },
    ],
  },
  {
    id: "team",
    number: "09",
    title: "Team & Contributors",
    subsections: [
      {
        title: "9.1 Pseudonymous Core Contributors",
        body: [
          "The Somidax DAO is pseudonymous by design, consistent with the values of decentralised protocol development. Core contributors are identified by on-chain wallet addresses and pseudonymous handles. All contributor vesting schedules are enforced by on-chain smart contracts, not off-chain agreements.",
          "Four pseudonymous core contributors hold Core Team governance weight in the DAO: 0xFounder (Protocol Lead, 4.2M SMDX vesting), 0xChainArch (Smart Contract Architecture, 2.1M SMDX), 0xGrowth (Ecosystem, 1.8M SMDX), 0xTreasury (Finance & Compliance, 1.4M SMDX). Identities are disclosed to legal counsel and AML compliance officers under NDA as required by UK regulatory obligations.",
        ],
      },
      {
        title: "9.2 Advisors",
        body: [
          "Somidax is supported by advisors with domain expertise in decentralised finance, e-commerce infrastructure, regulatory compliance, and AI systems. Advisor identities are disclosed to KYB counterparties on request. Advisor $SMDX allocations vest over 24 months with a 6-month cliff.",
        ],
      },
    ],
  },
  {
    id: "disclaimers",
    number: "10",
    title: "Disclaimers & Risk Factors",
    subsections: [
      {
        title: "10.1 Not Financial Advice",
        body: [
          "This whitepaper is for informational purposes only. Nothing in this document constitutes financial advice, investment advice, legal advice, or a solicitation to purchase any financial product. $SMDX is a utility token. Purchasing or holding $SMDX involves substantial risk, including the total loss of your investment. Do not purchase $SMDX with funds you cannot afford to lose.",
        ],
      },
      {
        title: "10.2 Regulatory Risk",
        body: [
          "The regulatory environment for digital assets and decentralised protocols is evolving rapidly across all jurisdictions. Future regulatory changes may restrict or prohibit activities described in this whitepaper in certain jurisdictions. Somidax Network Ltd monitors the regulatory landscape and will seek to adapt the protocol as required, but cannot guarantee continued regulatory compliance in all jurisdictions.",
        ],
      },
      {
        title: "10.3 Technical Risk",
        body: [
          "Smart contracts may contain undiscovered vulnerabilities. AI models may produce incorrect or suboptimal results. Oracle feeds may be manipulated or become temporarily unavailable. Network congestion may delay settlement. Somidax has taken material steps to mitigate these risks through audits, redundant infrastructure, and protocol design, but cannot guarantee the absence of technical failures.",
        ],
      },
      {
        title: "10.4 Forward-Looking Statements",
        body: [
          "This whitepaper contains forward-looking statements regarding the future development of the Somidax protocol, market adoption, token economics, and roadmap milestones. These statements are based on current assumptions and are subject to risks and uncertainties that could cause actual outcomes to differ materially. Somidax does not undertake to update forward-looking statements except as required by law.",
        ],
      },
    ],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function WhitePaperPage() {
  const [activeSection, setActiveSection] = useState("abstract");
  const [openSubs, setOpenSubs] = useState<Record<string, boolean>>({});
  const current = sections.find((s) => s.id === activeSection) ?? sections[0];

  const toggleSub = (key: string) =>
    setOpenSubs((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar />

      {/* Hero banner */}
      <div className="pt-28 pb-10 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(138,43,226,0.12) 0%, rgba(0,240,255,0.05) 50%, transparent 70%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(138,43,226,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.04) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                  style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.28)" }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#8A2BE2" }} />
                  <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Somidax DAO · Official Document</span>
                </div>
                <span className="font-mono-data text-xs px-3 py-1.5 rounded-full"
                  style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)", color: "#4ADE80" }}>
                  v1.0 — August 2026
                </span>
              </div>
              <h1 className="font-display font-900 text-white mb-3" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", lineHeight: 1.05 }}>
                Somidax{" "}
                <span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Whitepaper
                </span>
              </h1>
              <p className="text-base leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.5)" }}>
                An AI-native, non-custodial e-commerce settlement network for autonomous commerce. Protocol architecture, token economics, governance model, and technical specification.
              </p>
            </div>
            {/* Meta card */}
            <div className="rounded-2xl p-5 flex-shrink-0 w-64"
              style={{ background: "rgba(18,15,36,0.9)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {[
                { l: "Version", v: "1.0" },
                { l: "Published", v: "1 August 2026" },
                { l: "Chain", v: "ETH · BNB Chain" },
                { l: "Sections", v: `${sections.length}` },
                { l: "Total supply", v: "1,000,000,000 $SMDX" },
              ].map((row) => (
                <div key={row.l} className="flex justify-between py-2"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{row.l}</span>
                  <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.7)" }}>{row.v}</span>
                </div>
              ))}
              <div className="mt-4 flex gap-2">
                <a href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-lg font-mono-data text-xs transition-all hover:opacity-80"
                  style={{ background: "rgba(98,126,234,0.12)", border: "1px solid rgba(98,126,234,0.28)", color: "#627EEA" }}>
                  ETH ↗
                </a>
                <a href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb"
                  target="_blank" rel="noopener noreferrer"
                  className="flex-1 text-center py-1.5 rounded-lg font-mono-data text-xs transition-all hover:opacity-80"
                  style={{ background: "rgba(240,185,11,0.1)", border: "1px solid rgba(240,185,11,0.25)", color: "#F0B90B" }}>
                  BNB ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main layout */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-4 gap-8 items-start">

          {/* Sidebar — table of contents */}
          <div className="lg:sticky lg:top-24 self-start">
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.85)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="px-4 py-3 flex items-center gap-2"
                style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <span className="font-display font-700 text-white text-xs uppercase tracking-widest">
                  Table of Contents
                </span>
              </div>
              <div className="py-2">
                {sections.map((s) => (
                  <button key={s.id} onClick={() => setActiveSection(s.id)}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all group"
                    style={{ background: activeSection === s.id ? "rgba(138,43,226,0.12)" : "transparent" }}>
                    <span className="font-mono-data text-xs w-6 flex-shrink-0 text-right"
                      style={{ color: activeSection === s.id ? "#8A2BE2" : "rgba(255,255,255,0.2)" }}>
                      {s.number}
                    </span>
                    <span className="text-sm font-500 leading-tight"
                      style={{ color: activeSection === s.id ? "#fff" : "rgba(255,255,255,0.45)" }}>
                      {s.title}
                    </span>
                    {activeSection === s.id && (
                      <div className="ml-auto w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#8A2BE2" }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Download mock */}
            <div className="mt-4 rounded-2xl p-4 text-center"
              style={{ background: "rgba(138,43,226,0.07)", border: "1px solid rgba(138,43,226,0.2)" }}>
              <div className="font-display font-600 text-white text-sm mb-1">Download PDF</div>
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>Somidax_Whitepaper_v1.0.pdf</p>
              <button className="w-full py-2.5 rounded-xl font-display font-700 text-xs transition-all hover:scale-105"
                style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 16px rgba(138,43,226,0.3)" }}>
                Download (2.4 MB)
              </button>
            </div>
          </div>

          {/* Document content */}
          <div className="lg:col-span-3">
            {/* Section header */}
            <div className="mb-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-data text-3xl font-900" style={{ color: "rgba(138,43,226,0.4)" }}>
                  {current.number}
                </span>
                <h2 className="font-display font-800 text-white" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>
                  {current.title}
                </h2>
              </div>
              <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                Section {current.number} of {sections[sections.length - 1].number} · Somidax Whitepaper v1.0
              </div>
            </div>

            {/* Subsections */}
            <div className="space-y-5">
              {current.subsections.map((sub, si) => {
                const key = `${current.id}-${si}`;
                const isOpen = openSubs[key] !== false; // default open
                return (
                  <div key={si} className="rounded-2xl overflow-hidden"
                    style={{ background: "rgba(18,15,36,0.7)", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {sub.title && (
                      <button onClick={() => toggleSub(key)}
                        className="w-full flex items-center justify-between px-6 py-4 text-left">
                        <h3 className="font-display font-700 text-white text-sm">{sub.title}</h3>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                          className="flex-shrink-0 transition-transform duration-200"
                          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
                          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </button>
                    )}
                    <div className={sub.title && !isOpen ? "hidden" : ""}>
                      <div className={`px-6 pb-6 space-y-4 ${sub.title ? "pt-0" : "pt-6"}`}
                        style={{ borderTop: sub.title ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                        {sub.body.map((para, pi) => (
                          <p key={pi} className="text-sm leading-[1.9]"
                            style={{ color: "rgba(255,255,255,0.6)" }}>
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section navigation */}
            <div className="flex items-center justify-between mt-10 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {(() => {
                const idx = sections.findIndex((s) => s.id === activeSection);
                const prev = idx > 0 ? sections[idx - 1] : null;
                const next = idx < sections.length - 1 ? sections[idx + 1] : null;
                return (
                  <>
                    <div>
                      {prev && (
                        <button onClick={() => setActiveSection(prev.id)}
                          className="flex items-center gap-2 text-sm font-500 transition-colors hover:text-white"
                          style={{ color: "rgba(255,255,255,0.4)" }}>
                          ← <span>{prev.number} {prev.title}</span>
                        </button>
                      )}
                    </div>
                    <div>
                      {next && (
                        <button onClick={() => setActiveSection(next.id)}
                          className="flex items-center gap-2 text-sm font-500 transition-colors hover:text-white"
                          style={{ color: "rgba(255,255,255,0.4)" }}>
                          <span>{next.number} {next.title}</span> →
                        </button>
                      )}
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-10 text-center" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.25)" }}>
          © 2026 Somidax Network Ltd. This whitepaper is for informational purposes only and does not constitute financial advice.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/dao" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>Somidax DAO</Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <Link to="/legal" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>Legal</Link>
          <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
          <a href="https://github.com/somidaxAI" target="_blank" rel="noopener noreferrer" className="text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>GitHub</a>
        </div>
      </div>
    </div>
  );
}
