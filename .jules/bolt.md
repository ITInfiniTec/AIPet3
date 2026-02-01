# Bolt's Journal - Performance Optimizations

## 2025-01-24 - [CI Pipeline: Caching & Profile Alignment]
**Learning:** In GitHub Actions for Rust, caching the `target/` directory in a "setup" job that does not perform compilation creates a "false cache hit" (an empty directory). Because `actions/cache` does not overwrite an existing key, this prevents actual build artifacts from being saved by subsequent jobs. Furthermore, failing to align build profiles (e.g., mixing debug and release) causes downstream jobs like `test` or `clippy` to ignore cached artifacts and trigger a full, redundant recompilation of the entire dependency graph.
**Action:** Always ensure `target/` caching is managed by jobs that actually compile code, and standardize on a single build profile (preferably `--release` for artifact reuse) across the entire CI/CD pipeline to minimize wall-clock time.
