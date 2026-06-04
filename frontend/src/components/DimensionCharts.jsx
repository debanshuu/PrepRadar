import React from 'react'

function DimensionCharts({ result }) {
  const scores = [
    { name: "CGPA", value: result.dim_scores.cgpa },
    { name: "DSA", value: result.dim_scores.dsa_score },
    { name: "Projects", value: result.dim_scores.projects },
    { name: "Internships", value: result.dim_scores.internships },
    { name: "Communication", value: result.dim_scores.communication },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Skill Analysis
      </h2>

      <div className="space-y-4">
        {scores.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span>{item.name}</span>
              <span>{item.value}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: `${item.value}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DimensionCharts
