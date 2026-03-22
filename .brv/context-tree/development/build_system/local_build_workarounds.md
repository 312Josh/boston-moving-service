---
title: Local Build Workarounds
tags: []
keywords: []
importance: 50
recency: 1
maturity: draft
createdAt: '2026-03-22T20:32:18.952Z'
updatedAt: '2026-03-22T20:32:18.952Z'
---
## Raw Concept
**Task:**
Fix local Vite build on macOS

**Changes:**
- Implemented env -i workaround for SecItemCopyMatching/vite segfault

**Timestamp:** 2026-03-22

## Narrative
### Structure
Local build process troubleshooting.

### Highlights
Build fails in inherited shells due to macOS security framework issues; use `env -i` to clear environment before building.

### Rules
Use `env -i [build-command]` if Vite segfaults on macOS.
