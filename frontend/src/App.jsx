import { useState } from "react";
import InputPanel from "./components/InputPanel";
import ReadinessOutput from "./components/ReadinessOutput";
import DimensionCharts from "./components/DimensionCharts";
import StrengthsWeaknesses from "./components/StrengthsWeaknesses";
import ModelComparison from "./components/ModelComparison";
import SkillRadarChart from "./components/SkillRadarChart";
import Roadmap from "./components/Roadmap";
import logo from "/assets/logo.png";

function App() {
  const [result, setResult] = useState(null);

  const scrollToDashboard = () => {
    document
      .getElementById("dashboard")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={logo}
              alt="PrepRadar Logo"
              className="w-14 h-14 object-contain"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  PrepRadar
                </h1>
                <span className="px-2 py-1 text-[10px] font-semibold bg-blue-500/20 text-blue-400 rounded-full">
                  AI Powered
                </span>
              </div>
              <p className="text-xs text-zinc-400">
                Placement Readiness Analyzer
              </p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#dashboard" className="text-zinc-400 hover:text-white">
              Dashboard
            </a>
            <a href="#features" className="text-zinc-400 hover:text-white">
              Features
            </a>
            <a href="#roadmap" className="text-zinc-400 hover:text-white">
              Roadmap
            </a>
          </nav>

          <button
            onClick={scrollToDashboard}
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold"
          >
            Analyze Now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-sm">
              AI-Powered Placement Intelligence
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold max-w-5xl mx-auto leading-tight">
            AI-Powered Placement
            <span className="text-blue-400">
              {" "}Readiness Analyzer
            </span>
          </h1>

          <p className="text-zinc-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto">
            Evaluate your skills, compare yourself with industry requirements,
            and get a personalized roadmap to become placement-ready.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <button
              onClick={scrollToDashboard}
              className="px-8 py-4 bg-blue-600 rounded-xl font-semibold hover:bg-blue-700"
            >
              Analyze Now →
            </button>

            <button className="px-8 py-4 border border-zinc-700 rounded-xl text-zinc-300 hover:bg-zinc-900">
              Learn More
            </button>
          </div>

          <div id="features" className="mt-12 flex justify-center gap-3 flex-wrap">
            {[
              "AI Readiness Score",
              "Skill Analysis",
              "Company Matching",
              "Personalized Roadmap",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mt-14">
            {[
              ["8+", "Companies Tracked", "text-blue-400"],
              ["95%", "Model Accuracy", "text-green-400"],
              ["5", "Skill Dimensions", "text-purple-400"],
              ["AI", "Powered Analysis", "text-yellow-400"],
            ].map(([value, label, color]) => (
              <div
                key={label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
              >
                <p className={`text-3xl font-bold ${color}`}>
                  {value}
                </p>
                <p className="text-zinc-400 text-sm mt-1">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <main id="dashboard" className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <InputPanel setResult={setResult} />
              {result && <SkillRadarChart result={result} />}
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            {result ? (
              <div className="space-y-6">
                <ReadinessOutput result={result} />
                <DimensionCharts result={result} />
                <StrengthsWeaknesses result={result} />
                <ModelComparison result={result} />
              </div>
            ) : (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-16 text-center">
                <div className="text-6xl mb-6">🎯</div>
                <h2 className="text-3xl font-bold mb-4">Ready to Analyze?</h2>
                <p className="text-zinc-400">
                  Fill in your profile details and let AI evaluate your placement readiness.
                </p>
              </div>
            )}
          </div>
        </div>

        {result && (
          <div id="roadmap" className="mt-6">
            <Roadmap result={result} />
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-800 mt-20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-zinc-500 text-sm">
          <p>© 2026 PrepRadar. AI-Powered Placement Readiness Analyzer.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;