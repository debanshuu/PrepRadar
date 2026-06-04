import React from 'react'

function ModelComparison() {
  const companies = [
    { company: "TCS", score: 92 },
    { company: "Infosys", score: 88 },
    { company: "Wipro", score: 85 },
    { company: "Accenture", score: 82 },
    { company: "Cognizant", score: 80 },
    { company: "Capgemini", score: 78 },
    { company: "Amazon", score: 65 },
    { company: "Microsoft", score: 55 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">
        Company Readiness
      </h2>

      <div className="space-y-4">
        {companies.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">
                {item.company}
              </span>
              <span>{item.score}%</span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${item.score}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModelComparison
