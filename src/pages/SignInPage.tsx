import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

const wallets = [
  {
    id: "metamask",
    name: "MetaMask",
    color: "#E2761B",
    bg: "rgba(226,118,27,0.1)",
    border: "rgba(226,118,27,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <path d="M27.4 4L17.6 11.2l1.8-4.3L27.4 4z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.6 4l9.7 7.3-1.7-4.3L4.6 4zM23.8 21.4l-2.6 4 5.6 1.5 1.6-5.4-4.6-.1zM3.6 21.5l1.6 5.4 5.6-1.5-2.6-4-4.6.1z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 14.1l-1.6 2.4 5.6.3-.2-6L10.5 14.1zM21.5 14.1l-3.9-3.4-.2 6 5.6-.3-1.5-2.3zM10.8 25.4l3.4-1.6-2.9-2.3-.5 3.9zM17.8 23.8l3.4 1.6-.5-3.9-2.9 2.3z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.2 25.4l-3.4-1.6.3 2.3v.9l3.1-1.6zM10.8 25.4l3.1 1.6v-.9l.3-2.3-3.4 1.6z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 19.7l-2.8-.8 2-1 .8 1.8zM18 19.7l.8-1.8 2 1-2.8.8z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.8 25.4l.5-4-4.6.1 4.1 3.9zM20.7 21.4l.5 4 4.1-3.9-4.6-.1zM25.2 16.5l-5.6.3.5 3 .8-1.8 2 1 2.3-2.5zM11.2 19l2-1 .8 1.8.5-3-5.6-.3 2.3 2.5z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    color: "#3B99FC",
    bg: "rgba(59,153,252,0.1)",
    border: "rgba(59,153,252,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(59,153,252,0.15)" stroke="#3B99FC" strokeWidth="1.5"/>
        <path d="M10.2 13.6c3.2-3.1 8.4-3.1 11.6 0l.4.4c.2.2.2.4 0 .6l-1.3 1.3c-.1.1-.3.1-.4 0l-.5-.5c-2.2-2.1-5.8-2.1-8 0l-.6.5c-.1.1-.3.1-.4 0L9.7 14.6c-.2-.2-.2-.4 0-.6l.5-.4z" fill="#3B99FC"/>
        <path d="M14.5 17.1l1.2 1.1c.2.2.5.2.7 0l1.2-1.1c.2-.2.2-.4 0-.6l-1.2-1.1c-.2-.2-.5-.2-.7 0l-1.2 1.1c-.2.2-.2.4 0 .6z" fill="#3B99FC"/>
      </svg>
    ),
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    color: "#0052FF",
    bg: "rgba(0,82,255,0.1)",
    border: "rgba(0,82,255,0.3)",
    icon: (
      <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(0,82,255,0.15)" stroke="#0052FF" strokeWidth="1.5"/>
        <rect x="13" y="13" width="6" height="6" rx="1.5" fill="#0052FF"/>
      </svg>
    ),
  },
];

type Mode = "signin" | "signup" | "forgot";

export default function SignInPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<Mode>("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [storeName, setStoreName] = useState("");
  const [loading, setLoading] = useState(false);
  const [walletLoading, setWalletLoading] = useState<string | null>(null);
  const [walletError, setWalletError] = useState<string | null>(null);
  const [forgotSent, setForgotSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "forgot") {
      setLoading(true);
      setTimeout(() => { setLoading(false); setForgotSent(true); }, 1400);
      return;
    }
    setLoading(true);
    setTimeout(() => { setLoading(false); navigate("/dashboard"); }, 1600);
  };

  const handleWallet = async (id: string) => {
    setWalletError(null);
    setWalletLoading(id);
    if (id === "metamask") {
      const eth = (window as any).ethereum;
      if (eth) {
        try {
          await eth.request({ method: "eth_requestAccounts" });
          setWalletLoading(null);
          navigate("/dashboard");
          return;
        } catch (err: any) {
          setWalletLoading(null);
          setWalletError(err?.message?.includes("rejected") ? "Rejected in MetaMask." : "MetaMask unavailable.");
          return;
        }
      } else {
        setWalletLoading(null);
        setWalletError("MetaMask not detected. Install it or choose another wallet.");
        return;
      }
    }
    setTimeout(() => { setWalletLoading(null); navigate("/dashboard"); }, 1600);
  };

  return (
    <div className="min-h-screen flex" style={{ background: "#080B11", fontFamily: "'Inter', sans-serif" }}>
      {/* Left panel — branding */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] p-12 relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #120F24 0%, #0C0A1E 100%)", borderRight: "1px solid rgba(138,43,226,0.15)" }}>
        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(138,43,226,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.06) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        {/* Glow */}
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(138,43,226,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
        <div className="absolute top-1/3 right-0 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,240,255,0.1) 0%, transparent 70%)", filter: "blur(40px)" }} />

        {/* Logo */}
        <div className="flex items-center gap-3 relative z-10">
          <img src={somidaxLogo} alt="Somidax" className="w-10 h-10 rounded-full object-contain" style={{ background: "#fff" }} />
          <span className="font-display font-700 text-white text-xl">Somidax</span>
        </div>

        {/* Quote block */}
        <div className="relative z-10">
          <div className="text-5xl mb-6" style={{ color: "rgba(138,43,226,0.4)", fontFamily: "serif" }}>"</div>
          <p className="font-display font-500 text-white text-xl leading-relaxed mb-6">
            We went from 2.9% card fees to 0.5% overnight. Somidax agents handle everything — our revenue is up 34%.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)" }}>
              <span className="font-display font-700 text-white text-sm">V</span>
            </div>
            <div>
              <div className="font-display font-600 text-white text-sm">Verified Merchant</div>
              <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>Electronics · Somidax Network</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 relative z-10">
          {[
            { value: "0.5%", label: "Settlement fee" },
            { value: "< 1s", label: "Checkout time" },
            { value: "8%", label: "Max cashback" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl p-3 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="font-display font-800 text-lg" style={{ color: "#00F0FF" }}>{s.value}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          {/* Mobile logo */}
          <div className="flex items-center gap-3 mb-10 lg:hidden">
            <img src={somidaxLogo} alt="Somidax" className="w-9 h-9 rounded-full object-contain" style={{ background: "#fff" }} />
            <span className="font-display font-700 text-white text-xl">Somidax</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display font-800 text-white text-3xl mb-2">
              {mode === "signin" ? "Welcome back" : mode === "signup" ? "Create your account" : "Reset password"}
            </h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {mode === "signin" ? "Sign in to your Somidax merchant dashboard." :
               mode === "signup" ? "Start accepting agentic payments in minutes." :
               "Enter your email and we'll send a reset link."}
            </p>
          </div>

          {/* Wallet connect */}
          {mode !== "forgot" && (
            <>
              <div className="space-y-2.5 mb-6">
                {walletError && (
                  <div className="px-4 py-3 rounded-xl text-xs" style={{ background: "rgba(255,77,77,0.08)", border: "1px solid rgba(255,77,77,0.25)", color: "rgba(255,100,100,0.9)" }}>
                    {walletError}
                  </div>
                )}
                {wallets.map((w) => (
                  <button key={w.id} onClick={() => handleWallet(w.id)} disabled={!!walletLoading}
                    className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 hover:scale-[1.01]"
                    style={{ background: walletLoading === w.id ? w.bg : "rgba(255,255,255,0.04)", border: `1px solid ${walletLoading === w.id ? w.border : "rgba(255,255,255,0.08)"}`, cursor: walletLoading ? "wait" : "pointer" }}
                    onMouseEnter={(e) => { if (!walletLoading) { (e.currentTarget as HTMLElement).style.background = w.bg; (e.currentTarget as HTMLElement).style.borderColor = w.border; }}}
                    onMouseLeave={(e) => { if (walletLoading !== w.id) { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; }}}>
                    <div className="flex-shrink-0">{w.icon}</div>
                    <span className="font-display font-600 text-white text-sm flex-1 text-left">
                      {mode === "signin" ? "Sign in with" : "Continue with"} {w.name}
                    </span>
                    {walletLoading === w.id && (
                      <div className="w-4 h-4 rounded-full border-2 border-t-transparent animate-spin flex-shrink-0"
                        style={{ borderColor: `${w.color} transparent transparent transparent` }} />
                    )}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
                <span className="text-xs font-500" style={{ color: "rgba(255,255,255,0.3)" }}>or continue with email</span>
                <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
              </div>
            </>
          )}

          {/* Email form */}
          {forgotSent ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "rgba(0,240,255,0.12)", border: "1px solid rgba(0,240,255,0.3)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00F0FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="font-display font-700 text-white text-lg mb-2">Check your inbox</div>
              <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
                We sent a reset link to <span className="text-white">{email}</span>
              </p>
              <button onClick={() => { setMode("signin"); setForgotSent(false); }}
                className="text-sm font-500 transition-colors hover:text-white" style={{ color: "rgba(0,240,255,0.8)" }}>
                ← Back to sign in
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-500 mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Store Name</label>
                  <input value={storeName} onChange={(e) => setStoreName(e.target.value)} placeholder="Acme Electronics"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(138,43,226,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(138,43,226,0.12)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />
                </div>
              )}
              <div>
                <label className="block text-xs font-500 mb-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>Email address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@store.com"
                  required
                  className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(138,43,226,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(138,43,226,0.12)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />
              </div>
              {mode !== "forgot" && (
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-500" style={{ color: "rgba(255,255,255,0.5)" }}>Password</label>
                    {mode === "signin" && (
                      <button type="button" onClick={() => setMode("forgot")}
                        className="text-xs transition-colors hover:text-white" style={{ color: "rgba(0,240,255,0.7)" }}>
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <input type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••" required minLength={8}
                      className="w-full px-4 py-3 pr-12 rounded-xl text-sm text-white placeholder-white/25 outline-none transition-all"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(138,43,226,0.5)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(138,43,226,0.12)"; }}
                      onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; (e.target as HTMLElement).style.boxShadow = "none"; }} />
                    <button type="button" onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transition-colors hover:text-white"
                      style={{ color: "rgba(255,255,255,0.35)" }}>
                      {showPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      )}
                    </button>
                  </div>
                </div>
              )}

              {mode === "signup" && (
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                  By creating an account you agree to our{" "}
                  <Link to="/legal" className="underline hover:text-white/60" style={{ color: "rgba(138,43,226,0.8)" }}>Terms</Link>
                  {" "}and{" "}
                  <Link to="/legal" className="underline hover:text-white/60" style={{ color: "rgba(138,43,226,0.8)" }}>Privacy Policy</Link>.
                </p>
              )}

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl font-display font-700 text-base text-white transition-all duration-200 hover:opacity-90 hover:scale-[1.01] flex items-center justify-center gap-2 mt-2"
                style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", boxShadow: "0 0 24px rgba(138,43,226,0.4)" }}>
                {loading ? (
                  <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin border-white" />
                ) : mode === "signin" ? "Sign In to Dashboard" : mode === "signup" ? "Create Account" : "Send Reset Link"}
              </button>
            </form>
          )}

          {/* Mode switch */}
          {!forgotSent && (
            <p className="text-center text-sm mt-6" style={{ color: "rgba(255,255,255,0.4)" }}>
              {mode === "signin" ? (
                <>Don't have an account?{" "}
                  <button onClick={() => setMode("signup")} className="font-600 transition-colors hover:text-white" style={{ color: "#00F0FF" }}>
                    Create one free
                  </button>
                </>
              ) : mode === "signup" ? (
                <>Already have an account?{" "}
                  <button onClick={() => setMode("signin")} className="font-600 transition-colors hover:text-white" style={{ color: "#00F0FF" }}>
                    Sign in
                  </button>
                </>
              ) : (
                <button onClick={() => setMode("signin")} className="font-600 transition-colors hover:text-white" style={{ color: "#00F0FF" }}>
                  ← Back to sign in
                </button>
              )}
            </p>
          )}

          <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.2)" }}>
            Non-custodial · Your keys, your funds · Always
          </p>
        </div>
      </div>
    </div>
  );
}
