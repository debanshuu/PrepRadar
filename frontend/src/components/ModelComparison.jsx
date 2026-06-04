import React from 'react'

function ModelComparison({ result }) {

  if (!result?.company_readiness) return null;

  const companies = Object.entries(
    result.company_readiness
  ).map(([company, score]) => ({
    company,
    score,
  }));

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-6">
        Company Readiness
      </h2>

      <div className="space-y-4">
        {companies.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-2">
              <span className="text-zinc-300 font-medium">
                {item.company}
              </span>

              <span className="text-white font-semibold">
                {item.score}%
              </span>
            </div>

            <div className="w-full bg-zinc-700 rounded-full h-3">
              <div
                className={`h-3 rounded-full ${
                  item.score >= 80
                    ? "bg-green-500"
                    : item.score >= 60
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                style={{
                  width: `${item.score}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelComparison;
