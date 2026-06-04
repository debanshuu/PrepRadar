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
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Skill Analysis
        </h2>

        <span className="text-4xl">
          📊
        </span>
      </div>

      <div className="space-y-5">
        {scores.map((item, index) => (
          <div key={index}>
            
            <div className="flex justify-between mb-2">
              <span className="text-zinc-300 font-medium">
                {item.name}
              </span>

              <span className="text-white font-semibold">
                {item.value}%
              </span>
            </div>

            <div className="w-full bg-zinc-800 rounded-full h-4 overflow-hidden">
              <div
                className={`${getBarColor(
                  item.value
                )} h-4 rounded-full transition-all duration-700`}
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>

          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8">
        
        <div className="bg-zinc-800 rounded-xl p-4 text-center">
          <p className="text-zinc-400 text-sm">
            Strong
          </p>

          <p className="text-green-400 font-semibold mt-1">
            75%+
          </p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4 text-center">
          <p className="text-zinc-400 text-sm">
            Average
          </p>

          <p className="text-yellow-400 font-semibold mt-1">
            55-74%
          </p>
        </div>

        <div className="bg-zinc-800 rounded-xl p-4 text-center">
          <p className="text-zinc-400 text-sm">
            Needs Work
          </p>

          <p className="text-red-400 font-semibold mt-1">
            Below 55%
          </p>
        </div>

      </div>
    </div>
  );
}

export default DimensionCharts;