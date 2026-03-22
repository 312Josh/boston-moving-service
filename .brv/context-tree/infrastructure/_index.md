---
children_hash: 5dcbb2ce705b1215eb847f6e1cc09fda9d30799e099a92d2c8a11b999cd452ff
compression_ratio: 0.6262295081967213
condensation_order: 2
covers: [deployment/_index.md]
covers_token_total: 305
summary_level: d2
token_count: 191
type: summary
---
# Infrastructure: Deployment Overview

This domain covers the Vite React SPA configuration and deployment status for Vercel.

### Deployment Architecture
*   **Target**: Vercel (SPA mode).
*   **Routing**: `vercel.json` rewrites all paths to `/index.html`.
*   **Pipeline**: Vite build generates `dist/` artifacts for Vercel CLI deployment.
*   **Key Configs**: `vercel.json`, `package.json`, `vite.config.ts`.

### Status & Constraints
*   **Readiness**: Application code, linting, and `tsc` validation are deployment-ready.
*   **Blockers**: Deployment is currently halted by local keychain errors (code -50) and DNS resolution failures to `api.vercel.com`.

**Details**: Reference `vercel_deployment_status.md` for specific configuration rules and error logs.