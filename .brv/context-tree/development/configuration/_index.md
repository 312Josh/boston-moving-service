---
children_hash: 10950a19f2b925731d6f930d6903b0697c16b4b1142f4647352f1bc5e40f9d8e
compression_ratio: 0.8304498269896193
condensation_order: 1
covers: [booking_system_configuration.md, context.md]
covers_token_total: 289
summary_level: d1
token_count: 240
type: summary
---
# Domain: Configuration

Structural overview of the booking system and external integrations.

### Booking System Configuration
Centralized management of the booking infrastructure and external service plumbing.

*   **Key Asset**: `bookingUrl` migrated to `https://cal.com/cogrowai/estimate`.
*   **Architecture**: Configuration is defined in `src/content/site.ts` and consumed by components in `src/App.tsx`.
*   **Implementation**: 
    *   **Components**: Controls `#booking` anchor behavior, iframe integrations, and service/article CTAs.
    *   **Enforcement**: All redirects and iframes must strictly reference the centralized `bookingUrl`.
*   **Verification**: Legacy `cal.com/josh-mellender` links have been removed repository-wide.

### Related Resources
*   **booking_system_configuration.md**: Detailed implementation of the URL migration and CTA updates.
*   **context.md**: Overview of Cal.com integration and site-wide configuration patterns.