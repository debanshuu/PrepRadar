import React from "react";

function ReadinessOutput({ result }) {
  const getTierColor = () => {
    switch (result.tier) {
      case "Top Tier":
        return "bg-green-500/20 text-green-400";
      case "Mid Tier":
        return "bg-yellow-500/20 text-yellow-400";
      case "Entry Tier":
        return "bg-orange-500/20 text-orange-400";
      default:
        return "bg-red-500/20 text-red-400";
    }
  };

  const getProgressColor = () => {
    if (result.score >= 75) return "bg-green-500";
    if (result.score >= 55) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white">
          Placement Readiness Score
        </h2>

        <div className="text-5xl">
          🎯
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side */}
        <div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {result.score}%
          </h1>

          <div className="mt-4">
            <span
              className={`px-4 py-2 rounded-full text-sm font-semibold ${getTierColor()}`}
            >
              {result.tier}
            </span>
          </div>

          <p className="text-zinc-400 mt-4">
            Expected Package
          </p>

          <p className="text-xl font-semibold text-green-400">
            {result.salary_hint}
          </p>
        </div>

        {/* Right Side */}
        <div>
          <div className="flex justify-between mb-2">
            <span className="text-zinc-400">
              Placement Readiness
            </span>

            <span className="text-white font-semibold">
              {result.score}%
            </span>
          </div>

          <div className="w-full bg-zinc-800 rounded-full h-5 overflow-hidden">
            <div
              className={`${getProgressColor()} h-5 rounded-full transition-all duration-700`}
              style={{
                width: `${result.score}%`,
              }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            
            <div className="bg-zinc-800 rounded-xl p-3 text-center">
              <p className="text-xs text-zinc-400">
                Tier
              </p>

              <p className="font-semibold text-white mt-1">
                {result.tier}
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-3 text-center">
              <p className="text-xs text-zinc-400">
                Score
              </p>

              <p className="font-semibold text-white mt-1">
                {result.score}
              </p>
            </div>

            <div className="bg-zinc-800 rounded-xl p-3 text-center">
              <p className="text-xs text-zinc-400">
                Salary
              </p>

              <p className="font-semibold text-green-400 mt-1">
                ₹
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default ReadinessOutput;