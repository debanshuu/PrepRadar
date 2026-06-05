import React from "react";

function DimensionCharts({ result }) {
  const scores = [
    {
      name: "CGPA",
      value: result.dim_scores.cgpa,
    },
    {
      name: "DSA",
      value: result.dim_scores.dsa_score,
    },
    {
      name: "Projects",
      value: result.dim_scores.projects,
    },
    {
      name: "Internships",
      value: result.dim_scores.internships,
    },
    {
      name: "Communication",
      value: result.dim_scores.communication,
    },
  ];

  const getBarColor = (score) => {
    if (score >= 75) return "bg-green-500";
    if (score >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "28px" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px", margin: 0 }}>
          Skill Analysis
        </h2>
        <span style={{ fontSize: "28px" }}>📊</span>
      </div>

      <div className="space-y-5">
        {scores.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>
                {item.name}
              </span>
              <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>
                {item.value}%
              </span>
            </div>

            <div style={{ width: "100%", background: "#f0f0ed", borderRadius: "20px", height: "8px", overflow: "hidden" }}>
              <div
                className={getBarColor(item.value)}
                style={{
                  width: `${item.value}%`,
                  height: "8px",
                  borderRadius: "20px",
                  transition: "width 0.7s ease",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 mt-8">
        <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "12px", fontWeight: 300, marginBottom: "4px" }}>
            Strong
          </p>
          <p style={{ color: "#3B6D11", fontWeight: 500, fontSize: "15px", margin: 0 }}>
            75%+
          </p>
        </div>

        <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "12px", fontWeight: 300, marginBottom: "4px" }}>
            Average
          </p>
          <p style={{ color: "#B26B00", fontWeight: 500, fontSize: "15px", margin: 0 }}>
            55-74%
          </p>
        </div>

        <div style={{ background: "#fafaf9", border: "0.5px solid #e5e5e2", borderRadius: "8px", padding: "12px", textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "12px", fontWeight: 300, marginBottom: "4px" }}>
            Needs Work
          </p>
          <p style={{ color: "#C41E3A", fontWeight: 500, fontSize: "15px", margin: 0 }}>
            Below 55%
          </p>
        </div>
      </div>
    </div>
  );
}

export default DimensionCharts;