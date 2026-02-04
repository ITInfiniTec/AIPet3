# Bolt's Journal - Critical Learnings Only

## 2025-02-04 - CI Performance: Optimizing Rust Security Audits
**Learning:** Manual installation of CI tools like `cargo-audit` via `cargo install` is a major bottleneck, often taking 2-3 minutes per run. Using specialized GitHub Actions that provide pre-compiled binaries significantly reduces job duration. Additionally, security audits often only require dependency lockfiles and can run in parallel with build jobs, reducing total wall-clock time.
**Action:** Always check for specialized, pre-compiled GitHub Actions for common CI tasks (audit, lint, fmt) and ensure jobs are decoupled from unnecessary build dependencies to maximize parallelism.
