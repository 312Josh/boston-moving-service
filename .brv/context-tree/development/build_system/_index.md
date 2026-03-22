---
children_hash: 0b162d08dfc992f5d3f3f310b0f5bb7b7176c4f0429f26f29ef28795aca48fcc
compression_ratio: 0.8171428571428572
condensation_order: 1
covers: [context.md, local_build_workarounds.md]
covers_token_total: 175
summary_level: d1
token_count: 143
type: summary
---
# Domain: development/build_system

Build system configuration and troubleshooting procedures for the local development environment.

### Local Build Workarounds
*   **Critical Fix**: Address Vite segfaults on macOS (SecItemCopyMatching errors) by using the `env -i [build-command]` workaround to clear inherited shell environments.
*   **Context**: Specifically targets macOS security framework conflicts during the local build process.

**See also**:
- `local_build_workarounds.md`: Detailed environment isolation commands.
- `context.md`: General build system overview.