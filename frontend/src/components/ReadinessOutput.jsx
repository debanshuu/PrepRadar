import React from 'react'

function ReadinessOutput({ result }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Placement Readiness Score
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold text-blue-600">
            {result.score}%
          </h1>

          <p className="text-xl mt-2 font-medium">
            {result.tier}
          </p>

          <p className="text-gray-600 mt-1">
            Expected Package: {result.salary_hint}
          </p>
        </div>

        <div className="text-6xl">
          🎯
        </div>
      </div>
    </div>
  );
}

export default ReadinessOutput
