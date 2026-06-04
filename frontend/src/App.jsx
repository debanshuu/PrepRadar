import { useState } from "react";
import InputPanel from "./components/InputPanel";
import ReadinessOutput from "./components/ReadinessOutput";
import DimensionCharts from "./components/DimensionCharts";
import StrengthsWeaknesses from "./components/StrengthsWeaknesses";
import ModelComparison from "./components/ModelComparison";
import Roadmap from "./components/Roadmap";
import logo from "/assets/logo.png";

function App() {
  const [result, setResult] = useState(null);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="bg-black py-4 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-4">
     <img
      src={logo}
      alt="PrepRadar Logo"
      className="w-16 h-16 object-contain"
     />

    <div>
      <h1 className="text-3xl font-bold text-white">
        PrepRadar
      </h1>

      <p className="text-gray-400">
        AI Placement Readiness Analyzer
      </p>
    </div>
  </div>
</header>
  <div className="mt-12 text-center px-6">
      <h4 className="text-xs font-semibold text-blue-400 text-center">
        Track Your Journey to Placement Success
      </h4>
      <h1 className="text-7xl font-bold text-white text-center  mx-auto max-w-2xl">
        AI-Powered, Placement Readiness Analyzer
      </h1>
      <p className="text-gray-400 text-center mt-4 text-2xl mx-auto max-w-2xl">
        Evaluate your skills, compare yourself with industry requirements, and get a personalized roadmap to become placement-ready.
      </p>
      <button className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition">
        Get Started
      </button>
  </div>

      <div className="max-w-7xl mt-12 mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Input Section */}
          <div className="col-span-12 lg:col-span-3">
            <InputPanel setResult={setResult} />
          </div>

          {/* Dashboard */}
          <div className="col-span-12 lg:col-span-9">
            {result ? (
              <div className="space-y-6">
                <ReadinessOutput result={result} />
                <DimensionCharts result={result} />
                <StrengthsWeaknesses result={result} />
                <ModelComparison />
              </div>
            ) : (
              <div className="bg-white p-10 rounded-lg shadow text-center">
                <h2 className="text-2xl font-semibold text-gray-600">
                  Fill the form and click Analyze
                </h2>
              </div>
            )}
          </div>
        </div>

        {result && (
          <div className="mt-6">
            <Roadmap result={result} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;