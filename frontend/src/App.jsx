import { useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material"; // Material UI components
import "./App.css"; // Import external CSS file

function App() {
  const [formData, setFormData] = useState({
    Age: "",
    sex: "",
    chest_pain: "",
    resting_bp: "",
    cholesterol: "",
    fasting_blood_sugar: "",
    rest_ecg: "",
    max_heart_rate: "",
    exercise_angina: "",
    oldpeak: "",
    slope: "",
    num_vessels: "",
    thalassemia: "",
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputData = {
      age: Number(formData.Age),
      sex: Number(formData.sex),
      chest_pain: Number(formData.chest_pain),
      resting_bp: Number(formData.resting_bp),
      cholesterol: Number(formData.cholesterol),
      fasting_blood_sugar: Number(formData.fasting_blood_sugar),
      rest_ecg: Number(formData.rest_ecg),
      max_heart_rate: Number(formData.max_heart_rate),
      exercise_angina: Number(formData.exercise_angina),
      oldpeak: parseFloat(formData.oldpeak),
      slope: Number(formData.slope),
      num_vessels: Number(formData.num_vessels),
      thalassemia: Number(formData.thalassemia),
    };

    try {
      const res = await axios.post("http://127.0.0.1:8000/predict/", inputData, {
        headers: { "Content-Type": "application/json" },
      });
      setPrediction(res.data.prediction);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="relative min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
    >
      {/* Header Section */}
      <header className="bg-opacity-7  text-white py-6">
        <div className="container mx-auto text-center">
          <Typography variant="h4" className="font-semibold">
            Heart Disease Prediction
          </Typography>
        </div>
      </header>

      <div className="container mx-auto p-8 max-w-4xl bg-white bg-opacity-90 rounded-lg mt-8 shadow-lg">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label htmlFor="Age" className="text-sm font-medium text-gray-700 mb-2">
                Age
              </label>
              <input
                id="Age"
                type="number"
                name="Age"
                value={formData.Age}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="sex" className="text-sm font-medium text-gray-700 mb-2">
                Sex (0 for Female, 1 for Male)
              </label>
              <input
                id="sex"
                type="number"
                name="sex"
                value={formData.sex}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="chest_pain" className="text-sm font-medium text-gray-700 mb-2">
                Chest Pain (0 - Typical Angina, 1 - Atypical Angina, 2 - Non-anginal Pain, 3 - Asymptomatic)
              </label>
              <input
                id="chest_pain"
                type="number"
                name="chest_pain"
                value={formData.chest_pain}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="resting_bp" className="text-sm font-medium text-gray-700 mb-2">
                Resting Blood Pressure
              </label>
              <input
                id="resting_bp"
                type="number"
                name="resting_bp"
                value={formData.resting_bp}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            
          </div>

          {/* Column 2 */}
          <div className="flex flex-col space-y-4">

          <div className="flex flex-col">
              <label htmlFor="cholesterol" className="text-sm font-medium text-gray-700 mb-2">
                Cholesterol
              </label>
              <input
                id="cholesterol"
                type="number"
                name="cholesterol"
                value={formData.cholesterol}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="fasting_blood_sugar" className="text-sm font-medium text-gray-700 mb-2">
                  Fasting Blood Sugar (1 for {">"} 120 mg/dl)
              </label>

              <input
                id="fasting_blood_sugar"
                type="number"
                name="fasting_blood_sugar"
                value={formData.fasting_blood_sugar}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="rest_ecg" className="text-sm font-medium text-gray-700 mb-2">
                Resting Electrocardiographic Results
              </label>
              <input
                id="rest_ecg"
                type="number"
                name="rest_ecg"
                value={formData.rest_ecg}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="max_heart_rate" className="text-sm font-medium text-gray-700 mb-2">
                Max Heart Rate
              </label>
              <input
                id="max_heart_rate"
                type="number"
                name="max_heart_rate"
                value={formData.max_heart_rate}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="exercise_angina" className="text-sm font-medium text-gray-700 mb-2">
                Exercise Angina (1 for Yes, 0 for No)
              </label>
              <input
                id="exercise_angina"
                type="number"
                name="exercise_angina"
                value={formData.exercise_angina}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            
          </div>

          {/* Column 3 */}
          <div className="flex flex-col space-y-4">

          <div className="flex flex-col">
              <label htmlFor="oldpeak" className="text-sm font-medium text-gray-700 mb-2">
                Old Peak (Depression Induced by Exercise Relative to Rest)
              </label>
              <input
                id="oldpeak"
                type="number"
                name="oldpeak"
                value={formData.oldpeak}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="slope" className="text-sm font-medium text-gray-700 mb-2">
                Slope of the Peak Exercise ST Segment
              </label>
              <input
                id="slope"
                type="number"
                name="slope"
                value={formData.slope}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="num_vessels" className="text-sm font-medium text-gray-700 mb-2">
                Number of Major Vessels Colored by Fluoroscopy
              </label>
              <input
                id="num_vessels"
                type="number"
                name="num_vessels"
                value={formData.num_vessels}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="thalassemia" className="text-sm font-medium text-gray-700 mb-2">
                Thalassemia (3 = Normal, 6 = Fixed Defect, 7 = Reversible Defect)
              </label>
              <input
                id="thalassemia"
                type="number"
                name="thalassemia"
                value={formData.thalassemia}
                onChange={handleChange}
                required
                className="p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          <div className="col-span-3 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="mt-4 w-full md:w-1/3 transform transition-all hover:scale-105 duration-300"
            >
              Predict
            </Button>
          </div>
        </form>

        {prediction !== null && (
          <Typography variant="h5" className="mt-6 text-center">
            Prediction: 
            <span className={`font-bold text-lg ${prediction === 1 ? "text-red-600" : "text-green-600"}`}>
              {prediction === 1 ? " High Risk-Might have heart disease" : " Low Risk-No heart disease"}
            </span>
          </Typography>
        )}
      </div>

      {/* Footer Section */}
      <footer className=" text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <Typography variant="body2"> &copy; 2025 Heart Disease Prediction. All rights reserved. | Developed by Sarthak</Typography>
        </div>
      </footer>
    </div>
  );
}

export default App;
