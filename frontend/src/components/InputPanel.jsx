import { useState } from "react";
import axios from "axios";

function InputPanel({ setResult }) {
  const [formData, setFormData] = useState({
    cgpa: 7.0,
    dsa: 50,
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
      const response = await axios.post(
        "http://localhost:8000/predict",
        formData
      );

      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        Student Profile
      </h2>

      {/* CGPA */}
      <div className="mb-5">
        <label className="font-medium">
          CGPA: {formData.cgpa.toFixed(1)}
        </label>
        <input
          type="range"
          name="cgpa"
          min="5"
          max="10"
          step="0.1"
          value={formData.cgpa}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* DSA */}
      <div className="mb-5">
        <label className="font-medium">
          DSA Score: {formData.dsa}
        </label>
        <input
          type="range"
          name="dsa"
          min="0"
          max="100"
          value={formData.dsa}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* Projects */}
      <div className="mb-5">
        <label className="font-medium">
          Projects: {formData.projects}
        </label>
        <input
          type="range"
          name="projects"
          min="0"
          max="5"
          value={formData.projects}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* Internships */}
      <div className="mb-5">
        <label className="font-medium">
          Internships: {formData.internships}
        </label>
        <input
          type="range"
          name="internships"
          min="0"
          max="4"
          value={formData.internships}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      {/* Communication */}
      <div className="mb-6">
        <label className="font-medium">
          Communication: {formData.communication}
        </label>
        <input
          type="range"
          name="communication"
          min="0"
          max="10"
          value={formData.communication}
          onChange={handleChange}
          className="w-full"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
      >
        Analyze Placement Readiness
      </button>
    </div>
  );
}

export default InputPanel;