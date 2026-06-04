import numpy as np
import pandas as pd

def generate_placement_data(n=2000, seed=42):
    rng = np.random.default_rng(seed)

    cgpa = rng.uniform(5.0, 10.0, n).round(1)
    dsa_score = rng.integers(0, 101, n)
    projects = rng.integers(0, 6, n)
    internships = rng.integers(0, 4, n)
    communication = rng.integers(1, 11, n)

    cgpa_norm = (cgpa - 5) / 5 * 100
    dsa_norm = dsa_score
    proj_norm = np.minimum(projects, 5) / 5 * 100
    intern_norm = np.minimum(internships, 3) / 3 * 100
    comm_norm = (communication - 1) / 9 * 100

    readiness = (
        dsa_norm * 0.30 +
        cgpa_norm * 0.25 +
        proj_norm * 0.20 +
        intern_norm * 0.15 +
        comm_norm * 0.10
    )

    base_salary = (
        readiness * 0.13 +
        cgpa_norm * 0.03 +
        dsa_norm * 0.04 +
        proj_norm * 0.01
    )
    noise = rng.normal(0, 1.5, n)
    salary_lpa = np.clip(base_salary + noise, 2.5, 45.0).round(2)

    df = pd.DataFrame({
        "cgpa": cgpa,
        "dsa_score": dsa_score,
        "projects": projects,
        "internships": internships,
        "communication": communication,
        "salary_lpa": salary_lpa,
    })
    return df

if __name__ == "__main__":
    df = generate_placement_data(n=2000)
    df.to_csv("data/placement_data.csv", index=False)
    print(f"Generated {len(df)} rows → data/placement_data.csv")
    print(df.describe().round(2))