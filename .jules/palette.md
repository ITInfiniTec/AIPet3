## 2025-06-16 - Documentation as an Interface
**Learning:** For a repository with many conceptual documents, the documentation IS the primary user interface. Improving its scannability (via Table of Contents) and accessibility (via descriptive link labels) is a significant micro-UX win that makes the project more professional and easier to navigate for developers and researchers.
**Action:** When working on a project with sparse UI code, look for UX opportunities in the documentation to improve the "first-touch" experience for new users.

## 2025-06-16 - GitHub Markdown Slugging
**Learning:** GitHub's internal link generation (slugging) strips emojis. For example, a heading titled "## 🌟 Project Vision" must be linked as "#project-vision" rather than "#-project-vision". Including the emoji in the fragment identifier will result in broken links.
**Action:** Always verify that internal documentation links resolve correctly by following the standard slugging rules of the target platform (lowercase, strip non-alphanumeric except dashes, replace spaces with dashes).
