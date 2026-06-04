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
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl h-full">
      <h2 className="text-xl font-bold text-white mb-4">
        Skill Distribution
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={data}>
          <PolarGrid stroke="#525252" />

          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: "#d4d4d4", fontSize: 12 }}
          />

          <PolarRadiusAxis
            angle={30}
            domain={[0, 100]}
            tick={{ fill: "#737373", fontSize: 10 }}
          />

          <Radar
            name="Skills"
            dataKey="value"
            stroke="#8b5cf6"
            fill="#8b5cf6"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SkillRadarChart;