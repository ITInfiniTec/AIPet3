## 2024-05-20 - CI/CD Syntax Error Disables Security Scanning

**Vulnerability:** A fatal YAML syntax error (a duplicate `build:` key) in the `.github/workflows/CCCCP.yml` file was preventing the entire CI/CD pipeline from running.

**Learning:** This is a critical vulnerability because it silently disables all automated checks, including the `security_audit_rust` job. It creates a false sense of security, as developers would assume security scans are running when they are not. A non-functional security tool is as dangerous as having no tool at all.

**Prevention:** Always validate the syntax of CI/CD workflow files after making changes. Implemented a `yamllint` check as part of the local development process to catch these errors before they are committed.
