import { useState } from "react";
import axios from "axios";

function InputPanel({ setResult }) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    cgpa: 7.0,
    dsa_score: 50,
    projects: 2,
    internships: 1,
    communication: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/predict`,
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Backend connection failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl">
      <h2 className="text-2xl font-bold text-white mb-6">
        Student Profile
      </h2>

      {/* CGPA */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <label className="text-zinc-300 font-medium">
            CGPA
          </label>

          <span className="text-blue-400 font-semibold">
            {formData.cgpa.toFixed(1)}
          </span>
        </div>

        <input
          type="range"
          name="cgpa"
          min="5"
          max="10"
          step="0.1"
          value={formData.cgpa}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      {/* DSA Score */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <label className="text-zinc-300 font-medium">
            DSA Score
          </label>

          <span className="text-blue-400 font-semibold">
            {formData.dsa_score}
          </span>
        </div>

        <input
          type="range"
          name="dsa_score"
          min="0"
          max="100"
          value={formData.dsa_score}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Projects */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <label className="text-zinc-300 font-medium">
            Projects
          </label>

          <span className="text-blue-400 font-semibold">
            {formData.projects}
          </span>
        </div>

        <input
          type="range"
          name="projects"
          min="0"
          max="5"
          value={formData.projects}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Internships */}
      <div className="mb-5">
        <div className="flex justify-between mb-2">
          <label className="text-zinc-300 font-medium">
            Internships
          </label>

          <span className="text-blue-400 font-semibold">
            {formData.internships}
          </span>
        </div>

        <input
          type="range"
          name="internships"
          min="0"
          max="3"
          value={formData.internships}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Communication */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <label className="text-zinc-300 font-medium">
            Communication
          </label>

          <span className="text-blue-400 font-semibold">
            {formData.communication}/10
          </span>
        </div>

        <input
          type="range"
          name="communication"
          min="1"
          max="10"
          value={formData.communication}
          onChange={handleChange}
          className="w-full cursor-pointer"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3 rounded-xl font-semibold text-white
                   bg-gradient-to-r from-blue-600 to-purple-600
                   hover:scale-[1.02]
                   transition-all duration-300
                   disabled:opacity-50"
      >
        {loading
          ? "Analyzing..."
          : "Analyze Placement Readiness"}
      </button>
    </div>
  );
}

export default InputPanel;