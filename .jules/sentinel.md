## 2025-02-06 - GitHub Actions Hardening Pattern
**Vulnerability:** Over-permissive default GITHUB_TOKEN permissions.
**Learning:** Setting `permissions: read-all` at the top level and explicitly granting only necessary permissions at the job level (e.g., `checks: write` for audits) is a robust way to implement the principle of least privilege in CI/CD.
**Prevention:** Always include a default `permissions: read-all` block in GitHub Actions workflows and use job-level permissions to narrowly expand them as needed.
