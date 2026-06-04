import React from 'react'

function Roadmap({ result }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Improvement Roadmap
      </h2>

      <div className="space-y-4">
        {result.roadmap.map((step, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-4 py-2"
          >
            <h3 className="text-lg font-semibold">
              {index + 1}. {step.title}
            </h3>

            <p className="text-gray-600 mt-1">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap
