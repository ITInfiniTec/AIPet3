# Bolt's Journal - Critical Learnings

## 2025-05-22 - Optimize Rust Security Audits in CI
**Learning:** Manual installation of `cargo-audit` via `cargo install` can take several minutes (2-5 mins) in a clean CI environment because it requires downloading and compiling the tool from source. Using a specialized GitHub Action like `rustsec/audit-check` is significantly faster as it typically utilizes pre-compiled binaries or a dedicated environment.
**Action:** Always prefer specialized, pre-compiled GitHub Actions for common tools over manual installation via package managers in CI pipelines to reduce wall-clock time and save runner resources.

## 2025-05-22 - Workflow Parallelization
**Learning:** Security audit jobs that only require the dependency lockfile (e.g., `Cargo.lock`) should not depend on build jobs. Decoupling them allows the audit to run in parallel with the main build, reducing the total pipeline duration.
**Action:** Review job dependencies in CI workflows to ensure that jobs are only restricted by necessary precursors, maximizing parallel execution opportunities.
