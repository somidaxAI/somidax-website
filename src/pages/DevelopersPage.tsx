import { useState } from "react";
import { Link } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

type Tab = "docs" | "api" | "sdk" | "webhooks" | "plugins";

const GITHUB = "https://github.com/somidaxAI";

// ─── Nav ─────────────────────────────────────────────────────────────────────

function NavBar({ active, setActive }: { active: Tab; setActive: (t: Tab) => void }) {
  const tabs: { key: Tab; label: string }[] = [
    { key: "docs",     label: "Documentation" },
    { key: "api",      label: "API Reference" },
    { key: "sdk",      label: "SDK" },
    { key: "webhooks", label: "Webhooks" },
    { key: "plugins",  label: "Plugins" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50"
      style={{ background: "rgba(8,11,17,0.96)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(0,240,255,0.12)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4" style={{ height: 64 }}>
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-lg">Somidax</span>
          <span className="font-mono-data text-xs px-2 py-0.5 rounded-full hidden sm:inline"
            style={{ background: "rgba(0,240,255,0.1)", color: "#00F0FF", border: "1px solid rgba(0,240,255,0.2)" }}>
            Dev Hub
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-0.5">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setActive(t.key)}
              className="px-3.5 py-2 rounded-lg font-display font-500 text-sm transition-all"
              style={{
                background: active === t.key ? "rgba(0,240,255,0.1)" : "transparent",
                color: active === t.key ? "#00F0FF" : "rgba(255,255,255,0.45)",
                borderBottom: active === t.key ? "1px solid rgba(0,240,255,0.4)" : "1px solid transparent",
              }}>
              {t.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 text-sm font-500 transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GitHub
          </a>
          <Link to="/signin"
            className="font-display font-600 px-4 py-2 rounded-lg text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 12px rgba(138,43,226,0.35)" }}>
            Get API Key
          </Link>
        </div>
      </div>
    </nav>
  );
}

// ─── Code block ───────────────────────────────────────────────────────────────

function CodeBlock({ lang, code, title }: { lang: string; code: string; title?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };
  return (
    <div className="rounded-2xl overflow-hidden" style={{ background: "#090C15", border: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="px-4 py-2.5 flex items-center justify-between"
        style={{ background: "rgba(0,0,0,0.35)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#FFBD2E" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
          {title && <span className="font-mono-data text-xs ml-2" style={{ color: "rgba(255,255,255,0.4)" }}>{title}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{lang}</span>
          <button onClick={copy} className="font-mono-data text-xs px-2.5 py-1 rounded-md transition-all"
            style={{ background: copied ? "rgba(74,222,128,0.15)" : "rgba(255,255,255,0.07)", color: copied ? "#4ADE80" : "rgba(255,255,255,0.4)", border: `1px solid ${copied ? "rgba(74,222,128,0.3)" : "rgba(255,255,255,0.1)"}` }}>
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </div>
      <pre className="p-5 text-sm overflow-x-auto" style={{ fontFamily: "'JetBrains Mono', monospace", color: "rgba(255,255,255,0.78)", lineHeight: 1.75 }}>
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ─── Documentation tab ────────────────────────────────────────────────────────

function DocsTab({ setActive }: { setActive: (t: Tab) => void }) {
  const [openSection, setOpenSection] = useState<string | null>("getting-started");

  const sections = [
    {
      id: "getting-started", title: "Getting Started", icon: "⚡",
      steps: [
        { title: "Create a merchant account", body: "Sign in at somidax.io/signin with a Web3 wallet (MetaMask, WalletConnect, or Coinbase Wallet). Your wallet address becomes your merchant identity — no email or password required." },
        { title: "Generate an API key", body: "From the merchant dashboard → Settings → API Keys, generate a key. Store it immediately — it is shown only once. Keys can be scoped to specific permissions (read, write, webhook)." },
        { title: "Install the SDK", body: "Choose TypeScript, Python, or Go. All three SDKs expose the same interface and are fully typed. Testnet is the default — no charges apply until you switch to mainnet." },
        { title: "Sync your catalogue", body: "Push product data via client.catalog.sync() or use one of the native platform integrations (Shopify, WooCommerce, BigCommerce, Magento 2). Inventory updates propagate to the AI engine in under 5 seconds." },
        { title: "Go live", body: "Switch network: 'mainnet' in client config. Your first settled order triggers real $SMDX cashback and GBP/USD/EUR fiat conversion. The 0.5% fee is deducted before settlement reaches your wallet." },
      ],
    },
    {
      id: "auth", title: "Authentication", icon: "◈",
      steps: [
        { title: "API Key authentication", body: "Include your API key in every request as an Authorization header: Authorization: Bearer sk_live_xxxx. Sandbox keys begin with sk_test_. Never expose keys client-side." },
        { title: "Request signing (optional)", body: "High-security integrations can sign requests with HMAC-SHA256 using your signing secret. The signature goes in the X-Somidax-Signature header alongside the timestamp in X-Somidax-Timestamp." },
        { title: "Key rotation", body: "Rotate keys from the dashboard without downtime. The old key remains valid for a 60-second grace period. Rate limit: 1,000 req/min per key on Growth plan, 10,000 on Enterprise." },
      ],
    },
    {
      id: "errors", title: "Errors & Rate Limits", icon: "◇",
      steps: [
        { title: "HTTP status codes", body: "200 OK, 201 Created, 400 Bad Request (validation error), 401 Unauthorized (bad API key), 403 Forbidden (insufficient scope), 404 Not Found, 422 Unprocessable Entity (business logic error), 429 Rate Limited, 500 Internal Server Error." },
        { title: "Error shape", body: `Every error response includes: { "error": { "code": "order_not_found", "message": "No order with ID ord_abc123", "docs": "https://docs.somidax.io/errors/order_not_found" } }` },
        { title: "Retry strategy", body: "503 and 429 responses include a Retry-After header in seconds. All SDK clients implement exponential backoff with jitter by default. Idempotency keys (Idempotency-Key header) are supported on all POST endpoints." },
      ],
    },
    {
      id: "testnet", title: "Testnet & Sandbox", icon: "◎",
      steps: [
        { title: "Testnet access", body: "Set network: 'testnet' in the SDK client. Testnet orders settle in Sepolia (ETH) and BNB Testnet. No real funds are moved. Sandbox $SMDX rewards are issued to a test wallet." },
        { title: "Test card numbers", body: "Use amount 0.01–99.99 GBP for instant settlement simulation. Amounts ≥ 100.00 simulate a 3-second settlement delay. Use amount 99999.00 to trigger a simulated settlement failure." },
        { title: "Testnet dashboard", body: "Testnet orders appear in the merchant dashboard under a yellow 'Testnet' banner. Testnet analytics are separated from live data. KYB verification is not required on testnet." },
      ],
    },
  ];

  return (
    <div className="grid lg:grid-cols-4 gap-8">
      {/* Sidebar */}
      <div className="flex flex-col gap-2 lg:sticky lg:top-28 self-start">
        {sections.map((s) => (
          <button key={s.id} onClick={() => setOpenSection(openSection === s.id ? null : s.id)}
            className="text-left px-4 py-3 rounded-xl font-display font-500 text-sm transition-all flex items-center gap-2"
            style={{
              background: openSection === s.id ? "rgba(0,240,255,0.1)" : "rgba(255,255,255,0.03)",
              border: `1px solid ${openSection === s.id ? "rgba(0,240,255,0.3)" : "rgba(255,255,255,0.06)"}`,
              color: openSection === s.id ? "#00F0FF" : "rgba(255,255,255,0.45)",
            }}>
            <span>{s.icon}</span> {s.title}
          </button>
        ))}
        <div className="mt-4 rounded-xl p-4" style={{ background: "rgba(0,240,255,0.04)", border: "1px solid rgba(0,240,255,0.15)" }}>
          <div className="font-display font-600 text-xs mb-2" style={{ color: "#00F0FF" }}>Quick links</div>
          <div className="space-y-2">
            {[
              { label: "API Reference", tab: "api" as Tab },
              { label: "SDK Docs", tab: "sdk" as Tab },
              { label: "Webhooks", tab: "webhooks" as Tab },
              { label: "Plugins", tab: "plugins" as Tab },
            ].map((l) => (
              <button key={l.label} onClick={() => setActive(l.tab)}
                className="block text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.4)" }}>
                → {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="lg:col-span-3 space-y-4">
        {sections.map((s) => (
          <div key={s.id} className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(18,15,36,0.85)", border: `1px solid ${openSection === s.id ? "rgba(0,240,255,0.2)" : "rgba(255,255,255,0.07)"}` }}>
            <button onClick={() => setOpenSection(openSection === s.id ? null : s.id)}
              className="w-full flex items-center justify-between px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="text-lg">{s.icon}</span>
                <span className="font-display font-700 text-white text-base">{s.title}</span>
                <span className="font-mono-data text-xs px-2 py-0.5 rounded-full"
                  style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  {s.steps.length} sections
                </span>
              </div>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-200 flex-shrink-0"
                style={{ transform: openSection === s.id ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            {openSection === s.id && (
              <div className="px-6 pb-6 space-y-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                {s.steps.map((step, i) => (
                  <div key={i} className="flex gap-4 pt-5">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center font-mono-data text-xs flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.25)", color: "#00F0FF" }}>
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-display font-600 text-white text-sm mb-2">{step.title}</h4>
                      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Quickstart code */}
        <div className="mt-2">
          <CodeBlock lang="bash" title="install.sh" code={`# TypeScript / Node.js
npm install @somidax/sdk

# Python
pip install somidax

# Go
go get github.com/somidaxAI/go-sdk`} />
        </div>
      </div>
    </div>
  );
}

// ─── API Reference tab ────────────────────────────────────────────────────────

const apiGroups = [
  {
    name: "Orders", color: "#4ADE80",
    endpoints: [
      { method: "POST",   path: "/v1/orders",                params: "productQuery, maxBudget, settlement, cashback", returns: "Order object", desc: "Create an agentic checkout order. The AI engine resolves the best match across the network." },
      { method: "GET",    path: "/v1/orders/:id",            params: "—", returns: "Order object", desc: "Retrieve a single order by its ID." },
      { method: "GET",    path: "/v1/orders",                params: "status, from, to, limit, cursor", returns: "Paginated order list", desc: "List all orders with optional status filter and date range." },
      { method: "PATCH",  path: "/v1/orders/:id/fulfil",     params: "trackingCode, carrier, fulfilledAt", returns: "Updated order", desc: "Mark an order as fulfilled and attach tracking information." },
      { method: "POST",   path: "/v1/orders/:id/refund",     params: "reason, amount (optional)", returns: "Refund object", desc: "Initiate a full or partial refund. Stablecoin reversal within 2 blocks." },
    ],
  },
  {
    name: "Catalog", color: "#00F0FF",
    endpoints: [
      { method: "POST",   path: "/v1/catalog/sync",         params: "products[], options.upsert, options.removeStale", returns: "Sync result", desc: "Bulk upsert your product catalog. Changes propagate to the AI engine in < 5 seconds." },
      { method: "GET",    path: "/v1/catalog",              params: "q, category, limit, cursor", returns: "Paginated products", desc: "Search and paginate your synced catalog." },
      { method: "GET",    path: "/v1/catalog/:sku",         params: "—", returns: "Product object", desc: "Retrieve a single product by SKU." },
      { method: "PATCH",  path: "/v1/catalog/:sku",         params: "price, stock, tags, name", returns: "Updated product", desc: "Update a product's price, stock level, or metadata." },
      { method: "DELETE", path: "/v1/catalog/:sku",         params: "—", returns: "204 No Content", desc: "Remove a product from the Somidax AI discovery index." },
    ],
  },
  {
    name: "Payments", color: "#A855F7",
    endpoints: [
      { method: "GET",    path: "/v1/payments",             params: "from, to, currency", returns: "Settlement list", desc: "List all settled payments with fiat conversion details." },
      { method: "GET",    path: "/v1/payments/:txHash",     params: "—", returns: "Settlement object", desc: "Look up a settlement by its on-chain transaction hash." },
      { method: "GET",    path: "/v1/wallet/balance",       params: "—", returns: "Balance object", desc: "Get current stablecoin and $SMDX balances for the merchant wallet." },
    ],
  },
  {
    name: "Rewards", color: "#FFBD2E",
    endpoints: [
      { method: "GET",    path: "/v1/rewards",              params: "from, to", returns: "Reward list", desc: "List all $SMDX rewards issued and their status (pending, confirmed, staked)." },
      { method: "POST",   path: "/v1/rewards/claim",        params: "amount, toAddress", returns: "Claim transaction", desc: "Trigger a $SMDX reward claim to a specified wallet address." },
    ],
  },
  {
    name: "Analytics", color: "#F87171",
    endpoints: [
      { method: "GET",    path: "/v1/analytics/revenue",    params: "from, to, currency, granularity", returns: "Revenue series", desc: "Time-series revenue data broken down by settlement currency." },
      { method: "GET",    path: "/v1/analytics/orders",     params: "from, to, granularity", returns: "Order metrics", desc: "Order volume, AOV, and conversion rate over time." },
      { method: "GET",    path: "/v1/analytics/top-products", params: "limit, from, to", returns: "Product ranking", desc: "Products ranked by revenue, order count, or cashback issued." },
    ],
  },
];

const methodColor: Record<string, string> = { GET: "#00F0FF", POST: "#4ADE80", PATCH: "#FFBD2E", DELETE: "#FF4D4D", PUT: "#A855F7" };

function ApiTab() {
  const [openGroup, setOpenGroup] = useState<string>("Orders");
  const [activeEndpoint, setActiveEndpoint] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 className="font-display font-700 text-white text-xl">REST API Reference</h2>
        <div className="font-mono-data text-xs px-3 py-1.5 rounded-lg"
          style={{ background: "rgba(0,240,255,0.07)", border: "1px solid rgba(0,240,255,0.2)", color: "#00F0FF" }}>
          Base URL: https://api.somidax.io
        </div>
      </div>

      {/* Response example */}
      <div className="mb-6">
        <CodeBlock lang="http" title="Request headers" code={`Authorization: Bearer sk_live_your_api_key_here
Content-Type: application/json
X-Somidax-Version: 2026-08-01
Idempotency-Key: uuid-v4-for-post-requests`} />
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Group nav */}
        <div className="flex flex-col gap-2">
          {apiGroups.map((g) => (
            <button key={g.name} onClick={() => setOpenGroup(g.name)}
              className="text-left px-4 py-3 rounded-xl font-display font-500 text-sm transition-all flex items-center justify-between"
              style={{
                background: openGroup === g.name ? `${g.color}12` : "rgba(255,255,255,0.03)",
                border: `1px solid ${openGroup === g.name ? `${g.color}30` : "rgba(255,255,255,0.06)"}`,
                color: openGroup === g.name ? g.color : "rgba(255,255,255,0.45)",
              }}>
              <span>{g.name}</span>
              <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                {g.endpoints.length}
              </span>
            </button>
          ))}
        </div>

        {/* Endpoint list */}
        <div className="lg:col-span-4">
          {apiGroups.filter((g) => g.name === openGroup).map((g) => (
            <div key={g.name} className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="px-5 py-3 flex items-center gap-2"
                style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-2 h-2 rounded-full" style={{ background: g.color }} />
                <span className="font-display font-700 text-white text-sm">{g.name} API</span>
              </div>
              {g.endpoints.map((ep, i) => {
                const key = `${g.name}-${i}`;
                const open = activeEndpoint === key;
                const mc = methodColor[ep.method] ?? "#94A3B8";
                return (
                  <div key={i} style={{ borderBottom: i < g.endpoints.length-1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                    <button onClick={() => setActiveEndpoint(open ? null : key)}
                      className="w-full flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.02] text-left">
                      <span className="font-mono-data text-xs font-600 w-16 text-center py-1 rounded-md flex-shrink-0"
                        style={{ background: `${mc}12`, color: mc, border: `1px solid ${mc}25` }}>
                        {ep.method}
                      </span>
                      <span className="font-mono-data text-sm flex-1 min-w-0 truncate" style={{ color: "#00F0FF" }}>{ep.path}</span>
                      <span className="text-xs flex-shrink-0 hidden md:block" style={{ color: "rgba(255,255,255,0.35)" }}>{ep.desc}</span>
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
                        className="flex-shrink-0 transition-transform duration-150"
                        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.25)" }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.15)" }}>
                        <p className="text-sm mb-4 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{ep.desc}</p>
                        <div className="grid md:grid-cols-2 gap-3 mb-4">
                          <div>
                            <div className="font-mono-data text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>PARAMETERS</div>
                            <div className="font-mono-data text-xs p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.55)", border: "1px solid rgba(255,255,255,0.06)" }}>
                              {ep.params}
                            </div>
                          </div>
                          <div>
                            <div className="font-mono-data text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>RETURNS</div>
                            <div className="font-mono-data text-xs p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", color: "#4ADE80", border: "1px solid rgba(255,255,255,0.06)" }}>
                              {ep.returns}
                            </div>
                          </div>
                        </div>
                        <a href={GITHUB} target="_blank" rel="noopener noreferrer"
                          className="font-mono-data text-xs transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.35)" }}>
                          View full schema on GitHub →
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── SDK tab ──────────────────────────────────────────────────────────────────

const sdks = [
  {
    lang: "TypeScript",
    version: "v2.4.1",
    install: "npm install @somidax/sdk",
    color: "#3B82F6",
    github: `${GITHUB}/sdk-typescript`,
    badge: "TS",
    snippets: [
      { label: "Install", lang: "bash", code: "npm install @somidax/sdk\n# or\npnpm add @somidax/sdk\nyarn add @somidax/sdk" },
      { label: "Init", lang: "typescript", code: `import { SomidaxClient } from '@somidax/sdk';

const client = new SomidaxClient({
  apiKey: process.env.SOMIDAX_API_KEY!,
  network: 'mainnet', // 'testnet' for sandbox
  chain: 'ethereum',  // 'bnb' for BNB Chain
});

await client.connect();
// → Connected to Somidax Network ✓` },
      { label: "Create Order", lang: "typescript", code: `const order = await client.orders.create({
  productQuery: 'Sony WH-1000XM5 under £250',
  maxBudget: { amount: '250', currency: 'GBP' },
  cashback: true,
  settlement: {
    currency: 'GBP',
    wallet: '0xYourMerchantWallet',
    splitRatio: { GBP: 60, USD: 25, EUR: 15 },
  },
});

// order.id        → 'ord_abc123'
// order.fee       → '0.5%'
// order.smdxBack  → '2.4 SMDX'
// order.settled   → true (< 1s)` },
      { label: "Catalog Sync", lang: "typescript", code: `await client.catalog.sync({
  products: [
    {
      sku: 'SKU-001',
      name: 'Sony WH-1000XM5',
      price: { amount: '249.00', currency: 'GBP' },
      stock: 42,
      tags: ['headphones', 'wireless', 'noise-cancelling'],
      images: ['https://cdn.example.com/wh1000xm5.jpg'],
    },
  ],
  options: { upsert: true, removeStale: false },
});` },
    ],
  },
  {
    lang: "Python",
    version: "v2.3.0",
    install: "pip install somidax",
    color: "#FACC15",
    github: `${GITHUB}/sdk-python`,
    badge: "PY",
    snippets: [
      { label: "Install", lang: "bash", code: "pip install somidax\n# or with poetry\npoetry add somidax" },
      { label: "Init", lang: "python", code: `from somidax import SomidaxClient
import os

client = SomidaxClient(
    api_key=os.environ["SOMIDAX_API_KEY"],
    network="mainnet",   # or "testnet"
    chain="ethereum",    # or "bnb"
)

client.connect()
# → Connected to Somidax Network ✓` },
      { label: "Create Order", lang: "python", code: `order = client.orders.create(
    product_query="Sony WH-1000XM5 under £250",
    max_budget={"amount": "250", "currency": "GBP"},
    cashback=True,
    settlement={
        "currency": "GBP",
        "wallet": "0xYourMerchantWallet",
    },
)

print(order["id"])         # ord_abc123
print(order["fee"])        # 0.5%
print(order["smdx_back"])  # 2.4 SMDX` },
      { label: "Catalog Sync", lang: "python", code: `result = client.catalog.sync(
    products=[
        {
            "sku": "SKU-001",
            "name": "Sony WH-1000XM5",
            "price": {"amount": "249.00", "currency": "GBP"},
            "stock": 42,
            "tags": ["headphones", "wireless", "noise-cancelling"],
        }
    ],
    options={"upsert": True, "remove_stale": False},
)` },
    ],
  },
  {
    lang: "Go",
    version: "v1.9.2",
    install: "go get github.com/somidaxAI/go-sdk",
    color: "#00F0FF",
    github: `${GITHUB}/go-sdk`,
    badge: "GO",
    snippets: [
      { label: "Install", lang: "bash", code: "go get github.com/somidaxAI/go-sdk@latest" },
      { label: "Init", lang: "go", code: `package main

import (
    "context"
    "fmt"
    "github.com/somidaxAI/go-sdk"
)

func main() {
    client := somidax.NewClient(somidax.Config{
        APIKey:  os.Getenv("SOMIDAX_API_KEY"),
        Network: somidax.Mainnet,
        Chain:   somidax.Ethereum,
    })

    err := client.Connect(context.Background())
    if err != nil { panic(err) }
    fmt.Println("Connected to Somidax ✓")
}` },
      { label: "Create Order", lang: "go", code: `order, err := client.Orders.Create(ctx, &somidax.CreateOrderRequest{
    ProductQuery: "Sony WH-1000XM5 under £250",
    MaxBudget:    somidax.Money{Amount: "250", Currency: "GBP"},
    Cashback:     true,
    Settlement: somidax.Settlement{
        Currency: "GBP",
        Wallet:   "0xYourMerchantWallet",
    },
})
if err != nil { log.Fatal(err) }

fmt.Println(order.ID)       // ord_abc123
fmt.Println(order.SMDXBack) // 2.4 SMDX` },
      { label: "Catalog Sync", lang: "go", code: `_, err = client.Catalog.Sync(ctx, &somidax.SyncRequest{
    Products: []somidax.Product{
        {
            SKU:   "SKU-001",
            Name:  "Sony WH-1000XM5",
            Price: somidax.Money{Amount: "249.00", Currency: "GBP"},
            Stock: 42,
            Tags:  []string{"headphones", "wireless"},
        },
    },
    Options: somidax.SyncOptions{Upsert: true},
})` },
    ],
  },
];

function SdkTab() {
  const [activeSdk, setActiveSdk] = useState("TypeScript");
  const [activeSnippet, setActiveSnippet] = useState("Install");
  const sdk = sdks.find((s) => s.lang === activeSdk)!;
  const snippet = sdk.snippets.find((s) => s.label === activeSnippet) ?? sdk.snippets[0];

  return (
    <div>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
        <h2 className="font-display font-700 text-white text-xl">Official SDKs</h2>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 font-display font-600 text-sm px-4 py-2 rounded-xl transition-all hover:scale-105"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          github.com/somidaxAI
        </a>
      </div>

      {/* SDK selector */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {sdks.map((s) => (
          <button key={s.lang} onClick={() => { setActiveSdk(s.lang); setActiveSnippet("Install"); }}
            className="rounded-2xl p-5 text-left transition-all hover:scale-[1.02]"
            style={{
              background: activeSdk === s.lang ? `${s.color}10` : "rgba(18,15,36,0.85)",
              border: `1px solid ${activeSdk === s.lang ? `${s.color}35` : "rgba(255,255,255,0.07)"}`,
              boxShadow: activeSdk === s.lang ? `0 0 20px ${s.color}15` : "none",
            }}>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-800 text-sm"
                style={{ background: `${s.color}18`, border: `1px solid ${s.color}28`, color: s.color }}>
                {s.badge}
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>{s.version}</span>
                <a href={s.github} target="_blank" rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="transition-colors hover:text-white" style={{ color: "rgba(255,255,255,0.3)" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="font-display font-700 text-white text-base mb-1">{s.lang} SDK</div>
            <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.install}</div>
          </button>
        ))}
      </div>

      {/* Code explorer */}
      <div className="grid lg:grid-cols-5 gap-5">
        <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
          {sdk.snippets.map((sn) => (
            <button key={sn.label} onClick={() => setActiveSnippet(sn.label)}
              className="px-3.5 py-2.5 rounded-xl font-display font-500 text-sm whitespace-nowrap transition-all flex-shrink-0"
              style={{
                background: activeSnippet === sn.label ? `${sdk.color}18` : "rgba(255,255,255,0.04)",
                border: `1px solid ${activeSnippet === sn.label ? `${sdk.color}35` : "rgba(255,255,255,0.07)"}`,
                color: activeSnippet === sn.label ? sdk.color : "rgba(255,255,255,0.45)",
              }}>
              {sn.label}
            </button>
          ))}
        </div>
        <div className="lg:col-span-4">
          <CodeBlock lang={snippet.lang} title={`${sdk.lang.toLowerCase()}-sdk · ${snippet.label.toLowerCase()}`} code={snippet.code} />
        </div>
      </div>

      {/* GitHub CTA */}
      <div className="mt-8 rounded-2xl p-6 flex items-center justify-between gap-4 flex-wrap"
        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div>
          <div className="font-display font-700 text-white text-base mb-1">View full source on GitHub</div>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            All SDKs are open-source under the MIT licence. Issues, PRs, and discussions welcome.
          </p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer"
          className="font-display font-700 px-6 py-3 rounded-xl text-sm transition-all hover:scale-105 flex items-center gap-2 flex-shrink-0"
          style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          github.com/somidaxAI
        </a>
      </div>
    </div>
  );
}

// ─── Webhooks tab ─────────────────────────────────────────────────────────────

const webhookEvents = [
  { event: "order.created",   desc: "Fired when a new order is created by an AI agent but before settlement.", payload: "order_id, product_sku, buyer_wallet, amount, currency", color: "#4ADE80" },
  { event: "order.settled",   desc: "Fired when settlement is confirmed on-chain. Trigger fulfilment here.", payload: "order_id, tx_hash, settlement_amount, fee_deducted, smdx_issued", color: "#4ADE80" },
  { event: "order.refunded",  desc: "Fired when a refund is confirmed on-chain.", payload: "order_id, refund_tx_hash, refund_amount, reason", color: "#FF4D4D" },
  { event: "order.failed",    desc: "Fired when an order fails to settle after 3 retries.", payload: "order_id, failure_reason, retry_count", color: "#FF4D4D" },
  { event: "catalog.synced",  desc: "Fired when a catalog sync completes. Reports counts of products upserted, skipped, and removed.", payload: "sync_id, upserted, skipped, removed, duration_ms", color: "#00F0FF" },
  { event: "reward.issued",   desc: "Fired when $SMDX cashback is issued to a buyer wallet.", payload: "order_id, buyer_wallet, smdx_amount, chain", color: "#A855F7" },
  { event: "reward.staked",   desc: "Fired when a buyer stakes their $SMDX reward.", payload: "buyer_wallet, staked_amount, new_tier, apy", color: "#A855F7" },
  { event: "payment.settled", desc: "Fired when a fiat conversion payout is initiated to your bank account.", payload: "payout_id, gbp_amount, usd_amount, eur_amount, bank_ref", color: "#FFBD2E" },
];

function WebhooksTab() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null);

  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="font-display font-700 text-white text-xl mb-3">Webhooks</h2>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
            Somidax delivers real-time event notifications to your endpoint via HTTPS POST. Every request is signed with HMAC-SHA256 so you can verify authenticity. Retries fire at 30s, 2m, 10m, and 1h on failure.
          </p>
          <div className="space-y-3">
            {[
              { title: "Setup", body: "Register a webhook endpoint in the dashboard → Settings → Webhooks. Enter your HTTPS URL and select the event types to subscribe to." },
              { title: "Signature verification", body: "Every request includes X-Somidax-Signature (HMAC-SHA256 hex) and X-Somidax-Timestamp (Unix ms). Verify the signature before processing." },
              { title: "Idempotency", body: "Each delivery includes a unique X-Somidax-Delivery-ID. Use this to deduplicate retried events. Respond with 2xx within 10 seconds — otherwise Somidax retries." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 p-4 rounded-xl" style={{ background: "rgba(18,15,36,0.85)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="w-5 h-5 rounded-full flex items-center justify-center font-mono-data text-xs flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.25)", color: "#00F0FF" }}>
                  {i + 1}
                </div>
                <div>
                  <div className="font-display font-600 text-white text-sm mb-1">{item.title}</div>
                  <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <CodeBlock lang="typescript" title="webhook-handler.ts" code={`import express from 'express';
import { SomidaxClient } from '@somidax/sdk';

const app = express();
const client = new SomidaxClient({ apiKey: process.env.SOMIDAX_API_KEY! });

app.post('/webhooks/somidax',
  express.raw({ type: 'application/json' }),
  async (req, res) => {
    // 1. Verify the signature
    const event = client.webhooks.verify(
      req.body,
      req.headers['x-somidax-signature'] as string,
      req.headers['x-somidax-timestamp'] as string,
      process.env.WEBHOOK_SECRET!,
    );

    // 2. Handle events
    switch (event.type) {
      case 'order.settled':
        await db.orders.markFulfilled(event.data.order_id);
        await shipping.createLabel(event.data.order_id);
        break;

      case 'reward.issued':
        await notifyBuyer(event.data.buyer_wallet, event.data.smdx_amount);
        break;

      case 'order.refunded':
        await db.orders.markRefunded(event.data.order_id);
        break;
    }

    // 3. Acknowledge within 10s
    res.json({ received: true });
  }
);`} />
        </div>
      </div>

      {/* Event catalogue */}
      <h2 className="font-display font-700 text-white text-base mb-4">Event Catalogue</h2>
      <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.07)" }}>
        {webhookEvents.map((ev, i) => {
          const open = activeEvent === ev.event;
          return (
            <div key={ev.event} style={{ borderBottom: i < webhookEvents.length-1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
              <button onClick={() => setActiveEvent(open ? null : ev.event)}
                className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-white/[0.015]">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ev.color }} />
                <span className="font-mono-data text-sm flex-1" style={{ color: ev.color }}>{ev.event}</span>
                <span className="text-xs flex-shrink-0 hidden md:block" style={{ color: "rgba(255,255,255,0.35)" }}>{ev.desc.slice(0, 55)}…</span>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none"
                  className="flex-shrink-0 transition-transform duration-150"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.25)" }}>
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {open && (
                <div className="px-5 pb-5 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.1)" }}>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{ev.desc}</p>
                  <div className="font-mono-data text-xs mb-1" style={{ color: "rgba(255,255,255,0.3)" }}>PAYLOAD FIELDS</div>
                  <div className="font-mono-data text-xs p-3 rounded-lg" style={{ background: "rgba(255,255,255,0.03)", color: "#00F0FF", border: "1px solid rgba(255,255,255,0.07)" }}>
                    {ev.payload.split(", ").map((f) => (
                      <div key={f}>· {f}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Plugins tab ─────────────────────────────────────────────────────────────

const plugins = [
  {
    name: "Shopify App",
    category: "E-commerce",
    status: "GA",
    version: "v3.1.0",
    color: "#95BF47",
    desc: "One-click OAuth install from the Shopify App Store. Syncs products, inventory, and orders in real-time. No code required.",
    features: ["Automatic catalog sync", "Somidax Pay checkout button", "$SMDX cashback display", "AI discovery opt-in per product", "Order fulfilment webhook"],
    install: `# Via Shopify App Store
# Search: "Somidax AI Commerce"
# Or install via CLI:
shopify app install --url https://apps.shopify.com/somidax`,
    github: `${GITHUB}/plugin-shopify`,
  },
  {
    name: "WooCommerce Plugin",
    category: "E-commerce",
    status: "GA",
    version: "v2.8.3",
    color: "#7F54B3",
    desc: "WordPress plugin. Installs via the WP admin plugin directory. Supports variable products, HPOS, and WooCommerce Blocks.",
    features: ["REST API bridge to Somidax", "Variable product + attribute mapping", "Somidax Pay payment gateway", "Stock decrement on settlement", "WooCommerce Blocks compatible"],
    install: `# Via WP admin → Plugins → Add New
# Search: "Somidax AI Commerce"
# Or via WP-CLI:
wp plugin install somidax --activate`,
    github: `${GITHUB}/plugin-woocommerce`,
  },
  {
    name: "Next.js Plugin",
    category: "Headless",
    status: "GA",
    version: "v1.4.0",
    color: "#fff",
    desc: "Official Next.js integration. Server components, App Router, and Edge Runtime compatible. Includes UI components for checkout and rewards.",
    features: ["App Router & Pages Router", "Edge Runtime compatible", "<SomidaxCheckout /> component", "useOrder() and useRewards() hooks", "ISR-friendly catalog fetching"],
    install: `npm install @somidax/next

# next.config.ts
import { withSomidax } from '@somidax/next';
export default withSomidax({ apiKey: process.env.SOMIDAX_API_KEY });`,
    github: `${GITHUB}/plugin-nextjs`,
  },
  {
    name: "Zapier Integration",
    category: "Automation",
    status: "GA",
    version: "v1.0.0",
    color: "#FF4A00",
    desc: "Connect Somidax to 2,000+ apps without writing code. Pre-built triggers and actions for common merchant workflows.",
    features: ["Trigger: Order Settled", "Trigger: Reward Issued", "Trigger: Refund Processed", "Action: Sync Product", "Action: Update Stock"],
    install: `# No install required — connect via Zapier UI
# 1. Go to zapier.com/apps/somidax
# 2. Create a new Zap
# 3. Choose a Somidax trigger or action
# 4. Authenticate with your Somidax API key`,
    github: `${GITHUB}/integration-zapier`,
  },
  {
    name: "Contentful App",
    category: "CMS",
    status: "Beta",
    version: "v0.9.1",
    color: "#FFD85F",
    desc: "Sync Contentful product content entries with the Somidax catalog. AI enrichment runs on sync, improving titles and tags.",
    features: ["Content Model auto-mapping", "Bi-directional sync", "AI title + tag enrichment on push", "Webhook listener for content publishes", "Multi-locale support"],
    install: `# Install via Contentful App Marketplace
# Search: "Somidax Catalog Sync"
# Configure Content Model mapping in app config`,
    github: `${GITHUB}/plugin-contentful`,
  },
  {
    name: "Klaviyo Integration",
    category: "Marketing",
    status: "GA",
    version: "v1.2.0",
    color: "#00B400",
    desc: "Push Somidax order and reward events into Klaviyo flows and segments for automated email and SMS sequences.",
    features: ["order.settled → Klaviyo event", "reward.issued → Klaviyo property", "Custom $SMDX properties on profiles", "AI purchase intent signals", "Abandoned checkout trigger"],
    install: `import { KlaviyoPlugin } from '@somidax/plugin-klaviyo';

client.use(new KlaviyoPlugin({
  privateKey: process.env.KLAVIYO_PRIVATE_KEY!,
  listId: 'LIST_ID',
}));`,
    github: `${GITHUB}/plugin-klaviyo`,
  },
];

function PluginsTab() {
  const [activePlugin, setActivePlugin] = useState<string | null>(null);
  const statusColor: Record<string, string> = { GA: "#4ADE80", Beta: "#FFBD2E", "Coming Q4": "#94A3B8" };
  const categories = [...new Set(plugins.map((p) => p.category))];

  return (
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        <div>
          <h2 className="font-display font-700 text-white text-xl mb-1">Official Plugins & Integrations</h2>
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
            Open-source. MIT licence. Full source at{" "}
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="underline" style={{ color: "#00F0FF" }}>github.com/somidaxAI</a>
          </p>
        </div>
        <a href={GITHUB} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 font-display font-600 text-sm px-4 py-2 rounded-xl transition-all hover:scale-105"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
          View all repos
        </a>
      </div>

      {categories.map((cat) => (
        <div key={cat} className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <h3 className="font-display font-700 text-white text-xs uppercase tracking-widest">{cat}</h3>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>
          <div className="space-y-3">
            {plugins.filter((p) => p.category === cat).map((p) => {
              const open = activePlugin === p.name;
              const sc = statusColor[p.status] ?? "#94A3B8";
              return (
                <div key={p.name} className="rounded-2xl overflow-hidden transition-all"
                  style={{ background: "rgba(18,15,36,0.85)", border: `1px solid ${open ? `${p.color}28` : "rgba(255,255,255,0.07)"}` }}>
                  <button onClick={() => setActivePlugin(open ? null : p.name)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-800 text-xs flex-shrink-0"
                      style={{ background: `${p.color}15`, border: `1px solid ${p.color}25`, color: p.color === "#fff" ? "#aaa" : p.color }}>
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="font-display font-700 text-white text-sm">{p.name}</span>
                        <span className="font-mono-data text-xs px-2 py-0.5 rounded-full"
                          style={{ background: `${sc}12`, color: sc, border: `1px solid ${sc}25` }}>{p.status}</span>
                        <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>{p.version}</span>
                      </div>
                      <p className="text-xs leading-snug hidden md:block" style={{ color: "rgba(255,255,255,0.4)" }}>
                        {p.desc.slice(0, 80)}…
                      </p>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="transition-colors hover:text-white hidden md:block" style={{ color: "rgba(255,255,255,0.3)" }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      </a>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none"
                        className="transition-transform duration-200"
                        style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", color: "rgba(255,255,255,0.3)" }}>
                        <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </button>
                  {open && (
                    <div className="px-5 pb-6 pt-2 grid md:grid-cols-2 gap-6"
                      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                      <div>
                        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.55)" }}>{p.desc}</p>
                        <div className="font-mono-data text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>FEATURES</div>
                        <ul className="space-y-1.5">
                          {p.features.map((f) => (
                            <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>
                              <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="5.5" stroke={p.color === "#fff" ? "#aaa" : p.color} strokeOpacity="0.4"/>
                                <polyline points="3.5 6 5.5 8 8.5 4" stroke={p.color === "#fff" ? "#aaa" : p.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              {f}
                            </li>
                          ))}
                        </ul>
                        <a href={p.github} target="_blank" rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-1.5 text-xs font-600 transition-colors hover:text-white"
                          style={{ color: "rgba(255,255,255,0.4)" }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
                          </svg>
                          View on GitHub →
                        </a>
                      </div>
                      <CodeBlock lang="bash" title={`${p.name.toLowerCase().replace(/ /g, "-")}-install`} code={p.install} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────

export default function DevelopersPage() {
  const [activeTab, setActiveTab] = useState<Tab>("docs");

  const tabLabels: Record<Tab, string> = {
    docs: "Documentation", api: "API Reference", sdk: "SDK", webhooks: "Webhooks", plugins: "Plugins",
  };

  return (
    <div style={{ background: "#080B11", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      <NavBar active={activeTab} setActive={setActiveTab} />

      {/* Hero */}
      <div className="pt-28 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,240,255,0.08) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(0,240,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4"
                style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)" }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#4ADE80" }} />
                <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>API v2026-08-01 · All systems operational</span>
              </div>
              <h1 className="font-display font-900 text-white mb-3" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
                Build on{" "}
                <span style={{ background: "linear-gradient(135deg,#00F0FF,#8A2BE2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Somidax
                </span>
              </h1>
              <p className="text-base leading-relaxed max-w-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
                REST API, typed SDKs in three languages, real-time webhooks, and drop-in plugins for every major platform. Ship in hours, not weeks.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { v: "< 120ms", l: "P95 latency", c: "#00F0FF" },
                { v: "99.97%", l: "Uptime SLA", c: "#4ADE80" },
                { v: "3 SDKs", l: "TS · Py · Go", c: "#A855F7" },
                { v: "Free", l: "Testnet", c: "#FFBD2E" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl p-4 text-center"
                  style={{ background: "rgba(18,15,36,0.8)", border: `1px solid ${s.c}20` }}>
                  <div className="font-display font-800 text-lg mb-0.5" style={{ color: s.c }}>{s.v}</div>
                  <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile tab strip */}
      <div className="md:hidden px-6 mb-6 overflow-x-auto">
        <div className="flex gap-2 w-max">
          {(Object.keys(tabLabels) as Tab[]).map((t) => (
            <button key={t} onClick={() => setActiveTab(t)}
              className="px-4 py-2 rounded-lg font-display font-600 text-xs whitespace-nowrap transition-all"
              style={{
                background: activeTab === t ? "rgba(0,240,255,0.12)" : "rgba(255,255,255,0.05)",
                color: activeTab === t ? "#00F0FF" : "rgba(255,255,255,0.45)",
                border: `1px solid ${activeTab === t ? "rgba(0,240,255,0.3)" : "rgba(255,255,255,0.07)"}`,
              }}>
              {tabLabels[t]}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-8" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 20 }}>
          <div className="w-2 h-2 rounded-full" style={{ background: "#00F0FF" }} />
          <span className="font-display font-700 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
            {tabLabels[activeTab]}
          </span>
        </div>

        {activeTab === "docs"     && <DocsTab setActive={setActiveTab} />}
        {activeTab === "api"      && <ApiTab />}
        {activeTab === "sdk"      && <SdkTab />}
        {activeTab === "webhooks" && <WebhooksTab />}
        {activeTab === "plugins"  && <PluginsTab />}
      </div>
    </div>
  );
}
