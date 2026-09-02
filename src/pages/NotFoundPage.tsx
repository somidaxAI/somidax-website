import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div style={{ background: "#080B11", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Inter', sans-serif", padding: "2rem" }}>
      <div className="text-center max-w-md">
        <div className="font-display font-900 mb-2" style={{ fontSize: "6rem", lineHeight: 1, background: "linear-gradient(135deg,#8A2BE2,#00F0FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          404
        </div>
        <h1 className="font-display font-700 text-white text-2xl mb-3">Page not found</h1>
        <p className="text-base mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/"
          className="font-display font-700 px-8 py-3.5 rounded-xl text-sm inline-flex items-center gap-2 transition-all hover:scale-105"
          style={{ background: "linear-gradient(135deg,#8A2BE2,#6B21A8)", color: "#fff", boxShadow: "0 0 24px rgba(138,43,226,0.4)" }}>
          ← Back to Somidax
        </Link>
      </div>
    </div>
  );
}
