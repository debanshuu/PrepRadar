import json
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from predict import predict

app = FastAPI(title="PrepRadar API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class StudentInput(BaseModel):
    cgpa: float = Field(..., ge=5.0, le=10.0)
    dsa_score: int = Field(..., ge=0, le=100)
    projects: int = Field(..., ge=0, le=5)
    internships: int = Field(..., ge=0, le=3)
    communication: int = Field(..., ge=1, le=10)

@app.post("/predict")
def predict_endpoint(data: StudentInput):
    try:
        result = predict(
            cgpa=data.cgpa,
            dsa_score=data.dsa_score,
            projects=data.projects,
            internships=data.internships,
            communication=data.communication,
        )
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/model-comparison")
def model_comparison():
    try:
        with open("comparison_results.json") as f:
            return json.load(f)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Run train.py first.")

@app.api_route("/", methods=["GET", "HEAD"])
def root():
    return {"status": "ok", "message": "PrepRadar API is running"}
