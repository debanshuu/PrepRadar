import joblib
import numpy as np
import pandas as pd

model = joblib.load("best_model.pkl")

FEATURES = ["cgpa", "dsa_score", "projects", "internships", "communication"]

WEIGHTS = {
    "dsa_score": 0.30,
    "cgpa": 0.25,
    "projects": 0.20,
    "internships": 0.15,
    "communication": 0.10
}
COMPANY_THRESHOLDS = {
    "TCS": 60,
    "Infosys": 55,
    "Wipro": 50,
    "Accenture": 55,
    "Cognizant": 50,
    "Capgemini": 48,
    "Amazon": 75,
    "Microsoft": 80,
}

def normalise(cgpa, dsa_score, projects, internships, communication):
    return {
        "cgpa": (cgpa - 5) / 5 * 100,
        "dsa_score": dsa_score,                       
        "projects": min(projects, 5) / 5 * 100,
        "internships": min(internships, 3) / 3 * 100,
        "communication": (communication - 1) / 9 * 100 
    }

def readiness_score(norm):
    score = sum(norm[f] * WEIGHTS[f] for f in WEIGHTS)
    return round(score, 1)

def get_tier(score):
    if score >= 75: return "Top Tier"
    if score >= 55: return "Mid Tier"
    if score >= 35: return "Entry Tier"
    return "Not Ready"

def get_strengths_weaknesses(norm):
    labels = {
        "dsa_score": "DSA & Coding",
        "cgpa": "Academic Score",
        "projects": "Project Experience",
        "internships": "Internship Experience",
        "communication": "Communication Skills"
    }
    sorted_dims = sorted(norm.items(), key=lambda x: x[1], reverse=True)
    strengths  = [labels[k] for k, v in sorted_dims if v >= 60][:2]
    weaknesses = [labels[k] for k, v in sorted_dims if v < 40][:2]
    return strengths, weaknesses

ROADMAP_TIPS = {
    "dsa_score": {
        "title": "Improve DSA",
        "desc": "Solve 2 LeetCode problems daily. Focus on arrays, trees, and graphs.",
        "color": "red",
    },
    "cgpa": {
        "title": "Boost CGPA",
        "desc": "Attend all classes, target internal marks, and revise before exams.",
        "color": "orange",
    },
    "projects": {
        "title": "Build Projects",
        "desc": "Add 1–2 full-stack or ML projects to GitHub with a live demo.",
        "color": "orange",
    },
    "internships": {
        "title": "Get an Internship",
        "desc":  "Apply on Internshala and LinkedIn. Even a 1-month internship helps.",
        "color": "yellow",
    },
    "communication": {
        "title": "Communication Skills",
        "desc":  "Practice mock interviews and group discussions weekly.",
        "color": "yellow",
    },
}

def get_roadmap(norm):
    weak_dims = [k for k, v in norm.items() if v < 60]
    weak_dims.sort(key=lambda k: norm[k])           
    return [ROADMAP_TIPS[k] for k in weak_dims]

def get_salary_hint(cgpa, dsa_score, projects, internships, communication):
    X = pd.DataFrame([{
        "cgpa":          cgpa,
        "dsa_score":     dsa_score,
        "projects":      projects,
        "internships":   internships,
        "communication": communication,
    }])
    pred = model.predict(X)[0]
    low  = round(max(pred - 2.5, 2.5), 1)
    high = round(pred + 0.5, 1)
    return f"est. ₹{low}–{high} LPA"

def get_company_readiness(score):
    result = {}
    for company, threshold in COMPANY_THRESHOLDS.items():
        if score >= threshold:
            readiness = min(round((score / threshold) * 70, 1), 98)
        else:
            readiness = round((score / threshold) * 60, 1)
        result[company] = readiness
    return result

def predict(cgpa, dsa_score, projects, internships, communication):
    norm= normalise(cgpa, dsa_score, projects, internships, communication)
    score= readiness_score(norm)
    tier= get_tier(score)
    strengths, weaknesses= get_strengths_weaknesses(norm)
    roadmap= get_roadmap(norm)
    salary= get_salary_hint(cgpa, dsa_score, projects, internships, communication)
    company_readiness = get_company_readiness(score)

    return {
        "score": score,
        "tier": tier,
        "salary_hint": salary,
        "strengths": strengths,
        "weaknesses": weaknesses,
        "roadmap": roadmap,
        "dim_scores": {k: round(v, 1) for k, v in norm.items()},
        "company_readiness": company_readiness

    }

