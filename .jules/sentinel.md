# Sentinel Journal - CritterCraft

## 2025-01-24 - CI/CD Workflow Hardening
**Vulnerability:** Overly permissive default `GITHUB_TOKEN` permissions and manual security auditing in CI/CD.
**Learning:** A key security hardening technique for GitHub Actions is to set a default `permissions: read-all` block at the top level of the workflow to enforce the principle of least privilege. Furthermore, utilizing specialized actions like `rustsec/audit-check` instead of manual `cargo install` reduces the attack surface and improves CI efficiency.
**Prevention:** Always define explicit permissions for GitHub Actions and prefer maintained, specialized security actions over manual tool installation.

## 2025-01-24 - GitHub Actions Permissions Inheritance
**Vulnerability:** Broken CI/CD pipeline due to missing `contents: read` when using job-level permissions.
**Learning:** In GitHub Actions, defining `permissions` at the job level completely overrides any top-level `permissions`. This means if a job needs to check out the repository (using `actions/checkout`), it MUST explicitly include `contents: read` in its own `permissions` block, even if the workflow has a global `read-all` or `contents: read`.
**Prevention:** When using the principle of least privilege with job-level permissions, always ensure `contents: read` is included if the job requires access to the repository code.
