// v2
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import somidaxLogo from "@/imports/somidax_logo.jpeg";

// ── Image URLs ─────────────────────────────────────────────────────────────
const IMG = {
  heroBg:      "https://images.unsplash.com/photo-1758876378034-3807ca7c4449?w=1800&h=1000&fit=crop&auto=format",   // neon metallic tubes
  aiBrain:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop&auto=format",     // AI circuit brain
  aiText:      "https://images.unsplash.com/photo-1709120395858-92f1c7c577f5?w=800&h=500&fit=crop&auto=format",     // AI letters circuit board
  cityNight:   "https://images.unsplash.com/photo-1758919917007-100ed47d1e4f?w=1400&h=700&fit=crop&auto=format",   // vibrant cityscape night
  cryptoBoard: "https://images.unsplash.com/photo-1643000296927-f4f1c8722b7d?w=800&h=500&fit=crop&auto=format",    // circuit board blue light
  neonLines:   "https://images.unsplash.com/photo-1764258560163-198782335017?w=1200&h=600&fit=crop&auto=format",   // abstract neon lines
  teamWork:    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop&auto=format",    // team with laptops
  glowObj:     "https://images.unsplash.com/photo-1729554608003-5ec8be42da1d?w=800&h=600&fit=crop&auto=format",    // glowing object dark
};

// ── Icons ──────────────────────────────────────────────────────────────────
function IconBrain() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
    </svg>
  );
}
function IconZap() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  );
}
function IconCoin() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v12M9 9h4.5a2.5 2.5 0 0 1 0 5H9M9 15h6"/>
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
}
function IconX() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  );
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  );
}
function IconStar() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );
}
function IconQuote() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.15 }}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );
}
function IconDiscord() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.127 18.113a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );
}
function IconTelegram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
    </svg>
  );
}
function IconGithub() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  );
}
function IconLinkedin() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

// ── Wallet Connect Modal ──────────────────────────────────────────────────
const wallets = [
  {
    id: "metamask",
    name: "MetaMask",
    desc: "Connect using browser extension",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M27.4 4L17.6 11.2l1.8-4.3L27.4 4z" fill="#E2761B" stroke="#E2761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.6 4l9.7 7.3-1.7-4.3L4.6 4zM23.8 21.4l-2.6 4 5.6 1.5 1.6-5.4-4.6-.1zM3.6 21.5l1.6 5.4 5.6-1.5-2.6-4-4.6.1z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 14.1l-1.6 2.4 5.6.3-.2-6L10.5 14.1zM21.5 14.1l-3.9-3.4-.2 6 5.6-.3-1.5-2.3zM10.8 25.4l3.4-1.6-2.9-2.3-.5 3.9zM17.8 23.8l3.4 1.6-.5-3.9-2.9 2.3z" fill="#E4761B" stroke="#E4761B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.2 25.4l-3.4-1.6.3 2.3v.9l3.1-1.6zM10.8 25.4l3.1 1.6v-.9l.3-2.3-3.4 1.6z" fill="#D7C1B3" stroke="#D7C1B3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 19.7l-2.8-.8 2-1 .8 1.8zM18 19.7l.8-1.8 2 1-2.8.8z" fill="#233447" stroke="#233447" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.8 25.4l.5-4-4.6.1 4.1 3.9zM20.7 21.4l.5 4 4.1-3.9-4.6-.1zM25.2 16.5l-5.6.3.5 3 .8-1.8 2 1 2.3-2.5zM11.2 19l2-1 .8 1.8.5-3-5.6-.3 2.3 2.5z" fill="#CD6116" stroke="#CD6116" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.9 16.5l2.3 4.5-.1-2.5-2.2-2zM20.9 18.5l-.1 2.5 2.3-4.5-2.2 2zM14.5 17.1l-.5 3 .6 3.2.1-4.2-.2-2zM17.5 17.1l-.2 2 .1 4.2.6-3.2-.5-3z" fill="#E4751F" stroke="#E4751F" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 19.7l-.6 3.2.4.3 2.9-2.3.1-2.5-2.8 1.3zM11.2 19l.1 2.5 2.9 2.3.4-.3-.6-3.2-2.8-1.3z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18.1 27l.1-.9-.3-.2h-3.8l-.3.2.1.9-3.1-1.6 1.1.9 2.2 1.5h3.8l2.2-1.5 1.1-.9-3.1 1.6z" fill="#C0AD9E" stroke="#C0AD9E" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17.8 23.8l-.4-.3h-2.8l-.4.3-.3 2.3.3-.2h3.8l.3.2-.5-2.3z" fill="#161616" stroke="#161616" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 11.6l.8-4L27.4 4l-9.6 7.1 3.7 3.1 5.2 1.5 1.1-1.3-.5-.4.8-.7-.6-.5.8-.6-.5-.6zM3.2 7.6l.8 4-.5.6.8.6-.6.5.8.7-.5.4 1.1 1.3 5.2-1.5 3.7-3.1L4.6 4l-1.4 3.6z" fill="#763D16" stroke="#763D16" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M26.7 15.7l-5.2-1.5 1.5 2.3-2.3 4.5 3.1-.1h4.6l-1.7-5.2zM10.5 14.2l-5.2 1.5-1.7 5.2h4.6l3-.1-2.3-4.5 1.6-2.1zM17.5 17.1l.3-5.8 1.5-4.1h-6.5l1.5 4.1.3 5.8.1 2 .1 4.2h2.6l.1-4.2.1-2z" fill="#F6851B" stroke="#F6851B" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#E2761B",
    bg: "rgba(226,118,27,0.1)",
    border: "rgba(226,118,27,0.3)",
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    desc: "Scan with any mobile wallet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(59,153,252,0.15)" stroke="#3B99FC" strokeWidth="1.5"/>
        <path d="M10.2 13.6c3.2-3.1 8.4-3.1 11.6 0l.4.4c.2.2.2.4 0 .6l-1.3 1.3c-.1.1-.3.1-.4 0l-.5-.5c-2.2-2.1-5.8-2.1-8 0l-.6.5c-.1.1-.3.1-.4 0L9.7 14.6c-.2-.2-.2-.4 0-.6l.5-.4zm14.3 2.7l1.2 1.1c.2.2.2.4 0 .6l-5.3 5.2c-.2.2-.5.2-.7 0l-3.8-3.6c-.1-.1-.2-.1-.3 0l-3.8 3.6c-.2.2-.5.2-.7 0L6 18c-.2-.2-.2-.4 0-.6l1.2-1.1c.2-.2.5-.2.7 0l3.8 3.6c.1.1.2.1.3 0l3.8-3.6c.2-.2.5-.2.7 0l3.8 3.6c.1.1.2.1.3 0l3.8-3.6c.2-.1.5-.2.6 0l.3-.1z" fill="#3B99FC"/>
      </svg>
    ),
    color: "#3B99FC",
    bg: "rgba(59,153,252,0.1)",
    border: "rgba(59,153,252,0.3)",
  },
  {
    id: "coinbase",
    name: "Coinbase Wallet",
    desc: "Connect with Coinbase Wallet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(0,82,255,0.15)" stroke="#0052FF" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="6.5" fill="none" stroke="#0052FF" strokeWidth="1.5"/>
        <rect x="13" y="13" width="6" height="6" rx="1.5" fill="#0052FF"/>
      </svg>
    ),
    color: "#0052FF",
    bg: "rgba(0,82,255,0.1)",
    border: "rgba(0,82,255,0.3)",
  },
  {
    id: "trustwallet",
    name: "Trust Wallet",
    desc: "Connect with Trust Wallet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(51,117,187,0.15)" stroke="#3375BB" strokeWidth="1.5"/>
        <path d="M16 7l7 3.5v5.5c0 4-3 7.5-7 8.5-4-1-7-4.5-7-8.5v-5.5L16 7z" fill="none" stroke="#3375BB" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M13 16l2 2 4-4" stroke="#3375BB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#3375BB",
    bg: "rgba(51,117,187,0.1)",
    border: "rgba(51,117,187,0.3)",
  },
  {
    id: "phantom",
    name: "Phantom",
    desc: "Solana & multi-chain wallet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(171,98,255,0.15)" stroke="#AB62FF" strokeWidth="1.5"/>
        <path d="M9 16.5C9 12.9 11.9 10 15.5 10H20c.6 0 1 .4 1 1s-.4 1-1 1h-4.5C13 12 11 14 11 16.5S13 21 15.5 21H16c.6 0 1 .4 1 1s-.4 1-1 1h-.5C12 23 9 20.1 9 16.5z" fill="#AB62FF"/>
        <path d="M17 14h3.5c2 0 3.5 1.5 3.5 3.5S22.5 21 20.5 21H17v-7z" fill="#AB62FF" opacity="0.7"/>
        <circle cx="18.5" cy="17.5" r="1" fill="white"/>
      </svg>
    ),
    color: "#AB62FF",
    bg: "rgba(171,98,255,0.1)",
    border: "rgba(171,98,255,0.3)",
  },
  {
    id: "okx",
    name: "OKX Wallet",
    desc: "Connect with OKX Web3 Wallet",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5"/>
        <rect x="10" y="10" width="5" height="5" rx="1" fill="white"/>
        <rect x="17" y="10" width="5" height="5" rx="1" fill="white"/>
        <rect x="10" y="17" width="5" height="5" rx="1" fill="white"/>
        <rect x="17" y="17" width="5" height="5" rx="1" fill="white"/>
      </svg>
    ),
    color: "rgba(255,255,255,0.7)",
    bg: "rgba(255,255,255,0.06)",
    border: "rgba(255,255,255,0.2)",
  },
];

function WalletModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const [connecting, setConnecting] = useState<string | null>(null);
  const [connected, setConnected] = useState<string | null>(null);
  const [connectedAddress, setConnectedAddress] = useState<string>("0x7e85…949B");
  const [error, setError] = useState<string | null>(null);

  const handleConnect = async (id: string) => {
    setConnecting(id);
    setError(null);

    if (id === "metamask") {
      const eth = (window as any).ethereum;
      if (eth) {
        try {
          const accounts: string[] = await eth.request({ method: "eth_requestAccounts" });
          if (accounts.length > 0) {
            const addr = accounts[0];
            setConnectedAddress(`${addr.slice(0, 6)}…${addr.slice(-4)}`);
            setConnecting(null);
            setConnected(id);
            setTimeout(() => navigate("/dashboard"), 1200);
            return;
          }
        } catch (err: any) {
          setConnecting(null);
          setError(err?.message?.includes("rejected") ? "Connection rejected in MetaMask." : "MetaMask not available — try another wallet.");
          return;
        }
      } else {
        setConnecting(null);
        setError("MetaMask extension not detected. Install it at metamask.io or choose another wallet.");
        return;
      }
    }

    if (id === "walletconnect") {
      // WalletConnect requires a project-id SDK integration; show demo flow
      setTimeout(() => { setConnecting(null); setConnected(id); }, 1800);
      return;
    }

    // All other wallets: demo simulation
    setTimeout(() => { setConnecting(null); setConnected(id); }, 1800);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(5,7,9,0.85)", backdropFilter: "blur(12px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="w-full max-w-md rounded-3xl overflow-hidden relative"
        style={{
          background: "linear-gradient(145deg, #120F24 0%, #0C0A1E 100%)",
          border: "1px solid rgba(138,43,226,0.35)",
          boxShadow: "0 0 60px rgba(138,43,226,0.25), 0 40px 80px rgba(0,0,0,0.7)",
        }}
      >
        {/* Top glow */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #8A2BE2, #00F0FF, transparent)" }} />

        {/* Header */}
        <div className="px-6 pt-6 pb-4 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-3">
            <img src={somidaxLogo} alt="Somidax" className="w-8 h-8 rounded-full object-contain" style={{ background: "#fff" }} />
            <div>
              <div className="font-display font-700 text-white text-base">Connect Storefront</div>
              <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(0,240,255,0.7)" }}>
                Select your Web3 wallet
              </div>
            </div>
          </div>
          <button onClick={onClose}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors hover:bg-white/10"
            style={{ color: "rgba(255,255,255,0.4)" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {connected ? (
          /* Success state */
          <div className="p-8 text-center">
            <div className="w-20 h-20 rounded-full mx-auto mb-5 flex items-center justify-center"
              style={{ background: "rgba(74,222,128,0.15)", border: "2px solid rgba(74,222,128,0.5)", boxShadow: "0 0 30px rgba(74,222,128,0.25)" }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4ADE80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <div className="font-display font-700 text-white text-xl mb-2">Wallet Connected!</div>
            <div className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Connected via {wallets.find(w => w.id === connected)?.name}
            </div>
            <div className="font-mono-data text-xs px-3 py-1.5 rounded-lg inline-block mt-2 mb-6"
              style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", border: "1px solid rgba(74,222,128,0.25)" }}>
              {connectedAddress}
            </div>
            <button onClick={() => navigate("/dashboard")}
              className="w-full py-3.5 rounded-xl font-display font-700 text-base transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", color: "#fff", boxShadow: "0 0 20px rgba(138,43,226,0.4)" }}>
              Go to Dashboard →
            </button>
          </div>
        ) : (
          /* Wallet list */
          <div className="p-4">
            {error && (
              <div className="mb-3 px-4 py-3 rounded-xl flex items-start gap-2.5"
                style={{ background: "rgba(255,77,77,0.08)", border: "1px solid rgba(255,77,77,0.25)" }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#FF4D4D" strokeWidth="2" strokeLinecap="round" className="flex-shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,100,100,0.9)" }}>{error}</p>
              </div>
            )}
            <div className="space-y-2">
              {wallets.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handleConnect(w.id)}
                  disabled={!!connecting}
                  className="w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 group text-left"
                  style={{
                    background: connecting === w.id ? w.bg : "rgba(255,255,255,0.03)",
                    border: `1px solid ${connecting === w.id ? w.border : "rgba(255,255,255,0.07)"}`,
                    cursor: connecting ? "wait" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!connecting) {
                      (e.currentTarget as HTMLElement).style.background = w.bg;
                      (e.currentTarget as HTMLElement).style.borderColor = w.border;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (connecting !== w.id) {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }
                  }}
                >
                  <div className="flex-shrink-0">{w.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-display font-600 text-white text-sm">{w.name}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>{w.desc}</div>
                  </div>
                  <div className="flex-shrink-0">
                    {connecting === w.id ? (
                      <div className="w-5 h-5 rounded-full border-2 border-t-transparent animate-spin"
                        style={{ borderColor: `${w.color} transparent transparent transparent` }} />
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-4 px-2 pb-2 text-center">
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                By connecting, you agree to our{" "}
                <Link to="/legal" className="underline hover:text-white/60 transition-colors" style={{ color: "rgba(138,43,226,0.7)" }}>Terms</Link>
                {" "}and{" "}
                <Link to="/legal" className="underline hover:text-white/60 transition-colors" style={{ color: "rgba(138,43,226,0.7)" }}>Privacy Policy</Link>.
                Your keys remain non-custodial at all times.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────
function Nav({ onConnect }: { onConnect: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(8,11,17,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(138,43,226,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={somidaxLogo}
            alt="Somidax logo"
            className="w-10 h-10 rounded-full object-contain"
            style={{ background: "#fff", boxShadow: "0 0 16px rgba(138,43,226,0.45)" }}
          />
          <span className="font-display font-700 text-white text-xl tracking-tight">Somidax</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {["Features", "Demo", "Dashboard", "Token", "About"].map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="text-sm font-500 text-white/60 hover:text-white transition-colors duration-200">
              {l}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link to="/signin" className="hidden md:block text-sm font-500 px-4 py-2 rounded-lg transition-colors" style={{ color: "#00F0FF" }}>
            Sign In
          </Link>
          <button
            onClick={onConnect}
            className="text-sm font-600 px-5 py-2 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", boxShadow: "0 0 16px rgba(138,43,226,0.4)" }}
          >
            Connect Storefront
          </button>
        </div>
      </div>
    </nav>
  );
}

// ── Agent Card ────────────────────────────────────────────────────────────
function AgentCard() {
  const [step, setStep] = useState(0);
  const steps = [
    { label: "Agent querying 12 stores…", status: "running" },
    { label: "Price match found: £219.99", status: "success" },
    { label: "Applying $SMDX cashback (4%)", status: "running" },
    { label: "Checkout executed in 0.8s", status: "done" },
  ];
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s + 1) % steps.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="float-anim gradient-border rounded-2xl p-5 w-full max-w-sm"
      style={{ background: "rgba(18,15,36,0.95)", backdropFilter: "blur(20px)" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-display font-700"
            style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", color: "#fff" }}>
            AI
          </div>
          <span className="font-display font-600 text-white text-sm">Somidax Agent</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 pulse-glow inline-block" />
          <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>LIVE</span>
        </div>
      </div>
      <div className="rounded-xl p-3 mb-4 text-sm font-500 text-white/80"
        style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.25)" }}>
        "Find me the best price for Sony WH-1000XM5 headphones and checkout"
      </div>
      <div className="space-y-2 mb-4">
        {steps.map((s, i) => (
          <div key={i} className={`flex items-center gap-3 text-xs transition-all duration-500 ${i <= step ? "opacity-100" : "opacity-20"}`}>
            <div className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: i < step ? "rgba(74,222,128,0.2)" : i === step ? "rgba(0,240,255,0.2)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${i < step ? "rgba(74,222,128,0.5)" : i === step ? "rgba(0,240,255,0.5)" : "rgba(255,255,255,0.1)"}`,
              }}>
              {i < step ? (
                <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                  <polyline points="2 6 5 9 10 3" stroke="#4ADE80" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              ) : i === step ? (
                <div className="w-1.5 h-1.5 rounded-full pulse-glow" style={{ background: "#00F0FF" }} />
              ) : null}
            </div>
            <span style={{ color: i < step ? "#4ADE80" : i === step ? "#00F0FF" : "rgba(255,255,255,0.4)" }}>{s.label}</span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Amazon", "eBay", "Currys", "John Lewis", "Argos", "AO"].map((store) => (
          <div key={store} className="rounded-lg p-2 text-center font-mono-data text-xs"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }}>
            {store}
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-xl p-3 flex items-center justify-between"
        style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)" }}>
        <span className="text-xs font-500" style={{ color: "rgba(255,255,255,0.6)" }}>Best price saved</span>
        <span className="font-display font-700 text-sm glow-text-cyan" style={{ color: "#00F0FF" }}>£47.00</span>
      </div>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────
function HeroSection({ onConnect }: { onConnect: () => void }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        <img src={IMG.heroBg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(8,11,17,0.7) 0%, rgba(8,11,17,0.4) 40%, rgba(8,11,17,0.85) 80%, #080B11 100%)"
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(138,43,226,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.07) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(138,43,226,0.2) 0%, transparent 70%)", filter: "blur(60px)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,240,255,0.12) 0%, transparent 70%)", filter: "blur(60px)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
        {/* Copy */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
            style={{ background: "rgba(138,43,226,0.15)", border: "1px solid rgba(138,43,226,0.35)" }}>
            <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: "#8A2BE2" }} />
            <span className="font-mono-data text-xs font-500" style={{ color: "#A855F7" }}>
              AI-Native Commerce Network · Now Live
            </span>
          </div>

          <h1 className="font-display font-900 text-white leading-none mb-4" style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)" }}>
            Turn Your Store Into an{" "}
            <span className="glow-text-purple" style={{
              background: "linear-gradient(135deg, #8A2BE2 0%, #00F0FF 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              AI-Native Storefront !
            </span>
          </h1>

          <p className="text-sm font-500 mb-3 tracking-wide" style={{ color: "rgba(168,85,247,0.85)" }}>
            A decentralized social interactive e-commerce marketplace protocol and infrastructure AI service agent.
          </p>

          <p className="text-lg font-400 leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="font-700 text-white">SOMIDAX</span> connects your store to an autonomous shopping network where AI agents discover, compare, and purchase on behalf of millions of buyers — with sub-second stablecoin settlement and on-chain loyalty rewards.
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <button
              onClick={onConnect}
              className="font-display font-700 text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", boxShadow: "0 0 30px rgba(138,43,226,0.5), 0 4px 20px rgba(0,0,0,0.4)", color: "#fff" }}>
              Connect Storefront <IconArrow />
            </button>
            <button
              onClick={onConnect}
              className="font-display font-600 text-base px-8 py-4 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-2 gradient-border"
              style={{ background: "rgba(0,240,255,0.07)", color: "#00F0FF" }}>
              Claim $SMDX Rewards
            </button>
          </div>

          <div className="flex flex-wrap gap-8">
            {[
              { value: "Active", label: "Global Connected Stores" },
              { value: "Live", label: "GMV Processed" },
              { value: "Lower", label: "Stable Settlement Fee" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-800 text-2xl" style={{ color: "#00F0FF" }}>{s.value}</div>
                <div className="text-xs font-500 mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent card */}
        <div className="flex justify-center lg:justify-end">
          <AgentCard />
        </div>
      </div>

      {/* Ticker */}
      <div className="w-full overflow-hidden py-3 relative z-10"
        style={{ borderTop: "1px solid rgba(138,43,226,0.15)", borderBottom: "1px solid rgba(138,43,226,0.15)", background: "rgba(18,15,36,0.6)", backdropFilter: "blur(10px)" }}>
        <div className="ticker-track flex gap-12 whitespace-nowrap" style={{ width: "200%" }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12">
              {["SMDX +4.2%", "24h Volume: $48.2M", "Stores Online: 18,432", "Agents Active: 2.1M", "Settlement: 0.8s avg", "Cashback Pool: $1.2M", "Shopify ✓", "WooCommerce ✓", "Vobit Powered ✓"].map((item, j) => (
                <span key={`${i}-${j}`} className="font-mono-data text-xs" style={{ color: "rgba(0,240,255,0.6)" }}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Social Proof Strip ────────────────────────────────────────────────────
function SocialProofStrip() {
  const logos = ["Shopify", "WooCommerce", "BigCommerce", "Magento", "Stripe", "Vobit", "Chainlink", "AWS"];
  return (
    <section className="py-14 relative" style={{ background: "#080B11" }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-500 mb-8 tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)" }}>
          Trusted by Merchants · Integration with our SDK
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {logos.map((name) => (
            <div key={name}
              className="px-6 py-3 rounded-xl font-display font-600 text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Features ──────────────────────────────────────────────────────────────
const features = [
  {
    icon: <IconBrain />,
    title: "Somidax AI Engine",
    color: "#8A2BE2",
    glow: "rgba(138,43,226,0.3)",
    tag: "Intelligence Layer",
    image: IMG.aiBrain,
    imgAlt: "AI neural network circuit board representing the Somidax AI engine",
    desc: "Natural language catalog matching and real-time inventory sync across every connected store. Buyers describe what they want — agents handle discovery, comparison, and purchase intent routing automatically.",
    bullets: ["NLP-powered product intent matching", "Cross-store inventory availability", "Dynamic repricing signals", "Returns & warranty orchestration"],
    stat: { value: "< 120ms", label: "Avg. match latency" },
  },
  {
    icon: <IconZap />,
    title: "Somidax Pay",
    color: "#00F0FF",
    glow: "rgba(0,240,255,0.3)",
    tag: "Settlement Layer",
    image: IMG.cryptoBoard,
    imgAlt: "Digital circuit board with blue light representing blockchain payment infrastructure",
    desc: "Gasless, sub-second stablecoin settlement powered by Vobit. Merchants auto-convert to GBP, USD, or EUR with zero FX slippage and instant payout — no crypto knowledge required.",
    bullets: ["0.5% flat merchant fee", "Auto fiat conversion (GBP/USD/EUR)", "Vobit gas abstraction", "ISO 27001 compliant custody"],
    stat: { value: "0.5%", label: "Total settlement fee" },
  },
  {
    icon: <IconCoin />,
    title: "$SMDX Token Loyalty",
    color: "#A855F7",
    glow: "rgba(168,85,247,0.3)",
    tag: "Reward Layer",
    image: IMG.glowObj,
    imgAlt: "Glowing digital object on dark background representing SMDX token rewards",
    desc: "On-chain cashback rewards for every qualifying purchase, plus merchant staking discounts that unlock tiered fee reductions. All non-custodial — your wallet, your keys.",
    bullets: ["Up to 8% buyer cashback", "Merchant staking → 0.3% fee tier", "Governance voting rights", "Referral yield sharing"],
    stat: { value: "8%", label: "Max cashback rate" },
  },
];

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="card-hover rounded-2xl overflow-hidden relative"
      style={{
        background: "linear-gradient(145deg, #120F24 0%, #0E0C1E 100%)",
        border: `1px solid ${hovered ? feature.color + "50" : "rgba(255,255,255,0.06)"}`,
        boxShadow: hovered ? `0 0 40px ${feature.glow}` : "none",
        transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image banner */}
      <div className="relative h-44 overflow-hidden">
        <img src={feature.image} alt={feature.imgAlt} className="w-full h-full object-cover"
          style={{ opacity: hovered ? 0.55 : 0.35, transition: "opacity 0.3s" }} />
        <div className="absolute inset-0" style={{
          background: `linear-gradient(180deg, transparent 20%, ${feature.color}18 70%, #120F24 100%)`
        }} />
        {/* Top glow line */}
        <div className="absolute top-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${feature.color}80, transparent)` }} />
        {/* Icon floating on image */}
        <div className="absolute bottom-4 left-6 w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
            border: `1px solid ${feature.color}50`,
            backdropFilter: "blur(8px)",
            color: feature.color,
          }}>
          {feature.icon}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 mb-3"
          style={{ background: `${feature.color}12`, border: `1px solid ${feature.color}25` }}>
          <span className="font-mono-data text-xs" style={{ color: feature.color }}>{feature.tag}</span>
        </div>
        <h3 className="font-display font-700 text-white text-xl mb-3">{feature.title}</h3>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>{feature.desc}</p>
        <ul className="space-y-2 mb-5">
          {feature.bullets.map((b) => (
            <li key={b} className="flex items-center gap-2.5">
              <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: `${feature.color}20`, color: feature.color }}>
                <IconCheck />
              </span>
              <span className="text-xs font-500" style={{ color: "rgba(255,255,255,0.65)" }}>{b}</span>
            </li>
          ))}
        </ul>
        <div className="rounded-xl p-3 flex items-center justify-between"
          style={{ background: `${feature.color}0D`, border: `1px solid ${feature.color}20` }}>
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{feature.stat.label}</span>
          <span className="font-display font-700 text-lg" style={{ color: feature.color }}>{feature.stat.value}</span>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className="py-28 relative" style={{ background: "#080B11" }} id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)" }}>
            <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Three-Layer Architecture</span>
          </div>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Built for agentic commerce
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
            Intelligence, settlement, and loyalty woven into a single protocol — no middleware, no lock-in.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => <FeatureCard key={i} feature={f} />)}
        </div>
      </div>
    </section>
  );
}

// ── Visual Divider ────────────────────────────────────────────────────────
function VisualDivider() {
  return (
    <div className="relative h-64 overflow-hidden">
      <img src={IMG.neonLines} alt="Abstract neon light lines" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, #080B11 0%, transparent 40%, transparent 60%, #080B11 100%)",
      }} />
      {/* Centered CTA card over divider */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-6">
          <p className="font-display font-700 text-white text-2xl mb-4" style={{ textShadow: "0 0 30px rgba(138,43,226,0.8)" }}>
            Global AI Agents. One Network.
          </p>
          <button
            className="font-display font-700 text-base px-8 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", boxShadow: "0 0 30px rgba(138,43,226,0.6)", color: "#fff" }}>
            Start for Free <IconArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Demo Comparison ───────────────────────────────────────────────────────
function DemoSection() {
  const [activeTab, setActiveTab] = useState<"traditional" | "somidax">("traditional");

  const traditional = {
    label: "Traditional Checkout",
    fee: "2.9% + £0.30",
    time: "4–6 minutes",
    steps: [
      { label: "Enter card details (16-digit PAN)", done: false },
      { label: "Billing address form (8 fields)", done: false },
      { label: "3DS authentication redirect", done: false },
      { label: "OTP verification via SMS", done: false },
      { label: "Order confirmation + wait", done: false },
    ],
    color: "#FF4D4D",
    bg: "rgba(255,77,77,0.06)",
    border: "rgba(255,77,77,0.2)",
  };

  const somidax = {
    label: "Somidax Agentic Checkout",
    fee: "0.5% flat",
    time: "< 1 second",
    steps: [
      { label: '"Buy me the Sony XM5 headphones"', done: true },
      { label: "Agent finds best price across 12 stores", done: true },
      { label: "Stablecoin payment authorized via Vobit", done: true },
      { label: "$SMDX cashback applied automatically", done: true },
      { label: "Order confirmed — merchant paid instantly", done: true },
    ],
    color: "#00F0FF",
    bg: "rgba(0,240,255,0.06)",
    border: "rgba(0,240,255,0.2)",
  };

  return (
    <section className="py-28 relative" id="demo"
      style={{ background: "linear-gradient(180deg, #080B11 0%, #0A0D18 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(138,43,226,0.05) 0%, transparent 60%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.3)" }}>
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Interactive Demo</span>
          </div>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Checkout reimagined
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            See the difference between legacy payment flows and agentic execution.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="flex rounded-xl p-1" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
            {(["traditional", "somidax"] as const).map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className="px-6 py-2.5 rounded-lg font-display font-600 text-sm transition-all duration-200"
                style={{
                  background: activeTab === tab ? (tab === "somidax" ? "linear-gradient(135deg, #8A2BE2, #6B21A8)" : "rgba(255,255,255,0.08)") : "transparent",
                  color: activeTab === tab ? "#fff" : "rgba(255,255,255,0.4)",
                  boxShadow: activeTab === tab && tab === "somidax" ? "0 0 16px rgba(138,43,226,0.4)" : "none",
                }}>
                {tab === "traditional" ? "Traditional Card" : "Somidax Agent"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[traditional, somidax].map((panel) => {
            const isActive = activeTab === (panel === traditional ? "traditional" : "somidax");
            return (
              <div key={panel.label}
                className="rounded-2xl p-7 relative overflow-hidden transition-all duration-300"
                style={{
                  background: isActive ? panel.bg : "rgba(255,255,255,0.02)",
                  border: `1px solid ${isActive ? panel.border : "rgba(255,255,255,0.06)"}`,
                  opacity: isActive ? 1 : 0.45,
                }}>
                <div className="flex items-start justify-between mb-6">
                  <h3 className="font-display font-700 text-white text-lg">{panel.label}</h3>
                  <div className="px-3 py-1 rounded-full font-mono-data text-xs font-600"
                    style={{ background: `${panel.color}18`, color: panel.color, border: `1px solid ${panel.color}30` }}>
                    {panel === traditional ? "Legacy" : "AI-Native"}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[{ l: "Processing Fee", v: panel.fee }, { l: "Time to Complete", v: panel.time }].map((s) => (
                    <div key={s.l} className="rounded-xl p-3"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>{s.l}</div>
                      <div className="font-display font-700 text-base" style={{ color: panel.color }}>{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  {panel.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: step.done ? `${panel.color}20` : "rgba(255,77,77,0.12)",
                          border: `1px solid ${step.done ? `${panel.color}40` : "rgba(255,77,77,0.3)"}`,
                          color: step.done ? panel.color : "#FF4D4D",
                        }}>
                        {step.done ? <IconCheck /> : <IconX />}
                      </div>
                      <span className="text-sm font-500 leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Dashboard Preview ─────────────────────────────────────────────────────
const salesData = [
  { time: "09:00", gbp: 2840 },
  { time: "10:00", gbp: 4120 },
  { time: "11:00", gbp: 3670 },
  { time: "12:00", gbp: 6200 },
  { time: "13:00", gbp: 5480 },
  { time: "14:00", gbp: 7100 },
  { time: "15:00", gbp: 8340 },
];

function MiniBarChart({ data }: { data: typeof salesData }) {
  const max = Math.max(...data.map((d) => d.gbp));
  return (
    <div className="flex items-end gap-1.5 h-20">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex flex-col items-center gap-1">
          <div className="w-full rounded-sm transition-all duration-300"
            style={{
              height: `${(d.gbp / max) * 72}px`,
              background: i === data.length - 1 ? "linear-gradient(180deg, #00F0FF, #00C4CC)" : "linear-gradient(180deg, rgba(138,43,226,0.7), rgba(138,43,226,0.3))",
              boxShadow: i === data.length - 1 ? "0 0 8px rgba(0,240,255,0.4)" : "none",
            }} />
          <span className="font-mono-data" style={{ color: "rgba(255,255,255,0.25)", fontSize: "9px" }}>{d.time.split(":")[0]}h</span>
        </div>
      ))}
    </div>
  );
}

function DashboardSection() {
  const [currency, setCurrency] = useState<"GBP" | "USD" | "EUR">("GBP");
  const fxRates: Record<string, number> = { GBP: 1, USD: 1.27, EUR: 1.17 };
  const symbols: Record<string, string> = { GBP: "£", USD: "$", EUR: "€" };
  const rate = fxRates[currency];
  const sym = symbols[currency];

  const recentOrders = [
    { store: "Acme Electronics", product: "Sony WH-1000XM5", amount: 219.99, status: "settled" },
    { store: "Nova Fashion", product: "Nike Air Max 270", amount: 134.99, status: "settled" },
    { store: "TechHub Store", product: "Apple AirPods Pro", amount: 249.00, status: "processing" },
    { store: "Kitchen World", product: "Dyson V15 Detect", amount: 599.00, status: "settled" },
  ];

  return (
    <section className="py-28" style={{ background: "#080B11" }} id="dashboard">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(0,240,255,0.08)", border: "1px solid rgba(0,240,255,0.2)" }}>
            <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Merchant Dashboard</span>
          </div>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Everything in one command centre
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Real-time analytics, automatic fiat conversion, and one-click integrations.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #120F24 0%, #0C0A1E 100%)",
            border: "1px solid rgba(138,43,226,0.2)",
            boxShadow: "0 0 60px rgba(138,43,226,0.12), 0 40px 80px rgba(0,0,0,0.6)",
          }}>
          {/* Window chrome */}
          <div className="px-5 py-3 flex items-center gap-2"
            style={{ background: "rgba(0,0,0,0.3)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#FFBD2E" }} />
            <div className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
            <div className="flex-1 mx-4 flex justify-center">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 px-4 py-1 rounded-full font-display font-600 text-xs transition-all duration-200 hover:scale-105 hover:opacity-90"
                style={{
                  background: "linear-gradient(135deg, #8A2BE2, #00F0FF22)",
                  border: "1px solid rgba(0,240,255,0.35)",
                  color: "#00F0FF",
                  boxShadow: "0 0 12px rgba(0,240,255,0.15)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full pulse-glow inline-block" style={{ background: "#00F0FF" }} />
                Open Merchant Dashboard
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
            </div>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Today's Revenue", value: `${sym}${(38140 * rate).toLocaleString("en-GB", { maximumFractionDigits: 0 })}`, delta: "+18.4%", color: "#00F0FF" },
                { label: "AI Agent Orders", value: "1,247", delta: "+34.2%", color: "#A855F7" },
                { label: "$SMDX Earned", value: "2,841 SMDX", delta: "+12.1%", color: "#8A2BE2" },
                { label: "Avg. Settlement", value: "0.73s", delta: "-5.2%", color: "#4ADE80" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl p-4"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="text-xs mb-1.5" style={{ color: "rgba(255,255,255,0.4)" }}>{stat.label}</div>
                  <div className="font-display font-700 text-lg text-white mb-1">{stat.value}</div>
                  <div className="font-mono-data text-xs" style={{ color: stat.color }}>{stat.delta}</div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 rounded-xl p-5"
                style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="font-display font-600 text-white text-sm">Hourly Revenue</div>
                    <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>Today · {currency}</div>
                  </div>
                  <div className="flex rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                    {(["GBP", "USD", "EUR"] as const).map((c) => (
                      <button key={c} onClick={() => setCurrency(c)}
                        className="px-3 py-1.5 font-mono-data text-xs transition-all"
                        style={{ background: currency === c ? "rgba(0,240,255,0.15)" : "transparent", color: currency === c ? "#00F0FF" : "rgba(255,255,255,0.35)" }}>
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
                <MiniBarChart data={salesData} />
              </div>

              <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="font-display font-600 text-white text-sm mb-4">Auto-Conversion</div>
                <div className="space-y-3 mb-5">
                  {[
                    { label: "GBP · Primary", pct: 60, color: "#00F0FF" },
                    { label: "USD · Secondary", pct: 25, color: "#A855F7" },
                    { label: "EUR · Reserve", pct: 15, color: "#8A2BE2" },
                  ].map((c) => (
                    <div key={c.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{c.label}</span>
                        <span className="font-mono-data text-xs" style={{ color: c.color }}>{c.pct}%</span>
                      </div>
                      <div className="h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                        <div className="h-full rounded-full" style={{ width: `${c.pct}%`, background: c.color, boxShadow: `0 0 6px ${c.color}60` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full py-2.5 rounded-lg font-display font-600 text-sm transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", color: "#fff" }}>
                  Update Settings
                </button>
              </div>
            </div>

            <div className="mt-6 rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.05)" }}>
              <div className="px-5 py-3 flex items-center justify-between"
                style={{ background: "rgba(0,0,0,0.2)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span className="font-display font-600 text-white text-sm">Recent AI Agent Orders</span>
                <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Live · updates every 3s</span>
              </div>
              {recentOrders.map((order, i) => (
                <div key={i} className="px-5 py-3.5 grid grid-cols-3 md:grid-cols-4 gap-4 items-center"
                  style={{ borderBottom: i < recentOrders.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none", background: i % 2 === 0 ? "rgba(255,255,255,0.01)" : "transparent" }}>
                  <div>
                    <div className="text-xs font-600 text-white">{order.store}</div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>{order.product}</div>
                  </div>
                  <div className="hidden md:block">
                    <div className="text-xs font-mono-data" style={{ color: "rgba(255,255,255,0.5)" }}>{sym}{(order.amount * rate).toFixed(2)}</div>
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full font-mono-data text-xs"
                      style={{
                        background: order.status === "settled" ? "rgba(74,222,128,0.1)" : "rgba(255,189,46,0.1)",
                        color: order.status === "settled" ? "#4ADE80" : "#FFBD2E",
                        border: `1px solid ${order.status === "settled" ? "rgba(74,222,128,0.25)" : "rgba(255,189,46,0.25)"}`,
                      }}>
                      <span className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: order.status === "settled" ? "#4ADE80" : "#FFBD2E" }} />
                      {order.status === "settled" ? "Settled" : "Processing"}
                    </span>
                  </div>
                  <div className="text-xs font-mono-data" style={{ color: "#00F0FF" }}>
                    +{(order.amount * 0.04 * rate).toFixed(2)} SMDX
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {[{ label: "Shopify Plugin", color: "#96BF48" }, { label: "WooCommerce Plugin", color: "#7F54B3" }, { label: "BigCommerce", color: "#34313F" }, { label: "Magento", color: "#EE672F" }].map((p) => (
                <div key={p.label} className="flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                  <span className="text-xs font-500 text-white">{p.label}</span>
                  <span className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>1-click</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Testimonials ──────────────────────────────────────────────────────────
const testimonials = [
  {
    role: "Head of E-commerce · Verified Merchant",
    avatar: IMG.teamWork,
    stars: 5,
    quote: "Somidax cut our checkout abandonment by 61%. The AI agent handles everything — customers just describe what they want and it's done. We went from 2.9% card fees to 0.5% overnight.",
  },
  {
    role: "Founder · Verified Merchant",
    avatar: IMG.cityNight,
    stars: 5,
    quote: "The $SMDX staking rewards paid for our subscription in week one. Settlement is genuinely instant — funds hit our GBP account before the customer even closes the browser.",
  },
  {
    role: "CTO · Verified Merchant",
    avatar: IMG.aiText,
    stars: 5,
    quote: "We integrated via the WooCommerce plugin in under 20 minutes. The natural language catalog matching means buyers find our products even when they use completely different terminology.",
  },
];

function TestimonialsSection() {
  return (
    <section className="py-28 relative overflow-hidden" id="about"
      style={{ background: "linear-gradient(180deg, #080B11 0%, #0A0816 50%, #080B11 100%)" }}>
      {/* Background city image */}
      <div className="absolute inset-0">
        <img src={IMG.cityNight} alt="" className="w-full h-full object-cover" style={{ opacity: 0.08 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #080B11 0%, rgba(8,11,17,0.7) 50%, #080B11 100%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
            style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.3)" }}>
            <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Merchant Stories</span>
          </div>
          <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.8rem)" }}>
            Merchants love Somidax
          </h2>
          <p className="text-lg" style={{ color: "rgba(255,255,255,0.5)" }}>
            Real results from real stores across the network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="card-hover rounded-2xl overflow-hidden relative"
              style={{
                background: "linear-gradient(145deg, #120F24 0%, #0E0C1E 100%)",
                border: "1px solid rgba(138,43,226,0.15)",
              }}>
              {/* Image top */}
              <div className="h-36 relative overflow-hidden">
                <img src={t.avatar} alt="" className="w-full h-full object-cover" style={{ opacity: 0.4 }} />
                <div className="absolute inset-0" style={{
                  background: "linear-gradient(180deg, rgba(18,15,36,0.2) 0%, #120F24 100%)"
                }} />
                <div className="absolute top-4 left-5">
                  <IconQuote />
                </div>
                {/* Stars */}
                <div className="absolute bottom-4 left-5 flex gap-1">
                  {[...Array(t.stars)].map((_, si) => (
                    <span key={si} style={{ color: "#FFBD2E" }}><IconStar /></span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm leading-relaxed mb-5 italic" style={{ color: "rgba(255,255,255,0.7)" }}>
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 flex items-center justify-center"
                    style={{ border: "1px solid rgba(138,43,226,0.4)", background: "rgba(138,43,226,0.15)" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Token Section ─────────────────────────────────────────────────────────
function TokenSection() {
  return (
    <section className="py-28 relative overflow-hidden" id="token"
      style={{ background: "linear-gradient(180deg, #080B11 0%, #0A0816 100%)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(138,43,226,0.08) 0%, transparent 65%)" }} />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Token visual with background image */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Glowing background image */}
              <div className="absolute inset-0 rounded-full overflow-hidden" style={{ width: "280px", height: "280px", margin: "auto" }}>
                <img src={IMG.glowObj} alt="Glowing energy representing SMDX token" className="w-full h-full object-cover" style={{ opacity: 0.3 }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle, rgba(138,43,226,0.4) 0%, rgba(8,11,17,0.9) 70%)" }} />
              </div>
              <div className="w-64 h-64 rounded-full flex items-center justify-center relative"
                style={{
                  background: "linear-gradient(135deg, #120F24, #1A1535)",
                  border: "2px solid rgba(138,43,226,0.4)",
                  boxShadow: "0 0 60px rgba(138,43,226,0.3), 0 0 120px rgba(138,43,226,0.1), inset 0 0 60px rgba(138,43,226,0.05)",
                }}>
                <div className="w-48 h-48 rounded-full flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #8A2BE2, #4C1D95)", boxShadow: "0 0 40px rgba(138,43,226,0.5)" }}>
                  <span className="font-display font-900 text-white" style={{ fontSize: "2.5rem" }}>$SMDX</span>
                </div>
              </div>
              {[{ label: "Governance", angle: 0, color: "#00F0FF" }, { label: "Cashback", angle: 120, color: "#A855F7" }, { label: "Staking", angle: 240, color: "#8A2BE2" }].map((b) => {
                const rad = (b.angle * Math.PI) / 180;
                const x = Math.cos(rad) * 130;
                const y = Math.sin(rad) * 130;
                return (
                  <div key={b.label}
                    className="absolute px-3 py-1.5 rounded-full font-mono-data text-xs font-600 whitespace-nowrap"
                    style={{
                      left: "50%", top: "50%",
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      background: `${b.color}18`, border: `1px solid ${b.color}40`, color: b.color,
                    }}>
                    {b.label}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(138,43,226,0.12)", border: "1px solid rgba(138,43,226,0.3)" }}>
              <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>$SMDX Token Utility</span>
            </div>
            <h2 className="font-display font-800 text-white mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)" }}>
              Rewards that compound with every transaction
            </h2>

            {/* Dual-chain badges */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 group"
                style={{ background: "rgba(98,126,234,0.12)", border: "1px solid rgba(98,126,234,0.35)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(98,126,234,0.2)" stroke="#627EEA" strokeWidth="1.5"/>
                  <path d="M12 5.5L7.5 12.5L12 15L16.5 12.5L12 5.5Z" fill="#627EEA" opacity="0.8"/>
                  <path d="M7.5 13.5L12 18.5L16.5 13.5L12 16L7.5 13.5Z" fill="#627EEA"/>
                </svg>
                <div>
                  <div className="font-mono-data text-xs font-600" style={{ color: "#627EEA" }}>Ethereum · ERC-20</div>
                  <div className="font-mono-data text-xs group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>
                    0x7e85…949B ↗
                  </div>
                </div>
              </a>

              <a
                href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 group"
                style={{ background: "rgba(240,185,11,0.10)", border: "1px solid rgba(240,185,11,0.35)" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="rgba(240,185,11,0.15)" stroke="#F0B90B" strokeWidth="1.5"/>
                  <path d="M12 7l1.5 1.5L12 10 10.5 8.5 12 7zM9 10l1.5 1.5L9 13 7.5 11.5 9 10zM15 10l1.5 1.5L15 13l-1.5-1.5L15 10zM12 13l1.5 1.5L12 16l-1.5-1.5L12 13z" fill="#F0B90B"/>
                </svg>
                <div>
                  <div className="font-mono-data text-xs font-600" style={{ color: "#F0B90B" }}>BNB Chain · BEP-20</div>
                  <div className="font-mono-data text-xs group-hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>
                    0xea8c…2bdb ↗
                  </div>
                </div>
              </a>
            </div>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
              $SMDX is the fuel of the Somidax network. Earn it as a buyer, stake it as a merchant, and vote with it as a holder. All on-chain, all non-custodial.
            </p>
            <div className="space-y-4">
              {[
                { title: "Buyer Cashback", desc: "Earn up to 8% back in $SMDX on qualifying agentic purchases. Rewards auto-deposit to your wallet.", color: "#00F0FF" },
                { title: "Merchant Staking", desc: "Stake $SMDX to unlock a 0.3% fee tier — the lowest in the industry. Minimum 10,000 SMDX to activate.", color: "#A855F7" },
                { title: "Governance Votes", desc: "One SMDX = one vote on protocol upgrades, fee structures, and treasury allocation decisions.", color: "#8A2BE2" },
                { title: "Referral Yield", desc: "Earn 1.5% of the settlement fee from every merchant you refer for 12 months, paid weekly in $SMDX.", color: "#4ADE80" },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-4 flex gap-4"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="w-1 rounded-full flex-shrink-0" style={{ background: item.color, boxShadow: `0 0 8px ${item.color}` }} />
                  <div>
                    <div className="font-display font-600 text-white text-sm mb-1">{item.title}</div>
                    <div className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Final CTA Banner ──────────────────────────────────────────────────────
function CTABanner({ onConnect }: { onConnect: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "#080B11" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={IMG.heroBg} alt="" className="w-full h-full object-cover" style={{ opacity: 0.18 }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(138,43,226,0.3) 0%, rgba(8,11,17,0.8) 50%, rgba(0,240,255,0.15) 100%)" }} />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(138,43,226,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(138,43,226,0.08) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }} />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8"
          style={{ background: "rgba(0,240,255,0.1)", border: "1px solid rgba(0,240,255,0.25)" }}>
          <span className="w-2 h-2 rounded-full pulse-glow" style={{ background: "#00F0FF" }} />
          <span className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Join trusted merchants globally already earning</span>
        </div>

        <h2 className="font-display font-900 text-white mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1.1 }}>
          Your store deserves{" "}
          <span style={{
            background: "linear-gradient(135deg, #8A2BE2 0%, #00F0FF 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            autonomous commerce
          </span>
        </h2>

        <p className="text-xl mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
          Connect in minutes. Pay 0.5%. Earn $SMDX on every sale. No contracts, no hidden fees, cancel anytime.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={onConnect}
            className="font-display font-700 text-lg px-10 py-5 rounded-xl transition-all duration-200 hover:scale-105 flex items-center gap-3"
            style={{ background: "linear-gradient(135deg, #8A2BE2, #6B21A8)", boxShadow: "0 0 40px rgba(138,43,226,0.6), 0 8px 30px rgba(0,0,0,0.4)", color: "#fff" }}>
            Connect Storefront — Free <IconArrow />
          </button>
          <button
            onClick={onConnect}
            className="font-display font-600 text-lg px-10 py-5 rounded-xl transition-all duration-200 hover:scale-105 gradient-border"
            style={{ background: "rgba(0,240,255,0.07)", color: "#00F0FF" }}>
            Claim $SMDX Rewards
          </button>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { icon: "🔒", label: "Non-Custodial" },
            { icon: "⚡", label: "Sub-second Settlement" },
            { icon: "🌐", label: "Global Active Agents, 24/7" },
            { icon: "💰", label: "0.5% Flat Fee" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2">
              <span>{b.icon}</span>
              <span className="text-sm font-500" style={{ color: "rgba(255,255,255,0.5)" }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Mobile App Banner ────────────────────────────────────────────────────
function MobileAppBanner() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 relative overflow-hidden" style={{ background: "rgba(8,11,17,0.98)", borderTop: "1px solid rgba(138,43,226,0.12)", borderBottom: "1px solid rgba(138,43,226,0.12)" }}>
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(138,43,226,0.1) 0%, transparent 60%)" }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 40% 60% at 15% 50%, rgba(0,240,255,0.06) 0%, transparent 55%)" }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.28)" }}>
              <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#8A2BE2", boxShadow: "0 0 6px #8A2BE2" }} />
              <span className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Somidax Mobile · Coming Soon</span>
            </div>
            <h2 className="font-display font-900 text-white mb-4" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", lineHeight: 1.1 }}>
              Commerce at your
              {" "}<span style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                fingertips
              </span>
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)", maxWidth: 460 }}>
              The Somidax mobile app brings AI-native shopping, real-time $SMDX rewards, and your merchant dashboard to Android and iOS. Register your interest and be first on the waitlist.
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { label: "AI Agent Shopping", color: "#8A2BE2" },
                { label: "$SMDX Wallet", color: "#00F0FF" },
                { label: "Merchant Dashboard", color: "#4ADE80" },
                { label: "Instant Notifications", color: "#FFBD2E" },
                { label: "Biometric Auth", color: "#F87171" },
              ].map((f) => (
                <span key={f.label} className="font-display font-500 text-xs px-3 py-1.5 rounded-full"
                  style={{ background: `${f.color}10`, border: `1px solid ${f.color}25`, color: f.color }}>
                  {f.label}
                </span>
              ))}
            </div>

            {/* Store buttons */}
            <div className="flex flex-wrap gap-4">
              {/* App Store */}
              <div className="relative group">
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl cursor-not-allowed select-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  {/* Apple icon */}
                  <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.04 13.73c-.03-3.25 2.65-4.82 2.77-4.9-1.51-2.21-3.86-2.51-4.7-2.54-2-.2-3.9 1.18-4.92 1.18-1.01 0-2.57-1.15-4.23-1.12C4.8 6.39 2.73 7.57 1.6 9.46-0.7 13.3.76 18.99 3 21.7c1.12 1.62 2.45 3.44 4.19 3.37 1.69-.07 2.33-1.09 4.37-1.09 2.04 0 2.62 1.09 4.4 1.05 1.82-.03 2.96-1.64 4.07-3.27 1.28-1.87 1.81-3.68 1.84-3.77-.04-.02-3.51-1.35-3.83-5.26z" fill="rgba(255,255,255,0.7)"/>
                    <path d="M14.72 4.15c.93-1.13 1.56-2.7 1.39-4.27-1.34.06-2.97.9-3.93 2-. 86 1-1.62 2.53-1.42 4.07 1.49.12 3.02-.76 3.96-1.8z" fill="rgba(255,255,255,0.7)"/>
                  </svg>
                  <div>
                    <div className="font-mono-data text-xs leading-none mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Download on the</div>
                    <div className="font-display font-700 text-white text-base leading-none">App Store</div>
                  </div>
                  {/* Coming soon overlay badge */}
                  <div className="absolute -top-2.5 -right-2.5 font-mono-data text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", fontSize: 9 }}>
                    Soon
                  </div>
                </div>
              </div>

              {/* Google Play */}
              <div className="relative group">
                <div className="flex items-center gap-3 px-5 py-3.5 rounded-2xl cursor-not-allowed select-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}>
                  {/* Play Store icon */}
                  <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.22.63C.88.85.66 1.27.66 1.84v20.32c0 .57.22.99.56 1.21l.07.05 11.38-11.38v-.27L1.29.58l-.07.05z" fill="#4ADE80"/>
                    <path d="M16.46 16.43l-3.79-3.79v-.27l3.79-3.79.09.05 4.49 2.55c1.28.73 1.28 1.92 0 2.65l-4.49 2.55-.09.05z" fill="#FFBD2E"/>
                    <path d="M16.55 16.38L12.67 12.5.66 24.17c.42.45 1.11.5 1.89.06l13.99-7.85" fill="#FF4D4D"/>
                    <path d="M16.55 7.62L2.55.28C1.77-.16 1.08-.11.66.34l12.01 12.16 3.88-3.88z" fill="#00F0FF"/>
                  </svg>
                  <div>
                    <div className="font-mono-data text-xs leading-none mb-0.5" style={{ color: "rgba(255,255,255,0.4)" }}>Get it on</div>
                    <div className="font-display font-700 text-white text-base leading-none">Google Play</div>
                  </div>
                  <div className="absolute -top-2.5 -right-2.5 font-mono-data text-xs px-2 py-0.5 rounded-full"
                    style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", fontSize: 9 }}>
                    Soon
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist CTA */}
            <div className="mt-6 flex items-center gap-3 max-w-sm">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none transition-all"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                }} />
              <button
                className="font-display font-700 px-5 py-3 rounded-xl text-sm whitespace-nowrap transition-all hover:scale-105 flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 18px rgba(138,43,226,0.4)" }}>
                Notify Me
              </button>
            </div>
            <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.25)" }}>No spam. One email when the app launches.</p>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute inset-0 rounded-3xl"
                style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(138,43,226,0.35) 0%, transparent 70%)", filter: "blur(30px)", transform: "scale(1.15)" }} />

              {/* Phone shell */}
              <div className="relative rounded-[2.5rem] overflow-hidden"
                style={{ width: 240, height: 480, background: "#0D0D14", border: "2px solid rgba(255,255,255,0.12)", boxShadow: "0 30px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)" }}>

                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full z-20"
                  style={{ background: "#000" }} />

                {/* Screen content */}
                <div className="absolute inset-0 p-4 pt-10 flex flex-col gap-3">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mt-1">
                    <span className="font-mono-data text-xs text-white opacity-60">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-3 h-1.5 rounded-sm" style={{ background: "#4ADE80" }} />
                      <div className="w-1 h-1.5 rounded-sm" style={{ background: "rgba(255,255,255,0.3)" }} />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display font-800 text-white text-sm">Somidax</div>
                      <div className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>● Live</div>
                    </div>
                    <div className="w-8 h-8 rounded-full" style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)" }} />
                  </div>

                  {/* Balance card */}
                  <div className="rounded-2xl p-3" style={{ background: "linear-gradient(135deg,rgba(138,43,226,0.3),rgba(0,240,255,0.15))", border: "1px solid rgba(138,43,226,0.3)" }}>
                    <div className="font-mono-data text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.5)" }}>$SMDX Balance</div>
                    <div className="font-display font-900 text-white text-lg">2,847.40</div>
                    <div className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>▲ +12.4 today</div>
                  </div>

                  {/* Quick actions */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Shop", color: "#8A2BE2" },
                      { label: "Pay", color: "#00F0FF" },
                      { label: "Rewards", color: "#4ADE80" },
                      { label: "Stake", color: "#FFBD2E" },
                    ].map((a) => (
                      <div key={a.label} className="rounded-xl py-2 text-center"
                        style={{ background: `${a.color}14`, border: `1px solid ${a.color}25` }}>
                        <div className="font-display font-700 text-xs" style={{ color: a.color }}>{a.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Recent order */}
                  <div>
                    <div className="font-mono-data text-xs mb-2" style={{ color: "rgba(255,255,255,0.3)" }}>RECENT</div>
                    <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                      <div className="flex items-center justify-between">
                        <div className="font-display font-600 text-white text-xs">Sony WH-1000XM5</div>
                        <div className="font-mono-data text-xs" style={{ color: "#4ADE80" }}>+2.4 SMDX</div>
                      </div>
                      <div className="font-mono-data text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.3)" }}>£211.19 · Settled</div>
                    </div>
                  </div>

                  {/* AI agent pulse */}
                  <div className="rounded-xl p-3 flex items-center gap-2"
                    style={{ background: "rgba(0,240,255,0.06)", border: "1px solid rgba(0,240,255,0.18)" }}>
                    <div className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center font-display font-700 text-xs"
                      style={{ background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", color: "#fff" }}>AI</div>
                    <div className="font-mono-data text-xs" style={{ color: "#00F0FF" }}>Agent scanning 18,400+ stores…</div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-3 rounded-2xl px-4 py-2.5 text-center"
                style={{ background: "rgba(18,15,36,0.95)", border: "1px solid rgba(138,43,226,0.4)", boxShadow: "0 0 20px rgba(138,43,226,0.3)" }}>
                <div className="font-display font-800 text-white text-sm">Q1 2027</div>
                <div className="font-mono-data text-xs" style={{ color: "#A855F7" }}>Launch target</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────
function Footer() {
  const links: Record<string, { label: string; href: string }[]> = {
    Product: [
      { label: "AI Engine", href: "/product/ai-engine" },
      { label: "Somidax Pay", href: "/product/somidax-pay" },
      { label: "Token Loyalty", href: "/product/token-loyalty" },
      { label: "Integrations", href: "/product/integrations" },
      { label: "Pricing", href: "/product/pricing" },
    ],
    Developers: [
      { label: "Documentation", href: "/developers" },
      { label: "API Reference", href: "/developers" },
      { label: "SDK", href: "/developers" },
      { label: "Webhooks", href: "/developers" },
      { label: "Plugins", href: "/developers" },
    ],
    "Somidax DAO": [
      { label: "Governance", href: "/dao" },
      { label: "Treasury", href: "/dao" },
      { label: "Proposals", href: "/dao" },
      { label: "Join DAO", href: "/dao" },
      { label: "Whitepaper", href: "/dao/whitepaper" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/legal" },
      { label: "Terms of Service", href: "/legal" },
      { label: "Cookie Policy", href: "/legal" },
      { label: "AML Policy", href: "/legal" },
    ],
  };

  return (
    <footer className="relative" style={{ background: "#050709", borderTop: "1px solid rgba(138,43,226,0.15)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={somidaxLogo} alt="Somidax logo" className="w-10 h-10 rounded-full object-contain"
                style={{ background: "#fff", boxShadow: "0 0 16px rgba(138,43,226,0.4)" }} />
              <span className="font-display font-700 text-white text-xl">Somidax</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.45)" }}>
              AI-native e-commerce network powering autonomous shopping across trusted storefronts worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: IconTwitter,  href: "https://x.com/somidax" },
                { Icon: IconTelegram, href: "#" },
                { Icon: IconGithub,   href: "https://github.com/somidaxAI" },
                { Icon: IconLinkedin, href: "https://www.linkedin.com/company/somidax/" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#00F0FF";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,240,255,0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.45)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
                  }}>
                  <Icon />
                </a>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl"
                style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.25)" }}>
                <img src={somidaxLogo} alt="Somidax" className="w-6 h-6 rounded-full object-contain" style={{ background: "#fff" }} />
                <div>
                  <div className="font-mono-data text-xs text-white font-600">$SMDX · Dual-Chain</div>
                  <div className="font-mono-data" style={{ fontSize: "9px", color: "#4ADE80" }}>+4.2% · $0.183</div>
                </div>
              </div>
              <div className="flex gap-2">
                <a href="https://etherscan.io/token/0x7e8539D1E5cB91d63E46B8e188403b3f262a949B"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all hover:scale-105"
                  style={{ background: "rgba(98,126,234,0.1)", border: "1px solid rgba(98,126,234,0.3)" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#627EEA" }} />
                  <span className="font-mono-data" style={{ fontSize: "10px", color: "#627EEA" }}>ETH ↗</span>
                </a>
                <a href="https://bscscan.com/token/0xea8c5b9c537f3ebbcc8f2df0573f2d084e9e2bdb"
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg transition-all hover:scale-105"
                  style={{ background: "rgba(240,185,11,0.1)", border: "1px solid rgba(240,185,11,0.3)" }}>
                  <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#F0B90B" }} />
                  <span className="font-mono-data" style={{ fontSize: "10px", color: "#F0B90B" }}>BNB ↗</span>
                </a>
              </div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <div className="font-display font-600 text-white text-sm mb-4">{category}</div>
              <ul className="space-y-2.5">
                {items.map((item, idx) => (
                  <li key={`${category}-${idx}`}>
                    <Link to={item.href} className="text-sm transition-colors duration-200 hover:text-white"
                      style={{ color: "rgba(255,255,255,0.4)" }}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} className="pt-8">
          <div className="rounded-xl p-4 mb-8 flex items-start gap-3"
            style={{ background: "rgba(255,189,46,0.05)", border: "1px solid rgba(255,189,46,0.15)" }}>
            <div className="flex-shrink-0 mt-0.5" style={{ color: "#FFBD2E" }}><IconShield /></div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              <strong className="text-white/70">Non-Custodial Disclaimer:</strong> Somidax is a non-custodial protocol. We do not hold, control, or have access to your funds or private keys at any time. $SMDX tokens are utility tokens and do not constitute securities or investment advice. Cryptocurrency and stablecoin transactions carry risk. Please consult a qualified financial adviser before participating. Somidax is not regulated by the FCA or any financial authority. Vobit settlement services are provided by Vobit Ltd, regulated under applicable e-money regulations.
            </p>
          </div>
          {/* App store badges in footer */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center justify-between gap-3 mb-6 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            <div className="flex items-center gap-2">
              <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Somidax Mobile App</span>
              <span className="font-mono-data text-xs px-2 py-0.5 rounded-full" style={{ background: "rgba(138,43,226,0.12)", color: "#A855F7", border: "1px solid rgba(138,43,226,0.25)" }}>Coming Q1 2027</span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <a href="https://github.com/somidaxAI/go-sdk" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl transition-opacity hover:opacity-80"
                style={{ background: "rgba(138,43,226,0.1)", border: "1px solid rgba(138,43,226,0.3)" }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="#A855F7">
                  <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <span className="font-display font-600 text-xs" style={{ color: "#A855F7" }}>Somidax SDK</span>
              </a>
              <a href="https://github.com/somidaxAI/go-sdk-windows/releases/latest" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl transition-opacity hover:opacity-80"
                style={{ background: "rgba(0,240,255,0.07)", border: "1px solid rgba(0,240,255,0.2)" }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <rect x="1" y="1" width="14" height="10" rx="1.5" stroke="rgba(0,240,255,0.7)" strokeWidth="1.3"/>
                  <path d="M4 14h8M8 11v3" stroke="rgba(0,240,255,0.7)" strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M5 4.5h6M5 7h4" stroke="rgba(0,240,255,0.5)" strokeWidth="1" strokeLinecap="round"/>
                </svg>
                <span className="font-display font-600 text-xs" style={{ color: "rgba(0,240,255,0.8)" }}>Windows SDK</span>
                <span className="font-mono-data text-xs" style={{ color: "rgba(0,240,255,0.4)" }}>.exe</span>
              </a>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-not-allowed"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <svg width="14" height="17" viewBox="0 0 22 26" fill="none">
                  <path d="M18.04 13.73c-.03-3.25 2.65-4.82 2.77-4.9-1.51-2.21-3.86-2.51-4.7-2.54-2-.2-3.9 1.18-4.92 1.18-1.01 0-2.57-1.15-4.23-1.12C4.8 6.39 2.73 7.57 1.6 9.46-0.7 13.3.76 18.99 3 21.7c1.12 1.62 2.45 3.44 4.19 3.37 1.69-.07 2.33-1.09 4.37-1.09 2.04 0 2.62 1.09 4.4 1.05 1.82-.03 2.96-1.64 4.07-3.27 1.28-1.87 1.81-3.68 1.84-3.77-.04-.02-3.51-1.35-3.83-5.26z" fill="rgba(255,255,255,0.55)"/>
                  <path d="M14.72 4.15c.93-1.13 1.56-2.7 1.39-4.27-1.34.06-2.97.9-3.93 2-.86 1-1.62 2.53-1.42 4.07 1.49.12 3.02-.76 3.96-1.8z" fill="rgba(255,255,255,0.55)"/>
                </svg>
                <span className="font-display font-600 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>iOS</span>
                <span className="font-mono-data text-xs" style={{ color: "rgba(138,43,226,0.8)" }}>Soon</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl cursor-not-allowed"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <svg width="14" height="16" viewBox="0 0 22 24" fill="none">
                  <path d="M1.22.63C.88.85.66 1.27.66 1.84v20.32c0 .57.22.99.56 1.21l.07.05 11.38-11.38v-.27L1.29.58l-.07.05z" fill="#4ADE80"/>
                  <path d="M16.46 16.43l-3.79-3.79v-.27l3.79-3.79.09.05 4.49 2.55c1.28.73 1.28 1.92 0 2.65l-4.49 2.55-.09.05z" fill="#FFBD2E"/>
                  <path d="M16.55 16.38L12.67 12.5.66 24.17c.42.45 1.11.5 1.89.06l13.99-7.85" fill="#FF4D4D"/>
                  <path d="M16.55 7.62L2.55.28C1.77-.16 1.08-.11.66.34l12.01 12.16 3.88-3.88z" fill="#00F0FF"/>
                </svg>
                <span className="font-display font-600 text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Android</span>
                <span className="font-mono-data text-xs" style={{ color: "rgba(138,43,226,0.8)" }}>Soon</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
              © 2026 Somidax Network Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full" style={{ background: "#4ADE80", boxShadow: "0 0 6px #4ADE80" }} />
              <span className="font-mono-data text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ── App ───────────────────────────────────────────────────────────────────
export default function App() {
  const [walletOpen, setWalletOpen] = useState(false);
  return (
    <div style={{ background: "#080B11", minHeight: "100vh" }}>
      {walletOpen && <WalletModal onClose={() => setWalletOpen(false)} />}
      <Nav onConnect={() => setWalletOpen(true)} />
      <HeroSection onConnect={() => setWalletOpen(true)} />
      <SocialProofStrip />
      <FeaturesSection />
      <VisualDivider />
      <DemoSection />
      <DashboardSection />
      <TestimonialsSection />
      <TokenSection />
      <CTABanner onConnect={() => setWalletOpen(true)} />
      <MobileAppBanner />
      <Footer />
    </div>
  );
}
