# Sentinel Journal - Security Hardening

## 2025-02-05 - GitHub Actions Workflow Hardening
**Vulnerability:** Overly permissive default GitHub Actions permissions and inefficient/manual security auditing.
**Learning:** Default GITHUB_TOKEN permissions should be restricted to `read-all` at the top level. When specialized security actions like `rustsec/audit-check` are used, they require explicit `checks: write` to report findings, which must be combined with `contents: read` as job-level permissions override the top-level restrictive default.
**Prevention:** Always initialize workflows with `permissions: read-all` and use maintained, specialized security actions instead of manual tool installation to ensure up-to-date and performant security checks.
