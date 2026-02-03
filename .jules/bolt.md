# Bolt's Journal - Critical Learnings

## 2025-05-15 - Optimizing CI/CD for Rust Projects
**Learning:** Manual installation of tools like `cargo-audit` via `cargo install` in CI/CD pipelines is a significant performance bottleneck, often taking 2-3+ minutes to compile from source. Using specialized GitHub Actions that provide pre-compiled binaries (e.g., `rustsec/audit-check`) drastically reduces execution time. Additionally, security audits that only require the lockfile should run in parallel with build jobs to minimize total pipeline duration.
**Action:** Always prefer pre-compiled binary actions over `cargo install` and ensure jobs with no hard dependencies run in parallel.
