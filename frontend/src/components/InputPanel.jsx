import { useState } from "react";
import axios from "axios";

function InputPanel({ setResult }) {
  const [loading, setLoading] = useState(false);
  const [waking, setWaking] = useState(false);

  const [formData, setFormData] = useState({
    cgpa: 7.0,
    dsa_score: 50,
    projects: 2,
    internships: 1,
    communication: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // Show waking message after 2s if still loading (Render cold start)
      const wakingTimer = setTimeout(() => setWaking(true), 2000);

      const response = await axios.post(
        import.meta.env.production.VITE_API_URL + "/predict",
        formData
      );

      clearTimeout(wakingTimer);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.log(error.response.data);
      }
      alert("Backend connection failed. Please try again.");
    } finally {
      setLoading(false);
      setWaking(false);
    }
  };

  return (
    <div style={{ background: "#fff", border: "0.5px solid #e5e5e2", borderRadius: "12px", padding: "24px" }}>
      <h2 style={{ fontSize: "20px", fontWeight: 500, color: "#1a1a18", letterSpacing: "-0.3px", marginBottom: "24px" }}>
        Student Profile
      </h2>

      <style>{`
        .range-input {
          width: 100%;
          height: 5px;
          border-radius: 5px;
          background: #f0f0ed;
          -webkit-appearance: none;
          cursor: pointer;
        }
        .range-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #1a1a18;
          cursor: pointer;
        }
        .range-input::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #1a1a18;
          cursor: pointer;
          border: none;
        }
      `}</style>

      {/* CGPA */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>CGPA</label>
          <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>{formData.cgpa.toFixed(1)}</span>
        </div>
        <input type="range" name="cgpa" min="5" max="10" step="0.1"
          value={formData.cgpa} onChange={handleChange} className="range-input" />
      </div>

      {/* DSA Score */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>DSA Score</label>
          <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>{formData.dsa_score}</span>
        </div>
        <input type="range" name="dsa_score" min="0" max="100"
          value={formData.dsa_score} onChange={handleChange} className="range-input" />
      </div>

      {/* Projects */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>Projects</label>
          <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>{formData.projects}</span>
        </div>
        <input type="range" name="projects" min="0" max="5"
          value={formData.projects} onChange={handleChange} className="range-input" />
      </div>

      {/* Internships */}
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <label style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>Internships</label>
          <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>{formData.internships}</span>
        </div>
        <input type="range" name="internships" min="0" max="3"
          value={formData.internships} onChange={handleChange} className="range-input" />
      </div>

      {/* Communication */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label style={{ color: "#666", fontSize: "14px", fontWeight: 500 }}>Communication</label>
          <span style={{ color: "#1a1a18", fontSize: "14px", fontWeight: 500 }}>{formData.communication}/10</span>
        </div>
        <input type="range" name="communication" min="1" max="10"
          value={formData.communication} onChange={handleChange} className="range-input" />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          width: "100%",
          padding: "12px 0",
          borderRadius: "8px",
          fontWeight: 500,
          fontSize: "14px",
          backgroundColor: "#1a1a18",
          color: "#fff",
          border: "none",
          cursor: loading ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          opacity: loading ? 0.6 : 1,
        }}
        onMouseEnter={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#333"; }}
        onMouseLeave={(e) => { if (!loading) e.currentTarget.style.backgroundColor = "#1a1a18"; }}
      >
        {loading ? "Analyzing..." : "Analyze Placement Readiness"}
      </button>

      {/* Render cold start message */}
      {waking && (
        <p style={{ textAlign: "center", fontSize: "12px", color: "#aaa", marginTop: "10px", fontWeight: 300 }}>
          Waking up server, this may take a few seconds...
        </p>
      )}
    </div>
  );
}

export default InputPanel;