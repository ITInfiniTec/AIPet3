## 2025-02-01 - GitHub Actions Hardening with rustsec/audit-check
**Vulnerability:** Overly permissive GHA default tokens and insecure/slow audit processes.
**Learning:** When applying `permissions: read-all` at the top level of a workflow, individual jobs using `rustsec/audit-check` must be explicitly granted `checks: write` to function correctly. Additionally, using the official `rustsec/audit-check` action is significantly faster and more secure than manual `cargo install cargo-audit` as it avoids compilation on every run and uses a pre-verified action.
**Prevention:** Always use the Principle of Least Privilege for GHA and prefer official, pre-compiled actions for security scanning.
