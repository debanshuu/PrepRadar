import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

function SkillRadarChart({ result }) {
  if (!result?.dim_scores) return null;

  const data = [
    {
      subject: "CGPA",
      value: result.dim_scores.cgpa,
    },
    {
      subject: "DSA",
      value: result.dim_scores.dsa_score,
    },
    {
      subject: "Projects",
      value: result.dim_scores.projects,
    },
    {
      subject: "Internships",
      value: result.dim_scores.internships,
    },
    {
      subject: "Communication",
      value: result.dim_scores.communication,
    },
  ];

  return (
    <div style={{ 
      background: "#fff", 
      border: "0.5px solid #e5e5e2", 
      borderRadius: "12px", 
      padding: "24px",
      height: "100%"
    }}>
      <h2 style={{ 
        fontSize: "16px", 
        fontWeight: 500, 
        color: "#1a1a18", 
        letterSpacing: "-0.2px", 
        margin: 0,
        marginBottom: "16px"
      }}>
        Skill Distribution
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data}>
          <PolarGrid stroke="#e5e5e2" strokeWidth={0.5} />

          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#888", fontSize: 12, fontWeight: 400 }}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#bbb", fontSize: 11 }}
            axisLine={{ stroke: "#e5e5e2", strokeWidth: 0.5 }}
          />

          <Radar
            name="Skills"
            dataKey="value"
            stroke="#185FA5"
            strokeWidth={1.5}
            fill="#185FA5"
            fillOpacity={0.1}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillRadarChart;