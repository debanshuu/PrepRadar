import React from "react";

function Roadmap({ result }) {
  if (!result?.roadmap || result.roadmap.length === 0) {
    return null;
  }

  const getBorderColor = (color) => {
    switch (color) {
      case "red":
        return "#C41E3A";
      case "orange":
        return "#CC6B2C";
      case "yellow":
        return "#B26B00";
      default:
        return "#185FA5";
    }
  };

  const getBadgeStyle = (color) => {
    switch (color) {
      case "red":
        return { background: "#FEE8E8", color: "#C41E3A", border: "0.5px solid #F5D0D0" };
      case "orange":
        return { background: "#FFF3E8", color: "#CC6B2C", border: "0.5px solid #F5E0CC" };
      case "yellow":
        return { background: "#FFF8E7", color: "#B26B00", border: "0.5px solid #F5E6C8" };
      default:
        return { background: "#EBF0FA", color: "#185FA5", border: "0.5px solid #D6E0F0" };
    }
  };

  return (
    <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "20px", marginTop: "24px" }}>
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px", margin: 0 }}>
          Improvement Roadmap
        </h2>
        <span style={{ fontSize: "28px" }}>🚀</span>
      </div>

      <div className="space-y-4">
        {result.roadmap.map((step, index) => (
          <div
            key={index}
            style={{
              background: "#fafaf9",
              borderRadius: "10px",
              padding: "16px 18px",
              borderLeft: `3px solid ${getBorderColor(step.color)}`,
              border: `0.5px solid #e5e5e2`,
              borderLeftWidth: "3px",
              borderLeftColor: getBorderColor(step.color)
            }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="flex-1">
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1a1a18", marginBottom: "8px" }}>
                  Step {index + 1}: {step.title}
                </h3>
                <p style={{ color: "#888", fontSize: "14px", fontWeight: 300, lineHeight: "1.55", margin: 0 }}>
                  {step.desc}
                </p>
              </div>

              <div className="flex-shrink-0">
                <span
                  style={{
                    display: "inline-block",
                    padding: "5px 14px",
                    borderRadius: "20px",
                    fontSize: "12px",
                    fontWeight: 500,
                    ...getBadgeStyle(step.color)
                  }}
                >
                  Priority
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: "24px",
        background: "#FAF9F5",
        border: "0.5px solid #e5e5e2",
        borderRadius: "10px",
        padding: "16px 18px"
      }}>
        <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#1a1a18", marginBottom: "8px" }}>
          📈 Success Tip
        </h3>
        <p style={{ color: "#888", fontSize: "13px", fontWeight: 300, lineHeight: "1.55", margin: 0 }}>
          Focus on completing the roadmap from top to bottom.
          Improving your weakest areas first will have the biggest
          impact on your placement readiness score and company eligibility.
        </p>
      </div>
    </div>
  );
}

export default Roadmap;