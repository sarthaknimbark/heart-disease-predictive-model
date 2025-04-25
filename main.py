from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import joblib
import numpy as np
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)

model = joblib.load("heart_disease_model.pkl")

class HeartDiseaseInput(BaseModel):
    age: int
    sex: int
    chest_pain: int
    resting_bp: int
    cholesterol: int
    fasting_blood_sugar: int
    rest_ecg: int
    max_heart_rate: int
    exercise_angina: int
    oldpeak: float
    slope: int
    num_vessels: int
    thalassemia: int

@app.post("/predict/")  
async def predict_heart_disease(input_data: HeartDiseaseInput):
    try:
        # Convert input to numpy array
        input_array = np.array([[input_data.age, input_data.sex, input_data.chest_pain,
                                 input_data.resting_bp, input_data.cholesterol, input_data.fasting_blood_sugar,
                                 input_data.rest_ecg, input_data.max_heart_rate, input_data.exercise_angina,
                                 input_data.oldpeak, input_data.slope, input_data.num_vessels,
                                 input_data.thalassemia]])


        prediction = model.predict(input_array)

        return {"prediction": int(prediction[0])}
    except Exception as e:
        return {"error": str(e)}
