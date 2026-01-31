## 2025-05-15 - [Sequential CI Dependency Bottleneck]
**Learning:** Sequential job dependencies in CI/CD pipelines (e.g., `needs: [build]`) are often unnecessary for security audits or linting that only require source code or lockfiles. These dependencies increase the total "wall-clock" time of the pipeline without providing functional benefits.
**Action:** Always evaluate if a job truly needs the artifacts or side effects of a previous job. Parallelize non-dependent tasks like dependency auditing or documentation checking to minimize developer wait times.
