# Sentinel Journal - CritterCraft

## 2025-01-24 - Harden GitHub Actions permissions
**Vulnerability:** Default GitHub Actions permissions can be overly permissive, potentially allowing an attacker who compromises a job to gain write access to the repository or other sensitive scopes.
**Learning:** Setting a global `permissions: read-all` (or `contents: read`) at the top of the workflow file enforces the principle of least privilege. Jobs that require higher permissions (like `codecov-action` needing to write checks or PR comments) must explicitly declare them.
**Prevention:** Always define restrictive default permissions for GitHub Actions and only grant necessary scopes on a per-job basis.
