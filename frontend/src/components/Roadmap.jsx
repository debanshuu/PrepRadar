import React from "react";

function Roadmap({ result }) {
  if (!result?.roadmap || result.roadmap.length === 0) {
    return null;
  }

  const getBorderColor = (color) => {
    switch (color) {
      case "red":
        return "border-red-500";
      case "orange":
        return "border-orange-500";
      case "yellow":
        return "border-yellow-500";
      default:
        return "border-blue-500";
    }
  };

  const getBadgeColor = (color) => {
    switch (color) {
      case "red":
        return "bg-red-500/20 text-red-400";
      case "orange":
        return "bg-orange-500/20 text-orange-400";
      case "yellow":
        return "bg-yellow-500/20 text-yellow-400";
      default:
        return "bg-blue-500/20 text-blue-400";
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">
          Improvement Roadmap
        </h2>

        <span className="text-4xl">
          🚀
        </span>
      </div>

      <div className="space-y-5">
        {result.roadmap.map((step, index) => (
          <div
            key={index}
            className={`bg-zinc-800 rounded-xl p-5 border-l-4 ${getBorderColor(
              step.color
            )}`}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Step {index + 1}: {step.title}
                </h3>

                <p className="text-zinc-400 mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div>
                <span
                  className={`px-3 py-2 rounded-full text-sm font-medium ${getBadgeColor(
                    step.color
                  )}`}
                >
                  Priority
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-zinc-700 rounded-xl p-5">
        <h3 className="text-lg font-semibold text-white mb-2">
          📈 Success Tip
        </h3>

        <p className="text-zinc-300">
          Focus on completing the roadmap from top to bottom.
          Improving your weakest areas first will have the biggest
          impact on your placement readiness score and company eligibility.
        </p>
      </div>
    </div>
  );
}

export default Roadmap;