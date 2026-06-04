# PrepRadar
### AI-Powered Placement Readiness Analyzer

A full-stack web application that evaluates your placement readiness across 5 dimensions and gives you a personalized improvement roadmap — powered by a machine learning salary predictor.

**Live Demo:** [coming soon]

---

## What it does

Enter your academic and skill details and get an instant placement analysis:

- **Readiness Score** — weighted score across 5 dimensions
- **Tier Classification** — Top / Mid / Entry / Not Ready
- **Skill Analysis** — normalized breakdown of each dimension
- **Strengths & Weaknesses** — auto-identified from your profile
- **Company Readiness** — how ready you are for TCS, Infosys, Amazon and more
- **Improvement Roadmap** — personalized action items sorted by priority
- **Salary Estimate** — ML-predicted package range based on your profile
- **Model Comparison** — compare Linear Regression, Random Forest, and XGBoost

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, Chart.js |
| Backend | Python, FastAPI |
| ML | scikit-learn, XGBoost, joblib |
| Data | Synthetic placement dataset (2,000 records) |
| Deployment | Vercel (frontend), Render (backend) |

---

## REST API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | /predict | Get placement readiness analysis |
| GET | /model-comparison | Get ML model comparison results |
| GET | / | Health check |

### POST /predict — Request Body

```json
{
  "cgpa": 7.5,
  "dsa_score": 60,
  "projects": 2,
  "internships": 1,
  "communication": 7
}
```

---

## Run Locally

**Backend:**
```bash
cd backend
pip install -r requirements.txt
python generate_data.py
python train.py
uvicorn api:app --reload
```

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```

---

Made by **Debanshu Brahma** & **Aditya Beura**
