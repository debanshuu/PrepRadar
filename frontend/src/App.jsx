import { useState } from "react";
import InputPanel from "./components/InputPanel";
import ReadinessOutput from "./components/ReadinessOutput";
import DimensionCharts from "./components/DimensionCharts";
import StrengthsWeaknesses from "./components/StrengthsWeaknesses";
import ModelComparison from "./components/ModelComparison";
import SkillRadarChart from "./components/SkillRadarChart";
import Roadmap from "./components/Roadmap";

function App() {
  const [result, setResult] = useState(null);

  const scrollToDashboard = () => {
    document
      .getElementById("dashboard")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ background: "#fafaf9", color: "#1a1a18", fontFamily: "'DM Sans', sans-serif" }}>
      {/* Navbar - Minimal */}
      <header className="sticky top-0 z-50" style={{ background: "#fff", borderBottom: "0.5px solid #e5e5e2", height: "70px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <div style={{ width: "34px", height: "34px", background: "#1a1a18", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: "14px", fontWeight: 500, fontFamily: "'DM Mono', monospace" }}>PR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span style={{ fontSize: "18px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px" }}>PrepRadar</span>
                <span style={{ fontSize: "11px", background: "#f0f0ed", color: "#666", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #e5e5e2" }}>AI</span>
              </div>
              <div style={{ fontSize: "11px", color: "#bbb", marginTop: "2px" }}>Placement Readiness</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#dashboard" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>Dashboard</a>
            <a href="#features" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>Features</a>
            <a href="#roadmap" style={{ fontSize: "14px", color: "#888", textDecoration: "none" }}>Roadmap</a>
          </nav>

          <button
            onClick={scrollToDashboard}
            style={{ background: "#1a1a18", color: "#fff", border: "none", padding: "8px 16px sm:10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
          >
            Analyze Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8" style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#888", marginBottom: "24px", letterSpacing: "0.5px", textTransform: "uppercase" }}>
            <span style={{ width: "6px", height: "6px", background: "#b5b5b0", borderRadius: "50%", display: "inline-block" }} />
            AI-Powered Placement Intelligence
          </div>

          <h1 style={{ fontSize: "clamp(32px, 8vw, 52px)", fontWeight: 300, lineHeight: "1.2", letterSpacing: "-1.5px", color: "#1a1a18", marginBottom: "18px" }}>
            Placement readiness,<br />
            <em style={{ fontStyle: "normal", fontWeight: 500 }}>measured precisely.</em>
          </h1>

          <p style={{ fontSize: "17px", color: "#888", lineHeight: "1.6", maxWidth: "520px", fontWeight: 300, marginBottom: "32px" }}>
            Evaluate your skills, compare with industry benchmarks, and receive a personalized roadmap to land the role you want.
          </p>

          <div className="flex gap-3 items-center mb-14">
            <button
              onClick={scrollToDashboard}
              style={{ background: "#1a1a18", color: "#fff", border: "none", padding: "10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, cursor: "pointer" }}
            >
              Analyze Now →
            </button>
          </div>

          <div id="features" className="flex gap-2 sm:gap-3 flex-wrap" style={{ marginBottom: "40px" }}>
            <span style={{ fontSize: "12px", color: "#aaa", textTransform: "uppercase", letterSpacing: "0.8px", marginRight: "6px", lineHeight: "2.5" }}>Includes</span>
            {["AI Readiness Score", "Skill Analysis", "Company Matching", "Personalized Roadmap"].map((item) => (
              <span
                key={item}
                style={{ fontSize: "13px", color: "#666", background: "#f5f5f2", border: "0.5px solid #e8e8e4", padding: "6px 14px", borderRadius: "20px" }}
              >
                {item}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 0, border: "0.5px solid #e5e5e2", borderRadius: "12px", background: "#fff", overflow: "hidden", width: "100%", maxWidth: "fit-content" }}>
            {[
              ["8+", "Companies tracked", "#185FA5"],
              ["95%", "Model accuracy", "#3B6D11"],
              ["5", "Skill dimensions", "#534AB7"],
              ["AI", "Powered analysis", "#1a1a18"],
            ].map(([value, label, color], index) => (
              <div key={label} style={{ padding: "18px 32px", borderRight: index === 3 ? "none" : "0.5px solid #e5e5e2", borderBottom: "0.5px solid #e5e5e2", textAlign: "center", flex: "1 0 auto" }}>
                <div style={{ fontSize: "26px", fontWeight: 500, color: color, letterSpacing: "-0.5px" }}>{value}</div>
                <div style={{ fontSize: "12px", color: "#aaa", fontWeight: 300, marginTop: "4px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr style={{ border: "none", borderTop: "0.5px solid #e8e8e4", margin: "0 16px sm:32px" }} />

      {/* Dashboard */}
      <main id="dashboard" className="max-w-7xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <InputPanel setResult={setResult} />
              {result && <SkillRadarChart result={result} />}
            </div>
          </div>

          <div className="lg:col-span-8">
            {result ? (
              <div className="space-y-6">
                <ReadinessOutput result={result} />
                <DimensionCharts result={result} />
                <StrengthsWeaknesses result={result} />
                <ModelComparison result={result} />
              </div>
            ) : (
              <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "24px sm:48px", display: "flex", flexDirection: "column sm:flex-row", alignItems: "center", gap: "32px" }}>
                <div style={{ width: "56px", height: "56px", background: "#f5f5f2", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "28px" }}>
                  🎯
                </div>
                <div style={{ textAlign: "center sm:left" }}>
                  <div style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", marginBottom: "6px", letterSpacing: "-0.3px" }}>Ready to analyze?</div>
                  <div style={{ fontSize: "15px", color: "#999", fontWeight: 300, lineHeight: "1.55" }}>Fill in your profile details and let AI evaluate your placement readiness.</div>
                </div>
                <button
                  onClick={scrollToDashboard}
                  style={{ background: "#1a1a18", color: "#fff", border: "none", padding: "10px 22px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, cursor: "pointer", marginLeft: "auto", flexShrink: 0 }}
                >
                  Get Started →
                </button>
              </div>
            )}
          </div>
        </div>

        {result && (
          <div id="roadmap" className="mt-6">
            <Roadmap result={result} />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-center" style={{ color: "#aaa", fontSize: "13px", fontWeight: 300 }}>
          <p>© 2026 PrepRadar. AI-Powered Placement Readiness Analyzer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;