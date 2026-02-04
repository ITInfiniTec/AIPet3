# Sentinel's Journal

## 2025-01-24 - Workflow Hardening and Optimized Auditing
**Vulnerability:** Excessively permissive default permissions and insecure dependency auditing in GitHub Actions.
**Learning:** Default GitHub Actions permissions are often too broad. Explicitly setting `permissions: read-all` at the top level and narrowing it down per job follows the principle of least privilege. Additionally, manual installation of security tools like `cargo-audit` in CI is inefficient and increases the attack surface compared to using verified, specialized actions like `rustsec/audit-check`.
**Prevention:** Always define a top-level `permissions: read-all` block and use specialized security actions with job-specific permissions.
