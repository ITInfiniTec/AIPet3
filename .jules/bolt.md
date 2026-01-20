## 2024-07-25 - CI/CD Pipeline Parallelization

**Learning:** Performance optimization isn't limited to application code. The CI/CD pipeline itself is a critical system where inefficiencies can waste significant developer time. A sequential pipeline, where independent jobs wait unnecessarily, is a major bottleneck.

**Action:** When profiling for performance, always inspect the CI/CD workflow (`.github/workflows/*`). Look for opportunities to parallelize jobs using the `needs` keyword in GitHub Actions. Jobs that don't depend on each other's outputs (e.g., linting, building, documentation checks) should run concurrently to minimize total execution time.