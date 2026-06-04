import json
import time
import joblib
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import cross_val_score, train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
from xgboost import XGBRegressor

DATA_PATH  = "data/placement_data.csv"
FEATURES   = ["cgpa", "dsa_score", "projects", "internships", "communication"]
TARGET     = "salary_lpa"

#Load data
df = pd.read_csv(DATA_PATH)
df = df.rename(columns={
    "coding_skills":       "dsa_score",
    "communication_skills": "communication",
    "package_lpa":         "salary_lpa",
})

df["dsa_score"] = df["dsa_score"] * 10

X = df[FEATURES]
y = df[TARGET]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

models = {
    "Linear Regression": LinearRegression(),
    "Random Forest":     RandomForestRegressor(n_estimators=100, random_state=42),
    "XGBoost":           XGBRegressor(n_estimators=100, learning_rate=0.1,
                                      max_depth=5, random_state=42,
                                      verbosity=0),
}

results  = []
best_r2  = -np.inf
best_model_name = None
best_model_obj  = None

for name, model in models.items():
    Xtr = X_train
    Xte = X_test
    Xall = X

    t0 = time.time()
    model.fit(Xtr, y_train)
    train_time = round(time.time() - t0, 3)

    preds = model.predict(Xte)
    r2    = round(r2_score(y_test, preds), 4)
    mae   = round(mean_absolute_error(y_test, preds), 4)
    rmse  = round(np.sqrt(mean_squared_error(y_test, preds)), 4)

    cv_raw = cross_val_score(model, Xall, y, cv=5, scoring="r2")
    cv_scores = [round(s, 4) for s in cv_raw.tolist()]
    cv_mean   = round(float(np.mean(cv_raw)), 4)
    cv_std    = round(float(np.std(cv_raw)), 4)

    print(f"\n{name}")
    print(f"R²={r2}  MAE={mae}  RMSE={rmse}  CV={cv_mean}±{cv_std}  time={train_time}s")

    results.append({
        "name": name,
        "r2": r2,
        "mae": mae,
        "rmse": rmse,
        "cv_mean": cv_mean,
        "cv_std": cv_std,
        "cv_scores": cv_scores,
        "train_time": train_time,
    })

    if r2 > best_r2:
        best_r2 = r2
        best_model_name = name
        best_model_obj  = model

feature_importance = {}
for name, model in models.items():
    if name == "Linear Regression":
        coefs = np.abs(model.coef_)
        feature_importance[name] = dict(zip(FEATURES, [float(c) for c in coefs / coefs.sum()]))
    else:
       feature_importance[name] = dict(zip(FEATURES, [float(i) for i in model.feature_importances_]))
joblib.dump(best_model_obj, "best_model.pkl")

comparison = {
    "models":             results,
    "feature_importance": feature_importance,
    "cv_scores":          {r["name"]: r["cv_scores"] for r in results},
    "winner":             best_model_name,
}
with open("comparison_results.json", "w") as f:
    json.dump(comparison, f, indent=2)

print(f"\nBest model: {best_model_name} (R²={best_r2})")
print("Saved best_model.pkl, scaler.pkl, comparison_results.json")
