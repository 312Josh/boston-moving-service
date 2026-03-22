---
title: Booking System Configuration
tags: []
keywords: []
importance: 50
recency: 1
maturity: draft
createdAt: '2026-03-22T20:32:18.946Z'
updatedAt: '2026-03-22T20:32:18.946Z'
---
## Raw Concept
**Task:**
Update site booking plumbing

**Changes:**
- Changed bookingUrl in src/content/site.ts
- Verified #booking anchor and iframe integration
- Updated service/article Call-to-Actions (CTAs)

**Files:**
- src/content/site.ts
- src/App.tsx

**Flow:**
site.ts config -> App.tsx iframe/CTA -> production deploy

**Timestamp:** 2026-03-22

## Narrative
### Structure
Booking URL is centrally managed in src/content/site.ts and consumed by App.tsx components.

### Highlights
Repo-wide grep confirms removal of all legacy cal.com/josh-mellender links.

### Rules
All booking redirects and iframes must use the bookingUrl from src/content/site.ts

## Facts
- **booking_url**: Booking URL changed from https://cal.com/josh-mellender-f4rrsl to https://cal.com/cogrowai/estimate [project]
