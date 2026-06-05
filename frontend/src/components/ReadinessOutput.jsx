import React from "react";

function ReadinessOutput({ result }) {
  const getTierStyle = () => {
    switch (result.tier) {
      case "Top Tier":
        return { background: "#EBF5E8", color: "#3B6D11", border: "0.5px solid #D4E8CD" };
      case "Mid Tier":
        return { background: "#FFF8E7", color: "#B26B00", border: "0.5px solid #F5E6C8" };
      case "Entry Tier":
        return { background: "#FFF3E8", color: "#CC6B2C", border: "0.5px solid #F5E0CC" };
      default:
        return { background: "#FEE8E8", color: "#C41E3A", border: "0.5px solid #F5D0D0" };
    }
  };

  const getProgressColor = () => {
    if (result.score >= 75) return "#3B6D11";
    if (result.score >= 55) return "#B26B00";
    return "#C41E3A";
  };

  const getProgressBg = () => {
    if (result.score >= 75) return "bg-green-500";
    if (result.score >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };

  const tierStyle = getTierStyle();

  return (
    <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "28px" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px", margin: 0 }}>
          Placement Readiness Score
        </h2>
        <span style={{ fontSize: "28px" }}>🎯</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div>
          <h1 style={{ fontSize: "56px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-1.5px", margin: 0 }}>
            {result.score}%
          </h1>

          <div className="mt-4">
            <span
              style={{
                display: "inline-block",
                padding: "5px 14px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 500,
                ...tierStyle
              }}
            >
              {result.tier}
            </span>
          </div>

          <p style={{ color: "#888", fontSize: "12px", marginTop: "20px", marginBottom: "4px", fontWeight: 300 }}>
            Expected Package
          </p>

          <p style={{ fontSize: "17px", fontWeight: 500, color: "#3B6D11", margin: 0 }}>
            {result.salary_hint}
          </p>
        </div>

        {/* Right Side */}
        <div>
          <div className="flex justify-between mb-2">
            <span style={{ color: "#888", fontSize: "13px", fontWeight: 300 }}>
              Placement Readiness
            </span>
            <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>
              {result.score}%
            </span>
          </div>

          <div style={{ width: "100%", background: "#f0f0ed", borderRadius: "20px", height: "8px", overflow: "hidden" }}>
            <div
              className={getProgressBg()}
              style={{
                width: `${result.score}%`,
                height: "8px",
                borderRadius: "20px",
                transition: "width 0.7s ease",
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-3 mt-6">
            <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
              <p style={{ color: "#aaa", fontSize: "11px", fontWeight: 300, marginBottom: "6px" }}>
                Tier
              </p>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#1a1a18", margin: 0 }}>
                {result.tier === "Top Tier" ? "Top" : result.tier === "Mid Tier" ? "Mid" : "Entry"}
              </p>
            </div>

            <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
              <p style={{ color: "#aaa", fontSize: "11px", fontWeight: 300, marginBottom: "6px" }}>
                Score
              </p>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#1a1a18", margin: 0 }}>
                {result.score}
              </p>
            </div>

            <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
              <p style={{ color: "#aaa", fontSize: "11px", fontWeight: 300, marginBottom: "6px" }}>
                Package
              </p>
              <p style={{ fontSize: "14px", fontWeight: 500, color: "#3B6D11", margin: 0 }}>
                {result.salary_hint?.split(" ")[0] || "₹"}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ReadinessOutput;