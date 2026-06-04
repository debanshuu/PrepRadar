import React from "react";

function StrengthsWeaknesses({ result }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Strengths */}
      <div className="bg-zinc-900 border border-green-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">💪</span>

          <h2 className="text-2xl font-bold text-green-400">
            Strengths
          </h2>
        </div>

        <div className="space-y-4">
          {result.strengths.length > 0 ? (
            result.strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-zinc-800 border-l-4 border-green-500 rounded-xl p-4 hover:bg-zinc-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-green-400 text-lg">
                    ✅
                  </span>

                  <span className="text-white font-medium">
                    {strength}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-zinc-800 rounded-xl p-4 text-zinc-400">
              No strengths identified yet.
            </div>
          )}
        </div>

        <div className="mt-6 bg-green-500/10 border border-green-500/20 rounded-xl p-4">
          <p className="text-green-300 text-sm">
            Keep leveraging these strengths during coding tests,
            interviews, and project discussions.
          </p>
        </div>
      </div>

      {/* Weaknesses */}
      <div className="bg-zinc-900 border border-red-500/30 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">📈</span>

          <h2 className="text-2xl font-bold text-red-400">
            Areas to Improve
          </h2>
        </div>

        <div className="space-y-4">
          {result.weaknesses.length > 0 ? (
            result.weaknesses.map((weakness, index) => (
              <div
                key={index}
                className="bg-zinc-800 border-l-4 border-red-500 rounded-xl p-4 hover:bg-zinc-700 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <span className="text-red-400 text-lg">
                    ⚠️
                  </span>

                  <span className="text-white font-medium">
                    {weakness}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-zinc-800 rounded-xl p-4 text-zinc-400">
              No weaknesses identified.
            </div>
          )}
        </div>

        <div className="mt-6 bg-red-500/10 border border-red-500/20 rounded-xl p-4">
          <p className="text-red-300 text-sm">
            Focus on these areas first to improve your placement readiness score.
          </p>
        </div>
      </div>

    </div>
  );
}

export default StrengthsWeaknesses;