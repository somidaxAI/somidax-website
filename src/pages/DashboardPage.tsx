import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

// ── Sidebar nav items ─────────────────────────────────────────────────────
const navItems = [
  { id: "overview",   label: "Overview",     icon: "▦" },
  { id: "orders",     label: "AI Orders",    icon: "⚡" },
  { id: "analytics",  label: "Analytics",    icon: "◎" },
  { id: "catalog",    label: "Catalog",      icon: "☰" },
  { id: "payments",   label: "Payments",     icon: "◈" },
  { id: "rewards",    label: "SMDX Rewards", icon: "◆" },
  { id: "settings",   label: "Settings",     icon: "⚙" },
];

// ── Fake data ─────────────────────────────────────────────────────────────
const recentOrders = [
  { id: "ORD-8821", product: "Sony WH-1000XM5",    store: "Acme Electronics", amount: 219.99, fee: 1.10, smdx: 8.80,  status: "settled",    time: "2m ago" },
  { id: "ORD-8820", product: "Nike Air Max 270",    store: "Nova Fashion",     amount: 134.99, fee: 0.67, smdx: 5.40,  status: "settled",    time: "11m ago" },
  { id: "ORD-8819", product: "Apple AirPods Pro",   store: "TechHub Store",    amount: 249.00, fee: 1.25, smdx: 9.96,  status: "processing", time: "18m ago" },
  { id: "ORD-8818", product: "Dyson V15 Detect",    store: "Kitchen World",    amount: 599.00, fee: 3.00, smdx: 23.96, status: "settled",    time: "34m ago" },
  { id: "ORD-8817", product: "Samsung 65\" QLED",   store: "Acme Electronics", amount: 1199.00, fee: 6.00, smdx: 47.96, status: "settled",   time: "1h ago" },
  { id: "ORD-8816", product: "Lego Technic 42131",  store: "Toy Kingdom",      amount: 229.99, fee: 1.15, smdx: 9.20,  status: "refunded",   time: "2h ago" },
];

const hourlyData = [
  { h: "00", v: 1240 }, { h: "01", v: 820 }, { h: "02", v: 440 }, { h: "03", v: 310 },
  { h: "04", v: 290 }, { h: "05", v: 560 }, { h: "06", v: 1380 }, { h: "07", v: 2140 },
  { h: "08", v: 3200 }, { h: "09", v: 4100 }, { h: "10", v: 5600 }, { h: "11", v: 6200 },
  { h: "12", v: 7400 }, { h: "13", v: 6800 }, { h: "14", v: 8100 }, { h: "15", v: 8340 },
];

const weeklyData = [
  { d: "Mon", v: 38400 }, { d: "Tue", v: 42100 }, { d: "Wed", v: 35600 },
  { d: "Thu", v: 51200 }, { d: "Fri", v: 67800 }, { d: "Sat", v: 44300 }, { d: "Sun", v: 29100 },
];

const catalogItems = [
  { sku: "SKU-001", name: "Sony WH-1000XM5", price: "£249.00", stock: 42, status: "active", sold: 128 },
  { sku: "SKU-002", name: "Apple AirPods Pro 2", price: "£229.00", stock: 18, status: "active", sold: 94 },
  { sku: "SKU-003", name: "Dyson V15 Detect", price: "£599.00", stock: 7, status: "low_stock", sold: 61 },
  { sku: "SKU-004", name: "Samsung 65\" QLED TV", price: "£1,199.00", stock: 0, status: "out_of_stock", sold: 33 },
  { sku: "SKU-005", name: "Nike Air Max 270", price: "£134.99", stock: 84, status: "active", sold: 217 },
];

const statusColor: Record<string, string> = {
  settled: "#4ADE80",
  processing: "#FFBD2E",
  refunded: "#FF4D4D",
  active: "#4ADE80",
  low_stock: "#FFBD2E",
  out_of_stock: "#FF4D4D",
};

// ── Bar chart ─────────────────────────────────────────────────────────────
function BarChart({ data, valueKey, labelKey, color = "#8A2BE2", accentColor = "#00F0FF" }:
  { data: any[]; valueKey: string; labelKey: string; color?: string; accentColor?: string }) {
  const [hovered, setHovered] = useState<number | null>(null);
  const max = Math.max(...data.map((d) => d[valueKey]));
  return (
    <div className="flex items-end gap-1 h-28">
      {data.map((d, i) => {
        const h = Math.max(4, (d[valueKey] / max) * 104);
        const isHigh = i === data.length - 1 || d[valueKey] === max;
        return (
          <div key={i} className="flex-1 flex flex-col items-center gap-1 group relative"
            onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)}>
            {hovered === i && (
              <div className="absolute bottom-full mb-1 px-2 py-1 rounded-lg text-xs whitespace-nowrap z-10 font-mono-data"
                style={{ background: "rgba(18,15,36,0.95)", border: "1px solid rgba(138,43,226,0.3)", color: "#fff" }}>
                £{d[valueKey].toLocaleString()}
              </div>
            )}
            <div className="w-full rounded-t-sm transition-all duration-200"
              style={{
                height: `${h}px`,
                background: isHigh ? `linear-gradient(180deg, ${accentColor}, ${accentColor}99)` : `linear-gradient(180deg, ${color}AA, ${color}44)`,
                boxShadow: isHigh ? `0 0 8px ${accentColor}50` : "none",
                opacity: hovered !== null && hovered !== i ? 0.5 : 1,
              }} />
            <span className="font-mono-data" style={{ color: "rgba(255,255,255,0.3)", fontSize: "9px" }}>{d[labelKey]}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── Sidebar ───────────────────────────────────────────────────────────────
function Sidebar({ active, setActive, collapsed, setCollapsed }:
  { active: string; setActive: (id: string) => void; collapsed: boolean; setCollapsed: (v: boolean) => void }) {
  const navigate = useNavigate();
  return (
    <aside
      className="flex flex-col h-full transition-all duration-300 flex-shrink-0"
      style={{
        width: collapsed ? "64px" : "220px",
        background: "linear-gradient(180deg, #120F24 0%, #0C0A1E 100%)",
        borderRight: "1px solid rgba(138,43,226,0.15)",
      }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-4 py-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain flex-shrink-0" style={{ background: "#fff" }} />
        {!collapsed && <span className="font-display font-700 text-white text-base">Somidax</span>}
      </div>

      {/* Nav */}
      <nav className="flex-1 py-4 overflow-y-auto space-y-0.5 px-2">
        {navItems.map((item) => (
          <button key={item.id} onClick={() => setActive(item.id)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 text-left"
            style={{
              background: active === item.id ? "rgba(138,43,226,0.18)" : "transparent",
              color: active === item.id ? "#fff" : "rgba(255,255,255,0.45)",
              borderLeft: active === item.id ? "2px solid #8A2BE2" : "2px solid transparent",
            }}
            title={collapsed ? item.label : undefined}
          >
            <span className="text-lg flex-shrink-0 w-5 text-center leading-none">{item.icon}</span>
            {!collapsed && <span className="font-display font-500 text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="px-2 pb-4 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "12px" }}>
        {!collapsed && (
          <div className="px-3 py-2.5 rounded-xl" style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.2)" }}>
            <div className="font-mono-data text-xs font-600 text-white">$SMDX Balance</div>
            <div className="font-display font-700 text-base mt-0.5" style={{ color: "#A855F7" }}>2,841 SMDX</div>
            <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>≈ $519.91</div>
          </div>
        )}
        <button onClick={() => navigate("/")}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors hover:bg-white/5"
          style={{ color: "rgba(255,255,255,0.35)" }} title={collapsed ? "Sign Out" : undefined}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          {!collapsed && <span className="font-display font-500 text-sm">Sign Out</span>}
        </button>
        <button onClick={() => setCollapsed(!collapsed)}
          className="w-full flex items-center justify-center py-2 rounded-xl transition-colors hover:bg-white/5"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {collapsed ? <polyline points="9 18 15 12 9 6"/> : <polyline points="15 18 9 12 15 6"/>}
          </svg>
        </button>
      </div>
    </aside>
  );
}

// ── Overview Tab ──────────────────────────────────────────────────────────
function OverviewTab() {
  const [currency, setCurrency] = useState<"GBP"|"USD"|"EUR">("GBP");
  const fx: Record<string, number> = { GBP: 1, USD: 1.27, EUR: 1.17 };
  const sym: Record<string, string> = { GBP: "£", USD: "$", EUR: "€" };
  const r = fx[currency]; const s = sym[currency];

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: "Today's Revenue", value: `${s}${(38140*r).toLocaleString("en-GB",{maximumFractionDigits:0})}`, delta: "+18.4%", sub: "vs yesterday", color: "#00F0FF" },
          { label: "AI Agent Orders", value: "1,247", delta: "+34.2%", sub: "today", color: "#A855F7" },
          { label: "$SMDX Earned", value: "2,841", delta: "+12.1%", sub: "today", color: "#8A2BE2" },
          { label: "Avg. Settlement", value: "0.73s", delta: "▼ 5.2%", sub: "vs last week", color: "#4ADE80" },
        ].map((kpi) => (
          <div key={kpi.label} className="rounded-2xl p-5"
            style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs font-500" style={{ color: "rgba(255,255,255,0.4)" }}>{kpi.label}</span>
              <div className="flex items-center gap-1.5">
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full font-mono-data text-xs"
                  style={{ background: `${kpi.color}12`, color: kpi.color }}>
                  {kpi.delta}
                </div>
              </div>
            </div>
            <div className="font-display font-800 text-2xl text-white">{kpi.value}</div>
            <div className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Revenue chart */}
        <div className="lg:col-span-2 rounded-2xl p-5"
          style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="flex items-center justify-between mb-5">
            <div>
              <div className="font-display font-600 text-white text-sm">Revenue — Today</div>
              <div className="font-display font-800 text-2xl mt-0.5" style={{ color: "#00F0FF" }}>
                {s}{(38140*r).toLocaleString("en-GB",{maximumFractionDigits:0})}
              </div>
            </div>
            <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
              {(["GBP","USD","EUR"] as const).map((c) => (
                <button key={c} onClick={() => setCurrency(c)}
                  className="px-3 py-1.5 font-mono-data text-xs transition-all"
                  style={{ background: currency === c ? "rgba(0,240,255,0.15)" : "transparent", color: currency === c ? "#00F0FF" : "rgba(255,255,255,0.35)" }}>
                  {c}
                </button>
              ))}
            </div>
          </div>
          <BarChart data={hourlyData} valueKey="v" labelKey="h" color="#8A2BE2" accentColor="#00F0FF" />
        </div>

        {/* Auto-conversion */}
        <div className="rounded-2xl p-5" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-display font-600 text-white text-sm mb-5">Fiat Auto-Conversion</div>
          <div className="space-y-4 mb-5">
            {[
              { label: "GBP", pct: 60, color: "#00F0FF" },
              { label: "USD", pct: 25, color: "#A855F7" },
              { label: "EUR", pct: 15, color: "#8A2BE2" },
            ].map((c) => (
              <div key={c.label}>
                <div className="flex justify-between mb-1.5">
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{c.label}</span>
                  <span className="font-mono-data text-xs" style={{ color: c.color }}>{c.pct}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color, boxShadow: `0 0 6px ${c.color}60` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            {[{ chain: "ETH", addr: "0x7e85…949B", color: "#627EEA" }, { chain: "BNB", addr: "0xea8c…2bdb", color: "#F0B90B" }].map((w) => (
              <div key={w.chain} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: w.color }} />
                <span className="font-mono-data text-xs flex-shrink-0" style={{ color: w.color }}>{w.chain}</span>
                <span className="font-mono-data text-xs truncate" style={{ color: "rgba(255,255,255,0.4)" }}>{w.addr}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-5 py-3.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <span className="font-display font-600 text-white text-sm">Recent AI Agent Orders</span>
          <span className="flex items-center gap-1.5 font-mono-data text-xs" style={{ color: "rgba(0,240,255,0.7)" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-glow inline-block" />Live
          </span>
        </div>
        {recentOrders.slice(0, 5).map((o, i) => (
          <div key={o.id} className="px-5 py-3.5 grid grid-cols-4 gap-4 items-center text-sm"
            style={{ borderBottom: i < 4 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
            <div>
              <div className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{o.id}</div>
              <div className="font-500 text-white text-xs mt-0.5 truncate">{o.product}</div>
            </div>
            <div className="font-display font-600 text-white">£{o.amount.toFixed(2)}</div>
            <div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-data text-xs"
                style={{ background: `${statusColor[o.status]}12`, color: statusColor[o.status], border: `1px solid ${statusColor[o.status]}28` }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: statusColor[o.status] }} />
                {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
              </span>
            </div>
            <div className="font-mono-data text-xs" style={{ color: "#A855F7" }}>+{o.smdx.toFixed(2)} SMDX</div>
          </div>
        ))}
      </div>

      {/* Integrations */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "Shopify", color: "#96BF48", connected: true },
          { label: "WooCommerce", color: "#7F54B3", connected: true },
          { label: "BigCommerce", color: "#34313F", connected: false },
          { label: "Magento", color: "#EE672F", connected: false },
        ].map((p) => (
          <div key={p.label} className="flex items-center justify-between px-4 py-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
              <span className="text-xs font-500 text-white">{p.label}</span>
            </div>
            <span className="font-mono-data text-xs" style={{ color: p.connected ? "#4ADE80" : "rgba(255,255,255,0.3)" }}>
              {p.connected ? "Connected" : "Connect"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Orders Tab ─────────────────────────────────────────────────────────────
function OrdersTab() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? recentOrders : recentOrders.filter((o) => o.status === filter);
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display font-700 text-white text-xl">AI Agent Orders</h2>
        <div className="flex rounded-xl p-1" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
          {["all","settled","processing","refunded"].map((f) => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-4 py-1.5 rounded-lg font-display font-500 text-xs capitalize transition-all"
              style={{ background: filter === f ? "rgba(138,43,226,0.2)" : "transparent", color: filter === f ? "#fff" : "rgba(255,255,255,0.4)" }}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-5 py-3 grid grid-cols-6 gap-4 font-mono-data text-xs" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}>
          <span>Order ID</span><span className="col-span-2">Product</span><span>Amount</span><span>Status</span><span>SMDX</span>
        </div>
        {filtered.map((o, i) => (
          <div key={o.id} className="px-5 py-4 grid grid-cols-6 gap-4 items-center text-sm transition-colors hover:bg-white/[0.02]"
            style={{ borderBottom: i < filtered.length-1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{o.id}</span>
            <div className="col-span-2">
              <div className="font-500 text-white text-xs">{o.product}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{o.store} · {o.time}</div>
            </div>
            <span className="font-display font-600 text-white text-sm">£{o.amount.toFixed(2)}</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-data text-xs w-fit"
              style={{ background: `${statusColor[o.status]}12`, color: statusColor[o.status], border: `1px solid ${statusColor[o.status]}25` }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: statusColor[o.status] }} />
              {o.status.charAt(0).toUpperCase() + o.status.slice(1)}
            </span>
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>+{o.smdx.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Analytics Tab ─────────────────────────────────────────────────────────
function AnalyticsTab() {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-700 text-white text-xl">Analytics</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-5" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-display font-600 text-white text-sm mb-1">Weekly Revenue</div>
          <div className="font-display font-800 text-2xl mb-4" style={{ color: "#00F0FF" }}>£308,500</div>
          <BarChart data={weeklyData} valueKey="v" labelKey="d" color="#8A2BE2" accentColor="#00F0FF" />
        </div>
        <div className="rounded-2xl p-5" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="font-display font-600 text-white text-sm mb-4">Performance Metrics</div>
          <div className="space-y-4">
            {[
              { label: "Checkout Conversion Rate", value: "84.3%", trend: "+6.1%", color: "#4ADE80" },
              { label: "Avg. Order Value", value: "£286.40", trend: "+11.2%", color: "#00F0FF" },
              { label: "Cart Abandonment", value: "8.7%", trend: "▼ 61%", color: "#A855F7" },
              { label: "Agent Response Time", value: "0.73s", trend: "▼ 5.2%", color: "#4ADE80" },
              { label: "Refund Rate", value: "1.2%", trend: "▼ 0.3%", color: "#FFBD2E" },
            ].map((m) => (
              <div key={m.label} className="flex items-center justify-between">
                <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{m.label}</span>
                <div className="flex items-center gap-3">
                  <span className="font-display font-600 text-white text-sm">{m.value}</span>
                  <span className="font-mono-data text-xs px-2 py-0.5 rounded-full"
                    style={{ background: `${m.color}12`, color: m.color }}>{m.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="rounded-2xl p-5" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="font-display font-600 text-white text-sm mb-4">Top Products by Revenue</div>
        <div className="space-y-3">
          {[
            { name: "Sony WH-1000XM5", rev: 31997, pct: 100 },
            { name: "Samsung 65\" QLED", rev: 23980, pct: 75 },
            { name: "Dyson V15 Detect", rev: 18569, pct: 58 },
            { name: "Apple AirPods Pro 2", rev: 15623, pct: 49 },
            { name: "Nike Air Max 270", rev: 12088, pct: 38 },
          ].map((p, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-500 text-white">{p.name}</span>
                <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>£{p.rev.toLocaleString()}</span>
              </div>
              <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full" style={{ width: `${p.pct}%`, background: `linear-gradient(90deg, #8A2BE2, #00F0FF)` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Catalog Tab ───────────────────────────────────────────────────────────
function CatalogTab() {
  const [search, setSearch] = useState("");
  const filtered = catalogItems.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()) || c.sku.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display font-700 text-white text-xl">Product Catalog</h2>
        <div className="flex gap-3">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products…"
              className="pl-9 pr-4 py-2 rounded-xl text-sm text-white placeholder-white/30 outline-none"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", width: "220px" }} />
          </div>
          <button className="px-4 py-2 rounded-xl font-display font-600 text-sm transition-all hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", color: "#fff" }}>
            + Add Product
          </button>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-5 py-3 grid grid-cols-5 gap-4 font-mono-data text-xs"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.35)" }}>
          <span>SKU</span><span className="col-span-2">Product</span><span>Price / Stock</span><span>Status</span>
        </div>
        {filtered.map((item, i) => (
          <div key={item.sku} className="px-5 py-4 grid grid-cols-5 gap-4 items-center transition-colors hover:bg-white/[0.02]"
            style={{ borderBottom: i < filtered.length-1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{item.sku}</span>
            <div className="col-span-2">
              <div className="font-500 text-white text-sm">{item.name}</div>
              <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{item.sold} sold this month</div>
            </div>
            <div>
              <div className="font-display font-600 text-white text-sm">{item.price}</div>
              <div className="font-mono-data text-xs mt-0.5" style={{ color: item.stock === 0 ? "#FF4D4D" : item.stock < 10 ? "#FFBD2E" : "rgba(255,255,255,0.35)" }}>
                {item.stock === 0 ? "Out of stock" : `${item.stock} in stock`}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-data text-xs w-fit"
              style={{ background: `${statusColor[item.status]}12`, color: statusColor[item.status], border: `1px solid ${statusColor[item.status]}25` }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: statusColor[item.status] }} />
              {item.status.replace("_", " ")}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Payments Tab ──────────────────────────────────────────────────────────
function PaymentsTab() {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-700 text-white text-xl">Payments & Settlement</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {[
          { label: "Total Settled (30d)", value: "£308,500", color: "#4ADE80" },
          { label: "Pending Settlement", value: "£4,218", color: "#FFBD2E" },
          { label: "Fee Saved vs Cards", value: "£7,404", color: "#00F0FF" },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl p-5" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
            <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            <div className="font-display font-800 text-2xl" style={{ color: s.color }}>{s.value}</div>
          </div>
        ))}
      </div>
      {/* Payout history */}
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-5 py-3 font-display font-600 text-white text-sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          Payout History
        </div>
        {[
          { date: "30 Aug 2026", amount: "£12,480.00", currency: "GBP", txHash: "0xf3a8…b21c", status: "settled" },
          { date: "29 Aug 2026", amount: "£9,844.50",  currency: "GBP", txHash: "0xd7e1…9a04", status: "settled" },
          { date: "28 Aug 2026", amount: "£14,120.00", currency: "GBP", txHash: "0xb2f9…3d77", status: "settled" },
          { date: "27 Aug 2026", amount: "£8,391.00",  currency: "GBP", txHash: "0xa1c4…e852", status: "settled" },
        ].map((p, i) => (
          <div key={i} className="px-5 py-4 flex items-center justify-between transition-colors hover:bg-white/[0.02]"
            style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <div>
              <div className="font-display font-600 text-white text-sm">{p.amount}</div>
              <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{p.date} · {p.txHash}</div>
            </div>
            <span className="font-mono-data text-xs px-2.5 py-1 rounded-full"
              style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.25)" }}>
              Settled
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Rewards Tab ───────────────────────────────────────────────────────────
function RewardsTab() {
  return (
    <div className="space-y-6">
      <h2 className="font-display font-700 text-white text-xl">$SMDX Rewards</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #1A1535, #120F24)", border: "1px solid rgba(138,43,226,0.3)", boxShadow: "0 0 30px rgba(138,43,226,0.1)" }}>
          <div className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>Your SMDX Balance</div>
          <div className="font-display font-900 text-4xl mb-1" style={{ color: "#A855F7" }}>2,841 SMDX</div>
          <div className="font-mono-data text-sm mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>≈ $519.91 USD · $0.183/SMDX</div>
          <div className="flex gap-3">
            <a href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono-data text-xs transition-all hover:opacity-80"
              style={{ background: "rgba(98,126,234,0.12)", border: "1px solid rgba(98,126,234,0.3)", color: "#627EEA" }}>
              ETH ↗
            </a>
            <a href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg font-mono-data text-xs transition-all hover:opacity-80"
              style={{ background: "rgba(240,185,11,0.1)", border: "1px solid rgba(240,185,11,0.3)", color: "#F0B90B" }}>
              BNB ↗
            </a>
          </div>
        </div>
        <div className="rounded-2xl p-6" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-xs mb-4" style={{ color: "rgba(255,255,255,0.4)" }}>Staking Status</div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: "rgba(255,189,46,0.15)", border: "1px solid rgba(255,189,46,0.3)" }}>
              <span style={{ color: "#FFBD2E", fontSize: "18px" }}>◆</span>
            </div>
            <div>
              <div className="font-display font-600 text-white">Bronze Tier</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>7,159 SMDX to Silver</div>
            </div>
          </div>
          <div className="h-2 rounded-full mb-2" style={{ background: "rgba(255,255,255,0.07)" }}>
            <div className="h-full rounded-full" style={{ width: "28%", background: "linear-gradient(90deg, #FFBD2E, #F59E0B)" }} />
          </div>
          <div className="flex justify-between font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            <span>2,841 / 10,000 SMDX</span><span>Silver unlocks 0.3% fee</span>
          </div>
        </div>
      </div>
      <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="px-5 py-3 font-display font-600 text-white text-sm" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>Recent Rewards</div>
        {[
          { date: "30 Aug", type: "Order Cashback", order: "ORD-8821", amount: "+8.80 SMDX" },
          { date: "30 Aug", type: "Order Cashback", order: "ORD-8820", amount: "+5.40 SMDX" },
          { date: "29 Aug", type: "Referral Yield", order: "REF-0041", amount: "+42.00 SMDX" },
          { date: "29 Aug", type: "Order Cashback", order: "ORD-8818", amount: "+23.96 SMDX" },
        ].map((r, i) => (
          <div key={i} className="px-5 py-3.5 flex items-center justify-between transition-colors hover:bg-white/[0.02]"
            style={{ borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
            <div>
              <div className="text-sm font-500 text-white">{r.type}</div>
              <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{r.date} · {r.order}</div>
            </div>
            <div className="font-mono-data font-600 text-sm" style={{ color: "#A855F7" }}>{r.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Settings Tab ──────────────────────────────────────────────────────────
function SettingsTab() {
  const [storeName, setStoreName] = useState("Acme Electronics");
  const [email, setEmail] = useState("merchant@acme.com");
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2000); };

  const inputStyle = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    outline: "none",
  };
  const focusStyle = { borderColor: "rgba(138,43,226,0.5)", boxShadow: "0 0 0 3px rgba(138,43,226,0.12)" };

  return (
    <div className="space-y-6 max-w-2xl">
      <h2 className="font-display font-700 text-white text-xl">Settings</h2>
      {/* Store details */}
      <div className="rounded-2xl p-6 space-y-4" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="font-display font-600 text-white mb-2">Store Details</div>
        {[
          { label: "Store Name", value: storeName, setter: setStoreName },
          { label: "Contact Email", value: email, setter: setEmail },
        ].map((f) => (
          <div key={f.label}>
            <label className="block text-xs font-500 mb-1.5" style={{ color: "rgba(255,255,255,0.45)" }}>{f.label}</label>
            <input value={f.value} onChange={(e) => f.setter(e.target.value)}
              className="w-full px-4 py-3 rounded-xl text-sm"
              style={inputStyle}
              onFocus={(e) => Object.assign((e.target as HTMLElement).style, focusStyle)}
              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />
          </div>
        ))}
        <button onClick={save}
          className="px-6 py-2.5 rounded-xl font-display font-700 text-sm transition-all hover:opacity-90"
          style={{ background: saved ? "rgba(74,222,128,0.2)" : "linear-gradient(135deg, #8A2BE2, #6B21A8)", color: saved ? "#4ADE80" : "#fff", border: saved ? "1px solid rgba(74,222,128,0.3)" : "none" }}>
          {saved ? "✓ Saved" : "Save Changes"}
        </button>
      </div>
      {/* Notifications */}
      <div className="rounded-2xl p-6 space-y-4" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="font-display font-600 text-white mb-2">Notifications</div>
        {[
          { label: "Order settled", desc: "Notify when an agent order is confirmed and settled" },
          { label: "SMDX reward issued", desc: "Notify when cashback or referral rewards are credited" },
          { label: "Low stock alerts", desc: "Notify when product stock drops below 10 units" },
        ].map((n, i) => (
          <div key={i} className="flex items-center justify-between py-1">
            <div>
              <div className="text-sm font-500 text-white">{n.label}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{n.desc}</div>
            </div>
            <Toggle defaultOn={i < 2} />
          </div>
        ))}
      </div>
      {/* API Key */}
      <div className="rounded-2xl p-6" style={{ background: "rgba(18,15,36,0.8)", border: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="font-display font-600 text-white mb-4">API Credentials</div>
        <div className="font-mono-data text-xs px-4 py-3 rounded-xl mb-3 select-all"
          style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
          sk_live_smdx_7e8539d1e5cb91d63e46b8e188403b3f262a949b
        </div>
        <button className="text-xs font-500 transition-colors hover:text-white" style={{ color: "rgba(0,240,255,0.7)" }}>
          Regenerate API Key
        </button>
      </div>
    </div>
  );
}

function Toggle({ defaultOn }: { defaultOn: boolean }) {
  const [on, setOn] = useState(defaultOn);
  return (
    <button onClick={() => setOn(!on)}
      className="relative w-11 h-6 rounded-full transition-all duration-200 flex-shrink-0"
      style={{ background: on ? "#8A2BE2" : "rgba(255,255,255,0.1)", boxShadow: on ? "0 0 10px rgba(138,43,226,0.4)" : "none" }}>
      <div className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-all duration-200"
        style={{ transform: on ? "translateX(20px)" : "translateX(0)" }} />
    </button>
  );
}

// ── Dashboard root ────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [active, setActive] = useState("overview");
  const [collapsed, setCollapsed] = useState(false);

  const tabMap: Record<string, React.ReactElement> = {
    overview:  <OverviewTab />,
    orders:    <OrdersTab />,
    analytics: <AnalyticsTab />,
    catalog:   <CatalogTab />,
    payments:  <PaymentsTab />,
    rewards:   <RewardsTab />,
    settings:  <SettingsTab />,
  };

  const currentNav = navItems.find((n) => n.id === active);

  return (
    <div className="flex h-screen overflow-hidden" style={{ background: "#080B11", fontFamily: "'Inter', sans-serif" }}>
      <Sidebar active={active} setActive={setActive} collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="flex-shrink-0 flex items-center justify-between px-6 py-4"
          style={{ background: "rgba(8,11,17,0.8)", borderBottom: "1px solid rgba(255,255,255,0.06)", backdropFilter: "blur(12px)" }}>
          <div>
            <h1 className="font-display font-700 text-white text-lg">{currentNav?.label}</h1>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Merchant: Acme Electronics · <span style={{ color: "#4ADE80" }}>Live</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            {/* Live indicator */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(74,222,128,0.08)", border: "1px solid rgba(74,222,128,0.2)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-glow inline-block" />
              <span className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>Network Online</span>
            </div>
            {/* Wallet badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
              style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.25)" }}>
              <div className="w-5 h-5 rounded-full" style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)" }} />
              <span className="font-mono-data text-xs text-white">0x7e85…949B</span>
            </div>
          </div>
        </header>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-6">
          {tabMap[active]}
        </main>
      </div>
    </div>
  );
}
