---
children_hash: d2140b1320df5a9e83f286e977bed2c1600e82d15b032ee3a933c6240f4d1bbd
compression_ratio: 0.7043918918918919
condensation_order: 2
covers: [build_system/_index.md, configuration/_index.md, context.md]
covers_token_total: 592
summary_level: d2
token_count: 417
type: summary
---
# Domain: development

Structural overview of the development environment, build systems, and application configuration.

### Build System
Centralized procedures for local environment management and troubleshooting.
*   **Architectural Decision**: Implementation of environment isolation via `env -i` to resolve macOS-specific Vite segfaults (SecItemCopyMatching).
*   **Key Patterns**: Standardized build-command workarounds to clear inherited shell environments during the local build process.
*   **Resources**: See `build_system/_index.md` for the local build workaround details and general system overview.

### Application Configuration
Management of site-wide settings and external service integrations centered in the `configuration` sub-domain.
*   **Centralized Asset**: The `bookingUrl` is the primary integration point, migrated to `https://cal.com/cogrowai/estimate`.
*   **Flow**: Configuration is defined in `src/content/site.ts` and consumed by components within `src/App.tsx`.
*   **Implementation**: Controls behavior for the `#booking` anchor, iframe integrations, and CTAs across services and articles.
*   **Enforcement**: Strict requirement for all redirects and iframes to use the centralized `bookingUrl`; legacy `cal.com/josh-mellender` links are deprecated and removed.
*   **Resources**: See `configuration/_index.md` for URL migration implementation and Cal.com integration patterns.

### Domain Scope
The development domain encompasses site settings, external integrations, and configuration files, while explicitly excluding deployment infrastructure and core source code architecture. For high-level domain purpose, refer to `context.md`.