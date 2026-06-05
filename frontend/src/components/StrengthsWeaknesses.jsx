import React from "react";

function StrengthsWeaknesses({ result }) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      
      {/* Strengths */}
      <div style={{ 
        background: "#fff", 
        border: "0.5px solid #e5e5e2", 
        borderRadius: "12px", 
        padding: "24px"
      }}>
        <div className="flex items-center gap-3 mb-5">
          <span style={{ fontSize: "24px" }}>💪</span>
          <h2 style={{ 
            fontSize: "18px", 
            fontWeight: 500, 
            color: "#3B6D11", 
            letterSpacing: "-0.3px", 
            margin: 0 
          }}>
            Strengths
          </h2>
        </div>

        <div className="space-y-3">
          {result.strengths.length > 0 ? (
            result.strengths.map((strength, index) => (
              <div
                key={index}
                style={{
                  background: "#fafaf9",
                  borderLeft: "3px solid #3B6D11",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f5f5f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fafaf9";
                }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: "#3B6D11", fontSize: "16px" }}>
                    ✓
                  </span>
                  <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>
                    {strength}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ background: "#fafaf9", borderRadius: "8px", padding: "14px 18px", color: "#aaa", fontSize: "14px" }}>
              No strengths identified yet.
            </div>
          )}
        </div>

        <div style={{
          marginTop: "20px",
          background: "#EBF5E8",
          border: "0.5px solid #D4E8CD",
          borderRadius: "8px",
          padding: "14px 18px"
        }}>
          <p style={{ color: "#3B6D11", fontSize: "12px", fontWeight: 300, margin: 0, lineHeight: "1.5" }}>
            Keep leveraging these strengths during coding tests, interviews, and project discussions.
          </p>
        </div>
      </div>

      {/* Weaknesses */}
      <div style={{ 
        background: "#fff", 
        border: "0.5px solid #e5e5e2", 
        borderRadius: "12px", 
        padding: "24px"
      }}>
        <div className="flex items-center gap-3 mb-5">
          <span style={{ fontSize: "24px" }}>📈</span>
          <h2 style={{ 
            fontSize: "18px", 
            fontWeight: 500, 
            color: "#C41E3A", 
            letterSpacing: "-0.3px", 
            margin: 0 
          }}>
            Areas to Improve
          </h2>
        </div>

        <div className="space-y-3">
          {result.weaknesses.length > 0 ? (
            result.weaknesses.map((weakness, index) => (
              <div
                key={index}
                style={{
                  background: "#fafaf9",
                  borderLeft: "3px solid #C41E3A",
                  borderRadius: "8px",
                  padding: "14px 18px",
                  transition: "all 0.2s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f5f5f2";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#fafaf9";
                }}
              >
                <div className="flex items-center gap-2">
                  <span style={{ color: "#C41E3A", fontSize: "16px" }}>
                    !
                  </span>
                  <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>
                    {weakness}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div style={{ background: "#fafaf9", borderRadius: "8px", padding: "14px 18px", color: "#aaa", fontSize: "14px" }}>
              No weaknesses identified.
            </div>
          )}
        </div>

        <div style={{
          marginTop: "20px",
          background: "#FEE8E8",
          border: "0.5px solid #F5D0D0",
          borderRadius: "8px",
          padding: "14px 18px"
        }}>
          <p style={{ color: "#C41E3A", fontSize: "12px", fontWeight: 300, margin: 0, lineHeight: "1.5" }}>
            Focus on these areas first to improve your placement readiness score.
          </p>
        </div>
      </div>

    </div>
  );
}

export default StrengthsWeaknesses;