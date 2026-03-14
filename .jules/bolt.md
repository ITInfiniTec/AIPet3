## 2024-03-14 - CI/CD Optimization
**Learning:** Redundant placeholder jobs in CI/CD increase wall-clock time and consume unnecessary resources.
**Action:** Remove the generic 'build' job when specialized jobs (like `build_node`) are present.
