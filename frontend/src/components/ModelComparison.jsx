import React from 'react'

function ModelComparison({ result }) {

  if (!result?.company_readiness) return null;

  const companies = Object.entries(
    result.company_readiness
  ).map(([company, score]) => ({
    company,
    score,
  }));

  const getScoreColor = (score) => {
    if (score >= 80) return "#3B6D11";
    if (score >= 60) return "#B26B00";
    return "#C41E3A";
  };

  const getBarColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "20px sm:28px" }}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px", margin: 0 }}>
          Company Readiness
        </h2>
        <span style={{ fontSize: "24px" }}>🏢</span>
      </div>

      <div className="space-y-5">
        {companies.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2 flex-wrap gap-2">
              <span style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>
                {item.company}
              </span>
              <span style={{ color: getScoreColor(item.score), fontSize: "14px", fontWeight: 500 }}>
                {item.score}%
              </span>
            </div>

            <div style={{ width: "100%", background: "#f0f0ed", borderRadius: "20px", height: "8px", overflow: "hidden" }}>
              <div
                className={getBarColor(item.score)}
                style={{
                  width: `${item.score}%`,
                  height: "8px",
                  borderRadius: "20px",
                  transition: "width 0.7s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mt-6 pt-2">
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#3B6D11" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>High (80%+)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#B26B00" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>Medium (60-79%)</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#C41E3A" }} />
          <span style={{ fontSize: "12px", color: "#888" }}>Low (below 60%)</span>
        </div>
      </div>
    </div>
  );
}

export default ModelComparison;