# Blog Refresh Log

Tracks which published blog posts have been refreshed and when.
Read this file **before** picking the next batch so we don't re-refresh
the same posts. Append-only — never overwrite entries.

## Field meanings
- **Slug** — the post's URL slug
- **publishedAt** — original publish date; **do not change** (determines listing order)
- **updatedAt (new)** — what we set during the refresh (flows into schema `dateModified`)
- **Refresh scope** — what was actually changed
- **Session** — date we refreshed it, with a link to the session backup if applicable

---

## 2026-04-23 — Batch 1 (5 posts, staggered)

Goal: first staggered refresh since the Seobot/SEO Agent Blog Developer rollback.
Spread `updatedAt` backwards over three weeks so Google's `dateModified`
signals look like organic refresh cadence rather than a same-day batch.
`publishedAt` untouched on every post — listing order unchanged.

| # | Slug | publishedAt | updatedAt (new) | Refresh scope |
|---|---|---|---|---|
| 1 | `how-to-reduce-lead-response-time-in-auto-sales` | 2025-06-26 | 2026-04-01 | Fixed broken markdown table row; added internal link to `53-dealer-leads-arrive-after-hours-nobody-answers`; `updatedAt` bump |
| 2 | `how-ai-voice-agents-improve-service-retention-and-loyalty-for-dealerships` | 2025-09-21 | 2026-04-08 | Updated stale revenue claim ($9.5M → $19.4M for consistency with Posts 4/5); added cross-link to CSI scores post; `updatedAt` bump |
| 3 | `csi-scores-how-top-dealers-use-ai-to-keep-5-stars-year-round` | 2025-10-31 | 2026-04-15 | Added cross-link to Voice AI scheduling post in call-management section; `updatedAt` bump |
| 4 | `ai-car-dealerships-increase-sales-customer-retention` | 2025-11-21 | 2026-04-20 | Content already well-linked and current; `updatedAt` bump only |
| 5 | `voice-ai-service-scheduling-tools-dealership` | 2025-12-26 | 2026-04-23 | Content already current (title already says 2026, revenue claim already $19.4M); `updatedAt` bump only |

Session: [[2026-04-23-embed-calculator-iframe]] (refresh picked up at the end of the same session).

Rules used for picking this batch:
- Only 2025 `publishedAt` dates (i.e. "last year" per user's request)
- Mix of months (June, Sept, Oct, Nov, Dec) — no bunching
- Mix of product areas (Speed-to-Lead, Voice AI retention, Reputation, Customer Retention, Voice AI scheduling) — avoids stacking topical authority on one cluster
- `updatedAt` dates all in the past, spread over 22 days, freshest one today
