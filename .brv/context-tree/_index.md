---
children_hash: 089ceae8c869e82c0c3d4d1865978a9e4062c43f7b4876ded591eca2e07e826a
compression_ratio: 0.8211829436038515
condensation_order: 3
covers: [development/_index.md, infrastructure/_index.md]
covers_token_total: 727
summary_level: d3
token_count: 597
type: summary
---
# Project Structural Summary (Level d3)

This structural overview synthesizes the development and infrastructure domains for the Boston Moving Service platform, focusing on environment management, centralized configuration, and deployment state.

### Development Domain
The development domain manages the local environment, build systems, and application-level settings.

*   **Build System & Environment Isolation**: 
    *   **Architectural Decision**: To resolve macOS-specific Vite segfaults (SecItemCopyMatching), the system implements environment isolation using `env -i`.
    *   **Key Patterns**: Standardized build-command workarounds are used to clear inherited shell environments during local builds.
    *   **Drill-down**: See `development/build_system/_index.md` and `development/build_system/local_build_workarounds.md`.

*   **Centralized Application Configuration**:
    *   **Key Fact**: The primary integration point is the `bookingUrl`, migrated to `https://cal.com/cogrowai/estimate`.
    *   **Implementation**: Configuration is defined in `src/content/site.ts` and consumed by components in `src/App.tsx`.
    *   **Enforcement**: All redirects, iframes, and `#booking` anchors must use the centralized `bookingUrl`; legacy `cal.com/josh-mellender` links are deprecated.
    *   **Drill-down**: See `development/configuration/_index.md` and `development/configuration/booking_system_configuration.md`.

### Infrastructure Domain
The infrastructure domain tracks the deployment lifecycle and production environment stability.

*   **Vercel Deployment & Service Routing**:
    *   **Production URL**: `https://boston-moving-service-site.vercel.app`
    *   **Deployment ID**: `https://boston-moving-service-site-fq9jpixy4.vercel.app`
    *   **External Integrations**: Core services are routed to the Cal.com estimate endpoint.
    *   **Status**: Active production state as of 2026-03-22.
    *   **Drill-down**: See `infrastructure/deployment/vercel_deployment_status.md`.

### Relationships & Patterns
*   **Configuration to Infrastructure**: The `bookingUrl` defined in `development/configuration` serves as the primary external integration endpoint tracked in `infrastructure/deployment`.
*   **Environment Constraints**: Local development requires specific shell environment clearing (`env -i`) to maintain parity with the stable Vercel production environment.