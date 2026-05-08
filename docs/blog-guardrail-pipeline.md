# Blog Guardrail Pipeline

This is the locked workflow for VisQuanta blog generation before CRM/portal
integration. The first goal is to run roughly 10 posts through this process,
review the failure patterns, then wire the stable version into the portal.

## Pipeline

1. Topic intake
   - Assign one primary lane: `service-drive`, `fixed-ops`, `lead-reactivation`, `database-reactivation`, `speed-to-lead`, `reputation-management`, `reviews-csi`, `crm`, `bdc`, `dealership-operations`, `automotive-industry`, or `car-dealerships`.
   - Capture the buyer problem, intended audience, target keyword, and whether a calculator is relevant.

2. Source collection
   - Collect at least 3 usable non-competitor sources.
   - Default freshness window is 24 months.
   - Older sources require an explicit override when they are official benchmarks, regulatory/legal pages, evergreen definitions, historical context, or first-party docs with no newer equivalent.
   - Exception: competitor-signal, operator-POV, and strategic-POV posts may publish with fewer public sources when the audit sets `source_policy` accordingly and the public draft avoids unsupported numeric claims.

3. Source QA
   - Each source must support the topic, not merely contain one matching word.
   - Capture title, URL, domain, publication date, excerpt, source tier, and relevance reason.
   - Run source health checks before draft generation.

4. Draft generation
   - Write for dealership operators, not generic AI readers.
   - Use operational language around service drives, BDCs, CRMs, advisors, rooftops, lead response, database reactivation, reviews, CSI, and revenue leakage.
   - Keep competitor research internal only.

5. Competitor guardrail
   - Research mode may use competitor material for ideas.
   - Publish mode must not include competitor links, competitor names, competitor screenshots, competitor image assets, or competitor citations.
   - Competitor content may be stored in the audit as `source_type: competitor-research-only` when it is only a topic signal.
   - Competitor leakage is a hard fail unless manually approved.

6. Content quality guardrail
   - Hard fail for off-topic drafts, fewer than 3 usable sources, unsupported numeric claims, fabricated sources, no dealership relevance, missing title/meta/body, missing FAQ, or competitor leakage.
   - Warn for generic intros, sales-heavy copy, stale supporting sources, weak internal links, or weak operational takeaways.
   - Score bands: `80+` publishable, `65-79` human review, `<65` rewrite.

7. SEO and AEO guardrail
   - Require primary topic, supporting terms, clean slug, strong title, meta description, one rendered H1, useful H2/H3 structure, direct answer near the top, FAQ, BlogPosting schema, Breadcrumb schema, and FAQ schema when FAQ exists.
   - AEO output should contain direct answers, dealership-specific entity language, structured headings, and source-backed claims.

8. Link guardrail
   - Require at least 2 internal links, with 3-5 preferred.
   - Require at least 2 external source links.
   - Exception: low-source `source_policy` posts may have 0-1 public external links, but numeric/statistical claims must be visibly sourced or explicitly overridden.
   - Competitor links are a hard fail.
   - Broken links, weak affiliate links, and unrelated source links are hard fails.
   - Rewrite generic anchors like `click here`, `read more`, or `source`.
   - Preferred internal clusters: `/service-drive`, `/lead-reactivation`, `/speed-to-lead`, `/reputation-management`, `/auto-master-suite`, `/custom-campaigns`, `/website-widget`, relevant blog posts, and relevant case studies.

9. Calculator guardrail
   - Add a calculator only when it supports the topic.
   - Use one calculator by default.
   - Place it mid-article after enough context, usually after paragraphs 5-8.
   - Hard fail if the marker points to a missing calculator, breaks layout, is unrelated, or replaces substantive content.
   - Topic mapping:
     - `service-drive` and `fixed-ops`: missed-call, service revenue, or capacity calculator.
     - `speed-to-lead` and `bdc`: response-time, BDC cost, or lead-loss calculator.
     - `lead-reactivation`, `database-reactivation`, and `crm`: dormant-lead or CRM reactivation calculator.
     - `reputation-management` and `reviews-csi`: review or reputation impact calculator.
     - `paid-campaigns`: campaign ROI or cost-per-appointment calculator.

10. Publishing and visual guardrail
    - Verify article page, blog listing card, mobile layout, desktop layout, featured image, author/byline, CTAs, related cards, and no text overlap.
    - Featured image is required. Photo-realistic or real dealership imagery is preferred.
    - No black/orange chart-only hero image unless manually approved.
    - No inline body image unless explicitly approved.
    - `hide_hero` may hide the article hero, but it must not hide the blog hub featured card.
    - Test desktop `1440x900`, mobile `390x844`, and optionally tablet `768x1024`.

11. Audit record
    - Every generated post must produce `content/blog-audits/{slug}.audit.json` before publish approval.
    - The audit records sources, guardrail results, manual fixes, overrides, approvals, deployment details, and post-publish checks.
    - No audit record, no publish.

12. Human approval
    - Required stages: source approval, draft approval, SEO/AEO approval, visual approval, final publish approval.
    - Overrides require guardrail name, reason, approver, and timestamp.

13. Publish
    - Publish only when hard guardrails pass, audit exists, approval exists, build passes, and Vercel/GitHub checks pass.

14. Post-publish verification
    - Check live URL returns 200.
    - Confirm canonical URL, JSON-LD, FAQ rendering, blog index listing, sitemap inclusion, featured image, and no competitor leakage.
    - Update the audit record with published URL and published timestamp.

15. Review after 10 posts
    - Review guardrail failures, false positives, source packs, topic lanes, calculator usage, and portal fields.
    - Only then move the workflow into the CRM/portal command center.

## Publish Blockers

- Competitor name, link, screenshot, image asset, or citation in publish output.
- Fewer than 3 usable public sources unless the audit sets an allowed low-source `source_policy`.
- Source older than 24 months without override.
- Unsupported numeric claim.
- Missing FAQ.
- Missing featured image.
- Missing internal links.
- Missing audit record.
- Broken live page, failed build, failed deployment check, or missing post-publish verification.
