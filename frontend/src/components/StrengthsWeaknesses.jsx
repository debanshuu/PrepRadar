import React from 'react'

function StrengthsWeaknesses({ result }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      
      {/* Strengths */}
      <div className="bg-green-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Strengths
        </h2>

        <div className="space-y-3">
          {result.strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded border-l-4 border-green-500"
            >
              ✅ {strength}
            </div>
          ))}
        </div>
      </div>

      {/* Weaknesses */}
      <div className="bg-red-50 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-red-700 mb-4">
          Weaknesses
        </h2>

        <div className="space-y-3">
          {result.weaknesses.map((weakness, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded border-l-4 border-red-500"
            >
              ⚠️ {weakness}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


export default StrengthsWeaknesses
